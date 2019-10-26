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
    // The method tells to React that the state of this component will change!
    this.setState({ count: this.state.count + 1 });

    // 1. React schedules an async call to the render() method
    // 1.1. i.e. sometimes in the future, the render() method will be called. We do not know when!
    //      we just know it will happen in the future! It can happen 5ms later, 10ms later, we do not know°
    // 1.2. render() method will return a new React Element!
    // 1.3. Our React element, in this example, has two elements: span and button
    // 1.4. A new virtual DOM is created with the newly rendered element
    // 1.5. React will compare the new virtual DOM to the old virtual DOM to figure out what elements in the virtual DOM are modified
    // 1.5.1. In our example, that's only the "span" element, because that's where we used the "count" property of the state object
    // 1.6. React will reach out to the real DOM and updated the corresponding "span", so it matches the one we have in the virtual DOM
    //    -> NOWHERE ELSE the real DOM is updated! The "button" element is not updated! Only the "span" element is updated!
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
