---
linkTitle: "Metadata"
title: "Metadata | Dart - Dart en Español"
description: "Metadata and annotations in Dart."
weight: 4
type: docs
draft: true
---

# Metadata

Use metadata to give additional information about your code. A metadata annotation begins with the character `@`, followed by either a reference to a compile-time constant (such as `deprecated`) or a call to a constant constructor.

{{< content-ads/top-banner >}}

Four annotations are available to all Dart code: [`@Deprecated` ↗](https://api.dart.dev/stable/dart-core/Deprecated-class.html), [`@deprecated` ↗](https://api.dart.dev/stable/dart-core/Deprecated-class.html), [`@override` ↗](https://api.dart.dev/stable/dart-core/override-constant.html), and [`@pragma` ↗](https://api.dart.dev/stable/dart-core/pragma-class.html). For examples of using `@override`, see [Extending a class ↗](https://dart.dev/language/extend). Here's an example of using the `@Deprecated` annotation:

```dart
class Television {
  /// Use [turnOn] to turn the power on instead.
  
  void activate() {
    turnOn();
  }

  /// Turns the TV's power on.
  void turnOn() {...}
  // ···
}
```

You can use `@deprecated` if you don't want to specify a message. However, we [recommend ↗](https://dart.dev/tools/linter-rules/provide_deprecation_message) always specifying a message with `@Deprecated`.

You can define your own metadata annotations. Here's an example of defining a `@Todo` annotation that takes two arguments:

```dart
class Todo {
  final String who;
  final String what;

  const Todo(this.who, this.what);
}
```

And here's an example of using that `@Todo` annotation:

```dart
@Todo('Dash', 'Implement this function')
void doSomething() {
  print('Do something');
}
```

Metadata can appear before a library, class, typedef, type parameter, constructor, factory, function, field, parameter, or variable declaration and before an import or export directive.

{{< content-ads/bottom-banner >}}
