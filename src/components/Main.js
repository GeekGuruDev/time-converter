import { useState } from "react";
import Dropdown from "./Dropdown";

const Main = () => {
  const [time, setTime] = useState("");
  const [unit, setUnit] = useState("Minutes");

  const convertTime = () => {
    let ms = 0;
    let sec = 0;
    let min = 0;
    let hr = 0;
    let day = 0;
    if (unit === "Milliseconds") {
      ms = time % 1000;
      sec = Math.floor(time / 1000) % 60;
      min = Math.floor(time / (60 * 1000)) % 60;
      hr = Math.floor(time / (60 * 60 * 1000)) % 24;
      day = Math.floor(time / (24 * 60 * 60 * 1000));
    }
    if (unit === "Seconds") {
      sec = time % 60;
      min = Math.floor(time / 60) % 60;
      hr = Math.floor(time / (60 * 60)) % 24;
      day = Math.floor(time / (24 * 60 * 60));
    }
    if (unit === "Minutes") {
      min = time % 60;
      hr = Math.floor(time / 60) % 24;
      day = Math.floor(time / (24 * 60));
    }
    if (unit === "Hours") {
      hr = time % 24;
      day = Math.floor(time / 24);
    }
    return `${day ? `${day} ${day === 1 ? "day" : "days"}` : ""}${
      (day && hr) || (day && min) || (day && sec) || (day && ms) ? "," : ""
    }
    ${hr ? `${hr} ${hr === 1 ? "hour" : "hours"}` : ""}${
      (hr && min) || (hr && sec) || (hr && ms) ? ", " : ""
    }
    ${min ? `${min} ${min === 1 ? "minute" : "minutes"}` : ""}${
      (min && sec) || (min && ms) ? ", " : ""
    }
    ${sec ? `${sec} ${sec === 1 ? "second" : "seconds"}` : ""}${
      sec && ms ? ", " : ""
    }
    ${ms ? `${ms} ${ms === 1 ? "millisecond" : "Milliseconds"}` : ""} `;
  };

  return (
    <div className=" h-2/5 justify-self-center mx-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex justify-center gap-6 flex-grow max-w-lg m-auto"
      >
        <input
          id="minutes"
          name="time"
          type="number"
          min="0"
          step="1"
          placeholder="Enter Time"
          className="w-full bg-slate-600 rounded px-4 py-2 border-2 border-green-900 self-start flex-shrink focus-visible:outline-none focus-visible:border-green-600"
          onChange={(e) => {
            setTime(e.target.value);
          }}
          value={time}
        />
        <Dropdown
          list={["Milliseconds", "Seconds", "Minutes", "Hours"]}
          selected={unit}
          setItem={setUnit}
        />
      </form>
      <h1 className="text-center text-2xl my-10">{convertTime()}</h1>
    </div>
  );
};

export default Main;
