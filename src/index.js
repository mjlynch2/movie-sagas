import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies);
    yield takeEvery('FETCH_DETAILS', fetchDetails);
    yield takeEvery('EDIT_MOVIE', editMovie);
}

// generator function that performs an axios get request for all movies in the db, then dispatches the result to the movies reducer.
function* fetchMovies() {
    try {
        const response = yield axios.get('/movies');
        yield put({type: 'SET_MOVIES', payload: response.data});
    } catch(error) {
        console.log('Error in saga getMovies', error);
    }
}

// generator function that performs an axios get request for a single movie in the DB, then dispatches the result to the movies reducer.
function* fetchDetails(action) {
    try {
        const response = yield axios.get(`/movies/details/${action.payload}`);
        yield put({type: 'SET_GENRES', payload: response.data});
    } catch (error) {
        console.log('Error in saga getMovies', error);
    }
}

function* editMovie(action) {
    try {
        yield axios.put(`/movies`, action.payload);
    } catch (error) {
        console.log('Error in saga editMovie', error);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));