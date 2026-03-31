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
    title: "Chimney Repair",
    tag: "Chimney Repair",
    location: "Peoria, IL",
    image: "/images/work-chimney-new.jpg",
  },
  {
    num: "02",
    title: "Brick Wall Repair",
    tag: "Brick Repair",
    location: "Tazewell County, IL",
    image: "/images/work-brick-repair.jpg",
  },
  {
    num: "03",
    title: "Walkway Restoration & Front Entrance Repair",
    tag: "Masonry Restoration",
    location: "Central Illinois",
    image: "/images/hero-walkway.jpg",
  },
  {
    num: "04",
    title: "Lintel Repair",
    tag: "Tuckpointing",
    location: "Peoria County, IL",
    image: "/images/work-tuckpointing.jpg",
  },
  {
    num: "05",
    title: "Efflorescence Removal & Waterproofing",
    tag: "Waterproofing",
    location: "Central Illinois",
    image: "/images/work-efflorescence.jpg",
  },
  {
    num: "06",
    title: "Commercial & Industrial Restoration",
    tag: "Commercial",
    location: "Central Illinois",
    image: "/images/work-commercial.jpg",
  },
  {
    num: "07",
    title: "CMU Block Repair — Ulta Beauty",
    tag: "Commercial Block Repair",
    location: "Merrillville, IN",
    image: "/images/jobs/ulta-beauty-block-repair-merrillville/during-01.jpeg",
    slug: "ulta-beauty-block-repair-merrillville",
  },
];

export default projects;
