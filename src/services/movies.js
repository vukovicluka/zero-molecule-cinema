import apiOrigin from './api';

export const getMovies = (authToken) => {
  return fetch(`${apiOrigin}/movies`, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }).then((res) => res.json());
};
