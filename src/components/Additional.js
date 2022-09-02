import React from "react";
import "./additional.css";

export default function Additional() {
  return (
    <div className="Additional">
      <div id="additionalinfo">
        <div className="row">
          <div className="col-3">
            <p className="addinfo">
              wind speed
              <br />
              m/s
            </p>
            <p className="addinfo-numbers">
              <span id="windSpeed">3</span>
            </p>
          </div>
          <div className="col-3">
            <p className="addinfo">
              sunrise
              <br />
              AM
            </p>
            <p className="addinfo-numbers" id="sunrise">
              6:18
            </p>
          </div>
          <div className="col-3">
            <p className="addinfo">
              sunset
              <br />
              PM
            </p>
            <p className="addinfo-numbers" id="sunset">
              19:37
            </p>
          </div>
          <div className="col-3">
            <p className="addinfo">
              humidity
              <br />%
            </p>
            <p className="addinfo-numbers">
              <span id="humidity">48</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
