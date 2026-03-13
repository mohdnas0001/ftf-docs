import type { WeekData } from "../types";

/* ================================================================== */
/*  WEEK 4: Version Control with Git & GitHub                          */
/* ================================================================== */

export const week4: WeekData = {
  week: 4,
  title: "Week 4: Version Control with Git & GitHub",

  overview:
    "Version control is a system that records changes to files over time, allowing you to recall specific versions later. Git is the most widely used version control system in the world, and GitHub is the leading platform for hosting Git repositories and collaborating with other developers. Mastering Git is essential for every developer — it enables you to track your work, experiment safely, collaborate with teams, and contribute to open-source projects. This week we cover the fundamentals of Git and GitHub, along with the essential commands you'll use daily.",

  sections: [
    /* 1 ---------------------------------------------------------- */
    {
      title: "Introduction to Git and GitHub",
      content:
        "Git and GitHub are often mentioned together, but they serve different purposes. Git is the version control system that runs on your local machine, while GitHub is a cloud-based platform that hosts Git repositories and provides collaboration features.",
      subsections: [
        {
          title: "What Is Version Control?",
          content:
            "Version control (also called source control) is the practice of tracking and managing changes to code. It allows multiple developers to work on the same project without overwriting each other's work, and it provides a complete history of every change ever made.",
          bullets: [
            "Track every modification to code in a special database — if a mistake is made, you can roll back to a previous version.",
            "Compare changes over time, see who made which changes, and understand why changes were made.",
            "Branch and merge — work on new features in isolation, then integrate them back into the main codebase.",
            "Essential for collaboration — multiple developers can work on the same codebase simultaneously.",
            "Types of version control: local (simple file copies), centralised (SVN), and distributed (Git).",
          ],
        },
        {
          title: "What Is Git?",
          content:
            "Git is a free, open-source distributed version control system created by Linus Torvalds in 2005 (the creator of Linux). 'Distributed' means every developer has a full copy of the repository, including its complete history, on their local machine.",
          bullets: [
            "Fast and efficient — most operations are performed locally without network access.",
            "Supports non-linear development — create branches to work on features, bug fixes, or experiments independently.",
            "Data integrity — every file and commit is checksummed with SHA-1, ensuring changes are tracked accurately.",
            "Staging area (index) — a unique Git feature that lets you prepare commits carefully before finalising them.",
            "The industry standard — used by millions of developers and virtually every tech company.",
          ],
        },
        {
          title: "What Is GitHub?",
          content:
            "GitHub is a web-based platform that hosts Git repositories in the cloud. It adds a visual interface, collaboration tools, and social features on top of Git. While Git is the engine, GitHub is the garage where teams store, share, and work on their code together.",
          bullets: [
            "Remote repository hosting — push your local Git repositories to GitHub to back them up and share them.",
            "Collaboration features — pull requests, code reviews, issue tracking, and project boards.",
            "Social coding — follow developers, star repositories, fork projects to contribute.",
            "GitHub Actions — automate workflows like testing, building, and deploying code.",
            "GitHub Pages — host static websites directly from a repository for free.",
            "Alternatives include GitLab, Bitbucket, and Azure DevOps, but GitHub is the most popular.",
          ],
        },
        {
          title: "Git vs. GitHub — Key Differences",
          content:
            "Understanding the distinction between Git and GitHub is crucial for beginners.",
          bullets: [
            "Git is software you install on your computer; GitHub is a web service you access via browser or Git commands.",
            "Git works offline; GitHub requires an internet connection to push, pull, or view repositories.",
            "Git manages versions locally; GitHub stores repositories remotely and enables collaboration.",
            "You can use Git without GitHub (with local repositories or other hosts), but GitHub requires Git.",
            "Think of Git as the tool and GitHub as the workshop where teams collaborate using that tool.",
          ],
        },
        {
          title: "Why Learn Git and GitHub?",
          content:
            "Version control is not optional in professional development — it's a fundamental skill expected of every developer.",
          bullets: [
            "Industry requirement — nearly every development job requires Git proficiency.",
            "Portfolio and visibility — GitHub profiles showcase your work to potential employers.",
            "Open-source contribution — participate in open-source projects and build your reputation.",
            "Backup and recovery — never lose code again; your entire project history is preserved.",
            "Experimentation — create branches to try ideas without risking the main codebase.",
            "Team collaboration — work with others without stepping on each other's toes.",
          ],
        },
        {
          title: "Installing Git",
          content:
            "Before using Git, you need to install it on your machine and perform some initial configuration.",
          bullets: [
            "macOS: Install via Xcode Command Line Tools (xcode-select --install) or download from https://git-scm.com.",
            "Windows: Download Git for Windows from https://git-scm.com — includes Git Bash, a Unix-like terminal.",
            "Linux: Install via your package manager (e.g., sudo apt install git on Ubuntu/Debian).",
            "Verify installation: run 'git --version' in your terminal — you should see the installed version number.",
            "Configure your identity (required for commits): git config --global user.name \"Your Name\" and git config --global user.email \"you@example.com\".",
            "Set your default branch name: git config --global init.defaultBranch main.",
          ],
        },
        {
          title: "Creating a GitHub Account",
          content:
            "To use GitHub, you need a free account. Your GitHub profile becomes your developer portfolio.",
          bullets: [
            "Sign up at https://github.com — choose a professional username you'll be comfortable sharing.",
            "Complete your profile — add a bio, profile picture, and links to your website or LinkedIn.",
            "Enable two-factor authentication (2FA) for security — GitHub strongly recommends this.",
            "Explore GitHub: browse trending repositories, follow developers, and star interesting projects.",
            "Create your first repository by clicking the '+' icon and selecting 'New repository'.",
          ],
        },
        {
          title: "Understanding Repositories",
          content:
            "A repository (or 'repo') is a folder that Git tracks. It contains your project files and a hidden .git directory that stores the version history.",
          bullets: [
            "Local repository — exists on your computer; created with 'git init' or 'git clone'.",
            "Remote repository — hosted on GitHub (or another service); acts as a central hub for collaboration.",
            "The .git folder stores all commits, branches, and Git metadata — don't delete it!",
            "Repositories can be public (visible to everyone) or private (visible only to you and collaborators).",
            "A good repository includes a README.md file explaining the project, a .gitignore file to exclude unnecessary files, and a license.",
          ],
        },
      ],
    },

    /* 2 ---------------------------------------------------------- */
    {
      title: "How to Use Basic Git Commands (Clone, Commit, Push)",
      content:
        "The core Git workflow involves a handful of commands you'll use constantly: cloning repositories, staging changes, committing them, and pushing to a remote. Mastering these commands is the foundation of working with Git.",
      subsections: [
        {
          title: "The Basic Git Workflow",
          content:
            "Understanding the Git workflow helps you visualise what happens at each step. Files flow through three main areas: the working directory, the staging area (index), and the repository.",
          bullets: [
            "Working Directory — the folder on your computer where you edit files.",
            "Staging Area (Index) — a holding area where you prepare changes before committing; use 'git add' to stage files.",
            "Repository (.git) — the database storing your commits; use 'git commit' to save staged changes permanently.",
            "Remote Repository — the GitHub copy; use 'git push' to upload commits and 'git pull' to download changes.",
            "Workflow: Edit files → Stage changes (git add) → Commit (git commit) → Push to remote (git push).",
          ],
        },
        {
          title: "git clone — Copying a Remote Repository",
          content:
            "The 'git clone' command creates a local copy of a remote repository on your machine. It's typically the first command you run when starting work on an existing project.",
          bullets: [
            "Syntax: git clone <repository-url> — e.g., git clone https://github.com/username/repo-name.git",
            "This creates a new folder with the repository name containing all files and the complete Git history.",
            "The remote repository is automatically configured as 'origin' — you can push and pull from it.",
            "You can clone via HTTPS (easier setup) or SSH (more secure, requires SSH key configuration).",
            "To clone into a specific folder: git clone <url> <folder-name>.",
            "After cloning, navigate into the folder with 'cd repo-name' before running other Git commands.",
          ],
        },
        {
          title: "git status — Checking the State of Your Files",
          content:
            "The 'git status' command shows the current state of your working directory and staging area. Run it frequently to understand what Git sees.",
          bullets: [
            "Shows which files are modified, staged, or untracked.",
            "Untracked files are new files Git hasn't seen before — they won't be committed unless you add them.",
            "Modified files have changes that haven't been staged yet.",
            "Staged files are ready to be committed.",
            "Use 'git status' before committing to verify you're including the right files.",
            "Short format: 'git status -s' gives a compact summary.",
          ],
        },
        {
          title: "git add — Staging Changes",
          content:
            "The 'git add' command moves changes from your working directory to the staging area, preparing them for the next commit.",
          bullets: [
            "git add <filename> — stage a specific file.",
            "git add . — stage all changes in the current directory and subdirectories.",
            "git add -A — stage all changes in the entire repository (new, modified, and deleted files).",
            "git add *.js — stage all JavaScript files (using wildcards).",
            "Staging lets you craft commits carefully — you don't have to commit all changes at once.",
            "To unstage a file: git restore --staged <filename> (or git reset HEAD <filename> in older Git versions).",
          ],
        },
        {
          title: "git commit — Saving Changes to the Repository",
          content:
            "The 'git commit' command takes the staged snapshot and permanently stores it in the repository with a descriptive message.",
          bullets: [
            "Syntax: git commit -m \"Your commit message here\".",
            "The -m flag lets you write the message inline; without it, Git opens a text editor for longer messages.",
            "Write meaningful commit messages — describe WHAT changed and WHY, not HOW.",
            "Good: \"Add user authentication with JWT\" — Bad: \"Fixed stuff\" or \"Update\".",
            "Each commit gets a unique SHA-1 hash (e.g., a1b2c3d) that identifies it forever.",
            "Shortcut: git commit -am \"message\" — stages all tracked modified files and commits in one step (doesn't add new files).",
            "Keep commits small and focused — one logical change per commit makes history easier to understand.",
          ],
        },
        {
          title: "git push — Uploading to GitHub",
          content:
            "The 'git push' command uploads your local commits to a remote repository (like GitHub), making them available to others.",
          bullets: [
            "Syntax: git push <remote> <branch> — e.g., git push origin main.",
            "After cloning, 'origin' is the default name for the remote repository.",
            "'main' (or 'master' in older repos) is the default primary branch.",
            "If you're pushing a new branch for the first time: git push -u origin branch-name (-u sets the upstream tracking).",
            "After setting upstream, you can just run 'git push' without specifying remote and branch.",
            "If someone else pushed changes before you, Git may reject your push — you'll need to 'git pull' first, resolve any conflicts, then push again.",
          ],
        },
        {
          title: "git pull — Downloading Changes from GitHub",
          content:
            "The 'git pull' command fetches changes from a remote repository and merges them into your current branch. It's how you stay up-to-date with your team's work.",
          bullets: [
            "Syntax: git pull <remote> <branch> — e.g., git pull origin main.",
            "'git pull' is essentially 'git fetch' (download changes) followed by 'git merge' (integrate them).",
            "Run 'git pull' before starting new work to ensure you have the latest changes.",
            "If your local changes conflict with remote changes, Git will ask you to resolve the conflicts manually.",
            "Alternative: 'git pull --rebase' replays your local commits on top of the remote changes for a cleaner history.",
          ],
        },
        {
          title: "git log — Viewing Commit History",
          content:
            "The 'git log' command displays the commit history of the repository, showing who made changes, when, and why.",
          bullets: [
            "'git log' shows commits in reverse chronological order (newest first).",
            "Each entry shows the commit hash, author, date, and commit message.",
            "'git log --oneline' — compact view, one commit per line.",
            "'git log --graph' — visualise branches and merges as ASCII art.",
            "'git log -n 5' — show only the last 5 commits.",
            "Press 'q' to exit the log viewer.",
          ],
        },
        {
          title: "git diff — Viewing Changes",
          content:
            "The 'git diff' command shows the differences between various states of your files — what exactly changed, line by line.",
          bullets: [
            "'git diff' — shows unstaged changes (working directory vs. staging area).",
            "'git diff --staged' — shows staged changes (staging area vs. last commit).",
            "'git diff HEAD' — shows all changes since the last commit (staged and unstaged).",
            "Lines prefixed with '+' are additions; lines with '-' are deletions.",
            "Use diff to review your changes before committing.",
          ],
        },
        {
          title: "The .gitignore File",
          content:
            "A .gitignore file tells Git which files or folders to ignore — they won't be tracked or committed. This is essential for keeping repositories clean.",
          bullets: [
            "Create a file named '.gitignore' in your repository root.",
            "Each line specifies a pattern: 'node_modules/' ignores the node_modules folder, '*.log' ignores all .log files.",
            "Common ignores: node_modules/, .env (environment secrets), .DS_Store (macOS), *.log, dist/, build/.",
            "Use https://gitignore.io to generate .gitignore files for your tech stack.",
            "Files already tracked by Git won't be ignored — you must untrack them first with 'git rm --cached <file>'.",
          ],
        },
        {
          title: "Common Workflow Example",
          content:
            "Here's a typical workflow for making changes to a project:",
          bullets: [
            "1. git pull origin main — get the latest changes from GitHub.",
            "2. Make your code changes in VS Code or your editor.",
            "3. git status — see what files changed.",
            "4. git add . — stage all changes (or git add <specific-file>).",
            "5. git commit -m \"Add feature X\" — commit with a descriptive message.",
            "6. git push origin main — push your commit to GitHub.",
            "7. Verify on GitHub that your changes appear in the repository.",
          ],
        },
      ],
    },

    /* 3 ---------------------------------------------------------- */
    {
      title: "Collaboration and Communication Skills",
      content:
        "Technical skills alone are not enough to succeed as a developer. The ability to collaborate effectively with teammates, communicate clearly, and work well in a team environment is equally important. This session focuses on the soft skills that complement your technical abilities.",
      subsections: [
        {
          title: "Why Soft Skills Matter in Tech",
          content:
            "Software development is a team sport. The best code in the world is useless if you can't work with others to ship it, explain it, or maintain it.",
          bullets: [
            "Most development work happens in teams — you'll collaborate with other developers, designers, product managers, and stakeholders.",
            "Clear communication reduces misunderstandings, bugs, and wasted effort.",
            "Employers consistently rank communication and teamwork among the most desired skills.",
            "Remote and distributed teams (increasingly common) rely even more heavily on written communication.",
            "Soft skills are often the differentiator between good developers and great ones.",
          ],
        },
        {
          title: "Effective Communication",
          content:
            "Communication in tech takes many forms: code reviews, documentation, meetings, chat messages, and emails. Being clear, concise, and considerate in all of them is essential.",
          bullets: [
            "Be clear and concise — get to the point without unnecessary jargon or filler.",
            "Know your audience — explain technical concepts differently to developers vs. non-technical stakeholders.",
            "Ask good questions — include context, what you've tried, and what you expected vs. what happened.",
            "Listen actively — understand before responding; don't interrupt or assume.",
            "Document your work — write clear README files, code comments, and documentation so others can understand your code.",
            "Over-communicate in remote settings — what's obvious to you may not be obvious to others.",
          ],
        },
        {
          title: "Giving and Receiving Feedback",
          content:
            "Code reviews and peer feedback are fundamental to software development. Learning to give constructive feedback and accept criticism gracefully is crucial.",
          bullets: [
            "When giving feedback: be specific, focus on the code (not the person), suggest improvements, and acknowledge what's done well.",
            "Use 'I' statements: 'I find this confusing' rather than 'You wrote confusing code'.",
            "When receiving feedback: don't take it personally, ask clarifying questions, and thank the reviewer.",
            "View feedback as a learning opportunity, not an attack.",
            "The goal is always to improve the code and help each other grow.",
          ],
        },
        {
          title: "Working in Teams",
          content:
            "Teamwork requires coordination, respect, and shared goals. Understanding team dynamics helps you contribute effectively.",
          bullets: [
            "Respect different perspectives — diverse teams build better products.",
            "Be reliable — meet your commitments, communicate early if you'll miss a deadline.",
            "Help others — share knowledge, pair program, and support teammates who are struggling.",
            "Handle conflicts professionally — address disagreements calmly, focus on solutions, and escalate if needed.",
            "Celebrate team successes — recognize contributions and build a positive team culture.",
          ],
        },
        {
          title: "Collaborating on GitHub",
          content:
            "GitHub isn't just for storing code — it's a collaboration platform. Learning GitHub's collaboration features is essential for working on team projects and open source.",
          bullets: [
            "Issues — used to track bugs, feature requests, and tasks. Create clear, detailed issues with steps to reproduce.",
            "Pull Requests (PRs) — propose changes, request reviews, and discuss code before merging. Write clear PR descriptions explaining what and why.",
            "Code Reviews — review others' PRs, leave helpful comments, approve or request changes.",
            "Branches — create feature branches (e.g., feature/user-auth) so multiple people can work in parallel without conflicts.",
            "Forks — copy repositories to your account to contribute to projects you don't have write access to.",
            "Markdown — learn Markdown formatting for README files, issues, and PR descriptions.",
          ],
        },
        {
          title: "Collaboration Tools Beyond GitHub",
          content:
            "Development teams use various tools to communicate, manage projects, and collaborate effectively.",
          bullets: [
            "Slack / Discord / Microsoft Teams — instant messaging for quick questions, announcements, and team chat.",
            "Jira / Trello / Asana — project management and issue tracking; organise work into sprints or boards.",
            "Confluence / Notion — documentation and knowledge bases; write and share team docs.",
            "Figma — design collaboration; view and comment on designs, inspect assets for implementation.",
            "Zoom / Google Meet — video calls for meetings, pair programming, and screen sharing.",
            "VS Code Live Share — real-time collaborative editing; pair program remotely in the same codebase.",
          ],
        },
        {
          title: "Remote Work Best Practices",
          content:
            "Many tech teams work remotely or in hybrid arrangements. Remote work requires intentional communication and self-management.",
          bullets: [
            "Over-communicate — share updates proactively; don't wait to be asked.",
            "Be responsive — reply to messages in a reasonable time; set status when unavailable.",
            "Use video when possible — face-to-face (even virtual) builds stronger connections.",
            "Write things down — document decisions, meeting notes, and processes so they're accessible to everyone.",
            "Respect time zones — be mindful of colleagues in different locations; use async communication when synchronous isn't necessary.",
            "Set boundaries — create a dedicated workspace, establish working hours, and take breaks.",
          ],
        },
        {
          title: "Building Your Professional Presence",
          content:
            "As a developer, your online presence is part of your professional identity. Curate it intentionally.",
          bullets: [
            "GitHub profile — keep it active with projects, contributions, and a professional README.",
            "LinkedIn — maintain an up-to-date profile, connect with colleagues, and share relevant content.",
            "Portfolio website — showcase your best projects with descriptions, screenshots, and links.",
            "Twitter/X — follow industry leaders, share learnings, and engage with the developer community.",
            "Tech blog — writing about what you learn reinforces knowledge and demonstrates communication skills.",
            "Be consistent — use the same professional name and photo across platforms.",
          ],
        },
      ],
    },
  ],

  assessment:
    "Create a GitHub repository, clone it locally, add a simple README file with a project description, commit the changes with a meaningful commit message, and push them to GitHub. Share the repository link and a screenshot of your Git commands in the terminal.",

  supportResources: [
    {
      label: "Git Official Documentation",
      url: "https://git-scm.com/doc",
    },
    {
      label: "GitHub Docs — Getting Started",
      url: "https://docs.github.com/en/get-started",
    },
    {
      label: "Atlassian Git Tutorials",
      url: "https://www.atlassian.com/git/tutorials",
    },
    {
      label: "Learn Git Branching (Interactive)",
      url: "https://learngitbranching.js.org/",
    },
    {
      label: "GitHub Skills — Interactive Courses",
      url: "https://skills.github.com/",
    },
  ],
};
