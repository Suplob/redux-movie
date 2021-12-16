import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import NotyAlert from "../../common/Noty";
import Footer from "../../components/Footer.js/Footer";
import Header from "../../components/Header/Header";
import Preloader from "../../components/Preloader";
import {
  addMoveToFinishList,
  addToMovieList,
  removeDetailOfMovieOrShow,
  removeMovieFromFinishedList,
} from "../../redux/slices/movieSlice";
import "./Detail.scss";
import notFoundImg from "../../images/notFound.png";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const goTo = location.pathname.split("/")[2];

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API}&i=${id}&Plot=full`
    )
      .then((res) => res.json())
      .then((data) => setData(data))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    return () => {
      dispatch(removeDetailOfMovieOrShow());
    };
  }, [dispatch]);

  return (
    <div className="detail-container">
      <Header></Header>
      {loading ? (
        <Preloader />
      ) : (
        <div className="movie-section container">
          <div className="section-left">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"></i>: {data.imdbRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i>: {data.imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i>: {data.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calendar"></i>: {data.Year}
              </span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Actors</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Genres</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>

            <>
              {goTo === "allMovie" && (
                <button
                  className="regular-btn"
                  style={{ marginTop: "30px" }}
                  onClick={(e) => {
                    NotyAlert("Movie Added To Watchlist!");
                    dispatch(addToMovieList(data));
                    e.target.innerText = "Added To Watchlist";
                    e.target.setAttribute("disabled", true);
                  }}
                >
                  Add To Watch List
                </button>
              )}
              {goTo === "watchList" && (
                <button
                  className="regular-btn"
                  style={{ marginTop: "30px" }}
                  onClick={(e) => {
                    NotyAlert("Movie Added To Finished List!");
                    dispatch(addMoveToFinishList(data));
                    e.target.innerText = "Added To Finished List";
                    e.target.setAttribute("disabled", true);
                  }}
                >
                  Add To Finished List
                </button>
              )}
              {goTo === "finishedMovieSeries" && (
                <button
                  className="regular-btn"
                  style={{ marginTop: "30px" }}
                  onClick={(e) => {
                    NotyAlert("Movie Removed From Finished List!");
                    dispatch(removeMovieFromFinishedList(data));
                    e.target.innerText = "Removed from finished list";
                    e.target.setAttribute("disabled", true);
                  }}
                >
                  Remove from finished list
                </button>
              )}
            </>
          </div>
          <div className="section-right">
            <img
              src={data.Poster === "N/A" ? notFoundImg : data.Poster}
              alt={data.Title}
              className={data.Poster === "N/A" ? "notFoundImg" : "foundImg"}
            />
          </div>
        </div>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Detail;
