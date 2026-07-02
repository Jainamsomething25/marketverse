import * as React from "react";
import { cn } from "@/utils/cn";
import { ArrowUp, ArrowDown, Minus } from "lucide-react";

export type StatusType = "success" | "danger" | "warning" | "info" | "neutral";

export function StatusIndicator({
  status = "neutral",
  label,
  className,
}: {
  status?: StatusType;
  label?: string;
  className?: string;
}) {
  return (
    <span
      className={cn("inline-flex items-center gap-1.5 text-xs font-medium text-slate-300", className)}
    >
      <span
        className={cn("w-2 h-2 rounded-full", {
          "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]": status === "success",
          "bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)]": status === "danger",
          "bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]": status === "warning",
          "bg-sky-500 shadow-[0_0_8px_rgba(14,165,233,0.5)]": status === "info",
          "bg-slate-500": status === "neutral",
        })}
      />
      {label && <span>{label}</span>}
    </span>
  );
}

export function GainLossIndicator({
  value,
  percentage,
  className,
}: {
  value?: number;
  percentage: number;
  className?: string;
}) {
  const isPositive = percentage > 0;
  const isNegative = percentage < 0;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 text-sm font-semibold",
        {
          "text-emerald-400": isPositive,
          "text-rose-400": isNegative,
          "text-slate-400": !isPositive && !isNegative,
        },
        className
      )}
    >
      {isPositive && <ArrowUp className="w-3.5 h-3.5" />}
      {isNegative && <ArrowDown className="w-3.5 h-3.5" />}
      {!isPositive && !isNegative && <Minus className="w-3.5 h-3.5" />}

      {value !== undefined && (
        <span className="mr-0.5">
          {value >= 0 ? `+$${value.toLocaleString()}` : `-$${Math.abs(value).toLocaleString()}`}
        </span>
      )}

      <span>{percentage > 0 ? `+${percentage.toFixed(2)}%` : `${percentage.toFixed(2)}%`}</span>
    </span>
  );
}
