import React from 'react'
import { Link } from 'react-router-dom'

function MiddleSection(props) {
    return (
        <>
        
        <li className= "middle___item">
            <Link className = "middle__item__link" to ={props.path}>
                <figure className = "middle__item__pic-wrap" data-category={props.label}>
                    <img src = {props.src} alt='Finicial Freedom' className='middle__item__img'/>
                </figure>
                <div className="middle___item__info">
                    <h5 className="middle___item__text">{props.text}</h5>
                </div>
            </Link>
        </li>
            
        </>
    )
}

export default MiddleSection
