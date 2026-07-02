import * as React from "react";
import { cn } from "@/utils/cn";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "outline";
}

export function Badge({ className, variant = "primary", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide border transition-colors duration-200",
        {
          "bg-indigo-500/10 text-indigo-400 border-indigo-500/20": variant === "primary",
          "bg-slate-850 text-slate-300 border-slate-700/60": variant === "secondary",
          "bg-emerald-500/10 text-emerald-400 border-emerald-500/20": variant === "success",
          "bg-rose-500/10 text-rose-400 border-rose-500/20": variant === "danger",
          "bg-amber-500/10 text-amber-400 border-amber-500/20": variant === "warning",
          "bg-sky-500/10 text-sky-400 border-sky-500/20": variant === "info",
          "bg-transparent text-slate-450 border-slate-800": variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
}
