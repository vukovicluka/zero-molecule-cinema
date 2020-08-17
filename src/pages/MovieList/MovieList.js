import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './MovieList.css';
import Title from '../../components/Title/Title';
import { getMovies, deleteMovie } from '../../services/movies';

const MovieList = () => {
  const [movies, setMovies] = useState('');
  const history = useHistory();
  useEffect(() => {
    getMovies(localStorage.getItem('token')).then((res) => {
      setMovies(res);
    });
  }, []);

  const handleDelete = (id) => {
    deleteMovie(localStorage.getItem('token'), id);
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const handleEdit = (movie) => {
    // console.log(`${movie.id}`);
    history.push({
      pathname: '/editMovie',
      state: { movie: movie },
    });
  };

  return (
    <div className='movieList-wrapper'>
      <div className='movieList_header'>
        <Title>Movies</Title>
        <button
          className='movieList_btnNew'
          onClick={() => history.push('/newMovie')}
        >
          Add new<span>&#43;</span>
        </button>
      </div>
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
                  <div className='optionsContainer'>
                    <button
                      className='editBtn'
                      onClick={() => handleEdit(movie)}
                    >
                      Edit
                    </button>
                    <button
                      className='deleteBtn'
                      onClick={() => handleDelete(movie.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;
