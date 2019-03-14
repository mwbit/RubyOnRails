import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello Rails! I'm {this.props.name}</h1>
      </div>
    );
  }
}
