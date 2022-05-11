import { createSlice } from "@reduxjs/toolkit";
import YouTubeApi, { YouTubeApiErrorMessagesParser } from "../../apis/YouTube/YouTubeApi";
import { QUERY_STATUS_ERROR, QUERY_STATUS_IDLE, QUERY_STATUS_LOADING } from "../../enums/QueryStatus";

const popularVideosSlice = createSlice({
  name: "popularVideos",
  initialState: {
    queryStatus: "",
    videos: []
  },
  reducers: {
    addVideos(state, action) {
      return {
        ...state, ...{ videos: [...action.payload] }
      };
    },
    setQueryStatus(state, action) {
      return { ...state, ...{ queryStatus: action.payload } };
    }
  }
});

export const searchPopularVideos = () => async (dispatch) => {
  return new Promise((resolve, reject) => {

    dispatch(setQueryStatus(QUERY_STATUS_LOADING));

    // Emulate 3 seconds delay.
    setTimeout(async () => {
      try {
        const { data } = await YouTubeApi.get("/videos", {
          params: {
            part: "snippet",
            chart: "mostPopular",
            maxResults: 6
          }
        });

        dispatch(setQueryStatus(QUERY_STATUS_IDLE));
        dispatch(addVideos(data.items));
        resolve();
      } catch (e) {
        dispatch(setQueryStatus(QUERY_STATUS_ERROR));
        reject(YouTubeApiErrorMessagesParser(e));
      }
    }, 3000);

  });
};

export const { addVideos, setQueryStatus } = popularVideosSlice.actions;
export default popularVideosSlice.reducer;
