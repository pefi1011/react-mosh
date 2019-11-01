import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
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

    // using the spread operator to clone the array
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter); // getting the index by object itself
    counters[index] = { ...counter }; // using the spread operator to clone the argument, i.e. the counter object
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
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    console.log("counters: ", counters);

    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters
            // these are the 3 events raised by this component and their handlers
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
            // The counter component is now a controlled component
            // because it does not have any state
            // it simply receives the data and methods to modify the data via props
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
