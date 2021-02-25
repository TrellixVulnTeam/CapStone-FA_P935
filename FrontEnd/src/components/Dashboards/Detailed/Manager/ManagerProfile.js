import React, { useState } from 'react'
import "./ManagerStyles.css"
import Modal from "react-modal"
import { useHistory } from "react-router-dom"

export default function ManagerProfile() {
    const history = useHistory()
    //Manager Data Catch
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repassword, setRepassword] = useState("")
    //modal State
    const [managerModal, setmanagerModal] = useState(false)

    function closeManagerProfile() {
        //do updates 

        setmanagerModal(false)
    }
    
    function openManagerProfile() {


        setmanagerModal(true)
    }
    return (
        <div>
            <div className="mprofile">
                <h1>Hello from profile</h1>
                <div className="myDiv">
                    <br />
                    <br />
                    <h1>First Name: </h1>
                    <h1>Last Name: </h1>
                    <h1>Phone: </h1>
                    <h1>Email: </h1>
                    <h1>Password: </h1>
                    <button className="btn btn-primary" onClick={openManagerProfile}>Edit Profile</button>
                    <br />
                    <br />
                </div>
            </div>
            <div>
                <Modal
                    isOpen={managerModal}
                    onRequestClose={() => setmanagerModal(false)}
                    style={
                        {
                            overlay: {
                                backgroundColor: 'ActiveCaption',
                            },
                            content: {
                                color: 'MenuText',
                                width: '50%',
                                height: '50%',
                                top: '50%',
                                left: '50%',
                                right: 'auto',
                                bottom: 'auto',
                                marginRight: '-50%',
                                transform: 'translate(-50%, -50%)'
                            },
                        }
                    }
                >
                    <div className="col-sm-6 offset-sm-3">
                        <h1>Update Profile</h1>
                        <input type="text" className="form-control" placeholder="First Name" onChange={(e) => setFname(e.target.value)} value={fname} /><br />
                        <input type="text" className="form-control" placeholder="Last Name" onChange={(e) => setLname(e.target.value)} value={lname} /><br />
                        <input type="text" className="form-control" placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} value={phone} /><br />
                        <input type="text" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} /><br />
                        <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} /><br />
                        <input type="password" className="form-control" placeholder="Re-Password" onChange={(e) => setRepassword(e.target.value)} value={repassword} /><br />
                        <button onClick={closeManagerProfile} className="btn btn-primary">Update</button>
                    </div>
                </Modal>
            </div>
        </div>
    )
}