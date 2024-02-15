import Navbar from "./Navbar";
import Footer from "./Footer";
const ReportForm = () => {
    return (
        <div>
            <Navbar/> 
            <div className="report">
                
                <form action="">
                Course Name:<input className="name" type="text" />
                Instructor Name:<input className="name" type="text" />
                Expected Grade: <input className="name" type="text"/>
                Eplanation field: <input className="explain" type="text" />
                    <button className="submit" type="submit">Submit</button>
                </form>
            </div>
            <Footer/>
        </div>
     );
}
 
export default ReportForm;