import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/weather.css'

import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
import humidity_icon from '../assets/humidity.png'
import sun_icon from '../assets/sun.svg'
import pressure_icon from '../assets/pressure.svg'


const Weather = () => {
    let api_key = '99d45f6f6813315308c9f126030d4b41';
    const navigate = useNavigate();

    const [wicon, setWicon] = useState(wind_icon);

    const search = async () => {
        const element = document.getElementsByClassName('cityInput');

        if (element[0].value === '') {
            alert('Please enter a city name')
            return
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${api_key}&units=imperial`;
        let response = await fetch(url);
        let data = await response.json();

        const humidity = document.getElementsByClassName('humidity-percent');
        const wind = document.getElementsByClassName('wind-speed');
        const temperature = document.getElementsByClassName('weather-temp');
        const location = document.getElementsByClassName('weather-location');
        const sunrise = document.getElementsByClassName('sunrise-time');
        const pressure = document.getElementsByClassName('pressure');

        let sunriseTime = new Date(data.sys.sunrise * 1000);

        humidity[0].innerHTML = data.main.humidity + '%';
        wind[0].innerHTML = Math.floor(data.wind.speed) + ' MPH';
        temperature[0].innerHTML = Math.floor(data.main.temp) + '°F';
        location[0].innerHTML = data.name;
        sunrise[0].innerHTML = sunriseTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
        pressure[0].innerHTML = data.main.pressure + ' hPa';

        if (data.weather[0].icon === '01d' || data.weather[0].icon === '01n') {
            setWicon(clear_icon);
        } else if (data.weather[0].icon === '02d' || data.weather[0].icon === '02n') {
            setWicon(cloud_icon);
        } else if (data.weather[0].icon === '03d' || data.weather[0].icon === '03n') {
            setWicon(drizzle_icon);
        } else if (data.weather[0].icon === '04d' || data.weather[0].icon === '04n') {
            setWicon(drizzle_icon);
        } else if (data.weather[0].icon === '09d' || data.weather[0].icon === '09n') {
            setWicon(rain_icon);
        } else if (data.weather[0].icon === '10d' || data.weather[0].icon === '10n') {
            setWicon(rain_icon);
        } else if (data.weather[0].icon === '13d' || data.weather[0].icon === '13n') {
            setWicon(snow_icon);
        } else {
            setWicon(clear_icon);
        }
    }

    const buttonStyle = {
        backgroundColor: 'white',
        color: '#1a237e', // dark blue color
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        textTransform: 'uppercase'
      };

      const handleClick = () => {
        // Navigate to another page (replace '/chart' with your desired route)
        navigate('/chart');
      };
    

    return (
        <div className='container' >
            <div className='top-bar'>
                <input 
                    type='text' 
                    className='cityInput'
                    placeholder='Search for places...' />
                <div className='search-icon' onClick={() => {
                    search()
                }}>
                    <img src={search_icon} alt='search icon' />

                </div>
            </div>
            <div className='weather-image'>
                <img src={wicon} alt='weather icon' />
            </div>
            <div className='weather-temp'>
                74°F
            </div>
            <div className='weather-location'>
                Orlando
            </div>
            <div className='data-container'>
                <div className='element'>
                    <img src={humidity_icon} alt='icon' />
                    <div className='data'>
                        <div className='humidity-percent'>64%</div>
                        <div className='text'> Humidity </div>
                    </div>
                </div>
                <div className='element'>
                    <img src={wind_icon} alt='icon' />
                    <div className='data'>
                        <div className='wind-speed'>18 km/h</div>
                        <div className='text'> Wind Speed </div>
                    </div>
                </div>
                
               
            </div>
            <div className='data-container'>
                <div className='element'>
                    <img src={sun_icon} alt='icon' />
                    <div className='data'>
                        <div className='sunrise-time'>6:32PM</div>
                        <div className='text'> Sunrise </div>
                    </div>
                </div>
                <div className='element'>
                    <img src={pressure_icon} alt='icon' />
                    <div className='data'>
                        <div className='pressure'>999</div>
                        <div className='text'> Pressure </div>
                    </div>
                </div>
            </div>
            <div className='data-container'>
            <button style={buttonStyle} onClick={handleClick} >
                Chart
            </button>
            </div>
        </div>
    )
}


export default Weather