import { Link } from 'react-router-dom';
import landingImage from "./images/landing-image.png";
import menuicon from "./icons/open-menu-6207.png";
import closeicon from "./icons/close-x-10324.png";

const Landing = () => {
    return ( 
        <div className="landing-bck">
            <input type="checkbox" id="show-menu" style={{display:"none"}}/>
            <div className='landing-header'>
                <h3 className='logo'>GradeSOS</h3>
                <Link to='/help' className='a'><div className='help'>Help</div></Link>
                <Link to="/login" className='a'><div className='sign-in'>Sign in</div></Link>
                <Link to="/logged-in" className='a'><button className='sign-up'>Sign up</button></Link>
            </div>
            <div className="menu-icon">
                <label for="show-menu"><img className="menuIcon" src={menuicon} alt="menu icon" /></label>
                <label for="show-menu"><img className="closeIcon" src={closeicon} alt="close icon" /></label>
            </div>
            <img className="landing-character" src={landingImage} alt="face of website"/>
            <div className='landing-content'>
                <div className="slogan"><h1>Keeping <span>track</span> of your <span>grades</span>  made easy</h1></div>
                <div className='motto'>Effortless Grade Management: Streamlining Your Academic Success Journey</div>
                <Link to="/login" className='a'><button className="start-button" type="submit">Get Started</button></Link>
                <Link to='/help' className='a'><button className="contact-us" type="submit">Contact us</button></Link>
            </div>
        </div>
     );
}
 
export default Landing;