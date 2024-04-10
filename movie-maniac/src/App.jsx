import React from "react";
import "./App.css";
import "./components/navbar/Navbar";
import Navbar from "./components/navbar/Navbar";
import MovieList from "./components/movielist/MovieList";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <MovieList />
      </main>
    </div>
  );
};

export default App;
