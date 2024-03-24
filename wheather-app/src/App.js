import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let [city, setcity] = useState("");
  let [wdetails, setwdetails] = useState();
  let getdata = async (event) => {
    event.preventDefault();

    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7971d3d45e3fe786337b1c9ec50164ca&units=metric`
    );

    const data = await response.json();
    console.log(data);
    if (data.cod == "404") {
      setwdetails(undefined);
    } else {
      setwdetails(data);
    }

    setcity("");
  };

  useEffect(()=>{
    console.log("Welcome to my channel")
  } , [])

  return (
    <div className="w-[100%] h-[100vh] bg-[#4aacb1]">
      <div className="max-w-[1320px] mx-auto">
        <h1 className="text-[40px] font-bold py-[50px] text-white">
          {" "}
          Simple Wheather App
        </h1>
        <form onSubmit={getdata}>
          <input
            type="text"
            value={city}
            onChange={(event) => setcity(event.target.value)}
            className="w-[300px] h-[40px] pl-3"
            placeholder="City Name"
          ></input>
          <button className="bg-blue-500">Submit</button>
        </form>

        <div className="w-[400px] mx-auto bg-white shadow-lg mt-[40px] p-[25px]">
          {wdetails !== undefined ? (
            <>
              <h3 className="font-bold text-[30px]">
                {wdetails.name}
                <span className="bg-[yellow]">{wdetails.sys.country}</span>
              </h3>
              <h3 className="font-bold text-[40px]">{wdetails.main.temp}</h3>
              <img src={`http://openweathermap.org/img/w/${wdetails.weather[0].icon}.png`}></img>
              <p>{wdetails.weather[0].description}</p>
            </>
          ) : (
            "No Data"
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
