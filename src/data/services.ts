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

export type ServiceComparison = {
  heading: string;
  body: string;
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
  // GEO / answer-engine fields (optional, backward-compatible)
  aiSummary?: string; // 40–60 word answer-first, AI-citable
  materials?: string[]; // materials/products used
  priceFactors?: string[]; // what drives cost (no exact prices)
  comparisons?: ServiceComparison[]; // decision/comparison blocks
  relatedServices?: string[]; // slugs of related services
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
    aiSummary:
      "Emerald Masonry LLC is a family-owned, licensed and insured tuckpointing contractor serving Chicago and the surrounding suburbs with 40+ years of experience. We grind out failing mortar to full depth and repoint with color- and hardness-matched mortar on residential and commercial brick. Free on-site estimates — call (708) 288-1696.",
    materials: [
      "Type N and Type S mortar matched to the wall's age and strength",
      "Lime-based mortar for soft, historic brick",
      "Color-matched pigments to blend with existing joints",
      "Diamond-blade grinders and oscillating tools for clean joint removal",
    ],
    priceFactors: [
      "Total linear footage of joints to be repointed",
      "Building height and the access needed (ladders, scaffolding, or lift)",
      "Spot repointing one elevation vs. full-building repointing",
      "Mortar matching difficulty on historic or custom-color walls",
      "Condition of the brick and how much also needs replacement",
    ],
    comparisons: [
      {
        heading: "Tuckpointing vs. brick replacement",
        body:
          "If the brick faces are sound and only the mortar joints are recessed or crumbling, tuckpointing is the correct, cost-effective repair. If the brick itself is cracked, spalling, or hollow, those units need replacement. Many walls need both — we repoint the joints and replace the failed brick in one visit.",
      },
    ],
    relatedServices: ["brick-repair", "brick-replacement", "masonry-sealing", "chimney-repair"],
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
    aiSummary:
      "Emerald Masonry LLC repairs damaged, cracked, and spalling brick across Chicago and the suburbs. We cut out failed units and reset matching brick in properly mixed mortar so the wall sheds water again. Family-owned, licensed and insured, 40+ years. Free on-site estimates — call (708) 288-1696.",
    materials: [
      "Replacement brick matched to size, color, and texture",
      "Salvaged brick for discontinued or historic profiles",
      "Type N / Type S mortar matched to the surrounding joints",
      "Stainless or hot-dipped masonry ties where re-anchoring is needed",
    ],
    priceFactors: [
      "Number of brick units that need replacement",
      "How difficult it is to source a matching brick",
      "Access and height of the damaged area",
      "Whether the cause (lintel rust, water entry) also needs repair",
    ],
    comparisons: [
      {
        heading: "Brick repair vs. full restoration",
        body:
          "Isolated cracked or spalled brick is a targeted repair. When deterioration spans whole elevations along with widespread joint failure, a systematic restoration is more durable and cost-effective than chasing individual bricks year after year.",
      },
    ],
    relatedServices: ["brick-replacement", "tuckpointing", "lintel-repair", "masonry-restoration"],
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
    aiSummary:
      "Emerald Masonry LLC repairs and rebuilds brick chimneys throughout Chicago and the suburbs — crown repair, tuckpointing, cap and flashing work, and full rebuilds. The chimney is the most weather-exposed masonry on a building, so it fails first. Family-owned, licensed and insured, 40+ years. Call (708) 288-1696.",
    materials: [
      "Poured or pre-cast chimney crowns with proper overhang and drip edge",
      "Stainless steel chimney caps",
      "Weather-matched mortar for repointing",
      "New step and counter-flashing at the roofline",
    ],
    priceFactors: [
      "Crown repair vs. partial rebuild vs. full reconstruction",
      "Chimney height and roof pitch (scaffolding vs. ladder access)",
      "Amount of spalled brick to replace",
      "Whether flashing and cap also need replacement",
    ],
    comparisons: [
      {
        heading: "Chimney repair vs. chimney rebuild",
        body:
          "If the brick is sound and only joints, crown, or cap have failed, a repair restores it. If bricks are loose or spalling across courses, or the stack is leaning, a partial or full rebuild from a sound course up is the lasting fix. We assess both on-site and recommend the smaller scope when it will actually hold.",
      },
    ],
    relatedServices: ["tuckpointing", "brick-repair", "masonry-sealing", "parapet-wall-repair"],
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
    aiSummary:
      "Emerald Masonry LLC provides full-scope masonry restoration across Chicagoland — repointing, brick replacement, lintel and parapet repair, and waterproofing planned together so the whole building envelope ends up sound. We work with property managers, HOAs, and churches, with phased plans and written assessments. Call (708) 288-1696.",
    materials: [
      "Mortar matched in strength and color per elevation",
      "Replacement and salvaged brick to match existing",
      "Replacement steel lintels and shelf angles",
      "Breathable penetrating water repellents",
    ],
    priceFactors: [
      "Number of elevations and total building size",
      "Mix of repointing, brick replacement, and structural work",
      "Access (scaffolding, swing stage, or lift)",
      "Whether the work is phased over multiple budget cycles",
    ],
    comparisons: [
      {
        heading: "When repair becomes full restoration",
        body:
          "Once mortar is failing on multiple elevations, brick is spalling on the weather faces, and water is entering from several points, patching piece by piece costs more over time than a coordinated restoration. Restoration sequences the structural and water-entry fixes first, then the envelope work.",
      },
    ],
    relatedServices: ["tuckpointing", "parapet-wall-repair", "historic-masonry-restoration", "commercial"],
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
    aiSummary:
      "Emerald Masonry LLC removes efflorescence and waterproofs brick and masonry across Chicagoland. We find and fix the water source first, then clean and apply a breathable penetrating sealer — never a film coating that traps moisture. Family-owned, licensed and insured, 40+ years. Call (708) 288-1696.",
    materials: [
      "Breathable penetrating silane/siloxane water repellents",
      "Masonry-safe efflorescence and stain cleaners",
      "Backer rod and elastomeric sealant for control joints",
      "Replacement weep-hole vents for cavity drainage",
    ],
    priceFactors: [
      "Square footage of wall to clean and treat",
      "Extent of underlying joint or brick repair needed first",
      "Product selected and number of coats",
      "Access and surface height",
    ],
    comparisons: [
      {
        heading: "Sealing vs. repointing — order matters",
        body:
          "Sealer applied over failed joints traps water inside the wall and accelerates spalling. The correct sequence is to repoint and repair first, then clean, then seal. Waterproofing protects sound masonry — it does not fix a wall that is still letting water in.",
      },
    ],
    relatedServices: ["masonry-sealing", "tuckpointing", "caulking", "power-washing"],
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
    aiSummary:
      "Emerald Masonry LLC is a commercial and industrial masonry contractor serving Chicagoland — tuckpointing, CMU block repair, facade restoration, and insurance work for property managers, HOAs, churches, and building owners. Written scopes, phased scheduling, and documentation throughout. Licensed, bonded, and insured. Call (708) 288-1696.",
    materials: [
      "Commercial-grade Type S mortar for structural masonry",
      "CMU block matched to existing units",
      "Replacement steel lintels and shelf angles",
      "Sealants and waterproofing rated for commercial envelopes",
    ],
    priceFactors: [
      "Building size, number of elevations, and stories",
      "Access method (scaffolding, swing stage, boom lift)",
      "Single building vs. multi-property portfolio",
      "Whether the work is insurance-related and needs documentation",
    ],
    comparisons: [
      {
        heading: "Commercial masonry vs. a general handyman",
        body:
          "Commercial masonry needs a contractor who provides written scopes, carries the right insurance, builds proper access, and documents the work for boards and adjusters. A handyman patch may look fine briefly but rarely addresses the cause — and rarely holds up to a Chicago freeze-thaw winter.",
      },
    ],
    relatedServices: ["commercial-masonry-restoration", "masonry-restoration", "tuckpointing", "parapet-wall-repair"],
  },

  {
    slug: "brick-replacement",
    title: "Brick Replacement",
    subtitle: "Cutting Out & Matching Failed Brick",
    tagline: "When a brick can't be saved, the right replacement disappears into the wall.",
    description:
      "Brick replacement is what's needed when individual units have failed beyond repair — spalled faces, cracks through the body, hollow units, or bricks pushed out of plane. The work is part craft, part sourcing: the cut-out has to be clean so the surrounding brick isn't damaged, and the replacement has to match the original in size, color, and texture closely enough that the repair disappears.\n\nWe remove failed brick without disturbing sound neighbors, source the closest available match — including salvage for discontinued profiles — and set each unit in mortar matched to the existing joints. Where an exact match isn't on the market, we show you the closest options before we start.",
    scope: [
      "Single-unit and section brick replacement",
      "Spalled and cracked brick removal",
      "Matching brick sourcing and salvage",
      "Re-anchoring with masonry ties where needed",
      "Mortar matching and joint tooling",
      "Replacement around lintels and openings",
    ],
    heroImage: "/images/work-brick-repair.jpg",
    diagnostics: [
      {
        title: "Spalled or Flaking Faces",
        description:
          "When the fired face of a brick has popped off, the porous interior is exposed and the unit absorbs water freely. Spalled brick can't be patched — it has to be cut out and replaced before adjacent units start to fail.",
      },
      {
        title: "Cracks Through the Brick Body",
        description:
          "A crack running through the brick itself (not just the joint) means the unit has lost integrity from stress, impact, or lintel movement. Cracked units are removed and replaced, not filled.",
      },
      {
        title: "Hollow-Sounding or Loose Brick",
        description:
          "Brick that sounds hollow when tapped, or that has shifted from its original plane, has separated from its mortar bed. These are replacement candidates and, near the top of a wall, a safety concern.",
      },
      {
        title: "Mismatched Prior Repairs",
        description:
          "Earlier replacements done with the wrong brick or mortar stand out and often perform poorly. We can re-do mismatched patches so the wall reads as one surface again.",
      },
    ],
    gallery: [
      { image: "/images/work-brick-repair.jpg", caption: "Brick replacement — Chicagoland" },
      { image: "/images/brick-spalling.jpg", caption: "Spalled brick before replacement" },
      { image: "/images/brick-damaged.jpg", caption: "Failed units identified for cut-out" },
      { image: "/images/work-brick-pillar.jpg", caption: "Section replacement on a brick pillar" },
    ],
    faqs: [
      {
        question: "Can you match my existing brick?",
        answer:
          "In most cases, yes — closely. We source from multiple suppliers and use salvaged brick for discontinued profiles. When an exact match isn't available, we show you the closest options before any work begins so there are no surprises.",
      },
      {
        question: "Do I need brick replacement or just tuckpointing?",
        answer:
          "If only the mortar joints are deteriorated and the brick faces are intact, tuckpointing is the right repair. If the brick itself is spalled, cracked, hollow, or displaced, those units need replacement. Many walls need both at once.",
      },
      {
        question: "Will the replacement be noticeable?",
        answer:
          "Done well, a replacement blends into the wall. The keys are matching the brick's size, color, and texture and matching the mortar color and joint profile. New brick may look slightly cleaner at first and weathers in over time.",
      },
      {
        question: "What causes brick to fail in the Chicago area?",
        answer:
          "Freeze-thaw is the main driver. Water enters a brick — usually through failed joints — then freezes and expands, breaking the face away. North-facing walls, parapets, and chimneys are the most exposed and tend to fail first.",
      },
    ],
    keywords: [
      "brick replacement Chicago",
      "brick replacement contractor Chicagoland",
      "matching brick replacement Cook County",
      "spalled brick replacement Illinois",
      "replace damaged brick Chicago suburbs",
      "brick masonry replacement near me",
    ],
    aiSummary:
      "Emerald Masonry LLC replaces failed, spalled, and cracked brick across Chicago and the suburbs, sourcing matching or salvaged units so the repair disappears into the wall. Family-owned, licensed and insured, 40+ years. Free on-site estimates — call (708) 288-1696.",
    materials: [
      "Replacement brick matched to size, color, and texture",
      "Salvaged brick for discontinued or historic profiles",
      "Type N / Type S mortar matched to existing joints",
      "Stainless or hot-dipped masonry ties",
    ],
    priceFactors: [
      "Number of units to replace",
      "Difficulty of sourcing a match",
      "Access and height of the work",
      "Whether the underlying cause also needs repair",
    ],
    comparisons: [
      {
        heading: "Brick replacement vs. tuckpointing",
        body:
          "Tuckpointing renews the mortar; brick replacement renews the units themselves. If the brick faces are sound, you only need tuckpointing. If the brick is cracked or spalling, replacement is the only durable fix — and a wall often needs both.",
      },
    ],
    relatedServices: ["brick-repair", "tuckpointing", "lintel-repair", "masonry-restoration"],
  },

  {
    slug: "lintel-repair",
    title: "Lintel Repair & Replacement",
    subtitle: "Rusting Steel Above Windows & Doors",
    tagline: "Rusting steel lifts the brick above it. Caught early, it's a contained repair.",
    description:
      "A lintel is the steel angle that carries the brick above a window or door opening. When that steel corrodes, it expands — a process called rust jacking — and pushes the masonry above it upward and outward. The telltale signs are a horizontal crack at the lintel line, brick lifting above an opening, and rust staining bleeding down the wall.\n\nWe repair or replace failing lintels: removing the brick above the opening, taking out the corroded steel, installing a properly coated or galvanized replacement, and rebuilding the masonry with matching brick and mortar. Caught early, it's a contained repair. Left alone, rust jacking damages an ever-widening section of wall.",
    scope: [
      "Corroded steel lintel replacement",
      "Lintel coating and rust treatment",
      "Brick rebuild above openings",
      "Shelf angle repair on commercial buildings",
      "Matching brick and mortar restoration",
      "Multi-opening lintel assessment",
    ],
    heroImage: "/images/work-commercial.jpg",
    diagnostics: [
      {
        title: "Horizontal Crack Above an Opening",
        description:
          "A straight horizontal crack at the top of a window or door, often with the brick course lifted, is the classic sign of a lintel rusting and expanding beneath it.",
      },
      {
        title: "Rust Staining Below the Lintel Line",
        description:
          "Orange-brown streaks running down the brick from the lintel line mean the steel is actively corroding and shedding rust through the masonry.",
      },
      {
        title: "Gaps or Displaced Brick at the Header",
        description:
          "Brick that has lifted, separated, or opened up directly above an opening indicates the lintel below is expanding and losing its load-bearing capacity.",
      },
      {
        title: "Multiple Openings Affected",
        description:
          "On older buildings, lintels installed at the same time tend to fail around the same time. When one shows symptoms, the others usually warrant inspection.",
      },
    ],
    gallery: [
      { image: "/images/work-commercial.jpg", caption: "Lintel replacement — commercial opening" },
      { image: "/images/brick-damaged.jpg", caption: "Brick displacement above a failing lintel" },
      { image: "/images/restoration-wall.png", caption: "Masonry rebuilt above a new lintel" },
    ],
    faqs: [
      {
        question: "How do I know if my lintel is failing?",
        answer:
          "Look for a horizontal crack at the top of a window or door, brick that has lifted above the opening, and rust staining running down the wall. Those three signs together almost always mean the steel lintel is corroding and expanding.",
      },
      {
        question: "Can a lintel be repaired or does it need full replacement?",
        answer:
          "It depends on how far the corrosion has progressed. Lightly rusted steel can sometimes be cleaned and coated, but heavily corroded lintels that have lost section need replacement. We assess the steel once the masonry above is opened up.",
      },
      {
        question: "What happens if I ignore a rusting lintel?",
        answer:
          "Rust jacking is progressive. The steel keeps expanding, lifting and cracking more brick over a widening area, and eventually the masonry above the opening loses support. A contained repair now is far cheaper than a large rebuild later.",
      },
      {
        question: "Why do lintels rust in the Chicago area?",
        answer:
          "Water reaching the steel — through failed joints, missing flashing, or porous brick — combined with freeze-thaw cycling drives corrosion. Lintels with no protective flashing above them are especially vulnerable.",
      },
    ],
    keywords: [
      "lintel repair Chicago",
      "lintel replacement Chicagoland",
      "rusted lintel repair Cook County",
      "steel lintel replacement Illinois",
      "brick lintel repair Chicago suburbs",
      "window lintel repair near me",
    ],
    aiSummary:
      "Emerald Masonry LLC repairs and replaces rusting steel lintels above windows and doors across Chicagoland, then rebuilds the masonry above with matching brick. Caught early, it's a contained repair. Family-owned, licensed and insured, 40+ years. Call (708) 288-1696.",
    materials: [
      "Galvanized or coated replacement steel lintels",
      "Rust-converting and protective coatings",
      "Through-wall flashing above the lintel",
      "Matching brick and mortar for the rebuild",
    ],
    priceFactors: [
      "Number of lintels affected",
      "Length of each opening",
      "Amount of brick to remove and rebuild",
      "Access and building height",
    ],
    comparisons: [
      {
        heading: "Lintel repair vs. waiting",
        body:
          "Lintel corrosion only worsens. A single-opening repair is contained and predictable; deferring it lets rust jacking damage more brick and can turn a one-lintel job into a multi-opening rebuild.",
      },
    ],
    relatedServices: ["brick-repair", "brick-replacement", "tuckpointing", "commercial"],
  },

  {
    slug: "parapet-wall-repair",
    title: "Parapet Wall Repair",
    subtitle: "Roofline Masonry & Coping",
    tagline: "Exposed on three sides with no roof above it, the parapet fails first.",
    description:
      "A parapet is the section of wall that rises above the roofline. Exposed to weather on the front, the back, and the top — with no roof overhang to protect it — it takes more abuse than any other masonry on the building and is usually the first to fail. Failed parapets leak into the top floor, drop mortar and brick to the sidewalk, and lean over time into a genuine safety hazard.\n\nWe repair and rebuild parapets: full-depth repointing on both faces, brick replacement, resetting or replacing coping on proper flashing, and partial or full rebuilds where the wall has gone out of plumb. The details that make it last — through-wall flashing, coping with overhang and drip edge — are exactly the ones most failing parapets never had.",
    scope: [
      "Parapet repointing (both faces)",
      "Coping reset and replacement",
      "Through-wall flashing installation",
      "Partial and full parapet rebuilds",
      "Spalled brick replacement",
      "Roof-to-wall counterflashing coordination",
    ],
    heroImage: "/images/restoration-parapet.png",
    diagnostics: [
      {
        title: "Cracked or Displaced Coping",
        description:
          "The cap on top of the parapet is the first line of defense. Cracked, loose, or missing coping lets water straight into the top of the wall — the most common starting point for parapet failure.",
      },
      {
        title: "Open Joints on the Roof Side",
        description:
          "The back face of a parapet is the most neglected masonry on any building because nobody sees it. Open joints there feed water into the wall from a direction owners rarely check.",
      },
      {
        title: "A Wall That's Out of Plumb",
        description:
          "Sight down the length of the parapet. Bows, leans, or bulges mean saturated, freeze-damaged masonry is losing its grip — a structural and safety issue, not a cosmetic one.",
      },
      {
        title: "Top-Floor Ceiling Stains",
        description:
          "Water stains along the top-floor ceiling line after wind-driven rain often trace straight back to a failing parapet or its coping rather than the roof itself.",
      },
    ],
    gallery: [
      { image: "/images/restoration-parapet.png", caption: "Parapet wall reconstruction" },
      { image: "/images/work-commercial.jpg", caption: "Commercial parapet repointing" },
      { image: "/images/restoration-wall.png", caption: "Roofline masonry rebuild" },
    ],
    faqs: [
      {
        question: "Why does my parapet keep leaking after tuckpointing?",
        answer:
          "Because tuckpointing alone doesn't fix the coping or flashing. If the cap on top of the wall is cracked or has no water barrier beneath it, water pours straight down into the masonry no matter how good the joints are. A lasting repair addresses the top of the wall and the flashing, not just the face.",
      },
      {
        question: "Does my parapet need a repair or a rebuild?",
        answer:
          "If the wall is still plumb and the brick is sound, we can repoint, replace bad units, and re-cap it in place. If it's leaning, bowing, or the brick crumbles when worked, a partial or full rebuild is the honest fix. We assess plumb and brick condition before recommending.",
      },
      {
        question: "Is a leaning parapet dangerous?",
        answer:
          "Yes. A parapet that leans or bows over a sidewalk or entrance is a falling-masonry risk and a liability concern. If yours is visibly out of plumb, treat it as urgent and keep people clear of the area below until it's assessed.",
      },
      {
        question: "What makes parapet repairs last?",
        answer:
          "The hidden details: continuous through-wall flashing at the base of the parapet, coping with proper overhang and a drip edge bedded on flashing, full-depth repointing with matched mortar, and the wall tied back to the structure.",
      },
    ],
    keywords: [
      "parapet wall repair Chicago",
      "parapet wall rebuild Chicagoland",
      "coping repair Cook County",
      "roofline masonry repair Illinois",
      "commercial parapet contractor Chicago",
      "parapet repair near me",
    ],
    aiSummary:
      "Emerald Masonry LLC repairs and rebuilds parapet walls and coping across Chicagoland — repointing, flashing, and full rebuilds that stop roofline leaks at the source. Family-owned, licensed and insured, 40+ years. Free on-site estimates — call (708) 288-1696.",
    materials: [
      "Stone, precast, or metal coping with overhang and drip edge",
      "Continuous through-wall flashing membrane",
      "Weather-matched mortar for both faces",
      "Matching replacement brick",
    ],
    priceFactors: [
      "Linear footage of parapet",
      "Repair in place vs. partial or full rebuild",
      "Coping and flashing replacement",
      "Roof access and staging",
    ],
    comparisons: [
      {
        heading: "Parapet repair vs. full rebuild",
        body:
          "A plumb parapet with sound brick can be repointed and re-capped in place. A leaning or bowed parapet, or one with brick too far gone to hold mortar, needs to come down to a sound course and be rebuilt with new flashing and coping. Patching a moving wall only hides the problem.",
      },
    ],
    relatedServices: ["tuckpointing", "masonry-restoration", "masonry-sealing", "commercial"],
  },

  {
    slug: "foundation-masonry-repair",
    title: "Foundation Masonry Repair",
    subtitle: "Brick & Block Foundation Walls",
    tagline: "Where the building meets the ground, water and movement do the most damage.",
    description:
      "Foundation masonry — brick or concrete block below and at grade — sits in the harshest spot on the building: in contact with soil moisture, hit by runoff, and subject to settlement and frost movement. Deteriorated mortar, cracked or spalling block, bowing, and step cracks at the foundation level let water into basements and crawlspaces and signal movement that needs attention before it spreads upward.\n\nWe repair foundation masonry: repointing deteriorated joints, replacing spalled brick and cracked block, addressing the water and drainage causing the damage, and stabilizing where movement is active. Structural movement beyond masonry repair is identified honestly and coordinated with the right specialists.",
    scope: [
      "Foundation repointing and joint repair",
      "Cracked and spalled block replacement",
      "Below-grade brick repair",
      "Parge coat repair and application",
      "Water-entry and drainage correction",
      "Crack assessment and stabilization",
    ],
    heroImage: "/images/brick-foundation.jpg",
    diagnostics: [
      {
        title: "Deteriorated Mortar at Grade",
        description:
          "Mortar joints at and just below grade take constant moisture and freeze-thaw. Recessed, soft, or missing mortar here lets water directly into the foundation wall.",
      },
      {
        title: "Cracked or Spalling Block",
        description:
          "Cracked concrete block or spalling brick at the foundation indicates moisture damage or movement. Left open, these become direct water paths into the basement.",
      },
      {
        title: "Step Cracks in the Foundation",
        description:
          "Diagonal stair-step cracks following the joints often indicate differential settlement. The crack pattern tells us where the movement is originating and whether it's ongoing.",
      },
      {
        title: "Basement Moisture or Efflorescence",
        description:
          "Damp interior foundation walls, white salt deposits, or musty smells point to water moving through the foundation masonry — usually from failed joints or grading and drainage issues outside.",
      },
    ],
    gallery: [
      { image: "/images/brick-foundation.jpg", caption: "Foundation brick repair" },
      { image: "/images/restoration-steps.png", caption: "Masonry stabilization at grade" },
      { image: "/images/brick-damaged.jpg", caption: "Deteriorated foundation masonry" },
    ],
    faqs: [
      {
        question: "Is a foundation crack serious?",
        answer:
          "It depends on the type. A crack through the mortar joint only is often manageable with repointing. Wide, stair-step, or actively widening cracks can indicate settlement and need assessment before repair. We give an honest read on-site about what's cosmetic and what's structural.",
      },
      {
        question: "Can you stop water coming through my foundation?",
        answer:
          "Often, yes — by repointing failed joints, replacing damaged masonry, and correcting the grading or drainage feeding water to the wall. Where the problem is hydrostatic pressure or a failing drain tile, we'll tell you and coordinate the right approach rather than just sealing over it.",
      },
      {
        question: "Do you do structural foundation work?",
        answer:
          "We handle foundation masonry repair — repointing, brick and block replacement, and stabilization. When movement points to a structural issue beyond masonry (piering, underpinning), we identify it honestly and coordinate with the appropriate specialist.",
      },
      {
        question: "What causes foundation masonry to fail here?",
        answer:
          "Soil moisture, poor drainage, and Chicago's freeze-thaw cycle. Water saturates the masonry at grade, freezes, and breaks it down; settlement and frost heave add movement that cracks joints and units.",
      },
    ],
    keywords: [
      "foundation masonry repair Chicago",
      "foundation brick repair Chicagoland",
      "block foundation repair Cook County",
      "foundation crack repair Illinois",
      "basement masonry repair Chicago suburbs",
      "foundation repointing near me",
    ],
    aiSummary:
      "Emerald Masonry LLC repairs brick and block foundation walls across Chicagoland — repointing at grade, replacing cracked and spalling units, and correcting the water causing the damage. Family-owned, licensed and insured, 40+ years. Call (708) 288-1696.",
    materials: [
      "Type S mortar for below-grade and structural joints",
      "Replacement concrete block and brick",
      "Parge and waterproof coatings",
      "Hydraulic cement for active seepage points",
    ],
    priceFactors: [
      "Extent of deteriorated masonry",
      "Whether drainage/grading correction is needed",
      "Access and excavation requirements",
      "Active movement vs. static damage",
    ],
    comparisons: [
      {
        heading: "Masonry repair vs. structural underpinning",
        body:
          "Most foundation masonry problems are repointing, unit replacement, and water correction. When cracks indicate active settlement, that's a structural matter beyond masonry — we identify it honestly instead of sealing over a moving wall.",
      },
    ],
    relatedServices: ["brick-repair", "tuckpointing", "masonry-sealing", "masonry-restoration"],
  },

  {
    slug: "limestone-sill-repair",
    title: "Limestone & Sill Repair",
    subtitle: "Stone Sills, Bands & Trim",
    tagline: "Stone sills shed water for the whole wall — until they crack and start holding it.",
    description:
      "Limestone sills, lintels, water tables, and decorative bands are designed to shed water away from the wall. When they crack, spall, or lose their slope, they stop draining and start holding water — feeding it into the masonry below and accelerating deterioration around windows and trim. Chicago's older brick buildings, especially greystones and historic facades, rely heavily on stone elements that are now decades past their last maintenance.\n\nWe repair and restore limestone and cast-stone elements: crack repair with color-matched stone repair mortar, Dutchman repairs that splice in new stone, full sill and unit replacement where needed, and re-sealing of the joints around stone. The goal is to get the stone shedding water again and protect the brick around it.",
    scope: [
      "Limestone crack and spall repair",
      "Cast-stone and cut-stone repair",
      "Dutchman (stone splice) repairs",
      "Sill and water-table replacement",
      "Stone joint repointing and sealing",
      "Greystone facade stone restoration",
    ],
    heroImage: "/images/restoration-facade.jpg",
    diagnostics: [
      {
        title: "Cracked or Spalling Sills",
        description:
          "Window sills take direct weather and standing water. Cracks and spalling let water into the stone and the masonry beneath it, and once a sill loses its slope it stops draining.",
      },
      {
        title: "Open Joints Around Stone",
        description:
          "The mortar joints where stone meets brick are common failure points. Open joints around sills, bands, and trim funnel water behind the stone where it can't be seen.",
      },
      {
        title: "Staining Below Stone Elements",
        description:
          "Dark streaks or efflorescence running down from a sill or band indicate water is being held and shed onto the wall instead of away from it.",
      },
      {
        title: "Eroded or Sugaring Stone",
        description:
          "Limestone that's becoming powdery or losing its profile (sometimes from past harsh cleaning) needs consolidation or repair before the loss becomes structural.",
      },
    ],
    gallery: [
      { image: "/images/restoration-facade.jpg", caption: "Stone facade restoration — Chicagoland" },
      { image: "/images/restoration-wall.png", caption: "Sill and band repair" },
      { image: "/images/restoration-steps.png", caption: "Cut-stone restoration" },
    ],
    faqs: [
      {
        question: "Can a cracked limestone sill be repaired, or does it need replacement?",
        answer:
          "Both are options depending on severity. Minor cracks and spalls are repaired with color-matched stone repair mortar or a Dutchman splice of new stone. Sills that have lost their slope or are badly broken are replaced. We recommend the least-invasive option that will actually shed water.",
      },
      {
        question: "What is a Dutchman repair?",
        answer:
          "A Dutchman is a piece of matching stone cut and spliced in to replace a damaged section, rather than replacing the whole unit. It preserves more of the original stone and is common on historic facades where matching the full piece is difficult.",
      },
      {
        question: "Why does stone repair matter for the rest of my wall?",
        answer:
          "Sills, bands, and water tables are designed to shed water away from the masonry. When they fail, they direct water into the brick below instead, accelerating joint failure and spalling. Fixing the stone protects the wall around it.",
      },
      {
        question: "Do you work on historic greystone buildings?",
        answer:
          "Yes. Greystone and historic stone facades need careful, matched repair that preserves the original material and profile. We use color- and texture-matched repair methods and avoid the harsh cleaning that damages soft stone.",
      },
    ],
    keywords: [
      "limestone repair Chicago",
      "stone sill repair Chicagoland",
      "limestone restoration Cook County",
      "greystone repair Illinois",
      "cast stone repair Chicago suburbs",
      "window sill masonry repair near me",
    ],
    aiSummary:
      "Emerald Masonry LLC repairs and restores limestone and cast-stone sills, bands, and trim across Chicagoland — crack and spall repair, Dutchman splices, and replacement that gets the stone shedding water again. Family-owned, licensed and insured, 40+ years. Call (708) 288-1696.",
    materials: [
      "Color-matched stone repair mortar",
      "Matching limestone and cast stone for splices and replacement",
      "Stone consolidants for eroded surfaces",
      "Breathable sealant for stone-to-brick joints",
    ],
    priceFactors: [
      "Repair vs. Dutchman splice vs. full replacement",
      "Number and size of stone elements",
      "Match difficulty on historic stone",
      "Access and height",
    ],
    comparisons: [
      {
        heading: "Stone repair vs. full replacement",
        body:
          "Most damaged stone can be repaired or spliced rather than replaced, preserving original material and lowering cost. Replacement is reserved for units that have lost their slope or are broken beyond repair. We recommend the least-invasive fix that performs.",
      },
    ],
    relatedServices: ["historic-masonry-restoration", "tuckpointing", "masonry-sealing", "masonry-restoration"],
  },

  {
    slug: "caulking",
    title: "Masonry Caulking & Joint Sealant",
    subtitle: "Expansion Joints & Sealant Replacement",
    tagline: "The right joint moves with the building. Mortar there just cracks.",
    description:
      "Not every joint in a masonry wall should be filled with mortar. Expansion and control joints, the gaps around windows and doors, and the transitions between dissimilar materials are designed to move — and they need a flexible sealant, not rigid mortar that cracks the first season. Failed, hardened, or missing sealant is a major and often-overlooked water entry point.\n\nWe remove failed sealant, properly prepare and back the joints, and install the correct flexible sealant for each location. Done right, caulking is a precise weatherproofing detail that protects the wall where rigid mortar can't.",
    scope: [
      "Expansion and control joint sealant",
      "Window and door perimeter caulking",
      "Sealant removal and replacement",
      "Dissimilar-material transition joints",
      "Backer rod installation and joint prep",
      "Commercial facade joint sealing",
    ],
    heroImage: "/images/restoration-wall.png",
    diagnostics: [
      {
        title: "Cracked or Hardened Sealant",
        description:
          "Old sealant that has hardened, cracked, or pulled away from the joint no longer keeps water out. Sealant has a service life and becomes brittle with UV and age.",
      },
      {
        title: "Mortar in a Moving Joint",
        description:
          "When an expansion or control joint was filled with rigid mortar, it cracks repeatedly because the joint is designed to move. These need to be cut out and sealed with flexible material instead.",
      },
      {
        title: "Gaps Around Windows and Doors",
        description:
          "Open or failed perimeter joints around openings are a direct water path into the wall and the interior. They're among the most common sources of window leaks.",
      },
      {
        title: "Water Entry With Sound Mortar",
        description:
          "When the brick and mortar look fine but water is still getting in, failed sealant at joints and transitions is often the culprit.",
      },
    ],
    gallery: [
      { image: "/images/restoration-wall.png", caption: "Expansion joint sealant — commercial facade" },
      { image: "/images/work-commercial.jpg", caption: "Perimeter joint sealing" },
      { image: "/images/work-efflorescence.jpg", caption: "Joint prep before sealant" },
    ],
    faqs: [
      {
        question: "What's the difference between caulking and tuckpointing?",
        answer:
          "Tuckpointing replaces the rigid mortar in standard brick joints. Caulking installs flexible sealant in joints that are meant to move — expansion and control joints, and the perimeters around windows and doors. Using the wrong one in either place leads to cracking and leaks.",
      },
      {
        question: "How long does masonry sealant last?",
        answer:
          "Quality sealant typically lasts around 10–20 years depending on the product, joint movement, and sun exposure. South- and west-facing joints and high-movement joints wear out sooner and should be checked periodically.",
      },
      {
        question: "Why is my window leaking if the brick looks fine?",
        answer:
          "Failed perimeter sealant around the window is a common cause. The brick and mortar can be sound while the flexible joint that seals the window to the masonry has hardened and cracked, letting water straight in.",
      },
      {
        question: "Can you match the sealant color?",
        answer:
          "Yes. Sealant comes in a wide range of colors and we match it to the masonry or the trim so the joint reads cleanly rather than standing out.",
      },
    ],
    keywords: [
      "masonry caulking Chicago",
      "expansion joint sealant Chicagoland",
      "masonry sealant replacement Cook County",
      "window caulking masonry Illinois",
      "control joint repair Chicago suburbs",
      "commercial caulking contractor near me",
    ],
    aiSummary:
      "Emerald Masonry LLC replaces failed expansion-joint and window-perimeter sealant across Chicagoland, sealing the moving joints where rigid mortar can't go. Family-owned, licensed and insured, 40+ years. Free on-site estimates — call (708) 288-1696.",
    materials: [
      "Polyurethane and silicone sealants rated for masonry",
      "Closed-cell backer rod for correct joint depth",
      "Color-matched sealant to brick or trim",
      "Primers for reliable adhesion",
    ],
    priceFactors: [
      "Linear footage of joints",
      "Removal of old sealant and joint prep",
      "Joint type and sealant grade",
      "Access and building height",
    ],
    comparisons: [
      {
        heading: "Caulking vs. tuckpointing",
        body:
          "Mortar belongs in standard, static brick joints; flexible sealant belongs in joints designed to move. Caulking a mortar joint or mortaring an expansion joint both fail fast — matching the material to the joint is the whole job.",
      },
    ],
    relatedServices: ["masonry-sealing", "tuckpointing", "waterproofing", "commercial"],
  },

  {
    slug: "power-washing",
    title: "Masonry Power Washing",
    subtitle: "Gentle, Masonry-Safe Cleaning",
    tagline: "Brick should be cleaned, not blasted. The wrong pressure does permanent damage.",
    description:
      "Masonry cleaning sits at the intersection of appearance and preservation. Done correctly, it removes dirt, atmospheric staining, organic growth, and efflorescence and makes a building look decades younger. Done with too much pressure or the wrong technique, it erodes mortar joints, strips the fired face off brick, and drives water deep into the wall — causing the exact damage it was supposed to prevent.\n\nWe clean masonry using the gentlest effective method: appropriate pressure, masonry-safe cleaners matched to the staining, and techniques that protect soft brick and historic surfaces. We never sandblast brick. The goal is a clean wall that's also an undamaged one.",
    scope: [
      "Soft washing and low-pressure cleaning",
      "Dirt and atmospheric stain removal",
      "Organic growth (algae, moss) removal",
      "Efflorescence cleaning",
      "Pre-restoration and pre-sealing cleaning",
      "Commercial facade cleaning",
    ],
    heroImage: "/images/restoration-facade.jpg",
    diagnostics: [
      {
        title: "Atmospheric Soiling and Dirt",
        description:
          "Decades of airborne dirt and pollution dull a masonry facade. The right cleaning method lifts it without harming the brick or joints underneath.",
      },
      {
        title: "Organic Growth",
        description:
          "Green or black algae, moss, and mildew on shaded, damp walls are cosmetic but signal persistent moisture. Cleaning removes the growth; addressing the dampness keeps it from returning.",
      },
      {
        title: "Efflorescence and Staining",
        description:
          "White salt deposits and assorted staining can be cleaned with masonry-safe methods — though efflorescence also means the water source behind it should be addressed.",
      },
      {
        title: "Prep Before Sealing or Restoration",
        description:
          "Sealers and repairs bond best to clean masonry. Gentle cleaning is the correct first step before waterproofing or restoration work.",
      },
    ],
    gallery: [
      { image: "/images/restoration-facade.jpg", caption: "Facade cleaning — Chicagoland" },
      { image: "/images/work-efflorescence.jpg", caption: "Efflorescence and stain removal" },
      { image: "/images/restoration-commercial.jpg", caption: "Commercial masonry cleaning" },
    ],
    faqs: [
      {
        question: "Will power washing damage my brick?",
        answer:
          "It can, if it's done with too much pressure or the wrong technique — eroding mortar and stripping the fired face off the brick. We use the gentlest effective method and masonry-safe cleaners, and we never sandblast brick. Done correctly, cleaning is safe and restorative.",
      },
      {
        question: "Why shouldn't brick be sandblasted?",
        answer:
          "Sandblasting removes the hard, weather-resistant outer skin of the brick, exposing the soft, porous interior. That dramatically accelerates water absorption, spalling, and decay. It permanently damages the masonry and should never be used on brick.",
      },
      {
        question: "Can you remove efflorescence and organic growth?",
        answer:
          "Yes. We clean efflorescence, algae, moss, and atmospheric staining with masonry-safe methods. With efflorescence, we also recommend addressing the water source so it doesn't simply return.",
      },
      {
        question: "Should I clean before sealing or restoration?",
        answer:
          "Yes — sealers and repair materials bond best to clean masonry. Gentle cleaning is the proper first step in a waterproofing or restoration sequence.",
      },
    ],
    keywords: [
      "masonry power washing Chicago",
      "brick cleaning Chicagoland",
      "soft wash masonry Cook County",
      "brick power washing Illinois",
      "facade cleaning Chicago suburbs",
      "masonry cleaning contractor near me",
    ],
    aiSummary:
      "Emerald Masonry LLC cleans brick and masonry across Chicagoland with gentle, masonry-safe methods — never sandblasting — removing dirt, staining, and growth without harming the wall. Family-owned, licensed and insured, 40+ years. Call (708) 288-1696.",
    materials: [
      "Low-pressure soft-wash equipment",
      "Masonry-safe, pH-appropriate cleaners",
      "Biocidal treatments for organic growth",
      "Stain-specific cleaning agents",
    ],
    priceFactors: [
      "Square footage and number of elevations",
      "Type and severity of staining",
      "Surface fragility (historic or soft brick)",
      "Access and height",
    ],
    comparisons: [
      {
        heading: "Soft washing vs. high-pressure blasting",
        body:
          "High pressure and sandblasting strip the protective face off brick and erode mortar, causing permanent damage. Soft washing with the right cleaner removes the soiling while leaving the masonry intact — it's the only appropriate approach for brick.",
      },
    ],
    relatedServices: ["masonry-sealing", "waterproofing", "historic-masonry-restoration", "tuckpointing"],
  },

  {
    slug: "masonry-sealing",
    title: "Masonry Sealing & Waterproofing",
    subtitle: "Breathable Penetrating Sealers",
    tagline: "Keep liquid water out while letting the wall breathe — sequence and product matter.",
    description:
      "Masonry sealing protects a sound wall from water absorption — but only when it's done in the right order with the right product. A breathable, penetrating water repellent keeps driving rain out of the brick while still letting water vapor escape. A film-forming coating does the opposite: it traps moisture inside the wall, where it freezes and causes spalling behind a sealed surface.\n\nWe seal masonry the right way: repair and repoint first so there are no open water paths, clean the surface, then apply a breathable penetrating repellent to dry masonry in the right conditions. Sealer is protection for good masonry — not a fix for a wall that's still letting water in.",
    scope: [
      "Breathable penetrating sealer application",
      "Pre-seal masonry repair and repointing",
      "Surface cleaning before sealing",
      "Parapet, sill, and horizontal-surface sealing",
      "Below-grade and at-grade waterproofing",
      "Commercial facade water-repellent application",
    ],
    heroImage: "/images/efflor-wall.jpg",
    diagnostics: [
      {
        title: "High Water Absorption",
        description:
          "Brick that stays dark and wet long after rain is absorbing more water than it should. A penetrating repellent on sound masonry sharply reduces that absorption.",
      },
      {
        title: "Recurring Efflorescence",
        description:
          "White salt deposits that return after cleaning mean water keeps moving through the wall. Sealing helps only after the entry points are repaired — sequence is everything.",
      },
      {
        title: "Exposed, Weather-Beaten Elevations",
        description:
          "South- and west-facing walls and parapets take the most driving rain and benefit most from a breathable repellent once they're sound.",
      },
      {
        title: "A Previously Coated, Spalling Wall",
        description:
          "Walls sealed with a film-forming coating often spall behind it because trapped moisture can't escape. These need the wrong product addressed, not more of it.",
      },
    ],
    gallery: [
      { image: "/images/efflor-wall.jpg", caption: "Masonry waterproofing — commercial property" },
      { image: "/images/work-efflorescence.jpg", caption: "Surface treatment after repair" },
      { image: "/images/restoration-facade.jpg", caption: "Sealed and protected facade" },
    ],
    faqs: [
      {
        question: "Will sealing my brick stop all water problems?",
        answer:
          "A breathable penetrating sealer greatly reduces water absorption into sound masonry, but it's not a substitute for proper joints and brick. Sealer applied over failed mortar or active leaks doesn't work — and can make things worse by trapping water. Repair first, then seal.",
      },
      {
        question: "Why not use a waterproof coating that seals the surface?",
        answer:
          "Film-forming coatings trap moisture inside the wall. Water already in the masonry can't escape, freezes, and causes spalling behind the sealed face. Masonry has to breathe, so the correct product is a penetrating, breathable repellent.",
      },
      {
        question: "How long does masonry sealer last?",
        answer:
          "Quality penetrating sealers typically last 5–10 years depending on the product, the porosity of the masonry, and weather exposure. Parapets, horizontal surfaces, and the most exposed walls need reapplication sooner.",
      },
      {
        question: "Does sealer change how the brick looks?",
        answer:
          "Penetrating sealers absorb into the masonry and are invisible once cured — they don't change the appearance. We confirm the product and its finish with you before applying.",
      },
    ],
    keywords: [
      "masonry sealing Chicago",
      "brick waterproofing Chicagoland",
      "masonry water repellent Cook County",
      "breathable brick sealer Illinois",
      "brick sealing contractor Chicago suburbs",
      "masonry waterproofing near me",
    ],
    aiSummary:
      "Emerald Masonry LLC seals and waterproofs masonry across Chicagoland with breathable penetrating repellents — applied after repairs so water stays out while the wall still breathes. Family-owned, licensed and insured, 40+ years. Call (708) 288-1696.",
    materials: [
      "Silane/siloxane breathable penetrating water repellents",
      "Masonry-safe cleaners for surface prep",
      "Flexible sealant for control joints",
      "Replacement weep vents for cavity drainage",
    ],
    priceFactors: [
      "Square footage and number of coats",
      "Extent of repair needed before sealing",
      "Product grade selected",
      "Access and surface height",
    ],
    comparisons: [
      {
        heading: "Penetrating sealer vs. film coating",
        body:
          "A penetrating repellent keeps liquid water out while letting vapor escape — correct for brick. A film coating traps moisture and causes spalling. The product choice, and sealing only after repairs, determine whether waterproofing helps or harms.",
      },
    ],
    relatedServices: ["waterproofing", "tuckpointing", "caulking", "power-washing"],
  },

  {
    slug: "commercial-masonry-restoration",
    title: "Commercial Masonry Restoration",
    subtitle: "Multi-Elevation Commercial & Institutional Work",
    tagline: "Large footprints, occupied buildings, and boards that need documentation.",
    description:
      "Commercial masonry restoration is a managed project, not just a repair. Property managers, HOAs, churches, and building owners need a contractor who can assess a full building honestly, develop a phased plan that fits budget cycles, coordinate access on an occupied property, and document the work for boards and insurers. That project-management discipline is as important as the masonry itself.\n\nWe restore commercial and institutional masonry across Chicagoland — multi-elevation tuckpointing and brick replacement, parapet and lintel work, CMU repair, and waterproofing — with written scopes, phased scheduling, and before/after documentation throughout. We don't oversell scope, and we don't cut it to hit a number.",
    scope: [
      "Full-building masonry assessment and reporting",
      "Multi-elevation tuckpointing and brick replacement",
      "Parapet and lintel restoration at scale",
      "CMU block repair and replacement",
      "Phased restoration planning",
      "Insurance documentation and scopes",
    ],
    heroImage: "/images/restoration-commercial.jpg",
    diagnostics: [
      {
        title: "Deterioration Across Multiple Elevations",
        description:
          "When joint failure, spalling, and water entry appear on several faces of a building, spot repairs won't keep up. A systematic, phased restoration is more durable and predictable.",
      },
      {
        title: "Parapet and Lintel Failure at Scale",
        description:
          "Commercial buildings with many openings and long parapets often show the same failures repeated across the structure — these need to be scoped comprehensively, not one at a time.",
      },
      {
        title: "Active Water Intrusion",
        description:
          "Water entering an occupied commercial building damages interior finishes and accelerates structural decay. It's urgent regardless of budget cycles and is prioritized in the phase plan.",
      },
      {
        title: "Years of Deferred Maintenance",
        description:
          "Layered deferred maintenance — failed joints, spalling brick, failed prior patches — calls for a coordinated plan that removes the old failures before rebuilding the envelope.",
      },
    ],
    gallery: [
      { image: "/images/restoration-commercial.jpg", caption: "Commercial masonry restoration" },
      { image: "/images/work-commercial.jpg", caption: "Multi-elevation commercial tuckpointing" },
      { image: "/images/restoration-parapet.png", caption: "Commercial parapet reconstruction" },
    ],
    faqs: [
      {
        question: "Can the restoration be phased to fit our budget?",
        answer:
          "Yes — and for larger buildings it usually should be. We prioritize the most critical issues first (active water intrusion, structural concerns, parapets) and plan subsequent phases around budget and operations, with the full phased plan set before work starts.",
      },
      {
        question: "Do you provide written assessments for our board?",
        answer:
          "Yes. We document conditions on all elevations, photograph key failure points, and provide a written scope with prioritized recommendations — useful for board presentations, reserve planning, and insurance documentation.",
      },
      {
        question: "Can you work on an occupied building?",
        answer:
          "Yes. Restoration on occupied commercial properties requires careful staging, tenant communication, and scheduling around operations. We build a project-specific plan with the property manager covering access, noise, debris, and sequencing before work begins.",
      },
      {
        question: "Do you work with insurance on commercial claims?",
        answer:
          "Yes. We provide damage documentation, written scopes, and before/after photos in a format that supports the claims process, and we work directly with adjusters and TPAs.",
      },
    ],
    keywords: [
      "commercial masonry restoration Chicago",
      "commercial tuckpointing Chicagoland",
      "multi-elevation masonry restoration Cook County",
      "institutional masonry contractor Illinois",
      "HOA masonry restoration Chicago suburbs",
      "commercial facade restoration near me",
    ],
    aiSummary:
      "Emerald Masonry LLC restores commercial and institutional masonry across Chicagoland — multi-elevation tuckpointing, brick, parapet, lintel, and CMU work with written scopes, phased plans, and documentation for boards and insurers. Licensed, bonded, insured, 40+ years. Call (708) 288-1696.",
    materials: [
      "Commercial-grade mortar matched per elevation",
      "Replacement brick and CMU block",
      "Replacement steel lintels and shelf angles",
      "Commercial-rated sealants and water repellents",
    ],
    priceFactors: [
      "Building size, stories, and number of elevations",
      "Access (scaffolding, swing stage, boom lift)",
      "Single building vs. multi-property portfolio",
      "Phasing and documentation requirements",
    ],
    comparisons: [
      {
        heading: "Managed restoration vs. spot repair",
        body:
          "On a large building, repeated spot repairs cost more over time and never get ahead of the deterioration. A managed, phased restoration sequences the work, documents it for stakeholders, and resolves the envelope rather than chasing symptoms.",
      },
    ],
    relatedServices: ["commercial", "masonry-restoration", "parapet-wall-repair", "tuckpointing"],
  },

  {
    slug: "residential-masonry-restoration",
    title: "Residential Masonry Restoration",
    subtitle: "Whole-Home Brick & Stone Rehabilitation",
    tagline: "When a home needs more than one repair, a coordinated plan beats years of patching.",
    description:
      "Residential masonry restoration is for homes that have moved past one-off repairs — where tired mortar, spalling brick, a failing chimney, and water entry have all arrived around the same time. Rather than patching each problem in isolation, restoration assesses the whole house and addresses the brick and stone as one system, in the right order, so the home is sound and weather-tight for the long run.\n\nWe restore brick and stone homes across Chicagoland — repointing, brick replacement, chimney and lintel repair, sill and stone work, and sealing — with an honest scope and clear priorities. We treat your home's masonry the way we'd treat our own: fix the cause, match the materials, and don't oversell the scope.",
    scope: [
      "Whole-home masonry assessment",
      "Repointing and brick replacement",
      "Chimney and lintel repair",
      "Limestone sill and stone repair",
      "Water-entry correction and sealing",
      "Porch, step, and pillar restoration",
    ],
    heroImage: "/images/restoration-facade.jpg",
    diagnostics: [
      {
        title: "Multiple Problems at Once",
        description:
          "Tired mortar, a few spalled bricks, a chimney that needs work, and a damp wall — when these arrive together, a coordinated plan is more cost-effective than four separate visits.",
      },
      {
        title: "Widespread Joint Deterioration",
        description:
          "When mortar is failing across more than one elevation of the home, systematic repointing protects the brick before it starts to spall.",
      },
      {
        title: "Water Getting Inside",
        description:
          "Damp interior walls, stains near windows, or basement moisture point to masonry letting water in — restoration finds and fixes the entry points, not just the symptoms.",
      },
      {
        title: "Aging Brick or Greystone Home",
        description:
          "Older Chicago-area homes built with soft brick and lime mortar need matched, knowledgeable repair to preserve the masonry rather than damage it.",
      },
    ],
    gallery: [
      { image: "/images/restoration-facade.jpg", caption: "Residential facade restoration" },
      { image: "/images/hero-walkway.jpg", caption: "Porch and walkway restoration" },
      { image: "/images/restoration-steps.png", caption: "Step and entry rehabilitation" },
    ],
    faqs: [
      {
        question: "How is restoration different from a single repair?",
        answer:
          "A repair fixes one problem; restoration addresses the home's masonry as a system. When several issues have arrived together — joints, brick, chimney, water entry — restoration sequences them in the right order so the fixes hold, rather than patching one thing while the next fails.",
      },
      {
        question: "Do I have to do everything at once?",
        answer:
          "No. We prioritize the most urgent items — active water entry and safety issues first — and can phase the rest. You get a clear scope and priorities so you can decide what to do now and what can wait.",
      },
      {
        question: "Will the repairs match my existing brick and mortar?",
        answer:
          "Yes — matching is central to good restoration. We match brick in size, color, and texture, and mortar in strength and color, so the restored home reads as one surface rather than a set of patches.",
      },
      {
        question: "Do you work on older and historic homes?",
        answer:
          "Yes. Older homes with soft brick and lime mortar need a gentler, matched approach. We use compatible materials and methods that preserve the masonry instead of trapping water or stressing the brick.",
      },
    ],
    keywords: [
      "residential masonry restoration Chicago",
      "home masonry restoration Chicagoland",
      "brick home restoration Cook County",
      "residential tuckpointing Illinois",
      "house masonry repair Chicago suburbs",
      "residential masonry contractor near me",
    ],
    aiSummary:
      "Emerald Masonry LLC restores brick and stone homes across Chicagoland — repointing, brick replacement, chimney, lintel, and stone repair, and sealing — as one coordinated plan with matched materials. Family-owned, licensed and insured, 40+ years. Free on-site estimates — call (708) 288-1696.",
    materials: [
      "Mortar matched in strength and color to the home",
      "Matching and salvaged replacement brick",
      "Color-matched stone repair for sills and trim",
      "Breathable penetrating sealers",
    ],
    priceFactors: [
      "Number of issues and elevations involved",
      "Mix of repointing, brick, chimney, and stone work",
      "Match difficulty on older homes",
      "Access and height",
    ],
    comparisons: [
      {
        heading: "Restoration vs. patching one thing at a time",
        body:
          "Patching each problem as it appears means repeated mobilizations and a house that never quite gets ahead of its masonry. A coordinated restoration fixes the causes together, matches materials once, and leaves the home weather-tight.",
      },
    ],
    relatedServices: ["tuckpointing", "brick-repair", "chimney-repair", "masonry-restoration"],
  },

  {
    slug: "historic-masonry-restoration",
    title: "Historic Masonry Restoration",
    subtitle: "Lime Mortar & Period-Sensitive Repair",
    tagline: "Old buildings need soft mortar and a light hand — modern materials damage them.",
    description:
      "Historic masonry restoration is a different discipline. Older brick and stone were built with soft, lime-based mortar and are meant to flex and breathe. Repairing them with hard modern Portland mortar or cleaning them with high pressure does real, often irreversible damage — trapping water, transferring stress into the brick, and stripping historic surfaces. Period-sensitive work means matching the original materials and methods.\n\nWe restore historic and landmark-era masonry across Chicagoland — lime mortar repointing matched in composition and color, careful brick and stone repair, Dutchman splices, and gentle cleaning that never sandblasts. The goal is to preserve the building's fabric and character while making it sound and weather-tight.",
    scope: [
      "Lime mortar analysis and matching",
      "Period-sensitive repointing",
      "Historic brick and stone repair",
      "Dutchman stone splices",
      "Gentle, non-abrasive cleaning",
      "Landmark and greystone facade restoration",
    ],
    heroImage: "/images/restoration-facade.jpg",
    diagnostics: [
      {
        title: "Hard Mortar in a Soft Wall",
        description:
          "Earlier repairs done with hard Portland mortar on a soft historic wall transfer stress into the brick and trap water, causing spalling. These need to be removed and repointed with compatible lime mortar.",
      },
      {
        title: "Eroded or Sugaring Stone",
        description:
          "Historic limestone that's becoming powdery or losing its profile — often from past harsh cleaning — needs consolidation or matched repair before the loss becomes structural.",
      },
      {
        title: "Weathered Lime Mortar Joints",
        description:
          "Original lime joints eventually weather out and need repointing with mortar matched in softness and color to keep the wall working as designed.",
      },
      {
        title: "Damage From Prior Sandblasting",
        description:
          "Brick that was sandblasted in the past has lost its protective face and absorbs water rapidly. It needs gentle, protective treatment — never more abrasion.",
      },
    ],
    gallery: [
      { image: "/images/restoration-facade.jpg", caption: "Historic facade restoration — Chicagoland" },
      { image: "/images/restoration-wall.png", caption: "Lime mortar repointing" },
      { image: "/images/restoration-steps.png", caption: "Historic stone restoration" },
    ],
    faqs: [
      {
        question: "Why can't you use regular mortar on an old building?",
        answer:
          "Old brick is soft and was built with soft, lime-based mortar so the joints flex and the wall breathes. Hard modern mortar is stronger than the brick, so it transfers stress into the brick and traps water — causing the brick to crack and spall. Matching the original mortar is essential.",
      },
      {
        question: "How do you match historic mortar?",
        answer:
          "We assess the original mortar's composition (lime vs. Portland), color, and hardness, and mix a compatible replacement that matches both appearance and softness. Matching hardness matters as much as color.",
      },
      {
        question: "Can damaged historic stone be saved?",
        answer:
          "Often, yes. Eroded or cracked stone can frequently be consolidated, repaired with matched material, or spliced with a Dutchman rather than fully replaced — preserving the original fabric of the building.",
      },
      {
        question: "How should historic brick be cleaned?",
        answer:
          "Gently. Historic brick should never be sandblasted or high-pressure washed — both strip the protective face and accelerate decay. We use the lowest effective pressure and masonry-safe cleaners appropriate to the surface.",
      },
    ],
    keywords: [
      "historic masonry restoration Chicago",
      "lime mortar repointing Chicagoland",
      "historic brick restoration Cook County",
      "landmark masonry restoration Illinois",
      "greystone restoration Chicago suburbs",
      "historic tuckpointing near me",
    ],
    aiSummary:
      "Emerald Masonry LLC restores historic and landmark-era masonry across Chicagoland with lime mortar matched in composition and color, careful brick and stone repair, and gentle cleaning — never sandblasting. Family-owned, licensed and insured, 40+ years. Call (708) 288-1696.",
    materials: [
      "Lime-based mortar matched to the original",
      "Salvaged and matched historic brick",
      "Matched stone for Dutchman splices",
      "Stone consolidants and gentle cleaners",
    ],
    priceFactors: [
      "Mortar analysis and matching",
      "Extent of repointing and stone repair",
      "Match difficulty and material sourcing",
      "Access and the building's sensitivity",
    ],
    comparisons: [
      {
        heading: "Historic restoration vs. standard repair",
        body:
          "Standard repair uses modern materials and methods that damage historic masonry — hard mortar, high-pressure cleaning. Historic restoration matches the original soft mortar and uses gentle techniques, preserving the building's fabric while making it sound.",
      },
    ],
    relatedServices: ["masonry-restoration", "limestone-sill-repair", "tuckpointing", "power-washing"],
  },
];

export default services;

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
