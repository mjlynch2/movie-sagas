import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div className="App">
            <Link to="/">Home</Link>
        </div>
        <Route exact path="/" component={MovieList}/>
        <Route exact path ="/details/:id" component={MovieDetails}/>
      </Router>
    );
  }
}

export default App;
