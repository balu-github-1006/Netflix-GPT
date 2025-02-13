import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";

function useMovieTrailer(movieId) {
  //Fetch Trailer video and update the store
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS
    );
    const json = await data.json();

    const filteredVideoType = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredVideoType.length
      ? filteredVideoType[0]
      : json.results[0];

    // Adding data to the store by using use Dispatch-action which is defined in the store.
    dispatch(addTrailerVideo(trailer));
  };

  //Call fetch method in useEffect
  useEffect(() => {
    getMovieVideo();
  }, []);
}

export default useMovieTrailer;
