---
linkTitle: "Keywords"
title: "Keywords | Dart - Dart en Español"
description: "Keywords in Dart."
weight: 6
type: docs
next: /dart/language/types/built-in-types
draft: true
---

# Keywords

The following table lists the words that the Dart language treats specially.

{{< content-ads/top-banner >}}

|||||
|---|---|---|---|
|[abstract ↗](https://dart.dev/language/class-modifiers#abstract)|[else ↗](https://dart.dev/language/branches#if)|[import ↗](https://dart.dev/language/libraries#using-libraries)|[show ↗](https://dart.dev/language/libraries#importing-only-part-of-a-library)|
|[as ↗](https://dart.dev/language/operators#type-test-operators)|[enum ↗](https://dart.dev/language/enums)|[in ↗](https://dart.dev/language/loops#for-loops)|[static ↗](https://dart.dev/language/classes#class-variables-and-methods)|
|[assert ↗](https://dart.dev/language/error-handling#assert)|[export ↗](https://dart.dev/guides/libraries/create-packages)|[interface ↗](https://dart.dev/language/class-modifiers#interface)|[super ↗](https://dart.dev/language/extend)|
|[async ↗](https://dart.dev/language/async)|[extends ↗](https://dart.dev/language/extend)|[is ↗](https://dart.dev/language/operators#type-test-operators)|[switch ↗](https://dart.dev/language/branches#switch)|
|[await ↗](https://dart.dev/language/async)|[extension ↗](https://dart.dev/language/extension-methods)|[late](/dart/lenguaje/sintaxis-basica/variables#late-variables)|[sync ↗](https://dart.dev/language/functions#generators)|
|[base ↗](https://dart.dev/language/class-modifiers#base)|[external ↗](https://dart.dev/language/functions#external)|[library ↗](https://dart.dev/language/libraries)|[this ↗](https://dart.dev/language/constructors)|
|[break ↗](https://dart.dev/language/loops#break-and-continue)|[factory ↗](https://dart.dev/language/constructors#factory-constructors)|[mixin ↗](https://dart.dev/language/mixins)|[throw ↗](https://dart.dev/language/error-handling#throw)|
|[case ↗](https://dart.dev/language/branches#switch)|[false ↗](https://dart.dev/language/built-in-types#booleans)|[new ↗](https://dart.dev/language/classes#using-constructors)|[true ↗](https://dart.dev/language/built-in-types#booleans)|
|[catch ↗](https://dart.dev/language/error-handling#catch)|[final (variable)](/dart/lenguaje/sintaxis-basica/variables#final-and-const)|[null](/dart/lenguaje/sintaxis-basica/variables#default-value)|[try ↗](https://dart.dev/language/error-handling#catch)|
|[class ↗](https://dart.dev/language/classes#instance-variables)|[final (class) ↗](https://dart.dev/language/class-modifiers#final)|[on ↗](https://dart.dev/language/error-handling#catch)|[type ↗](https://dart.dev/language/extension-types)|
|[const](/dart/lenguaje/sintaxis-basica/variables#final-and-const)|[finally ↗](https://dart.dev/language/error-handling#finally)|[operator ↗](https://dart.dev/language/methods#operators)|[typedef ↗](https://dart.dev/language/typedefs)|
|[continue ↗](https://dart.dev/language/loops#break-and-continue)|[for ↗](https://dart.dev/language/loops#for-loops)|[part ↗](https://dart.dev/guides/libraries/create-packages#organizing-a-package)|[var](/dart/lenguaje/sintaxis-basica/variables)|
|[covariant ↗](https://dart.dev/guides/language/sound-problems#the-covariant-keyword)|[Function ↗](https://dart.dev/language/functions)|[required ↗](https://dart.dev/language/functions#named-parameters)|[void ↗](https://dart.dev/language/built-in-types)|
|[default ↗](https://dart.dev/language/branches#switch)|[get ↗](https://dart.dev/language/methods#getters-and-setters)|[rethrow ↗](https://dart.dev/language/error-handling#catch)|[when ↗](https://dart.dev/language/branches#when)|
|[deferred ↗](https://dart.dev/language/libraries#lazily-loading-a-library)|[hide ↗](https://dart.dev/language/libraries#importing-only-part-of-a-library)|[return ↗](https://dart.dev/language/functions#return-values)|[while ↗](https://dart.dev/language/loops#while-and-do-while)|
|[do ↗](https://dart.dev/language/loops#while-and-do-while)|[if ↗](https://dart.dev/language/branches#if)|[sealed ↗](https://dart.dev/language/class-modifiers#sealed)|[with ↗](https://dart.dev/language/mixins)|
|[dynamic](/dart/lenguaje/conceptos-basicos#important-concepts)|[implements ↗](https://dart.dev/language/classes#implicit-interfaces)|[set ↗](https://dart.dev/language/methods#getters-and-setters)|[yield ↗](https://dart.dev/language/functions#generators)|

Avoid using these words as identifiers. However, if necessary, the keywords marked with superscripts can be identifiers:

- Words with the superscript **1** are **contextual keywords**, which have meaning only in specific places. They're valid identifiers everywhere.
- Words with the superscript **2** are **built-in identifiers**. These keywords are valid identifiers in most places, but they can't be used as class or type names, or as import prefixes.
- Words with the superscript **3** are limited reserved words related to [asynchrony support ↗](https://dart.dev/language/async). You can't use `await` or `yield` as an identifier in any function body marked with `async`, `async*`, or `sync*`.

All other words in the table are **reserved words**, which can't be identifiers.

{{< content-ads/bottom-banner >}}
