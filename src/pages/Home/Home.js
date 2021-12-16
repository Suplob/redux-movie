import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieListing from "../../components/MovieListing/MovieListing";
import PageLayout from "../../components/PageLayout/PageLayout";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
  searchText,
} from "../../redux/slices/movieSlice";
import "./Home.scss";

const Home = () => {
  const [control, setControl] = useState(false);
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.searchText);

  useEffect(() => {
    dispatch(fetchAsyncShows(searchValue));
    dispatch(fetchAsyncMovies(searchValue));
  }, [control, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setControl(!control);
  };

  return (
    <PageLayout>
      <div className="search-wrapper">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Search Your Movie"
            className="search-input"
            onChange={(e) => dispatch(searchText(e.target.value))}
            value={searchValue}
          />
          <button className="regular-btn" type="submit">
            Search
          </button>
        </form>
      </div>
      <MovieListing />
    </PageLayout>
  );
};

export default Home;
