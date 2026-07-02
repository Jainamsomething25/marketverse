import * as React from "react";
import { cn } from "@/utils/cn";
import { Skeleton } from "./skeleton";

export interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  isLoading?: boolean;
  action?: React.ReactNode;
}

export function ChartContainer({
  className,
  title,
  description,
  isLoading = false,
  action,
  children,
  ...props
}: ChartContainerProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 w-full p-6 rounded-app-lg border border-slate-800 bg-slate-900/60 backdrop-blur-xl shadow-lg",
        className
      )}
      {...props}
    >
      {(title || description || action) && (
        <div className="flex items-center justify-between gap-4 border-b border-slate-800/40 pb-4">
          <div className="space-y-1">
            {title && <h3 className="text-sm font-semibold text-slate-50">{title}</h3>}
            {description && <p className="text-xs text-slate-400">{description}</p>}
          </div>
          {action && <div className="shrink-0">{action}</div>}
        </div>
      )}

      <div className="relative w-full h-[300px] flex items-center justify-center">
        {isLoading ? (
          <div className="absolute inset-0 flex flex-col gap-4 p-4">
            <Skeleton className="w-full h-full rounded-app-md" />
          </div>
        ) : (
          <div className="w-full h-full select-none">{children}</div>
        )}
      </div>
    </div>
  );
}
