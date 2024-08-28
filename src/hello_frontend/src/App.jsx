import React, { useState, useEffect } from "react";

const CountdownTimer = ({ initialMinutes = 0, initialSeconds = 60 }) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    // If both minutes and seconds are zero, stop the timer
    if (minutes === 0 && seconds === 0) return;

    // Set up a timer to decrease the countdown every second
    const timerId = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }, 1000);

    // Clean up the timer when the component is unmounted or when the countdown changes
    return () => clearInterval(timerId);
  }, [minutes, seconds]);

  return (
    <div>
      <h1>Countdown Timer</h1>
      <div style={{ fontSize: "48px" }}>
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}
      </div>
    </div>
  );
};

export default CountdownTimer;