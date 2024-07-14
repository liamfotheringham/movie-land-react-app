import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MoviesProvider } from "./contexts/MovieContext";

import AnotherPageView from "./views/AnotherPageView";
import MissingRouteView from "./views/MissingRouteView";
import MoviesView from "./views/MoviesView";

import Sidebar from "./components/navigation/Sidebar";

function App() {
  return (
    <div className="app">
      <MoviesProvider>
        <h1>Movie Land</h1>
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/movies" element={<MoviesView />} />
            <Route path="/another-page" element={<AnotherPageView />} />
            <Route path="*" element={<MissingRouteView />} />
          </Routes>
        </Router>
      </MoviesProvider>
    </div>
  );
}

export default App;
