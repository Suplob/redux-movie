import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// First, create the thunk
// export const fetchMovie = createAsyncThunk(
//   "movies/fetchMovie",
//   async (movieName, control) => {
//     // `http://www.omdbapi.com/?apikey=${
//     //   process.env.REACT_APP_MOVIE_API
//     // }&type=movie&s=${searchText.length === 0 ? "avengers" : searchText}" `;
//     axios
//       .get(
//         `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API}&type=movie&s=avengers`
//       )
//       .then((res) => {
//         return res.data;
//       });
//   }
// );

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API}&type=movie&s=avengers`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API}&type=series&s=naruto`
    );
    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (id) => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API}&i=${id}&Plot=full`
    );
    return response.data;
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    allMovies: [],
    moviesToWatch: [],
    finishedMovies: [],
    allShows: [],
    detail: [],
  },
  reducers: {
    addToMovieList: (state, { payload }) => {
      state.toWatch.push(payload);
    },
    addToWatch: (state, { payload }) => {
      state.readingList = state.readingList.filter(
        (book) => book.id !== payload.id
      );
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
      console.log("fetched successfully", payload);
      return { ...state, allShows: payload };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully", payload);
      return { ...state, detail: payload };
    },
  },
});

export const { addMovie, addToReadingList, removeFormReadingList } =
  movieSlice.actions;

export default movieSlice.reducer;
