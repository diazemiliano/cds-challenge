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
  try {
    dispatch(setQueryStatus(QUERY_STATUS_LOADING));
    const { data } = await YouTubeApi.get("/videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 6
      }
    });

    dispatch(setQueryStatus(QUERY_STATUS_IDLE));
    dispatch(addVideos(data.items));
  } catch (e) {

    dispatch(setQueryStatus(QUERY_STATUS_ERROR));
    throw YouTubeApiErrorMessagesParser(e);
  }
};

export const { addVideos, setQueryStatus } = popularVideosSlice.actions;
export default popularVideosSlice.reducer;
