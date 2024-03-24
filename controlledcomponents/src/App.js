
import './App.css';
import { useState } from 'react';
import UserEnquiry from './UserEnquiry';

function App() {

  let [uname,setuname]=useState('')
  let [password,setpassword]=useState('')
  let handlesubmit=(event)=>{
    event.preventDefault()
    console.log(uname , password)

  }

  let getuname=(event)=>{
    setuname(event.target.value)

  }
  return (
    <div className="App">
      <UserEnquiry/>
       <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <form onSubmit={handlesubmit}>
              <div className='text-start my-3' >
                <label>UserName</label>
                <input type='text' onChange={getuname} className='form-control' value={uname}></input>
              </div>
              <div className='text-start my-3'>
                <label>PassWord</label>
                <input type='text'  onChange={(event)=>setpassword(event.target.value)} className='form-control' value={password}></input>
              </div>
              <div className='text-start'>
                <button>Login</button>

              </div>
            </form>
          </div>
        </div>
       </div>
    </div>
  );
}

export default App;
