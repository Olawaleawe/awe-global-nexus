import { Link } from "react-router-dom";
import { Download, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { freeMaterials } from "@/data/downloads";

const Downloads = () => (
  <div>
    <SEO title="Free Downloads | Prof. Olushina Olawale Awe" description="Download free research materials and the academic CV of Prof. Olushina Olawale Awe, including the SentinelPay white paper." path="/downloads" />
    <section className="bg-primary section-padding">
      <div className="section-container text-center">
        <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">Free materials</p>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Downloads</h1>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">Research materials and academic resources from Prof. Olushina Olawale Awe.</p>
      </div>
    </section>
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-6">
          {freeMaterials.map(material => (
            <article key={material.id} className="card-elevated p-6 flex flex-col items-start">
              <div className="flex items-center justify-between w-full mb-5">
                <FileText size={32} className="text-accent" aria-hidden="true" />
                <span className="text-xs font-semibold text-muted-foreground">{material.format} · Free</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{material.category}</p>
              <h2 className="text-xl font-heading font-semibold text-foreground mb-3">{material.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{material.description}</p>
              <Button asChild variant="hero" className="mt-auto" aria-label={`Download ${material.title}`}>
                <a href={material.url} download={material.filename}><Download aria-hidden="true" /> Download {material.format}</a>
              </Button>
            </article>
          ))}
        </div>
        <div className="border-t border-border mt-12 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="font-heading text-xl font-semibold">Open-source statistical software</h2>
          <Button asChild variant="outline"><Link to="/software">R & Python packages <ArrowRight aria-hidden="true" /></Link></Button>
        </div>
      </div>
    </section>
  </div>
);

export default Downloads;