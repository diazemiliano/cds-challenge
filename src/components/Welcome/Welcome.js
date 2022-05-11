import React from "react";
import WelcomeTemplate from "./WelcomeTemplate";
import { searchPopularVideos } from "./popularVideosSlice";
import { connect } from "react-redux";
import VideoThumbnail from "../VideoThumbnail/VideoThumbnail";
import { withNavigation } from "../../hocs";
import { QUERY_STATUS_ERROR, QUERY_STATUS_LOADING } from "../../enums/QueryStatus";
import { times as _times } from "lodash";
import VideoThumbnailVerticalPlaceholder from "../VideoThumbnail/VideoThumbnailVerticalPlaceholder";
import { SEARCH_FORM_SUBMIT_EVENT } from "../../enums/CustomEventNames";

class Welcome extends React.Component {
  componentDidMount() {
    this.handleFetchPopularVideos();

    window.addEventListener(SEARCH_FORM_SUBMIT_EVENT, this.handleSearchFormSubmit);
  }

  componentWillUnmount() {
    window.removeEventListener(SEARCH_FORM_SUBMIT_EVENT, this.handleSearchFormSubmit);
  }

  handleSearchFormSubmit = (event) => {
    const { searchTerm } = event.detail;
    const q = new URLSearchParams({
      q: searchTerm
    }).toString();

    this.props.navigate(`/search?${q}`);
  };

  handleFetchPopularVideos = async () => {
    this.props.searchPopularVideos();
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

  renderError = () => (
    <div className="row text-center">
      <div className="alert alert-danger " role="alert">
        Whoops! Something went wrong.
      </div>
    </div>
  );

  renderLoading = () => {
    return <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {_times(6, (i) => <VideoThumbnailVerticalPlaceholder key={i} />)}
    </div>;
  };


  handleRender = () => {
    if (this.props.queryStatus === QUERY_STATUS_LOADING) {
      return this.renderLoading();
    }

    if (this.props.videos.length) {
      return this.renderVideos();
    }

    if (this.props.queryStatus === QUERY_STATUS_ERROR) {
      return this.renderError();
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
