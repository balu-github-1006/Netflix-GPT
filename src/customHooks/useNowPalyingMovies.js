import { API_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getMovies = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json));
  };
  useEffect(() => {
    getMovies();
  }, []);
};

export default useNowPlayingMovies;
