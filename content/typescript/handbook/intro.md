---
linkTitle: "El Handbook de TypeScript"
title: "El Handbook de TypeScript - TypeScript en Español"
description: "Tu primer paso para aprender TypeScript."
weight: 1
type: docs
prev: /typescript/get-started/typescript-tooling-in-5-minutes
---

# El manual de TypeScript

{{< content-ads/top-banner >}}

## Acerca de este manual {#about-this-handbook}

Más de 20 años después de su introducción en la comunidad de programación, JavaScript es ahora uno de los lenguajes multiplataforma más extendidos jamás creados. Comenzando como un pequeño lenguaje de scripting para agregar interactividad trivial a las páginas web, JavaScript ha crecido hasta convertirse en un lenguaje de elección para aplicaciones frontend y backend de todos los tamaños. Si bien el tamaño, el alcance y la complejidad de los programas escritos en JavaScript han crecido exponencialmente, la capacidad del lenguaje JavaScript para expresar las relaciones entre diferentes unidades de código no lo ha hecho. Combinado con la semántica de tiempo de ejecución bastante peculiar de JavaScript, este desajuste entre el lenguaje y la complejidad del programa ha hecho que el desarrollo de JavaScript sea una tarea difícil de gestionar a escala.

Los tipos más comunes de errores que escriben los programadores se pueden describir como errores de tipo: se usó un cierto tipo de valor donde se esperaba un tipo diferente de valor. Esto podría deberse a errores tipográficos simples, falta de comprensión de la API de una biblioteca, suposiciones incorrectas sobre el comportamiento del tiempo de ejecución u otros errores. El objetivo de TypeScript es ser un verificador de tipos estático para programas JavaScript; en otras palabras, una herramienta que se ejecuta antes de que se ejecute tu código (estático) y garantiza que los tipos del programa sean correctos (verificados).

Si llegas a TypeScript sin experiencia en JavaScript, con la intención de que TypeScript sea tu primer lenguaje, te recomendamos que primero comiences a leer la documentación en el [Tutorial de aprendizaje de JavaScript de Microsoft ↗](https://developer.microsoft.com/javascript/) o leas [JavaScript en Mozilla Web Docs ↗](https://developer.mozilla.org/docs/Web/JavaScript/Guide).
Si tienes experiencia en otros lenguajes, deberías poder aprender la sintaxis de JavaScript con bastante rapidez leyendo el manual.

## ¿Cómo está estructurado este manual? {#how-is-this-handbook-structured}

El manual está dividido en dos secciones:

- **El Manual**
   El Manual de TypeScript pretende ser un documento completo que explique TypeScript a los programadores cotidianos. Puedes leer el manual yendo de arriba a abajo en la navegación de la izquierda.
   Debes esperar que cada capítulo o página te proporcione una sólida comprensión de los conceptos dados. El Manual de TypeScript no es una especificación completa del lenguaje, pero pretende ser una guía completa de todas las características y comportamientos del lenguaje.
   Un lector que complete el tutorial debería poder:
   - Leer y comprender la sintaxis y los patrones de TypeScript de uso común.
   - Explicar los efectos de las opciones importantes del compilador.
   - Predecir correctamente el comportamiento del sistema de tipos en la mayoría de los casos.
   En aras de la claridad y la brevedad, el contenido principal del Manual no explorará todos los casos extremos o minucias de las características que se tratan. Puedes encontrar más detalles sobre conceptos particulares en los artículos de referencia.
- **Archivos de referencia**
   La sección de referencia debajo del manual en la navegación está diseñada para proporcionar una comprensión más rica de cómo funciona una parte particular de TypeScript. Puedes leerlo de arriba a abajo, pero cada sección tiene como objetivo proporcionar una explicación más profunda de un concepto único, lo que significa que no existe ningún objetivo de continuidad.

### Lo que no es {#non-goals}

El Manual también pretende ser un documento conciso que pueda leerse cómodamente en unas pocas horas. Ciertos temas no se cubrirán para ser breves.

Específicamente, el manual no presenta completamente los conceptos básicos de JavaScript como funciones, clases y closures. Cuando corresponda, incluiremos enlaces a lecturas previas que puedes utilizar para profundizar en esos conceptos.

El Manual tampoco pretende reemplazar una especificación de lenguaje. En algunos casos, se omitirán los casos extremos o las descripciones formales de comportamiento en favor de explicaciones de alto nivel y más fáciles de entender. En cambio, hay páginas de referencia separadas que describen de manera más precisa y formal muchos aspectos del comportamiento de TypeScript. Las páginas de referencia no están destinadas a lectores que no estén familiarizados con TypeScript, por lo que pueden utilizar terminología avanzada o temas de referencia sobre los que aún no has leído.

Finalmente, el manual no cubrirá cómo interactúa TypeScript con otras herramientas, excepto cuando sea necesario. Temas como cómo configurar TypeScript con webpack, rollup, parcel, react, babel, closure, lerna, rush, bazel, preact, vue, angular, svelte, jquery, yarn o npm están fuera del alcance; puedes encontrar estos recursos en otros lugares en la red.

## Comenzando {#get-started}

Antes de comenzar con [Conceptos básicos](/typescript/handbook/tipos-basicos), te recomendamos leer una de las siguientes páginas introductorias. Estas introducciones tienen como objetivo resaltar las similitudes y diferencias clave entre TypeScript y tu lenguaje de programación favorito, y aclarar conceptos erróneos comunes específicos de esos lenguajes.

- [TypeScript para el nuevo programador](/typescript/comenzando/typescript-desde-cero)
- [TypeScript para programadores de JavaScript](/typescript/comenzando/typescript-en-5-minutos)
- [TypeScript para programadores de Java/C#](/typescript/comenzando/typescript-en-5-minutos-poo)
- [TypeScript para programadores funcionales](/typescript/comenzando/typescript-en-5-minutos-funcionales)

De lo contrario, salta a [Conceptos básicos](/typescript/handbook/tipos-basicos).

{{< content-ads/bottom-banner >}}
