import { useEffect } from "react";
import { useState } from "react";
import styles from "./StopwatchNew.module.css";

const StopwatchNew = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleStart = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className={styles.mainContainer}>
      <h1>StopWatch</h1>
      <div>
        <span>{formatTime(time)}</span>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={handleStart} className={styles.button}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={handleReset} className={styles.button}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopwatchNew;
