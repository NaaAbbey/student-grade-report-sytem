import Navbar from "./Navbar";
import { useState } from "react";
 

const GradeReport = () => {

   const [toggleState, setToggleState] = useState(1);
   const toggleTab =(index) => {
      setToggleState(index);
   }
   return ( 
        <div className="gradeReport">
           <Navbar/>
           <div className="body">
           <div className="year">
           <button  type="button" className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
               Level 100
            </button>
           <button  type="button" className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
               Level 200
            </button> 
           <button  type="button" className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
               Level 300
            </button>
           <button  type="button" className={toggleState === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(4)}>
               Level 400
            </button> 
           </div>
           <div className={toggleState === 1 ? "content active-content" : "content"}>
               <div className="first">
                  <p className="semester">First Semester</p>
                  <table className="grade-report">
                        <tr className="th">
                           <td>Course code</td>
                           <td>Course name</td>
                           <td>Credits</td>
                           <td>Grade</td>
                        </tr>
                        <tr>
                           <td>DCIT 101</td>
                           <td>Introduction to Computer Science</td>
                           <td>3</td>
                           <td>A</td>
                        </tr>
                        <tr>
                           <td>DCIT 101</td>
                           <td>Introduction to Computer Science</td>
                           <td>3</td>
                           <td>A</td>
                        </tr>
                        <tr>
                           <td>DCIT 101</td>
                           <td>Introduction to Computer Science</td>
                           <td>3</td>
                           <td>A</td>
                        </tr>
                        <tr>
                           <td>DCIT 101</td>
                           <td>Introduction to Computer Science</td>
                           <td>3</td>
                           <td>A</td>
                        </tr>
                        <tr>
                           <td>DCIT 101</td>
                           <td>Introduction to Computer Science</td>
                           <td>3</td>
                           <td>A</td>
                        </tr>
                        <tr>
                           <td>DCIT 101</td>
                           <td>Introduction to Computer Science</td>
                           <td>3</td>
                           <td>A</td>
                        </tr>
                        <tr>
                           <td>DCIT 101</td>
                           <td>Introduction to Computer Science</td>
                           <td>3</td>
                           <td>A</td>
                        </tr>
                  </table>
               </div>
               <div className="first">
                  <p className="semester">Second Semester</p>
                  <table className="grade-report">
                        <tr className="th">
                           <td>Course code</td>
                           <td>Course name</td>
                           <td>Credits</td>
                           <td>Grade</td>
                        </tr>
                        <tr>
                           <td>DCIT 101</td>
                           <td>Introduction to Computer Science</td>
                           <td>3</td>
                           <td>A</td>
                        </tr>
                        <tr>
                           <td>DCIT 101</td>
                           <td>Introduction to Computer Science</td>
                           <td>3</td>
                           <td>A</td>
                        </tr>
                        <tr>
                           <td>DCIT 101</td>
                           <td>Introduction to Computer Science</td>
                           <td>3</td>
                           <td>A</td>
                        </tr>
                        <tr>
                           <td>DCIT 101</td>
                           <td>Introduction to Computer Science</td>
                           <td>3</td>
                           <td>A</td>
                        </tr>
                        <tr>
                           <td>DCIT 101</td>
                           <td>Introduction to Computer Science</td>
                           <td>3</td>
                           <td>A</td>
                        </tr>
                        <tr>
                           <td>DCIT 101</td>
                           <td>Introduction to Computer Science</td>
                           <td>3</td>
                           <td>A</td>
                        </tr>
                        <tr>
                           <td>DCIT 101</td>
                           <td>Introduction to Computer Science</td>
                           <td>3</td>
                           <td>A</td>
                        </tr>
                  </table>
               </div>
           </div>
            <div className={toggleState === 2 ? "content active-content" : "content"}>
            <div className="first">
                  <p className="semester">First Semester</p>
                  <table className="grade-report">
                        <tr className="th">
                           <td>Course code</td>
                           <td>Course name</td>
                           <td>Credits</td>
                           <td>Grade</td>
                        </tr>
                        <tr>
                           <td>DCIT 201</td>
                           <td>Introduction to Programming</td>
                           <td>3</td>
                           <td>B+</td>
                        </tr>
                        <tr>
                           <td>DCIT 101</td>
                           <td>Introduction to Programming</td>
                           <td>3</td>
                           <td>B+</td>
                        </tr>
                        <tr>
                           <td>DCIT 201</td>
                           <td>Introduction to Programming</td>
                           <td>3</td>
                           <td>B+</td>
                        </tr>
                        <tr>
                           <td>DCIT 201</td>
                           <td>Introduction to Programming</td>
                           <td>3</td>
                           <td>B+</td>
                        </tr>
                        <tr>
                           <td>DCIT 201</td>
                           <td>Introduction to Programming</td>
                           <td>3</td>
                           <td>B+</td>
                        </tr>
                        <tr>
                           <td>DCIT 201</td>
                           <td>Introduction to Programming</td>
                           <td>3</td>
                           <td>B+</td>
                        </tr>
                        <tr>
                           <td>DCIT 201</td>
                           <td>Introduction to Programming</td>
                           <td>3</td>
                           <td>B+</td>
                        </tr>
                  </table>
               </div>
            </div>
            <div className={toggleState === 3 ? "content active-content" : "content"}>
               <p className="blank">No grade report for this year</p>
            </div>
            <div className={toggleState === 4 ? "content active-content" : "content"}>
               <p className="blank">No grade report for this year</p>
            </div>
       </div>

      </div>
     );
}
 
export default GradeReport;