import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="section-container py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-heading text-xl font-bold mb-3">Prof. Olushina O. Awe</h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Professor of Statistics & Data Science. Global thought leader in Explainable AI, Civic Data Science, and Statistical Education.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-3 text-accent">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/research", label: "Research" },
              { href: "/talks", label: "Talks & Keynotes" },
              { href: "/consulting", label: "Consulting" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link to={l.href} className="text-primary-foreground/70 hover:text-accent transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-3 text-accent">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-accent transition-colors">Google Scholar</a></li>
            <li><a href="https://www.researchgate.net" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-accent transition-colors">ResearchGate</a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-accent transition-colors">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Prof. Olushina Olawale Awe. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
