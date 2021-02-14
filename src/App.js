import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import memeList from "./components/memeList";
import createMeme from "./components/createMeme";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={memeList} />
        <Route path="/create" component={createMeme} />
      </div>
    </Router>
  );
}

export default App;
