"use client";

import * as React from "react";
import { cn } from "@/utils/cn";
import { X, TrendingUp, BarChart3, FlaskConical, GraduationCap } from "lucide-react";
import { useUIStore } from "@/store/useUIStore";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const { sidebarOpen, setSidebarOpen } = useUIStore();
  const pathname = usePathname();

  const navItems = [
    { label: "Dashboard", href: "/dashboard", icon: <BarChart3 className="w-4 h-4" /> },
    { label: "Market Explorer", href: "/market", icon: <TrendingUp className="w-4 h-4" /> },
    { label: "Future Lab", href: "/future-lab", icon: <FlaskConical className="w-4 h-4" /> },
    { label: "AI Mentor", href: "/mentor", icon: <GraduationCap className="w-4 h-4" /> },
  ];

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm lg:hidden cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <aside
        className={cn(
          "fixed top-0 bottom-0 left-0 z-40 w-64 border-r border-slate-800 bg-slate-950 flex flex-col justify-between transition-transform duration-300 lg:translate-x-0 lg:static shrink-0 text-slate-100",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div>
          {/* Logo Branding */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-slate-800">
            <Link href="/dashboard" className="flex items-center gap-2">
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-emerald-400 bg-clip-text text-transparent tracking-tight">
                MarketVerse
              </span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-slate-500 hover:text-slate-200"
              aria-label="Close Sidebar"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-app-md transition-colors duration-200",
                    isActive
                      ? "bg-indigo-500/10 text-indigo-400 font-semibold border border-indigo-500/10"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/60"
                  )}
                >
                  <span
                    className={cn("shrink-0", isActive ? "text-indigo-400" : "text-slate-500")}
                  >
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar FIS Meter */}
        <div className="p-4 border-t border-slate-800/60 bg-slate-900/10 m-4 rounded-app-lg flex flex-col gap-2">
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-400 font-medium">Intelligence Score</span>
            <span className="font-semibold text-emerald-400">720 / 1000</span>
          </div>
          <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 w-[72%]" />
          </div>
        </div>
      </aside>
    </>
  );
}
