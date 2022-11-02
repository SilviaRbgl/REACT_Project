import { Routes, Route, Link } from "react-router-dom";
import Home from "./view/Home";
import Movies from "./view/Movies";
import "./index.css";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
      </Routes>
      </div>
  );
}

export default App;
