import React from "react";
import "./App.css";
import AddMovie from "./container/AddMovie";
import ListMovies from "./container/ListMovies";

function App() {
  return (
    <div className="App">
      <AddMovie />
      <ListMovies />
    </div>
  );
}

export default App;
