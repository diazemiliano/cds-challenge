import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import VideoDetail from "./pages/VideoDetail";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";

function App() {
  const scriptTag = document.createElement("script");
  scriptTag.src = "https://www.youtube.com/player_api";
  const firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag);

  return (
    <Routes>
      <Route exact path="/" index element={<Home />} />
      <Route exact path="search" element={<Search />} />
      <Route exact path="video/:videoId" element={<VideoDetail />} />
      <Route exact path="/error" element={<Error />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
