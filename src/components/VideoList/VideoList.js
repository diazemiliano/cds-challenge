import React from "react";
import { connect } from "react-redux";
import { withNavigation } from "../../hocs";
import VideoThumbnail from "../VideoThumbnail/VideoThumbnail";
import { QUERY_STATUS_LOADING } from "../../enums/QueryStatus";
import { times as _times } from "lodash";
import VideoThumbnailHorizontalPlaceholder from "../VideoThumbnail/VideoThumbnailHorizontalPlaceholder";

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

  renderLoading = () => {
    return _times(3, (i) => <VideoThumbnailHorizontalPlaceholder key={i} />);
  };

  renderEmpty = () => (
    <div className="row text-center">
      <h6> No videos Found.</h6>
    </div>
  );

  handleRender = () => {
    if (this.props.queryStatus === QUERY_STATUS_LOADING) {
      return this.renderLoading();
    }

    if (this.props.videos.length) {
      return this.renderVideos();
    }

    return this.renderEmpty();

  };

  render() {
    return <div className="mt-3">{this.handleRender()}</div>;
  }
}

const mapStateToProps = ({ searchedVideos }) => {
  const { currentVideo, videos, queryStatus } = searchedVideos;

  return {
    queryStatus,
    currentVideo,
    videos
  };
};

export default connect(mapStateToProps)(withNavigation(VideoList));
