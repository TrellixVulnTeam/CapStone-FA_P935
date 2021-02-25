import React from 'react'
import "./ManagerStyles.css"


export default function DashboardManagerDetails() {
    
    function nothing() {
        console.log('hi')
    }

    return (
        <div lassName="mprofile">
            <h1>Hello from Manager DashBoard</h1>
            {/*Received Here*/}
            <div className="myDiv">
                <br />
                <br />
                <h1>Requests Received</h1>
                <table id="customers">
                    <tr>
                        <th>Number</th>
                        <th>User</th>
                        <th>Status</th>
                        <th>Topic</th>
                        <th>Forward To</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>John Doe</td>
                        <td>Received</td>
                        <td>Some Topic</td>

                        <td>
                            <select >
                                <option >Select Consultant</option>
                                <option value="Spike">Spike</option>
                                <option value="Tom">Tom</option>
                                <option value="Jerry">Jerry</option>
                            </select>
                        </td>

                        <td>Date</td>

                        <td>
                            <button onClick={nothing} className="btn btn-primary">Post</button>
                        </td>

                    </tr>
                </table>
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
