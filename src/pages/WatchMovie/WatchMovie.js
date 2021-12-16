import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../../components/MovieCard/MovieCard";
import PageLayout from "../../components/PageLayout/PageLayout";
import "./WatchMovie.scss";

const WatchMovie = () => {
  const watchList = useSelector((state) => state.moviesAndSeriesToWatch);
  return (
    <PageLayout>
      {!watchList.length ? (
        <h3>You don't have any move or show on your watchlist!</h3>
      ) : (
        <>
          <h2>Movies and series in your watchlist</h2>
          <div className="watch-list-wrapper">
            {watchList.map((data, i) => (
              <MovieCard key={i} data={data} comingFrom="watchList"></MovieCard>
            ))}
          </div>
        </>
      )}
    </PageLayout>
  );
};

export default WatchMovie;
