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
            key={counter.id}
            // instead of passing value and id
            // value={counter.value}
            // id={counter.id}
            // we can pass the whole counter object
            counter={counter}
            selected={true} // its the same as just putting selected
          >
            {/** THIS VALUE IS PASSED AS CHILDREN PROPERTY OF PROPS OBJECT */}
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
