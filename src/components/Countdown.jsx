import { useState } from "react";
import "./countdown.css";

const CountdownTimer = () => {
  const [complete, setComplete] = useState(false);
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  // Set the date we're counting down to
  const countDownDate = new Date("Oct 17, 2026 01:00:00").getTime();

  // Update the count down every 1 second
  const x = setInterval(function() {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

      // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      setComplete(true);
      return;
    }

    // Time calculations for days, hours, minutes and seconds
    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

  }, 1000);

  if (complete) {
    return (
      <h2 className="heading2">Today!</h2>
    );
  }

  return (
    <h2 className="countdownContainer heading2" aria-hidden>
      <span className="countdownLabel">days</span><span></span><span className="countdownLabel">h<span className="desktop">ou</span>rs</span><span></span><span className="countdownLabel">min<span className="desktop">ute</span>s</span><span></span><span className="countdownLabel">sec<span className="desktop">ond</span>s</span>
      <span>{days}</span><span>:</span><span>{hours}</span><span>:</span><span>{minutes}</span><span>:</span><span>{seconds}</span>
    </h2>
  );
}

export default CountdownTimer;