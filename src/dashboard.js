import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import notificationIcon from "./icons/notification-bell-13080.png"
import { useState } from "react";

const data11 = [
{
   course: "DCIT 101",
   score: 85,
   GPA: 12.0,
   },
   {
   course: "DCIT 103",
   score: 79,
   GPA: 10.5,
   },
   {
   course: "MATH 101",
   score: 68,
   GPA: 7.5,
   },
   {
   course: "MATH 123",
   score: 72,
   GPA: 9.0,
   },
   {
   course: "STAT 111",
   score: 0,
   GPA: 0,
   },
   {
   course: "CRTK 101",
   score: 90,
   GPA: 12.0,
   },
];

const data12 = [
{
   course: "DCIT106",
   score: 73,
   GPA: 9.0,
   },
   {
   course: "DCIT104",
   score: 92,
   GPA: 12.0,
   },
   {
   course: "MATH 126",
   score: 0,
   GPA: 0,
   },
   {
   course: "MATH 122",
   score: 77,
   GPA: 10.5,
   },
   {
   course: "LITR 101",
   score: 89,
   GPA: 12.0,
   },
   {
   course: "STAT 112",
   score: 79,
   GPA: 10.5,
   },
];

const data21 = [
{
   course: "DCIT201",
   score: 78,
   GPA: 10.5,
   },
   {
   course: "DCIT105",
   score: 67,
   GPA: 7.5,
   },
   {
   course: "LITR 201",
   score: 76,
   GPA: 10.5,
   },
   {
   course: "MATH 221",
   score: 84,
   GPA: 12.0,
   },
   {
   course: "STAT 229",
   score: 63,
   GPA: 6.0,
   },
   {
   course: "DCIT203",
   score: 78,
   GPA: 10.5,
   },
   {
      course: "MATH 227",
      score: 72,
      GPA: 9.0,
      },
];

const CustomTooltip = ({ active, payload, label }) => {
if (active && payload && payload.length) {
   return (
      <div className="custom-tooltip">
      <p style={{color:'#A589DD'}} className="label">{`Score : ${payload[0].value}`}</p>
      <p className="label">{`GPA : ${payload[1].value}`}</p>
      </div>
   );
   
}
return null;
}

const Dashboard = () => {
   

   const [toggleState, setToggleState] = useState(1);
   const toggleTab =(index) => {
      setToggleState(index);
   }
    return ( 
         <div className="dashboard">
           <Navbar/>
           <div className="body">
            <div className="intro"><p> Hello Peter,</p></div>
            <div className="alert">
               <div className="notification-bell">
                  <img className="notificationIcon" src={notificationIcon} alt="notification bell" />
               </div>
               <table className="notification">
                  <tr>
                     <td><p>Missing grade for STAT 111</p></td>
                     <td className="report"><Link to="/reportform">Report</Link></td>
                    <td><Link to="/instructor.js">Contact Instructor</Link></td>
                  </tr>
                  <tr>
                     <td><p>Missing grade for MATH 126</p></td>
                     <td className="report"><Link to="/reportform">Report</Link></td>
                    <td><Link to="/instructor.js">Contact Instructor</Link></td>
                  </tr>
                  <tr></tr>
               </table>
            </div>
            
            <div className="overview">
               <h4>Overview of Grades</h4>
               <div className="year">
                  <button  type="button" className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
                        Level 100
                     </button>
                  <button  type="button" className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
                        Level 200
                     </button> 
                  <button  type="button" className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
                        Level 300
                     </button>
                  <button  type="button" className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}>
                        Level 400
                  </button> 
               </div>
               <div  className={toggleState === 1 ? "content active-content" : "content"}>
                  <div className="semester-overview">
                     <p>First Semester</p>
                     <p><span>CCT:</span>18</p>
                     <p><span>CGPA:</span>3.42</p>
                  </div>
                  <div className="bar-chart">
                     <BarChart
                        width={700}
                        height={300}
                        data={data11}
                        margin={{
                           top: 20,
                           right: 30,
                           left: 20,
                           bottom: 5,
                        }}
                     >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="course" stroke="#FFFFFF"/>
                        <YAxis yAxisId="left" orientation="left" stroke="#A589DD" />
                        <YAxis yAxisId="right" orientation="right" stroke="#FFFFFF" />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        <Bar yAxisId="left" dataKey="score" fill="#A589DD" />
                        <Bar yAxisId="right" dataKey="GPA" fill="#FFFFFF" />
                     </BarChart>
                  </div> 
                  <div className="semester-overview">
                     <p>Second Semester</p>
                     <p><span>CCT:</span>18</p>
                     <p><span>CGPA:</span>3.78</p>
                  </div>
                  <div className="bar-chart" >
                     <BarChart
                        width={700}
                        height={300}
                        data={data12}
                        margin={{
                           top: 20,
                           right: 30,
                           left: 20,
                           bottom: 5,
                        }}
                     >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="course" stroke="#FFFFFF"/>
                        <YAxis yAxisId="left" orientation="left" stroke="#A589DD" />
                        <YAxis yAxisId="right" orientation="right" stroke="#FFFFFF" />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        <Bar yAxisId="left" dataKey="score" fill="#A589DD" />
                        <Bar yAxisId="right" dataKey="GPA" fill="#FFFFFF" />
                     </BarChart> 
                  </div>
               </div>
               <div className={toggleState === 2 ? "content active-content" : "content"} >
               <div className="semester-overview">
                     <p>First Semester</p>
                     <p><span>CCT: </span>21</p>
                     <p><span>CGPA: </span>3.0</p>
                  </div>
                  <div className="bar-chart"> 
                     <BarChart
                        width={700}
                        height={300}
                        data={data21}
                        margin={{
                           top: 20,
                           right: 30,
                           left: 20,
                           bottom: 5,
                        }}
                     >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="course" stroke="#FFFFFF"/>
                        <YAxis yAxisId="left" orientation="left" stroke="#A589DD" />
                        <YAxis yAxisId="right" orientation="right" stroke="#FFFFFF" />
                        <Tooltip content={<CustomTooltip />} />
                        <Legend />
                        <Bar yAxisId="left" dataKey="score" fill="#A589DD" />
                        <Bar yAxisId="right" dataKey="GPA" fill="#FFFFFF" />
                     </BarChart>
                  </div>
               </div>
               <div className={toggleState === 3 ? "content active-content" : "content"}>
                  <p className="blank">No grade report for this year</p>
               </div>
               <div className={toggleState === 4 ? "content active-content" : "content"}>
                  <p className="blank">No grade report for this year</p>
               </div>  
            </div>

            <div className="reference">
               <h4>Grade Reference Table</h4>
            <table className="notification"> 
            <tr>
               <th>Score</th>
               <th>Grade Point</th>
               <th>Grade</th>
            </tr>
            <tr>
               <td>80-100</td>
               <td>4.0</td>
               <td>A</td>
            </tr>
            <tr>
               <td>75-79</td>
               <td>3.5</td>
               <td>B+</td>
            </tr>
            <tr>
               <td>70-74</td>
               <td>3.0</td>
               <td>B</td>
            </tr>
            <tr>
               <td>65-69</td>
               <td>2.5</td>
               <td>C+</td>
            </tr>
            <tr>
               <td>60-64</td>
               <td>2.0</td>
               <td>C</td>
            </tr>
            <tr>
               <td>55-59</td>
               <td>1.5</td>
               <td>D+</td>
            </tr>
            <tr>
               <td>50-54</td>
               <td>1.0</td>
               <td>D</td>
            </tr>
            <tr>
               <td>45-49</td>
               <td>0.5</td>
               <td>E</td>
            </tr>
            <tr>
               <td>0-44</td>
               <td>0</td>
               <td>F</td>
            </tr>
            <tr>
               <td>-</td>
               <td>-</td>
               <td>N/A</td>
            </tr>
            </table>
            </div>

           </div>
           
         </div>
     );
}

export default Dashboard;
