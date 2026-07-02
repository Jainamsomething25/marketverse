import * as React from "react";
import { cn } from "@/utils/cn";
import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center text-xs text-slate-400 font-medium", className)}
    >
      <ol className="flex items-center gap-1.5 list-none m-0 p-0">
        <li className="flex items-center">
          <Link
            href="/dashboard"
            className="hover:text-slate-200 transition-colors flex items-center"
          >
            <Home className="w-3.5 h-3.5" />
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <li className="flex items-center text-slate-600 shrink-0">
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li className="flex items-center">
                {isLast || !item.href ? (
                  <span className="text-slate-100 font-semibold truncate max-w-[120px]">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-slate-200 transition-colors truncate max-w-[120px]"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
