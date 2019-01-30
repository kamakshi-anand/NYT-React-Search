import React from "react";
import "./style.css";

function Nav(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href="/search" onClick={() => props.handlePageChange("Home")} className="nav-link">
          Google Books
        </a>
      </li>
      <li className="nav-item">
        <a href="/search" onClick={() => props.handlePageChange("About")} className="nav-link">
          Search
        </a>
      </li>
      <li className="nav-item">
        <a href="/saved" onClick={() => props.handlePageChange("Blog")} className="nav-link">
          Saved
        </a>
      </li>

    </ul>
  );
}

export default Nav;
