import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    description: {
        width: 600
    },
});

class EditForm extends Component {

    state = {
        movieToEdit: {
            title: this.props.movie.title,
            description: this.props.movie.description,
            id: this.props.movie.id
        }
    }

    handleChange = (event, keyName) => {
        this.setState({
            movieToEdit: {
                ...this.state.movieToEdit,
                [keyName]: event.target.value
            }
        })
    }

    handleEdit = () => {
        console.log(this.state.movieToEdit);
        this.props.dispatch({type: 'EDIT_MOVIE', payload: this.state.movieToEdit});
        this.props.getMovieDetails();
        alert(`${this.state.movieToEdit.title} has been successfully updated!`);
        this.props.history.push(`/details/${this.props.movie.id}`);
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <TextField id="outlined-name"
                    label="Movie Title"
                    value={this.state.movieToEdit.title}
                    onChange={(event) => this.handleChange(event, 'title')}
                    margin="normal"
                    variant="outlined"
                />
                <TextField id="outlined-name"
                    className={classes.description}
                    label="Movie Description"
                    multiline
                    rows="5"
                    value={this.state.movieToEdit.description}
                    onChange={(event) => this.handleChange(event, 'description')}
                    margin="normal"
                    variant="outlined"
                />
                <Button onClick={this.handleEdit}>Save</Button>
                <Button onClick={() => {this.props.history.goBack()}}>Cancel</Button>
            </div>
        );
    }
}

EditForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = reduxState => ({
    movie: reduxState.movieDetails
})

export default withRouter(withStyles(styles)(connect(mapStateToProps)(EditForm)));