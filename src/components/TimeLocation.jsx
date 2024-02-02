import React from "react";

function TimeLocation() {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-white text-xl font-extralight">
          Saturday, 3 February 2024 | Local time: 1:42 AM
        </p>
      </div>

      <div className="flex items-center justify-center my-3">
      <p className="text-white text-3xl font-medium">
           {`Toronto, Canada`}
        </p>
      </div >
    </div>
  );
}

export default TimeLocation;
