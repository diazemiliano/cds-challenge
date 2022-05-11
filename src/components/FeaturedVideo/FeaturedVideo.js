import React from "react";
import * as PropTypes from "prop-types";

// import styles from "./FeaturedVideo.module.scss";

class FeaturedVideo extends React.Component {
  connectIframeApi = () => {
    setTimeout(
      () =>
        (window.YTPlayer = new window.YT.Player("YTPlayer", {
          events: {
            onReady: (onPlayerReady) => {},
            onStateChange: (onPlayerStateChange) => {
              if (onPlayerStateChange.data === window.YT.PlayerState.PLAYING) {
                this.props.onVideoPlaying();
              }
            },
          },
        })),
      500
    );
  };

  renderVideo = ({ video }) => {
    const theIframe = () => (
      <iframe
        id="YTPlayer"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${video.id}?enablejsapi=1`}
        title={video.snippet.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={this.connectIframeApi}
      />
    );

    const theImage = () => (
      <img
        width="100%"
        src={video.snippet.thumbnails.high.url}
        title={video.snippet.title}
      />
    );

    return video.id ? (
      <React.Fragment>
        <div className="row m-0" >
          <div className="col p-0">
            <div className="ratio ratio-16x9">
              {this.props.onlythumbnail ? theImage() : theIframe()}
            </div>
          </div>
        </div>
      </React.Fragment>
    ) : null;
  };

  render() {
    const video = this.props.video;

    return (
      <div className="row">
        <div className="col m-3 my-0 p-3 gap-3 bg-light" style={{ minHeight: "390px" }}>
          {video ? this.renderVideo({ video }) : null}
        </div>
      </div>
    );
  }
}

FeaturedVideo.propTypes = {
  video: PropTypes.object,
  onVideoPlaying: PropTypes.func,
};

export default FeaturedVideo;
