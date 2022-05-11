import { createSlice } from "@reduxjs/toolkit";
import YouTubeApi, { YouTubeApiErrorMessagesParser } from "../../apis/YouTube/YouTubeApi";
import { QUERY_STATUS_ERROR, QUERY_STATUS_IDLE, QUERY_STATUS_LOADING } from "../../enums/QueryStatus";
import { AxiosError } from "axios";

const searchSlice = createSlice({
  name: "searchVideos",
  initialState: {
    queryStatus: "",
    searchTerm: "",
    currentVideo: {},
    videos: []
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
    setQueryStatus(state, action) {
      return { ...state, ...{ queryStatus: action.payload } };
    }
  }
});

export const searchVideos =
  ({ searchTerm = "" } = {}) =>
    async (dispatch, state) => {
      return new Promise((resolve, reject) => {
        dispatch(setQueryStatus(QUERY_STATUS_LOADING));
        // Emulate 3 seconds delay.
        setTimeout(async () => {
          try {

            const { data } = await YouTubeApi.get("/search", {
              params: {
                part: "snippet",
                type: "video",
                maxResults: 4,
                q: searchTerm
              }
            });

            // To make it consistent with the "/videos" schema
            data.items = data.items.map((video) => {
              video.id = video.id.videoId;
              return video;
            });

            dispatch(setQueryStatus(QUERY_STATUS_IDLE));
            dispatch(addVideos(data.items));
            dispatch(setSearchTerm(searchTerm));
            resolve(data.items);
          } catch (e) {
            dispatch(setQueryStatus(QUERY_STATUS_ERROR));
            reject(YouTubeApiErrorMessagesParser(e));
          }
        }, 3000);
      });
    };


export const { setSearchTerm, setCurrentVideo, addVideos, setQueryStatus } =
  searchSlice.actions;
export default searchSlice.reducer;
