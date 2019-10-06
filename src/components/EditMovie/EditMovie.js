import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';
import EditForm from '../MaterialUI/EditForm';

class EditMovie extends Component {

    componentDidMount() {
        this.getMovieDetails();
    }

    getMovieDetails = () => {
        this.props.dispatch({ type: 'FETCH_DETAILS', payload: this.props.match.params.id })
    }

    render() {
        return (
            <>
                {JSON.stringify(this.props.reduxState.genres)}
                <EditForm getMovieDetails={this.getMovieDetails} movie={this.props.reduxState.genres[0]}/>
            </>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState
})


export default connect(mapStateToProps)(EditMovie);
