import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./Components/home/Home.js";
import NavBar from "./Components/NavBar";
import WeeklyResults from "./Components/WeeklyResults/WeeklyResults.js";
import ScoringLeaders from "./Components/scoringLeaders/ScoringLeaders";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/" exact component = {() => <Home />} />
            <Route path="/weeklyresults" exact component = {() => <WeeklyResults />} />
            <Route path="/scoringleaders" exact component = {() => <ScoringLeaders />} />
          </Switch>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
