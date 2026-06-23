"use client";

import Image from "next/image";
import AtlasBubble from "./AtlasBubble";
import { AtlasMood, AtlasAccessory } from "@/app/data/atlasQuotes";

type AtlasProps = {
  title?: string;
  quote?: string;
  mood?: AtlasMood;
  accessory?: AtlasAccessory;
  size?: "sm" | "md" | "lg";
  position?: "left" | "right" | "center";
  layout?: "inline" | "stacked";
  showBalloon?: boolean;
  className?: string;
  bubbleClassName?: string;
};

export default function Atlas({
  title,
  quote,
  mood = "default",
  accessory,
  size = "md",
  position = "right",
  layout,
  showBalloon = true,
  className = "",
  bubbleClassName = "",
}: AtlasProps) {
  const sizeClasses = {
    sm: "w-28 h-28",
    md: "w-40 h-40",
    lg: "w-60 h-60",
  };

  const sizePixels = {
    sm: 112,
    md: 160,
    lg: 240,
  };

  const hasText = Boolean(title || quote);
  const finalLayout = layout || (position === "center" ? "stacked" : "inline");
  const bubblePosition = position === "center" ? "right" : position;

  return (
    <div className={`relative flex w-full flex-col items-center gap-6 ${className}`}>
      {/* Floating wrapper for gentle up-down motion */}
      <div className="animate-atlas-float">
        {/* Gold Balloon */}
        {showBalloon && (
          <div className="relative mb-4 flex justify-center">
            <div className="animate-atlas-balloon-sway">
              {/* Balloon sphere */}
              <div
                className="h-10 w-8 rounded-full shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #b8860b 100%)",
                  boxShadow: "0 2px 8px rgba(184, 134, 11, 0.3), inset -2px -2px 4px rgba(0, 0, 0, 0.1)",
                }}
              />
              {/* String */}
              <div className="mx-auto h-6 w-0.5 bg-gradient-to-b from-amber-600 to-amber-400" />
            </div>
          </div>
        )}

        {/* Official Atlas Artwork */}
        <div className={`${sizeClasses[size]} relative drop-shadow-lg`}>
          <Image
            src="/atlas/atlas.png"
            alt="Atlas - Destination CharlieJo's Chief Explorer"
            width={sizePixels[size]}
            height={sizePixels[size]}
            className="h-full w-full object-contain"
            priority
          />
        </div>
      </div>

      {hasText ? (
        finalLayout === "inline" ? (
          <div className={`flex w-full flex-wrap items-center justify-center gap-6 ${position === "left" ? "flex-row-reverse" : "flex-row"}`}>
            <AtlasBubble quote={quote || ""} title={title} position={bubblePosition === "left" ? "right" : "left"} className={bubbleClassName} />
            <div className="hidden lg:block" />
          </div>
        ) : (
          <div className="flex w-full flex-col items-center gap-6">
            <AtlasBubble quote={quote || ""} title={title} position={position} className={bubbleClassName} />
          </div>
        )
      ) : null}

      <style>{`
        @keyframes atlas-float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes atlas-balloon-sway {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(1.5deg);
          }
          75% {
            transform: rotate(-1.5deg);
          }
        }

        .animate-atlas-float {
          animation: atlas-float 3s ease-in-out infinite;
        }

        .animate-atlas-balloon-sway {
          animation: atlas-balloon-sway 4s ease-in-out infinite;
          transform-origin: top center;
        }
      `}</style>
    </div>
  );
}
