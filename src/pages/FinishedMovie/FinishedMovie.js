import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../../components/MovieCard/MovieCard";
import PageLayout from "../../components/PageLayout/PageLayout";
import "./FinishedMovie.scss";

const FinishedMovie = () => {
  const finishedMovie = useSelector((state) => state.finishedMovies);

  return (
    <PageLayout>
      {finishedMovie.length === 0 ? (
        <h3>You don't have any movie or series in your finished list!</h3>
      ) : (
        <>
          <h2>Your finished movie and show</h2>
          <div className="movie-wrapper">
            {finishedMovie.map((data, i) => (
              <MovieCard key={i} data={data} comingFrom="finishedMovie" />
            ))}
          </div>
        </>
      )}
    </PageLayout>
  );
};

export default FinishedMovie;
