import React from "react";
import { Route, Routes } from "react-router-dom";

import SongList from "./SongList";
import SongCreate from "./SongCreate";
import SongDetail from "./SongDetail";

const App = () => {
  return (
    <div className="container">
      <div className="container">
        <Routes>
          <Route exact path="/" element={<SongList />} />
          <Route path="/songs/new" element={<SongCreate />} />
          <Route path="songs/:id" element={<SongDetail />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
