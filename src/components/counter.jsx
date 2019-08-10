import React, { Component } from "react";

class Counter extends Component {
  //counter  component

  //state = {  }
  render() {
    return (
      //used instead of <div></div>
      <React.Fragment>
        <h1>Hello World</h1>
        <button>Increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;
