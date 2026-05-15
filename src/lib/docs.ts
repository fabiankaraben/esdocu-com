import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sidebarConfig, SidebarItem } from "@/config/sidebar";

const DOCS_PATH = path.join(process.cwd(), "src/content");

import { TocItem, generateSlug } from "./slugs";

export interface Doc {
  slug: string[];
  title: string;
  content: string;
  data: { [key: string]: any };
  toc: TocItem[];
}

export function getAllDocSlugs(dirPath: string = DOCS_PATH, slugs: string[][] = []): string[][] {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllDocSlugs(filePath, slugs);
    } else if (file.endsWith(".md") || file.endsWith(".mdx")) {
      const relativePath = path.relative(DOCS_PATH, filePath);
      const slug = relativePath.replace(/\.mdx?$/, "").split(path.sep);
      
      // Handle index files
      if (slug[slug.length - 1] === "index") {
        slug.pop();
      }
      
      if (slug.length > 0) {
        slugs.push(slug);
      }
    }
  });

  return slugs;
}

export function getDocBySlug(slug: string[]): Doc | null {
  // Try several possible file paths
  const possiblePaths = [
    path.join(DOCS_PATH, ...slug) + ".mdx",
    path.join(DOCS_PATH, ...slug) + ".md",
    path.join(DOCS_PATH, ...slug, "index.mdx"),
    path.join(DOCS_PATH, ...slug, "index.md"),
  ];

  for (const filePath of possiblePaths) {
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      let fileContent = fs.readFileSync(filePath, "utf-8");
      
      // Strip Astro imports
      fileContent = fileContent.replace(/import\s+.*\s+from\s+['"]@astrojs\/starlight\/components['"];?/g, "");
      fileContent = fileContent.replace(/import\s+.*\s+from\s+['"]@components\/.*['"];?/g, "");
      
      // Strip style attributes as they cause React to crash
      fileContent = fileContent.replace(/\sstyle="[^"]*"/g, "");

      const { data, content } = matter(fileContent);
      
      // Extract TOC
      const toc: TocItem[] = [];
      const headingRegex = /^(##|###)\s+(.*)$/gm;
      let match;
      
      while ((match = headingRegex.exec(content)) !== null) {
        const level = match[1].length;
        let text = match[2].trim();
        
        // Remove custom IDs if present in the text like {#id} or \{#id}
        const id = generateSlug(text);
        text = text.replace(/\\?\{#.*?\}/g, "").trim();
        
        toc.push({ id, text, level });
      }

      return {
        slug,
        title: data.title || slug[slug.length - 1],
        content,
        data,
        toc,
      };
    }
  }

  return null;
}

export function getSidebarForRoot(root: string): SidebarItem[] {
  const config = sidebarConfig[root];
  
  if (config) {
    return config.map(item => resolveSidebarItem(item));
  }

  // Fallback to auto-generation if no config for this root
  const slugs = getAllDocSlugs().filter(slug => slug[0] === root);
  return slugs.map(slug => ({
    slug: slug.join("/"),
    label: getLabelForSlug(slug)
  }));
}

function resolveSidebarItem(item: SidebarItem): SidebarItem {
  if (item.items) {
    return {
      ...item,
      items: item.items.map(subItem => resolveSidebarItem(subItem))
    };
  }
  
  if (item.slug && !item.label) {
    return {
      ...item,
      label: getLabelForSlug(item.slug.split("/"))
    };
  }
  
  return item;
}

function getLabelForSlug(slug: string[]): string {
  const doc = getDocBySlug(slug);
  if (doc && doc.data && doc.data.sidebar && doc.data.sidebar.label) {
    return doc.data.sidebar.label;
  }
  if (doc && doc.title) {
    return doc.title;
  }
  const lastPart = slug[slug.length - 1];
  return lastPart.charAt(0).toUpperCase() + lastPart.slice(1).replace(/-/g, " ");
}

export function getSidebar() {
  const slugs = getAllDocSlugs();
  const sidebar: { [key: string]: any } = {};

  slugs.forEach(slug => {
    const root = slug[0];
    if (!sidebar[root]) sidebar[root] = [];
    sidebar[root].push(slug);
  });

  return sidebar;
}

export function getFirstArticleSlug(root: string): string | null {
  const items = getSidebarForRoot(root);
  
  function findFirst(items: SidebarItem[]): string | null {
    for (const item of items) {
      if (item.slug) return item.slug;
      if (item.items) {
        const first = findFirst(item.items);
        if (first) return first;
      }
    }
    return null;
  }
  
  return findFirst(items);
}
