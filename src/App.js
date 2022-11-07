import { Routes, Route, Link } from "react-router-dom";
import Home from "./view/Home";
import Movies from "./view/Movies";
import Login from "./view/Login";
import Register from "./view/Register";
import NavBar from "./Components/NavBar";
import NoMatch from "./view/NoMatch";
import DetailsMovie from "./view/DetailsMovie";
import "./index.css";
import { AuthContextProvider } from "./Context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<DetailsMovie />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
