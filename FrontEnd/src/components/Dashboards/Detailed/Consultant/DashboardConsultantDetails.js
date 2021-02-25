import React from 'react'
import "./ConsultantStyles.css"

export default function DashboardConsultantDetails() {
    function nothing() {
        console.log('hi')
    }
    return (

        <div lassName="cprofile">
            <h1>Hello from Consultant DashBoard</h1>
            {/*Received Here*/}
            <div className="myDiv">
                <br />
                <br />
                <h1>Requests Received</h1>
                <table id="customers">
                    <tr>
                        <th>Number</th>
                        <th>User</th>
                        <th>Topic</th>
                        <th>Content</th>
                        <th>Update status</th>
                        <th>Date</th>
                        <th>Upload Report</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>John Doe</td>
                        <td>Some Topic</td>
                        <td>Some Content</td>

                        <td>
                            <select >
                                <option >Update Status</option>
                                <option value="pending">Pending</option>
                                <option value="Complete">Complete</option>
                            </select>
                        </td>

                        <td>Date</td>

                        <td>
                            <input type="file" id="myFile" name="filename" />
                        </td>

                        <td>
                            <button onClick={nothing} className="btn btn-primary">Post</button>
                        </td>

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
                <h1>Completed</h1>
                <table id="customers">
                    <tr>
                        <th>Number</th>
                        <th>User</th>
                        <th>Topic</th>
                        <th>Content</th>
                        <th>Date</th>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>John Doe</td>
                        <td>Some Topic</td>
                        <td>Some Content</td>
                        <td>Date</td>
                    </tr>
                </table>
                <br />
                <br />
            </div>

        </div>
    )
}
