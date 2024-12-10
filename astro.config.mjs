import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopicsDropdown from 'starlight-sidebar-topics-dropdown'
// import starlightThemeRapide from 'starlight-theme-rapide'
import remarkHeadingID from 'remark-heading-id';

import tailwind from '@astrojs/tailwind';

const head = [];
if (import.meta.env.PROD) {
  const GA_ID = 'G-YPEZ7EJ1LQ';
  // Google tag (gtag.js)
  head.push({
    tag: 'script',
    attrs: {
      src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`,
      async: true,
    },
  },
    {
      tag: 'script',
      content: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GA_ID}');`,
    }
  );
}

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    head,
    title: 'Esdocu',
    logo: {
      light: './src/assets/logos/light-logo.svg',
      dark: './src/assets/logos/dark-logo.svg',
      replacesTitle: true,
    },
    locales: {
      root: {
        label: 'Español',
        lang: 'es',
      },
    },
    social: {
      github: 'https://github.com/fabiankaraben/esdocu-com',
    },
    customCss: [
      // './src/styles/rapide-theme-custom.css',
      './src/styles/tailwind.css',
    ],
    plugins: [
      // starlightThemeRapide(),
      starlightSidebarTopicsDropdown([
        // {
        //   label: 'HTML',
        //   link: '/html/',
        //   icon: 'open-book',
        //   items: [
        //     {
        //       label: 'Basics',
        //       autogenerate: { directory: 'html' },
        //     },
        //   ]
        // },
        // {
        //   label: 'CSS',
        //   link: '/css/',
        //   icon: 'information',
        //   items: [
        //     {
        //       label: 'Basics',
        //       autogenerate: { directory: 'css' },
        //     },
        //   ]
        // },
        // {
        //   label: 'JavaScript',
        //   link: '/javascript/',
        //   icon: 'information',
        //   items: [
        //     {
        //       label: 'Basics',
        //       autogenerate: { directory: 'javascript' },
        //     },
        //   ]
        // },
        // {
        //   label: 'TypeScript',
        //   link: '/typescript/',
        //   icon: 'information',
        //   items: [
        //     {
        //       label: 'Basics',
        //       autogenerate: { directory: 'typescript' },
        //     },
        //   ]
        // },
        // {
        //   label: 'Python',
        //   link: '/python/',
        //   icon: 'information',
        //   items: [
        //     {
        //       label: 'Basics',
        //       autogenerate: { directory: 'python' },
        //     },
        //   ]
        // },
        // {
        //   label: 'Go',
        //   link: '/go/',
        //   icon: 'information',
        //   items: [
        //     {
        //       label: 'Basics',
        //       autogenerate: { directory: 'go' },
        //     },
        //   ]
        // },
        // {
        //   label: 'Bootstrap',
        //   link: '/bootstrap/comenzando/',
        //   icon: 'information',
        //   items: [
        //     'momentjs/comenzando',
        //   ],
        // },
        {
          label: 'Moment.js',
          link: '/momentjs/comenzando/',
          icon: 'information',
          items: [
            'momentjs/comenzando',
            'momentjs/analisis',
            'momentjs/get-y-set',
            'momentjs/manipulando-fechas',
            'momentjs/mostrando-fechas',
            'momentjs/consultas',
            'momentjs/internacionalizacion',
            'momentjs/personalizacion',
            'momentjs/duraciones',
            'momentjs/utilidades',
            'momentjs/complementos',
            'momentjs/estado-del-proyecto',
          ],
        },
        {
          label: 'Dart',
          link: '/dart/tutoriales-y-codelabs/tutoriales/',
          icon: 'information',
          items: [
            'dart/tutoriales-y-codelabs/tutoriales',
            {
              label: 'Tutoriales & codelabs',
              items: [
                {
                  label: 'Codelabs',
                  items: [
                    'dart/tutoriales-y-codelabs/codelabs/codelabs',
                    'dart/tutoriales-y-codelabs/codelabs/dart-cheatsheet',
                    'dart/tutoriales-y-codelabs/codelabs/iterables',
                    'dart/tutoriales-y-codelabs/codelabs/async-await',
                  ],
                },
              ],
            },
            {
              label: 'Lenguaje',
              items: [
                'dart/lenguaje/conceptos-basicos',
                {
                  label: 'Sintaxis básica',
                  items: [
                    'dart/lenguaje/sintaxis-basica/variables'
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'TypeScript',
          link: '/typescript/comenzando/typescript-desde-cero/',
          icon: 'information',
          items: [
            {
              label: 'Comenzando',
              items: [
                'typescript/comenzando/typescript-desde-cero',
                'typescript/comenzando/typescript-en-5-minutos',
                'typescript/comenzando/typescript-en-5-minutos-poo',
                'typescript/comenzando/typescript-en-5-minutos-funcionales',
                'typescript/comenzando/herramientas-typescript-en-5-minutos',
              ],
            },
            {
              label: 'Handbook',
              items: [
                'typescript/handbook/intro',
                'typescript/handbook/tipos-basicos',
                'typescript/handbook/tipos-comunes',
                'typescript/handbook/narrowing',
                'typescript/handbook/funciones',
                'typescript/handbook/objetos',
                {
                  label: 'Manipulación de tipos',
                  items: [
                    'typescript/handbook/manipulacion-tipos/tipos-a-partir-de-tipos',
                    'typescript/handbook/manipulacion-tipos/tipos-genericos',
                    'typescript/handbook/manipulacion-tipos/operador-keyof',
                    'typescript/handbook/manipulacion-tipos/operador-typeof',
                    'typescript/handbook/manipulacion-tipos/tipos-de-acceso-indexado',
                    'typescript/handbook/manipulacion-tipos/tipos-condicionales',
                    'typescript/handbook/manipulacion-tipos/tipos-mapeados',
                    'typescript/handbook/manipulacion-tipos/tipos-literales-de-plantilla',
                  ],
                },
                'typescript/handbook/clases',
                'typescript/handbook/modulos',
              ],
            },

          ],
        },
      ]),
    ],
  }),
  tailwind({
    // Disable the default base styles:
    applyBaseStyles: false,
  })
  ],
  markdown: {
    remarkPlugins: [remarkHeadingID],
  },
});