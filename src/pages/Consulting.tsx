import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import { BarChart3, Brain, HeartPulse, FileSearch, CheckCircle } from "lucide-react";

const services = [
  { icon: BarChart3, title: "Data Science Consulting", desc: "End-to-end analytics solutions from data collection strategy to predictive modeling and visualization." },
  { icon: FileSearch, title: "Research Design & Statistical Modeling", desc: "Expert guidance on study design, sampling methodology, and advanced statistical analysis." },
  { icon: Brain, title: "AI for Public Policy", desc: "Interpretable AI systems for government decision-making, transparency, and accountability." },
  { icon: HeartPulse, title: "Health Analytics", desc: "Epidemiological modeling, health system optimization, and disease surveillance analytics." },
];

const impacts = [
  "National health survey design and analysis for multiple African countries",
  "AI governance frameworks adopted by public institutions",
  "Statistical consulting for international development organizations",
  "Capacity building programs reaching thousands of researchers globally",
];

const Consulting = () => (
  <div>
    <SEO
      title="Consulting | Data Science, AI & Health Analytics — Prof. Olushina O. Awe"
      description="Statistical and data science consulting by Prof. Olushina O. Awe: research design, AI for public policy, health analytics and capacity building for global institutions."
      path="/consulting"
    />
    <section className="bg-primary section-padding">
      <div className="section-container text-center">
        <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">Services</p>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Consulting & Collaboration</h1>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
          Expert statistical and data science consulting for research, policy, and organizational impact.
        </p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeading title="Services" />
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="card-elevated p-6">
              <s.icon className="text-accent mb-3" size={28} />
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted">
      <div className="section-container">
        <SectionHeading title="Impact & Track Record" />
        <div className="max-w-2xl mx-auto space-y-3">
          {impacts.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle className="text-accent shrink-0 mt-0.5" size={18} />
              <span className="text-foreground text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-primary">
      <div className="section-container text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
          Let's collaborate on impactful data-driven solutions
        </h2>
        <Button asChild size="lg" variant="hero">
          <Link to="/contact">Start a Conversation</Link>
        </Button>
      </div>
    </section>
  </div>
);

export default Consulting;
