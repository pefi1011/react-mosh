import React, { Component } from "react";
import Counter from "./counter";

// PROPS: data which is given to the component -> INPUT TO THE COMPONENT
//    -> Props is read-only: we cannot change the input of the component within a component
// STATE: data which is local/private to a component
//    -> Other components cannot access that state! It's completely internal to that component
//
//
//
//
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    console.log("counter: ", counter);
    // Like before we do not update the state directly
    // we crate a new counters array and give it to the setState method
    // and let React deal with updating the state

    // using the spread operator to clone the array
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter); // getting the index by object itself
    counters[index] = { ...counter };
    counters[index].value++;

    console.log("counter incremented: ", this.state.counters[index]);

    this.setState({ counters });
  };

  handleDelete = counterId => {
    // get a new array without the counter with the given id
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );

    this.setState({ counters });
  };

  handleReset = () => {
    console.log("Handle reset");

    // make a new array out of the counters array
    // set the value of counter to 0 and add it to the "mapped" array
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });

    this.setState({ counters });

    // NOTHING HAPPENS BECAUSE WE DO NO HAVE THE SINGLE SOURCE OF TRUTH!!!
    // Each of our components (4 instances of Counter) have their own local state
    // Our counters component (array of counter) and each counter component has a value
    // This value is currently disconnected from the value property of each counter object which we have in the array
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            onDelete={this.handleDelete} // PASSING THE REFERENCE (TO THE METHOD) TO THE CHILD COMPONENT VIA PROPS
            onIncrement={this.handleIncrement}
            key={counter.id}
            counter={counter}
            selected={true}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
