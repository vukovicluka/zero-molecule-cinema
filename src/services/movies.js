import apiOrigin from './api';

export const getMovies = (authToken) => {
  return fetch(`${apiOrigin}/movies`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }).then((res) => res.json());
};

export const createMovie = (authToken, movieData) => {
  return fetch(`${apiOrigin}/movies`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    body: movieData,
  }).then((res) => res.json());
};

export const deleteMovie = (authToken, movieId) => {
  return fetch(`${apiOrigin}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
};

export const updateMovie = (authToken, movieId, movieData) => {
  return fetch(`${apiOrigin}/movies/${movieId}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
    body: movieData,
  }).then((res) => res.json());
};
