import React from "react";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from "./components/Books";
import AllBooks from "./components/AllBooks";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <Router>
      <div>      
        <switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/search" component={Books} />
          <Route exact path="/saved" component={AllBooks} />
          {/* <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} /> */}
          {/* <Route component={NoMatch} /> */}
        </switch>
      </div>
    </Router>
  );
}

export default App;
