import React from "react";
import NavBar from "../Components/NavBar";
import Movies from "./Movies";

function Home() {
  return (
    <div>
      <NavBar />
      <p>Welcome to moviestowatch.com.</p>
      <p>I have to still this page, so be patiente.</p>
      <p>If you want to search movies, click here:</p>
      <button onClick={() => console.log("you clicked search button")}>
        SEARCH MOVIES
      </button>
      <p>If you want to log in, click here:</p>
      <button onClick={() => console.log("you clicked logIn button")}>
        LOG IN
      </button>
      <p>New here? You can register here:</p>
      <button onClick={() => console.log("you clicked register button")}>
        REGISTER
      </button>
    </div>
  );
}

export default Home;
