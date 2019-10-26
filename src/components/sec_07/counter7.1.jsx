import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200"
  };

  formatCount() {
    // Object destructuring
    const { count } = this.state;
    const emptyCount = <h1>Zero</h1>;

    return count === 0 ? emptyCount : count;
  }

  render() {
    // Rendering classes dynamically based on the value of a state property

    // Start with defining classes which are always used
    // const classes = "badge m-2 ";

    // then depending on the value property, we want to add another class
    // bc me modify the value of a variable, we have to change from const to let
    // if the value is 0, we want the warning classes, otherwise the primary one
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";

    // assign the classes variable to the span element

    return (
      <React.Fragment>
        <span className={classes}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;

// ToDo 5 Embedding Expressions
