import { useEffect } from "react";
import { addTrailerMovie } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

function useMovieTrailer(id) {
  //Fetch Trailer video and update the store
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch("https://www.freetestapi.com/api/v1/movies/" + id);
    const json = await data.json();
    const trailerId = "PLl99DlL6b4?si=J4XMJMGlWwFtwFnd";
    // Adding data to the store by using use Dispatch-action which is defined in the store.
    dispatch(addTrailerMovie(trailerId));
  };

  //Call fetch method in useEffect
  useEffect(() => {
    getMovieVideo();
  }, []);
}

export default useMovieTrailer;
