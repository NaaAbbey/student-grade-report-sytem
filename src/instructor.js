import Navbar from "./Navbar";
import Footer from "./Footer";
const Instructor = () => {
    return ( 
        <div>
           <Navbar/> 
           <div>
               <div className="instructor">          
                     PAUL NII TACKIE AMMAH
                     <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#contact" aria-expanded="true" aria-controls="contact">Contact Instructor</button>
               </div>
               <div class="collapse" id="contact">
                  <div class="card card-body">
                     Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                  </div>
               </div>
           </div>

            <div className="instructor">
               MICHEAL SOLI TETTEH
               <button className="contact" type="submit">Contact Instructor</button>
            </div>
            <div className="instructor">
               APIETU FERDINAND KATSRIKU
               <button className="contact" type="submit">Contact Instructor</button>
            </div>
            <div className="instructor">
               ABDULLAI DWUMFOUR AZIZ
               <button className="contact" type="submit">Contact Instructor</button>
            </div>
            <div className="instructor">
               PAUL NII TACKIE AMMAH
               <button className="contact" type="submit">Contact</button>
            </div>
            <div className="instructor">
               PAUL NII TACKIE AMMAH
               <button className="contact" type="submit">Contact </button>
            </div>
            <div className="instructor">
               PAUL NII TACKIE AMMAH
               <button className="contact" type="submit">Contact</button>
            </div>
        </div>
     );
}
 
export default Instructor;