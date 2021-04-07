import React, { useState } from 'react'
import '../../../App.css';
import './Register.css';
import Navbar from "../../Navbar"
import axios from "axios"
import { useHistory } from "react-router-dom"
import 'font-awesome/css/font-awesome.min.css';
export default function Register() {
    //----------------------------------
    //const history = useHistory()
    const [error, setError] = useState("")
    const history = useHistory()
    //use states:
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repassword, setRepassword] = useState("")

    //using axios
    const signUp = e => {
        e.preventDefault();
        let user = {
            "first_name": fname,
            "last_name": lname,
            "phone": phone,
            "email": email,
            "password": password,
            "authlevel": "user"
        }
        if (password !== repassword) {
            setError("Passwords does not match")
        } else {
            // console.log(user)
            axios.post('http://localhost:8080/user', user)
                .then(res => {
                    console.log(res)
                    if (res.data.errors === null || res.data.errors === undefined) {
                        if (res.data.keyValue === null || res.data.keyValue === undefined) {
                            history.push('/')
                        } else if (res.data.keyValue.email.length > 0) {
                            setError("User Already Exist")
                        }
                    } else {
                        let errors = res.data.errors
                        let errorReport = []
                        for (const property in errors) {
                            errorReport.push(`${property}: ${errors[property].message}`)
                        }
                        setError(errorReport)
                    }
                })

        }
    }

    return (
        <>
        
            <Navbar />
            
        <div className="reg-body">
            <form>
                <h3>Register</h3>
               
            <div className="col-sm-6 offset-sm-3">
            <div className="form-group">
                    <label> First name</label>
                <input  type="text" className="form-control" placeholder=" &#xF007; First Name" onChange={(e) => setFname(e.target.value)} value={fname} /><br />
                
                </div>
                <div className="form-group">
                 <label>Last name</label>
                <input type="text" className="form-control" placeholder=" &#xF007; Last Name" onChange={(e) => setLname(e.target.value)} value={lname} /><br />
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                <input type="text" className="form-control" placeholder=" &#xf095; Phone Number" onChange={(e) => setPhone(e.target.value)} value={phone} /><br />
                </div>
                <div className="form-group">
                    <label>Email</label>
                <input type="text" className="form-control" placeholder=" &#xf0e0; Email" onChange={(e) => setEmail(e.target.value)} value={email} /><br />
               </div>
               <div className="form-group">
                    <label>Password</label>
                <input type="password" className="form-control" placeholder=" &#xf023; Password" onChange={(e) => setPassword(e.target.value)} value={password} /><br />
                </div>
                <div className="form-group">
                    <label> Confrim Password</label>
                <input type="password" className="form-control" placeholder=" &#xf071; Confirm-Password" onChange={(e) => setRepassword(e.target.value)} value={repassword} /><br />
                </div>
                <button onClick={signUp} className="btn btn-dark btn-lg btn-block">Sign Up</button>
                <br />
                <br />
                <p id="error">{error}</p>
                <br />
                <br />
            </div>
            {/* <div className='sign-up'></div> */}
            </form>
            <br />
            <br />
            </div>
            
        </>
    )
}