import React from "react";
import "./main.css";
import sun from "./image/sun.jpg";

export default function Main() {
  return (
    <div id="main-content">
      <div className="row city justify-content-md-center">
        <div className="col-lg-6 city">
          <ul>
            <li className="name">New York</li>
            <li className="day">Last updated</li>
            <li className="time">Saturday 16:10, Aug 27</li>
          </ul>
        </div>
        <div className="col-lg-6 temperature">
          <ul>
            <li>
              <div className="temp d-inline" id="bigTemp">
                30
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
                Clear Sky
              </div>
            </li>
            <li className="max-min">
              max
              <p className="temp" id="max">
                32
              </p>
              <span id="celsius-fahrenheit">°C |</span>
              min
              <p className="temp" id="min">
                28
              </p>
              <span id="celsius-fahrenheit">°C</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
