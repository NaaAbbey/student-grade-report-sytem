import { Link } from 'react-router-dom';
const Login = () => {
    return ( 
        <div className="loginBackground">
            <h1 className='logo'>GradeSOS</h1>
            <div className="login">
                <form  >
                    <h2 className="welcome">Welcome!</h2>
                    <input type="text" className="name"  placeholder="Student ID" /><br />
                    <input type="password" className="name" placeholder="Pin"/><br />
                    <input className="checkbox" type="checkbox" id="remember-me" />
                    <label className="rememberpass" for="remember-me">Remember me</label>
                    <p className="rememberpass">Forgot Password?</p>
                    <Link to="/home"><button className="login-button" type="submit">Login</button></Link>
                    <p className="account">Don't have an account? <span className="sign-up">Sign up</span></p>
                </form>
            </div>
        </div>
     );
}

export default Login;