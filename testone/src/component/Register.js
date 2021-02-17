import React, { useState } from 'react'
import Header from "./Header"
import { useHistory } from "react-router-dom"
export default function Register() {
    const history = useHistory()


    //use states:
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repassword, setRepassword] = useState("")

    //sending data to the server
    //this is just a test so we can 
    async function signUp() {
        let user = { fname, lname, phone, email, password, repassword }
        console.warn(user);
        try {
            let result = await fetch(`https://webhook.site/72e2b53d-0825-4caf-9cf9-a226be2efabc`, {
                //let result = await fetch(`http://localhost:8080/api/register`, {
                method: 'post',
                mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'contentType': 'application/json'
                },
                body: JSON.stringify({
                    firstName: fname,
                    lastName: lname,
                    PhoneNumber: phone,
                    EmailAddress: email,
                    PasswordUsed: password,
                    rePasswordUsed: repassword
                })
            })
            console.log(result)
            //result=await result.json()
            localStorage.setItem("user-info", JSON.stringify(result))
            history.push('/home')
        } catch (error) {
            console.log(error)
        }
        //localStorage.setItem("user-info",JSON.stringify(result))
    }


    return (
        <>
            <Header />
            <div className="col-sm-6 offset-sm-3">
                <h1>Register Page</h1>
                <input type="text" className="form-control" placeholder="First Name" onChange={(e) => setFname(e.target.value)} value={fname} /><br />
                <input type="text" className="form-control" placeholder="Last Name" onChange={(e) => setLname(e.target.value)} value={lname} /><br />
                <input type="text" className="form-control" placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} value={phone} /><br />
                <input type="text" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} /><br />
                <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} /><br />
                <input type="password" className="form-control" placeholder="Re-Password" onChange={(e) => setRepassword(e.target.value)} value={repassword} /><br />
                <button onClick={signUp} className="btn btn-primary">Sign Up</button>
            </div>
        </>
    )
}
