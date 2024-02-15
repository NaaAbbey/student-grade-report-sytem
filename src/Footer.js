import locationIcon from "./icons/location-blue.png"
import sendIcon from "./icons/send-blue.png"
import mailIcon from "./icons/mail-blue.png"
import instagram from "./icons/cblue-instagram-logo.png"
import facebook from "./icons/facebook-blue.png"
import linkenIn from "./icons/linkedin-blue.png"
import xIcon from "./icons/x-logo-blue.png"

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="locate">
                <img className="location-icon" src={locationIcon} alt="location icon" />
                <div className="location"> <p>Department of computer science</p><p className="school"> University of Ghana </p></div>
                <img className="mail-icon" src={mailIcon} alt="mail-icon" />
                <div className="mail-footer">gradesossupport@ug.edu.gh</div>
            </div>
            <div className="info-footer">
                <p className="about">About</p><p className="cookies"> Cookies</p> 
                <p className="policy">Privacy Policy</p><p className="terms">Terms of service</p> 
            </div>
            <div className="subscription"> 
                <div className="subscribe">Subscribe To Receive Notifications</div>
                <div className="subscribe-sub">Enter your email address to receive alerts about any missing grades</div>
                <div className="email">Enter email address</div>
                <div className="line"></div>
                <img className="send-icon" src={sendIcon} alt="send-icom" />
            </div>
            <div className="socials">
                <p>Follow us on:</p>
                <div className="socials-icons">
                    <img className="icon" src={xIcon} alt="x-icon" />
                    <img className="icon" src={facebook} alt="facebook-icon" />
                    <img className="icon" src={instagram} alt="instagram-icon" />
                    <img className="icon" src={linkenIn} alt="linkendIn-icon" />
                </div>
            </div>
        </div>
     );
}
 
export default Footer;