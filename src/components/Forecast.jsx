import React from "react";
import { iconUrlFromCode } from "../services/weatherService";

function Forecast({ title, items, daytime, daytime2, daytime3}) {
  return (



    <div>
      <div className="flex items-center mt-6 justify-start">
        <p className="text-white font-medium uppercase">{title} forecast</p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">{daytime}</p>
          <img
            className="w-12 my-1"
            src={iconUrlFromCode(items.icon)}
            alt=""
          />
          <p>{`${items.temp.toFixed()}°`}</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">{daytime2}</p>
          <img
            className="w-12 my-1"
            src={iconUrlFromCode(items.icon)}
            alt=""
          />
          <p>{`${items.temp.toFixed()}°`}</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">{daytime3}</p>
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
