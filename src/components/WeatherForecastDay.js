import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./weatherForecast.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.dayInfo.temp.max);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.dayInfo.temp.min);
    return `${temperature}`;
  }
  function day() {
    let date = new Date(props.dayInfo.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.dayInfo.weather[0].icon} size={40} />
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}°
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}°
        </span>
      </div>
    </div>
  );
}
