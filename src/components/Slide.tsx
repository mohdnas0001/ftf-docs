import type { WeekData, Section, SubSection } from "@/data/syllabus";

/* ------------------------------------------------------------------ */
/*  Sub-section renderer                                               */
/* ------------------------------------------------------------------ */
function SubSectionCard({ sub }: { sub: SubSection }) {
  return (
    <div className="ml-4 border-l-2 border-purple-500 pl-4 mt-3">
      <h5 className="font-semibold text-purple-300">{sub.title}</h5>
      <p className="text-gray-300 mt-1 leading-relaxed">{sub.content}</p>
      {sub.bullets && (
        <ul className="list-disc list-inside mt-2 space-y-1 text-gray-300">
          {sub.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section renderer                                                   */
/* ------------------------------------------------------------------ */
function SectionBlock({ section }: { section: Section }) {
  return (
    <details className="group rounded-xl border border-slate-700 bg-slate-800/50 open:bg-slate-800 open:shadow-md open:shadow-purple-900/20 transition-all">
      <summary className="cursor-pointer select-none px-5 py-4 text-lg font-semibold text-purple-300 group-open:border-b group-open:border-slate-700">
        {section.title}
      </summary>

      <div className="px-5 py-4 space-y-3">
        {section.content && (
          <p className="text-gray-300 leading-relaxed">{section.content}</p>
        )}

        {section.bullets && (
          <ul className="list-disc list-inside space-y-1 text-gray-300">
            {section.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}

        {section.subsections?.map((sub, i) => (
          <SubSectionCard key={i} sub={sub} />
        ))}
      </div>
    </details>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Slide component                                               */
/* ------------------------------------------------------------------ */
interface SlideProps {
  data: WeekData;
}

export default function Slide({ data }: SlideProps) {
  return (
    <section className="max-w-4xl mx-auto my-10 rounded-2xl border border-slate-700 bg-slate-900 shadow-xl shadow-purple-900/10 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 px-8 py-8">
        <h2 className="text-3xl font-bold text-white">{data.title}</h2>
        <p className="mt-3 text-purple-200 leading-relaxed text-base">
          {data.overview}
        </p>
      </div>

      <div className="px-8 py-8 space-y-4">
        {/* Sections (collapsible) */}
        {data.sections.map((section, i) => (
          <SectionBlock key={i} section={section} />
        ))}

        {/* Assessment */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-white mb-3">
            📝 Assessment
          </h3>
          <p className="text-gray-200 leading-relaxed bg-purple-950/50 border-l-4 border-purple-500 p-4 rounded-r-lg">
            {data.assessment}
          </p>
        </div>

        {/* Support Resources */}
        {data.supportResources.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              🔗 Support Resources
            </h3>
            <ul className="space-y-2">
              {data.supportResources.map((res, i) => (
                <li key={i}>
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    {res.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
