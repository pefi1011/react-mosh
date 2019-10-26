import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"]
  };

  //////////////////////////////////////////////////////
  // GETTING ACCESS TO THE STATE FROM THE METHODS!!
  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  // EXPERIMENTAL SOLUTION: IT MIGHT BREAK IN THE FUTURE
  //////////////////////////////////////////////////////
  /* 
  constructor() {
    super();
    // We can get the return value of the this.handleIncrement.bind(this); which is the new instance of the handleIncrement function where "this" is always bind to the current "Counter" object
    // and set it to our function
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    // "this" is not "undefined" anymore, because -> see binding in the constructor
    console.log("Increment clicked!", this.state.count);
  } */

  // Instead of writing the constructor function and binding the method, we can use arrow functions
  // because arrow functions DO NOT REBIND "THIS", they inherit it!

  handleIncrement = () => {
    // "this" is not "undefined" anymore, because the arrow function does not rebind the "this" keyword
    console.log("Increment clicked!", this.state.count);
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  formatCount() {
    // Object destructuring
    const { count } = this.state;
    const emptyCount = <h1>Zero</h1>;

    return count === 0 ? emptyCount : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
