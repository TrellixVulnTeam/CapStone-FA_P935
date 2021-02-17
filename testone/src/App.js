//import logo from './logo.svg';
//import './App.css';
import {
  Button
} from "react-bootstrap"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

//import components
import Header from "./component/Header"
import Home from "./component/Home"
import About from "./component/About"
import Services from "./component/Services"
import Register from "./component/Register"
import Login from "./component/Login"
import DashboardUser from "./component/Dashboards/DashboardUser"
import DashboardManager from "./component/Dashboards/DashboardManager"
import DashboardCon from "./component/Dashboards/DashboardCon"


function App() {
  return (
    <div className="App">
      <Router>

        {/*<Header/>*/}
        <h1>Financial Advisor</h1>
        <Route path="/home"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/services"><Services /></Route>
        <Route path="/register"><Register /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/dashboardUser"><DashboardUser /></Route>
        <Route path="/dashboardManager"><DashboardManager /></Route>
        <Route path="/dashboardCon"><DashboardCon /></Route>
        {/*<Redirect to="/home"/>*/}
      </Router>
    </div>
  );
}

export default App;
/*
hint:   git submodule add <url> testone
hint:
hint: If you added this path by mistake, you can remove it from the
hint: index with:
hint:
hint:   git rm --cached testone


*/