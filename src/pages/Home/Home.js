import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MovieListing from "../../components/MovieListing/MovieListing";
import PageLayout from "../../components/PageLayout/PageLayout";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../redux/slices/movieSlice";
import "./Home.scss";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [control, setControl] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncShows(searchText));
    dispatch(fetchAsyncMovies(searchText));
  }, [control, dispatch]);

  return (
    <PageLayout>
      <div className="search-wrapper">
        <div>
          <input
            placeholder="Search Your Movie"
            className="search-input"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="regular-btn"
            onClick={() => {
              setControl(!control);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <MovieListing />
    </PageLayout>
  );
};

export default Home;
