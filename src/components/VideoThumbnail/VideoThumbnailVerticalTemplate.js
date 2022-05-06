import WatchVideoButton from "../WatchVideoButton/WatchVideoButton";

function VideoThumbnail() {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          aria-label={`Thumbnail: ${this.props.video.snippet.title}`}
          src={this.props.video.snippet.thumbnails.medium.url}
        />

        <div className="card-body">
          <p className="card-text text-truncate mb-0">
            Channel: {this.props.video.snippet.channelTitle}
          </p>
          <p className="card-text text-truncate">
            Title: {this.props.video.snippet.title}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <WatchVideoButton videoId={this.props.video.id} />
            </div>
            <small className="text-muted">
              {this.formatDate(this.props.video.snippet.publishedAt)}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoThumbnail;
