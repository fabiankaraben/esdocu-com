---
linkTitle: "Tipos mapeados"
title: "Tipos mapeados - TypeScript en Español"
description: "Genera tipos reutilizando un tipo existente."
weight: 7
type: docs
---

# Tipos mapeados

Cuando no quieres repetirte, a veces un tipo necesita basarse en otro tipo.

{{< content-ads/top-banner >}}

Los tipos mapeados se basan en la sintaxis de las firmas de índice, que se utilizan para declarar los tipos de propiedades que no se han declarado con anticipación:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBAEg9gJwM7QLxQN4F8DcAoAegKgFoyBjAV2DJL1EigHkA7AGxACE442kBBFgBN4yCEijoMeKFADaAawggAXFCTAEASxYBzALpqARjzYQAhiygAfWIhT5cePOTgsNUVywBmiALZIaqwc3LwCwqIoElIyUEIQbGqalBAANLEIcEIsymre5nxpeLhAA)

```ts
type OnlyBoolsAndHorses = {
  [key: string]: boolean | Horse;
};
 
const conforms: OnlyBoolsAndHorses = {
  del: true,
  rodney: false,
};
```

Un tipo mapeado es un tipo genérico que usa una unión de `PropertyKey`s (creadas con frecuencia [mediante un `keyof`](/typescript/handbook/manipulacion-tipos/tipos-de-acceso-indexado)) para iterar a través de claves para crear un tipo:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBA8mwEsD2A7AzgMQDYEMDmaAPACrgQB8UAvFAN4BQUUA2gAoBOSk7oUCKUANYQQSAGZRSkALoAuKACMkSLBBwoA3PQC+GoA)

```ts
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};
```

En este ejemplo, `OptionsFlags` tomará todas las propiedades del tipo `Type` y cambiará sus valores para que sean booleanos.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBA8mwEsD2A7AzgMQDYEMDmaAPACrgQB8UAvFAN4BQUUA2gAoBOSk7oUCKUANYQQSAGZRSkALoAuKACMkSLBBwoA3PQC+WgPR6oAWhMBjAK7ATR+qEhQMa4OfYQ01OoygATHO0EAskjeEPIAFACU1JQAbkgI3lpMKBAA7gCqaBDsHOIIquFRVLHxiTpatmQOTi4QcIio7jT1yOjY+ESOOM6uaOT6hkwAegD8QA)

```ts
type Features = {
  darkMode: () => void;
  newUserProfile: () => void;
};
 
type FeatureOptions = OptionsFlags<Features>;
           
type FeatureOptions = {
    darkMode: boolean;
    newUserProfile: boolean;
}
```

### Modificadores de mapeo {#mapping-modifiers}

Hay dos modificadores adicionales que se pueden aplicar durante el mapeo: `readonly` y `?` que afectan la mutabilidad y la opcionalidad respectivamente.

Puedes eliminar o agregar estos modificadores anteponiendo `-` o `+`. Si no agregas un prefijo, se supone `+`.

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAECUFMFsHsDdIGdQHIBOkCGATWA7AGwE9VQsAXC9ASwCMBXC5UAM3VmnNAuIAdIqFHw4D0FGsgBQvAaADCmSpACyTLHUKQAPABV+kAHygAvKADeU0KAC0SvEWKgA2gAVRkcU5r5QAa0hiWFZQfQEAXQAuUIM3Dy9wgG4pAF9kmQNQABlYAGMAnABBXNzYBnwKUwsrUHsCElAaHGikah8Ac2TrOsdQfCxoSBa2-E7U9NlIUABVIjyC4tLyyrNFbGY1Cg0tbRz8yCKSsorDZJBrUAA9AH4gA)

```ts
// Elimina los atributos de 'readonly' de las propiedades de un tipo
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};
 
type LockedAccount = {
  readonly id: string;
  readonly name: string;
};
 
type UnlockedAccount = CreateMutable<LockedAccount>;
           
type UnlockedAccount = {
    id: string;
    name: string;
}
```

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAECUFMFsHsDdIGdQHJYAcAuBLWA7AQwBtVRCssAnHAIwFctlQAzK2ac0LATw0lQoM7flVzIAUL36gAwgQDGVSEwA8AFT6QAfKAC8oAN4TQoANoAFEZDE9QOfKADWkHrBahN-ALoBaAPwAXJ5alta23gDcEgC+0VJaoACyhDy0kACqSDb6Rib2ACbBSNQOAObRpkTQkEGgJTT4FfmEZbXB+PTQ6VTRcRIJMlk5BvL4SiqQqilpmdlU2tEgpqAAev5AA)

{{< content-ads/middle-banner-1 >}}

```ts
// Elimina atributos 'optional' de las propiedades de un tipo
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};
 
type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};
 
type User = Concrete<MaybeUser>;
      
type User = {
    id: string;
    name: string;
    age: number;
}
```

## Remapeo de claves con `as` {#key-remapping-via-as}

En TypeScript 4.1 y posteriores, puedes remapear claves en tipos mapeados con una cláusula `as` en un tipo mapeado:

```ts
type MappedTypeWithNewProperties<Type> = {
    [Properties in keyof Type as NewKeyType]: Type[Properties]
}
```

Puedes aprovechar funciones como [tipos literales de plantilla](/typescript/handbook/manipulacion-tipos/tipos-literales-de-plantilla) para crear nuevos nombres de propiedades a partir de las anteriores:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBA4hzAgJwM4B4Aq4ID4oF4oBvAKCnKgG0AFJAe0iVCgEsA7KAawhDoDMoWSFACGKKAAMA5vAAkRAMIiwLYCIA2LAF4Q0KYEnZSoAMii0GyUDgC+EgLoAuKAAoAlATxCINeo1D2JDYA3CQk7IhIfCIAxtDUyCh0HKQUUGwiALYQzvqGbFKhaSIyzmwArpkARshFFOp0MSLALMm5BkahNmGgwgAyIlogCajJBLDwkegjSWw4oQD0CxQAegD8QA)

```ts
type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};
 
interface Person {
    name: string;
    age: number;
    location: string;
}
 
type LazyPerson = Getters<Person>;
         
type LazyPerson = {
    getName: () => string;
    getAge: () => number;
    getLocation: () => string;
}
```

Puedes filtrar claves generando `never` mediante un tipo condicional:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/PTAECUFMFsHsDdKgC4AskHIDWBLAdgCYagAOATrCZGcgJ4BQdVEMCkA0vgQGI6QA2BADwAVWlQB8oALygA3vVBLQAbQAKFKjVqh8oLJFqwAZqDHMAhgGdQAUQAeAY34BXApCEbK1OgBpQAES4hAESALoAXGbikOqaPrRh9AC+ANz09PjI1MYWjkgAwjhkzkgKyvpcUQGOxaUB6RVkFgQ4LlZReC7QAEbU6ckZTEichPyQVlZFJeMyLHCIozx8gkLTpRLpIMoAegD8QA)

```ts
// Elimina la propiedad 'kind'
type RemoveKindField<Type> = {
    [Property in keyof Type as Exclude<Property, "kind">]: Type[Property]
};
 
interface Circle {
    kind: "circle";
    radius: number;
}
 
type KindlessCircle = RemoveKindField<Circle>;
           
type KindlessCircle = {
    radius: number;
}
```

Puedes mapear uniones arbitrarias, no solo uniones de `string | number | symbol`, sino uniones de cualquier tipo:

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBAogbhAdsAwge0QMwJYHMA88SwAzlBAB7BIAmZA3lANbaI0BcUJwATq7lAC+APigBeKPQBQUWVADaMKK1gJkZAIZkY8gEQs2ugLpHOACghrgnGAEpxouGmw0A3FMFSpoSFADKAI4Arho8EETI4pLMrBxQuiTBoRC6ADRQFJyIQQC2AEYQPOkgWbkFPELuPtAo2DwAxgA24VZRjAZxuvV1TSnpPBo02EEkpfmFlV7VUOhYeFERqBg4BIEhYYtQAD4zPc2LwlIA9EdyAHoA-EA)

```ts
type EventConfig<Events extends { kind: string }> = {
    [E in Events as E["kind"]]: (event: E) => void;
}
 
type SquareEvent = { kind: "square", x: number, y: number };
type CircleEvent = { kind: "circle", radius: number };
 
type Config = EventConfig<SquareEvent | CircleEvent>
       
type Config = {
    square: (event: SquareEvent) => void;
    circle: (event: CircleEvent) => void;
}
```

### Exploración adicional {#further-exploration}

Los tipos mapeados funcionan bien con otras características en esta sección de manipulación de tipos, por ejemplo aquí está [un tipo mapeado usando un tipo condicional](/typescript/handbook/manipulacion-tipos/tipos-condicionales) que devuelve `true` o `false` dependiendo de si un objeto tiene la propiedad `pii` establecida en el literal `true`:

{{< content-ads/middle-banner-2 >}}

[Prueba este código ↗](https://www.typescriptlang.org/play#code/C4TwDgpgBAogHsATgQwMbAAoEksB4Aq4EAfFALxQDeAUFFANoaID2kioUAlgHZQDWEEMwBmUQpAC6ALjFFGLNqAlQICCNwAmAZypQwnTjKQBXaAF8oAfignoM4cgA2WiAG5qZ99VCQoAEQAhADFOCEdtcipaLg0ZSihhZkQAW2RgGQAiHlRECGT1YB4AcwyoT2juZHy4myIZLSRi1z0DI0RTMvdy7yIoAHkAIwArCHQtADkICA1igHE-DAAlPzCIQuZeCngkNEwcXECQsO1idwB6M7ooAD1LIA)

```ts
type ExtractPII<Type> = {
  [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};
 
type DBFields = {
  id: { format: "incrementing" };
  name: { type: string; pii: true };
};
 
type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;
                 
type ObjectsNeedingGDPRDeletion = {
    id: false;
    name: true;
}
```

{{< content-ads/bottom-banner >}}
