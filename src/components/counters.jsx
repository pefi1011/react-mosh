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

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
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
