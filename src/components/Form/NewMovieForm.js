import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import './Form.css';
import { createMovie } from '../../services/movies';
import Dropzone from '../Dropzone/Dropzone';

const NewMovieForm = () => {
  const [files, setFiles] = useState([]);
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const onSubmit = async (data) => {
    const formData = new FormData();
    const stringData = { title: data.title, year: data.year };
    formData.append('data', JSON.stringify(stringData));
    formData.append('files.poster', files[0]);

    try {
      const createdMovie = await createMovie(
        localStorage.getItem('token'),
        formData
      );
      if (createdMovie) {
        history.push('/movieList');
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
            ref={register}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='poster' className='form-label'>
            Cover image*
          </label>
          <Dropzone files={files} setFiles={setFiles} />
        </div>
        <div className='buttonsRow'>
          <button className='cancelBtn' onClick={() => history.goBack()}>
            Cancel
          </button>
          <button type='submit' className='submitBtn'>
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewMovieForm;
