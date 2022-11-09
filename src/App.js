import { Routes, Route, Link } from "react-router-dom";
import Home from "./view/Home";
import Movies from "./view/Movies";
import Login from "./view/Login";
import Signup from "./view/Signup";
import NavBar from "./Components/NavBar";
import NoMatch from "./view/NoMatch";
import DetailsMovie from "./view/DetailsMovie";
// import DetailsMovieAuth from "./view/DetailsMovieAuth"
import "./index.css";
import { DetailsContextProvider } from "./Context/DetailsContext";
import { AuthContextProvider } from "./Context/AuthContext";
import { app, auth } from "./config";

function App() {

  return (
    <div className="App">
      <AuthContextProvider>
        <NavBar />
        <DetailsContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:id" element={<DetailsMovie />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </DetailsContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
