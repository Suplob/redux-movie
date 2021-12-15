import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
  const watchList = useSelector((state) => state.moviesAndSeriesToWatch);
  const finishedMovie = useSelector((state) => state.finishedMovies);
  return (
    <div className="col-md-3">
      <ul className="list-group sticky-top">
        <NavLink className="list-group-item" to="/" exact>
          All Movies
        </NavLink>
        <NavLink className="list-group-item" to="/watchList">
          Watch List{" "}
          <span className="badge badge-sm bg-primary">{watchList.length}</span>
        </NavLink>
        <NavLink className="list-group-item" to="/finishedMovie">
          Finished Movies{" "}
          <span className="badge badge-sm bg-primary">
            {finishedMovie.length}
          </span>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
