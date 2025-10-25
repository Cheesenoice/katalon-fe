import { useState, useEffect } from "react";
import katalonIcon from "../assets/Katalon-icon.png";
import leftRibbon from "../assets/left-ribbon.png";
import rightRibbon from "../assets/right-ribbon.png";

export default function CountdownPage() {
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

        return prevTime; // Stop at 00:00:00
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Ribbons */}
      <img
        src={leftRibbon}
        alt="Left ribbon"
        className="absolute left-0 top-0 h-100 w-auto z-10 object-cover"
      />
      <img
        src={rightRibbon}
        alt="Right ribbon"
        className="absolute right-0 top-0 h-100 w-auto z-10 object-cover"
      />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Katalon Logo and Icon */}
        <div className="flex items-center gap-4 mb-8">
          <img src={katalonIcon} alt="Katalon" className="w-60 h-auto" />
        </div>

        {/* Star */}
        <div className="text-6xl mb-12">✨</div>

        {/* Time Labels */}
        <div className="flex gap-12 md:gap-20 lg:gap-32 mb-6">
          <div className="text-center w-24 md:w-32 lg:w-40">
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-black">
              Hours
            </h2>
          </div>
          <div className="text-center w-24 md:w-32 lg:w-40">
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-black">
              Minutes
            </h2>
          </div>
          <div className="text-center w-24 md:w-32 lg:w-40">
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-black">
              Seconds
            </h2>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="flex gap-12 md:gap-20 lg:gap-32 mb-12">
          {/* Hours */}
          <div
            className="rounded-3xl p-4 md:p-6 lg:p-8 w-24 md:w-32 lg:w-40 shadow-lg"
            style={{ backgroundColor: "#ffd815" }}
          >
            <div
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-center"
              style={{ color: "#9a4dd2" }}
            >
              {formatTime(time.hours)}
            </div>
          </div>

          {/* Minutes */}
          <div
            className="rounded-3xl p-4 md:p-6 lg:p-8 w-24 md:w-32 lg:w-40 shadow-lg"
            style={{ backgroundColor: "#52be96" }}
          >
            <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center">
              {formatTime(time.minutes)}
            </div>
          </div>

          {/* Seconds */}
          <div
            className="rounded-3xl p-4 md:p-6 lg:p-8 w-24 md:w-32 lg:w-40 shadow-lg"
            style={{ backgroundColor: "#9a4dd2" }}
          >
            <div
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-center"
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
          className="text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all"
          style={{ backgroundColor: "#9a4dd2" }}
        >
          Sign up to receive the latest news
        </button>
      </div>
    </div>
  );
}
