import { useQuery } from "@tanstack/react-query";
import MovieList from "../components/MovieList";
import { getTVShowsPopular } from "../services/TVShows/getTVShowsPopular";

const TVShowsPopular = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["tvpopular"],
    queryFn: getTVShowsPopular,
  });

  return (
    <>
      <h2 className="text-3xl mb-5 max-lg:text-base">Popular</h2>
      <MovieList data={data} isLoading={isLoading}></MovieList>
    </>
  );
};

export default TVShowsPopular;
