import "./App.css";
import Sidebar from "./components/navigation/Sidebar";
import AnotherPageView from "./views/AnotherPageView";
import MissingRouteView from "./views/MissingRouteView";
import MoviesView from "./views/MoviesView";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <h1>Movie Land</h1>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/movies" element={<MoviesView />} />
          <Route path="/another-page" element={<AnotherPageView />} />
          <Route path="*" element={<MissingRouteView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
