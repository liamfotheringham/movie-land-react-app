import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MoviesProvider } from "./contexts/MovieContext";
import { SeriesProvider } from "./contexts/SeriesContext";

import SeriesView from "./views/SeriesView";
import MissingRouteView from "./views/MissingRouteView";
import MoviesView from "./views/MoviesView";
import DetailedMovieView from "./views/DetailedMovieView";

import Sidebar from "./components/navigation/Sidebar";

function App() {
  return (
    <div className="app">
      <MoviesProvider>
        <SeriesProvider>
          <h1>Movie Land</h1>
          <Router>
            <Sidebar />
            <Routes>
              <Route path="/movies" element={<MoviesView />} />
              <Route path="/movies/:movieId" element={<DetailedMovieView />} />
              <Route path="/series" element={<SeriesView />} />
              <Route path="*" element={<MissingRouteView />} />
            </Routes>
          </Router>
        </SeriesProvider>
      </MoviesProvider>
    </div>
  );
}

export default App;
