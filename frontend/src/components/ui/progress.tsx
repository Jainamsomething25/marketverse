import * as React from "react";
import { cn } from "@/utils/cn";
import { Loader2 } from "lucide-react";

export function LoadingSpinner({
  className,
  size = "md",
  ...props
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <Loader2
      className={cn(
        "animate-spin text-brand-primary shrink-0",
        {
          "w-4 h-4": size === "sm",
          "w-6 h-6": size === "md",
          "w-8 h-8": size === "lg",
        },
        className
      )}
      {...props}
    />
  );
}

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number; // 0 to 100
  variant?: "primary" | "secondary" | "success" | "danger" | "warning";
}

export function Progress({ className, value, variant = "primary", ...props }: ProgressProps) {
  const percent = Math.min(Math.max(value, 0), 100);

  return (
    <div
      className={cn(
        "w-full h-2 rounded-full bg-slate-950 overflow-hidden border border-slate-800/40",
        className
      )}
      {...props}
    >
      <div
        className={cn("h-full rounded-full transition-all duration-500 ease-out", {
          "bg-brand-primary": variant === "primary",
          "bg-slate-500": variant === "secondary",
          "bg-emerald-500": variant === "success",
          "bg-brand-danger": variant === "danger",
          "bg-brand-warning": variant === "warning",
        })}
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
