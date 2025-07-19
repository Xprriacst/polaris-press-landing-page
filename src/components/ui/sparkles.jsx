import React, { useId } from "react";
import { cn } from "@/lib/utils";

export function SparklesCore(props) {
  const {
    id,
    className,
    background,
    minSize,
    maxSize,
    particleDensity,
    particleColor,
    particleSize,
  } = props;
  const gradientId = useId();
  return (
    <div className={cn("h-full w-full", className)}>
      <svg
        className="h-full w-full"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id={gradientId}>
            <stop offset="0%" stopColor={particleColor || "#3b82f6"} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <g>
          {Array.from({ length: particleDensity || 50 }).map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 400}
              cy={Math.random() * 400}
              r={Math.random() * (maxSize || 3) + (minSize || 1)}
              fill={`url(#${gradientId})`}
              className="animate-pulse"
              style={{
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 2 + 1}s`,
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

export function Sparkles({ children, className, ...props }) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute inset-0">
        <SparklesCore {...props} />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

