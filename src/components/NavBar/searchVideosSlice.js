import { createSlice } from "@reduxjs/toolkit";
import YouTubeApi from "../../apis/YouTube/YouTubeApi";

const searchVideosSlice = createSlice({
  name: "searchVideos",
  initialState: {
    searchTerm: "",
    videos: [],
  },
  reducers: {
    setSearchTerm(state, action) {
      return { ...state, ...{ searchTerm: action.payload } };
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
      console.log("searchVideos", searchTerm);
      const { data } = await YouTubeApi.get("/search", {
        params: {
          part: "snippet",
          type: "video",
          maxResults: 5,
          q: searchTerm,
        },
      });

      // To make it consistent with the "/videos" schema
      data.items = data.items.map((video) => {
        video.id = video.id.videoId;
        return video;
      });

      dispatch(addVideos(data.items));
      dispatch(setSearchTerm(searchTerm));
    } catch (e) {
      console.error("Whoops!", e);
    }
  };

export const searchTerm = (state) => state.term;
export const videosList = (state) => state.videos;
export const { setSearchTerm, addVideos } = searchVideosSlice.actions;
export default searchVideosSlice.reducer;
