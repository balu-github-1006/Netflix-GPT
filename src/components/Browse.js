import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPalyingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../customHooks/usePopularMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div className="browse overflow-x-hidden">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};
export default Browse;
