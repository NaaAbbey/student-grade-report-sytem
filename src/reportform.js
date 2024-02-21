import Navbar from "./Navbar";

const ReportForm = () => {
    return (
        <div>
            <Navbar/> 
            <div className="body">
                <form className="reportform">
                    <h4>Report a missing grade</h4>
                    <p>Course Name</p><input className="input-box" type="text" />
                    <p>Instructor Name</p><input className="input-box" type="text" />
                    <p>Expected Grade</p> <input className="input-box" type="text"/>
                    <p>Eplanation field:</p> <input className="compose-box" type="text" />
                    <button className="submit-button" type="submit">Submit</button>
                </form>
            </div>
        </div>
     );
}
 
export default ReportForm;