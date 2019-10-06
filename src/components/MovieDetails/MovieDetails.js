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

    goHome = () => {
        this.props.history.push('/');
    }
    render() {
        return (
            <>
                <div className="movieList">
                    <h3>{this.props.movie.title}</h3>
                    <img src={this.props.movie.poster} alt={this.props.movie.title}/>
                    <p>{this.props.movie.description}</p>
                    <span>
                        <strong> Genres: </strong>
                        {this.props.genres.map((genre, index) => <span key={index}>{genre.name}</span>)}
                    </span>
                    <br/>
                    <button onClick={() => {this.props.history.push(`/details/edit/${this.props.movie.id}`)}}>Edit</button>
                    <button onClick={this.goHome}>Back to List</button>
                </div>
            </>
        );
    }
}

const mapStateToProps = reduxState => ({
    genres: reduxState.genres,
    movie: reduxState.movieDetails
})

export default connect(mapStateToProps)(MovieList);
