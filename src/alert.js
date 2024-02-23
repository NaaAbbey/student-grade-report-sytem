import { createContext, useContext, useEffect, useRef, useState } from "react"
{/* style for container  of the alert */}
const alertStyles = {
    padding: '16px',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: '400'
}

{/* objects with all possibe types of alerts */}
const sevreityStyles ={
    successCustom:{
        color: '#ffffff',
        background: '#D6C5EF'
    },
    error:{
        color: '#664d03',
        background: 'fff3cd'
    },
    info:{
        color:'#055160',
        background: '#cff4fc'
    },
    danger:{
        color:'#842029',
        background: '#f8d7da'
    },
    success:{
        color: '#0f5132',
        background: '#d1e7dd'
    }
}


export const Alert = () => {
    {/* to ensure that rendering is done only when there is an alert */}
    const [alert] =useContext(AlertContext)

    {/*check if there is no alert */}
    if (!alert){
        return null;
    }

    {/* object to combine styles(to make them compact) */}
    const fullStyles ={
        ...alertStyles,
        ...sevreityStyles[alert.type],
    }
    return <div style= {fullStyles}>{alert.text}</div>
}


export const AlertContext = createContext()

{/* here children refers to the entire application.
 This is done because I want to give the entire application access to the AlertProvider 
this will be render in main.js or index.js likse so #<AlertProvider><App/><AlertProvider/>#*/}
export const AlertProvider = ({children}) => {
    const [alert, setAlert] = useState(null)
    const timerRef = useRef(null)

    {/*set timer for durantion in which alert should be displayed in this case it is 5s (5000) */}
    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current)
        }
        timerRef.current = setTimeout(() => {
            setAlert(null)
        },5000)
    }, [alert])
    return (
        
        <AlertContext.Provider value ={[alert, setAlert]} >
            {children}
        </AlertContext.Provider>

    )
    {/* values used are for exposing useState for the entire application */}
}

{/*USAGE*/}
{/* #import {Alert, AlertContext} from './alert'# into your desired page 
and render#<Alert/># at the top of webpage or application

Alert takes in two 'arguments' in the format:
const alert ={
    text: '(your information)'
    type: 'type of alert(must correspond to any one of the types found in severityStyles)'
} 

    #const [,setAlert] = useContext(AlertContext)#
    #const showAlert = type =>{#
        #setAlert({
            text: <div style={{desired styles}}>(content of alert message)</div>,
            type, (to be trigged by event e.g #onClick ={() => showAlert('success')}# or #onClick ={() => showAlert('error')}# )
        })
    }

   comment snippets in '##' can be copied diretly or used as is
*/}
