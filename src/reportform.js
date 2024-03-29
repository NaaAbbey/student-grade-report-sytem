import { useContext } from "react";
import Navbar from "./Navbar";
import {Alert, AlertContext} from "./alert";

import successIcon from './icons/correct-circle-black-outline-20626.png'



const ReportForm = () => {
    const [,setAlert] = useContext(AlertContext)
    const showAlert = type =>{
        setAlert({
            text: <div style={{
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'left'
            }}>
                <img src={successIcon} alt="" style= {{
                    width: '25px',
                    marginRight: '20px'
                    }} />
                 Submitted Successfully </div>,
            type,
         })
    }
    return (
        <div>
            <Navbar/> 
            <div className="body">
                <Alert/>
                <form className="reportform">
                    <h4>Report a missing grade</h4>
                    <p>Course Name</p><input className="input-box" type="text" />
                    <p>Instructor Name</p><input className="input-box" type="text" />
                    <p>Expected Grade</p> <input className="input-box" type="text"/>
                    <p className="explainheader">Explanation field</p> <input className="compose-box" type="text" />
                    <button className="submit-button" type="button" onClick={() => showAlert('successCustom')}>
                        Submit</button>
                </form>
            </div>
        </div>
     );
}
 
export default ReportForm;