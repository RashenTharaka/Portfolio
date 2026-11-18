
// src/data/portfolio.ts
// Central, typed content for the portfolio.
// Anything that is not yet confirmed is set to `null` so components can
// hide it (or show a placeholder) instead of displaying invented content.

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export interface ImageAsset {
  /** Public path, served from the /public folder. */
  src: string;
  /** Meaningful alternative text for screen readers. */
  alt: string;
}

export interface VideoAsset {
  /** Public path of the video file (planned until the MP4 is supplied). */
  src: string;
  /** Poster image path, or null until a suitable still exists. */
  poster: string | null;
  /** Accessible label for the video element. */
  label: string;
  /** Fallback text shown if the browser cannot play the video. */
  fallbackText: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  intro: string;
  aboutHeading: string;
  aboutText: string;
  cvPath: string | null;
  heroPortrait: ImageAsset | null;
  aboutPortrait: ImageAsset | null;
}

export interface ContactInfo {
  email: string | null;
  github: string | null;
  instagram: string | null;
  linkedin: string | null;
  location: string | null;
  heading: string;
  text: string;
}

export interface Pillar {
  title: string;
  description: string;
}

export interface Education {
  degree: string;
  classification: string;
  institution: string;
  dates: string | null;
}

export type ProjectId =
  | "safestep"
  | "hotel-management"
  | "shipshape"
  | "jewel-crush"
  | "superland"
  | "food-order-app";

export interface Project {
  id: ProjectId;
  title: string;
  category: string;
  description: string;
  technologies: readonly string[];
  image: ImageAsset | null;
  video: VideoAsset | null;
  contribution: string | null;
  repoUrl: string | null;
  liveUrl: string | null;
}

export interface Skill {
  name: string;
  usedIn: readonly ProjectId[];
  usedInPortfolio?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: readonly Skill[];
}

export interface Highlight {
  label: string;
  value: number | null;
  text?: string;
}

/* ------------------------------------------------------------------ */
/* Profile                                                             */
/* ------------------------------------------------------------------ */

export const profile: Profile = {
  name: "Tharaka Rusiru",
  role: "Software Developer",
  tagline:
    "I turn ideas into reliable software solutions through clean code, creative thinking, and problem-solving.",
  intro:
    "Computer Science graduate with First Class Honours from the University of Bedfordshire, looking for software engineering and full-stack internship opportunities.",
  aboutHeading: "Passionate About Building Solutions",
  aboutText:
    "Computer Science graduate with First Class Honours from the University of Bedfordshire. Interested in building practical software that solves real-world problems, with a focus on thoughtful engineering, continuous learning, and useful user experiences.",
  cvPath: null,
  heroPortrait: {
    src: "/images/hero-portrait.png",
    alt: "Portrait of Tharaka Rusiru",
  },
  aboutPortrait: null,
};

/* ------------------------------------------------------------------ */
/* Contact                                                             */
/* ------------------------------------------------------------------ */

export const contact: ContactInfo = {
  email: "rashentharaka.23@gmail.com",
  github: "https://github.com/RashenTharaka",
  instagram: "https://www.instagram.com/___rashen___/",
  linkedin: "https://www.linkedin.com/in/rashentharaka/",
  location: "Galle, Sri Lanka",
  heading: "Let's Talk",
  text: "Have a project in mind, an opportunity to discuss, or just want to connect? Feel free to get in touch. I'd be happy to hear from you.",
};

/* ------------------------------------------------------------------ */
/* Three pillars                                                       */
/* ------------------------------------------------------------------ */

export const pillars: readonly Pillar[] = [
  {
    title: "Problem-solving",
    description:
      "Understanding the problem first, then choosing a solution that fits it.",
  },
  {
    title: "Building useful software",
    description:
      "Turning requirements into working applications that people can use.",
  },
  {
    title: "Continuous learning",
    description:
      "Growing my skills through hands-on projects and steady iteration.",
  },
];

/* ------------------------------------------------------------------ */
/* Education                                                           */
/* ------------------------------------------------------------------ */

export const education: readonly Education[] = [
  {
    degree: "BSc (Hons) Computer Science",
    classification: "First Class Honours",
    institution: "University of Bedfordshire",
    dates: null,
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export const projects: readonly Project[] = [
  {
    id: "safestep",
    title: "SafeStep Smart Headband",
    category: "Wearable IoT Device",
    description:
      "An ML-driven IoT assistive system that detects nearby objects, estimates direction and proximity, and provides real-time voice guidance for visually impaired users.",
    technologies: [
      "Python",
      "OpenCV",
      "YOLO",
      "SSD",
      "NCNN",
      "Pi OS",
    ],
    image: {
      src: "/images/Poster-Headband.png",
      alt: "Project poster for the SafeStep Smart Headband",
    },
    video: {
      src: "/videos/safestep-demo.mp4",
      poster: null,
      label: "SafeStep Smart Headband Demonstration Video",
      fallbackText:
        "Your browser does not support embedded video. The SafeStep project introduction video cannot be played here.",
    },
    contribution: null,
    repoUrl: "https://github.com/RashenTharaka/SafeStep-IoT-Smart-Headband.git",
    liveUrl: null,
  },

  {
    id: "jewel-crush",
    title: "Jewel Crush",
    category: "Web Game",
    description:
      "An interactive browser-based match-three puzzle game featuring timed challenges, level progression, score tracking, player authentication, and cloud-based leaderboard storage.",
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "Firebase",
      "Firestore",
    ],
    image: {
      src: "/images/Poster-JewelCrush.png",
      alt: "Project poster for the Jewel Crush game",
    },
    video: null,
    contribution: null,
    repoUrl: "https://github.com/RashenTharaka/Jewel-Crush-Match-3-Puzzle-Game.git",
    liveUrl: null,
  },
  {
    id: "superland",
    title: "SuperLand E-Commerce Website",
    category: "Web App",
    description:
      "A PHP and MySQL powered e-commerce platform featuring product browsing, customer accounts, shopping cart management, checkout, and administrative product management.",
    technologies: [
      "PHP",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    image: {
      src: "/images/Poster-Superland.png",
      alt: "Project poster for the SuperLand Store e-commerce website",
    },
    video: null,
    contribution: null,
    repoUrl: "https://github.com/RashenTharaka/E-Commerce-Website-with-Admin-Dashboard.git",
    liveUrl: null,
  },
  {
    id: "hotel-management",
    title: "Hotel Management System",
    category: "Desktop App",
    description:
      "A Java desktop application for managing hotel operations, including room bookings, customer records, employee management, events, inventory, and operational reporting.",
    technologies: ["Java", "Java Swing", "MySQL", "JDBC"],
    image: {
      src: "/images/Poster-HotelManagement.png",
      alt: "Project poster for the Hotel Management System for Kingfisher Beach Resort",
    },
    video: null,
    contribution: null,
    repoUrl: "https://github.com/RashenTharaka/Hotel-Management-System-Java-MySQL.git",
    liveUrl: null,
  },
  {
    id: "food-order-app",
    title: "Food Ordering App",
    category: "Android App",
    description:
      "An Android application for browsing food categories, viewing product details, managing shopping carts, and calculating order totals using Firebase Realtime Database.",
    technologies: [
      "Java",
      "Android SDK",
      "Firebase",
      "Glide",
    ],
    image: {
      src: "/images/Poster-AndroidApp.png",
      alt: "Project poster for the Food Ordering Android Application",
    },
    video: null,
    contribution: null,
    repoUrl: "https://github.com/RashenTharaka/FoodOrderApp-Android-Firebase",
    liveUrl: null,
  },
  {
    id: "shipshape",
    title: "Maritime Management System",
    category: "Desktop App",
    description:
      "A Java desktop application for organizing maritime maintenance requests, supplier records, spare parts inventory, employee details, job assignments, and sales reporting.",
    technologies: ["Java", "Swing"],
    image: {
      src: "/images/Poster-ShipShape.png",
      alt: "Project poster for the Maritime Service Management System",
    },
    video: null,
    contribution: null,
    repoUrl: "https://github.com/RashenTharaka/ShipShape-Maritime-Maintenance-System.git",
    liveUrl: null,
  },
];

/* ------------------------------------------------------------------ */
/* Technical skills                                                    */
/* ------------------------------------------------------------------ */

export const skillCategories: readonly SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    skills: [
      { name: "Java", usedIn: ["hotel-management", "shipshape", "food-order-app"] },
      { name: "JavaScript", usedIn: ["jewel-crush"] },
      { name: "Python", usedIn: ["safestep"] },
      { name: "PHP", usedIn: ["superland"] },
      { name: "TypeScript", usedIn: [], usedInPortfolio: true },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    skills: [
      { name: "React", usedIn: [], usedInPortfolio: true },
      { name: "Vite", usedIn: [], usedInPortfolio: true },
      { name: "CSS", usedIn: [], usedInPortfolio: true },
      { name: "Java Swing", usedIn: ["hotel-management", "shipshape"] },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    skills: [
      { name: "PHP", usedIn: ["superland"] },
      { name: "JDBC", usedIn: ["hotel-management"] },
    ],
  },
  {
    id: "data",
    title: "Databases and Services",
    skills: [
      { name: "MySQL", usedIn: ["hotel-management", "superland"] },
      { name: "Firebase Authentication", usedIn: ["jewel-crush"] },
      { name: "Firestore", usedIn: ["jewel-crush"] },
      { name: "Firebase Realtime Database", usedIn: ["food-order-app"] },
    ],
  },
  {
    id: "ml",
    title: "Machine Learning and Computer Vision",
    skills: [
      { name: "OpenCV", usedIn: ["safestep"] },
      { name: "YOLOv8", usedIn: ["safestep"] },
      { name: "NCNN", usedIn: ["safestep"] },
      { name: "SSD MobileNet", usedIn: ["safestep"] },
      { name: "Raspberry Pi", usedIn: ["safestep"] },
    ],
  },
  {
    id: "tools",
    title: "Developer Tools",
    skills: [],
  },
];

/* ------------------------------------------------------------------ */
/* Highlight strip                                                     */
/* ------------------------------------------------------------------ */

export const highlights: readonly Highlight[] = [
  {
    label: "Degree classification",
    value: null,
    text: "First Class Honours",
  },
  {
    label: "Featured projects",
    value: projects.length,
  },
  {
    label: "Approach",
    value: null,
    text: "Continuous learning",
  },
];

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export interface NavItem {
  label: string;
  targetId: string;
}

export const navItems: readonly NavItem[] = [
  { label: "About", targetId: "about" },
  { label: "Projects", targetId: "projects" },
  { label: "Skills", targetId: "skills" },
  { label: "Education", targetId: "journey" },
  { label: "Contact", targetId: "contact" },
];
