import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"]
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

  handleIncrement = () => {
    // Instead use the "setState" method which we inherited from the Component class
    // This method tells React that we are updating the state, then React can figure out
    // what part of the state has changed and based on that it will bring the real DOM in sync with the virtual DOM!

    // The object passed in setState method will
    // merge if new properties are given
    // override the values of existing properties
    this.setState({ count: this.state.count + 1 });

    // This is different from Angular because in Angular
    // changes are automatically detected. The reason:
    // all browser events are monkey patched, so whenever a button is clicked, or something written in an input field,
    // Angular is notified, it runs its changed detection algorithm to figure out the change and then it updates the view

    // In React we have explicitly to tell what changed!!!
  };

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
