import React, { useState } from "react";
import Weather from "./Weather";
import axios from "axios";
import "./main.css";

export default function Main(props) {
  const [weather, setWeather] = useState({ ready: false });

  function handleResponse(response) {
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      temperatureMax: response.data.main.temp_max,
      temperatureMin: response.data.main.temp_min,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: " ",
      timeSunrise: new Date(response.data.sys.sunrise * 1000),
      timeSunset: new Date(response.data.sys.sunset * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }

  if (weather.ready) {
    return (
      <div className="Main">
        <header className="header">
          <div className="row justify-content-md-center name-and-search">
            <div className="col-6 nameapp">
              <h1>Weather App</h1>
            </div>
            <div className="col-6 search">
              <form className="row search" id="search-panel">
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="enter city..."
                    autoComplete="off"
                    id="search-city"
                    autoFocus="on"
                  />
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-dark">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </header>
        <Weather info={weather} defaultCity="Berlin" />
      </div>
    );
  } else {
    const apiKey = "be2b1d571d2242daa7cb5a3c859e71bb";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading ...";
  }
}
