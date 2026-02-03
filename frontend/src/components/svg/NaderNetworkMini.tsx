"use client";

import { useId, useState, useEffect } from "react";

interface Props {
  primaryColor?: string;
  accentColor?: string;
}

/**
 * NaderNetworkMini - Simplified network showing Nader connected to key professionals
 * Compact version for the Meet Nader section
 */
export default function NaderNetworkMini({
  primaryColor = "#06b6d4",
  accentColor = "#10b981",
}: Props) {
  const id = useId().replace(/:/g, "");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Pre-calculated positions (radius = 75) to avoid hydration mismatches
  const nodes = [
    { label: "Lawyers", icon: "\u2696\uFE0F", x: 38, y: -65 },
    { label: "Lenders", icon: "\uD83C\uDFE6", x: 75, y: 0 },
    { label: "Inspectors", icon: "\uD83D\uDD0D", x: 38, y: 65 },
    { label: "Contractors", icon: "\uD83D\uDD27", x: -75, y: 0 },
  ];

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Main network visualization */}
      <div
        className="relative flex items-center justify-center"
        style={{ width: "220px", height: "200px" }}
      >
        {/* SVG for decorative lines only */}
        <svg
          width="220"
          height="200"
          viewBox="0 0 220 200"
          fill="none"
          className="absolute inset-0 pointer-events-none"
        >
          <defs>
            <linearGradient id={`${id}-center`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={primaryColor} />
              <stop offset="100%" stopColor={accentColor} />
            </linearGradient>
          </defs>

          {/* Connection lines from center to each node */}
          {mounted && nodes.map((node, i) => {
            const endX = 110 + node.x;
            const endY = 100 + node.y;

            return (
              <g key={`line-${i}`}>
                <line
                  x1="110"
                  y1="100"
                  x2={endX}
                  y2={endY}
                  stroke={primaryColor}
                  strokeWidth="2"
                  strokeOpacity="0.4"
                  strokeDasharray="4 4"
                />
                {/* Traveling pulse */}
                <circle r="3" fill={primaryColor} opacity="0.6">
                  <animateMotion
                    dur={`${1.5 + i * 0.2}s`}
                    repeatCount="indefinite"
                    path={`M 110 100 L ${endX} ${endY}`}
                  />
                </circle>
              </g>
            );
          })}

          {/* Rotating ring around center */}
          <circle
            cx="110"
            cy="100"
            r="32"
            fill="none"
            stroke={primaryColor}
            strokeWidth="1.5"
            strokeDasharray="6 4"
            opacity="0.3"
          >
            {mounted && (
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 110 100"
                to="360 110 100"
                dur="15s"
                repeatCount="indefinite"
              />
            )}
          </circle>
        </svg>

        {/* Center node - Nader */}
        <div
          className="absolute flex items-center justify-center rounded-full text-white font-bold text-[10px] z-10"
          style={{
            width: "56px",
            height: "56px",
            background: `linear-gradient(135deg, ${primaryColor}, ${accentColor})`,
            boxShadow: `0 0 20px ${primaryColor}50`,
          }}
        >
          NADER
        </div>

        {/* Outer nodes with emojis */}
        {nodes.map((node, i) => (
          <div
            key={`node-${i}`}
            className="absolute flex flex-col items-center z-20"
            style={{
              transform: `translate(${node.x}px, ${node.y}px)`,
              opacity: mounted ? 1 : 0,
              transition: `opacity 0.4s ease-out ${i * 0.1}s`,
            }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
              style={{
                backgroundColor: "#1a1a1a",
                border: `2px solid ${primaryColor}40`,
              }}
            >
              {node.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Label below */}
      <span className="text-[9px] text-gray-400 font-medium tracking-wider uppercase">
        Your Trusted Network
      </span>
    </div>
  );
}
