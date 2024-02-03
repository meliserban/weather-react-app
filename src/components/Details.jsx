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

function Details() {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-200">
        <p>Sunny</p>
      </div>
      <div className="flex flex-row items-center mb-2 justify-between text-white py-3">
        <img
          className=" flex items-center justify-center py-6  h-30 w-24"
          src="https://help.apple.com/assets/656912ADA28BF1B7E90BF0F6/656912B3021EA3AD750FB887/tr_TR/575900edccbc7def167f7874c02aeb0b.png"
          alt=""
        />
        <p className="flex flex-col space-y-2 text-5xl">19°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={35} className="mr-1" />
            Real felt:
            <span className="font-medium ml-1">16° </span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={35} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">45% </span>
          </div>{" "}
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={35} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">2 km/h </span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 mb-3 text-white text-sm ">
        <UilSun />
        <p className=" font-light">
          Rise: <span className="font-medium ml-1"> 05:54 AM</span>
        </p>
        <p className="font-light">|</p>
        <UilSunset />
        <p className=" text-l font-extralight">
          Set:<span className="font-medium ml-1"> 05:54 AM</span>
        </p>
        <p className="font-light">|</p>

        <UilArrowUp />
        <p className=" text-l font-extralight">
          High:<span className="font-medium ml-1">21°</span>
        </p>
        <p className="font-light">|</p>

        <UilArrowDown />
        <p className=" text-l font-extralight">
          Low:<span className="font-medium ml-1"> 12°</span>
        </p>
        <p className="font-light">|</p>
      </div>
    </div>
  );
}

export default Details;
