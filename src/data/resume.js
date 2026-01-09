export const resumeData = {
  "name": "Mehul Chaudhari",
  "contact": {
    "email": "chaudharimehul2001@gmail.com",
    "phone": "+91-9527034551",
    "portfolio": "https://mehulkc.me",
    "github": "https://github.com/MehulKChaudhari",
    "linkedin": "https://www.linkedin.com/in/mehulkchaudhari/",
    "x": "https://x.com/mehulkchaudhari"
  },
  "work_experience": [
    {
      "title": "Software Development Engineer (SDE)",
      "company": "YUDEK. Inc",
      "duration": "2022 - present",
      "points": [
        "Reduced initial page load from ~50 API calls to 4–5 by designing batched backend APIs in Node.js and Express, fetching rooms, tables, cards, and decks together in structured chunks for faster and more reliable loads.",
        "Led a frontend and backend migration from JavaScript to TypeScript across Ember.js and backend services, preventing ~90% of production bugs by catching integration and runtime issues earlier through typed contracts.",
        "Improved content loading performance by introducing a CDN caching layer via Cloudinary and storing derived image metadata for cards and decks, reducing repeat fetches and speeding up browsing.",
        "Built fine-grained access controls for user content, supporting public items, user-specific sharing, and collaborative tables, while keeping private data strictly isolated.",
        "Strengthened platform security and developer confidence by adding CSRF protection, enforcing a strict Content Security Policy (CSP), and stabilizing broken test suites and CI pipelines so failures were reproducible locally and in CI.",
        "Designed a pluggable file preview system supporting 30+ file types, eliminating mandatory downloads and cutting 2–3 steps per file view, which improved UX and drove higher feature adoption by users, backed by scalable storage on AWS S3."
      ],
      "tech_stack": ["Ember.js", "TypeScript", "Node.js", "Firestore", "AWS", "Cloudinary", "Jest", "Browser Extension APIs", "System Design", "Test-Driven Development", "Production Systems"]
    },
    {
      "title": "Frontend Engineer",
      "company": "Freelance (NDA)",
      "duration": "May 2022 - Dec 2025",
      "points": [
        "Improved page load and UI responsiveness by ~30–35% by fixing expensive render paths and eliminating unnecessary re-renders caused by parent state changes using React.Memo, useMemo, and useCallback, reducing redundant renders by ~50%.",
        "Built complex, dynamic forms with custom inputs and client-side validation, ensuring all required fields were validated before submission and reducing incomplete form errors by ~25%.",
        "Created reusable React components shared across multiple product areas, improving UI consistency and reducing duplicated logic.",
        "Improved accessibility across the application by implementing semantic HTML, keyboard navigation, and ARIA roles, achieving ~95% tabbing coverage and aligning core flows with WCAG guidelines."
      ],
      "tech_stack": ["React", "Redux", "TypeScript", "SCSS", "Mantine", "Vitest", "Micro-frontends", "Performance Optimization"]
    },
    {
      "title": "SDE Intern",
      "company": "NeoG Camp, Kanak Krea(OPC) Pvt Ltd",
      "duration": "June 2021 – November 2021",
      "points": [
        "Built an end-to-end admissions platform used by ~6,000 applicants, owning both frontend and backend flows for portfolio submission, review, and resubmission, which reduced manual coordination for the admissions team.",
        "Designed and implemented JWT-based authentication with role-based access control, enabling secure separation of student, reviewer, and admin workflows while keeping the system extensible for future cohorts.",
        "Implemented a conditional resubmission system with checklist-driven feedback, allowing rejected applicants to clearly understand gaps and resubmit portfolios, improving review efficiency and applicant completion rates.",
        "Developed a shareable animated admission ticket UI shown on acceptance, leading to high organic sharing on LinkedIn and X and turning admissions into a built-in social distribution channel.",
        "Collaborated directly with the CEO to translate high-level admission and business requirements into concrete product features, making architectural and UX decisions that balanced scale, security, and speed of iteration."
      ],
      "tech_stack": ["Next.js", "React", "TypeScript", "Chakra UI", "MongoDB", "Product Engineering", "Code Reviews", "Testing"]
    }
  ],
  "skills": [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js (Express.js)", "GraphQL", "AWS (EC2, ECS, S3, ECR, Lambda)",
    "Ember.js", "Docker", "GitHub (Actions)", "Git", "React-query", "Redux", "Javascript testing frameworks (Jest, Mocha, Chai, Qunit)",
    "GoLang", "MongoDB", "Firestore", "PostgreSQL", "DynamoDB", "Postman", "Webpack", "TailwindCSS"
  ],
  "education": {
    "degree": "BTech Computer Science",
    "institution": "MIT School of Engineering, MIT Art Design and Technology University",
    "location": "Pune, Maharashtra",
    "gpa": "3.36",
    "cgpa": "8"
  }
} 