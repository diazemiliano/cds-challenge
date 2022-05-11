import React from "react";
import styles from "./WelcomeTemplate.module.scss";
import SearchForm from "../SearchForm/SearchForm";

const WelcomeTemplate = function() {
  return (
    <React.Fragment>
      <div className="px-4 py-4 my-4 text-center">
        <i className={`${styles.iconLogo} bi bi-file-play-fill`}></i>
        <h1 className="display-5 fw-bold">Video Search</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-5">
            Quickly search among millions of videos on the most popular video
            platform today. Music, sports, art, science, whatever you are trying
            to find it's here or isn't exists.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <SearchForm />
          </div>
        </div>
      </div>
      {/*---------------------------*/}
      <div className="album py-5 bg-light">
        <div className="container">
          {this.handleRender()}
        </div>
      </div>
    </React.Fragment>
  );
};

export default WelcomeTemplate;
