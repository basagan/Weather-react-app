import React from "react";
import FormatedDate from "./FormatedDate";
import FormatedTime from "./FormatedTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import Reminder from "./Reminder";
import "./weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div id="main-content">
        <div className="row city justify-content-md-center mt-3 mb-3">
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
                <WeatherTemperature celsius={props.info.temperature} />
                <WeatherIcon code={props.info.icon} size={70} />
              </li>
              <li>
                <div className="max-min" id="descriptonId">
                  {props.info.description}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <Reminder
          celsius={props.info.temperature}
          description={props.info.description}
        />
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
