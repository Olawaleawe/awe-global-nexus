import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import { Mail, ExternalLink, Send, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Thank you for your message. Prof. Olushina O. Awe's team will respond shortly.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
      <SEO
        title="Contact | Prof. Olushina O. Awe"
        description="Get in touch with Prof. Olushina O. Awe for research collaborations, consulting, invited talks, and academic partnerships."
        path="/contact"
      />
      <section className="bg-primary section-padding">
        <div className="section-container text-center">
          <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Contact</h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Open to collaboration, speaking engagements, and consulting inquiries.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Form */}
            <div>
              <SectionHeading title="Send a Message" centered={false} />
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input placeholder="Full Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <Input type="email" placeholder="Email Address *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                <Input placeholder="Subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
                <Textarea placeholder="Your Message *" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                <Button type="submit" size="lg" className="gap-2">
                  <Send size={16} /> Send Message
                </Button>
              </form>
            </div>

            {/* Info */}
            <div>
              <SectionHeading title="Connect" centered={false} />
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm">Academic Email</h4>
                  <a href="mailto:olushina.awe@ph-ludwigsburg.de" className="text-accent hover:underline text-sm flex items-center gap-1">
                    <Mail size={14} /> olushina.awe@ph-ludwigsburg.de
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm">Personal Email</h4>
                  <a href="mailto:olawaleawe@gmail.com" className="text-accent hover:underline text-sm flex items-center gap-1">
                    <Mail size={14} /> olawaleawe@gmail.com
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm">Phone</h4>
                  <a href="tel:+4915203693944" className="text-muted-foreground hover:text-accent text-sm flex items-center gap-1">
                    <Phone size={14} /> +49 152 03693944
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm">Location</h4>
                  <p className="text-muted-foreground text-sm flex items-center gap-1">
                    <MapPin size={14} /> Ludwigsburg, Germany
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Profiles</h4>
                  <ul className="space-y-2">
                    {[
                      { label: "LinkedIn", href: "https://www.linkedin.com/in/o-olawale-awe" },
                      { label: "Google Scholar", href: "https://scholar.google.com/citations?user=_p_FZKcAAAAJ&hl=en" },
                      { label: "ORCID", href: "https://orcid.org/0000-0002-0442-4519" },
                      { label: "The Conversation", href: "https://theconversation.com/profiles/olushina-olawale-awe-1470282" },
                    ].map((link) => (
                      <li key={link.label}>
                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors text-sm flex items-center gap-1">
                          <ExternalLink size={14} /> {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-elevated p-5">
                  <h4 className="font-heading font-semibold text-foreground mb-2">Newsletter</h4>
                  <p className="text-muted-foreground text-sm mb-3">Stay updated on research, talks, and new publications.</p>
                  <div className="flex gap-2">
                    <Input placeholder="Your email" className="flex-1" />
                    <Button size="sm">Subscribe</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
