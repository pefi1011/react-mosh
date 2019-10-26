import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200"
  };

  formatCount() {
    // Object destructuring
    const { count } = this.state;

    // JSX expressions are like a normal JS objects
    // you can pass them to function
    // you can return them from a function
    // you can use them as a value for a variable
    const emptyCount = <h1>Zero</h1>;

    return count === 0 ? emptyCount : count;
  }

  render() {
    return (
      <React.Fragment>
        <img src={this.state.imageUrl} alt="" />
        <span
          style={{ fontSize: "100px", fontWeight: "bold" }}
          className="badge badge-primary m-2"
        >
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;

// ToDo 5 Embedding Expressions
