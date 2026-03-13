import type { WeekData } from "../types";

/* ================================================================== */
/*  WEEK 3: Introduction to JavaScript                                 */
/* ================================================================== */

export const week3: WeekData = {
  week: 3,
  title: "Week 3: Introduction to JavaScript",

  overview:
    "JavaScript is the programming language of the web. It brings interactivity and dynamic behaviour to websites, allowing you to respond to user actions, manipulate page content, and build complex applications. This week we cover the fundamentals: variables, data types, operators, functions, conditionals, and event handling — the building blocks you'll use in every JavaScript project.",

  sections: [
    /* 1 ---------------------------------------------------------- */
    {
      title: "Introduction to Variables, Data Types, and Operators",
      content:
        "Variables are containers for storing data values. JavaScript uses the keywords var, let, and const to declare variables. Understanding data types and operators is essential for writing any meaningful program.",
      subsections: [
        {
          title: "Declaring Variables",
          content:
            "JavaScript provides three ways to declare variables: var (function-scoped, older style), let (block-scoped, reassignable), and const (block-scoped, cannot be reassigned). Modern JavaScript favours let and const over var.",
          bullets: [
            "let age = 25; — declares a variable that can be reassigned later.",
            "const name = 'Alice'; — declares a constant that cannot be reassigned.",
            "var is hoisted to the top of its function scope, which can lead to unexpected behaviour — prefer let and const.",
            "Variable names are case-sensitive and should be descriptive (e.g. userEmail, totalPrice).",
          ],
        },
        {
          title: "Primitive Data Types",
          content:
            "JavaScript has seven primitive data types. The most commonly used are String, Number, Boolean, Undefined, and Null.",
          bullets: [
            "String — text enclosed in quotes: 'Hello', \"World\", or `template literal`.",
            "Number — integers and decimals: 42, 3.14, -7. JavaScript has only one number type.",
            "Boolean — true or false, used for logical conditions.",
            "Undefined — a variable that has been declared but not assigned a value.",
            "Null — an intentional absence of any value.",
            "BigInt and Symbol are advanced types you'll encounter later.",
          ],
        },
        {
          title: "Operators",
          content:
            "Operators perform operations on values. JavaScript includes arithmetic, comparison, logical, and assignment operators.",
          bullets: [
            "Arithmetic: + (add), - (subtract), * (multiply), / (divide), % (modulus), ** (exponent).",
            "Comparison: == (loose equality), === (strict equality), != , !== , < , > , <= , >=.",
            "Logical: && (AND), || (OR), ! (NOT) — combine or invert boolean expressions.",
            "Assignment: = , += , -= , *= , /= — assign or update variable values.",
            "Always prefer === over == to avoid unexpected type coercion.",
          ],
        },
        {
          title: "Type Coercion and typeof",
          content:
            "JavaScript automatically converts types in certain situations (type coercion). Use the typeof operator to check a value's type at runtime.",
          bullets: [
            "'5' + 3 results in '53' (string concatenation) — the number is coerced to a string.",
            "'5' - 3 results in 2 — the string is coerced to a number.",
            "typeof 42 returns 'number'; typeof 'hello' returns 'string'.",
            "Explicit conversion: Number('5'), String(123), Boolean(0).",
          ],
        },
      ],
    },

    /* 2 ---------------------------------------------------------- */
    {
      title: "How to Use Functions and Conditionals",
      content:
        "Functions let you group reusable blocks of code, while conditionals allow your program to make decisions based on different conditions. Together they form the core logic of any application.",
      subsections: [
        {
          title: "Defining Functions",
          content:
            "A function is a block of code designed to perform a particular task. Functions are defined once and can be called (invoked) multiple times.",
          bullets: [
            "Function declaration: function greet(name) { return 'Hello, ' + name; }",
            "Function expression: const greet = function(name) { return 'Hello, ' + name; };",
            "Arrow function (ES6): const greet = (name) => 'Hello, ' + name;",
            "Functions can accept parameters (inputs) and return a value (output).",
            "If no return statement is provided, the function returns undefined.",
          ],
        },
        {
          title: "Calling Functions",
          content:
            "To execute a function, you call it by its name followed by parentheses containing any arguments.",
          bullets: [
            "greet('Alice') calls the greet function with 'Alice' as the argument.",
            "You can store the returned value: const message = greet('Bob');",
            "Functions can call other functions, enabling modular, readable code.",
          ],
        },
        {
          title: "Conditional Statements: if, else if, else",
          content:
            "Conditionals execute different code blocks based on whether a condition evaluates to true or false.",
          bullets: [
            "if (condition) { /* runs if true */ }",
            "else if (anotherCondition) { /* runs if first is false and this is true */ }",
            "else { /* runs if all above conditions are false */ }",
            "Conditions are expressions that evaluate to a boolean (true/false).",
          ],
        },
        {
          title: "Comparison in Conditions",
          content:
            "Conditions typically use comparison and logical operators to test values.",
          bullets: [
            "if (age >= 18) { console.log('Adult'); }",
            "if (username === 'admin' && isLoggedIn) { /* grant access */ }",
            "Use parentheses to group complex conditions for clarity.",
          ],
        },
        {
          title: "The Ternary Operator",
          content:
            "The ternary operator is a shorthand for simple if-else statements: condition ? valueIfTrue : valueIfFalse.",
          bullets: [
            "const status = age >= 18 ? 'Adult' : 'Minor';",
            "Best for simple assignments; avoid nesting multiple ternaries.",
          ],
        },
        {
          title: "Switch Statements",
          content:
            "When comparing a single value against many possible matches, a switch statement can be cleaner than multiple else-if blocks.",
          bullets: [
            "switch (day) { case 'Monday': /* ... */ break; case 'Tuesday': /* ... */ break; default: /* ... */ }",
            "Always include a break statement to prevent fall-through (unless intentional).",
            "The default case handles any value not matched by the other cases.",
          ],
        },
      ],
    },

    /* 3 ---------------------------------------------------------- */
    {
      title: "Basics of Event Handling in JavaScript",
      content:
        "Event handling is what makes web pages interactive. An event is any action that occurs in the browser — a click, a key press, a form submission, the page loading. JavaScript allows you to listen for these events and execute code in response.",
      subsections: [
        {
          title: "What Are Events?",
          content:
            "Events are signals that something has happened. The browser fires events in response to user actions or changes in state.",
          bullets: [
            "User events: click, dblclick, mouseover, mouseout, keydown, keyup, input, submit.",
            "Document events: DOMContentLoaded (HTML fully parsed), load (all resources loaded).",
            "Window events: resize, scroll.",
            "Each event carries an event object with details (e.g. which key was pressed, mouse position).",
          ],
        },
        {
          title: "Adding Event Listeners",
          content:
            "The recommended way to handle events is with addEventListener(). It attaches a callback function that runs when the event occurs.",
          bullets: [
            "element.addEventListener('click', function(event) { /* handle click */ });",
            "Arrow functions work too: button.addEventListener('click', () => { /* ... */ });",
            "You can attach multiple listeners to the same element and event type.",
            "Remove listeners with element.removeEventListener() when you no longer need them.",
          ],
        },
        {
          title: "The Event Object",
          content:
            "When an event fires, the browser passes an event object to your callback. This object contains useful information about the event.",
          bullets: [
            "event.target — the element that triggered the event.",
            "event.type — the type of event (e.g. 'click').",
            "event.preventDefault() — stops the default browser action (e.g. prevents form submission or link navigation).",
            "event.stopPropagation() — stops the event from bubbling up to parent elements.",
          ],
        },
        {
          title: "Inline Event Handlers (Legacy)",
          content:
            "Older code may use inline handlers like onclick=\"doSomething()\". While they work, mixing JavaScript into HTML is harder to maintain. Prefer addEventListener for cleaner separation of concerns.",
          bullets: [
            "<button onclick=\"alert('Clicked!')\">Click me</button> — works, but not recommended.",
            "Inline handlers can only attach one function per event on an element.",
          ],
        },
        {
          title: "Practical Example: Button Click",
          content:
            "Here's a simple pattern you'll use often: select an element, attach a listener, and update the page in response.",
          bullets: [
            "const button = document.querySelector('#myButton');",
            "button.addEventListener('click', () => { document.querySelector('#output').textContent = 'Button clicked!'; });",
            "Use document.getElementById() or document.querySelector() to select elements by ID, class, or tag.",
          ],
        },
      ],
    },
  ],

  assessment:
    "Create a JavaScript program that asks for a user's name, checks if the name has more than five letters using a function and conditionals, and displays a message based on the result. Include event handling by triggering this check when a button is clicked. Submit the code and a screenshot of the output.",

  supportResources: [
    {
      label: "MDN — JavaScript Basics",
      url: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics",
    },
    {
      label: "JavaScript.info — The Modern JavaScript Tutorial",
      url: "https://javascript.info/",
    },
    {
      label: "MDN — Introduction to Events",
      url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events",
    },
  ],
};
