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

  // WE WANT TO PASS THE REFERENCE TO THIS FUNCTION USING PROPS TO OUR CHILD COMPONENT, i.e. COUNTER
  handleDelete = counterId => {
    // In React we do not update the state directly,
    // i.e. we are not going to delete a counter from the array
    // Instead, we are going to create a new array without the given counter
    // and then call the setState() method of the component and let React update the state

    // use the filter method to get all the counters, except the one with the given id
    const newCounters = this.state.counters.filter(
      counter => counter.id !== counterId
    );

    // We override the counters property with the new array
    this.setState({ counters: newCounters });

    /* 
    // APPROACH B
    const counters = this.state.counters.filter(
      counter => counter.id !== counterId
    );
    // When the property and the new value have the same name
    // i.e. in this example counters
    // we can write instead of {counters: counters}
    // only {counters}
    this.setState({ counters });
    */
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            id={counter.id}
            onDelete={this.handleDelete} // PASSING THE REFERENCE (TO THE METHOD) TO THE CHILD COMPONENT VIA PROPS
            key={counter.id}
            value={counter.value}
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
