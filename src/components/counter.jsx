import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ["tag1", "tag2", "tag3"]
  };

  handleIncrement = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    // Every React component has a property "props"
    // which is a plain JS object that includes all attributes
    // set in the "consumer" component, i.e. in this case the "Counters" component

    // "key" attribute is not part of "props" objects because its a special attribute
    console.log("props", this.props);

    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  formatCount() {
    // Object destructuring
    const { value } = this.state;
    const emptyCount = <p>Zero</p>;

    return value === 0 ? emptyCount : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
