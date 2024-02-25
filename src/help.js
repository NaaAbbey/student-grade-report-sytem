import { Link } from 'react-router-dom';
import { useContext } from "react";
import Accordian from "./Accordian "
import locationIcon from "./icons/location-white.png"
import phoneIcon from "./icons/icons8-phone-64.png"
import searchIcon from "./icons/icons8-search-60.png"
import instagram from "./icons/white-instagram-logo-3496.png"
import facebook from "./icons/facebook-white.png"
import linkenIn from "./icons/linkedin-white.png"
import xIcon from "./icons/x-logo-white.png"
import {Alert, AlertContext} from "./alert";
import successIcon from './icons/correct-circle-black-outline-20626.png'

const Help = () => {
   const [,setAlert] = useContext(AlertContext)
   const showAlert = type =>{
       setAlert({
           text: <div style={{
               display: 'flex',
               justifyContent: 'center',
               textAlign: 'left'
           }}>
               <img src={successIcon} alt="" style= {{
                   width: '25px',
                   marginRight: '20px'
                 }} />
                Submitted Successfully </div>,
           type,
        })
   }

   return ( 
        <div className="help-page">
           <nav className="navbar">
				<Link to="/"><h3 className='logo'>GradeSOS</h3></Link>
            </nav>
           <div className="body">
           <Alert/>
               <div className="top">
                  <h4>How can we help you?</h4>
                  <input className="search-bar" type="text" placeholder="Enter keyword or question"/>
                  <img className="search-icon" src={searchIcon} alt="search icon" />
               </div>
               <div className="help-box">
                  <h4> FAQs</h4>
                  <Accordian/>
               </div>
               </div>
               <h4 className="contact-header">Contact Us</h4>
               <div className="contact"> 
                  <h6>Do you have any enuiries? Send an email to our support team</h6>
                     <form action="">
                        <p className="mail"><h6>To:</h6> gradesossupport@gmail.com</p>
                        <div className="subject">
                           <p>Subject of message</p>
                           <input className="input-box" type="text" />
                        </div>              
                        <div className="subject">
                           <p>Compose message</p>
                           <input className="compose-box" type="text" />
                        </div>
                        <button className="submit-button" type="button" onClick={() => showAlert('successCustom')}>Submit</button>
                        <div className="locate">
                           <img className="location-icon" src={locationIcon} alt="location icon" />
                           <div className="location"> 
                              <p>Department of computer science</p>
                              <p className="school"> University of Ghana </p>
                           </div>
                        </div>
                        <div className="phone">
                           <img className="phone-icon" src={phoneIcon} alt="phone icon" />
                           <div className="phone-num">+233213657498</div>
                        </div>
                        <div className="socials">
                           <p>Socials:</p>
                           <div className="socials-icons">
                              <img className="icon" src={xIcon} alt="x-icon" />
                              <img className="icon" src={facebook} alt="facebook-icon" />
                              <img className="icon" src={instagram} alt="instagram-icon" />
                              <img className="linkedIn-icon" src={linkenIn} alt="linkendIn-icon" />
                           </div>
                        </div>
                     </form>  
               </div>
           
        </div>
   );
}
 
export default Help;