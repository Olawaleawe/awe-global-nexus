import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MatchSchema, type Match } from "../../supabase/functions/collaboration-match/contracts";
import { fundingSources } from "../../supabase/functions/collaboration-match/funding";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";
import { Loader2, Sparkles, Mail, ExternalLink, Download } from "lucide-react";
import { toast } from "sonner";

const Collaborate = () => {
  const [form, setForm] = useState({ goals: "", field: "", org: "", country: "", careerStage: "" });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Match | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.goals.trim().length < 20) {
      toast.error("Please describe your research goals in a bit more detail.");
      return;
    }
    setLoading(true);
    setResult(null);
    try {
    const { data, error } = await supabase.functions.invoke("collaboration-match", { body: form });
    if (error || data?.error) {
      let msg = data?.error;
      try { if (!msg && error && "context" in error && error.context instanceof Response) msg = (await error.context.json())?.error; } catch { /* ignore */ }
      toast.error(msg || "Could not generate suggestions. Please try again.");
      return;
    }
    const parsed = MatchSchema.safeParse(data);
    if (!parsed.success || parsed.data.funding.some(f => !fundingSources.some(s => s.id === f.sourceId))) {
      toast.error("The plan could not be read. Please try again.");
      return;
    }
    setResult(parsed.data);
    } catch {
      toast.error("Could not generate suggestions. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const planText = result ? [
    result.summary,
    "COLLABORATION PATHWAY",
    ...result.pathway.map((p, i) => `${i + 1}. ${p.stage}: ${p.detail}`),
    "FUNDING AND APPLICATIONS",
    ...result.funding.map(f => {
      const source = fundingSources.find(s => s.id === f.sourceId);
      return `${source?.name}\n${f.fit}\nEligibility: ${f.eligibilityChecks.join("; ")}\n${f.applicationSteps.join("\n")}\n${source?.applicationUrl}`;
    }),
    "GRANT CONCEPT DRAFT (not submitted)",
    result.grantApplication.workingTitle,
    result.grantApplication.abstract,
    "Objectives", ...result.grantApplication.objectives,
    ...result.grantApplication.workPackages.map(w => `${w.title}: ${w.activities}\nDeliverable: ${w.deliverable}`),
    "Budget categories", ...result.grantApplication.budgetItems,
    "Documents to prepare", ...result.grantApplication.documents,
    "Questions to resolve", ...result.grantApplication.questions,
    "First step: " + result.firstStep,
    "Check current calls, deadlines and eligibility with the funder. No application has been submitted.",
  ].join("\n\n") : "";

  const downloadPlan = () => {
    const url = URL.createObjectURL(new Blob([planText], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "collaboration-grant-plan.txt";
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 30_000);
  };

  const mailto = result
    ? `mailto:olawaleawe@gmail.com?subject=${encodeURIComponent("Collaboration proposal")}&body=${encodeURIComponent(
        `Research goals:\n${form.goals}\n\n${result.summary}\n\nFirst step: ${result.firstStep}\n\nI would like to discuss the collaboration and grant plan.`
      )}`
    : "";

  return (
    <div>
      <SEO
        title="Collaborate | Prof. Olushina O. Awe"
        description="Describe your research goals and get suggested areas of expertise and a tailored collaboration pathway with Prof. Olushina O. Awe."
        path="/collaborate"
      />
      <section className="bg-primary section-padding">
        <div className="section-container text-center">
          <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">Collaborate</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Find Your Collaboration Pathway</h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Describe your research goals for a collaboration pathway, relevant funding programmes and a grant concept draft.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container max-w-3xl">
          <form onSubmit={submit} className="card-elevated p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Input placeholder="Your field (e.g. epidemiology)" maxLength={120} value={form.field} onChange={(e) => setForm({ ...form, field: e.target.value })} />
              <Input placeholder="Organisation" maxLength={160} value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })} />
              <div className="space-y-2"><Label htmlFor="country">Country of your institution (optional)</Label><Input id="country" placeholder="e.g. Ghana" maxLength={120} value={form.country} onChange={e => setForm({ ...form, country: e.target.value })} /></div>
              <div className="space-y-2"><Label htmlFor="career-stage">Role / career stage (optional)</Label><Input id="career-stage" placeholder="e.g. PhD student, postdoctoral researcher" maxLength={120} value={form.careerStage} onChange={e => setForm({ ...form, careerStage: e.target.value })} /></div>
            </div>
            <Textarea rows={6} maxLength={3000} placeholder="Describe your research goals, data, questions, and what you hope to achieve *" value={form.goals} onChange={(e) => setForm({ ...form, goals: e.target.value })} />
            <Button type="submit" variant="hero" className="w-full" disabled={loading}>
              {loading ? <><Loader2 className="animate-spin" /> Analysing your goals...</> : <><Sparkles /> Suggest a pathway</>}
            </Button>
            <p className="text-xs text-muted-foreground text-center">Suggestions are generated automatically and are a starting point for discussion, not a commitment.</p>
          </form>

          {result && (
            <div className="mt-10 space-y-8">
              <p className="text-foreground leading-relaxed">{result.summary}</p>
              <div>
                <SectionHeading title="Relevant Expertise" />
                <div className="grid md:grid-cols-2 gap-4">
                  {result.expertise.map((x) => (
                    <div key={x.area} className="card-elevated p-5">
                      <h3 className="font-heading font-semibold text-foreground mb-1">{x.area}</h3>
                      <p className="text-sm text-muted-foreground">{x.relevance}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <SectionHeading title="Suggested Pathway" />
                <ol className="space-y-4">
                  {result.pathway.map((p, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="flex-none h-8 w-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-semibold">{i + 1}</span>
                      <div><p className="font-semibold text-foreground">{p.stage.replace(/^\s*\d+[.)]\s*/, "")}</p><p className="text-sm text-muted-foreground">{p.detail}</p></div>
                    </li>
                  ))}
                </ol>
              </div>
              {result.funding.length > 0 && (
                <div className="space-y-4">
                  <SectionHeading title="Funding & Grant Applications" />
                  <p className="text-sm text-muted-foreground">Check current calls, deadlines and eligibility on the official websites. A recommendation does not establish eligibility or an open call.</p>
                  {result.funding.map(f => {
                    const source = fundingSources.find(s => s.id === f.sourceId);
                    if (!source) return null;
                    return <article key={f.sourceId} className="card-elevated p-5 space-y-3">
                      <h3 className="font-heading font-semibold text-foreground">{source.name}</h3>
                      <p className="text-sm text-foreground">{f.fit}</p>
                      <p className="text-sm text-muted-foreground">{source.eligibility}</p>
                      <h4 className="text-sm font-semibold">Eligibility to confirm</h4>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">{f.eligibilityChecks.map((item, i) => <li key={i}>{item}</li>)}</ul>
                      <h4 className="text-sm font-semibold">Application steps</h4>
                      <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-1">{f.applicationSteps.map((item, i) => <li key={i}>{item}</li>)}</ol>
                      <div className="flex flex-wrap gap-2">
                        <Button asChild variant="outline" size="sm"><a href={source.programmeUrl} target="_blank" rel="noopener noreferrer"><ExternalLink /> Programme details</a></Button>
                        <Button asChild variant="outline" size="sm"><a href={source.applicationUrl} target="_blank" rel="noopener noreferrer"><ExternalLink /> Official application portal</a></Button>
                      </div>
                    </article>;
                  })}
                </div>
              )}
              <section className="space-y-5 border-t border-border pt-8">
                <SectionHeading title="Grant Concept Draft" />
                <p className="text-sm text-muted-foreground">Draft for discussion, not a completed or submitted application. Confirm the funder's format and requirements before applying.</p>
                <h3 className="font-heading text-xl font-semibold">{result.grantApplication.workingTitle}</h3>
                <p className="text-foreground leading-relaxed">{result.grantApplication.abstract}</p>
                <h4 className="font-semibold">Research objectives</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">{result.grantApplication.objectives.map((item, i) => <li key={i}>{item}</li>)}</ul>
                <h4 className="font-semibold">Work packages</h4>
                {result.grantApplication.workPackages.map((w, i) => <div key={i} className="border-l-2 border-accent pl-4 space-y-1"><h5 className="font-semibold">{w.title}</h5><p className="text-sm text-muted-foreground">{w.activities}</p><p className="text-sm"><span className="font-semibold">Deliverable:</span> {w.deliverable}</p></div>)}
                {([
                  ["Budget categories", result.grantApplication.budgetItems],
                  ["Documents to prepare", result.grantApplication.documents],
                  ["Questions to resolve", result.grantApplication.questions],
                ] as const).map(([title, items]) => <div key={title}><h4 className="font-semibold mb-2">{title}</h4><ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">{items.map((item, i) => <li key={i}>{item}</li>)}</ul></div>)}
                <Button variant="outline" onClick={downloadPlan}><Download /> Download grant plan</Button>
              </section>
              <div className="card-elevated p-5 text-center space-y-3">
                <p className="text-foreground"><span className="font-semibold">First step:</span> {result.firstStep}</p>
                <Button asChild variant="hero"><a href={mailto}><Mail /> Send this to Prof. Awe</a></Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Collaborate;
