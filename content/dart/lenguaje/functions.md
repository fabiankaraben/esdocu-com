---
linkTitle: "Functions"
title: "Functions | Dart - Dart en Español"
description: "Everything about functions in Dart."
weight: 5
type: docs
draft: true
---

# Functions

Contents *keyboard_arrow_down**keyboard_arrow_up*
- [Parameters ↗](https://dart.dev/language/functions#parameters)- [Named parameters ↗](https://dart.dev/language/functions#named-parameters)
  - [Optional positional parameters ↗](https://dart.dev/language/functions#optional-positional-parameters)
- [The main() function ↗](https://dart.dev/language/functions#the-main-function)
- [Functions as first-class objects ↗](https://dart.dev/language/functions#functions-as-first-class-objects)
- [Anonymous functions ↗](https://dart.dev/language/functions#anonymous-functions)
- [Lexical scope ↗](https://dart.dev/language/functions#lexical-scope)
- [Lexical closures ↗](https://dart.dev/language/functions#lexical-closures)
- [Testing functions for equality ↗](https://dart.dev/language/functions#testing-functions-for-equality)
- [Return values ↗](https://dart.dev/language/functions#return-values)
- [Generators ↗](https://dart.dev/language/functions#generators)
- [External functions ↗](https://dart.dev/language/functions#external)
*more_horiz*

{{< content-ads/top-banner >}}

Dart is a true object-oriented language, so even functions are objects and have a type, [Function. ↗](https://api.dart.dev/stable/dart-core/Function-class.html) This means that functions can be assigned to variables or passed as arguments to other functions. You can also call an instance of a Dart class as if it were a function. For details, see [Callable objects ↗](https://dart.dev/language/callable-objects).

Here's an example of implementing a function:

```dart
bool isNoble(int atomicNumber) {
  return _nobleGases[atomicNumber] != null;
}
```

Although Effective Dart recommends [type annotations for public APIs ↗](https://dart.dev/effective-dart/design#do-type-annotate-fields-and-top-level-variables-if-the-type-isnt-obvious), the function still works if you omit the types:

```dart
isNoble(atomicNumber) {
  return _nobleGases[atomicNumber] != null;
}
```

For functions that contain just one expression, you can use a shorthand syntax:

```dart
bool isNoble(int atomicNumber) => _nobleGases[atomicNumber] != null;
```

The `=> *expr*` syntax is a shorthand for `{ return *expr*; }`. The `=>` notation is sometimes referred to as *arrow* syntax.

## Parameters {#parameters}

A function can have any number of *required positional* parameters. These can be followed either by *named* parameters or by *optional positional* parameters (but not both).

You can use [trailing commas ↗](https://dart.dev/language/collections#lists) when you pass arguments to a function or when you define function parameters.

### Named parameters {#named-parameters}

Los parámetros con nombre son opcionales a menos que estén marcados explícitamente como `required`.

When defining a function, use `{*param1*, *param2*, …}` to specify named parameters. If you don't provide a default value or mark a named parameter as `required`, their types must be nullable as their default value will be `null`:

```dart
/// Sets the [bold] and [hidden] flags ...
void enableFlags({bool? bold, bool? hidden}) {...}
```

{{< content-ads/middle-banner-1 >}}

When calling a function, you can specify named arguments using `*paramName*: *value*`. For example:

```dart
enableFlags(bold: true, hidden: false);
```

[ ↗](https://dart.dev#) To define a default value for a named parameter besides `null`, use `=` to specify a default value. The specified value must be a compile-time constant. For example:

```dart
/// Sets the [bold] and [hidden] flags ...
void enableFlags({bool bold = false, bool hidden = false}) {...}

// bold will be true; hidden will be false.
enableFlags(bold: true);
```

If you instead want a named parameter to be mandatory, requiring callers to provide a value for the parameter, annotate them with `required`:

```dart
const Scrollbar({super.key,  Widget child});
```

If someone tries to create a `Scrollbar` without specifying the `child` argument, then the analyzer reports an issue.

You might want to place positional arguments first, but Dart doesn't require it. Dart allows named arguments to be placed anywhere in the argument list when it suits your API:

```dart
repeat(times: 2, () {
  ...
});
```

### Optional positional parameters {#optional-positional-parameters}

Wrapping a set of function parameters in `[]` marks them as optional positional parameters. If you don't provide a default value, their types must be nullable as their default value will be `null`:

```dart
String say(String from, String msg, [String? device]) {
  var result = '$from says $msg';
  if (device != null) {
    result = '$result with a $device';
  }
  return result;
}
```

Here's an example of calling this function without the optional parameter:

```dart
assert(say('Bob', 'Howdy') == 'Bob says Howdy');
```

And here's an example of calling this function with the third parameter:

{{< content-ads/middle-banner-2 >}}

```dart
assert(say('Bob', 'Howdy', 'smoke signal') ==
    'Bob says Howdy with a smoke signal');
```

To define a default value for an optional positional parameter besides `null`, use `=` to specify a default value. The specified value must be a compile-time constant. For example:

```dart
String say(String from, String msg, [String device = 'carrier pigeon']) {
  var result = '$from says $msg with a $device';
  return result;
}

assert(say('Bob', 'Howdy') == 'Bob says Howdy with a carrier pigeon');
```

## The main() function {#the-main-function}

Every app must have a top-level `main()` function, which serves as the entrypoint to the app. The `main()` function returns `void` and has an optional `List<String>` parameter for arguments.

Here's a simple `main()` function:

```dart
void main() {
  print('Hola, Mundo!');
}
```

Here's an example of the `main()` function for a command-line app that takes arguments:

args.dart
```dart
// Run the app like this: dart run args.dart 1 test
void main(List<String> arguments) {
  print(arguments);

  assert(arguments.length == 2);
  assert(int.parse(arguments[0]) == 1);
  assert(arguments[1] == 'test');
}
```

You can use the [args library ↗](https://pub.dev/packages/args) to define and parse command-line arguments.

## Functions as first-class objects {#functions-as-first-class-objects}

You can pass a function as a parameter to another function. For example:

```dart
void printElement(int element) {
  print(element);
}

var list = [1, 2, 3];

// Pass printElement as a parameter.
list.forEach(printElement);
```

You can also assign a function to a variable, such as:

```dart
var loudify = (msg) => '!!! ${msg.toUpperCase()} !!!';
assert(loudify('hello') == '!!! HELLO !!!');
```

{{< content-ads/middle-banner-3 >}}

This example uses an anonymous function. More about those in the next section.

## Anonymous functions {#anonymous-functions}

Most functions are named, such as `main()` or `printElement()`. You can also create a nameless function called an *anonymous function*, or sometimes a *lambda* or *closure*. You might assign an anonymous function to a variable so that, for example, you can add or remove it from a collection.

An anonymous function looks similar to a named function—zero or more parameters, separated by commas and optional type annotations, between parentheses.

The code block that follows contains the function's body:

`([[*Type*] *param1*[, …]]) {*codeBlock*;};`

The following example defines an anonymous function with an untyped parameter, `item`, and passes it to the `map` function. The function, invoked for each item in the list, converts each string to uppercase. Then in the anonymous function passed to `forEach`, each converted string is printed out alongside its length.

```dart
const list = ['apples', 'bananas', 'oranges'];
list.map((item) {
  return item.toUpperCase();
}).forEach((item) {
  print('$item: ${item.length}');
});
```

Click **Run** to execute the code.

```dart
void main() {
  const list = ['apples', 'bananas', 'oranges'];
  list.map((item) {
    return item.toUpperCase();
  }).forEach((item) {
    print('$item: ${item.length}');
  });
}
```

If the function contains only a single expression or return statement, you can shorten it using arrow notation. Paste the following line into DartPad and click **Run** to verify that it is functionally equivalent.

```dart
list
    .map((item) => item.toUpperCase())
    .forEach((item) => print('$item: ${item.length}'));
```

## Lexical scope {#lexical-scope}

Dart is a lexically scoped language, which means that the scope of variables is determined statically, simply by the layout of the code. You can "follow the curly braces outwards" to see if a variable is in scope.

Here is an example of nested functions with variables at each scope level:

{{< content-ads/middle-banner-4 >}}

```dart
bool topLevel = true;

void main() {
  var insideMain = true;

  void myFunction() {
    var insideFunction = true;

    void nestedFunction() {
      var insideNestedFunction = true;

      assert(topLevel);
      assert(insideMain);
      assert(insideFunction);
      assert(insideNestedFunction);
    }
  }
}
```

Notice how `nestedFunction()` can use variables from every level, all the way up to the top level.

## Lexical closures {#lexical-closures}

A *closure* is a function object that has access to variables in its lexical scope, even when the function is used outside of its original scope.

Functions can close over variables defined in surrounding scopes. In the following example, `makeAdder()` captures the variable `addBy`. Wherever the returned function goes, it remembers `addBy`.

```dart
/// Returns a function that adds [addBy] to the
/// function's argument.
Function makeAdder(int addBy) {
  return (int i) => addBy + i;
}

void main() {
  // Create a function that adds 2.
  var add2 = makeAdder(2);

  // Create a function that adds 4.
  var add4 = makeAdder(4);

  assert(add2(3) == 5);
  assert(add4(3) == 7);
}
```

## Testing functions for equality {#testing-functions-for-equality}

Here's an example of testing top-level functions, static methods, and instance methods for equality:

```dart
void foo() {} // A top-level function

class A {
  static void bar() {} // A static method
  void baz() {} // An instance method
}

void main() {
  Function x;

  // Comparing top-level functions.
  x = foo;
  assert(foo == x);

  // Comparing static methods.
  x = A.bar;
  assert(A.bar == x);

  // Comparing instance methods.
  var v = A(); // Instance #1 of A
  var w = A(); // Instance #2 of A
  var y = w;
  x = w.baz;

  // These closures refer to the same instance (#2),
  // so they're equal.
  assert(y.baz == x);

  // These closures refer to different instances,
  // so they're unequal.
  assert(v.baz != w.baz);
}
```

## Return values {#return-values}

All functions return a value. If no return value is specified, the statement `return null;` is implicitly appended to the function body.

```dart
foo() {}

assert(foo() == null);
```

To return multiple values in a function, aggregate the values in a [record ↗](https://dart.dev/language/records#multiple-returns).

```dart
(String, int) foo() {
  return ('something', 42);
}
```

## Generators {#generators}

{{< content-ads/middle-banner-5 >}}

When you need to lazily produce a sequence of values, consider using a *generator function*. Dart has built-in support for two kinds of generator functions:

- **Synchronous** generator: Returns an [`Iterable` ↗](https://api.dart.dev/stable/dart-core/Iterable-class.html) object.
- **Asynchronous** generator: Returns a [`Stream` ↗](https://api.dart.dev/stable/dart-async/Stream-class.html) object.

To implement a **synchronous** generator function, mark the function body as `sync*`, and use `yield` statements to deliver values:

```dart
Iterable<int> naturalsTo(int n) sync* {
  int k = 0;
  while (k < n) yield k++;
}
```

To implement an **asynchronous** generator function, mark the function body as `async*`, and use `yield` statements to deliver values:

```dart
Stream<int> asynchronousNaturalsTo(int n) async* {
  int k = 0;
  while (k < n) yield k++;
}
```

If your generator is recursive, you can improve its performance by using `yield*`:

```dart
Iterable<int> naturalsDownFrom(int n) sync* {
  if (n > 0) {
    yield n;
    yield* naturalsDownFrom(n - 1);
  }
}
```

## External functions {#external}

An external function is a function whose body is implemented separately from its declaration. Include the `external` keyword before a function declaration, like so:

```dart
external void someFunc(int i);
```

An external function's implementation can come from another Dart library, or, more commonly, from another language. In interop contexts, `external` introduces type information for foreign functions or values, making them usable in Dart. Implementation and usage is heavily platform specific, so check out the interop docs on, for example, [C ↗](https://dart.dev/interop/c-interop) or [JavaScript ↗](https://dart.dev/interop/js-interop) to learn more.

External functions can be top-level functions, [instance methods ↗](https://dart.dev/language/methods#instance-methods), [getters or setters ↗](https://dart.dev/language/methods#getters-and-setters), or [non-redirecting constructors ↗](https://dart.dev/language/constructors#redirecting-constructors). An [instance variable ↗](https://dart.dev/language/classes#instance-variables) can be `external` too, which is equivalent to an external getter and (if the variable is not `final`) an external setter.

{{< content-ads/bottom-banner >}}
