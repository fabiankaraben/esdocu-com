---
linkTitle: "Tipos a partir de tipos"
title: "Crear tipos a partir de tipos - TypeScript en Español"
description: "Una descripción general de las formas en que puedes crear más tipos a partir de tipos existentes."
weight: 1
type: docs
prev: /typescript/handbook/objects
noindex: true
draft: true
---

# Creando tipos a partir de tipos

El sistema de tipos de TypeScript es muy poderoso porque permite expresar tipos *en términos de otros tipos*.

{{< content-ads/top-banner >}}

La forma más simple de esta idea son los generics. Además, tenemos una amplia variedad de *operadores de tipo* disponibles para usar.
También es posible expresar tipos en términos de *valores* que ya tenemos.

Al combinar varios operadores de tipo, podemos expresar operaciones y valores complejos de una manera concisa y fácil de mantener.
En esta sección cubriremos formas de expresar un nuevo tipo en términos de un tipo o valor existente.

- [Generics](/typescript/handbook/manipulacion-tipos/tipos-genericos) - Tipos que toman parámetros
- [Operador de tipo keyof ↗](https://www.typescriptlang.org/docs/handbook/2/keyof-types.html) - Uso del operador `keyof` para crear nuevos tipos
- [Operador de tipo typeof](/typescript/handbook/manipulacion-tipos/operador-typeof) - Uso del operador `typeof` para crear nuevos tipos
- [Tipos de acceso indexados ↗](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html) - Uso de la sintaxis `Type['a']` para acceder a un subconjunto de un tipo
- [Tipos condicionales ↗](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html) - Tipos que actúan como declaraciones if en el sistema de tipos
- [Tipos asignados ↗](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html) - Creación de tipos asignando cada propiedad en un tipo existente
- [Tipos literales de plantilla ↗](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html) - Tipos asignados que cambian propiedades a través de cadenas literales de plantilla

{{< content-ads/bottom-banner >}}
