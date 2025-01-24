import { useEffect, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [flag, setFlag] = useState(false);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600000); // 1 hour = 3600000 ms
    const minutes = Math.floor((time % 3600000) / 60000); // 1 minute = 60000 ms
    const seconds = Math.floor((time % 60000) / 1000); // 1 second = 1000 ms
    const milliseconds = Math.floor((time % 1000) / 10); // Convert to two digits

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    let intervalId;
    if (flag) {
      intervalId = setInterval(() => {
        setTime((prev) => prev + 10); // Increment by 10ms
      }, 10); // 10 milliseconds
    } else if (intervalId) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [flag]);

  const handleStart = () => {
    setFlag((prev) => !prev);
  };

  const handleReset = () => {
    setFlag(false);
    setTime(0);
  };

  return (
    <div className="flex gap-10 flex-col justify-center items-center">
      <h1>Stopwatch</h1>
      <div>
        <span>Time: {formatTime(time)}</span>
      </div>
      <div className="flex gap-11">
        <button
          onClick={handleStart}
          className="bg-purple-500 text-3xl py-4 px-6 rounded-2xl"
        >
          {flag ? "Stop" : "Start"}
        </button>
        <button
          onClick={handleReset}
          className="bg-purple-500 text-3xl py-4 px-6 rounded-2xl"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;
