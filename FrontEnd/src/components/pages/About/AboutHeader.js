import React from 'react';
import '../../../App.css';
import { Buttons } from '../../Button';
import './AboutHeader.css';

function AboutHeader() {
  return (
    <div className='aboutHeader-container'>

      <img className= 'img' src='../videos/abtImg.jpg' />
      <h1 className= "h1"> ABOUT US </h1>
      <p className="ps">Start Investing With Us</p>
      <div className='aboutHeader-btns'>
        <Buttons
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large' >
          GET STARTED
        </Buttons>
       
      </div>
     
    </div>
    
  );
}

export default AboutHeader;