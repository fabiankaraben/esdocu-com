import fs from "fs";
import path from "path";
import matter from "gray-matter";

const DOCS_PATH = path.join(process.cwd(), "src/content");

export interface Doc {
  slug: string[];
  title: string;
  content: string;
  data: { [key: string]: any };
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
      return {
        slug,
        title: data.title || slug[slug.length - 1],
        content,
        data,
      };
    }
  }

  return null;
}

export function getSidebar() {
  // This should ideally parse astro.config.mjs, but for simplicity we can hardcode or auto-generate
  // Since we want to maintain existing paths, auto-generating from the filesystem is safest
  // but we might want to group them by top-level folder.
  
  const slugs = getAllDocSlugs();
  const sidebar: { [key: string]: any } = {};

  slugs.forEach(slug => {
    const root = slug[0];
    if (!sidebar[root]) sidebar[root] = [];
    sidebar[root].push(slug);
  });

  return sidebar;
}
