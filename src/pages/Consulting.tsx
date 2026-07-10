import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SEO from "@/components/SEO";
import { BarChart3, Cpu, GraduationCap, FileText, Users, Mic } from "lucide-react";
import { toast } from "sonner";

const credentials = ["PStat® (ASA)", "CStat (RSS)", "Fellow RSS", "ISI Council Member", "AvH Foundation Visiting Professor"];

const services = [
  { icon: BarChart3, title: "Statistical Consulting", body: "Research design, hypothesis testing, regression modelling, Bayesian methods, time series analysis, and biostatistics for academic and industry clients. Ideal for PhD researchers, clinical teams, and policy institutions." },
  { icon: Cpu, title: "Machine Learning and Explainable AI", body: "Model development, interpretability (SHAP, LIME), fairness auditing, and deployment guidance. Grounded in the ICARM framework for responsible, civic-accountable machine learning." },
  { icon: GraduationCap, title: "Data Science Capacity Building", body: "Customised workshops, short courses, and curriculum design in R, Python, and applied ML for universities, research labs, and government agencies. Delivered in person or online." },
  { icon: FileText, title: "Grant Writing and Proposal Review", body: "Strategic support for DFG, ERC, NIH, USAID, and World Bank proposals — from concept development to methods sections and budget justification. Track record across six funding agencies." },
  { icon: Users, title: "Graduate Supervision and Mentorship", body: "MSc and PhD supervision in statistics, data science, and machine learning. 14 graduate theses supervised across AIMS Cameroon, AIMS Senegal, and Nigerian universities." },
  { icon: Mic, title: "Keynote and Invited Talks", body: "Talks on interpretable AI, civic data science, statistics education, and responsible machine learning for conferences, universities, and corporate events. 30+ international invited talks to date." },
];

const partners = ["Human Sciences Research Council", "Federal University of Bahia", "AIMS Network", "Virginia Tech", "University of Colorado Boulder", "ISI", "IASE", "ASA", "RSS"];

const NAVY = "#003865";
const GOLD = "#c8a84b";

const Consulting = () => {
  const [form, setForm] = useState({ name: "", org: "", country: "", type: "", description: "", timeline: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.description.trim()) {
      toast.error("Please complete the required fields.");
      return;
    }
    const subject = encodeURIComponent(`Consulting enquiry — ${form.type || "General"} — ${form.name}`);
    const body = encodeURIComponent(
      `Full name: ${form.name}\nOrganisation: ${form.org}\nCountry: ${form.country}\nType of enquiry: ${form.type}\nPreferred timeline: ${form.timeline}\n\nProject description:\n${form.description}`
    );
    window.location.href = `mailto:olawaleawe@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Opening your email client to send the enquiry.");
  };

  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif" }} className="bg-white text-[#1a1a1a]">
      <SEO
        title="Consulting Services | Prof. Olushina Olawale Awe"
        description="Statistical and data science consulting by Prof. Olushina Olawale Awe — research design, explainable AI, training, grant support, and supervision for institutions worldwide."
        path="/consulting"
      />

      {/* 1. Hero */}
      <section style={{ backgroundColor: NAVY }} className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-5">
            Statistical and Data Science Consulting
          </h1>
          <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto" style={{ color: GOLD }}>
            Two decades of rigorous expertise, available to research teams, institutions, and organisations worldwide.
          </p>
          <a
            href="#consultation-form"
            className="inline-block px-8 py-3 text-sm font-semibold tracking-wide text-white transition-colors"
            style={{ backgroundColor: GOLD, borderRadius: 4, color: NAVY }}
          >
            Request a Consultation
          </a>
        </div>
      </section>

      {/* 2. Credentials bar */}
      <section className="bg-[#f3f4f6] py-5">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs md:text-sm font-medium text-[#1a1a1a]">
          {credentials.map((c, i) => (
            <span key={c} className="flex items-center gap-3">
              <span>{c}</span>
              {i < credentials.length - 1 && <span style={{ color: GOLD }}>|</span>}
            </span>
          ))}
        </div>
      </section>

      {/* 3. Services grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12" style={{ color: NAVY }}>Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white p-7 transition-transform duration-200 hover:-translate-y-1"
                style={{ border: `1px solid ${NAVY}`, borderTop: `4px solid ${GOLD}`, borderRadius: 4 }}
              >
                <s.icon size={28} style={{ color: NAVY }} className="mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold mb-3" style={{ color: NAVY }}>{s.title}</h3>
                <p className="text-sm leading-relaxed text-[#4a4a4a] text-justify">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why work with me */}
      <section className="py-16 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 md:gap-0">
          {[
            { num: "100+", title: "peer-reviewed publications", sub: "Springer, Elsevier, Wiley, Taylor and Francis, Cambridge University Press." },
            { num: "9,400+", title: "researchers served across 15 countries", sub: "Via LISA 2020 Global Network, University of Colorado Boulder." },
            { num: "3", title: "continents of credentials", sub: "PStat (USA), CStat (UK), AvH Fellowship (Germany)." },
          ].map((c, i) => (
            <div
              key={c.title}
              className={`px-6 text-center ${i > 0 ? "md:border-l" : ""}`}
              style={{ borderColor: `${NAVY}33` }}
            >
              <div className="text-5xl font-semibold mb-3" style={{ color: GOLD }}>{c.num}</div>
              <div className="text-base font-semibold mb-2" style={{ color: NAVY }}>{c.title}</div>
              <p className="text-sm text-[#666] text-justify">{c.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Partners strip */}
      <section className="py-12 bg-white border-y" style={{ borderColor: "#e5e5e5" }}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-widest text-[#888] mb-4" style={{ letterSpacing: "0.15em" }}>Institutions worked with</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[#888]">
            {partners.map((p, i) => (
              <span key={p}>
                {p}{i < partners.length - 1 && <span className="ml-6">·</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Rates */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12" style={{ color: NAVY }}>Rates and Engagement</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Academic and NGO Rate", price: "From €120/hour", body: "Includes universities, research institutes, non-profits, and public sector organisations. Packages available for longer engagements." },
              { title: "Corporate and Industry Rate", price: "From €250/hour", body: "Includes pharmaceutical, fintech, energy, and private sector clients. Retainer arrangements welcome." },
            ].map((r) => (
              <div key={r.title} className="p-8" style={{ border: `1px solid ${NAVY}`, borderTop: `4px solid ${GOLD}`, borderRadius: 4 }}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: NAVY }}>{r.title}</h3>
                <p className="text-2xl font-semibold mb-4" style={{ color: GOLD }}>{r.price}</p>
                <p className="text-sm leading-relaxed text-[#4a4a4a] text-justify">{r.body}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-sm italic text-[#777]">
            All engagements begin with a free 30-minute scoping call. Rates quoted in EUR; USD and GBP equivalents available on request.
          </p>
        </div>
      </section>

      {/* 7. Contact form */}
      <section id="consultation-form" className="py-20" style={{ backgroundColor: "#f7f8fa" }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-2" style={{ color: NAVY }}>Request a Consultation</h2>
          <p className="text-center text-sm text-[#666] mb-10">Tell us about your project. We respond within 48 hours.</p>

          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-8" style={{ border: `1px solid ${NAVY}33`, borderRadius: 4 }}>
            <div className="grid md:grid-cols-2 gap-4">
              <Input placeholder="Full name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={{ borderRadius: 4 }} />
              <Input placeholder="Organisation" value={form.org} onChange={(e) => setForm({ ...form, org: e.target.value })} style={{ borderRadius: 4 }} />
            </div>
            <Input placeholder="Country" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} style={{ borderRadius: 4 }} />

            <Select value={form.type} onValueChange={(v) => setForm({ ...form, type: v })}>
              <SelectTrigger style={{ borderRadius: 4 }}><SelectValue placeholder="Type of enquiry" /></SelectTrigger>
              <SelectContent>
                {["Statistical Consulting","ML and AI","Training and Workshops","Grant Support","Supervision","Speaking","Other"].map((o) => (
                  <SelectItem key={o} value={o}>{o}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Textarea placeholder="Brief description of your project *" rows={5} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} style={{ borderRadius: 4 }} />

            <Select value={form.timeline} onValueChange={(v) => setForm({ ...form, timeline: v })}>
              <SelectTrigger style={{ borderRadius: 4 }}><SelectValue placeholder="Preferred timeline" /></SelectTrigger>
              <SelectContent>
                {["Urgent — within 2 weeks","1 month","3 months","Flexible"].map((o) => (
                  <SelectItem key={o} value={o}>{o}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <button
              type="submit"
              className="w-full py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:text-[#003865]"
              style={{ backgroundColor: NAVY, borderRadius: 4 }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = GOLD; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = NAVY; }}
            >
              Submit Enquiry
            </button>
          </form>

          <div className="mt-10 text-center text-sm text-[#444] space-y-1">
            <p>Email: <a href="mailto:olushina.awe@ph-ludwigsburg.de" className="underline" style={{ color: NAVY }}>olushina.awe@ph-ludwigsburg.de</a></p>
            <p>Email: <a href="mailto:olawaleawe@gmail.com" className="underline" style={{ color: NAVY }}>olawaleawe@gmail.com</a></p>
            <p>Mobile: <a href="tel:+4915203693944" className="underline" style={{ color: NAVY }}>+49 152 03693944</a></p>
            <p>Website: <a href="https://www.olawaleawe.org" className="underline" style={{ color: NAVY }}>www.olawaleawe.org</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/o-olawale-awe" className="underline" style={{ color: NAVY }}>linkedin.com/in/O.Olawale Awe</a></p>
          </div>
        </div>
      </section>

      {/* 8. Footer note */}
      <section className="py-10 bg-white">
        <p className="text-center text-sm italic text-[#777] max-w-2xl mx-auto px-6">
          Prof. Awe is based at PH Ludwigsburg University of Education, Germany, and consults globally. Response within 48 hours.
        </p>
      </section>
    </div>
  );
};

export default Consulting;
