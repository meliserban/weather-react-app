import React from "react";
import Details from "./Details";
import { iconUrlFromCode } from "../services/weatherService";

function Forecast({ title, items }) {
  return (



    <div>
      <div className="flex items-center mt-6 justify-start">
        <p className="text-white font-medium uppercase">{title} forecast</p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">03:30 PM</p>
          <img
            className="w-12 my-1"
            src={iconUrlFromCode(items.icon)}
            alt=""
          />
          <p>{`${items.temp.toFixed()}°`}</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30 PM</p>
          <img
            className="w-12 my-1"
            src={iconUrlFromCode(items.icon)}
            alt=""
          />
          <p>{`${items.temp.toFixed()}°`}</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">05:30 PM</p>
          <img
            className="w-12 my-1"
            src={iconUrlFromCode(items.icon)}
            alt=""
          />
          <p>{`${items.temp.toFixed()}°`}</p>
        </div>
       
      </div>
    </div>
  );
}

export default Forecast;
