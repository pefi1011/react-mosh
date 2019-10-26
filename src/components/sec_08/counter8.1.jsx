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
            <li>{tag}</li> // THIS causes the error "Each child in a list should have a unique "key" prop."
            // The problem is that React cannot uniquely identify item in the list
            // If the state of the react element in the virtual DOM changes, React should figure out
            // what element changed and where in the real DOM he(react) should apply the changes in order to keep
            // the virtual DOM in the sync with the real DOM
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
