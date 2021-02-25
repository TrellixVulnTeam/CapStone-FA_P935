import React from 'react'

export default function Update() {



    function submitHandler() {
        console.log("submit")
    }


    return (
        <div className="profile">
            <h1>Hello from Update</h1>
            <div className="myDiv">
                <br />
                <br />
                {/*----------------------------------------*/}
                <h1>1- Step One: Select a template to download</h1>
                <div className="col-sm-6 offset-sm-3">
                    {/*to be  changed later*/}
                    <form onSubmit={submitHandler}>
                        <select >
                            <option >Select an Option</option>
                            <option value="cash">Cash Report</option>
                            <option value="balancesheet">Balance Sheet</option>
                            <option value="cashflow">Cash Flow</option>
                        </select>
                        <input type="submit" value="Download" className="btn btn-primary" />
                    </form>
                </div>
                {/*----------------------------------------*/}

                <br />
                <br />
            </div>
            <br />
            <div className="myDiv">
                <br />
                <br />
                <h1>2- Step Two: Fill up the template and upload</h1>
                
                
                <div className="col-sm-6 offset-sm-3">
                <form onSubmit={submitHandler}>
                <select >
                            <option >Select an Option</option>
                            <option value="cash">Cash Report</option>
                            <option value="balancesheet">Balance Sheet</option>
                            <option value="cashflow">Cash Flow</option>
                        </select>
                    <input type="file" id="myFile" name="filename" />
                    <input type="submit" className="btn btn-primary"/>
                </form>
                </div>

                <br />
                <br />
            </div>
        </div>
    )
}
