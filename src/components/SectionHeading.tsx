const SectionHeading = ({ title, subtitle, centered = true }: { title: string; subtitle?: string; centered?: boolean }) => (
  <div className={`mb-12 ${centered ? "text-center" : ""}`}>
    <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">{title}</h2>
    <div className="w-16 h-1 bg-accent rounded-full mb-4 mx-auto" style={centered ? {} : { marginLeft: 0 }} />
    {subtitle && <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{subtitle}</p>}
  </div>
);

export default SectionHeading;
