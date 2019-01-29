const axios = require("axios");
const router = require("express").Router();
const key="AIzaSyBuyBxPOwqJnXGscbVwEKhyrrzzh72PP1U";

  

router.get("/books", (req, res) => {  
  const URL = "https://www.googleapis.com/books/v1/volumes?q="+req.query.q+"&key=AIzaSyBuyBxPOwqJnXGscbVwEKhyrrzzh72PP1U"
//const URL = "https://www.googleapis.com/books/v1/volumes?q=Harry&key=AIzaSyBuyBxPOwqJnXGscbVwEKhyrrzzh72PP1U"
  console.log("I am in Node" + URL);
  axios
  .get(URL)
  .then(({ data: { items } }) => res.json(items))
  .catch(err => res.status(422).json(err));


  // axios.get(URL).then(function(response) {

  //   // Load the HTML into cheerio and save it to a variable
  //   // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
  // //  var $ = cheerio.load(response.data);
  
    
  
  //   // Log the results once you've looped through each of the elements found with cheerio
  //   console.log(response.data);
  //   res.json(response);
  // })
  // .catch(err => res.status(422).json(err));
  // axios
  //  .get(URL) 
  //  .then(({ data: { results } }) => res.json(results))
  //  .catch(err => res.status(422).json(err));
});

module.exports = router;
