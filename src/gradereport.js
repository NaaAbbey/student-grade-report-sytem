import Navbar from "./Navbar";


const GradeReport = () => {

   return ( 
        <div className="gradeReport">
           <Navbar/>
           <div className="body">
           <div className="year">
           <button type="button">Level 100</button>
           <button type="button">Level 200</button> 
           <button type="button">Level 300</button>
           <button  type="button">Level 400</button> 
           </div>
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
      
       </div>

      </div>
     );
}
 
export default GradeReport;