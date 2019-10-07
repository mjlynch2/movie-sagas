import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';
import MovieItem from '../MovieItem/MovieItem';

// Displays a list of all movies in the database. On mount, makes a redux dispatch to fetch all movies. Rendering happens in the MovieItem component.
class MovieList extends Component {

    componentDidMount(){
        this.getMovies();
    }

    getMovies = () => {
        this.props.dispatch({ type: 'FETCH_MOVIES'})
    }

    render() {
        return (
            <div className="movieList">
                <MovieItem movies={this.props.movies} />
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    movies: reduxState.movies
})

export default connect(mapStateToProps)(MovieList);
