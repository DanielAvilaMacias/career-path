export type SkillCategory = 'Tech Skills' | 'Soft Skills' | 'Leadership'

export interface Skill {
  id: string
  category: SkillCategory
  group: string
  name: string
  definition: string
  observableActions: string[]
}

export interface CareerLevel {
  id: string
  title: string
  skills: Skill[]
}

export const CURRENT_LEVEL_ID = 'senior-developer'

export const careerLevels: CareerLevel[] = [
  {
    id: 'associate-developer',
    title: 'Associate Developer',
    skills: [
      {
        id: 'ad-1',
        category: 'Tech Skills',
        group: 'Technical Skill Depth and Breadth',
        name: 'Core Stack Proficiency',
        definition: 'Delivers working code in the core stack with guidance, focusing on learning best practices and writing clean, readable code.',
        observableActions: [
          'Completes assigned tasks with working, readable code following team standards',
          'Asks clarifying questions to understand requirements before coding',
          'Applies basic unit tests to own code',
          'Follows team coding standards and style guides consistently',
        ],
      },
      {
        id: 'ad-2',
        category: 'Tech Skills',
        group: 'Technical Skill Depth and Breadth',
        name: 'Systems Awareness',
        definition: 'Understands the basic architecture of the system and how their code fits into the larger picture.',
        observableActions: [
          'Can explain how their component fits into the overall system',
          'Asks questions about system interactions before making changes',
          'Avoids breaking changes by checking dependencies',
        ],
      },
      {
        id: 'ad-3',
        category: 'Soft Skills',
        group: 'Soft Skills',
        name: 'Communication',
        definition: 'Communicates clearly with teammates, asks for help when blocked, and participates actively in team discussions.',
        observableActions: [
          'Provides clear updates on task progress in standups',
          'Raises blockers promptly rather than staying stuck',
          'Participates in team meetings with relevant input',
        ],
      },
    ],
  },
  {
    id: 'developer',
    title: 'Developer',
    skills: [
      {
        id: 'dev-1',
        category: 'Tech Skills',
        group: 'Technical Skill Depth and Breadth',
        name: 'Core Stack Proficiency',
        definition: 'Independently delivers working, maintainable code. Understands the codebase well enough to make good design decisions within a module.',
        observableActions: [
          'Independently implements features with minimal guidance',
          'Writes comprehensive tests covering happy paths and edge cases',
          'Reviews others\' code constructively, catching bugs and style issues',
          'Proactively refactors code to improve maintainability',
        ],
      },
      {
        id: 'dev-2',
        category: 'Tech Skills',
        group: 'Technical Skill Depth and Breadth',
        name: 'Systems Design',
        definition: 'Understands system design principles and applies them when building features, considering scalability and maintainability.',
        observableActions: [
          'Designs components with clear interfaces and minimal coupling',
          'Considers performance implications of design choices',
          'Documents architectural decisions and trade-offs',
        ],
      },
      {
        id: 'dev-3',
        category: 'Tech Skills',
        group: 'Productivity & Delivery',
        name: 'Delivery',
        definition: 'Delivers consistently within sprint commitments, manages own time effectively, and helps the team meet its goals.',
        observableActions: [
          'Consistently completes sprint commitments on time',
          'Identifies and removes blockers proactively',
          'Estimates tasks accurately and communicates changes early',
        ],
      },
      {
        id: 'dev-4',
        category: 'Soft Skills',
        group: 'Soft Skills',
        name: 'Collaboration',
        definition: 'Works effectively with teammates, contributes to a positive team culture, and helps others when needed.',
        observableActions: [
          'Actively participates in team ceremonies and retrospectives',
          'Helps unblock teammates without being asked',
          'Shares knowledge through documentation and informal conversations',
        ],
      },
    ],
  },
  {
    id: 'senior-developer',
    title: 'Senior Developer',
    skills: [
      {
        id: 'sd-1',
        category: 'Tech Skills',
        group: 'Technical Skill Depth and Breadth',
        name: 'Core Stack Proficiency',
        definition: 'Consistently delivers maintainable, testable, error-free code on time, increasingly leveraging AI tools for greater efficiency and improved structure.',
        observableActions: [
          'Decomposes ambiguous product asks into a sequenced implementation plan with clear risk spikes',
          'Elevates test strategy (property tests, contract tests, failure scenario coverage)',
          'Performs deep design reviews: data model integrity, failure modes, scaling trajectory, architectural coherence and delivery quality',
        ],
      },
      {
        id: 'sd-2',
        category: 'Tech Skills',
        group: 'Technical Skill Depth and Breadth',
        name: 'Systems Design & Architecture',
        definition: 'Designs features with system awareness, makes initial architectural decisions, and begins customizing tools to enhance productivity and troubleshooting.',
        observableActions: [
          'Independently architects complex systems and features, optimizing for scalability, performance, and maintainability',
          'Evaluates and improves existing architectures, integrating new logic and championing advanced design patterns',
          'Leads comprehensive documentation efforts (sequence diagrams, API specs, technical design docs) and facilitates collaborative design discussions',
        ],
      },
      {
        id: 'sd-3',
        category: 'Tech Skills',
        group: 'Projects Managed',
        name: 'Project Management',
        definition: 'Leads more complex initiatives, drives improvements across modules, and oversees broader technical health (refactoring, technical debt, system stabilization).',
        observableActions: [
          'Leads feature development projects of moderate complexity with minimal supervision',
          'Manages refactoring or performance improvement initiatives across modules',
          'Oversees technical debt reduction and system stabilization efforts',
        ],
      },
      {
        id: 'sd-4',
        category: 'Tech Skills',
        group: 'Productivity & Delivery',
        name: 'Productivity',
        definition: 'Consistently delivers complex stories within sprint timelines, proactively identifying risks and leveraging AI tools for team efficiency.',
        observableActions: [
          'Consistently delivers complex stories and features within sprint timelines, proactively identifying and mitigating risks',
          'Produces high-quality, maintainable code independently, setting coding standards and guiding others through code reviews and mentorship',
          'Expertly leverages AI tools (e.g., GitHub Copilot, ChatGPT) to enhance development efficiency and support team adoption',
        ],
      },
      {
        id: 'sd-5',
        category: 'Soft Skills',
        group: 'Soft Skills',
        name: 'Communication & Influence',
        definition: 'Adapts communication and practices to context and audience, proactively drives improvements, and solves complex problems creatively to benefit the team.',
        observableActions: [
          'Communicates complex technical concepts clearly to both technical and non-technical audiences',
          'Drives process improvements by identifying inefficiencies and proposing actionable solutions',
          'Builds strong working relationships across teams and functions',
        ],
      },
    ],
  },
  {
    id: 'expert-developer',
    title: 'Expert Developer',
    skills: [
      {
        id: 'ed-1',
        category: 'Tech Skills',
        group: 'Technical Skill Depth and Breadth',
        name: 'Technical Leadership',
        definition: 'Sets the technical direction for the team, defines best practices, and ensures the codebase evolves to meet long-term needs.',
        observableActions: [
          'Defines and enforces architectural standards and coding practices across the team',
          'Leads technical spikes to evaluate new technologies and approaches',
          'Mentors senior developers on architectural thinking and system design',
          'Drives adoption of new tools and practices that improve team effectiveness',
        ],
      },
      {
        id: 'ed-2',
        category: 'Tech Skills',
        group: 'Technical Skill Depth and Breadth',
        name: 'Cross-System Architecture',
        definition: 'Architects solutions that span multiple systems and teams, considering long-term implications and organizational alignment.',
        observableActions: [
          'Designs cross-team integrations with clear contracts and minimal coupling',
          'Identifies and mitigates systemic technical risks before they become incidents',
          'Drives architectural roadmaps aligned with business goals',
        ],
      },
      {
        id: 'ed-3',
        category: 'Tech Skills',
        group: 'Productivity & Delivery',
        name: 'Team Delivery',
        definition: 'Ensures the team consistently delivers high-quality work, removing systemic blockers and improving team processes.',
        observableActions: [
          'Identifies and resolves systemic delivery impediments across the team',
          'Defines and tracks engineering metrics to improve team throughput',
          'Coaches the team on effective delivery practices',
        ],
      },
      {
        id: 'ed-4',
        category: 'Soft Skills',
        group: 'Soft Skills',
        name: 'Strategic Influence',
        definition: 'Influences technical and product direction at the team and org level, building consensus and driving alignment.',
        observableActions: [
          'Presents technical proposals to leadership with clear trade-off analysis',
          'Builds alignment across teams on shared technical direction',
          'Advocates for engineering best practices in product and roadmap discussions',
        ],
      },
      {
        id: 'ed-5',
        category: 'Leadership',
        group: 'Technical Leadership',
        name: 'Mentorship & Growth',
        definition: 'Actively develops the technical capabilities of the team, creating a culture of learning and continuous improvement.',
        observableActions: [
          'Runs structured mentorship programs for developers at multiple levels',
          'Creates learning resources (design docs, workshops, runbooks) used by the team',
          'Identifies growth opportunities for team members and helps them pursue them',
        ],
      },
    ],
  },
  {
    id: 'principal-expert',
    title: 'Principal Application Expert',
    skills: [
      {
        id: 'pe-1',
        category: 'Tech Skills',
        group: 'Technical Vision',
        name: 'Technical Strategy',
        definition: 'Defines the multi-year technical strategy for a major domain, balancing innovation with operational stability.',
        observableActions: [
          'Authors technical strategy documents adopted at the organizational level',
          'Advises leadership on technology choices with long-term implications',
          'Drives standardization across multiple teams and systems',
        ],
      },
      {
        id: 'pe-2',
        category: 'Tech Skills',
        group: 'Technical Vision',
        name: 'Platform & Infrastructure',
        definition: 'Designs and oversees platform-level solutions that enable multiple teams to deliver faster and more reliably.',
        observableActions: [
          'Designs internal platforms and developer tooling used across the organization',
          'Defines SLOs and reliability standards for critical systems',
          'Drives the technical migration of legacy systems to modern architectures',
        ],
      },
      {
        id: 'pe-3',
        category: 'Soft Skills',
        group: 'Soft Skills',
        name: 'Organizational Influence',
        definition: 'Shapes engineering culture and practices at the organizational level, driving change and setting the bar for technical excellence.',
        observableActions: [
          'Establishes engineering standards and principles adopted org-wide',
          'Represents the organization in external technical forums and conferences',
          'Builds and nurtures communities of practice across the organization',
        ],
      },
      {
        id: 'pe-4',
        category: 'Leadership',
        group: 'Organizational Leadership',
        name: 'Engineering Culture',
        definition: 'Champions a culture of technical excellence, psychological safety, and continuous learning across the organization.',
        observableActions: [
          'Drives initiatives that improve engineering culture and team health',
          'Models and reinforces the values and behaviors the organization aspires to',
          'Creates visibility into engineering work and builds trust with non-engineering stakeholders',
        ],
      },
    ],
  },
]
