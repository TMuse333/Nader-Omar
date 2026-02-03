"use client";

import { useId, useState, useEffect } from "react";

interface Props {
  width?: number;
  height?: number;
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
}

/**
 * FallRiverLifestyle - Scenic representation of Fall River, NS lifestyle
 * Lakes, trees, kayaking, nature trails - the outdoor paradise
 */
export default function FallRiverLifestyle({
  width = 440,
  height = 260,
  primaryColor = "#06b6d4",
  secondaryColor = "#10B981",
  accentColor = "#F59E0B",
}: Props) {
  const id = useId();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 440 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Fall River lifestyle - lakes, nature, and outdoor activities"
    >
      <defs>
        {/* Sky gradient */}
        <linearGradient id={`${id}-sky`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="60%" stopColor="#2d4a6f" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>

        {/* Water gradient */}
        <linearGradient id={`${id}-water`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={primaryColor} stopOpacity="0.6" />
          <stop offset="100%" stopColor={primaryColor} stopOpacity="0.3" />
        </linearGradient>

        {/* Tree gradient */}
        <linearGradient id={`${id}-tree`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={secondaryColor} />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>

        {/* Sun glow */}
        <radialGradient id={`${id}-sun`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={accentColor} />
          <stop offset="100%" stopColor={accentColor} stopOpacity="0" />
        </radialGradient>

        <filter id={`${id}-reflection`}>
          <feGaussianBlur stdDeviation="1" />
        </filter>
      </defs>

      {/* Sky background */}
      <rect width="440" height="260" fill={`url(#${id}-sky)`} rx="12" />

      {/* Stars */}
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <circle
          key={`star-${i}`}
          cx={30 + i * 50}
          cy={15 + (i % 3) * 20}
          r="1"
          fill="#fff"
          opacity="0.6"
        />
      ))}

      {/* Moon/Sun */}
      <circle cx="380" cy="50" r="35" fill={`url(#${id}-sun)`} opacity="0.4" />
      <circle cx="380" cy="50" r="18" fill={accentColor} opacity="0.8" />

      {/* Distant mountains/hills */}
      <path
        d="M 0 140 Q 60 100 120 130 Q 180 90 240 120 Q 300 80 360 110 Q 400 90 440 120 L 440 180 L 0 180 Z"
        fill={secondaryColor}
        fillOpacity="0.15"
      />

      {/* Background trees (forest line) */}
      {[40, 80, 120, 160, 200, 240, 280, 320, 360, 400].map((x, i) => (
        <g key={`bg-tree-${i}`} transform={`translate(${x}, ${125 + Math.sin(i) * 8})`}>
          <path
            d={`M 0 0 L -${8 + i % 3 * 2} ${20 + i % 4 * 3} L ${8 + i % 3 * 2} ${20 + i % 4 * 3} Z`}
            fill={secondaryColor}
            fillOpacity={0.3 + (i % 3) * 0.1}
          />
        </g>
      ))}

      {/* Lake water */}
      <ellipse
        cx="220"
        cy="195"
        rx="200"
        ry="45"
        fill={`url(#${id}-water)`}
      />

      {/* Water ripples */}
      {mounted && [0, 1, 2].map((i) => (
        <ellipse
          key={`ripple-${i}`}
          cx={150 + i * 70}
          cy={195}
          rx="20"
          ry="5"
          fill="none"
          stroke={primaryColor}
          strokeWidth="1"
          opacity="0.4"
        >
          <animate
            attributeName="rx"
            values="10;30;10"
            dur={`${3 + i * 0.5}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.4;0;0.4"
            dur={`${3 + i * 0.5}s`}
            repeatCount="indefinite"
          />
        </ellipse>
      ))}

      {/* Kayaker on lake */}
      <g transform="translate(180, 178)">
        {/* Kayak */}
        <ellipse cx="0" cy="8" rx="25" ry="5" fill={accentColor} />
        <ellipse cx="0" cy="8" rx="22" ry="3" fill={accentColor} fillOpacity="0.7" />

        {/* Person */}
        <circle cx="0" cy="-2" r="5" fill="#F5D0C5" />
        <rect x="-4" y="2" width="8" height="8" rx="2" fill={primaryColor} />

        {/* Paddle */}
        <line
          x1="-20"
          y1="0"
          x2="20"
          y2="6"
          stroke="#8B4513"
          strokeWidth="2"
          strokeLinecap="round"
        >
          {mounted && (
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 0 3;10 0 3;0 0 3;-10 0 3;0 0 3"
              dur="2s"
              repeatCount="indefinite"
            />
          )}
        </line>
        <ellipse cx="-20" cy="0" rx="4" ry="8" fill="#D4A574" transform="rotate(-20 -20 0)" />
        <ellipse cx="20" cy="6" rx="4" ry="8" fill="#D4A574" transform="rotate(20 20 6)" />
      </g>

      {/* Foreground trees - Left side */}
      <g transform="translate(30, 130)">
        <rect x="-3" y="30" width="6" height="40" fill="#5D4037" rx="2" />
        <path d="M 0 0 L -20 35 L 20 35 Z" fill={`url(#${id}-tree)`} />
        <path d="M 0 15 L -16 40 L 16 40 Z" fill={secondaryColor} />
        <path d="M 0 28 L -12 45 L 12 45 Z" fill={secondaryColor} fillOpacity="0.8" />
      </g>

      <g transform="translate(60, 145)">
        <rect x="-2" y="20" width="4" height="25" fill="#5D4037" rx="1" />
        <path d="M 0 0 L -12 25 L 12 25 Z" fill={secondaryColor} fillOpacity="0.9" />
        <path d="M 0 10 L -9 28 L 9 28 Z" fill={secondaryColor} fillOpacity="0.7" />
      </g>

      {/* Foreground trees - Right side */}
      <g transform="translate(400, 125)">
        <rect x="-4" y="35" width="8" height="50" fill="#5D4037" rx="2" />
        <path d="M 0 0 L -25 40 L 25 40 Z" fill={`url(#${id}-tree)`} />
        <path d="M 0 18 L -20 48 L 20 48 Z" fill={secondaryColor} />
        <path d="M 0 33 L -15 55 L 15 55 Z" fill={secondaryColor} fillOpacity="0.8" />
      </g>

      <g transform="translate(365, 150)">
        <rect x="-2" y="15" width="4" height="20" fill="#5D4037" rx="1" />
        <path d="M 0 0 L -10 20 L 10 20 Z" fill={secondaryColor} fillOpacity="0.85" />
      </g>

      {/* Small dock on left */}
      <g transform="translate(70, 185)">
        <rect x="0" y="0" width="35" height="6" fill="#6D4C41" rx="1" />
        <rect x="5" y="6" width="4" height="12" fill="#5D4037" />
        <rect x="26" y="6" width="4" height="12" fill="#5D4037" />
      </g>

      {/* House on hill - right side */}
      <g transform="translate(320, 120)">
        <rect x="0" y="15" width="35" height="25" fill="#2a2a2a" stroke="#3a3a3a" strokeWidth="1" rx="2" />
        <path d="M -5 17 L 17 0 L 40 17" fill="none" stroke="#4a4a4a" strokeWidth="2" />
        <path d="M -3 17 L 17 2 L 38 17 Z" fill={primaryColor} fillOpacity="0.6" />
        <rect x="13" y="25" width="8" height="13" rx="1" fill={primaryColor} fillOpacity="0.3" />
        <rect x="4" y="20" width="6" height="6" rx="1" fill={accentColor} fillOpacity="0.4" />
        <rect x="25" y="20" width="6" height="6" rx="1" fill={accentColor} fillOpacity="0.4" />
      </g>

      {/* Location badge */}
      <g transform="translate(170, 235)">
        <rect x="0" y="0" width="100" height="20" rx="10" fill={primaryColor} fillOpacity="0.9" />
        <text x="50" y="14" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="600">
          Fall River, NS
        </text>
      </g>
    </svg>
  );
}
