import React, { useState, useEffect } from 'react'
import "./ManagerStyles.css"
import axios from "axios"
import moment from 'moment'
export default function DashboardManagerDetails() {

    const [usersRequests, setusersRequests] = useState([])
    const [consultantList, setconsultantList] = useState([])
    const [pageRefresh, setpageRefresh] = useState(0)
    const [seconds, setSeconds] = useState(0);
    const [reportType, setreportType] = useState("")

    useEffect(() => {

        const interval = setInterval(() => {
            //-----------------------------------------
            axios.post("http://localhost:8080/managerrequests", "")
                .then(res => {
                    const resUsersRequests = res.data
                    setusersRequests([...resUsersRequests])
                    // console.log(usersRequests)
                })

            axios.post("http://localhost:8080/consultants", "")
                .then(res => {
                    const consult = res.data
                    setconsultantList([...consult])
                    // console.log(consultantList)
                })
            //-----------------------------------------
            setSeconds(seconds => seconds + 1);
        }, 5000);
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageRefresh,reportType])

    // function displayConsults() {
    //     return (
    //         <select
    //             // value={reportType}
    //             onChange={e => setreportType(e.target.value)}
    //         >
    //             <option value="">Select Consultatnt</option>
    //             {
    //                 consultantList.map(
    //                     item => <option key={item._id} value={item._id}>{`${item.first_name} ${item.last_name}`}</option>
    //                 )
    //             }
    //         </select>
    //     )
    // }
    function displayUserRequests() {
        if (usersRequests.length === 0) {
            return (
                <h1>NO requests to show</h1>
            )
        } else {
            return (
                //-----------------------------------------
                <table id="customers">
                    <tr>
                        <th>User</th>
                        <th>Topic</th>
                        <th>Forward To</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                    {
                        usersRequests.map(
                            item =>
                                <tr key={item._id}>
                                    <td>{item.user_name}</td>
                                    <td>{item.topic}</td>
                                    {/* <td>{displayConsults()}</td> */}
                                    <td>
                                        <select
                                            // value={reportType}
                                            className='DropList'
                                            onChange={e =>
                                                setreportType({ row: item._id, option: e.target.value })}
                                        >
                                            <option value="">Select Consultatnt</option>
                                            {
                                                consultantList.map(
                                                    consult => <option key={consult._id} value={consult._id}>{`${consult.first_name} ${consult.last_name}`}</option>
                                                )
                                            }
                                        </select>
                                    </td>
                                    <td>{moment(item.created).format("LLL")}</td>
                                    <button onClick={() => postfunction(item)} className="btn btn-primary">Post</button>
                                </tr>
                        )
                    }
                </table>
                //-----------------------------------------
            )
        }
    }
    function selectOnchange(state) {
        setreportType([{
            row: state.row,
            option: state.option
        }])

        console.log(reportType)

    }

    // function resetOptions(){
    //     document.getElementById("DropList").nodeValue= "0";
    // }

    function postfunction(item) {
        const row = {
            row_id: item._id,
            user: item.user_name,
            topic: item.topic,
            forwardto: reportType,
            date: moment(item.created).format("LLL"),
        }
        if (row.forwardto.row === "" || row.forwardto.option === "") {
            window.alert("Please select an option from forward to")
        } else {
            if (row.forwardto.row !== row.row_id) {
                window.alert("Please select an option from forward to")
                setreportType("")
            } else {
                console.log(row)
                setreportType("")
            }
        }
    }

    return (
        <div lassName="mprofile">
            <h1>Hello from Manager DashBoard</h1>
            {/*Received Here*/}
            <div className="myDiv">
                <br />
                <br />
                <h1>Requests Received</h1>
                {displayUserRequests()}
                <br />
                <br />
            </div>

            <br />
            {/*Pending  Here*/}
            <div className="myDiv">
                <br />
                <br />
                <h1>Requests Pending</h1>
                <table id="customers">
                    <tr>
                        <th>Number</th>
                        <th>User</th>
                        <th>Status</th>
                        <th>Topic</th>
                        <th>Date</th>
                    </tr>
                    <tr>
                        <td>02</td>
                        <td>John Doe</td>
                        <td>Pending</td>
                        <td>Some Topic</td>
                        <td>Date</td>
                    </tr>
                </table>
                <br />
                <br />
            </div>

            <br></br>

            {/*Responds  Here*/}
            <div className="myDiv">
                <br />
                <br />
                <h1>Responds</h1>
                <table id="customers">
                    <tr>
                        <th>Number</th>
                        <th>User</th>
                        <th>Status</th>
                        <th>Topic</th>
                        <th>Date</th>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>John Doe</td>
                        <td>Complete</td>
                        <td>Some Topic</td>
                        <td>Date</td>
                    </tr>
                </table>
                <br />
                <br />
            </div>

        </div>
    )
}


/*
https://github.com/mui-org/material-ui/issues/4535

https://blog.logrocket.com/building-styling-tables-react-table-v7/

https://www.pluralsight.com/guides/how-to-get-selected-value-from-a-mapped-select-input-in-react

https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks

https://upmostly.com/tutorials/settimeout-in-react-components-using-hooks
*/