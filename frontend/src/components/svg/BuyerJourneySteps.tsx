"use client";

import { useId, useState, useEffect } from "react";

interface Props {
  width?: number;
  height?: number;
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  vertical?: boolean;
}

/**
 * BuyerJourneySteps - 3-step home buying process visualization
 * Discovery -> Property Matching -> Negotiation & Closing
 */
export default function BuyerJourneySteps({
  width = 480,
  height = 180,
  primaryColor = "#06b6d4",
  secondaryColor = "#8B5CF6",
  accentColor = "#10B981",
}: Props) {
  const id = useId();
  const [mounted, setMounted] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, [mounted]);

  const steps = [
    {
      num: 1,
      title: "Discovery",
      subtitle: "Free Consultation",
      icon: "phone",
      color: primaryColor,
    },
    {
      num: 2,
      title: "Matching",
      subtitle: "Find Your Home",
      icon: "search",
      color: secondaryColor,
    },
    {
      num: 3,
      title: "Success",
      subtitle: "Keys in Hand",
      icon: "key",
      color: accentColor,
    },
  ];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 480 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Home buying journey - 3 simple steps"
    >
      <defs>
        <linearGradient id={`${id}-bg`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#2a2a2a" />
        </linearGradient>

        <linearGradient id={`${id}-line`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={primaryColor} />
          <stop offset="50%" stopColor={secondaryColor} />
          <stop offset="100%" stopColor={accentColor} />
        </linearGradient>

        <filter id={`${id}-glow`}>
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="480" height="180" fill={`url(#${id}-bg)`} rx="12" />

      {/* Connection line (base) */}
      <line
        x1="80"
        y1="70"
        x2="400"
        y2="70"
        stroke="#333"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Connection line (progress) */}
      <line
        x1="80"
        y1="70"
        x2={80 + (activeStep >= 3 ? 320 : activeStep * 160)}
        y2="70"
        stroke={`url(#${id}-line)`}
        strokeWidth="3"
        strokeLinecap="round"
        style={{ transition: "all 0.5s ease" }}
      />

      {/* Moving particle along line */}
      {mounted && activeStep < 3 && (
        <circle r="5" fill={primaryColor} opacity="0.8">
          <animateMotion
            dur="2s"
            repeatCount="1"
            path={`M ${80 + activeStep * 160} 70 L ${80 + (activeStep + 1) * 160} 70`}
          />
        </circle>
      )}

      {/* Steps */}
      {steps.map((step, i) => {
        const x = 80 + i * 160;
        const isActive = i <= activeStep || activeStep >= 3;
        const isCurrent = i === activeStep && activeStep < 3;

        return (
          <g key={step.num} transform={`translate(${x}, 70)`}>
            {/* Glow effect for active */}
            {isCurrent && (
              <circle
                cx="0"
                cy="0"
                r="35"
                fill={step.color}
                opacity="0.15"
              >
                <animate
                  attributeName="r"
                  values="30;40;30"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </circle>
            )}

            {/* Circle background */}
            <circle
              cx="0"
              cy="0"
              r="28"
              fill={isActive ? step.color : "#2a2a2a"}
              stroke={step.color}
              strokeWidth={isCurrent ? 3 : 2}
              filter={isCurrent ? `url(#${id}-glow)` : undefined}
              style={{ transition: "all 0.3s ease" }}
            />

            {/* Icon inside circle */}
            <g fill={isActive ? "#fff" : "#666"}>
              {step.icon === "phone" && (
                <g transform="translate(-10, -10)">
                  <rect x="4" y="0" width="12" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="10" cy="16" r="1.5" fill="currentColor" />
                  <line x1="7" y1="3" x2="13" y2="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </g>
              )}
              {step.icon === "search" && (
                <g transform="translate(-10, -10)">
                  <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
                  <line x1="12" y1="12" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 5 9 L 8 6 L 11 9 L 11 12 L 5 12 Z" fill="currentColor" fillOpacity="0.5" />
                </g>
              )}
              {step.icon === "key" && (
                <g transform="translate(-10, -10)">
                  <circle cx="6" cy="6" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                  <line x1="9" y1="9" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="14" y1="14" x2="14" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="16" y1="16" x2="16" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </g>
              )}
            </g>

            {/* Step number badge */}
            <circle
              cx="20"
              cy="-20"
              r="10"
              fill={isActive ? step.color : "#444"}
              style={{ transition: "all 0.3s ease" }}
            />
            <text
              x="20"
              y="-16"
              textAnchor="middle"
              fontSize="10"
              fontWeight="700"
              fill="#fff"
            >
              {step.num}
            </text>

            {/* Labels */}
            <text
              x="0"
              y="50"
              textAnchor="middle"
              fontSize="13"
              fontWeight="600"
              fill={isActive ? "#fff" : "#666"}
              style={{ transition: "all 0.3s ease" }}
            >
              {step.title}
            </text>
            <text
              x="0"
              y="65"
              textAnchor="middle"
              fontSize="10"
              fill="#888"
            >
              {step.subtitle}
            </text>
          </g>
        );
      })}

      {/* Title */}
      <text
        x="240"
        y="165"
        textAnchor="middle"
        fontSize="11"
        fill={primaryColor}
        fontWeight="500"
        opacity="0.7"
      >
        Your Path to Homeownership
      </text>
    </svg>
  );
}
