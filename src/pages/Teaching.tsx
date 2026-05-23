import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import { BookOpen, Code, BarChart3, Globe, Quote } from "lucide-react";

const courses = [
  { icon: Code, title: "Data Science", desc: "Comprehensive curriculum covering data wrangling, visualization, and machine learning pipelines." },
  { icon: BarChart3, title: "Machine Learning", desc: "From supervised learning to deep neural networks, with emphasis on interpretability." },
  { icon: BookOpen, title: "Statistical Modeling", desc: "Regression, Bayesian methods, time series analysis, and generalized linear models." },
  { icon: Globe, title: "Civic Data Science", desc: "Applying data science to democratic governance, election analytics, and public policy." },
];

const programs = [
  { title: "MicroMasters (ADA Global Academy)", desc: "Structured online programs providing graduate-level data science credentials to learners worldwide." },
  { title: "Intensive Workshops", desc: "Short-term, hands-on training in R, Python, and statistical software for researchers and practitioners." },
  { title: "Bootcamps", desc: "Accelerated programs designed for professionals transitioning into data science careers." },
];

const Teaching = () => (
  <div>
    <section className="bg-primary section-padding">
      <div className="section-container text-center">
        <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">Education</p>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Teaching & Training</h1>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
          Empowering the next generation of statisticians and data scientists.
        </p>
      </div>
    </section>

    {/* Philosophy */}
    <section className="section-padding bg-muted">
      <div className="section-container text-center max-w-3xl">
        <Quote className="mx-auto text-accent mb-4" size={36} />
        <blockquote className="text-2xl font-heading italic text-foreground mb-2">
          "Data literacy as a tool for empowerment and democracy"
        </blockquote>
        <p className="text-muted-foreground">Teaching Philosophy</p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeading title="Courses Taught" />
        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((c) => (
            <div key={c.title} className="card-elevated p-6">
              <c.icon className="text-accent mb-3" size={28} />
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{c.title}</h3>
              <p className="text-muted-foreground text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted">
      <div className="section-container">
        <SectionHeading title="Programs & Workshops" />
        <div className="max-w-3xl mx-auto space-y-4">
          {programs.map((p) => (
            <div key={p.title} className="card-elevated p-6">
              <h3 className="font-heading font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Teaching;
