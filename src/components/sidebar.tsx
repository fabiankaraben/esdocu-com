import * as React from "react";
import Link from "next/link";
import { getAllDocSlugs } from "@/lib/docs";
import { cn } from "@/lib/utils";

interface SidebarProps {
  currentSlug: string[];
}

export function Sidebar({ currentSlug }: SidebarProps) {
  const allSlugs = getAllDocSlugs();
  const root = currentSlug[0];
  
  // Filter slugs that belong to the same root (e.g., bootstrap, momentjs)
  const relevantSlugs = allSlugs.filter(slug => slug[0] === root);

  return (
    <aside className="w-64 hidden lg:block border-r min-h-[calc(100vh-4rem)] p-6 overflow-y-auto sticky top-16">
      <div className="space-y-4">
        <div>
          <h4 className="font-bold mb-4 uppercase text-xs tracking-wider text-muted-foreground">{root}</h4>
          <nav className="flex flex-col space-y-1">
            {relevantSlugs.map((slug) => {
              const href = `/${slug.join("/")}`;
              const isActive = slug.join("/") === currentSlug.join("/");
              const label = slug[slug.length - 1].replace(/-/g, " ");
              
              return (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "text-sm py-2 px-3 rounded-md transition-colors",
                    isActive 
                      ? "bg-primary/10 text-primary font-semibold" 
                      : "hover:bg-muted text-muted-foreground hover:text-foreground"
                  )}
                >
                  {label.charAt(0).toUpperCase() + label.slice(1)}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
  );
}
