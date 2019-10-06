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
                <EditForm getMovieDetails={this.getMovieDetails}/>
            </>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState
})


export default connect(mapStateToProps)(EditMovie);
