import Navbar from "./Navbar";
import Footer from "./Footer";
const ReportForm = () => {
    return (
        <div>
            <Navbar/> 
            <div className="report">
                <form>
                    <p>Course Name</p><input className="name" type="text" />
                    <p>Instructor Name</p><input className="name" type="text" />
                    <p>Expected Grade</p> <input className="name" type="text"/>
                    <p>Eplanation field:</p> <input className="explain" type="text" />
                    <button className="submit" type="submit">Submit</button>
                </form>
            </div>
            <Footer/>
        </div>
     );
}
 
export default ReportForm;