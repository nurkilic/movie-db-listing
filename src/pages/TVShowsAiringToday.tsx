import { useQuery } from "@tanstack/react-query";
import MovieList from "../components/MovieList";
import { getTvShowsAiringToday } from "../services/TVShows/getTVShowsAiringToday";

const TVShowsAiringToday = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["tvairingtoday"],
    queryFn: getTvShowsAiringToday,
  });

  return (
    <>
      <h2 className="text-3xl mb-5 max-lg:text-base">Airing Today</h2>
      <MovieList data={data} isLoading={isLoading}></MovieList>
    </>
  );
};

export default TVShowsAiringToday;
