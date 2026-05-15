"use client";

import React from "react";
import Link from "next/link";
import { TocItem } from "@/lib/docs";
import { cn } from "@/lib/utils";

interface TocProps {
  items: TocItem[];
}

export function Toc({ items }: TocProps) {
  const [activeId, setActiveId] = React.useState<string>("");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -80% 0px" }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <aside className="w-64 hidden xl:block p-6 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
      <div className="space-y-4">
        <h4 className="font-bold uppercase text-xs tracking-wider text-muted-foreground">En esta página</h4>
        <nav className="flex flex-col space-y-2 border-l ml-0.5">
          {items.map((item, index) => (
            <Link
              key={index}
              href={`#${item.id}`}
              className={cn(
                "text-sm transition-colors hover:text-primary py-1 px-4 -ml-px border-l border-transparent",
                activeId === item.id 
                  ? "text-primary font-medium border-primary bg-primary/5" 
                  : "text-muted-foreground",
                item.level === 3 && "pl-8"
              )}
            >
              {item.text}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
