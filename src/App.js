import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./view/Home";
import Movies from "./view/Movies";
import Login from "./view/Login";
import Signup from "./view/Signup";
import NavBar from "./Components/NavBar";
import NoMatch from "./view/NoMatch";
import DetailsMovie from "./view/DetailsMovie";
import "./index.css";
import { AuthContextProvider } from "./Context/AuthContext";
import { app, auth } from "./config";
import NavBarItem from "./Components/NavBarItem";
import { GiFilmStrip } from "react-icons/gi";
import Dropdown from "./Components/Dropdown";
import ProfileUser from "./view/ProfileUser";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <NavBar>
          <NavBarItem icon={<GiFilmStrip />}>
            <Dropdown></Dropdown>
          </NavBarItem>
        </NavBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:id" element={<DetailsMovie />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route
              path="profile"
              element={
                <ProtectedRoute>
                  <ProfileUser />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NoMatch />} />
          </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
