import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (movieName) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${
        process.env.REACT_APP_MOVIE_API
      }&type=movie&s=${movieName.length === 0 ? "avengers" : movieName}"`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (seriesName) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=${
        process.env.REACT_APP_MOVIE_API
      }&type=movie&s=${seriesName.length === 0 ? "friends" : seriesName}" `
    );
    return response.data;
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    allMovies: [],
    moviesAndSeriesToWatch: [],
    finishedMovies: [],
    allShows: [],
    detailOfMovieOrShow: [],
    searchText: "",
  },
  reducers: {
    addToMovieList: (state, { payload }) => {
      state.moviesAndSeriesToWatch.push(payload);
    },
    addMoveToFinishList: (state, { payload }) => {
      let newState = {
        ...state,
        finishedMovies: [...state.finishedMovies, payload],
        moviesAndSeriesToWatch: state.moviesAndSeriesToWatch.filter(
          (movie) => movie.imdbID !== payload.imdbID
        ),
      };
      return newState;
    },
    removeDetailOfMovieOrShow: (state) => {
      state.detailOfMovieOrShow = [];
    },
    removeMovieFromFinishedList: (state, { payload }) => {
      let newState = {
        ...state,
        finishedMovies: state.finishedMovies.filter(
          (movie) => movie.imdbID !== payload.imdbID
        ),
      };
      return newState;
    },
    searchText: (state, { payload }) => {
      state.searchText = payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {},
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      return { ...state, allMovies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      return { ...state, allShows: payload };
    },
  },
});

export const {
  addToMovieList,
  removeDetailOfMovieOrShow,
  addMoveToFinishList,
  removeMovieFromFinishedList,
  searchText,
} = movieSlice.actions;

export default movieSlice.reducer;
