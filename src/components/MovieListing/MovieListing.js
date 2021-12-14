import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector((state) => state.allMovies);
  const shows = useSelector((state) => state.allShows);

  return movies.Response === "True" ? (
    <>
      <div className="movies">
        <h2>Movies</h2>
        <div className="movie-wrapper">
          {movies.Search?.map((movie, i) => (
            <MovieCard data={movie} key={i}></MovieCard>
          ))}
        </div>
      </div>
      <div className="movies">
        <h2>Shows</h2>
        <div className="movie-wrapper">
          {shows.Search?.map((show, i) => (
            <MovieCard data={show} key={i}></MovieCard>
          ))}
        </div>
      </div>
    </>
  ) : (
    <h2>{movies.Error}</h2>
  );
};

export default MovieListing;
