import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { BookList, BookListItem } from "./components/BookList";
//import BookList from "./components/BookList/";
//import BookListItem from "./components/BookListItem/";
import { Container, Row, Col } from "./components/Grid";


class App extends Component {
  state = {
    books: [],
    bookSearch: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    //  alert("i am in");
    API.getBooks(this.state.bookSearch)
      .then(res => {
        console.log("FDFDFDFDFD  " + res.data);
        this.setState({ books: res.data });
      })
      .catch(err => console.log(err));
  };

  addBook = position => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    //  event.preventDefault();
    alert("I am in index " + position + " Value is " + this.state.books[position].volumeInfo.title);
    API.addBook({
      title: this.state.books[position].volumeInfo.title,
      description: this.state.books[position].volumeInfo.description,
      pageCount: this.state.books[position].volumeInfo.pageCount,
      averageRating: this.state.books[position].volumeInfo.averageRating,
      authors: this.state.books[position].volumeInfo.authors,
      selfLink: this.state.books[position].selfLink
      //synopsis : this.state.synopsis
    })
      .then(res => this.loadBooks())
      .catch(err => console.log(err));

  };


  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="bookSearch"
                        value={this.state.bookSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Book"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {/* <h1>Render Recipes Here</h1> */}
              <BookList>
                {this.state.books.map((books, index) => {
                  return (
                    <BookListItem
                      key={index}
                      title={books.volumeInfo.title}
                      href={books.href}
                      // ingredients={recipe.ingredients}
                      thumbnail={books.volumeInfo.imageLinks.thumbnail}
                      authors={books.volumeInfo.authors}
                      pageCount={books.volumeInfo.pageCount}
                      averageRating={books.volumeInfo.averageRating}
                      previewLink={books.volumeInfo.previewLink}
                      description={books.volumeInfo.description}

                      addBook={this.addBook}
                      index={index}
                    // onClick={() => this.addBook(index)}
                    />
                  );
                })}
              </BookList>

            </Col>
          </Row>



        </Container>
      </div>
    );
  }
}

export default App;
