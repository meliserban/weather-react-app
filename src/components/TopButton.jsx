import React from "react";

export default function TopButton({setQuery}) {
  const cities = [
    {
      id: 1,
      title: "Toronto",
    },
    {
      id: 2,
      title: "Milano ",
    },
    {
      id: 3,
      title: "Vienna",
    },
    {
      id: 4,
      title: "Krakow",
    },
    {
      id: 5,
      title: "Warsaw",
    },
  ];
  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className='text-white text-lg font-medium hover:scale-125 transition ease-out'
       onClick={() => setQuery({ q: city.title})} >
          {city.title}
        </button>
      ))}
    </div>
  );
}
