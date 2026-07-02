import * as React from "react";
import { cn } from "@/utils/cn";
import { Info } from "lucide-react";
import { Button } from "./button";

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({
  className,
  title,
  description,
  icon = <Info className="w-8 h-8 text-slate-500" />,
  actionLabel,
  onAction,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center p-8 rounded-app-lg border border-dashed border-slate-800 bg-slate-900/10 min-h-[220px]",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 mb-4 shrink-0">
        {icon}
      </div>
      <h3 className="text-sm font-semibold text-slate-200 mb-1">{title}</h3>
      <p className="text-xs text-slate-400 max-w-sm leading-relaxed mb-5">{description}</p>
      {actionLabel && onAction && (
        <Button variant="outline" size="sm" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
