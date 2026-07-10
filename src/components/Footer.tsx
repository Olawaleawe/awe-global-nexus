import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const profiles = [
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=_p_FZKcAAAAJ&hl=en" },
  { label: "ORCID", href: "https://orcid.org/0000-0002-0442-4519" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/o-olawale-awe" },
  { label: "Humboldt Network", href: "https://www.humboldt-foundation.de/en/connect/explore-the-humboldt-network/singleview/1243593/prof-dr-olushina-olawale-awe" },
  { label: "The Conversation", href: "https://theconversation.com/profiles/olushina-olawale-awe-1470282" },
  { label: "IDEAS / RePEc", href: "https://ideas.repec.org/e/paw23.html" },
  { label: "LISA 2020 Network", href: "https://www.lisa2020.org/team" },
  { label: "ADA Global Academy", href: "https://adaglobalacademy.com/meet-the-team/professor-olawale-awe/" },
];

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="section-container py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-heading text-xl font-bold mb-3">Prof. Olushina Olawale Awe</h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
            Professor of Statistics & Data Science. Global thought leader in Explainable AI, Civic Data Science, and Statistical Education.
          </p>
          <div className="space-y-2 text-sm">
            <a href="mailto:olushina.awe@ph-ludwigsburg.de" className="text-primary-foreground/70 hover:text-accent transition-colors flex items-center gap-2">
              <Mail size={14} /> olushina.awe@ph-ludwigsburg.de
            </a>
            <a href="mailto:olawaleawe@gmail.com" className="text-primary-foreground/70 hover:text-accent transition-colors flex items-center gap-2">
              <Mail size={14} /> olawaleawe@gmail.com
            </a>
            <a href="tel:+4915203693944" className="text-primary-foreground/70 hover:text-accent transition-colors flex items-center gap-2">
              <Phone size={14} /> +49 152 03693944
            </a>
            <p className="text-primary-foreground/70 flex items-center gap-2">
              <MapPin size={14} /> Ludwigsburg, Germany
            </p>
          </div>
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
            <li>
              <a href="/CV-Prof-Olushina-Olawale-Awe.pdf" download className="text-primary-foreground/70 hover:text-accent transition-colors">Download CV</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-3 text-accent">Connect</h4>
          <ul className="space-y-2 text-sm grid grid-cols-2 gap-x-4">
            {profiles.map((p) => (
              <li key={p.label}>
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  {p.label}
                </a>
              </li>
            ))}
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
