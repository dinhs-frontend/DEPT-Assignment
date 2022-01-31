import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Header.css';

function Header() {
  return (
    <div className='header-container'>
      <h1>WORK</h1>
      <div className='header-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          View case <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default Header;