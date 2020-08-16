import apiOrigin from './api';

export const loginUser = (data) => {
  return fetch(`${apiOrigin}/auth/local`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};
