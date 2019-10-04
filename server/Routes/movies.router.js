const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();
// GET ROUTES
// GET route to retrieve all movies in the database sorted by id
router.get('/', (req, res) => {
    const query = `SELECT * FROM "movies"`;
    pool.query(query)
        .then((result) => {
            console.log(result.rows);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('Error in SELECT', error);
        })
})

// GET route to retrieve the genres for the selected movie
router.get('/details/:id', (req, res) => {
    const query = `SELECT "name" FROM "genres"
	JOIN "movies_genres" 
		ON "genres".id = "movies_genres".genre_id
	JOIN "movies"
		ON "movies".id = "movies_genres".movie_id
    WHERE "movies".id = $1;`;
    const id = [req.params.id];
    pool.query(query, id)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('Error in SELECT', error);
        })
})

// POST route to add a movie to the database

// PUT route to update a movie's title, description
router.put('/:id', (req, res) => {
    const updatedMovie = req.body;
    const queryValues = [updatedMovie.title, updatedMovie.description, req.params.id];
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