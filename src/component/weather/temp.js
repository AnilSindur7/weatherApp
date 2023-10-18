// https://api.openweathermap.org/data/2.5/weather?q=pune&appid=03d06b8610d566e1179976bfd9a07a13

import React, { useEffect, useState } from "react";

import "./style.css";

import WeatherCart from "./weatherCart";

const Temp = () => {
     
    const[searchValue, setSearchValue] = useState("sangli"); // search city 

    const [tempInfo, setTempInfo ] = useState({} ); // get datat about open weather


    const getWeatherInfo = async() =>{
 
      try{
          let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=03d06b8610d566e1179976bfd9a07a13`;

          const res = await fetch(url);

          const data = await res.json();
          
          const {temp, humidity, pressure} = data.main; 
          const {main} = data.weather[0];
          const {name} = data;
          const {country, sunset} = data.sys;
          const {speed} = data.wind;

          const myNewWeatherInfo ={

            temp,
            humidity,
            pressure,
            main,
            name,
            speed,
            country,
            sunset,

          };

          setTempInfo(myNewWeatherInfo)

 
      }catch(error){
         console.log(error); 
      }
    };
   
 
    useEffect(() => {
      getWeatherInfo();
    }, []);


  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search"
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={ (e)=> setSearchValue(e.target.value)}
          />
          <button className="searchButton" type="button" onClick={getWeatherInfo}> 
            Search
          </button>
        </div>
      </div>

      {/* { our temp card } */}

      <WeatherCart {...tempInfo}/>
    </>
  );
};

export default Temp;
