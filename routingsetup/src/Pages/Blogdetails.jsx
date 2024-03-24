import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../Common/Header';
import { blogs } from '../Data/Blogs';

export default function Blogdetails() {
    let uselocation=useLocation();
    let currentID=(uselocation.pathname.split('/')[2])
    let currentdata=blogs.filter((v)=>v.id==currentID)[0]
    console.log(currentdata)
  return (
    <div><Header/>
    <h1>{currentdata.title}</h1>
    </div>
  )
}
 