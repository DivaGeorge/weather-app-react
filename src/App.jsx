import { useState } from 'react'
import Weather from './Weather'
import './App.css'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  const [city,setCity]=useState('');
  const [weather,setWeather]=useState(null);
  const [error,setError]=useState(null);
  const [loading,setLoading]=useState(false);
 
  const fetchWeather=async()=>{
    if(!city) return;
    try{
      const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data=await res.json();
      if(data.cod===200){
        setWeather(data);
        setError("");
      }else{
        setError("City not found");
        setWeather(null);
      }
    }catch(error){
      setError("An error occurred");
      setWeather(null);
    }
  };

  const getBackgroundClass = () => {
    if (!weather) return "default-bg";
    const main = weather.weather[0].main.toLowerCase();
    if (main.includes("cloud")) return "cloudy-bg";
    if (main.includes("rain")) return "rainy-bg";
    if (main.includes("clear")) return "sunny-bg";
    if (main.includes("snow")) return "snowy-bg";
    if (main.includes("thunder")) return "stormy-bg";
    return "default-bg";
  };
 

  return (
    <>
    <div className={`weather-app ${getBackgroundClass()}`}>
      <h1>Weather App</h1>
      <div className='search-container'>
        <input type='text' placeholder='Enter city name' value={city} onChange={(e)=>setCity(e.target.value)}/>
        <button onClick={fetchWeather}>Get Weather</button>
      </div>
      {error && <p className='error'>{error}</p>}
      {weather && <Weather data={weather}/>}
    </div>
      
    </>
  );
}

export default App
