const express = require('express');
const HttpStatus = require('http-status-codes');
const validate = require('validate.js');
const Movie = require('../models/movie');

const router = express.Router();

// GET /movies
router.get('/movies', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(HttpStatus.OK).json(movies);
  } catch (err) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
});

// GET /movies/:id
router.get('/movies/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (movie) {
      res.status(HttpStatus.OK).json(movie);
    } else {
      res.status(HttpStatus.NOT_FOUND).json({ message: 'Filme não encontrado.' });
    }
  } catch (err) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
});

// POST /movies
router.post('/movies', async (req, res) => {
  const constraints = {
    title: { presence: true },
    director: { presence: true },
    cast: { presence: true },
    year: { presence: true, numericality: { onlyInteger: true } }
  };

  const validation = validate(req.body, constraints);

  if (validation) {
    res.status(HttpStatus.BAD_REQUEST).json({ message: validation });
    return;
  }

  const movie = new Movie({
    title: req.body.title,
    director: req.body.director,
    cast: req.body.cast,
    year: req.body.year
  });

  try {
    const newMovie = await movie.save();
    res.status(HttpStatus.CREATED).json(newMovie);
  } catch (err) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
});

// PUT /movies/:id
router.put('/movies/:id', async (req, res) => {
  const constraints = {
    title: { presence: true },
    director: { presence: true },
    cast: { presence: true },
    year: { presence: true, numericality: { onlyInteger: true } }
  };

  const validation = validate(req.body, constraints);

  if (validation) {
    res.status(HttpStatus.BAD_REQUEST).json({ message: validation });
    return;
  }

  try {
    const movie = await Movie.findById(req.params.id);
    if (movie) {
      movie.title = req.body.title;
      movie.director = req.body.director;
      movie.cast = req.body.cast;
      movie.year = req.body.year;
      
      const updatedMovie = await movie.save();
      res.status(HttpStatus.OK).json(updatedMovie);
    } else {
      res.status(HttpStatus.NOT_FOUND).json({ message: 'Filme não encontrado.' });
    }
  } catch (err) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
});

// DELETE /movies/:id
router.delete('/movies/:id', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (movie) {
      await movie.remove();
      res.status(HttpStatus.NO_CONTENT).send();
    } else {
      res.status(HttpStatus.NOT_FOUND).json({ message: 'Filme não encontrado.' });
    }
  } catch (err) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
});

module.exports = router;  