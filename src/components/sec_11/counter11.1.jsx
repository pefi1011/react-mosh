import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    imageUrl: "https://picsum.photos/200",
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

  handleIncrement() {
    console.log("Increment clicked!", this.state.count); // THIS CAUSES THE ERROR
    // Uncaught TypeError: Cannot read property 'state' of undefined
    // it means that within this method, "this" is undefined because we do not have access to the state property

    // depending on how function is called, "this" can reference to different functions
    // if a function is called as a method, i.e. obj.method() -> "this" returns always the reference to the obj
    // if the function is called as standalone function, i.e. function() -> "this" returns by the default the reference to the window object
    //  -> but if the 'strict' mode is enabled, "this" will returned undefined
    //   -> that's the reason why in this event handler we do not have the access to "this"
    //      -> solution is the "bind" method! See counter11.2.jsx for the implementation
  }
}

export default Counter;
