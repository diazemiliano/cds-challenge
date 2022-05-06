import { configureStore } from "@reduxjs/toolkit";
import searchVideosReducer from "../components/NavBar/searchVideosSlice";
import popularVideosReducer from "../components/Welcome/popularVideosReducer";

const store = configureStore({
  reducer: {
    searchedVideos: searchVideosReducer,
    popularVideos: popularVideosReducer,
  },
});
export default store;
