import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (movieName) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${
        process.env.REACT_APP_MOVIE_API
      }&type=movie&s=${movieName.length === 0 ? "avengers" : movieName}"`
    );
    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API}&i=${id}&Plot=full`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (seriesName) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${
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
  },
  reducers: {
    addToMovieList: (state, { payload }) => {
      console.log(payload);
      state.moviesAndSeriesToWatch.push(payload);
    },
    removeDetailOfMovieOrShow: (state) => {
      state.detailOfMovieOrShow = [];
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully");
      return { ...state, allMovies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully of shows");
      return { ...state, allShows: payload };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully");
      return { ...state, detailOfMovieOrShow: payload };
    },
  },
});

export const {
  addToMovieList,
  addToReadingList,
  removeFormReadingList,
  removeDetailOfMovieOrShow,
} = movieSlice.actions;

export default movieSlice.reducer;
