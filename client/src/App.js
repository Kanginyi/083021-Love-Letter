import React from "react";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import Playlist from "./Components/Playlist";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div id="main-content">
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="playlist" element={<Playlist/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;