import styles from "./WatchVideoButton.module.scss";
import { useNavigate } from "react-router-dom";

function WatchVideoButton({ videoId }) {
  const navigate = useNavigate();
  const watchVideo = () => {
    navigate(`/video/${videoId}`);
  };

  return (
    <button
      onClick={watchVideo}
      type="button"
      className={`${styles.watchButton} btn btn-sm text-white`}
    >
      Watch
    </button>
  );
}

export default WatchVideoButton;
