import Navbar from "./Navbar";
import Footer from "./Footer";
import Accordian from "./Accordian "
import locationIcon from "./icons/location-white.png"
import mailIcon from "./icons/mail-white.png"
import phoneIcon from "./icons/icons8-phone-64.png"
import searchIcon from "./icons/icons8-search-60.png"
const loggedHelp = () => {
    return ( 
        <div className="help-page-loggedin">
           <Navbar/>
           <div className="body">
               <div className="top">
                  <h4>How can we help you?</h4>
                  <input className="search-bar" type="text" placeholder="Enter keyword or question"/>
                  <img className="search-icon" src={searchIcon} alt="search icon" />
               </div>
               <div className="help-box">
                  <h4> FAQs</h4>
                  <Accordian/>
               </div>
               <h4 className="contact-header">Contact Us</h4>
               <div className="contact">   
                  <div className="locate">
                     <img className="location-icon" src={locationIcon} alt="location icon" />
                     <div className="location"> 
                        <p>Department of computer science</p>
                        <p className="school"> University of Ghana </p>
                     </div>
                  </div>
                  <div className="mail">
                     <img className="mail-icon" src={mailIcon} alt="mail-icon" />
                     <div className="mail-footer">gradesossupport@ug.edu.gh</div>
                  </div>
                  <div className="phone">
                     <img className="phone-icon" src={phoneIcon} alt="phone icon" />
                     <div className="phone-num">+233278934780</div>
                  </div>
               </div>
           </div>
           
           
        </div>
     );
}
 
export default loggedHelp;