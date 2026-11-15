import { describe, expect, it } from "vitest";
import { freeMaterials } from "@/data/downloads";

describe("free downloads catalogue", () => {
  it("only offers the existing free white paper and CV, not paid books", () => {
    expect(freeMaterials.map(m => m.id)).toEqual(["sentinelpay", "academic-cv"]);
    expect(freeMaterials.some(m => /quietly-magnetic|the-complete-manager|the-price-of-becoming-great/.test(m.url))).toBe(false);
  });
});