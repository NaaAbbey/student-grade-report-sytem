import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import notificationIcon from "./icons/notification-bell-13080.png"

const Dashboard = () => {
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
                     <td><p>Missing grade for STAT 111</p></td>
                     <td className="report"><Link to="/reportform">Report</Link></td>
                    <td><Link to="/instructor.js">Contact Instructor</Link></td>
                  </tr>
                  <tr></tr>
               </table>
            </div>

            <div className="reference">
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