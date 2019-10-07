import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';
import EditForm from '../MaterialUI/EditForm';

// Component to edit a single movie's title and description. On mount, dispatch to fetch the details of the movie at the corresponding route id. The rendering of the text fields takes place in component EditForm.
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
