import SectionHeading from "@/components/SectionHeading";
import { MapPin, BookOpen, Award, Globe } from "lucide-react";
import profPhoto from "@/assets/prof-awe.jpg";

const milestones = [
  { year: "Nigeria", desc: "Early academic career and foundational statistical research." },
  { year: "USA", desc: "Advanced studies and research collaborations at leading institutions." },
  { year: "Brazil", desc: "International teaching and cross-continental partnerships." },
  { year: "Germany", desc: "Alexander von Humboldt Foundation Professorship and European research leadership." },
  { year: "Global", desc: "Leading international networks—ISI, IASE, LISA 2020—across 40+ countries." },
];

const About = () => (
  <div>
    {/* Header */}
    <section className="bg-primary section-padding">
      <div className="section-container grid md:grid-cols-[auto_1fr] gap-10 items-center">
        <div className="relative mx-auto">
          <div className="absolute -inset-3 bg-gradient-to-br from-accent/40 to-transparent rounded-full blur-2xl" />
          <img
            src={profPhoto}
            alt="Professor Olushina Olawale Awe"
            className="relative w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-4 border-accent/60 shadow-2xl"
          />
        </div>
        <div className="text-center md:text-left">
          <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">About</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Prof. Olushina Olawale Awe</h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl">
            Professor of Statistics & Data Science | Global Thought Leader in AI, Civic Data Science, and Statistical Education
          </p>
        </div>
      </div>
    </section>

    {/* Bio */}
    <section className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <SectionHeading title="Professional Biography" centered={false} />
        <div className="prose prose-lg text-muted-foreground space-y-4">
          <p>
            Professor Olushina Olawale Awe is a distinguished statistician and data scientist whose work spans machine learning, explainable AI, civic data science, and statistical education. He holds a professorship supported by the Alexander von Humboldt Foundation in Germany and serves in leadership roles across the world's most prestigious statistical organizations.
          </p>
          <p>
            As Vice President of the International Association for Statistical Education (IASE) and Council Member of the International Statistical Institute (ISI), Prof. Awe shapes global policy on data literacy, statistical capacity building, and AI governance. He is the Global Lead of the LISA 2020 Network, connecting statistical laboratories across developing nations.
          </p>
          <p>
            His research philosophy centers on <em className="text-foreground font-medium">"bridging rigorous statistical theory with real-world impact"</em>—developing interpretable machine learning methods that serve democratic governance, public health, and equitable development.
          </p>
        </div>
      </div>
    </section>

    {/* Career Journey */}
    <section className="section-padding bg-muted">
      <div className="section-container">
        <SectionHeading title="Global Career Journey" subtitle="From Nigeria to the world stage." />
        <div className="max-w-2xl mx-auto space-y-6">
          {milestones.map((m, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                <MapPin className="text-accent" size={18} />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground">{m.year}</h3>
                <p className="text-muted-foreground text-sm">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Leadership */}
    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeading title="Leadership & Global Influence" />
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Award, title: "AvH Foundation Professor", desc: "Prestigious appointment advancing statistical research in Germany." },
            { icon: Globe, title: "LISA 2020 Global Lead", desc: "Directing statistical consulting laboratories across developing countries." },
            { icon: BookOpen, title: "ISI & IASE Leadership", desc: "Vice President of IASE and Council Member of ISI shaping global statistics." },
          ].map((item) => (
            <div key={item.title} className="card-elevated p-6 text-center">
              <item.icon className="mx-auto text-accent mb-3" size={32} />
              <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
