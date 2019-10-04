import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieList extends Component {

    getMovies = () => {
        this.props.dispatch({ type: 'FETCH_MOVIES'})
    }
    render() {
        return (
            <div className="movieList">

            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState
})

export default connect(mapStateToProps)(MovieList);
