import { useLocation } from "react-router-dom";
import iconSearch from "../../public/icon-search.svg";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getSearchTv } from "../services/SearchAll/getSearchTv";
import { getSearchMovie } from "../services/SearchAll/getSearchMovie";
import { useDispatch, useSelector } from "react-redux";
import { setCombinedDataEmpty, setData } from "../redux/MovieSlice";
import { RootState } from "../redux/store";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const location = useLocation();
  const isMoviesPage = location.pathname.includes("/movies");
  const isTvPage = location.pathname.includes("/tv");
  const isDetailPage = location.pathname.includes("/movie-detail");
  const { clickedSearch } = useSelector((state: RootState) => state.movie);

  const dispatch = useDispatch();

  const { data: tvData } = useQuery({
    queryKey: ["searchTvShows", searchValue],
    queryFn: () => getSearchTv(searchValue),
    enabled: isSearchClicked && !!searchValue,
  });
  const { data: movieData } = useQuery({
    queryKey: ["searchMovies", searchValue],
    queryFn: () => getSearchMovie(searchValue),
    enabled: isSearchClicked && !!searchValue,
  });

  useEffect(() => {
    if (searchValue == "") {
      dispatch(setCombinedDataEmpty());
      // dispatch(setSearchValueR(searchValue))
    }
  }, [searchValue]);

  useEffect(() => {
    if (tvData || movieData) {
      dispatch(setData({ tvData, movieData }));
      setIsSearchClicked(false);
    }
  }, [tvData, movieData, dispatch]);

  if (isMoviesPage || isTvPage || isDetailPage) {
    return null;
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setIsSearchClicked(true);
    }
  };

  return (
    <>
      {!clickedSearch ? (
        <div className="flex  items-center justify-between pt-4">
          <div className="flex items-center ">
            <img src={iconSearch} className="min-w-9 min-h-9 pl-1 " alt="" />
            <input
              className="min-w-[450px] bg-white text-gray-400 pl-3 text-lg ml-2 rounded-3xl p-[5px]"
              type="text"
              placeholder="Search for Movies or TV Series"
              value={searchValue}
              onKeyDown={handleKeyDown}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchValue(e.target.value)
              }
            />{" "}
            <button
              className="searchbutton font-semibold text-white w-32 h-10 rounded-3xl -ml-14 relative"
              onClick={() => {
                setIsSearchClicked(true);
              }}
            >
              <span className="absolute bottom-2 right-10 text-base">
                Search
              </span>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex  items-center w-full my-2">
          <div className="flex items-center w-full">
            <input
              className=" bg-white text-gray-400 pl-3 text-lg mx-2 rounded-3xl flex-grow"
              type="text"
              placeholder="Search for Movies or TV Series"
              value={searchValue}
              onKeyDown={handleKeyDown}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchValue(e.target.value)
              }
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
