import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };

  // we wil use the map method of ES6 to render the list
  // the argument for the map function is the arrow function
  // tag goes to - we get each tag and map it to a list item
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}> {tag}</li> // this id should only be unique within this list
            // it does not have to be unique within the same app or the whole page
            // you could have multiple lists and each item in the given list should have a key which is unique only in that list
          ))}
        </ul>
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
