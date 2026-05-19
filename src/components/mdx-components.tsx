"use client";

import React from "react";
import { AlertCircle, Info, AlertTriangle, CheckCircle, Clipboard, Check, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "next-themes";

export function Aside({ type = "info", children }: { type?: string, children: React.ReactNode }) {
  const icons = {
    info: <Info className="h-5 w-5 text-blue-500" />,
    note: <Info className="h-5 w-5 text-blue-500" />,
    tip: <CheckCircle className="h-5 w-5 text-green-500" />,
    caution: <AlertTriangle className="h-5 w-5 text-amber-500" />,
    danger: <AlertCircle className="h-5 w-5 text-red-500" />,
  };

  const styles = {
    info: "border-blue-200 bg-blue-50 dark:bg-blue-950/30 dark:border-blue-900",
    note: "border-blue-200 bg-blue-50 dark:bg-blue-950/30 dark:border-blue-900",
    tip: "border-green-200 bg-green-50 dark:bg-green-950/30 dark:border-green-900",
    caution: "border-amber-200 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-900",
    danger: "border-red-200 bg-red-50 dark:bg-red-950/30 dark:border-red-900",
  };

  const icon = icons[type as keyof typeof icons] || icons.info;
  const style = styles[type as keyof typeof styles] || styles.info;

  return (
    <div className={cn("my-6 p-4 rounded-xl border flex gap-4", style)}>
      <div className="shrink-0 mt-0.5">{icon}</div>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}

export function DemoIframe({ path, height = "400px", children }: { path: string, height?: string, children?: React.ReactNode }) {
  return (
    <div className="my-8 border rounded-xl overflow-hidden bg-card shadow-sm">
      {children && <div className="p-4 border-b bg-muted/30 text-xs font-mono">{children}</div>}
      <iframe 
        src={path} 
        style={{ width: '100%', height, border: 'none' }} 
        title="Demo"
        loading="lazy"
      />
    </div>
  );
}

export const CardGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">{children}</div>
);

export const Marker = ({ children, name }: { children?: React.ReactNode, name?: string }) => (
  <span className="inline-block px-1 rounded bg-muted text-xs font-mono text-primary border mx-1">
    {children || name || "Marker"}
  </span>
);

// Fallback for any other custom component
export const Fallback = ({ children, name }: { children?: React.ReactNode, name?: string }) => (
  <div className="my-4 p-4 border border-dashed rounded-lg opacity-50 text-xs">
    {name || "Component"}: {children}
  </div>
);

// Define all known components from the grep
export const TechnologyCard = Fallback;
export const Apple = Marker;
export const BaseType = Marker;
export const Circle = Marker;
export const DBFields = Marker;
export const Dog = Marker;
export const Email = Marker;
export const EmailAddress = Marker;
export const Events = Marker;
export const Features = Fallback;
export const Footer = Fallback;
export const Greeting = Marker;
export const HTMLCanvasElement = Marker;
export const HTMLDivElement = Marker;
export const HTMLParagraphElement = Marker;
export const Input = Marker;
export const Key = Marker;
export const LockedAccount = Marker;
export const LowercaseGreeting = Marker;
export const MaybeUser = Marker;
export const NumType = Marker;
export const Object = Marker;
export const Person = Marker;
export const Predicate = Marker;
export const Property = Marker;
export const SquareEvent = Marker;
export const Str = Marker;
export const String = Marker;
export const StringType = Marker;
export const T = Marker;
export const Type = Marker;
export const U = Marker;
export const UppercaseGreeting = Marker;
export const User = Marker;
export const X = Marker;

const getLanguageMeta = (lang: string) => {
  const meta: Record<string, { label: string, color: string }> = {
    js: { label: "JavaScript", color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20" },
    javascript: { label: "JavaScript", color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20" },
    ts: { label: "TypeScript", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
    typescript: { label: "TypeScript", color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
    tsx: { label: "TSX", color: "bg-blue-400/10 text-blue-400 border-blue-400/20" },
    jsx: { label: "JSX", color: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20" },
    html: { label: "HTML", color: "bg-orange-500/10 text-orange-500 border-orange-500/20" },
    css: { label: "CSS", color: "bg-teal-500/10 text-teal-500 border-teal-500/20" },
    scss: { label: "SCSS", color: "bg-pink-500/10 text-pink-500 border-pink-500/20" },
    bash: { label: "Bash", color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" },
    sh: { label: "Shell", color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" },
    shell: { label: "Shell", color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" },
    json: { label: "JSON", color: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
    jsonc: { label: "JSON", color: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
    rust: { label: "Rust", color: "bg-amber-600/10 text-amber-500 border-amber-500/20" },
    rs: { label: "Rust", color: "bg-amber-600/10 text-amber-500 border-amber-500/20" },
    python: { label: "Python", color: "bg-sky-500/10 text-sky-500 border-sky-500/20" },
    py: { label: "Python", color: "bg-sky-500/10 text-sky-500 border-sky-500/20" },
    yaml: { label: "YAML", color: "bg-red-500/10 text-red-500 border-red-500/20" },
    yml: { label: "YAML", color: "bg-red-500/10 text-red-500 border-red-500/20" },
    md: { label: "Markdown", color: "bg-stone-500/10 text-stone-400 border-stone-500/20" },
    markdown: { label: "Markdown", color: "bg-stone-500/10 text-stone-400 border-stone-500/20" },
  };

  const key = lang.toLowerCase();
  return meta[key] || { label: lang.toUpperCase() || "Código", color: "bg-primary/10 text-primary border-primary/20" };
};

export function CodeBlock({ children, className, inline, ...props }: any) {
  const [copied, setCopied] = React.useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = !mounted || resolvedTheme === "dark";

  const match = /language-(\w+)/.exec(className || "");
  const lang = match ? match[1] : "";

  const getCodeString = (node: any): string => {
    if (typeof node === "string") return node;
    if (Array.isArray(node)) return node.map(getCodeString).join("");
    if (node?.props?.children) return getCodeString(node.props.children);
    return globalThis.String(node || "");
  };

  const codeString = getCodeString(children).replace(/\n$/, "");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Fallo al copiar", err);
    }
  };

  if (inline || !match) {
    return (
      <code className={cn("bg-muted px-1.5 py-0.5 rounded text-primary font-mono text-sm", className)} {...props}>
        {children}
      </code>
    );
  }

  const meta = getLanguageMeta(lang);

  return (
    <div className={cn(
      "rounded-xl overflow-hidden my-8 border shadow-md transition-all duration-300 group relative",
      isDark
        ? "bg-zinc-900 border-zinc-800 text-zinc-100"
        : "bg-zinc-50 border-zinc-200 text-zinc-900"
    )}>
      {/* Top Header Bar */}
      <div className={cn(
        "flex items-center justify-between px-4 py-2.5 border-b select-none transition-colors duration-300",
        isDark
          ? "bg-zinc-950/80 border-zinc-800/60"
          : "bg-zinc-100/80 border-zinc-200/60"
      )}>
        <div className="flex items-center gap-2">
          <Terminal className={cn("h-3.5 w-3.5", isDark ? "text-zinc-500" : "text-zinc-400")} />
          <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-full border", meta.color)}>
            {meta.label}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className={cn(
            "flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-200 cursor-pointer",
            isDark
              ? "text-zinc-400 hover:text-zinc-100 hover:bg-white/5"
              : "text-zinc-600 hover:text-zinc-900 hover:bg-black/5"
          )}
          title="Copiar código"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-green-500 animate-in fade-in zoom-in-50 duration-200" />
              <span className="text-green-500 animate-in fade-in slide-in-from-right-1 duration-200">¡Copiado!</span>
            </>
          ) : (
            <>
              <Clipboard className="h-3.5 w-3.5 transition-transform duration-200 group-hover:scale-105" />
              <span>Copiar</span>
            </>
          )}
        </button>
      </div>

      {/* Code SyntaxHighlighter */}
      <div className="relative">
        <SyntaxHighlighter
          style={isDark ? oneDark : oneLight}
          language={lang}
          PreTag="div"
          className="custom-scrollbar"
          customStyle={{
            margin: 0,
            padding: '1.75rem',
            fontSize: '0.9rem',
            lineHeight: '1.6',
            background: 'transparent',
            overflowX: 'auto',
          }}
          {...props}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
