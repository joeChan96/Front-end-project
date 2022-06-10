import React, { useState, useRef } from "react";
import "./Navigation.css";

export default function Navpart() {
  return (
    <nav className="nav">
      <h1>Blue dog</h1>
      <li className="nav-component">
        <ul>About us</ul>
        <ul>Contact us</ul>
        <ul>FAQ</ul>
      </li>
    </nav>
  );
}
