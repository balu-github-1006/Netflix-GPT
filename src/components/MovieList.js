import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-24 text-white pb-6">
      <h1 className="text-2xl font-bold py-3">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard posterPath={movie.poster_path} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
