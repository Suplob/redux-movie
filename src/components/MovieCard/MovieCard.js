import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { removeDetailOfMovieOrShow } from "../../redux/slices/movieSlice";
import "./MovieCard.scss";
import notFound from "../../images/notFound.png";

const MovieCard = ({ data, comingFrom }) => {
  const [route, setRoute] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (comingFrom === "home") {
      setRoute(`/detail/allMovie/${data.imdbID}`);
    } else if (comingFrom === "watchList") {
      setRoute(`/detail/watchList/${data.imdbID}`);
    } else if (comingFrom === "finishedMovie") {
      setRoute(`/detail/finishedMovieSeries/${data.imdbID}`);
    }
  }, [comingFrom, data]);

  useEffect(() => {
    dispatch(removeDetailOfMovieOrShow);
  }, []);

  return (
    <Link to={route}>
      <div className="card-item">
        <div className="card-inner">
          <div className="card-top">
            <img
              src={data.Poster === "N/A" ? notFound : data.Poster}
              alt={data.Title}
            />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
