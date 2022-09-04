import React from "react";
import FormatedDate from "./FormatedDate";
import FormatedTime from "./FormatedTime";
import WeatherIcon from "./WeatherIcon";
import "./weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div id="main-content">
        <div className="row city justify-content-md-center">
          <div className="col-lg-6 city">
            <ul>
              <li className="name">{props.info.city}</li>
              <li className="day">Last updated</li>
              <li className="time">
                <FormatedDate date={props.info.date} />
              </li>
            </ul>
          </div>
          <div className="col-lg-6 temperature">
            <ul>
              <li>
                <div className="temp d-inline" id="bigTemp">
                  {Math.round(props.info.temperature)}
                </div>
                <div className="degrees d-inline">
                  <a href="/" id="celsius">
                    °C |
                  </a>
                  <a href="/" id="fahrenheit">
                    °F
                  </a>
                </div>

                <WeatherIcon code={props.info.icon} />
              </li>
              <li>
                <div className="max-min" id="descriptonId">
                  {props.info.description}
                </div>
              </li>
              <li className="max-min">
                max{" "}
                <p className="temp" id="max">
                  {Math.round(props.info.temperatureMax)}
                </p>
                <span id="celsius-fahrenheit">°C | </span>
                min{" "}
                <p className="temp" id="min">
                  {Math.round(props.info.temperatureMin)}
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
                <span id="windSpeed">{Math.round(props.info.wind)}</span>
              </p>
            </div>
            <div className="col-3">
              <p className="addinfo">
                sunrise
                <br />
                AM
              </p>
              <p className="addinfo-numbers" id="sunrise">
                <FormatedTime time={props.info.timeSunrise} />
              </p>
            </div>
            <div className="col-3">
              <p className="addinfo">
                sunset
                <br />
                PM
              </p>
              <p className="addinfo-numbers" id="sunset">
                <FormatedTime time={props.info.timeSunset} />
              </p>
            </div>
            <div className="col-3">
              <p className="addinfo">
                humidity
                <br />%
              </p>
              <p className="addinfo-numbers">
                <span id="humidity">{props.info.humidity}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
