import * as React from "react";
import { cn } from "@/utils/cn";
import { Search } from "lucide-react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", label, error, helperText, ...props }, ref) => {
    const id = React.useId();
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label htmlFor={id} className="text-xs font-semibold text-slate-300">
            {label}
          </label>
        )}
        <input
          id={id}
          type={type}
          ref={ref}
          className={cn(
            "w-full px-3 py-2 text-sm bg-slate-950 border rounded-app-md text-slate-100 placeholder-slate-500 focus:outline-none transition-colors duration-200",
            error
              ? "border-rose-500 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/25"
              : "border-slate-800 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/25",
            className
          )}
          {...props}
        />
        {error && <span className="text-[11px] text-rose-500">{error}</span>}
        {!error && helperText && <span className="text-[11px] text-slate-500">{helperText}</span>}
      </div>
    );
  }
);
Input.displayName = "Input";

export interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void;
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, onSearch, onChange, ...props }, ref) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) onChange(e);
      if (onSearch) onSearch(e.target.value);
    };

    return (
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
        <input
          ref={ref}
          type="text"
          onChange={handleInputChange}
          className={cn(
            "w-full pl-9 pr-4 py-2 text-sm bg-slate-950 border border-slate-800 rounded-app-md text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-primary transition-colors duration-200",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
SearchInput.displayName = "SearchInput";

export { Input, SearchInput };
