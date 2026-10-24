import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import { ebooks } from "@/data/ebooks";
import { BookOpen, Check, Mail, Lock } from "lucide-react";

const Ebooks = () => (
  <div>
    <SEO
      title="Ebooks | Books by Prof. Olushina Olawale Awe"
      description="Ebooks by Prof. Olushina Olawale Awe: Quietly Magnetic, The Complete Manager, and The Price of Becoming Great. Practical books on character, management, and discipline."
      path="/ebooks"
    />
    <section className="bg-primary section-padding">
      <div className="section-container text-center">
        <p className="text-accent font-semibold uppercase tracking-wider text-sm mb-3">Ebooks</p>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">Books by Prof. Awe</h1>
        <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
          Practical books on character, management, and discipline, written to be used, not just read.
        </p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeading title="Available Titles" subtitle="Secure checkout is being finalized. Leave your email on any book and you will be notified the moment it goes on sale." />
        <div className="grid md:grid-cols-3 gap-8">
          {ebooks.map((book) => (
            <article key={book.id} className="card-elevated overflow-hidden flex flex-col">
              <img
                src={book.cover}
                alt={`Cover of ${book.title} by Prof. Olushina Olawale Awe`}
                loading="lazy"
                width={1024}
                height={1536}
                className="w-full aspect-[2/3] object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <p className="text-accent font-semibold uppercase tracking-wider text-xs mb-2">{book.audience}</p>
                <h2 className="font-heading text-xl font-bold text-foreground mb-1">{book.title}</h2>
                <p className="text-muted-foreground text-sm italic mb-3">{book.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{book.description}</p>
                <ul className="space-y-1.5 mb-5">
                  {book.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-foreground">
                      <Check size={15} className="text-accent mt-0.5 shrink-0" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Lock size={14} className="text-muted-foreground" aria-hidden="true" />
                    {book.priceLabel}
                  </p>
                  <Button asChild variant="hero" className="w-full">
                    <a
                      href={`mailto:olawaleawe@gmail.com?subject=${encodeURIComponent(`Notify me: ${book.title}`)}&body=${encodeURIComponent(`Please let me know when "${book.title}" is available for purchase.`)}`}
                    >
                      <Mail aria-hidden="true" /> Notify me at launch
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-muted">
      <div className="section-container text-center max-w-2xl mx-auto">
        <BookOpen className="text-accent mx-auto mb-4" size={32} aria-hidden="true" />
        <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Bulk Orders and Institutional Copies</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          For schools, churches, companies, and training programs ordering multiple copies, reach out directly for group pricing.
        </p>
        <Button asChild variant="outline">
          <a href="mailto:olawaleawe@gmail.com?subject=Bulk%20ebook%20order%20enquiry">
            <Mail aria-hidden="true" /> olawaleawe@gmail.com
          </a>
        </Button>
      </div>
    </section>
  </div>
);

export default Ebooks;
