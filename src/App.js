import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import VideoDetail from "./pages/VideoDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="search" element={<Search />} />
      <Route path="video/:videoId" element={<VideoDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
