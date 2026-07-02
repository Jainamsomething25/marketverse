"use client";

import * as React from "react";
import { cn } from "@/utils/cn";
import { ChevronDown } from "lucide-react";

export interface AccordionItemProps {
  value: string;
  trigger: string;
  children: React.ReactNode;
  className?: string;
}

export function Accordion({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("space-y-2 w-full", className)}>{children}</div>;
}

export function AccordionItem({ value, trigger, children, className }: AccordionItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      className={cn(
        "border border-slate-800 rounded-app-md bg-slate-900/30 overflow-hidden",
        className
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-4 text-sm font-semibold text-slate-200 hover:bg-slate-800/40 transition-colors duration-200 text-left cursor-pointer"
      >
        <span>{trigger}</span>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-slate-500 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div className="p-4 border-t border-slate-800/60 text-xs text-slate-400 leading-relaxed bg-slate-950/20 animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}
