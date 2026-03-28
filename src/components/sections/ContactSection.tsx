const selectClass =
  "w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors duration-300 appearance-none";

const inputClass =
  "w-full bg-transparent border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground transition-colors duration-300";

const labelClass = "block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2";

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24 md:px-12 lg:px-20 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        {/* Left: heading + contact info */}
        <div className="md:col-span-5">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Contact
          </p>
          <h2 className="text-2xl md:text-4xl font-semibold leading-snug tracking-tight text-foreground mb-8">
            Let&apos;s talk about your project.
          </h2>
          <p className="text-sm leading-[1.8] text-muted-foreground mb-10">
            Free, no-pressure estimates. Answer a few quick questions below and we&apos;ll get
            back to you fast — usually the same day.
          </p>

          <div className="space-y-6">
            <div className="border-t border-border pt-6">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
                Phone
              </p>
              <a
                href="tel:3093239959"
                className="text-base font-medium text-foreground hover:text-[var(--color-emerald)] transition-colors duration-300"
              >
                (309) 323-9959
              </a>
            </div>
            <div className="border-t border-border pt-6">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
                Email
              </p>
              <a
                href="mailto:emeraldmasonryil@gmail.com"
                className="text-base font-medium text-foreground hover:text-[var(--color-emerald)] transition-colors duration-300"
              >
                emeraldmasonryil@gmail.com
              </a>
            </div>
            <div className="border-t border-border pt-6">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
                Service Area
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Peoria County · Tazewell County<br />
                Woodford County · Marshall County<br />
                Surrounding Central Illinois
              </p>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="md:col-span-6 md:col-start-7">
          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            className="space-y-7"
          >
            {/* Name + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className={inputClass}
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className={labelClass}>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className={inputClass}
                  placeholder="Your phone number"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className={labelClass}>Email Address</label>
              <input
                type="email"
                name="email"
                className={inputClass}
                placeholder="you@example.com"
              />
            </div>

            {/* Q1: Property type */}
            <div>
              <label className={labelClass}>
                1. What type of property is this for?
              </label>
              <select name="property_type" className={selectClass}>
                <option value="">Select one...</option>
                <option value="my-home">My Home</option>
                <option value="rental">A Rental Property I Own</option>
                <option value="commercial">Commercial / Business Property</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Q2: Damage level */}
            <div>
              <label className={labelClass}>
                2. How would you describe the damage?
              </label>
              <select name="damage_level" className={selectClass}>
                <option value="">Select one...</option>
                <option value="minor">Minor — small cracks or cosmetic issues</option>
                <option value="moderate">Moderate — noticeable damage, missing mortar or bricks</option>
                <option value="severe">Severe — structural concern or water getting in</option>
                <option value="unsure">Not sure — I'd like someone to take a look</option>
              </select>
            </div>

            {/* Q3: Timeline */}
            <div>
              <label className={labelClass}>
                3. How soon are you looking to get this done?
              </label>
              <select name="timeline" className={selectClass}>
                <option value="">Select one...</option>
                <option value="asap">As soon as possible</option>
                <option value="1-3-months">Within the next 1–3 months</option>
                <option value="planning">Just planning ahead / getting prices</option>
              </select>
            </div>

            {/* Q4: Other quotes */}
            <div>
              <label className={labelClass}>
                4. Have you gotten other quotes for this project?
              </label>
              <select name="other_quotes" className={selectClass}>
                <option value="">Select one...</option>
                <option value="yes">Yes</option>
                <option value="no">No, you&apos;re the first I&apos;ve contacted</option>
                <option value="planning-to">Not yet, but I plan to</option>
              </select>
            </div>

            {/* Q5: How they heard */}
            <div>
              <label className={labelClass}>
                5. How did you hear about us?
              </label>
              <select name="referral_source" className={selectClass}>
                <option value="">Select one...</option>
                <option value="google">Google Search</option>
                <option value="social">Facebook / Instagram</option>
                <option value="referral">Referral from a friend or neighbor</option>
                <option value="drove-by">Drove by one of our jobs</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Optional description */}
            <div>
              <label className={labelClass}>
                Anything else you&apos;d like us to know? <span className="normal-case text-muted-foreground/50">(optional)</span>
              </label>
              <textarea
                name="message"
                rows={4}
                className={`${inputClass} resize-none`}
                placeholder="Describe your project or what you're seeing..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[var(--color-emerald)] text-background text-xs font-semibold tracking-[0.3em] uppercase hover:opacity-90 transition-opacity duration-300"
            >
              Send Message
            </button>

            <p className="text-xs text-muted-foreground/50 text-center">
              No spam. No pressure. We&apos;ll reach out to schedule your free estimate.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
