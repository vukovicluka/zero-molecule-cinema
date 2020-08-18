import React from 'react';
import './NewMovie.css';
import Title from '../../components/Title/Title';
import NewMovieForm from '../../components/Form/NewMovieForm';
import NewMovieImg from '../../assets/images/newMovieImg.png';

const NewMovie = () => {
  return (
    <div className='newMovie-wrapper'>
      <Title>Create a new movie</Title>
      <NewMovieForm />
      <figure>
        <img src={NewMovieImg} alt='Tree' className='newMovieImg' />
      </figure>
    </div>
  );
};

export default NewMovie;
