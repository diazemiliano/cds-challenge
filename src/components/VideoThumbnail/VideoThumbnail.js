import React from "react";
import * as PropTypes from "prop-types";
import VideoThumbnailVerticalTemplate from "./VideoThumbnailVerticalTemplate";
import VideoThumbnailHorizontalTemplate from "./VideoThumbnailHorizontalTemplate";

// import styles from "./VideoThumbnail.module.scss";

class VideoThumbnail extends React.Component {
  formatDate = (date) => {
    const event = new Date(date);
    const options = {
      weekday: "short",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
    };

    return event.toLocaleDateString(undefined, options);
  };

  watchVideo = () => {
    this.props.watchVideo(this.props.video.id.videoId);
  };

  render() {
    return this.props.horizontal
      ? VideoThumbnailHorizontalTemplate.call(this)
      : VideoThumbnailVerticalTemplate.call(this);
  }
}

VideoThumbnail.propTypes = { video: PropTypes.any, horizontal: PropTypes.bool };
VideoThumbnail.defaultProps = { horizontal: false };

export default VideoThumbnail;
