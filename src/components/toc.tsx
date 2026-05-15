"use client";

import React from "react";
import Link from "next/link";
import { TocItem } from "@/lib/slugs";
import { cn } from "@/lib/utils";
import { List, X, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TocProps {
  items: TocItem[];
}

export function Toc({ items }: TocProps) {
  const [activeId, setActiveId] = React.useState<string>("");
  const [isOpen, setIsOpen] = React.useState(false);

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

  const tocContent = (
    <div className="space-y-4">
      <h4 className="font-bold uppercase text-xs tracking-wider text-muted-foreground">En esta página</h4>
      <nav className="flex flex-col space-y-2 border-l ml-0.5">
        {items.map((item, index) => (
          <Link
            key={index}
            href={`#${item.id}`}
            onClick={() => setIsOpen(false)}
            className={cn(
              "text-sm transition-colors hover:text-primary py-1 px-4 -ml-px border-l border-transparent flex items-center gap-2",
              activeId === item.id 
                ? "text-primary font-medium border-primary bg-primary/5" 
                : "text-muted-foreground",
              item.level === 3 && "pl-8"
            )}
          >
            {item.level === 2 && <Hash className="h-3 w-3 opacity-50" />}
            {item.text}
          </Link>
        ))}
      </nav>
    </div>
  );

  return (
    <>
      {/* Mobile Trigger - Right */}
      <div className="xl:hidden fixed bottom-6 right-6 z-50">
        <Button 
          onClick={() => setIsOpen(true)} 
          size="icon" 
          className="rounded-full shadow-lg h-12 w-12 bg-secondary text-secondary-foreground hover:scale-110 transition-transform"
        >
          <List className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Drawer - Right */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] xl:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="fixed inset-y-0 right-0 w-72 bg-background border-l p-6 shadow-xl animate-in slide-in-from-right duration-300 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <span className="font-bold text-lg">Contenido</span>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            {tocContent}
          </div>
        </div>
      )}

      {/* Desktop TOC */}
      <aside className="w-64 hidden xl:block p-6 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto custom-scrollbar">
        {tocContent}
      </aside>
    </>
  );
}
