import VideoList from "./VideoList";
import { useQuery } from "@tanstack/react-query";
import { getVideoMovie } from "../services/Videos/getVideoMovie";
import { useParams } from "react-router-dom";

const VideoMovie = ({ isLoading }: any) => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["video-movie"],
    queryFn: () => getVideoMovie(id),
  });

  return !isLoading && <VideoList data={data}></VideoList>;
};

export default VideoMovie;
