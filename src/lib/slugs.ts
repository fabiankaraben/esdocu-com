export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function generateSlug(text: string): string {
  // Try to find custom ID like {#id} or \{#id}
  const idMatch = text.match(/\\?\{#([^\}]+)\}/);
  if (idMatch) {
    // Return only the captured ID, ensuring no backslashes or extra spaces
    return idMatch[1].replace(/\\/g, "").trim();
  }
  
  // Fallback to auto-slugify
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}
