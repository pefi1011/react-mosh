import React from "react";

// Using Object Destructuring method
// to destruct the props argument
// so that we do not have to write props.totalCounters within the SFC
const NavBar = ({ totalCounters }) => {
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
