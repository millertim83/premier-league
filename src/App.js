import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
//import Home from "./Components/home/Home.js";
import NavBar from "./Components/NavBar";
import WeeklyResults from "./Components/WeeklyResults/WeeklyResults.js";


function App() {
  return (
    <div>
      <NavBar />
      <WeeklyResults />
    </div>
  );
}

export default App;
