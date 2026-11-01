import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";
import { Loader2, Sparkles, Mail } from "lucide-react";
import { toast } from "sonner";

interface Match {
  summary: string;
  expertise: { area: string; relevance: string }[];
  pathway: { stage: string; detail: string }[];
  funding: string[];
  firstStep: string;
}

const Collaborate = () => {
  const [form, setForm] = useState({ goals: "", field: "", org: "" });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Match | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.goals.trim().length < 20) {
      toast.error("Please describe your research goals in a bit more detail.");
      return;
    }
    setLoading(true);
    const { data, error } = await supabase.functions.invoke("collaboration-match", { body: form });
    setLoading(false);
    if (error || data?.error) {
      let msg = data?.error;
      try { msg = msg || (await (error as any)?.context?.json())?.error; } catch { /* ignore */ }
      toast.error(msg || "Could not generate suggestions. Please try again.");
      return;
    }
    setResult(data as Match);
  };

  const mailto = result
    ? `mailto:olawaleawe@gmail.com?subject=${encodeURIComponent("Collaboration proposal")}&body=${encodeURIComponent(
        `Research goals:\n${form.goals}\n\nSuggested pathway:\n${result.pathway.map((p, i) => `${i + 1}. ${p.stage}: ${p.detail}`).join("\n")}`
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
            Tell us about your research goals and receive suggestions on relevant expertise and how a partnership could take shape.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container max-w-3xl">
          <form onSubmit={submit} className="card-elevated p-6 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Input placeholder="Your field (e.g. epidemiology)" maxLength={120} value={form.field} onChange={(e) => setForm({ ...form, field: e.target.value })} />
              <Input placeholder="Organisation" maxLength={160} value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })} />
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
                      <div><p className="font-semibold text-foreground">{p.stage}</p><p className="text-sm text-muted-foreground">{p.detail}</p></div>
                    </li>
                  ))}
                </ol>
              </div>
              {result.funding.length > 0 && (
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Possible funding routes</h3>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">{result.funding.map((f) => <li key={f}>{f}</li>)}</ul>
                </div>
              )}
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
