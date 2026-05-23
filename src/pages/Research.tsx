import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import { Brain, BarChart3, Globe, HeartPulse, ExternalLink } from "lucide-react";

const themes = [
  { icon: Brain, title: "Explainable AI & Interpretable ML", desc: "Developing transparent, human-understandable machine learning models for high-stakes decision-making in governance and public policy." },
  { icon: BarChart3, title: "Statistical Learning Under Complex Dependencies", desc: "Novel methods for time series, spatial data, and high-dimensional inference with real-world structural constraints." },
  { icon: Globe, title: "Civic & Democratic Data Science", desc: "Using data analytics to strengthen democratic institutions, electoral processes, and governmental accountability." },
  { icon: HeartPulse, title: "Health & Malaria Modeling", desc: "Statistical approaches to disease surveillance, epidemiological modeling, and health system optimization." },
];

const publications = [
  { title: "Interpretable Machine Learning for Civic Governance: A Framework for Accountable AI", journal: "Journal of Statistical Computation and Simulation", year: 2024 },
  { title: "Robust Time Series Forecasting Under Non-Gaussian Dependencies", journal: "Computational Statistics & Data Analysis", year: 2023 },
  { title: "Statistical Capacity Building in Sub-Saharan Africa: The LISA 2020 Model", journal: "Statistical Journal of the IAOS", year: 2023 },
  { title: "Explainable Ensemble Methods for Malaria Incidence Prediction", journal: "BMC Medical Informatics", year: 2022 },
  { title: "Human-in-the-Loop Statistical Learning for Democratic Data Systems", journal: "Data & Policy (Cambridge)", year: 2022 },
];

const Research = () => (
  <div>
    <SEO
      title="Research | Explainable AI, Statistical Learning — Prof. Awe"
      description="Research themes and publications of Prof. Olawale Awe: explainable AI, statistical learning under complex dependencies, civic data science, and health & malaria modeling."
      path="/research"
    />
    <section className="bg-primary section-padding">
      <div className="section-container text-center">
        <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">Research</p>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Research & Publications</h1>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
          Rigorous statistical theory meeting real-world societal challenges.
        </p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeading title="Research Themes" />
        <div className="grid md:grid-cols-2 gap-6">
          {themes.map((t) => (
            <div key={t.title} className="card-elevated p-6">
              <t.icon className="text-accent mb-3" size={28} />
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{t.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted">
      <div className="section-container">
        <SectionHeading title="Featured Publications" />
        <div className="max-w-3xl mx-auto space-y-4">
          {publications.map((p, i) => (
            <div key={i} className="card-elevated p-5 flex items-start gap-4">
              <span className="text-accent font-heading font-bold text-lg shrink-0">{p.year}</span>
              <div>
                <h4 className="font-semibold text-foreground text-sm mb-1">{p.title}</h4>
                <p className="text-muted-foreground text-xs italic">{p.journal}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="section-container text-center">
        <SectionHeading title="Profiles & Databases" />
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { label: "Google Scholar", href: "https://scholar.google.com/citations?user=_p_FZKcAAAAJ&hl=en" },
            { label: "ORCID", href: "https://orcid.org/0000-0002-0442-4519" },
            { label: "IDEAS / RePEc", href: "https://ideas.repec.org/e/paw23.html" },
            { label: "Humboldt Network", href: "https://www.humboldt-foundation.de/en/connect/explore-the-humboldt-network/singleview/1243593/prof-dr-olushina-olawale-awe" },
          ].map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 card-elevated px-5 py-3 text-sm font-medium text-foreground hover:text-accent transition-colors">
              {link.label} <ExternalLink size={14} />
            </a>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Research;
