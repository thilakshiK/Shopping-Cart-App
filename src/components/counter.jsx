import React, { Component } from "react";

class Counter extends Component {
  //counter  component

  styles = {
    fontSize: 20,
    fontWeight: "bald",
    position: "relative"
  };

  //arrow functions have access to "this" keyword

  render() {
    return (
      //used instead of <div></div>
      <div>
        <span style={this.styles} className="badge badge-primary m-3">
          {this.formatCount()}
        </span>

        <button
          onClick={() => this.props.increment(this.props.counter)}
          className="btn btn-dark btn-lg m-2"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.delete(this.props.counter.id)}
          className="btn btn-danger btn-lg m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter; //object destructuring
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
