import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Welcome from "../components/Welcome/Welcome";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container-fluid">
          <Welcome />
        </main>
      </React.Fragment>
    );
  }
}

export default Home;
