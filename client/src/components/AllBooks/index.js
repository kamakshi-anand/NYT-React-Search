import React, { Component } from "react";
import Jumbotron from "../Jumbotron";

import Input from "../Input";
import Button from "../Button";
import API from "../../utils/API";
import { BookList, BookListItem } from "../BookList";
//import BookList from "./components/BookList/";
//import BookListItem from "./components/BookListItem/";
import { Container, Row, Col } from "../Grid";
import Nav from "../Nav/";


class App extends Component {
  state = {
    books: [],
   // bookSearch: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
 
    API.getBooksFromDB()
      .then(res =>     { 
        console.log("Data in Index is "+ res.data);     
        this.setState({ books: res.data});
//         alert("Data in after state is is "+ this.state.books.length);   
//         for (var i=0;i<this.state.books.length;i++) {
//           alert("title is "+this.state.books[i].title)
// ;        }
      })
      .catch(err => console.log(err));
     // alert("Books is "+this.state.books.length);
  };

  deleteBook = id => {
    alert(' I am in delete '+ id);
    API.deleteBook(id)
      .then(res=> this.loadBooks())    
      .catch(err => console.log(err));
  
  };



  // deleteBook = position => {
  //   alert("I am in index " + position + " Value is " + this.state.books[position].volumeInfo.title);
  //   API.deleteBook({
  //     title: this.state.books[position].volumeInfo.title,
  //     description: this.state.books[position].volumeInfo.description,
  //     pageCount: this.state.books[position].volumeInfo.pageCount,
  //     averageRating: this.state.books[position].volumeInfo.averageRating,
  //     authors: this.state.books[position].volumeInfo.authors,
  //    // selfLink: this.state.books[position].selfLink
  //     //synopsis : this.state.synopsis
  //   })
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));

  // };


  render() {
    return (
      <div>
         <Nav />
        <Jumbotron />
        <Container>
          
            <Col size="xs-12">
              {/* <h1>Render Recipes Here</h1> */}
             
                <BookList>
                {this.state.books.map((books, index) => {
                  return (
                    <BookListItem
                      key={index}
                      title={books.title}
                      id={books._id}
                     // href={books.href}
                      // ingredients={recipe.ingredients}
                      thumbnail={books.thumbnail}
                      authors={books.authors}
                      pageCount={books.pageCount}
                  //    averageRating={books.volumeInfo.averageRating}
                      //previewLink={books.volumeInfo.previewLink}
                      description={books.description}

                      addBook={this.addBook}
                      source="allbooks"
                      index={index}
                      deleteBook={this.deleteBook}
                    // onClick={() => this.addBook(index)}
                    />
                  );
                })}
              </BookList>
             
              
             

            </Col>
            </Container>
            </div>
       
    );
  }
}

export default App;
