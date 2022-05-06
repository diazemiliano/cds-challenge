import styles from "../components/Welcome/WelcomeTemplate.module.scss";
import SearchForm from "../components/SearchForm/SearchForm";

function NotFound() {
  return (
    <div className="px-4 py-4 my-4 text-center">
      <i className={`${styles.iconLogo} bi bi-bug-fill`}></i>
      <h1 className="display-5 fw-bold">Whoops!</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          We couldn't find what you're looking for. <br />
          Dont worry probably its our fault.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <SearchForm />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
