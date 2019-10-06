import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App/App.css';

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
                {this.props.movies.map((movie) =>
                    <div className="movieContainer" onClick={() => {this.props.history.push(`/details/${movie.id}`)}} key={movie.id}>
                        <img className="moviePoster"src={movie.poster} alt={movie.title}/>
                        <h4>{movie.title}</h4>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    movies: reduxState.movies
})

export default connect(mapStateToProps)(MovieList);
