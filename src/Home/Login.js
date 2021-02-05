import React from 'react';
import styles from '../Styles/styles.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
    Redirect
} from "react-router-dom";



function Login() {
    return (
        <div>
            <h1>this is Log In</h1>
            <form onSubmit={" "}>
                <input type="text" name="email" placeholder="Email" />
                <input type="text" name="password" placeholder="Password" />
                <input type="submit" value="Login" />
            </form>
            <Link>Forgot Password</Link>
        </div>
    );
}

export default Login;
