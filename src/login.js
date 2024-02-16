import { Link } from 'react-router-dom';
const Login = () => {
    return ( 
        <div className="loginBackground">
            <h1 className='logo'>GradeSOS</h1>
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