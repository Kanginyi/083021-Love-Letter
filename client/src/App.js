import React, {useState, useEffect} from "react";
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import Cohort from "./Components/Cohort";
import Playlist from "./Components/Playlist";
import Locations from "./Components/Locations";
import Comments from "./Components/Comments";
import MonopolyBoard from "./Components/MonopolyBoard";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  // Code to pass in from each of the Info Components
  const [personInfo, setPersonInfo] = useState([]);
  const [clickedName, setClickedName] = useState("");

  useEffect(() => {
      fetch("/students")
          .then(resp => resp.json())
          .then(data => setPersonInfo(data));
  }, []);

  const handleImageClick = (name) => {
      setClickedName(name);
  }
 
  return (
    <>
      <Router>
        <Navbar />
        <div id="main-content">
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="cohort" element={
              <Cohort
                personInfo={personInfo}
                handleImageClick={handleImageClick}
                clickedName={clickedName}
              />
              }/>
            <Route path="playlist" element={<Playlist/>}/>
            <Route path="locations" element={
              <Locations
                personInfo={personInfo}
              />
              }/>
            <Route path="comments_board" element={<Comments/>}/>
            <Route path="monopoly" element={<MonopolyBoard/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;