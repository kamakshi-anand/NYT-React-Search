import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1>React Google Book Search</h1>
      <a target="_blank" rel="noopener noreferrer" href="https://developers.google.com/books/docs/v1/using">
        Search for and Save Books of Interest
      </a>
    </div>
  );
}

export default Jumbotron;
