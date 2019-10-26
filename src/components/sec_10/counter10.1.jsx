import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };

  // React Elements (e.g. <button> ) have properties/attributes which are based on the standard DOM events!
  // <button onClick >Increment</button>
  // <button onDoubleClick >Increment</button>
  // <button onKeyDown >Increment</button>
  // <button onKeyPress >Increment</button>
  // etc
  //

  // NOTE THAT WE ARE NOT CALLING THE METHOD
  // <button  onClick={this.handleIncrement()}  className="btn btn-secondary btn-sm">Increment</button>
  // we are simply passing the method reference
  // <button  onClick={this.handleIncrement}  className="btn btn-secondary btn-sm">Increment</button>
  //  this is different from handling events in vanilla JS
  // in vanilla JS we call the target function when setting the onclick attribute
  // Note in vanilla JS its onclick and in react its onClick

  // <button  onClick={this.handleIncrement}  className="btn btn-secondary btn-sm">Increment</button>

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
    console.log("Increment clicked!");
  }
}

export default Counter;
