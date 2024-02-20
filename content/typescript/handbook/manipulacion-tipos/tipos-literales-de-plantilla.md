---
linkTitle: "Tipos literales de plantilla"
title: "Tipos literales de plantilla - TypeScript en Español"
description: "Genera tipos de mapeo que cambian propiedades a través de cadenas literales de plantilla."
weight: 8
type: docs
next: /typescript/handbook/classes
---

# Tipos literales de plantilla

Los tipos literales de plantilla se basan en [tipos literales de cadena](/typescript/handbook/tipos-comunes#literal-types) y tienen la capacidad de expandirse a muchas cadenas a través de uniones.

{{< content-ads/top-banner >}}

Tienen la misma sintaxis que [cadenas literales de plantilla en JavaScript ↗](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals), pero se utilizan en posiciones de tipo.
Cuando se utiliza con tipos literales concretos, un literal de plantilla produce un nuevo tipo literal de cadena al concatenar el contenido.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBA6g9gJwDYBMoF4oCIDujVYDcAUMaJFAOIIQTACWAdgOYZQAGAFhEknFABIA3vGQoAvuxIB6aVHkA9APxA)

```ts
type World = "world";
 
type Greeting = `hello ${World}`;
        
type Greeting = "hello world"
```

Cuando se usa una unión en la posición interpolada, el tipo es el conjunto de cada cadena literal posible que podría ser representada por cada miembro de la unión:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBAogtgQwJYBsAyB7AxglECSAIgM5QC8UARAO4QpYZwQD6EiqlUAPlW8iswAWEBABMkAOwDmlANwAoUJCgAxDBmAQATphx4ipCpQBm6zVubAkwPJx4mz25sQgTRGY8bnzF4aAEEUdGxcAhJyKAADABIAb3h+XVCDblVHHRD9EgBfZiRRSIUAeiKoMoA9AH4gA)

```ts
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
 
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
          
type AllLocaleIDs = "welcome_email_id" | "email_heading_id" | "footer_title_id" | "footer_sendoff_id"
```

Para cada posición interpolada en el literal de la plantilla, las uniones se multiplican de forma cruzada:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBAogtgQwJYBsAyB7AxglECSAIgM5QC8UARAO4QpYZwQD6EiqlUAPlW8iswAWEBABMkAOwDmlANwAoUJCgAxDBmAQATphx4ipCpQBm6zVubAkwPJx4mz25sQgTRGY8bnyA9D6gAtEFYAK7AQQGK4NAAgijo2LgEJORQAAYAJADe8Py6SQbcqo46ifokAL7MSKJpCkrQaAjSqZSudlQAVggdlGDA3lHK+XgAshDExAhSyYbp2U3SVdlxCXqzFXW+-lBQAHoA-EA)

```ts
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
type Lang = "en" | "ja" | "pt";
 
type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;
            
type LocaleMessageIDs = "en_welcome_email_id" | "en_email_heading_id" | "en_footer_title_id" | "en_footer_sendoff_id" | "ja_welcome_email_id" | "ja_email_heading_id" | "ja_footer_title_id" | "ja_footer_sendoff_id" | "pt_welcome_email_id" | "pt_email_heading_id" | "pt_footer_title_id" | "pt_footer_sendoff_id"
```

Generalmente recomendamos que las personas usen la generación anticipada (ahead-of-time) para uniones de cadenas grandes, pero esto es útil en casos más pequeños.

### Uniones de cadenas en tipos {#string-unions-in-types}

El poder de los literales de plantilla surge cuando se define una nueva cadena basada en información dentro de un tipo.

{{< content-ads/middle-banner-1 >}}

Considera el caso en el que una función (`makeWatchedObject`) agrega una nueva función llamada `on()` a un objeto pasado. En JavaScript, su llamada podría verse así: `makeWatchedObject(baseObject)`. Podemos imaginar que el objeto base se parece a:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEDsHsFECd7XgZwFAGNqRQF1AA4CGKKApgCYDyARgFZkb4C8oA3mqKAGYCWquAHJEAtmQBcoAEQBlItH7kpAGk6gANiSGiJ0gErYikFWqIBzXQCYAbKoC+AbiA)

```ts
const passedObject = {
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26,
};
```

La función `on` que se agregará al objeto base espera dos argumentos, un `eventName` (un `string`) y un `callback` (una `function`).

El `eventName` debe tener la forma `attributeInThePassedObject + "Changed"`; por lo tanto, `firstNameChanged` se deriva del atributo `firstName` en el objeto base.

La función `callback`, cuando se llama:

- Se debe pasar un valor del tipo asociado con el nombre `attributeInThePassedObject`; por lo tanto, dado que `firstName` se escribe como `string`, la devolución de llamada para el evento `firstNameChanged` espera que se le pase un `string` en el momento de la llamada. De manera similar, los eventos asociados con `age` deberían ser llamados con un argumento `number`.
- Debe tener un tipo de devolución `voidv (para simplificar la demostración)

La firma de la función ingenua de `on()` podría ser: `on(eventName: string, callback: (newValue: any) => void)`. Sin embargo, en la descripción anterior, identificamos restricciones de tipo importantes que nos gustaría documentar en nuestro código. Los tipos de literales de plantilla nos permiten incorporar estas restricciones a nuestro código.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEDsHsFECd7XgZwFABMCmBjANgIbxagBmArpDgC4CW0koAtgQNZYDqB1OAFlhgDyAIwBWuagApoYgFygCkAJ4BKeYqUBuNCFABaAznLUDetDgYpqoAA5ZUDUAF5mbTtz4CR4mpIDeaKBktKjUAHIETFjyAEQAygTQIShYMQA0gaCEVhFRsQBKDIrpmQQA5tGgAEwAbBkAviraOmAs7Fw8-EJiEqC8BCgKGNgYoAAGDGOg1NDT-AowykzQ5IPeEmhodg6QAHQMkjGkyeGRWADC-ZAVGOmgkpBYAO4AagR45FgqzgB8oAFBCyQFDQPBYXZ4aBlSRjY6hXIkJ4DUB8RQ3aazAAkfker3en3qAEIxk00I1NEA)

```ts
const person = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26,
});
 
// makeWatchedObject ha agregado `on` al Object anónimo

person.on("firstNameChanged", (newValue) => {
  console.log(`firstName was changed to ${newValue}!`);
});
```

Observa que `on` escucha el evento `"firstNameChanged"`, no solo `"firstName"`. Nuestra ingenua especificación de `on()` podría hacerse más sólida si nos aseguráramos de que el conjunto de nombres de eventos elegibles estuviera restringido por la unión de nombres de atributos en el objeto observado con "Changed" agregado al final. Si bien nos sentimos cómodos haciendo este tipo de cálculo en JavaScript, es decir, ```Object.keys(passedObject).map(x => `${x}Changed`)```, los literales de plantilla *dentro del sistema de tipos* proporcionan un enfoque similar para la manipulación de cadenas:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBACgTgezAUQG4QHbAMoIK5wDGEAPACrgQB8UAvFAN4BQUrUCGAFBOlgHIBDALYQAXFAAGAEgYBnYHACWGAOZQAZFADWEEAgBmUCpAC+AYQAWA1RAAmEgDRRCAgDauARgMJbxnDBAA7gBqbnhiUNYgAJR0NKgIirbR4glJANxMJplMAPT5UGZwEALA0AJQAESBpYQWduweAFYQhMCVUIGKwBaRGJIcElAiPQi2eQWyCFA9pVB6eM7WnbW9+ghwzlY2sjPTYIiQcMCKELIAdEy2ra4CxVD6eBhtihzDAjoA6qt2APLNrWA5EoVE4CGa4mMEBSRkoGlghzQmBw+CIpChVHSQA)

{{< content-ads/middle-banner-2 >}}

```ts
type PropEventSource<Type> = {
    on(eventName: `${string & keyof Type}Changed`, callback: (newValue: any) => void): void;
};
 
/// Crea un "watched object" con un método `on` para que 
/// puedas observar los cambios en las propiedades.
declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;
```

Con esto, podemos construir algo que genere errores cuando se le dé la propiedad incorrecta:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAEAEFMCdoe2gZwFygEwGYAsBWAUAC4CeADpKAArwkCiAbpAHYEDKcArtAMaQA8AKqUgA+UAF5QAbzyhZoOIwAUkBswByAQwC2kVAAMAJJMQFoAS0YBzUADJQAa0hE4AM1CCyAXwDCACw1WkAAmegA0oFwaADZRAEYaXPaoioyQAO4AatHsuqABRACU4qJ0cGZBBail5QDceJ51eEGQXFEa0OQu7IxcBGYKoFoajgDqGgRcvsEA8rEAVi0EAsKKcPOo-JXutpTU9EysHNx8-MJ1IKAAtNdc7ATXl3hcCiagZEgDEkOj45Mz84tFNJZC4zEgCJodKgAEQsDRlJCQaGhGSgNomSG5aEAJQUAWRqI0llyaAAbPUCo13ogFAA6BSKaGg8GYvwBYlBZGgRRFMSiSSeSl4PAXKgqA6gSAaRBEUC+dhDRiS2AIbnsRAWawEKYOJygCwmKVBeRubXkcXMUCMbSQAp4al0hlMsEYm1cnnFKSCxoXACSBAA5IhQMQSHBLh0NSYAgR7TAaYx6UomSybWzApzwh6+V7KUA)

```ts
const person = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26
});
 
person.on("firstNameChanged", () => {});
 
// Evita errores humanos fáciles (usando la clave en lugar del nombre del evento)
person.on("firstName", () => {});
 
// Es resistente a errores tipográficos
person.on("frstNameChanged", () => {});
Argument of type '"frstNameChanged"' is not assignable to parameter of type '"firstNameChanged" | "lastNameChanged" | "ageChanged"'.2345Argument of type '"frstNameChanged"' is not assignable to parameter of type '"firstNameChanged" | "lastNameChanged" | "ageChanged"'.
```

```text {filename="Error generado"}
Argument of type '"firstName"' is not assignable to parameter of type '"firstNameChanged" | "lastNameChanged" | "ageChanged"'.
```

### Inferencia con literales de plantilla {#inference-with-template-literals}

Observa que no nos beneficiamos de toda la información proporcionada en el objeto pasado original. Dado el cambio de un `firstName` (es decir, un evento `firstNameChanged`), deberíamos esperar que la devolución de llamada reciba un argumento de tipo `string`. De manera similar, la devolución de llamada para un cambio en `age` debe recibir un argumento `number`. Estamos usando ingenuamente `any` para tipar el argumento de la "devolución de llamada" (`callback`). Nuevamente, los tipos literales de plantilla permiten garantizar que el tipo de datos de un atributo sea el mismo tipo que el primer argumento de la devolución de llamada de ese atributo.

La idea clave que hace esto posible es la siguiente: podemos usar una función con un genérico tal que:

1. El literal usado en el primer argumento se captura como un tipo literal.
2. Ese tipo literal se puede validar como si estuviera en la unión de atributos válidos en el genérico.
3. El tipo de atributo validado se puede buscar en la estructura del genérico utilizando Acceso Indexado.
4. Esta información de escritura se puede *luego* aplicar para garantizar que el argumento de la función de devolución de llamada es del mismo tipo

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBACgTgezAUQG4QHbAMoIK5wDGEAPACrgQB8UAvFAN4BQUrUCGJA0hCFBAA9gmACYBnKGOBwAlhgDmUAGRQA1rwQAzKBUhUWbQwAoI6LADkAhgFsIALigADACQMeIAL4BhABaWFECKOADRQhJYANhEARpaEqg5GGBAA7gBqkXj2OpQA2u4AugCUdDSoCDIiRQ7llQDcTB4NTCIQhBGWcNCaeBiEwDIcUNaW6gDqlsCEPoEA8tEAVm3A5JRURgiLDroQ1TmQyrCIKGY4+ESkO1TNhBxSUJBwYkP0I+OT03OLy0bMrJoyJ7AKy2BwAImwlgqTwgYOCBg6UhB2TBACUOP44QZLPJsgAmABsjSKzUezwwADoOEYwQCgcjfP5cSI4VBkilkaVGAZWAB6XmGQVC4WsAB6AH4eWE7ggIhAKREEPIjI52WybNAZBJXOzkRTgAgAKpgR5eSxiCBGIoeRwk4mkiBPDhUjA0nEQRkBFmhdkAQVxXL+bH5ItDUAlUpk2iSqX90BIUAADCUg0LbhhnnKKSlOq6wTm4Bg5PIAIRsiDySYydBQd1gu2GDzEoA)

```ts
type PropEventSource<Type> = {
    on<Key extends string & keyof Type>
        (eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void): void;
};
 
declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;
 
const person = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26
});
 
person.on("firstNameChanged", newName => {
                                
(parameter) newName: string
    console.log(`new name is ${newName.toUpperCase()}`);
});
 
person.on("ageChanged", newAge => {
                          
(parameter) newAge: number
    if (newAge < 0) {
        console.warn("warning! negative age");
    }
})
```

Aquí convertimos `on` en un método genérico.

{{< content-ads/middle-banner-3 >}}

Cuando un usuario llama con la cadena `"firstNameChanged"`, TypeScript intentará inferir el tipo correcto para `Key`.
Para hacer eso, comparará `Key` con el contenido antes de `"Changed"` e inferirá la cadena `"firstName"`.
Una vez que TypeScript se da cuenta de eso, el método `on` puede recuperar el tipo de `firstName` en el objeto original, que es `string` en este caso.
De manera similar, cuando se llama con `"ageChanged"`, TypeScript encuentra el tipo de la propiedad `age` que es `number`.

La inferencia se puede combinar de diferentes maneras, a menudo para deconstruir cadenas y reconstruirlas de diferentes maneras.

## Tipos de manipulación de cadenas intrínsecas {#intrinsic-string-manipulation-types}

Para ayudar con la manipulación de cadenas, TypeScript incluye un conjunto de tipos que se pueden usar en la manipulación de cadenas. Estos tipos vienen integrados en el compilador para mejorar el rendimiento y no se pueden encontrar en los archivos `.d.ts` incluidos con TypeScript.

### `Uppercase<StringType>` {#uppercasestringtype}

Convierte cada carácter de la cadena a la versión en mayúsculas.

##### Ejemplo {#example}

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBA4gThCwCWA7A5lAvFARACQgBsiB7AGigHdS4iATXAKFEigGUALUgV1HkQoM2KAFUwkOAGMAhgGcIAHgFI06AHxMA9Fqh6AegH4mLcNACC7AMIBJG1ZlTOEANIQQi9sDhQIAD2AIVHo5KDlvNXURAAMbABEAWgASAG9xSVkFT291AF9o0zYAWRk0eJFLW3tHZzcPXABbEAB9GQlcTR09KCMgA)

```ts
type Greeting = "Hello, world"
type ShoutyGreeting = Uppercase<Greeting>
           
type ShoutyGreeting = "HELLO, WORLD"
 
type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`
type MainID = ASCIICacheKey<"my_app">
       
type MainID = "ID-MY_APP"
```

### `Lowercase<StringType>` {#lowercasestringtype}

Convierte cada carácter de la cadena al equivalente en minúsculas.

##### Ejemplo {#example-1}

{{< content-ads/middle-banner-4 >}}

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBA4gThCwCWA7A5lAvFARACQgBsiB7AGigHdS4iATXAKFEigEUBXZJeRFDNigAZUlQhwAxgEMAzhAA8fJGnQA+JgHpNUXQD0A-ExbhoAQQDKAYQCSNq9MkALCAGkIIBReBwoEAB7AEKj0slCyPqpqQgAGyPQAtAAkAN6i4lJyit5wagC+MSZsALLSaDYAIkKWtvaOLu6euMUAmgD6ZgAKnbga2rpQhkA)

```ts
type Greeting = "Hello, world"
type QuietGreeting = Lowercase<Greeting>
          
type QuietGreeting = "hello, world"
 
type ASCIICacheKey<Str extends string> = `id-${Lowercase<Str>}`
type MainID = ASCIICacheKey<"MY_APP">
       
type MainID = "id-my_app"
```

### `Capitalize<StringType>` {#capitalizestringtype}

Convierte el primer carácter de la cadena en un equivalente en mayúscula.

##### Ejemplo {#example-2}

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBAMg9gdwgJwMYEMDOEDiyITACWAdgOZQC8UARABYQA2jcANFAnMowCY0DcAKFCQoeAsXJUoAYXRgiwdIyIAvCAB54SNFlz5CpMgD4hAejNQrAPQD8QA)

```ts
type LowercaseGreeting = "hello, world";
type Greeting = Capitalize<LowercaseGreeting>;
        
type Greeting = "Hello, world"
```

### `Uncapitalize<StringType>` {#uncapitalizestringtype}

Convierte el primer carácter de la cadena a un equivalente en minúscula.

##### Ejemplo {#example-3}

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBAqmkCcDGBDAzhA4giFgEsA7AcygF4oAiACQFEAZegeSgHUmAlegEUoG4AUKEixCSAPYBbAGbiEwFACMANlhx4ipCjDEow+BcvwAvCAB44iVBmy4CJAHyCA9M6juAegH4gA)

```ts
type UppercaseGreeting = "HELLO WORLD";
type UncomfortableGreeting = Uncapitalize<UppercaseGreeting>;
              
type UncomfortableGreeting = "hELLO WORLD"
```

{{< content-ads/bottom-banner >}}
