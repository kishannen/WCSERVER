// Reyes, Kisses Shannen O.
// WD 201

const express = require('express');
const req = require('express/lib/request');
const app = express();

app.use(express.json());
//Array for GET METHOD

const movies = [{
  id: 1,
  title: 'Superman'
},
{
  id: 2,
  title: 'Iron Man'
},
{
  id: 3,
  title: 'Batman'
},
{
  id: 4,
  title: 'Hulk'
}];

// GET ALL THE MOVIES

app.get('/api/movies', (req, res) => {
  res.send(movies);
});

// GET MOVIE BY ID

app.get('/api/movies/:id', (req, res) => {
  const movie = movies.find(h => h.id === parseInt(req.params.id));
  if (!movie) return res.status(404).send('The movie with the given ID was not found.');
  res.send(movie);
});

// ADD A MOVIE

app.post('/api/movies/', (req, res) => {
  const movie = {
    id: movies.length + 1,
    title: req.body.title
  }
  movies.push(movie);
  res.send(movie);
});

app.get('/', (req, res) => {
  res.send('My New App!');
});

app.get('/api/heroes', (req, res) => {
  res.send(['Superman', 'Iron Man', 'Batman', 'Hulk', 'Ant Man']);
});

app.get('/api/heroes/:id', (req, res) => {
  res.send(req.params.id);
});

app.get('/api/heroes/:title/:publisher', (req, res) => {
  res.send(req.params);
});

app.get('/api/heroes/:title/:publisher', (req, res) => {
  res.send([req.params.id, req.query]);
});

app.listen(3545, () => console.log('Listening on port 3545'));