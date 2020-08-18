import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import './Form.css';
import { updateMovie } from '../../services/movies';
import Dropzone from '../Dropzone/Dropzone';

const EditMovieForm = ({ movieData }) => {
  const { id, title, year, poster } = movieData;
  const [data, setData] = useState({
    title: '',
    year: '',
  });
  const [files, setFiles] = useState([]);
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  useEffect(() => {
    setData({
      title,
      year,
    });
  }, []);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    const stringData = { title: data.title, year: data.year };
    formData.append('data', JSON.stringify(stringData));
    formData.append('files.poster', files[0]);

    try {
      const updatedMovie = await updateMovie(
        localStorage.getItem('token'),
        id,
        formData
      );
      if (updatedMovie) {
        history.push('/zero-molecule-cinema/movieList');
      } else {
        console.log('Error!');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <div className='form-row'>
          <label htmlFor='title' className='form-label'>
            Title*
          </label>
          <input
            type='text'
            name='title'
            className='form-input'
            value={data.title}
            onChange={handleChange}
            ref={register({ required: true })}
          />
          {errors.title && <p className='error'>Title can not be empty</p>}
        </div>
        <div className='form-row'>
          <label htmlFor='year' className='form-label'>
            Publication year
          </label>
          <input
            type='text'
            name='year'
            className='form-input'
            value={data.year}
            onChange={handleChange}
            ref={register}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='poster' className='form-label'>
            Cover image*
          </label>
          <Dropzone files={files} setFiles={setFiles} poster={poster} />
        </div>
        <div className='buttonsRow'>
          <button
            className='cancelBtn'
            onClick={() => history.push('/movieList')}
          >
            Cancel
          </button>
          <button type='submit' className='submitBtn'>
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditMovieForm;
