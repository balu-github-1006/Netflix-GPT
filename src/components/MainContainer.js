import React from "react";
import VideoTilte from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => {
    return store.movies?.nowPlayingMovies;
  });

  if (movies === null || undefined) return;

  const mainMovie = movies[0];

  const { title, plot, language, genre, awards, country, id } = mainMovie;

  return (
    <div className="relative ">
      <VideoTilte
        title={title}
        plot={plot}
        language={language}
        genre={genre}
        awards={awards}
        country={country}
      />
      <VideoBackground id={id} />
    </div>
  );
};

export default MainContainer;
