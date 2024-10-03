import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router-dom";
import { getMovieDetail } from "../services/Detail/getMovieDetail";
import Details from "../components/Details";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const MovieDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const isMovieDetailPage = location.pathname.includes("movie-detail");
  const { langParam } = useSelector((state: RootState) => state.movie);

  const { data, isLoading } = useQuery({
    queryKey: ["movie-detail", id, langParam],
    queryFn: () => getMovieDetail(id, langParam),
  });

  return (
    isMovieDetailPage && <Details data={data} isLoading={isLoading}></Details>
  );
};

export default MovieDetail;
