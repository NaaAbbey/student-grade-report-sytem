import Navbar from "./Navbar";
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return ( 
         <div>
           <Navbar/>
           <div className="body">
            <div className="intro"><p> Hello Peter,</p></div>
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
     );
}
 
export default Dashboard;