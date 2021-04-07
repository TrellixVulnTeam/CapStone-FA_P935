import React from 'react'
import '../../App.css'
import InfoSection from '../../InfoSection/Info';
import {homeObjthree } from '../../InfoSection/Data';
import Section from '../Section'
import Footer from "../Footer";
import Navbar from "../Navbar"

function Home() {
    return (
        <>
        <Navbar/>
            <Section />

            <InfoSection {...homeObjthree} />
            <Footer />
        </>
    )
}

export default Home
