import React from "react";
import NavBar from "../components/NavBar/NavBar";
import FeaturedVideo from "../components/FeaturedVideo/FeaturedVideo";
import { connect } from "react-redux";
import VideoFullDetails from "../components/FeaturedVideo/VideoFullDetails";

class VideoDetail extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container-fluid">
          <div className="row my-4">
            <div className="col-lg-7 pe-0">
              <h5 className="text-truncate">
                Seeing: {this.props.currentVideo.snippet.title}
              </h5>
              <hr />
              <FeaturedVideo
                video={this.props.currentVideo}
                onlythumbnail={true}
              />
            </div>
            <div className="col-lg-5">
              <h5>Details</h5>
              <hr />
              <VideoFullDetails video={this.props.currentVideo} />
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ searchedVideos }) => {
  const { currentVideo, searchTerm, videos } = searchedVideos;

  return {
    searchTerm,
    currentVideo,
    videos,
  };
};

export default connect(mapStateToProps)(VideoDetail);
