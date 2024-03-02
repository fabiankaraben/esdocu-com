---
linkTitle: "Asynchronous programming"
title: "Asynchronous programming: futures, async, await | Dart - Dart en Español"
description: "Learn about and practice writing asynchronous code in DartPad!"
weight: 4
type: docs
next: /dart/language/language
draft: true
---

# Asynchronous programming: futures, async, await

Contents *keyboard_arrow_down**keyboard_arrow_up*
- [Why asynchronous code matters ↗](https://dart.dev/codelabs/async-await#why-asynchronous-code-matters)- [Example: Incorrectly using an asynchronous function ↗](https://dart.dev/codelabs/async-await#example-incorrectly-using-an-asynchronous-function)
- [What is a future? ↗](https://dart.dev/codelabs/async-await#what-is-a-future)- [Uncompleted ↗](https://dart.dev/codelabs/async-await#uncompleted)
  - [Completed ↗](https://dart.dev/codelabs/async-await#completed)
  - [Example: Introducing futures ↗](https://dart.dev/codelabs/async-await#example-introducing-futures)
  - [Example: Completing with an error ↗](https://dart.dev/codelabs/async-await#example-completing-with-an-error)
- [Working with futures: async and await ↗](https://dart.dev/codelabs/async-await#working-with-futures-async-and-await)- [Execution flow with async and await ↗](https://dart.dev/codelabs/async-await#execution-flow-with-async-and-await)
  - [Example: Execution within async functions ↗](https://dart.dev/codelabs/async-await#example-execution-within-async-functions)
  - [Exercise: Practice using async and await ↗](https://dart.dev/codelabs/async-await#exercise-practice-using-async-and-await)
- [Handling errors ↗](https://dart.dev/codelabs/async-await#handling-errors)- [Example: async and await with try-catch ↗](https://dart.dev/codelabs/async-await#example-async-and-await-with-try-catch)
  - [Exercise: Practice handling errors ↗](https://dart.dev/codelabs/async-await#exercise-practice-handling-errors)
- [Exercise: Putting it all together ↗](https://dart.dev/codelabs/async-await#exercise-putting-it-all-together)
- [What's next? ↗](https://dart.dev/codelabs/async-await#whats-next)
*more_horiz*

{{< content-ads/top-banner >}}

This codelab teaches you how to write asynchronous code using futures and the `async` and `await` keywords. Using embedded DartPad editors, you can test your knowledge by running example code and completing exercises.

To get the most out of this codelab, you should have the following:

- Knowledge of [basic Dart syntax ↗](https://dart.dev/language).
- Some experience writing asynchronous code in another language.

Este codelab cubre el siguiente material:

- How and when to use the `async` and `await` keywords.
- How using `async` and `await` affects execution order.
- How to handle errors from an asynchronous call using `try-catch` expressions in `async` functions.

Estimated time to complete this codelab: 40-60 minutes.

Los ejercicios de este codelab tienen fragmentos de código parcialmente completados. Puedes utilizar DartPad para poner a prueba tus conocimientos completando el código y haciendo clic en el botón **Run**. **No edites el código de tests en la función `main` o debajo**.

Si necesitas ayuda, expande el menú desplegable **Sugerencia** o **Solución** después de cada ejercicio.

## Why asynchronous code matters {#why-asynchronous-code-matters}

Asynchronous operations let your program complete work while waiting for another operation to finish. Here are some common asynchronous operations:

- Fetching data over a network.
- Writing to a database.
- Reading data from a file.

Such asynchronous computations usually provide their result as a `Future` or, if the result has multiple parts, as a `Stream`. These computations introduce asynchrony into a program. To accommodate that initial asynchrony, other plain Dart functions also need to become asynchronous.

To interact with these asynchronous results, you can use the `async` and `await` keywords. Most asynchronous functions are just async Dart functions that depend, possibly deep down, on an inherently asynchronous computation.

### Example: Incorrectly using an asynchronous function {#example-incorrectly-using-an-asynchronous-function}

The following example shows the wrong way to use an asynchronous function (`fetchUserOrder()`). Later you'll fix the example using `async` and `await`. Before running this example, try to spot the issue -- what do you think the output will be?

{{< content-ads/middle-banner-1 >}}

```dart
// This example shows how *not* to write asynchronous Dart code.

String createOrderMessage() {
  var order = fetchUserOrder();
  return 'Your order is: $order';
}

Future<String> fetchUserOrder() =>
    // Imagine that this function is more complex and slow.
    Future.delayed(
      const Duration(seconds: 2),
      () => 'Large Latte',
    );

void main() {
  print(createOrderMessage());
}
```

Here's why the example fails to print the value that `fetchUserOrder()` eventually produces:

- `fetchUserOrder()` is an asynchronous function that, after a delay, provides a string that describes the user's order: a "Large Latte".
- To get the user's order, `createOrderMessage()` should call `fetchUserOrder()` and wait for it to finish. Because `createOrderMessage()` does *not* wait for `fetchUserOrder()` to finish, `createOrderMessage()` fails to get the string value that `fetchUserOrder()` eventually provides.
- Instead, `createOrderMessage()` gets a representation of pending work to be done: an uncompleted future. You'll learn more about futures in the next section.
- Because `createOrderMessage()` fails to get the value describing the user's order, the example fails to print "Large Latte" to the console, and instead prints "Your order is: Instance of '_Future<String>'".

In the next sections you'll learn about futures and about working with futures (using `async` and `await`) so that you'll be able to write the code necessary to make `fetchUserOrder()` print the desired value ("Large Latte") to the console.

## What is a future? {#what-is-a-future}

A future (lower case "f") is an instance of the [Future ↗](https://api.dart.dev/stable/dart-async/Future-class.html) (capitalized "F") class. A future represents the result of an asynchronous operation, and can have two states: uncompleted or completed.

### Uncompleted {#uncompleted}

When you call an asynchronous function, it returns an uncompleted future. That future is waiting for the function's asynchronous operation to finish or to throw an error.

### Completed {#completed}

If the asynchronous operation succeeds, the future completes with a value. Otherwise, it completes with an error.

#### Completing with a value {#completing-with-a-value}

A future of type `Future<T>` completes with a value of type `T`. For example, a future with type `Future<String>` produces a string value. If a future doesn't produce a usable value, then the future's type is `Future<void>`.

#### Completing with an error {#completing-with-an-error}

If the asynchronous operation performed by the function fails for any reason, the future completes with an error.

### Example: Introducing futures {#example-introducing-futures}

{{< content-ads/middle-banner-2 >}}

In the following example, `fetchUserOrder()` returns a future that completes after printing to the console. Because it doesn't return a usable value, `fetchUserOrder()` has the type `Future<void>`. Before you run the example, try to predict which will print first: "Large Latte" or "Fetching user order...".

```dart
Future<void> fetchUserOrder() {
  // Imagine that this function is fetching user info from another service or database.
  return Future.delayed(const Duration(seconds: 2), () => print('Large Latte'));
}

void main() {
  fetchUserOrder();
  print('Fetching user order...');
}
```

In the preceding example, even though `fetchUserOrder()` executes before the `print()` call on line 8, the console shows the output from line 8("Fetching user order...") before the output from `fetchUserOrder()` ("Large Latte"). This is because `fetchUserOrder()` delays before it prints "Large Latte".

### Example: Completing with an error {#example-completing-with-an-error}

Run the following example to see how a future completes with an error. A bit later you'll learn how to handle the error.

```dart
Future<void> fetchUserOrder() {
  // Imagine that this function is fetching user info but encounters a bug.
  return Future.delayed(
    const Duration(seconds: 2),
    () => throw Exception('Logout failed: user ID is invalid'),
  );
}

void main() {
  fetchUserOrder();
  print('Fetching user order...');
}
```

In this example, `fetchUserOrder()` completes with an error indicating that the user ID is invalid.

You've learned about futures and how they complete, but how do you use the results of asynchronous functions? In the next section you'll learn how to get results with the `async` and `await` keywords.

## Working with futures: async and await {#working-with-futures-async-and-await}

The `async` and `await` keywords provide a declarative way to define asynchronous functions and use their results. Remember these two basic guidelines when using `async` and `await`:

- **To define an async function, add `async` before the function body:**
- **The `await` keyword works only in `async` functions.**

Here's an example that converts `main()` from a synchronous to asynchronous function.

First, add the `async` keyword before the function body:

```dart
void main()  { ··· }
```

If the function has a declared return type, then update the type to be `Future<T>`, where `T` is the type of the value that the function returns. If the function doesn't explicitly return a value, then the return type is `Future<void>`:

{{< content-ads/middle-banner-3 >}}

```dart
 main() async { ··· }
```

Now that you have an `async` function, you can use the `await` keyword to wait for a future to complete:

```dart
print( createOrderMessage());
```

As the following two examples show, the `async` and `await` keywords result in asynchronous code that looks a lot like synchronous code. The only differences are highlighted in the asynchronous example, which—if your window is wide enough—is to the right of the synchronous example.

#### Example: synchronous functions {#example-synchronous-functions}
```dart
String createOrderMessage() {
  var order = fetchUserOrder();
  return 'Your order is: $order';
}

Future<String> fetchUserOrder() =>
    // Imagine that this function is
    // more complex and slow.
    Future.delayed(
      const Duration(seconds: 2),
      () => 'Large Latte',
    );

void main() {
  print('Fetching user order...');
  print(createOrderMessage());
}
```
```
Fetching user order...
Your order is: Instance of '_Future<String>'
```

#### Example: asynchronous functions {#example-asynchronous-functions}
```dart
 createOrderMessage()  {
  var order =  fetchUserOrder();
  return 'Your order is: $order';
}

Future<String> fetchUserOrder() =>
    // Imagine that this function is
    // more complex and slow.
    Future.delayed(
      const Duration(seconds: 2),
      () => 'Large Latte',
    );

 main()  {
  print('Fetching user order...');
  print( createOrderMessage());
}
```
```
Fetching user order...
Your order is: Large Latte
```

The asynchronous example is different in three ways:

- The return type for `createOrderMessage()` changes from `String` to `Future<String>`.
- The **`async`** keyword appears before the function bodies for `createOrderMessage()` and `main()`.
- The **`await`** keyword appears before calling the asynchronous functions `fetchUserOrder()` and `createOrderMessage()`.

### Execution flow with async and await {#execution-flow-with-async-and-await}

An `async` function runs synchronously until the first `await` keyword. This means that within an `async` function body, all synchronous code before the first `await` keyword executes immediately.

### Example: Execution within async functions {#example-execution-within-async-functions}

Run the following example to see how execution proceeds within an `async` function body. What do you think the output will be?

```dart
Future<void> printOrderMessage() async {
  print('Awaiting user order...');
  var order = await fetchUserOrder();
  print('Your order is: $order');
}

Future<String> fetchUserOrder() {
  // Imagine that this function is more complex and slow.
  return Future.delayed(const Duration(seconds: 4), () => 'Large Latte');
}

void main() async {
  countSeconds(4);
  await printOrderMessage();
}

// You can ignore this function - it's here to visualize delay time in this example.
void countSeconds(int s) {
  for (var i = 1; i <= s; i++) {
    Future.delayed(Duration(seconds: i), () => print(i));
  }
}
```

After running the code in the preceding example, try reversing lines 2 and 3:

```dart
var order = await fetchUserOrder();
print('Awaiting user order...');
```

{{< content-ads/middle-banner-4 >}}

Notice that timing of the output shifts, now that `print('Awaiting user order')` appears after the first `await` keyword in `printOrderMessage()`.

### Exercise: Practice using async and await {#exercise-practice-using-async-and-await}

The following exercise is a failing unit test that contains partially completed code snippets. Your task is to complete the exercise by writing code to make the tests pass. You don't need to implement `main()`.

To simulate asynchronous operations, call the following functions, which are provided for you:

|Function|Type signature|Description|
|---|---|---|
|fetchRole()|`Future<String> fetchRole()`|Gets a short description of the user's role.|
|fetchLoginAmount()|`Future<int> fetchLoginAmount()`|Gets the number of times a user has logged in.|

#### Part 1: `reportUserRole()` {#part-1-reportuserrole}

Add code to the `reportUserRole()` function so that it does the following:

- Returns a future that completes with the following string: `"User role: <user role>"`- Note: You must use the actual value returned by `fetchRole()`; copying and pasting the example return value won't make the test pass.
  - Example return value: `"User role: tester"`
- Gets the user role by calling the provided function `fetchRole()`.

#### Part 2: `reportLogins()` {#part-2-reportlogins}

Implement an `async` function `reportLogins()` so that it does the following:

- Returns the string `"Total number of logins: <# of logins>"`.- Note: You must use the actual value returned by `fetchLoginAmount()`; copying and pasting the example return value won't make the test pass.
  - Example return value from `reportLogins()`: `"Total number of logins: 57"`
- Gets the number of logins by calling the provided function `fetchLoginAmount()`.

```dart
// Part 1
// Call the provided async function fetchRole()
// to return the user role.
Future<String> reportUserRole() async {
  // TODO: Implement the reportUserRole function here.
}

// Part 2
// TODO: Implement the reportUserRole function here.
// Call the provided async function fetchLoginAmount()
// to return the number of times that the user has logged in.
reportLogins() {}

// The following functions those provided to you to simulate
// asynchronous operations that could take a while.

Future<String> fetchRole() => Future.delayed(_halfSecond, () => _role);
Future<int> fetchLoginAmount() => Future.delayed(_halfSecond, () => _logins);

// The following code is used to test and provide feedback on your solution.
// There is no need to read or modify it.

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

{{% details title="Hint" closed="true" %}}
Did you remember to add the `async` keyword to the `reportUserRole` function?
Did you remember to use the `await` keyword before invoking `fetchRole()`?
Remember: `reportUserRole` needs to return a `Future`.
{{% /details %}}

{{% details title="Solution" closed="true" %}}
```dart
Future<String> reportUserRole() async {
  final username = await fetchRole();
  return 'User role: $username';
}

Future<String> reportLogins() async {
  final logins = await fetchLoginAmount();
  return 'Total number of logins: $logins';
}
```
{{% /details %}}

## Handling errors {#handling-errors}

{{< content-ads/middle-banner-5 >}}

To handle errors in an `async` function, use try-catch:

```dart
try {
  print('Awaiting user order...');
  var order = await fetchUserOrder();
} catch (err) {
  print('Caught error: $err');
}
```

Within an `async` function, you can write [try-catch clauses ↗](https://dart.dev/language/error-handling#catch) the same way you would in synchronous code.

### Example: async and await with try-catch {#example-async-and-await-with-try-catch}

Run the following example to see how to handle an error from an asynchronous function. What do you think the output will be?

```dart
Future<void> printOrderMessage() async {
  try {
    print('Awaiting user order...');
    var order = await fetchUserOrder();
    print(order);
  } catch (err) {
    print('Caught error: $err');
  }
}

Future<String> fetchUserOrder() {
  // Imagine that this function is more complex.
  var str = Future.delayed(
      const Duration(seconds: 4),
      () => throw 'Cannot locate user order');
  return str;
}

void main() async {
  await printOrderMessage();
}
```

### Exercise: Practice handling errors {#exercise-practice-handling-errors}

The following exercise provides practice handling errors with asynchronous code, using the approach described in the previous section. To simulate asynchronous operations, your code will call the following function, which is provided for you:

|Function|Type signature|Description|
|---|---|---|
|fetchNewUsername()|`Future<String> fetchNewUsername()`|Returns the new username that you can use to replace an old one.|

Use `async` and `await` to implement an asynchronous `changeUsername()` function that does the following:

- Calls the provided asynchronous function `fetchNewUsername()` and returns its result.- Example return value from `changeUsername()`: `"jane_smith_92"`
- Catches any error that occurs and returns the string value of the error.- You can use the [toString() ↗](https://api.dart.dev/stable/dart-core/ArgumentError/toString.html) method to stringify both [Exceptions ↗](https://api.dart.dev/stable/dart-core/Exception-class.html) and [Errors. ↗](https://api.dart.dev/stable/dart-core/Error-class.html)

```dart
// TODO: Implement changeUsername here.
changeUsername() {}

// The following function is provided to you to simulate
// an asynchronous operation that could take a while and
// potentially throw an exception.

Future<String> fetchNewUsername() =>
    Future.delayed(const Duration(milliseconds: 500), () => throw UserError());

class UserError implements Exception {
  @override
  String toString() => 'New username is invalid';
}

// The following code is used to test and provide feedback on your solution.
// There is no need to read or modify it.

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

{{% details title="Hint" closed="true" %}}
Implement `changeUsername` to return the string from `fetchNewUsername` or, if that fails, the string value of any error that occurs.
Remember: You can use a [try-catch statement ↗](https://dart.dev/language/error-handling#catch) to catch and handle errors.
{{% /details %}}

{{% details title="Solution" closed="true" %}}
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

## Exercise: Putting it all together {#exercise-putting-it-all-together}

{{< content-ads/middle-banner-6 >}}

It's time to practice what you've learned in one final exercise. To simulate asynchronous operations, this exercise provides the asynchronous functions `fetchUsername()` and `logoutUser()`:

|Function|Type signature|Description|
|---|---|---|
|fetchUsername()|`Future<String> fetchUsername()`|Returns the name associated with the current user.|
|logoutUser()|`Future<String> logoutUser()`|Performs logout of current user and returns the username that was logged out.|

Write the following:

#### Part 1: `addHello()` {#part-1-addhello}

- Write a function `addHello()` that takes a single `String` argument.
- `addHello()` returns its `String` argument preceded by `'Hello '`.Example: `addHello('Jon')` returns `'Hello Jon'`.

#### Part 2: `greetUser()` {#part-2-greetuser}

- Write a function `greetUser()` that takes no arguments.
- To get the username, `greetUser()` calls the provided asynchronous function `fetchUsername()`.
- `greetUser()` creates a greeting for the user by calling `addHello()`, passing it the username, and returning the result.Example: If `fetchUsername()` returns `'Jenny'`, then `greetUser()` returns `'Hello Jenny'`.

#### Part 3: `sayGoodbye()` {#part-3-saygoodbye}

- Write a function `sayGoodbye()` that does the following:- Takes no arguments.
  - Catches any errors.
  - Calls the provided asynchronous function `logoutUser()`.
- If `logoutUser()` fails, `sayGoodbye()` returns any string you like.
- If `logoutUser()` succeeds, `sayGoodbye()` returns the string `'<result> Thanks, see you next time'`, where `<result>` is the string value returned by calling `logoutUser()`.

```dart
// Part 1
addHello(String user) {}

// Part 2
// Call the provided async function fetchUsername()
// to return the username.
greetUser() {}

// Part 3
// Call the provided async function logoutUser()
// to log out the user.
sayGoodbye() {}

// The following functions are provided to you to use in your solutions.

Future<String> fetchUsername() => Future.delayed(_halfSecond, () => 'Jean');

Future<String> logoutUser() => Future.delayed(_halfSecond, _failOnce);

// The following code is used to test and provide feedback on your solution.
// There is no need to read or modify it.

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

{{% details title="Hint" closed="true" %}}
The `greetUser` and `sayGoodbye` functions should be asynchronous, while `addHello` should be a normal, synchronous function.
Remember: You can use a [try-catch statement ↗](https://dart.dev/language/error-handling#catch) to catch and handle errors.
{{% /details %}}

{{% details title="Solution" closed="true" %}}
```dart
String addHello(String user) => 'Hello $user';

Future<String> greetUser() async {
  final username = await fetchUsername();
  return addHello(username);
}

Future<String> sayGoodbye() async {
  try {
    final result = await logoutUser();
    return '$result Thanks, see you next time';
  } catch (e) {
    return 'Failed to logout user: $e';
  }
}
```
{{% /details %}}

## ¿Qué sigue? {#whats-next}

Congratulations, you've finished the codelab! If you'd like to learn more, here are some suggestions for where to go next:

- Play with [DartPad ↗](https://dartpad.dev).
- Try another [codelab](/dart/tutoriales-y-codelabs/codelabs/codelabs).
- Learn more about futures and asynchronous code in Dart:- [Streams tutorial ↗](https://dart.dev/tutorials/language/streams): Learn how to work with a sequence of asynchronous events.
  - [Concurrency in Dart ↗](https://dart.dev/language/concurrency): Understand and learn how to implement concurrency in Dart.
  - [Asynchrony support ↗](https://dart.dev/language/async): Dive in to Dart's language and library support for asynchronous coding.
  - [Dart videos from Google ↗](https://www.youtube.com/playlist): Watch one or more of the videos about asynchronous coding.
- Get the [Dart SDK ↗](https://dart.dev/get-dart)!

{{< content-ads/bottom-banner >}}
