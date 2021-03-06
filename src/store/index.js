import { configureStore } from "@reduxjs/toolkit";
import searchVideosReducer from "../components/SearchForm/searchSlice";
import popularVideosReducer from "../components/Welcome/popularVideosSlice";

const store = configureStore({
  reducer: {
    searchedVideos: searchVideosReducer,
    popularVideos: popularVideosReducer,
  },
});
export default store;
