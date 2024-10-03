import { useQuery } from "@tanstack/react-query";
import MovieList from "../components/MovieList";
import { getMovieNowPlaying } from "../services/Movie/getMovieNowPlaying";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";


import PaginationPage from "../components/PaginationPage";

const MoviesNowPlaying = () => {
  
  const { currentPage } = useSelector((state: RootState) => state.movie);
  
 
  const { data, isLoading } = useQuery({
    queryKey: ["movienowplaying",currentPage],
    queryFn: () => getMovieNowPlaying(currentPage),
  });

  return (
    <>
      <h2 className="text-3xl mb-5 max-lg:text-base">Now Playing</h2>
      <MovieList data={data} isLoading={isLoading}></MovieList>
      <div className="flex justify-center">
        <PaginationPage></PaginationPage>
      </div>
    </>
  );
};

export default MoviesNowPlaying;
