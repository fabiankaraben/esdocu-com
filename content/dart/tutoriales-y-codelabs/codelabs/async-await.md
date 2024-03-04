---
linkTitle: "Programación asincrónica"
title: "Programación asincrónica: futures, async, await - Dart en Español"
description: "¡Aprende y practica la escritura de código asincrónico en DartPad!"
weight: 4
type: docs
next: /dart/language/language
---

# Programación asincrónica: futures, async, await

::

{{< content-ads/top-banner >}}

Este codelab te enseña cómo escribir código asincrónico usando *futures* y las palabras clave `async` y `await`. Con los editores DartPad integrados, puedes poner a prueba tus conocimientos ejecutando código de ejemplo y completando ejercicios.

Para aprovechar al máximo este codelab, debes tener lo siguiente:

- Conocimiento de [sintaxis básica de Dart](/dart/lenguaje/conceptos-basicos).
- Algo de experiencia escribiendo código asincrónico en otro lenguaje.

Este codelab cubre el siguiente material:

- Cómo y cuándo usar las palabras clave `async` y `await`.
- Cómo el uso de `async` y `await` afecta el orden de ejecución.
- Cómo manejar errores de una llamada asincrónica usando expresiones `try-catch` en funciones `async`.

Tiempo estimado para completar este codelab: 40-60 minutos.

Los ejercicios de este codelab tienen fragmentos de código parcialmente completados. Puedes utilizar DartPad para poner a prueba tus conocimientos completando el código y haciendo clic en el botón **Run**. **No edites el código de tests en la función `main` o debajo**.

Si necesitas ayuda, expande el menú desplegable **Sugerencia** o **Solución** después de cada ejercicio.

## Por qué es importante el código asincrónico {#why-asynchronous-code-matters}

Las operaciones asincrónicas permiten que tu programa complete su trabajo mientras espera que finalice otra operación. A continuación se muestran algunas operaciones asincrónicas comunes:

- Obtención de datos a través de la red.
- Escritura en una base de datos.
- Leer datos de un archivo.

Estos cálculos asincrónicos generalmente proporcionan su resultado como un `Future` o, si el resultado tiene varias partes, como un `Stream`. Estos cálculos introducen asincronía en un programa. Para adaptarse a esa asincronía inicial, otras funciones simples de Dart también deben volverse asincrónicas.

Para interactuar con estos resultados asincrónicos, puedes usar las palabras clave `async` y `await`. La mayoría de las funciones asincrónicas son simplemente funciones asincrónicas de Dart que dependen, posiblemente en el fondo, de un cálculo inherentemente asincrónico.

### Ejemplo: Usar incorrectamente una función asíncrona {#example-incorrectly-using-an-asynchronous-function}

El siguiente ejemplo muestra la forma incorrecta de usar una función asincrónica (`fetchUserOrder()`). Más adelante arreglarás el ejemplo usando `async` y `await`. Antes de ejecutar este ejemplo, intenta detectar el problema: ¿cuál crees que será el resultado?

{{< content-ads/middle-banner-1 >}}

```dart
// Este ejemplo muestra cómo *no* escribir código Dart asíncrono.

String createOrderMessage() {
  var order = fetchUserOrder();
  return 'Tu pedido es: $order';
}

Future<String> fetchUserOrder() =>
    // Imaginemos que esta función es más compleja y lenta.
    Future.delayed(
      const Duration(seconds: 2),
      () => 'Large Latte',
    );

void main() {
  print(createOrderMessage());
}
```

He aquí por qué el ejemplo no imprime el valor que finalmente produce `fetchUserOrder()`:

- `fetchUserOrder()` es una función asincrónica que, después de un delay, proporciona una cadena que describe el pedido del usuario: un "Large Latte".
- Para obtener el pedido del usuario, `createOrderMessage()` debe llamar a `fetchUserOrder()` y esperar a que finalice. Debido a que `createOrderMessage()` *no* espera a que `fetchUserOrder()` termine, `createOrderMessage()` no logra obtener el valor de cadena que `fetchUserOrder()` finalmente proporciona.
- En cambio, `createOrderMessage()` obtiene una representación del trabajo pendiente por realizar: un Future incompleto. Aprenderás más sobre futuros en la siguiente sección.
- Debido a que `createOrderMessage()` no puede obtener el valor que describe el pedido del usuario, el ejemplo no puede imprimir "Large Latte" en la consola y en su lugar imprime "Tu pedido es: Instancia de '_Future<String>'".

En las siguientes secciones aprenderás sobre futuros y cómo trabajar con futuros (usando `async` y `await`) para que puedas escribir el código necesario para hacer que `fetchUserOrder()` imprima el valor deseado ("Large Latte") en la consola.

## ¿Qué es un `Future`? {#what-is-a-future}

Un `future` ("f" en minúscula) es una instancia de la clase [Future ↗](https://api.dart.dev/stable/dart-async/Future-class.html) ("F" mayúscula). Un futuro representa el resultado de una operación asincrónica y puede tener dos estados: incompleto o completado.

### Incompleto {#uncompleted}

Cuando llamas a una función asincrónica, devuelve un futuro incompleto. Ese futuro está esperando a que finalice la operación asincrónica de la función o arroje un error.

### Completado {#completed}

Si la operación asincrónica tiene éxito, el futuro se completa con un valor. De lo contrario, se completa con un error.

#### Completado con un valor {#completing-with-a-value}

Un futuro de tipo `Future<T>` se completa con un valor de tipo `T`. Por ejemplo, un futuro con tipo `Future<String>` produce un valor de tipo `String`. Si un futuro no produce un valor utilizable, entonces el tipo de futuro es `Future<void>`.

#### Completado con un error {#completing-with-an-error}

Si la operación asincrónica que realiza la función falla por algún motivo, el futuro se completa con un error.

### Ejemplo: Introducción a futuros {#example-introducing-futures}

{{< content-ads/middle-banner-2 >}}

En el siguiente ejemplo, `fetchUserOrder()` devuelve un futuro que se completa después de imprimir en la consola. Debido a que no devuelve un valor utilizable, `fetchUserOrder()` tiene el tipo `Future<void>`. Antes de ejecutar el ejemplo, intenta predecir cuál se imprimirá primero: "Latte grande" o "Obteniendo pedido del usuario...".

```dart
Future<void> fetchUserOrder() {
  // Imagina que esta función obtiene información del usuario de otro servicio o base de datos.
  return Future.delayed(const Duration(seconds: 2), () => print('Large Latte'));
}

void main() {
  fetchUserOrder();
  print('Obteniendo pedido del usuario...');
}
```

En el ejemplo anterior, aunque `fetchUserOrder()` se ejecuta antes de la llamada a `print()` en la línea 8, la consola muestra el resultado de la línea 8 ("Obteniendo orden de usuario... ") antes de la salida de `fetchUserOrder()` ("Large Latte"). Esto se debe a que `fetchUserOrder()` demora (`delayed`) antes de imprimir "Large Latte".

### Ejemplo: Completando con un error {#example-completing-with-an-error}

Ejecuta el siguiente ejemplo para ver cómo un futuro se completa con un error. Un poco más adelante aprenderás cómo manejar el error.

```dart
Future<void> fetchUserOrder() {
  // Imagina que esta función está obteniendo información del usuario pero encuentra un error.
  return Future.delayed(
    const Duration(seconds: 2),
    () => throw Exception('Fallo en el cierre de sesión: user ID inválido'),
  );
}

void main() {
  fetchUserOrder();
  print('Obteniendo pedido del usuario...');
}
```

En este ejemplo, `fetchUserOrder()` se completa con un error que indica que el ID de usuario no es válido.

Has aprendido sobre los futuros y cómo se completan, pero ¿cómo usas los resultados de las funciones asincrónicas? En la siguiente sección aprenderás cómo obtener resultados con las palabras clave `async` y `await`.

## Trabajando con futuros: `async` and `await` {#working-with-futures-async-and-await}

Las palabras clave `async` y `await` proporcionan una forma declarativa de definir funciones asincrónicas y usar sus resultados. Recuerda estas dos pautas básicas cuando utilices `async` y `await`:

- **Para definir una función asíncrona, agrega `async` antes del cuerpo de la función:**
- **La palabra clave `await` funciona solo en funciones `async`.**

Aquí hay un ejemplo que convierte `main()` de una función sincrónica a asincrónica.

Primero, agrega la palabra clave `async` antes del cuerpo de la función:

```dart
void main()  { ··· }
```

Si la función tiene un tipo de retorno declarado, entonces actualiza el tipo para que sea `Future<T>`, donde `T` es el tipo del valor que devuelve la función. Si la función no devuelve explícitamente un valor, entonces el tipo de retorno es `Future<void>`:

{{< content-ads/middle-banner-3 >}}

```dart
 main() async { ··· }
```

Ahora que tienes una función `async`, puedes usar la palabra clave `await` para esperar a que se complete un futuro:

```dart
print( createOrderMessage());
```

Como muestran los dos ejemplos siguientes, las palabras clave `async` y `await` dan como resultado un código asincrónico que se parece mucho al código sincrónico. Las únicas diferencias se resaltan en el ejemplo asincrónico, que (si tu ventana es lo suficientemente amplia) está a la derecha del ejemplo sincrónico.

#### Ejemplo: funciones síncronas {#example-synchronous-functions}

```dart
String createOrderMessage() {
  var order = fetchUserOrder();
  return 'Tu pedido es: $order';
}

Future<String> fetchUserOrder() =>
    // Imaginemos que esta función es más compleja y lenta.
    Future.delayed(
      const Duration(seconds: 2),
      () => 'Large Latte',
    );

void main() {
  print('Obteniendo pedido del usuario...');
  print(createOrderMessage());
}
```

```
Obteniendo pedido del usuario...
Tu pedido es: Instance of '_Future<String>'
```

#### Ejemplo: funciones asincrónicas {#example-asynchronous-functions}

```dart
 createOrderMessage()  {
  var order =  fetchUserOrder();
  return 'Tu pedido es: $order';
}

Future<String> fetchUserOrder() =>
    // Imaginemos que esta función es más compleja y lenta.
    Future.delayed(
      const Duration(seconds: 2),
      () => 'Large Latte',
    );

 main()  {
  print('Obteniendo pedido del usuario...');
  print( createOrderMessage());
}
```

```
Obteniendo pedido del usuario...
Tu pedido es: Large Latte
```

El ejemplo asincrónico se diferencia en tres formas:

- El tipo de retorno para `createOrderMessage()` cambia de `String` a `Future<String>`.
- La palabra clave **`async`** aparece antes de los cuerpos de las funciones para `createOrderMessage()` y `main()`.
- La palabra clave **`await`** aparece antes de llamar a las funciones asincrónicas `fetchUserOrder()` y `createOrderMessage()`.

### Flujo de ejecución con async y await {#execution-flow-with-async-and-await}

Una función `async` se ejecuta sincrónicamente hasta la primera palabra clave `await`. Esto significa que dentro del cuerpo de una función `async`, todo el código síncrono antes de la primera palabra clave `await` se ejecuta inmediatamente.

### Ejemplo: Ejecución dentro de funciones asíncronas {#example-execution-within-async-functions}

{{< content-ads/middle-banner-4 >}}

Ejecuta el siguiente ejemplo para ver cómo procede la ejecución dentro del cuerpo de una función `async`. ¿Cuál crees que será el resultado?

```dart
Future<void> printOrderMessage() async {
  print('Esperando pedido del usuario...');
  var order = await fetchUserOrder();
  print('Tu pedido es: $order');
}

Future<String> fetchUserOrder() {
  // Imaginemos que esta función es más compleja y lenta.
  return Future.delayed(const Duration(seconds: 4), () => 'Large Latte');
}

void main() async {
  countSeconds(4);
  await printOrderMessage();
}

// Puedes ignorar esta función; está aquí para visualizar el tiempo de delay en este ejemplo.
void countSeconds(int s) {
  for (var i = 1; i <= s; i++) {
    Future.delayed(Duration(seconds: i), () => print(i));
  }
}
```

Después de ejecutar el código del ejemplo anterior, intenta invertir las líneas 2 y 3:

```dart
var order = await fetchUserOrder();
print('Esperando pedido del usuario...');
```

Observa que el tiempo de la salida cambia, ahora que aparece `print('Esperando pedido del usuario...')` después de la primera palabra clave `await` en `printOrderMessage()`.

### Ejercicio: Practica usando `async` y `await` {#exercise-practice-using-async-and-await}

El siguiente ejercicio es un test unitario fallido que contiene fragmentos de código parcialmente completados. Tu tarea es completar el ejercicio escribiendo código para aprobar los tests. No es necesario implementar `main()`.

Para simular operaciones asincrónicas, llama a las siguientes funciones, que se te proporcionan:

|Función|Firma de tipo|Descripción|
|---|---|---|
|fetchRole()|`Future<String> fetchRole()`|Obtiene una breve descripción del rol del usuario.|
|fetchLoginAmount()|`Future<int> fetchLoginAmount()`|Obtiene el número de veces que un usuario ha iniciado sesión.|

#### Parte 1: `reportUserRole()` {#part-1-reportuserrole}

Agrega código a la función `reportUserRole()` para que haga lo siguiente:

- Devuelve un futuro que se completa con la siguiente cadena: `"Rol de usuario: <user role>"`
   - Nota: Debes usar el valor real devuelto por `fetchRole()`; copiar y pegar el valor de retorno del ejemplo no hará que el test pase.
   - Valor de retorno de ejemplo: `"Rol de usuario: tester"`
- Obtiene el rol de usuario llamando a la función proporcionada `fetchRole()`.

#### Parte 2: `reportLogins()` {#part-2-reportlogins}

Implementa una función `async` llamada `reportLogins()` para que haga lo siguiente:

- Devuelve la cadena `"Número total de inicios de sesión: <# of logins>"`.
   - Nota: Debes usar el valor real devuelto por `fetchLoginAmount()`; copiar y pegar el valor de retorno del ejemplo no hará que el test pase.
   - Valor de retorno de ejemplo de `reportLogins()`: `"Número total de inicios de sesión: 57"`
- Obtiene el número de inicios de sesión llamando a la función proporcionada `fetchLoginAmount()`.

{{< content-ads/middle-banner-5 >}}

```dart
// Parte 1
// Llama a la función asíncrona proporcionada fetchRole()
// para devolver el rol de usuario.
Future<String> reportUserRole() async {
  // TODO: Implementa la función reportUserRole aquí.
}

// Parte 2
// TODO: Implementa la función reportUserRole aquí.
// Llama a la función asíncrona proporcionada fetchLoginAmount() 
// para devolver el número de veces que el usuario ha iniciado sesión.
reportLogins() {}

// Las siguientes funciones se proporcionan para simular 
// operaciones asincrónicas que podrían tardar un poco.

Future<String> fetchRole() => Future.delayed(_halfSecond, () => _role);
Future<int> fetchLoginAmount() => Future.delayed(_halfSecond, () => _logins);

// El siguiente código se utiliza para probar y proporcionar comentarios sobre tu solución.
// No es necesario leerlo ni modificarlo.

void main() async {
  print('Testing...');
  List<String> messages = [];
  const passed = 'PASSED';
  const testFailedMessage = 'Test failed for the function:';
  const typoMessage = 'Test failed! Check for typos in your return value';
  try {
    messages
      ..add(_makeReadable(
          testLabel: 'Part 1',
          testResult: await _asyncEquals(
            expected: 'User role: administrator',
            actual: await reportUserRole(),
            typoKeyword: _role,
          ),
          readableErrors: {
            typoMessage: typoMessage,
            'null':
                'Test failed! Did you forget to implement or return from reportUserRole?',
            'User role: Instance of \'Future<String>\'':
                '$testFailedMessage reportUserRole. Did you use the await keyword?',
            'User role: Instance of \'_Future<String>\'':
                '$testFailedMessage reportUserRole. Did you use the await keyword?',
            'User role:':
                '$testFailedMessage reportUserRole. Did you return a user role?',
            'User role: ':
                '$testFailedMessage reportUserRole. Did you return a user role?',
            'User role: tester':
                '$testFailedMessage reportUserRole. Did you invoke fetchRole to fetch the user\'s role?',
          }))
      ..add(_makeReadable(
          testLabel: 'Part 2',
          testResult: await _asyncEquals(
            expected: 'Total number of logins: 42',
            actual: await reportLogins(),
            typoKeyword: _logins.toString(),
          ),
          readableErrors: {
            typoMessage: typoMessage,
            'null':
                'Test failed! Did you forget to implement or return from reportLogins?',
            'Total number of logins: Instance of \'Future<int>\'':
                '$testFailedMessage reportLogins. Did you use the await keyword?',
            'Total number of logins: Instance of \'_Future<int>\'':
                '$testFailedMessage reportLogins. Did you use the await keyword?',
            'Total number of logins: ':
                '$testFailedMessage reportLogins. Did you return the number of logins?',
            'Total number of logins:':
                '$testFailedMessage reportLogins. Did you return the number of logins?',
            'Total number of logins: 57':
                '$testFailedMessage reportLogins. Did you invoke fetchLoginAmount to fetch the number of user logins?',
          }))
      ..removeWhere((m) => m.contains(passed))
      ..toList();

    if (messages.isEmpty) {
      print('Success. All tests passed!');
    } else {
      messages.forEach(print);
    }
  } on UnimplementedError {
    print(
        'Test failed! Did you forget to implement or return from reportUserRole?');
  } catch (e) {
    print('Tried to run solution, but received an exception: $e');
  }
}

const _role = 'administrator';
const _logins = 42;
const _halfSecond = Duration(milliseconds: 500);

// Test helpers.
String _makeReadable({
  required String testResult,
  required Map<String, String> readableErrors,
  required String testLabel,
}) {
  if (readableErrors.containsKey(testResult)) {
    var readable = readableErrors[testResult];
    return '$testLabel $readable';
  } else {
    return '$testLabel $testResult';
  }
}

// Assertions used in tests.
Future<String> _asyncEquals({
  required String expected,
  required dynamic actual,
  required String typoKeyword,
}) async {
  var strActual = actual is String ? actual : actual.toString();
  try {
    if (expected == actual) {
      return 'PASSED';
    } else if (strActual.contains(typoKeyword)) {
      return 'Test failed! Check for typos in your return value';
    } else {
      return strActual;
    }
  } catch (e) {
    return e.toString();
  }
}
```

{{% details title="Pista" closed="true" %}}
¿Recordaste agregar la palabra clave `async` a la función `reportUserRole`?
¿Recordaste utilizar la palabra clave `await` antes de invocar `fetchRole()`?
Recuerda: `reportUserRole` necesita devolver un `Future`.
{{% /details %}}

{{% details title="Solución" closed="true" %}}
```dart
Future<String> reportUserRole() async {
  final username = await fetchRole();
  return 'Rol de usuario: $username';
}

Future<String> reportLogins() async {
  final logins = await fetchLoginAmount();
  return 'Número total de inicios de sesión: $logins';
}
```
{{% /details %}}

## Manejo de errores {#handling-errors}

Para manejar errores en una función `async`, usa `try-catch`:

```dart
try {
  print('Esperando pedido del usuario...');
  var order = await fetchUserOrder();
} catch (err) {
  print('Caught error: $err');
}
```

Dentro de una función `async`, puedes escribir [cláusulas `try-catch` ↗](https://dart.dev/language/error-handling#catch) de la misma manera que lo harías en código sincrónico.

### Ejemplo: `async` y `await` con try-catch {#example-async-and-await-with-try-catch}

Ejecuta el siguiente ejemplo para ver cómo manejar un error de una función asincrónica. ¿Cuál crees que será el resultado?

```dart
Future<void> printOrderMessage() async {
  try {
    print('Esperando pedido del usuario...');
    var order = await fetchUserOrder();
    print(order);
  } catch (err) {
    print('Caught error: $err');
  }
}

Future<String> fetchUserOrder() {
  // Imaginemos que esta función es más compleja.
  var str = Future.delayed(
      const Duration(seconds: 4),
      () => throw 'No se puede localizar el pedido del usuario');
  return str;
}

void main() async {
  await printOrderMessage();
}
```

### Ejercicio: Practica el manejo de errores {#exercise-practice-handling-errors}

El siguiente ejercicio proporciona práctica para manejar errores con código asincrónico, utilizando el enfoque descrito en la sección anterior. Para simular operaciones asincrónicas, tu código llamará a la siguiente función, que se te proporciona:

|Función|Firma de tipo|Descripción|
|---|---|---|
|fetchNewUsername()|`Future<String> fetchNewUsername()`|Devuelve el nuevo nombre de usuario que puedes usar para reemplazar uno antiguo.|

Usa `async` y `await` para implementar una función asincrónica `changeUsername()` que hace lo siguiente:

- Llama a la función asincrónica proporcionada `fetchNewUsername()` y devuelve su resultado. 
   - Ejemplo de valor de retorno de `changeUsername()`: `"jane_smith_92"`
- Detecta cualquier error que ocurra y devuelve el valor de cadena del error. 
   - Puedes usar el método [toString() ↗](https://api.dart.dev/stable/dart-core/ArgumentError/toString.html) para encadenar tanto [Excepciones ↗](https://api.dart.dev/stable/dart-core/Exception-class.html) como [Errores. ↗](https://api.dart.dev/stable/dart-core/Error-class.html)

{{< content-ads/middle-banner-6 >}}

```dart
// TODO: Implementa changeUsername aquí.
changeUsername() {}

// Se proporciona la siguiente función para simular una 
// operación asincrónica que podría tardar un tiempo y
// potencialmente generar una excepción.
Future<String> fetchNewUsername() =>
    Future.delayed(const Duration(milliseconds: 500), () => throw UserError());

class UserError implements Exception {
  @override
  String toString() => 'New username is invalid';
}

// El siguiente código se utiliza para probar y proporcionar comentarios sobre tu solución.
// No es necesario leerlo ni modificarlo.
void main() async {
  final List<String> messages = [];
  const typoMessage = 'Test failed! Check for typos in your return value';

  print('Testing...');
  try {
    messages
      ..add(_makeReadable(
          testLabel: '',
          testResult: await _asyncDidCatchException(changeUsername),
          readableErrors: {
            typoMessage: typoMessage,
            _noCatch:
                'Did you remember to call fetchNewUsername within a try/catch block?',
          }))
      ..add(_makeReadable(
          testLabel: '',
          testResult: await _asyncErrorEquals(changeUsername),
          readableErrors: {
            typoMessage: typoMessage,
            _noCatch:
                'Did you remember to call fetchNewUsername within a try/catch block?',
          }))
      ..removeWhere((m) => m.contains(_passed))
      ..toList();

    if (messages.isEmpty) {
      print('Success. All tests passed!');
    } else {
      messages.forEach(print);
    }
  } catch (e) {
    print('Tried to run solution, but received an exception: $e');
  }
}

// Test helpers.
String _makeReadable({
  required String testResult,
  required Map<String, String> readableErrors,
  required String testLabel,
}) {
  if (readableErrors.containsKey(testResult)) {
    final readable = readableErrors[testResult];
    return '$testLabel $readable';
  } else {
    return '$testLabel $testResult';
  }
}

Future<String> _asyncErrorEquals(Function fn) async {
  final result = await fn();
  if (result == UserError().toString()) {
    return _passed;
  } else {
    return 'Test failed! Did you stringify and return the caught error?';
  }
}

Future<String> _asyncDidCatchException(Function fn) async {
  var caught = true;
  try {
    await fn();
  } on UserError catch (_) {
    caught = false;
  }

  if (caught == false) {
    return _noCatch;
  } else {
    return _passed;
  }
}

const _passed = 'PASSED';
const _noCatch = 'NO_CATCH';
```

{{% details title="Pista" closed="true" %}}
Implementa `changeUsername` para devolver la cadena de `fetchNewUsername` o, si eso falla, el valor de cadena de cualquier error que ocurra.
Recuerda: puedes utilizar una [sentencia `try-catch` ↗](https://dart.dev/language/error-handling#catch) para detectar y manejar errores.
{{% /details %}}

{{% details title="Solución" closed="true" %}}
```dart
Future<String> changeUsername() async {
  try {
    return await fetchNewUsername();
  } catch (err) {
    return err.toString();
  }
}
```
{{% /details %}}

## Ejercicio: Poniéndolo todo junto {#exercise-putting-it-all-together}

Es hora de practicar lo aprendido en un ejercicio final. Para simular operaciones asincrónicas, este ejercicio proporciona las funciones asincrónicas `fetchUsername()` y `logoutUser()`:

|Función|Firma de tipo|Descripción|
|---|---|---|
|fetchUsername()|`Future<String> fetchUsername()`|Devuelve el nombre asociado con el usuario actual.|
|logoutUser()|`Future<String> logoutUser()`|Realiza el cierre de sesión del usuario actual y devuelve el nombre de usuario con el que se cerró la sesión.|

Escribe lo siguiente:

#### Parte 1: `addHello()` {#part-1-addhello}

- Escribe una función `addHello()` que tome un solo argumento `String`.
- `addHello()` devuelve su argumento `String` precedido por `'Hola '`. Ejemplo: `addHello('Jon')` devuelve `'Hola Jon'`.

#### Parte 2: `greetUser()` {#part-2-greetuser}

- Escribe una función `greetUser()` que no acepte argumentos.
- Para obtener el nombre de usuario, `greetUser()` llama a la función asincrónica proporcionada `fetchUsername()`.
- `greetUser()` crea un saludo para el usuario llamando a `addHello()`, pasándole el nombre de usuario y devolviendo el resultado. Ejemplo: si `fetchUsername()` devuelve `'Jenny'`, entonces `greetUser()` devuelve `'Hola Jenny'`.

#### Parte 3: `sayGoodbye()` {#part-3-saygoodbye}

- Escribe una función `sayGoodbye()` que haga lo siguiente:
   - No acepta argumentos.
   - Detecta cualquier error.
   - Llama a la función asincrónica proporcionada `logoutUser()`.
- Si `logoutUser()` falla, `sayGoodbye()` devuelve cualquier cadena que desees.
- Si `logoutUser()` tiene éxito, `sayGoodbye()` devuelve la cadena `'<result> Gracias, nos vemos la próxima vez'`, donde `<result>` es el valor de cadena devuelto al llamar a `logoutUser()`.

```dart
// Parte 1
addHello(String user) {}

// Parte 2
// Llama a la función asíncrona proporcionada fetchUsername() para devolver el nombre de usuario.
greetUser() {}

// Parte 3
// Llama a la función asíncrona proporcionada logoutUser() para cerrar la sesión del usuario.
sayGoodbye() {}

// Se le proporcionan las siguientes funciones para que las utilices en tus soluciones.

Future<String> fetchUsername() => Future.delayed(_halfSecond, () => 'Jean');

Future<String> logoutUser() => Future.delayed(_halfSecond, _failOnce);

// El siguiente código se utiliza para probar y proporcionar comentarios sobre tu solución.
// No es necesario leerlo ni modificarlo.

void main() async {
  const didNotImplement =
      'Test failed! Did you forget to implement or return from';

  final List<String> messages = [];

  print('Testing...');
  try {
    messages
      ..add(_makeReadable(
          testLabel: 'Part 1',
          testResult: await _asyncEquals(
              expected: 'Hello Jerry',
              actual: addHello('Jerry'),
              typoKeyword: 'Jerry'),
          readableErrors: {
            _typoMessage: _typoMessage,
            'null': '$didNotImplement addHello?',
            'Hello Instance of \'Future<String>\'':
                'Looks like you forgot to use the \'await\' keyword!',
            'Hello Instance of \'_Future<String>\'':
                'Looks like you forgot to use the \'await\' keyword!',
          }))
      ..add(_makeReadable(
          testLabel: 'Part 2',
          testResult: await _asyncEquals(
              expected: 'Hello Jean',
              actual: await greetUser(),
              typoKeyword: 'Jean'),
          readableErrors: {
            _typoMessage: _typoMessage,
            'null': '$didNotImplement greetUser?',
            'HelloJean':
                'Looks like you forgot the space between \'Hello\' and \'Jean\'',
            'Hello Instance of \'Future<String>\'':
                'Looks like you forgot to use the \'await\' keyword!',
            'Hello Instance of \'_Future<String>\'':
                'Looks like you forgot to use the \'await\' keyword!',
            '{Closure: (String) => dynamic from Function \'addHello\': static.(await fetchUsername())}':
                'Did you place the \'\$\' character correctly?',
            '{Closure \'addHello\'(await fetchUsername())}':
                'Did you place the \'\$\' character correctly?',
          }))
      ..add(_makeReadable(
          testLabel: 'Part 3',
          testResult: await _asyncDidCatchException(sayGoodbye),
          readableErrors: {
            _typoMessage:
                '$_typoMessage. Did you add the text \'Thanks, see you next time\'?',
            'null': '$didNotImplement sayGoodbye?',
            _noCatch:
                'Did you remember to call logoutUser within a try/catch block?',
            'Instance of \'Future<String>\' Thanks, see you next time':
                'Did you remember to use the \'await\' keyword in the sayGoodbye function?',
            'Instance of \'_Future<String>\' Thanks, see you next time':
                'Did you remember to use the \'await\' keyword in the sayGoodbye function?',
          }))
      ..add(_makeReadable(
          testLabel: 'Part 3',
          testResult: await _asyncEquals(
              expected: 'Success! Thanks, see you next time',
              actual: await sayGoodbye(),
              typoKeyword: 'Success'),
          readableErrors: {
            _typoMessage:
                '$_typoMessage. Did you add the text \'Thanks, see you next time\'?',
            'null': '$didNotImplement sayGoodbye?',
            _noCatch:
                'Did you remember to call logoutUser within a try/catch block?',
            'Instance of \'Future<String>\' Thanks, see you next time':
                'Did you remember to use the \'await\' keyword in the sayGoodbye function?',
            'Instance of \'_Future<String>\' Thanks, see you next time':
                'Did you remember to use the \'await\' keyword in the sayGoodbye function?',
            'Instance of \'_Exception\'':
                'CAUGHT Did you remember to return a string?',
          }))
      ..removeWhere((m) => m.contains(_passed))
      ..toList();

    if (messages.isEmpty) {
      print('Success. All tests passed!');
    } else {
      messages.forEach(print);
    }
  } catch (e) {
    print('Tried to run solution, but received an exception: $e');
  }
}

// Test helpers.
String _makeReadable({
  required String testResult,
  required Map<String, String> readableErrors,
  required String testLabel,
}) {
  String? readable;
  if (readableErrors.containsKey(testResult)) {
    readable = readableErrors[testResult];
    return '$testLabel $readable';
  } else if ((testResult != _passed) && (testResult.length < 18)) {
    readable = _typoMessage;
    return '$testLabel $readable';
  } else {
    return '$testLabel $testResult';
  }
}

Future<String> _asyncEquals({
  required String expected,
  required dynamic actual,
  required String typoKeyword,
}) async {
  final strActual = actual is String ? actual : actual.toString();
  try {
    if (expected == actual) {
      return _passed;
    } else if (strActual.contains(typoKeyword)) {
      return _typoMessage;
    } else {
      return strActual;
    }
  } catch (e) {
    return e.toString();
  }
}

Future<String> _asyncDidCatchException(Function fn) async {
  var caught = true;
  try {
    await fn();
  } on Exception catch (_) {
    caught = false;
  }

  if (caught == true) {
    return _passed;
  } else {
    return _noCatch;
  }
}

const _typoMessage = 'Test failed! Check for typos in your return value';
const _passed = 'PASSED';
const _noCatch = 'NO_CATCH';
const _halfSecond = Duration(milliseconds: 500);

String _failOnce() {
  if (_logoutSucceeds) {
    return 'Success!';
  } else {
    _logoutSucceeds = true;
    throw Exception('Logout failed');
  }
}

bool _logoutSucceeds = false;
```

{{% details title="Pista" closed="true" %}}
Las funciones `greetUser` y `sayGoodbye` deben ser asincrónicas, mientras que `addHello` debe ser una función normal y sincrónica.
Recuerda: puedes utilizar una [sentencia `try-catch` ↗](https://dart.dev/language/error-handling#catch) para detectar y manejar errores.
{{% /details %}}

{{< content-ads/middle-banner-7 >}}

{{% details title="Solución" closed="true" %}}
```dart
String addHello(String user) => 'Hola $user';

Future<String> greetUser() async {
  final username = await fetchUsername();
  return addHello(username);
}

Future<String> sayGoodbye() async {
  try {
    final result = await logoutUser();
    return '$result Gracias, nos vemos la próxima';
  } catch (e) {
    return 'No se pudo cerrar la sesión del usuario: $e';
  }
}
```
{{% /details %}}

## ¿Qué sigue? {#whats-next}

¡Felicitaciones, has terminado el codelab! Si deseas obtener más información, aquí tienes algunas sugerencias sobre dónde ir a continuación:

- Juega con [DartPad ↗](https://dartpad.dev).
- Prueba con otro [codelab](/dart/tutoriales-y-codelabs/codelabs/codelabs).
- Obtén más información sobre futuros y código asincrónico en Dart: 
   - [Tutorial de streams ↗](https://dart.dev/tutorials/language/streams): aprende a trabajar con una secuencia de eventos asincrónicos.
   - [Concurrencia en Dart ↗](https://dart.dev/language/concurrency): Comprende y aprende cómo implementar la concurrencia en Dart.
   - [Soporte de asincronía ↗](https://dart.dev/language/async): Sumérgete en el soporte de biblioteca y lenguaje de Dart para programación asincrónica.
   - [Vídeos de Dart de Google ↗](https://www.youtube.com/playlist): mira uno o más vídeos sobre programación asincrónica.
- ¡Obtén el [Dart SDK ↗](https://dart.dev/get-dart)!

{{< content-ads/bottom-banner >}}
