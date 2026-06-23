import Atlas from "./Atlas";
import { AtlasMood, AtlasAccessory } from "@/app/data/atlasQuotes";

type AtlasFloatingProps = {
  mood?: AtlasMood;
  accessory?: AtlasAccessory;
  size?: "sm" | "md" | "lg";
  position?: "left" | "right" | "center";
  showBalloon?: boolean;
};

export default function AtlasFloating({
  mood = "default",
  accessory,
  size = "md",
  position = "center",
  showBalloon = true,
}: AtlasFloatingProps) {
  const positionClasses = {
    left: "justify-start",
    right: "justify-end",
    center: "justify-center",
  };

  return (
    <div className={`flex ${positionClasses[position]}`}>
      <Atlas mood={mood} accessory={accessory} size={size} showBalloon={showBalloon} />
    </div>
  );
}
