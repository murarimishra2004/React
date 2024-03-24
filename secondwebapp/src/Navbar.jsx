import React, { useState } from 'react'
import myimg from "./Images/R.jpg"
import Button from 'react-bootstrap/Button';


export default function Navbar({headerInfo,children}) {
    //Destructuring the props 
    // let {headerInfo}=props;
    // console.log(headerInfo)
    let temp='';
    let [pshow,setpshow]= useState(false)
    let [count , setCount]=useState(1)

    if(pshow){
      temp=<p>Welcome here Now</p>
    }
    else{
      temp=''
    }

    

    let chnagep= ()=>{
      setpshow(!pshow)
    };
    

    let clickme = () => {
      setCount(count+1);
       
    }

  return (
    
    
    <div className='Navbar' >
        <Button variant="primary" onClick={chnagep}>Primary</Button>{' '}
        <img src={ myimg}/>
        {temp}
        {count}
        <h1>Home   </h1>
        <h1>About us</h1>
        <h1>Service</h1>
        <h1>Contact us</h1>
       
    </div>
  )
}
