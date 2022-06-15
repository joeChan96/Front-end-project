import React, { useState, useEffect } from "react";
import "./weather.css";

export default function Weather() {
  const [weather, setWeather] = useState<Array<any> | null>([]);

  useEffect(() => {
    const key = "82005d27a116c2880c8f0fcb866998a0";

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(setPosition, showError);
    } else {
      console.log("Browser doesn't Support Geolocation");
    }

    function setPosition(position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;

      getWeather(latitude, longitude);
    }

    function showError(): void {
      console.log("Cannot get current location");
    }

    function getWeather(latitude: number, longitude: number) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`
      )
        .then((res) => res.json())
        .then((data) =>
          setWeather([Math.floor(data.main.temp - 273), data.weather[0].icon])
        );
    }
  }, []);

  return (
    <div className="weather">
      <img className="weather-img" src={`icons/${weather[1]}.png`} />
      <div className="temperature">{weather[0]}°C</div>
    </div>
  );
}

{
  /* <img className="weather-img" src={`icons/${weather[1]}.png`} />{" "} */
}
