import API from './api';

export const loginUser = (data) => {
  return fetch(`${API}/auth/local`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};
