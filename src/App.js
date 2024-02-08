import TopButton from "./components/TopButton";
import Inputs from "./components/Inputs";
import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TimeLocation from "./components/TimeLocation";
import Details from "./components/Details";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState({ q: "toronto" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  const formatBackground = () => {
    if(!weather) return "from-cyan-900 to-blue-900";
    const threshold = units === "metric" ? 20 : 60;
    const threshold2 = units === "metric" ? 10 : 50;

    if(weather.temp > threshold2 && weather.temp < threshold) return "from-cyan-300 to-blue-700";
    if(weather.temp <= threshold2 && weather.temp <= threshold) return "from-cyan-900 to-blue-700";

    return "from-yellow-400 to-orange-400";
  }


  return (
    <div
      className={`mx-auto max-w-5xl		 mt-4 py-5 px-32 rounded-xl
      bg-gradient-to-br h-fit shadow-xl
      shadow-gray-400 ${formatBackground()}`}
    >
      <TopButton setQuery={setQuery}/>
      <Inputs  setQuery={setQuery} units={units} setUnits={setUnits}/>

      {weather && (
        <div>
          <TimeLocation weather={weather}  />
          <Details weather={weather} />
          <Forecast title="hourly" items={weather} daytime="12:00 PM" daytime2="1:00 PM" daytime3="2:00 PM"/>
          <Forecast title="daily" items={weather} daytime="Tomorrow" daytime2="2/9" daytime3="2/10"/>
        </div>
      )}
    </div>
  );
}

export default App;
