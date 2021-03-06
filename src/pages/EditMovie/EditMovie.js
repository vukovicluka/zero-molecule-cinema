import React from 'react';
import '../NewMovie/NewMovie.css';
import Title from '../../components/Title/Title';
import EditMovieForm from '../../components/Form/EditMovieForm';
import EditMovieImg from '../../assets/images/editMovieImg.png';

const EditMovie = (props) => {
  return (
    <div className='newMovie-wrapper'>
      <Title>Edit</Title>
      <EditMovieForm movieData={props.location.state.movie} />
      <figure>
        <img src={EditMovieImg} alt='Edit' className='newMovieImg' />
      </figure>
    </div>
  );
};

export default EditMovie;
