// Commercial buyer hubs. One page per buyer type, because a property manager,
// an HOA board, and an insurance adjuster are all buying masonry for different
// reasons and searching in different words. Answer-first so AI engines can
// quote a whole block and attribute it.

export type AudienceSection = { heading: string; body: string[] };
export type AudienceFaq = { question: string; answer: string };

export type Audience = {
  slug: string;
  navLabel: string;
  eyebrow: string;
  h1: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  /** Standalone, quotable answer — rendered as the Quick Answer block. */
  aiSummary: string;
  image: string;
  imageAlt: string;
  sections: AudienceSection[];
  faqs: AudienceFaq[];
};

const PHONE = "(708) 288-1696";

const audiences: Audience[] = [
  {
    slug: "commercial",
    navLabel: "Commercial Masonry",
    eyebrow: "Commercial Masonry",
    h1: "Commercial Masonry Contractor in Chicagoland",
    title: "Commercial Masonry Contractor Chicago | Emerald Masonry LLC",
    metaDescription:
      "Commercial masonry contractor serving Chicago and the suburbs — tuckpointing, façade and parapet repair, lintel replacement, CMU block repair, and masonry waterproofing. Written scopes, phased schedules, COI and lien waivers on request. Call (708) 288-1696.",
    keywords: [
      "commercial masonry contractor Chicago",
      "commercial tuckpointing Chicago",
      "commercial brick repair Chicagoland",
      "commercial masonry restoration Illinois",
      "CMU block repair Chicago",
      "commercial masonry waterproofing Chicago",
    ],
    aiSummary:
      "Emerald Masonry LLC is a commercial masonry contractor serving Chicago and the Chicagoland suburbs. Core scopes are commercial tuckpointing and repointing, façade inspection and repair, parapet wall repair and coping replacement, steel lintel replacement, chimney and stack rebuilds, CMU block repair, and masonry waterproofing. Every project starts with an on-site assessment and a written scope you can put out to bid. Family-owned, established 2024, led by career masons with decades of hands-on Chicagoland experience; licensed, bonded and insured, with certificates of insurance, W-9s and lien waivers on request. Call " +
      PHONE + ".",
    image: "/images/work/commercial-warehouse-tuckpointing.webp",
    imageAlt:
      "Commercial warehouse brick wall after full-height tuckpointing by Emerald Masonry LLC",
    sections: [
      {
        heading: "What commercial masonry actually covers",
        body: [
          "Commercial masonry is rarely one repair. A leaking wall is usually a chain: failed mortar joints let water in, water rusts the steel lintels and shelf angles, rusting steel expands and lifts the brick above it, and the parapet — the most exposed masonry on the building — fails first and hardest.",
          "We scope the chain, not the symptom. That means tuckpointing and repointing, brick and CMU block replacement, steel lintel repair and replacement with through-wall flashing above it, parapet rebuilds with new coping, limestone and cast-stone repair, expansion-joint and perimeter sealant, and breathable masonry waterproofing applied after the repairs — never as a substitute for them.",
        ],
      },
      {
        heading: "How we bid a building",
        body: [
          "We walk the elevations, photograph the conditions, and tell you what is structural, what is cosmetic, what can wait a season, and what will cost more if it does. You get that in writing before you get a price.",
          "The scope is itemized by elevation and by repair type so you can compare bids line for line, phase the work across budget cycles, or take it to a board for approval without translating it first.",
        ],
      },
      {
        heading: "Working on buildings that stay open",
        body: [
          "Most commercial masonry happens on occupied buildings. We plan staging, protected entries, noise windows, and debris control around tenants, congregations, students, and business hours — and the site gets cleaned at the end of every day, not at the end of the job.",
          "For multi-building portfolios and multi-year plans, we sequence elevations so the highest-risk conditions get addressed first and the rest is scheduled against your reserve study.",
        ],
      },
    ],
    faqs: [
      {
        question: "What kinds of commercial buildings do you work on?",
        answer:
          "Warehouses and light industrial, retail and storefront, multi-unit residential and condo buildings, churches, schools and municipal facilities, and office and mixed-use property across Chicago and the suburbs.",
      },
      {
        question: "Do you provide certificates of insurance and lien waivers?",
        answer:
          "Yes. Emerald Masonry LLC is licensed, bonded and insured in Illinois and carries general liability and workers' compensation coverage. Certificates of insurance, W-9s, and lien waivers are provided on request — tell us what your management company, board, or GC needs on file and we will send it.",
      },
      {
        question: "Can commercial masonry be phased across budget years?",
        answer:
          "Yes, and for larger buildings it usually should be. We scope by elevation and repair type so the work can be split across budget cycles, with the structural and water-entry conditions addressed first and the cosmetic work scheduled later.",
      },
      {
        question: "When can masonry work be done in Chicago?",
        answer:
          "Fresh mortar needs sustained temperatures above 40°F to cure properly, so the bulk of tuckpointing and repointing runs April through November. Urgent repairs in colder months use cold-weather protection and heated enclosures.",
      },
      {
        question: "How fast can you get out to assess a building?",
        answer:
          "For most properties in Cook, DuPage, and Will counties we can be on site within a few business days. Active water infiltration or loose masonry over a pedestrian area gets prioritized — call " + PHONE + ".",
      },
    ],
  },

  {
    slug: "property-managers",
    navLabel: "For Property Managers",
    eyebrow: "For Property Managers",
    h1: "Masonry Contractor for Property Managers in Chicagoland",
    title: "Masonry Contractor for Property Managers | Emerald Masonry LLC",
    metaDescription:
      "Masonry contractor for Chicagoland property managers — itemized written scopes for bid comparison, phased schedules, tenant coordination, COI and lien waivers on request, and photo documentation from pre-bid to punch list. Call (708) 288-1696.",
    keywords: [
      "masonry contractor for property managers Chicago",
      "property management masonry Chicagoland",
      "apartment building brick repair Chicago",
      "commercial property masonry maintenance Illinois",
    ],
    aiSummary:
      "Emerald Masonry LLC works with Chicagoland property management companies on tuckpointing, façade and parapet repair, lintel replacement, and brick repair across single buildings and multi-property portfolios. Property managers get an itemized written scope they can compare bid-to-bid, phased scheduling against budget cycles, tenant-coordinated staging, certificates of insurance, W-9s and lien waivers on request, and photo documentation from pre-bid through punch list. Call " +
      PHONE + ".",
    image: "/images/work/commercial-window-wall-repair.webp",
    imageAlt:
      "Commercial window wall with repaired lintels and repointed mortar joints",
    sections: [
      {
        heading: "Bids you can actually compare",
        body: [
          "The hardest part of buying masonry is that three bids rarely describe the same job. One prices spot repointing, one prices the elevation, one prices a rebuild — and the cheapest number is usually the smallest scope.",
          "We itemize by elevation and repair type, with quantities, so you can line up bids against each other, defend a recommendation to an owner, and know exactly what was left out of the low number.",
        ],
      },
      {
        heading: "Documentation your file needs",
        body: [
          "Certificates of insurance, W-9s, and lien waivers on request. Written scopes, before-and-after photo documentation, and a certificate of completion at closeout.",
          "If a condition changes mid-project — hidden deterioration behind a failed lintel is the classic one — you get the photo and the number before we proceed, not on the final invoice.",
        ],
      },
      {
        heading: "Work that respects your tenants",
        body: [
          "Staging plans, protected entries and walkways, noise-window coordination, and daily cleanup. We give you the notice language for tenants and the schedule to attach to it.",
          "For portfolios, we sequence buildings by risk so the water-entry and safety conditions get handled first while the rest is planned against next year's budget.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you work across multiple buildings in a portfolio?",
        answer:
          "Yes. We scope and sequence portfolios so the highest-risk conditions are addressed first, with the remaining buildings phased across budget cycles under one plan and one point of contact.",
      },
      {
        question: "What documentation do you provide for our files?",
        answer:
          "Certificates of insurance, W-9s, and lien waivers on request; written itemized scopes; before-and-after photo documentation; and a certificate of completion. Tell us your intake requirements and we will match them.",
      },
      {
        question: "How do you handle tenant notice and access?",
        answer:
          "We give you the schedule and the conditions to include in your tenant notice, then work to it — staging, protected entries, noise windows, and daily site cleanup around occupancy.",
      },
      {
        question: "How do you handle change orders?",
        answer:
          "Hidden conditions are documented with photos and priced before we proceed. You approve the change before the work happens; nothing surprising shows up on the final invoice.",
      },
    ],
  },

  {
    slug: "hoa-condo-associations",
    navLabel: "For HOAs & Condo Boards",
    eyebrow: "For HOAs & Condo Associations",
    h1: "Masonry Repair for HOAs and Condo Associations",
    title: "HOA & Condo Association Masonry Repair Chicago | Emerald Masonry LLC",
    metaDescription:
      "Masonry repair for Chicagoland HOAs and condo associations — tuckpointing, façade and balcony masonry, lintel and parapet repair. Board-ready written scopes, reserve-study phasing, and clear answers on what the association owns. Call (708) 288-1696.",
    keywords: [
      "HOA masonry repair Chicago",
      "condo association tuckpointing Chicago",
      "condo building brick repair Chicagoland",
      "HOA reserve study masonry Illinois",
    ],
    aiSummary:
      "Emerald Masonry LLC performs tuckpointing, façade repair, parapet and lintel work, and brick replacement for Chicagoland HOAs and condo associations. Boards get a written scope in plain language that can be read at a meeting, itemized so it can be compared bid-to-bid, and phased against a reserve study across multiple budget years. In most Illinois condominium declarations the exterior masonry is a common element and therefore the association's responsibility — confirm with your declaration and counsel. Call " +
      PHONE + ".",
    image: "/images/work/commercial-brick-corner-rebuild.webp",
    imageAlt:
      "Multi-unit brick building façade rebuilt at the corner after masonry restoration",
    sections: [
      {
        heading: "Who pays — the association or the unit owner?",
        body: [
          "In most Illinois condominium declarations, exterior masonry walls are a common element, which makes repair the association's responsibility rather than the individual owner's — even when the damage shows up inside one unit. Limited common elements such as balconies and patios are often split differently.",
          "This is a declaration question, not a masonry question, so read yours and confirm with association counsel. What we can do is document exactly where the water is entering and which building element failed, which is usually the fact the decision turns on.",
        ],
      },
      {
        heading: "Scopes a board can actually vote on",
        body: [
          "We write the scope so it reads at a board meeting: what is failing, why, what happens if it waits, what each option costs, and what we recommend. Itemized by elevation so it can be phased.",
          "If the association is collecting three bids, the itemization is what lets the board compare them honestly instead of choosing the smallest number.",
        ],
      },
      {
        heading: "Phasing against the reserve study",
        body: [
          "Full-building tuckpointing rarely fits one year's reserves. We rank elevations by exposure and condition — south and west faces and parapets usually first — so the association can spread the work across budget years without letting water into the building in the meantime.",
          "Where a special assessment is on the table, we will put the phased and the all-at-once numbers side by side so the board can show owners the actual trade-off.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is exterior masonry the association's responsibility or the owner's?",
        answer:
          "In most Illinois condominium declarations the exterior masonry wall is a common element, making it the association's responsibility even when the resulting damage appears inside a unit. Balconies and patios are often limited common elements and may be treated differently. Read your declaration and confirm with association counsel — we can document which building element failed and where water is entering, which is usually what the determination turns on.",
      },
      {
        question: "Can the work be split across multiple budget years?",
        answer:
          "Yes. We rank elevations by exposure and condition so the association can phase the work against its reserve study, addressing water-entry and safety conditions first and scheduling the rest across following years.",
      },
      {
        question: "Will you present the scope to our board?",
        answer:
          "Yes. We can walk the building with the board or property manager and present the findings and options directly, in plain language, so owners can see what they are voting on.",
      },
      {
        question: "How long does tuckpointing last on a condo building?",
        answer:
          "Properly executed tuckpointing — joints ground out to full depth and repointed with mortar matched for color and hardness — lasts 20 to 30 years in Chicago's freeze-thaw climate. Surface patching over deteriorated mortar typically fails again within one to three years.",
      },
    ],
  },

  {
    slug: "churches-schools",
    navLabel: "For Churches & Schools",
    eyebrow: "For Churches, Schools & Municipal",
    h1: "Church, School and Municipal Masonry Restoration",
    title: "Church & School Masonry Restoration Chicago | Emerald Masonry LLC",
    metaDescription:
      "Masonry restoration for Chicagoland churches, schools, and municipal buildings — steeple and bell tower masonry, parapet and façade repair, limestone restoration, and historic lime-mortar repointing. Work scheduled around services and school calendars. Call (708) 288-1696.",
    keywords: [
      "church masonry restoration Chicago",
      "school masonry repair Illinois",
      "municipal building masonry repair Chicago",
      "historic masonry restoration Chicagoland",
      "bell tower masonry repair Chicago",
    ],
    aiSummary:
      "Emerald Masonry LLC restores masonry on Chicagoland churches, schools, and municipal buildings — steeple and bell tower work, parapet and façade repair, limestone and cast-stone restoration, and repointing of historic soft-brick walls with lime mortar matched in composition and color. Work is scheduled around service times, school calendars, and public access, and never uses sandblasting on historic masonry. Call " +
      PHONE + ".",
    image: "/images/work/commercial-glass-block-facade.webp",
    imageAlt:
      "Institutional brick façade repointed with restored glass-block window openings",
    sections: [
      {
        heading: "Older buildings need softer mortar",
        body: [
          "Pre-1930s masonry was laid with soft lime mortar over soft brick, and the mortar was designed to be the sacrificial layer — it fails first so the brick does not. Repoint that wall with modern Portland-heavy mortar and the relationship inverts: the joint becomes harder than the brick, and the brick faces start spalling off within five to ten years.",
          "We match mortar by composition and hardness, not just color, and we clean historic masonry with the gentlest effective method. Sandblasting a soft brick wall destroys the fired face and accelerates every problem it was supposed to fix — we do not do it.",
        ],
      },
      {
        heading: "Steeples, bell towers and parapets",
        body: [
          "The tallest and most exposed masonry on a church takes the worst of the weather and is the hardest to inspect from the ground. Steeples, bell towers, and parapets are usually where deterioration is furthest along by the time anyone notices it inside.",
          "We assess these elements up close, document what we find with photographs the congregation or board can actually see, and price access honestly — on a tall or tight site, staging is a real line item and should be shown as one.",
        ],
      },
      {
        heading: "Scheduling around the people who use the building",
        body: [
          "Churches have service times, weddings and funerals. Schools have terms, testing weeks, and dismissal. Municipal buildings have public hours. We build the schedule around all of it, with protected entries and staging that keeps access open.",
          "For congregations and districts funding work through appeals, grants, or capital budgets, we phase the scope so the most urgent conditions are secured first while the rest waits for funding.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you work on historic and landmark-era masonry?",
        answer:
          "Yes. Historic masonry is repointed with lime mortar matched in composition, hardness and color, with careful brick and stone repair and gentle cleaning — never sandblasting, which destroys the fired face of soft historic brick.",
      },
      {
        question: "Can work be scheduled around services and school calendars?",
        answer:
          "Yes, and it should be. We schedule around service times, weddings and funerals, school terms and dismissal, and public hours for municipal buildings, with protected entries so access stays open throughout.",
      },
      {
        question: "How do you handle steeple and bell tower access?",
        answer:
          "Access is assessed and priced as its own line item rather than buried in the repair number. On tall or tight sites, staging and lift access are a real share of the cost and you should be able to see it.",
      },
      {
        question: "Can the project be phased while we raise funds?",
        answer:
          "Yes. We rank conditions by urgency so anything unsafe or actively letting water in is secured first, with the remaining scope held and scheduled as an appeal, grant, or capital budget comes through.",
      },
    ],
  },

  {
    slug: "insurance-restoration",
    navLabel: "Insurance Restoration",
    eyebrow: "For Insurance Carriers & Adjusters",
    h1: "Insurance Masonry Restoration in Chicagoland",
    title: "Insurance Masonry Restoration Chicago | Emerald Masonry LLC",
    metaDescription:
      "Masonry restoration for Chicagoland insurance claims — storm, vehicle impact, fire and water damage to brick, block and stone. Documented scopes, photo evidence, and direct coordination with carriers and adjusters. Call (708) 288-1696.",
    keywords: [
      "insurance masonry restoration Chicago",
      "storm damage brick repair Chicagoland",
      "vehicle impact masonry repair Chicago",
      "insurance claim tuckpointing Illinois",
      "emergency masonry repair Chicago",
    ],
    aiSummary:
      "Emerald Masonry LLC handles masonry restoration on Chicagoland insurance claims — storm and wind damage, vehicle impact, fire, and water damage to brick, block, limestone and cast stone. We document the loss with photographs, write a scope that separates covered damage from pre-existing deterioration, coordinate directly with the carrier or adjuster, and can stabilize an unsafe wall or opening the same day. Call " +
      PHONE + ".",
    image: "/images/work/commercial-parapet-repair.webp",
    imageAlt:
      "Commercial parapet wall repair with new coping after storm-related masonry damage",
    sections: [
      {
        heading: "Separating the loss from the pre-existing condition",
        body: [
          "Most masonry claims turn on one question: how much of this failure was the event, and how much was already there? A parapet that came down in a windstorm was usually deteriorating first.",
          "We document both honestly and separately — the impact or storm damage in one line, the underlying condition in another — so the carrier can settle the covered portion and the owner can decide what to do about the rest. Blurring the two helps nobody and delays the claim.",
        ],
      },
      {
        heading: "Emergency stabilization",
        body: [
          "Loose masonry over a sidewalk, a vehicle-impacted wall, or an open breach in a building envelope is a safety and liability problem before it is a repair problem. We can secure the area, shore an opening, and weather-close a breach quickly, then scope the permanent repair.",
          "Emergency work is documented and invoiced separately from the restoration scope so it is straightforward to submit.",
        ],
      },
      {
        heading: "Matching what was there",
        body: [
          "A repair that reads as a repair is not a restoration. We source matching or salvaged brick and stone for size, color, texture and absorption, and match the mortar so the patch disappears into the wall.",
          "Where an exact match no longer exists — common with Chicago common brick and discontinued face brick — we will tell you before the work starts and show you the closest options rather than after the wall is up.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do you work directly with insurance carriers and adjusters?",
        answer:
          "Yes. We document the loss with photographs, write a scope that separates covered damage from pre-existing deterioration, and coordinate directly with the carrier or adjuster through settlement and completion.",
      },
      {
        question: "Can you respond to an emergency?",
        answer:
          "Yes. Loose masonry over a pedestrian area, vehicle impact damage, or an open breach in the building envelope is prioritized. We can secure, shore, and weather-close quickly, then scope the permanent repair. Call " + PHONE + ".",
      },
      {
        question: "What kinds of masonry damage do you restore on claims?",
        answer:
          "Storm and wind damage, vehicle and equipment impact, fire and heat damage, and water damage to brick, CMU block, limestone and cast stone — including parapets, lintels, façades, chimneys and stacks.",
      },
      {
        question: "Can you match brick that is no longer manufactured?",
        answer:
          "Often, through salvage and close-match sourcing on size, color, texture and absorption. Where an exact match no longer exists — common with Chicago common brick and discontinued face brick — we show you the closest available options before the work starts, not after.",
      },
    ],
  },

  {
    slug: "general-contractors",
    navLabel: "For General Contractors",
    eyebrow: "For General Contractors",
    h1: "Masonry Subcontractor for Chicagoland General Contractors",
    title: "Masonry Subcontractor Chicago | Emerald Masonry LLC",
    metaDescription:
      "Masonry subcontractor for Chicagoland general contractors — tuckpointing, brick and CMU work, lintels, parapets and façade restoration. Bids on your documents, COI and lien waivers on request, and a crew that holds the schedule. Call (708) 288-1696.",
    keywords: [
      "masonry subcontractor Chicago",
      "commercial masonry sub Chicagoland",
      "brick subcontractor Illinois",
      "CMU block subcontractor Chicago",
    ],
    aiSummary:
      "Emerald Masonry LLC works as a masonry subcontractor for Chicagoland general contractors on tuckpointing and repointing, brick and CMU block work, steel lintel replacement, parapet rebuilds, and façade restoration. We bid off your documents, provide certificates of insurance, W-9s and lien waivers on request, coordinate with the other trades on site, and hold the schedule we committed to. Call " +
      PHONE + ".",
    image: "/images/work/commercial-new-brick-wall.webp",
    imageAlt:
      "Newly laid commercial brick wall on a Chicagoland light-industrial building",
    sections: [
      {
        heading: "We bid off your documents",
        body: [
          "Send the drawings and the spec and you get a bid that answers them — scoped, itemized, with inclusions and exclusions written down instead of assumed. If something in the documents will not work in the field, you hear it at bid time, not at rough-in.",
          "Where the masonry scope depends on another trade — flashing, roofing terminations, shelf angles, sealant sequencing — we flag the interface and the sequence we need.",
        ],
      },
      {
        heading: "Paperwork that does not hold up your draw",
        body: [
          "Certificates of insurance naming the parties you need, W-9s, and conditional and unconditional lien waivers on request, returned on your timeline rather than chased.",
          "Daily reports and progress photos if your project requires them, and closeout documentation packaged the way you submit it.",
        ],
      },
      {
        heading: "Holding the schedule",
        body: [
          "Masonry is often on the critical path, and a masonry crew that shows up late pushes every trade behind it. We commit to a manpower plan and staff it.",
          "We work around the other trades on site, coordinate access and staging, and keep the work area clean so the next trade can get in.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will you bid off our drawings and specifications?",
        answer:
          "Yes. We bid off your documents with an itemized scope and written inclusions and exclusions, and we flag anything in the drawings or spec that will not work in the field at bid time rather than during construction.",
      },
      {
        question: "What insurance and lien documentation do you provide?",
        answer:
          "Certificates of insurance naming the parties you require, W-9s, and conditional and unconditional lien waivers on request, returned on your draw schedule.",
      },
      {
        question: "What masonry scopes do you self-perform?",
        answer:
          "Tuckpointing and repointing, brick repair and replacement, CMU block work, steel lintel repair and replacement with flashing, parapet rebuilds and coping, limestone and cast-stone repair, caulking and expansion joints, and masonry waterproofing.",
      },
      {
        question: "How do you coordinate with the other trades?",
        answer:
          "We flag the interfaces that affect masonry — flashing, roofing terminations, shelf angles, sealant sequencing — and agree the sequence up front, then work to the site schedule and keep the area clean for the following trade.",
      },
    ],
  },
];

export default audiences;

export function getAudience(slug: string): Audience | undefined {
  return audiences.find((a) => a.slug === slug);
}
