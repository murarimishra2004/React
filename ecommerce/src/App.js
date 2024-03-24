import logo from "./logo.svg";
import "./App.css";
import Category from "./Category";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  let [finalcat,setfinalcat]=useState([])
  let [finalpro,setfinalpro]=useState([])
  let [catname,setcatname]=useState(' ')
  let getcategories=()=>{
    axios.get('https://dummyjson.com/products/categories').then((res)=>res.data).then((finalres)=>{
      setfinalcat(finalres)
    })
  }

  let getproduct=()=>{
    axios.get('https://dummyjson.com/products').then((prores)=>prores.data).then((finalres)=>{
      setfinalpro(finalres.products)
    })
  }

  useEffect(()=>{
    getcategories();
    getproduct();

  },[])

  useEffect(()=>{
    if(catname!==""){
      axios.get(`https://dummyjson.com/products/category/${catname}`).then((prores)=>prores.data).then((finalres)=>{
        setfinalpro(finalres.products)
      })
    }

  },[catname])

  let pitems=finalpro.map((products,index)=>{
    return(
      <Productitem  key={index} pdata={products}/>
    )
  })
  return (
    <>
      <div className="py-[40px]">
        <div className="max-w-[1320px] mx-auto">
          <h1 className="text-center text-[40px] font-bold mb-[30px]">Our Products</h1>
          <div className="grid grid-cols-[30%_auto] gap-[20px]">
            <div className=" ml-8" >
              <Category finalcat={finalcat} setcatname={setcatname}/>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-[18px]">
                 {pitems}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Productitem({pdata}){
  return(
    <div className="shadow-lg text-center pb-4">
    <img src={pdata.thumbnail} className="w-[100%] h-[220px]"></img>
    <h4>{pdata.title}</h4>
    <b>Rs {pdata.price}</b>
  </div>
  )
}

export default App;
