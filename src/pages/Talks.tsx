import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import { Mic, Calendar, MapPin } from "lucide-react";

const talks = [
  { title: "Civic-Ready AI: Interpretable Machine Learning for Accountable Governance", event: "International Statistical Institute World Congress", location: "The Hague, Netherlands", year: "2023", featured: true },
  { title: "Building Statistical Capacity Across the Global South", event: "Joint Statistical Meetings (JSM)", location: "Toronto, Canada", year: "2023" },
  { title: "Explainable AI for Health Policy in Sub-Saharan Africa", event: "International Conference on Teaching Statistics (ICOTS)", location: "Rosario, Argentina", year: "2022" },
  { title: "Data Science Education: Bridging Theory and Practice", event: "American Mathematical Society (AMS) Sectional Meeting", location: "Atlanta, USA", year: "2022" },
  { title: "Human-in-the-Loop Systems for Democratic Data", event: "Royal Statistical Society Conference", location: "Aberdeen, UK", year: "2021" },
  { title: "Statistical Learning for Non-Stationary Time Series", event: "Bernoulli Society World Congress", location: "Virtual", year: "2021" },
];

const Talks = () => (
  <div>
    <SEO
      title="Talks & Keynotes | Prof. Olawale Awe"
      description="Selected international keynotes and invited talks by Prof. Olawale Awe at ISI, JSM, ICOTS, Royal Statistical Society and the Bernoulli World Congress."
      path="/talks"
    />
    <section className="bg-primary section-padding">
      <div className="section-container text-center">
        <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">Speaking</p>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Talks & Keynotes</h1>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
          Sharing research insights at the world's leading academic conferences and institutions.
        </p>
      </div>
    </section>

    {/* Featured */}
    <section className="section-padding bg-muted">
      <div className="section-container">
        <SectionHeading title="Featured Talk" />
        <div className="max-w-3xl mx-auto card-elevated p-8 border-l-4 border-l-accent">
          <Mic className="text-accent mb-4" size={32} />
          <h3 className="font-heading text-xl font-bold text-foreground mb-2">
            "Civic-Ready AI: Interpretable Machine Learning for Accountable Governance"
          </h3>
          <p className="text-muted-foreground text-sm mb-4">
            A keynote address exploring how explainable AI frameworks can enhance democratic accountability and enable transparent decision-making in public policy.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Calendar size={14} /> 2023</span>
            <span className="flex items-center gap-1"><MapPin size={14} /> ISI World Congress, The Hague</span>
          </div>
        </div>
      </div>
    </section>

    {/* All talks */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeading title="Selected Presentations" />
        <div className="max-w-3xl mx-auto space-y-4">
          {talks.filter(t => !t.featured).map((t, i) => (
            <div key={i} className="card-elevated p-5">
              <h4 className="font-semibold text-foreground text-sm mb-1">{t.title}</h4>
              <p className="text-muted-foreground text-xs">{t.event}</p>
              <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Calendar size={12} /> {t.year}</span>
                <span className="flex items-center gap-1"><MapPin size={12} /> {t.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-primary">
      <div className="section-container text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-4">
          Invite Prof. Awe to Speak
        </h2>
        <p className="text-primary-foreground/70 mb-6 max-w-lg mx-auto text-sm">
          Available for keynotes, panel discussions, and workshops on AI, data science, and statistical education.
        </p>
        <Button asChild size="lg" variant="hero">
          <Link to="/contact">Request Speaking Engagement</Link>
        </Button>
      </div>
    </section>
  </div>
);

export default Talks;
