import styles from "./NavBarTemplate.module.scss";
import SearchForm from "../SearchForm/SearchForm";
import { Link, useLocation } from "react-router-dom";

function NavBarTemplate() {
  const { pathname } = useLocation();
  const renderSearch = pathname !== "/";

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

        <div className="col d-flex justify-content-center">
          {renderSearch ? <SearchForm /> : null}
        </div>
      </nav>
    </header>
  );
}

export default NavBarTemplate;
