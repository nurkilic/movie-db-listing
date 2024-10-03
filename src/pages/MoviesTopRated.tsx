import { useQuery } from "@tanstack/react-query";
import MovieList from "../components/MovieList";
import { getMovieTopRated } from "../services/Movie/getMovieTopRated";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import PaginationPage from "../components/PaginationPage";

const MoviesTopRated = () => {
  const { currentPage } = useSelector((state: RootState) => state.movie);

  const { data, isLoading } = useQuery({
    queryKey: ["movietoprated", currentPage],
    queryFn: () => getMovieTopRated(currentPage),
  });

  return (
    <>
      <h2 className="text-3xl mb-5 max-lg:text-base">Top Rated</h2>
      <MovieList data={data} isLoading={isLoading}></MovieList>
      <div className="flex justify-center">
        <PaginationPage></PaginationPage>
      </div>
    </>
  );
};

export default MoviesTopRated;
