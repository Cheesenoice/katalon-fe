import katalonIcon from "../assets/Katalon-icon.png";
import leftRibbon from "../assets/left-ribbon.png";
import rightRibbon from "../assets/right-ribbon.png";

export default function TimelinePage() {
  const activities = [
    {
      id: 1,
      title: "Activity #1",
      color: "#ffd815",
      items: [
        "Live webinar #1 (5 June 2026): The Future of Testing Starts Here",
        "Live webinar #2 (15 Aug 2026): Beyond Testing - Toward Intelligence",
      ],
    },
    {
      id: 2,
      title: "Activity #2",
      color: "#9a4dd2",
      items: ["Participate in London Tech Week 2026 to showcase TrueTest"],
    },
    {
      id: 3,
      title: "Activity #3",
      color: "#ea483d",
      items: ["Live Product Demo & Networking Session/ Workshop"],
    },
    {
      id: 4,
      title: "Activity #4",
      color: "#e37e83",
      items: [
        "Industry Media Interviews",
        "Participating in interviews with leading UK technology and QA publications",
      ],
    },
  ];

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
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Katalon Logo and Icon */}
        <div className="flex items-center gap-4 mb-8">
          <img src={katalonIcon} alt="Katalon" className="w-60 h-auto" />
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
          <div className="grid grid-cols-4 gap-4 mb-8">
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
            <div className="grid grid-cols-4 relative">
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
          <div className="grid grid-cols-4 gap-6">
            {activities.map((activity) => (
              <div key={activity.id} className="text-left">
                {activity.items.map((item, index) => (
                  <p
                    key={index}
                    className="text-sm md:text-base text-black mb-3 leading-relaxed"
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
          className="text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all"
          style={{ backgroundColor: "#9a4dd2" }}
        >
          Mark your calendar so you don't miss out on our latest updates and
          events
        </button>
      </div>
    </div>
  );
}
