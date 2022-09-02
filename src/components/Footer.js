import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      <div>
        <button id="home">
          <i className="fa-solid fa-house"></i>
        </button>
      </div>
      <p className="coder">
        <a href="https://github.com/basagan" target="_blank" rel="noreferrer">
          Open-sourse code
        </a>{" "}
        by Tatiana Ochirova
      </p>
    </footer>
  );
}
