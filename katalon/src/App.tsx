import { useState } from "react";
import CountdownPage from "./components/CountdownPage";
import TimelinePage from "./components/TimelinePage";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState<"countdown" | "timeline">(
    "countdown"
  );

  const handleCountdownComplete = () => {
    setCurrentPage("timeline");
  };

  return (
    <div className="relative">
      {/* Page Content */}
      {currentPage === "countdown" && (
        <CountdownPage onComplete={handleCountdownComplete} />
      )}
      {currentPage === "timeline" && <TimelinePage />}
    </div>
  );
}

export default App;
