import { useQuery } from "@tanstack/react-query";
import MovieList from "../components/MovieList";
import { getTrendingWeek } from "../services/Trending/getTrendingWeek";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const TrendingWeek = () => {
  const { langParam } = useSelector((state: RootState) => state.movie);

  const { data, isLoading } = useQuery({
    queryKey: ["trendingweek", langParam],
    queryFn: () => getTrendingWeek(langParam),
  });
  return (
    <>
      {" "}
      <h2 className="text-3xl mb-5 max-lg:text-base max-lg:my-1">Trending This Week</h2>
      <MovieList data={data} isLoading={isLoading}></MovieList>
    </>
  );
};

export default TrendingWeek;
