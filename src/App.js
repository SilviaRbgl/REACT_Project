import { Routes, Route, Link } from "react-router-dom";
import Home from "./view/Home";
import Movies from "./view/Movies";
import Login from "./view/Login";
import Register from "./view/Register";
import "./index.css";
import NavBar from "./Components/NavBar";
import NoMatch from "./view/NoMatch";
import DetailsMovie from "./view/DetailsMovie";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:title" element={<DetailsMovie />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      </div>
  );
}

export default App;
