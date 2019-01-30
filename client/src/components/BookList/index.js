//import React from "react";
import React, { Component } from "react";
import Thumbnail from "../Thumbnail";
import Button from "../Button/";
import { Container, Row, Col } from "../Grid";
//import DeleteBtn from "../components/DeleteBtn";



// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function BookListItem(props) {
  return (
    <li className="list-group-item">

      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={props.thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{props.title}</h3>
            {props.source === "books" ? (
              <Button
                type="success"
                className="input-lg"
                onClick={() => props.addBook(props.index)}
              >
                Save
                       </Button>
            ) : (
                <Button
                  type="success"
                  className="input-lg"
                  onClick={() => props.deleteBook(props.id)}
                >
                  Delete
                      </Button>
              )}


            <p>
              {/* Ingredients:{props.ingredients} */}
              <b>Authors:</b> {props.authors}
              <br></br>
              <b>Page count:</b> {props.pageCount}
              <br></br>
              {/* <b>Link:</b>{props.previewLink}
              <br></br> */}
              <b>Average Rating:</b> {props.averageRating}
              <br></br>
              <b>Description:</b> {props.description}

            </p>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href={props.href}
            >
              View Book!
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
