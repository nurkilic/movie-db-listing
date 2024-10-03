import { useQuery } from "@tanstack/react-query";
import MovieList from "../components/MovieList";
import { getTVShowsTopRated } from "../services/TVShows/getTVShowsTopRated";


const TVShowsTopRated = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["movietoprated"],
    queryFn: getTVShowsTopRated,
  });

  return (
    <>
      <h2 className="text-3xl mb-5 max-lg:text-base">Top Rated</h2>
      <MovieList data={data} isLoading={isLoading}></MovieList>
    </>
  );
};

export default TVShowsTopRated;
