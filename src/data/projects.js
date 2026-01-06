export const projectsData = [
  {
    id: 1,
    title: "YUDEK Platform",
    type: "full-stack",
    description: "Comprehensive web application and browser extension for organizing and sharing links, PDFs, and files.",
    problem: "Users needed a unified system to access, organize, and share essential files across devices.",
    solution: "Built end-to-end features including public/private sharing, secure item management, and browser history integration.",
    complexity: "Full-stack complexity: TypeScript across Ember.js frontend and Node.js backend, Firestore for real-time data, browser extension APIs, and comprehensive test coverage.",
    tech: ["Ember.js", "TypeScript", "Node.js", "Firestore", "Browser Extension APIs"],
    link: null
  },
  {
    id: 2,
    title: "NeoG Camp Admissions Portal",
    type: "frontend",
    description: "Custom admissions portal handling 5,000+ annual student applications with animated acceptance tickets.",
    problem: "Existing admission process lacked engagement and sharing capabilities for accepted students.",
    solution: "Built Next.js portal with animated ticket UI that enables social sharing, improving user experience and engagement.",
    complexity: "Frontend complexity: Dynamic form handling, animation performance, social media integration, and TypeScript for type safety.",
    tech: ["Next.js", "React", "TypeScript", "Chakra UI"],
    link: null
  },
  {
    id: 3,
    title: "Micro-frontend Forms System",
    type: "frontend",
    description: "Large-scale web application with 50+ dynamic form pages, optimized for performance and accessibility.",
    problem: "Complex form system needed performance optimization and WCAG compliance for enterprise use.",
    solution: "Implemented memoization strategies, optimized state management, and achieved 95% keyboard navigation coverage.",
    complexity: "Frontend complexity: State management optimization, custom validation, accessibility implementation, and micro-frontend architecture.",
    tech: ["React", "Redux", "SCSS", "Mantine", "Vitest"],
    link: null
  }
]

export const curatedProjects = projectsData.slice(0, 2)

