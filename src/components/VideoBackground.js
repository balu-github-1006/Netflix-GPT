import { useSelector } from "react-redux";
import useMovieTrailer from "../customHooks/useMovieTrailer";

function VideoBackground({ movieId }) {
  //Below's custom hook will fetch data and set data to the store (fetching, dispatch an action).
  useMovieTrailer(movieId);

  //and here below we get data from store - means subscribing using useSelector.
  const trailerVideoId = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div>
      <iframe
        className="w-svw aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideoId?.key +
          "?&autoplay=1&mute=1"
        }
      ></iframe>
    </div>
  );
}

export default VideoBackground;
