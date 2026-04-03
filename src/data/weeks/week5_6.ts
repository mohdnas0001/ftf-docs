import type { WeekData } from "../types";

/* ================================================================== */
/*  WEEK 5 – 6: Deep Dive into JavaScript & React with Tailwind CSS   */
/* ================================================================== */

export const week5_6: WeekData = {
  week: 5,
  title:
    "Weeks 5 – 6: Deep Dive into JavaScript & Building React Apps with Tailwind CSS",

  overview:
    "These two weeks are a natural pair. In Week 5 we sharpen your JavaScript skills — arrays, loops, ES6 features, objects, and methods — the exact building blocks used inside every React application. In Week 6 we put those skills to work by setting up a real React project, introducing Tailwind CSS for utility-first styling, and building our first fully styled React component. By the end of Week 6 you will have a deployable React app that demonstrates both modern JavaScript patterns and professional UI styling.",

  sections: [
    /* ===== WEEK 5 ===== */

    /* 1 ---------------------------------------------------------- */
    {
      title: "Week 5 · Understanding Arrays and Loops",
      content:
        "Arrays are ordered, indexed collections that can hold any mix of values. Loops let you process every item without writing repetitive code. Together they are the foundation of almost every data-driven UI.",
      subsections: [
        {
          title: "Creating and Accessing Arrays",
          content:
            "An array is created with square brackets and items separated by commas. Each item has a numeric index starting at 0.",
          bullets: [
            "const fruits = ['apple', 'banana', 'cherry'];",
            "fruits[0] → 'apple' (first element); fruits[2] → 'cherry' (last element here).",
            "fruits.length returns the number of elements in the array.",
            "Arrays can hold mixed types: const mixed = [1, 'hello', true, null];",
            "Nested arrays (2-D data): const grid = [[1, 2], [3, 4]]; — access with grid[0][1] → 2.",
          ],
        },
        {
          title: "Mutating Arrays — Common Methods",
          content:
            "JavaScript arrays have built-in methods that add, remove, or transform their contents. Knowing these is essential before learning React's immutable state patterns.",
          bullets: [
            "push(item) — adds one or more items to the END of the array; returns the new length.",
            "pop() — removes and returns the LAST item.",
            "unshift(item) — adds to the BEGINNING; returns new length.",
            "shift() — removes and returns the FIRST item.",
            "splice(start, deleteCount, ...items) — removes/replaces/inserts at any position.",
            "concat(arr2) — merges two arrays into a new array WITHOUT modifying originals.",
            "slice(start, end) — returns a shallow copy of a portion of the array (non-destructive).",
          ],
        },
        {
          title: "The for Loop",
          content:
            "The classic for loop gives you full control over the iteration: an initialiser, a condition checked each iteration, and an update expression run after each iteration.",
          bullets: [
            "for (let i = 0; i < fruits.length; i++) { console.log(fruits[i]); }",
            "Use i to access both the element (fruits[i]) and its position (i).",
            "Beware off-by-one errors: use < length, not <= length.",
            "break exits the loop early; continue skips to the next iteration.",
          ],
        },
        {
          title: "The for…of Loop",
          content:
            "ES6 introduced for…of which iterates directly over the values of any iterable (arrays, strings, Sets, Maps). It is cleaner when you don't need the index.",
          bullets: [
            "for (const fruit of fruits) { console.log(fruit); }",
            "More readable than the classic for loop for simple iterations.",
            "Use for…in to iterate over object keys (not recommended for arrays).",
          ],
        },
        {
          title: "Higher-Order Array Methods",
          content:
            "These ES5+ methods accept a callback function and are the preferred approach in modern JavaScript and React. They return new arrays and never mutate the original.",
          bullets: [
            "forEach(callback) — executes callback for each element; returns undefined. Use for side effects.",
            "map(callback) — transforms each element and returns a NEW array of the same length. Core to React rendering.",
            "filter(callback) — returns a NEW array of elements for which the callback returns true.",
            "find(callback) — returns the FIRST element that satisfies the callback, or undefined.",
            "findIndex(callback) — like find but returns the index instead.",
            "some(callback) — returns true if AT LEAST ONE element satisfies the callback.",
            "every(callback) — returns true only if ALL elements satisfy the callback.",
            "reduce(callback, initialValue) — accumulates all elements into a single value (sum, object, nested array, etc.).",
            "sort(compareFn) — sorts in place (mutates!); always pass a compare function for numbers: (a,b) => a - b.",
          ],
        },
        {
          title: "Arrays in the Real World",
          content:
            "Understanding how arrays appear in everyday web development helps you bridge theory and practice.",
          bullets: [
            "A list of posts from an API is an array of objects — map() renders them as JSX cards.",
            "A search term filters a products array with filter() before displaying results.",
            "A shopping cart total is calculated with reduce() over an array of price numbers.",
            "Adding a new todo item uses spread syntax [...todos, newTodo] to keep state immutable in React.",
          ],
        },
      ],
    },

    /* 2 ---------------------------------------------------------- */
    {
      title: "Week 5 · Exploring ES6 Features: let/const, Arrow Functions, and More",
      content:
        "ES6 (ECMAScript 2015) was a landmark update that introduced cleaner syntax and powerful new capabilities. Every modern JavaScript developer — and every React developer — is expected to be fluent in these features.",
      subsections: [
        {
          title: "let and const vs var",
          content:
            "Before ES6 the only way to declare a variable was var. ES6 introduced let and const which are block-scoped, predictable, and far less error-prone.",
          bullets: [
            "var is function-scoped and hoisted — it exists before its declaration line, which causes bugs.",
            "let is block-scoped — it only exists within the nearest { } braces. Reassignable.",
            "const is block-scoped — must be assigned on declaration and cannot be reassigned (though its properties can be mutated).",
            "Rule of thumb: use const by default; switch to let only if you need to reassign; never use var.",
            "const does NOT make objects or arrays immutable — it only prevents reassignment of the variable binding.",
          ],
        },
        {
          title: "Arrow Functions",
          content:
            "Arrow functions provide a shorter syntax for writing functions and automatically bind the surrounding this context — a critical difference from regular functions.",
          bullets: [
            "Basic form: const add = (a, b) => a + b;",
            "Single parameter: no parentheses needed — const double = n => n * 2;",
            "No parameters: must use empty parens — const greet = () => 'Hello!';",
            "Multi-line body: use curly braces and an explicit return — const greet = name => { const msg = 'Hi ' + name; return msg; };",
            "Implicit return: if the body is a single expression with no curly braces, it is returned automatically.",
            "Arrow functions do NOT have their own this — they inherit it from the enclosing scope. Essential in React event handlers.",
            "Arrow functions cannot be used as constructors (no new keyword).",
          ],
        },
        {
          title: "Template Literals",
          content:
            "Template literals use backticks (`) instead of quotes and allow embedded expressions with ${ }. They also support multi-line strings natively.",
          bullets: [
            "const msg = `Hello, ${name}! You are ${age} years old.`;",
            "Any valid JavaScript expression can go inside ${ } — maths, ternaries, function calls.",
            "Multi-line: const html = `<div>\n  <p>${text}</p>\n</div>`;",
            "Tagged templates allow custom processing — used in libraries like styled-components.",
          ],
        },
        {
          title: "Destructuring",
          content:
            "Destructuring lets you unpack values from arrays or properties from objects into distinct variables with a concise syntax.",
          bullets: [
            "Array destructuring: const [first, second] = ['Alice', 'Bob']; — order matters.",
            "Skipping elements: const [,, third] = [1, 2, 3]; — third = 3.",
            "Object destructuring: const { name, age } = student; — property names must match.",
            "Rename on destructure: const { name: studentName } = student;",
            "Default values: const { role = 'student' } = user;",
            "Nested destructuring: const { address: { city } } = person;",
            "Used everywhere in React — destructuring props: function Card({ title, description }) { … }",
          ],
        },
        {
          title: "Spread and Rest Operators",
          content:
            "Both use the ... syntax but serve opposite purposes: spread expands an iterable into individual elements, while rest collects multiple elements into an array.",
          bullets: [
            "Spread (arrays): const combined = [...arr1, ...arr2]; — merge without mutating.",
            "Spread (objects): const updated = { ...original, age: 30 }; — shallow clone with overrides.",
            "Spread (function calls): Math.max(...numbers);",
            "Rest (function params): function sum(...nums) { return nums.reduce((a,b) => a+b, 0); }",
            "Rest in destructuring: const [first, ...rest] = [1, 2, 3, 4]; — rest = [2, 3, 4].",
            "React uses spread constantly: updating state immutably — setState({ ...prev, count: prev.count + 1 });",
          ],
        },
        {
          title: "Default Parameters",
          content:
            "Default parameters allow function parameters to have a fallback value if no argument is provided or if undefined is passed.",
          bullets: [
            "function greet(name = 'stranger') { return `Hello, ${name}`; }",
            "greet() → 'Hello, stranger'; greet('Alice') → 'Hello, Alice'.",
            "Default values are evaluated at call time, not at definition time.",
            "Useful for optional configuration objects: function connect({ host = 'localhost', port = 3000 } = {}) { … }",
          ],
        },
        {
          title: "Short-Circuit Evaluation and Ternaries",
          content:
            "These patterns are ubiquitous in React JSX for conditional rendering and value selection.",
          bullets: [
            "Ternary: condition ? valueIfTrue : valueIfFalse — compact single-line conditional.",
            "Short-circuit (&&): condition && <Component /> — render only when condition is truthy.",
            "Nullish coalescing (??): value ?? 'default' — use default only when value is null or undefined (not just falsy).",
            "Optional chaining (?.): user?.address?.city — safely access nested properties without throwing.",
          ],
        },
        {
          title: "Modules: import and export",
          content:
            "ES6 modules split code across multiple files and enable tree-shaking (removing unused code at build time). Every React file uses module syntax.",
          bullets: [
            "Named export: export const PI = 3.14; — import with import { PI } from './math';",
            "Default export: export default function App() { … } — import with import App from './App';",
            "A file can have many named exports but only ONE default export.",
            "Re-export: export { PI } from './math'; — useful for creating index barrel files.",
            "import * as math from './math'; — import everything as a namespace object.",
          ],
        },
      ],
    },

    /* 3 ---------------------------------------------------------- */
    {
      title: "Week 5 · Advanced Application: Working with Objects and Methods",
      content:
        "Objects are the primary data structure in JavaScript. They group related data and behaviour together. Understanding how to create, read, update, and iterate over objects — and how to attach methods — is a prerequisite for React components, API responses, and state management.",
      subsections: [
        {
          title: "Creating Objects",
          content:
            "The most common way to create an object is an object literal: a set of key-value pairs inside curly braces.",
          bullets: [
            "const student = { name: 'Alice', age: 22, enrolled: true };",
            "Keys (properties) are strings by default; values can be any data type including other objects and functions.",
            "Access properties with dot notation (student.name) or bracket notation (student['name']).",
            "Bracket notation is required when the key is dynamic: student[fieldName].",
            "Add a new property at any time: student.grade = 'A';",
            "Delete a property: delete student.enrolled;",
          ],
        },
        {
          title: "Methods on Objects",
          content:
            "A method is simply a function stored as a property of an object. Use the this keyword inside a method to reference the object itself.",
          bullets: [
            "const student = { name: 'Alice', age: 22, displayInfo() { return `${this.name}, ${this.age} years old`; } };",
            "Call the method: student.displayInfo() → 'Alice, 22 years old'.",
            "ES6 shorthand methods omit the function keyword: { greet() { … } }",
            "Arrow functions should NOT be used as methods if you need this — they inherit the outer this instead.",
            "Methods can modify the object's own properties via this.",
          ],
        },
        {
          title: "Object Iteration",
          content:
            "Several built-in tools let you loop over an object's keys, values, or key-value pairs.",
          bullets: [
            "Object.keys(obj) — returns an array of property names: ['name', 'age', 'enrolled'].",
            "Object.values(obj) — returns an array of property values: ['Alice', 22, true].",
            "Object.entries(obj) — returns an array of [key, value] pairs: [['name','Alice'], ['age',22], …].",
            "Iterate with for…of + destructuring: for (const [key, val] of Object.entries(student)) { … }",
            "for…in iterates over ALL enumerable properties including inherited ones — generally avoid for plain objects; use Object.keys instead.",
          ],
        },
        {
          title: "Object Shorthand and Computed Properties",
          content:
            "ES6 introduced cleaner syntax for creating objects from existing variables and for dynamic property names.",
          bullets: [
            "Property shorthand: if variable name equals key name — const name = 'Alice'; const obj = { name }; // same as { name: name }",
            "Method shorthand: { displayInfo() { … } } instead of { displayInfo: function() { … } }",
            "Computed property names: const key = 'score'; const obj = { [key]: 95 }; → { score: 95 }",
          ],
        },
        {
          title: "Prototypes and Classes (ES6)",
          content:
            "JavaScript is prototype-based. ES6 classes provide a cleaner syntax over the underlying prototype system. React class components used this pattern before hooks replaced them.",
          bullets: [
            "class Student { constructor(name, age) { this.name = name; this.age = age; } displayInfo() { return `${this.name}, ${this.age}`; } }",
            "const alice = new Student('Alice', 22);",
            "Inheritance with extends: class GradStudent extends Student { constructor(name, age, thesis) { super(name, age); this.thesis = thesis; } }",
            "super() calls the parent constructor — required in a child class before using this.",
            "Static methods belong to the class itself: static createAnonymous() { return new Student('Anonymous', 0); }",
            "Although React functional components with hooks are now standard, understanding classes helps you read older codebases.",
          ],
        },
        {
          title: "Immutability Patterns",
          content:
            "React requires that you never mutate state directly. These patterns create updated copies instead of modifying originals.",
          bullets: [
            "Clone and update an object: const updated = { ...student, age: 23 };",
            "Add a property: const withGrade = { ...student, grade: 'A' };",
            "Remove a property: const { enrolled, ...rest } = student; — rest has all properties except enrolled.",
            "Update a nested object: const updated = { ...person, address: { ...person.address, city: 'Lagos' } };",
            "These patterns are used directly in React: setState(prev => ({ ...prev, count: prev.count + 1 }));",
          ],
        },
      ],
    },

    /* ===== WEEK 6 ===== */

    /* 4 ---------------------------------------------------------- */
    {
      title: "Week 6 · Setting Up a React Project with Create React App (and Vite)",
      content:
        "React is a declarative JavaScript library for building user interfaces through reusable components. Before writing React code you need a project scaffold that handles module bundling, transpilation, and the dev server. We cover the two most common options: Create React App (CRA) and the newer, faster Vite.",
      subsections: [
        {
          title: "What Is React?",
          content:
            "React was created by Facebook (Meta) in 2013 and is currently the most widely-used frontend UI library. It introduces a component model and a virtual DOM that efficiently updates only the parts of the page that change.",
          bullets: [
            "Component-based — UIs are built from small, self-contained, reusable pieces called components.",
            "Declarative — you describe WHAT the UI should look like for a given state; React handles HOW to update the DOM.",
            "Unidirectional data flow — data flows down from parent to child via props, making applications predictable.",
            "Virtual DOM — React keeps a lightweight in-memory representation of the DOM. When state changes, it reconciles and applies only the minimal DOM updates needed.",
            "Ecosystem — React works with React Router (navigation), Redux/Zustand (state management), React Query (data fetching), Next.js (full-stack), and many more.",
          ],
        },
        {
          title: "Setting Up with Create React App",
          content:
            "Create React App (CRA) is the official scaffolding tool maintained by the React team. It sets up a complete development environment with zero configuration.",
          bullets: [
            "Prerequisites: Node.js (v18 or newer) and npm installed — verify with node -v and npm -v.",
            "Create a new project: npx create-react-app my-app",
            "Start the development server: cd my-app && npm start — opens http://localhost:3000.",
            "Build for production: npm run build — outputs optimised static files to the build/ folder.",
            "CRA includes: Babel (transpilation), webpack (bundling), ESLint (linting), and jest (testing) out of the box.",
            "CRA is slower to start than Vite and is no longer actively developed — for new projects consider Vite.",
          ],
        },
        {
          title: "Setting Up with Vite (Recommended)",
          content:
            "Vite is a next-generation build tool that uses native ES modules in the browser for near-instant dev server start-up and hot module replacement (HMR).",
          bullets: [
            "Create a new React + Vite project: npm create vite@latest my-app -- --template react",
            "Install dependencies: cd my-app && npm install",
            "Start dev server: npm run dev — opens at http://localhost:5173.",
            "Build for production: npm run build",
            "Vite is dramatically faster than CRA for large projects — typically sub-second cold starts.",
            "Vite uses Rollup under the hood for production builds, producing highly optimised output.",
          ],
        },
        {
          title: "Anatomy of a React Project",
          content:
            "Understanding the default file structure helps you navigate and organise your project confidently.",
          bullets: [
            "package.json — lists dependencies, scripts (start, build, test), and project metadata.",
            "public/ — static assets served as-is (index.html entry point, favicon, images).",
            "src/ — all your JavaScript/JSX source files. This is where you spend 99% of your time.",
            "src/index.js (or main.jsx in Vite) — the JavaScript entry point; mounts the root React component into the DOM.",
            "src/App.js (or App.jsx) — the root component of your application.",
            "node_modules/ — installed npm packages. Never edit manually; always managed by npm/yarn.",
            ".gitignore — tells Git which files to ignore (node_modules/, build/, .env).",
          ],
        },
        {
          title: "JSX — JavaScript XML",
          content:
            "JSX is a syntax extension that lets you write HTML-like markup inside JavaScript. It compiles to regular React.createElement() calls via Babel.",
          bullets: [
            "JSX looks like HTML but IS JavaScript — every element is actually a function call.",
            "Use className instead of class (class is a reserved word in JS): <div className='card'>",
            "Self-close tags that have no children: <img />, <input />, <br />",
            "Embed any JS expression inside { }: <p>{student.name}</p> or <p>{2 + 2}</p>",
            "Conditional rendering: {isLoggedIn && <Dashboard />} or {isLoggedIn ? <Dashboard /> : <Login />}",
            "List rendering: {students.map(s => <li key={s.id}>{s.name}</li>)} — always provide a unique key prop.",
            "JSX must have a single root element — wrap siblings in a <div> or a React Fragment (<> … </>).",
          ],
        },
        {
          title: "Components and Props",
          content:
            "A React component is a JavaScript function that accepts a props object and returns JSX. Props are read-only inputs passed from a parent component to a child.",
          bullets: [
            "Function component: function Greeting({ name }) { return <h1>Hello, {name}!</h1>; }",
            "Call it: <Greeting name='Alice' /> — name is passed as a prop.",
            "Props can be any JS value: strings, numbers, booleans, arrays, objects, or even other components.",
            "Default prop values via default parameters: function Button({ label = 'Submit' }) { … }",
            "Children prop: content placed between opening and closing tags: <Card><p>Content</p></Card> — access via props.children.",
            "Components must be capitalised — lowercase names are treated as HTML elements.",
          ],
        },
        {
          title: "State with useState",
          content:
            "useState is a React Hook that adds local, reactive state to a function component. When state changes, React re-renders the component automatically.",
          bullets: [
            "Import: import { useState } from 'react';",
            "Declare: const [count, setCount] = useState(0); — count is the current value; setCount is the updater function.",
            "Update: setCount(count + 1); — NEVER mutate state directly (count++ is wrong).",
            "State updates are asynchronous and batched — don't rely on the new value immediately after calling the setter.",
            "Functional updates: setCount(prev => prev + 1); — use when new state depends on previous state.",
            "Arrays and objects in state: always create a new copy — setStudents([...students, newStudent]);",
          ],
        },
      ],
    },

    /* 5 ---------------------------------------------------------- */
    {
      title: "Week 6 · Introduction to Tailwind CSS for Styling React Apps",
      content:
        "Tailwind CSS is a utility-first CSS framework that provides thousands of low-level CSS utility classes. Instead of writing custom CSS, you compose these classes directly in your HTML/JSX to build any design. It has become the dominant CSS solution in the React ecosystem.",
      subsections: [
        {
          title: "What Is Utility-First CSS?",
          content:
            "Traditional CSS approaches (semantic classes like .card, .button) require you to toggle between HTML and CSS files. Utility-first flips this: every class does ONE thing and you compose them in markup.",
          bullets: [
            "Traditional: .card { border-radius: 8px; padding: 16px; background: white; box-shadow: 0 2px 8px rgba(0,0,0,.1); }",
            "Tailwind equivalent: className='rounded-lg p-4 bg-white shadow-md'",
            "No context switching — design and structure stay co-located in the component.",
            "No naming bike-shedding — you never have to name CSS classes for one-off elements.",
            "Dead code elimination — Tailwind's built-in purge (content scanning) removes any class you don't use, producing tiny production CSS bundles.",
          ],
        },
        {
          title: "Installing Tailwind CSS in a React Project",
          content:
            "Tailwind integrates with the PostCSS pipeline used by both CRA and Vite. The steps are nearly identical for both.",
          bullets: [
            "Install packages: npm install -D tailwindcss postcss autoprefixer",
            "Initialise config: npx tailwindcss init -p — creates tailwind.config.js and postcss.config.js.",
            "Configure content paths in tailwind.config.js: content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}']",
            "Add Tailwind directives to your main CSS file (e.g. src/index.css): @tailwind base; @tailwind components; @tailwind utilities;",
            "Import the CSS in your entry file: import './index.css'; in main.jsx.",
            "Restart the dev server — Tailwind classes are now available.",
          ],
        },
        {
          title: "Core Tailwind Concepts",
          content:
            "Tailwind's utility classes follow a predictable naming convention. Once you internalise a few patterns, you can guess most class names.",
          bullets: [
            "Spacing — p-{n} (padding all sides), px-{n} (horizontal), py-{n} (vertical), m-{n} (margin). Scale: 1 = 4px, 2 = 8px, 4 = 16px, 8 = 32px.",
            "Colour — bg-{color}-{shade} (background), text-{color}-{shade} (text), border-{color}-{shade}. Example: bg-blue-600 text-white.",
            "Typography — text-sm / text-base / text-lg / text-xl / text-2xl … for size; font-bold / font-semibold / font-medium / font-normal for weight.",
            "Borders — rounded (4px), rounded-lg (8px), rounded-full (50%); border (1px solid), border-2; border-gray-200.",
            "Shadows — shadow-sm, shadow, shadow-md, shadow-lg, shadow-xl.",
            "Flexbox — flex, flex-col, items-center, justify-between, gap-{n}.",
            "Grid — grid, grid-cols-{n}, gap-{n}.",
            "Width/Height — w-full, w-1/2, w-64 (256px), h-screen, max-w-md.",
            "Display — block, inline-block, hidden, flex, grid.",
          ],
        },
        {
          title: "Responsive Design with Tailwind",
          content:
            "Tailwind uses a mobile-first breakpoint system. Prefix any utility with a breakpoint name to apply it only at that screen size and above.",
          bullets: [
            "Breakpoints: sm (640px+), md (768px+), lg (1024px+), xl (1280px+), 2xl (1536px+).",
            "Example: className='text-sm md:text-base lg:text-lg' — text grows at larger screens.",
            "Responsive grid: className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'",
            "No breakpoint prefix = applies to all screen sizes (mobile-first default).",
          ],
        },
        {
          title: "Hover, Focus, and Other State Modifiers",
          content:
            "Tailwind lets you apply utilities conditionally based on element state using colon-prefixed modifiers.",
          bullets: [
            "Hover: hover:bg-blue-700 — darker background on hover.",
            "Focus: focus:outline-none focus:ring-2 focus:ring-blue-500 — accessible focus rings.",
            "Active: active:scale-95 — subtle press effect.",
            "Dark mode: dark:bg-gray-900 dark:text-white — automatic dark mode with prefers-color-scheme.",
            "Group hover: mark parent with group, use group-hover:underline on a child.",
            "Transitions: transition duration-200 ease-in-out — smooth state changes.",
          ],
        },
        {
          title: "The cn / clsx Pattern for Dynamic Classes",
          content:
            "When class names should change based on props or state in React, string concatenation becomes messy. The clsx or classnames library (and the cn helper from shadcn/ui) solve this cleanly.",
          bullets: [
            "Install: npm install clsx",
            "Usage: className={clsx('px-4 py-2 rounded', isActive && 'bg-blue-600', !isActive && 'bg-gray-200')}",
            "Keeps JSX readable and avoids manual template literal juggling.",
            "cn() is a thin wrapper combining clsx with tailwind-merge to resolve conflicting Tailwind classes automatically.",
          ],
        },
      ],
    },

    /* 6 ---------------------------------------------------------- */
    {
      title: "Week 6 · Building a React Component with Tailwind CSS",
      content:
        "Now we combine everything — ES6 JavaScript patterns, React fundamentals, and Tailwind CSS — to build a real StudentCard component that uses an array of objects and renders styled cards in the browser.",
      subsections: [
        {
          title: "Project Blueprint",
          content:
            "This component demonstrates: an array of student objects (Week 5 data structures), map() to render a list (Week 5 higher-order methods), destructuring to read props (Week 5 ES6), and Tailwind classes for styling (Week 6).",
          bullets: [
            "Data layer: an array of student objects stored in a JS/TS file.",
            "Component layer: a reusable StudentCard component that accepts a student object as props.",
            "Page layer: App.js maps over the students array and renders a StudentCard for each.",
            "Styling layer: every visual property is expressed as Tailwind utility classes — zero custom CSS needed.",
          ],
        },
        {
          title: "Step 1 — The Student Data (ES6 Objects & Arrays)",
          content:
            "Create a file src/data/students.js that exports an array of student objects. This mirrors real-world API responses.",
          bullets: [
            "export const students = [ { id: 1, name: 'Alice Okonkwo', age: 22, course: 'Frontend Development', grade: 'A', avatar: 'https://i.pravatar.cc/150?img=1' }, … ];",
            "Each object has an id (required for React keys), name, age, course, grade, and an avatar URL.",
            "Using a separate data file keeps components clean and makes switching to a real API straightforward.",
          ],
        },
        {
          title: "Step 2 — The StudentCard Component",
          content:
            "Create src/components/StudentCard.jsx. This single-responsibility component knows nothing about the list — it only knows how to render ONE student.",
          bullets: [
            "function StudentCard({ student }) { const { name, age, course, grade, avatar } = student; return ( <div className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300'> … </div> ); }",
            "Use destructuring in the function signature to extract the student prop cleanly.",
            "Inside, destructure student's properties to avoid repeating student.name, student.age etc.",
            "Apply Tailwind classes for layout, colour, spacing, and typography directly on JSX elements.",
            "Add a grade badge with conditional colour: bg-green-100 text-green-800 for passing grades.",
            "Export as default: export default StudentCard;",
          ],
        },
        {
          title: "Step 3 — Rendering the List in App.jsx",
          content:
            "Import the students array and the StudentCard component into App.jsx, then use map() to render them in a responsive grid.",
          bullets: [
            "import { students } from './data/students';",
            "import StudentCard from './components/StudentCard';",
            "Return a container div with a responsive grid: className='min-h-screen bg-gray-100 p-8'",
            "Inside render: <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>",
            "{students.map(student => (<StudentCard key={student.id} student={student} />))}",
            "The key prop (student.id) helps React efficiently reconcile list changes.",
          ],
        },
        {
          title: "Step 4 — Adding Interactivity with useState",
          content:
            "Add a search/filter feature to practise useState and the filter() array method together.",
          bullets: [
            "const [query, setQuery] = useState('');",
            "const filtered = students.filter(s => s.name.toLowerCase().includes(query.toLowerCase()));",
            "Add an <input> with onChange={e => setQuery(e.target.value)} and Tailwind classes for styling.",
            "Map over filtered instead of students — the list updates instantly as the user types.",
            "This pattern appears in virtually every data-driven React application.",
          ],
        },
        {
          title: "Complete StudentCard Component Code",
          content:
            "Here is the full reference implementation of the StudentCard component. Read through every Tailwind class and trace it back to a visual property.",
          bullets: [
            "import React from 'react';",
            "function StudentCard({ student }) {",
            "  const { name, age, course, grade, avatar } = student;",
            "  const isPass = ['A', 'B', 'C'].includes(grade);",
            "  return (",
            "    <div className='bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl hover:-translate-y-1 duration-300'>",
            "      <div className='h-24 bg-linear-to-r from-blue-500 to-indigo-600' />",
            "      <div className='px-6 pb-6 -mt-10'>",
            "        <img src={avatar} alt={name} className='w-20 h-20 rounded-full border-4 border-white object-cover shadow-md' />",
            "        <h2 className='mt-3 text-xl font-bold text-gray-800'>{name}</h2>",
            "        <p className='text-sm text-gray-500'>Age: {age}</p>",
            "        <p className='text-sm text-gray-600 mt-1 font-medium'>{course}</p>",
            "        <div className='mt-4 flex items-center justify-between'>",
            "          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${isPass ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>Grade: {grade}</span>",
            "          <button className='text-sm text-blue-600 font-medium hover:underline'>View Profile</button>",
            "        </div>",
            "      </div>",
            "    </div>",
            "  );",
            "}",
            "export default StudentCard;",
          ],
        },
        {
          title: "Tailwind Classes Explained — Card Breakdown",
          content:
            "Every Tailwind class on the card has a deliberate purpose. Understanding each builds your intuition for styling with Tailwind.",
          bullets: [
            "rounded-2xl — border-radius: 1rem — gives the card soft, modern corners.",
            "shadow-md / hover:shadow-xl — layered shadow depth that increases on hover for an elevation effect.",
            "hover:-translate-y-1 — translateY(-4px) on hover — card 'lifts' slightly toward the user.",
            "transition duration-300 — all hover transitions animate smoothly over 300ms.",
            "bg-linear-to-r from-blue-500 to-indigo-600 — a left-to-right gradient header band.",
            "-mt-10 — negative top margin pulls the avatar image over the header band for a layered effect.",
            "border-4 border-white — white ring around the avatar separates it from the background.",
            "px-3 py-1 rounded-full — pill-shaped badge for the grade.",
            "flex items-center justify-between — places grade badge and button at opposite ends of a flex row.",
          ],
        },
      ],
    },

    /* 7 ---------------------------------------------------------- */
    {
      title: "Week 5 & 6 · Assessment Brief",
      content:
        "The assessment for these two weeks is merged into a single React project that demonstrates your JavaScript fundamentals and React + Tailwind skills together. This mirrors professional work where clean data logic and polished UI are inseparable.",
      subsections: [
        {
          title: "Assessment Task",
          content:
            "Build and submit a React application that fulfils all of the following requirements:",
          bullets: [
            "DATA — Create a JavaScript file (src/data/students.js) that exports an array of at least 5 student objects. Each object must have: name (string), age (number), course (string), grade (string), and a method or computed display string for their info.",
            "ITERATION — Use the array's map() method to iterate over the students and render a card for each one.",
            "ES6 — Demonstrate arrow functions (at least in the map callback), destructuring (props and/or the student object), template literals (in any displayed string), and const/let throughout.",
            "COMPONENT — Create a reusable StudentCard component that accepts a student object as props and renders: the student's name, age, course, grade, and a styled button labelled 'View Profile'.",
            "TAILWIND — Style the card using only Tailwind CSS utility classes (no external custom CSS files). At minimum include: rounded corners, a shadow, a background colour, typographic hierarchy, and a badge/pill for the grade.",
            "INTERACTIVITY — Add a live search input that filters the displayed cards by student name using useState and filter().",
            "RESPONSIVE — The card grid must be single-column on mobile and at least two columns on medium+ screens (md:grid-cols-2).",
          ],
        },
        {
          title: "Submission Requirements",
          content:
            "Provide the following to complete the assessment:",
          bullets: [
            "Repository link — push the project to GitHub and share the public URL.",
            "Screenshot — a screenshot of the rendered component in the browser (showing at least 3 student cards).",
            "Short write-up (optional but recommended) — 3–5 sentences explaining one JavaScript concept and one Tailwind class you found most useful.",
          ],
        },
        {
          title: "Grading Rubric",
          content:
            "Your submission will be evaluated on the following criteria:",
          bullets: [
            "JavaScript fundamentals (30 pts) — correct array, loop/map, object, and ES6 usage.",
            "React concepts (25 pts) — proper component structure, props, key on list items, useState.",
            "Tailwind styling (25 pts) — meaningful, purposeful use of Tailwind classes; responsive layout.",
            "Code quality (10 pts) — readable variable names, consistent formatting, no unused code.",
            "Completeness (10 pts) — all required features (search, responsive grid, grade badge) are present.",
          ],
        },
      ],
    },
  ],

  assessment:
    "Build a React application that stores a list of at least 5 students in a JavaScript array of objects, iterates over the array with map() using an arrow function to render a reusable StudentCard component for each student, and styles the cards entirely with Tailwind CSS utility classes. The card must show the student's name, age, course, and grade (in a colour-coded pill badge). Add a live search input that filters cards by student name using useState and filter(). The layout must be responsive (single column on mobile, 2+ columns on larger screens). Submit your GitHub repository link and a screenshot of the rendered app.",

  supportResources: [
    {
      label: "MDN — Array reference",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
    },
    {
      label: "MDN — ES6 features overview",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction",
    },
    {
      label: "MDN — Working with Objects",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects",
    },
    {
      label: "React official docs — Quick Start",
      url: "https://react.dev/learn",
    },
    {
      label: "React official docs — useState",
      url: "https://react.dev/reference/react/useState",
    },
    {
      label: "Tailwind CSS official docs",
      url: "https://tailwindcss.com/docs",
    },
    {
      label: "Tailwind CSS — Responsive Design",
      url: "https://tailwindcss.com/docs/responsive-design",
    },
    {
      label: "Vite — Getting Started",
      url: "https://vitejs.dev/guide/",
    },
    {
      label: "JavaScript.info — Arrays",
      url: "https://javascript.info/array",
    },
    {
      label: "JavaScript.info — Objects",
      url: "https://javascript.info/object",
    },
  ],
};
