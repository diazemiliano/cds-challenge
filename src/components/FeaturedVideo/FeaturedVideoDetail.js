import React from "react";
import { VIDEO_DETAILS_BUTTON_CLICKED_EVENT } from "../../enums/CustomEventNames";

class FeaturedVideoDetail extends React.Component {
  onVideoDetailsButtonClick = (video) => {
    const detail = {
      video,
    };

    window.dispatchEvent(
      new CustomEvent(VIDEO_DETAILS_BUTTON_CLICKED_EVENT, { detail })
    );
  };

  renderDetail = ({ video }) => {
    return video.id ? (
      <React.Fragment>
        <div className="row m-0 mt-0">
          <div className="col-9 p-0">
            <div className="d-flex h-100 align-items-center">
              <h5 className="m-0 p-0 text-truncate">{video.snippet.title}</h5>
            </div>
          </div>
          <div className="col-3 p-0 text-end">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.onVideoDetailsButtonClick(video)}
            >
              See Details
            </button>
          </div>
        </div>
      </React.Fragment>
    ) : null;
  };

  render() {
    const video = this.props.video;

    return (
      <div className="row">
        <div className="col m-3 mt-0 p-3 gap-3 bg-light">
          {video ? this.renderDetail({ video }) : null}
        </div>
      </div>
    );
  }
}

export default FeaturedVideoDetail;
