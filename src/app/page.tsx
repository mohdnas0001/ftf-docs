import { syllabus } from "@/data/syllabus";
import Slide from "@/components/Slide";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">
          Frontend Development Course
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Weekly slides &amp; assessments
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
