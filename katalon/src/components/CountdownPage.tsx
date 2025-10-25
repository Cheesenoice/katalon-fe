import { useState, useEffect } from "react";
import katalonLogo from "../assets/katalon_logo.svg";
import leftRibbon from "../assets/left-ribbon.png";
import rightRibbon from "../assets/right-ribbon.png";

interface CountdownPageProps {
  onComplete: () => void;
}

export default function CountdownPage({ onComplete }: CountdownPageProps) {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 1,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        const { hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        }

        if (minutes > 0) {
          return { ...prevTime, minutes: minutes - 1, seconds: 59 };
        }

        if (hours > 0) {
          return { hours: hours - 1, minutes: 59, seconds: 59 };
        }

        // When countdown reaches 00:00:00, call onComplete
        if (hours === 0 && minutes === 0 && seconds === 0) {
          onComplete();
        }

        return prevTime; // Stop at 00:00:00
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onComplete]);

  const formatTime = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Ribbons */}
      <img
        src={leftRibbon}
        alt="Left ribbon"
        className="absolute left-0 top-0 h-25 w-auto md:h-50 lg:h-80 z-10 object-cover"
      />
      <img
        src={rightRibbon}
        alt="Right ribbon"
        className="absolute right-0 top-0 h-25 w-auto md:h-50 lg:h-80 z-10 object-cover"
      />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Katalon Logo and Icon */}
        <div className="flex items-center gap-4 mb-8 ">
          <img src={katalonLogo} alt="Katalon" className="w-60 h-auto" />
        </div>

        {/* Star */}
        <div className="text-6xl mb-12">✨</div>

        {/* Time Labels */}
        <div className="flex gap-4 sm:gap-8 md:gap-20 lg:gap-32 mb-6">
          <div className="text-center w-20 sm:w-24 md:w-32 lg:w-40">
            <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold text-black">
              Hours
            </h2>
          </div>
          <div className="text-center w-20 sm:w-24 md:w-32 lg:w-40">
            <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold text-black">
              Minutes
            </h2>
          </div>
          <div className="text-center w-20 sm:w-24 md:w-32 lg:w-40">
            <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold text-black">
              Seconds
            </h2>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="flex gap-4 sm:gap-8 md:gap-20 lg:gap-32 mb-12">
          {/* Hours */}
          <div
            className="rounded-2xl sm:rounded-3xl p-2 sm:p-4 md:p-6 lg:p-8 w-20 sm:w-24 md:w-32 lg:w-40 shadow-lg"
            style={{ backgroundColor: "#ffd815" }}
          >
            <div
              className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-center"
              style={{ color: "#9a4dd2" }}
            >
              {formatTime(time.hours)}
            </div>
          </div>

          {/* Minutes */}
          <div
            className="rounded-2xl sm:rounded-3xl p-2 sm:p-4 md:p-6 lg:p-8 w-20 sm:w-24 md:w-32 lg:w-40 shadow-lg"
            style={{ backgroundColor: "#52be96" }}
          >
            <div className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center">
              {formatTime(time.minutes)}
            </div>
          </div>

          {/* Seconds */}
          <div
            className="rounded-2xl sm:rounded-3xl p-2 sm:p-4 md:p-6 lg:p-8 w-20 sm:w-24 md:w-32 lg:w-40 shadow-lg"
            style={{ backgroundColor: "#9a4dd2" }}
          >
            <div
              className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-center"
              style={{ color: "#ffd815" }}
            >
              {formatTime(time.seconds)}
            </div>
          </div>
        </div>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-8 max-w-4xl">
          Stay tuned — exciting things are on the horizon!
        </h2>

        {/* CTA Button */}
        <button
          className="text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:opacity-90 transition-all"
          style={{ backgroundColor: "#9a4dd2" }}
        >
          Sign up to receive the latest news
        </button>
      </div>
    </div>
  );
}
