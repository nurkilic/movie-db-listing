import Language from "./Language";
import VideoMovie from "./VideoMovie";
import VideoTv from "./VideoTv";
import Loading from "./Loading";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import RatingCircle from "./RatingCircle";

const Details = ({ data, isLoading }: any) => {
  const imageUrl = "https://image.tmdb.org/t/p/original";
  const isMovieDetailPage = location.pathname.includes("movie-detail");
  const isTvDetailPage = location.pathname.includes("tv-detail");
  const { language } = useSelector((state: RootState) => state.movie);

  const date = data?.first_air_date || data?.release_date || "";
  const [year, month, day] = date ? date.split("-") : ["", "", ""];
  const dateFormat = date ? `${day}/${month}/${year}` : "";

  if (isLoading) return <Loading />;

  return (
    <div
      className="relative min-h-screen md:h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${imageUrl + data?.backdrop_path})`,
      }}
    >
      <div className="absolute inset-0 bg-slate-900 opacity-80 md:opacity-80" />

      <div className="relative z-10 p-4 md:p-16 flex flex-col md:flex-row">
        {/* Poster Image */}
        <div className="flex-shrink-0 md:w-[400px]">
          <img
            className="rounded-lg w-full md:w-[400px] h-auto"
            src={imageUrl + data?.poster_path}
            alt="Poster"
          />
        </div>

        {/* Content */}
        <div className="text-white mt-4 md:mt-0 md:ml-12 flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold">
                {data?.title || data?.name} {year && `(${year})`}
              </h1>
              <div className="text-lg mt-2">
                {dateFormat}
                {data?.origin_country?.length > 0 &&
                  ` (${data.origin_country})`}
                {" • "}
                {data?.genres?.map((item: any) => item?.name).join(", ")}
              </div>
              {data?.tagline && <em className="block mt-2">{data.tagline}</em>}
            </div>
            {/* <div className="hidden lg:block">
              <Language />
            </div> */}
          </div>

          {/* Rating */}
          {data?.vote_average !== undefined && (
            <div className="py-5 scale-110 pl-4">
             <RatingCircle voteAverage={data?.vote_average}></RatingCircle>
             <span className="text-white"><sup className="text-[6px] -ml-[12px]">%</sup></span>
            </div>
          )}

          {/* Overview */}
          {data?.overview && (
            <div>
              <h2 className="text-xl font-semibold mb-2">
                {language === "TR" ? "Genel Bakış" : "Overview"}
              </h2>
              <p className="text-base">{data.overview}</p>
            </div>
          )}

         
          <div className="w-full max-w-[800px] mx-auto mt-4">
            {isMovieDetailPage ? (
              <VideoMovie isLoading={isLoading} />
            ) : isTvDetailPage ? (
              <VideoTv isLoading={isLoading} />
            ) : null}
          </div>
        </div>

     
        <div className="max-lg:hidden mt-4">
          <Language />
        </div>
      </div>
    </div>
  );
};

export default Details;
