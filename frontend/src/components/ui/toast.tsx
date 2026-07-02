"use client";

import * as React from "react";
import { cn } from "@/utils/cn";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";

export type ToastType = "success" | "error" | "info" | "warning";

export interface ToastMessage {
  id: string;
  type: ToastType;
  title: string;
  description?: string;
  duration?: number;
}

interface ToastContextType {
  toast: (toast: Omit<ToastMessage, "id">) => void;
  dismiss: (id: string) => void;
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastMessage[]>([]);

  const toast = React.useCallback(
    ({ type, title, description, duration = 4000 }: Omit<ToastMessage, "id">) => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { id, type, title, description, duration }]);

      if (duration > 0) {
        setTimeout(() => {
          dismiss(id);
        }, duration);
      }
    },
    []
  );

  const dismiss = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      {children}
      {/* Toast viewport */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 w-full max-w-sm pointer-events-none">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={cn(
              "p-4 rounded-app-md border bg-slate-900 shadow-2xl flex gap-3 pointer-events-auto items-start animate-slide-in text-slate-100",
              {
                "border-emerald-500/30 bg-slate-900": t.type === "success",
                "border-rose-500/30 bg-slate-900": t.type === "error",
                "border-sky-500/30 bg-slate-900": t.type === "info",
                "border-amber-500/30 bg-slate-900": t.type === "warning",
              }
            )}
          >
            {/* Icon */}
            <div className="shrink-0 mt-0.5">
              {t.type === "success" && <CheckCircle className="w-5 h-5 text-emerald-400" />}
              {t.type === "error" && <AlertCircle className="w-5 h-5 text-rose-400" />}
              {t.type === "info" && <Info className="w-5 h-5 text-sky-400" />}
              {t.type === "warning" && <AlertTriangle className="w-5 h-5 text-amber-400" />}
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col gap-0.5">
              <span className="text-sm font-semibold">{t.title}</span>
              {t.description && (
                <span className="text-xs text-slate-400 leading-relaxed">{t.description}</span>
              )}
            </div>

            {/* Dismiss Button */}
            <button
              onClick={() => dismiss(t.id)}
              className="shrink-0 p-0.5 rounded-full text-slate-500 hover:text-slate-200 hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
