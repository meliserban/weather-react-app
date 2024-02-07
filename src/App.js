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

  return (
    <div
      className="mx-auto max-w-5xl		 mt-4 py-5 px-32 rounded-xl
    bg-gradient-to-br from-cyan-300 to-blue-900 h-fit shadow-xl
    shadow-gray-400"
    >
      <TopButton setQuery={setQuery}/>
      <Inputs  setQuery={setQuery} units={units} setUnits={setUnits}/>

      {weather && (
        <div>
          <TimeLocation weather={weather}  />
          <Details weather={weather} />
          <Forecast title="hourly" items={weather}/>
          <Forecast title="daily" items={weather} />
        </div>
      )}
    </div>
  );
}

export default App;
