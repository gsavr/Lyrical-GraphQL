import React from "react";
import { Route, Routes } from "react-router-dom";

import SongList from "./SongList";
import SongCreate from "./SongCreate";

const App = () => {
  return (
    <div className="container">
      <div className="container">
        <Routes>
          <Route exact path="/" element={<SongList />} />
          <Route path="/songs/new" element={<SongCreate />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
