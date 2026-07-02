"use client";

import * as React from "react";
import { Menu, Bell, Sun, Moon, LogOut, User, Settings, Shield } from "lucide-react";
import { useUIStore } from "@/store/useUIStore";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Breadcrumb, BreadcrumbItem } from "./breadcrumb";
import { useToast } from "@/components/ui/toast";

export interface NavbarProps {
  breadcrumbs: BreadcrumbItem[];
}

export function Navbar({ breadcrumbs }: NavbarProps) {
  const { toggleSidebar, theme, setTheme } = useUIStore();
  const { toast } = useToast();
  const [showProfileMenu, setShowProfileMenu] = React.useState(false);
  const [showNotifications, setShowNotifications] = React.useState(false);

  const notificationsRef = React.useRef<HTMLDivElement>(null);
  const profileRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
    toast({
      type: "info",
      title: "Notifications Opened",
      description: "Demo Mode: No new notifications at this time.",
    });
  };

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between w-full h-16 px-6 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md text-slate-100">
      {/* Left side: Mobile Toggle & Breadcrumbs */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="lg:hidden text-slate-400 hover:text-slate-200"
          aria-label="Toggle Sidebar"
        >
          <Menu className="w-5 h-5" />
        </Button>
        <Breadcrumb items={breadcrumbs} />
      </div>

      {/* Right side: Utilities, Alerts, Theme, Profile */}
      <div className="flex items-center gap-3">
        {/* Theme Toggle (Simple switcher showing current preference) */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            const nextTheme = theme === "dark" ? "light" : "dark";
            setTheme(nextTheme);
            toast({
              type: "success",
              title: "Theme Adjusted",
              description: `Interface switched to ${nextTheme} mode (Visual Demo Only).`,
            });
          }}
          className="text-slate-400 hover:text-slate-200"
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </Button>

        {/* Notifications Bell */}
        <div ref={notificationsRef} className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleNotificationClick}
            className="text-slate-400 hover:text-slate-200 relative"
            aria-label="Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-indigo-500" />
          </Button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 z-50 w-80 overflow-hidden bg-slate-900 border border-slate-800 rounded-app-md shadow-2xl animate-fade-in">
              <div className="p-4 border-b border-slate-800/60 font-semibold text-xs text-slate-300 flex justify-between items-center">
                <span>Recent System Alerts</span>
                <span className="text-[10px] text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded">
                  2 New
                </span>
              </div>
              <ul className="divide-y divide-slate-800/40 text-xs">
                <li className="p-4 hover:bg-slate-950/40 flex flex-col gap-1">
                  <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-indigo-400" /> Environment Configured
                  </span>
                  <span className="text-slate-400 leading-normal">
                    Development packages and Supabase connections verified.
                  </span>
                  <span className="text-[10px] text-slate-500 mt-1">Today, 2:45 PM</span>
                </li>
                <li className="p-4 hover:bg-slate-950/40 flex flex-col gap-1">
                  <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                    <Settings className="w-3.5 h-3.5 text-emerald-450" /> Shell Layout Active
                  </span>
                  <span className="text-slate-400 leading-normal">
                    Milestone 1B presentation shell loaded successfully.
                  </span>
                  <span className="text-[10px] text-slate-500 mt-1">Yesterday, 4:12 PM</span>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Vertical Divider */}
        <div className="w-px h-5 bg-slate-800 shrink-0" />

        {/* User Profile */}
        <div ref={profileRef} className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-2 p-1 rounded-full hover:bg-slate-900 focus:outline-none transition-colors duration-200 cursor-pointer"
            aria-label="User Menu"
          >
            <Avatar fallback="MV" size="sm" />
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 z-50 w-56 overflow-hidden bg-slate-900 border border-slate-800 rounded-app-md shadow-2xl animate-fade-in">
              {/* Profile card summary */}
              <div className="p-4 border-b border-slate-800/60 flex items-center gap-3">
                <Avatar fallback="MV" size="sm" />
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-xs font-semibold text-slate-100 truncate">
                    Lead Innovator
                  </span>
                  <span className="text-[10px] text-slate-400 truncate">
                    cto@marketverse.com
                  </span>
                </div>
              </div>

              {/* Action Links */}
              <ul className="py-1 text-xs">
                <li>
                  <button className="flex items-center gap-2.5 w-full px-4 py-2 text-left text-slate-350 hover:bg-slate-800 hover:text-slate-100 transition-colors duration-150 cursor-pointer">
                    <User className="w-4 h-4 text-slate-500" />
                    My Account
                  </button>
                </li>
                <li>
                  <button className="flex items-center gap-2.5 w-full px-4 py-2 text-left text-slate-350 hover:bg-slate-800 hover:text-slate-100 transition-colors duration-150 cursor-pointer">
                    <Settings className="w-4 h-4 text-slate-500" />
                    Laboratory Presets
                  </button>
                </li>
                <div className="h-px bg-slate-800/60 my-1" />
                <li>
                  <button
                    onClick={() => {
                      toast({
                        type: "warning",
                        title: "Sign Out",
                        description: "Demo session cleared (Sandbox Environment).",
                      });
                      setShowProfileMenu(false);
                    }}
                    className="flex items-center gap-2.5 w-full px-4 py-2 text-left text-rose-400 hover:bg-rose-500/10 transition-colors duration-150 cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
