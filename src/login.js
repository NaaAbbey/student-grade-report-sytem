import { Link } from 'react-router-dom';
import loginImg from "./images/auth-image.png";
import menuicon from "./icons/open-menu-6207.png";
import closeicon from "./icons/close-x-10324.png";
const Login = () => {
    return ( 
        <div className="loginBackground">
            <input type="checkbox" id="show-menu" style={{display:"none"}}/>
            <div className='landing-header'>
                <Link to="/" className='a'><h3 className='logo'>GradeSOS</h3></Link>
                <Link to='/help' className='a'><div className='help'>Help</div></Link>
                <Link to="/login" className='a'><div className='sign-in'>Sign in</div></Link>
                <Link to="/logged-in" className='a'><button className='sign-up'>Sign up</button></Link>
            </div>
            <div className="menu-icon">
                <label for="show-menu"><img className="menuIcon" src={menuicon} alt="menu icon" /></label>
                <label for="show-menu"><img className="closeIcon" src={closeicon} alt="close icon" /></label>
            </div>
            <div className='login-img'>
                <img className='loginImg' src={loginImg} alt="login"/>
            </div>
            <div className="login">
                <form >
                    <h1>Login</h1>
                    <p className="studentId">  Student ID</p> 
                    <input type="text" className="name" placeholder='11279476'/><br />
                    <p className="pin" >Pin</p> 
                    <input type="password" className="name" placeholder='10875'/><br />
                    <p className="forgotpin">Forgot Pin?</p>
                    <Link to="/dashboard"><button className="login-button" type="submit">Login</button></Link>
                </form>
            </div>
        </div>
     );
}

export default Login;