import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';

class MovieList extends Component {

    // componentDidMount() {
    //     this.getMovies();
    // }
    // getMovies = () => {
    //     this.props.dispatch({ type: 'FETCH_MOVIES' })
    // }
    render() {
        const id = this.props.match.params.id;
        return (
            <div className="movieList">
                {JSON.stringify(this.props.movies[id])}
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    movies: reduxState.movies
})

export default connect(mapStateToProps)(MovieList);
