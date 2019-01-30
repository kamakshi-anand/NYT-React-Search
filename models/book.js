const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  rating : String,
  date: { type: Date, default: Date.now },
  authors: { type: String, required: true},
  href:{type: String},
  thumbnail:{type: String},
  //previewLink: {type: String, required: true},
  pageCount: {type: Number}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
