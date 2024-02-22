---
linkTitle: "Módulos"
title: "Módulos - TypeScript en Español"
description: "Cómo maneja JavaScript la comunicación a través de los límites de los archivos."
weight: 9
type: docs
next: /typescript/reference/utility-types
---

# Módulos en TypeScript

JavaScript tiene una larga historia de diferentes formas de manejar el código modularizado.
TypeScript existe desde 2012 y ha implementado soporte para muchos de estos formatos, pero con el tiempo la comunidad y la especificación de JavaScript han convergido en un formato llamado ES Modules (o módulos ES6). Quizás la conozcas como la sintaxis `importa`/`export`.

{{< content-ads/top-banner >}}

ES Modules se agregó a la especificación de JavaScript en 2015 y, para 2020, tenía un amplio soporte en la mayoría de los navegadores web y runtimes de JavaScript.

Para enfocarte, el manual cubrirá tanto los módulos ES como su popular precursor CommonJS con sintaxis `module.exports =`, y puedes encontrar información sobre los otros patrones de módulos en la sección de referencia en [Módulos ↗](https://www.typescriptlang.org/docs/handbook/modules.html).

## Cómo se definen los módulos de JavaScript {#how-javascript-modules-are-defined}

En TypeScript, al igual que en ECMAScript 2015, cualquier archivo que contenga un `import` o `export` de nivel superior se considera un módulo.

Por el contrario, un archivo sin ninguna declaración de importación o exportación de nivel superior se trata como un script cuyo contenido está disponible en el ámbito global (y, por lo tanto, también para los módulos).

Los módulos se ejecutan dentro de su propio alcance, no en el alcance global.
Esto significa que las variables, funciones, clases, etc. declaradas en un módulo no son visibles fuera del módulo a menos que se exporten explícitamente utilizando una de las formas de exportación.
Por el contrario, para consumir una variable, función, clase, interfaz, etc. exportada desde un módulo diferente, debe importarse utilizando uno de las formas de importación.

## Lo que no es un módulo {#non-modules}

Antes de comenzar, es importante comprender qué considera TypeScript un módulo.
La especificación de JavaScript declara que cualquier archivo JavaScript sin una declaración `import`, `export` o `await` de nivel superior debe considerarse un script y no un módulo.

Dentro de un archivo de script, las variables y los tipos se declaran en el alcance global compartido, y se supone que usarás la opción [`outFile` ↗](https://www.typescriptlang.org/tsconfig#outFile) del compilador para unir múltiples archivos de entrada en un archivo de salida, o usa múltiples etiquetas `<script>` en tu HTML para cargar estos archivos (¡en el orden correcto!).

Si tienes un archivo que actualmente no tiene ningun `import` o `export`, pero quieres que sea tratado como un módulo, agrega la línea:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/KYDwDg9gTgLgBAbwL4G4g)

```ts
export {};
```

lo que cambiará el archivo para que sea un módulo que no exporta nada. Esta sintaxis funciona independientemente del objetivo de tu módulo.

## Módulos en TypeScript {#modules-in-typescript}

> Lectura adicional: [Impatient JS (Modules) ↗](https://exploringjs.com/impatient-js/ch_modules.html#overview-syntax-of-ecmascript-modules) y [MDN : Módulos de JavaScript ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
>

{{< content-ads/middle-banner-1 >}}

Hay tres cosas principales a considerar al escribir código basado en módulos en TypeScript:

- **Sintaxis**: ¿Qué sintaxis quiero usar para importar y exportar cosas?
- **Resolución del módulo**: ¿Cuál es la relación entre los nombres (o rutas) de los módulos y los archivos en el disco?
- **Objetivo de salida del módulo**: ¿Cómo debería verse mi módulo JavaScript emitido?

### Sintaxis de ES Module {#es-module-syntax}

Un archivo puede declarar una exportación principal a través de `export default`:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEDMEsBsFMB2BDAtvAXKAFvWsB7AOgBcBnAWACh4APABwICcTQATeSZAV1lcm6IAxiWgFEOPIQDqzWGwAUASlABvaqFBDxZAgiKEA5goBEACSkEANKADuctgEITSgNzUAvkA)

```ts
// @filename: hello.ts
export default function helloWorld() {
  console.log("Hello, world!");
}
```

Esto luego se importa a través de:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEDMEsBsFMB2BDAtvAXKAFvWsB7AOgBcBnAWACh4APABwICcTQATeSZAV1lcm6IAxiWgFEOPIQDqzWGwAUASlABvaqFBDxZAgiKEA5goBEACSkEANKADuctgEITSgNzUAvtRAQYCFOhY0IgctKSUVD4AtDFC3CQxUdTQqIwskvgEskzyoJBMBKigJkTAuJlEAFZkJu5U5TIOyq5AA)

```ts
import helloWorld from "./hello.js";
helloWorld();
```

Además de la exportación predeterminada, puedes tener más de una exportación de variables y funciones a través de `export` omitiendo `default`:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEDMEsBsFMB2BDAtvAXKVyAuALAZwDpdCBYAKHgA8AHAewCddQA3ZJ0O6UAXlABmYgEYALAG4qtRi1AJWhAI4BXTvAAqAdwb9QI4mJFTq9ZqwDGDRIVZ18vAQYBsxqtLNyLsZIUKgAJWREABMGVAA5FVQAI3gmAHEkeLxmUABvAF93U1lWSBVEC1xoa1BkGMIGWBVceAAKRGisJtj4gEoMqlBQaEhQRujQAB5QAAZOpnhcFSZEUFbQACpQAFo3Sh6pmbmF6JNMoA)

```ts
// @filename: maths.ts
export var pi = 3.14;
export let squareTwo = 1.41;
export const phi = 1.61;
 
export class RandomNumberGenerator {}
 
export function absolute(num: number) {
  if (num < 0) return num * -1;
  return num;
}
```

Estos se pueden usar en otro archivo mediante la sintaxis `import`:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEDMEsBsFMB2BDAtvAXKVyAuALAZwDpdCBYAKHgA8AHAewCddQA3ZJ0O6UAXlABmYgEYALAG4qtRi1AJWhAI4BXTvAAqAdwb9QI4mJFTq9ZqwDGDRIVZ18vAQYBsx6WbkXYyQoVAAlZEQAEwZUADkVVAAjeCYAcSQ4vGZQAG8AX3dZVkgVRAtcaGtQZGjCBlgVXHgACkQorAaYuIBKdKpQUGhIUHqo0AAeUAAGdqZ4XBUmRFBm0AAqUABaN0ouiamZuaiTLMoQCBgEFHQsZDo6UgoDsGX7i2r75apoVBz07mgAGm4HX7KFSqNVAGVAkCYYVAACJiMAcAQSAArQjQkxUKw2SrwYiwBgAc1qPFaJkxtlK5QACg49IDKtU6vZoCSqIcuqAAHoAfiAA)

```ts
import { pi, phi, absolute } from "./maths.js";
 
console.log(pi);
const absPhi = absolute(phi);
        
const absPhi: number
```

{{< content-ads/middle-banner-2 >}}

### Sintaxis de importación adicional {#additional-import-syntax}

Se puede cambiar el nombre de una importación usando un formato como `import {old as new}`:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEDMEsBsFMB2BDAtvAXKVyAuALAZwDpdCBYAKHgA8AHAewCddQA3ZJ0O6UAXlABmYgEYALAG4qICDAQp0WZHTqkKlGQFptAYwCuubZqrRUjFqADe3XskKhAA8CgAvqEhMGqUACJiwHAQkAFaE3lKUVDoMiIQMCMSwDADmABQOAJThMqA5ubkAegD8QA)

```ts
import { pi as π } from "./maths.js";
 
console.log(π);
           
(alias) var π: number
import π
```

Puedes mezclar y combinar la sintaxis anterior en un solo `import`:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEDMEsBsFMB2BDAtvAXKVyAuALAZwDpdCBYAKHgA8AHAewCddQBjBxQ1u6UAXlABmYgEYALAG4qtRi1AATeJGQBXWKzaxkhQqABKyRAoaoAcqtQAjeEwDiSW3magA3gF8qVEBBgIU6FjIdHSkFJTQqHKshsamFta2DohOuMwANG6gvKA6oIADwKDuoJBMpqAARMTAOAQkAFaEFdKUVLEm5pY29o5MzkwtPgB6APxelBxcDAjEsAwA5gAU+QCUg2Cgm1tbo0A)

```ts
// @filename: maths.ts
export const pi = 3.14;
export default class RandomNumberGenerator {}
 
// @filename: app.ts
import RandomNumberGenerator, { pi as π } from "./maths.js";
 
RandomNumberGenerator;
         
(alias) class RandomNumberGenerator
import RandomNumberGenerator
 
console.log(π);
           
(alias) const π: 3.14
import π
```

Puedes tomar todos los objetos exportados y colocarlos en un único espacio de nombres usando `* as name`:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEDMEsBsFMB2BDAtvAXKVyAuALAZwDpdCBYAKHgA8AHAewCddQA3ZJ0O6UAXlABmYgEYALAG4qtRi1AJWhAI4BXTvAAqAdwb9QI4mJFTq9ZqwDGDRIVZ18vAQYBsxqtLNzIKxBdzRrUGQAI0IGWBVceAAKRBVULDjUYPgmAEpQAG8qUFBoSFBY+NAAHlAABgymeFwVJkRQJNAAKlAAWjdKXOra+sb4kwBfKhB2traLSPG2kbAoOCQ0TCC6OlIKSmhUWVZW5EJsPHxQSCYGVFAAImJgHAISACtCS5MqKxtw+GJYBgBzaLu+GIPDSJnetm4DEI0H8bHgAAUHHpAcQQmEIlEAUdgQ5QbNcrkAHoAfiAA)

```ts
// @filename: app.ts
import * as math from "./maths.js";
 
console.log(math.pi);
const positivePhi = math.absolute(math.phi);
          
const positivePhi: number
```

Puedes importar un archivo y *no* incluir ninguna variable en tu módulo actual a través de `import "./file"`:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEDMEsBsFMB2BDAtvAXKVyAuALAZwDpdCBYAKHgA8AHAewCddQA3ZJ0O6UAXlABmYgEYALAG4qIUAFp5AYwCuuebOlgocJGkyhkdOqQqVoqRi1AAiYsBwESAK0JWplKgoaJCDBMVgMAOYAFFbC4lYAlBJAA)

```ts
// @filename: app.ts
import "./maths.js";
 
console.log("3.14");
```

En este caso, el `import` no hace nada. Sin embargo, se evaluó todo el código en `maths.ts`, lo que podría provocar efectos secundarios que afecten a otros objetos.

#### Sintaxis específica de ES Module de TypeScript {#typescript-specific-es-module-syntax}

{{< content-ads/middle-banner-3 >}}

Los tipos se pueden exportar e importar usando la misma sintaxis que los valores de JavaScript:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEDMEsBsFMB2BDAtvAXKZjqubAHQAuAzgLABQ8AHgA4D2ATsaMQJ53ygDCyrAXlABvUACMm8eABMspYk2iIA5gG5Q7eMiYB5SACFoLABZZEAV1Rj4TUAF9VVKrUYtQS4jcjIAxtwAiDMoiVKDikjKkcgpKygDaALqOlGGa2nqGJmaW1kzJdk6UIBAwCCjoWMh0dCQUlHiurKJ8xAA0oIHBdqCQTAyooABEhMA4eASEAFakg8kcXKAAgrj4sKSgQi2gAD4dQapAA)

```ts
// @filename: animal.ts
export type Cat = { breed: string; yearOfBirth: number };
 
export interface Dog {
  breeds: string[];
  yearOfBirth: number;
}
 
// @filename: app.ts
import { Cat, Dog } from "./animal.js";
type Animals = Cat | Dog;
```

TypeScript ha ampliado la sintaxis `import` con dos conceptos para declarar la importación de un tipo:

###### `import type` {#import-type}

Que es una declaración de importación que *solo* puede importar tipos:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEDMEsBsFMB2BDAtvAXKZjqubAHQAuAzgLABQ8AHgA4D2ATsaMQJ53ygDCyrAXlABvUACMm8eABMspYk2iIA5gG5Q7eMiYB5SACFoLABZZEAV1Rj4TUAF9VVWoxZtO3ACINloIaIlS0qRyCkrKANoAuuqa2nqGJmaW1rYOTvTMrADGDIjyoFmS-PB8xAByaNxCABQAlL4AfKAARJCw5pCQ7M2OlFQgEDAIKOhYAG4E0NIkFJR4LqwcXCK8-AA0oF4+dqCQTAyoLYTAOHgEhABWpD3pC27LAIK4+LCkvqusAD6b3r39YFA4EhKlhkHQ6DN-hAbPsmMFQABGADMADYEVR5pl7txRIUtMQSvwKuh7Lt9odmsdTi9Ltdejk8qwRlUCkUCaVifA6qogA)

```ts
// @filename: animal.ts
export type Cat = { breed: string; yearOfBirth: number };
export type Dog = { breeds: string[]; yearOfBirth: number };
export const createCatName = () => "fluffy";
 
// @filename: valid.ts
import type { Cat, Dog } from "./animal.js";
export type Animals = Cat | Dog;
 
// @filename: app.ts
import type { createCatName } from "./animal.js";
const name = createCatName();
```

```text {filename="Error generado"}
'createCatName' cannot be used as a value because it was imported using 'import type'.
```

###### Importaciones `type` en línea {#inline-type-imports}

TypeScript 4.5 también permite que las importaciones individuales tengan el prefijo `type` para indicar que la referencia importada es un tipo:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEDMEsBsFMB2BDAtvAXKZjqubAHQAuAzgLABQ8AHgA4D2ATsaMQJ53ygDCyrAXlABvUACMm8eABMspYk2iIA5gG5Q7eMiYB5SACFoLABZZEAV1Rj4TUAF9VVWoxZtO3ACINloIaIlS0qRyCkrKANoAuuqa2nqGJmaW1rYOTvTMrADGDIjyoFmS-PB8xAByaNxCABQAlL4AfKAARJCw5pCQ7M2OlCCgALRDWebEQwNU-VBwSJVYyHR0JBSUeC6sooVaxCX8FegANG5cvPxHHCdePnagkEwMqC2EwDh4BIQAVqQ9VOnrx9wAIK4fCwUi+U6sAA+oCuvRyeVYKHQEK2xVK+3gdVUQA)

```ts
// @filename: app.ts
import { createCatName, type Cat, type Dog } from "./animal.js";
 
export type Animals = Cat | Dog;
const name = createCatName();
```

Juntos permiten que un transpilador que no sea TypeScript como Babel, swc o esbuild sepa qué importaciones se pueden eliminar de forma segura.

#### Sintaxis de ES Module con comportamiento CommonJS {#es-module-syntax-with-commonjs-behavior}

{{< content-ads/middle-banner-4 >}}

TypeScript tiene una sintaxis de ES Module que *directamente* se correlaciona con un `require` de CommonJS y AMD. Las importaciones usando ES Module son *en la mayoría de los casos* iguales que el `require` de esos entornos, pero esta sintaxis garantiza que tengas una coincidencia 1 a 1 en tu archivo TypeScript con la salida de CommonJS:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PQgEB4CcFMDNpgOwMbVAFwJ4AdoGcBeAIkQHsATaI0YAPgFgAoMAAQFsKBXAG2gC5QyUmw6IAVniZgAtLOSd0s6UwCWbbKUjpQsPKAKgYAR04qYACiK6iASgDcTIYjzahlfTrwA6GAENyAGIqvADKmCiWABbQ3NykXuh4RAA0oEQKsAActnZAA)

```ts
import fs = require("fs");
const code = fs.readFileSync("hello.ts", "utf8");
```

Puedes obtener más información sobre esta sintaxis en la [página de referencia de módulos ↗](https://www.typescriptlang.org/docs/handbook/modules.html#export--and-import--require).

## Sintaxis CommonJS {#commonjs-syntax}

CommonJS es el formato en el que se entregan la mayoría de los módulos de npm. Incluso si estás escribiendo usando la sintaxis de ES Module anterior, tener una breve comprensión de cómo funciona la sintaxis de CommonJS te ayudará a depurar más fácilmente.

#### Exportando {#exporting}

Los identificadores se exportan configurando la propiedad `exports` en un global llamado `module`.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PQgEB4CcFMDNpgOwMbVAFwJ4AdoGcBeAIkQHsATaI0YAPgFgAoMAWjeQFd02WnYOU6AJalEoAIYAjPKQA2XaAApEHALYAuUCtWSEASlABvJqFBDYoZWoigADAZjoOkMdtAAqUCwCMAbhOgjs6uav6MAL5MTKoUHLLQAHTQAB7YpJDoeKAERgHYQpoAzAneACwANAF4AI4c4jAAKgDupJreCaXelYym2AAWBaDtAGxdAVIy8ujQ3eG+QA)

```ts
function absolute(num: number) {
  if (num < 0) return num * -1;
  return num;
}
 
module.exports = {
  pi: 3.14,
  squareTwo: 1.41,
  phi: 1.61,
  absolute,
};
```

Entonces estos archivos se pueden importar mediante una declaración `require`:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFsHsBMFcA2BTAXKAxtSMB2ArAZwFgAoECAMwEsVcBDSNUSegFwAtCA6Nk8igB4ATskrJRuDMlBsAngAdkhALwAiXHGRrQwAHxlK8KW2rRcoegCNC0RPDbIAFLniR0ryFYkBKUAG8yUFBqSlAXN1BBUAAGP1E2eGELT1AAKlAAWgBGAG4g0ASklLd80gBfMjIYBBRuZAAPBWhhPlAVAIKFanQAZm5sgBYAGgLCAEd4elEAFQB3aHRs7kHs0dJghQ4e0GWANjWC61t7R3XysopwGjpGZmpcWEbefgpM94wHd8yyLFxCNgsdhcdqFZCTaiiJxqbjAVicQhqHxleFcbjdS5gYKgAB6AH4gA)

```ts
const maths = require("./maths");
maths.pi;
      
any
```

O puedes simplificar un poco usando la función de desestructuración en JavaScript:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFsHsBMFcA2BTAXKAxtSMB2ArAZwFgAoECAMwEsVcBDSNUSegFwAtCA6Nk8igB4ATskrJRuDMlBsAngAdkhALwAiXHGRrQwAHxlK8KW2rRcoegCNC0RPDbIAFLniR0ryFYkBKUAG8yUFBqSlAXN1BBUAAGP1E2eGELT1AAKlAAWgBGAG4g0ASklLd80gBfMjIYBBRuZAAPBWhhPlAVAIKFanQAZm5sgBYAGgLCAEd4elEAFQB3aHRs7kHs0dJghQ4e0GWANjWC61t7R3XysopwGjpGZmpcWEbefgpM94wHd8yyLFxCNgBUATKazBagcrtQrISbUURONTcYCsTiENQ+Mog6bIebQS5gAB6AH4gA)

{{< content-ads/middle-banner-5 >}}

```ts
const { squareTwo } = require("./maths");
squareTwo;
   
const squareTwo: any
```

### Interoperabilidad de CommonJS y ES Module {#commonjs-and-es-modules-interop}

Existe una falta de coincidencia en las características entre CommonJS y ES Module con respecto a la distinción entre una importación predeterminada y una importación de objeto de espacio de nombres de módulo. TypeScript tiene un indicador de compilador para reducir la fricción entre los dos conjuntos diferentes de restricciones con [`esModuleInterop` ↗](https://www.typescriptlang.org/tsconfig#esModuleInterop).

## Opciones de resolución de módulo de TypeScript {#typescripts-module-resolution-options}

La resolución de módulo es el proceso de tomar una cadena de la declaración `import` o `require` y determinar a qué archivo se refiere esa cadena.

TypeScript incluye dos estrategias de resolución: Classic y Node. Classic, el valor predeterminado cuando la opción del compilador [`module` ↗](https://www.typescriptlang.org/tsconfig#module) no es `commonjs`, se incluye para compatibilidad con versiones anteriores.
La estrategia Node replica cómo funciona Node.js en modo CommonJS, con comprobaciones adicionales para `.ts` y `.d.ts`.

Hay muchos indicadores de TSConfig que influyen en la estrategia del módulo dentro de TypeScript: [`moduleResolution` ↗](https://www.typescriptlang.org/tsconfig#moduleResolution), [`baseUrl` ↗](https://www.typescriptlang.org/tsconfig#baseUrl), [`paths` ↗](https://www.typescriptlang.org/tsconfig#paths), [`rootDirs` ↗] (https://www.typescriptlang.org/tsconfig.html#rootDirs).

Para obtener detalles completos sobre cómo funcionan estas estrategias, puedes consultar la página de referencia [Resolución de módulo ↗](https://www.typescriptlang.org/docs/handbook/modules/reference.html#the-moduleresolution-compiler-option).

## Opciones de salida de módulo de TypeScript {#typescripts-module-output-options}

Hay dos opciones que afectan la salida de JavaScript emitida:

- [`target` ↗](https://www.typescriptlang.org/tsconfig#target) que determina qué características de JS se reducen de nivel (se convierten para ejecutarse en runtimes de JavaScript más antiguos) y que quedan intactos
- [`module` ↗](https://www.typescriptlang.org/tsconfig#module) que determina qué código se utiliza para que los módulos interactúen entre sí

Qué [`target` ↗](https://www.typescriptlang.org/tsconfig#target) usas está determinado por las funciones disponibles en el runtime de JavaScript que esperas ejecutar. Eso podría ser: el navegador web más antiguo que admite, la versión más baja de Node.js que esperas ejecutar o podría provenir de restricciones únicas de tu runtime, como Electron, por ejemplo.

Toda la comunicación entre módulos ocurre a través de un cargador de módulos, la opción del compilador [`module` ↗](https://www.typescriptlang.org/tsconfig#module) determina cuál se usa.
En tiempo de ejecución, el cargador de módulos es responsable de localizar y ejecutar todas las dependencias de un módulo antes de ejecutarlo.

Por ejemplo, aquí hay un archivo TypeScript que usa la sintaxis de ES Module, que muestra algunas opciones diferentes para [`module` ↗](https://www.typescriptlang.org/tsconfig#module):

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEDMEsBsFMB2BDAtvAXKAxge0QM4AuyiRBAdOQLABQ8AHgA64BORO+xoAbsrAFd4AeUgAFaKAC8oAMwUAjABYATAG46ICDAQp0WaIgAmjKgU1gAtNewCi1y3WioW7UAG9e-IaImgAvqCQrLiooABEFMB4hCRklABWBOEatHSMrhwx3EQA7rh+MnyCIuKSAFSg6kA)

{{< content-ads/middle-banner-6 >}}

```ts
import { valueOfPi } from "./constants.js";
 
export const twoPi = valueOfPi * 2;
```

#### `ES2020` {#es2020}

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEGcAsHsHcCiBbAlgFwLACgQWbACYCuANgKYBco5kATAAyM57gB2siATl7F5DlTIADn3SgA3qABuAQ1LFyAeQBmABVSgAvqBW9koAEQA6YAGNYbSOllt0kYwCtIhgNw4c5AB6iu4i1bi6PCwGqAAvDLyiqphAFSgdK5AA)

```ts
import { valueOfPi } from "./constants.js";
export const twoPi = valueOfPi * 2;
 
```

#### `CommonJS` {#commonjs}

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEGcAsHsHcCiBbAlgFwLACgQWbACYCuANgKYBcoAxrMgQHYBWkOe4jsiATj7DzbZUyAA4D0oAN6gAbgENSxcgHkAZgAVUoAL6g1-ZKABEAOmB1GkdPMbpIp1sYDcOHOQAe4npMvXQ6PCwWqAAvHKKyuohAFSgAEzOQA)

```ts
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoPi = void 0;
const constants_js_1 = require("./constants.js");
exports.twoPi = constants_js_1.valueOfPi * 2;
 
```

#### `UMD` {#umd}

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEGcAsHsHcCiBbAlgFwLACgQWbACYCuANgKYBcoxyhOe4AdrIgE5uxuQ6rIAOXdKADeoAG4BDUsXIB5AGYAFVKAC+oBZ2SgARADpgAY1hNI6SU3SR9AK0i6A3DhzkAHoLbCTZ4eniwKqAAvBLSsopBAFSgAEyOQA)

```ts
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./constants.js"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.twoPi = void 0;
    const constants_js_1 = require("./constants.js");
    exports.twoPi = constants_js_1.valueOfPi * 2;
});
 
```

> Ten en cuenta que ES2020 es efectivamente el mismo que el `index.ts` original.
>

Puedes ver todas las opciones disponibles y cómo se ve el código JavaScript emitido en la [Referencia TSConfig para `módule` ↗](https://www.typescriptlang.org/tsconfig#module).

## TypeScript namespaces {#typescript-namespaces}

TypeScript tiene su propio formato de módulo llamado `namespaces` que es anterior al estándar de ES Module. Esta sintaxis tiene muchas características útiles para crear archivos de definición complejos y todavía se usa activamente [en DefinitelyTyped ↗](https://github.com/DefinitelyTyped/DefinitelyTyped). Si bien no están obsoletas, la mayoría de las funciones en los espacios de nombres existen en ES Module y te recomendamos que las utilices para alinearte con la dirección de JavaScript. Puedes obtener más información sobre los espacios de nombres en [la página de referencia de espacios de nombres ↗](https://www.typescriptlang.org/docs/handbook/namespaces.html).

{{< content-ads/bottom-banner >}}
