import styles from "./NavBarTemplate.module.scss";
import SearchForm from "../SearchForm/SearchForm";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NavBarTemplate() {
  const { pathname } = useLocation();
  const renderSearch = pathname === "/search";
  const renderBack = pathname !== "/";
  const navigate = useNavigate();

  return (
    <header className="navbar navbar-dark navbar-expand bg-dark fixed-top">
      <nav className="container-fluid d-flex align-items-center">
        <Link
          to="/"
          title="SearchVideos Home"
          className={styles.navBarBrandLink}
        >
          <span className="navbar-brand d-none d-sm-block">
            <i className={`${styles.navBarBrandIcon} bi bi-file-play-fill`}></i>
            Video<strong>Search</strong>
          </span>
        </Link>

        <div className="col col-1 d-flex justify-content-start">
          {renderBack ? (
            <button
              className="btn btn-sm btn-outline-secondary"
              type="button"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          ) : null}
        </div>
        <div className="col d-flex justify-content-center">
          {renderSearch ? <SearchForm /> : null}
        </div>
      </nav>
    </header>
  );
}

export default NavBarTemplate;
