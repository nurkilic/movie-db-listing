import { useQuery } from "@tanstack/react-query";
import MovieList from "../components/MovieList";
import { getTrendingDay } from "../services/Trending/getTrendingDay";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
const TrendingDay = () => {
  const { langParam } = useSelector((state: RootState) => state.movie);

  const { data, isLoading } = useQuery({
    queryKey: ["trendingday", langParam],
    queryFn: () => getTrendingDay(langParam),
  });
  return (
    <>
      <h2 className="text-3xl mb-5 max-lg:text-base max-lg:my-1">
        Trending Today
      </h2>{" "}
      <MovieList data={data} isLoading={isLoading}></MovieList>
    </>
  );
};

export default TrendingDay;
