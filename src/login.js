const Login = () => {
    return ( 
        <div className="loginBackground">
            <div className="login">
                <form  >
                     <input type="text" className="name"  placeholder="Student ID" /><br />
                    <input type="password" className="name" placeholder="Pin"/><br />
                    <input className="checkbox" type="checkbox" id="remember-me" />
                    <label className="rememberpass" for="remember-me">Remember me</label>
                    <p className="rememberpass">Forgot Password?</p>
                    <a href="/home"><button className="login-button" type="submit">Login</button></a>
                    <p className="account">Don't have an account? <span className="sign-up">Sign up</span></p>
                </form>
            </div>
        </div>
     );
}

export default Login;