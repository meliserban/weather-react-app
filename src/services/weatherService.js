import { DateTime } from "luxon";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = async (infoType, searchParams) => {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const url = new URL(`${BASE_URL}/${infoType}`);
  const params = new URLSearchParams({ ...searchParams, appid: apiKey });
  url.search = params;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};



const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, humidity, temp_min, temp_max },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    details,
    icon,
    lat,
    lon,
    temp,
    feels_like,
    humidity,
    temp_min,
    temp_max,
    name,
    dt,
    country,
    sunrise,
    sunset,
    weather,
    speed,
  };
};


const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);

  return formattedCurrentWeather;
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) =>  `https://openweathermap.org/img/wn/${code}@2x.png`
export default getFormattedWeatherData;
export { formatToLocalTime, iconUrlFromCode };