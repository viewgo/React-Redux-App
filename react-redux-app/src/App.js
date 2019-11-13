import React from "react";
import "./App.css";

import CardList from "./components/CardList";
import { Route } from "react-router-dom";

import Card from "./components/Card";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />

      <div className="content">
        <Route exact path="/" component={CardList} />
        <Route path="/card/:id" component={Card} />
      </div>
    </div>
  );
}

export default App;
