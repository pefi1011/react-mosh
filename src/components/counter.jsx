import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"]
  };

  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          // Instead of writing a wrapper function (doHandleIncrement)
          // we can use an inline function
          // i.e. we pass the arrow function (the previous wrapper function (doHandleIncrement) )
          // We are still passing the function reference. The reference is though to the arrow function which we use as the wrapper

          // When rendering a list of products in a shopping cart,
          // in our map method, we have access to a product object
          // so you can the product which is being currently rendered as tha argument
          onClick={() => this.handleIncrement()}
          // IN A NUTSHELL
          // whenever you need to pass an argument to your event handler,
          // simply wrapper the event handler with an arrow function
          // and in the body of the arrow function call the event handler and pass the argument
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
