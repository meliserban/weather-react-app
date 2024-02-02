import React from 'react';

export default function TopButton() {

  const cities = [
    {
      id: 1,
      title: 'Toronto'
    },
    {
      id: 2,
      title: 'Rome '
    },
    {
      id: 3,
      title: 'Vienna'
    },
    {
      id: 4,
      title: 'Krakow'
    },
    {
      id: 5,
      title: 'Warsaw'
    },
  ]
  return (
    <div className='flex items-center justify-around my-6'>
{cities.map((city) => (
<button className='text-white text-lg font-medium'>{city.title}</button>
))}  

</div>
 )

}

