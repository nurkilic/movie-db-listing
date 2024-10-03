import { useQuery } from "@tanstack/react-query";
import MovieList from "../components/MovieList";
import { getMovieUpComing } from "../services/Movie/getMovieUpComing";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import PaginationPage from "../components/PaginationPage";

const MoviesUpComing = () => {
  const { currentPage } = useSelector((state: RootState) => state.movie);

  const { data, isLoading } = useQuery({
    queryKey: ["movieupcoming", currentPage],
    queryFn: () => getMovieUpComing(currentPage),
  });

  return (
    <>
      <h2 className="text-3xl mb-5 max-lg:text-base">Upcoming</h2>
      <MovieList data={data} isLoading={isLoading}></MovieList>
      <div className="flex justify-center">
        <PaginationPage></PaginationPage>
      </div>
    </>
  );
};

export default MoviesUpComing;
