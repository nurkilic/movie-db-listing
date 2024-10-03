import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface MovieData {
  results: Array<object>;
}


interface TvData {
  results: Array<object>;
}

interface MovieState {
  dataConverted: {
    movieData: MovieData;
    tvData: TvData;
  };
  searchValue: string | "";
  currentPage: number;
  language: string;
  langParam: string;
  clickedSearch: boolean;
}

const initialState: MovieState = {
  dataConverted: {
    movieData: {
      results: [],
    },
    tvData: {
      results: [],
    },
  },
  searchValue: "",
  currentPage: 1,
  language: "EN",
  langParam: "en-US",
  clickedSearch: false,
};
export const movieSlice = createSlice({
  name: "movie",

  initialState,
  reducers: {
    setData: (
      state,
      action: PayloadAction<{ movieData: MovieData; tvData: TvData }>
    ) => {
      state.dataConverted.movieData = action.payload.movieData;
      state.dataConverted.tvData = action.payload.tvData;
    },
    setCombinedDataEmpty: (state) => {
      state.dataConverted.movieData.results = [];
      state.dataConverted.tvData.results = [];
      state.searchValue = "";
    },
    setSearchValueR: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
      state.langParam = state.language === "TR" ? "tr-TR" : "EN" ? "en-US" : "";
    },
    setClickedSearch: (state, action: PayloadAction<boolean>) => {
      state.clickedSearch = action.payload;
    },
  },
});

export const {
  setData,
  setCombinedDataEmpty,
  setSearchValueR,
  setPage,
  setLanguage,
  setClickedSearch,
} = movieSlice.actions;

export const selectCount = (state: RootState) => state.movie.dataConverted;

export default movieSlice.reducer;
