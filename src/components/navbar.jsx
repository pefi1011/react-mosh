import React, { Component } from "react";

// We define a constant and set it to an arrow function
const NavBar = () => {
  // in the body of this function, we return a react element
  // Instead of having a class that extends Compnent Class with a render method
  // we define a function that returns a react component

  // nothing wrong with using Class to define a component, but some devs prefer to use
  // functions when they are dealing with simple stateless components

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {this.props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

/*
class NavBar extends Component {
  // Our NavBar component has only the render method
  // we don't have any event handlers
  // we don't have any helper methods to calculate a value
  // we don't have any state -> we get all the data via props
  // the only thing we have is the single render method
  // ===> in such case we can convert this component into STATELESS FUNCTIONAL COMPONENT
  // i.e. instead of using a Class to define this component, we can use a function!

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}*/

export default NavBar;
