import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "JavaScript Assignment Solutions | FTF Frontend",
  description: "Solutions for the JavaScript student assignment covering basics, control flow, arrays, logical operators, and functions.",
};

function CodeBlock({ filename, children }: { filename: string; children: string }) {
  return (
    <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-900">
      <div className="px-4 py-2 bg-slate-800 border-b border-slate-700 flex items-center gap-2">
        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
        </svg>
        <span className="text-sm text-gray-400 font-mono">{filename}</span>
      </div>
      <pre className="p-4 overflow-x-auto text-sm">
        <code className="text-gray-300 font-mono whitespace-pre">{children}</code>
      </pre>
    </div>
  );
}

function TaskSection({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white text-sm font-bold">
          {number}
        </span>
        {title}
      </h2>
      {children}
    </section>
  );
}

export default function JavaScriptAssignmentSolutions() {
  return (
    <div className="min-h-screen bg-slate-950 py-12 px-4">
      <header className="text-center mb-8">
        <Link href="/" className="inline-block">
          <div className="flex items-center justify-center gap-8 mb-6">
            <Image
              src="/futuremap-logo.png"
              alt="FutureMap Logo"
              width={60}
              height={66}
              priority
            />
            <Image
              src="/ftf-logo.png"
              alt="Future Tech Fellowship Logo"
              width={180}
              height={45}
              priority
            />
          </div>
        </Link>

        <Link
          href="/week/3"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-4"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Week 3
        </Link>
      </header>

      <main className="max-w-4xl mx-auto">
        <div className="rounded-2xl border border-slate-700 bg-slate-900 shadow-xl shadow-purple-900/10 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 px-8 py-8">
            <h1 className="text-3xl font-bold text-white">JavaScript Assignment Solutions</h1>
            <p className="mt-3 text-purple-200 leading-relaxed">
              Complete solutions for all 5 tasks covering JavaScript basics, control flow, arrays, logical operators, and functions.
            </p>
          </div>

          <div className="px-8 py-8 space-y-8">
            {/* Instructions */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-purple-300 mb-3">📋 How to Use These Solutions</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li>Create each file in your project folder as specified</li>
                <li>Copy the code into the corresponding file</li>
                <li>Run each file using: <code className="bg-slate-700 px-2 py-0.5 rounded text-purple-300">node filename.js</code></li>
                <li>Verify the output matches the expected results shown in comments</li>
              </ol>
            </div>

            {/* Task 1 */}
            <TaskSection number={1} title="Basics (base.js)">
              <CodeBlock filename="base.js">{`// Task 1 - Basics
// Create variables and work with data types

// Step 1: Create two variables
let favoriteFood = "Pizza";
let favoriteNumber = 42;

// Step 2: Print both values and their data types
console.log("My favorite food is:", favoriteFood);
console.log("Type of favoriteFood:", typeof favoriteFood);

console.log("My favorite number is:", favoriteNumber);
console.log("Type of favoriteNumber:", typeof favoriteNumber);

// Step 3: Convert favoriteNumber to a string and print the result
let numberAsString = String(favoriteNumber);
// Alternative: let numberAsString = favoriteNumber.toString();

console.log("favoriteNumber as string:", numberAsString);
console.log("Type after conversion:", typeof numberAsString);

/* Expected Output:
My favorite food is: Pizza
Type of favoriteFood: string
My favorite number is: 42
Type of favoriteNumber: number
favoriteNumber as string: 42
Type after conversion: string
*/`}</CodeBlock>
            </TaskSection>

            {/* Task 2 */}
            <TaskSection number={2} title="Control Flow (control.js)">
              <CodeBlock filename="control.js">{`// Task 2 - Control Flow
// Using if/else and ternary operators

// Step 1: Create a variable for student score
let studentScore = 85;

// Step 2: Use if / else if / else to print grade categories
if (studentScore >= 90) {
  console.log("Grade: A");
} else if (studentScore >= 80) {
  console.log("Grade: B");
} else if (studentScore >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}

// Step 3: Add a ternary that prints Pass or Fail
let result = studentScore >= 50 ? "Pass" : "Fail";
console.log("Result:", result);

// Bonus: Test with different scores
console.log("\\n--- Testing different scores ---");

let scores = [95, 82, 73, 65, 45];

for (let score of scores) {
  let grade;
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else {
    grade = "D";
  }
  let passOrFail = score >= 50 ? "Pass" : "Fail";
  console.log(\`Score: \${score} → Grade: \${grade}, \${passOrFail}\`);
}

/* Expected Output (for studentScore = 85):
Grade: B
Result: Pass

--- Testing different scores ---
Score: 95 → Grade: A, Pass
Score: 82 → Grade: B, Pass
Score: 73 → Grade: C, Pass
Score: 65 → Grade: D, Pass
Score: 45 → Grade: D, Fail
*/`}</CodeBlock>
            </TaskSection>

            {/* Task 3 */}
            <TaskSection number={3} title="Arrays (array.js)">
              <CodeBlock filename="array.js">{`// Task 3 - Arrays
// Working with array methods

// Step 1: Create an array with at least 4 subjects
let subjects = ["Mathematics", "English", "Science", "History"];
console.log("Initial subjects:", subjects);

// Step 2: Add one subject to the end
subjects.push("Art");
console.log("After push (added to end):", subjects);

// Step 3: Add one subject to the beginning
subjects.unshift("Physical Education");
console.log("After unshift (added to beginning):", subjects);

// Step 4: Remove one subject from the end
let removedSubject = subjects.pop();
console.log("Removed subject:", removedSubject);
console.log("After pop (removed from end):", subjects);

// Step 5: Print required information
console.log("\\n--- Final Results ---");
console.log("First subject:", subjects[0]);
console.log("Last subject:", subjects[subjects.length - 1]);
console.log("Total number of subjects:", subjects.length);

/* Expected Output:
Initial subjects: [ 'Mathematics', 'English', 'Science', 'History' ]
After push (added to end): [ 'Mathematics', 'English', 'Science', 'History', 'Art' ]
After unshift (added to beginning): [ 'Physical Education', 'Mathematics', 'English', 'Science', 'History', 'Art' ]
Removed subject: Art
After pop (removed from end): [ 'Physical Education', 'Mathematics', 'English', 'Science', 'History' ]

--- Final Results ---
First subject: Physical Education
Last subject: History
Total number of subjects: 5
*/`}</CodeBlock>
            </TaskSection>

            {/* Task 4 */}
            <TaskSection number={4} title="Logical Operators (logic.js)">
              <CodeBlock filename="logic.js">{`// Task 4 - Logical Operators
// Using &&, ||, and !

// Step 1: Create boolean variables
let hasUniform = true;
let hasIdCard = false;

console.log("hasUniform:", hasUniform);
console.log("hasIdCard:", hasIdCard);

// Step 2: Use && (AND) - student needs BOTH to enter assembly
let canEnterAssembly = hasUniform && hasIdCard;
console.log("\\n--- AND operator (&&) ---");
console.log("Can enter assembly (needs both):", canEnterAssembly);

if (hasUniform && hasIdCard) {
  console.log("Welcome to assembly!");
} else {
  console.log("Sorry, you need both uniform AND ID card.");
}

// Step 3: Use || (OR) - either one can grant access
let hasAlternativeAccess = hasUniform || hasIdCard;
console.log("\\n--- OR operator (||) ---");
console.log("Has alternative access (needs either):", hasAlternativeAccess);

if (hasUniform || hasIdCard) {
  console.log("Access granted with at least one form of identification.");
} else {
  console.log("No access - you need at least uniform or ID card.");
}

// Step 4: Use ! (NOT) to print the opposite
console.log("\\n--- NOT operator (!) ---");
console.log("Opposite of hasUniform:", !hasUniform);
console.log("Opposite of hasIdCard:", !hasIdCard);

// Bonus: Combining operators
console.log("\\n--- Combined examples ---");
let isSeniorStudent = true;
let hasPermissionSlip = false;

// Complex condition: (uniform AND id) OR (senior student with permission)
let canGoOnFieldTrip = (hasUniform && hasIdCard) || (isSeniorStudent && hasPermissionSlip);
console.log("Can go on field trip:", canGoOnFieldTrip);

/* Expected Output:
hasUniform: true
hasIdCard: false

--- AND operator (&&) ---
Can enter assembly (needs both): false
Sorry, you need both uniform AND ID card.

--- OR operator (||) ---
Has alternative access (needs either): true
Access granted with at least one form of identification.

--- NOT operator (!) ---
Opposite of hasUniform: false
Opposite of hasIdCard: true

--- Combined examples ---
Can go on field trip: false
*/`}</CodeBlock>
            </TaskSection>

            {/* Task 5 */}
            <TaskSection number={5} title="Functions (functions.js)">
              <CodeBlock filename="functions.js">{`// Task 5 - Functions
// Regular functions and arrow functions

// Step 1: Write a function divide(a, b) that returns division result
function divide(a, b) {
  // Handle division by zero
  if (b === 0) {
    return "Error: Cannot divide by zero";
  }
  return a / b;
}

// Step 2: Write an arrow function square(n) that returns n * n
const square = (n) => n * n;

// Alternative longer form:
// const square = (n) => {
//   return n * n;
// };

// Step 3: Write a function studentIntro(name, age) that returns introduction
function studentIntro(name, age) {
  return \`My name is \${name} and I am \${age} years old.\`;
}

// Alternative with arrow function:
// const studentIntro = (name, age) => \`My name is \${name} and I am \${age} years old.\`;

// Step 4: Call all functions and print their outputs
console.log("--- Testing divide function ---");
console.log("divide(10, 2):", divide(10, 2));
console.log("divide(15, 3):", divide(15, 3));
console.log("divide(7, 0):", divide(7, 0));

console.log("\\n--- Testing square function ---");
console.log("square(4):", square(4));
console.log("square(7):", square(7));
console.log("square(12):", square(12));

console.log("\\n--- Testing studentIntro function ---");
console.log(studentIntro("Alice", 16));
console.log(studentIntro("Bob", 17));
console.log(studentIntro("Charlie", 15));

// Bonus: Combining functions
console.log("\\n--- Bonus: Combining functions ---");
let number = 5;
console.log(\`The square of \${number} is \${square(number)}\`);
console.log(\`\${square(number)} divided by 5 is \${divide(square(number), 5)}\`);

/* Expected Output:
--- Testing divide function ---
divide(10, 2): 5
divide(15, 3): 5
divide(7, 0): Error: Cannot divide by zero

--- Testing square function ---
square(4): 16
square(7): 49
square(12): 144

--- Testing studentIntro function ---
My name is Alice and I am 16 years old.
My name is Bob and I am 17 years old.
My name is Charlie and I am 15 years old.

--- Bonus: Combining functions ---
The square of 5 is 25
25 divided by 5 is 5
*/`}</CodeBlock>
            </TaskSection>

            {/* Summary */}
            <div className="bg-purple-950/50 rounded-xl p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-semibold text-white mb-3">📝 Key Concepts Covered</h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                <div>
                  <h4 className="font-medium text-purple-300 mb-2">Task 1 - Basics</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Variable declaration (let, const)</li>
                    <li>Data types (string, number)</li>
                    <li>typeof operator</li>
                    <li>Type conversion (String())</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-purple-300 mb-2">Task 2 - Control Flow</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>if / else if / else statements</li>
                    <li>Comparison operators (&gt;=, &lt;)</li>
                    <li>Ternary operator (? :)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-purple-300 mb-2">Task 3 - Arrays</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Array creation and indexing</li>
                    <li>push() - add to end</li>
                    <li>unshift() - add to beginning</li>
                    <li>pop() - remove from end</li>
                    <li>length property</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-purple-300 mb-2">Task 4 - Logical Operators</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>&& (AND) - both must be true</li>
                    <li>|| (OR) - at least one true</li>
                    <li>! (NOT) - inverts boolean</li>
                  </ul>
                </div>
                <div className="md:col-span-2">
                  <h4 className="font-medium text-purple-300 mb-2">Task 5 - Functions</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Function declaration syntax</li>
                    <li>Arrow function syntax</li>
                    <li>Parameters and return values</li>
                    <li>Template literals for string interpolation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-8 flex justify-center">
          <Link
            href="/week/3"
            className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors"
          >
            Return to Week 3
          </Link>
        </nav>
      </main>
    </div>
  );
}
