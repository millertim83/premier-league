import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
//import Home from "./Components/home/Home.js";
import NavBar from "./Components/NavBar";
//import WeeklyResults from "./Components/WeeklyResults/WeeklyResults.js";
import ScoringLeaders from "./Components/scoringLeaders/ScoringLeaders";


function App() {
  return (
    <div>
      <NavBar />
      <ScoringLeaders />
    </div>
  );
}

export default App;
