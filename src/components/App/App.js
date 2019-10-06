import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
import EditMovie from '../EditMovie/EditMovie';
import TopNav from '../MaterialUI/TopNav';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <>
        <TopNav />
        <Route exact path="/" component={MovieList}/>
        <Route exact path="/details/:id" component={MovieDetails}/>
        <Route exact path="/details/edit/:id" component={EditMovie}/>
        </>
      </Router>
    );
  }
}

export default App;
