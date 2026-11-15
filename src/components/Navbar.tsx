import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/software", label: "Software" },
  { href: "/talks", label: "Talks" },
  { href: "/initiatives", label: "Initiatives" },
  { href: "/teaching", label: "Teaching" },
  { href: "/consulting", label: "Consulting" },
  { href: "/news", label: "News" },
  { href: "/gallery", label: "Gallery" },
  { href: "/ebooks", label: "Ebooks" },
  { href: "/downloads", label: "Downloads" },
  { href: "/collaborate", label: "Collaborate" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="section-container flex items-center justify-between h-16">
        <Link to="/" className="font-heading text-lg font-bold text-primary tracking-tight">
          Prof. O.O. Awe
        </Link>

        {/* Desktop */}
        <nav className="hidden min-[1536px]:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                location.pathname === l.href
                  ? "text-accent-foreground bg-accent/15"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpen(!open)}
          className="min-[1536px]:hidden text-foreground"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </Button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="min-[1536px]:hidden border-t border-border bg-card px-4 pb-4 max-h-[calc(100dvh-4rem)] overflow-y-auto">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              onClick={() => setOpen(false)}
              className={`block py-2.5 text-sm font-medium border-b border-border/50 last:border-0 ${
                location.pathname === l.href
                  ? "text-accent"
                  : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
