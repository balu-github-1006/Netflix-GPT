import React from "react";
import VideoTilte from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => {
    return store.movies?.nowPlayingMovies;
  });

  if (movies === null || undefined) return;

  const mainMovie = movies[13];

  const { title, overview, id } = mainMovie;

  return (
    <div className="relative ">
      <VideoTilte title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
