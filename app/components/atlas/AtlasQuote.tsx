import Atlas from "./Atlas";
import AtlasBubble from "./AtlasBubble";
import { AtlasMood, AtlasAccessory } from "@/app/data/atlasQuotes";

type AtlasQuoteProps = {
  quote: string;
  title?: string;
  mood?: AtlasMood;
  accessory?: AtlasAccessory;
  size?: "sm" | "md" | "lg";
  layout?: "inline" | "stacked";
  position?: "left" | "right";
  bubbleClassName?: string;
};

export default function AtlasQuote({
  quote,
  title,
  mood = "default",
  accessory,
  size = "md",
  layout = "inline",
  position = "right",
  bubbleClassName = "",
}: AtlasQuoteProps) {
  if (layout === "stacked") {
    return (
      <div className="flex flex-col items-center gap-6">
        <Atlas mood={mood} accessory={accessory} size={size} showBalloon={true} />
        <AtlasBubble quote={quote} title={title} position={position} />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-4">
      {position === "left" && <Atlas mood={mood} accessory={accessory} size={size} showBalloon={true} />}
      <AtlasBubble quote={quote} title={title} position={position} className={bubbleClassName} />
      {position === "right" && <Atlas mood={mood} accessory={accessory} size={size} showBalloon={true} />}
    </div>
  );
}
