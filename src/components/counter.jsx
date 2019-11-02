import React, { Component } from "react";

class Counter extends Component {
  // WE MODIFY THE COUNTER COMPONENT TO "CONTROLLED COMPONENT"
  // A controlled component does not have own state
  // It gets all the data from the parent via props
  // and it raises events whenever the data has to be changed

  // WE DELETED THE handleIncrement method because
  // this method was modifying the state
  // because we turned the Counter into a controlled component
  // modifying state should be done from the parent
  // whenever the controlled component sends an event
  /*handleIncrement = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };
*/
  render() {
    console.log("Counter - Rendered");

    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
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
    const { value } = this.props.counter;
    const emptyCount = <p>Zero</p>;

    return value === 0 ? emptyCount : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
