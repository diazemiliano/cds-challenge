import React from "react";
import { connect } from "react-redux";
import { withNavigation } from "../../hocs";
import VideoThumbnail from "../VideoThumbnail/VideoThumbnail";

// import styles from "./VideoList.module.scss";

class VideoList extends React.Component {
  renderVideos = () => {
    let filterCurrentVideo = this.props.videos.filter(
      (video) => video.id !== this.props.currentVideo.id
    );

    filterCurrentVideo = filterCurrentVideo.slice(0, 3);

    return filterCurrentVideo.map((video) => {
      return (
        <VideoThumbnail
          key={video.id}
          video={video}
          horizontal={true}
          actionButtonLabel="Select"
        />
      );
    });
  };

  render() {
    return <div className="mt-3">{this.renderVideos()}</div>;
  }
}

const mapStateToProps = ({ searchedVideos }) => {
  const { currentVideo, videos } = searchedVideos;

  return {
    currentVideo,
    videos,
  };
};

export default connect(mapStateToProps)(withNavigation(VideoList));
