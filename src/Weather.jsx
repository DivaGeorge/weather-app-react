import { useState } from 'react';

function Weather({data}) {
    const{name,main,weather,wind}=data;

    return(
        <div className='weather-card'>
            <h2>{name}</h2>
            <p>{weather[0].description}</p>
            <h3>Temperature: {main.temp}°C</h3>
            <p>Humidity: {main.humidity}%</p>
            <p>Wind Speed: {wind.speed} m/s</p>

        </div>
    );
}

export default Weather;