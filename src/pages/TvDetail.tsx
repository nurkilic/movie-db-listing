import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { getTvDetail } from "../services/Detail/getTvDetail";
import Details from "../components/Details";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const TvDetail = () => {
  const { id } = useParams();
  const { langParam } = useSelector((state: RootState) => state.movie);

  const { data, isLoading } = useQuery({
    queryKey: ["tv-detail", id, langParam],
    queryFn: () => getTvDetail(id, langParam),
  });

  return <Details data={data} isLoading={isLoading}></Details>;
};

export default TvDetail;
