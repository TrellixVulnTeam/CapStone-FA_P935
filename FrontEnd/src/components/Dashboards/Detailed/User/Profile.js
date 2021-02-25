import React, { useState } from 'react'
import "../User/UserStyles.css"
//Modal
import Modal from "react-modal"
import { useHistory } from "react-router-dom"



export default function Profile() {
    const history = useHistory()
    //use states:
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repassword, setRepassword] = useState("")

    //card use state
    const [cardHolderName, setCardHolderName] = useState("")
    const [cardNumber, setCardNumber] = useState("")
    const [cardExpMonth, setCardExpMonth] = useState("")
    const [cardExpYear, setCardExpYear] = useState("")
    const [cardSecCode, setcardSecCode] = useState("")


    //update profile MOdal
    const [profilemodal, setProfilemodal] = useState(false)
    const [addcardmodal, setAddcardmodal] = useState(false)

    //Modal functionality
    //Profile Modal
    function closeAndUpdateProfile() {
        //do update changes  !!! 

        //include logout action with redirection to home page
        setProfilemodal(false)
        history.push('/')
    }

    function openToUpdateProfile() {
        //catch user information and put them in the place holder !!!
        //make re-password place holder empty


        setProfilemodal(true)
    }


    //card modal
    function closeAddCard() {
        //do update changes

        setAddcardmodal(false)
    }

    function openAddCard() {
        //catch user card information and put them in place holder and hide security number


        setAddcardmodal(true)
    }

    return (
        <div>

            <div className="profile">
                <h1>Hello from profile</h1>
                <div className="myDiv">
                    <br />
                    <br />
                    <h1>First Name: </h1>
                    <h1>Last Name: </h1>
                    <h1>Phone: </h1>
                    <h1>Email: </h1>
                    <h1>Password: </h1>
                    <button className="btn btn-primary" onClick={openToUpdateProfile}>Edit Profile</button>
                    <br />
                    <br />
                </div>
                <br />
                <div className="myDiv">
                    <br />
                    <br />
                    <h1>Card Holder: </h1>
                    <h1>Card Number: </h1>
                    <h1>Cards Expiary: </h1>
                    <h1>Security Code: </h1>
                    <button className="btn btn-primary" onClick={openAddCard}>Add Card</button>
                    <br />
                    <br />
                </div>

            </div>


            {/*Modals you can change styles of the modal in */}
            {/*Profile*/}
            <div>
                <Modal
                    isOpen={profilemodal}
                    onRequestClose={() => setProfilemodal(false)}
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
                        <button onClick={closeAndUpdateProfile} className="btn btn-primary">Update</button>
                    </div>
                </Modal>

                {/*Card*/}
                <Modal
                    isOpen={addcardmodal}
                    onRequestClose={() => setAddcardmodal(false)}
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
                    <h1>Update Card</h1>
                    <input type="text" className="form-control" placeholder="Holder Name" onChange={(e) => setCardHolderName(e.target.value)} value={cardHolderName} /><br />
                    <input type="text" className="form-control" placeholder="Card Number" onChange={(e) => setCardNumber(e.target.value)} value={cardNumber} /><br />
                    <input type="text" min="1" max="12" className="form-control" placeholder="Expiary Month" onChange={(e) => setCardExpMonth(e.target.value)} value={cardExpMonth} /><br />
                    <input type="text" className="form-control" placeholder="Expiary Year" onChange={(e) => setCardExpYear(e.target.value)} value={cardExpYear} /><br />
                    <input type="password" className="form-control" placeholder="Secret Code" onChange={(e) => setcardSecCode(e.target.value)} value={cardSecCode} /><br />
                    <button onClick={closeAddCard} className="btn btn-primary">Add Card</button>
                </Modal>
            </div>
            <br />
            <br />
            <br />
        </div>
    )
}
