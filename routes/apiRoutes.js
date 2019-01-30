const axios = require("axios");
const path = require("path");
const router = require("express").Router();
const key="AIzaSyBuyBxPOwqJnXGscbVwEKhyrrzzh72PP1U";
const booksController = require("../controllers/booksController");

// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/public/index.html"));
// });

router.get("/books", (req, res) => {  
  const URL = "https://www.googleapis.com/books/v1/volumes?q="+req.query.q+"&key=AIzaSyBuyBxPOwqJnXGscbVwEKhyrrzzh72PP1U"
//const URL = "https://www.googleapis.com/books/v1/volumes?q=Harry&key=AIzaSyBuyBxPOwqJnXGscbVwEKhyrrzzh72PP1U"
  console.log("I am in Node" + URL);
  axios
  .get(URL)
  .then(({ data: { items } }) => res.json(items))
  .catch(err => res.status(422).json(err));
});

// router.get("/api/allbooks", (req, res) => {   
//   booksController.findAll
//   .then(({ data: { items } }) => res.json(items))
//   .catch(err => res.status(422).json(err));
// });

router.route("/allbooks") 
  .get(booksController.findAll);

router.route("/books") 
  .post(booksController.create)

  
  router
  .route("/books/:id")
  .delete(booksController.remove);

module.exports = router;
