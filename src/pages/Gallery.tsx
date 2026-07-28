import { useState } from "react";
import SEO from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Play } from "lucide-react";
import germanPresidentPhoto from "@/assets/prof-awe-german-president.jpeg.asset.json";
import profPhoto from "@/assets/prof-awe.jpg";

type MediaItem =
  | { type: "image"; src: string; caption: string; alt: string }
  | { type: "video"; youtubeId: string; caption: string; thumbnail?: string };

const media: MediaItem[] = [
  {
    type: "image",
    src: germanPresidentPhoto.url,
    alt: "Prof. Olushina Olawale Awe with President Frank-Walter Steinmeier",
    caption: "With H.E. Frank-Walter Steinmeier, President of Germany",
  },
  {
    type: "image",
    src: profPhoto,
    alt: "Prof. Olushina Olawale Awe portrait",
    caption: "Portrait, Ludwigsburg University of Education",
  },
  // Add more items here. Example video entry:
  // { type: "video", youtubeId: "dQw4w9WgXcQ", caption: "Keynote on Explainable AI" },
];

const Gallery = () => {
  const [active, setActive] = useState<MediaItem | null>(null);

  return (
    <div>
      <SEO
        title="Media Gallery | Prof. Olushina O. Awe"
        description="Photos and videos from talks, keynotes, and notable moments in the career of Prof. Olushina Olawale Awe."
        path="/gallery"
      />

      <section className="bg-primary text-primary-foreground">
        <div className="section-container py-16 md:py-20">
          <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-3">Media</p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Gallery</h1>
          <p className="text-primary-foreground/80 max-w-2xl text-lg">
            A collection of photos and videos from keynotes, conferences, and notable moments.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <SectionHeading title="Photos & Videos" subtitle="Click any item to view it larger." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {media.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(item)}
                className="group relative overflow-hidden rounded-lg border border-border shadow-md hover:shadow-xl transition-all bg-card text-left"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <>
                      <img
                        src={item.thumbnail ?? `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                        alt={item.caption}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                        <div className="w-14 h-14 rounded-full bg-accent/90 flex items-center justify-center shadow-lg">
                          <Play className="text-primary ml-1" size={24} fill="currentColor" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <p className="p-4 text-sm text-foreground leading-snug">{item.caption}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-card">
          {active?.type === "image" && (
            <img src={active.src} alt={active.alt} className="w-full h-auto" />
          )}
          {active?.type === "video" && (
            <div className="aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${active.youtubeId}?autoplay=1`}
                title={active.caption}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          )}
          {active && (
            <p className="p-4 text-sm text-muted-foreground italic text-center">{active.caption}</p>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;