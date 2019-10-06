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
        // let movieToDisplay = this.props.genres.filter((movie) => {
        //     return movie.id !== undefined
        // });
        // console.log(movieToDisplay)
        return (
            <>
                <div className="movieList">
                    {/* {this.props.genres.movie.map((movie, index) => 
                        <div key={index}>
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}></img>{movie.description} 
                        </div>)} */}
                    {/* <span><strong> Genres: </strong>
                        {this.props.genres.map(genre => <span>{genre.name}  </span>)}</span>
                <button onClick={() => {this.props.history.push(`/details/edit/${movieToDisplay[0].id}`)}}>Edit</button>
                <button onClick={this.goHome}>Back to List</button> */}
                {JSON.stringify(this.props.genres.movie)}
                {/* <p>{this.props.genres.movie.title}</p> */}
                </div>
            </>
        );
    }
}

const mapStateToProps = reduxState => ({
    genres: reduxState.genres
})

export default connect(mapStateToProps)(MovieList);
