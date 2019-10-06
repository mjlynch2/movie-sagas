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

    goEdit = () => {
        this.props.history.push(`/details/edit/${this.props.match.params.id}`);
    }

    goHome = () => {
        this.props.history.push('/');
    }
    render() {
        return (
            <>
                <div className="movieList">
                    {this.props.genres.map((movie) => 
                        <div>
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}></img>{movie.description} 
                        </div>)}
                    <span><strong> Genres: </strong>
                        {this.props.genres.map(genre => <span>{genre.name}  </span>)}</span>
                </div>
                <button onClick={this.goEdit}>Edit</button>
                <button onClick={this.goHome}>Back to List</button>
            </>
        );
    }
}

const mapStateToProps = reduxState => ({
    genres: reduxState.genres
})

export default connect(mapStateToProps)(MovieList);
