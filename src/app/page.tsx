import { syllabus } from "@/data/syllabus";
import Slide from "@/components/Slide";
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
        <p className="mt-2 text-xl font-semibold text-purple-300">
          Cohort 1
        </p>
      </header>

      <main>
        {syllabus.map((week) => (
          <Slide key={week.week} data={week} />
        ))}
      </main>
    </div>
  );
}
