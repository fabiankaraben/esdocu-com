import * as React from "react";
import Link from "next/link";
import { getSidebarForRoot } from "@/lib/docs";
import { cn } from "@/lib/utils";
import { SidebarItem } from "@/config/sidebar";

interface SidebarProps {
  currentSlug: string[];
}

export function Sidebar({ currentSlug }: SidebarProps) {
  const root = currentSlug[0];
  const items = getSidebarForRoot(root);

  return (
    <aside className="w-64 hidden lg:block border-r min-h-[calc(100vh-4rem)] p-6 overflow-y-auto sticky top-16">
      <div className="space-y-4">
        <div>
          <h4 className="font-bold mb-4 uppercase text-xs tracking-wider text-muted-foreground">{root}</h4>
          <nav className="flex flex-col space-y-1">
            {items.map((item, index) => (
              <SidebarNavItem key={index} item={item} currentSlug={currentSlug} />
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
}

function SidebarNavItem({ item, currentSlug }: { item: SidebarItem, currentSlug: string[] }) {
  const currentPath = currentSlug.join("/");
  const isActive = item.slug === currentPath;

  if (item.items) {
    return (
      <div className="space-y-1 mb-4 last:mb-0">
        {item.label && (
          <div className="text-xs font-semibold text-muted-foreground px-3 py-2 uppercase tracking-tight">
            {item.label}
          </div>
        )}
        <div className="flex flex-col space-y-1 pl-2 border-l ml-3">
          {item.items.map((subItem, index) => (
            <SidebarNavItem key={index} item={subItem} currentSlug={currentSlug} />
          ))}
        </div>
      </div>
    );
  }

  if (item.slug) {
    return (
      <Link
        href={`/${item.slug}`}
        className={cn(
          "text-sm py-2 px-3 rounded-md transition-colors block",
          isActive
            ? "bg-primary/10 text-primary font-semibold"
            : "hover:bg-muted text-muted-foreground hover:text-foreground"
        )}
      >
        {item.label}
      </Link>
    );
  }

  return null;
}
