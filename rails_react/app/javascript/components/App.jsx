import React, { Component } from "react";

import "react-bulma-components/dist/react-bulma-components.min.css";
import {
  Button,

} from "react-bulma-components";

export default class App extends Component {
  render() {
    return (
      <>
        <Button color="primary">My Bulma button</Button>
      </>
    );
  }
}
