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
            <div className="help-box">
               <div className="faq"><p> FAQs</p></div>
               <div className="alert">
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
            </div>


           </div>
           
         </div>
     );
}
 
export default Dashboard;