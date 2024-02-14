import { Link } from 'react-router-dom';
import menuicon from "./icons/menu-persian.png"

const Navbar = () => {
    return ( 
			<div className="head">
					<nav className="navbar">
					<h1 className='logo'>GradeSOS</h1>
					<div className="menu">
						<input type="checkbox" id="show-menu" style={{display: "none"}}/>
						<div className="nav-links">
							<div className="li"><Link to="/dashboard">Dashboard</Link ></div>
							<div className="li"><Link to="/gradereport">Grade Report</Link ></div>
							<div className="li"><Link to="/reportform" style={{width: "100%", height: "60px"}}>Report Missing Grade</Link ></div>
							<div className="li"><Link to="/instructor">Instructors</Link ></div>
							<div className="li"><Link to="/help">Help</Link ></div>
							<div className="li"><Link to="/login">Logout</Link ></div>
						</div>
						<div className="menu-icon">
							<label for="show-menu" style={{backgroundColor: "transparent"}}><img className="menu-persian" src={menuicon} alt="menu icon" /></label>
						</div>
					</div>
				</nav>
			
			</div>

		 );
}
 
export default Navbar;