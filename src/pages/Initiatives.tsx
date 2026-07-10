import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import { Globe, GraduationCap, Building, Users } from "lucide-react";

const initiatives = [
  { icon: Globe, title: "LISA 2020 Global Network", desc: "An international network of statistical consulting laboratories providing free statistical support to researchers in developing countries. Active in 40+ countries across Africa, Asia, and Latin America." },
  { icon: GraduationCap, title: "ADA Global Academy", desc: "A comprehensive data science training platform offering MicroMasters programs, workshops, and bootcamps to build global capacity in applied data analytics." },
  { icon: Building, title: "LISAC & AULISSDA Labs", desc: "Statistical consulting laboratories embedded in universities across Africa, providing hands-on statistical support for academic and governmental research." },
  { icon: Users, title: "Capacity Building Programs", desc: "Training initiatives focused on developing countries, equipping researchers, policymakers, and students with essential data literacy and analytical skills." },
];

const Initiatives = () => (
  <div>
    <SEO
      title="Global Initiatives | LISA 2020, ADA Global Academy - Prof. Olushina O. Awe"
      description="Global capacity-building initiatives led by Prof. Olushina O. Awe: LISA 2020 Global Network, ADA Global Academy, LISAC & AULISSDA labs across Africa, Asia and Latin America."
      path="/initiatives"
    />
    <section className="bg-primary section-padding">
      <div className="section-container text-center">
        <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">Global Impact</p>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Global Initiatives</h1>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
          Building statistical capacity and data-driven solutions across the developing world.
        </p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8">
          {initiatives.map((item) => (
            <div key={item.title} className="card-elevated p-8">
              <item.icon className="text-accent mb-4" size={36} />
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Initiatives;
