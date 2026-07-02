import * as React from "react";
import { cn } from "@/utils/cn";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger" | "outline" | "link";
  size?: "sm" | "md" | "lg" | "icon";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center font-medium rounded-app-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer",
          // Variants
          {
            "bg-brand-primary text-slate-50 hover:bg-brand-primary-hover active:scale-[0.98]":
              variant === "primary",
            "bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-slate-100":
              variant === "secondary",
            "bg-transparent text-slate-400 hover:bg-slate-800/60 hover:text-slate-200":
              variant === "ghost",
            "bg-brand-danger text-slate-50 hover:bg-brand-danger-hover active:scale-[0.98]":
              variant === "danger",
            "border border-slate-700 bg-transparent text-slate-300 hover:bg-slate-800 hover:border-slate-600":
              variant === "outline",
            "text-brand-primary hover:underline bg-transparent p-0 h-auto": variant === "link",
          },
          // Sizes
          {
            "text-xs px-3 py-1.5 gap-1.5": size === "sm",
            "text-sm px-4 py-2 gap-2": size === "md",
            "text-base px-5 py-2.5 gap-2.5": size === "lg",
            "p-2 w-9 h-9": size === "icon",
          },
          className
        )}
        {...props}
      >
        {isLoading && <Loader2 className="w-4 h-4 animate-spin shrink-0" />}
        {!isLoading && leftIcon && <span className="shrink-0">{leftIcon}</span>}
        {size !== "icon" && children}
        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
