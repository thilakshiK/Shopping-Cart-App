import React, { Component } from "react";

class Counter extends Component {
  //counter  component

  state = {
    count: 0
  }; //includes data needed by Counter component

  styles = {
    fontSize: 30,
    fontWeight: "bald"
  };

  render() {
    return (
      //used instead of <div></div>
      <React.Fragment>
        <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>

        <button className="btn btn-dark btn-sm m-2">Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state; //object destructuring
    return count == 0 ? "zero" : count;
  }
}

export default Counter;
