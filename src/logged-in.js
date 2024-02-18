import { Link } from 'react-router-dom';
import landingImage from "./images/landing-image.png";
import menuicon from "./icons/open-menu-6207.png";
import closeicon from "./icons/close-x-10324.png"

const Logged = () => {
    return ( 
        <div className="landing-bck">
            <input type="checkbox" id="show-menu" style={{display:"none"}}/>
            <div className='landing-header'>
                <h3>GradeSOS</h3>
                <div className='help'>Help</div>
                <Link to="/dashboard" className='a'><div className='dashboard'>Dashboard</div></Link>
                <Link to="/landingpage" className='a'><div className='logout'>Logout</div></Link>
            </div>
            <div className="menu-icon">
                <label for="show-menu"><img className="menuIcon" src={menuicon} alt="menu icon" /></label>
                <label for="show-menu"><img className="closeIcon" src={closeicon} alt="close icon" /></label>
            </div>
            <img className="landing-character" src={landingImage} alt="face of website"/>
            <div className='landing-content'>
                <div className="slogan"><h1>Keeping <span>track</span> of your <span>grades</span>  made easy</h1></div>
                <div className='motto'>Effortless Grade Management: Streamlining Your Academic Success Journey</div>
                <button className="start-button" type="submit">Get Started</button>
                <button className="contact-us" type="submit">Contact us</button>
            </div>
        </div>
     );
}
 
export default Logged;