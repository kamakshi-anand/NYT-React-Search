import React from "react";
import Thumbnail from "../Thumbnail";
import Button from "../Button/";
import { Container, Row, Col } from "../Grid";



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
            <Button
                        
                        type="success"
                        className="input-lg"
                        
                      >
                        Save
                      </Button>
            <p>
              {/* Ingredients:{props.ingredients} */}
              <b>Page count:</b> {props.pageCount}
              <br></br>
              
              <b>Average Raing:</b> {props.averageRating}
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
