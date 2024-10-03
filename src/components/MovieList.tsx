import { Skeleton } from "antd";
import { useState } from "react";
import placeHolder4 from "../../public/placeholder4.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import RatingCircle from "./RatingCircle";

const MovieList = ({ data, isLoading }: any) => {
  const imageUrl = "https://image.tmdb.org/t/p/original";
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isMovieDetailPage = location.pathname.includes("movies");
  const isTvDetailPage = location.pathname.includes("tv");
  const isTrendingPage = location.pathname == "/";
 

  const handleClick = (item: any) => {
    isMovieDetailPage && navigate(`/movie-detail/${item?.id}`);
    isTvDetailPage && navigate(`/tv-detail/${item?.id}`);
    isTrendingPage &&
      item.media_type == "tv" &&
      navigate(`/tv-detail/${item?.id}`);
    isTrendingPage &&
      item.media_type == "movie" &&
      navigate(`/movie-detail/${item?.id}`);
  };

  function formatDate(dateString: any) {
    if (!dateString) return "";
    const date = new Date(dateString);
    const month = date.toLocaleString("en-US", { month: "short" });
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day}, ${year}`;
  }

  if (isLoading) {
    return (
      <div className="flex flex-wrap justify-start items-stretch text-white min-h-screen bg-[#10141e]">
        {Array(20)
          .fill(null)
          .map((_, index: any) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2"
            >
              <Skeleton.Button
                active={true}
                className="h-[356px] bg-[rgb(58,58,58)] rounded-lg"
                style={{ borderRadius: "0.5rem", width: "100%" }}
              />
            </div>
          ))}
      </div>
    );
  }

  if (!data || !data.results || data.results.length === 0) {

    return <div className="text-white">No movies available</div>;
  }

  return (
    <div
      className={`flex flex-wrap justify-start items-stretch text-white min-h-screen bg-[#10141e] ${
        !imageLoaded && "mt-7"
      }`}
    >
      {data?.results?.map((item: any) => {
        if (!item) return null;
        return (
          <div
            key={item?.id}
            className="w-full max-sm:mx-3 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 cursor-pointer"
            onClick={() => handleClick(item)}
          >
            {!imageLoaded && (
              <Skeleton.Button
                active={true}
                className="w-full h-[356px] bg-[rgb(58,58,58)]"
              />
            )}
            <div
              className={`rounded-lg overflow-hidden flex flex-col h-full ${
                !imageLoaded ? "hidden" : "block"
              }`}
            >
              {isTrendingPage && (
                <div className="rounded-t-xl p-1 text-zinc-200 text-center font-bold text-base transition-transform duration-200 hover:scale-105 bg-gradient-to-r from-cyan-900 to-gray-500">
                  {item.media_type == "tv" ? "TV Series" : "Movie"}
                </div>
              )}
              <img
                className={`w-full h-[calc(100vh/3)] object-cover object-top ${
                  isTrendingPage ? "rounded-none" : "rounded-t-lg"
                }`}
                src={
                  item?.poster_path ? imageUrl + item.poster_path : placeHolder4
                }
                alt=""
                onLoad={() => setImageLoaded(true)}
              />
              <div className="bg-white text-black flex-grow rounded-b-lg  relative pt-4 min-h-[92px]">
                <span className="font-bold text-[1em] line-clamp-2 pt-1 pl-1">
                  {item?.title || item?.name}
                </span>
                <div className={`absolute -top-5 left-3 rounded-full  `}>
                  <RatingCircle voteAverage={item?.vote_average}></RatingCircle>
                  <span className="text-white">
                    <sup className="text-[6px] -ml-[12px]">%</sup>
                  </span>
                </div>

                <div className="text-gray-500 pb-1 font-normal pl-1 ">
                  {formatDate(item?.release_date || item?.first_air_date)}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
