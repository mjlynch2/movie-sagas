import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class MovieList extends Component {

    state = {
        movieToDisplay: this.props.genres.title || "test"
    }

    componentDidMount() {
        this.getMovieDetails();
    }
    getMovieDetails = () => {
        this.props.dispatch({ type: 'FETCH_DETAILS', payload: this.props.match.params.id })
    }
    render() {
        return (
            <div className="movieList">
                <pre>{JSON.stringify(this.props.genres)}</pre>
                <p>{this.state.movieToDisplay}</p>
                <p>Genres:</p>
                {/* {this.props.genres.map((item, index) => <span key={index}> {item.title} GENRES:{item.genreList.map((genre) =>  <p>{genre}</p>)}</span>)} */}
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    movies: reduxState.movies,
    genres: reduxState.genres
})

export default connect(mapStateToProps)(MovieList);
