import React from "react";
import "./style.css";

// function Nav() {
//   return (
//     <nav className="navbar navbar-dark bg-dark">
//       <a className="navbar-brand" href="/">
//         Google Books
//       </a>
//       <a className="navbar-brand search" href="/">
//         Search
//       </a>
//       <a className="navbar-brand saved" href="/">
//         Saved
//       </a>

//     </nav>
//   );
// }

function Nav(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href="#home" onClick={() => props.handlePageChange("Home")} className="nav-link">
          Google Books
        </a>
      </li>
      <li className="nav-item">
        <a href="#about" onClick={() => props.handlePageChange("About")} className="nav-link">
          Search
        </a>
      </li>
      <li className="nav-item">
        <a href="#blog" onClick={() => props.handlePageChange("Blog")} className="nav-link">
          Saved
        </a>
      </li>

    </ul>
  );
}

export default Nav;
