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

  constructor(props) {
    super(props);
    console.log("App - Constructor");

    // we cannot call setState method in here
    // Because the setState method can be only called when the component is mounted and placed into the DOM
    // and the constructor is the first method being called in the mount phase
    //this.setState({ test: 2 });
    // The error is: Can't call setState on a component that is not yet mounted.
    // This is a no-op, but it might indicate a bug in your application.
    // Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the App component.

    // In here you set the state directly!
    this.state.test = 2;

    // THE COMMON USE CASE IS TO SET THE STATE
    // BASED ON THE PROPS WHICH WE GET FROM THE OUTSIDE
    //this.state = this.props.something;

    // NOTE THAT YOU DO NOT HAVE ACCESS TO PROPS UNLESS THE CONSTRUCTOR METHOD HAS IT AS THE PARAM
    // AND THE PROPS IS PASSED AS THE ARGUMENT TO THE SUPER()
    // OTHERWISE THE PROPS IS UNDEFINED
    console.log("props: ", props);
    this.state.test2 = this.props.something;

    // The constructor is called once and it is the right place to initialize the properties in this class, i.e. init state values
  }

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
        {/*   <NavBar totalCounters={this.state.counters.length} />*/}
        {/*  Filters the counters where the counter value is greater than zero */}
        {/*  and then gives back the length of that filtered array  */}
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
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
