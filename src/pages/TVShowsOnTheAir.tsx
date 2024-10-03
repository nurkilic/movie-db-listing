import { useQuery } from "@tanstack/react-query";
import { getTVShowsOnTheAir } from "../services/TVShows/getTVShowsOnTheAir";
import MovieList from "../components/MovieList";

const TVShowsOnTheAir = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["tvontheair"],
    queryFn: getTVShowsOnTheAir,
  });

  return (
    <>
      <h2 className="text-3xl mb-5 max-lg:text-base">On The Air</h2>
      <MovieList data={data} isLoading={isLoading}></MovieList>
    </>
  );
};

export default TVShowsOnTheAir;
