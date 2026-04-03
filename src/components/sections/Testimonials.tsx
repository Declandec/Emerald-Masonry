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

function StarRating() {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="px-6 py-20 md:px-12 lg:px-20 bg-gray-50">
      {/* Section header */}
      <div className="text-center mb-14">
        <p className="text-[11px] tracking-[0.4em] uppercase text-[var(--color-emerald)] font-semibold mb-3">
          Client Reviews
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-charcoal)] mb-4">
          What Our Customers Say
        </h2>
        <div className="mt-4 mx-auto w-16 h-1 bg-[var(--color-emerald)]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-white border border-gray-200 shadow-sm p-8 relative"
          >
            {/* Emerald accent bar */}
            <div className="h-[4px] w-full bg-[var(--color-emerald)] absolute top-0 left-0" />

            <StarRating />

            {/* Large quote mark */}
            <span className="text-6xl text-[var(--color-emerald)]/20 font-serif leading-none block mb-2">&ldquo;</span>

            <blockquote className="text-[15px] leading-[1.85] text-gray-600 mb-6">
              {t.quote}
            </blockquote>

            <div className="border-t border-gray-100 pt-5 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[var(--color-emerald)] flex items-center justify-center text-white font-bold text-sm">
                {t.name[0]}
              </div>
              <div>
                <p className="text-[14px] font-bold text-[var(--color-charcoal)]">{t.name}</p>
                <p className="text-[12px] text-gray-400 uppercase tracking-wide">{t.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
