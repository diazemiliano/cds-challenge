import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Welcome from "../components/Welcome/Welcome";
import { withNavigation } from "../hocs";
import { WATCH_VIDEO_BUTTON_CLICKED_EVENT } from "../enums/CustomEventNames";

class Home extends React.Component {
  watchVideo = (event) => {
    const { video } = event.detail;
    const searchTerm = video.snippet?.tags?.length
      ? video.snippet.tags.join(", ")
      : video.snippet.title;
    const q = new URLSearchParams({
      q: searchTerm,
    }).toString();

    this.props.navigate(`/search?${q}`);
  };

  componentDidMount() {
    window.addEventListener(WATCH_VIDEO_BUTTON_CLICKED_EVENT, this.watchVideo);
  }

  componentWillUnmount() {
    window.removeEventListener(
      WATCH_VIDEO_BUTTON_CLICKED_EVENT,
      this.watchVideo
    );
  }

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

export default withNavigation(Home);
