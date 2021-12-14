import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NotyAlert from "../../common/Noty";
import Footer from "../../components/Footer.js/Footer";
import Header from "../../components/Header/Header";
import Preloader from "../../components/Preloader";
import {
  addToMovieList,
  fetchAsyncMovieOrShowDetail,
  removeDetailOfMovieOrShow,
} from "../../redux/slices/movieSlice";
import "./Detail.scss";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.detailOfMovieOrShow);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(id));
    return () => {
      dispatch(removeDetailOfMovieOrShow());
    };
  }, [dispatch]);

  console.log(data);

  return (
    <div>
      <Header></Header>
      {data.length === 0 ? (
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

            <button
              className="regular-btn"
              style={{ marginTop: "30px" }}
              onClick={(e) => {
                NotyAlert("Movie Added To Watchlist!");
                dispatch(addToMovieList(data));
                e.target.innerText = "Already Added";
                e.target.setAttribute("disabled", true);
              }}
            >
              Add To Watch List
            </button>
          </div>
          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </div>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Detail;
