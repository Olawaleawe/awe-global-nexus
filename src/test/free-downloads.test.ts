import { describe, expect, it } from "vitest";
import { freeMaterials } from "@/data/downloads";

describe("free downloads catalogue", () => {
  it("only offers the existing free lecture notes, white paper and CV, not paid books", () => {
    expect(freeMaterials.map(m => m.id)).toEqual(["machine-learning-foundations", "sentinelpay", "academic-cv"]);
    expect(freeMaterials.some(m => /quietly-magnetic|the-complete-manager|the-price-of-becoming-great/.test(m.url))).toBe(false);
  });

  it("serves the lecture notes as a downloadable PDF under a clear filename", () => {
    const notes = freeMaterials.find(m => m.id === "machine-learning-foundations");
    expect(notes?.format).toBe("PDF");
    expect(notes?.url).toBe("/Machine-Learning-Foundations-Prof-Olushina-Olawale-Awe.pdf");
    expect(notes?.filename).toBe("Machine-Learning-Foundations-Prof-Olushina-Olawale-Awe.pdf");
  });
});