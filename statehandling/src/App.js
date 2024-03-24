 
import './App.css';
import { useState } from 'react';
import BoxModel from './BoxModel';
import Faq from './Faq';
import FaqPropsDrilling from './FaqPropsDrilling';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications'

function App() {

  let [showp , setshowp]= useState(false)
  let [passshow, setpassshow]=useState(false)
  let [showmenu, setshowmenu]=useState(false)
  let ShowNotification=()=>{
    NotificationManager.success("Thankyou for signin")

  }
  return (
     <>
     <button onClick={ShowNotification}>Save</button>
     <NotificationContainer/>

     <button  className='Menuicon' onClick={()=>setshowmenu(!showmenu)} >Menu</button>
     <div className={`menu ${showmenu ? 'activemenu' : ''}`}>

      <ul>
        <li>Home </li>
        <li> About</li>
        <li> Service</li> 
        <li> Contact us </li>
      </ul>
     </div>
     <br/>
     <input type={passshow ? 'text' : 'password'}/> <button onClick={()=> setpassshow(!passshow) }>{passshow ? 'Show' : 'Hide'}</button>
     <br></br>
     <button onClick={()=>setshowp(!showp)}>
     {showp ? 'Hide' : 'Show'}
     </button>
     {
      (showp)? <p>Welcome to my wbsite</p>  : ''
     }
      <BoxModel/>
     <Faq/>
     <FaqPropsDrilling/>
     </>
  );
}

export default App;
