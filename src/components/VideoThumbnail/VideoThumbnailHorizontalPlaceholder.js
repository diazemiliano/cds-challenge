function VideoThumbnailHorizontalPlaceholder() {
  return (
    <div className="col">
      <div className="card mb-3" aria-hidden="true">
        <div className="row">
          <div className="col-5">
            <svg
              className="bd-placeholder-img card-img-top"
              width="100%"
              height="128"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#868e96"></rect>
            </svg>
          </div>
          <div className="col-7">
            <div className="card-body p-2">
              <h5 className="card-title placeholder-glow">
                <span className="placeholder col-6"></span>
              </h5>
              <p className="card-text placeholder-glow">
                {/*<span className="placeholder col-6"></span>*/}
                <span className="placeholder w-75"></span>
                <span className="placeholder" style={{ width: "25%" }}></span>
              </p>
              <a href="#" tabIndex="-1" className="btn btn-danger disabled placeholder col-6"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoThumbnailHorizontalPlaceholder;