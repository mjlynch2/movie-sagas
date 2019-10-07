# Name of Application
​​SAGAFLIX is a full stack application that displays movies. The home page is a list of movie titles and accompanying posters. Users can click on a movie to be taken to a details page. Within the details page, users can read a longer description of the movie, as well as see the genres associated with that movie. Here, users can choose to edit the movie or return to the main list. The edit movie page allows users to change the title or description of the movie. Movies and genres are stored in a postgresql database.
## Built With
​
- React, Redux, Redux-sagas, Material-UI, Node, Express, Postgresql

## Getting Started

- Create a database called 'saga_movies_weekend'
- Copy and paste the SQL queries from database.sql into Postico's SQL query view to create tables and seed with starter data.
​
### Prerequisites
​
Link to software that is required before you attempt to start the app (e.g. node, mongo).
​
- [Node.js](https://nodejs.org/en/)
- [PostgreSQL]
- [Postico]
​
​
### Installing
​
Steps to get the development environment running.
​
1. Fork and clone the repository.
2. `npm install`
3. `npm run server`
4. `npm run client`
​
### Completed Features
​
High level list of items completed.
​
- [x] Main page: a list view of all movies in the database, showing title, poster, and associated genre(s)
- [x] Detail page: single movie view showing title, poster, description, and assicated genre(s); edit button to move to edit page, back to list button to go back to the list.
- [x] Edit page: text fields to allow user to change the title and description of the movie.
​
### Next Steps
​​
- [o] Add a new genre to a movie
- [o] Search for movies in the search bar
​
## Authors
​
* Mike Lynch
​