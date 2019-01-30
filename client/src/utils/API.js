import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getBooks: function(query) {
   // console.log("i am in get books"+query);
    return axios.get("/api/books", { params: { q: query } });
  },

  getBooksFromDB: function(query) {
     console.log("i am in get All books");
     return axios.get("/api/allbooks", { params: { q: query } });
   },

  addBook: function(bookData) {
     console.log("i am inadd book in API.js "+bookData);
     return axios.post("/api/books", bookData);
   },

   deleteBook: function(id){
     console.log("check delete book "+id);
     return axios.delete("/api/books/"+id )
   }
   
}; 
