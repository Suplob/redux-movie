import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="col-md-3">
      <ul className="list-group sticky-top">
        <NavLink className="list-group-item" to="/" exact>
          All Movies
        </NavLink>
        <NavLink className="list-group-item" to="/watchList">
          Watch List <span className="badge badge-sm bg-primary">0</span>
        </NavLink>
        <NavLink className="list-group-item" to="/finishedMovie">
          Finished Movies <span className="badge badge-sm bg-primary">0</span>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
