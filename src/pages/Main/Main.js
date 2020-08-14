import React from 'react';
import './Main.css';
import Title from '../../components/Title/Title';
import MainImg from '../../assets/images/main.png';

const Main = () => {
  return (
    <div className='wrapper'>
      <Title>Your movie list is empty</Title>
      <button>Create a new movie</button>
      <figure>
        <img src={MainImg} alt='Main' />
      </figure>
    </div>
  );
};

export default Main;
