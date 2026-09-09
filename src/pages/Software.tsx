import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import { Settings, FileCheck, Database, Code2, LineChart, Globe, Quote, Github, Package, ExternalLink } from "lucide-react";
import toolsGraphic from "@/assets/olawale-statistical-tools.png.asset.json";

type Pkg = {
  name: string;
  desc: string;
  cran?: string;
  pypi?: string;
  github?: string;
};

const rPackages: Pkg[] = [
  {
    name: "civic.icarm",
    desc: "Tools for civic data analysis, governance metrics, and evidence-based decision making.",
    cran: "https://cran.r-project.org/package=civic.icarm",
    github: "https://github.com/Olawaleawe/civic.icarm",
  },
  {
    name: "icarm",
    desc: "Interpretable, contextual, accountable and responsible machine learning workflows.",
    cran: "https://cran.r-project.org/package=icarm",
    github: "https://github.com/Olawaleawe/icarm",
  },
  {
    name: "arimasel",
    desc: "Automated ARIMA model selection, diagnostics, and forecasting.",
    github: "https://github.com/Olawaleawe/arimasel",
  },
  {
    name: "awe",
    desc: "Utility functions and datasets for teaching, learning, and applied statistics.",
    github: "https://github.com/Olawaleawe/awe",
  },
];

const pythonPackages: Pkg[] = [
  {
    name: "icarm",
    desc: "Python tools for interpretable and responsible machine learning.",
    pypi: "https://pypi.org/project/icarm/",
    github: "https://github.com/Olawaleawe/icarm-python",
  },
  {
    name: "awe-ml",
    desc: "Analyze, Wrap, Explain: end-to-end exploratory analysis, model selection, tuning and explainable ML.",
    pypi: "https://pypi.org/project/awe-ml/",
    github: "https://github.com/Olawaleawe/awe-ml",
  },
  {
    name: "arimasel",
    desc: "Seasonal ARIMA identification, selection, cross-validation and time series exploration.",
    pypi: "https://pypi.org/project/arimasel/",
    github: "https://github.com/Olawaleawe/arimasel-py",
  },
];

const PkgLinks = ({ p }: { p: Pkg }) => (
  <div className="flex flex-wrap gap-3 mt-3">
    {p.cran && (
      <a
        href={p.cran}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-accent underline underline-offset-4"
      >
        <Package size={14} /> CRAN <ExternalLink size={11} />
      </a>
    )}
    {p.pypi && (
      <a
        href={p.pypi}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-accent underline underline-offset-4"
      >
        <Package size={14} /> PyPI <ExternalLink size={11} />
      </a>
    )}
    {p.github && (
      <a
        href={p.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-accent underline underline-offset-4"
      >
        <Github size={14} /> GitHub <ExternalLink size={11} />
      </a>
    )}
  </div>
);


const whyItems = [
  { icon: Settings, title: "Built by a Researcher", desc: "for researchers and practitioners" },
  { icon: FileCheck, title: "Well Documented", desc: "and easy to use" },
  { icon: Database, title: "Reliable & Efficient", desc: "and continuously improved" },
  { icon: Code2, title: "Open Source", desc: "and community driven" },
  { icon: LineChart, title: "Applied in Practice", desc: "in real research and industry" },
];

const Software = () => (
  <div>
    <SEO
      title="Software & Open-Source Tools | Prof. Olushina Olawale Awe"
      description="R and Python packages by Prof. Olushina Olawale Awe: civic.icarm, icarm, arimasel, awe, and awe-ml. Open-source statistical tools for research, analytics, and real-world solutions."
      path="/software"
    />

    {/* Hero */}
    <section className="bg-primary section-padding">
      <div className="section-container text-center">
        <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">Open-Source Software</p>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
          Statistical Tools. Smarter Analysis. Greater Impact.
        </h1>
        <p className="text-primary-foreground/75 text-lg max-w-2xl mx-auto">
          Innovative R and Python packages for research, analytics, and real-world solutions.
        </p>
      </div>
    </section>

    {/* Packages */}
    <section className="section-padding bg-background">
      <div className="section-container grid md:grid-cols-2 gap-8">
        <div>
          <div className="bg-primary text-primary-foreground rounded-t-xl px-6 py-4">
            <h2 className="font-heading font-bold text-xl">R Packages</h2>
            <p className="text-primary-foreground/70 text-sm">Powerful. Reliable. Reproducible.</p>
          </div>
          <div className="border border-border border-t-0 rounded-b-xl divide-y divide-border bg-card">
            {rPackages.map((p) => (
              <div key={p.name} className="p-5">
                <h3 className="font-heading font-semibold text-primary">{p.name}</h3>
                <p className="text-muted-foreground text-sm mt-1">{p.desc}</p>
                <PkgLinks p={p} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="bg-accent text-accent-foreground rounded-t-xl px-6 py-4">
            <h2 className="font-heading font-bold text-xl">Python Packages</h2>
            <p className="text-accent-foreground/80 text-sm">Flexible. Scalable. Intelligent.</p>
          </div>
          <div className="border border-border border-t-0 rounded-b-xl divide-y divide-border bg-card">
            {pythonPackages.map((p) => (
              <div key={p.name} className="p-5">
                <h3 className="font-heading font-semibold text-primary">{p.name}</h3>
                <p className="text-muted-foreground text-sm mt-1">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Why use */}
    <section className="section-padding bg-primary">
      <div className="section-container">
        <SectionHeading title="Why Use These Packages?" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {whyItems.map((w) => (
            <div key={w.title} className="text-center">
              <w.icon className="mx-auto text-accent mb-3" size={30} />
              <h3 className="font-heading font-semibold text-primary-foreground text-sm">{w.title}</h3>
              <p className="text-primary-foreground/70 text-xs mt-1">{w.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-primary-foreground/80 mt-12 max-w-xl mx-auto flex items-start justify-center gap-3">
          <Quote className="text-accent shrink-0 mt-1" size={20} />
          <span className="italic">Driving impact through statistics, data science, and open-source innovation.</span>
        </p>
      </div>
    </section>

    {/* Graphic */}
    <section className="section-padding bg-muted">
      <div className="section-container">
        <SectionHeading title="Explore, Use, and Contribute" subtitle="Open-source tools that empower data-driven decisions." />
        <figure className="max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-lg border border-border shadow-xl">
            <img
              src={toolsGraphic.url}
              alt="Statistical tools by O. Olawale Awe: R and Python packages including civic.icarm, icarm, arimasel, awe, and awe-ml"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <figcaption className="text-center text-sm text-muted-foreground mt-4 flex items-center justify-center gap-2">
            <Globe size={14} /> Explore the full toolkit at olawaleawe.org
          </figcaption>
        </figure>
      </div>
    </section>
  </div>
);

export default Software;
