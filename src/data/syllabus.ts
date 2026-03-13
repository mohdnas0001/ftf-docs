/* ------------------------------------------------------------------ */
/*  Syllabus - Main Export                                             */
/* ------------------------------------------------------------------ */

// Re-export types for consumers
export type {
  SubSection,
  Section,
  SupportResource,
  WeekData,
} from "./types";

// Import week data
import { week1, week3, week4 } from "./weeks";
import type { WeekData } from "./types";

/* ------------------------------------------------------------------ */
/*  Course data                                                        */
/* ------------------------------------------------------------------ */

export const syllabus: WeekData[] = [week1, week3, week4];
