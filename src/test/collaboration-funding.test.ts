import { describe, expect, it } from "vitest";
import { hasVerifiedFundingIds, fundingSources } from "../../supabase/functions/collaboration-match/funding";
import { RequestSchema, MatchSchema } from "../../supabase/functions/collaboration-match/contracts";

describe("verified collaboration funding", () => {
  it("rejects invented funding sources", () => {
    expect(hasVerifiedFundingIds(["dfg-research-grants", "invented-grant"])).toBe(false);
    expect(hasVerifiedFundingIds(["dfg-research-grants", "erc-advanced"])).toBe(true);
  });
  it("rejects repeated recommendations", () => {
    expect(hasVerifiedFundingIds(["nih-r01", "nih-r01"])).toBe(false);
  });
  it("uses official DFG and EU application destinations", () => {
    expect(fundingSources.find(s => s.id === "dfg-research-grants")?.applicationUrl).toBe("https://elan.dfg.de/dana");
    expect(fundingSources.find(s => s.id === "erc-advanced")?.applicationUrl).toBe("https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/home");
  });
  it("bounds optional applicant context before generation", () => {
    expect(RequestSchema.safeParse({ goals: "A".repeat(20), country: "A".repeat(121) }).success).toBe(false);
    expect(RequestSchema.safeParse({ goals: "A".repeat(20), country: "Ghana" }).success).toBe(true);
  });
  it("requires a structured grant draft, not legacy funding strings", () => {
    expect(MatchSchema.safeParse({ summary: "Research", expertise: [], pathway: [], funding: ["DFG"], firstStep: "Discuss" }).success).toBe(false);
  });
});