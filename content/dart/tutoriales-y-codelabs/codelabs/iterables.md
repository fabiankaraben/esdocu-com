---
linkTitle: "Iterable collections"
title: "Iterable collections | Dart - Dart en Español"
description: "An interactive guide to using Iterable objects such as lists and sets."
weight: 3
type: docs
draft: true
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

{{% details title="Hint" closed="true" %}}
Tu solución podría utilizar los métodos `contains` y `startsWith` de la clase `String`.
{{% /details %}}

{{% details title="Solución" cerrada="true" %}}
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
  // TODO: Implement the anyUserUnder18 function.
}

bool everyUserOver13(Iterable<User> users) {
  // TODO: Implement the everyUserOver13 function.
}

class User {
  final String name;
  final int age;

  User(
    this.name,
    this.age,
  );
}

// The following code is used to provide feedback on your solution.
// There is no need to read or modify it.
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

{{% details title="Hint" closed="true" %}}
Remember to use the `any` and `every` methods from the `Iterable` class. For help and examples using these methods, refer to the [earlier discussion of them ↗](https://dart.dev/codelabs/iterables#example-using-any-and-every).
{{% /details %}}

{{% details title="Solution" closed="true" %}}
```dart
bool anyUserUnder18(Iterable<User> users) {
  return users.any((user) => user.age < 18);
}

bool everyUserOver13(Iterable<User> users) {
  return users.every((user) => user.age > 13);
}
```
{{% /details %}}

## Filtering {#filtering}

The previous sections cover methods like `firstWhere()` or `singleWhere()` that can help you find an element that satisfies a certain predicate.

But what if you want to find all the elements that satisfy a certain condition? You can accomplish that using the `where()` method.

```dart
var evenNumbers = numbers.where((number) => number.isEven);
```

In this example, `numbers` contains an `Iterable` with multiple `int` values, and `where()` finds all the numbers that are even.

The output of `where()` is another `Iterable`, and you can use it as such to iterate over it or apply other `Iterable` methods. In the next example, the output of `where()` is used directly inside the `for-in` loop.

```dart
var evenNumbers = numbers.where((number) => number.isEven);
for (final number in evenNumbers) {
  print('$number is even');
}
```

### Example: Using where() {#example-using-where}

Run this example to see how `where()` can be used together with other methods like `any()`.

```dart
void main() {
  var evenNumbers = const [1, -2, 3, 42].where((number) => number.isEven);

  for (final number in evenNumbers) {
    print('$number is even.');
  }

  if (evenNumbers.any((number) => number.isNegative)) {
    print('evenNumbers contains negative numbers.');
  }

  // If no element satisfies the predicate, the output is empty.
  var largeNumbers = evenNumbers.where((number) => number > 1000);
  if (largeNumbers.isEmpty) {
    print('largeNumbers is empty!');
  }
}
```

{{< content-ads/middle-banner-6 >}}

In this example, `where()` is used to find all numbers that are even, then `any()` is used to check if the results contain a negative number.

Later in the example, `where()` is used again to find all numbers larger than 1000. Because there are none, the result is an empty `Iterable`.

### Example: Using takeWhile {#example-using-takewhile}

The methods `takeWhile()` and `skipWhile()` can also help you filter elements from an `Iterable`.

Run this example to see how `takeWhile()` and `skipWhile()` can split an `Iterable` containing numbers.

```dart
void main() {
  const numbers = [1, 3, -2, 0, 4, 5];

  var numbersUntilZero = numbers.takeWhile((number) => number != 0);
  print('Numbers until 0: $numbersUntilZero');

  var numbersStartingAtZero = numbers.skipWhile((number) => number != 0);
  print('Numbers starting at 0: $numbersStartingAtZero');
}
```

In this example, `takeWhile()` returns an `Iterable` that contains all the elements before the one that satisfies the predicate. On the other hand, `skipWhile()` returns an `Iterable` that contains all elements after and including the first one that *doesn't* satisfy the predicate.

After running the example, change `takeWhile()` to take elements until it reaches the first negative number.

```dart
var numbersUntilNegative =
    numbers.takeWhile((number) => !number.isNegative);
```

Notice that the condition `number.isNegative` is negated with `!`.

### Exercise: Filtering elements from a list {#exercise-filtering-elements-from-a-list}

The following exercise provides practice using the `where()` method with the class `User` from the previous exercise.

Use `where()` to implement two functions:

- Part 1: Implement `filterOutUnder21()`.- Return an `Iterable` containing all users of age 21 or more.
- Part 2: Implement `findShortNamed()`.- Return an `Iterable` containing all users with names of length 3 or less.

```dart
Iterable<User> filterOutUnder21(Iterable<User> users) {
  // TODO: Implement the filterOutUnder21 function.
}

Iterable<User> findShortNamed(Iterable<User> users) {
  // TODO: Implement the findShortNamed function.
}

class User {
  final String name;
  final int age;

  User(
    this.name,
    this.age,
  );
}

// The following code is used to provide feedback on your solution.
// There is no need to read or modify it.
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

{{% details title="Hint" closed="true" %}}
Remember to take advantage of the `where` method from the `Iterable` class. For help and examples using `where`, refer to the [earlier discussion of it ↗](https://dart.dev/codelabs/iterables#example-using-where).
{{% /details %}}

{{% details title="Solution" closed="true" %}}
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

Mapping `Iterables` with the method `map()` enables you to apply a function over each of the elements, replacing each element with a new one.

```dart
Iterable<int> output = numbers.map((number) => number * 10);
```

In this example, each element of the `Iterable` numbers is multiplied by 10.

You can also use `map()` to transform an element into a different object—for example, to convert all `int` to `String`, as you can see in the following example:

```dart
Iterable<String> output = numbers.map((number) => number.toString());
```

### Example: Using map to change elements {#example-using-map-to-change-elements}

Run this example to see how to use `map()` to multiply all the elements of an `Iterable` by 2. What do you think the output will be?

```dart
void main() {
  var numbersByTwo = const [1, -2, 3, 42].map((number) => number * 2);
  print('Numbers: $numbersByTwo');
}
```

### Exercise: Mapping to a different type {#exercise-mapping-to-a-different-type}

In the previous example, you multiplied the elements of an `Iterable` by 2. Both the input and the output of that operation were an `Iterable` of `int`.

In this exercise, your code takes an `Iterable` of `User`, and you need to return an `Iterable` that contains strings containing each user's name and age.

Each string in the `Iterable` must follow this format: `'{name} is {age}'`—for example `'Alice is 21'`.

{{< content-ads/middle-banner-8 >}}

```dart
Iterable<String> getNameAndAges(Iterable<User> users) {
  // TODO: Implement the getNameAndAges function.
}

class User {
  final String name;
  final int age;

  User(
    this.name,
    this.age,
  );
}

// The following code is used to provide feedback on your solution.
// There is no need to read or modify it.
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

{{% details title="Hint" closed="true" %}}
Remember to take advantage of the `map` method from the `Iterable` class. For help and examples using `map`, refer to the [earlier discussion of it ↗](https://dart.dev/codelabs/iterables#example-using-map-to-change-elements).
To concatenate multiple values into a single string, consider using [string interpolation ↗](https://dart.dev/language/built-in-types#string-interpolation).
{{% /details %}}

{{% details title="Solution" closed="true" %}}
```dart
Iterable<String> getNameAndAges(Iterable<User> users) {
  return users.map((user) => '${user.name} is ${user.age}');
}
```
{{% /details %}}

## Exercise: Putting it all together {#exercise-putting-it-all-together}

It's time to practice what you learned, in one final exercise.

This exercise provides the class `EmailAddress`, which has a constructor that takes a string. Another provided function is `isValidEmailAddress()`, which tests whether an email address is valid.

|Constructor/function|Type signature|Description|
|---|---|---|
|EmailAddress()|`EmailAddress(String address)`|Creates an `EmailAddress` for the specified address.|
|isValidEmailAddress()|`bool isValidEmailAddress(EmailAddress)`|Returns `true` if the provided `EmailAddress` is valid.|

Write the following code:

Part 1: Implement `parseEmailAddresses()`.

- Write the function `parseEmailAddresses()`, which takes an `Iterable<String>` containing email addresses, and returns an `Iterable<EmailAddress>`.
- Use the method `map()` to map from a `String` to `EmailAddress`.
- Create the `EmailAddress` objects using the constructor `EmailAddress(String)`.

Part 2: Implement `anyInvalidEmailAddress()`.

- Write the function `anyInvalidEmailAddress()`, which takes an `Iterable<EmailAddress>` and returns `true` if any `EmailAddress` in the `Iterable` isn't valid.
- Use the method `any()` together with the provided function `isValidEmailAddress()`.

Part 3: Implement `validEmailAddresses()`.

- Write the function `validEmailAddresses()`, which takes an `Iterable<EmailAddress>` and returns another `Iterable<EmailAddress>` containing only valid addresses.
- Use the method `where()` to filter the `Iterable<EmailAddress>`.
- Use the provided function `isValidEmailAddress()` to evaluate whether an `EmailAddress` is valid.

```dart
Iterable<EmailAddress> parseEmailAddresses(Iterable<String> strings) {
  // TODO: Implement the parseEmailAddresses function.
}

bool anyInvalidEmailAddress(Iterable<EmailAddress> emails) {
  // TODO: Implement the anyInvalidEmailAddress function.
}

Iterable<EmailAddress> validEmailAddresses(Iterable<EmailAddress> emails) {
  // TODO: Implement the validEmailAddresses function.
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

// The following code is used to provide feedback on your solution.
// There is no need to read or modify it.
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

{{% details title="Solution" closed="true" %}}
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

## What's next {#whats-next}

Congratulations, you finished the codelab! If you want to learn more, here are some suggestions for where to go next:

- Play with [DartPad. ↗](https://dartpad.dev)
- Try another [codelab](/dart/tutoriales-y-codelabs/codelabs/codelabs).
- Read the [Iterable API reference ↗](https://api.dart.dev/stable/dart-core/Iterable-class.html) to learn about methods not covered by this codelab.

{{< content-ads/bottom-banner >}}
