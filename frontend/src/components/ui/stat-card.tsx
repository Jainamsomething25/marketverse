import * as React from "react";
import { cn } from "@/utils/cn";
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";
import { Card, CardContent } from "./card";

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string | number;
  change?: number; // e.g. +4.5 or -2.3
  changeLabel?: string;
  icon?: React.ReactNode;
  isLoading?: boolean;
}

export function StatCard({
  className,
  title,
  value,
  change,
  changeLabel,
  icon,
  isLoading = false,
  ...props
}: StatCardProps) {
  const isPositive = change !== undefined && change > 0;
  const isNegative = change !== undefined && change < 0;

  return (
    <Card className={cn("overflow-hidden", className)} {...props}>
      <CardContent className="p-6">
        {isLoading ? (
          <div className="space-y-3 animate-pulse">
            <div className="h-4 bg-slate-800 rounded w-1/3" />
            <div className="h-8 bg-slate-800 rounded w-2/3" />
            <div className="h-3 bg-slate-800 rounded w-1/2" />
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {title}
              </span>
              {icon && <div className="text-slate-400 shrink-0">{icon}</div>}
            </div>

            <div className="flex items-baseline justify-between mt-1">
              <span className="text-2xl font-bold text-slate-50 tracking-tight">
                {value}
              </span>
            </div>

            {change !== undefined && (
              <div className="flex items-center gap-1.5 mt-1 text-xs">
                <span
                  className={cn(
                    "inline-flex items-center px-1.5 py-0.5 rounded font-medium",
                    {
                      "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20": isPositive,
                      "bg-rose-500/10 text-rose-400 border border-rose-500/20": isNegative,
                      "bg-slate-800 text-slate-400": !isPositive && !isNegative,
                    }
                  )}
                >
                  {isPositive && <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" />}
                  {isNegative && <ArrowDownRight className="w-3.5 h-3.5 mr-0.5" />}
                  {!isPositive && !isNegative && <Minus className="w-3.5 h-3.5 mr-0.5" />}
                  {change > 0 ? `+${change.toFixed(2)}%` : `${change.toFixed(2)}%`}
                </span>
                {changeLabel && <span className="text-slate-400">{changeLabel}</span>}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
