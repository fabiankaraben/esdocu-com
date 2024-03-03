---
linkTitle: "Iterable collections"
title: "Iterable collections | Dart - Dart en Español"
description: "An interactive guide to using Iterable objects such as lists and sets."
weight: 3
type: docs
---

# Colecciones iterables

::

{{< content-ads/top-banner >}}

Este codelab te enseña cómo usar colecciones que implementan la clase [Iterable ↗](https://api.dart.dev/stable/dart-core/Iterable-class.html), por ejemplo [List ↗](https://api.dart.dev/stable/dart-core/List-class.html) y [Set ↗](https://api.dart.dev/stable/dart-core/Set-class.html). Los iterables son bloques de construcción básicos para todo tipo de aplicaciones de Dart, y probablemente ya los estés usando, incluso sin darte cuenta. Este codelab te ayuda a aprovecharlos al máximo.

Utilizando los editores integrados de DartPad, puedes probar tus conocimientos ejecutando código de ejemplo y completando ejercicios.

Para aprovechar al máximo este codelab, debes tener conocimientos básicos de la [sintaxis de Dart ↗](https://dart.dev/language).

Este codelab cubre el siguiente material:

- Cómo leer elementos de un Iterable.
- Cómo comprobar si los elementos de un Iterable cumplen una condición.
- Cómo filtrar el contenido de un Iterable.
- Cómo asignar el contenido de un Iterable a un valor diferente.

Tiempo estimado para completar este codelab: 60 minutos.

Los ejercicios de este codelab tienen fragmentos de código parcialmente completados. Puedes utilizar DartPad para poner a prueba tus conocimientos completando el código y haciendo clic en el botón **Run**. **No edites el código de tests en la función `main` o debajo**.

Si necesitas ayuda, expande el menú desplegable **Sugerencia** o **Solución** después de cada ejercicio.

## ¿Qué son las colecciones? {#what-are-collections}

Una colección es un objeto que representa un grupo de objetos, los cuales se llaman *elementos*. Los *Iterables* son un tipo de colección.

Una colección puede estar vacía o puede contener muchos elementos. Dependiendo del propósito, las colecciones pueden tener diferentes estructuras e implementaciones. Estos son algunos de los tipos de colección más comunes:

- [List: ↗](https://api.dart.dev/stable/dart-core/List-class.html) Se utiliza para leer elementos por sus índices.
- [Set: ↗](https://api.dart.dev/stable/dart-core/Set-class.html) Se utiliza para contener elementos que pueden aparecer solo una vez.
- [Map: ↗](https://api.dart.dev/stable/dart-core/Map-class.html) Se utiliza para leer elementos usando una clave.

## ¿Qué es un `Iterable`? {#what-is-an-iterable}

Un `Iterable` es una colección de elementos a los que se puede acceder de forma secuencial.

En Dart, un `Iterable` es una clase abstracta, lo que significa que no puedes crear una instancia de él directamente. Sin embargo, puedes crear un nuevo `Iterable` creando una nueva `List` o `Set`.

{{< content-ads/middle-banner-1 >}}

Tanto `List` como `Set` son `Iterable`, por lo que tienen los mismos métodos y propiedades que la clase `Iterable`.

Un `Map` utiliza una estructura de datos diferente internamente, dependiendo de su implementación. Por ejemplo, [HashMap ↗](https://api.dart.dev/stable/dart-collection/HashMap-class.html) usa una tabla hash en la que los elementos (también llamados *valores*) se obtienen usando una clave. Los elementos de un `Map` también se pueden leer como objetos `Iterable`s utilizando la propiedad `entries` o `values` del map.

Este ejemplo muestra una `List` de `int`, que también es un `Iterable` de `int`:

```dart
Iterable<int> iterable = [1, 2, 3];
```

La diferencia con una `List` es que con `Iterable`, no puedes garantizar que la lectura de elementos por índice sea eficiente. `Iterable`, a diferencia de `List`, no tiene el operador `[]`.

Por ejemplo, considera el siguiente código, que es **inválido**:

```dart {filename="Código incorrecto"}
Iterable<int> iterable = [1, 2, 3];
int value = iterable;
```

Si lees elementos con `[]`, el compilador te dice que el operador `'[]'` no está definido para la clase `Iterable`, lo que significa que no puedes utilizar `[index]` en este caso.

En su lugar, puedes leer elementos con `elementAt()`, que recorre los elementos del iterable hasta llegar a esa posición.

```dart
Iterable<int> iterable = [1, 2, 3];
int value = iterable.elementAt(1);
```

Continúa con la siguiente sección para aprender más sobre cómo acceder a elementos de un `Iterable`.

## Leyendo elementos {#reading-elements}

Puedes leer los elementos de un iterable secuencialmente, usando un bucle `for-in`.

### Ejemplo: Usar un bucle for-in {#example-using-a-for-in-loop}

El siguiente ejemplo te muestra cómo leer elementos usando un bucle `for-in`.

{{< content-ads/middle-banner-2 >}}

```dart
void main() {
  const iterable = ['Salad', 'Popcorn', 'Toast'];
  for (final element in iterable) {
    print(element);
  }
}
```

### Ejemplo: Usando `first` y `last` {#example-using-first-and-last}

En algunos casos, deseas acceder solo al primer o al último elemento de un `Iterable`.

Con la clase `Iterable`, no puedes acceder a los elementos directamente, por lo que no puedes llamar a `iterable[0]` para acceder al primer elemento. En su lugar, puedes usar `first`, que obtiene el primer elemento.

Además, con la clase `Iterable`, no puedes usar el operador `[]` para acceder al último elemento, pero puedes usar la propiedad `last`.

```dart
void main() {
  Iterable<String> iterable = const ['Salad', 'Popcorn', 'Toast'];
  print('El primer elemento es ${iterable.first}');
  print('El último elemento es ${iterable.last}');
}
```

En este ejemplo viste cómo usar `first` y `last` para obtener el primer y último elemento de un `Iterable`. También es posible encontrar el primer elemento que satisfaga una condición. La siguiente sección muestra cómo hacerlo usando un método llamado `firstWhere()`.

### Ejemplo: Usando `firstWhere()` {#example-using-firstwhere}

Ya viste que puedes acceder a los elementos de un `Iterable` de forma secuencial, y puedes obtener fácilmente el primer o el último elemento.

Ahora aprenderás a usar `firstWhere()` para encontrar el primer elemento que satisfaga ciertas condiciones. Este método requiere que pases un *predicado*, que es una función que devuelve verdadero si la entrada satisface una determinada condición.

```dart
String element = iterable.firstWhere((element) => element.length > 5);
```

Por ejemplo, si quieres encontrar el primer `String` que tenga más de 5 caracteres, debes pasar un predicado que devuelva `true` cuando el tamaño del elemento sea mayor que 5.

Ejecuta el siguiente ejemplo para ver cómo funciona `firstWhere()`. ¿Crees que todas las funciones darán el mismo resultado?

```dart
bool predicate(String item) {
  return item.length > 5;
}

void main() {
  const items = ['Salad', 'Popcorn', 'Toast', 'Lasagne'];

  // Puedes buscar con una expresión simple:
  var foundItem1 = items.firstWhere((item) => item.length > 5);
  print(foundItem1);

  // O prueba usando una función en bloque:
  var foundItem2 = items.firstWhere((item) {
    return item.length > 5;
  });
  print(foundItem2);

  // O incluso pasando una referencia a una función:
  var foundItem3 = items.firstWhere(predicate);
  print(foundItem3);

  // ¡También puede usar una función `orElse` en 
  // caso de que no se encuentre ningún valor!
  var foundItem4 = items.firstWhere(
    (item) => item.length > 10,
    orElse: () => 'None!',
  );
  print(foundItem4);
}
```

En este ejemplo, puedes ver tres formas diferentes de escribir un predicado:

{{< content-ads/middle-banner-3 >}}

- **Como expresión:** El código de test tiene una línea que usa sintaxis de flecha (`=>`).
- **Como bloque:** El código de test tiene varias líneas entre paréntesis y una declaración de devolución `return`.
- **Como función:** El código de test está en una función externa que se pasa al método `firstWhere()` como parámetro.

No existe un camino correcto o incorrecto. Utiliza la forma que mejor te funcione y que haz que tu código sea más fácil de leer y comprender.

El ejemplo final llama a `firstWhere()` con el parámetro opcional denominado `orElse`, que proporciona una alternativa cuando no se encuentra un elemento. En este caso, se devuelve el texto `'None!'` porque ningún elemento satisface la condición proporcionada.

### Ejercicio: Practica escribir un predicado de test {#exercise-practice-writing-a-test-predicate}

El siguiente ejercicio es un test unitario fallido que contiene un fragmento de código parcialmente completo. Tu tarea es completar el ejercicio escribiendo código para aprobar los tests. No es necesario implementar `main()`.

Este ejercicio presenta `singleWhere()`. Este método funciona de manera similar a `firstWhere()`, pero en este caso espera que solo un elemento de `Iterable` satisfaga el predicado. Si más de uno o ningún elemento en `Iterable` satisface la condición de predicado, entonces el método genera una excepción [StateError ↗](https://api.dart.dev/stable/dart-core/StateError-class.html).

Tu objetivo es implementar el predicado para `singleWhere()` que satisfaga las siguientes condiciones:

- El elemento contiene el carácter `'a'`.
- El elemento comienza con el carácter `'M'`.

Todos los elementos en los datos de test son [strings ↗](https://api.dart.dev/stable/dart-core/String-class.html); Puedes consultar la documentación de la clase para obtener ayuda.

```dart
// Implementa el predicado de singleWhere
// con las siguientes condiciones:
// * El elemento contiene el caracter `'a'`
// * El elemento comienza con el caracter `'M'`
String singleWhere(Iterable<String> items) {
  return items.singleWhere(TODO('Implement the outlined predicate.'));
}

// El siguiente código es usado para proveer un feedback a tu solución.
// No hay necesidad de que lo modifiques.
void main() {
  const items = [
    'Salad',
    'Popcorn',
    'Milk',
    'Toast',
    'Sugar',
    'Mozzarella',
    'Tomato',
    'Egg',
    'Water',
  ];

  try {
    final str = singleWhere(items);
    if (str == 'Mozzarella') {
      print('Success. All tests passed!');
    } else {
      print(
        'Tried calling singleWhere, but received $str instead of '
        'the expected value \'Mozzarella\'',
      );
    }
  } on StateError catch (stateError) {
    print(
      'Tried calling singleWhere, but received a StateError: ${stateError.message}. '
      'singleWhere will fail if 0 or many elements match the predicate.',
    );
  } on UnimplementedError {
    print(
      'Tried running `singleWhere`, but received an error. '
      'Did you implement the function?',
    );
  } catch (e) {
    print('Tried calling singleWhere, but received an exception: $e');
  }
}
```

{{% details title="Pista" closed="true" %}}
Tu solución podría utilizar los métodos `contains` y `startsWith` de la clase `String`.
{{% /details %}}

{{% details title="Solución" closed="true" %}}
```dart
String singleWhere(Iterable<String> items) {
  return items.singleWhere(
          (element) => element.startsWith('M') && element.contains('a'));
}
```
{{% /details %}}

## Condiciones de verificación {#checking-conditions}

Cuando trabajas con `Iterable`, a veces necesitas verificar que todos los elementos de una colección cumplan alguna condición.

Podrías sentirte tentado a escribir una solución usando un bucle `for-in` como este:

{{< content-ads/middle-banner-4 >}}

```dart {filename="Código incorrecto"}
for (final item in items) {
  if (item.length < 5) {
    return false;
  }
}
return true;
```

Sin embargo, puedes lograr lo mismo usando el método `every()`:

```dart
return items.every((item) => item.length >= 5);
```

El uso del método `every()` da como resultado un código más legible, compacto y menos propenso a errores.

### Ejemplo: Usar `any()` y `every()` {#example-using-any-and-every}

La clase `Iterable` proporciona dos métodos que puedes usar para verificar las condiciones:

- `any()`: Devuelve `true` si al menos un elemento satisface la condición.
- `every()`: Devuelve `true` si todos los elementos cumplen la condición.

Ejecuta este ejercicio para verlos en acción.

```dart
void main() {
  const items = ['Salad', 'Popcorn', 'Toast'];

  if (items.any((item) => item.contains('a'))) {
    print('Al menos un elemento contiene "a"');
  }

  if (items.every((item) => item.length >= 5)) {
    print('Todos los elementos tienen una longitud >= 5');
  }
}
```

En el ejemplo, `any()` verifica que al menos un elemento contenga el carácter `a`, y `every()` verifica que todos los elementos tengan una longitud igual o mayor a `5` .

Después de ejecutar el código, intenta cambiar el predicado de `any()` para que devuelva `false`:

```dart
if (items.any((item) => item.contains('Z'))) {
  print('Al menos un elemento contiene "Z"');
} else {
  print('Ningún elemento contiene "Z"');
}
```

También puedes usar `any()` para verificar que ningún elemento de un `Iterable` satisfaga una determinada condición.

### Ejercicio: Verificar que un `Iterable` satisface una condición {#exercise-verify-that-an-iterable-satisfies-a-condition}

El siguiente ejercicio proporciona práctica en el uso de los métodos `any()` y `every()`, descritos en el ejemplo anterior. En este caso, trabaja con un grupo de usuarios, representado por objetos `User` que tienen el campo miembro `age`.

{{< content-ads/middle-banner-5 >}}

Usa `any()` y `every()` para implementar dos funciones:

- Parte 1: Implementa `anyUserUnder18()`.
   - Devuelve `true` si al menos un usuario tiene 17 años o menos.
- Parte 2: Implementa `everyUserOver13()`.
   - Devuelve `true` si todos los usuarios tienen 14 años o más.

```dart
bool anyUserUnder18(Iterable<User> users) {
  // TODO: Implementa la función anyUserUnder18.
}

bool everyUserOver13(Iterable<User> users) {
  // TODO: Implementa la función eachUserOver13.
}

class User {
  final String name;
  final int age;

  User(
    this.name,
    this.age,
  );
}

// El siguiente código se utiliza para proporcionar comentarios sobre tu solución.
// No es necesario leerlo ni modificarlo.
void main() {
  final users = [
    User('Alice', 21),
    User('Bob', 17),
    User('Claire', 52),
    User('David', 14),
  ];

  try {
    final out = anyUserUnder18(users);
    if (!out) {
      print('Looks like `anyUserUnder18` is wrong. Keep trying!');
      return;
    }
  } on UnimplementedError {
    print(
      'Tried running `anyUserUnder18`, but received an error. '
      'Did you implement the function?',
    );
    return;
  } catch (e) {
    print('Tried running `anyUserUnder18`, but received an exception: $e');
    return;
  }

  try {
    // with only one user older than 18, should be false
    final out = anyUserUnder18([User('Alice', 21)]);
    if (out) {
      print(
          'Looks like `anyUserUnder18` is wrong. What if all users are over 18?');
      return;
    }
  } on UnimplementedError {
    print(
      'Tried running `anyUserUnder18`, but received an error. '
      'Did you implement the function?',
    );
    return;
  } catch (e) {
    print(
      'Tried running `anyUserUnder18([User("Alice", 21)])`, '
      'but received an exception: $e',
    );
    return;
  }

  try {
    final out = everyUserOver13(users);
    if (!out) {
      print(
        'Looks like `everyUserOver13` is wrong. '
        'There are no users under 13!',
      );
      return;
    }
  } on UnimplementedError {
    print(
      'Tried running `everyUserOver13`, but received an error. '
      'Did you implement the function?',
    );
    return;
  } catch (e) {
    print(
      'Tried running `everyUserOver13`, '
      'but received an exception: $e',
    );
    return;
  }

  try {
    final out = everyUserOver13([User('Dan', 12)]);
    if (out) {
      print(
        'Looks like `everyUserOver13` is wrong. '
        'There is at least one user under 13!',
      );
      return;
    }
  } on UnimplementedError {
    print(
      'Tried running `everyUserOver13`, but received an error. '
      'Did you implement the function?',
    );
    return;
  } catch (e) {
    print(
      'Tried running `everyUserOver13([User(\'Dan\', 12)])`, '
      'but received an exception: $e',
    );
    return;
  }

  print('Success. All tests passed!');
}
```

{{% details title="Pista" closed="true" %}}
Recuerda utilizar los métodos `any` y `every` de la clase `Iterable`. Para obtener ayuda y ejemplos sobre el uso de estos métodos, consulta la [discusión anterior sobre ellos](/dart/tutoriales-y-codelabs/codelabs/iterables#example-using-any-and-every).
{{% /details %}}

{{% details title="Solución" closed="true" %}}
```dart
bool anyUserUnder18(Iterable<User> users) {
  return users.any((user) => user.age < 18);
}

bool everyUserOver13(Iterable<User> users) {
  return users.every((user) => user.age > 13);
}
```
{{% /details %}}

## Filtrado {#filtering}

Las secciones anteriores cubren métodos como `firstWhere()` o `singleWhere()` que pueden ayudarte a encontrar un elemento que satisfaga un determinado predicado.

¿Pero qué pasa si quieres encontrar todos los elementos que satisfacen una determinada condición? Puedes lograrlo usando el método `where()`.

```dart
var evenNumbers = numbers.where((number) => number.isEven);
```

En este ejemplo, `numbers` contiene un `Iterable` con múltiples valores `int`, y `where()` encuentra todos los números pares.

La salida de `where()` es otro `Iterable`, y puedes usarlo como tal para iterar sobre él o aplicar otros métodos `Iterable`. En el siguiente ejemplo, la salida de `where()` se usa directamente dentro del bucle `for-in`.

```dart
var evenNumbers = numbers.where((number) => number.isEven);
for (final number in evenNumbers) {
  print('$number es par');
}
```

### Ejemplo: Usando `where()` {#example-using-where}

Ejecuta este ejemplo para ver cómo se puede usar `where()` junto con otros métodos como `any()`.

```dart
void main() {
  var evenNumbers = const [1, -2, 3, 42].where((number) => number.isEven);

  for (final number in evenNumbers) {
    print('$number es par.');
  }

  if (evenNumbers.any((number) => number.isNegative)) {
    print('evenNumbers contiene números negativos.');
  }

  // Si ningún elemento satisface el predicado, la salida estará vacía.
  var largeNumbers = evenNumbers.where((number) => number > 1000);
  if (largeNumbers.isEmpty) {
    print('largeNumbers está vacío!');
  }
}
```

{{< content-ads/middle-banner-6 >}}

En este ejemplo, `where()` se usa para encontrar todos los números pares, luego `any()` se usa para verificar si los resultados contienen un número negativo.

Más adelante en el ejemplo, `where()` se usa nuevamente para encontrar todos los números mayores que 1000. Como no hay ninguno, el resultado es un `Iterable` vacío.

### Ejemplo: Usando `takeWhile` {#example-using-takewhile}

Los métodos `takeWhile()` y `skipWhile()` también pueden ayudarte a filtrar elementos de un `Iterable`.

Ejecuta este ejemplo para ver cómo `takeWhile()` y `skipWhile()` pueden dividir un `Iterable` que contiene números.

```dart
void main() {
  const numbers = [1, 3, -2, 0, 4, 5];

  var numbersUntilZero = numbers.takeWhile((number) => number != 0);
  print('Números hasta el 0: $numbersUntilZero');

  var numbersStartingAtZero = numbers.skipWhile((number) => number != 0);
  print('Números comenzando desde 0: $numbersStartingAtZero');
}
```

En este ejemplo, `takeWhile()` devuelve un `Iterable` que contiene todos los elementos anteriores al que satisface el predicado. Por otro lado, `skipWhile()` devuelve un `Iterable` que contiene todos los elementos posteriores e incluido al primero que *no* satisfacen el predicado.

Después de ejecutar el ejemplo, cambia `takeWhile()` para tomar elementos hasta que alcance el primer número negativo.

```dart
var numbersUntilNegative =
    numbers.takeWhile((number) => !number.isNegative);
```

Observa que la condición `number.isNegative` se niega con `!`.

### Ejercicio: Filtrar elementos de una lista {#exercise-filtering-elements-from-a-list}

El siguiente ejercicio proporciona práctica usando el método `where()` con la clase `User` del ejercicio anterior.

Usa `where()` para implementar dos funciones:

- Parte 1: Implementa `filterOutUnder21()`.
  - Devuelve un `Iterable` que contiene a todos los usuarios de 21 años o más.
- Parte 2: Implementa `findShortNamed()`.
  - Devuelve un `Iterable` que contiene todos los usuarios con nombres de longitud 3 o menos.

```dart
Iterable<User> filterOutUnder21(Iterable<User> users) {
  // TODO: Implementa la función filterOutUnder21.
}

Iterable<User> findShortNamed(Iterable<User> users) {
  // TODO: Implementa la función findShortNamed.
}

class User {
  final String name;
  final int age;

  User(
    this.name,
    this.age,
  );
}

// El siguiente código se utiliza para proporcionar comentarios sobre tu solución.
// No es necesario leerlo ni modificarlo.
void main() {
  final users = [
    User('Alice', 21),
    User('Bob', 17),
    User('Claire', 52),
    User('Dan', 12),
  ];

  try {
    final out = filterOutUnder21(users);
    if (out.any((user) => user.age < 21) || out.length != 2) {
      print(
        'Looks like `filterOutUnder21` is wrong, there are '
        'exactly two users with age under 21. Keep trying!',
      );
      return;
    }
  } on UnimplementedError {
    print(
      'Tried running `filterOutUnder21`, but received an error. '
      'Did you implement the function?',
    );
    return;
  } catch (e) {
    print(
      'Tried running `filterOutUnder21`, '
      'but received an exception: ${e.runtimeType}',
    );
    return;
  }

  try {
    final out = findShortNamed(users);
    if (out.any((user) => user.name.length > 3) || out.length != 2) {
      print(
        'Looks like `findShortNamed` is wrong, there are '
        'exactly two users with a three letter name. Keep trying!',
      );
      return;
    }
  } on UnimplementedError {
    print(
      'Tried running `findShortNamed`, but received an error. '
      'Did you implement the function?',
    );
    return;
  } catch (e) {
    print(
      'Tried running `findShortNamed`, '
      'but received an exception: ${e.runtimeType}',
    );
    return;
  }

  print('Success. All tests passed!');
}
```

{{< content-ads/middle-banner-7 >}}

{{% details title="Pista" closed="true" %}}
Recuerda aprovechar el método `where` de la clase `Iterable`. Para obtener ayuda y ejemplos sobre el uso de `where`, consulta la [discusión anterior al respecto](/dart/tutoriales-y-codelabs/codelabs/iterables#example-using-where).
{{% /details %}}

{{% details title="Solución" closed="true" %}}
```dart
Iterable<User> filterOutUnder21(Iterable<User> users) {
  return users.where((user) => user.age >= 21);
}

Iterable<User> findShortNamed(Iterable<User> users) {
  return users.where((user) => user.name.length <= 3);
}
```
{{% /details %}}

## Mapping {#mapping}

Mapear `Iterables` con el método `map()` te permite aplicar una función sobre cada uno de los elementos, reemplazando cada elemento por uno nuevo.

```dart
Iterable<int> output = numbers.map((number) => number * 10);
```

En este ejemplo, cada elemento de los números `Iterable` se multiplica por `10`.

También puedes usar `map()` para transformar un elemento en un objeto diferente; por ejemplo, para convertir todo `int` en `String`, como puedes ver en el siguiente ejemplo:

```dart
Iterable<String> output = numbers.map((number) => number.toString());
```

### Ejemplo: Usar `map` para cambiar elementos {#example-using-map-to-change-elements}

Ejecuta este ejemplo para ver cómo usar `map()` para multiplicar todos los elementos de un `Iterable` por `2`. ¿Cuál crees que será el resultado?

```dart
void main() {
  var numbersByTwo = const [1, -2, 3, 42].map((number) => number * 2);
  print('Números: $numbersByTwo');
}
```

### Ejercicio: Mapeo a un tipo diferente {#exercise-mapping-to-a-different-type}

En el ejemplo anterior, multiplicaste los elementos de un `Iterable` por `2`. Tanto la entrada como la salida de esa operación fueron un `Iterable` de `int`.

En este ejercicio, tu código toma un `Iterable` de `User` y necesitas devolver un `Iterable` que contiene cadenas que contienen el nombre y la edad de cada usuario.

Cada cadena en `Iterable` debe seguir este formato: `'{name} is {age}'`; por ejemplo, `'Alice is 21'`.

{{< content-ads/middle-banner-8 >}}

```dart
Iterable<String> getNameAndAges(Iterable<User> users) {
  // TODO: Implementa la función getNameAndAges.
}

class User {
  final String name;
  final int age;

  User(
    this.name,
    this.age,
  );
}

// El siguiente código se utiliza para proporcionar comentarios sobre tu solución.
// No es necesario leerlo ni modificarlo.
void main() {
  final users = [
    User('Alice', 21),
    User('Bob', 17),
    User('Claire', 52),
  ];

  try {
    final out = getNameAndAges(users).toList();
    if (!_listEquals(out, ['Alice is 21', 'Bob is 17', 'Claire is 52'])) {
      print(
        'Looks like `getNameAndAges` is wrong. Keep trying! '
        'The output was: $out',
      );
      return;
    }
  } on UnimplementedError {
    print(
      'Tried running `getNameAndAges`, but received an error. '
      'Did you implement the function?',
    );
    return;
  } catch (e) {
    print('Tried running the function, but received an exception: $e');
    return;
  }

  print('Success. All tests passed!');
}

bool _listEquals<T>(List<T>? a, List<T>? b) {
  if (a == null) return b == null;
  if (b == null || a.length != b.length) return false;
  for (var index = 0; index < a.length; index += 1) {
    if (a[index] != b[index]) return false;
  }
  return true;
}
```

{{% details title="Pista" closed="true" %}}
Recuerda aprovechar el método `map` de la clase `Iterable`. Para obtener ayuda y ejemplos sobre el uso de `map`, consulta la [discusión anterior sobre el mismo](/dart/tutoriales-y-codelabs/codelabs/iterables#example-using-map-to-change-elements).
Para concatenar varios valores en una sola cadena, considera usar [interpolación de cadenas ↗](https://dart.dev/language/built-in-types#string-interpolation).
{{% /details %}}

{{% details title="Solución" closed="true" %}}
```dart
Iterable<String> getNameAndAges(Iterable<User> users) {
  return users.map((user) => '${user.name} is ${user.age}');
}
```
{{% /details %}}

## Ejercicio: Poniéndolo todo junto {#exercise-putting-it-all-together}

Es hora de practicar lo aprendido, en un ejercicio final.

Este ejercicio proporciona la clase `EmailAddress`, que tiene un constructor que toma una cadena. Otra función proporcionada es `isValidEmailAddress()`, que verifica si una dirección de correo electrónico es válida.

| Constructor/función   | Firma                                    | Descripción                                                   |
| --------------------- | ---------------------------------------- | ------------------------------------------------------------- |
| EmailAddress()        | `EmailAddress(String address)`           | Crea una `EmailAddress` para la dirección especificada.       |
| isValidEmailAddress() | `bool isValidEmailAddress(EmailAddress)` | Devuelve `true` si la `EmailAddress` proporcionada es válida. |

Escribe el siguiente código:

Parte 1: Implementar `parseEmailAddresses()`.

- Escribe la función `parseEmailAddresses()`, que toma un `Iterable<String>` que contiene direcciones de correo electrónico y devuelve un `Iterable<EmailAddress>`.
- Utiliza el método `map()` para asignar desde una `String` a `EmailAddress`.
- Crea los objetos `EmailAddress` usando el constructor `EmailAddress(String)`.

Parte 2: Implementar `anyInvalidEmailAddress()`.

- Escribe la función `anyInvalidEmailAddress()`, que toma un `Iterable<EmailAddress>` y devuelve `true` si alguna `EmailAddress` en el `Iterable` no es válida.
- Utiliza el método `any()` junto con la función proporcionada `isValidEmailAddress()`.

Parte 3: Implementar `validEmailAddresses()`.

- Escribe la función `validEmailAddresses()`, que toma un `Iterable<EmailAddress>` y devuelve otro `Iterable<EmailAddress>` que contiene solo direcciones válidas.
- Utiliza el método `where()` para filtrar `Iterable<EmailAddress>`.
- Utiliza la función proporcionada `isValidEmailAddress()` para evaluar si una `EmailAddress` es válida.

```dart
Iterable<EmailAddress> parseEmailAddresses(Iterable<String> strings) {
  // TODO: Implementa la función parseEmailAddresses.
}

bool anyInvalidEmailAddress(Iterable<EmailAddress> emails) {
  // TODO: Implementa la función anyInvalidEmailAddress.
}

Iterable<EmailAddress> validEmailAddresses(Iterable<EmailAddress> emails) {
  // TODO: Implementa la función validEmailAddresses.
}

class EmailAddress {
  final String address;

  EmailAddress(this.address);

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is EmailAddress && address == other.address;

  @override
  int get hashCode => address.hashCode;

  @override
  String toString() => 'EmailAddress{address: $address}';
}

// El siguiente código se utiliza para proporcionar comentarios sobre tu solución.
// No es necesario leerlo ni modificarlo.
void main() {
  const input = [
    'ali@gmail.com',
    'bobgmail.com',
    'cal@gmail.com',
  ];

  const correctInput = ['dash@gmail.com', 'sparky@gmail.com'];

  bool _listEquals<T>(List<T>? a, List<T>? b) {
    if (a == null) return b == null;
    if (b == null || a.length != b.length) return false;
    for (var index = 0; index < a.length; index += 1) {
      if (a[index] != b[index]) return false;
    }
    return true;
  }

  final Iterable<EmailAddress> emails;
  final Iterable<EmailAddress> correctEmails;
  try {
    emails = parseEmailAddresses(input);
    correctEmails = parseEmailAddresses(correctInput);
    if (emails.isEmpty) {
      print(
        'Tried running `parseEmailAddresses`, but received an empty list.',
      );
      return;
    }
    if (!_listEquals(emails.toList(), [
      EmailAddress('ali@gmail.com'),
      EmailAddress('bobgmail.com'),
      EmailAddress('cal@gmail.com'),
    ])) {
      print('Looks like `parseEmailAddresses` is wrong. Keep trying!');
      return;
    }
  } on UnimplementedError {
    print(
      'Tried running `parseEmailAddresses`, but received an error. '
      'Did you implement the function?',
    );
    return;
  } catch (e) {
    print(
      'Tried running `parseEmailAddresses`, '
      'but received an exception: $e',
    );
    return;
  }

  try {
    final out = anyInvalidEmailAddress(emails);
    if (!out) {
      print(
        'Looks like `anyInvalidEmailAddress` is wrong. Keep trying! '
        'The result should be false with at least one invalid address.',
      );
      return;
    }
    final falseOut = anyInvalidEmailAddress(correctEmails);
    if (falseOut) {
      print(
        'Looks like `anyInvalidEmailAddress` is wrong. Keep trying! '
        'The result should be false with all valid addresses.',
      );
      return;
    }
  } on UnimplementedError {
    print(
      'Tried running `anyInvalidEmailAddress`, but received an error. '
      'Did you implement the function?',
    );
    return;
  } catch (e) {
    print(
        'Tried running `anyInvalidEmailAddress`, but received an exception: $e');
    return;
  }

  try {
    final valid = validEmailAddresses(emails);
    if (emails.isEmpty) {
      print('Tried running `validEmailAddresses`, but received an empty list.');
      return;
    }
    if (!_listEquals(valid.toList(), [
      EmailAddress('ali@gmail.com'),
      EmailAddress('cal@gmail.com'),
    ])) {
      print('Looks like `validEmailAddresses` is wrong. Keep trying!');
      return;
    }
  } on UnimplementedError {
    print(
      'Tried running `validEmailAddresses`, but received an error. '
      'Did you implement the function?',
    );
    return;
  } catch (e) {
    print(
      'Tried running the `validEmailAddresses`, '
      'but received an exception: $e',
    );
    return;
  }

  print('Success. All tests passed!');
}

bool isValidEmailAddress(EmailAddress email) {
  return email.address.contains('@');
}
```

{{< content-ads/middle-banner-9 >}}

{{% details title="Solución" closed="true" %}}
```dart
Iterable<EmailAddress> parseEmailAddresses(Iterable<String> strings) {
  return strings.map((s) => EmailAddress(s));
}

bool anyInvalidEmailAddress(Iterable<EmailAddress> emails) {
  return emails.any((email) => !isValidEmailAddress(email));
}

Iterable<EmailAddress> validEmailAddresses(Iterable<EmailAddress> emails) {
  return emails.where((email) => isValidEmailAddress(email));
}
```
{{% /details %}}

## ¿Qué sigue? {#whats-next}

¡Felicitaciones, terminaste el codelab! Si deseas obtener más información, aquí tiene algunas sugerencias sobre dónde ir a continuación:

- Juega con [DartPad ↗](https://dartpad.dev).
- Pruebe con otro [codelab](/dart/tutoriales-y-codelabs/codelabs/codelabs).
- Lee la [referencia de API de Iterable ↗](https://api.dart.dev/stable/dart-core/Iterable-class.html) para obtener información sobre los métodos que no cubre este codelab.

{{< content-ads/bottom-banner >}}
