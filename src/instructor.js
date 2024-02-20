import Navbar from "./Navbar";

const Instructor = () => {
   return ( 
      <div>
         <Navbar/> 
         <div className="body">
            <div className="left">
               <div className="page-title"> <h3>Contacts</h3></div>
               <p className="level">Level 100</p>
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
               <button className="submit-button" type="submit">Submit</button>
            </div>
         </div>
      </div>
   );
}
 
export default Instructor;