"use client";

import React from "react";
import { AlertCircle, Info, AlertTriangle, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

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

export function TopBanner() {
  return (
    <div className="my-8 p-6 rounded-2xl bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg">
      <h3 className="text-xl font-bold mb-2">¡Bienvenido a Esdocu!</h3>
      <p className="opacity-90">Explora la documentación oficial traducida y mejorada para una mejor experiencia de aprendizaje.</p>
    </div>
  );
}

export function BottomBanner() {
  return (
    <div className="my-12 p-8 rounded-2xl border bg-muted/50 flex flex-col items-center text-center">
      <h4 className="text-lg font-bold mb-2">¿Necesitas más ayuda?</h4>
      <p className="text-muted-foreground mb-4">Únete a nuestra comunidad y aprende con otros desarrolladores.</p>
      <div className="flex gap-4">
        <a href="https://github.com/fabiankaraben/esdocu-com" className="text-primary font-bold hover:underline">GitHub</a>
        <span className="text-muted-foreground">•</span>
        <a href="/" className="text-primary font-bold hover:underline">Inicio</a>
      </div>
    </div>
  );
}

export const GenericBanner = ({ title }: { title?: string }) => (
  <div className="my-12 p-8 rounded-2xl border border-dashed flex flex-col items-center text-center">
    {title && <h4 className="text-lg font-bold mb-2">{title}</h4>}
    <p className="text-muted-foreground">Esdocu: Documentación de calidad en español.</p>
  </div>
);

export const MiddleBannerOne = () => <GenericBanner title="Contribuye al conocimiento" />;
export const MiddleBannerTwo = () => <GenericBanner title="Aprende sin límites" />;
export const MiddleBannerThree = () => <GenericBanner title="Documentación oficial" />;
export const MiddleBannerFour = () => <GenericBanner title="Traducciones precisas" />;
export const MiddleBannerFive = () => <GenericBanner title="Crecimiento constante" />;
export const MiddleBannerSix = () => <GenericBanner title="Únete al equipo" />;
export const MiddleBannerSeven = () => <GenericBanner title="Compartir es aprender" />;
export const MiddleBannerEight = () => <GenericBanner title="Esdocu es para ti" />;
export const MiddleBannerNine = () => <GenericBanner title="Sigue aprendiendo" />;

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
export const ContentSuggestion = Fallback;
export const TechnologyCard = Fallback;
export const AffiliateArticleCard = Fallback;
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
