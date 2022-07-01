import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

import "./weather.css";

const emails = ["username@gmail.com", "user02@gmail.com"];

// Weather export default
export default function Weather() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
    // onClose(selectedValue);
  };

  const [weather, setWeather] = useState<Array<any> | null>([]);

  /////////////////////////
  const [forecast, setForecast] = useState<Array<any> | null>([]);

  // const { onClose, selectedValue, open } = props;

  // const handleClose = () => {
  //   onClose(selectedValue);
  // };

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    const key = "32ba0bfed592484379e51106cef3f204";

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(setPosition, showError);
    } else {
      console.log("Browser doesn't Support Geolocation");
    }

    function setPosition(position) {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;

      getWeather(latitude, longitude);
      getWeather2(latitude, longitude);
    }

    function showError(): void {
      console.log("Cannot get current location");
    }

    function getWeather(latitude: number, longitude: number) {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`
      )
        .then((res) => res.json())
        .then((data) => {
          setWeather([
            Math.floor(data.main.temp - 273),
            data.weather[0].icon,
            data.weather[0].description,
          ]);
          console.log(data);
        });
    }

    function getWeather2(latitude: number, longitude: number) {
      fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}`
      )
        .then((res) => res.json())
        .then((data) => {
          setForecast([
            data.list[10],
            data.list[18],
            data.list[26],
            data.list[34],
          ]);
          console.log("fetched");
        })
        .catch((err) => console.log(err + "happens"));
    }
  }, []);

  // const date = new Date(Date());
  let currentMonth: number | string = new Date(Date()).getMonth() + 1;
  let currentDate: number | string = new Date(Date()).getDate();

  if (currentMonth.toString().length == 1) {
    currentMonth = "0" + currentMonth;
  }

  if (currentDate.toString().length == 1) {
    currentDate = "0" + currentDate;
  }

  return (
    <div>
      <div className="weather" onClick={handleClickOpen}>
        {/* <div className="temperature">
          {currentMonth}/{currentDate}
        </div> */}
        <img
          className="weather-img"
          src={`icons/${weather[1]}.png`}
          alt="weather-icon"
        />
        <div className="temperature">{weather[0]}°C</div>
      </div>
      <div>
        {/* <Button onClick={handleClickOpen}>Open</Button> */}
        {/* <SimpleDialog
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
        /> */}
        <Dialog onClose={handleClose} open={open} sx={{ width: "100%", p: 0 }}>
          <DialogTitle
            sx={{
              textAlign: "center",
              bgcolor: "#5bc0be",
              color: "#11545c",
              fontFamily: "'Merriweather', serif",
              fontSize: 26,
            }}
          >
            Daily weather forecast
          </DialogTitle>

          <List
            sx={{
              pt: 0.5,
              pb: 0.5,
              width: "100%",
              pl: 3.4,
              pr: 4,
              bgcolor: "#dbfffe",
            }}
          >
            <ListItem
              key={weather[0]}
              sx={{
                justifyContent: "flex-start",
                width: "100%",
                gap: 2,
              }}
            >
              <img
                className="currentweather-img"
                src={`icons/${weather[1]}.png`}
              />
              {/* <ListItemText primary={day.dt_txt} /> */}
              <p className="currentdate">
                {currentMonth}/{currentDate}
              </p>

              <p className="currentdate">
                {weekday[new Date(Date()).getDay()].slice(0, 3)}
              </p>

              <p className="currentWeather">{weather[0]}°C</p>
              <p className="currentdescription">{weather[2]}</p>
            </ListItem>
          </List>

          <List sx={{ pt: 0, width: "100%", pl: 4, pr: 4 }}>
            {forecast.map((day) => (
              <ListItem
                key={day}
                sx={{
                  justifyContent: "flex-start",
                  width: "100%",
                  gap: 2,
                  borderTop: 0.5,
                  borderColor: "#cfcfcf",
                }}
              >
                <img
                  className="weather-img"
                  src={`icons/${day.weather[0].icon}.png`}
                />
                {/* <ListItemText primary={day.dt_txt} /> */}
                <p className="date">
                  {day.dt_txt.slice(5, 7)}/{day.dt_txt.slice(8, 10)}
                </p>

                <p className="weekdaydate">
                  {weekday[new Date(day.dt_txt.slice(0, 10)).getDay()].slice(
                    0,
                    3
                  )}
                </p>

                <p className="temp">{Math.floor(day.main.temp_min - 273)}°C</p>
                <p className="description">{day.weather[0].description}</p>
              </ListItem>
            ))}
          </List>
        </Dialog>
      </div>
    </div>
  );
}

// export interface SimpleDialogProps {
//   open: boolean;
//   selectedValue: string;
//   onClose: (value: string) => void;
// }

// function SimpleDialog(props: SimpleDialogProps) {
//   const [forecast, setForecast] = useState<Array<any> | null>([]);

//   const { onClose, selectedValue, open } = props;

//   const handleClose = () => {
//     onClose(selectedValue);
//   };

//   const weekday = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];

//   useEffect(() => {
//     const key = "32ba0bfed592484379e51106cef3f204";

//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition(setPosition, showError);
//     } else {
//       console.log("Browser doesn't Support Geolocation");
//     }

//     function setPosition(position) {
//       let latitude = position.coords.latitude;
//       let longitude = position.coords.longitude;

//       getWeather(latitude, longitude);
//     }

//     function showError(): void {
//       console.log("Cannot get current location");
//     }

//     function getWeather(latitude: number, longitude: number) {
//       fetch(
//         `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}`
//       )
//         .then((res) => res.json())
//         .then((data) => {
//           setForecast([
//             data.list[10],
//             data.list[18],
//             data.list[26],
//             data.list[34],
//           ]);
//           console.log("fetched");
//         })
//         .catch((err) => console.log(err + "happens"));
//     }
//   }, [open]);

//   return (
//     <Dialog onClose={handleClose} open={open} sx={{ width: "100%", p: 0 }}>
//       <DialogTitle
//         sx={{ textAlign: "center", bgcolor: "#5bc0be", color: "#11545c" }}
//       >
//         Daily weather forecast
//       </DialogTitle>
//       <List sx={{ pt: 0, width: "100%", pl: 4, pr: 4 }}>
//         {forecast.map((day) => (
//           <ListItem
//             key={day}
//             sx={{ justifyContent: "flex-start", width: "100%", gap: 1.5 }}
//           >
//             <img
//               className="weather-img"
//               src={`icons/${day.weather[0].icon}.png`}
//             />
//             {/* <ListItemText primary={day.dt_txt} /> */}
//             <p className="date">
//               {day.dt_txt.slice(5, 7)}/{day.dt_txt.slice(8, 10)}
//             </p>

//             <p>
//               {weekday[new Date(day.dt_txt.slice(0, 10)).getDay()].slice(0, 3)}
//             </p>

//             <p className="temp">{Math.floor(day.main.temp_min - 273)}°C</p>
//             <p className="description">
//               {day.weather[0].description.charAt(0).toUpperCase() +
//                 day.weather[0].description.slice(1)}
//             </p>
//           </ListItem>
//         ))}
//       </List>
//     </Dialog>
//   );
// }

// {
//   /* <img className="weather-img" src={`icons/${weather[1]}.png`} />{" "} */
// }
