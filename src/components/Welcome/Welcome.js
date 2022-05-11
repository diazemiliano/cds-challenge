import React from "react";
import WelcomeTemplate from "./WelcomeTemplate";
import { searchPopularVideos } from "./popularVideosReducer";
import { connect } from "react-redux";
import VideoThumbnail from "../VideoThumbnail/VideoThumbnail";
import { withNavigation } from "../../hocs";
import { QUERY_STATUS_LOADING } from "../../enums/QueryStatus";

class Welcome extends React.Component {
  componentDidMount() {
    this.handleFetchPopularVideos();
  }

  startSearching = (event) => {
    const startSearchingEvent = new Event("startSearching");

    window.dispatchEvent(startSearchingEvent);
  };

  handleFetchPopularVideos = async () => {
    this.props.searchPopularVideos().catch(e => {
      this.props.navigate(`/error`, {
        state: { error: e }
      });
    });

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

  renderLoading = () => (
    <div className="row text-center">
      <h6> LOADING... </h6>
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
    return WelcomeTemplate.call(this);
  }
}

const mapStateToProps = ({ popularVideos }) => {
  const { videos, queryStatus } = popularVideos;

  return {
    queryStatus,
    videos
  };
};

const mapDispatchToProps = { searchPopularVideos };
//
export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Welcome));
