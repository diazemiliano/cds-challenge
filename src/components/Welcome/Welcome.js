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

  renderVideos = () => {
    const videos = this.props.videos.map((video) => {
      return <VideoThumbnail key={video.id} video={video} />;
    });

    return (
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {videos}
      </div>
    );
  };

  renderEmpty = () => (
    <div className="row text-center">
      <h6> No videos Found.</h6>
    </div>
  );

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
