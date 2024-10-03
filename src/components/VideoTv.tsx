import VideoList from "./VideoList";
import { useQuery } from "@tanstack/react-query";
import {  useParams } from "react-router-dom";
import { getVideoTv } from "../services/Videos/getVideoTv";

const VideoTv = ({isLoading}:any) => {
  const { id } = useParams();
 

  const { data } = useQuery({
    queryKey: ["video-tv"],
    queryFn: () => getVideoTv(id)
,
  });

  return !isLoading &&  <VideoList data={data}></VideoList> 
};

export default VideoTv;
