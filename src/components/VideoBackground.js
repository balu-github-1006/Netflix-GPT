import { useSelector } from "react-redux";
import useMovieTrailer from "../customHooks/useMovieTrailer";

function VideoBackground({ id }) {
  //Below's custom hook will fetch data and set data to the store (fetching, dispatch an action).
  useMovieTrailer(id);

  //and here below we get data from store - means subscribing using useSelector.
  const trailerVideoId = useSelector((store) => store.movies?.trailer);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideoId +
          "&autoplay=1&mute=1"
        }
      ></iframe>
    </div>
  );
}

export default VideoBackground;
