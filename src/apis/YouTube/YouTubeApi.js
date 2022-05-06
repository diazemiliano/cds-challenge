import axios from "axios";

const {
  REACT_APP_YOUTUBE_API_KEY: YOUTUBE_API_KEY = "",
  REACT_APP_YOUTUBE_API_URL: YOUTUBE_API_URL = "",
} = process.env;

const YouTubeApi = axios.create({
  baseURL: YOUTUBE_API_URL,
  params: {
    key: YOUTUBE_API_KEY,
  },
});

export default YouTubeApi;
