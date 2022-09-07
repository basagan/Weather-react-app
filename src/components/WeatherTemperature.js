import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  let fahrenheit = (props.celsius * 9) / 5 + 32;

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature temp">
        <span id="bigTemp">{Math.round(props.celsius)}</span>
        <span id="celsius">°C |</span>
        <a href="/" id="fahrenheit" onClick={showFahrenheit}>
          °F
        </a>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature temp">
        <span id="bigTemp">{Math.round(fahrenheit)}</span>
        <a href="/" id="celsius" onClick={showCelsius}>
          °C |
        </a>
        <span id="fahrenheit">°F</span>
      </div>
    );
  }
}
