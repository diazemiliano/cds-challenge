import styles from "../components/Welcome/WelcomeTemplate.module.scss";
import { useNavigate, useLocation } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const { state } = useLocation();

  let error = state?.error || "";

  return (
    <div className="px-4 py-4 my-4 text-center">
      <i className={`${styles.iconLogo} bi bi-bug-fill`}></i>
      <h1 className="display-5 fw-bold">Whoops! There is An Error.</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">We are in troubles with some stuff.</p>

        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            onClick={() => navigate("/")}
            type="button"
            className="btn btn-primary btn-lg px-4 gap-3"
          >
            Go Home
          </button>
        </div>
        <div className="row mt-4 mb-2">
          {error ? (
            <div className="alert alert-danger " role="alert">
              {error.message}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Error;
