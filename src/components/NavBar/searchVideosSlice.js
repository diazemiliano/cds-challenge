import { createSlice } from "@reduxjs/toolkit";
import YouTubeApi from "../../apis/YouTube/YouTubeApi";

const searchVideosSlice = createSlice({
  name: "searchVideos",
  initialState: {
    searchTerm: "",
    currentVideo: {},
    videos: [],
  },
  reducers: {
    setSearchTerm(state, action) {
      return { ...state, ...{ searchTerm: action.payload } };
    },
    setCurrentVideo(state, action) {
      return { ...state, ...{ currentVideo: { ...action.payload } } };
    },
    addVideos(state, action) {
      return { ...state, ...{ videos: [...action.payload] } };
    },
  },
});

export const searchVideos =
  ({ searchTerm = "" } = {}) =>
  async (dispatch) => {
    try {
      const { data } = await YouTubeApi.get("/search", {
        params: {
          part: "snippet",
          type: "video",
          maxResults: 4,
          q: searchTerm,
        },
      });

      // To make it consistent with the "/videos" schema
      data.items = data.items.map((video) => {
        video.id = video.id.videoId;
        return video;
      });

      // dispatch(setCurrentVideo(data.items[0]));
      dispatch(addVideos(data.items));
      dispatch(setSearchTerm(searchTerm));
      return data.items;
    } catch (e) {
      const responseErrors = (e?.response?.data?.error?.errors || []).map(
        (error) => error.message
      );
      let message = `${e?.message}. ` || "";

      if (responseErrors.length) {
        message += responseErrors.join(" ");
      }

      throw new Error(`Whoops! ${message}`);
    }
  };

export const searchTerm = (state) => state.term;
export const videosList = (state) => state.videos;
export const { setSearchTerm, setCurrentVideo, addVideos } =
  searchVideosSlice.actions;
export default searchVideosSlice.reducer;
