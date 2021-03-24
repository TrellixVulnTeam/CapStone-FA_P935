import React, { useState, useEffect } from 'react'
import "../User/UserStyles.css"
//Modal
import Modal from "react-modal"
import { useHistory } from "react-router-dom"
import axios from "axios"
import moment from 'moment'



export default function Requests() {
    const history = useHistory()
    const [serverFname, setserverFname] = useState("")
    const [serverLname, setserverLname] = useState("")
    const [serverPhone, setserverPhone] = useState("")
    const [serverEmail, setserverEmail] = useState("")
    const [serverPassword, setserverPassword] = useState("")

    const [pageRefresh, setpageRefresh] = useState(0)
    const [requests, setrequests] = useState([])

    const [requestModal, setrequestModal] = useState(false)
    const [errorMessage, seterrorMessage] = useState("")

    const [reportType, setreportType] = useState("")
    const [topic, setTtopic] = useState("")
    const [urgency, seturgency] = useState("")
    const [description, setDescription] = useState("")



    useEffect(() => {
        const user = {
            "email": localStorage.getItem("user"),
        }
        axios.post("http://localhost:8080/users/getuser", user)
            .then(res => {
                const userData = res.data[0]
                setserverFname(userData.first_name)
                setserverLname(userData.last_name)
                setserverPhone(userData.phone)
                setserverEmail(userData.email)
                setserverPassword(userData.password)

            })
    }, [serverFname, serverLname, serverPhone, serverEmail, serverPassword])

    //load requests
    useEffect(() => {
        const user = {
            email: localStorage.getItem("user"),
        }
        axios.post("http://localhost:8080/userrequests", user)
            .then(res => {
                const requestData = res.data
                setrequests([...requestData])
                console.log(requests)
            })


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageRefresh])


    //handle modal request
    function closeAndUpdateRequest(e) {
        e.preventDefault()
        //do updates  here  
        const request = {
            reporttype: reportType,
            topic: topic,
            urgency: urgency,
            description: description,
            email: serverEmail,
            user_name: `${serverFname} ${serverLname}`
        }
        if (topic === "" || description === "") {
            seterrorMessage(`Please fill topic and description`)
        } else {
            axios.post('http://localhost:8080/userrequest', request)
                .then(res => {
                    // const requestData = res.data.errors
                    // console.log(res.data)
                    // console.log(requestData)
                    setreportType("")
                    setTtopic("")
                    seturgency("")
                    setDescription("")
                    setrequestModal(false)
                    setpageRefresh(pageRefresh + 1)
                })
        }
    }

    function openAndUpdateRequest() {

        setrequestModal(true)
    }

    function displayRequests() {
        if (requests.length === 0) {
            return <h1>No Requests Made</h1>
        } else {
            return (
                <div className="Scroll_Pane">
                    <table id="customers">
                        <thead>
                            <tr>
                                <th>Report Type</th>
                                <th>Topic</th>
                                <th>Urgency</th>
                                <th>Description</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                requests.map(
                                    item =>
                                        <tr key={item._id}>
                                            <td>{item.reporttype}</td>
                                            <td>{item.topic}</td>
                                            <td>{item.urgency}</td>
                                            <td>{item.description}</td>
                                            <td>{moment(item.created).format("LLL")}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            )
        }
    }

    return (
        <div>
            <div className="profile">
                <h1>Hello from Requests</h1>
                <div className="myDiv">
                    <br />
                    <br />
                    <h1>Requests Here</h1>
                    <div>{displayRequests()}</div>
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
                        <tbody>
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
                        </tbody>
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
                        <select
                            value={reportType}
                            onChange={e => setreportType(e.target.value)}
                        >
                            <option value="">Select a Built in Report</option>
                            <option value="cash">Cash Report</option>
                            <option value="balancesheet">Balance Sheet</option>
                            <option value="cashflow">Cash Flow</option>
                        </select>
                        <input type="text" className="form-control" placeholder="Topic" onChange={(e) => setTtopic(e.target.value)} value={topic} /><br />
                        <select
                            value={urgency}
                            onChange={e => seturgency(e.target.value)}
                        >
                            <option value="">Urgency</option>
                            <option value="urgent">Urgent</option>
                            <option value="notUrgent">Not Urgent</option>
                        </select>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" /><br />
                        <button onClick={closeAndUpdateRequest} className="btn btn-primary">Send</button>
                    </div>
                    <br />
                    <br />
                    <div>
                        {errorMessage}
                    </div>
                </Modal>
            </div>


            <br />
            <br />
            <br />
        </div>
    )
}

