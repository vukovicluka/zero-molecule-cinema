import React from 'react';
import './Main.css';
import Title from '../../components/Title/Title';
import MainImg from '../../assets/images/main.png';

const Main = () => {
  return (
    <div className='wrapper'>
      <div className='main-content'>
        <Title>Your movie list is empty</Title>
        <button className='addBtn'>Create a new movie</button>
      </div>
      <figure>
        <img src={MainImg} alt='Main' className='mainImg' />
      </figure>
    </div>
  );
};

export default Main;
