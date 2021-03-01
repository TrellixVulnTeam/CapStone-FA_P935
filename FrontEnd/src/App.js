import React from 'react';
//import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {Services} from './components/pages/Services/Services';
import About from './components/pages/About';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import DashboardUser from "./components/Dashboards/DashboardUser"
import DashboardManager from "./components/Dashboards/DashboardManager"
import DashboardCon from "./components/Dashboards/DashboardCon"
import Modal from "react-modal"


//fix browser modal error
Modal.setAppElement('#root')
function App() {
  return (
    <>
      <Router>
        {/*<Navbar />*/}
        <Switch>
          <Route exact path='/'  component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/dashboardUser' component={DashboardUser} />
          <Route exact path='/dashboardManager' component={DashboardManager} />
          <Route exact path='/dashboardCon' component={DashboardCon} />
          <Redirect to="/"/>
        </Switch>
      </Router>
    </>
  );
}

export default App;