import WatchVideoButton from "../WatchVideoButton/WatchVideoButton";
import VideoTimeStampFromat from "../Formats/VideoTimeStampFromat";

function VideoThumbnailHorizontal() {
  return (
    <div className="col">
      <div className="card shadow-sm mb-3">
        <div className="row">
          <div className="col-5">
            <img
              className="bd-placeholder-img card-img-top"
              width="100%"
              height="100%"
              aria-label={`Thumbnail: ${this.props.video.snippet.title}`}
              src={this.props.video.snippet.thumbnails.medium.url}
            />
          </div>
          <div className="col-7">
            <div className="card-body ps-0">
              <p className="card-text text-truncate mb-0">
                Channel: {this.props.video.snippet.channelTitle}
              </p>
              <p className="card-text text-truncate">
                Title: {this.props.video.snippet.title}
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <WatchVideoButton
                    video={this.props.video}
                    label={this.props.actionButtonLabel}
                  />
                </div>
                <small className="text-muted">
                  <VideoTimeStampFromat
                    date={this.props.video.snippet.publishedAt}
                  />
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoThumbnailHorizontal;
