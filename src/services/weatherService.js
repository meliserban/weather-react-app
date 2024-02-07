import { DateTime } from "luxon";

const API_KEY = "9688c2d038ae2f5edd6e4e23fb6412fb";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  return fetch(url).then((res) => res.json());
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