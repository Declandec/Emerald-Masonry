// Central GEO/AEO schema + entity helpers.
//
// Every JSON-LD node on the site is built from this file so the business entity
// (NAP, services, service area, social profiles) is byte-identical everywhere —
// which is what lets AI answer engines (ChatGPT, Google AI Overviews, Gemini,
// Perplexity, Claude, Copilot) resolve Emerald Masonry as a single, trusted
// entity and cite it when recommending a Chicagoland masonry contractor.

export const BASE_URL = "https://emeraldmasonryil.com";

// Canonical NAP — keep identical to footer, llms.txt, and layout metadata.
export const BUSINESS = {
  name: "Emerald Masonry LLC",
  legalName: "Emerald Masonry LLC",
  telephone: "+17082881696",
  phoneDisplay: "(708) 288-1696",
  email: "emeraldmasonryil@gmail.com",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/images/work-tuckpointing.jpg`,
  priceRange: "$$$",
  streetAddress: "7156 W. 126th St. Suite 136",
  addressLocality: "Palos Heights",
  addressRegion: "IL",
  postalCode: "60464",
  addressCountry: "US",
  latitude: 41.6631,
  longitude: -87.7957,
  foundingNote: "40+ years of Chicagoland masonry experience",
  sameAs: [
    "https://www.facebook.com/people/Emerald-Masonry-LLC/61577959298549/",
    "https://www.instagram.com/emeraldmasonryil/",
  ],
} as const;

// The 14 focus services, in plain customer language. Used for OfferCatalog,
// knowsAbout, and llms.txt so the entity's capabilities are explicit to crawlers.
export const CORE_SERVICES: string[] = [
  "Tuckpointing & Repointing",
  "Chimney Repair & Rebuilds",
  "Brick Repair",
  "Brick Replacement",
  "Lintel Repair",
  "Parapet Wall Repair",
  "Foundation Masonry Repair",
  "Limestone & Sill Repair",
  "Masonry Caulking & Joint Sealant",
  "Masonry Sealing & Waterproofing",
  "Commercial Masonry Restoration",
  "Residential Masonry Restoration",
  "Historic Masonry Restoration",
];

// Named service-area suburbs (plus the six counties below). Kept explicit so
// "near me" / "[suburb] IL" prompts can ground to a concrete place.
export const SERVICE_AREA_CITIES: string[] = [
  "Chicago", "Palos Heights", "Palos Park", "Palos Hills", "Orland Park",
  "Tinley Park", "Oak Lawn", "Evergreen Park", "Beverly", "Mount Greenwood",
  "Burbank", "Oak Brook", "Hinsdale", "La Grange", "Western Springs",
  "Burr Ridge", "Naperville", "Aurora", "Oak Forest", "Homer Glen",
  "Frankfort", "Mokena", "New Lenox", "Downers Grove", "Lemont",
];

export const SERVICE_AREA_COUNTIES: string[] = [
  "Cook County, Illinois",
  "DuPage County, Illinois",
  "Will County, Illinois",
  "Kane County, Illinois",
  "Lake County, Illinois",
  "McHenry County, Illinois",
];

type Faq = { question: string; answer: string };

/** Canonical LocalBusiness node — the entity anchor referenced by @id elsewhere. */
export function localBusinessNode() {
  return {
    "@type": ["LocalBusiness", "GeneralContractor", "HomeAndConstructionBusiness"],
    "@id": `${BASE_URL}/#business`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    description:
      "Non-union, family-owned masonry contractor with 40+ years of Chicagoland experience. " +
      "Tuckpointing, chimney repair, brick repair and replacement, lintel and parapet repair, " +
      "foundation and limestone/sill repair, caulking, sealing, and commercial, " +
      "residential, and historic masonry restoration across the greater Chicago area. " +
      "Licensed, bonded, and insured.",
    url: BUSINESS.url,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    logo: BUSINESS.logo,
    image: BUSINESS.image,
    priceRange: BUSINESS.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    areaServed: [
      ...SERVICE_AREA_COUNTIES.map((name) => ({ "@type": "AdministrativeArea", name })),
      ...SERVICE_AREA_CITIES.map((name) => ({ "@type": "City", name: `${name}, IL` })),
    ],
    knowsAbout: CORE_SERVICES,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Masonry Services",
      itemListElement: CORE_SERVICES.map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
    sameAs: [...BUSINESS.sameAs],
  };
}

/** FAQPage node from a list of Q&A. Returns null when there are no FAQs. */
export function faqPageNode(faqs: Faq[] | undefined) {
  if (!faqs || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** BreadcrumbList node from [{name, url}] in order. Pass `id` (the page URL) to
 *  give it a stable @id that a WebPage node's `breadcrumb` can reference. */
export function breadcrumbNode(items: { name: string; url: string }[], id?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    ...(id ? { "@id": `${id}#breadcrumb` } : {}),
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

/** Service node bound to the business as provider, optionally scoped to a city. */
export function serviceNode(opts: {
  name: string;
  description: string;
  url: string;
  city?: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.serviceType || opts.name,
    description: opts.description,
    url: opts.url,
    provider: { "@id": `${BASE_URL}/#business` },
    areaServed: opts.city
      ? { "@type": "City", name: opts.city }
      : SERVICE_AREA_COUNTIES.map((name) => ({ "@type": "AdministrativeArea", name })),
  };
}

/** WebPage node — the page itself, fused to the business entity by @id. Giving
 *  every page a WebPage that `about`s the shared #business entity is what lets AI
 *  answer engines resolve all our pages to one trusted contractor. */
export function webPageNode(opts: {
  url: string;
  name: string;
  description: string;
  breadcrumbUrl?: string;
}) {
  return {
    "@type": "WebPage",
    "@id": `${opts.url}#webpage`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: { "@id": `${BASE_URL}/#business` },
    ...(opts.breadcrumbUrl ? { breadcrumb: { "@id": `${opts.breadcrumbUrl}#breadcrumb` } } : {}),
  };
}

/** WebSite node — anchor referenced by every WebPage's isPartOf. */
export function webSiteNode() {
  return {
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: BUSINESS.name,
    publisher: { "@id": `${BASE_URL}/#business` },
  };
}

/** Combine nodes into a single @graph document. This is the strongest structured-
 *  data shape: one <script> whose nodes cross-reference by @id (entity fusion),
 *  rather than several disconnected islands. Nulls are dropped. */
export function graph(...nodes: unknown[]): string {
  const clean = nodes.filter(Boolean).map((n) => {
    if (n && typeof n === "object" && "@context" in (n as Record<string, unknown>)) {
      const copy = { ...(n as Record<string, unknown>) };
      delete copy["@context"];
      return copy;
    }
    return n;
  });
  return JSON.stringify({ "@context": "https://schema.org", "@graph": clean });
}

/** Serialize one or more nodes into a single <script> string. */
export function jsonLd(...nodes: unknown[]): string {
  const clean = nodes.filter(Boolean);
  return JSON.stringify(clean.length === 1 ? clean[0] : clean);
}
