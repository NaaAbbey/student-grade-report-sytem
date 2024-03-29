import Navbar from "./Navbar";
import { useContext } from "react";
import {Alert, AlertContext} from "./alert";
import InstructorsAccordian from "./InstructorsAccordain"
import successIcon from './icons/correct-circle-black-outline-20626.png'

const Instructor = () => {
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
      <div className="instructor-page">
         <Navbar/> 
         <div className="body">
            <Alert />
            <div className="page">
               <div className="left">
                  <div className="page-title"> <h3>Contact Your Instructors</h3></div>
                  <div className="instructor"> 
                     <p className="initials">PA</p>
                     <p className="instructor-name"> Paul Nii Takie Ammah</p>
                     <p className="course">Programming</p>
                  </div>
                  <div className="instructor"> 
                     <p className="initials">PA</p>
                     <p className="instructor-name"> Paul Nii Takie Ammah</p>
                     <p className="course">Programming</p>
                  </div>
                  <div className="instructor"> 
                     <p className="initials">PA</p>
                     <p className="instructor-name"> Paul Nii Takie Ammah</p>
                     <p className="course">Programming</p>
                  </div>
                  <div className="instructor"> 
                     <p className="initials">PA</p>
                     <p className="instructor-name"> Paul Nii Takie Ammah</p>
                     <p className="course">Programming</p>
                  </div>
                  <div className="instructor"> 
                     <p className="initials">PA</p>
                     <p className="instructor-name"> Paul Nii Takie Ammah</p>
                     <p className="course">Programming</p>
                  </div>
               </div>
               <div className="right">
                  <div className="lecturer"> <h3>Paul Nii Takie Ammah</h3></div>
                  <p className="level">Programming</p>
                  <div className="subject">
                     <p>Subject of message</p>
                     <input className="input-box" type="text" />
                  </div>               <div className="subject">
                     <p>Compose message</p>
                     <input className="compose-box" type="text" />
                  </div>
                  <button className="submit-button" type="button" onClick={() => showAlert('successCustom')}>Submit</button>
               </div>
            </div>
            <div className="instructors-mobile">
            <div className="page-title"> <h3>Contact Your Instructors</h3></div>
            <InstructorsAccordian/>
            </div>
         </div>

      </div>
   );
}
 
export default Instructor;