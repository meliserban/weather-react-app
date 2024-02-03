import TopButton from "./components/TopButton";
import Inputs from "./components/Inputs";
import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TimeLocation from "./components/TimeLocation";
import Details from "./components/Details";
import Forecast from "./components/Forecast";

function App() {
  return (
    <div
      className="mx-auto max-w-7xl		 mt-4 py-5 px-32 rounded-2xl
    bg-gradient-to-br from-cyan-500 to-blue-900 h-fit shadow-xl
    shadow-gray-400"
    >
      <TopButton />
      <Inputs />
      <TimeLocation />
      <Details />
      <Forecast title="hourly"/>
      <Forecast title="daily"/>

    </div>
  );
}

export default App;
