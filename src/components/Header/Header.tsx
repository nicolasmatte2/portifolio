import { ButtonDiv, Header } from "../../styles/styles";
import { Button } from "../../styles/styles";
import { Pomodoro } from "../../styles/styles";
import { Painel } from "../../styles/styles";
import { useState, useEffect } from "react";

export const Frame = () => {
  const originalSeconds = 25 * 60;
  const [seconds, setSeconds] = useState(originalSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const [isReseted, setIsReseted] = useState(false);

  useEffect(() => {
    if (isReseted === false && isRunning === true && seconds > 0) {
      setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    } else if (isReseted === true) {
      setSeconds(originalSeconds);
      setIsRunning(false);
      setIsReseted(!isReseted);
    }
  }, [seconds, isRunning]);

  const minutesLeft = Math.floor(seconds / 60);
  const secondsLeft = Math.floor(seconds % 60);
  const handleStart = () => {
    setIsRunning(!isRunning);
  };
  const reset = () => {
    setIsReseted(!isReseted);
  };

  return (
    <Header>
      <Pomodoro>
        <Painel>
          {String(minutesLeft).padEnd(2, "0")}:
          {String(secondsLeft).padEnd(2, "0")}
        </Painel>
        <ButtonDiv>
          <Button onClick={handleStart}>Play</Button>
          <Button onClick={reset}>Reset</Button>
        </ButtonDiv>
      </Pomodoro>
    </Header>
  );
};
