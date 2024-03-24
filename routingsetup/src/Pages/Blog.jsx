import React from 'react'
import Header from '../Common/Header'
import { blogs } from '../Data/Blogs'
import { Link } from 'react-router-dom'

export default function Blog() {
    let allblogs=blogs.map((v,i)=>{
        return(
            <div className='blogitem' key={i}>
                <h3>{v.title}</h3>
                <p>
                    {v.body}
               </p>
               <button><Link to={`/blog/${v.id}`}>Read More</Link></button>
            </div>
        )
    })
  return (
    <>
       <Header/>
       <h1>Blog Page</h1>
       <div className='cont'>
        {allblogs}

        </div>      
      
    </>
  )
}
