import React from "react";

type SafetyMeterProps = {
  safePercent: number;
  harmfulPercent: number;
  safetyScore: number;
};

const SafetyMeter: React.FC<SafetyMeterProps> = ({
  safePercent,
  harmfulPercent,
  safetyScore,
}) => {
  const radius = 45;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;

  const clampedSafe = Math.min(Math.max(safePercent, 0), 100);
  const clampedHarmful = 100 - clampedSafe;

  const safeStrokeDash = (clampedSafe / 100) * circumference;
  const harmfulStrokeDash = (clampedHarmful / 100) * circumference;

  const getScoreStatus = (score: number) => {
    if (score >= 80) return { color: "text-green-500", message: "Very Safe" };
    if (score >= 50)
      return { color: "text-yellow-500", message: "Moderately Safe" };
    return { color: "text-red-500", message: "Potentially Unsafe" };
  };

  const scoreStatus = getScoreStatus(safetyScore);

  return (
    <div className="relative flex h-40 w-40 items-center justify-center">
      <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 100 100">
        {/* Background Circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Safe Portion (Green) */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#10B981"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={`${safeStrokeDash} ${circumference}`}
          strokeDashoffset={0}
          strokeLinecap="round"
        />

        {/* Harmful Portion (Red) */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="#B91C1C"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={`${harmfulStrokeDash} ${circumference}`}
          strokeDashoffset={safeStrokeDash}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`text-4xl font-bold ${scoreStatus.color}`}>
          {Math.round(safetyScore)}
        </span>
        <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">
          Safety Score
        </span>
      </div>

      <div className="absolute -bottom-7 flex w-full justify-around gap-10 text-center">
        <div className="text-sm font-semibold text-green-700  ">
          <span className="text-green-700 dark:text-green-400">
            {clampedSafe.toFixed(0)}%
          </span>
          <span className="text-gray-500 dark:text-gray-400 ml-1">Safe</span>
        </div>
        <div className="text-sm font-semibold text-[#B91C1C]">
          <span className="text-red-600 dark:text-red-400">
            {clampedHarmful.toFixed(0)}%
          </span>
          <span className="text-gray-500 dark:text-gray-400 ml-1">Harmful</span>
        </div>
      </div>
    </div>
  );
};

export default SafetyMeter;
