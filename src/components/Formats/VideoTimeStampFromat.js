function VideoTimeStampFromat({
  date,
  options = {
    weekday: "short",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
  },
}) {
  const formatDate = (date) => {
    const event = new Date(date);

    return event.toLocaleDateString(undefined, options);
  };

  return formatDate(date);
}

export default VideoTimeStampFromat;
