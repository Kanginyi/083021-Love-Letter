import React from "react";
import Navbar from "./Components/Navbar";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div id="main-content">
          <Routes>
            <h1>fuck you</h1>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;