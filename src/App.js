import React, { Component } from "react";
import { CardList } from "../src/components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css"
import logo from "./logo.svg";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users =>
        this.setState({
          monsters: users
        })
      );
  }
  changeText = () => {
    this.setState = {
      string: "Hello"
    };
  };
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1 className="h1">Monster Rolodex</h1>
        <SearchBox
          placeholder={"search monster"}
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
