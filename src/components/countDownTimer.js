import { useState,useEffect } from "react";
import { getRemainingTimeUntilMsTimeStamp } from "./countdown-Utils/CountdownTimerUtils";

const defaultRemainingTime = {
    seconds: "00",
    minutes: "00",
    hours: "00",
    days: "00"
}

const CountdownTimer = ({countdownTimeStampMs}) => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimeStampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [countdownTimeStampMs]);

    const updateRemainingTime = (countdown) => {
      setRemainingTime( getRemainingTimeUntilMsTimeStamp(countdown));
    }
    return(
        <div className="countdown-timer-comp">
            <span>{remainingTime.days}</span>
            <span>Days</span>
            <span>{remainingTime.hours}</span>
            <span>Hours</span>
            <span>{remainingTime.minutes}</span>
            <span>Minutes</span>
            <span>{remainingTime.seconds}</span>
            <span>Seconds</span>
        </div>
    )
}

export default CountdownTimer;