import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { getSearchTv } from "../services/SearchAll/getSearchTv";
import { getSearchMovie } from "../services/SearchAll/getSearchMovie";
import { useDispatch } from "react-redux";
import { setCombinedDataEmpty, setData } from "../redux/MovieSlice";
import { SearchOutlined } from "@ant-design/icons";

const SearchBar2 = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const location = useLocation();
  const isMoviesPage = location.pathname.includes("/movies");
  const isTvPage = location.pathname.includes("/tv");
  const isDetailPage = location.pathname.includes("/movie-detail");

  const dispatch = useDispatch();

  const { data: tvData } = useQuery({
    queryKey: ["searchTvShows2", searchValue],
    queryFn: () => getSearchTv(searchValue),
    enabled: isSearchClicked && !!searchValue,
  });
  const { data: movieData } = useQuery({
    queryKey: ["searchMovies2", searchValue],
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
    <div className="flex  items-center w-full my-2">
      <div className="flex items-center w-full">
        <input
          className=" bg-white text-gray-400 pl-3 text-lg ml-2 rounded-3xl flex-grow"
          type="text"
          placeholder="Search for Movies or TV Series"
          value={searchValue}
          onKeyDown={handleKeyDown}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchValue(e.target.value)
          }
        />{" "}
        <SearchOutlined
          className="font-semibold text-white text-2xl h-7 rounded-3xl relative mx-1 "
          onClick={() => {
            setIsSearchClicked(true);
          }}
        >
          <span className="absolute bottom-2 right-10 text-base">Search</span>
        </SearchOutlined>
      </div>
    </div>
  );
};

export default SearchBar2;
