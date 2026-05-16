import { getAllDocSlugs, getDocBySlug, getFirstArticleSlug, getSidebarForRoot, getCategoriesWithBooks } from "@/lib/docs";
import { generateSlug } from "@/lib/slugs";
import { notFound, redirect } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { Toc } from "@/components/toc";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import * as MdxUI from "@/components/mdx-components";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";



interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  const slugs = getAllDocSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDocBySlug(slug);
  
  const title = doc?.title || "Documentación";
  const description = doc?.data?.description || "Documentación técnica en español.";
  const path = `/${slug.join("/")}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

const getTextContent = (children: any): string => {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(getTextContent).join("");
  if (children?.props?.children) return getTextContent(children.props.children);
  return "";
};

const mdxComponents: any = {
  ...MdxUI,
  code({ node, inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <div className="rounded-xl overflow-hidden my-6 border shadow-sm">
        <SyntaxHighlighter
          style={atomDark}
          language={match[1]}
          PreTag="div"
          customStyle={{ margin: 0, padding: '1.5rem', fontSize: '0.9rem', background: '#1e1e1e' }}
          {...props}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      </div>
    ) : (
      <code className={cn("bg-muted px-1.5 py-0.5 rounded text-primary font-mono text-sm", className)} {...props}>
        {children}
      </code>
    );
  },
  h1: (props: any) => <h1 className="text-4xl font-display font-bold mt-12 mb-6" {...props} />,
  h2: ({ children, ...props }: any) => {
    const text = getTextContent(children);
    const id = generateSlug(text);
    const cleanText = text.replace(/\\?\{#.*?\}/g, "").trim();
    return <h2 id={id} className="text-2xl font-display font-bold mt-10 mb-4 pb-2 border-b scroll-mt-24" {...props}>{cleanText}</h2>;
  },
  h3: ({ children, ...props }: any) => {
    const text = getTextContent(children);
    const id = generateSlug(text);
    const cleanText = text.replace(/\\?\{#.*?\}/g, "").trim();
    return <h3 id={id} className="text-xl font-display font-bold mt-8 mb-3 scroll-mt-24" {...props}>{cleanText}</h3>;
  },
  p: (props: any) => <p className="leading-relaxed mb-4" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />,
  li: (props: any) => <li className="leading-relaxed" {...props} />,
  blockquote: (props: any) => <blockquote className="border-l-4 border-primary/20 pl-4 italic my-6 bg-muted/30 py-2 pr-4 rounded-r-lg" {...props} />,
  a: (props: any) => <a className="text-primary font-medium underline underline-offset-4 decoration-primary/30 hover:decoration-primary transition-all" {...props} />,
  table: (props: any) => (
    <div className="my-8 w-full overflow-hidden rounded-xl border border-muted shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left" {...props} />
      </div>
    </div>
  ),
  thead: (props: any) => <thead className="bg-muted/50 border-b border-muted" {...props} />,
  tbody: (props: any) => <tbody className="divide-y divide-muted/50" {...props} />,
  tr: (props: any) => <tr className="hover:bg-muted/20 transition-colors" {...props} />,
  th: (props: any) => <th className="px-4 py-3 text-sm font-bold text-foreground/80" {...props} />,
  td: (props: any) => <td className="px-4 py-3 text-sm leading-relaxed text-muted-foreground" {...props} />,
};



export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;
  
  // If it's a root path (e.g., /momentjs), redirect to the first article
  if (slug.length === 1) {
    const firstArticle = getFirstArticleSlug(slug[0]);
    if (firstArticle && firstArticle !== slug[0]) {
      redirect(`/${firstArticle}`);
    }
  }

  const doc = getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  const root = slug[0];
  const sidebarItems = getSidebarForRoot(root);
  const categoriesWithBooks = getCategoriesWithBooks();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar categoriesWithBooks={categoriesWithBooks} />
      <div className="container mx-auto flex justify-center">
        <Sidebar currentSlug={slug} items={sidebarItems} root={root} />
        <main className="flex-1 p-6 md:p-12 max-w-4xl overflow-hidden">
          <div className="mb-12">
            <div className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">{slug[0]}</div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">{doc.title}</h1>
            {doc.data.description && (
              <p className="text-xl text-muted-foreground leading-relaxed">{doc.data.description}</p>
            )}
          </div>
          
          <div className="prose-custom">
            <MDXRemote 
              source={doc.content} 
              components={mdxComponents} 
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm, remarkMath],
                  rehypePlugins: [rehypeKatex],
                }
              }}
            />

          </div>
          
          <div className="mt-20 pt-8 border-t flex justify-between items-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Esdocu. Contenido bajo licencia MIT.</p>
            <a href={`https://github.com/fabiankaraben/esdocu-com/edit/main/${doc.filePath}`} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              Editar esta página
            </a>
          </div>
        </main>
        <Toc items={doc.toc} />
      </div>
    </div>
  );
}
