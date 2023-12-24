import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
			<div className="head">
					<nav className="navbar">
					<h1>GradeSOS</h1>
					<div className="menu">
						<input type="checkbox" id="show-menu" style={{display: "none"}}/>
						<div className="nav-links">
							<div className="li"><Link to="/home">Home</Link ></div>
							<div className="li"><Link to="/dashboard">Dashboard</Link ></div>
							<div className="li"><Link to="/grade">Grade Report</Link ></div>
							<div className="li"><Link to="/reportform">Report Missing Grade</Link ></div>
							<div className="li"><Link to="/instructor">Contact Instructor</Link ></div>
							<div className="li"><Link to="/help">Help</Link ></div>
							<div className="logout-button"><Link to="/"><button className="login-button" type="submit">Logout</button></Link></div>
						</div>
						<div className="menu-icon">
							<label for="show-menu"><span className="lnr lnr-menu"></span></label>
						</div>
					</div>
				</nav>
			
			</div>

		 );
}
 
export default Navbar;