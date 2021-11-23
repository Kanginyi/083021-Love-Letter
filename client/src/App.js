import React from "react";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import Playlist from "./Components/Playlist";
import Locations from "./Components/Locations";
import Options from "./Components/Options";

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
            <Route path="locations" element={<Locations/>}/>
            <Route path="options" element={<Options/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;