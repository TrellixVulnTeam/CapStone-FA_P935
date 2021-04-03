import React from 'react'
//import Footer from "../Footer"
import Navbar from "../Navbar"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "../pages/About.css"
function About() {
  return (
    < >
      <Navbar />
      <br />
      <br />
      <br />
      <div className="about-container">
        <Container>

          <Row className="row">
            <Col className="col">
              <h3>Financial Advisor</h3>

              <p>Is a Full Stack Devlopment Project that aims to ease consulting and data tracking service.</p>
              <p>Is a Business Oriented Platform that focus on financial analysis using standard analysis methodologies</p>
              <p>Focus on Financial Services Sector</p>
            </Col>

            <Col className="col">
              <h3>Technology</h3>

              <p>Front-End: React, Bootstrap, HTML, and CSS</p>
              <p>Back-End: Node.JS, Express, and MongoDb</p>
            </Col>
          </Row>

          <Row class="row">
            <Col className="col">
              <h2>Team</h2>
              <h3 >Sureya Farah</h3>
              <h3 >Adrian Filipe</h3>
              <h3 >Sheak Aftakhar Rahman</h3>
              <h3 >Kanta Husari</h3>
            </Col>
            <Col className="col">
              <h2>Project Manager</h2>
              <h2 >Professor Anjana Shah</h2>
            </Col>
            <Col className="col">
              <h2>Institution</h2>
              <h2 >George Brown College</h2>
              <p >{`Center of ARTS, DESIGN & INFORMATION TECHNOLOGY`}</p>
            </Col>
          </Row>
        </Container>
      </div>


    </>
  )
}

export default About
