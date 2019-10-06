const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();
// GET ROUTES
// GET route to retrieve all movies in the database sorted by id
router.get('/', (req, res) => {
    const query = `SELECT * FROM "movies" ORDER BY "id"`;
    pool.query(query)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('Error in SELECT', error);
        })
})

// GET route to retrieve a single movie whose id is the given parameter, then get the names of all genres of that movie
router.get('/details/:id', (req, res) => {
    const movieQuery = `SELECT * FROM "movies" where "id" = $1;`;
    const id = [req.params.id];
    console.log(id);
    pool.query(movieQuery, id)
        .then((movieResult) => {
            const genreQuery = `SELECT "name" FROM "genres"
                                    JOIN "movies_genres" 
                                        ON "genres".id = "movies_genres".genre_id
                                    JOIN "movies"
                                        ON "movies".id = "movies_genres".movie_id
                                    WHERE "movies_genres".movie_id = $1;`;
            pool.query(genreQuery, id)
                .then((genreResult) => {
                    console.log("MOVIE:", movieResult.rows, "GENRES:", genreResult.rows);
                    const resultToSend = [movieResult.rows, genreResult.rows];
                    console.log(resultToSend);
                    
                    res.send(resultToSend);
                })
        })
        .catch((error) => {
            console.log('Error in SELECT', error);
        })
})

// POST route to add a movie to the database

// PUT route to update a movie's title, description
router.put('/', (req, res) => {
    const updatedMovie = req.body;
    const queryValues = [updatedMovie.title, updatedMovie.description, updatedMovie.id];
    const query = `UPDATE movies SET "title" = $1, "description" = $2 WHERE id = $3;`;
    pool.query(query, queryValues)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error in PUT', error);
        })
})



module.exports = router;