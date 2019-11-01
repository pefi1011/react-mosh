import React, { Component } from "react";

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
}

export default NavBar;
