import React, { useState } from "react";
import FormatedDate from "./FormatedDate";
import FormatedTime from "./FormatedTime";
import axios from "axios";
import "./main.css";
import sun from "./image/sun.jpg";

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
      <div id="main-content">
        <div className="row city justify-content-md-center">
          <div className="col-lg-6 city">
            <ul>
              <li className="name">{props.defaultCity}</li>
              <li className="day">Last updated</li>
              <li className="time">
                <FormatedDate date={weather.date} />
              </li>
            </ul>
          </div>
          <div className="col-lg-6 temperature">
            <ul>
              <li>
                <div className="temp d-inline" id="bigTemp">
                  {weather.temperature}
                </div>
                <div className="degrees d-inline">
                  <a href="/" id="celsius">
                    °C |
                  </a>
                  <a href="/" id="fahrenheit">
                    °F
                  </a>
                </div>
                <img
                  src={sun}
                  alt="Sun"
                  id="icon"
                  className="main-emoji img-fluid"
                  width="50"
                />
              </li>
              <li>
                <div className="max-min" id="descriptonId">
                  {weather.description}
                </div>
              </li>
              <li className="max-min">
                max
                <p className="temp" id="max">
                  {weather.temperatureMax}
                </p>
                <span id="celsius-fahrenheit">°C |</span>
                {weather.temperatureMin}
                <p className="temp" id="min">
                  28
                </p>
                <span id="celsius-fahrenheit">°C</span>
              </li>
            </ul>
          </div>
        </div>
        <div id="additionalinfo">
          <div className="row">
            <div className="col-3">
              <p className="addinfo">
                wind speed
                <br />
                m/s
              </p>
              <p className="addinfo-numbers">
                <span id="windSpeed">{weather.wind}</span>
              </p>
            </div>
            <div className="col-3">
              <p className="addinfo">
                sunrise
                <br />
                AM
              </p>
              <p className="addinfo-numbers" id="sunrise">
                <FormatedTime time={weather.timeSunrise} />
              </p>
            </div>
            <div className="col-3">
              <p className="addinfo">
                sunset
                <br />
                PM
              </p>
              <p className="addinfo-numbers" id="sunset">
                <FormatedTime time={weather.timeSunset} />
              </p>
            </div>
            <div className="col-3">
              <p className="addinfo">
                humidity
                <br />%
              </p>
              <p className="addinfo-numbers">
                <span id="humidity">{weather.humidity}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "be2b1d571d2242daa7cb5a3c859e71bb";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading ...";
  }
}
