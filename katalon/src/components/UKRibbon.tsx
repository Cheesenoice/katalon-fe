export default function UKRibbon({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={`absolute ${side}-0 top-0 h-full w-32 z-10 overflow-hidden`}
    >
      <div
        className="h-full w-full bg-gradient-to-br from-blue-800 via-red-600 to-blue-800 transform"
        style={{
          background: `
            linear-gradient(45deg, #012169 0%, #012169 33%, transparent 33%, transparent 66%, #012169 66%),
            linear-gradient(-45deg, #012169 0%, #012169 33%, transparent 33%, transparent 66%, #012169 66%),
            linear-gradient(45deg, transparent 37%, #C8102E 37%, #C8102E 63%, transparent 63%),
            linear-gradient(-45deg, transparent 37%, #C8102E 37%, #C8102E 63%, transparent 63%),
            #FFFFFF
          `,
          transform: side === "left" ? "skewY(-15deg)" : "skewY(15deg)",
          transformOrigin: side === "left" ? "bottom left" : "bottom right",
        }}
      />
    </div>
  );
}
