import { useState } from "react";
import CountdownPage from "./components/CountdownPage";
import TimelinePage from "./components/TimelinePage";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState<
    "countdown" | "timeline" | "logo"
  >("countdown");

  return (
    <div className="relative">
      {/* Navigation */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => setCurrentPage("countdown")}
          className={`px-4 py-2 rounded-full font-medium text-sm ${
            currentPage === "countdown"
              ? "bg-white text-black shadow-lg"
              : "bg-black/20 text-white backdrop-blur-sm"
          }`}
        >
          Countdown
        </button>
        <button
          onClick={() => setCurrentPage("timeline")}
          className={`px-4 py-2 rounded-full font-medium text-sm ${
            currentPage === "timeline"
              ? "bg-white text-black shadow-lg"
              : "bg-black/20 text-white backdrop-blur-sm"
          }`}
        >
          Timeline
        </button>
      </div>

      {/* Page Content */}
      {currentPage === "countdown" && <CountdownPage />}
      {currentPage === "timeline" && <TimelinePage />}
    </div>
  );
}

export default App;
