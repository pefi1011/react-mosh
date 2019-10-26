import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200"
  };

  styles = {
    fontSize: "100px",
    fontWeight: "bold"
  };

  formatCount() {
    // Object destructuring
    const { count } = this.state;

    // JSX expression -> compiles to React Element -> which is a plain JS object
    // JSX expressions are like a normal JS objects
    // you can pass them to function
    // you can return them from a function
    // you can use them as a value for a variable
    const emptyCount = <h1>Zero</h1>;

    return count === 0 ? emptyCount : count;
  }

  render() {
    // using value expression -> something that produces a value
    // something in between the curly brackets {}
    // e.g. this.formatCount() metoda se poziva unutar {}
    return (
      <React.Fragment>
        <img src={this.state.imageUrl} alt="" />
        <span
          style={{ fontSize: "100px", fontWeight: "bold" }} // INLINE STYLES: Writing the js object directly within the value expression, i.e. no prior member definition like in 6.1
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
