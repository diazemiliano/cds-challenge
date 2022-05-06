import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { FeaturedVideo } from "../components/FeaturedVideo/FeaturedVideo";
import VideoList from "../components/VideoList/VideoList";

class Search extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-sm-8">
                <FeaturedVideo />
              </div>
              <div className="col-sm-4">
                <VideoList />
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Search;
