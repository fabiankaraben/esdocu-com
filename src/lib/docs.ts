import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface SidebarItem {
  label?: string;
  slug?: string;
  items?: SidebarItem[];
}

const DOCS_PATH = path.join(process.cwd(), "src/content");
const BOOKS_PATH = path.join(DOCS_PATH, "books");

import { TocItem, generateSlug } from "./slugs";

export interface Doc {
  slug: string[];
  title: string;
  content: string;
  data: { [key: string]: any };
  toc: TocItem[];
  filePath: string;
}

export function getAllDocSlugs(dirPath: string = BOOKS_PATH, slugs: string[][] = []): string[][] {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllDocSlugs(filePath, slugs);
    } else if (file.endsWith(".md") || file.endsWith(".mdx")) {
      const relativePath = path.relative(BOOKS_PATH, filePath);
      const slugParts = relativePath.replace(/\.mdx?$/, "").split(path.sep);
      
      const lastPart = slugParts[slugParts.length - 1];
      slugParts[slugParts.length - 1] = lastPart.replace(/^\d+-/, "");
      
      // Handle index files
      if (slugParts[slugParts.length - 1] === "index") {
        slugParts.pop();
      }
      
      if (slugParts.length > 0) {
        slugs.push(slugParts);
      }
    }
  });

  return slugs;
}

export function getDocBySlug(slug: string[]): Doc | null {
  const dirPath = path.join(BOOKS_PATH, ...slug.slice(0, -1));
  const targetSlug = slug[slug.length - 1] || "index";
  
  let actualFileName = targetSlug;
  
  if (fs.existsSync(dirPath)) {
    const files = fs.readdirSync(dirPath);
    for (const file of files) {
      const nameWithoutExt = file.replace(/\.mdx?$/, "").replace(/\.md$/, "");
      if (nameWithoutExt === targetSlug || nameWithoutExt.replace(/^\d+-/, "") === targetSlug) {
        actualFileName = nameWithoutExt;
        break;
      }
    }
  }

  // Try several possible file paths
  const possiblePaths = [
    path.join(dirPath, actualFileName) + ".mdx",
    path.join(dirPath, actualFileName) + ".md",
    path.join(dirPath, actualFileName, "index.mdx"),
    path.join(dirPath, actualFileName, "index.md"),
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
        filePath: path.relative(process.cwd(), filePath),
      };
    }
  }

  return null;
}

export function getSidebarForRoot(root: string): SidebarItem[] {
  try {
    const bookJsonPath = path.join(BOOKS_PATH, root, "book.json");
    if (fs.existsSync(bookJsonPath)) {
      const bookData = JSON.parse(fs.readFileSync(bookJsonPath, "utf-8"));
      
      const parts = bookData.parts || [];
      const chapters = bookData.chapters || [];
      
      if (parts.length > 0) {
        return parts.map((part: any) => {
          return {
            label: part.title,
            items: part.chapterSlugs.map((slug: string) => {
              const chapter = chapters.find((c: any) => c.slug === slug);
              return {
                label: chapter ? chapter.title : getLabelForSlug([root, slug]),
                slug: `${root}/${slug}`
              };
            })
          };
        });
      }
    }
  } catch (error) {
    console.error("Error reading book.json for root:", root, error);
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
