import SectionHeading from "@/components/SectionHeading";
import { Calendar, Tag } from "lucide-react";

const posts = [
  { title: "Why Explainable AI Matters for Democratic Governance", category: "AI Ethics", date: "March 2024", excerpt: "As AI systems increasingly influence public policy, the demand for interpretability has never been greater. This article explores frameworks for accountable AI." },
  { title: "LISA 2020: A Decade of Statistical Capacity Building", category: "Announcements", date: "January 2024", excerpt: "Reflecting on ten years of building statistical consulting laboratories across developing countries and the lessons learned." },
  { title: "Data Literacy as the Foundation of Modern Democracy", category: "Data for Democracy", date: "November 2023", excerpt: "Without data-literate citizens and policymakers, democratic institutions risk being undermined by misinformation and opaque algorithms." },
  { title: "The Role of Human-in-the-Loop Systems in Public Health", category: "Statistical Thinking", date: "September 2023", excerpt: "Combining expert judgment with machine learning to improve malaria surveillance and health resource allocation." },
  { title: "Awarded Humboldt Foundation Professorship", category: "Announcements", date: "2025", excerpt: "Prof. Awe joins a prestigious cohort of international scholars supported by the Alexander von Humboldt Foundation, taking up an AvH Visiting Professorship at Ludwigsburg University of Education, Germany." },
  { title: "Bridging the Data Skills Gap in Sub-Saharan Africa", category: "Data for Democracy", date: "April 2023", excerpt: "Practical strategies and institutional models for scaling data science education in resource-constrained environments." },
];

const News = () => (
  <div>
    <section className="bg-primary section-padding">
      <div className="section-container text-center">
        <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">Insights</p>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">News & Insights</h1>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
          Thought leadership on AI ethics, data for democracy, and the future of statistics.
        </p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto space-y-6">
          {posts.map((p, i) => (
            <article key={i} className="card-elevated p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="inline-flex items-center gap-1 text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                  <Tag size={12} /> {p.category}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar size={12} /> {p.date}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default News;
