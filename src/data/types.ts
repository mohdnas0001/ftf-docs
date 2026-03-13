/* ------------------------------------------------------------------ */
/*  Shared Types for Syllabus Data                                     */
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
