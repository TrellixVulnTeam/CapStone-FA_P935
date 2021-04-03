import React, { useState } from 'react'
import '../../App.css';
import './Register.css';
import Navbar from "../Navbar"
import axios from "axios"
import { useHistory } from "react-router-dom"

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
            console.log(user)
            axios.post('http://localhost:8080/user', user)
                .then(res => {
                    //console.log(res.data.errors.email.message)
                    console.log(res)
                    let errors = res.data.errors
                    let errorReport = []
                    console.log(`errors are here ${errors}`)
                    for (const property in errors) {
                        console.log(`${property}: ${errors[property].message}`);
                        errorReport.push(`${property}: ${errors[property].message}`)
                    }
                    setError(errorReport)
                    //console.log()
                    if (errorReport.length === 0 && res.data.keyValue.email.length <= 0) {
                        history.push('/')
                    } else {
                        if (res.data.keyValue.email.length > 0) {
                            setError("User Already Exist")
                        } else if (errorReport.length !== 0) {
                            setError(errorReport)
                        }
                    }
                })
                .catch(error => {
                    console.log(`Something went wrong ${error}`)
                })
        }
    }
    return (
        <>

            <Navbar />
            <br />
            <br />
            <div className="col-sm-6 offset-sm-3">
                <input type="text" className="form-control" placeholder="First Name" onChange={(e) => setFname(e.target.value)} value={fname} /><br />
                <input type="text" className="form-control" placeholder="Last Name" onChange={(e) => setLname(e.target.value)} value={lname} /><br />
                <input type="text" className="form-control" placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} value={phone} /><br />
                <input type="text" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} /><br />
                <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} /><br />
                <input type="password" className="form-control" placeholder="Re-Password" onChange={(e) => setRepassword(e.target.value)} value={repassword} /><br />
                <button onClick={signUp} className="btn btn-primary">Sign Up</button>
                <br />
                <br />
                <div>
                    <h1>{error}</h1>
                </div>
                <br />
                <br />
            </div>
        </>
    )
}