import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  componentDidMount() {
    // This method is called after our component is rendered into the DOM
    // It's the perfect place to make AJAX calls to get data from the server
    // Ajax Call
    // and then set state the state with that data
    console.log("Counters - Mounted");

    // WHEN A COMPONENT IS MOUNTED, THAT MEANS THAT THE COMPONENT IS IN THE DOM
  }
  render() {
    console.log("Counters - Rendered");

    // In the render method, just before the return method
    // we use the object destructuring method to destruct props
    // so that we can pick the properties of the props object we want
    const {
      onReset,
      onDelete,
      onIncrement,
      onDecrement,
      counters
    } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>

        <div className="container">
          {counters.map(counter => (
            <Counter
              // The counter component is rasing the onDelete event
              // and we are bubbling that event to the parent
              // so we are not handling this event in the component, we are bubbling it up
              // to the parent of this component
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              key={counter.id}
              counter={counter}
              selected={true}
            >
              <h4>Counter #{counter.id}</h4>
            </Counter>
          ))}
        </div>
      </div>
    );
  }
}

export default Counters;
