import React, {useState, useContext} from 'react';
import './InstructorsAccordian.css';
import { AlertContext} from "./alert";
import successIcon from './icons/correct-circle-black-outline-20626.png'


    

const InstructorsAccordian = () => {
    const [selected,  setSelected] = useState();

    const toggle =(i) => {
        if (selected === i) {
            return setSelected(null);
        }

        setSelected(i);
    }

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

    const data  =[
        {
            Question:  <div className="instructor"> 
            <p className="initials">PA</p>
            <p className="instructor-name"> Paul Nii Takie Ammah</p>
            <p className="course">Programming</p>
         </div>,
                Answer:  <div className='message'>
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
        },
        {
            Question:  <div className="instructor"> 
            <p className="initials">PA</p>
            <p className="instructor-name"> Paul Nii Takie Ammah</p>
            <p className="course">Programming</p>
         </div>,
            Answer:  <div className='message'>
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
        },
        {
            Question:  <div className="instructor"> 
            <p className="initials">PA</p>
            <p className="instructor-name"> Paul Nii Takie Ammah</p>
            <p className="course">Programming</p>
         </div>,
            Answer:  <div className='message'>
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
       },
        {
            Question:  <div className="instructor"> 
            <p className="initials">PA</p>
            <p className="instructor-name"> Paul Nii Takie Ammah</p>
            <p className="course">Programming</p>
         </div>,
            Answer:  <div className='message'>
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
        },
        {
            Question:  <div className="instructor"> 
            <p className="initials">PA</p>
            <p className="instructor-name"> Paul Nii Takie Ammah</p>
            <p className="course">Programming</p>
         </div>,
            Answer:  <div className='message'>
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
        },
        {
            Question:  <div className="instructor"> 
            <p className="initials">PA</p>
            <p className="instructor-name"> Paul Nii Takie Ammah</p>
            <p className="course">Programming</p>
         </div>,
            Answer:  <div className='message'>
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
        }
    ]
    
  return (
    <div className='instructors-container'>
        <table className='instructors-faq-table'>
            <tr>
                {data.map((item, i) => (
                    <div className='instructor-item'>
                        <div className='title' onClick={() => toggle(i)}>
                            <h6>{item.Question}</h6>                   
                         </div>
                        <div className={selected === i ? 'accordain-content show' : 'accordain-content'}>{item.Answer}</div>
                    </div>
                ))}
            </tr>  
        </table>
    </div>

  );

  
}


export default InstructorsAccordian;
