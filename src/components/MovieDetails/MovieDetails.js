import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';
import Button from '@material-ui/core/Button';

// Detailed view of a single chosen movie. Shows the title, poster, description, and associated genre(s). Provides routing to edit the title and/or description, or to go back to the list view.
class MovieList extends Component {

    componentDidMount() {
        this.getMovieDetails();
    }

    getMovieDetails = () => {
        this.props.dispatch({ type: 'FETCH_DETAILS', payload: this.props.match.params.id })
    }

    render() {
        let genres = this.props.genres.map(({ name }) => name );
        genres = genres.join(', ');
        return (
            <>
                <div className="movieDetailsContainer">
                    <h3>{this.props.movie.title}</h3>
                    <div className="descriptionContainer">
                        <img className="moviePosterDetails" src={this.props.movie.poster} alt={this.props.movie.title} />
                        {this.props.movie.description}
                    </div>
                    <div>
                        <strong> Genres: </strong>
                        {genres}
                    </div>
                    <div className="btn">
                        <Button 
                            onClick={() => {this.props.history.push(`/details/edit/${this.props.movie.id}`)}}
                            variant="outlined"
                            color="primary"
                        >
                            Edit
                        </Button>
                    <div/>
                    <div className="btn"/>
                        <Button 
                            onClick={() => {this.props.history.goBack()}}
                            variant="outlined"
                            color="primary"
                        >
                            Back to List
                        </Button>
                    </div>
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
