import React, { Component } from "react";

class Counter extends Component {
  state = {
    // THIS CODE IS EXECUTED EXACTLY ONCE
    // WHEN THE INSTANCE OF THE COMPONENT IS CREATED
    // SO WHEN THE PAGE LOAD, WE SEE THE VALUE
    // BUT WHEN WE CLICK ON THE RESET BUTTON
    // THIS STATE HERE IS NOT UPDATED
    value: this.props.counter.value,
    tags: ["tag1", "tag2", "tag3"]
  };

  handleIncrement = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
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
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
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
