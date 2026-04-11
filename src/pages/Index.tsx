import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { BookOpen, BarChart3, Brain, HeartPulse, GraduationCap, Globe, Award, Users, FileText, Lightbulb } from "lucide-react";
import heroImage from "@/assets/hero-academic.jpg";

const highlights = [
  { icon: FileText, value: "80+", label: "Scholarly Publications" },
  { icon: Award, value: "VP", label: "IASE (Intl. Assoc. for Statistical Education)" },
  { icon: Users, value: "Council", label: "International Statistical Institute (ISI)" },
  { icon: Globe, value: "AvH", label: "Humboldt Foundation Professor" },
];

const focusAreas = [
  { icon: Brain, title: "Explainable AI (XAI)", desc: "Interpretable machine learning systems for accountable decision-making." },
  { icon: BarChart3, title: "Statistical Learning", desc: "Advanced methods under complex dependencies and high-dimensional settings." },
  { icon: Globe, title: "Civic Data Science", desc: "Data-driven solutions for democratic governance and public accountability." },
  { icon: HeartPulse, title: "Health Modeling", desc: "Malaria and public health analytics using statistical and ML approaches." },
  { icon: GraduationCap, title: "Data Science Education", desc: "Building global capacity through innovative training and curricula." },
  { icon: BookOpen, title: "Statistical Consulting", desc: "Expert consulting for research design, surveys, and policy analysis." },
];

const visionItems = [
  "AI for public good and societal well-being",
  "Interpretable machine learning for transparent governance",
  "Data-driven policy and democratic accountability",
  "Global capacity building in statistics and data science",
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Academic conference" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/60" />
      </div>
      <div className="relative section-container py-20 md:py-32">
        <div className="max-w-2xl">
          <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 animate-fade-in">Professor of Statistics & Data Science</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Advancing Statistics, Data Science, and Explainable AI for Global Impact
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Professor Olushina Olawale Awe is a globally recognized statistician and data scientist working at the intersection of machine learning, civic engagement, and interpretable AI.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" variant="hero">
              <Link to="/research">View Research</Link>
            </Button>
            <Button asChild size="lg" variant="hero-outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link to="/consulting">Collaborate</Link>
            </Button>
            <Button asChild size="lg" variant="hero-outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link to="/talks">Invite as Speaker</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Highlights */}
    <section className="bg-card border-b border-border">
      <div className="section-container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((h) => (
            <div key={h.label} className="text-center">
              <h.icon className="mx-auto mb-2 text-accent" size={28} />
              <div className="text-2xl font-heading font-bold text-foreground">{h.value}</div>
              <div className="text-xs text-muted-foreground mt-1 leading-tight">{h.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Focus Areas */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeading title="Research Focus Areas" subtitle="Driving innovation at the intersection of statistics, AI, and societal impact." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((a) => (
            <div key={a.title} className="card-elevated p-6 group">
              <a.icon className="text-accent mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{a.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Vision */}
    <section className="section-padding bg-primary">
      <div className="section-container text-center">
        <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">Looking Ahead</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-8">Research Vision for the Next Decade</h2>
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {visionItems.map((v) => (
            <div key={v} className="flex items-start gap-3 text-left bg-primary-foreground/5 rounded-lg p-4 border border-primary-foreground/10">
              <Lightbulb className="text-accent shrink-0 mt-0.5" size={20} />
              <span className="text-primary-foreground/90 text-sm">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Banner */}
    <section className="section-padding bg-muted">
      <div className="section-container text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
          Partnering globally to build data-driven solutions for society
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Open to research collaborations, keynote speaking, consulting engagements, and institutional partnerships.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link to="/contact">Get in Touch</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
