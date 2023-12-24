
const Navbar = () => {
    return ( 
			<div className="head">
					<nav className="navbar">
					<h1>GradeSOS</h1>
					<div className="menu">
						<input type="checkbox" id="show-menu" style={{display: "none"}}/>
						<div className="nav-links">
							<div className="li"><a href="/home">Home</a></div>
							<div className="li"><a href="/dashboard">Dashboard</a></div>
							<div className="li"><a href="/grade">Grade Report</a></div>
							<div className="li"><a href="/reportform">Report Missing Grade</a></div>
							<div className="li"><a href="/instructor">Contact Instructor</a></div>
							<div className="li"><a href="/help">Help</a></div>
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