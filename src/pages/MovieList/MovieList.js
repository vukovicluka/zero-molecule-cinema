import React, { useState, useEffect } from 'react';
import './MovieList.css';
import Title from '../../components/Title/Title';
import { getMovies, deleteMovie } from '../../services/movies';

const MovieList = () => {
  const [movies, setMovies] = useState('');

  useEffect(() => {
    getMovies(localStorage.getItem('token')).then((res) => {
      setMovies(res);
    });
  }, []);

  const handleDelete = (id) => {
    // console.log(id);
    deleteMovie(localStorage.getItem('token'), id);
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <div className='movieList-wrapper'>
      <Title>Movies</Title>
      <table>
        <thead>
          <tr>
            <th>Cover image</th>
            <th>Title</th>
            <th>Publication year</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {movies &&
            movies.map((movie) => (
              <tr key={movie.id}>
                <td>
                  <img src={movie.poster} alt='poster' className='coverImg' />
                </td>
                <td>{movie.title}</td>
                <td>{movie.year}</td>
                <td className='options'>
                  <button href='/' className='editBtn'>
                    Edit
                  </button>
                  <button
                    href='/'
                    className='deleteBtn'
                    onClick={() => handleDelete(movie.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;
