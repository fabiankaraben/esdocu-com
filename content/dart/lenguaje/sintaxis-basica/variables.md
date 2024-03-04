---
linkTitle: "Variables"
title: "Variables - Dart en Español"
description: "Obtén más información sobre las variables en Dart."
weight: 1
type: docs
prev: /dart/language/language
---

# Variables

::

{{< content-ads/top-banner >}}

Aquí tienes un ejemplo de cómo crear una variable e inicializarla:

```dart
var name = 'Bob';
```

Las variables almacenan referencias. La variable llamada `name` contiene una referencia a un objeto `String` con un valor de "Bob".

Se infiere que el tipo de la variable `name` es `String`, pero puedes cambiar ese tipo especificándolo. Si un objeto no está restringido a un solo tipo, especifica el tipo `Object` (o `dynamic` si es necesario).

```dart
Object name = 'Bob';
```

Otra opción es declarar explícitamente el tipo que se inferiría:

```dart
String name = 'Bob';
```

## Null-safety {#null-safety}

El lenguaje Dart impone un comportamiento null-safety sólido.

Null-safety evita un error que resulte del acceso involuntario a variables asignadas en `null`. El error se denomina error de desreferencia nula. Se produce un error de desreferencia nula cuando accedes a una propiedad o llamas a un método en una expresión que se evalúa como `null`. Una excepción a esta regla es cuando `null` admite la propiedad o método, como `toString()` o `hashCode`. Con null-safety, el compilador Dart detecta estos errores potenciales en el momento de la compilación.

Por ejemplo, digamos que quieres encontrar el valor absoluto de una variable `int` llamada `i`. Si `i` es `null`, llamar a `i.abs()` provoca un error de desreferencia nula. En otros lenguajes, intentar esto podría provocar un error de tiempo de ejecución, pero el compilador de Dart prohíbe estas acciones. Por lo tanto, las aplicaciones de Dart no pueden provocar errores de tiempo de ejecución.

La null-safety introduce tres cambios clave:

1. Cuando especificas un tipo para una variable, parámetro u otro componente relevante, puedes controlar si el tipo permite `null`. Para habilitar la capacidad de nulidad, agrega un `?` al final de la declaración de tipo.
  ```dart
  String? name  // Tipo Nullable. Puede ser null o String.

  String name   // Tipo No-nullable. No puede ser null solo String.
  ```


2. Debes inicializar las variables antes de usarlas. Las variables que admiten valores `null` tienen el valor predeterminado `null`, por lo que se inicializan de forma predeterminada. Dart no establece valores iniciales para tipos que no aceptan valores `null`. Te obliga a establecer un valor inicial. Dart no te permite observar una variable no inicializada. Esto te impide acceder a propiedades o llamar a métodos donde el tipo del receptor puede ser `null`, y `nulo` no admite el método o propiedad utilizada.
3. No puedes acceder a propiedades ni llamar a métodos en una expresión con un tipo que acepta valores `null`. La misma excepción se aplica cuando es una propiedad o método que admite `null` como `hashCode` o `toString()`.

{{< content-ads/middle-banner-1 >}}

Null safety cambia los posibles **errores de tiempo de ejecución** en errores de análisis de **tiempo de edición**. Null-safety marca una variable no nula cuando ha sido:

- No inicializado con un valor no nulo.
- Se le asigna un valor `null`.

Esta verificación te permite corregir estos errores *antes* de implementar tu aplicación.

## Valor predeterminado {#default-value}

Las variables no inicializadas que tienen un tipo que acepta valores `null` tienen un valor inicial de `nulo`. Incluso las variables con tipos numéricos son inicialmente `null`, porque los números (como todo lo demás en Dart) son objetos.

```dart
int? lineCount;
assert(lineCount == null);
```

Con null-safety, debes inicializar los valores de las variables que no aceptan valores null antes de usarlas:

```dart
int lineCount = 0;
```

No es necesario inicializar una variable local donde está declarada, pero sí debes asignarle un valor antes de usarla. Por ejemplo, el siguiente código es válido porque Dart puede detectar que `lineCount` no es `null` cuando se pasa a `print()`:

```dart
int lineCount;

if (weLikeToCount) {
  lineCount = countLines();
} else {
  lineCount = 0;
}

print(lineCount);
```

Las variables globales y de clase se inicializan de forma diferida; el código de inicialización se ejecuta la primera vez que se utiliza la variable.

## Variables `late` {#late-variables}

El modificador `late` tiene dos casos de uso:

- Declarar una variable no-nullable que se inicializa después de su declaración.
- Inicializar diferidamente una variable.

A menudo, el análisis de control de flujo de Dart puede detectar cuando una variable que no acepta valores null se establece en un valor no nulo antes de usarse, pero a veces el análisis falla. Dos casos comunes son las variables globales y las variables de instancia: Dart a menudo no puede determinar si están configuradas, por lo que no lo intenta.

{{< content-ads/middle-banner-2 >}}

Si estás seguro de que una variable está configurada antes de usarse, pero Dart no está de acuerdo, puedes corregir el error marcando la variable como `late`:

```dart
 String description;

void main() {
  description = 'Feijoada!';
  print(description);
}
```

Cuando marcas una variable como `late` pero la inicializas en su declaración, el inicializador se ejecuta la primera vez que se usa la variable. Esta inicialización diferida es útil en un par de casos:

- Es posible que la variable no sea necesaria e inicializarla sea costosa.
- Estás inicializando una variable de instancia y su inicializador necesita acceso a `this`.

En el siguiente ejemplo, si la variable `temperature` nunca se usa, entonces la costosa función `readThermometer()` nunca se llama:

```dart
// Esta es la única llamada del programa que llama a readThermometer().
 String temperature = readThermometer(); // Lazily initialized.
```

## `final` y `const` {#final-and-const}

Si nunca tienes la intención de cambiar una variable, usa `final` o `const`, ya sea en lugar de `var` o además de un tipo. Una variable `final` sólo se puede configurar una vez; una variable `const` es una constante en tiempo de compilación. (Las variables constantes son implícitamente `final`).

Aquí tienes un ejemplo de cómo crear y configurar una variable `final`:

```dart
final name = 'Bob'; // Sin anotación de tipo
final String nickname = 'Bobby';
```

No puedes cambiar el valor de una variable `final`:

```dart {filename="✗ static analysis: failure"}
name = 'Alice'; // Error: una variable final solo se puede asignar una vez.
```

Usa `const` para las variables que quieras que sean **constantes en tiempo de compilación**. Si la variable constante está a nivel de clase, márcala como `static const`. Cuando declares la variable, estableces el valor en una constante de tiempo de compilación, como un número o una cadena literal, una variable constante o el resultado de una operación aritmética en números constantes:

```dart
const bar = 1000000; // Unit of pressure (dynes/cm2)
const double atm = 1.01325 * bar; // Standard atmosphere
```

La palabra clave `const` no es solo para declarar variables constantes. También puedes usarlo para crear *valores* constantes, así como para declarar constructores que *crean* valores constantes. Cualquier variable puede tener un valor constante.

{{< content-ads/middle-banner-3 >}}

```dart
var foo = const [];
final bar = const [];
const baz = []; // Equivalente a `const []`
```

Puedes omitir `const` de la expresión de inicialización de una declaración `const`, como para `baz` arriba. Para obtener más información, consulta [NO usar const de forma redundante ↗](https://dart.dev/effective-dart/usage#dont-use-const-redundantly).

Puedes cambiar el valor de una variable no `final` y no `const`, incluso si solía tener un valor `const`:

```dart
foo = [1, 2, 3]; // Era const []
```

No puedes cambiar el valor de una variable `const`:

```dart {filename="✗ static analysis: failure"}
baz = [42]; // Error: A las variables constantes no se les puede asignar un valor.
```

Puedes definir constantes que usan [verificaciones de tipo y conversiones (casts) ↗](https://dart.dev/language/operators#type-test-operators) (`is` y `as`), [ colección `if` ↗](https://dart.dev/language/collections#control-flow-operators), y [operadores spread ↗](https://dart.dev/language/collections#spread-operators) (`...` y `. ..?`):

```dart
const Object i = 3; // Donde i es una const Object con un valor int...
const list = [i as int]; // Uso de  typecast.
const map = {if (i is int) i: 'int'}; // Uso de is y collection if.
const set = {if (list is List<int>) ...list}; // ...y un spread.
```

Para obtener más información sobre el uso de `const` para crear valores constantes, consulta [Lists ↗](https://dart.dev/language/collections#lists), [Maps ↗](https://dart.dev/language/collections#maps) y [Clases ↗](https://dart.dev/language/classes).

{{< content-ads/bottom-banner >}}
