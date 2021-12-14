import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import MovieListing from "../../components/MovieListing/MovieListing";
import PageLayout from "../../components/PageLayout/PageLayout";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../redux/slices/movieSlice";
import "./Home.scss";

const Home = () => {
  const [searchText, setSearchText] = useState([]);
  const [control, setControl] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);

  function handleSearch(e) {
    setSearchText(e.target.value);
    history.push({
      pathname: "/",
      search: `?q=${searchText}`,
    });
  }

  return (
    <PageLayout>
      <div className="search-wrapper">
        <div>
          <input
            placeholder="Search Your Movie"
            className="search-input"
            onChange={handleSearch}
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
