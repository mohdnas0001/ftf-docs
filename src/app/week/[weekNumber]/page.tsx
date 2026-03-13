import { syllabus } from "@/data/syllabus";
import Slide from "@/components/Slide";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

interface WeekPageProps {
  params: Promise<{ weekNumber: string }>;
}

export function generateStaticParams() {
  return syllabus.map((week) => ({
    weekNumber: week.week.toString(),
  }));
}

export async function generateMetadata({ params }: WeekPageProps) {
  const { weekNumber } = await params;
  const weekNum = parseInt(weekNumber, 10);
  const weekData = syllabus.find((w) => w.week === weekNum);

  if (!weekData) {
    return { title: "Week Not Found" };
  }

  return {
    title: `${weekData.title} | FTF Frontend`,
    description: weekData.overview,
  };
}

export default async function WeekPage({ params }: WeekPageProps) {
  const { weekNumber } = await params;
  const weekNum = parseInt(weekNumber, 10);
  const weekData = syllabus.find((w) => w.week === weekNum);

  if (!weekData) {
    notFound();
  }

  // Find previous and next weeks
  const currentIndex = syllabus.findIndex((w) => w.week === weekNum);
  const prevWeek = currentIndex > 0 ? syllabus[currentIndex - 1] : null;
  const nextWeek =
    currentIndex < syllabus.length - 1 ? syllabus[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-slate-950 py-12 px-4">
      <header className="text-center mb-8">
        {/* Logos */}
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
          href="/"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-4"
        >
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to All Weeks
        </Link>
      </header>

      <main>
        <Slide data={weekData} />

        {/* Navigation between weeks */}
        <nav className="max-w-4xl mx-auto mt-8 flex justify-between items-center px-4">
          {prevWeek ? (
            <Link
              href={`/week/${prevWeek.week}`}
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group"
            >
              <svg
                className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="hidden sm:inline">Week {prevWeek.week}</span>
              <span className="sm:hidden">Prev</span>
            </Link>
          ) : (
            <div />
          )}

          <Link
            href="/"
            className="px-4 py-2 rounded-lg bg-slate-800 text-gray-300 hover:bg-slate-700 transition-colors"
          >
            All Weeks
          </Link>

          {nextWeek ? (
            <Link
              href={`/week/${nextWeek.week}`}
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group"
            >
              <span className="hidden sm:inline">Week {nextWeek.week}</span>
              <span className="sm:hidden">Next</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </main>
    </div>
  );
}
