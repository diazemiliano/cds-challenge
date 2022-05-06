import React from "react";
import WelcomeTemplate from "./WelcomeTemplate";
import { searchPopularVideos } from "./popularVideosReducer";
import { connect } from "react-redux";
import VideoThumbnail from "../VideoThumbnail/VideoThumbnail";

class Welcome extends React.Component {
  componentDidMount() {
    this.props.searchPopularVideos();
  }

  startSearching = (event) => {
    const startSearchingEvent = new Event("startSearching");

    window.dispatchEvent(startSearchingEvent);
  };

  renderVideos = () =>
    this.props.videos.map((video) => {
      return <VideoThumbnail key={video.id} video={video} />;
    });

  render() {
    return WelcomeTemplate.call(this);
  }
}

const mapStateToProps = ({ popularVideos }) => ({
  videos: popularVideos,
});

const mapDispatchToProps = { searchPopularVideos };
//
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
