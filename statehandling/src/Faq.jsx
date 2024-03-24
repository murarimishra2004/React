import React, { useState } from 'react'
import { questions } from './Faqconst'

export default function Faq() {
    let [showfaqans,setshowfaqans]=useState(questions[0].id)
  return (
    
    <div>
        <h1 className='h1'>Frequesntly Asked Question FAQ</h1>
        <div className='faqouter'>
            {questions.map((faqitems,i)=>{
                return(
                    <div className='faqitems' key={i}>
                    <h2 onClick={()=>setshowfaqans(faqitems.id)}>{faqitems.question}</h2>
                    <p className={showfaqans==faqitems.id ? 'activeans' :' '}>{faqitems.answer}</p>
    
                    </div>
                )
            })}

            
        </div>
    </div>
  )
}

