import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Zap, Shield, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,hsl(var(--primary)/0.05)_0%,transparent_100%)]" />
          
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-muted text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
              Documentación técnica en Español
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
              Aprende <span className="gradient-text">Tecnología</span> <br /> 
              en tu Idioma.
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              Esdocu ofrece traducciones de alta calidad de las documentaciones técnicas más populares. 
              Bootstrap, Moment.js y más, todo en un solo lugar.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000">
              <Button size="lg" asChild className="rounded-full px-8">
                <Link href="/bootstrap/comenzando">
                  Explorar Documentación <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full px-8">
                <a href="https://github.com/fabiankaraben/esdocu-com" target="_blank" rel="noreferrer">
                  Ver en GitHub
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<Zap className="h-8 w-8 text-primary" />}
                title="Rápido y Moderno"
                description="Construido con las últimas tecnologías para una experiencia de lectura fluida y veloz."
              />
              <FeatureCard 
                icon={<BookOpen className="h-8 w-8 text-primary" />}
                title="Contenido Curado"
                description="Seleccionamos y traducimos las bibliotecas más importantes del ecosistema dev."
              />
              <FeatureCard 
                icon={<Globe className="h-8 w-8 text-primary" />}
                title="100% en Español"
                description="Eliminamos la barrera del idioma para que puedas enfocarte en aprender a programar."
              />
            </div>
          </div>
        </section>

        {/* Documentation Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-12">Bibliotecas Disponibles</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <DocCard 
                title="Bootstrap" 
                href="/bootstrap/comenzando" 
                color="bg-[#7952b3]" 
                description="El framework CSS más popular del mundo."
              />
              <DocCard 
                title="Moment.js" 
                href="/momentjs/comenzando" 
                color="bg-[#1b2b34]" 
                description="Manipulación de fechas y horas en JavaScript."
              />

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-background">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Esdocu. Hecho con ❤️ para la comunidad hispana.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 group">
      <div className="mb-4 inline-block p-3 rounded-xl bg-primary/5 group-hover:bg-primary/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function DocCard({ title, href, color, description }: { title: string, href: string, color: string, description: string }) {
  return (
    <Link href={href} className="group relative block p-8 rounded-2xl border bg-card hover:shadow-xl transition-all duration-500 overflow-hidden text-left h-full">
      <div className={`absolute top-0 right-0 w-24 h-24 ${color} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity`} />
      <div className="relative z-10">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-muted-foreground mb-6 line-clamp-2">{description}</p>
        <span className="text-sm font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform">
          Leer más <ArrowRight className="ml-2 h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
