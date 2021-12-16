import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector((state) => state.allMovies);
  const shows = useSelector((state) => state.allShows);

  console.log("movies", movies);
  console.log("shows", shows);

  return movies.Response === "True" ? (
    <>
      {movies.length !== 0 && (
        <div className="movies">
          <h2>Movies</h2>
          <div className="movie-wrapper">
            {movies.Search?.map((movie, i) => (
              <MovieCard data={movie} key={i} comingFrom="home"></MovieCard>
            ))}
          </div>
        </div>
      )}
      {shows.length !== 0 && (
        <div className="movies">
          <h2>Shows</h2>
          <div className="movie-wrapper">
            {shows.Search?.map((show, i) => (
              <MovieCard data={show} key={i} comingFrom="home"></MovieCard>
            ))}
          </div>
        </div>
      )}
    </>
  ) : (
    <h2>{movies.Error}</h2>
  );
};

export default MovieListing;
