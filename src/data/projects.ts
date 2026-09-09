export type Project = {
  num: string;
  title: string;
  tag: string;
  location: string;
  image: string;
  slug?: string; // links to blog post if one exists
};

// Commercial-weighted on purpose: this carousel is the first proof a property
// manager sees, so the largest-scale commercial work leads.
// NOTE: `location` is set to the service region where the specific city isn't
// on record. Replace with the real city as job records are confirmed.
const projects: Project[] = [
  {
    num: "01",
    title: "Industrial Warehouse Tuckpointing",
    tag: "Commercial Tuckpointing",
    location: "Chicagoland, IL",
    image: "/images/work/commercial-warehouse-tuckpointing.webp",
  },
  {
    num: "02",
    title: "CMU Block Repair — Commercial Retail",
    tag: "Commercial Block Repair",
    location: "Merrillville, IN",
    image: "/images/jobs/ulta-beauty-block-repair-merrillville/during-01.jpeg",
    slug: "ulta-beauty-block-repair-merrillville",
  },
  {
    num: "03",
    title: "Commercial Brick Wall Rebuild",
    tag: "Brick Replacement",
    location: "Chicagoland, IL",
    image: "/images/work/commercial-brick-corner-rebuild.webp",
  },
  {
    num: "04",
    title: "Industrial Façade Restoration",
    tag: "Façade Restoration",
    location: "Chicagoland, IL",
    image: "/images/work/industrial-facade-restoration.webp",
  },
  {
    num: "05",
    title: "Commercial Chimney Stack Rebuild",
    tag: "Chimney & Stack",
    location: "Chicagoland, IL",
    image: "/images/work/commercial-chimney-stack.webp",
  },
  {
    num: "06",
    title: "Parapet Wall Repair & Coping Replacement",
    tag: "Parapet Repair",
    location: "Chicagoland, IL",
    image: "/images/work/commercial-parapet-repair.webp",
  },
  {
    num: "07",
    title: "Commercial Window Wall & Lintel Repair",
    tag: "Lintel Repair",
    location: "Chicagoland, IL",
    image: "/images/work/commercial-window-wall-repair.webp",
  },
  {
    num: "08",
    title: "Residential Chimney Rebuild",
    tag: "Residential",
    location: "Chicagoland, IL",
    image: "/images/work/residential-chimney-rebuild.webp",
  },
];

export default projects;
