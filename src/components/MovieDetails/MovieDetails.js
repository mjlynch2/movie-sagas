import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class MovieList extends Component {

    componentDidMount() {
        this.getMovieDetails();
    }
    getMovieDetails = () => {
        this.props.dispatch({ type: 'FETCH_DETAILS', payload: this.props.match.params.id })
    }
    render() {
        return (
            <div className="movieList">

            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    movies: reduxState.movies
})

export default connect(mapStateToProps)(MovieList);
