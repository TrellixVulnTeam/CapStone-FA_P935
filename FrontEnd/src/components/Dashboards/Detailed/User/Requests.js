import React, { useState } from 'react'
import "../User/UserStyles.css"
//Modal
import Modal from "react-modal"
import { useHistory } from "react-router-dom"





export default function Requests() {
    const history = useHistory()


    const [requestModal, setrequestModal] = useState(false)


    const [topic, setTtopic] = useState("")
    const [description, setDescription] = useState("")

    //handle modal request
    function closeAndUpdateRequest() {
        //do updates  here

        setrequestModal(false)
    }
    function openAndUpdateRequest() {

        setrequestModal(true)
    }


    return (
        <div>
            <div className="profile">
                <h1>Hello from Requests</h1>
                <div className="myDiv">
                    <br />
                    <br />
                    <h1>Requests Here</h1>
                    <table id="customers">
                        <tr>
                            <td>Request 01</td>
                        </tr>

                        <tr>
                            <td>Request 02</td>
                        </tr>

                        <tr>
                            <td>Request 03</td>
                        </tr>

                    </table>
                    <br />
                    <br />
                    <button className="btn btn-primary" onClick={openAndUpdateRequest}>Make a Request</button>
                    <br />
                    <br />
                </div>
                <br />
                <div className="myDiv">
                    <br />
                    <br />
                    <h1>Responds Here</h1>

                    <br />
                    <br />
                    <table id="customers">
                        <tr>
                            <td>ٌRespond 01</td>
                            <td><button className="btn btn-primary">Download Report</button></td>
                        </tr>

                        <tr>
                            <td>ٌRespond 02</td>
                            <td><button className="btn btn-primary">Download Report</button></td>
                        </tr>

                        <tr>
                            <td>ٌRespond 03</td>
                            <td><button className="btn btn-primary">Download Report</button></td>
                        </tr>

                    </table>

                </div>
            </div>
            <div>

                <Modal
                    isOpen={requestModal}
                    onRequestClose={() => setrequestModal(false)}
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
                        <h1>Make a Request</h1>
                        <select >
                            <option >Select an Option</option>
                            <option value="cash">Cash Report</option>
                            <option value="balancesheet">Balance Sheet</option>
                            <option value="cashflow">Cash Flow</option>
                        </select>
                        <input type="text" className="form-control" placeholder="Topic" onChange={(e) => setTtopic(e.target.value)} value={topic} /><br />
                        <select >
                            <option >Urgency</option>
                            <option value="urgent">Urgent</option>
                            <option value="notUrgent">Not Urgent</option>
                        </select>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" /><br />
                        <button onClick={closeAndUpdateRequest} className="btn btn-primary">Send</button>
                    </div>
                </Modal>
            </div>


            <br />
            <br />
            <br />
        </div>
    )
}

