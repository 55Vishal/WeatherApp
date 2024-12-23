import React, { useState } from 'react'
import '../App.css';
import axios from 'axios';


function WeatherApp() {

    const [city, setCity] = useState();
    const [weather, setWeather] = useState();
   const handelCityChance = (event) =>{
     setCity(event.target.value)
    }
   const handelWeatherClick = () =>{
    if(!city){
        alert('Please enter city')
    }else{
        fetchWeatherApi();
        setCity('')
    }
   }
   const fetchWeatherApi = async ()=>{
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'6c837e572d854e9e204c4ab1514d2788'}`) 
      setWeather(response.data)
      console.log(weather)
   }
   const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(2);  
};

  return (
    <>
    <div className='parentDiv'>Weather App</div>
    <div className='inputFieldDiv'>
       <input type="text" placeholder='Enter City Name' value={city} onChange={handelCityChance} />
       <button className='input_btn' onClick={handelWeatherClick} >Get Weather</button>
       {
        weather && 
        <div className='weatherInfo'>
           <h3>{weather.name}</h3>
           <h3>{kelvinToCelsius(weather.main.temp)} °C</h3>
           <h3>{weather.main.temp} kel</h3>
           <p>{weather.weather[0].description} </p>
        </div>
       }
    </div>
    </>
  )
}

export default WeatherApp

