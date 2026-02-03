"use client";

import { useId, useState, useEffect, useRef, useCallback } from "react";

interface Props {
  width?: number;
  height?: number;
  primaryColor?: string;
  secondaryColor?: string;
  accentColor?: string;
  showControls?: boolean;
}

/**
 * ChatToHomeMatch - Conversational AI generates personalized real estate timeline
 * Back-and-forth chat flow with neural AI aesthetics
 * "What's your situation?" → Timeline generated
 */
export default function ChatToHomeMatch({
  width = 580,
  height = 340,
  primaryColor = "#06b6d4",      // Nader's brand cyan
  secondaryColor = "#0891b2",    // Darker cyan
  accentColor = "#10b981",       // Green for success
  showControls = true,
}: Props) {
  const id = useId().replace(/:/g, "");
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState(0);
  const [isManualMode, setIsManualMode] = useState(false);
  const [manualTime, setManualTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<SVGGElement>(null);
  const isDragging = useRef(false);

  const CYCLE_DURATION = 12; // seconds

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || isManualMode || isPaused) return;
    let frame: number;
    const animate = (timestamp: number) => {
      setTime(timestamp / 1000);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [mounted, isManualMode, isPaused]);

  // Get the effective time (either from autoplay or manual control)
  const effectiveTime = isManualMode ? manualTime : time;

  // Handle slider interaction
  const handleSliderInteraction = useCallback((clientX: number, rect: DOMRect) => {
    const sliderStart = rect.left + 40;
    const sliderWidth = rect.width - 80;
    const position = Math.max(0, Math.min(1, (clientX - sliderStart) / sliderWidth));
    const newTime = position * CYCLE_DURATION;
    setManualTime(newTime);
    setIsManualMode(true);
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent<SVGGElement>) => {
    isDragging.current = true;
    const rect = e.currentTarget.closest('svg')?.getBoundingClientRect();
    if (rect) handleSliderInteraction(e.clientX, rect);
  }, [handleSliderInteraction]);

  const handleMouseMove = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    if (!isDragging.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderInteraction(e.clientX, rect);
  }, [handleSliderInteraction]);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent<SVGGElement>) => {
    isDragging.current = true;
    const rect = e.currentTarget.closest('svg')?.getBoundingClientRect();
    if (rect) handleSliderInteraction(e.touches[0].clientX, rect);
  }, [handleSliderInteraction]);

  const handleTouchMove = useCallback((e: React.TouchEvent<SVGSVGElement>) => {
    if (!isDragging.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderInteraction(e.touches[0].clientX, rect);
  }, [handleSliderInteraction]);

  const togglePause = useCallback(() => {
    if (isManualMode) {
      setIsManualMode(false);
      setIsPaused(false);
    } else {
      setIsPaused(!isPaused);
    }
  }, [isManualMode, isPaused]);

  const resetToAutoplay = useCallback(() => {
    setIsManualMode(false);
    setIsPaused(false);
  }, []);

  // Conversation phases (loops every ~12 seconds)
  const cycleTime = effectiveTime % CYCLE_DURATION;
  const phase = cycleTime < 2 ? 0 : cycleTime < 4 ? 1 : cycleTime < 6 ? 2 : cycleTime < 8 ? 3 : cycleTime < 10 ? 4 : 5;

  // Calculate slider position (0 to 1)
  const sliderPosition = cycleTime / CYCLE_DURATION;

  // Conversation messages - customized for Nader
  const conversation = [
    { type: "bot", text: "What are your real estate goals?" },
    { type: "user", text: "Looking to buy my first home" },
    { type: "bot", text: "Timeline preference?" },
    { type: "user", text: "Within 6 months" },
    { type: "bot", text: "Creating your personalized plan..." },
  ];

  const visibleMessages = Math.min(phase + 1, conversation.length);
  const isGenerating = phase >= 4;
  const showTimeline = phase >= 5;

  // Timeline steps
  const timelineSteps = [
    { label: "Pre-Approval", icon: "✓", weeks: "Week 1-2" },
    { label: "Home Search", icon: "🔍", weeks: "Week 3-8" },
    { label: "Make Offer", icon: "📝", weeks: "Week 9-12" },
    { label: "Close & Keys", icon: "🏠", weeks: "Week 16-20" },
  ];

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 580 ${showControls ? 340 : 300}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Chat with Nader to get your personalized real estate plan"
      className="w-full max-w-[580px] h-auto select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      <defs>
        {/* Dark gradient background */}
        <linearGradient id={`${id}-bg`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0f0f0f" />
        </linearGradient>

        {/* Glow effect */}
        <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id={`${id}-glow-strong`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Flow gradient */}
        <linearGradient id={`${id}-flow`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={primaryColor} stopOpacity="0" />
          <stop offset="50%" stopColor={primaryColor} stopOpacity="0.8" />
          <stop offset="100%" stopColor={secondaryColor} stopOpacity="0" />
        </linearGradient>

        {/* Timeline gradient */}
        <linearGradient id={`${id}-timeline`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={primaryColor} />
          <stop offset="50%" stopColor={secondaryColor} />
          <stop offset="100%" stopColor={accentColor} />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="580" height="300" fill={`url(#${id}-bg)`} rx="12" />

      {/* Subtle grid pattern */}
      <g opacity="0.03">
        {[...Array(20)].map((_, i) => (
          <line key={`v${i}`} x1={i * 30} y1="0" x2={i * 30} y2="300" stroke={primaryColor} strokeWidth="1" />
        ))}
        {[...Array(10)].map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 30} x2="580" y2={i * 30} stroke={primaryColor} strokeWidth="1" />
        ))}
      </g>

      {/* === LEFT SIDE: CHAT CONVERSATION === */}
      <g transform="translate(20, 20)">
        {/* Chat header */}
        <g>
          <rect x="0" y="0" width="200" height="32" rx="6" fill="white" fillOpacity="0.1" />
          <circle cx="18" cy="16" r="10" fill="white" fillOpacity="0.3" />
          {/* Nader icon */}
          <g transform="translate(18, 16)">
            <circle cx="0" cy="-3" r="2" fill="white" />
            <circle cx="-4" cy="2" r="1.5" fill="white" opacity="0.7" />
            <circle cx="4" cy="2" r="1.5" fill="white" opacity="0.7" />
            <path d="M -4 2 L 0 -3 L 4 2" stroke={primaryColor} strokeWidth="1" fill="none" opacity="0.5" />
          </g>
          <text x="36" y="13" fontSize="9" fontWeight="600" fill="white">Nader Omar</text>
          <text x="36" y="24" fontSize="7" fill="white" opacity="0.6">RE/MAX Nova - Ready to help</text>

          {/* Pulsing indicator */}
          <circle cx="186" cy="16" r="4" fill={accentColor}>
            {mounted && (
              <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
            )}
          </circle>
        </g>

        {/* Chat messages */}
        <g transform="translate(0, 45)">
          {conversation.slice(0, visibleMessages).map((msg, i) => {
            const yOffset = i * 38;
            const isBot = msg.type === "bot";
            const isTyping = i === visibleMessages - 1 && phase < 5;
            const isNewest = i === visibleMessages - 1;
            const phaseProgress = cycleTime % 2;
            const fadeOpacity = isNewest ? Math.min(1, phaseProgress * 2) : 1;

            return (
              <g
                key={i}
                transform={`translate(0, ${yOffset})`}
                style={{
                  opacity: fadeOpacity,
                  transition: "opacity 0.3s ease-out"
                }}
              >
                {isBot ? (
                  <g>
                    <rect
                      x="0"
                      y="0"
                      width={msg.text.length * 5.5 + 20}
                      height="26"
                      rx="12"
                      fill="#2a2a2a"
                      stroke={primaryColor}
                      strokeWidth="1"
                      strokeOpacity="0.3"
                    />
                    <text x="10" y="17" fontSize="9" fill="white" opacity={isTyping ? 0.6 : 0.9}>
                      {isTyping && i === 4 ? "Analyzing..." : msg.text}
                    </text>
                    {isTyping && i === 4 && mounted && (
                      <g transform="translate(75, 13)">
                        {[0, 1, 2].map((dot) => (
                          <circle key={dot} cx={dot * 6} cy="0" r="2" fill="white">
                            <animate
                              attributeName="opacity"
                              values="0.3;1;0.3"
                              dur="1s"
                              begin={`${dot * 0.2}s`}
                              repeatCount="indefinite"
                            />
                          </circle>
                        ))}
                      </g>
                    )}
                  </g>
                ) : (
                  <g>
                    <rect
                      x={200 - msg.text.length * 5.5 - 20}
                      y="0"
                      width={msg.text.length * 5.5 + 20}
                      height="26"
                      rx="12"
                      fill="white"
                      fillOpacity="0.2"
                      stroke={primaryColor}
                      strokeWidth="1"
                      strokeOpacity="0.5"
                    />
                    <text
                      x={200 - 10}
                      y="17"
                      fontSize="9"
                      fill="white"
                      textAnchor="end"
                    >
                      {msg.text}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </g>
      </g>

      {/* === CENTER: DATA FLOW / PROCESSING === */}
      <g transform="translate(235, 80)">
        {/* Flow path */}
        <path
          d="M 0 70 Q 50 40, 100 70"
          fill="none"
          stroke={isGenerating ? `url(#${id}-flow)` : "#3a3a3a"}
          strokeWidth="2"
          strokeDasharray={isGenerating ? "0" : "8 4"}
          opacity={isGenerating ? 0.8 : 0.4}
        />

        {/* Processing node */}
        <g transform="translate(50, 55)">
          {/* Outer ring */}
          <circle
            cx="0"
            cy="0"
            r="30"
            fill="none"
            stroke={isGenerating ? primaryColor : "#444"}
            strokeWidth="1.5"
            strokeDasharray="8 4"
            opacity={isGenerating ? 0.6 : 0.3}
          >
            {mounted && (
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 0 0"
                to="360 0 0"
                dur={isGenerating ? "3s" : "8s"}
                repeatCount="indefinite"
              />
            )}
          </circle>

          {/* Inner circle */}
          <circle
            cx="0"
            cy="0"
            r="20"
            fill={isGenerating ? primaryColor : "#2a2a2a"}
            fillOpacity={isGenerating ? 0.2 : 0.5}
            stroke={isGenerating ? primaryColor : "#555"}
            strokeWidth="1"
          >
            {mounted && (
              <animate
                attributeName="r"
                values={isGenerating ? "18;22;18" : "19;21;19"}
                dur={isGenerating ? "1.5s" : "3s"}
                repeatCount="indefinite"
              />
            )}
          </circle>

          {/* Center icon */}
          <text x="0" y="5" textAnchor="middle" fontSize="16">
            {showTimeline ? "✨" : isGenerating ? "⚡" : "🔮"}
          </text>

          {/* Orbiting particles */}
          {mounted && !showTimeline && [0, 1, 2].map((p) => {
            const speed = isGenerating ? 120 : 40;
            const radius = isGenerating ? 38 : 42;
            const angle = ((effectiveTime * speed) + p * 120) * Math.PI / 180;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            return (
              <circle
                key={p}
                cx={x}
                cy={y}
                r={isGenerating ? 3 : 2}
                fill="white"
                opacity={isGenerating ? 0.8 : 0.3}
                filter={isGenerating ? `url(#${id}-glow)` : "none"}
              />
            );
          })}
        </g>

        {/* Status text */}
        <text
          x="50"
          y="110"
          textAnchor="middle"
          fontSize="8"
          fontWeight="500"
          fill={showTimeline ? accentColor : isGenerating ? primaryColor : "#888"}
        >
          {showTimeline ? "Plan Ready" : isGenerating ? "Building Your Plan..." : "Listening..."}
        </text>
      </g>

      {/* === RIGHT SIDE: GENERATED TIMELINE === */}
      <g transform="translate(350, 25)">
        <rect
          x="0"
          y="0"
          width="210"
          height="250"
          rx="10"
          fill={showTimeline ? "#1a1a1a" : "#0f0f0f"}
          stroke={showTimeline ? primaryColor : "#2a2a2a"}
          strokeWidth={showTimeline ? 1.5 : 1}
          strokeOpacity={showTimeline ? 0.5 : 0.3}
          filter={showTimeline ? `url(#${id}-glow)` : "none"}
        />

        {showTimeline ? (
          <>
            <text x="105" y="25" textAnchor="middle" fontSize="10" fontWeight="600" fill={primaryColor}>
              YOUR JOURNEY
            </text>
            <text x="105" y="38" textAnchor="middle" fontSize="7" fill="#999">
              First-Time Buyer - 6 Month Plan
            </text>

            <line x1="30" y1="60" x2="30" y2="230" stroke={`url(#${id}-timeline)`} strokeWidth="2" strokeLinecap="round" />

            {timelineSteps.map((step, i) => {
              const y = 75 + i * 45;
              const isActive = effectiveTime % 4 > i;

              return (
                <g key={i}>
                  <circle
                    cx="30"
                    cy={y}
                    r={isActive ? 10 : 8}
                    fill={isActive ? primaryColor : "#2a2a2a"}
                    stroke={isActive ? primaryColor : "#444"}
                    strokeWidth="2"
                    filter={isActive ? `url(#${id}-glow)` : "none"}
                  />
                  <text x="30" y={y + 4} textAnchor="middle" fontSize="10">
                    {step.icon}
                  </text>
                  <text x="50" y={y - 5} fontSize="9" fontWeight="600" fill="white">
                    {step.label}
                  </text>
                  <text x="50" y={y + 8} fontSize="7" fill="#888">
                    {step.weeks}
                  </text>
                  <g transform={`translate(50, ${y + 15})`}>
                    <rect x="0" y="0" width="130" height="4" rx="2" fill="#2a2a2a" />
                    <rect
                      x="0"
                      y="0"
                      width={isActive ? 130 : 0}
                      height="4"
                      rx="2"
                      fill={`url(#${id}-timeline)`}
                      style={{ transition: "width 0.5s ease-out" }}
                    />
                  </g>
                </g>
              );
            })}
          </>
        ) : (
          <>
            <text x="105" y="25" textAnchor="middle" fontSize="10" fontWeight="600" fill="#444">
              {isGenerating ? "GENERATING..." : "YOUR JOURNEY"}
            </text>
            <text x="105" y="38" textAnchor="middle" fontSize="7" fill="#333">
              {isGenerating ? "Personalizing your path" : "Waiting for your goals..."}
            </text>

            <line x1="30" y1="60" x2="30" y2="230" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" />

            {[0, 1, 2, 3].map((i) => {
              const y = 75 + i * 45;
              const pulseOffset = i * 0.5;
              return (
                <g key={i}>
                  <circle cx="30" cy={y} r="8" fill="#1a1a1a" stroke="#333" strokeWidth="1">
                    {mounted && (
                      <animate
                        attributeName="opacity"
                        values={isGenerating ? "0.3;0.8;0.3" : "0.2;0.4;0.2"}
                        dur={isGenerating ? "1.5s" : "3s"}
                        begin={`${pulseOffset}s`}
                        repeatCount="indefinite"
                      />
                    )}
                  </circle>
                  <text x="30" y={y + 4} textAnchor="middle" fontSize="10" fill="#444">
                    {isGenerating ? "•" : "?"}
                  </text>
                  <rect x="50" y={y - 8} width={60 + (i % 2) * 30} height="8" rx="4" fill="#1a1a1a" />
                  <rect x="50" y={y + 3} width={40 + (i % 3) * 15} height="6" rx="3" fill="#151515" opacity="0.5" />
                </g>
              );
            })}

            <g opacity={isGenerating ? 0 : 0.4}>
              <text x="105" y="145" textAnchor="middle" fontSize="20" fill="#333">
                🔒
              </text>
              <text x="105" y="170" textAnchor="middle" fontSize="8" fill="#444">
                Share your goals to unlock
              </text>
              <text x="105" y="182" textAnchor="middle" fontSize="8" fill="#444">
                your personalized plan
              </text>
            </g>
          </>
        )}
      </g>

      {/* Bottom tagline */}
      <text x="290" y="288" textAnchor="middle" fontSize="9" fill="white" opacity="0.6">
        Share your goals → Get your personalized roadmap
      </text>

      {/* Animation Controls */}
      {showControls && mounted && (
        <g transform="translate(0, 300)">
          <rect x="0" y="0" width="580" height="40" fill="#0a0a0a" />
          <line x1="0" y1="0" x2="580" y2="0" stroke="#2a2a2a" strokeWidth="1" />

          {/* Play/Pause button */}
          <g transform="translate(20, 20)" onClick={togglePause} style={{ cursor: "pointer" }}>
            <circle cx="0" cy="0" r="12" fill="#2a2a2a" stroke="#444" strokeWidth="1" />
            {isPaused || isManualMode ? (
              <polygon points="-4,-6 -4,6 6,0" fill="white" />
            ) : (
              <g fill="white">
                <rect x="-4" y="-5" width="3" height="10" rx="1" />
                <rect x="1" y="-5" width="3" height="10" rx="1" />
              </g>
            )}
          </g>

          {/* Timeline slider */}
          <g
            ref={sliderRef}
            transform="translate(50, 20)"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            style={{ cursor: "pointer" }}
          >
            <rect x="0" y="-3" width="460" height="6" rx="3" fill="#2a2a2a" />
            <rect x="0" y="-3" width={460 * sliderPosition} height="6" rx="3" fill={`url(#${id}-timeline)`} />
            {[0, 2, 4, 6, 8, 10].map((phaseTime, i) => {
              const markerX = (phaseTime / CYCLE_DURATION) * 460;
              return <line key={i} x1={markerX} y1="-8" x2={markerX} y2="8" stroke="#444" strokeWidth="1" />;
            })}
            <circle
              cx={460 * sliderPosition}
              cy="0"
              r="8"
              fill="white"
              stroke={primaryColor}
              strokeWidth="2"
              style={{ transition: isManualMode ? "none" : "cx 0.1s ease-out" }}
            />
            <rect x="-10" y="-15" width="480" height="30" fill="transparent" />
          </g>

          {/* Reset button */}
          {isManualMode && (
            <g transform="translate(540, 20)" onClick={resetToAutoplay} style={{ cursor: "pointer" }}>
              <circle cx="0" cy="0" r="12" fill="#2a2a2a" stroke="#444" strokeWidth="1" />
              <path
                d="M -4 -2 A 5 5 0 1 1 -4 2 M -4 2 L -6 0 M -4 2 L -2 0"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </g>
          )}

          {/* Status indicator */}
          <text x="290" y="35" textAnchor="middle" fontSize="8" fill="#666">
            {isManualMode ? "Manual - Drag to explore" : isPaused ? "Paused" : "Playing"}
          </text>
        </g>
      )}
    </svg>
  );
}
