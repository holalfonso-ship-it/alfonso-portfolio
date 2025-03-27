
export interface ProcessStepData {
  id: number;
  title: string;
  points: string[];
  imageSrc: string;
  imageAlt: string;
  imageCaption: string;
}

export const processStepsData: ProcessStepData[] = [
  {
    id: 1,
    title: "1. Research & Analysis",
    points: [
      "Conducted competitive analysis of top e-commerce apps on both platforms to identify patterns and best practices",
      "Performed user interviews with existing customers who used iOS and Android devices",
      "Analyzed platform-specific guidelines (Material Design 3 and iOS Human Interface Guidelines)",
      "Created user personas that represented both platform user types and their unique expectations"
    ],
    imageSrc: "/lovable-uploads/4789cc35-7092-4740-af94-ce7f152bbf3b.png",
    imageAlt: "Research and Analysis Phase",
    imageCaption: "Analyzing user behavior patterns and platform-specific guidelines to establish solid research foundation."
  },
  {
    id: 2,
    title: "2. Strategy & Information Architecture",
    points: [
      "Developed a unified information architecture and user flow that would work across platforms",
      "Created a feature parity matrix to ensure core functionality remained consistent",
      "Identified platform-specific enhancement opportunities to leverage unique capabilities",
      "Established design principles to guide decision-making throughout the process"
    ],
    imageSrc: "/lovable-uploads/bf0527b8-71d8-4a05-bb27-3cf2102daa11.png",
    imageAlt: "Information Architecture Planning",
    imageCaption: "Creating unified information architecture and user flows that work seamlessly across platforms."
  },
  {
    id: 3,
    title: "3. Wireframing & Prototyping",
    points: [
      "Created low-fidelity wireframes for critical user journeys (browsing, search, checkout)",
      "Developed platform-specific wireframes addressing navigation patterns for each OS",
      "Built interactive prototypes for user testing on both iOS and Android devices",
      "Conducted usability testing with users of both platforms to validate concepts"
    ],
    imageSrc: "/lovable-uploads/9f00aa05-f9b2-486b-8166-30126ef7e168.png",
    imageAlt: "Wireframing and Prototyping Process",
    imageCaption: "Building wireframes and interactive prototypes to test navigation patterns and user flows."
  },
  {
    id: 4,
    title: "4. Design System Development",
    points: [
      "Created a unified color palette, typography system, and spacing scale for brand consistency",
      "Designed platform-specific component libraries (buttons, form elements, cards, etc.)",
      "Established naming conventions and organization that would work for both development teams",
      "Documented responsive behaviors for different screen sizes and orientations"
    ],
    imageSrc: "/lovable-uploads/3eaa9d8f-3d72-4339-b200-982a6a06bc5c.png",
    imageAlt: "Design System Components",
    imageCaption: "Developing a comprehensive design system with components adapted for both iOS and Android."
  },
  {
    id: 5,
    title: "5. UI Design & Iterations",
    points: [
      "Created high-fidelity screens for all key user flows across both platforms",
      "Incorporated feedback from stakeholders and initial user testing sessions",
      "Refined platform-specific interaction details (animations, transitions, gestures)",
      "Conducted additional usability testing to validate final design solutions"
    ],
    imageSrc: "/lovable-uploads/5cb0453f-dc0d-4b19-852f-8c3131354284.png",
    imageAlt: "UI Design and Iterations",
    imageCaption: "Refining high-fidelity UI designs with platform-specific interaction patterns and visual elements."
  },
  {
    id: 6,
    title: "6. Implementation & Optimization",
    points: [
      "Created detailed specifications and assets for development handoff",
      "Worked closely with iOS and Android development teams during implementation",
      "Conducted design QA throughout the development process",
      "Collected post-launch metrics and user feedback to inform future iterations"
    ],
    imageSrc: "/lovable-uploads/0a0b18bd-6af2-42d6-8ef4-b7a923f4a58d.png",
    imageAlt: "Implementation and Optimization",
    imageCaption: "Collaborating with development teams to ensure proper implementation and optimization of the design."
  }
];
