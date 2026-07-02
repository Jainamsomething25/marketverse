"use client";

import * as React from "react";
import { cn } from "@/utils/cn";
import { X } from "lucide-react";
import { Button } from "./button";

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export function Drawer({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  className,
}: DrawerProps) {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 overflow-hidden pointer-events-none",
        isOpen && "pointer-events-auto"
      )}
    >
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-slate-950/0 transition-all duration-300 pointer-events-none",
          isOpen && "bg-slate-950/80 backdrop-blur-sm pointer-events-auto"
        )}
        onClick={onClose}
      />

      {/* Drawer Slide-in */}
      <div className="absolute inset-y-0 right-0 flex max-w-full pl-10">
        <div
          className={cn(
            "w-screen max-w-md transform translate-x-full transition-transform duration-300 ease-in-out bg-slate-900 border-l border-slate-800 flex flex-col h-full shadow-2xl",
            isOpen && "translate-x-0",
            className
          )}
        >
          {/* Header */}
          <div className="flex justify-between items-start p-6 border-b border-slate-800/40">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-slate-50">{title}</h3>
              {description && <p className="text-xs text-slate-400">{description}</p>}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8 text-slate-500 hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 overflow-y-auto text-sm text-slate-300">{children}</div>

          {/* Footer */}
          {footer && (
            <div className="p-6 border-t border-slate-800/40 bg-slate-950/20 flex gap-3">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
