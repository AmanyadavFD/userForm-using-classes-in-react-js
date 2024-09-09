import React from "react";

export default class ComponentDidMount extends React.Component {
  state = {
    character: {},
  };

  /**
   * Goal: get the first character from the Star Wars
   * API and display the name on the screen
   */
  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://swapi.dev/api/people/1")
      .then((res) => res.json())
      .then((data) => this.setState({ character: data }));
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>Lifecycle Methods : componentDidMount</h1>
        <p>{this.state.character.name}</p>
      </div>
    );
  }
}
