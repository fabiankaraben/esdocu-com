import { getAllDocSlugs, getDocBySlug } from "@/lib/docs";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import * as MdxUI from "@/components/mdx-components";

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
  return {
    title: `${doc?.title || "Documentación"} | Esdocu`,
    description: doc?.data?.description || "Documentación técnica en español.",
  };
}

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
  h2: (props: any) => <h2 className="text-2xl font-display font-bold mt-10 mb-4 pb-2 border-b" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-display font-bold mt-8 mb-3" {...props} />,
  p: (props: any) => <p className="leading-relaxed mb-4" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
  li: (props: any) => <li className="ml-4" {...props} />,
  blockquote: (props: any) => <blockquote className="border-l-4 border-primary/20 pl-4 italic my-6 bg-muted/30 py-2 pr-4 rounded-r-lg" {...props} />,
  a: (props: any) => <a className="text-primary font-medium underline underline-offset-4 decoration-primary/30 hover:decoration-primary transition-all" {...props} />,
};

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto flex">
        <Sidebar currentSlug={slug} />
        <main className="flex-1 p-6 md:p-12 max-w-4xl mx-auto overflow-hidden">
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
            />
          </div>
          
          <div className="mt-20 pt-8 border-t flex justify-between items-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Esdocu. Contenido bajo licencia MIT.</p>
            <a href={`https://github.com/fabiankaraben/esdocu-com/edit/main/src/content/${slug.join("/")}.mdx`} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              Editar esta página
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
