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
                {/* <pre>{JSON.stringify(this.props.movies)}</pre> */}
                {this.props.movies.map((movie) =>
                    <div className="movieContainer" key={movie.id}>
                        <img src={movie.poster} alt={movie.title}/>
                        <Link to={`/details/${movie.id}`}><h3>{movie.title}</h3></Link>
                        <p>{movie.description}</p>
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
