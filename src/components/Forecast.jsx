import React from "react";

function Forecast(props) {
  return (
    <div>
      <div className="flex items-center mt-6 justify-start">
        <p className="text-white font-medium uppercase">{props.title} forecast</p>
      </div>
      <hr className="my-2" />

      <div className="flex flex-row items-center justify-between text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">03:30 PM</p>
          <img
            className="w-12 my-1"
            src="https://help.apple.com/assets/656912ADA28BF1B7E90BF0F6/656912B3021EA3AD750FB887/tr_TR/67aaf9dbe30989c25cbde6c6ec099213.png"
            alt=""
          />
          <p>17°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">04:30 PM</p>
          <img
            className="w-12 my-1"
            src="https://help.apple.com/assets/656912ADA28BF1B7E90BF0F6/656912B3021EA3AD750FB887/tr_TR/575900edccbc7def167f7874c02aeb0b.png"
            alt=""
          />
          <p>16°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">05:30 PM</p>
          <img
            className="w-12 my-1"
            src="https://help.apple.com/assets/656912ADA28BF1B7E90BF0F6/656912B3021EA3AD750FB887/tr_TR/67aaf9dbe30989c25cbde6c6ec099213.png"
            alt=""
          />
          <p>16°</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">06:30 PM</p>
          <img
            className="w-12 my-1"
            src="https://help.apple.com/assets/656912ADA28BF1B7E90BF0F6/656912B3021EA3AD750FB887/tr_TR/67aaf9dbe30989c25cbde6c6ec099213.png"
            alt=""
          />
          <p>14°</p>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
