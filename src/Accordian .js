import React, {useState, useEffect, useRef} from 'react';
import './Accordian.css';

const Accordian = () => {
    const [selected,  setSelected] = useState();

    const toggle =(i) => {
        if (selected === i) {
            return setSelected(null);
        }

        setSelected(i);
    }

   
  return (
    <div className='container'>
        <table className='faq-table'>
            <tr>
                {data.map((item, i) => (
                    <div className='item'>
                        <div className='title' onClick={() => toggle(i)}>
                            <h6>{item.Question}</h6>
                            <span className='open-icon' >                        
                                {selected === i ?  <svg  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20ZM10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 12.1217 2.84285 14.1566 4.34315 15.6569C5.84344 17.1571 7.87827 18 10 18ZM15 9V11H5V9H15Z" fill="white"/>
                                </svg> : 
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 0C4.48615 0 0 4.48615 0 10C0 15.5138 4.48615 20 10 20C15.5138 20 20 15.5138 20 10C20 4.48615 15.5138 0 10 0ZM10 1.53846C14.6823 1.53846 18.4615 5.31769 18.4615 10C18.4615 14.6823 14.6823 18.4615 10 18.4615C5.31769 18.4615 1.53846 14.6823 1.53846 10C1.53846 5.31769 5.31769 1.53846 10 1.53846ZM9.23077 5.38462V9.23077H5.38462V10.7692H9.23077V14.6154H10.7692V10.7692H14.6154V9.23077H10.7692V5.38462H9.23077Z" fill="white"/>
                                </svg> }
                            </span>                     
                         </div>
                        <div className={selected === i ? 'accordain-content show' : 'accordain-content'}>{item.Answer}</div>
                    </div>
                ))}
            </tr>
            <tr className='bottom'></tr>    
            </table>

    </div>

  );
}

const data  =[
    {
        Question: 'Is there a free trial',
        Answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quidem, fuga saepe nam est odit accusantium repellat rerum quis beatae sed amet distinctio aspernatur adipisci quoperspiciatis cupiditate assumenda exercitationem?"
    },
    {
        Question: 'Is there a free trial',
        Answer: 
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quidem, fuga saepe nam est odit accusantium repellat rerum quis beatae sed amet distinctio aspernatur adipisci quoperspiciatis cupiditate assumenda exercitationem?"
    },
    {
        Question: 'Is there a free trial',
        Answer: 
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quidem, fuga saepe nam est odit accusantium repellat rerum quis beatae sed amet distinctio aspernatur adipisci quoperspiciatis cupiditate assumenda exercitationem?"
    },
    {
        Question: 'Is there a free trial',
        Answer: 
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi quidem, fuga saepe nam est odit accusantium repellat rerum quis beatae sed amet distinctio aspernatur adipisci quoperspiciatis cupiditate assumenda exercitationem?"
    }
]

export default Accordian;
