import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="-mt-[350px] z-10 relative">
        <MovieList
          title={"Now Palying Movies"}
          movies={movies.nowPlayingMovies}
        />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
