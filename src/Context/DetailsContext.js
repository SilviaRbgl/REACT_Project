import { createContext, useState } from "react";
import { data2 } from "../API-data/response2";

export const DetailsContext = createContext();

export const DetailsContextProvider = (props) => {
  // console.log("props >>>", props);

  const [singleMovie, setSingleMovie] = useState([]);
  const [error, setError] = useState(null);
  const [actors, setActors] = useState([]);
  console.log("actors>>>", actors);

  const fetchSingleMovie = async () => {
    try {
      // const url = `https://imdb-api.com/en/API/Title/${process.env.REACT_APP_KEY}/${id}`;
      // const response = await fetch(url);
      // const result = await response.json();
      // setSingleMovie(result);
      setSingleMovie(data2); // use this line if you want to preserve the "fetch" behaviour, but with local data
      console.log("movies from data>>>", data2);
      // console.log("single movies>>>", result.id);
      // console.log(result);
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <DetailsContext.Provider value={{ singleMovie, error, actors, fetchSingleMovie }}>
      {props.children}
    </DetailsContext.Provider>
  );
};
