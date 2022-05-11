import React from "react";
import NavBar from "../components/NavBar/NavBar";
import FeaturedVideo from "../components/FeaturedVideo/FeaturedVideo";
import VideoList from "../components/VideoList/VideoList";
import { connect } from "react-redux";
import { setCurrentVideo } from "../components/SearchForm/searchSlice";
import {
  VIDEO_DETAILS_BUTTON_CLICKED_EVENT,
  WATCH_VIDEO_BUTTON_CLICKED_EVENT,
} from "../enums/CustomEventNames";
import { withLocalStorage, withNavigation } from "../hocs";
import FeaturedVideoDetail from "../components/FeaturedVideo/FeaturedVideoDetail";
import { LOCAL_STORAGE_KEY_WATCHED_COUNT } from "../enums/LocalStorageKeys";

class Search extends React.Component {
  state = {
    videosWatched: 0,
  };

  selectVideo = (event) => {
    const { video } = event.detail;
    this.props.setCurrentVideo(video);
  };

  navigateToVideoDetails = (event) => {
    const { video } = event.detail;
    this.props.navigate(`/video/${video.id}`);
  };

  clearCount = () => {
    this.setState({ videosWatched: 0 });
    this.props.localStorage.setValue(
      LOCAL_STORAGE_KEY_WATCHED_COUNT,
      this.state.videosWatched
    );
  };

  increaseCount = () => {
    this.setState({
      videosWatched: this.state.videosWatched + 1,
    });

    this.props.localStorage.setValue(
      LOCAL_STORAGE_KEY_WATCHED_COUNT,
      this.state.videosWatched
    );
  };

  onVideoPlaying = () => {
    this.increaseCount();
  };

  componentDidMount() {
    const videosWatched = Number(
      this.props.localStorage.getValue(LOCAL_STORAGE_KEY_WATCHED_COUNT)
    );

    this.setState({ videosWatched });

    window.addEventListener(WATCH_VIDEO_BUTTON_CLICKED_EVENT, this.selectVideo);
    window.addEventListener(
      VIDEO_DETAILS_BUTTON_CLICKED_EVENT,
      this.navigateToVideoDetails
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.videosWatched !== this.state.videosWatched) {
      this.props.localStorage.setValue(
        LOCAL_STORAGE_KEY_WATCHED_COUNT,
        this.state.videosWatched
      );
    }
  }

  componentWillUnmount() {
    window.removeEventListener(
      WATCH_VIDEO_BUTTON_CLICKED_EVENT,
      this.selectVideo
    );
    window.removeEventListener(
      VIDEO_DETAILS_BUTTON_CLICKED_EVENT,
      this.navigateToVideoDetails
    );
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container-fluid">
          <div className="row my-4">
            <div className="col-lg-7 pe-0">
              <h5>Featured Video</h5>
              <hr />
              <FeaturedVideo
                video={this.props.currentVideo}
                onVideoPlaying={this.onVideoPlaying}
              />
              <FeaturedVideoDetail video={this.props.currentVideo} />
            </div>
            <div className="col-lg-5">
              <h5>Related Videos</h5>
              <hr />
              <VideoList />
              <div
                className="alert alert-warning alert-dismissible fade show"
                role="alert"
              >
                <i className="bi bi-info-circle me-2"></i>
                Videos Watched: <strong>{this.state.videosWatched}</strong>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Clear"
                  onClick={this.clearCount}
                ></button>
              </div>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ searchedVideos }) => {
  const { currentVideo, videos } = searchedVideos;

  return {
    currentVideo,
    videos,
  };
};

export default connect(mapStateToProps, { setCurrentVideo })(
  withNavigation(withLocalStorage(Search))
);
