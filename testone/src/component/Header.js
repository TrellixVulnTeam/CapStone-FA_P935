import React from 'react'
//import '../App.css';
import '../component/Style/style.css';
import {
    Navbar,
    Nav,
    Form,
    FormControl,
    Button
} from "react-bootstrap"
import {
    Link
} from "react-router-dom"

//navbar_wrapper
export default function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Financial Advisor</Navbar.Brand>
                <Nav className="mr-auto navbar_wrapper">
                    {/*<Link to="/home">Home</Link>*/}
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </Nav>
            </Navbar>
        </div>
    )
}
