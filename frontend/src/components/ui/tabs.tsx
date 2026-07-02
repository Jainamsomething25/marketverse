"use client";

import * as React from "react";
import { cn } from "@/utils/cn";

interface TabsContextType {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const TabsContext = React.createContext<TabsContextType | undefined>(undefined);

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}

export function Tabs({
  defaultValue,
  value,
  onValueChange,
  children,
  className,
  ...props
}: TabsProps) {
  const [localTab, setLocalTab] = React.useState(defaultValue);
  const activeTab = value !== undefined ? value : localTab;

  const setActiveTab = React.useCallback(
    (newValue: string) => {
      if (value === undefined) {
        setLocalTab(newValue);
      }
      if (onValueChange) {
        onValueChange(newValue);
      }
    },
    [value, onValueChange]
  );

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn("w-full", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function TabsList({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center p-1 rounded-app-md bg-slate-950 border border-slate-800/80 text-slate-400",
        className
      )}
      {...props}
    />
  );
}

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

export function TabsTrigger({ value, className, children, ...props }: TabsTriggerProps) {
  const context = React.useContext(TabsContext);
  if (!context) throw new Error("TabsTrigger must be used within Tabs component");

  const isActive = context.activeTab === value;

  return (
    <button
      type="button"
      onClick={() => context.setActiveTab(value)}
      className={cn(
        "inline-flex items-center justify-center px-3 py-1.5 text-xs font-semibold rounded-app-sm transition-all duration-200 cursor-pointer",
        isActive
          ? "bg-slate-800 text-slate-100 shadow"
          : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/40",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export function TabsContent({ value, className, children, ...props }: TabsContentProps) {
  const context = React.useContext(TabsContext);
  if (!context) throw new Error("TabsContent must be used within Tabs component");

  const isActive = context.activeTab === value;

  if (!isActive) return null;

  return (
    <div
      className={cn("mt-4 outline-none focus:ring-0 focus:ring-offset-0 animate-fade-in", className)}
      {...props}
    >
      {children}
    </div>
  );
}
