import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200"
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    // Object destructuring
    const { count } = this.state;
    const emptyCount = <h1>Zero</h1>;

    return count === 0 ? emptyCount : count;
  }

  // We extracted the logic for determining the classes into a method (ctrl + shit + r)
  // then we use this method as value expression on the span element
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
