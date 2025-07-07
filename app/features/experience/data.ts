export interface Experience {
  jobTitle: string;
  companyName: string;
  description: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    jobTitle: "Frontend Engineer",
    companyName: "Apata",
    description: [
      "Worked on the frontend of a Next.js Fintech app for a Dublin-based company.",
      "Focused on improving developer experience by updating E2E tests and data fetching tools.",
      "Migrated E2E tests from Cypress to Playwright, improving feature coverage.",
      "Standardised data fetching across the codebase by migrating to tRPC.",
    ],
    skills: [
      "Next.js",
      "React",
      "TypeScript",
      "Playwright",
      "tRPC",
      "Cypress",
      "E2E Testing",
    ],
  },
  {
    jobTitle: "Frontend Engineer",
    companyName: "Thrive Global",
    description: [
      "Worked on the frontend of a React-based behaviour change app for a US company.",
      "Contributed to the journeys and reset teams.",
      "Developed the content library page for video and audio resets.",
      "Led a year-long redesign of the main web app landing page (journeys project) to increase daily active users and refocus on behaviour change.",
    ],
    skills: [
      "React",
      "TypeScript",
      "Redux",
      "Content Library",
      "UI/UX",
      "Landing Page Redesign",
    ],
  },
  {
    jobTitle: "Frontend Engineer",
    companyName: "LetsGetChecked",
    description: [
      "Worked on the frontend of a React-based internal tool to process home test kits used by internal nurses.",
      "Gained a strong foundation in frontend development.",
      "Contributed to multiple features and improvements.",
      "Supported rapid growth during the pandemic.",
    ],
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Internal Tools",
      "Cross-functional Teams",
    ],
  },
];
