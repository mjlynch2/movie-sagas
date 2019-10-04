const express = require('./node_modules/express');
const pool = require('../modules/pool');

const router = express.Router();

// GET route to retrieve all movies in the database sorted by id
router.get('/', (req, res) => {
    const query = `SELECT * FROM movies;`;
    pool.query(queryText)
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