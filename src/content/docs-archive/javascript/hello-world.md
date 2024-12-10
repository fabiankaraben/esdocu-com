---
title: "Hello World example in JavaScript"
description: "..."
---

## Simple Hello World example

Here's a "Hello World" example in JavaScript:

```js {filename="JavaScript"}
console.log("Hello World");
```

### Explanation

- `console.log()` is a built-in function in JavaScript that prints a message to the console (usually the developer tools in your browser).
- `"Hello World"` is the string (text) that we want to print.


### How to run it

1. In a browser:

- Open your browser's developer tools (usually by pressing F12).
- Go to the "Console" tab.
- Paste the code and press Enter. You should see "Hello World" printed in the console.


2. In a Node.js environment:

- If you have Node.js installed, you can create a .js file (e.g., hello.js) and paste the code into it.
- Open your terminal and navigate to the directory where you saved the file.
- Run node hello.js. You should see "Hello World" printed in the terminal.

## Next step Hello World example

Here's a more complex "Hello World" example in JavaScript that demonstrates a few more concepts:

```js {filename="JavaScript"}
function greet(name) {
    let message = "Hello, " + name + "! Welcome to the world of JavaScript.";
    return message;
}

let userName = prompt("Please enter your name:");
let greeting = greet(userName);
alert(greeting);
```

### Explanation

1. `function greet(name)`:

- This defines a function named `greet` that takes one parameter, name.
- Inside the function:
    - `let message = ...`: creates a variable message and assigns it a string that includes the provided name.
    - `return message`: the function returns the constructed message.

2. `let userName = prompt("...")`:

- This creates a variable `userName` and assigns it the value entered by the user in a prompt dialog box.

3. `let greeting = greet(userName)`:

This calls the `greet` function, passing the `userName` as an argument. The returned value (the greeting message) is stored in the `greeting` variable.

4. `alert(greeting)`:

This displays an alert dialog box with the `greeting` message.

### Key points

**Functions**: Functions help organize code into reusable blocks.

**Variables**: Variables store data that can be used and modified throughout the program.

**String concatenation**: The `+` operator is used to combine strings.

**User interaction**: `prompt` gets input from the user, and `alert` displays a message.

This example is still relatively simple, but it shows how you can start building more interactive and dynamic JavaScript programs.

## Why is important the "Hello World" example?

The "Hello World" example is important to learn how to code for several reasons:

1. **Simplicity & Accessibility**: It's a very simple program that demonstrates the most basic syntax and structure of a programming language. This makes it an easy entry point for beginners, allowing them to focus on the fundamental concepts without being overwhelmed by complexity.

2. **Foundation for Building**: It acts as a building block for more complex programs. Once you understand how to write and run a "Hello World" program, you can start adding more features and functionality, gradually expanding your coding skills.

3. **Verification of Setup**: It serves as a quick test to ensure that your development environment (compiler, interpreter, etc.) is set up correctly. If you can successfully run a "Hello World" program, it indicates that you're ready to start coding more substantial projects.

4. **Confidence Boost**: Successfully running your first program, even if it's just "Hello World," can be a motivating experience. It provides a sense of accomplishment and encourages you to continue learning and exploring the possibilities of programming.

5. **Universal Starting Point**: The "Hello World" tradition is widespread across almost all programming languages. This makes it a familiar and unifying concept for programmers, regardless of their specific language or background.

In essence, the "Hello World" example is like the first step on a coding journey. It's a simple but crucial starting point that sets the stage for further learning and exploration.