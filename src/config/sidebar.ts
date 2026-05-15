export interface SidebarItem {
  label?: string;
  slug?: string;
  items?: SidebarItem[];
}

export const sidebarConfig: Record<string, SidebarItem[]> = {
  bootstrap: [
    { slug: "bootstrap/comenzando" },
    { slug: "bootstrap/personalizar" },
    { slug: "bootstrap/layout" },
    { slug: "bootstrap/grilla" },
    { slug: "bootstrap/columnas" },
    { slug: "bootstrap/grilla-css" },
    { slug: "bootstrap/reboot" },
    { slug: "bootstrap/tipografias-e-imagenes" },
    { slug: "bootstrap/tablas" },
    { slug: "bootstrap/formularios" },
    {
      label: "Todos los componentes",
      items: [
        { slug: "bootstrap/componentes/acordion" },
        { slug: "bootstrap/componentes/alertas" },
        { slug: "bootstrap/componentes/insignias-y-breadcrumbs" },
        { slug: "bootstrap/componentes/botones" },
        { slug: "bootstrap/componentes/tarjetas" },
        { slug: "bootstrap/componentes/carrusel" },
        { slug: "bootstrap/componentes/collapse" },
        { slug: "bootstrap/componentes/dropdowns" },
        { slug: "bootstrap/componentes/grupo-de-lista" },
        { slug: "bootstrap/componentes/modal" },
        { slug: "bootstrap/componentes/navbar" },
        { slug: "bootstrap/componentes/navs-tabs" },
        { slug: "bootstrap/componentes/offcanvas" },
        { slug: "bootstrap/componentes/placeholders-y-paginacion" },
        { slug: "bootstrap/componentes/popovers" },
        { slug: "bootstrap/componentes/progreso" },
        { slug: "bootstrap/componentes/scrollspy" },
        { slug: "bootstrap/componentes/spinners" },
        { slug: "bootstrap/componentes/toasts" },
        { slug: "bootstrap/componentes/tooltips" },
      ],
    },
    { slug: "bootstrap/helpers" },
    {
      label: "Utilidades",
      items: [
        { slug: "bootstrap/utilidades/api" },
        { slug: "bootstrap/utilidades/background" },
        { slug: "bootstrap/utilidades/bordes" },
        { slug: "bootstrap/utilidades/colores" },
        { slug: "bootstrap/utilidades/flex" },
        { slug: "bootstrap/utilidades/enlaces-e-interacciones" },
        { slug: "bootstrap/utilidades/espaciado" },
        { slug: "bootstrap/utilidades/textos" },
        { slug: "bootstrap/utilidades/otras-utilidades" },
      ],
    },
  ],
  momentjs: [
    { slug: "momentjs/comenzando" },
    { slug: "momentjs/analisis" },
    { slug: "momentjs/get-y-set" },
    { slug: "momentjs/manipulando-fechas" },
    { slug: "momentjs/mostrando-fechas" },
    { slug: "momentjs/consultas" },
    { slug: "momentjs/internacionalizacion" },
    { slug: "momentjs/personalizacion" },
    { slug: "momentjs/duraciones" },
    { slug: "momentjs/utilidades" },
    { slug: "momentjs/complementos" },
    { slug: "momentjs/estado-del-proyecto" },
  ],
  dart: [
    { slug: "dart/tutoriales-y-codelabs/tutoriales" },
    {
      label: "Tutoriales & codelabs",
      items: [
        {
          label: "Codelabs",
          items: [
            { slug: "dart/tutoriales-y-codelabs/codelabs/codelabs" },
            { slug: "dart/tutoriales-y-codelabs/codelabs/dart-cheatsheet" },
            { slug: "dart/tutoriales-y-codelabs/codelabs/iterables" },
            { slug: "dart/tutoriales-y-codelabs/codelabs/async-await" },
          ],
        },
      ],
    },
    {
      label: "Lenguaje",
      items: [
        { slug: "dart/lenguaje/conceptos-basicos" },
        {
          label: "Sintaxis básica",
          items: [{ slug: "dart/lenguaje/sintaxis-basica/variables" }],
        },
      ],
    },
  ],
  typescript: [
    {
      label: "Comenzando",
      items: [
        { slug: "typescript/comenzando/typescript-desde-cero" },
        { slug: "typescript/comenzando/typescript-en-5-minutos" },
        { slug: "typescript/comenzando/typescript-en-5-minutos-poo" },
        { slug: "typescript/comenzando/typescript-en-5-minutos-funcionales" },
        { slug: "typescript/comenzando/herramientas-typescript-en-5-minutos" },
      ],
    },
    {
      label: "Handbook",
      items: [
        { slug: "typescript/handbook/intro" },
        { slug: "typescript/handbook/tipos-basicos" },
        { slug: "typescript/handbook/tipos-comunes" },
        { slug: "typescript/handbook/narrowing" },
        { slug: "typescript/handbook/funciones" },
        { slug: "typescript/handbook/objetos" },
        {
          label: "Manipulación de tipos",
          items: [
            { slug: "typescript/handbook/manipulacion-tipos/tipos-a-partir-de-tipos" },
            { slug: "typescript/handbook/manipulacion-tipos/tipos-genericos" },
            { slug: "typescript/handbook/manipulacion-tipos/operador-keyof" },
            { slug: "typescript/handbook/manipulacion-tipos/operador-typeof" },
            { slug: "typescript/handbook/manipulacion-tipos/tipos-de-acceso-indexado" },
            { slug: "typescript/handbook/manipulacion-tipos/tipos-condicionales" },
            { slug: "typescript/handbook/manipulacion-tipos/tipos-mapeados" },
            { slug: "typescript/handbook/manipulacion-tipos/tipos-literales-de-plantilla" },
          ],
        },
        { slug: "typescript/handbook/clases" },
        { slug: "typescript/handbook/modulos" },
      ],
    },
  ],
};
