import React from 'react'
//import Footer from "../Footer"

import Navbar from "../../Navbar"
import AboutHeader from './AboutHeader'
import InfoSection from '../../../InfoSection/Info';
import { homeObjOne,  homeObjtwo } from '../../../InfoSection/Data';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import  Footer from "../../Footer";
//create section
function About() {
  
  return (
    <>
     <Navbar/>
     <AboutHeader/> 
    <>
         <InfoSection {...homeObjOne} />
          <InfoSection {...homeObjtwo} />
          
          <Footer />
            
    </>
    </>
  )
}

export default About
