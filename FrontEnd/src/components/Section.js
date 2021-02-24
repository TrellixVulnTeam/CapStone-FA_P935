import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Section.css';

function Section() {
  return (
    <div className='section-container'>

<video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>CREATE YOUR SOLUTION FOR YOUR RETIREMENT </h1>
      <p>With Finicial Web Advisor You Can Start Creating Your Blueprint To You Finicial Freedoom</p>
      <div className='section-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default Section;