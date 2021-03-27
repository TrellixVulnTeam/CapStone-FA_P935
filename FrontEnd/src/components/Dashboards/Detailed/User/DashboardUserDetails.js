import React, { useState, useEffect } from 'react'
import axios from "axios"
import moment from 'moment'
import dashBoardstyle from "../User/dashBoardstyle.css"
import Spinner from 'react-bootstrap/Spinner'

import Table from 'react-bootstrap/Table'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    ComposedChart,
    Legend,
    Bar,
    Line,
    PieChart,
    Pie,
    Cell

} from 'recharts';
// export default function DashboardUserDetails() {
class DashboardUserDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            serverEmail: "",
            balanceSheetData: [],
            isLoading: true,
            isData: false,
        };
    }
    componentWillMount() {
        this.renderMyData();
    }
    renderMyData() {
        const user = {
            "email": localStorage.getItem("user"),
        }
        axios.post("http://localhost:8080/getuserbalances", user)
            .then(res => {
                console.log(res)
                if (res.data.length === 0) {
                    this.setState({
                        isData: false,
                        isLoading: false,
                    });
                } else {
                    this.setState({
                        serverEmail: res.data.email,
                        balanceSheetData: [...res.data],
                        isLoading: false,
                        isData: true
                    });
                }
                // console.log(this.state.balanceSheetData[0].year)
                return this.state.balanceSheetData
            })
    }

    render() {
        if (this.state.isLoading) {
            return (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            )
        } else {
            if (this.state.isData) {
                const balanceSheetData = this.state.balanceSheetData
                const length = balanceSheetData.length - 1
                const balanceSheetDataGraphdate = []
                balanceSheetData.map(data =>
                    balanceSheetDataGraphdate.push({
                        year: data.year,
                        Accounts_Payable: data.Accounts_Payable,
                        Cash: data.Cash,
                        Accounts_Receivable: data.Accounts_Receivable,
                        Unearned_revenue: data.Unearned_revenue,
                        Retained_Earnings: data.Retained_Earnings

                    })
                )
                const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
                const RADIAN = Math.PI / 180;
                const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
                    const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);
                    return (
                        <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                            {`${(percent * 100).toFixed(0)}%`}
                        </text>
                    );
                };
                console.log(balanceSheetData)
                console.log(balanceSheetDataGraphdate)
                return (
                    <div className="dashboardBody" >
                        <h1>{`${balanceSheetData[length].year} Major Indicators`}</h1>
                        <main className="main">
                            <div className="square A">
                                <h1>Cash</h1>
                                <h1>{`${balanceSheetData[length].Cash}`}</h1>
                                <h1>{`CAD`}</h1>
                            </div>
                            <div className="square B">
                                <h1>Accounts Payable</h1>
                                <h1>{`${balanceSheetData[length].Accounts_Payable}`}</h1>
                                <h1>{`CAD`}</h1>
                            </div>
                            <div className="square C">
                                <h1>Accounts Receivable</h1>
                                <h1>{`${balanceSheetData[length].Accounts_Receivable}`}</h1>
                                <h1>{`CAD`}</h1>
                            </div>
                            <div className="square D">
                                <h1>Accrued Expenses</h1>
                                <h1>{`${balanceSheetData[length].Accrued_expenses}`}</h1>
                                <h1>{`CAD`}</h1>
                            </div>
                            <div className="square E">
                                <h1>Inventory</h1>
                                <h1>{`${balanceSheetData[length].Inventory}`}</h1>
                                <h1>{`CAD`}</h1>
                            </div>
                        </main>
                        <main className="main">
                            <div className="square A2">
                                <h1>{`5 Years Historical Data`}</h1>
                                <table >
                                    <tbody>
                                        <tr >
                                            <th>#</th>
                                            {
                                                balanceSheetData.slice(balanceSheetData.length - 5, balanceSheetData.length).map(data =>
                                                    <th key={data._id}>{`${data.year}`}</th>
                                                )
                                            }
                                        </tr>
                                        <tr>
                                            <th>Cash</th>
                                            {
                                                balanceSheetData.slice(balanceSheetData.length - 5, balanceSheetData.length).map(data =>
                                                    <td key={data._id}>{`${data.Cash}`}</td>
                                                )
                                            }
                                        </tr>
                                        <tr>
                                            <th>Accounts Payable</th>
                                            {
                                                balanceSheetData.slice(balanceSheetData.length - 5, balanceSheetData.length).map(data =>
                                                    <td key={data._id}>{`${data.Accounts_Payable}`}</td>
                                                )
                                            }
                                        </tr>
                                        <tr>
                                            <th>Accounts Receivable</th>
                                            {
                                                balanceSheetData.slice(balanceSheetData.length - 5, balanceSheetData.length).map(data =>
                                                    <td key={data._id}>{`${data.Accounts_Receivable}`}</td>
                                                )
                                            }
                                        </tr>
                                        <tr>
                                            <th>Accrued Expenses</th>
                                            {
                                                balanceSheetData.slice(balanceSheetData.length - 5, balanceSheetData.length).map(data =>
                                                    <td key={data._id}>{`${data.Accrued_expenses}`}</td>
                                                )
                                            }
                                        </tr>
                                        <tr>
                                            <th>Inventory</th>
                                            {
                                                balanceSheetData.slice(balanceSheetData.length - 5, balanceSheetData.length).map(data =>
                                                    <td key={data._id}>{`${data.Inventory}`}</td>
                                                )
                                            }
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </main>
                        <main className="main">
                            <div className="square A2">
                                <h1>{`Accounts_Payable Vs Accounts_Receivable Vs Unearned_Revenue`}</h1>
                                <ResponsiveContainer width={`100%`} height={200}>
                                    <AreaChart
                                        data={balanceSheetDataGraphdate}
                                        margin={{
                                            top: 10,
                                            right: 30,
                                            left: 6,
                                            bottom: 0,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="year" />
                                        <Tooltip />
                                        {/* <Area type="monotone" dataKey="Cash" stroke="#8884d8" fill="#8884d8" /> */}
                                        <Area type="monotone" dataKey="Accounts_Payable" stroke="#247bb5" fill="#628dd9" />
                                        <Area type="monotone" dataKey="Accounts_Receivable" stroke="#247bb5" fill="#636e80" />
                                        {/* <Area type="monotone" dataKey="Retained_Earnings" stroke="#247bb5" fill="#294969" /> */}
                                        <Area type="monotone" dataKey="Unearned_revenue" stroke="#247bb5" fill="#a6508a" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </main>
                        <main className="main">
                            <div className="square A2 Graph_Two">
                                <h1>{`Accounts_Payable Vs Accounts_Receivable`}</h1>
                                <ComposedChart width={1500} height={350} data={balanceSheetDataGraphdate}>
                                    <XAxis dataKey="year" />
                                    <Tooltip />
                                    <Legend />
                                    <CartesianGrid stroke="#f5f5f5" />
                                    <Bar dataKey="Accounts_Payable" barSize={50} fill="#413ea0" />
                                    <Line type="monotone" dataKey="Accounts_Receivable" stroke="#ff7300" strokeWidth={3} />
                                </ComposedChart>
                            </div>
                        </main>
                        <main className="main">
                            <div className="square A">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart width={100} height={100}>
                                        {/* <Pie data={balanceSheetDataGraphdate} dataKey="Cash" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" /> */}
                                        <Pie data={balanceSheetDataGraphdate} dataKey="Cash" cx="50%" cy="50%" innerRadius={15} outerRadius={50} fill="#628dd9" label />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="square B">
                                <PieChart width={350} height={350} onMouseEnter={this.onPieEnter}>
                                    <Pie
                                        data={balanceSheetDataGraphdate}
                                        cx={120}
                                        cy={120}
                                        innerRadius={50}
                                        outerRadius={90}
                                        fill="#8884d8"
                                        paddingAngle={3}
                                        dataKey="Cash"
                                    >
                                        {balanceSheetDataGraphdate.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>

                                </PieChart>
                            </div>
                            <div className="square C">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart width={350} height={350}>
                                        <Pie
                                            data={balanceSheetDataGraphdate}
                                            cx="50%"
                                            cy="50%"
                                            labelLine={false}
                                            label={renderCustomizedLabel}
                                            outerRadius={120}
                                            fill="#8884d8"
                                            dataKey="Accounts_Receivable"
                                        >
                                            {balanceSheetDataGraphdate.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </main>
                    </div>
                )
            } else {
                return (
                    <h1>There is no data yet ...</h1>
                )
            }
        }
    }
}

export default DashboardUserDetails
/*
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


  static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }


*/

















/*
<div className="dashboardBody">
            <div className="wrapper">
                <div className="box a">A</div>
                <div className="box b">B</div>
                <div className="box c">C</div>
                <div className="box a">D</div>
                <div className="box b">E</div>
                <div className="box c">F</div>
            </div>
            <div className="wrapper">
                <div className="box a">G</div>
                <div className="box b">H</div>
                <div className="box c">I</div>
                <div className="box a">J</div>
                <div className="box b">K</div>
                <div className="box c">L</div>
            </div>
            </div>

*/





// render() {
//     return (
//         {
//             this.state.isLoading &&
//                 <div className="fa fa-spinner fa-spin"></div>

//         }
//              {
//         !this.state.isLoading &&
//         <div className="dashboardBody" >
//         <main className="main">
//             <div className="square A">{`${this.state.balanceSheetData[0].year}`}</div>
//             <div className="square B">B</div>
//             <div className="square C">C</div>
//             <div className="square D">D</div>
//             <div className="square E">E</div>
//         </main>
//         <main className="main">

//             <div className="square A2">A
//                 <table>
//                     <tbody>
//                         <tr className="Horizontal-head">
//                             <th>1</th>
//                             <th>22</th>
//                             <th>33</th>
//                             <th>44</th>
//                             <th>55</th>
//                         </tr>
//                         <tr>
//                             <th>2</th>
//                             <td>4</td>
//                             <td>6</td>
//                             <td>8</td>
//                             <td>10</td>
//                         </tr>
//                         <tr>
//                             <th>2</th>
//                             <td>4</td>
//                             <td>6</td>
//                             <td>8</td>
//                             <td>10</td>
//                         </tr>
//                         <tr>
//                             <th>3</th>
//                             <td>6</td>
//                             <td>9</td>
//                             <td>12</td>
//                             <td>15</td>
//                         </tr>
//                         <tr>
//                             <th>4</th>
//                             <td>8</td>
//                             <td>12</td>
//                             <td>16</td>
//                             <td>20</td>
//                         </tr>
//                         <tr>
//                             <th>5</th>
//                             <td>10</td>
//                             <td>15</td>
//                             <td>20</td>
//                             <td>25</td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>

//         </main>
//     </div>
//     }
//       )
// }
// componentDidMount() {
    //     const user = {
    //         "email": localStorage.getItem("user"),
    //     }
    //     axios.post("http://localhost:8080/getuserbalances", user)
    //         .then(res => {
    //             this.setState({
    //                 serverEmail: res.data.email,
    //                 balanceSheetData: [...res.data]
    //             });
    //             console.log(this.state.balanceSheetData)
    //             return this.state.balanceSheetData
    //         })
    // }

    // const user = {
    //     "email": localStorage.getItem("user"),
    // }
    // axios.post("http://localhost:8080/getuserbalances", user)
    // .then(res => {
    //     setserverEmail(res.data.email)
    //     setbalanceSheetData([...res.data])
    //     console.log(balanceSheetData[0])
    // })



    // useEffect(() => {
    //     const user = {
    //         "email": localStorage.getItem("user"),
    //     }
    //     const interval = setInterval(() => {
    //         //-----------------------------------------
    //         axios.post("http://localhost:8080/getuserbalances", user)
    //             .then(res => {
    //                 setserverEmail(res.data.email)
    //                 setbalanceSheetData([...res.data])
    //                 // console.log(balanceSheetData[0])
    //             })
    //         //-----------------------------------------
    //         setSeconds(seconds => seconds + 1);
    //     }, 10000);
    //     return () => clearInterval(interval);

    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [pageRefresh, serverEmail,balanceSheetData])
