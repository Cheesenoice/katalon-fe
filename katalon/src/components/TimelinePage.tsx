import katalonLogo from "../assets/katalon_logo.svg";
import leftRibbon from "../assets/left-ribbon.png";
import rightRibbon from "../assets/right-ribbon.png";

export default function TimelinePage() {
  const activities = [
    {
      id: 1,
      title: "Activity #1",
      color: "#ffd815",
      items: [
        "White-paper: #1 \u201cAI in Testing: 2026 UK Trends\u201d",
        "Webinar: \u201cFuture of AI Test Automation for UK Enterprises\u201d",
        "Demo Series",
      ],
    },
    {
      id: 2,
      title: "Activity #2",
      color: "#9a4dd2",
      items: ["Technology Trade Show"],
    },
    {
      id: 3,
      title: "Activity #3",
      color: "#ea483d",
      items: ["Limited-Time Free Trial Promotion"],
    },
  ];

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
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Katalon Logo and Icon */}
        <div className="flex items-center gap-4 mb-8 mt-40">
          <img src={katalonLogo} alt="Katalon" className="w-60 h-auto" />
        </div>

        {/* Star */}
        <div className="text-6xl mb-8">✨</div>

        {/* Main Announcement */}
        <div className="text-center max-w-5xl mb-12">
          <p className="text-xl md:text-2xl text-black leading-relaxed">
            <span className="font-semibold" style={{ color: "#9a4dd2" }}>
              Katalon officially launches in the United Kingdom,
            </span>{" "}
            expanding globally with{" "}
            <span className="font-semibold" style={{ color: "#e37e83" }}>
              TrueTest, our next-generation AI automation testing platform
            </span>
          </p>
        </div>

        {/* Activities Timeline */}
        <div className="w-full max-w-7xl mb-12">
          {/* Activity Headers */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {activities.map((activity) => (
              <div key={activity.id} className="text-center">
                <h3
                  className="text-lg md:text-xl font-semibold mb-4"
                  style={{ color: "#52be96" }}
                >
                  {activity.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Timeline Line with Dots */}
          <div className="relative mb-8">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-black transform -translate-y-1/2"></div>
            <div className="grid grid-cols-3 relative">
              {activities.map((activity) => (
                <div key={activity.id} className="flex justify-center">
                  <div
                    className="w-8 h-8 rounded-full border-4 border-white relative z-10 shadow-lg"
                    style={{ backgroundColor: activity.color }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Content */}
          <div className="grid grid-cols-3 gap-6">
            {activities.map((activity) => (
              <div key={activity.id} className="text-center">
                {activity.items.map((item, index) => (
                  <p
                    key={index}
                    className="text-xs md:text-base text-black mb-3 leading-relaxed text-center"
                  >
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <button
          className="text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:opacity-90 transition-all max-w-xs sm:max-w-md text-center"
          style={{ backgroundColor: "#9a4dd2" }}
        >
          Mark your calendar so you don't miss out on our latest updates and
          events
        </button>
      </div>
    </div>
  );
}
