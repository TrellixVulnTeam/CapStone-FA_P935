import React, { useState } from 'react'
//styles
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
//import other pages
import DashboardUserDetails from "./DashboardUserDetails"
import Profile from "./Profile"
import Requests from "./Requests"
import Update from "./Update"


export default function UserHeader() {
    const [key, setKey] = useState('home');

    return (
        <div className="col-sm-100 offset-sm-0">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand >{`John Doe User`}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Badge pill variant="dark">{'your Last Login was: 31/02/2021 5:00 pm '}</Badge>
                    </Nav>
                    <Nav>
                        <Button variant="secondary">Logout</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <br/>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="home" title="Dashboard">
                    <DashboardUserDetails/>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <Profile/>
                </Tab>
                <Tab eventKey="requests" title="Requests" >
                    <Requests/>
                </Tab>
                <Tab eventKey="update" title="Update" >
                    <Update/>
                </Tab>
            </Tabs>
        </div>
    );
}


/*
<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
</NavDropdown>
*/

/*
<div>
<Badge pill variant="light">
Light
</Badge>{' '}

</div>
*/
/**

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
//add badge here
<Nav>
<Nav.Link href="#deets">More deets</Nav.Link>
<Nav.Link eventKey={2} href="#memes">
Dank memes
</Nav.Link>
</Nav>
</Navbar.Collapse>
</Navbar>
*/