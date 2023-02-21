import { useState, useEffect } from "react";

import { PomodoroContainer, Timer, Button } from "./Pomodoro.styles";

export const Pomodoro = () => {
  const originalSeconds = 25 * 60;

  const [seconds, setSeconds] = useState(originalSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const [isReseted, setIsReseted] = useState(false);

  const minutesLeft = Math.floor(seconds / 60);
  const secondsLeft = Math.floor(seconds % 60);

  console.log(minutesLeft, secondsLeft);

  const handleStart = () => {
    setIsRunning(!isRunning);
    setIsReseted(false);
  };

  const handleReset = () => {
    setIsReseted(!isReseted);
  };

  useEffect(() => {
    if (isReseted === false && isRunning === true && seconds > 0) {
      setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else if (isReseted === true) {
      setSeconds(originalSeconds);
      setIsRunning(false);
    }
  }, [seconds, isRunning, isReseted]);

  return (
    <PomodoroContainer>
      <Timer>
        {String(minutesLeft).padEnd(2, "0")}:
        {String(secondsLeft).padEnd(2, "0")}
      </Timer>
      <div className="btn-container">
        <Button onClick={handleStart}>Start</Button>
        <Button onClick={handleReset}>Reset</Button>
      </div>
    </PomodoroContainer>
  );
};
