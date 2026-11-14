export interface FundingSource {
  id: string;
  name: string;
  programmeUrl: string;
  applicationUrl: string;
  focus: string;
  eligibility: string;
}

// Official programme references checked November 2026. These are not live call listings.
export const fundingSources: FundingSource[] = [
  {
    id: "dfg-research-grants",
    name: "DFG Research Grants",
    programmeUrl: "https://www.dfg.de/en/research-funding/funding-opportunities/programmes/individual/research-grants",
    applicationUrl: "https://elan.dfg.de/dana",
    focus: "Investigator-led statistics, machine learning, health and education research with a German applicant.",
    eligibility: "Confirm an eligible doctorate-qualified applicant working in the German research system. Overseas collaboration does not automatically qualify for DFG funding. Use the current DFG proposal guidelines and elan instructions.",
  },
  {
    id: "erc-advanced",
    name: "ERC Advanced Grant",
    programmeUrl: "https://erc.europa.eu/apply-grant/advanced-grant",
    applicationUrl: "https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/home",
    focus: "High-risk frontier statistics or explainable AI led by an established research leader.",
    eligibility: "Requires an eligible EU or associated-country host and evidence of significant research leadership. A professorship alone does not establish eligibility. Single-principal-investigator funding, not an equal-partner consortium grant; check the current call and commitment rules.",
  },
  {
    id: "horizon-europe",
    name: "Horizon Europe collaborative research",
    programmeUrl: "https://research-and-innovation.ec.europa.eu/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-europe_en",
    applicationUrl: "https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/home",
    focus: "Topic-specific health, civic/education and digital research, especially Clusters 1, 2 and 4.",
    eligibility: "Select a specific topic before proposing a consortium. Partner numbers, countries and funding conditions depend on that topic. Brazilian participation does not automatically bring EU funding; confirm any separate co-funding and all country eligibility.",
  },
  {
    id: "humboldt-fellowship",
    name: "Humboldt Research Fellowship",
    programmeUrl: "https://www.humboldt-foundation.de/en/apply/sponsorship-programmes/humboldt-research-fellowship",
    applicationUrl: "https://www.my.humboldt-foundation.de/",
    focus: "Individual research stays in Germany for international postdoctoral or experienced researchers.",
    eligibility: "Check doctorate-date, nationality and residence conditions, including applicable exceptions. Normally within four years of doctorate for postdocs or twelve for experienced researchers. Requires a German host; funds the fellow's research stay, not a consortium. Do not assume Prof. Awe personally qualifies.",
  },
  {
    id: "daad-research-stays",
    name: "DAAD Research Stays for University Academics and Scientists",
    programmeUrl: "https://www.research-in-germany.org/research-funding/funding-programmes/daad-research-stays-for-university-academics-and-scientists.html",
    applicationUrl: "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/",
    focus: "Short visits to Germany for joint methods development, analysis and preparing larger collaborations.",
    eligibility: "Generally for doctorate-qualified academics employed in their home country with an agreed German host. Select the applicant's country in the scholarship database for the current conditions and application entry. This is a visit award, not a full research project grant.",
  },
  {
    id: "nih-r01",
    name: "NIH Research Project Grant (R01)",
    programmeUrl: "https://grants.nih.gov/grants/guide/pa-files/PA-25-301.html",
    applicationUrl: "https://public.era.nih.gov/assist",
    focus: "Biomedical or public-health research, such as malaria modelling and clinically relevant explainable AI. The linked Parent R01 does not allow clinical trials.",
    eligibility: "Verify current notice status, participating institute, foreign-institution eligibility and clinical-trial restrictions with NIH. Foreign applicants need detailed rather than modular budgets. Do not assume a traditional funded foreign subaward is permitted under current international collaboration policies.",
  },
];

export function hasVerifiedFundingIds(ids: string[]): boolean {
  return ids.every(id => fundingSources.some(source => source.id === id)) && new Set(ids).size === ids.length;
}