
import React from 'react';

const SolutionSection: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Solution</h2>
      <p className="mb-4">
        I developed a comprehensive DesignOps framework with several key components:
      </p>
      <ol className="list-decimal pl-6 mb-8 space-y-4">
        <li>
          <strong>Standardized Design Workflows</strong>
          <p className="mt-1">
            Created clear processes for design requests, feedback cycles, and handoffs, with defined 
            checkpoints and approval stages.
          </p>
        </li>
        <li>
          <strong>Collaboration Tools Integration</strong>
          <p className="mt-1">
            Established an integrated toolset with Figma, Zeplin, and Jira to create a single source 
            of truth and streamline communication.
          </p>
        </li>
        <li>
          <strong>Design System Implementation</strong>
          <p className="mt-1">
            Developed a comprehensive design system with component libraries and documentation to 
            ensure consistency and accelerate design work.
          </p>
        </li>
        <li>
          <strong>Automated Handoff Documentation</strong>
          <p className="mt-1">
            Created templates and automation for design specifications to reduce manual work 
            and minimize miscommunication.
          </p>
        </li>
      </ol>
    </>
  );
};

export default SolutionSection;
