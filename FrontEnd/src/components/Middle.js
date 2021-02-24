import React from 'react';
import MiddleSection from './MiddleSection';
import './Middle.css';

function Middle() {
    return (
        <div className = "middle">
            <h1> Grow you funds, Invest with our Expertise</h1>
            <h3>What Are You Waiting For?</h3>
            <div className = "midddle__container">
                <div className ="middle__wrapper">
                    <ul className ='middle__items'>
                        <MiddleSection
                        src ={process.env.PUBLIC_URL + 'images/img-10.jpg'}
                        text = 'Create your way to live better '
                        label = 'Guide & Advice'
                        path = '/services'/>
                        <div>
                            
                        </div>
                        <MiddleSection
                        src ={process.env.PUBLIC_URL + 'images/img-5.jpg'}
                        text = 'You deserve more finicial freedom '
                        label = 'finance'
                        path = '/services'/>
                         <MiddleSection
                        src ={process.env.PUBLIC_URL + 'images/img-5.jpg'}
                        text = 'Start to build you Finicial Dashboard '
                        label = 'Dashboard'
                        path = '/services'/>
                        
                        </ul>
                         <ul className ='middle__items'>
                        <MiddleSection
                        src ={process.env.PUBLIC_URL + 'images/img-5.jpg'}
                        text = 'View The Best Investment '
                        label = 'finance'
                        path = '/services'/>
                        <MiddleSection
                        src ={process.env.PUBLIC_URL + 'images/img-6.jpg'}
                        text = 'Choose You retirement plan '
                        label = 'finance'
                        path = '/services'/>
                        <MiddleSection
                        src ={process.env.PUBLIC_URL + 'images/img-7.jpg'}
                        text = 'You deserve more finicial freedom '
                        label = 'finance'
                        path = '/services'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Middle
