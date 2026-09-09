export type GalleryPhoto = {
  src: string;
  alt: string;
};

// Curated from Emerald's own completed-job photos. Commercial-weighted.
// Kept as its own list so the grid can be curated independently of the featured
// carousel in `projects.ts` — previously both pulled the same photos under
// different filenames.
const gallery: GalleryPhoto[] = [
  {
    src: "/images/work/commercial-brick-corner-rebuild.webp",
    alt: "Commercial brick façade rebuilt at the corner of a Chicagoland warehouse",
  },
  {
    src: "/images/work/commercial-glass-block-facade.webp",
    alt: "Tuckpointed commercial brick wall with restored glass-block window openings",
  },
  {
    src: "/images/work/commercial-new-brick-wall.webp",
    alt: "Newly laid commercial brick wall on a Chicagoland light-industrial building",
  },
  {
    src: "/images/work/commercial-chimney-stack-2.webp",
    alt: "Rooftop commercial chimney stack after full masonry rebuild",
  },
  {
    src: "/images/work/commercial-window-wall-repair.webp",
    alt: "Commercial window wall with repaired lintels and repointed mortar joints",
  },
  {
    src: "/images/work/chimney-crown-rebuild.webp",
    alt: "Chimney crown and flashing rebuilt on a Chicagoland roof",
  },
  {
    src: "/images/work/industrial-facade-restoration.webp",
    alt: "Long industrial façade restored along a Chicagoland service drive",
  },
  {
    src: "/images/work/commercial-parapet-repair.webp",
    alt: "Commercial parapet wall repair with new coping on a brick building",
  },
  {
    src: "/images/work/commercial-warehouse-tuckpointing.webp",
    alt: "Warehouse brick wall after full-height commercial tuckpointing",
  },
  {
    src: "/images/work/chimney-rebuild-detail.webp",
    alt: "Chimney rebuilt from the roofline up with new crown and flashing",
  },
  {
    src: "/images/work/residential-porch-pillars.webp",
    alt: "Brick porch pillars and limestone caps rebuilt on a Chicago greystone",
  },
  {
    src: "/images/work/residential-brick-stoop-rebuild.webp",
    alt: "Brick and limestone entry stoop rebuilt with fresh mortar joints",
  },
];

export default gallery;
