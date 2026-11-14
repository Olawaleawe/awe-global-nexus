import { z } from "zod";

export const RequestSchema = z.object({
  goals: z.string().trim().min(20).max(3000),
  field: z.string().trim().max(120).default(""),
  org: z.string().trim().max(160).default(""),
  country: z.string().trim().max(120).default(""),
  careerStage: z.string().trim().max(120).default(""),
});

export const MatchSchema = z.object({
  summary: z.string(),
  expertise: z.array(z.object({ area: z.string(), relevance: z.string() })),
  pathway: z.array(z.object({ stage: z.string(), detail: z.string() })),
  funding: z.array(z.object({
    sourceId: z.string(),
    fit: z.string(),
    eligibilityChecks: z.array(z.string()),
    applicationSteps: z.array(z.string()),
  })).max(3),
  grantApplication: z.object({
    workingTitle: z.string(),
    abstract: z.string(),
    objectives: z.array(z.string()),
    workPackages: z.array(z.object({ title: z.string(), activities: z.string(), deliverable: z.string() })),
    budgetItems: z.array(z.string()),
    documents: z.array(z.string()),
    questions: z.array(z.string()),
  }),
  firstStep: z.string(),
});

export type Match = z.infer<typeof MatchSchema>;