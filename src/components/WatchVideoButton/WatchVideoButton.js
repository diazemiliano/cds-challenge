import styles from "./WatchVideoButton.module.scss";
import { WATCH_VIDEO_BUTTON_CLICKED_EVENT } from "../../enums/CustomEventNames";

function WatchVideoButton({ video, label }) {
  const emitButtonClicked = () => {
    const detail = {
      video,
    };

    window.dispatchEvent(
      new CustomEvent(WATCH_VIDEO_BUTTON_CLICKED_EVENT, { detail })
    );
  };

  return (
    <button
      onClick={emitButtonClicked}
      type="button"
      className={`${styles.watchButton} btn btn-sm text-white`}
    >
      {label}
    </button>
  );
}

export default WatchVideoButton;
