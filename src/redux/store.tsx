import { configureStore } from '@reduxjs/toolkit'
import movieReducer from "./MovieSlice"

export const store = configureStore({
  reducer: {
    movie: movieReducer,

  }
})


export type AppStore = typeof store

export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']