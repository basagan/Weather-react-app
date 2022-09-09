import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature temp">
      <span id="bigTemp">{Math.round(props.celsius)}</span>
      <span id="celsius">°C </span>
    </div>
  );
}
