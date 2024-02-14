import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import lilboy from "./images/Grades-cuate (2).png";

const Landing = () => {
    return ( 
        <div className="landing-bck">
         <Navbar/> 
         <div className="slogan"><h1>Keeping track of your Grades made Easy</h1></div>
         <img className="landing-character" src={lilboy} alt="face of website"/>
         <Link to="/login"><button className="start-button" type="submit">Get Started</button></Link>
        </div>
     );
}
 
export default Landing;