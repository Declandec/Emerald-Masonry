const testimonials = [
  {
    quote:
      "Emerald Masonry did an excellent job repairing my damaged chimney. They replaced damaged bricks and tuckpointed the joints to restore structural integrity. Their team is responsive, knowledgeable, and professional, delivering quality work. I'm extremely satisfied with the end result and highly recommend them.",
    name: "Eric",
    location: "Peoria, IL",
  },
  {
    quote:
      "Very friendly and talented in our brick repair work! Highly recommend Emerald Masonry!! Call them today!",
    name: "Diana",
    location: "Central Illinois",
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-20 border-t border-border">
      <div className="mb-16">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
          What Our Customers Say
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-background px-6 py-8 md:px-8 md:py-10">
            <blockquote className="text-base leading-[1.8] text-foreground/80 mb-8">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="border-t border-border pt-6">
              <p className="text-sm font-medium text-foreground">{t.name}</p>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">
                {t.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
