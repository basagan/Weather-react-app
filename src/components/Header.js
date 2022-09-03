import React from "react";
import "./header.css";

export default function Header() {
  return (
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
  );
}
