import React from "react";
import { connect } from "react-redux";
import {
  searchVideos,
  setCurrentVideo,
  setSearchTerm
} from "./searchSlice";
import { debounce as _debounce } from "lodash";
import { withNavigation, withSearchParams } from "../../hocs";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.searchInputRef = React.createRef();

    // Store a permanent reference to the debounced function.
    this.debouncedSetSearchTerm = _debounce(
      (searchTerm) => this.props.setSearchTerm(searchTerm),
      400
    );
  }

  state = { searchTerm: "" };

  focusSearch = () => {
    this.searchInputRef.current.focus();
  };

  componentDidMount() {
    const [searchParams] = this.props.searchParams;
    const searchTerm = searchParams.get("q") || "";

    // Set search term from URL search params
    this.setState({ searchTerm });
    this.props.setSearchTerm(searchTerm);

    this.handleSearchVideos({ searchTerm });

    window.addEventListener("startSearching", this.focusSearch);
  }

  componentWillUnmount() {
    window.removeEventListener("startSearching", this.focusSearch);
  }

  handleSearchVideos = async ({ searchTerm }) => {
    try {
      if (!searchTerm) return;
      const videos = await this.props.searchVideos({ searchTerm });

      if (!this.props.currentVideo?.id && videos) {
        this.props.setCurrentVideo(videos[0]);
      }
    } catch (e) {
      this.props.navigate(`/error`, {
        state: { error: e }
      });
    }
  };

  onSearchInputChange = (event) => {
    const searchTerm = event.target.value;
    this.setState({ searchTerm });
    this.debouncedSetSearchTerm(searchTerm);
  };

  onSearchFormSubmit = (event) => {
    const searchTerm = this.state.searchTerm;
    const q = new URLSearchParams({ q: searchTerm }).toString();
    event.preventDefault();

    // Cancel current debounced function and fire it manually
    // This prevents to send empty terms if the user hits enter too fast
    this.debouncedSetSearchTerm.cancel();
    this.debouncedSetSearchTerm(searchTerm);
    this.handleSearchVideos({ searchTerm }).then(() =>
      // Send search term to the navigation schema
      this.props.navigate(`/search?${q}`)
    );
  };

  render() {
    return (
      <form className="d-flex">
        <input
          ref={this.searchInputRef}
          value={this.state.searchTerm}
          onChange={this.onSearchInputChange}
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          onClick={this.onSearchFormSubmit}
          className="btn btn-outline-secondary"
          type="submit"
        >
          Search
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ searchedVideos }) => {
  const { currentVideo, searchTerm, videos, queryStatus } = searchedVideos;

  return {
    queryStatus,
    currentVideo,
    searchTerm,
    videos
  };
};

const mapDispatchToProps = { searchVideos, setSearchTerm, setCurrentVideo };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSearchParams(withNavigation(SearchForm)));
