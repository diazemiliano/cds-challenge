import React from "react";
import * as PropTypes from "prop-types";
import VideoThumbnailVerticalTemplate from "./VideoThumbnailVerticalTemplate";
import VideoThumbnailHorizontalTemplate from "./VideoThumbnailHorizontalTemplate";

// import styles from "./VideoThumbnail.module.scss";

class VideoThumbnail extends React.Component {
  render() {
    return this.props.horizontal
      ? VideoThumbnailHorizontalTemplate.call(this)
      : VideoThumbnailVerticalTemplate.call(this);
  }
}

VideoThumbnail.propTypes = {
  video: PropTypes.any,
  horizontal: PropTypes.bool,
  actionButtonLabel: PropTypes.string,
};
VideoThumbnail.defaultProps = {
  horizontal: false,
  actionButtonLabel: "Related",
};

export default VideoThumbnail;
