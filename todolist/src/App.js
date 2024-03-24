 
import './App.css';
import {useState} from 'react';
import { items } from './Data/tabs';

function App() {

  let [todolist , settodolist]=useState([])
  let [activetabs , setactivetabs]=useState(0)
  let [activecontent , setactivecontent]=useState(items[0])
 let chnagedata=(index)=>{
  setactivetabs(index)
  setactivecontent(items[index])
 }

  let SaveToDoList=(event)=>{

    let toname=event.target.toname.value;
    if(!todolist.includes(toname)){
      let finaltodolist=[...todolist,toname]
      settodolist(finaltodolist)

    }
    else{
      alert("ToDo already added")
    }
     
    event.preventDefault();
  }

  let list= todolist.map((value,index)=>{
    return(
      <ToDoList value={value} key={index} indexNumber={index} todolist={todolist} settodolist={settodolist}/>
    )
  })
  return (
    <div className="App">
      <div className='outertab'>
        <h1>Tabs section</h1>
        <ul>
          {items.map((tabsItem , index)=>{
            return(
              <li>
                <button onClick={()=>chnagedata(index)} className={activetabs==index ? 'activebutton' : " "}>{tabsItem.title}</button>
              </li>            
              
            )
          })}
                    
        </ul>
        {activecontent!==undefined ? <p>{activecontent.description}</p> : " " }

        
      </div>



      <h1>ToDO List</h1>
      <form onSubmit={SaveToDoList}>
        <input type='text' name='toname' /><button>Save</button>
      </form>

      <div className='OuterDiv'>

      <ul>
      {list}
      </ul>
      </div>
      
    </div>
  );
}

function ToDoList({value,indexNumber,todolist,settodolist}){
  let [status,setstatus]=useState(false)
  let deleteRow=()=>{
    let finaldata = todolist.filter((v, index) => index !== indexNumber);
    settodolist(finaldata)

  }
  return(
    <li className={ (status)? 'compleatetodo' : " "} onClick={()=>setstatus(!status)}>{value}<span onClick={deleteRow}>&times;</span></li>
    
  )
}

export default App;
