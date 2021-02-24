import React from 'react';
//import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Services} from './components/pages/Services/Services';
import About from './components/pages/About';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import DashboardUser from "./components/Dashboards/DashboardUser"
import DashboardManager from "./components/Dashboards/DashboardManager"
import DashboardCon from "./components/Dashboards/DashboardCon"


function App() {
  return (
    <>
      <Router>
        {/*<Navbar />*/}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/dashboardUser' component={DashboardUser} />
          <Route path='/dashboardManager' component={DashboardManager} />
          <Route path='/dashboardCon' component={DashboardCon} />
        </Switch>
      </Router>
    </>
  );
}

export default App;