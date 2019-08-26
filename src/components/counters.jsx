import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [{ id: 1, value: 5 }, { id: 2, value: 0 }, { id: 3, value: 0 }]
  };

  handleDelete = arg => {
    const counters = this.state.counters.filter(c => c.id !== arg);
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    //counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters: counters });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleReset} className="btn btn-primary m-2">
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            delete={this.handleDelete}
            increment={this.handleIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
