---
linkTitle: "Iterable collections"
title: "Iterable collections | Dart - Dart en Español"
description: "An interactive guide to using Iterable objects such as lists and sets."
weight: 3
type: docs
draft: true
---

# Iterable collections

Contents *keyboard_arrow_down**keyboard_arrow_up*
- [What are collections? ↗](https://dart.dev/codelabs/iterables#what-are-collections)
- [What is an Iterable? ↗](https://dart.dev/codelabs/iterables#what-is-an-iterable)
- [Reading elements ↗](https://dart.dev/codelabs/iterables#reading-elements)- [Example: Using a for-in loop ↗](https://dart.dev/codelabs/iterables#example-using-a-for-in-loop)
  - [Example: Using first and last ↗](https://dart.dev/codelabs/iterables#example-using-first-and-last)
  - [Example: Using firstWhere() ↗](https://dart.dev/codelabs/iterables#example-using-firstwhere)
  - [Exercise: Practice writing a test predicate ↗](https://dart.dev/codelabs/iterables#exercise-practice-writing-a-test-predicate)
- [Checking conditions ↗](https://dart.dev/codelabs/iterables#checking-conditions)- [Example: Using any() and every() ↗](https://dart.dev/codelabs/iterables#example-using-any-and-every)
  - [Exercise: Verify that an Iterable satisfies a condition ↗](https://dart.dev/codelabs/iterables#exercise-verify-that-an-iterable-satisfies-a-condition)
- [Filtering ↗](https://dart.dev/codelabs/iterables#filtering)- [Example: Using where() ↗](https://dart.dev/codelabs/iterables#example-using-where)
  - [Example: Using takeWhile ↗](https://dart.dev/codelabs/iterables#example-using-takewhile)
  - [Exercise: Filtering elements from a list ↗](https://dart.dev/codelabs/iterables#exercise-filtering-elements-from-a-list)
- [Mapping ↗](https://dart.dev/codelabs/iterables#mapping)- [Example: Using map to change elements ↗](https://dart.dev/codelabs/iterables#example-using-map-to-change-elements)
  - [Exercise: Mapping to a different type ↗](https://dart.dev/codelabs/iterables#exercise-mapping-to-a-different-type)
- [Exercise: Putting it all together ↗](https://dart.dev/codelabs/iterables#exercise-putting-it-all-together)
- [What's next ↗](https://dart.dev/codelabs/iterables#whats-next)
*more_horiz*

{{< content-ads/top-banner >}}

This codelab teaches you how to use collections that implement the [Iterable ↗](https://api.dart.dev/stable/dart-core/Iterable-class.html) class—for example [List ↗](https://api.dart.dev/stable/dart-core/List-class.html) and [Set. ↗](https://api.dart.dev/stable/dart-core/Set-class.html) Iterables are basic building blocks for all sorts of Dart applications, and you're probably already using them, even without noticing. This codelab helps you make the most out of them.

Using the embedded DartPad editors, you can test your knowledge by running example code and completing exercises.

To get the most out of this codelab, you should have basic knowledge of [Dart syntax ↗](https://dart.dev/language).

This codelab covers the following material:

- How to read elements of an Iterable.
- How to check if the elements of an Iterable satisfy a condition.
- How to filter the contents of an Iterable.
- How to map the contents of an Iterable to a different value.

Estimated time to complete this codelab: 60 minutes.

The exercises in this codelab have partially completed code snippets. You can use DartPad to test your knowledge by completing the code and clicking the **Run** button. **Don't edit the test code in the `main` function or below**.

If you need help, expand the **Hint** or **Solution** dropdown after each exercise.

## What are collections? {#what-are-collections}

A collection is an object that represents a group of objects, which are called *elements*. Iterables are a kind of collection.

A collection can be empty, or it can contain many elements. Depending on the purpose, collections can have different structures and implementations. These are some of the most common collection types:

- [List: ↗](https://api.dart.dev/stable/dart-core/List-class.html) Used to read elements by their indexes.
- [Set: ↗](https://api.dart.dev/stable/dart-core/Set-class.html) Used to contain elements that can occur only once.
- [Map: ↗](https://api.dart.dev/stable/dart-core/Map-class.html) Used to read elements using a key.

## What is an Iterable? {#what-is-an-iterable}

An `Iterable` is a collection of elements that can be accessed sequentially.

In Dart, an `Iterable` is an abstract class, meaning that you can't instantiate it directly. However, you can create a new `Iterable` by creating a new `List` or `Set`.

{{< content-ads/middle-banner-1 >}}

Both `List` and `Set` are `Iterable`, so they have the same methods and properties as the `Iterable` class.

A `Map` uses a different data structure internally, depending on its implementation. For example, [HashMap ↗](https://api.dart.dev/stable/dart-collection/HashMap-class.html) uses a hash table in which the elements (also called *values*) are obtained using a key. Elements of a `Map` can also be read as `Iterable` objects by using the map's `entries` or `values` property.

This example shows a `List` of `int`, which is also an `Iterable` of `int`:

```dart
Iterable<int> iterable = [1, 2, 3];
```

The difference with a `List` is that with the `Iterable`, you can't guarantee that reading elements by index will be efficient. `Iterable`, as opposed to `List`, doesn't have the `[]` operator.

For example, consider the following code, which is **invalid**:

bad```dart
Iterable<int> iterable = [1, 2, 3];
int value = iterable;
```

If you read elements with `[]`, the compiler tells you that the operator `'[]'` isn't defined for the class `Iterable`, which means that you can't use `[index]` in this case.

You can instead read elements with `elementAt()`, which steps through the elements of the iterable until it reaches that position.

```dart
Iterable<int> iterable = [1, 2, 3];
int value = iterable.elementAt(1);
```

Continue to the next section to learn more about how to access elements of an `Iterable`.

## Reading elements {#reading-elements}

You can read the elements of an iterable sequentially, using a `for-in` loop.

### Example: Using a for-in loop {#example-using-a-for-in-loop}

The following example shows you how to read elements using a `for-in` loop.

```dart
void main() {
  const iterable = ['Salad', 'Popcorn', 'Toast'];
  for (final element in iterable) {
    print(element);
  }
}
```

### Example: Using first and last {#example-using-first-and-last}

In some cases, you want to access only the first or the last element of an `Iterable`.

With the `Iterable` class, you can't access the elements directly, so you can't call `iterable[0]` to access the first element. Instead, you can use `first`, which gets the first element.

Also, with the `Iterable` class, you can't use the operator `[]` to access the last element, but you can use the `last` property.

```dart
void main() {
  Iterable<String> iterable = const ['Salad', 'Popcorn', 'Toast'];
  print('The first element is ${iterable.first}');
  print('The last element is ${iterable.last}');
}
```

In this example you saw how to use `first` and `last` to get the first and last elements of an `Iterable`. It's also possible to find the first element that satisfies a condition. The next section shows how to do that using a method called `firstWhere()`.

### Example: Using firstWhere() {#example-using-firstwhere}

You already saw that you can access the elements of an `Iterable` sequentially, and you can easily get the first or last element.

Now, you learn how to use `firstWhere()` to find the first element that satisfies certain conditions. This method requires you to pass a *predicate*, which is a function that returns true if the input satisfies a certain condition.

```dart
String element = iterable.firstWhere((element) => element.length > 5);
```

For example, if you want to find the first `String` that has more than 5 characters, you must pass a predicate that returns true when the element size is greater than 5.

Run the following example to see how `firstWhere()` works. Do you think all the functions will give the same result?

```dart
bool predicate(String item) {
  return item.length > 5;
}

void main() {
  const items = ['Salad', 'Popcorn', 'Toast', 'Lasagne'];

  // You can find with a simple expression:
  var foundItem1 = items.firstWhere((item) => item.length > 5);
  print(foundItem1);

  // Or try using a function block:
  var foundItem2 = items.firstWhere((item) {
    return item.length > 5;
  });
  print(foundItem2);

  // Or even pass in a function reference:
  var foundItem3 = items.firstWhere(predicate);
  print(foundItem3);

  // You can also use an `orElse` function in case no value is found!
  var foundItem4 = items.firstWhere(
    (item) => item.length > 10,
    orElse: () => 'None!',
  );
  print(foundItem4);
}
```

In this example, you can see three different ways to write a predicate:

- **As an expression:** The test code has one line that uses arrow syntax (`=>`).
- **As a block:** The test code has multiple lines between brackets and a return statement.
- **As a function:** The test code is in an external function that's passed to the `firstWhere()` method as a parameter.

There is no right or wrong way. Use the way that works best for you, and that makes your code easier to read and understand.

The final example calls `firstWhere()` with the optional named parameter `orElse`, which provides an alternative when an element isn't found. In this case, the text `'None!'` is returned because no element satisfies the provided condition.

### Exercise: Practice writing a test predicate {#exercise-practice-writing-a-test-predicate}

The following exercise is a failing unit test that contains a partially complete code snippet. Your task is to complete the exercise by writing code to make the tests pass. You don't need to implement `main()`.

This exercise introduces `singleWhere()` This method works similarly to `firstWhere()`, but in this case it expects only one element of the `Iterable` to satisfy the predicate. If more than one or no element in the `Iterable` satisfies the predicate condition, then the method throws a [StateError ↗](https://api.dart.dev/stable/dart-core/StateError-class.html) exception.

Your goal is to implement the predicate for `singleWhere()` that satisfies the following conditions:

- The element contains the character `'a'`.
- The element starts with the character `'M'`.

All the elements in the test data are [strings ↗](https://api.dart.dev/stable/dart-core/String-class.html); you can check the class documentation for help.

```dart
// Implement the predicate of singleWhere
// with the following conditions
// * The element contains the character `'a'`
// * The element starts with the character `'M'`
String singleWhere(Iterable<String> items) {
  return items.singleWhere(TODO('Implement the outlined predicate.'));
}

// The following code is used to provide feedback on your solution.
// There is no need to read or modify it.
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

{{% details title="title="Expand for a hint on the predicate exercise.">Hint" closed="true" %}}
Your solution might make use of the `contains` and `startsWith` methods from the `String` class.
{{% /details %}}

{{% details title="title="Expand for the solution of the predicate exercise.">Solution" closed="true" %}}
```dart
String singleWhere(Iterable<String> items) {
  return items.singleWhere(
          (element) => element.startsWith('M') && element.contains('a'));
}
```
{{% /details %}}

## Checking conditions {#checking-conditions}

When working with `Iterable`, sometimes you need to verify that all the elements of a collection satisfy some condition.

You might be tempted to write a solution using a `for-in` loop like this one:

bad```dart
for (final item in items) {
  if (item.length < 5) {
    return false;
  }
}
return true;
```

However, you can accomplish the same using the `every()` method:

{{< content-ads/middle-banner-2 >}}

```dart
return items.every((item) => item.length >= 5);
```

Using the `every()` method results in code that is more readable, compact, and less error-prone.

### Example: Using any() and every() {#example-using-any-and-every}

The `Iterable` class provides two methods that you can use to verify conditions:

- `any()`: Returns true if at least one element satisfies the condition.
- `every()`: Returns true if all elements satisfy the condition.

Run this exercise to see them in action.

```dart
void main() {
  const items = ['Salad', 'Popcorn', 'Toast'];

  if (items.any((item) => item.contains('a'))) {
    print('At least one item contains "a"');
  }

  if (items.every((item) => item.length >= 5)) {
    print('All items have length >= 5');
  }
}
```

In the example, `any()` verifies that at least one element contains the character `a`, and `every()` verifies that all elements have a length equal to or greater than 5.

After running the code, try changing the predicate of `any()` so it returns false:

```dart
if (items.any((item) => item.contains('Z'))) {
  print('At least one item contains "Z"');
} else {
  print('No item contains "Z"');
}
```

You can also use `any()` to verify that no element of an `Iterable` satisfies a certain condition.

### Exercise: Verify that an Iterable satisfies a condition {#exercise-verify-that-an-iterable-satisfies-a-condition}

The following exercise provides practice using the `any()` and `every()` methods, described in the previous example. In this case, you work with a group of users, represented by `User` objects that have the member field `age`.

Use `any()` and `every()` to implement two functions:

- Part 1: Implement `anyUserUnder18()`.- Return `true` if at least one user is 17 or younger.
- Part 2: Implement `everyUserOver13()`.- Return `true` if all users are 14 or older.

{{< content-ads/middle-banner-3 >}}

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

{{% details title="title="Expand for a hint on the conditional filtering exercise.">Hint" closed="true" %}}
Remember to use the `any` and `every` methods from the `Iterable` class. For help and examples using these methods, refer to the [earlier discussion of them ↗](https://dart.dev/codelabs/iterables#example-using-any-and-every).
{{% /details %}}

{{% details title="title="Expand for the solution of the conditional filtering exercise.">Solution" closed="true" %}}
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

In this example, `where()` is used to find all numbers that are even, then `any()` is used to check if the results contain a negative number.

Later in the example, `where()` is used again to find all numbers larger than 1000. Because there are none, the result is an empty `Iterable`.

{{< content-ads/middle-banner-4 >}}

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

{{% details title="title="Expand for a hint on the filtering elements exercise.">Hint" closed="true" %}}
Remember to take advantage of the `where` method from the `Iterable` class. For help and examples using `where`, refer to the [earlier discussion of it ↗](https://dart.dev/codelabs/iterables#example-using-where).
{{% /details %}}

{{% details title="title="Expand for the solution of the filtering elements exercise.">Solution" closed="true" %}}
```dart
Iterable<User> filterOutUnder21(Iterable<User> users) {
  return users.where((user) => user.age >= 21);
}

Iterable<User> findShortNamed(Iterable<User> users) {
  return users.where((user) => user.name.length <= 3);
}
```
{{% /details %}}

{{< content-ads/middle-banner-5 >}}

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

{{% details title="title="Expand for a hint on the mapping elements exercise.">Hint" closed="true" %}}
Remember to take advantage of the `map` method from the `Iterable` class. For help and examples using `map`, refer to the [earlier discussion of it ↗](https://dart.dev/codelabs/iterables#example-using-map-to-change-elements).
To concatenate multiple values into a single string, consider using [string interpolation ↗](https://dart.dev/language/built-in-types#string-interpolation).
{{% /details %}}

{{< content-ads/middle-banner-6 >}}

{{% details title="title="Expand for the solution of the mapping elements exercise.">Solution" closed="true" %}}
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

{{% details title="title="Expand for the solution of the 'Putting it all together' exercise.">Solution" closed="true" %}}
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
