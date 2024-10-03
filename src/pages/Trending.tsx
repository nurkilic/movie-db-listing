import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Segmented } from "antd";
import { useState } from "react";
import TrendingWeek from "./TrendingWeek";
import TrendingDay from "./TrendingDay";
import MovieList2 from "../components/MovieList2";

const Trending = () => {
  const { dataConverted } = useSelector((state: RootState) => state.movie);

  const movies = dataConverted?.movieData?.results || [];
  const tvShows = dataConverted?.tvData?.results || [];

  const moviesNew = movies?.map((item) => {
    return { ...item, media_type: "movie" };
  });
  const tvNew = tvShows?.map((item) => {
    return { ...item, media_type: "tv" };
  });

  const combinedResults = [...moviesNew, ...tvNew];

  const [selected, setSelected] = useState<string | null>("today");

  return (
    <>
      <div className="flex justify-end max-lg:scale-90 ">
        {" "}
        <Segmented<string>
          options={[
            { label: "Today", value: "today", className: "segment-item1" },
            {
              label: "This Week",
              value: "this-week",
              className: "segment-item2",
            },
          ]}
          style={{
            backgroundColor: "transparent",
            border: "1px solid white",
            color: "white",
          }}
          className="rounded-full segment "
          onChange={(value) => {
            setSelected(value);
        
          }}
        />
      </div>

      {combinedResults.length > 0 ? (
        <>
          <h2 className="mb-5 h-1">
            <MovieList2 data={combinedResults}></MovieList2>
          </h2>
        </>
      ) : (
        <>
          {selected == "this-week" ? (
            <TrendingWeek></TrendingWeek>
          ) : selected == "today" ? (
            <TrendingDay></TrendingDay>
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
};

export default Trending;
