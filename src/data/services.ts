export type ServiceDiagnostic = {
  title: string;
  description: string;
};

export type ServiceGalleryItem = {
  image: string;
  caption: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  scope: string[];
  heroImage: string;
  diagnostics: ServiceDiagnostic[];
  gallery: ServiceGalleryItem[];
  faqs: ServiceFaq[];
  keywords: string[];
};

const services: Service[] = [
  {
    slug: "tuckpointing",
    title: "Tuckpointing & Repointing",
    subtitle: "Mortar Joint Restoration",
    tagline: "Stop water intrusion at the source — before it reaches the structure.",
    description:
      "Tuckpointing is the single most important maintenance task for any masonry building. Mortar joints are designed to sacrifice themselves over time — taking on weather, freeze-thaw cycles, and water infiltration so the brick or stone doesn't have to. When joints deteriorate past a certain point, water finds its way into the wall assembly, and the damage that follows — spalling brick, cracked lintels, interior moisture, mold — costs far more to correct than the tuckpointing itself.\n\nWe grind out failing mortar completely using angle grinders and oscillating tools, then pack new mortar that matches the original in color, texture, and composition. No skim coats. No patching over soft joints. Every joint is addressed fully or we don't charge you for it.",
    scope: [
      "Full mortar joint removal and replacement",
      "Lintel and header joint restoration",
      "Parapet wall repointing",
      "Expansion joint repair",
      "Historic mortar matching",
      "Multi-elevation commercial tuckpointing",
    ],
    heroImage: "/images/work-tuckpointing.jpg",
    diagnostics: [
      {
        title: "Recessed or Missing Mortar",
        description:
          "Mortar that has receded more than ¼\" from the face of the brick is no longer sealing the joint. Water pools in the recess and drives deeper into the wall with each rain event.",
      },
      {
        title: "Soft or Crumbling Mortar",
        description:
          "Mortar that crumbles easily when probed with a key or screwdriver has lost its structural integrity. This is common in buildings over 30 years old and accelerates rapidly once it starts.",
      },
      {
        title: "Water Staining or Efflorescence",
        description:
          "White mineral deposits on brick faces indicate water is moving through the joints and carrying dissolved salts to the surface. The staining itself is cosmetic — the water path behind it is the problem.",
      },
      {
        title: "Interior Moisture or Staining",
        description:
          "Damp interior walls, water stains near windows, or peeling paint near exterior masonry walls are often direct results of failed mortar joints on the outside.",
      },
      {
        title: "Visible Cracks at Joints",
        description:
          "Hairline cracks along the mortar line — especially diagonal cracks at corners or above window openings — indicate differential movement and need to be repointed before they widen.",
      },
      {
        title: "Previous Patch Work Failing",
        description:
          "Surface patching without proper joint removal never lasts. If you can see previous patches peeling or disbonding from the surrounding mortar, the underlying joint needs to be addressed correctly.",
      },
    ],
    gallery: [
      { image: "/images/work-tuckpointing.jpg", caption: "Commercial tuckpointing — Chicagoland" },
      { image: "/images/tuck-joint-detail.png", caption: "Close-up of deteriorated mortar joints" },
      { image: "/images/tuck-mortar-close.png", caption: "Mortar profile matching — historic property" },
      { image: "/images/tuck-before.png", caption: "Before: failed joint repointing on brick façade" },
    ],
    faqs: [
      {
        question: "How often does tuckpointing need to be done?",
        answer:
          "Quality mortar joints in a well-maintained building last 20–30 years before requiring repointing. Buildings that have been patched instead of properly tuckpointed, or that experience heavy weather exposure, may need attention sooner. A proactive inspection every 10 years is a sound maintenance practice.",
      },
      {
        question: "What's the difference between tuckpointing and repointing?",
        answer:
          "The terms are often used interchangeably. Technically, repointing means removing deteriorated mortar and packing new mortar into the joint. Tuckpointing historically refers to a two-color mortar finish that creates the illusion of fine joints. In common usage — including ours — both terms describe the same fundamental repair: grinding out bad mortar and replacing it properly.",
      },
      {
        question: "Can tuckpointing be done in winter?",
        answer:
          "Fresh mortar must be kept above 40°F for at least 48 hours to cure properly. Winter work is possible with cold-weather protection measures — heated enclosures, insulating blankets, and scheduling around temperature windows — but requires more coordination. We schedule most tuckpointing work between April and November.",
      },
      {
        question: "Do you match the original mortar color?",
        answer:
          "Yes. Mortar color matching is part of every tuckpointing job we do. For historic properties, we assess the original mortar composition (lime-based vs. Portland-based) and match both the color profile and the hardness. Mismatched hardness is as damaging as mismatched color — mortar that's harder than the brick will transfer stress into the brick face instead of the joint.",
      },
    ],
    keywords: [
      "tuckpointing Chicago IL",
      "commercial tuckpointing Chicagoland",
      "mortar joint repair Chicago",
      "repointing contractor Cook County",
      "tuckpointing HOA Chicago",
      "brick repointing near me",
    ],
  },

  {
    slug: "brick-repair",
    title: "Brick Repair & Replacement",
    subtitle: "Spalling, Cracks & Structural Brick Damage",
    tagline: "Individual bricks fail. We replace them before the damage spreads.",
    description:
      "Brick is remarkably durable, but individual bricks fail — through freeze-thaw spalling, physical impact, lintel failure, or settlement. When a brick face spalls away or a brick cracks through, it's no longer functioning as part of the wall system. Water enters, adjacent bricks begin to absorb moisture, and a localized problem becomes a wall-wide issue.\n\nWe source replacement brick that matches your existing material in size, color, texture, and finish — or as close as the market allows. Where exact matches aren't available, we work with you to find the closest option and be transparent about it. Every replacement brick is set in properly mixed mortar and tooled to match the surrounding joints.",
    scope: [
      "Individual and section brick replacement",
      "Spalling brick repair and stabilization",
      "Lintel and header brick repair",
      "Brick pillar and column restoration",
      "Foundation brick repair",
      "Entry steps and decorative brick work",
    ],
    heroImage: "/images/work-brick-repair.jpg",
    diagnostics: [
      {
        title: "Spalling Brick Faces",
        description:
          "When the face of a brick flakes, chips, or pops off, it's called spalling. It's usually caused by water freezing inside a saturated brick. Once a brick face spalls, moisture enters freely and the deterioration accelerates — the exposed interior is far more porous than the fired face.",
      },
      {
        title: "Cracked or Split Bricks",
        description:
          "A crack through the body of a brick — not just the mortar joint — indicates significant stress: settlement, thermal expansion, impact, or lintel failure. Cracked bricks need to be removed and replaced, not patched.",
      },
      {
        title: "Bricks That Sound Hollow",
        description:
          "Tapping a brick that sounds hollow compared to its neighbors means the internal structure has fractured or the brick has separated from the mortar bed behind it. It's a failure waiting to happen.",
      },
      {
        title: "Displaced or Leaning Bricks",
        description:
          "Bricks that have moved from their original position — even slightly — indicate the mortar bed or wall structure behind them has failed. This is a structural concern that requires immediate attention.",
      },
      {
        title: "Stair-Step Cracks",
        description:
          "Diagonal cracks that follow the mortar joints in a stair-step pattern typically indicate differential settlement. The pattern of the crack tells us a lot about what's happening structurally and where the force is originating.",
      },
      {
        title: "Deterioration Around Lintels",
        description:
          "The bricks directly above window and door openings are supported by a steel lintel. When lintels rust and expand, they push the bricks above them outward and downward. The pattern is distinct: a horizontal crack or displacement at the lintel line.",
      },
    ],
    gallery: [
      { image: "/images/work-brick-repair.jpg", caption: "Brick wall repair — Chicagoland" },
      { image: "/images/work-brick-pillar.jpg", caption: "Brick pillar restoration" },
      { image: "/images/hero-mailbox.jpg", caption: "Residential entry pillar and mailbox repair" },
      { image: "/images/brick-spalling.jpg", caption: "Spalling brick — before restoration" },
      { image: "/images/brick-damaged.jpg", caption: "Deteriorated brick façade — assessment" },
      { image: "/images/brick-foundation.jpg", caption: "Foundation brick repair" },
    ],
    faqs: [
      {
        question: "Can you match my original brick?",
        answer:
          "In most cases, yes — closely. Exact matches are sometimes limited by what's currently in production or available through salvage. We source from multiple suppliers and work hard to find the right fit. When a perfect match isn't possible, we'll show you the closest options before any work begins.",
      },
      {
        question: "How do I know if I need brick replacement or just tuckpointing?",
        answer:
          "If the brick faces are intact and only the mortar joints are deteriorated, tuckpointing is the right repair. If the brick itself is cracked, spalling, hollow, or displaced — the brick needs to be replaced. Often both repairs are needed on the same wall.",
      },
      {
        question: "My brick has a crack. Is that structural?",
        answer:
          "Cracks in brick masonry range from cosmetic to serious. A crack through the mortar joint only is usually manageable with repointing. A crack through the brick face, or a pattern of cracks suggesting movement — stair-step diagonal cracks, cracks above openings — warrants a professional assessment before repair. We'll give you an honest assessment on-site.",
      },
      {
        question: "What causes bricks to spall in Chicago?",
        answer:
          "Chicago's freeze-thaw cycle is the primary driver. Water penetrates the brick face — often through failed mortar joints or a saturated wall — and freezes, expanding inside the brick. The expansion breaks the face away from the body of the brick. High-absorption brick in particularly exposed locations (parapets, chimneys, north-facing walls) is most vulnerable.",
      },
    ],
    keywords: [
      "brick repair Chicago",
      "spalling brick repair Chicagoland",
      "brick replacement contractor Cook County",
      "lintel repair Chicago IL",
      "brick pillar repair Illinois",
      "foundation brick repair Chicago suburbs",
    ],
  },

  {
    slug: "chimney-repair",
    title: "Chimney Repair & Rebuilds",
    subtitle: "Crown, Cap, Tuckpointing & Full Reconstruction",
    tagline: "The chimney is the most exposed masonry on the building. It shows first.",
    description:
      "Chimneys take more weather abuse than any other part of a masonry structure — fully exposed on all four sides, including the top, with no roof overhang for protection. Mortar joints fail faster, crowns crack, caps fail, and bricks begin to spall and come loose. What starts as a maintenance item becomes a structural concern faster than most property owners expect.\n\nWe handle everything from chimney tuckpointing and crown repair to partial rebuilds and full reconstructions. We assess the entire chimney — from the flashing at the roofline to the crown and cap — and give you a clear scope of what needs to happen now and what can wait.",
    scope: [
      "Chimney tuckpointing and repointing",
      "Crown repair and replacement",
      "Cap repair and installation",
      "Partial chimney rebuilds",
      "Full chimney reconstruction",
      "Flashing and waterproofing",
    ],
    heroImage: "/images/work-chimney-rebuild.jpg",
    diagnostics: [
      {
        title: "Cracked or Deteriorated Crown",
        description:
          "The chimney crown is the mortar or concrete cap that covers the top of the chimney stack, directing water away from the flue. Cracks in the crown allow water to enter directly into the chimney structure — the most vulnerable point. A failing crown is among the most common chimney repairs we perform.",
      },
      {
        title: "Spalling or Missing Bricks",
        description:
          "Bricks at the top of the chimney are fully exposed on all sides. Spalling brick faces or missing bricks allow water to penetrate the chimney core. Loose bricks near the top of a chimney are a safety concern and require immediate attention.",
      },
      {
        title: "Deteriorated Mortar Joints",
        description:
          "Chimney mortar joints fail faster than wall mortar due to full weather exposure and the expansion/contraction from heat cycling inside the flue. Tuckpointing a chimney every 15–20 years is standard preventive maintenance.",
      },
      {
        title: "Rust Staining on Brick",
        description:
          "Brown or orange staining on chimney brick typically indicates a failing metal cap or flue liner. Water is entering the flue and rusting metal components, running down the outside of the chimney.",
      },
      {
        title: "Water in the Firebox",
        description:
          "If you're finding water inside the firebox after rain, the crown, cap, flashing, or liner is failing. The water is finding a path down the inside of the chimney. Exterior masonry deterioration often follows interior moisture problems.",
      },
      {
        title: "Leaning or Separated Structure",
        description:
          "A chimney that has begun to lean or separate from the house structure has a foundation or structural issue that requires immediate assessment. This is not a cosmetic repair.",
      },
    ],
    gallery: [
      { image: "/images/work-chimney-rebuild.jpg", caption: "Full chimney rebuild — Chicagoland" },
      { image: "/images/work-chimney-new.jpg", caption: "Chimney reconstruction complete" },
      { image: "/images/chimney-before.png", caption: "Chimney before restoration" },
      { image: "/images/chimney-tuck.png", caption: "Chimney tuckpointing in progress" },
      { image: "/images/chimney-cap.png", caption: "Crown and cap repair" },
      { image: "/images/chimney-crown.png", caption: "Crown replacement — brick chimney" },
    ],
    faqs: [
      {
        question: "How do I know if my chimney needs tuckpointing vs. a rebuild?",
        answer:
          "If the brick is structurally sound and only the mortar joints have deteriorated, tuckpointing is the right repair. If bricks are loose, spalling significantly, or the chimney has begun to lean or settle, a partial or full rebuild is likely necessary. We assess both scenarios on-site and give you a clear recommendation.",
      },
      {
        question: "Can you do chimney work without scaffolding?",
        answer:
          "Shorter chimneys and lower-slope roofs can sometimes be accessed safely with ladder staging. Taller chimneys or steep-pitch roofs require proper scaffolding for safety and quality. We build the scaffolding — it's factored into the project scope.",
      },
      {
        question: "What is a chimney crown and why does it matter?",
        answer:
          "The crown is the mortar or concrete surface that caps the top of the chimney stack, sloping away from the flue to direct water off the chimney. A cracked crown lets water in directly at the most exposed point of the structure — it's usually the first component to fail and the most cost-effective early repair.",
      },
      {
        question: "My chimney hasn't been used in years. Does it still need maintenance?",
        answer:
          "Yes. Unused chimneys are still exposed to weather on all four sides, and mortar still deteriorates from freeze-thaw cycles regardless of heat cycling from the flue. If anything, unused chimneys are sometimes more neglected because the interior warning signs — smoke problems, water in the firebox — aren't noticed.",
      },
    ],
    keywords: [
      "chimney repair Chicago",
      "chimney rebuild Chicagoland",
      "chimney tuckpointing Cook County",
      "chimney crown repair Illinois",
      "brick chimney restoration Chicago",
      "chimney contractor Chicago suburbs",
    ],
  },

  {
    slug: "masonry-restoration",
    title: "Masonry Restoration",
    subtitle: "Full Façade & Structural Masonry Rehabilitation",
    tagline: "Large-scale deterioration requires a systematic approach — not a patch.",
    description:
      "Full masonry restoration goes beyond individual repairs. It's a systematic assessment and rehabilitation of an entire building envelope — multiple elevations, multiple failure points, often years of deferred maintenance layered on top of each other. This is where Emerald Masonry does its most meaningful work.\n\nWe work with property managers, building owners, and HOAs on projects that require a contractor who can assess the full scope honestly, develop a phased plan that works within budget cycles, and deliver consistent quality across large footprints. We don't oversell scope, and we don't cut scope to hit a number.",
    scope: [
      "Full-building masonry assessment and reporting",
      "Phased restoration planning",
      "Multi-elevation tuckpointing and brick repair",
      "Historic façade preservation",
      "Parapet wall reconstruction",
      "Waterproofing and sealant application at scale",
    ],
    heroImage: "/images/hero-walkway.jpg",
    diagnostics: [
      {
        title: "Widespread Mortar Joint Failure",
        description:
          "When deteriorated mortar joints appear across multiple elevations rather than isolated areas, the building needs a systematic restoration plan — not spot repairs that will be revisited every few years.",
      },
      {
        title: "Parapet Wall Deterioration",
        description:
          "Parapet walls — the masonry above the roofline — are fully exposed on both faces and take the most weather abuse of any wall section. Failed mortar, open cap joints, and missing coping allow water to enter at the most critical transition point of the building.",
      },
      {
        title: "Water Infiltration at Multiple Points",
        description:
          "Active water intrusion at multiple locations on the building envelope suggests the masonry has crossed a threshold — isolated repairs won't address the underlying deterioration. A full assessment is needed to understand the true scope.",
      },
      {
        title: "Previous Improper Repairs",
        description:
          "Buildings that have been patched repeatedly with mismatched or incompatible materials often require more extensive work to remove failed patches before proper restoration can begin. This is common in older buildings with a history of deferred maintenance.",
      },
      {
        title: "Structural Movement or Settlement Cracks",
        description:
          "Diagonal cracks, stair-step patterns, or horizontal cracks at floor lines can indicate structural settlement or differential movement. These need to be assessed and stabilized before cosmetic restoration work can hold.",
      },
      {
        title: "Spalling at Scale",
        description:
          "When spalling brick appears across a significant percentage of a wall face — not just isolated bricks — the wall may need systematic brick replacement alongside repointing to achieve a durable result.",
      },
    ],
    gallery: [
      { image: "/images/hero-walkway.jpg", caption: "Walkway and entry restoration" },
      { image: "/images/restoration-facade.jpg", caption: "Full façade restoration — Chicagoland" },
      { image: "/images/restoration-steps.png", caption: "Masonry steps and entry rehabilitation" },
      { image: "/images/restoration-wall.png", caption: "Multi-elevation wall restoration" },
      { image: "/images/restoration-parapet.png", caption: "Parapet wall reconstruction" },
      { image: "/images/restoration-commercial.jpg", caption: "Commercial masonry restoration" },
    ],
    faqs: [
      {
        question: "Do you provide written assessment reports?",
        answer:
          "Yes. For full building assessments, we document conditions on all elevations, photograph the key failure points, and provide a written scope with prioritized recommendations. This is useful for board presentations, insurance documentation, and phased budget planning.",
      },
      {
        question: "Can restoration be done in phases?",
        answer:
          "Yes, and for larger buildings it often has to be. We help prioritize — addressing the most critical failure points first (active water intrusion, structural concerns, parapet walls) while planning subsequent phases around budget and operational constraints. We build the phased plan before work starts so there are no surprises.",
      },
      {
        question: "Do you work with historic buildings?",
        answer:
          "Yes. Historic masonry restoration requires a different approach — matching original mortar hardness and composition, preserving original brick profiles, and using methods that don't damage the historic fabric of the building. We've worked on buildings ranging from 50 to over 100 years old across Chicagoland.",
      },
      {
        question: "What is a parapet wall and why does it fail first?",
        answer:
          "A parapet is the masonry wall that extends above the roof line. It's exposed to weather on three sides — front, back, and top — making it the most vulnerable section of any masonry building. Parapet deterioration is often the first sign that a building's masonry envelope needs attention.",
      },
    ],
    keywords: [
      "masonry restoration Chicago",
      "facade restoration Chicagoland",
      "historic masonry restoration Illinois",
      "parapet wall repair Chicago",
      "building envelope restoration Cook County",
      "commercial masonry rehabilitation Chicago",
    ],
  },

  {
    slug: "waterproofing",
    title: "Efflorescence Removal & Waterproofing",
    subtitle: "Surface Treatment, Sealing & Water Management",
    tagline: "White stains are a symptom. Water in the wall is the problem.",
    description:
      "Efflorescence — the white or gray powder that appears on brick and masonry surfaces — is dissolved mineral salts being carried to the surface by water moving through the wall. The staining itself is cosmetic, but it's a reliable indicator that water is finding its way through the masonry and depositing material as it evaporates. Left unaddressed, the underlying water movement causes ongoing mortar deterioration and eventual brick damage.\n\nWe identify the source of water entry first, address the masonry deficiencies causing it, then treat and seal the surface. Waterproofing applied over failed joints or active water infiltration doesn't work — it traps water inside the wall and makes things worse. Sequence matters.",
    scope: [
      "Efflorescence cleaning and removal",
      "Penetrating masonry sealant application",
      "Surface waterproofing coatings",
      "Joint sealing and caulking",
      "Weep hole cleaning and restoration",
      "Water infiltration source identification",
    ],
    heroImage: "/images/work-efflorescence.jpg",
    diagnostics: [
      {
        title: "White or Gray Powder on Brick",
        description:
          "Classic efflorescence — dissolved salts deposited on the surface as water evaporates. The mineral deposit itself is harmless but indicates active water movement through the wall. The source needs to be found and addressed.",
      },
      {
        title: "Dark Staining or Wet Spots After Rain",
        description:
          "Areas of brick that remain visibly darker or wet for longer periods after rain are absorbing more water than surrounding masonry. This indicates higher porosity in those sections — from failed joints, damaged brick, or inadequate waterproofing.",
      },
      {
        title: "Recurring Efflorescence After Cleaning",
        description:
          "If efflorescence has been cleaned previously but returns within a season or two, the underlying water path hasn't been addressed. Cleaning without source repair is temporary.",
      },
      {
        title: "Interior Damp Walls",
        description:
          "Moisture on interior wall surfaces adjacent to exterior masonry, especially at lower levels or below grade, can indicate water moving through the masonry wall assembly. The exterior surface treatment needs to accompany any interior remediation.",
      },
      {
        title: "Rust Staining",
        description:
          "Orange or brown staining on masonry surfaces typically indicates a metal component — lintel, tie, or reinforcement — is rusting inside or behind the wall. Water is the cause; the rust staining is the signal.",
      },
      {
        title: "Staining at Horizontal Joints Only",
        description:
          "When efflorescence or staining appears specifically at horizontal mortar joints, the cap joints at wall tops, window sills, or copings are allowing water in. These horizontal surfaces collect standing water and deteriorate faster than vertical joints.",
      },
    ],
    gallery: [
      { image: "/images/work-efflorescence.jpg", caption: "Efflorescence removal and treatment" },
      { image: "/images/efflor-detail.png", caption: "Salt deposit analysis before treatment" },
      { image: "/images/efflor-wall.jpg", caption: "Masonry waterproofing — commercial property" },
    ],
    faqs: [
      {
        question: "Will a waterproofing sealer prevent all future water problems?",
        answer:
          "A properly applied penetrating sealer significantly reduces water absorption into the masonry. It is not a substitute for proper mortar joints and sound brick. Sealers applied over failing mortar or active infiltration paths don't work — the water finds another way in, often with worse results because it can't escape.",
      },
      {
        question: "Can I clean efflorescence myself?",
        answer:
          "Surface efflorescence can be cleaned with diluted muriatic acid or specialized masonry cleaners. The cleaning is secondary to finding and addressing the water source. If you clean it and it returns within a season, the underlying problem hasn't been solved.",
      },
      {
        question: "How long does a masonry sealant last?",
        answer:
          "Quality penetrating sealers last 5–10 years depending on the product, the porosity of the substrate, and the weather exposure of the surface. Parapets, north-facing walls, and below-grade surfaces need more frequent attention.",
      },
      {
        question: "Does waterproofing change the look of the brick?",
        answer:
          "Penetrating sealers absorb into the masonry and are invisible once cured — they don't change the appearance of the surface. Surface coatings can add a slight sheen. We discuss the product options and their visual effects before application.",
      },
    ],
    keywords: [
      "efflorescence removal Chicago",
      "masonry waterproofing Chicagoland",
      "brick sealing Cook County",
      "masonry water infiltration repair Illinois",
      "waterproofing contractor Chicago",
      "brick stain removal Chicago suburbs",
    ],
  },

  {
    slug: "commercial",
    title: "Commercial & Industrial Masonry",
    subtitle: "Large-Scale Restoration for Commercial Properties",
    tagline: "Commercial masonry requires a contractor who shows up, communicates, and delivers.",
    description:
      "Commercial masonry is a different discipline than residential repair. The scale is larger, the stakes are higher, the scheduling is more complex, and the client — whether a property manager, insurance adjuster, or building owner — needs a contractor who can manage the project as a professional partner rather than just a crew that shows up.\n\nWe work with property management companies, HOAs, insurance companies, and commercial building owners on projects ranging from single-building assessments to multi-phase restorations across multiple properties. We provide written scopes, phase-based scheduling, regular progress communication, and documentation throughout the project.",
    scope: [
      "Commercial tuckpointing and repointing",
      "CMU block repair and replacement",
      "Multi-building and portfolio contracts",
      "Insurance restoration and documentation",
      "Phased restoration planning and execution",
      "Post-storm damage assessment and repair",
    ],
    heroImage: "/images/work-commercial.jpg",
    diagnostics: [
      {
        title: "Widespread Mortar Failure Across Elevations",
        description:
          "When mortar joint deterioration appears across multiple wall faces of a commercial building, the project needs a systematic approach — not spot repairs. We assess all elevations and develop a scope that addresses the full envelope.",
      },
      {
        title: "CMU Block Damage",
        description:
          "Concrete masonry unit (CMU) block walls develop specific failure modes: cracked block faces, failed mortar joints, moisture intrusion at control joints, and core deterioration. CMU repair requires different materials and techniques than brick masonry.",
      },
      {
        title: "Post-Storm or Impact Damage",
        description:
          "Hail damage to masonry is often misidentified or underestimated. We work directly with insurance adjusters to document damage, provide accurate scopes, and complete work that meets carrier requirements.",
      },
      {
        title: "Active Water Intrusion",
        description:
          "Water entering a commercial building through masonry failures causes interior finish damage, mold growth, and accelerating structural deterioration. When water infiltration is active, it's an urgent repair regardless of project budget cycles.",
      },
      {
        title: "Lintel Failure at Scale",
        description:
          "Commercial buildings with many window and door openings often show lintel failure at multiple locations simultaneously — rust expansion pushing brick out of alignment above openings. This needs to be identified and scoped across all affected lintels.",
      },
      {
        title: "Deferred Maintenance Accumulation",
        description:
          "Commercial properties with years of deferred masonry maintenance often have multiple overlapping issues: failed joints, spalling brick, failed previous patches, and water damage. The restoration scope is larger, but so is the risk of continued deterioration.",
      },
    ],
    gallery: [
      { image: "/images/work-commercial.jpg", caption: "Commercial masonry restoration" },
      { image: "/images/jobs/ulta-beauty-block-repair-merrillville/during-01.jpeg", caption: "CMU block repair — commercial retail" },
      { image: "/images/restoration-commercial.jpg", caption: "Large-scale masonry rehabilitation" },
    ],
    faqs: [
      {
        question: "Do you work directly with insurance adjusters?",
        answer:
          "Yes. We work with insurance companies, TPAs, and adjusters regularly. We provide damage documentation, written scopes, and before/after photo documentation in a format that supports the claims process. We understand what adjusters need and we build our estimates accordingly.",
      },
      {
        question: "Can you handle multiple properties at once?",
        answer:
          "Yes. We work with property management companies on portfolio contracts — multiple buildings across multiple locations. We coordinate scheduling, maintain consistent documentation, and assign experienced crews who know the portfolio.",
      },
      {
        question: "How do you handle occupied buildings during restoration?",
        answer:
          "Commercial masonry restoration on occupied buildings requires careful staging, clear communication with tenants, and realistic scheduling around business operations. We develop a project-specific plan with the property manager before work begins. Access, noise, debris management, and sequencing are all part of the scope.",
      },
      {
        question: "What is your minimum commercial project size?",
        answer:
          "Our minimum for commercial projects is $5,000. Most commercial masonry restoration scopes are significantly larger. We don't take small patch jobs — our capacity is best used on full-scope work where we can deliver a durable result.",
      },
    ],
    keywords: [
      "commercial masonry contractor Chicago",
      "commercial tuckpointing Chicagoland",
      "CMU block repair Chicago",
      "insurance masonry restoration Chicago",
      "property management masonry contractor Illinois",
      "commercial brick repair Cook County",
    ],
  },
];

export default services;

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
