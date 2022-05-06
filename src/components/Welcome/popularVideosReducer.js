import { createSlice } from "@reduxjs/toolkit";
import YouTubeApi from "../../apis/YouTube/YouTubeApi";

const popularVideosSlice = createSlice({
  name: "popularVideos",
  initialState: [],
  reducers: {
    addVideos(state, action) {
      return [...action.payload];
    },
  },
});

export const searchPopularVideos = () => async (dispatch) => {
  try {
    const { data } = await YouTubeApi.get("/videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 6,
      },
    });
    dispatch(addVideos(data.items));
  } catch (e) {
    console.error("Whoops!", e);
  }
};

export const { addVideos } = popularVideosSlice.actions;
export default popularVideosSlice.reducer;
