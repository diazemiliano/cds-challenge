import React from "react";
import { connect } from "react-redux";
import { withNavigation } from "../../hocs";
import VideoThumbnail from "../VideoThumbnail/VideoThumbnail";

// import styles from "./VideoList.module.scss";

class VideoList extends React.Component {
  renderVideos = () =>
    this.props.videos.map((video) => {
      return <VideoThumbnail key={video.id} video={video} horizontal={true} />;
    });

  render() {
    return <div className="container-fluid">{this.renderVideos()}</div>;
  }
}

const mapStateToProps = ({ searchedVideos }) => {
  const { videos } = searchedVideos;

  return {
    videos,
  };
};

export default connect(mapStateToProps)(withNavigation(VideoList));
