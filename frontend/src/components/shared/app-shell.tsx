import * as React from "react";
import { Sidebar } from "./sidebar";
import { Navbar } from "./navbar";
import { BreadcrumbItem } from "./breadcrumb";
import { cn } from "@/utils/cn";

export interface AppShellProps {
  children: React.ReactNode;
  breadcrumbs: BreadcrumbItem[];
  className?: string;
}

export function AppShell({ children, breadcrumbs, className }: AppShellProps) {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-950 text-slate-100 font-sans">
      {/* 1. Sidebar Panel */}
      <Sidebar />

      {/* 2. Main Viewport Panel */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Navbar */}
        <Navbar breadcrumbs={breadcrumbs} />

        {/* Content Container */}
        <main className={cn("flex-1 overflow-y-auto p-6 md:p-8 relative z-10", className)}>
          {children}
        </main>

        {/* Footer Status Panel */}
        <footer className="h-10 border-t border-slate-800 px-6 bg-slate-950 flex items-center justify-between text-[10px] text-slate-500 shrink-0 select-none">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Simulation Service Connected</span>
          </div>
          <span>MarketVerse © 2026. Innovation Laboratory.</span>
        </footer>
      </div>
    </div>
  );
}
