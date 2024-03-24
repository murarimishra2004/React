import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { LC, NC, SC, UC } from "./data/passchar";

function App() {
  let [uppercase, setuppercase] = useState(false);
  let [lowercase, setlowercase] = useState(false);
  let [speacil, setspeacil] = useState(false);
  let [number, setnumber] = useState(false);
  let [passwordlenght, setpasswordlenght] = useState(10);
  let [finalpassword, setfinalpassword] = useState("");

  let createpassword = () => {
    let finalpassword = "";

    let charSet = "";
    if (uppercase || lowercase || speacil || number) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (speacil) charSet += SC;
      if (number) charSet += NC;
      for (let i = 0; i < passwordlenght; i++) {
        finalpassword += charSet.charAt(
          Math.floor(Math.random() * charSet.length)
        );
      }
      setfinalpassword(finalpassword)
    } else {
      alert("Please select atleadt one checkbox!...");
    }
  };

  let copypass=()=>{
    navigator.clipboard.writeText(finalpassword)
  }

  return (
    <>
      <div className="passwordBox">
        <h2>Password Genrator</h2>
        <div className="passwordBoxin">
          <input type="text" readOnly value={finalpassword}></input>
          <button onClick={copypass}>Copy</button>
        </div>
        <div className="passlength">
          <label>passworld length</label>
          <input
            type="number"
            max={20}
            min={10}
            value={passwordlenght}
            onChange={(event) => setpasswordlenght(event.target.value)}
          ></input>
        </div>
        <div className="passlength">
          <label>Including Upper Case</label>
          <input
            type="checkbox"
            max={20}
            checked={uppercase}
            onChange={() => setuppercase(!uppercase)}
          ></input>
        </div>
        <div className="passlength">
          <label>Including Lower Case</label>
          <input
            type="checkbox"
            max={20}
            checked={lowercase}
            onChange={() => setlowercase(!lowercase)}
          ></input>
        </div>
        <div className="passlength">
          <label>Including Number</label>
          <input
            type="checkbox"
            max={20}
            checked={number}
            onChange={() => setnumber(!number)}
          ></input>
        </div>
        <div className="passlength">
          <label>Including Symbols</label>
          <input
            type="checkbox"
            max={20}
            checked={speacil}
            onChange={() => setspeacil(!speacil)}
          ></input>
        </div>
        <button onClick={createpassword}>Genrate Password</button>
      </div>
    </>
  );
}

export default App;
