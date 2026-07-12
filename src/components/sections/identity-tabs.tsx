"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface IdentityTab {
  label: string;
  content: string;
}

interface IdentityTabsProps {
  tabs: IdentityTab[];
}

export function IdentityTabs({ tabs }: IdentityTabsProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="overflow-hidden rounded-lg border bg-card">
      <div role="tablist" className="flex flex-col border-b sm:flex-row">
        {tabs.map((tab, index) => {
          const isActive = index === active;
          return (
            <button
              key={tab.label}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(index)}
              className={cn(
                "relative flex-1 px-5 py-4 text-left text-sm font-semibold transition-colors sm:text-center",
                "border-b-2 sm:border-b-0",
                isActive
                  ? "border-brand-green text-brand-green sm:border-b-[3px]"
                  : "border-transparent text-foreground hover:text-brand-green"
              )}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div role="tabpanel" className="px-6 py-6">
        <p className="text-base leading-relaxed text-muted-foreground">
          {tabs[active]?.content}
        </p>
      </div>
    </div>
  );
}
