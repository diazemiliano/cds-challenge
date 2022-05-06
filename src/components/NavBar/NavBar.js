import React from "react";
import NavBarTemplate from "./NavBarTemplate";

class NavBar extends React.Component {
  render() {
    // Calls the function component to render the template with current context of "this"
    return <NavBarTemplate />;
  }
}

export default NavBar;
