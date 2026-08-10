import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { publications, type Publication } from "@/data/publications";

const ALL = "All";

const unique = <T,>(arr: T[]) => Array.from(new Set(arr));

const FilterRow = ({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) => (
  <div className="flex flex-wrap items-center gap-2">
    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground w-16 shrink-0">
      {label}
    </span>
    {options.map((o) => (
      <button
        key={o}
        type="button"
        onClick={() => onChange(o)}
        aria-pressed={value === o}
        className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
          value === o
            ? "bg-accent text-accent-foreground border-accent"
            : "bg-card text-muted-foreground border-border hover:text-foreground hover:border-accent/50"
        }`}
      >
        {o}
      </button>
    ))}
  </div>
);

const PublicationsExplorer = () => {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState<string>(ALL);
  const [topic, setTopic] = useState<string>(ALL);
  const [type, setType] = useState<string>(ALL);

  const years = useMemo(
    () => [ALL, ...unique(publications.map((p) => String(p.year))).sort((a, b) => Number(b) - Number(a))],
    []
  );
  const topics = useMemo(
    () => [ALL, ...unique(publications.flatMap((p) => p.topics)).sort()],
    []
  );
  const types = useMemo(() => [ALL, ...unique(publications.map((p) => p.type)).sort()], []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return publications
      .filter((p: Publication) => {
        const matchesQuery =
          !q ||
          p.title.toLowerCase().includes(q) ||
          p.venue.toLowerCase().includes(q) ||
          p.topics.some((t) => t.toLowerCase().includes(q));
        const matchesYear = year === ALL || String(p.year) === year;
        const matchesTopic = topic === ALL || p.topics.includes(topic);
        const matchesType = type === ALL || p.type === type;
        return matchesQuery && matchesYear && matchesTopic && matchesType;
      })
      .sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
  }, [query, year, topic, type]);

  const hasFilters = query !== "" || year !== ALL || topic !== ALL || type !== ALL;

  const reset = () => {
    setQuery("");
    setYear(ALL);
    setTopic(ALL);
    setType(ALL);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative mb-6">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title, journal, or topic"
          aria-label="Search publications"
          className="w-full rounded-full border border-border bg-card pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40"
        />
      </div>

      <div className="space-y-3 mb-6">
        <FilterRow label="Year" options={years} value={year} onChange={setYear} />
        <FilterRow label="Topic" options={topics} value={topic} onChange={setTopic} />
        <FilterRow label="Type" options={types} value={type} onChange={setType} />
      </div>

      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-muted-foreground">
          {results.length} {results.length === 1 ? "publication" : "publications"}
        </p>
        {hasFilters && (
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
          >
            <X size={13} /> Clear filters
          </button>
        )}
      </div>

      <div className="space-y-4">
        {results.map((p) => (
          <article key={`${p.year}-${p.title}`} className="card-elevated p-5 flex items-start gap-4">
            <span className="text-accent font-heading font-bold text-lg shrink-0">{p.year}</span>
            <div>
              <h4 className="font-semibold text-foreground text-sm mb-1">
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                    {p.title}
                  </a>
                ) : (
                  p.title
                )}
              </h4>
              <p className="text-muted-foreground text-xs italic mb-2">{p.venue}</p>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[11px] font-medium">
                  {p.type}
                </span>
                {p.topics.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-[11px]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
        {results.length === 0 && (
          <p className="text-center text-muted-foreground text-sm py-10">
            No publications match your search. Try clearing the filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default PublicationsExplorer;