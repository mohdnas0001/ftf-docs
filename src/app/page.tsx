import { syllabus } from "@/data/syllabus";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 py-12 px-4">
      <header className="text-center mb-12">
        {/* Logos */}
        <div className="flex items-center justify-center gap-8 mb-6">
          <Image
            src="/futuremap-logo.png"
            alt="FutureMap Logo"
            width={80}
            height={88}
            priority
          />
          <Image
            src="/ftf-logo.png"
            alt="Future Tech Fellowship Logo"
            width={220}
            height={55}
            priority
          />
        </div>

        <h1 className="text-4xl font-bold text-white">
          FTF &mdash; Frontend Development
        </h1>
        <p className="mt-2 text-xl font-semibold text-purple-300">Cohort 1</p>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Welcome to the Future Tech Fellowship Frontend Development course.
          Select a week below to view the curriculum.
        </p>
      </header>

      <main className="max-w-4xl mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {syllabus.map((week) => (
            <Link
              key={week.week}
              href={`/week/${week.week}`}
              className="group block rounded-2xl border border-slate-700 bg-slate-900 hover:bg-slate-800 hover:border-purple-500/50 shadow-lg hover:shadow-purple-900/20 transition-all overflow-hidden"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 px-6 py-4">
                <span className="text-sm font-medium text-purple-300">
                  Week {week.week}
                </span>
              </div>

              {/* Card Body */}
              <div className="px-6 py-5">
                <h2 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors line-clamp-2">
                  {week.title.replace(/^Week \d+:\s*/, "")}
                </h2>
                <p className="mt-3 text-sm text-gray-400 line-clamp-3">
                  {week.overview}
                </p>

                {/* Topics count */}
                <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    {week.sections.length} sections
                  </span>
                  <span className="flex items-center gap-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                    {week.supportResources.length} resources
                  </span>
                </div>

                {/* View link */}
                <div className="mt-4 flex items-center text-purple-400 group-hover:text-purple-300 text-sm font-medium">
                  View curriculum
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

