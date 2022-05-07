import React from "react";
import VideoTimeStampFromat from "../Formats/VideoTimeStampFromat";

class VideoFullDetails extends React.Component {
  render() {
    const { channelTitle, description, title, publishedAt } =
      this.props.video.snippet;
    return (
      <div className="list-group">
        <a
          href="#"
          className="list-group-item list-group-item-action"
          aria-current="true"
        >
          <div className="d-flex w-100 justify-content-between">
            <h6 className="mb-1">Title</h6>
            <VideoTimeStampFromat date={publishedAt} />
          </div>
          <p className="mb-1">{title}</p>
          <small className="text-muted">{description}</small>
        </a>

        <a href="#" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h6 className="mb-1">Channel Title</h6>
          </div>
          <p className="mb-1">{channelTitle}</p>
        </a>
      </div>
    );
  }
}

export default VideoFullDetails;
