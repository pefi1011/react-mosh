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

  componentDidMount() {
    console.log("Counter - Mounted");
  }

  componentWillUnmount() {
    // CALLED THE MOMENT JUST BEFORE A COMPONENT IS REMOVED FROM THE DOM
    console.log("Counter - Unmount");

    // THIS GIVES US AN OPPORTUNITY TO PERFORM CLEAN UPS
  }

  componentDidUpdate(prevProps, prevState) {
    // This method is called after the method is updated
    // which means that we have a new state or new props
    // we can compare
    // new state vs old state
    // new props vs props
    // and if there is a change, we can make a new AJAX call
    // to the server to get the data
    // if there are no changes, perhaps we do not want to make an additional AJAX call

    if (prevProps.counter.value !== this.props.counter.value) {
      // AJAX cal and get new data from the server
      // OPTIMIZATION TECHNIQUE BECAUSE WE ARE ABLE TO
      // DECIDE WHETHER  WE SHOULD AN AJAX CALL TO GET NEW DATA
      // BASED ON THE CHANGES IN THE PROPS AND STATE OBJECTS
    }
    console.log("Counter - Update");
  }

  render() {
    console.log("Counter - Rendered");

    return (
      <div className="row">
        <div className="col-md-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div Name="col-md-auto">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            X
          </button>
        </div>
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
