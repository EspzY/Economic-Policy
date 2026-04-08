type PastExamResource = {
  year: number;
  exam: string;
  solution?: string;
};

export const seminars = [
  {
    id: 'seminar-1',
    title: 'Seminar 1: New Keynesian Model',
    focus:
      'Shock transmission, natural-rate reasoning, and qualitative comparative statics in the baseline NK framework.',
    files: [
      'Problem sets/Seminar 1/GRA6631_TA1_Exercises.pdf',
      'Problem sets/Seminar 1/GRA6631_NaturalRate.pdf',
      'Problem sets/Seminar 1/Seminar_1_GRA6631_2025_Solutions.pdf',
    ],
  },
  {
    id: 'seminar-2',
    title: 'Seminar 2: Monetary Policy Applications',
    focus:
      'A second practice set with slides, exercises, and solutions tied to the monetary-policy block of the course.',
    files: [
      'Problem sets/Seminar 2/GRA6631_TA2_Exercises.pdf',
      'Problem sets/Seminar 2/GRA6631_Presentation.pdf',
      'Problem sets/Seminar 2/Seminar_2_GRA6631_2025_solutions.pdf',
    ],
  },
  {
    id: 'seminar-3',
    title: 'Seminar 3: Fiscal Policy, Inequality, and Sustainability',
    focus:
      'Late-course practice sheet covering the fiscal-policy and broader policy themes from lectures 9 to 12.',
    files: ['Problem sets/Seminar 3/GRA6631_TA3_Sheet.pdf'],
  },
] as const;

export const pastExams = [
  {
    year: 2025,
    exam: 'Exams/GRA6631_2025-04-28_kl_09_EP.pdf',
    solution: 'Exams/Solution/GRA6631_2025-04-28_kl_09_EG.pdf',
  },
  {
    year: 2024,
    exam: 'Exams/Exam 2024.pdf',
    solution: 'Exams/Solution/GRA 66311_202410_03.05.2024_EG.pdf',
  },
  {
    year: 2023,
    exam: 'Exams/Exam 2023.pdf',
  },
  {
    year: 2022,
    exam: 'Exams/Exam 2022.pdf',
  },
  {
    year: 2021,
    exam: 'Exams/Exam 2021.pdf',
    solution: 'Exams/Solution/GRA 66311_202110_19.05.2021_EG.pdf',
  },
  {
    year: 2020,
    exam: 'Exams/Exam 2020.pdf',
    solution: 'Exams/Solution/GRA 66311_202010_11.05.2020_EG.pdf',
  },
] as PastExamResource[];

export const studyRoadmap = [
  {
    label: 'Days 1-4',
    title: 'Build the Monetary-Policy Base',
    focus:
      'Work through lectures 1 to 3 slowly enough to learn the vocabulary of objectives, rules, and the baseline NK model.',
    outputs: [
      'Be able to explain each equation in the core model in plain English.',
      'Know the difference between objectives, instruments, and policy rules.',
      'Start a one-page formula sheet while studying.',
    ],
  },
  {
    label: 'Days 5-8',
    title: 'Master Optimal Policy and Commitment',
    focus:
      'Study lectures 4 to 6 with emphasis on targeting rules, commitment versus discretion, and forward guidance.',
    outputs: [
      'Explain the logic of optimal monetary policy without skipping the constraint structure.',
      'Be able to discuss time inconsistency conceptually and graphically.',
      'Use seminar questions to test whether you can reason from shocks to outcomes.',
    ],
  },
  {
    label: 'Days 9-12',
    title: 'Finish the Syllabus and Connect Themes',
    focus:
      'Cover lectures 7 to 12, linking Phillips-curve evidence, debt, inequality, and sustainability to the earlier theory.',
    outputs: [
      'Know which topics are conceptual and which require formal derivation.',
      'Write short compare-and-contrast notes across lectures.',
      'Flag weak areas before moving into exam-heavy practice.',
    ],
  },
  {
    label: 'Days 13-16',
    title: 'Practice Under Exam Conditions',
    focus:
      'Use seminar sheets and recent exams to train structure, time use, and topic switching under pressure.',
    outputs: [
      'Solve at least two full past exams with a timer.',
      'Build a mistake log with recurring conceptual gaps.',
      'Translate every correction into a concrete review task.',
    ],
  },
  {
    label: 'Days 17-20',
    title: 'Repair Weaknesses and Consolidate',
    focus:
      'Use the final stretch to revisit fragile derivations, common pitfalls, and high-yield exam themes.',
    outputs: [
      'Revise the formula and concept sheet into a final compact version.',
      'Re-do the hardest questions without notes.',
      'Spend the last day on calm recall, not new material.',
    ],
  },
] as const;

export const formulaThemes = [
  {
    title: 'Monetary-Policy Block',
    note:
      'Policy rules, inflation targeting logic, the DIS/IS relation, and the NK Phillips Curve are central to the first part of the course.',
  },
  {
    title: 'Optimal-Policy Block',
    note:
      'Targeting rules, commitment, discretion, and time inconsistency connect formal optimization to policy design.',
  },
  {
    title: 'Fiscal-Policy Block',
    note:
      'Government debt, Ricardian equivalence, debt crises, and political-economy constraints dominate lectures 9 and 10.',
  },
  {
    title: 'Distribution and Sustainability Block',
    note:
      'Inequality metrics, distributional mechanisms, resource constraints, and sustainability concepts appear later in the course.',
  },
] as const;

export const studyPrinciples = [
  'Read each lecture once for orientation and a second time for real understanding.',
  'Turn every derivation into a sequence of why-questions, not just algebraic steps.',
  'Switch regularly between theory pages, seminar sheets, and past exams.',
  'Track weak areas explicitly so revision becomes targeted rather than vague.',
] as const;
