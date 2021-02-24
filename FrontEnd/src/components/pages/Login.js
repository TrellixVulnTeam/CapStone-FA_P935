import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import Navbar from "../Navbar"

function Login() {
  //-----------------------------------
  const history = useHistory()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function logIn() {
      let user = { email, password }
      console.warn(user);
      try {
          //change link and method for 
          let result = await fetch(`https://webhook.site/72e2b53d-0825-4caf-9cf9-a226be2efabc`, {
              //let result = await fetch(`http://localhost:8080/api/register`, {
              method: 'post',
              mode: 'no-cors',
              headers: {
                  'Accept': 'application/json',
                  'contentType': 'application/json'
              },
              body: JSON.stringify({
                  EmailAddress: email,
                  PasswordUsed: password,
              })
          })
          console.log(result)
          //result=await result.json()
          localStorage.setItem("user-info", JSON.stringify(result))
          history.push('/')
      } catch (error) {
          console.log(error)
      }
      //localStorage.setItem("user-info",JSON.stringify(result))
  }
  
  //-----------------------------------
  return (
    <div>
      <Navbar />
      <div className="col-sm-6 offset-sm-3">
        <h1>Login Page</h1>
        <input type="text" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} /><br />
        <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} /><br />
        <button onClick={logIn} className="btn btn-primary">Login</button>
      </div>
    </div>
  )
}

export default Login
