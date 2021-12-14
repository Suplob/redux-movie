import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../../components/MovieCard/MovieCard";
import PageLayout from "../../components/PageLayout/PageLayout";
import "./WatchMovie.scss";

const WatchMovie = () => {
  const watchList = useSelector((state) => state.moviesAndSeriesToWatch);
  console.log(watchList);

  return (
    <PageLayout>
      <h4>Movies and series in your watchlist</h4>
      <div className="watch-list-wrapper">
        {watchList.map((data) => (
          <MovieCard key={data.imdbID} data={data}></MovieCard>
        ))}
      </div>
    </PageLayout>
  );
};

export default WatchMovie;
