import type { WeekData, Section, SubSection } from "@/data/syllabus";

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

/** Bullets that start with code-like content get monospace styling */
function isCodeBullet(text: string) {
  return /^(const |let |var |function |class |import |export |for |npm |npx |<|{|\[)/.test(
    text.trim()
  );
}

/** Split a bullet into an optional bold lead and the rest */
function splitBullet(text: string): { lead: string; rest: string } {
  const dash = text.indexOf(" — ");
  if (dash !== -1) {
    return { lead: text.slice(0, dash), rest: text.slice(dash + 3) };
  }
  const colon = text.indexOf(": ");
  if (colon !== -1 && colon < 40) {
    return { lead: text.slice(0, colon + 1), rest: text.slice(colon + 2) };
  }
  return { lead: "", rest: text };
}

/** Resolve a colour accent from a section title prefix (Week 5 vs Week 6) */
function weekAccent(title: string): {
  badge: string;
  bar: string;
  dot: string;
} {
  if (title.startsWith("Week 6"))
    return {
      badge: "bg-emerald-900/60 text-emerald-300 border-emerald-700",
      bar: "border-emerald-500",
      dot: "bg-emerald-400",
    };
  if (title.startsWith("Week 5"))
    return {
      badge: "bg-blue-900/60 text-blue-300 border-blue-700",
      bar: "border-blue-500",
      dot: "bg-blue-400",
    };
  // Assessment / generic
  return {
    badge: "bg-purple-900/60 text-purple-300 border-purple-700",
    bar: "border-purple-500",
    dot: "bg-purple-400",
  };
}

/** Strip the "Week N · " prefix for the summary label */
function stripWeekPrefix(title: string) {
  return title.replace(/^Week \d+\s*[·•]\s*/, "");
}

/* ------------------------------------------------------------------ */
/*  Bullet item                                                        */
/* ------------------------------------------------------------------ */
function BulletItem({ text, dot }: { text: string; dot: string }) {
  if (isCodeBullet(text)) {
    return (
      <li className="flex gap-3 items-start">
        <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${dot}`} />
        <code className="text-sm font-mono bg-slate-950/70 text-emerald-300 px-3 py-1.5 rounded-lg leading-relaxed w-full border border-slate-700/50">
          {text}
        </code>
      </li>
    );
  }

  const { lead, rest } = splitBullet(text);
  return (
    <li className="flex gap-3 items-start">
      <span className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${dot}`} />
      <span className="text-gray-300 leading-relaxed text-sm">
        {lead && (
          <span className="font-semibold text-white">{lead}&nbsp;</span>
        )}
        {rest}
      </span>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/*  Sub-section card                                                   */
/* ------------------------------------------------------------------ */
function SubSectionCard({
  sub,
  dot,
  bar,
}: {
  sub: SubSection;
  dot: string;
  bar: string;
}) {
  return (
    <div
      className={`rounded-xl border border-slate-700/60 bg-slate-900/60 overflow-hidden`}
    >
      {/* Sub-section header */}
      <div className={`px-5 py-3 border-l-4 ${bar} bg-slate-800/50`}>
        <h5 className="font-semibold text-white text-sm tracking-wide">
          {sub.title}
        </h5>
      </div>

      <div className="px-5 py-4 space-y-4">
        {sub.content && (
          <p className="text-gray-400 leading-relaxed text-sm">{sub.content}</p>
        )}

        {sub.bullets && sub.bullets.length > 0 && (
          <ul className="space-y-2.5">
            {sub.bullets.map((b, i) => (
              <BulletItem key={i} text={b} dot={dot} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section block (collapsible)                                        */
/* ------------------------------------------------------------------ */
function SectionBlock({
  section,
  index,
}: {
  section: Section;
  index: number;
}) {
  const { badge, bar, dot } = weekAccent(section.title);
  const label = stripWeekPrefix(section.title);
  const weekTag = section.title.match(/^(Week \d+)/)?.[1] ?? null;

  return (
    <details className="group rounded-2xl border border-slate-700/60 bg-slate-800/40 overflow-hidden transition-all open:bg-slate-800/70 open:shadow-lg open:shadow-black/30">
      <summary className="cursor-pointer select-none list-none">
        <div className="flex items-center gap-4 px-6 py-5">
          {/* Section number */}
          <span className="shrink-0 w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-300">
            {index + 1}
          </span>

          <div className="flex-1 min-w-0">
            {weekTag && (
              <span
                className={`inline-block text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full border mb-1.5 ${badge}`}
              >
                {weekTag}
              </span>
            )}
            <h4 className="text-base font-semibold text-white leading-snug">
              {label}
            </h4>
          </div>

          {/* Chevron */}
          <svg
            className="w-4 h-4 text-slate-400 shrink-0 transition-transform group-open:rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </summary>

      {/* Body */}
      <div className="px-6 pb-6 space-y-5 border-t border-slate-700/50 pt-5">
        {section.content && (
          <p className="text-gray-400 leading-relaxed text-sm">
            {section.content}
          </p>
        )}

        {section.bullets && section.bullets.length > 0 && (
          <ul className="space-y-2.5">
            {section.bullets.map((b, i) => (
              <BulletItem key={i} text={b} dot={dot} />
            ))}
          </ul>
        )}

        {section.subsections && section.subsections.length > 0 && (
          <div className="space-y-3">
            {section.subsections.map((sub, i) => (
              <SubSectionCard key={i} sub={sub} dot={dot} bar={bar} />
            ))}
          </div>
        )}
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
    <section className="max-w-4xl mx-auto my-10 rounded-2xl border border-slate-700/60 bg-slate-900 shadow-2xl shadow-black/40 overflow-hidden">
      {/* ── Header ── */}
      <div className="relative bg-linear-to-br from-blue-950 via-indigo-950 to-purple-950 px-8 py-10 overflow-hidden">
        {/* decorative blur blobs */}
        <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />

        <div className="relative">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-purple-300/70 mb-3">
            Course Material
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
            {data.title}
          </h2>
          <p className="mt-4 text-slate-300 leading-relaxed text-sm sm:text-base max-w-2xl">
            {data.overview}
          </p>
        </div>
      </div>

      {/* ── Week pills legend ── */}
      <div className="flex flex-wrap gap-3 px-8 py-4 bg-slate-800/50 border-b border-slate-700/50">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-blue-900/50 text-blue-300 border border-blue-700/50">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block" />
          Week 5 — JavaScript Deep Dive
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-emerald-900/50 text-emerald-300 border border-emerald-700/50">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
          Week 6 — React + Tailwind CSS
        </span>
      </div>

      {/* ── Sections ── */}
      <div className="px-6 py-8 space-y-3">
        {data.sections.map((section, i) => (
          <SectionBlock key={i} section={section} index={i} />
        ))}

        {/* ── Assessment ── */}
        <div className="mt-8 rounded-2xl border border-purple-700/50 bg-purple-950/30 overflow-hidden">
          <div className="flex items-center gap-3 px-6 py-4 bg-purple-900/30 border-b border-purple-700/40">
            <span className="text-xl">📝</span>
            <h3 className="text-base font-semibold text-purple-200">
              Assessment
            </h3>
          </div>
          <p className="px-6 py-5 text-gray-300 leading-relaxed text-sm">
            {data.assessment}
          </p>
        </div>

        {/* ── Support Resources ── */}
        {data.supportResources.length > 0 && (
          <div className="mt-4 rounded-2xl border border-slate-700/60 bg-slate-800/40 overflow-hidden">
            <div className="flex items-center gap-3 px-6 py-4 bg-slate-800 border-b border-slate-700/50">
              <span className="text-xl">🔗</span>
              <h3 className="text-base font-semibold text-white">
                Support Resources
              </h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-0 divide-y divide-slate-700/40 sm:divide-y-0">
              {data.supportResources.map((res, i) => (
                <li key={i}>
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-5 py-3.5 text-sm text-purple-400 hover:text-purple-200 hover:bg-slate-700/40 transition-colors group"
                  >
                    <svg
                      className="w-3.5 h-3.5 shrink-0 opacity-50 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
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
