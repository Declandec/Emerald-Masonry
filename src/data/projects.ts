export type Project = {
  num: string;
  title: string;
  tag: string;
  location: string;
  image: string;
  slug?: string; // links to blog post if one exists
};

const projects: Project[] = [
  {
    num: "01",
    title: "Residential Mailbox & Entry Pillar Repair",
    tag: "Brick Repair",
    location: "Palos Heights, IL",
    image: "/images/hero-mailbox.jpg",
  },
  {
    num: "02",
    title: "Chimney Repair",
    tag: "Chimney Repair",
    location: "Oak Lawn, IL",
    image: "/images/work-chimney-new.jpg",
  },
  {
    num: "03",
    title: "Brick Wall Repair",
    tag: "Brick Repair",
    location: "Orland Park, IL",
    image: "/images/work-brick-repair.jpg",
  },
  {
    num: "04",
    title: "Walkway Restoration & Front Entrance Repair",
    tag: "Masonry Restoration",
    location: "Cook County, IL",
    image: "/images/hero-walkway.jpg",
  },
  {
    num: "05",
    title: "Lintel Repair",
    tag: "Tuckpointing",
    location: "DuPage County, IL",
    image: "/images/work-tuckpointing.jpg",
  },
  {
    num: "06",
    title: "Efflorescence Removal & Waterproofing",
    tag: "Waterproofing",
    location: "Chicago Southland, IL",
    image: "/images/work-efflorescence.jpg",
  },
  {
    num: "07",
    title: "Commercial & Industrial Restoration",
    tag: "Commercial",
    location: "Chicagoland, IL",
    image: "/images/work-commercial.jpg",
  },
  {
    num: "08",
    title: "CMU Block Repair — Commercial Retail",
    tag: "Commercial Block Repair",
    location: "Merrillville, IN",
    image: "/images/jobs/ulta-beauty-block-repair-merrillville/during-01.jpeg",
    slug: "ulta-beauty-block-repair-merrillville",
  },
];

export default projects;
