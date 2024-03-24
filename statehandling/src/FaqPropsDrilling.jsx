import React, { useState } from 'react'
import { questions } from './Faqconst'

export default function FaqPropsDrilling() {

    let [currentid , setcurrentid]=useState(questions[0].id)


    let items=questions.map((itemsData,i)=>{
        
    let itemdetails={
        itemsData,
        currentid,
        setcurrentid
    }
        return(
            <Faqitems itemDeatils={itemdetails}key={i}/> 
        )
    })
  return (
    <>
     <h1>Frequesntly Asked Question FAQ</h1>
     <div className='faqouter'>
        {items}

     </div>
     </>
  )
}

function Faqitems({itemDeatils}){
    let {itemsData,currentid,setcurrentid}=itemDeatils
    return (
        <div className='faqitems'>
        <h2 onClick={()=>setcurrentid(itemsData.id)} >{itemsData.question}</h2>
        <p className={currentid=== itemsData.id ? 'activeans' : ''}> {itemsData.answer}</p>

        </div>
    )
}
