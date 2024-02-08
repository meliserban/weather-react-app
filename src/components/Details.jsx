import React from "react";
import {
  UilTemperature,
  UilSun,
  UilWind,
  UilSunset,
  UilTear,
  UilArrowUp,
  UilArrowDown,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

function Details({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    (temp = parseInt(temp)),
    (feels_like = parseInt(feels_like)),
    (speed = parseInt(speed)),
    (temp_max = parseInt(temp_max)),
    (temp_min = parseInt(temp_min)),
    (
      <div>
        <div className=" flex items-center justify-center py-6 text-xl text-cyan-200">
          <p>{details}</p>
        </div>
        <div className="flex flex-row items-center mb-2 justify-between text-white py-3">
          <img
            className=" flex items-center justify-center py-6  h-30 w-24"
            src={iconUrlFromCode(icon)}
            alt=""
          />
          <p className="flex flex-col space-y-2 text-5xl">{temp}°</p>
          <div className="flex flex-col space-y-2">
            <div className="flex font-light text-sm items-center justify-center">
              <UilTemperature size={35} className="mr-1" />
              Real felt:
              <span className="font-medium ml-1">{feels_like}° </span>
            </div>
            <div className="flex font-light text-sm items-center justify-center">
              <UilTear size={35} className="mr-1" />
              Humidity:
              <span className="font-medium ml-1">{humidity}% </span>
            </div>{" "}
            <div className="flex font-light text-sm items-center justify-center">
              <UilWind size={35} className="mr-1" />
              Wind:
              <span className="font-medium ml-1">{speed} km/h</span>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center space-x-2 mb-3 text-white text-sm ">
          <UilSun />
          <p className=" font-light">
            Rise: <span className="font-medium ml-1">{formatToLocalTime(sunrise, timezone, 'hh:mm a')}</span>
          </p>
          <p className="font-light">|</p>
          <UilSunset />
          <p className=" text-l font-extralight">
            Set:<span className="font-medium ml-1">{formatToLocalTime(sunset, timezone, 'hh:mm a')}</span>
          </p>
          <p className="font-light">|</p>

          <UilArrowUp />
          <p className=" text-l font-extralight">
            High:<span className="font-medium ml-1">{temp_max}</span>
          </p>
          <p className="font-light">|</p>

          <UilArrowDown />
          <p className=" text-l font-extralight">
            Low:<span className="font-medium ml-1"> {temp_min}</span>
          </p>
          <p className="font-light">|</p>
        </div>
      </div>
    )
  );
}

export default Details;
