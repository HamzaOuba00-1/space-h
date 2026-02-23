export type TimelineItem = {
  title: string;
  period: string;
  description: string;
  tags: string[];
};

export const timeline: TimelineItem[] = [
  {
    title: "Web Foundations",
    period: "2023 → 2024",
    description: "Semantic HTML, CSS (layout, responsive design), modern JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Front-end Frameworks",
    period: "2024 → 2025",
    description: "React (routing, state, patterns), Angular (components, DI), component-driven UI.",
    tags: ["React", "Angular", "TypeScript"],
  },
  {
    title: "Back-end & Architecture",
    period: "2024 → 2026",
    description: "Spring (REST APIs, security, validation), clean design, maintainable structure.",
    tags: ["Spring", "REST", "Security"],
  },
];

export const stack = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Spring",
  "Git",
  "Docker",
];

export const highlights = [
  {
    title: "Clean structure",
    description: "Feature-based architecture, reusable components, readable code.",
  },
  {
    title: "Security mindset",
    description: "Anti-XSS through sanitization, safe link/input practices, disciplined content handling.",
  },
  {
    title: "Test-ready",
    description: "Service/repository-oriented code, ready for unit and integration testing.",
  },
];