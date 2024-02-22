---
linkTitle: "Clases"
title: "Clases - TypeScript en Español"
description: "How classes work in TypeScript."
weight: 8
type: docs
---

# Clases en TypeScript

> Lectura previa: [Clases (MDN) ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
>

{{< content-ads/top-banner >}}

TypeScript ofrece soporte completo para la palabra clave `class` introducida en ES2015.

Al igual que con otras características del lenguaje JavaScript, TypeScript agrega anotaciones de tipo y otras sintaxis para permitirte expresar relaciones entre clases y otros tipos.

## Miembros de clases {#class-members}

Aquí está la clase más básica, una vacía:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAEAKD2BLAdgF2gbwL5A)

```ts
class Point {}
```

Esta clase aún no es muy útil, así que comencemos a agregar algunos miembros.

### Campos {#fields}

Una declaración de campo crea una propiedad pública editable en una clase:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEGcBcCcEsDG0AKsD2AHApraBPASQDt5p4BDAG3gC8Lz1iAuUAM2smwFgAoRKhUiRQKdPGLRQAbz6hQAD1bEArgFsARrgDcc0PmXqtsXbwC+fPoiYxQmKQF5QxbAHdR4yQAoAlKfsAdAqgTgAM-tAB+CGg4UA)

```ts
class Point {
  x: number;
  y: number;
}
 
const pt = new Point();
pt.x = 0;
pt.y = 0;
```

Al igual que con otras ubicaciones, la anotación de tipo es opcional, pero será implícitamente `any` si no se especifica.

Los campos también pueden tener *inicializadores*; estos se ejecutarán automáticamente cuando se cree una instancia de la clase:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAEAKD2BLAdgF2gbwLAChrQA9oBeaABgG5d8BPE8qnAX112HmQnQAd1TkApgHc4SNAAoAlIwD0MuACcUqGGQA05NhwjwQAgHQh4Ac3EADACQZe+gkw1WbNJmelA)

```ts
class Point {
  x = 0;
  y = 0;
}
 
const pt = new Point();
// Imprime 0, 0
console.log(`${pt.x}, ${pt.y}`);
```

{{< content-ads/middle-banner-1 >}}

Al igual que con `const`, `let` y `var`, el inicializador de una propiedad de clase se usará para inferir su tipo:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGY1oLACgBjAGwENFFQAFOASwDsAXUAb31FAA9QBeUABgDcbUAE8e-IXgC++EKAC0iggFcGi+fgJw6iJgAcmvOpADuVWowAUASkkGAdF14AiPs4FA)

```ts
const pt = new Point();
pt.x = "0";
```

```text {filename="Error generado"}
Type 'string' is not assignable to type 'number'.
```

#### La opción `--strictPropertyInitialization` {#--strictpropertyinitialization}

La configuración [`strictPropertyInitialization` ↗](https://www.typescriptlang.org/tsconfig#strictPropertyInitialization) controla si los campos de clase deben inicializarse en el constructor.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwFYBsAWAsAFADGANgIaKKgBCZAJgOLSSQAuMoA3oaKAHZkAtpFSJW0AJZ8A5gG5CAXyA)

```ts
class BadGreeter {
  name: string;
}
```

```text {filename="Error generado"}
Property 'name' has no initializer and is not definitely assigned in the constructor.
```

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAEDiD28AmsBOBTdAXdroG8BYAKGmgDswBbdALmgi1QEtyBzAbhJLOHnMaoArsCzxUACgCUBHmWhYAFswgA6SjWgBeaACJF6ECHi6upaAF8SFoA)

```ts
class GoodGreeter {
  name: string;
 
  constructor() {
    this.name = "hello";
  }
}
```

Ten en cuenta que el campo debe inicializarse *en el propio constructor*.
TypeScript no analiza los métodos que invocas desde el constructor para detectar inicializaciones, porque una clase derivada podría sobrescribir esos métodos y no inicializar los miembros.

Si tienes la intención de inicializar definitivamente un campo a través de medios distintos al constructor (por ejemplo, tal vez una biblioteca externa esté completando parte de tu clase por ti), puedes usar el *operador de aserción de asignación*, `!`:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAEDyDSBxATgU1QF1c6BvAsAFDTQD0p0AcgPYbQCWAdvRvWCPQF6oAmANNABGAVzqNq0bMmrIiJRmAC2qAIQAuaBAzImAcwDcRAL5A)

```ts
class OKGreeter {
  // No inicializado, pero sin error
  name!: string;
}
```

{{< content-ads/middle-banner-2 >}}

### El prefijo `readonly` {#readonly}

Los campos pueden tener el prefijo `readonly`.
Esto evita asignaciones al campo fuera del constructor.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwFYAsAGd2cBYAKAGMAbAQ0UVAHFpJIAXGUAbxNFEcoBM4AO3IBPUIMoBbSKkTNoAS0EBzUAF5QAIgDuCcn00BuEl1Ckhc6AFdSzBAAo4zABYwAclMgB+WfKXKASg5TbgUAM1BHF3dPUABCNQ0rQT5IMKVIPiDOYm480BcFRAA6CWl1UCdXaA9pY1y8gF9TZuJTGGh7bJCC5yLS2I1NQSdKgGsjFpJW80E5UFUNQUhtekYWGC765QHyocpyRDhxUbgJwyA)

```ts
class Greeter {
  readonly name: string = "world";
 
  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }
 
  err() {
    this.name = "not ok";
  }
}
const g = new Greeter();
g.name = "also not ok";
```

```text {filename="Error generado"}
Cannot assign to 'name' because it is a read-only property.
```

### Constructores {#constructors}

> Lectura previa: [Constructor (MDN) ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)
>

Los constructores de clases son muy similares a las funciones.
Puede agregar parámetros con anotaciones de tipo, valores predeterminados y sobrecargas:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAEAKD2BLAdgF2gbwLAChrQA8AuaZAVwFsAjAUwCcBuXfATxPOvqZ2egHo+0AHLw6FMCGgREAc2RhUZOjWgB3RKgAW0ACY0AZmDIhUEXsHjIIqOmWCpRACgLQAvNAAMAGmgs3ngEpMXnwtRAgAOhd3Am58UM1wiL93FjjoAF9cDKA)

```ts
class Point {
  x: number;
  y: number;
 
  // Firma normal con valores por defecto.
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}
```

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAEAKD2BLAdgF2gbwLAChrQHoDoB5ANwFMAnEeMAEwl32HmQlSoFdhV4qAFAA8AXNGRcAtgCNqAGmgBPMRyooA5gEoA3M2it2nHn0EQVnDTr0HVx-sLPQwyRQsUB+Mc8WbMe-ETQACoAQgAiegC+uJFAA)

```ts
class Point {
  // Sobrecargas
  constructor(x: number, y: string);
  constructor(s: string);
  constructor(xs: any, y?: any) {
    // TBD
  }
}
```

Solo existen algunas diferencias entre las firmas de constructores de clases y las firmas de funciones:

- Los constructores no pueden tener parámetros de tipo; estos pertenecen a la declaración de clase externa, sobre la cual aprenderemos más adelante.
- Los constructores no pueden tener anotaciones de tipo de retorno: el tipo de instancia de clase siempre es lo que se devuelve

#### Llamadas a super {#super-calls}

{{< content-ads/middle-banner-3 >}}

Al igual que en JavaScript, si tienes una clase base, necesitarás llamar a `super();` en el cuerpo de tu constructor antes de usar cualquier miembro de `this.`:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygIwHYAMWCcBYAKAGMAbAQ0UVACFLJQBvI0UAa1AF5QAWAbiIBfIkTKVqAERgBLAG6QAJqEgAPAC6QAdgup1EDZoVbE4mxGugBXYmoQAKAJRMWrUCFAAFaNM1rq5UAB3eE0Ac1BZclJLBh9QAFEAZQBWPlA1AAt4QOpVYkgABzVpU1A4pIA2F2NTRDhSSAA6UjhQu0zpREa2BwEjV0RLAphHPtZhQkEgA)

```ts
class Base {
  k = 4;
}
 
class Derived extends Base {
  constructor() {
    // Imprime un valor incorrecto en ES5; lanza una excepción en ES6
    console.log(this.k);
    super();
  }
}
```

```text {filename="Error generado"}
'super' must be called before accessing 'this' in the constructor of a derived class.
```

Olvidarse de llamar a `super` es un error fácil de cometer en JavaScript, pero TypeScript te dirá cuándo es necesario.

### Métodos {#methods}

> Lectura previa: [Definiciones de métodos ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions)
>

Una propiedad de función en una clase se llama *método*.
Los métodos pueden usar todas las anotaciones del mismo tipo como funciones y constructores:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAEAKD2BLAdgF2gbwLAChrQA9oBeaARgAYBuXfATxPOt1ugmDBAFMAKZALmjIArgFsARlwBOASkEA3JABNMrfKgAWiCADoiAKlLIaefNE3adDQ0JP4AvrntA)

```ts
class Point {
  x = 10;
  y = 10;
 
  scale(n: number): void {
    this.x *= n;
    this.y *= n;
  }
}
```

Aparte de las anotaciones de tipo estándar, TypeScript no agrega nada más nuevo a los métodos.

Ten en cuenta que dentro del cuerpo de un método, todavía es obligatorio acceder a los campos y otros métodos a través de `this`.
Un nombre no calificado en el cuerpo de un método siempre se referirá a algo en el ámbito adjunto:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGY1oLACgAbSAF1AA9UA7AVwFsAjGUAXlAAYBuffAYwIENEiUAGFQAb3yhyqRMWgBLSgHMWoAEQALSAQJx1XPFNC0AFAEoJx6SFAAVTQuFPQ8gJ5LVxOCbgATBQAzN1AAcjJQ0ED4WlACJUhQAEYAGlBKOFJibVA+QWEAB3gCmGI3a3I1dQB3BAI-A2MAX3wmoA)

```ts
let x: number = 0;
 
class C {
  x: string = "hello";
 
  m() {
    // Esto intenta modificar 'x' de la línea 1, no la propiedad de clase
    x = "world";
  }
}
```

```text {filename="Error generado"}
Type 'string' is not assignable to type 'number'.
```

{{< content-ads/middle-banner-4 >}}

### Getters / Setters {#getters--setters}

Las clases también pueden tener *accesorios*:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAEDC0G8CwAoa0D6ICmA7A5gC4AW0AvNAAwDcq6+2h0OBJAFAJSJ3rQBOjAK59c0EgEsIAOix4ixWmmgBfHhEbM57AG5gQg7F2RL0E6bNakKu-dkXpVKZUA)

```ts
class C {
  _length = 0;
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value;
  }
}
```

> Ten en cuenta que un par get/set respaldado por campos sin lógica adicional rara vez es útil en JavaScript.
> Está bien exponer campos públicos si no necesitas agregar lógica adicional durante las operaciones get/set.
>

TypeScript tiene algunas reglas de inferencia especiales para los descriptores de acceso:

- Si `get` existe pero no `set`, la propiedad es automáticamente `readonly`
- Si no se especifica el tipo de parámetro de establecimiento (setter), se infiere del tipo de retorno del getter.
- Los getters y setters deben tener la misma [visibilidad de miembros](/typescript/handbook/clases#member-visibility)

Desde [TypeScript 4.3 ↗](https://devblogs.microsoft.com/typescript/announcing-typescript-4-3/), es posible tener descriptores de acceso con diferentes tipos para obtener y asignar.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAEAqAWBLAdgc2gbwLAChrQH0JEAvAU2gF5oAGAbl131TIBdpjyAKASgC5oyAK4BbAEZkATpib5oktkMnJorJBAB0RUmQZ5oAX0b6IbDjq4A3MCCFkBEVpJToAPoNETp7sQHtfIGRgyDwy+viB7MIiVNAAcp5SVjZ2PHqy+AD0mdAAIr7IAOTsNiC+AO7xYHEANNAAksgAZiiIrACedWzAxnLQiE3QXACECeJSGogQAGKtrGRc0Tyh2OFyalNanBTU9BlyCqxKyHp9Rjj7G5ra5LHRp4a4BkA)

```ts
class Thing {
  _size = 0;
 
  get size(): number {
    return this._size;
  }
 
  set size(value: string | number | boolean) {
    let num = Number(value);
 
    // No permite NaN, Infinity, etc
 
    if (!Number.isFinite(num)) {
      this._size = 0;
      return;
    }
 
    this._size = num;
  }
}
```

### Firmas de índices {#index-signatures}

Las clases pueden declarar firmas de índice; estos funcionan igual que [Firmas de índice para otros tipos de objetos](/typescript/handbook/objetos#index-signatures):

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAECyCeBhcVoG8CwAoa0DaEAXNBAC4BOAlgHYDmAusQEYD2LIApmNdAD7QAKAURIUatAJTQAvAD5ordl2oSA3Nmy5gACw7AA1sOJkqdKZhy5o5DqQCu5HqW2UIBetEgK2nbussAvtgBQA)

```ts
class MyClass {
  [s: string]: boolean | ((s: string) => boolean);
 
  check(s: string) {
    return this[s] as boolean;
  }
}
```

Debido a que el tipo de firma de índice también debe capturar los tipos de métodos, no es fácil utilizar estos tipos de manera útil.
Generalmente es mejor almacenar los datos indexados en otro lugar en lugar de en la instancia de la clase misma.

{{< content-ads/middle-banner-5 >}}

## Herencia de clase {#class-heritage}

Al igual que otros lenguajes con características orientadas a objetos, las clases en JavaScript pueden heredar de las clases base.

### Cláusulas `implements` {#implements-clauses}

Puedes usar una cláusula de `implements` para verificar que una clase satisface una `interface` particular.
Se emitirá un error si una clase no logra implementarla correctamente:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwBY0AYCwAoASwDsAXGAMwEMBjSUABRIHMqAjAG3oG8DRQADiwAUASlQA3OIQAmAbgIBfAgRocqiRKADKcYlWihCAWwFdjkMlqbFWnHn0EjRoXvn78aexHC4A6DjhmYQAiIVsAQhDRBXdQZXwE1XVNUAAhKg4OI1NzS1JrFnYuV0cBPWCXNw9QL2Iff0DgsIqomMcExSA)

```ts
interface Pingable {
  ping(): void;
}
 
class Sonar implements Pingable {
  ping() {
    console.log("ping!");
  }
}
 
class Ball implements Pingable {
  pong() {
    console.log("pong!");
  }
}
```

```text {filename="Error generado"}
Class 'Ball' incorrectly implements interface 'Pingable'.
  Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
```

Las clases también pueden implementar múltiples interfaces, p. `class C implements A, B {`.

#### Precauciones {#cautions}

Es importante entender que una cláusula `implements` es solo una verificación de que la clase puede ser tratada como el tipo de interfaz.
No cambia el tipo de clase ni sus métodos *en absoluto*.
Una fuente común de error es asumir que una cláusula `implements` cambiará el tipo de clase - ¡no es así!

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygOwAYMDYCwAoASwDsAXGAMwEMBjSUAYQAtIaBrKgIwBt6BvAqFA0W7ABTEqAW0ipEpaCQDmASlSc4cXlWIBuAgF8CBGtyqJEoAHLTIzVmxihCUgA68ZZS-fZdeoAXwhEQcxRBUAwSFQEGs4UkI6UGI4UBh4aFAWaEgooRzSAFdoYlBEADpSOAAZOAB3GAZzSDEIgF4O0AAiODYu-SDo2OiR0AA9AH4oo3wDIA)

```ts
interface Checkable {
  check(name: string): boolean;
}
 
class NameChecker implements Checkable {
  check(s) {
    // No hay errores aquí.
    return s.toLowerCase() === "ok";
                 
  }
}
```

```text {filename="Error generado"}
Parameter 's' implicitly has an 'any' type.
```

En este ejemplo, quizás esperábamos que el tipo de `s` estuviera influenciado por el parámetro `name: string` de `check`.
No lo es: las cláusulas `implements` no cambian la forma en que se verifica el cuerpo de la clase ni se infiere su tipo.

De manera similar, implementar una interfaz con una propiedad opcional no crea esa propiedad:

{{< content-ads/middle-banner-6 >}}

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGYME4CwAoASwDsAXGAMwEMBjSUAQVAG8DRQAPVYgVwFsARjADcbUAE8A-N35Doo-AF8CNADZVEiUAGFQhPgAdVkPpDJamrfOw6gAvKAAMC5fhpxiiUqBr3QxSAB3HQAKAEoFGgA6cT8ARmcgA)

```ts
interface A {
  x: number;
  y?: number;
}
class C implements A {
  x = 0;
}
const c = new C();
c.y = 10;
```

```text {filename="Error generado"}
Property 'y' does not exist on type 'C'.
```

### Cláusulas `extends` {#extends-clauses}

> Lectura previa: [la palabra clave extends (MDN) ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends)
>

Las clases pueden "extenderse" desde una clase base.
Una clase derivada tiene todas las propiedades y métodos de su clase base y también puede definir miembros adicionales.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAECCB2BLAtmE0DeBYAUNayA9gG4CmAFAJSa777CHwSEikB0IhA5uQEQCyJRPC7Q0jLgEJelANy1oAX1zKcuUJBgARbtFIAPAC6l4AExgIUaGnmgB3QoQBm5QylIQAXNHgBXZABGpABO1Ni2+E6EwdDkrIbQiNAAvNAADLKJ0AA80G7IHpmIANTFYQp00AxMLOycPLwOztJyFUoKqqrqjBAJpik+pHbQOjytOAD0E9AAQpCkVeBQBKSGABaEprimbERkVPKT01ohiGT9GssF65vbbE0uAMxyQA)

```ts
class Animal {
  move() {
    console.log("Moving along!");
  }
}
 
class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log("woof!");
    }
  }
}
 
const d = new Dog();
// Método de la clase base.
d.move();
// Método de la clase derivada.
d.woof(3);
```

#### Sobrescribiendo métodos {#overriding-methods}

> Lectura previa: [palabra clave super (MDN) ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super)
>

Una clase derivada también puede sobrescribir un campo o propiedad de una clase base.
Puedes utilizar la sintaxis `super.` para acceder a los métodos de la clase base.
Ten en cuenta que debido a que las clases de JavaScript son un objeto de búsqueda simple, no existe la noción de un "super campo".

TypeScript exige que una clase derivada sea siempre un subtipo de su clase base.

Por ejemplo, aquí tienes una forma legal de sobrescribir un método:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAEBCkFNoG8CwAoa0DmAnBCALgBQCUKGWWwA9gHYQ0gIB0IN2xARABIIjsANNADuNXCAAmAQi6kA3JWgBfDKvQZQkGABEEuAJYA3BJOgIAHoQR1JMeBCRpMOfEWJ0wAWwQB+AFzQEISGdNjkzlTQBgBm0B7eSAC8KdAArrYIMQZ0phFKURBpAA76LHgEJAoFKuYgjhQuUbQMTKzsnAAGfAI0wgAkyJ4+LIQ0AKrFpbgAwohkyp3VTSpK6uqa9MHQZknQuSLQeoYmkmSK6JLlblUXVxXuXPhgkvpy8kA)

```ts
class Base {
  greet() {
    console.log("Hello, world!");
  }
}
 
class Derived extends Base {
  greet(name?: string) {
    if (name === undefined) {
      super.greet();
    } else {
      console.log(`Hello, ${name.toUpperCase()}`);
    }
  }
}
 
const d = new Derived();
d.greet();
d.greet("reader");
```

{{< content-ads/middle-banner-7 >}}

Es importante que una clase derivada siga su contrato de clase base.
Recuerda que es muy común (¡y siempre legal!) hacer referencia a una instancia de clase derivada a través de una referencia de clase base:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAEBCkFNoG8CwAoa0DmAnBCALgBQCUKGWWwA9gHYQ0gIB0IN2xARABIIjsANNADuNXCAAmAQi6kA3JWgBfDKvShIMACIJcASwBuCSdAQAPQgjqSY8CEmTraDQtFMBeaHQQjoug2NJMkV0AHow6ABaGOAAV0IYqIwI6ABBEH1IaEIACyRJPSMTaH1XMDpgJDzcGjjsXOgwaAAjRGhNKGh8ADM9ayqMFwg3FoAuOHavSVDUgDkaaAAHWpbmAFsMFpY8AhIFIA)

```ts
// Alias la instancia derivada a través de una referencia de clase base
const b: Base = d;
// Ningún problema
b.greet();
```

¿Qué pasaría si `Derived` no siguiera el contrato de `Base`?

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwBYCMA2AsAFADGANgIaKKgBCFkoA3oaKAObSSQAuAFAJSNmLUETgA7RHBKQAdCTiseAIgASkEvIA0oAO4ISAEwCESvgG4hAX0LWChUhSoARGAEsAbpAOhIADy6QYgZUtIj0TAQsIKAAsmQA1vRcABauVAAOZNBkALbcMKAcAI4Arq4cBkLsnLxiuZCoiFzQrmKsAhHCIuKS0nIKPAAGahpw2gAkDHV5MlxwAKrp6TAAwnT8loPmVjZAA)

```ts
class Base {
  greet() {
    console.log("Hello, world!");
  }
}
 
class Derived extends Base {
  // Hacer que este parámetro sea obligatorio
  greet(name: string) {
    console.log(`Hello, ${name.toUpperCase()}`);
  }
}
```

```text {filename="Error generado"}
Property 'greet' in type 'Derived' is not assignable to the same property in base type 'Base'.
  Type '(name: string) => void' is not assignable to type '() => void'.
```

Si compilamos este código a pesar del error, este ejemplo fallaría:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/CYUwxgNghgTiAEkoGdnwEIoQbwLACh54BzOEAFwAoBKALngDcB7AS2AG4CBfA0JORNFTwAIiBgsGIYPBAAPciAB2wNJmQ4e+APTb4AWkNgAruUP6CYJkuTl4AI3rqEAXnhKQAd1HjJ0mpw6egDCMCgAFiBo9uBQxhrwAERKUAC2IInwniwQEA4IxiogAGYsHsAE9gB0pCAUAUA)

```ts
const b: Base = new Derived();
// Se bloquea porque el "nombre" no estará definido
b.greet();
```

#### Declaraciones de campos type-only {#type-only-field-declarations}

Cuando `target >= ES2022` o [`useDefineForClassFields` ↗](https://www.typescriptlang.org/tsconfig#useDefineForClassFields) es `true`, los campos de clase se inicializan después de que el constructor de la clase madre se completa, sobrescribiendo cualquier valor establecido por la clase madre. Esto puede ser un problema cuando sólo deseas volver a declarar un tipo más preciso para un campo heredado. Para manejar estos casos, puedes escribir `declare` para indicar a TypeScript que no debería haber ningún efecto de tiempo de ejecución para esta declaración de campo.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/JYOwLgpgTgZghgYwgAgIImAWzgG2QbwFgAoZZAEzkgHkYAhYKMACwC5k4QBPAbhIF8SJUJFiIUAEQD2Ac2QQAHpBDkAzmgzY8RUsgBGUCBHLtOvAUOIIccVevRZcACSkBXVSh1lDq4OQjg7A5afLoIUiCqYFCuCGBSUAAUnI44QZq4AJQEJGRkLMCqAHQ+fgFgyAC8HBk4oWSCxI0k1rbq0jIu7iiKymoaqV0eOboA9KPI0hDqIFIVEJjAFQBScABucADKCFDAAA4V4f4ANLnI48gROFzyka4+yCwoYFx70xyGyOFQhnFn-q1PqV-IFJrJ6l8IlEYnEEolyLJ2B1sl48qpXG8kgiZJkIY1+EA)

```ts
interface Animal {
  dateOfBirth: any;
}
 
interface Dog extends Animal {
  breed: any;
}
 
class AnimalHouse {
  resident: Animal;
  constructor(animal: Animal) {
    this.resident = animal;
  }
}
 
class DogHouse extends AnimalHouse {
  // No emite código JavaScript, 
  // solo garantiza que los tipos sean correctos
  declare resident: Dog;
  constructor(dog: Dog) {
    super(dog);
  }
}
```

#### Orden de inicialización {#initialization-order}

{{< content-ads/middle-banner-8 >}}

El orden en que se inicializan las clases de JavaScript puede resultar sorprendente en algunos casos.
Consideremos este código:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAEBCkFNoG8CwAoa0B2YC2SAvNAEQBGiJA3BlsAPbYQAuATgK7DP2sAUAlClpZoDJvRAIAdCHoBzXiQCyATxz4kASxgloAamjMAFtqm4C-GpmgBfDHfQZQkGABEErTQDcEAE2gIAB7MCNi+MPAQSGjW5kSkvh7eftT2GBgA9BnQAAqe2Mw6FFEkADQ49MwJST6+JE6MLND+xNgIAO7Q7p61AlRAA)

```ts
class Base {
  name = "base";
  constructor() {
    console.log("My name is " + this.name);
  }
}
 
class Derived extends Base {
  name = "derived";
}
 
// Prints "base", not "derived"
const d = new Derived();
```

¿Qué pasó aquí?

El orden de inicialización de clases, tal como lo define JavaScript, es:

- Los campos de la clase base están inicializados.
- Se ejecuta el constructor de la clase base.
- Los campos de clase derivada se inicializan.
- Se ejecuta el constructor de la clase derivada.

Esto significa que el constructor de la clase base vio su propio valor para `name` durante su propio constructor, porque las inicializaciones del campo de la clase derivada aún no se habían ejecutado.

#### Heredar tipos integrados {#inheriting-built-in-types}

> Nota: Si no planeas heredar de tipos integrados como `Array`, `Error`, `Map`, etc. o si tu objetivo de compilación está configurado explícitamente en `ES6`/`ES2015` o superior, puedes saltarte esta sección
>

En ES2015, los constructores que devuelven un objeto sustituyen implícitamente el valor de `this` por cualquier llamador de `super(...)`.
Es necesario que el código constructor generado capture cualquier valor de retorno potencial de `super(...)` y lo reemplace con `this`.

Como resultado, es posible que las subclasificaciones `Error`, `Array` y otras ya no funcionen como se esperaba.
Esto se debe al hecho de que las funciones constructoras para `Error`, `Array` y similares usan `new.target` de ECMAScript 6 para ajustar la cadena del prototipo; sin embargo, no hay forma de garantizar un valor para `new.target` al invocar un constructor en ECMAScript 5.
Otros compiladores de nivel inferior generalmente tienen la misma limitación de forma predeterminada.

Para una subclase como la siguiente:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAECyEHMCiAnFB7F0CmAPALtgHYAmMqGWA3gLABQ00w6RE+KArsPpgBQC2ALmhsUASyIIAlNFoNGIjgAdsKAVIDc9RgF9tIsAE8AEthAh0vGXIXQU2fBxRFoAIgAWZi2+gBqaPjuYhAAdPzYUGAI2FryenQ6QA)

```ts
class MsgError extends Error {
  constructor(m: string) {
    super(m);
  }
  sayHello() {
    return "hello " + this.message;
  }
}
```

es posible que encuentres que:

{{< content-ads/middle-banner-9 >}}

- Los métodos pueden ser `undefined` en los objetos devueltos al construir estas subclases, por lo que llamar a `sayHello` resultará en un error.
- `instanceof` se dividirá entre las instancias de la subclase y sus instancias, por lo que `(new MsgError()) instanceof MsgError` devolverá `false`.

Como recomendación, puedes ajustar manualmente el prototipo inmediatamente después de cualquier llamada `super(...)`.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAECyEHMCiAnFB7F0CmAPALtgHYAmMqGWA3gLABQ00w6RE+KArsPpgBQC2ALmhsUASyIIAlNFoNGIjgAdsKAVIDc9egugB6PdADK2fNHwALbNCUYe+AJ4qcuJSDHAx+EA4B0OhQB5ACMAK2xuXwhTAAU7dEcVQIAzXksxCAAaOEQKTF9bBISnbE0AgF9teQgwBwAJbBAQdF4ZOV0UUw4UImgAIism9H7oAGpzCwzffmwoMARsLXlKunKgA)

```ts
class MsgError extends Error {
  constructor(m: string) {
    super(m);
 
    // Establece el prototipo explícitamente.
    Object.setPrototypeOf(this, MsgError.prototype);
  }
 
  sayHello() {
    return "hello " + this.message;
  }
}
```

Sin embargo, cualquier subclase de `MsgError` también tendrá que configurar manualmente el prototipo.
Para runtimes que no admiten [`Object.setPrototypeOf` ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf), es posible que puedas utilizar [`__proto__` ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto).

Desafortunadamente, [estas soluciones no funcionarán en Internet Explorer 10 y versiones anteriores ↗](https://msdn.microsoft.com/en-us/library/s4esdbwz(v=vs.94) .aspx).
Se pueden copiar manualmente métodos del prototipo a la instancia misma (es decir, `MsgError.prototype` a `this`), pero la cadena del prototipo en sí no se puede arreglar.

## Visibilidad de miembros {#member-visibility}

Puedes usar TypeScript para controlar si ciertos métodos o propiedades son visibles para el código fuera de la clase.

### `public` {#public}

La visibilidad predeterminada de los miembros de la clase es `public`.
Se puede acceder a un miembro `public` desde cualquier lugar:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAEDiBOBTRAXR9oG8CwAoa0ADgK4BGIAlsNAOZKoAUAlFngQcAPYB2EnIiAHQhONBgCIAFhQCE4pgG420AL541uLrxS1oAXmjdEAdzj008Zktw1BdZCitA)

```ts
class Greeter {
  public greet() {
    console.log("hi!");
  }
}
const g = new Greeter();
g.greet();
```

Debido a que `public` ya es el modificador de visibilidad predeterminado, nunca *necesitas* escribirlo en un miembro de la clase, pero puedes elegir hacerlo por razones de estilo/legibilidad.

### `protected` {#protected}

Los miembros `protected` solo son visibles para las subclases de la clase en la que están declarados.

{{< content-ads/middle-banner-1 >}}

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwBYMFYCwAoAYwBsBDRRUAcWkkgBcZQBvA0UABwFcAjYgS0KgA5rQYAKAJQs27UITgA7RHGKQAdMTjDxAIgASkYloA0oXaADUoegAt+idcIYA5UgFtIUyQG5ZAX1kOeEZCRgATEVcPL2lWfDlQWnouaEVze10-BNBA-DyCEnJKAGUOSEJ+UmIaOkZoUEgAD0ZFcMpahiZ49m4+QVBbOAB3cIBPKRkc9hBQAHkAaRs4UFJCQkgKThCKiNBPdx4mWxhIWXYFZVUNLR0DEfGzC2s7Bydoz29sxNnEv-+AXIAHog0FgsEBAh5S6IegiUAAXlAikgw1AZQqVRqYnqUmywicOLxoFmiwIBOc9Dcn18QA)

```ts
class Greeter {
  public greet() {
    console.log("Hello, " + this.getName());
  }
  protected getName() {
    return "hi";
  }
}
 
class SpecialGreeter extends Greeter {
  public howdy() {
    // Está bien acceder al miembro protegido aquí.
    console.log("Howdy, " + this.getName());
  }
}
const g = new SpecialGreeter();
g.greet(); // OK
g.getName(); // Error
```

```text {filename="Error generado"}
Property 'getName' is protected and only accessible within class 'Greeter' and its subclasses.
```

#### Exposición de miembros `protected` {#exposure-of-protected-members}

Las clases derivadas deben seguir sus contratos de clase base, pero pueden optar por exponer un subtipo de clase base con más capacidades.
Esto incluye hacer que los miembros `protected` sean `public`:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAEBCkFNoG8CwAoa0AOAnA9gC4LDEAm0AttALzQCMADANwYC+GokMAIgrgEsAbggoIAHsQB2ZGPAhI0maAHoV0AHL4q+MgIBmA-gBpoEbWQT6wAVxCFoAmAHJsNgEYgBwZxizU6egBWVnQOdGB8KQgHCjopBAB3aD5BETIACgBKUMjo-BAEADoQfABzDLIiyhzVdQB5AGkgA)

```ts
class Base {
  protected m = 10;
}
class Derived extends Base {
  // Sin modificadores, por defecto es 'public'
  m = 15;
}
const d = new Derived();
console.log(d.m); // OK
```

Ten en cuenta que `Derived` ya podía leer y escribir libremente `m`, por lo que esto no altera significativamente la "seguridad" de esta situación.
Lo principal a tener en cuenta aquí es que en la clase derivada, debemos tener cuidado de repetir el modificador `protected` si esta exposición no es intencional.

#### Acceso `protected` entre jerarquías {#cross-hierarchy-protected-access}

Diferentes lenguajes de programación orientada a objetos no están de acuerdo sobre si es legal acceder a un miembro `protected` a través de una referencia de clase base:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwBYMDYCwAoAYwBsBDRRUAIXMlAG8DRQAHeAF0kM4BNQAPVADsArgFsARjFABeUAEYA3AQC+BEuUoARGAEsAbpB7zQkfpyE9KNRHUb5mbOJ25GBw8VOizQAVmX4akRkFKA60AZGaKbmkJbWtAxMoABm8gAUzgAWMKjhkTxoAJRJDsyg2TAAdPw+8gAMAcxBzClomew50Hl6hsYl9uUVndW1cg1NoEEqQA)

```ts
class Base {
  protected x: number = 1;
}
class Derived1 extends Base {
  protected x: number = 5;
}
class Derived2 extends Base {
  f1(other: Derived2) {
    other.x = 10;
  }
  f2(other: Derived1) {
    other.x = 10;
  }
}
```

```text {filename="Error generado"}
Property 'x' is protected and only accessible within class 'Derived1' and its subclasses.
```

Java, por ejemplo, considera que esto es legal.
Por otro lado, C# y C++ optaron por que este código fuera ilegal.

TypeScript está del lado de C# y C++ aquí, porque acceder a `x` en `Derived2` solo debería ser legal desde las subclases de `Derived2`, y `Derived1` no es una de ellas.
Además, si acceder a `x` a través de una referencia `Derived1` es ilegal (¡y ciertamente debería serlo!), entonces acceder a través de una referencia de clase base nunca debería mejorar la situación.

{{< content-ads/middle-banner-2 >}}

Consulta también [¿Por qué no puedo acceder a un miembro protegido desde una clase derivada? ↗](https://blogs.msdn.microsoft.com/ericlippert/2005/11/09/why-cant-i-access-a-protected-member-from-a-derived-class/) que explica más del razonamiento de C#.

### `private` {#private}

`private` es como `protected`, pero no permite el acceso al miembro ni siquiera desde subclases:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGYAsBGAsAFADGANgIaKKgBCFkoA3oaKAA7QCWAbmQC70APUAF5QABgDchAL6EicAHaJeoAEYjQCyAHcadABQBKKQRCgAwmQUByFWSJFIlUADN4AW1BwArr0QcAE3peAAt6UgpEOUVEOBJIADoSOABzfVUEgWMgA)

```ts
class Base {
  private x = 0;
}
const b = new Base();
// No se puede acceder desde fuera de la clase
console.log(b.x);
```

```text {filename="Error generado"}
Property 'x' is private and only accessible within class 'Base'.
```

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGYAsBGAsAFADGANgIaKKgBCFkoA3oaKAA7QCWAbmQC70APUAF5QABgDchAL6EQoALRKiAV15KFhUhSoARGN0gATUJAH8Adkaq1E9JgRaIAFnADuADQAUASkbMWUHkAYTILAHJeUDIiIkhKUA4LUEQVACNtSniAliI4C0Q4EkgAOhI4AHMvXmcORBKBHylHUFkCaSA)

```ts
class Derived extends Base {
  showX() {
    // No se puede acceder en subclases
    console.log(this.x);
  }
}
```

```text {filename="Error generado"}
Property 'x' is private and only accessible within class 'Base'.
```

Debido a que los miembros `private` no son visibles para las clases derivadas, una clase derivada no puede aumentar su visibilidad:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwBYCMBWAsAFADGANgIaKKgBCFkoA3oaKAA7QCWAbmQC70APUAF5QABgDchAL6FSFKgBEY3SABNQkAfwB2aqrUT0mBFkNFYpBaUA)

```ts
class Base {
  private x = 0;
}
class Derived extends Base {
  x = 1;
}
```

```text {filename="Error generado"}
Class 'Derived' incorrectly extends base class 'Base'.
  Property 'x' is private in type 'Base' but not in type 'Derived'.
```

#### Acceso `private` entre instancias {#cross-instance-private-access}

Diferentes lenguajes de programación orientada a objetos no están de acuerdo sobre si diferentes instancias de la misma clase pueden acceder a los miembros `private` de cada uno.
Mientras que lenguajes como Java, C#, C++, Swift y PHP lo permiten, Ruby no.

{{< content-ads/middle-banner-3 >}}

TypeScript permite el acceso `private` entre instancias:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAECC0G8CwAoa0AOAnAlgNzABcBTaAD2gF5oBGABgG5VV0MBXAIxB2GgjAC2xWBAAUAe0IALYlgBccAJSIW6aAHp10AHLjosrOKyr0WYoTZYAdtEkysAOgqUX0aTghOmaaAF9UvkA)

```ts
class A {
  private x = 10;
 
  public sameAs(other: A) {
    // Sin error
    return other.x === this.x;
  }
}
```

#### Advertencias {#caveats}

Al igual que otros aspectos del sistema de tipos de TypeScript, `private` y `protected`[solo se aplican durante la verificación de tipos ↗](https://www.typescriptlang.org/play#code/PTAEGMBsEMGddAEQPYHNQBMCmVoCcsEAHPASwDdoAXLUAM1K0gwQFdZSA7dAKWkoDK4MkSoByBAGJQJLAwAeAWABQIUH0HDSoiTLKUaoUggAW+DHorUsAOlABJcQlhUy4KpACeoLJzrI8cCwMGxU1ABVPIiwhESpMZEJQTmR4lxFQaQxWMm4IZABbIlIYKlJkTlDlXHgkNFAAbxVQTIAjfABrAEEC5FZOeIBeUAAGAG5mmSw8WAroSFIqb2GAIjMiIk8VieVJ8Ar01ncAgAoASkaAXxVr3dUwGoQAYWpMHBgCYn1rekZmNg4eUi0Vi2icoBWJCsNBWoA6WE8AHcAiEwmBgTEtDovtDaMZQLM6PEoQZbA5wSk0q5SO4vD4-AEghZoJwLGYEIRwNBoqAzFRwCZCFUIlFMXECdSiAhId8YZgclx0PsiiVqOVOAAaUAFLAsxWgKiC35MFigfC0FKgSAVVDTSyk+W5dB4fplHVVR6gF7xJrKFotEk-HXIRE9PoDUDDcaTAPTWaceaLZYQlmoPBbHYx-KcQ7HPDnK43FQqfY5+IMDDISPJLCIuqoc47UsuUCofAME3Vzi1r3URvF5QV5A2STtPDdXqunZDgDaYlHnTDrrEAF0dm28B3mDZg6HJwN1+2-hg57ulwNV2NQGoZbjYfNrYiENBwEFaojFiZQK08C-4fFKTVCozWfTgfFgLkeT5AUqiAA).

Esto significa que las construcciones de tiempo de ejecución de JavaScript como `in` o la búsqueda de propiedad simple aún pueden acceder a un miembro `private` o `protected`:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAECyCeBlMAzAptA3gWAFDWgAcAnASwDcwAXDCNYYtKgaTXmgF5oBGAJgGYALAFYA3HgC+QA)

```ts
class MySafe {
  private secretKey = 12345;
}
```

```js
// En un archivo JavaScript...
const s = new MySafe();
// Imprimirá 12345
console.log(s.secretKey);
```

`private` también permite el acceso usando notación entre corchetes durante la verificación de tipos. Esto hace que los campos declarados `private` sean potencialmente más fáciles de acceder para cosas como tests unitarios, con el inconveniente de que estos campos son *ligeramente privados* y no imponen estrictamente la privacidad.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGYAsBGAsAFADGANgIaKKgCyAngMpkBmkoA3oaKAA7QCWANzIAXVokhFokYQGlItUAF5QOTFgCsAbkIBfQoSJwAdomGgqyo5ADuNBs0gAKAJTaChEKABycM2RIkcNaQACagIQCu-EYA5qDCtNysRAAWEgDWfLEGxohwJJAAdIExjoiF4pLScrSu+gSeAPIyOSb5RSVlANoARJVSsvI9ALquQA)

```ts
class MySafe {
  private secretKey = 12345;
}
 
const s = new MySafe();
 
// No permitido durante la verificación de tipo
console.log(s.secretKey);
 
// OK
console.log(s["secretKey"]);
```

```text {filename="Error generado"}
Property 'secretKey' is private and only accessible within class 'MySafe'.
```

A diferencia del `private` de TypeScripts, los [campos privados de JavaScript ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields) (`#`) permanecen privados después de la compilación y no proporcionan las trampillas de escape mencionadas anteriormente, como el acceso a la notación entre corchetes, lo que los hace *duros y privados*.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAEAiD2BzaBvAsAKGtAxAIzACcBrAQQFt4BXAOwBdoBeaABgG5NsAHAU0Ing0wIAJZ0Ank2gAiABZguXcdI4ZO0YIIh1CVYHXiEAFAEpUAX0zmgA)

{{< content-ads/middle-banner-4 >}}

```ts
class Dog {
  #barkAmount = 0;
  personality = "happy";
 
  constructor() {}
}
```

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEBcEMCcHMCmkBcpEGcB2iAekBYAKBAgwAsB7AdwFEBbAS0KIGMAbaDDUAEUvigA3sVCgAxACM4AawCC9SgFcskUAF5QABgDco0AAdEsDJSzR2zAJ4bQAInLQDBq3b1F9rMxkiwlrSEpYAAoASmEAX2IIoA)

```ts
"use strict";
class Dog {
    #barkAmount = 0;
    personality = "happy";
    constructor() { }
}
 
```

Al compilar en ES2021 o menor, TypeScript usará WeakMaps en lugar de `#`.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEBcEMCcHMCmkBcpEGcBMAGAjAKwCwAUCBBgBYD2A7gKIC2AlpKQMYA20GGoAItXigA3qVCgAxACM4AawCCjagFcAdpFABeUDgDc40AAdEsDNTXROrAJ7bQAIkrQjRmw4MlD7CxkiwVdkhqWAAKAEpRAF9SKKA)

```ts
"use strict";
var _Dog_barkAmount;
class Dog {
    constructor() {
        _Dog_barkAmount.set(this, 0);
        this.personality = "happy";
    }
}
_Dog_barkAmount = new WeakMap();
 
```

Si necesitas proteger los valores de tu clase de actores maliciosos, debes usar mecanismos que ofrezcan privacidad estricta en tiempo de ejecución, como closures, WeakMaps o campos privados. Ten en cuenta que estas comprobaciones de privacidad adicionales durante el tiempo de ejecución podrían afectar el rendimiento.

## Miembros estáticos {#static-members}

> Lectura previa: [Miembros estáticos (MDN) ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)
>

Las clases pueden tener miembros `static`.
Estos miembros no están asociados con una instancia particular de la clase.
Se puede acceder a ellos a través del propio objeto constructor de clase:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAECyCeBhcVoG8CwAoa0IBcx8BLYaAD2gF5oAGAbm1wKNOgAcAnYgO3wA0AFAEp0TXNGAB7HhCkgApgDoQUgOaCEySBCXlhjHNAC+2U1mmz5y1Rq0pd+w-Z1KuvASPpA)

```ts
class MyClass {
  static x = 0;
  static printX() {
    console.log(MyClass.x);
  }
}
console.log(MyClass.x);
MyClass.printX();
```

Los miembros estáticos también pueden usar los mismos modificadores de visibilidad `public`, `protected` y `private`:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGYAsBGAsAFADGANgIaKKgCyAngMLmWgDehooADtAJYBuZAC6RQiQUJ5FQAD1ABeUAAYA3IQC+hInAB2iOCUgA6EnADmACjqMKiQ9ICUyoA)

```ts
class MyClass {
  private static x = 0;
}
console.log(MyClass.x);
```

{{< content-ads/middle-banner-5 >}}

```text {filename="Error generado"}
Property 'x' is private and only accessible within class 'MyClass'.
```

Los miembros estáticos también se heredan:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAEBCkFNoG8CwAoa0IBcw4EthoBzBHAcQCcFyCA7EgCgEoUMssacBXK+6ACIAEghAgA9tADuEqiAAmggNwdoAXwyb0oSDAAiCKgQBuCBdAQAPHAnoKY8CEjSZoAWwCe1WoUbQAXmhDYzMFADoySho6RlZVdHUgA)

```ts
class Base {
  static getGreeting() {
    return "Hello world";
  }
}
class Derived extends Base {
  myGreeting = Derived.getGreeting();
}
```

### Nombres estáticos especiales {#special-static-names}

Generalmente no es seguro ni posible sobrescribir propiedades del prototipo `Function`.
Debido a que las clases son en sí mismas funciones que se pueden invocar con `new`, ciertos nombres `static` no se pueden usar.
Las propiedades de funciones como `name`, `length` y `call` no son válidas para definirse como miembros `static`:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwDYCcWCwAoAYwBsBDRRUAZVAG8DRREAXU5gS0NADtSBbSKAC8oAERUAhKIDcBAL5A)

```ts
class S {
  static name = "S!";
}
```

```text {filename="Error generado"}
Static property 'name' conflicts with built-in property 'Function.name' of constructor function 'S'.
```

### ¿Por qué no hay clases estáticas? {#why-no-static-classes}

TypeScript (y JavaScript) no tienen una construcción llamada `static class` de la misma manera que, por ejemplo, C#.

Esas construcciones *sólo* existen porque esos lenguajes obligan a que todos los datos y funciones estén dentro de una clase; como esa restricción no existe en TypeScript, no es necesaria.
Una clase con una sola instancia normalmente se representa simplemente como un *objeto* normal en JavaScript/TypeScript.

Por ejemplo, no necesitamos una sintaxis de "clase estática" en TypeScript porque un objeto normal (o incluso una función de nivel superior) hará el trabajo igual de bien:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEFUDtIUwYxgZ0QQwE4E9QCJEBcU8BLObUOAGxWQFgAoS6xUAWQwGUDi4BhK5UAG96oUPkIlQAEwD27GQFsYeABZFIAcwAUASiEBfeobr0QoAApoYAMxhorU0FpQU8dyBIBuMUAEYd9NYArpBwxDKQ0nKKymqaugb0pmCWNnYOTi5uaB7E3qAATAEMEfisGAASMBQADnYA8gBGAFbweKAAvEIiUYgxquraeoL6ADRGANxAA)

```ts
// Clase "static" innecesaria
class MyStaticClass {
  static doSomething() {}
}
 
// Preferido (alternativa 1)
function doSomething() {}
 
// Preferido (alternativa 2)
const MyHelperObject = {
  dosomething() {},
};
```

{{< content-ads/middle-banner-6 >}}

##  Bloques `static` en clases {#static-blocks-in-classes}

Los bloques estáticos te permiten escribir una secuencia de declaraciones con su propio alcance que pueden acceder a campos privados dentro de la clase que los contiene. Esto significa que podemos escribir código de inicialización con todas las capacidades de escribir declaraciones, sin fugas de variables y con acceso completo a las partes internas de nuestra clase.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/CYUwxgNghgTiAEAzArgOzAFwJYHtXwhymABkoBnDASVUqnRHIAoBKALnnoE8BtAXQCwAKAD0I+AFopYZBikThkCuXgAxHDngBvYfD3w62MPADEYHGgzwAvPAAMAbmG79AcxBXzl1tpf79cBjIMPjqOAB0ZhaoGE5C-gC+zvH6hljGOin+ehgwXL5Z2f7mtFbQlDR0DCq2hMRkFaX0YIyscUVFYZFeMfAA1LUU1E3V4RAgqK4YABbtHUmFxVAYYNPaC4nCCUA)

```ts
class Foo {
    static #count = 0;
 
    get count() {
        return Foo.#count;
    }
 
    static {
        try {
            const lastInstances = loadLastInstances();
            Foo.#count += lastInstances.length;
        }
        catch {}
    }
}
```

## Clases genéricas {#generic-classes}

Las clases, al igual que las interfaces, pueden ser genéricas.
Cuando se crea una instancia de una clase genérica con `new`, sus parámetros de tipo se infieren de la misma manera que en una llamada de función:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAEBCD2APAPAFQJ4AcCmA+aA3gLABQ00w8AdgC7a0QBc0GOA3KeZVRDQE4BXYDXh8AFADcwIAdmatsASkKdy0GgAsAlhAB03Og2gBeaFJnYOZaAF9SdkqW69oAIxPQq2AO5wkYgCINbBAQeABCAMUrAHoYtWgAPQB+IA)

```ts
class Box<Type> {
  contents: Type;
  constructor(value: Type) {
    this.contents = value;
  }
}
 
const b = new Box("hello!");
     
const b: Box<string>
```

Las clases pueden usar restricciones genéricas y valores predeterminados de la misma manera que las interfaces.

### Parámetros de tipo en miembros estáticos {#type-parameters-in-static-members}

Este código no es legal y puede que no sea obvio por qué:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGYAMaCwAoAYwBsBDRRUAITgA8AeAFQE8AHSAPlAG8DRREAF1KCAloVAATSADNSAV2KCAaqWLzIqFuwDcBAL5A)

```ts
class Box<Type> {
  static defaultValue: Type;
}
```

```text {filename="Error generado"}
Static members cannot reference class type parameters.
```

¡Recuerda que los tipos siempre se borran por completo!
En tiempo de ejecución, solo hay *un* espacio de propiedad `Box.defaultValue`.
Esto significa que configurar `Box<string>.defaultValue` (si fuera posible) *también* cambiaría `Box<number>.defaultValue` - no es bueno.
Los miembros `static` de una clase genérica nunca pueden hacer referencia a los parámetros de tipo de la clase.

{{< content-ads/middle-banner-7 >}}

## `this` en clases en tiempo de ejecución {#this-at-runtime-in-classes}

> Lectura previa:[palabra clave this (MDN) ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
>

Es importante recordar que TypeScript no cambia el comportamiento de ejecución de JavaScript, y que JavaScript es algo famoso por tener algunos comportamientos de ejecución peculiares.

El manejo de `this` por parte de JavaScript es realmente inusual:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAECyCeBhcVoG8CwAoa0B2YAtgKbQC80ARAspBJQNza4DmxALgHJHEAUAlOma5oAJw4BXUXmjsAFgEsIAOgIkmOaAF9sOrMAD2eCO2jBy+YgHc4SFBAEbDx0wYBGAKwuZNa4gC4qdw9KABphNi4eQOBlSO4ScKwtDWwAejToAAVRBTx2GEpgsPwDU2o7OkpsZwgDEGJlEAMWXmC4jgS+fn4GIA)

```ts
class MyClass {
  name = "MyClass";
  getName() {
    return this.name;
  }
}
const c = new MyClass();
const obj = {
  name: "obj",
  getName: c.getName,
};
 
// Imprime "obj", no "MyClass"
console.log(obj.getName());
```

En pocas palabras, de forma predeterminada, el valor de `this` dentro de una función depende de *cómo se llamó a la función*.
En este ejemplo, debido a que la función fue llamada a través de la referencia `obj`, su valor de `this` era `obj` en lugar de la instancia de clase.

¡Esto rara vez es lo que quieres que suceda!
TypeScript proporciona algunas formas de mitigar o prevenir este tipo de error.

### Funciones de flecha {#arrow-functions}

> Lectura previa: [Funciones de flecha (MDN) ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
>

Si tienes una función que a menudo se llama de una manera que pierde su contexto `this`, puede tener sentido usar una propiedad de función de flecha en lugar de una definición de método:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAECyCeBhcVoG8CwAoa0B2YAtgKbQC80ARAspBJQNza4DmxALgHJGkUAUASnIA+dM1zQAThwCukvNHYALAJYQAdARJMc0AL4692YAHs8EdtGDl8xAO5wkKCIJ2nzlljeDq2XHjoA9IHQAAqSKnjsMNROdJTQkRbEYAAm0CYAZlaSkKp4LMZmECYgxOogJix81QICDEA)

```ts
class MyClass {
  name = "MyClass";
  getName = () => {
    return this.name;
  };
}
const c = new MyClass();
const g = c.getName;
// Imprime "MyClass" en lugar de fallar
console.log(g());
```

Esto tiene algunas compensaciones:

- Se garantiza que el valor `this` será correcto en tiempo de ejecución, incluso para el código que no se verifica con TypeScript.
- Esto utilizará más memoria, porque cada instancia de clase tendrá su propia copia de cada función definida de esta manera.
- No puedes usar `super.getName` en una clase derivada, porque no hay ninguna entrada en la cadena del prototipo para recuperar el método de la clase base.

{{< content-ads/middle-banner-8 >}}

### Parámetros `this` {#this-parameters}

En la definición de un método o función, un parámetro inicial llamado `this` tiene un significado especial en TypeScript.
Estos parámetros se borran durante la compilación:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBAyg9gWwgFXNAvFAhgOxAbgFgAoAelKgFpqBjAV2GspPKlUhhoCcBLMYKDxxgGUAO49gACygByaTwDOsqGCxcsSYBC4kAZnRw1gPODih6cACgWKAXLEQo0AGigAPBzjoIARjoBKKABvEigoUgAqKAA6OKhI0hIAXyA)

```ts
// Entrada de TypeScript con el parámetro 'this'
function fn(this: SomeType, x: number) {
  /* ... */
}
```

```js
// Salida JavaScript
function fn(x) {
  /* ... */
}
```

TypeScript verifica que llamar a una función con un parámetro `this` se haga con un contexto correcto.
En lugar de usar una función de flecha, podemos agregar un parámetro `this` a las definiciones de métodos para hacer cumplir estáticamente que el método se llame correctamente:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwDYAcAWAsAFADGANgIaKKgCyAngMLmWgDehooAdmQLaSgBeUACI6jComEBudqADmkAC4A5XpAAUigBYBLFDQZNEASlayO0JQFdonUNr0A6bnxkEOAX0JficTokVQIkEuSAB3A3FKdWM3EFAAeQBpQiJHBRU1GLdCeIBRWAQAGlAwuCsSABMg6AotVL8A+RC0jNVXBv84EkhHEjg5dUHjWKA)

```ts
class MyClass {
  name = "MyClass";
  getName(this: MyClass) {
    return this.name;
  }
}
const c = new MyClass();
// OK
c.getName();
 
// Error, fallaría
const g = c.getName;
console.log(g());
```

```text {filename="Error generado"}
The 'this' context of type 'void' is not assignable to method's 'this' of type 'MyClass'.
```

Este método hace las compensaciones opuestas al enfoque de la función de flecha:

- Los callers de JavaScript aún pueden usar el método de clase incorrectamente sin darse cuenta.
- Sólo se asigna una función por definición de clase, en lugar de una por instancia de clase.
- Las definiciones de métodos base aún se pueden llamar a través de `super`.

## Tipos `this` {#this-types}

En las clases, un tipo especial llamado `this` se refiere *dinámicamente* al tipo de la clase actual.
Veamos cómo es útil esto:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAEBCD2APaBvAsAKGtY8B2ALgKaEQBc0EBATgJZ4Dm0AvNAERsDcm2ERBACgBuYEAFciFKnUYBKVJgD0i7AD0A-D2zQCAC1oQAdLkIkCMViPFFuWbdX5jqeHfoi3sAX0yegA)

```ts
class Box {
  contents: string = "";
  set(value: string) {
  
(method) Box.set(value: string): this
    this.contents = value;
    return this;
  }
}
```

{{< content-ads/middle-banner-9 >}}

Aquí, TypeScript infirió que el tipo de retorno de `set` era `this`, en lugar de `Box`.
Ahora hagamos una subclase de `Box`:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAEBCD2APaBvAsAKGtY8B2ALgKaEQBc0EBATgJZ4Dm0AvNAERsDcm2ERBACgBuYEAFciFKnUYBKVD2zQCAC1oQAdLkIkCMViPFFuWJdX5jqeZWognsAX0xOMAelfQAtN+BiC3z0xQSBgAYRAiMGowACMIhGQiRGI8ABMYBIVTUEjqAXl0U2xVdS18FL0Wdi5FFxcg-CpoMCq8IgB3aHDc2PikfJNtJpiqsA0+QTYVIhAQeDZZE3claAA9AH4gA)

```ts
class ClearableBox extends Box {
  clear() {
    this.contents = "";
  }
}
 
const a = new ClearableBox();
const b = a.set("hello");
     
const b: ClearableBox
```

También puedes usar `this` en una anotación de tipo de parámetro:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAEBCD2APaBvAsAKGtY8B2ALgKaEBc0EBATgJZ4Dm0AvNAESsDcm2EYAtkQCCEABTwCACyJVykmhACUqbtmhUiBAK5U80cVKoA6XIRIFmTFnIjH8xQlyzQAvpmdA)

```ts
class Box {
  content: string = "";
  sameAs(other: this) {
    return other.content === this.content;
  }
}
```

Esto es diferente a escribir `other: Box`: si tienes una clase derivada, su método `sameAs` ahora solo aceptará otras instancias de esa misma clase derivada:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGYAsBWAsAFADGANgIaKKgBCcAHqAN6GihFwB2ALpN6ol2gBLDgHNQAXlAAiaQG4WoRGQC2kAIKIAFHC4ALGKn1DEASiaLW0SFwCu0DqF0HoAOnbdeXSRKnHE7pw83AoErAC+hJEEhKQUVAAiMEIAbpAAJrQMkHTB6VRZFmFO+jAAwkFe-IIi4lLSAPzyUYSxnAKgAEYUkJKgHJAA7jT0WqahHh3pyWnpfQPDScKzWWOh08sZrspqmlrdiJDjQA)

```ts
class Box {
  content: string = "";
  sameAs(other: this) {
    return other.content === this.content;
  }
}
 
class DerivedBox extends Box {
  otherContent: string = "?";
}
 
const base = new Box();
const derived = new DerivedBox();
derived.sameAs(base);
```

```text {filename="Error generado"}
Argument of type 'Box' is not assignable to parameter of type 'DerivedBox'.
  Property 'otherContent' is missing in type 'Box' but required in type 'DerivedBox'.
```

### Protecciones de tipo basadas en `this` {#this-based-type-guards}

Puedes usar `this is Type` en la posición de retorno para métodos en clases e interfaces.
Cuando se mezcla con un tipo de estrechamiento (por ejemplo, declaraciones "if"), el tipo del objeto de destino se limitará al `Type` especificado.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEGcBcCcEsDG0AKsD2AHApraBPASQDt5p4BDAG3gC8Lz1iAuUAM2smwFgAoRKhUiRQAMXhVsAZXwxsAWwDyAIwBW2ZKADefUKHiRxkgBQBKVtAAWB-SKPYAStkzbde0LGzQArrGKgrG3hiGApiRGx0NjEJR2cAbjcAXzcDABF4T2R0WHwzC2sRGwys6Bz8V153Dy9ff0CikOgwiKjQEo0y3MSq0BTegwA5LwB3HIBrbAATfIDC21Bh6DHYSanQADI5mx1evU8fP23IADpiUYnpnr1+vUQmGFhvbNhjTG9lGkRQTAZLVkewQA5gAaH4IABuDGwoHOy0uU1YynQ6EkYVM2n6-T4AiEdliThc2AAHtBsMQpvjJDI5Eo1J1KncHnBnl03n8AXBgWD3p8kKB7sQyULOQhiECMbtqpBvDhXr8rGCOFQuKZrn0+Nj+IJhO1Mp1yqAScLKTFqbIyXT1JopQLrFQpp4WGbpBaFCprdAANoAXR6WuCZNgHAiiwuq2mjNAlnQMFFwP9fBxzPYkHQrHsNMtHoZAF5YdgRi7CcYAERsFHAZQUWAnaCk0tg8so0tqpO8eDRYxsNMnAz2MyStw99AnQXC6A9ECgAB6AH5NUaVTDO6Bu730vqXnlTEPeiOx-bHeSp2B54vsMv9F2D0Nw2tB1GDzGYKfZwveEkgA)

```ts
class FileSystemObject {
  isFile(): this is FileRep {
    return this instanceof FileRep;
  }
  isDirectory(): this is Directory {
    return this instanceof Directory;
  }
  isNetworked(): this is Networked & this {
    return this.networked;
  }
  constructor(public path: string, private networked: boolean) {}
}
 
class FileRep extends FileSystemObject {
  constructor(path: string, public content: string) {
    super(path, false);
  }
}
 
class Directory extends FileSystemObject {
  children: FileSystemObject[];
}
 
interface Networked {
  host: string;
}
 
const fso: FileSystemObject = new FileRep("foo/bar.txt", "foo");
 
if (fso.isFile()) {
  fso.content;
  
const fso: FileRep
} else if (fso.isDirectory()) {
  fso.children;
  
const fso: Directory
} else if (fso.isNetworked()) {
  fso.host;
  
const fso: Networked & FileSystemObject
}
```

Un caso de uso común para una protección de tipos basada en esto es permitir la validación diferida (lazy) de un campo en particular. Por ejemplo, este caso elimina un `undefined` del valor contenido dentro del cuadro cuando se ha verificado que `hasValue` es verdadero:

{{< content-ads/middle-banner-1 >}}

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAEBCD2APAPAFQHzQN4FgBQ00AbmCAK4CmA-AFzSoDc++hAFpAGqmUAUAlHQAurAJYwx2Ytwp1U0AL7YWhaACcKgsqoB20YWIB0JchWgBCALwXoZbQBMKAMxHaKdpgQX55zPMHjaEILQAEZI0NauAO5wSPweYYhG0hHQAEQA4mAAthRhAJ5pHviJySYeAPQVhAB6VL4ijtA8pewQXCb8fEqepcaUHoRVtfV48kA)

```ts
class Box<T> {
  value?: T;
 
  hasValue(): this is { value: T } {
    return this.value !== undefined;
  }
}
 
const box = new Box();
box.value = "Gameboy";
 
box.value;
     
(property) Box<unknown>.value?: unknown
 
if (box.hasValue()) {
  box.value;
       
(property) value: unknown
}
```

## Propiedades de parámetros {#parameter-properties}

TypeScript ofrece una sintaxis especial para convertir un parámetro de constructor en una propiedad de clase con el mismo nombre y valor.
Estas se denominan *propiedades de parámetros* y se crean anteponiendo un argumento de constructor con uno de los modificadores de visibilidad `public`, `private`, `pretected` o `readonly`.
El campo resultante obtiene esos modificadores:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGYAsBGAsAFADGANgIaKKgAKZ0ZAtlQN6GihFwB2iALtAFcivBAAo27UAAcBAIxIBLIqGiQyAE24kAnqAAeqLgIayYAGgnsp8XpGGR1obYeOnoFgpOnQFANzK2oABeLiYwEgCUoKyekiCgAHJwoLJw6rpcdpCUdNoSAL6EhcTcfKBkoAC8oJkA7jR0jIiiOGbobRgRANyEnDxwJJAAdCRwAOaiZEN63YTxXgvsAHoA-L2lA8OjE1NB3UA)

```ts
class Params {
  constructor(
    public readonly x: number,
    protected y: number,
    private z: number
  ) {
    // El cuerpo no es necesario.
  }
}
const a = new Params(1, 2, 3);
console.log(a.x);
             
(property) Params.x: number
console.log(a.z);
```

```text {filename="Error generado"}
Property 'z' is private and only accessible within class 'Params'.
```

## Expresiones de clase {#class-expressions}

> Lectura previa: [Expresiones de clase (MDN) ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/class)
>

Las expresiones de clase son muy similares a las declaraciones de clase.
La única diferencia real es que las expresiones de clase no necesitan un nombre, aunque podemos referirnos a ellas mediante cualquier identificador al que terminaron vinculadas:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYewdgzgLgBBIFsCmBhANgQwhGBeGwm2APACoCeADkgHwwDeAsAFAwHhRJhQBcMF1ANws2oSFABOAV2BQQEgBQA3DGilI+ApAEoGItjCgALAJYQAdGM7c8MFWqTDWMAL4sXTlmOgwEtsEgA7nCIqEQQCgBEABJIaGggADQwgfJoACaR2k4A9DkGMAB6APxAA)

```ts
const someClass = class<Type> {
  content: Type;
  constructor(value: Type) {
    this.content = value;
  }
};
 
const m = new someClass("Hello, world");
     
const m: someClass<string>
```

## Firmas de constructor {#constructor-signatures}

Las clases de JavaScript se instancian con el operador `new`. Dado el tipo de una clase en sí, el tipo de utilidad [InstanceType ↗](https://www.typescriptlang.org/docs/handbook/utility-types.html#instancetypetype) modela esta operación.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAEAKD2BLAdgF2gbwLAChrWACcBTMVYgEwEFUAuaZAVwFsAjYwgbl3wA96mbDtzzQAngJbtCPAvGQRUhRsFTxCACn4MpHADTjJQwgEpMs-KgAWiCADoipctXQBeaABEyxO8ngB3DRMLaGtbO15od14RfEsbezEo8VjoAF9cDJxUMQAHYjgkNABJBVQwZGAC91LFCqqAFTziAB4c-PgAM0KUVAA+XFxOxkrURHloZngAN2IAJUQAcytUDVyiuh6SsvriM2xRdd6I6ABqdwBWESzcYHlFaCO0ZORify3VgGYDABYTESmswWy1WT1Q-1wYIinGgAHpYVE+tAABxAA)

{{< content-ads/middle-banner-2 >}}

```ts
class Point {
  createdAt: number;
  x: number;
  y: number
  constructor(x: number, y: number) {
    this.createdAt = Date.now()
    this.x = x;
    this.y = y;
  }
}
type PointInstance = InstanceType<typeof Point>
 
function moveRight(point: PointInstance) {
  point.x += 5;
}
 
const point = new Point(3, 4);
moveRight(point);
point.x; // => 8
```

## Clases y miembros `abstract` {#abstract-classes-and-members}

Las clases, métodos y campos en TypeScript pueden ser *abstractos*.

Un *método abstracto* o *campo abstracto* es aquel al que no se le ha proporcionado una implementación.
Estos miembros deben existir dentro de una *clase abstracta*, de la que no se puede crear una instancia directamente.

La función de las clases abstractas es servir como clase base para las subclases que implementan todos los miembros abstractos.
Cuando una clase no tiene miembros abstractos, se dice que es *concreta*.

Veamos un ejemplo:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwFYCMWCwAoAQwCNEAXaQgYzNCoBtDFFQAhJyUAbwNFBPKUaoAOaQyAOUIBbSAAoAlKkEBLAHYiA3AV6gADtHWSZ8hd118qcNYjj1IAOnpwRcgEQAJSPWcAaUG6gANSgZAAWKogOYsayigra+HwAvgSp+ARWNrTEoAC8oGqQAO5sHIqaQA)

```ts
abstract class Base {
  abstract getName(): string;
 
  printName() {
    console.log("Hello, " + this.getName());
  }
}
 
const b = new Base();
```

```text {filename="Error generado"}
Cannot create an instance of an abstract class.
```

No podemos crear una instancia de `Base` con `new` porque es abstracta.
En lugar de ello, necesitamos crear una clase derivada e implementar los miembros abstractos:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/IYIwzgLgTsDGEAJYBthjAgQmgpgg3gLABQCCokM8CA5jhAHLAC2OAFAJQBcClAlgDsaAbhJkADlEGMW7DgQC+JJcQD0qhAFptsAK4RtmkijQYAIjikA3HABMEOAB4QcA2xmxg8RUrXpNWTgIxMgQoel0oAQQAIgB3AHsoZFsY0V8VFWMEgUgEewBeBAEcOIQLaztOdNsAOklpALlhIA)

```ts
class Derived extends Base {
  getName() {
    return "world";
  }
}
 
const d = new Derived();
d.printName();
```

Observa que si nos olvidamos de implementar los miembros abstractos de la clase base, obtendremos un error:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwFYCMGCwAoAQwCNEAXaQgYzNCoBtDFFQAhJyUAbwNFBPKUaoAOaQyAOUIBbSAAoAlKkEBLAHYiA3L1AAHaOskz5C7gF8CF-CFABae1QCuZe7YIMmLACIwVAN0gAE1BIAA8ySDVAlnZETh58PhsAMwQROFoyOFBA7MI1AE8yAAt1EUsgA)

```ts
class Derived extends Base {
  // olvidé hacer algo
}
```

{{< content-ads/middle-banner-3 >}}

```text {filename="Error generado"}
Non-abstract class 'Derived' does not implement inherited abstract member 'getName' from class 'Base'.
```

### Firmas de construcciones abstractas {#abstract-construct-signatures}

A veces quierrás aceptar alguna función constructora de clase que produce una instancia de una clase que deriva de alguna clase abstracta.

Por ejemplo, es posible que desees escribir este código:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwFYCMWCwAoAQwCNEAXaQgYzNCoBtDFFQAhJyUAbwNFBPKUaoAOaQyAOUIBbSAAoAlKkEBLAHYiA3L1AAHaOskz5C7gF8CF-AyYsAIjBUA3SABNQkAB5lIa1y3ZETh58PjEjWUVuHT5ocQBXaDVQACIU7VDQKysQUABaAqp4sgK8ggAzeLUaFThkkTjxORoEVDIAT11IOHK2DlMQvio68lB1ckJqzgBeUDVIAHc6MgRFDL5xskmqSAA6fUMpSIUMsyA)

```ts
function greet(ctor: typeof Base) {
  const instance = new ctor();
  instance.printName();
}
```

```text {filename="Error generado"}
Cannot create an instance of an abstract class.
```

TypeScript te dice correctamente que estás intentando crear una instancia de una clase abstracta.
Después de todo, dada la definición de `greet`, es perfectamente legal escribir este código, que terminaría construyendo una clase abstracta:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/CYUwxgNghgTiAEYD2A7AzgF3gcziDAXPFCgJ4A08AQlGiESaQNwCwAUAPQfwC0fYAVwx8e7LtSjAAhO1wh8AChp0AlEyA)

```ts
// Mal!
greet(Base);
```

En lugar de eso, quierrás escribir una función que acepte algo con una firma de constructor:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGYAsBWAsAFACGARogC7REDG5o1ANkYoqAELOSgDehoopClVqgA5pHIA5IgFtIACgCUqIQEsAdqIDcfUAAdoGqbIWKeAX0KWCjZqwAiMVQDdIAE1CQAHuUjq3rByIXLwE-OLGcko8uvzQEgCu0OqgAESpOmGg1tYgoAC0hdQJ5IX5hABmCeq0qnApovES8rQIqOqQAO6g0QC8AHzsnGah-NT1FKAaFEQ1XL2gHd2t0EqZ-NPks9SQAHQGRtJRipnWjZDNjoaubieE581BkCdAA)

```ts
function greet(ctor: new () => Base) {
  const instance = new ctor();
  instance.printName();
}
greet(Derived);
greet(Base);
```

```text {filename="Error generado"}
Argument of type 'typeof Base' is not assignable to parameter of type 'new () => Base'.
  Cannot assign an abstract constructor type to a non-abstract constructor type.
```

Ahora TypeScript te informa correctamente qué funciones constructoras de clase se pueden invocar: `Derived` puede porque es concreta, pero `Base` no.

{{< content-ads/middle-banner-4 >}}

## Relaciones Entre Clases {#relationships-between-classes}

En la mayoría de los casos, las clases en TypeScript se comparan estructuralmente, al igual que otros tipos.

Por ejemplo, estas dos clases se pueden usar en lugar de la otra porque son idénticas:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAEAKD2BLAdgFwIzQN4FgBQ00AHtALzQAMA3PoQJ5mU14C+++okMCKqATNlrFG1IQ3KjW7PAHoZ0APIBpDvGQRU0AA4AuOEjSZyyAKYB3fbz4AKAJRUgA)

```ts
class Point1 {
  x = 0;
  y = 0;
}
 
class Point2 {
  x = 0;
  y = 0;
}
 
// OK
const p: Point1 = new Point2();
```

De manera similar, las relaciones de subtipo entre clases existen incluso si no hay una herencia explícita:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEGcBcCcEsDG0BcoBmBDANpApgLABQi2mkkoACnrJAPYB2oA3saKI5gLZ5owJGAcwDc7UJiF9OAV24AjWmKIBfYsVLlKAUW4AHbPQCeePK3Fde-OPGHKOk6YzmLY90JByZYRtM4VKxGpExCCgAPIA0hpMMKB6aDR0TKAAvJx4AO6gugbGpgAUAJQiQA)

```ts
class Person {
  name: string;
  age: number;
}
 
class Employee {
  name: string;
  age: number;
  salary: number;
}
 
// OK
const p: Person = new Employee();
```

Esto suena sencillo, pero hay algunos casos que parecen más extraños que otros.

Las clases vacías no tienen miembros.
En un sistema de tipos estructurales, un tipo sin miembros es generalmente un supertipo de cualquier otra cosa.
Entonces, si escribes una clase vacía (¡no lo hagas!), se puede usar cualquier cosa en su lugar:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/MYGwhgzhAECiC2AHALgT2gbwL4FgBQ+AZgK4B2wyAlgPanSGkAUAHgFxxJoCUm+00AegHRgYUgHJk0ACbVoY1MgAWlUgHNoAd0rLo45uIA00CHICSW2pPy4CeIdACCIENADyAaQCERJttKymlwA3L6M2CFhDCFAA)

```ts
class Empty {}
 
function fn(x: Empty) {
  // No puedo hacer nada con 'x', así que no lo haré.
}
 
// ¡Todo bien!
fn(window);
fn({});
fn(fn);
```

{{< content-ads/bottom-banner >}}
