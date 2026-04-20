export type ReviewStatus = 'Draft' | 'Review ready' | 'Reviewed' | 'Submitted'
export type AssessmentScope = 'Progress' | 'Promotion'

export interface SkillRating {
  skillId: string
  category: string
  group: string
  skillName: string
  employeeRating: number
  managerRating: number | null
  comment: string
}

export interface AssessmentEvidence {
  id: string
  name: string
}

export interface Assessment {
  id: string
  rating: number
  careerPosition: string
  careerPath: string
  icpm: 'IC' | 'PM'
  scope: AssessmentScope
  modified: string
  reviewStatus: ReviewStatus
  reviewer: string
  reviewerComments: string
  skillRatings: SkillRating[]
  evidence: AssessmentEvidence[]
}

export const assessments: Assessment[] = [
  {
    id: 'ASM-00001107',
    rating: 4.2,
    careerPosition: 'Senior Developer',
    careerPath: 'Development IC',
    icpm: 'IC',
    scope: 'Progress',
    modified: '15-Apr-2026',
    reviewStatus: 'Review ready',
    reviewer: 'Alvarez, Luis',
    reviewerComments:
      "He's a highly capable professional who delivers reliable results and has strong potential to grow further. Nice person.",
    skillRatings: [
      {
        skillId: 'sd-1',
        category: 'Tech Skills',
        group: 'Technical Skill Depth and Breadth',
        skillName: 'Core stack proficiency',
        employeeRating: 4,
        managerRating: 5,
        comment:
          'Overengineering frameworks without validated reuse demand.',
      },
      {
        skillId: 'sd-2',
        category: 'Tech Skills',
        group: 'Technical Skill Depth and Breadth',
        skillName: 'Systems design & Architecture',
        employeeRating: 3,
        managerRating: 6,
        comment:
          '- Designs features/components that align with system structure\n- Identifies integration points and edge cases\n- Articulates trade-offs in design discussions\n- Breaks down tasks with moderate supervision\n- Proactively communicates blockers\n- Sprint completion stats, code review contributions',
      },
      {
        skillId: 'sd-3',
        category: 'Tech Skills',
        group: 'Projects Managed',
        skillName: 'Project managed',
        employeeRating: 4,
        managerRating: 5,
        comment: '',
      },
      {
        skillId: 'sd-4',
        category: 'Tech Skills',
        group: 'Productivity & Delivery',
        skillName: 'Productivity',
        employeeRating: 4,
        managerRating: 4,
        comment: '',
      },
      {
        skillId: 'sd-5',
        category: 'Soft Skills',
        group: 'Soft Skills',
        skillName: 'Soft skills',
        employeeRating: 5,
        managerRating: 4,
        comment:
          '- Written PR descriptions, meeting summaries, peer feedback praising clarity\n- Review history in GitHub/GitLab; authored wiki/Confluence pages',
      },
    ],
    evidence: [{ id: 'ev-1', name: 'Evidence.txt' }],
  },
  {
    id: 'ASM-00001089',
    rating: 3.8,
    careerPosition: 'Developer',
    careerPath: 'Development IC',
    icpm: 'IC',
    scope: 'Promotion',
    modified: '10-Mar-2026',
    reviewStatus: 'Draft',
    reviewer: 'Chen, Lisa',
    reviewerComments: '',
    skillRatings: [
      {
        skillId: 'dev-1',
        category: 'Tech Skills',
        group: 'Technical Skill Depth and Breadth',
        skillName: 'Core stack proficiency',
        employeeRating: 4,
        managerRating: null,
        comment: '',
      },
      {
        skillId: 'dev-2',
        category: 'Tech Skills',
        group: 'Technical Skill Depth and Breadth',
        skillName: 'Systems design',
        employeeRating: 3,
        managerRating: null,
        comment: '',
      },
      {
        skillId: 'dev-3',
        category: 'Soft Skills',
        group: 'Soft Skills',
        skillName: 'Collaboration',
        employeeRating: 4,
        managerRating: null,
        comment: '',
      },
    ],
    evidence: [],
  },
  {
    id: 'ASM-00001095',
    rating: 4.5,
    careerPosition: 'Senior Developer',
    careerPath: 'Development IC',
    icpm: 'IC',
    scope: 'Progress',
    modified: '02-Apr-2026',
    reviewStatus: 'Reviewed',
    reviewer: 'Kim, Sarah',
    reviewerComments:
      'Strong performer showing clear progression towards Expert level. Recommended for promotion consideration.',
    skillRatings: [
      {
        skillId: 'sd-1',
        category: 'Tech Skills',
        group: 'Technical Skill Depth and Breadth',
        skillName: 'Core stack proficiency',
        employeeRating: 5,
        managerRating: 5,
        comment: 'Exceptional quality and consistency in delivery.',
      },
      {
        skillId: 'sd-2',
        category: 'Tech Skills',
        group: 'Systems Design & Architecture',
        skillName: 'Architecture decisions',
        employeeRating: 4,
        managerRating: 5,
        comment: 'Good grasp of trade-offs.',
      },
      {
        skillId: 'sd-5',
        category: 'Soft Skills',
        group: 'Soft Skills',
        skillName: 'Soft skills',
        employeeRating: 5,
        managerRating: 5,
        comment: 'Excellent communicator.',
      },
    ],
    evidence: [
      { id: 'ev-2', name: 'Performance Review Q1.pdf' },
      { id: 'ev-3', name: 'Tech Design Doc.docx' },
    ],
  },
]
