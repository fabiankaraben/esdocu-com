"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, ExternalLink, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Navbar() {
  const { setTheme, theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-8 w-32">
            <Image
              src="/logos/light-logo.svg"
              alt="Esdocu"
              fill
              className="dark:hidden object-contain"
              priority
            />
            <Image
              src="/logos/dark-logo.svg"
              alt="Esdocu"
              fill
              className="hidden dark:block object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/bootstrap/comenzando" className="hover:text-primary/80 transition-colors">Bootstrap</Link>
          <Link href="/momentjs/comenzando" className="hover:text-primary/80 transition-colors">Moment.js</Link>
          <Link href="/dart/tutoriales-y-codelabs/tutoriales" className="hover:text-primary/80 transition-colors">Dart</Link>
          <Link href="/typescript/comenzando/typescript-desde-cero" className="hover:text-primary/80 transition-colors">TypeScript</Link>
        </nav>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="ghost" size="icon" asChild className="rounded-full">
            <a href="https://github.com/fabiankaraben/esdocu-com" target="_blank" rel="noreferrer">
              <ExternalLink className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background p-4 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-4">
            <Link href="/bootstrap/comenzando" onClick={() => setIsMenuOpen(false)}>Bootstrap</Link>
            <Link href="/momentjs/comenzando" onClick={() => setIsMenuOpen(false)}>Moment.js</Link>
            <Link href="/dart/tutoriales-y-codelabs/tutoriales" onClick={() => setIsMenuOpen(false)}>Dart</Link>
            <Link href="/typescript/comenzando/typescript-desde-cero" onClick={() => setIsMenuOpen(false)}>TypeScript</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
