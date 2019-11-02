import React from "react";

// Using Object Destructuring method
// to destruct the props argument
// so that we do not have to write props.totalCounters within the SFC
const NavBar = ({ totalCounters }) => {
  // YOU CANNOT USE LIFE CYCLE HOOKS IN STATELESS FUNCTIONAL COMPONENTS
  // BECAUSE IN SFC WE HAVE ONLY A SINGLE FUNCTION (in this case the NavBar function) THAT RETURNS THE OUTPUT OF THIS COMPONENT
  // IF YOU NEED TO USE LIFE CYCLE HOOKS, YOU NEED TO USE CLASSES
  console.log("NavBar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="localhost:3000">
        Navbar
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
