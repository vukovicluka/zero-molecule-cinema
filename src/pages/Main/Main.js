import React from 'react';
import './Main.css';
import Title from '../../components/Title/Title';
import MainImg from '../../assets/images/main.png';
import { useHistory } from 'react-router-dom';

const Main = () => {
  const history = useHistory();

  return (
    <div className='main-wrapper'>
      <div className='main-content'>
        <Title>Your movie list is empty</Title>
        <button className='addBtn' onClick={() => history.push('/newMovie')}>
          Create a new movie
        </button>
      </div>
      <figure>
        <img src={MainImg} alt='Main' className='mainImg' />
      </figure>
    </div>
  );
};

export default Main;
