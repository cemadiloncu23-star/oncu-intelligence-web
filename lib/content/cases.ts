export type CaseStudy = {
  slug: string;
  title: string;
  sector: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
};

/** Gerçek müşteri vakaları (izin sonrası) buraya eklenir — örnek senaryo içeriği yok. */
export const caseStudies: CaseStudy[] = [];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
