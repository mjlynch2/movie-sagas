import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../App/App.css';

class MovieItem extends Component {
    render() {
        return (
            <>
            {this.props.movies.map((movie, index) => 
                <div className="movieContainer" onClick={() => { this.props.history.push(`/details/${movie.id}`) }} key={index}>
                    <img className="moviePoster" src={movie.poster} alt={movie.title} />
                    <h4>{movie.title}</h4>
                </div>
            )}
            </>
        );
    }
}

const mapStateToProps = reduxState => ({
    movies: reduxState.movies
})

export default withRouter(connect(mapStateToProps)(MovieItem));