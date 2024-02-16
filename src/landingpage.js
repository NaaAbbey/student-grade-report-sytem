import { Link } from 'react-router-dom';
import landingImage from "./images/landing-image.png";
import menuicon from "./icons/open-menu-6207.png";

const Landing = () => {
    return ( 
        <div className="landing-bck">
            <div className='landing-header'>
                <h3>GradeSOS</h3>
                <div className='help'>Help</div>
                <div className='sign-in'>Sign in</div>
                <Link to="/logged-in"><button className='sign-up'>Sign up</button></Link>
                <input type="checkbox" id="show-menu" style={{display: "none"}}/>
                <div className="menu-icon">
                    <label for="show-menu"><img className="menuIcon" src={menuicon} alt="menu icon" /></label>
                </div>
            </div>
            <img className="landing-character" src={landingImage} alt="face of website"/>
            <div className="slogan"><h1>Keeping <span>track</span> of your <span>grades</span>  made easy</h1></div>
            <div className='motto'>Effortless Grade Management: Streamlining Your Academic Success Journey</div>
            <Link to="/login"><button className="start-button" type="submit">Get Started</button></Link>
            <button className="contact-us" type="submit">Contact us</button>
        </div>
     );
}
 
export default Landing;