import styles from '../Styles/styles.css'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";
import About from "../Home/About"
import ContactUs from "../Home/ContactUs"
import Services from "../Home/Services"
import Register from "../Home/Register"
import Login from "../Home/Login"
import Dashboard from "../SubNavs/User/UserHome"




function Home() {
  return (
    <>
    <Router>
      <h1>This is Financial Advisor</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/ContactUs">Contact Us</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Register">Register</Link>
        <Link to="/LogIn">Log In</Link>
        <Link to="/Dashboard">Dashboard</Link>
        <Switch>

          <div>
          <Route exact path="/About" component={About} />
          <Route exact path="/ContactUs" component={ContactUs} />
          <Route exact path="/Services" component={Services} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/LogIn" component={Login} />
          <Route exact path="/Dashboard" component={Dashboard} />
          </div>

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default Home;




/*
    <Router>
      <h1>This is Financial Advisor</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/ContactUs">Contact Us</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Register">Register</Link>
        <Link to="/LogIn">Log In</Link>
        <Link to="/Dashboard">Dashboard</Link>
        <Switch>

          <div>
          <Route exact path="/About" component={About} />
          <Route exact path="/ContactUs" component={ContactUs} />
          <Route exact path="/Services" component={Services} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/LogIn" component={Login} />
          <Route exact path="/Dashboard" component={Dashboard} />
          </div>

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
*/


/*
For test
import styles from '../Styles/styles.css'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";
import About from "../Home/About"
import ContactUs from "../Home/ContactUs"
import Services from "../Home/Services"
import Register from "../Home/Register"
import Login from "../Home/Login"
import Dashboard from "../SubNavs/User/UserHome"

const Dashboardfunc = () => {

  return (
    <div>
      <Route exact path="/Dashboard" component={Dashboard} />
    </div>
  )

}
const mainComp = () => {
  return (
    <div>
      <Route exact path="/About" component={About} />
      <Route exact path="/ContactUs" component={ContactUs} />
      <Route exact path="/Services" component={Services} />
      <Route exact path="/Register" component={Register} />
      <Route exact path="/LogIn" component={Login} />
      {<Redirect to="/" />}
      {<Route exact path="/Dashboard" component={Dashboard} />}
      </div>
      )
    
    }
    
    function Home() {
      return (
        <>
    
    
          <Router>
            <Switch>
    
    
              <Route exact path="/Dashboard" component={Dashboardfunc} />
              <Route component={mainComp} />
    
            </Switch>
          </Router>
        </>
      );
    }
    
    export default Home;

*/