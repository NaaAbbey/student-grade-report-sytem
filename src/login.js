import { Link } from 'react-router-dom';
import loginImg from "./images/auth-image.png";
const Login = () => {
    return ( 
        <div className="loginBackground">
            <div className='landing-header'>
                <h3 className='logo'>GradeSOS</h3>
                <div className='help'>Help</div>
                <Link to="/login" className='a'><div className='sign-in'>Sign in</div></Link>
                <Link to="/logged-in" className='a'><button className='sign-up'>Sign up</button></Link>
            </div>
            <div className='login-img'>
                <img className='loginImg' src={loginImg} alt="login image" />
            </div>
            <div className="login">
                <form >
                    <h1>Login</h1>
                    <p className="studentId">  Student ID</p> 
                    <input type="text" className="name" /><br />
                    <p className="pin">Pin</p> 
                    <input type="password" className="name" /><br />
                    <p className="forgotpin">Forgot Pin?</p>
                    <Link to="/dashboard"><button className="login-button" type="submit">Login</button></Link>
                </form>
            </div>
        </div>
     );
}

export default Login;