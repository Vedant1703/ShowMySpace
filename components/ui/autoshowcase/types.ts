export interface ShowcaseStat {
  value: string;
  label: string;
}

export interface ShowcaseItem {
  id: string;
  label: string;
  title: string;
  description: string;
  stats: ShowcaseStat[];
  cta: string;
  videoSrc: string;
}

export const SHOWCASE_DATA: ShowcaseItem[] = [
  {
    id: "world",
    label: "World of X",
    title: "Immersive 3D experiences",
    description:
      "Immersive and intuitive exploration using realtime 3D technology for making informed decisions.",
    stats: [
      { value: "200%", label: "Customer satisfaction" },
      { value: "40%", label: "Increase in sales" },
    ],
    cta: "Know More",
    videoSrc: "/videos/world.mp4",
  },
  {
    id: "weblite",
    label: "Weblite",
    title: "Interactive Storytelling",
    description:
      "Interactive web-based platforms to visualize and explore properties within a realistic virtual environment.",
    stats: [
      { value: "400%", label: "Boost in engagement" },
      { value: "30%", label: "Increase in conversion" },
    ],
    cta: "Know More",
    videoSrc: "/videos/weblite.mp4",
  },
];
export const DATA1: ShowcaseItem[] = [
  {
    id: "digital-twins",
    label: "Digital Twins",
    title: "100% Accurate Digital Replicas",
    description: "Convert 2D floor plans into exact digital copies of your properties. Perfect for design validation, maintenance monitoring, and high-precision remote sales.",
    videoSrc: "/assets/landing/digital-twin.mp4",
    stats: [
      { label: "Digital Accuracy", value: "100%" },
      { label: "Access Anytime", value: "24/7" }
    ],
    cta: "Explore Digital Twins"
  },
  {
    id: "vr-ar",
    label: "VR/AR Experiences",
    title: "Immersive Virtual Exploration",
    description: "Allow clients to view projects in VR headsets or superimpose furniture using AR on mobile devices. Experience realistic lighting, materials, and textures without visiting the site.",
    videoSrc: "/assets/landing/vr-ar-preview.mp4",
    stats: [
      { label: "Sales Conversion", value: "Significant" },
      { label: "Remote Viewers", value: "Global" }
    ],
    cta: "View VR Solutions"
  },
  {
    id: "customization",
    label: "Interactive Customization",
    title: "Real-time Design Tailoring",
    description: "Instantly furnish empty flats or change wall colors and furniture styles. Help clients visualize the full potential of a space through interactive material swapping.",
    videoSrc: "/assets/landing/customization-demo.mp4",
    stats: [
      { label: "Buyer Confidence", value: "Increased" },
      { label: "Design Validation", value: "Instant" }
    ],
    cta: "Try Customization"
  }
];