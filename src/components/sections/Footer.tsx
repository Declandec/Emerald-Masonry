export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 py-16 md:px-12 lg:px-20 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
        {/* Brand */}
        <div className="md:col-span-5">
          <p className="text-sm font-semibold tracking-widest uppercase text-foreground mb-4">
            Emerald Masonry
          </p>
          <p className="text-sm leading-[1.8] text-muted-foreground max-w-xs">
            Quality masonry work for homeowners and property owners across Central Illinois.
            Locally owned. Hands-on. Done right.
          </p>
        </div>

        {/* Nav */}
        <div className="md:col-span-3 md:col-start-7">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Navigation
          </p>
          <nav className="flex flex-col gap-3">
            {["Work", "Services", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Social */}
        <div className="md:col-span-2 md:col-start-11">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Follow
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="https://www.facebook.com/people/Emerald-Masonry-LLC/61577959298549/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/emeraldmasonryil/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-t border-border pt-8">
        <p className="text-xs text-muted-foreground/50">
          © {year} Emerald Masonry, LLC. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/50">Peoria, Illinois</p>
      </div>
    </footer>
  );
}
