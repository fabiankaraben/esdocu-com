---
linkTitle: "Herramientas TypeScript"
title: "Herramientas de TypeScript en 5 minutos - TypeScript en Español"
description: "Un tutorial para entender cómo crear un pequeño sitio web con TypeScript."
weight: 5
type: docs
next: /typescript/handbook/intro
---

# Herramientas de TypeScript en 5 minutos

Comencemos creando una aplicación web simple con TypeScript.

{{< content-ads/top-banner >}}

## Instalando TypeScript {#installing-typescript}

Hay dos formas principales de agregar TypeScript a tu proyecto:

- A través de npm (el administrador de paquetes de Node.js)
- Instalando los plugins de Visual Studio de TypeScript

Visual Studio 2017 y Visual Studio 2015 Update 3 incluyen soporte para el lenguaje TypeScript de forma predeterminada, pero no incluyen el compilador TypeScript, `tsc`.
Si no instalaste TypeScript con Visual Studio, aún puedes [descargarlo ↗](https://www.typescriptlang.org/download).

Para usuarios de npm:

```shell
> npm install -g typescript
```

## Construyendo tu primer archivo TypeScript {#building-your-first-typescript-file}

En tu editor, escribe el siguiente código JavaScript en `greeter.ts`:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEDsHsEkFsAOAbAlgY1QFwIKQJ4BcoAZgIbIDOApgFAkCuk6Wq0koA5gE7XVbVuACkSDK7AJSgA3rVCheWBtw4AiABLVkyaABpQq0AGpQo7uMgBuWgF9atZP1AMa3UAF4DAKTKRqoAFVXVWtaABNodAZ4akgsADoAI2gw-HiBAA8sAGF2ATiPLl5+QSEXQQlLIA)

```ts
function greeter(person) {
  return "Hello, " + person;
}
 
let user = "Jane User";
 
document.body.textContent = greeter(user);
```

## Compilando tu código {#compiling-your-code}

Usamos una extensión `.ts`, pero este código es solo JavaScript.
Podrías haber copiado/pegado esto directamente desde una aplicación JavaScript existente.

En la línea de comando, ejecuta el compilador TypeScript:

```shell
tsc greeter.ts
```

El resultado será un archivo `greeter.js` que contiene el mismo JavaScript que ingresaste.
¡Estamos activamente usando TypeScript en nuestra aplicación JavaScript!

{{< content-ads/middle-banner-1 >}}

Ahora podemos comenzar a aprovechar algunas de las nuevas herramientas que ofrece TypeScript.
Agrega una anotación de tipo `: string` al argumento de la función `person` como se muestra aquí:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/GYVwdgxgLglg9mABAcwE4FN1XagFABxwGcEAuRIqVGMZASkQG8AoRRDKEVJAIgAl0AG0FwANIh6IA1IkKoSYANzMAvs2aCsiEERyIAvBIBSAQzDpEAVV2oey5gBM4EEAFt0YKADoARnAcAnl7YAB5QAMII2J4GKBhYOLg6OHSKQA)

```ts
function greeter(person: string) {
  return "Hello, " + person;
}
 
let user = "Jane User";
 
document.body.textContent = greeter(user);
```

## Escribe anotaciones {#type-annotations}

Las anotaciones de tipo en TypeScript son formas ligeras de registrar el contrato previsto de la función o variable.
En este caso, pretendemos que la función de bienvenida se llame con un único parámetro de cadena.
Podemos intentar cambiar el mensaje de bienvenida para que pase un array en su lugar:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGYAsBWAUAGYCuAdgMYAuAlnCaAObSSQUwAUADjIraohdCol6ASlABvPKFBMKRaHQBEACUgAbNXAA0oRaADUoLkloBuPAF88eNS1BFEMUAF5QAbQAMOgIw60AXXM8ABM4MiIAW0gSCgA6ACM4YIBPWNYADwoAYVpWGJcGJhZ2BxgRUyA)

```ts
function greeter(person: string) {
  return "Hello, " + person;
}
 
let user = [0, 1, 2];
 
document.body.textContent = greeter(user);
```

```text {filename="Error generado"}
Argument of type 'number[]' is not assignable to parameter of type 'string'.
```

Al volver a compilar, ahora verás un error:

```shell
error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.
```

De manera similar, intenta eliminar todos los argumentos de la llamada de bienvenida 'greeter'.
TypeScript te permitirá saber que has llamado a esta función con una cantidad inesperada de parámetros.
En ambos casos, TypeScript puede ofrecer análisis estático basado tanto en la estructura de tu código como en las anotaciones de tipo que proporcionas.

Observa que aunque hubo errores, el archivo `greeter.js` aún se crea.
Puedes utilizar TypeScript incluso si hay errores en tu código. Pero en este caso, TypeScript advierte que tu código probablemente no se ejecutará como se esperaba.

## Interfaces {#interfaces}

Desarrollemos más nuestra muestra. Aquí utilizamos una interfaz que describe objetos que tienen campos `firstName` y `lastName`.
En TypeScript, dos tipos son compatibles si su estructura interna es compatible.
Esto nos permite implementar una interfaz simplemente teniendo la forma que requiere, sin una cláusula explícita `implements`.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgArQM4HsTIN4BQyyMwUGYAcnALYQBcyFUoA5gNxHIA2cF1dRszacAvgQIwAriARhgOZKygQIkKAAoADphyN05HAEp8XFWClRcAIgASEbtywAaZNeQBqZDsMgAdKTkVLQoXu7uXj7Y-rz8IWIS3GrIUhjQyAC8+CRkcYJuAFJwIBDWrrHB+dYAqmlQ7qKcBAAmWAhSdOB+AEZYzQCefpAAHmAAwjiQ4JlKKmrQGqnQRuxAA)

{{< content-ads/middle-banner-2 >}}

```ts
interface Person {
  firstName: string;
  lastName: string;
}
 
function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}
 
let user = { firstName: "Jane", lastName: "User" };
 
document.body.textContent = greeter(user);
```

## Clases {#classes}

Finalmente, ampliemos el ejemplo por última vez con clases.
TypeScript admite nuevas funciones en JavaScript, como la compatibilidad con la programación orientada a objetos basada en clases.

Aquí vamos a crear una clase `Student` con un constructor y algunos campos públicos.
Observa que las clases y las interfaces funcionan bien juntas, lo que permite al programador decidir cuál es el nivel correcto de abstracción.

También cabe destacar que el uso de `public` en los argumentos del constructor es una abreviatura que nos permite crear automáticamente propiedades con ese nombre.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAEDKAuBXAJgUwHb2gbwFDWgDNEQQA5MAW1QC5oJ4AnAS3QHMBufaYAe3QaNEweL0YAKbgQAOiAEYhmwIs0YMK1OoNZsANFOiyFS6JWbJkIVAEl0zeMzAgtTHfoIz5i5eHVVa9K7s3ACUOAbwABbMEAB0xKQaqNAAvCpq8EnQANTQAET5OabmljZ2Dk5FBQW5vpn+XAQAvrgtuKzwqIyEYMDJAApdEPzhBISqfpqBLOyN0HVJLjOcrbi4xOgizCNsjKionRLSQ-x0g2r8YXgEe0iM6PkAEqikvLqFuccX6PET9dRVD6GE4-BYNVa4KxYRAQLqpaDoVAAdzgSDQmHEeQAUmBEXl3nkALKxfH5ACqsMYeRCXFwyF4wEQ1EwsTkvGQAE9Yp0AB7wADC-E6mHhu32h3EMK6NKAA)

```ts
class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}
 
interface Person {
  firstName: string;
  lastName: string;
}
 
function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}
 
let user = new Student("Jane", "M.", "User");
 
document.body.textContent = greeter(user);
```

Vuelve a ejecutar `tsc greeter.ts` y verás que el JavaScript generado es el mismo que el código anterior.
Las clases en TypeScript son solo una abreviatura del mismo OO basado en prototipos que se usa con frecuencia en JavaScript.

## Ejecutando tu aplicación web TypeScript {#running-your-typescript-web-app}

Ahora escribe lo siguiente en `greeter.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>TypeScript Greeter</title>
  </head>
  <body>
    <script src="greeter.js"></script>
  </body>
</html>
```

Abre `greeter.html` en el navegador para ejecutar tu primera aplicación web TypeScript simple.

Opcional: abre `greeter.ts` en Visual Studio o copia el código en el playground de TypeScript.
Puedes pasar el cursor sobre los identificadores para ver sus tipos.
Ten en cuenta que en algunos casos estos tipos se deducen automáticamente.
Vuelve a escribir la última línea y ve las listas de finalización y la ayuda de parámetros según los tipos de elementos DOM.
Coloca el cursor sobre la referencia a la función de bienvenida y presione F12 para ir a su definición.
Ten en cuenta también que puedes hacer clic derecho en un símbolo y utilizar la refactorización para cambiarle el nombre.

La información de tipo proporcionada funciona junto con las herramientas para trabajar con JavaScript a escala de aplicación.
Para obtener más ejemplos de lo que es posible en TypeScript, consulta la sección Ejemplos del sitio web.

![Imagen de Visual Studio](/assets/typescript/images/docs/greet_person.png)

{{< content-ads/bottom-banner >}}
