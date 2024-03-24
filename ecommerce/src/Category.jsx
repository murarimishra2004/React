import React from "react";

export default function Category({finalcat ,setcatname}) {
  let cat =finalcat.map((v, i) => {
    return (
      <li onClick={()=>setcatname(v)} key={i} className="bg-slate-300 p-2 cursor-pointer text-xl font-serif font-[500] mb-3">        
        {v}
      </li>
    );
  });
  return (
    <div>
      <h3 className="text-[25px] font-[500] p-[10px]">Product Category</h3>
      <ul>
        {cat}
      </ul>
    </div>
  );
}
