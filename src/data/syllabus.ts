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
