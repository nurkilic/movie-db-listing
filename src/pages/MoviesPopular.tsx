import { useQuery } from "@tanstack/react-query";
import { getMoviePopular } from "../services/Movie/getMoviePopular";
import MovieList from "../components/MovieList";

import PaginationPage from "../components/PaginationPage";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const MoviesPopular = () => {
  const { currentPage } = useSelector((state: RootState) => state.movie);

  const { data, isLoading } = useQuery({
    queryKey: ["moviepopular", currentPage],
    queryFn: () => getMoviePopular(currentPage),
  });
  

  return (
    <>
      <h2 className="text-3xl mb-5 max-lg:text-base">Popular Movies</h2>
      <MovieList data={data} isLoading={isLoading}></MovieList>
      <div className="flex justify-center">
        <PaginationPage></PaginationPage>
      </div>
    </>
  );
};

export default MoviesPopular;
