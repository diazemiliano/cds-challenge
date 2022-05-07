import {
  useNavigate,
  useParams,
  useLocation,
  useSearchParams,
} from "react-router-dom";

import localStorage from "./localStorage";

function withNavigation(Component) {
  return (props) => <Component {...props} navigate={useNavigate()} />;
}

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

function withLocation(Component) {
  return (props) => <Component {...props} location={useLocation()} />;
}

function withSearchParams(Component) {
  return (props) => <Component {...props} searchParams={useSearchParams()} />;
}

function withLocalStorage(Component) {
  return (props) => <Component {...props} localStorage={localStorage} />;
}

export {
  withNavigation,
  withParams,
  withLocation,
  withSearchParams,
  withLocalStorage,
};
