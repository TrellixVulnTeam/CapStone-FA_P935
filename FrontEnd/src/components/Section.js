import React from 'react';
import '../App.css';
import { Buttons } from './Button';
import './Section.css';

function Section() {
  return (
    <div className='section-container'>

<video src='../videos/video-1.mp4' autoPlay loop muted />
      <h1>CREATE YOUR SOLUTION FOR YOUR RETIREMENT </h1>
      <p>With Finicial Web Advisor You Can Start Creating Your Blueprint To You Finicial Freedoom</p>
      <div className='section-btns'>
        <Buttons
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Buttons>
        <Buttons
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick= {(e) => {
            e.preventDefault();
            window.location.href='https://www.youtube.com/watch?v=m4r0QKhrnk0';
            }}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Buttons>
      </div>
    </div>
  );
}

export default Section;