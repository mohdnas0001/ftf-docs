/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface SubSection {
  title: string;
  content: string;
  bullets?: string[];
}

export interface Section {
  title: string;
  content?: string;
  bullets?: string[];
  subsections?: SubSection[];
}

export interface SupportResource {
  label: string;
  url: string;
}

export interface WeekData {
  week: number;
  title: string;
  overview: string;
  sections: Section[];
  assessment: string;
  supportResources: SupportResource[];
}

/* ------------------------------------------------------------------ */
/*  Course data                                                        */
/* ------------------------------------------------------------------ */

export const syllabus: WeekData[] = [
  {
    week: 1,
    title: "Week 1: Onboarding & Introduction to Frontend Development",

    overview:
      "Frontend development has evolved from designing simple web pages to building intricate, interactive web applications. For beginners it is one of the most accessible areas of software development — there are many languages with relatively low entry barriers, a wealth of free open-source tooling, and countless frameworks that simplify development. This week we explore the frontend landscape end-to-end: the core languages, the tools, the frameworks, the role of a frontend developer, and where the industry is headed.",

    sections: [
      /* 1 ---------------------------------------------------------- */
      {
        title: "What Is Frontend Development?",
        content:
          "Client-side development, commonly known as frontend development, concentrates on everything users see and interact with in a browser or application. It encompasses creating, executing and overseeing the visual components of a web application. The primary aim is to design user interfaces that are intuitive, interactive and visually appealing. Frontend developers accomplish this by transforming information into visual elements using HTML, CSS and JavaScript.",
        bullets: [
          "Also known as UI (User Interface) development.",
          "Tightly related to web design and user experience — though frontend developers focus on technical implementation while designers focus on aesthetics and UX.",
          "Stands firmly on three pillars: HTML for markup, CSS for styling and JavaScript for logic and interactions.",
        ],
      },

      /* 2 ---------------------------------------------------------- */
      {
        title: "Core Languages",
        content:
          "The foundation of every web page is built with three primary languages. Mastering them is the first milestone for any aspiring frontend developer.",
        subsections: [
          {
            title: "HTML (HyperText Markup Language)",
            content:
              "HTML is the standard markup language used to create and structure sections, paragraphs, headings, links and various other elements that make up web content. An HTML document consists of elements each represented by a tag. Documents can link to other documents using hyperlinks. Once you get a hang of HTML you will be able to create simple static pages.",
            bullets: [
              "Provides the skeleton/structure of every webpage.",
              "Semantic tags (header, nav, article, footer) improve accessibility and SEO.",
            ],
          },
          {
            title: "CSS (Cascading Style Sheets)",
            content:
              "CSS is the styling language used to describe the visual appearance of HTML elements. It controls positioning, dimensions, text style, colours, animations and almost any other visual aspect of a website. Styles are defined as rules that can be applied to a single element or a subset of elements on the page.",
            bullets: [
              "Responsive design techniques (media queries, flexbox, grid) ensure sites work across devices.",
              "Modern CSS supports variables, nesting and container queries.",
            ],
          },
          {
            title: "JavaScript",
            content:
              "JavaScript is the most-used programming language for building interactive web interfaces. It lets you react to user events, load data from web services, show or hide elements, and interact with the browser through various APIs. ECMAScript is the language specification that underpins JavaScript — in most contexts they can be treated as synonyms.",
            bullets: [
              "Essential for adding dynamic behaviour to websites.",
              "Can be used for both simple enhancements and complex single-page applications.",
            ],
          },
        ],
      },

      /* 3 ---------------------------------------------------------- */
      {
        title: "CSS Preprocessors",
        content:
          "Maintaining large CSS codebases can be difficult due to constraints around code reuse, verbosity and isolation. CSS preprocessors address these shortcomings.",
        subsections: [
          {
            title: "Sass / SCSS",
            content:
              "Extends CSS with nesting, variables, mixins, and file imports to make stylesheets more maintainable. Popular CSS frameworks like Compass are built on Sass.",
          },
          {
            title: "PostCSS",
            content:
              "A tool that uses JavaScript plugins to transform CSS files. Many plugins emulate upcoming standard CSS features, making it a future-friendly choice.",
          },
          {
            title: "Less",
            content:
              "A preprocessor with a feature set similar to Sass. Although popular in the past, many developers have moved to Sass or PostCSS.",
          },
        ],
      },

      /* 4 ---------------------------------------------------------- */
      {
        title: "JavaScript Frameworks",
        content:
          "Building complex applications in vanilla JavaScript results in masses of boilerplate code. Frameworks provide structure, HTML manipulation, data loading, routing and more.",
        subsections: [
          {
            title: "React",
            content:
              "Developed by Facebook, React is a library for building user interfaces based around reusable components written in JSX. It focuses on the view layer, but its rich ecosystem covers everything needed for complex applications. React is easy to start with and is the most popular choice today.",
          },
          {
            title: "Angular",
            content:
              "A 'batteries-included' framework developed by Google, typically written in TypeScript. It provides a CLI, forms management, data loading, routing and more out of the box. The higher abstraction level means a steeper learning curve.",
          },
          {
            title: "Vue.js",
            content:
              "A progressive framework designed to be incrementally adoptable. You can start using it as a simple view layer and add official libraries (router, state management) as needed. Its core libraries are maintained by the Vue team.",
          },
        ],
      },

      /* 5 ---------------------------------------------------------- */
      {
        title: "TypeScript",
        content:
          "TypeScript extends JavaScript with static type checking and the latest ECMAScript features such as async/await, classes and arrow functions. It compiles down to vanilla JavaScript. Static types let the compiler catch mistakes early and give editors better navigation and refactoring capabilities. Typings are optional, so you can introduce them gradually into existing JavaScript projects. TypeScript is especially valuable on larger codebases.",
      },

      /* 6 ---------------------------------------------------------- */
      {
        title: "Component Libraries",
        content:
          "Component libraries are collections of pre-built UI components — buttons, dropdowns, modals, layout utilities — that you can assemble into your application. Most can be customised to match your project's branding.",
        subsections: [
          {
            title: "Bootstrap",
            content:
              "A powerful framework for responsive web applications with a large component set, layout utilities, and a theming engine. There is also a wide selection of ready-made themes built with Bootstrap.",
          },
          {
            title: "Semantic UI",
            content:
              "A UI library with a comprehensive component set and theming engine. Components require some JavaScript to become interactive.",
          },
          {
            title: "Material UI",
            content:
              "A popular implementation of Google's Material Design for React. Provides components and guidelines on look-and-feel. Implementations also exist for Angular and vanilla JS.",
          },
        ],
      },

      /* 7 ---------------------------------------------------------- */
      {
        title: "Essential Frontend Tools",
        content:
          "The frontend ecosystem has a large arsenal of specialised tools. Here are the most important ones to know when getting started.",
        subsections: [
          {
            title: "NPM (Node Package Manager)",
            content:
              "Both a software registry containing thousands of open-source packages and a CLI tool to install, update and remove them. Using npm you can declare your project's dependencies in a package.json file and quickly install them on any environment. Yarn is a popular alternative with performance improvements.",
          },
          {
            title: "Webpack",
            content:
              "A module bundler that merges JavaScript, CSS, HTML and images into optimised bundles for the browser. You split your code into modules that import each other; Webpack analyses the import graph and bundles everything together. Rollup.js and Vite are modern alternatives.",
          },
          {
            title: "Chrome DevTools",
            content:
              "A rich set of debugging tools built into Chrome. Use them to inspect HTML elements, browse source code, track network requests, measure performance, and edit pages on the fly. A firm grasp of DevTools will save you countless hours. Similar tools exist in Firefox, Safari and Edge.",
          },
        ],
      },

      /* 8 ---------------------------------------------------------- */
      {
        title: "The Role of a Frontend Developer",
        content:
          "Frontend developers bridge design and technical execution. Their primary duty is transforming web designs into interactive experiences, ensuring websites and apps are both user-friendly and visually appealing.",
        bullets: [
          "Implementation of design — converting mockups into HTML, CSS and JavaScript.",
          "Optimisation of user experience — ensuring consistency across browsers and devices.",
          "Performance enhancement — optimising speed and scalability.",
          "Interactivity implementation — forms, animations, transitions that captivate users.",
        ],
        subsections: [
          {
            title: "Essential Skills",
            content: "A well-rounded frontend developer should be proficient in:",
            bullets: [
              "HTML, CSS and JavaScript fundamentals.",
              "At least one major framework (React, Angular or Vue.js).",
              "Responsive design and CSS frameworks (Bootstrap, Tailwind).",
              "Version control with Git.",
              "Testing and debugging (Jest, Mocha, Cypress).",
              "Performance optimisation techniques.",
            ],
          },
        ],
      },

      /* 9 ---------------------------------------------------------- */
      {
        title: "Frontend vs. Backend vs. Full-Stack",
        content:
          "Understanding the distinction between these three areas is key to navigating the web development landscape.",
        subsections: [
          {
            title: "Frontend (Client-Side)",
            content:
              "Everything the user sees and interacts with in the browser — built with HTML, CSS and JavaScript (plus frameworks like React, Angular or Vue).",
          },
          {
            title: "Backend (Server-Side)",
            content:
              "The server, database and application logic that power the frontend. Technologies include Node.js, Python, Ruby on Rails, Java, and databases like PostgreSQL and MongoDB.",
          },
          {
            title: "Full-Stack",
            content:
              "Full-stack developers work across both frontend and backend. They can build complete applications end-to-end, making them especially valuable in startups and small teams.",
          },
        ],
      },

      /* 10 --------------------------------------------------------- */
      {
        title: "Challenges in Frontend Development",
        content:
          "While rewarding, frontend development comes with its own set of hurdles.",
        bullets: [
          "Rapid technological change — new frameworks, libraries and tools emerge constantly.",
          "Cross-platform consistency — ensuring identical experiences across browsers and devices.",
          "Performance vs. aesthetics — balancing rich visuals with fast load times.",
          "Security — protecting against XSS, CSRF and other client-side threats.",
          "Code maintainability and scalability — managing technical debt as projects grow.",
          "Accessibility — making applications usable by people of all abilities.",
        ],
      },

      /* 11 --------------------------------------------------------- */
      {
        title: "The Business Impact of Frontend Development",
        content:
          "A well-crafted frontend is a strategic business advantage. It is the first point of contact between a company and its customers.",
        bullets: [
          "User engagement — appealing interfaces retain visitors longer and drive conversions.",
          "Brand identity — consistent design strengthens recognition and trust.",
          "User experience — responsive, accessible design expands the potential audience.",
          "Innovation — early adoption of PWAs, motion UI and AI-driven experiences provides a competitive edge.",
        ],
      },

      /* 12 --------------------------------------------------------- */
      {
        title: "Future Trends",
        content:
          "The frontend landscape continues to evolve rapidly. Keeping an eye on these trends will help you stay ahead.",
        bullets: [
          "Progressive Web Apps (PWAs) — app-like experiences on the web that work offline and load instantly.",
          "AI & Machine Learning — personalising user experiences and automating testing.",
          "Voice User Interfaces (VUIs) — voice search and navigation becoming standard.",
          "Motion UI — sophisticated animations that guide users and enhance engagement.",
          "Web3 & the Metaverse — new paradigms for building immersive digital environments.",
          "Enhanced security practices — HTTPS everywhere, CSP headers, secure-by-default tooling.",
        ],
      },

      /* 13 --------------------------------------------------------- */
      {
        title: "How to Set Up Development Tools",
        content:
          "Before writing your first line of code you need a productive development environment. A good setup reduces friction, catches errors early, and lets you focus on building rather than fighting your tools. Below we walk through the essential tools every frontend developer should install and configure.",
        subsections: [
          {
            title: "Visual Studio Code (VS Code)",
            content:
              "VS Code is a free, open-source code editor developed by Microsoft and is the most popular editor among frontend developers. It offers built-in Git integration, an integrated terminal, IntelliSense (smart code completion), and thousands of extensions. Download it from https://code.visualstudio.com for Windows, macOS or Linux.",
            bullets: [
              "Install recommended extensions: Prettier (code formatter), ESLint (linting), Live Server (local dev server with hot reload), and Auto Rename Tag.",
              "Enable Format On Save (Settings → Editor: Format On Save) so your code is automatically formatted every time you save.",
              "Use the integrated terminal (Ctrl + ` or Cmd + `) to run commands without leaving the editor.",
              "Explore the Command Palette (Ctrl+Shift+P / Cmd+Shift+P) — it gives quick access to every VS Code feature.",
              "Choose a comfortable colour theme (e.g. One Dark Pro, Dracula, GitHub Theme) via File → Preferences → Color Theme.",
            ],
          },
          {
            title: "Web Browsers & DevTools",
            content:
              "You will spend as much time in the browser as in your editor. Install at least two browsers for cross-browser testing. Google Chrome is the industry standard for development thanks to its powerful DevTools, but Firefox Developer Edition offers excellent CSS debugging tools.",
            bullets: [
              "Google Chrome — install from https://www.google.com/chrome. Open DevTools with F12 or Cmd+Option+I (Mac) / Ctrl+Shift+I (Windows/Linux).",
              "Firefox Developer Edition — install from https://www.mozilla.org/firefox/developer. Its CSS Grid and Flexbox inspectors are best-in-class.",
              "Learn the Elements panel (inspect & edit HTML/CSS live), Console panel (run JavaScript, view errors), Network panel (monitor requests), and Lighthouse (performance audits).",
              "Install the React Developer Tools and Vue.js devtools browser extensions when you start using those frameworks.",
            ],
          },
          {
            title: "Node.js & npm",
            content:
              "Node.js is a JavaScript runtime that lets you execute JavaScript outside the browser. It ships with npm (Node Package Manager), which you will use to install libraries, run build scripts, and manage project dependencies. Download the LTS (Long Term Support) version from https://nodejs.org.",
            bullets: [
              "Verify installation by running 'node -v' and 'npm -v' in your terminal.",
              "Consider using nvm (Node Version Manager) to install and switch between multiple Node.js versions easily.",
              "npm init creates a package.json file — the manifest that tracks your project's dependencies and scripts.",
            ],
          },
          {
            title: "Git & GitHub",
            content:
              "Git is a distributed version control system that tracks changes in your code over time. GitHub is a cloud platform for hosting Git repositories, collaborating with others, and showcasing your work. Every professional developer uses version control — start early.",
            bullets: [
              "Install Git from https://git-scm.com. On macOS you can also install it via Xcode Command Line Tools (xcode-select --install).",
              "Create a free GitHub account at https://github.com.",
              "Configure your identity: 'git config --global user.name \"Your Name\"' and 'git config --global user.email \"you@example.com\"'.",
              "Learn the basic workflow: git init → git add → git commit → git push.",
              "VS Code has built-in Git support — use the Source Control panel to stage, commit and push without the terminal.",
            ],
          },
          {
            title: "Terminal / Command Line",
            content:
              "The terminal is a text-based interface for interacting with your computer. Frontend tooling — npm scripts, Git commands, build tools — runs in the terminal. Getting comfortable with it early will make everything else easier.",
            bullets: [
              "macOS: use the built-in Terminal app or install iTerm2 for a richer experience.",
              "Windows: use Windows Terminal with PowerShell, or install Git Bash for a Unix-like experience.",
              "Linux: most distributions include a terminal emulator by default.",
              "Essential commands to learn: cd (change directory), ls/dir (list files), mkdir (create folder), touch (create file), rm (remove).",
            ],
          },
          {
            title: "Recommended VS Code Extensions for Frontend",
            content:
              "Extensions supercharge your editor. Here is a curated starter pack for frontend development.",
            bullets: [
              "Prettier — automatic code formatting for HTML, CSS, JS and more.",
              "ESLint — highlights JavaScript/TypeScript errors and enforces coding standards.",
              "Live Server — launches a local development server with live reload on file save.",
              "Auto Rename Tag — automatically renames the paired HTML/XML tag when you edit one.",
              "Path Intellisense — autocompletes file paths as you type imports.",
              "GitLens — provides rich Git blame annotations and history directly in the editor.",
            ],
          },
        ],
      },

      /* 14 --------------------------------------------------------- */
      {
        title: "Introduction to the Web: How Browsers Work",
        content:
          "Every time you type a URL and press Enter, a complex chain of events unfolds in milliseconds. Understanding this process is fundamental for frontend developers — it explains why certain optimisations matter, why your CSS sometimes 'flashes', and how JavaScript can block page rendering. Let's trace the journey from URL to pixels on screen.",
        subsections: [
          {
            title: "What Is the World Wide Web?",
            content:
              "The World Wide Web (WWW) is a system of interlinked documents and resources accessed via the Internet. It was invented by Tim Berners-Lee in 1989 and relies on three core technologies: URLs (addresses), HTTP (the communication protocol), and HTML (the document format). The web is just one service that runs on the Internet — email, file transfer and streaming are others.",
            bullets: [
              "The Internet is the global network of connected computers; the Web is a service built on top of it.",
              "Websites are collections of web pages hosted on web servers and accessed through browsers.",
              "Every resource on the web has a unique URL (Uniform Resource Locator) that identifies its location.",
            ],
          },
          {
            title: "The Client–Server Model",
            content:
              "Web communication follows a client–server architecture. The client (your browser) sends requests and the server responds with the requested resources. This request–response cycle is the foundation of how the web works.",
            bullets: [
              "Client — the browser (Chrome, Firefox, Safari) that requests and displays web pages.",
              "Server — a computer running software (e.g. Apache, Nginx, Node.js) that stores website files and serves them on request.",
              "The client and server communicate using HTTP (HyperText Transfer Protocol) or its secure variant HTTPS.",
            ],
          },
          {
            title: "DNS Lookup — Finding the Server",
            content:
              "When you enter a URL like www.example.com, the browser needs to find the IP address of the server hosting that website. This is handled by the Domain Name System (DNS), often called the 'phone book of the Internet'. The browser checks its local cache first, then queries DNS servers until it resolves the domain to an IP address (e.g. 93.184.216.34).",
            bullets: [
              "DNS translates human-readable domain names into numerical IP addresses.",
              "Lookups are cached at multiple levels (browser, OS, router, ISP) to speed up repeat visits.",
              "A slow DNS lookup can delay the entire page load — this is why CDNs and DNS prefetching matter.",
            ],
          },
          {
            title: "HTTP Request & Response",
            content:
              "Once the IP address is found, the browser establishes a TCP connection (and a TLS handshake for HTTPS) and sends an HTTP request to the server. The request includes the method (GET, POST, etc.), the path, headers (e.g. accepted content types, cookies) and sometimes a body. The server processes the request and sends back an HTTP response containing a status code (200 OK, 404 Not Found, etc.), headers and the response body (usually the HTML document).",
            bullets: [
              "Common HTTP methods: GET (retrieve data), POST (send data), PUT (update), DELETE (remove).",
              "Status codes: 2xx = success, 3xx = redirect, 4xx = client error, 5xx = server error.",
              "Response headers tell the browser how to handle the content — caching rules, content type, encoding, etc.",
            ],
          },
          {
            title: "Parsing HTML — Building the DOM",
            content:
              "The browser receives the HTML document and begins parsing it from top to bottom. It converts the HTML markup into a tree-like data structure called the DOM (Document Object Model). Each HTML element becomes a node in the tree. As the parser encounters links to external resources — CSS files, JavaScript files, images — it issues additional HTTP requests to fetch them.",
            bullets: [
              "The DOM is a live, in-memory representation of the HTML document that JavaScript can read and modify.",
              "Parsing is incremental — the browser starts rendering as soon as it has enough of the DOM, not after the entire document is downloaded.",
              "Script tags without 'async' or 'defer' block HTML parsing until the script is downloaded and executed.",
            ],
          },
          {
            title: "Building the CSSOM",
            content:
              "While the HTML parser builds the DOM, CSS files are parsed into the CSSOM (CSS Object Model). The CSSOM is another tree structure that represents all the styles and their specificity. The browser cannot render a page until the CSSOM is complete because it needs to know the final computed style for every visible element.",
            bullets: [
              "CSS is render-blocking — the browser waits for all CSS to be parsed before painting pixels.",
              "This is why you should keep CSS lean, avoid unused styles, and place <link> tags in the <head>.",
              "The CSSOM + DOM together determine every element's size, position, colour and visibility.",
            ],
          },
          {
            title: "The Render Tree, Layout & Paint",
            content:
              "The browser combines the DOM and CSSOM into a Render Tree, which contains only the visible elements (it excludes <head>, elements with display:none, etc.). It then calculates the exact position and size of each element in a step called Layout (also known as Reflow). Finally, the Paint step fills in pixels — colours, text, images, borders, shadows — onto layers, and the Compositing step merges those layers into the final image displayed on screen.",
            bullets: [
              "Render Tree = DOM + CSSOM minus invisible nodes.",
              "Layout calculates geometry (position, width, height) for every render-tree node.",
              "Paint converts layout information into actual pixels; Compositing merges the painted layers.",
              "Changes to layout properties (width, top, font-size) trigger a reflow, which is expensive — minimise them for better performance.",
            ],
          },
          {
            title: "JavaScript Execution & the Event Loop",
            content:
              "JavaScript runs in a single-threaded environment inside the browser. The engine (e.g. V8 in Chrome) executes scripts, handles user events, and updates the DOM. The Event Loop is the mechanism that keeps the browser responsive: it processes a queue of tasks (click handlers, timer callbacks, network responses) one at a time while allowing the browser to repaint between tasks.",
            bullets: [
              "JavaScript can modify both the DOM and CSSOM, which may trigger re-layout and re-paint.",
              "Long-running scripts block the main thread and make the page unresponsive — keep tasks short.",
              "Use 'async' and 'defer' attributes on script tags to avoid blocking HTML parsing.",
              "Web APIs (setTimeout, fetch, addEventListener) hand off work and push callbacks onto the task queue for the event loop to process.",
            ],
          },
          {
            title: "Putting It All Together — The Critical Rendering Path",
            content:
              "The Critical Rendering Path (CRP) is the sequence of steps the browser takes to convert HTML, CSS and JavaScript into pixels on screen: DNS lookup → HTTP request → receive HTML → parse HTML (build DOM) → fetch & parse CSS (build CSSOM) → execute JavaScript → build Render Tree → Layout → Paint → Composite. Optimising the CRP is one of the most impactful things a frontend developer can do to improve page performance.",
            bullets: [
              "Minimise render-blocking resources — inline critical CSS, defer non-critical JS.",
              "Reduce the number of critical resources (CSS and synchronous JS files that block first render).",
              "Compress and minify HTML, CSS and JS to reduce download sizes.",
              "Use browser caching headers so returning visitors skip redundant downloads.",
              "Audit your CRP with Chrome DevTools → Performance panel and Lighthouse.",
            ],
          },
        ],
      },

    
    ],

    assessment:
      "Explain how browsers render web pages and demonstrate your understanding by creating a simple HTML file, opening it in a browser, and inspecting an element using Developer Tools. Include screenshots of each step.",

    supportResources: [
      {
        label: "Beginner's Web Development Guide — Frontend (Medium)",
        url: "https://medium.com/devtrailsio/beginners-web-development-guide-part-1-frontend-ca59f1877ec5",
      },
      {
        label: "Introduction to Frontend Development (The New Stack)",
        url: "https://thenewstack.io/introduction-to-frontend-development/",
      },
    ],
  },
];
