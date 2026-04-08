export type QuizDifficulty = 'easy' | 'medium' | 'hard';

export type QuizKind =
  | 'symbols'
  | 'concept'
  | 'math'
  | 'policy'
  | 'truefalse'
  | 'exam';

export type QuizOption = {
  label: string;
  correct: boolean;
  explanation: string;
};

export type QuizQuestion = {
  id: string;
  lectureSlug: string;
  lectureNumber: number;
  lectureTopic: string;
  topicTag: string;
  difficulty: QuizDifficulty;
  kind: QuizKind;
  points?: number;
  question: string;
  hints?: string[];
  options: QuizOption[];
};

export const quizBank: QuizQuestion[] = [
  {
    id: 'quiz:objectives-instruments-rules',
    lectureSlug: 'lecture-01',
    lectureNumber: 1,
    lectureTopic: 'Objectives, instruments, rules, and policy vocabulary',
    topicTag: 'foundations',
    difficulty: 'easy',
    kind: 'concept',
    question:
      'Which option correctly matches objectives, instruments, and rules in monetary policy?',
    hints: [
      'Objectives are outcomes society cares about (inflation, employment).',
      'Instruments are what the central bank can move directly (a policy rate).',
      'Rules describe how the instrument reacts to the state of the economy.',
    ],
    options: [
      {
        label: 'Objective: policy rate. Instrument: inflation. Rule: price stability.',
        correct: false,
        explanation:
          'This mixes the layers. Inflation and employment are objectives; the policy rate is the instrument; a rule is the mapping from conditions to the instrument.',
      },
      {
        label: 'Objective: inflation/employment outcomes. Instrument: short nominal interest rate. Rule: how the rate responds to inflation/output gaps.',
        correct: true,
        explanation:
          'Correct. This is the core vocabulary the first lecture is training.',
      },
      {
        label: 'Objective: output gap. Instrument: expectations. Rule: a one-time surprise rate change.',
        correct: false,
        explanation:
          'Expectations are not an instrument. A one-time surprise is an unsystematic shock, not a policy rule.',
      },
    ],
  },
  {
    id: 'quiz:taylor-rule-components',
    lectureSlug: 'lecture-01',
    lectureNumber: 1,
    lectureTopic: 'Taylor rule interpretation',
    topicTag: 'taylor-rule',
    difficulty: 'easy',
    kind: 'symbols',
    question: 'In a Taylor rule, what does (pi_t - pi*) represent?',
    hints: ['Think: deviation from a target.', 'pi* is the inflation target.'],
    options: [
      {
        label: 'The inflation gap: inflation relative to the target.',
        correct: true,
        explanation:
          'Correct. It is the term the central bank reacts to when inflation deviates from its target level.',
      },
      {
        label: 'The level of inflation itself.',
        correct: false,
        explanation:
          'Not in gap form. The gap subtracts the target to emphasize deviations from the desired level.',
      },
      {
        label: 'Expected inflation next period.',
        correct: false,
        explanation:
          'Expected inflation is an expectations object (E_t pi_{t+1}); the Taylor-rule gap term is current inflation relative to target.',
      },
    ],
  },
  {
    id: 'quiz:taylor-principle-meaning',
    lectureSlug: 'lecture-01',
    lectureNumber: 1,
    lectureTopic: 'The Taylor principle',
    topicTag: 'taylor-principle',
    difficulty: 'medium',
    kind: 'policy',
    question:
      'What is the Taylor principle trying to ensure in economic terms?',
    hints: [
      'The slide says: raise the policy rate more than one-for-one when inflation rises persistently.',
      'Think about the real interest rate.',
    ],
    options: [
      {
        label: 'That the nominal rate rises less than inflation so the real rate falls and stimulates demand.',
        correct: false,
        explanation:
          'That would move the real rate in the wrong direction when inflation pressure rises persistently.',
      },
      {
        label: 'That the nominal rate rises more than inflation so the real rate rises when inflation rises persistently.',
        correct: true,
        explanation:
          'Correct. This is the core intuition emphasized in Lecture 1 and revisited in the determinacy discussion later.',
      },
      {
        label: 'That output is always stabilized at potential regardless of inflation outcomes.',
        correct: false,
        explanation:
          'The Taylor principle is about the inflation response and determinacy discipline, not a guarantee of perfect output stabilization.',
      },
    ],
  },
  {
    id: 'quiz:systematic-vs-shock',
    lectureSlug: 'lecture-01',
    lectureNumber: 1,
    lectureTopic: 'Systematic vs unsystematic policy',
    topicTag: 'systematic-vs-unsystematic',
    difficulty: 'easy',
    kind: 'concept',
    question:
      'In the decomposition R_t = (rule response to the economy) + epsilon^M_t, what is epsilon^M_t?',
    hints: [
      'The complementary lecture calls it the unsystematic component.',
      'It is not the normal, predictable reaction.',
    ],
    options: [
      {
        label: 'The predictable part of policy that households and firms can forecast from the policy framework.',
        correct: false,
        explanation:
          'That is the systematic component (the rule response), not the shock.',
      },
      {
        label: 'A monetary policy shock: the surprise component not implied by the usual rule.',
        correct: true,
        explanation:
          'Correct. It captures unexpected deviations from the systematic response.',
      },
      {
        label: 'A measure of the central bank’s long-run inflation target pi*.',
        correct: false,
        explanation:
          'pi* is a target parameter in the rule, not an unsystematic shock.',
      },
    ],
  },
  {
    id: 'quiz:taylor-rule-nominal-rate-example',
    lectureSlug: 'lecture-01',
    lectureNumber: 1,
    lectureTopic: 'Taylor rule arithmetic',
    topicTag: 'taylor-rule',
    difficulty: 'easy',
    kind: 'math',
    points: 6,
    question:
      'Lecture 1 notes: if pi* = 2%, r* = 2%, inflation is at target and output is at potential, what nominal policy rate does the Taylor rule imply?',
    hints: [
      'The “neutral” nominal rate is approximately r* + pi* when the gaps are zero.',
    ],
    options: [
      {
        label: 'About 0%.',
        correct: false,
        explanation: 'No. With r* = 2% and pi* = 2%, the implied nominal level is around 4%.',
      },
      {
        label: 'About 2%.',
        correct: false,
        explanation: 'That would ignore the inflation target component in the nominal rate level.',
      },
      {
        label: 'About 4%.',
        correct: true,
        explanation:
          'Correct. With both gaps at zero, the rule reduces to a steady-state level around r* + pi*.',
      },
    ],
  },
  {
    id: 'quiz:taylor-rule-cons',
    lectureSlug: 'lecture-01',
    lectureNumber: 1,
    lectureTopic: 'Pros and cons of the Taylor rule',
    topicTag: 'taylor-rule',
    difficulty: 'easy',
    kind: 'concept',
    question:
      'Which item is listed as a “con” of the Taylor rule in Lecture 1?',
    hints: [
      'Look at the slide titled “The Taylor rule: cons”.',
      'One of the cons is a hard constraint on nominal rates.',
    ],
    options: [
      {
        label: 'It is simple and useful as a cross-check.',
        correct: false,
        explanation:
          'That is listed under pros, not cons.',
      },
      {
        label: 'It performs reasonably well in a broad set of macroeconomic models.',
        correct: false,
        explanation:
          'That is listed under pros, not cons.',
      },
      {
        label: 'It runs into the zero lower bound on interest rates.',
        correct: true,
        explanation:
          'Correct. The slide explicitly lists the zero lower bound as a con for simple interest-rate rules.',
      },
    ],
  },
  {
    id: 'quiz:bernanke-vs-taylor',
    lectureSlug: 'lecture-01',
    lectureNumber: 1,
    lectureTopic: 'Debate: pre-Great Recession policy',
    topicTag: 'debate',
    difficulty: 'medium',
    kind: 'exam',
    question:
      'Lecture 1 notes a debate about whether US policy was “too low for too long” in 2003-2005. What is Bernanke’s key counterpoint in the slides?',
    hints: [
      'The slide mentions alternative inflation measures and a different output-gap coefficient.',
    ],
    options: [
      {
        label: 'If you use core PCE inflation and set the output-gap coefficient to 1, the “great deviation” does not emerge.',
        correct: true,
        explanation:
          'Correct. That is exactly the counterpoint listed on the Bernanke slide.',
      },
      {
        label: 'The Taylor rule is mathematically invalid because it mixes levels and gaps.',
        correct: false,
        explanation:
          'The lecture does not claim the Taylor rule is invalid. It discusses benchmark usefulness and measurement choices.',
      },
      {
        label: 'Monetary policy cannot affect the economy at all, so the debate is irrelevant.',
        correct: false,
        explanation:
          'The entire course is built around the fact that policy affects the economy through expectations and transmission mechanisms.',
      },
    ],
  },
  {
    id: 'quiz:clarida-smoothing',
    lectureSlug: 'lecture-01',
    lectureNumber: 1,
    lectureTopic: 'Evidence on systematic policy',
    topicTag: 'evidence',
    difficulty: 'medium',
    kind: 'symbols',
    question:
      'In the Clarida-Gali-Gertler estimated rule with FFR smoothing, what does rho (the smoothing parameter) capture?',
    hints: [
      'The complementary lecture calls it interest-rate smoothing / inertia in policy.',
    ],
    options: [
      {
        label: 'How persistent inflation is in the data.',
        correct: false,
        explanation:
          'Inflation persistence is not what rho means in that rule. rho captures policy inertia/smoothing.',
      },
      {
        label: 'The degree of interest-rate smoothing: how much the central bank adjusts rates gradually over time.',
        correct: true,
        explanation:
          'Correct. rho weights the lagged policy rate to reflect inertia in monetary policy behavior.',
      },
      {
        label: 'The long-run natural real rate r*.',
        correct: false,
        explanation:
          'r* is a level term (r^LR), not the smoothing parameter rho.',
      },
    ],
  },
  {
    id: 'quiz:truefalse-policy-shocks',
    lectureSlug: 'lecture-01',
    lectureNumber: 1,
    lectureTopic: 'Systematic vs unsystematic policy',
    topicTag: 'systematic-vs-unsystematic',
    difficulty: 'medium',
    kind: 'truefalse',
    question:
      'True or false: in the complementary lecture, the unsystematic (shock) component of monetary policy explains a large share of output fluctuations.',
    hints: ['The slide calls the unsystematic component a minor fraction, even for interest-rate fluctuations.'],
    options: [
      {
        label: 'True',
        correct: false,
        explanation:
          'False. The complementary lecture emphasizes that the unsystematic component typically explains only a minor fraction of output fluctuations.',
      },
      {
        label: 'False',
        correct: true,
        explanation:
          'Correct. Most variation is tied to the systematic reaction of policy to the state of the economy, not to shocks.',
      },
    ],
  },
  {
    id: 'quiz:lecture2-output-gap-definition',
    lectureSlug: 'lecture-02',
    lectureNumber: 2,
    lectureTopic: 'Three-equation NK model vocabulary',
    topicTag: 'nk-core',
    difficulty: 'easy',
    kind: 'symbols',
    question: 'In this course, what is the output gap y~_t?',
    hints: [
      'It is defined relative to a flexible-price benchmark object.',
      'Think: y~_t = y_t - y^n_t.',
    ],
    options: [
      {
        label: 'The deviation of output from a moving-average trend estimated from data.',
        correct: false,
        explanation:
          'Not in these lectures. Here the output gap is defined relative to natural (flexible-price) output, which is a model object.',
      },
      {
        label: 'The deviation of output from natural output: y~_t = y_t - y^n_t.',
        correct: true,
        explanation:
          'Correct. It is the key tightness/inefficiency wedge used in the NKPC and policy analysis in the NK core.',
      },
      {
        label: 'The deviation of inflation from the inflation target.',
        correct: false,
        explanation:
          'That would be an inflation gap. The output gap is about real activity relative to the flexible-price benchmark.',
      },
    ],
  },
  {
    id: 'quiz:lecture2-real-rate-definition',
    lectureSlug: 'lecture-02',
    lectureNumber: 2,
    lectureTopic: 'Rates and benchmarks',
    topicTag: 'rates',
    difficulty: 'easy',
    kind: 'symbols',
    question: 'In the NK model block, how is the real interest rate r_t defined?',
    hints: ['The definition subtracts expected inflation from the nominal rate.'],
    options: [
      {
        label: 'r_t = i_t - E_t pi_{t+1}.',
        correct: true,
        explanation:
          'Correct. The expected-inflation term matters because it links expectations to real activity via the real rate.',
      },
      {
        label: 'r_t = i_t - pi_t.',
        correct: false,
        explanation:
          'Not in the model definition used here. The relevant object is expected inflation next period (E_t pi_{t+1}), not current inflation.',
      },
      {
        label: 'r_t = i_t + E_t pi_{t+1}.',
        correct: false,
        explanation:
          'Wrong sign. Higher expected inflation reduces the real rate for a given nominal rate.',
      },
    ],
  },
  {
    id: 'quiz:lecture2-natural-rate-meaning',
    lectureSlug: 'lecture-02',
    lectureNumber: 2,
    lectureTopic: 'Rates and benchmarks',
    topicTag: 'natural-rate',
    difficulty: 'easy',
    kind: 'concept',
    question: 'What is the meaning of the natural real rate r^n_t in these lectures?',
    hints: ['It is a flexible-price benchmark.', 'It is not directly observed in the data.'],
    options: [
      {
        label: 'The observed short-term real interest rate in the data.',
        correct: false,
        explanation:
          'No. r^n_t is a model-implied benchmark real rate, defined in the flexible-price allocation.',
      },
      {
        label: 'The real interest rate that would prevail under flexible prices (the model’s “neutral” benchmark).',
        correct: true,
        explanation:
          'Correct. DIS is written in terms of the gap r_t - r^n_t because that gap tells you whether policy is tight or loose relative to the benchmark that matters in the model.',
      },
      {
        label: 'The inflation target chosen by the central bank.',
        correct: false,
        explanation:
          'The inflation target is a policy parameter (often written pi*). The natural real rate is a model benchmark tied to preferences and shocks.',
      },
    ],
  },
  {
    id: 'quiz:lecture2-nkpc-interpretation',
    lectureSlug: 'lecture-02',
    lectureNumber: 2,
    lectureTopic: 'NKPC meaning',
    topicTag: 'nkpc',
    difficulty: 'easy',
    kind: 'concept',
    question: 'What is the best reading of the New Keynesian Phillips Curve (NKPC) in this course?',
    hints: [
      'The NKPC is forward-looking.',
      'It still contains a real-pressure term (marginal cost / output gap).',
    ],
    options: [
      {
        label: "Inflation depends only on lagged inflation because firms mechanically copy last period's prices.",
        correct: false,
        explanation:
          'That is not the baseline forward-looking NK formulation used in these lectures.',
      },
      {
        label: 'Inflation depends on expected future inflation and on real pressure such as marginal cost or the output gap.',
        correct: true,
        explanation:
          'Correct. This interpretation is what you should keep in mind when doing shock analysis and when later lectures discuss trade-offs.',
      },
      {
        label: 'Inflation is pinned down entirely by the central bank’s nominal interest rate with no role for real activity.',
        correct: false,
        explanation:
          'The policy rate matters through the system, but the NKPC still contains a real-pressure term.',
      },
    ],
  },
  {
    id: 'quiz:lecture2-dis-interpretation',
    lectureSlug: 'lecture-02',
    lectureNumber: 2,
    lectureTopic: 'DIS meaning',
    topicTag: 'dis',
    difficulty: 'easy',
    kind: 'concept',
    question: 'According to the DIS equation, what happens if r_t rises above r^n_t (other expectations held fixed)?',
    hints: ['DIS is the Euler equation in gap form.', 'A higher real-rate gap depresses demand.'],
    options: [
      {
        label: 'The output gap tends to fall (demand is depressed).',
        correct: true,
        explanation:
          'Correct. A higher real rate relative to the natural benchmark makes households want to postpone spending, reducing demand pressure.',
      },
      {
        label: 'The output gap tends to rise (demand is stimulated).',
        correct: false,
        explanation:
          'That would be the opposite sign. Demand is stimulated when r_t is below r^n_t.',
      },
      {
        label: 'Inflation becomes backward-looking, so expectations stop mattering.',
        correct: false,
        explanation:
          'No. The NK core is forward-looking, and expectations remain central throughout.',
      },
    ],
  },
  {
    id: 'quiz:lecture2-markup-natural-output',
    lectureSlug: 'lecture-02',
    lectureNumber: 2,
    lectureTopic: 'Natural output benchmark',
    topicTag: 'natural-output',
    difficulty: 'medium',
    kind: 'concept',
    question: 'Holding technology fixed, what is the sign of the effect of a higher markup wedge mu on natural output y^n_t in Lecture 2?',
    hints: [
      'Lecture 2 derives y^n_t = -(mu)/(sigma+phi) + ((1+phi)/(sigma+phi)) a_t.',
      'Look at the coefficient on mu.',
    ],
    options: [
      {
        label: 'Negative: higher mu lowers y^n_t.',
        correct: true,
        explanation:
          'Correct. In the derivation, mu enters with a minus sign. Intuitively, a higher markup wedge reduces the efficient/flexible-price level of output.',
      },
      {
        label: 'Positive: higher mu raises y^n_t.',
        correct: false,
        explanation:
          'No. In the lecture’s formula, mu lowers natural output.',
      },
      {
        label: 'Zero: mu does not matter for natural output.',
        correct: false,
        explanation:
          'No. mu is exactly the wedge that shifts the natural-output benchmark in the lecture’s derivation.',
      },
    ],
  },
  {
    id: 'quiz:lecture2-mc-gap-proportionality-purpose',
    lectureSlug: 'lecture-02',
    lectureNumber: 2,
    lectureTopic: 'Gap form and reduced form',
    topicTag: 'nkpc-gap-form',
    difficulty: 'medium',
    kind: 'concept',
    question: 'Lecture 2 uses mc_t - mc = (sigma + phi) y~_t. What is the main reason this proportionality is useful?',
    hints: ['It helps rewrite the Phillips curve in terms of the output gap.'],
    options: [
      {
        label: 'It lets you rewrite the NKPC so inflation depends on the output gap rather than on marginal cost explicitly.',
        correct: true,
        explanation:
          'Correct. The proportionality is what makes the three-equation system compact and usable for policy/shock analysis.',
      },
      {
        label: 'It implies inflation must be zero in every period.',
        correct: false,
        explanation:
          'No. The proportionality is an algebraic/model-structure relationship, not a guarantee of zero inflation.',
      },
      {
        label: 'It allows the central bank to observe r^n_t directly from the data.',
        correct: false,
        explanation:
          'No. r^n_t is still a model benchmark and typically not directly observed.',
      },
    ],
  },
  {
    id: 'quiz:truefalse-lecture2-nkpc-lagged-inflation',
    lectureSlug: 'lecture-02',
    lectureNumber: 2,
    lectureTopic: 'NKPC meaning',
    topicTag: 'nkpc',
    difficulty: 'easy',
    kind: 'truefalse',
    question: 'True or false: in the baseline NKPC used in Lectures 2-3, current inflation depends directly on lagged inflation.',
    hints: ['The baseline NKPC is forward-looking: it contains expected future inflation and the output gap.'],
    options: [
      {
        label: 'True',
        correct: false,
        explanation:
          'False. The baseline NKPC in these lectures does not contain lagged inflation directly.',
      },
      {
        label: 'False',
        correct: true,
        explanation:
          'Correct. Lagged inflation is not a term in the baseline NKPC used in Lectures 2-3.',
      },
    ],
  },
  {
    id: 'quiz:lecture2-shock-routine-step1',
    lectureSlug: 'lecture-02',
    lectureNumber: 2,
    lectureTopic: 'Shock reasoning discipline',
    topicTag: 'shock-reasoning',
    difficulty: 'medium',
    kind: 'exam',
    question: 'In the Lecture 2 shock-reasoning routine, what should you identify first?',
    hints: [
      'The routine starts before you push symbols through NKPC or DIS.',
      'Start by asking what benchmark objects move.',
    ],
    options: [
      {
        label: 'Whether the shock moves natural output y^n_t, the natural real rate r^n_t, both, or neither.',
        correct: true,
        explanation:
          'Correct. Once you know what moves the flexible-price benchmarks, you can reason through the real-rate gap and then inflation/output-gap dynamics.',
      },
      {
        label: 'Solve the NKPC forward to get an infinite sum representation immediately.',
        correct: false,
        explanation:
          'That is useful algebra, but it is not the first step in the qualitative shock routine emphasized in Lecture 2/Seminar 1.',
      },
      {
        label: 'Pick a conclusion from a memorized list of shock responses and then match it to the signs.',
        correct: false,
        explanation:
          'That is exactly the risky approach the lecture warns against. Use the routine to derive the sign logic instead.',
      },
    ],
  },
  {
    id: 'lecture3-symbols-output-gap',
    lectureSlug: 'lecture-03',
    lectureNumber: 3,
    lectureTopic: 'Symbols and model objects',
    topicTag: 'nk-core',
    difficulty: 'easy',
    kind: 'symbols',
    question: 'In this course’s notation, what is the output gap y~_t?',
    hints: [
      'It is defined relative to a model benchmark, not a statistical trend.',
      'Look at y~_t = y_t - y^n_t in the lecture notation.',
    ],
    options: [
      {
        label: 'The deviation of output from a moving-average trend estimated from data.',
        correct: false,
        explanation:
          'No. Here it is a model concept: output relative to natural (flexible-price) output.',
      },
      {
        label: 'The deviation of output from natural output: y~_t = y_t - y^n_t.',
        correct: true,
        explanation:
          'Correct. This is the welfare-relevant gap in the baseline NK setup.',
      },
      {
        label: 'The deviation of inflation from target.',
        correct: false,
        explanation: 'That would be an inflation gap, not an output gap.',
      },
    ],
  },
  {
    id: 'lecture3-symbols-natural-rate',
    lectureSlug: 'lecture-03',
    lectureNumber: 3,
    lectureTopic: 'Symbols and model objects',
    topicTag: 'natural-rate',
    difficulty: 'easy',
    kind: 'symbols',
    question: 'What is the meaning of r^n_t in these lectures?',
    hints: [
      'It is a flexible-price benchmark object, not directly observable.',
      'Lecture 3 uses it to interpret what “neutral” policy means in the model.',
    ],
    options: [
      {
        label: 'The observed short-term real interest rate in the data.',
        correct: false,
        explanation:
          'No. r^n_t is a model-implied benchmark, not directly observed.',
      },
      {
        label: 'The natural real interest rate: the real rate consistent with flexible prices (the model’s “neutral” rate).',
        correct: true,
        explanation:
          'Correct. It is central for interpreting the DIS equation and optimal-policy implementation.',
      },
      {
        label: 'A constant that never moves with shocks.',
        correct: false,
        explanation:
          'It can move with fundamentals (technology, demand/discount shocks) in the model.',
      },
    ],
  },
  {
    id: 'lecture3-nkpc-meaning',
    lectureSlug: 'lecture-03',
    lectureNumber: 3,
    lectureTopic: 'NKPC meaning and interpretation',
    topicTag: 'nkpc',
    difficulty: 'easy',
    kind: 'concept',
    question: 'What does the NKPC term kappa * y~_t mean economically?',
    hints: [
      'kappa is the slope: how much inflation reacts to real pressure.',
      'y~_t is the welfare-relevant tightness measure.',
    ],
    options: [
      {
        label: 'It means inflation is purely backward-looking and follows lagged inflation mechanically.',
        correct: false,
        explanation:
          'No. In the baseline NKPC used here, inflation is forward-looking.',
      },
      {
        label: 'It means a positive output gap pushes inflation up today, with strength governed by kappa.',
        correct: true,
        explanation:
          'Correct. kappa translates real pressure (the gap) into inflation pressure.',
      },
      {
        label: 'It means inflation is fixed at target whenever kappa is positive.',
        correct: false,
        explanation:
          'Positive kappa creates sensitivity, not automatic stabilization. Policy and expectations still matter.',
      },
    ],
  },
  {
    id: 'lecture3-recursive-substitution',
    lectureSlug: 'lecture-03',
    lectureNumber: 3,
    lectureTopic: 'Recursive substitution and transversality',
    topicTag: 'recursive-substitution',
    difficulty: 'medium',
    kind: 'math',
    question: 'What does recursive substitution of the NKPC show under the transversality condition?',
    hints: [
      'The result links current inflation to expected future variables.',
      'Ask yourself: does lagged inflation appear anywhere in the closed form?',
    ],
    options: [
      {
        label: 'Current inflation is mainly a function of lagged inflation and does not depend on expected future output gaps.',
        correct: false,
        explanation:
          'That would be a backward-looking Phillips curve, not the baseline NKPC used here.',
      },
      {
        label: 'Current inflation equals a discounted sum of expected future output gaps.',
        correct: true,
        explanation:
          'Correct. This is the key forward-looking result emphasized in Lecture 3.',
      },
      {
        label: 'Current inflation depends only on the monetary policy shock v_t.',
        correct: false,
        explanation:
          'v_t can affect inflation through the system, but the NKPC still links inflation to real pressure via the output gap path.',
      },
    ],
  },
  {
    id: 'lecture3-dis-sum',
    lectureSlug: 'lecture-03',
    lectureNumber: 3,
    lectureTopic: 'DIS solution and interpretation',
    topicTag: 'dis',
    difficulty: 'easy',
    kind: 'concept',
    question: 'In the recursive-substitution solution of DIS, what does a persistently low (r_t - r^n_t) imply?',
    hints: [
      'Look at the sign in y~_t = -(1/sigma) sum E_t(r - r^n).',
      'If the real rate is below the natural rate, what happens to demand today?',
    ],
    options: [
      {
        label: 'A higher output gap today, because households bring spending forward.',
        correct: true,
        explanation:
          'Correct. A lower real rate relative to natural stimulates demand and raises the gap.',
      },
      {
        label: 'A lower output gap today, because households postpone spending.',
        correct: false,
        explanation:
          'That would correspond to a real rate above the natural rate.',
      },
      {
        label: 'No effect on the output gap because only inflation expectations matter in DIS.',
        correct: false,
        explanation:
          'Inflation expectations matter through the real rate, but the key driver is the real-rate gap relative to r^n.',
      },
    ],
  },
  {
    id: 'lecture3-taylor-principle',
    lectureSlug: 'lecture-03',
    lectureNumber: 3,
    lectureTopic: 'Determinacy and the Taylor principle',
    topicTag: 'determinacy',
    difficulty: 'medium',
    kind: 'policy',
    question: 'Why does Lecture 3 emphasize a strong inflation response (the Taylor principle)?',
    hints: [
      'The lecture is not mainly about “better stabilization” here. It is about uniqueness.',
      'Think: expectations can be self-fulfilling if policy does not react strongly enough.',
    ],
    options: [
      {
        label: 'Because it guarantees the lowest possible inflation volatility in every model.',
        correct: false,
        explanation:
          'Not in every model. The point here is equilibrium uniqueness / determinacy in this setup.',
      },
      {
        label: 'Because it helps rule out indeterminacy (sunspot equilibria) by anchoring expectations and ensuring a unique bounded equilibrium.',
        correct: true,
        explanation:
          'Correct. Lecture 3 repeatedly ties the Taylor principle to determinacy and sunspot avoidance.',
      },
      {
        label: 'Because it makes the output gap irrelevant by assumption.',
        correct: false,
        explanation:
          'No. The output gap still matters; the point is how policy feedback shapes expectations and uniqueness.',
      },
    ],
  },
  {
    id: 'lecture3-divine-coincidence',
    lectureSlug: 'lecture-03',
    lectureNumber: 3,
    lectureTopic: 'Divine coincidence benchmark',
    topicTag: 'divine-coincidence',
    difficulty: 'easy',
    kind: 'concept',
    question: 'What is the meaning of “divine coincidence” in Lecture 3’s baseline NK model?',
    hints: [
      'Think: “two targets, one instrument” only works if the targets are not truly independent.',
      'The key is: no cost-push term in NKPC in this lecture’s baseline.',
    ],
    options: [
      {
        label: 'It means inflation stabilization and output-gap stabilization are aligned in this baseline setup.',
        correct: true,
        explanation:
          'Correct. Stabilizing one implies stabilizing the other in the baseline NKPC without a wedge.',
      },
      {
        label: 'It means the central bank can permanently raise output above natural level with a bit more inflation.',
        correct: false,
        explanation:
          'No. That is inflation-bias logic (later), not divine coincidence.',
      },
      {
        label: 'It means the Taylor principle is unnecessary because the economy is always determinate.',
        correct: false,
        explanation:
          'No. Lecture 3 explicitly shows you can get indeterminacy/sunspots if the rule does not anchor expectations.',
      },
    ],
  },
  {
    id: 'lecture3-sunspot',
    lectureSlug: 'lecture-03',
    lectureNumber: 3,
    lectureTopic: 'Implementability and indeterminacy',
    topicTag: 'sunspots',
    difficulty: 'medium',
    kind: 'exam',
    question: 'Why can the rule i_t = r^n_t generate sunspot equilibria in the Lecture 3 setup?',
    hints: [
      'The rule does not respond to inflation or the output gap.',
      'Higher expected inflation lowers the real rate if i_t is unchanged.',
    ],
    options: [
      {
        label: 'Because r^n_t is always measured with error in practice.',
        correct: false,
        explanation:
          'That is a practical issue, but the lecture’s sunspot logic is a theoretical uniqueness problem.',
      },
      {
        label: 'Because without feedback to inflation/output, expectations can move independently and become self-fulfilling.',
        correct: true,
        explanation:
          'Correct. This is exactly the indeterminacy mechanism described in the slides.',
      },
      {
        label: 'Because NKPC becomes backward-looking under i_t = r^n_t.',
        correct: false,
        explanation:
          'No. NKPC remains forward-looking; the issue is lack of policy anchoring, not backward-looking inflation.',
      },
    ],
  },
  {
    id: 'lecture3-permanent-supply',
    lectureSlug: 'lecture-03',
    lectureNumber: 3,
    lectureTopic: 'Natural-rate expression and persistence',
    topicTag: 'natural-rate',
    difficulty: 'medium',
    kind: 'math',
    question: 'Why is r^n_t unaffected by a permanent technology shock in the slide’s expression?',
    hints: [
      'Look at the coefficient (1 - rho_a).',
      'Permanent means rho_a = 1.',
    ],
    options: [
      {
        label: 'Because a_t never enters the natural rate definition.',
        correct: false,
        explanation:
          'It does enter, but it is multiplied by (1 - rho_a).',
      },
      {
        label: 'Because when rho_a = 1, the (1 - rho_a) term is zero, so the a_t contribution disappears.',
        correct: true,
        explanation:
          'Correct. That is exactly the point made on the permanent supply-shock slide.',
      },
      {
        label: 'Because sigma = 0 under permanent supply shocks.',
        correct: false,
        explanation:
          'No. sigma is a preference parameter and does not become zero.',
      },
    ],
  },
  {
    id: 'lecture4-gap-definition',
    lectureSlug: 'lecture-04',
    lectureNumber: 4,
    lectureTopic: 'Gaps and benchmarks',
    topicTag: 'gaps',
    difficulty: 'easy',
    kind: 'symbols',
    question: 'In Lecture 4, what is the welfare-relevant output gap x_t?',
    hints: [
      'Lecture 4 distinguishes natural output y^n_t from efficient output y^e_t.',
      'x_t is defined relative to efficient output.',
    ],
    options: [
      {
        label: 'x_t = y_t - y^e_t.',
        correct: true,
        explanation:
          'Correct. The welfare-relevant gap is output relative to the efficient (first-best) benchmark.',
      },
      {
        label: 'x_t = y_t - y^n_t.',
        correct: false,
        explanation:
          'That is the standard NK output gap (relative to natural output), typically written y~_t. Lecture 4’s objective uses x_t instead.',
      },
      {
        label: 'x_t = y^e_t - y^n_t.',
        correct: false,
        explanation:
          'That difference is part of the wedge that shows up as a cost-push term, but it is not the definition of the welfare gap x_t.',
      },
    ],
  },
  {
    id: 'lecture4-cost-push-meaning',
    lectureSlug: 'lecture-04',
    lectureNumber: 4,
    lectureTopic: 'Cost-push wedge and trade-off',
    topicTag: 'cost-push',
    difficulty: 'easy',
    kind: 'concept',
    question: 'In the cost-push NKPC in Lecture 4, what does the term u^pi_t represent?',
    hints: [
      'It is the wedge term added to the Phillips curve.',
      'It captures inflation pressure not explained by the welfare gap x_t alone.',
    ],
    options: [
      {
        label: 'A wedge that shifts inflation beyond what x_t alone would imply (a “cost-push” disturbance).',
        correct: true,
        explanation:
          'Correct. u^pi_t is exactly the term that breaks divine coincidence by adding inflation pressure unrelated to x_t.',
      },
      {
        label: 'A monetary policy shock in the Taylor rule.',
        correct: false,
        explanation:
          'No. A policy shock would be a disturbance in the instrument rule (often written v_t). u^pi_t is a Phillips-curve wedge.',
      },
      {
        label: 'Expected inflation next period (E_t pi_{t+1}).',
        correct: false,
        explanation:
          'No. Expected inflation is a separate term in NKPC. u^pi_t is an additional wedge term.',
      },
    ],
  },
  {
    id: 'quiz:truefalse-lecture4-divine-coincidence',
    lectureSlug: 'lecture-04',
    lectureNumber: 4,
    lectureTopic: 'Cost-push wedge and trade-off',
    topicTag: 'divine-coincidence',
    difficulty: 'medium',
    kind: 'truefalse',
    question: 'True or false: with cost-push shocks present (u^pi_t != 0), stabilizing inflation automatically stabilizes the welfare gap x_t.',
    hints: ['Lecture 4’s point is that the wedge term creates a genuine trade-off.'],
    options: [
      {
        label: 'True',
        correct: false,
        explanation:
          'False. With a cost-push wedge, you generally cannot set inflation and the welfare-relevant output gap to zero at the same time.',
      },
      {
        label: 'False',
        correct: true,
        explanation:
          'Correct. The cost-push wedge is exactly what breaks divine coincidence and creates a stabilization trade-off.',
      },
    ],
  },
  {
    id: 'lecture4-targeting-rule',
    lectureSlug: 'lecture-04',
    lectureNumber: 4,
    lectureTopic: 'Discretionary targeting rule',
    topicTag: 'targeting-rule',
    difficulty: 'medium',
    kind: 'exam',
    question: 'What does the discretionary targeting rule imply in the cost-push NK setup?',
    hints: [
      'The rule links inflation and the welfare-relevant output gap with opposite signs.',
      'Check the role of kappa and alpha_x in the slope.',
    ],
    options: [
      {
        label: 'Inflation and x_t should move with the same sign to minimize the quadratic loss.',
        correct: false,
        explanation:
          'No. The optimality condition implies opposite signs between inflation and the welfare gap.',
      },
      {
        label: 'The central bank chooses x_t so that x_t = -(kappa/alpha_x) * inflation.',
        correct: true,
        explanation:
          'Correct. This is the targeting rule derived from the Lagrangian first-order conditions.',
      },
      {
        label: 'The rule pins x_t at zero every period, regardless of shocks.',
        correct: false,
        explanation:
          'That would correspond to no short-run trade-off, which is exactly what cost-push shocks break.',
      },
    ],
  },
  {
    id: 'lecture4-cost-push-signs',
    lectureSlug: 'lecture-04',
    lectureNumber: 4,
    lectureTopic: 'Cost-push wedge and trade-off',
    topicTag: 'tradeoff',
    difficulty: 'easy',
    kind: 'exam',
    question: 'A positive cost-push shock hits (u^pi_t > 0). Under discretion, what are the signs of inflation and the welfare gap x_t (given positive parameters)?',
    hints: [
      'Lecture 4 gives: pi_t = alpha_x * Psi * u^pi_t and x_t = -kappa * Psi * u^pi_t.',
      'Psi, alpha_x, and kappa are positive in the setup.',
    ],
    options: [
      {
        label: 'Inflation rises (pi_t > 0) and the welfare gap falls (x_t < 0).',
        correct: true,
        explanation:
          'Correct. The wedge pushes inflation up, and the optimal trade-off implies a negative welfare gap in response.',
      },
      {
        label: 'Inflation falls (pi_t < 0) and the welfare gap rises (x_t > 0).',
        correct: false,
        explanation:
          'No. With u^pi_t > 0 and positive parameters, the lecture’s response formulas imply pi_t > 0 and x_t < 0.',
      },
      {
        label: 'Inflation is zero and the welfare gap is zero (pi_t = 0 and x_t = 0).',
        correct: false,
        explanation:
          'No. That would require eliminating the wedge. Lecture 4’s point is that with cost-push shocks, the trade-off prevents simultaneously setting both to zero.',
      },
    ],
  },
  {
    id: 'lecture4-strict-inflation-targeting',
    lectureSlug: 'lecture-04',
    lectureNumber: 4,
    lectureTopic: 'Strict inflation targeting',
    topicTag: 'strict-targeting',
    difficulty: 'easy',
    kind: 'policy',
    question: 'When is strict inflation targeting optimal according to the lecture?',
    hints: [
      'Look at the explicit two-case statement in the slides.',
      'Think about whether cost-push shocks are present and whether alpha_x matters.',
    ],
    options: [
      {
        label: 'Always, because inflation has unit weight in the loss function.',
        correct: false,
        explanation:
          'Unit normalization does not imply strict targeting is always optimal when output-gap costs are present.',
      },
      {
        label: 'Only when there are no cost-push shocks, or when alpha_x is zero.',
        correct: true,
        explanation:
          'Yes. Those are the two special cases highlighted in the lecture.',
      },
      {
        label: 'Only when output persistence is high and the Taylor principle holds.',
        correct: false,
        explanation:
          'Those conditions matter for dynamics/uniqueness, but they are not the strict-targeting condition itself.',
      },
    ],
  },
  {
    id: 'quiz:lecture5-commitment-meaning',
    lectureSlug: 'lecture-05',
    lectureNumber: 5,
    lectureTopic: 'Commitment vs discretion',
    topicTag: 'commitment',
    difficulty: 'easy',
    kind: 'concept',
    question: 'In Lecture 5, what does “commitment” mean in the New Keynesian policy setup?',
    hints: [
      'Commitment is about policy plans/credibility and expectations, not about having more instruments.',
      'The key channel is that private expectations respond to promised future policy.',
    ],
    options: [
      {
        label: 'The central bank can credibly commit to a policy plan/rule, which shapes private expectations today.',
        correct: true,
        explanation:
          'Correct. Commitment changes outcomes mainly through expectations and promised future policy behavior.',
      },
      {
        label: 'The central bank gains an extra instrument in addition to the policy rate.',
        correct: false,
        explanation:
          'No. The lecture’s commitment logic is about credibility and intertemporal planning, not about adding instruments.',
      },
      {
        label: 'The central bank can directly observe the natural rate and the efficient output level in real time.',
        correct: false,
        explanation:
          'Observability is a practical issue, but it is not what “commitment” means in the theory block here.',
      },
    ],
  },
  {
    id: 'lecture5-simple-commitment',
    lectureSlug: 'lecture-05',
    lectureNumber: 5,
    lectureTopic: 'Simple targeting-rule commitment',
    topicTag: 'simple-commitment',
    difficulty: 'medium',
    kind: 'exam',
    question: 'What is the key result of commitment to a simple targeting rule in this lecture?',
    hints: [
      'Look at the relation between alpha_x^c and alpha_x.',
      'The gain comes from expectations and trade-off improvement, not from removing the loss on output gaps.',
    ],
    options: [
      {
        label: 'The central bank should set alpha_x^c above alpha_x to place less weight on inflation.',
        correct: false,
        explanation: 'The derived result is the opposite: alpha_x^c is below alpha_x in this setup.',
      },
      {
        label: 'The optimum implies alpha_x^c = alpha_x (1 - beta rho_pi), which is below alpha_x.',
        correct: true,
        explanation: 'Correct. This captures the stricter inflation-response stance under commitment.',
      },
      {
        label: 'Commitment removes cost-push shocks from the NKPC.',
        correct: false,
        explanation: 'No. Cost-push shocks remain; commitment changes how policy and expectations react to them.',
      },
    ],
  },
  {
    id: 'quiz:lecture5-alpha-xc-interpretation',
    lectureSlug: 'lecture-05',
    lectureNumber: 5,
    lectureTopic: 'Simple targeting-rule commitment',
    topicTag: 'simple-commitment',
    difficulty: 'medium',
    kind: 'concept',
    question: 'Why does the lecture’s simple-rule commitment exercise imply alpha_x^c < alpha_x when beta*rho_pi is positive?',
    hints: [
      'alpha_x^c is an effective coefficient in the targeting rule under commitment.',
      'Persistence and discounting make promises about the future more valuable.',
    ],
    options: [
      {
        label: 'Because commitment changes private expectations, improving the inflation-output trade-off when shocks are persistent.',
        correct: true,
        explanation:
          'Correct. With persistence (rho_pi) and patience (beta), credible future policy affects today’s inflation pressure, so the optimal simple-rule coefficient shifts.',
      },
      {
        label: 'Because the loss function no longer includes x_t under commitment.',
        correct: false,
        explanation:
          'No. The loss still includes alpha_x x_t^2. The difference is how policy can influence expectations and the trade-off.',
      },
      {
        label: 'Because cost-push shocks disappear once the central bank announces a plan.',
        correct: false,
        explanation:
          'No. Shocks remain. Commitment affects how the economy responds to shocks through expectations.',
      },
    ],
  },
  {
    id: 'lecture5-history-rule',
    lectureSlug: 'lecture-05',
    lectureNumber: 5,
    lectureTopic: 'State-contingent commitment and history dependence',
    topicTag: 'history-dependence',
    difficulty: 'medium',
    kind: 'exam',
    question: 'What does the state-contingent commitment condition x_t - x_{t-1} = -(kappa/alpha_x) pi_t imply?',
    hints: [
      'Compare this with the discretionary condition that only uses current-period variables.',
      'Look for memory/history in policy trade-offs.',
    ],
    options: [
      {
        label: 'Policy under commitment is history-dependent because current targets depend on previously chosen paths.',
        correct: true,
        explanation: 'Yes. The lagged term is the mathematical signature of commitment-based history dependence.',
      },
      {
        label: 'Commitment and discretion are equivalent once shocks are persistent.',
        correct: false,
        explanation: 'Persistence affects magnitudes, but the targeting-condition structure still differs.',
      },
      {
        label: 'The condition means inflation has no role in optimal policy under commitment.',
        correct: false,
        explanation: 'Inflation is central in the condition; it drives how the welfare-relevant gap must adjust over time.',
      },
    ],
  },
  {
    id: 'quiz:lecture5-history-dependence-meaning',
    lectureSlug: 'lecture-05',
    lectureNumber: 5,
    lectureTopic: 'State-contingent commitment and history dependence',
    topicTag: 'history-dependence',
    difficulty: 'easy',
    kind: 'concept',
    question: 'In Lecture 5, what is the simplest meaning of “history dependence” in optimal policy?',
    hints: ['Look for lagged objects like x_{t-1} in the targeting relation.'],
    options: [
      {
        label: 'Today’s policy trade-off depends on past promised paths (for example through x_{t-1}), not only on today’s inflation.',
        correct: true,
        explanation:
          'Correct. History dependence means the optimality condition contains a “memory” term generated by commitment.',
      },
      {
        label: 'Policy reacts only to lagged inflation and ignores current conditions.',
        correct: false,
        explanation:
          'No. The condition links today’s inflation to how the welfare gap must evolve over time. It is not a purely backward-looking rule.',
      },
      {
        label: 'History dependence means the central bank uses a lagged interest rate term in a Taylor rule.',
        correct: false,
        explanation:
          'Interest-rate smoothing is a different concept. Lecture 5’s “history dependence” comes from the commitment FOCs in the targeting rule.',
      },
    ],
  },
  {
    id: 'quiz:truefalse-lecture5-discretion-memory',
    lectureSlug: 'lecture-05',
    lectureNumber: 5,
    lectureTopic: 'Commitment vs discretion',
    topicTag: 'discretion',
    difficulty: 'easy',
    kind: 'truefalse',
    question: 'True or false: the discretionary targeting rule from Lecture 4 contains a lagged term like x_{t-1}.',
    hints: ['Under discretion, the FOC links current x_t to current pi_t only.'],
    options: [
      {
        label: 'True',
        correct: false,
        explanation:
          'False. The discretionary targeting rule is static: x_t = -(kappa/alpha_x) * pi_t. The lagged term appears under commitment.',
      },
      {
        label: 'False',
        correct: true,
        explanation:
          'Correct. The “memory” term is the signature of commitment, not discretion.',
      },
    ],
  },
  {
    id: 'quiz:lecture6-time-inconsistency-meaning',
    lectureSlug: 'lecture-06',
    lectureNumber: 6,
    lectureTopic: 'Time inconsistency and inflation bias',
    topicTag: 'time-inconsistency',
    difficulty: 'easy',
    kind: 'concept',
    question: 'In the lecture’s logic, what does “time inconsistency” mean?',
    hints: [
      'It is about a gap between an ex ante promise and an ex post incentive to deviate.',
      'Expectations respond to that incentive.',
    ],
    options: [
      {
        label: 'A policy plan that is optimal to announce earlier may not be optimal to implement later, so expectations anticipate deviation.',
        correct: true,
        explanation:
          'Correct. The credibility problem plus rational expectations is what produces the inflation-bias equilibrium result.',
      },
      {
        label: 'A situation where inflation is always volatile because the central bank cannot control the policy rate.',
        correct: false,
        explanation:
          'No. The mechanism is about incentives and expectations, not a technical inability to set the policy instrument.',
      },
      {
        label: 'A case where the central bank’s preferences change randomly every period.',
        correct: false,
        explanation:
          'Preferences can be stable and time inconsistency can still arise. The problem is that incentives differ before and after expectations are set.',
      },
    ],
  },
  {
    id: 'quiz:lecture6-key-assumption',
    lectureSlug: 'lecture-06',
    lectureNumber: 6,
    lectureTopic: 'Time inconsistency and inflation bias',
    topicTag: 'inflation-bias',
    difficulty: 'easy',
    kind: 'concept',
    question: 'Which assumption is essential for the inflation-bias result in the lecture’s simplified setup?',
    hints: ['Look for the “output ambition” assumption.'],
    options: [
      {
        label: 'That desired output exceeds natural output: y* > y^n.',
        correct: true,
        explanation:
          'Correct. If policymakers want output above the natural level, they have an incentive to create surprise inflation.',
      },
      {
        label: 'That the supply relation is backward-looking (depends on lagged inflation).',
        correct: false,
        explanation:
          'No. The simplified setup uses an expectations-augmented relation where surprise inflation matters.',
      },
      {
        label: 'That the central bank cannot influence expectations.',
        correct: false,
        explanation:
          'The inflation-bias mechanism is precisely about expectations adjusting to incentives under discretion.',
      },
    ],
  },
  {
    id: 'lecture6-inflation-bias',
    lectureSlug: 'lecture-06',
    lectureNumber: 6,
    lectureTopic: 'Time inconsistency and inflation bias',
    topicTag: 'inflation-bias',
    difficulty: 'medium',
    kind: 'exam',
    question: "What is the inflation-bias equilibrium result under discretion in the lecture's simplified setup?",
    hints: [
      'Use rational expectations: expected inflation equals realized inflation in equilibrium.',
      'Check whether output ends above natural level in that equilibrium.',
    ],
    options: [
      {
        label: 'Inflation equals target and output stays above natural level because policy can always exploit the Phillips curve.',
        correct: false,
        explanation: 'No. Once expectations adjust, the output gain vanishes.',
      },
      {
        label: 'Inflation is above target by ab(y* - y^n), while output returns to natural level.',
        correct: true,
        explanation: 'Correct. This is the classic inflation-bias result.',
      },
      {
        label: 'Inflation is below target because policymakers dislike output volatility.',
        correct: false,
        explanation: 'The upward output ambition drives the discretionary inflation bias in this setup.',
      },
    ],
  },
  {
    id: 'quiz:lecture6-output-equilibrium',
    lectureSlug: 'lecture-06',
    lectureNumber: 6,
    lectureTopic: 'Time inconsistency and inflation bias',
    topicTag: 'inflation-bias',
    difficulty: 'easy',
    kind: 'concept',
    question: 'In the rational-expectations equilibrium of the lecture’s model, where does output end up?',
    hints: ['Use y - y^n = b(pi - pi^e) and impose pi = pi^e in equilibrium.'],
    options: [
      {
        label: 'Output is at the natural level: y = y^n.',
        correct: true,
        explanation:
          'Correct. When expectations adjust (pi = pi^e), surprise inflation is zero and output returns to y^n.',
      },
      {
        label: 'Output stays permanently above the natural level: y > y^n.',
        correct: false,
        explanation:
          'No. That would require systematically surprising the private sector, which is not possible under rational expectations.',
      },
      {
        label: 'Output stays permanently below the natural level: y < y^n.',
        correct: false,
        explanation:
          'Not in the basic inflation-bias result emphasized in the lecture. The classic outcome is inflation bias with no sustained output gain.',
      },
    ],
  },
  {
    id: 'lecture6-independence-role',
    lectureSlug: 'lecture-06',
    lectureNumber: 6,
    lectureTopic: 'Institutional design: independence',
    topicTag: 'independence',
    difficulty: 'easy',
    kind: 'policy',
    question: "How should central-bank independence be interpreted in this lecture's logic?",
    hints: [
      'Think of independence as an institutional credibility technology.',
      'Relate it to reducing incentives for short-term policy deviations.',
    ],
    options: [
      {
        label: 'As a way to remove all shocks from the economy so inflation targeting is trivial.',
        correct: false,
        explanation:
          'Independence does not remove shocks; it changes policy credibility and incentives.',
      },
      {
        label: 'As an institutional mechanism that helps discretionary policy mimic commitment outcomes more closely.',
        correct: true,
        explanation:
          'Yes. That is the core policy-design rationale emphasized in the lecture.',
      },
      {
        label: 'As proof that output stabilization should never enter policy objectives.',
        correct: false,
        explanation:
          'The framework is about managing trade-offs credibly, not deleting output concerns from policy design.',
      },
    ],
  },
  {
    id: 'quiz:truefalse-lecture6-surprise-only',
    lectureSlug: 'lecture-06',
    lectureNumber: 6,
    lectureTopic: 'Time inconsistency and inflation bias',
    topicTag: 'inflation-bias',
    difficulty: 'easy',
    kind: 'truefalse',
    question: 'True or false: in the lecture’s supply relation, only surprise inflation (pi - pi^e) moves output away from y^n.',
    hints: ['Look at y - y^n = b(pi - pi^e).'],
    options: [
      {
        label: 'True',
        correct: true,
        explanation:
          'Correct. If pi equals pi^e, the surprise term is zero and output is at y^n.',
      },
      {
        label: 'False',
        correct: false,
        explanation:
          'False. The supply relation explicitly uses the surprise-inflation term.',
      },
    ],
  },
  {
    id: 'quiz:lecture7-forward-guidance-definition',
    lectureSlug: 'lecture-07',
    lectureNumber: 7,
    lectureTopic: 'Forward guidance and expectations management',
    topicTag: 'forward-guidance',
    difficulty: 'easy',
    kind: 'concept',
    question: 'In the Lecture 7 slides, what is forward guidance?',
    hints: [
      'The slide defines it as a communication practice.',
      'It is about the future path of monetary policy instruments.',
    ],
    options: [
      {
        label: 'Communicating information about the future path of monetary policy instruments.',
        correct: true,
        explanation:
          'Correct. The slides define forward guidance as communication about the future path of monetary policy instruments.',
      },
      {
        label: 'A one-time surprise increase in the policy rate with no communication.',
        correct: false,
        explanation:
          'No. Forward guidance is specifically about communication about the future path, not about silent surprises.',
      },
      {
        label: 'A fiscal policy plan that replaces the central bank at the lower bound.',
        correct: false,
        explanation:
          'No. Fiscal policy may matter at the lower bound, but forward guidance is a monetary-policy communication tool in the slides.',
      },
    ],
  },
  {
    id: 'lecture7-guidance-types',
    lectureSlug: 'lecture-07',
    lectureNumber: 7,
    lectureTopic: 'Forward guidance: Delphic vs Odyssean',
    topicTag: 'forward-guidance',
    difficulty: 'easy',
    kind: 'concept',
    question: 'Which statement best distinguishes Delphic from Odyssean forward guidance?',
    hints: [
      'One is primarily information about expected conditions; the other is commitment to policy behavior.',
      'Think forecast channel versus commitment channel.',
    ],
    options: [
      {
        label: 'Delphic is commitment to future policy, while Odyssean is just a forecast.',
        correct: false,
        explanation:
          'This is reversed. Delphic is forecast-like communication; Odyssean carries commitment content.',
      },
      {
        label: 'Delphic communicates likely outcomes without commitment, while Odyssean is commitment-oriented guidance.',
        correct: true,
        explanation:
          'Correct. This is the distinction emphasized in the lecture.',
      },
      {
        label: 'Both terms mean exactly the same thing in NK models.',
        correct: false,
        explanation:
          'No. The distinction matters for credibility and expectation effects.',
      },
    ],
  },
  {
    id: 'quiz:lecture7-time-vs-state-contingent',
    lectureSlug: 'lecture-07',
    lectureNumber: 7,
    lectureTopic: 'Forward guidance: time vs state contingent',
    topicTag: 'forward-guidance',
    difficulty: 'easy',
    kind: 'concept',
    question: 'What is the difference between time-contingent and state-contingent forward guidance (as in the slides)?',
    hints: [
      'Time-contingent: guidance tied to a date.',
      'State-contingent: guidance tied to a condition (like an unemployment threshold).',
    ],
    options: [
      {
        label: 'Time-contingent ties policy to a calendar horizon; state-contingent ties policy to an economic condition.',
        correct: true,
        explanation:
          'Correct. The slides give date-based examples (time-contingent) and threshold-based examples (state-contingent).',
      },
      {
        label: 'Time-contingent is always Delphic, while state-contingent is always Odyssean.',
        correct: false,
        explanation:
          'Not necessarily. Time/state contingency is about what the guidance is conditioned on; Delphic/Odyssean is about commitment content.',
      },
      {
        label: 'Time-contingent changes the Phillips curve, while state-contingent changes the IS curve.',
        correct: false,
        explanation:
          'No. Both types work through expectations about future policy and therefore can affect both demand (IS) and inflation dynamics (NKPC).',
      },
    ],
  },
  {
    id: 'quiz:lecture7-fg-puzzle-output-sum',
    lectureSlug: 'lecture-07',
    lectureNumber: 7,
    lectureTopic: 'Forward guidance puzzle: core algebra',
    topicTag: 'fg-puzzle',
    difficulty: 'medium',
    kind: 'math',
    question: 'In the forward-guidance puzzle note, what is the solved-forward expression for output y_t?',
    hints: [
      'It is an infinite sum over future real interest rates.',
      'In the baseline equation, there is no discounting term inside the sum.',
    ],
    options: [
      {
        label: 'y_t = -(1/sigma) * sum_{s=t}^∞ E_t r_s.',
        correct: true,
        explanation:
          'Correct. This is the key no-discounting infinite-sum expression highlighted in the note.',
      },
      {
        label: 'y_t = -(sigma) * sum_{s=t}^∞ E_t r_s.',
        correct: false,
        explanation:
          'Wrong scaling. The sensitivity is proportional to 1/sigma in the IS relation.',
      },
      {
        label: 'y_t = beta * E_t y_{t+1}.',
        correct: false,
        explanation:
          'That omits the real-rate term and is not the solved-forward expression used in the puzzle discussion.',
      },
    ],
  },
  {
    id: 'quiz:lecture7-fg-puzzle-why-powerful',
    lectureSlug: 'lecture-07',
    lectureNumber: 7,
    lectureTopic: 'Forward guidance puzzle: interpretation',
    topicTag: 'fg-puzzle',
    difficulty: 'medium',
    kind: 'concept',
    question: 'Why can news about a far-future real rate (like r_{t+99}) have a large effect in the baseline forward-guidance puzzle algebra?',
    hints: [
      'Look at the y_t equation: all future real rates enter the sum.',
      'Then inflation depends on (discounted) cumulative output.',
    ],
    options: [
      {
        label: 'Because y_t depends on the whole expected path of real rates with no discounting, so distant rates affect many periods of expected output.',
        correct: true,
        explanation:
          'Correct. No discounting in the IS infinite sum plus the cumulative nature of inflation dynamics gives large long-horizon effects.',
      },
      {
        label: 'Because the NKPC is backward-looking, so distant future rates mechanically feed into lagged inflation.',
        correct: false,
        explanation:
          'No. The puzzle comes from forward-looking expectations logic, not from lagged-inflation mechanics.',
      },
      {
        label: 'Because the lower bound forces r_t to equal zero forever, so any promise must have infinite impact.',
        correct: false,
        explanation:
          'No. The puzzle note’s core mechanism is the solved-forward equations and their long-horizon weights, not the claim that rates are stuck at zero forever.',
      },
    ],
  },
  {
    id: 'quiz:lecture7-discounting-wedges',
    lectureSlug: 'lecture-07',
    lectureNumber: 7,
    lectureTopic: 'Forward guidance puzzle: attenuation',
    topicTag: 'fg-puzzle',
    difficulty: 'medium',
    kind: 'concept',
    question: 'In the puzzle note’s “discounting” extension, what is the role of alpha_y and alpha_pi (both in (0,1))?',
    hints: [
      'They reduce the influence of far-future expectations on today’s outcomes.',
      'In the solved-forward IS relation, alpha_y generates geometric weights.',
    ],
    options: [
      {
        label: 'They attenuate long-horizon effects by discounting future expected terms (making distant rates matter less).',
        correct: true,
        explanation:
          'Correct. With alpha_y and alpha_pi below 1, distant-horizon policy news has smaller weights in the solved-forward expressions.',
      },
      {
        label: 'They make monetary policy shocks disappear entirely.',
        correct: false,
        explanation:
          'No. The extension changes the strength of expectation propagation; it does not remove shocks by assumption.',
      },
      {
        label: 'They imply the central bank can ignore expectations because the model becomes static.',
        correct: false,
        explanation:
          'No. Expectations remain central; the extension changes quantitative weights, not the qualitative channel.',
      },
    ],
  },
  {
    id: 'quiz:lecture7-kappa-meaning',
    lectureSlug: 'lecture-07',
    lectureNumber: 7,
    lectureTopic: 'Phillips curve slope: meaning',
    topicTag: 'phillips-curve',
    difficulty: 'easy',
    kind: 'symbols',
    question: 'In the modern NK Phillips curve used in Lecture 7, what is kappa (κ)?',
    hints: ['The slide calls κ the slope of the Phillips curve.'],
    options: [
      {
        label: 'The structural slope linking real pressure (output gap / unemployment gap) to inflation.',
        correct: true,
        explanation:
          'Correct. κ tells you how much inflation responds causally to tightness/real activity in the NKPC.',
      },
      {
        label: 'The central bank’s inflation target π*.',
        correct: false,
        explanation:
          'No. π* is a target parameter. κ is a slope parameter in the Phillips curve.',
      },
      {
        label: 'A measure of interest-rate smoothing in the Taylor rule.',
        correct: false,
        explanation:
          'No. Interest-rate smoothing is often written ρ in estimated rules; κ is the Phillips-curve slope.',
      },
    ],
  },
  {
    id: 'quiz:lecture7-identification-issues',
    lectureSlug: 'lecture-07',
    lectureNumber: 7,
    lectureTopic: 'Phillips curve slope: identification',
    topicTag: 'identification',
    difficulty: 'easy',
    kind: 'concept',
    question: 'Which “tricky identification issues” does the Lecture 7 slide list when estimating the Phillips-curve slope?',
    hints: ['The slide lists three unobserved drivers that can create omitted-variable bias.'],
    options: [
      {
        label: 'Expected inflation, the natural rate of output/supply shocks, and cost-push shocks can be unobserved.',
        correct: true,
        explanation:
          'Correct. The slide lists these three sources of omitted-variable bias when trying to estimate κ.',
      },
      {
        label: 'Only measurement error in inflation, because unemployment is perfectly observed.',
        correct: false,
        explanation:
          'No. The slide emphasizes multiple omitted-variable issues, including expected inflation and supply/cost-push forces.',
      },
      {
        label: 'Only interest-rate smoothing, because monetary policy fully determines inflation.',
        correct: false,
        explanation:
          'No. The identification issue is that the NKPC has multiple drivers; you cannot isolate κ without controls/strategy.',
      },
    ],
  },
  {
    id: 'quiz:truefalse-lecture7-stagflation',
    lectureSlug: 'lecture-07',
    lectureNumber: 7,
    lectureTopic: 'Phillips curve slope: supply shocks',
    topicTag: 'identification',
    difficulty: 'easy',
    kind: 'truefalse',
    question: 'True or false: the slides note that supply shocks can create “stagflation” (a positive correlation between unemployment and inflation) and bias slope estimates.',
    hints: ['The slide explicitly mentions stagflation and “wrong sign” slope bias.'],
    options: [
      {
        label: 'True',
        correct: true,
        explanation:
          'Correct. The slides say supply shocks can create stagflation and bias slope estimates toward zero or even the wrong sign.',
      },
      {
        label: 'False',
        correct: false,
        explanation:
          'False. The slides explicitly describe supply-shock simultaneity and stagflation as an identification problem.',
      },
    ],
  },
  {
    id: 'quiz:lecture7-flattening-hypotheses',
    lectureSlug: 'lecture-07',
    lectureNumber: 7,
    lectureTopic: 'Phillips curve flattening: hypotheses',
    topicTag: 'flattening',
    difficulty: 'medium',
    kind: 'exam',
    question: 'The Lecture 7 slides list four hypotheses for why the Phillips curve may “look flatter” in the data. Which option matches the slide list most closely?',
    hints: [
      'One hypothesis is that κ truly decreased (structural change).',
      'Others keep κ stable but change policy, shocks, or slack measurement.',
    ],
    options: [
      {
        label: 'κ decreased; policy was conducted optimally; cost-push/supply shocks became more important; slack is mis-measured.',
        correct: true,
        explanation:
          'Correct. These are the four hypotheses listed on the “Did it flatten?” slide.',
      },
      {
        label: 'Only κ decreased; the other explanations are ruled out by theory.',
        correct: false,
        explanation:
          'No. The slide explicitly presents multiple explanations consistent with observed flattening patterns.',
      },
      {
        label: 'The Phillips curve is an accounting identity, so flattening is impossible.',
        correct: false,
        explanation:
          'No. The Phillips curve is a structural relationship; its reduced-form correlation can change for multiple reasons.',
      },
    ],
  },
  {
    id: 'lecture7-pc-identification',
    lectureSlug: 'lecture-07',
    lectureNumber: 7,
    lectureTopic: 'Phillips curve slope: interpretation discipline',
    topicTag: 'identification',
    difficulty: 'easy',
    kind: 'exam',
    question: 'Why is it risky to infer structural Phillips-curve slope directly from inflation-unemployment scatterplots?',
    hints: [
      'The NKPC has expected inflation and cost-push terms, not only real-activity pressure.',
      'Supply shocks and expectation shifts can move points without slope changes.',
    ],
    options: [
      {
        label: 'Because scatterplots include no data on inflation dynamics at all.',
        correct: false,
        explanation:
          'They do include inflation data, but identification of causal slope is still problematic.',
      },
      {
        label: 'Because omitted expectations and supply/cost-push forces can change correlation without revealing causal slope.',
        correct: true,
        explanation:
          'Exactly. This is the central identification warning in the lecture.',
      },
      {
        label: 'Because Phillips-curve slope is fixed by accounting identities and cannot vary or be estimated.',
        correct: false,
        explanation:
          'The slope is a structural parameter that can be estimated, but only with careful identification.',
      },
    ],
  },
  {
    id: 'quiz:lecture8-define-mpc',
    lectureSlug: 'lecture-08',
    lectureNumber: 8,
    lectureTopic: 'MPC heterogeneity and distributional transmission',
    topicTag: 'mpc',
    difficulty: 'easy',
    kind: 'symbols',
    question: 'In Lecture 8, what does MPC_i mean?',
    hints: [
      'It is a marginal object (a derivative), not an average saving rate.',
      'It measures how much consumption changes when income/earnings change.',
    ],
    options: [
      {
        label: 'The share of a small income (or earnings) change that shows up as consumption within a given horizon.',
        correct: true,
        explanation:
          'Correct. MPC_i is the marginal propensity to consume out of income/earnings changes over the relevant horizon.',
      },
      {
        label: 'The average fraction of total lifetime income that a household consumes.',
        correct: false,
        explanation:
          'No. That is an average concept. The MPC is a marginal response to a small change.',
      },
      {
        label: 'The central bank policy rate that households face.',
        correct: false,
        explanation:
          'No. MPC is a household consumption response object, not a policy instrument.',
      },
    ],
  },
  {
    id: 'quiz:lecture8-aggregate-mpc',
    lectureSlug: 'lecture-08',
    lectureNumber: 8,
    lectureTopic: 'Matching multiplier and aggregate MPC',
    topicTag: 'matching-multiplier',
    difficulty: 'easy',
    kind: 'symbols',
    question: 'What is the aggregate MPC (MPC^agg) concept used in Lecture 8?',
    hints: [
      'It is a derivative at the aggregate level.',
      'Think: how aggregate consumption changes when aggregate output/income changes.',
    ],
    options: [
      {
        label: 'dC/dY: how total consumption changes when aggregate output/income changes.',
        correct: true,
        explanation:
          'Correct. The lecture uses MPC^agg as an aggregate consumption sensitivity.',
      },
      {
        label: 'dY/dC: how output changes when consumption changes.',
        correct: false,
        explanation:
          'No. That flips the object. The lecture defines a consumption response to output/income changes.',
      },
      {
        label: 'The MPC of the representative agent in a RANK model.',
        correct: false,
        explanation:
          'Not necessarily. In heterogeneous-agent logic, MPC^agg depends on the distribution of MPCs and exposure, not a single agent.',
      },
    ],
  },
  {
    id: 'quiz:lecture8-exposure-elasticity',
    lectureSlug: 'lecture-08',
    lectureNumber: 8,
    lectureTopic: 'Matching multiplier: exposure',
    topicTag: 'matching-multiplier',
    difficulty: 'medium',
    kind: 'symbols',
    question:
      'Lecture 8 uses an exposure term like (dE_i/dY)*(Y/E_i). What is its economic interpretation?',
    hints: [
      'It is an elasticity-like object.',
      'It measures how sensitive household i earnings are to aggregate output.',
    ],
    options: [
      {
        label: 'A cyclical exposure elasticity: how strongly household i earnings move when aggregate output moves.',
        correct: true,
        explanation:
          'Correct. It is an earnings-to-output sensitivity scaled into an elasticity-like term.',
      },
      {
        label: 'A measure of how patient household i is (discount factor).',
        correct: false,
        explanation:
          'No. Patience affects saving/consumption choices, but this term is about income exposure to the cycle.',
      },
      {
        label: 'The household i inflation target.',
        correct: false,
        explanation:
          'No. Inflation targets are policy/institutional objects, not household exposure terms.',
      },
    ],
  },
  {
    id: 'quiz:lecture8-covariance-term-meaning',
    lectureSlug: 'lecture-08',
    lectureNumber: 8,
    lectureTopic: 'Matching multiplier: covariance logic',
    topicTag: 'matching-multiplier',
    difficulty: 'medium',
    kind: 'concept',
    question:
      'In Lecture 8, what does the covariance (matching) term in the aggregate-MPC decomposition capture?',
    hints: [
      'It is about alignment between two household-level objects.',
      'Think: high MPC and high cyclical exposure occurring in the same households.',
    ],
    options: [
      {
        label: 'Whether high-MPC households are also the households whose earnings are most cyclical (most exposed).',
        correct: true,
        explanation:
          'Correct. A positive matching term means the households that spend a lot out of income are also the households that are most affected by aggregate movements.',
      },
      {
        label: 'Whether inflation and output are negatively correlated in the data.',
        correct: false,
        explanation:
          'No. That is about Phillips curve correlations, not the aggregate-MPC decomposition.',
      },
      {
        label: 'Whether the central bank raises the nominal rate more than one-for-one with inflation (Taylor principle).',
        correct: false,
        explanation:
          'No. That is a determinacy/monetary-policy rule condition from earlier lectures.',
      },
    ],
  },
  {
    id: 'lecture8-matching-multiplier',
    lectureSlug: 'lecture-08',
    lectureNumber: 8,
    lectureTopic: 'Matching multiplier: amplification condition',
    topicTag: 'matching-multiplier',
    difficulty: 'medium',
    kind: 'exam',
    question:
      "What is the key amplification condition in Lecture 8's matching-multiplier logic?",
    hints: [
      'Focus on the covariance term in the decomposition.',
      'Ask whether high-MPC households are the same households whose earnings move most with aggregate output.',
    ],
    options: [
      {
        label: 'Amplification is strongest when high-MPC households have high cyclical earnings exposure.',
        correct: true,
        explanation:
          'Correct. Positive covariance between MPC and cyclicality increases aggregate response.',
      },
      {
        label: 'Amplification is strongest when all households have identical MPC and identical exposure.',
        correct: false,
        explanation:
          'No. If everyone is identical, the covariance margin disappears.',
      },
      {
        label: 'Amplification only depends on average MPC; covariance is irrelevant.',
        correct: false,
        explanation:
          'No. The lecture emphasizes that covariance adds extra amplification beyond the average term.',
      },
    ],
  },
  {
    id: 'quiz:truefalse-lecture8-covariance-zero',
    lectureSlug: 'lecture-08',
    lectureNumber: 8,
    lectureTopic: 'Matching multiplier: intuition',
    topicTag: 'matching-multiplier',
    difficulty: 'easy',
    kind: 'truefalse',
    question:
      'True or false: if all households have the same cyclical earnings exposure, the matching/covariance term adds no extra amplification beyond the average MPC term.',
    hints: [
      'Think about what covariance means when one variable is constant across households.',
    ],
    options: [
      {
        label: 'True',
        correct: true,
        explanation:
          'Correct. If exposure is the same for everyone, there is no covariance between MPC and exposure.',
      },
      {
        label: 'False',
        correct: false,
        explanation:
          'False. If exposure is constant across households, the covariance term is zero by definition.',
      },
    ],
  },
  {
    id: 'quiz:lecture8-auclert-channels',
    lectureSlug: 'lecture-08',
    lectureNumber: 8,
    lectureTopic: 'Redistribution channels in monetary transmission',
    topicTag: 'redistribution',
    difficulty: 'easy',
    kind: 'concept',
    question:
      'Which set of channels is highlighted in Lecture 8 as ways monetary policy affects households differently?',
    hints: [
      'The lecture lists channels tied to earnings exposure and balance-sheet positions.',
      'One of the channels is named after Irving Fisher.',
    ],
    options: [
      {
        label: 'Earnings heterogeneity, Fisher (nominal positions), and interest-rate exposure.',
        correct: true,
        explanation:
          'Correct. These channels capture how incidence differs across households.',
      },
      {
        label: 'Only the direct intertemporal-substitution channel, because redistribution always nets out.',
        correct: false,
        explanation:
          'No. Lecture 8 explicitly argues redistribution can be part of aggregate transmission because MPCs differ.',
      },
      {
        label: 'Only money growth and the exchange rate, because the lecture assumes fixed prices.',
        correct: false,
        explanation:
          'No. The lecture discusses heterogeneous household exposure; it is not a fixed-price money-growth story.',
      },
    ],
  },
  {
    id: 'lecture8-hank-transmission',
    lectureSlug: 'lecture-08',
    lectureNumber: 8,
    lectureTopic: 'HANK vs RANK: transmission logic',
    topicTag: 'hank-vs-rank',
    difficulty: 'medium',
    kind: 'policy',
    question:
      'Why does Lecture 8 argue that redistribution is part of monetary-policy transmission?',
    hints: [
      'Auclert channels distinguish who gains and loses from rate/inflation/income changes.',
      'Compare RANK direct-rate channel with HANK indirect income channel.',
    ],
    options: [
      {
        label: 'Because policy only changes aggregate variables and never household incidence.',
        correct: false,
        explanation: 'This is the opposite of the lecture argument.',
      },
      {
        label: 'Because households are differently exposed, and gains/losses map into demand through heterogeneous MPCs.',
        correct: true,
        explanation:
          'Exactly. Incidence and MPC heterogeneity jointly shape aggregate transmission.',
      },
      {
        label: 'Because redistribution matters only for fairness, not for aggregate demand.',
        correct: false,
        explanation:
          'Lecture 8 emphasizes redistribution can be quantitatively part of the aggregate mechanism.',
      },
    ],
  },
  {
    id: 'quiz:lecture8-rank-vs-hank',
    lectureSlug: 'lecture-08',
    lectureNumber: 8,
    lectureTopic: 'RANK vs HANK: core contrast',
    topicTag: 'hank-vs-rank',
    difficulty: 'easy',
    kind: 'concept',
    question:
      'Which statement best captures the RANK vs HANK contrast emphasized in Lecture 8?',
    hints: [
      'RANK focuses on a representative agent and direct real-rate effects.',
      'HANK highlights distribution and indirect income/redistribution effects interacting with MPC heterogeneity.',
    ],
    options: [
      {
        label: 'RANK: distribution and heterogeneity are central drivers of aggregate multipliers. HANK: distribution is irrelevant for aggregates.',
        correct: false,
        explanation:
          'No. This reverses the lecture’s emphasis. HANK is precisely about distributional states affecting aggregates.',
      },
      {
        label: 'RANK: direct intertemporal-substitution channel dominates. HANK: indirect income/redistribution channels can matter because MPCs differ.',
        correct: true,
        explanation:
          'Correct. This is the lecture’s conceptual contrast for why heterogeneity changes transmission.',
      },
      {
        label: 'RANK and HANK are identical models; the only difference is notation.',
        correct: false,
        explanation:
          'No. The central difference is the presence of household heterogeneity and incomplete markets that make incidence and MPC dispersion relevant.',
      },
    ],
  },
  {
    id: 'quiz:lecture8-fed2020-link',
    lectureSlug: 'lecture-08',
    lectureNumber: 8,
    lectureTopic: 'Evidence and strategy: Fed 2020 review',
    topicTag: 'strategy',
    difficulty: 'medium',
    kind: 'exam',
    question:
      'How does Lecture 8 use the Fed 2020 review material in the course narrative?',
    hints: [
      'It is used to connect distribution-aware evidence to central bank strategy language.',
      'It is not presented as "inflation target abandoned."',
    ],
    options: [
      {
        label: 'As an example of strategy language that incorporates inclusive employment considerations while keeping inflation as a nominal anchor.',
        correct: true,
        explanation:
          'Correct. The lecture uses the Fed section to connect distributional evidence to policy strategy without claiming price stability is dropped.',
      },
      {
        label: 'As proof that central banks no longer care about inflation and only target inequality.',
        correct: false,
        explanation:
          'No. The lecture framing is about strategy under constraints, not abandoning inflation as the nominal anchor.',
      },
      {
        label: 'As a purely historical anecdote with no relevance for policy transmission.',
        correct: false,
        explanation:
          'No. The lecture uses it to motivate why incidence and employment outcomes can matter for strategy discussions.',
      },
    ],
  },
  {
    id: 'quiz:lecture9-flow-debt-equation',
    lectureSlug: 'lecture-09',
    lectureNumber: 9,
    lectureTopic: 'Debt arithmetic: flow equation',
    topicTag: 'debt-arithmetic',
    difficulty: 'easy',
    kind: 'concept',
    question:
      'In the flow debt equation dD/dt = (G - T) + rD, what do the two terms (G - T) and rD represent?',
    hints: [
      '(G - T) is the primary deficit (or surplus if negative).',
      'rD is interest servicing on outstanding debt.',
    ],
    options: [
      {
        label: '(G - T) is the primary deficit; rD is interest payments on existing debt.',
        correct: true,
        explanation:
          'Correct. Primary deficits add to debt, and interest servicing adds to debt as well.',
      },
      {
        label: '(G - T) is the inflation rate; rD is the output gap.',
        correct: false,
        explanation:
          'No. The flow debt equation is fiscal accounting: spending/taxes and interest on debt.',
      },
      {
        label: '(G - T) is monetary policy; rD is the Taylor principle.',
        correct: false,
        explanation:
          'No. These are fiscal and debt dynamics objects, not monetary-policy rule objects.',
      },
    ],
  },
  {
    id: 'quiz:lecture9-no-ponzi-meaning',
    lectureSlug: 'lecture-09',
    lectureNumber: 9,
    lectureTopic: 'Intertemporal budget constraint',
    topicTag: 'no-ponzi',
    difficulty: 'easy',
    kind: 'concept',
    question:
      'What does the no-Ponzi (transversality) condition rule out in Lecture 9?',
    hints: [
      'It rules out financing by rolling over debt forever without ever backing it by primary surpluses.',
      'It is not a balanced-budget-every-period requirement.',
    ],
    options: [
      {
        label: 'A strategy where the government rolls over debt forever without sufficient present-value primary surpluses.',
        correct: true,
        explanation:
          'Correct. The condition closes the model by preventing Ponzi-style debt roll-over from replacing fiscal backing.',
      },
      {
        label: 'Any use of debt at all, even temporarily.',
        correct: false,
        explanation:
          'No. Positive debt can be consistent with the PV constraint; what matters is intertemporal backing.',
      },
      {
        label: 'Any deficit in any single period.',
        correct: false,
        explanation:
          'No. The lecture emphasizes sustainability is intertemporal, not period-by-period balancing.',
      },
    ],
  },
  {
    id: 'lecture9-no-ponzi',
    lectureSlug: 'lecture-09',
    lectureNumber: 9,
    lectureTopic: 'Debt sustainability: no-Ponzi condition',
    topicTag: 'no-ponzi',
    difficulty: 'medium',
    kind: 'exam',
    question:
      'What is the key economic role of the no-Ponzi condition in government debt analysis?',
    hints: [
      'It rules out a financing strategy based only on rolling debt forever without backing surpluses.',
      'Think about what makes the intertemporal budget constraint economically meaningful.',
    ],
    options: [
      {
        label: 'It forces the government to run a balanced budget every period.',
        correct: false,
        explanation:
          'No. The condition is intertemporal, not a period-by-period balance requirement.',
      },
      {
        label: 'It prevents infinite debt roll-over from replacing genuine present-value fiscal backing.',
        correct: true,
        explanation:
          'Correct. It closes the model by ruling out Ponzi financing paths.',
      },
      {
        label: 'It says debt must always be zero in equilibrium.',
        correct: false,
        explanation:
          'Positive debt is possible; what matters is whether fiscal plans satisfy the PV condition.',
      },
    ],
  },
  {
    id: 'quiz:truefalse-lecture9-balanced-budget',
    lectureSlug: 'lecture-09',
    lectureNumber: 9,
    lectureTopic: 'Debt sustainability: common trap',
    topicTag: 'no-ponzi',
    difficulty: 'easy',
    kind: 'truefalse',
    question:
      'True or false: the no-Ponzi condition implies the government must run a balanced budget in every period.',
    hints: ['The lecture stresses sustainability is an intertemporal condition.'],
    options: [
      {
        label: 'True',
        correct: false,
        explanation:
          'False. No-Ponzi is not a period-by-period balanced-budget requirement; it is a restriction on discounted debt paths.',
      },
      {
        label: 'False',
        correct: true,
        explanation:
          'Correct. The condition rules out Ponzi finance but allows temporary deficits and positive debt if the PV constraint holds.',
      },
    ],
  },
  {
    id: 'quiz:lecture9-nominal-real-identity',
    lectureSlug: 'lecture-09',
    lectureNumber: 9,
    lectureTopic: 'Measurement: nominal vs real deficits',
    topicTag: 'measurement',
    difficulty: 'easy',
    kind: 'math',
    question:
      'Lecture 9 uses B = P*D. After differentiating and dividing by P, which term captures the inflation effect on nominal debt growth?',
    hints: [
      'Differentiate: dB = dP*D + P*dD.',
      'Inflation is pi = (dP/dt)/P.',
    ],
    options: [
      {
        label: 'pi * D',
        correct: true,
        explanation:
          'Correct. The term pi_t D_t appears when you rewrite nominal changes in real terms and captures the inflation component.',
      },
      {
        label: 'r * D',
        correct: false,
        explanation:
          'rD is interest servicing in the real debt flow equation, not the inflation term from differentiating B = P*D.',
      },
      {
        label: 'G - T',
        correct: false,
        explanation:
          '(G - T) is the primary deficit, not the inflation-measurement term.',
      },
    ],
  },
  {
    id: 'quiz:lecture9-ricardian-benchmark',
    lectureSlug: 'lecture-09',
    lectureNumber: 9,
    lectureTopic: 'Ricardian equivalence benchmark',
    topicTag: 'ricardian',
    difficulty: 'medium',
    kind: 'concept',
    question:
      'What is the core Ricardian-equivalence benchmark claim discussed in Lecture 9?',
    hints: [
      'It is a benchmark under strong assumptions.',
      'It says debt vs taxes timing may be neutral for consumption if households internalize the PV constraint.',
    ],
    options: [
      {
        label: 'Debt-financed tax cuts always raise consumption because households ignore future taxes.',
        correct: false,
        explanation:
          'No. That is the opposite of Ricardian equivalence. The benchmark says households account for future taxes.',
      },
      {
        label: 'Under strong assumptions, debt vs taxes timing may not change consumption because households internalize future taxes implied by the government PV constraint.',
        correct: true,
        explanation:
          'Correct. This is the benchmark logic: financing labels do not change lifetime resources when future taxes adjust in PV terms.',
      },
      {
        label: 'Government purchases never affect household welfare because taxes are distortionless.',
        correct: false,
        explanation:
          'No. Ricardian equivalence is about financing timing, not about government purchases being irrelevant.',
      },
    ],
  },
  {
    id: 'quiz:lecture9-ricardian-failures',
    lectureSlug: 'lecture-09',
    lectureNumber: 9,
    lectureTopic: 'Ricardian equivalence: why it fails',
    topicTag: 'ricardian',
    difficulty: 'easy',
    kind: 'concept',
    question:
      'Lecture 9 lists several reasons Ricardian equivalence often fails. Which option matches the slide list best?',
    hints: [
      'One reason is finite horizons/OLG.',
      'Another is borrowing/credit constraints.',
    ],
    options: [
      {
        label: 'Finite horizons/overlapping generations, credit constraints, distributional effects, and imperfect planning.',
        correct: true,
        explanation:
          'Correct. These are the realism breaks highlighted in the lecture.',
      },
      {
        label: 'Only because inflation exists; otherwise Ricardian equivalence always holds exactly.',
        correct: false,
        explanation:
          'No. The lecture lists multiple behavioral and market-structure breaks, not only inflation.',
      },
      {
        label: 'Because the government cannot borrow at all in any model.',
        correct: false,
        explanation:
          'No. Governments can borrow; the benchmark is about whether financing timing changes consumption under strong assumptions.',
      },
    ],
  },
  {
    id: 'quiz:lecture9-tax-smoothing-foc',
    lectureSlug: 'lecture-09',
    lectureNumber: 9,
    lectureTopic: 'Tax smoothing: convex distortions',
    topicTag: 'tax-smoothing',
    difficulty: 'medium',
    kind: 'math',
    question:
      'In the Lecture 9 tax-smoothing setup, what is the key first-order-condition implication of convex distortion costs?',
    hints: [
      "The lecture's result equalizes marginal distortion across time.",
      'That pins down a stable tax share T_t/Y_t.',
    ],
    options: [
      {
        label: 'Keep the marginal distortion f\'(T_t/Y_t) equal across time, implying a smooth tax share.',
        correct: true,
        explanation:
          'Correct. Convexity makes it optimal to avoid large swings in tax rates by equalizing marginal distortion across time.',
      },
      {
        label: 'Keep the level of taxes T_t constant in currency units.',
        correct: false,
        explanation:
          'No. The lecture’s result is about the tax share T_t/Y_t, not the level of T_t.',
      },
      {
        label: 'Repay all debt immediately to avoid any interest payments.',
        correct: false,
        explanation:
          'No. The smoothing logic uses debt to absorb shocks and then repays gradually to keep tax distortions smooth.',
      },
    ],
  },
  {
    id: 'lecture9-tax-smoothing',
    lectureSlug: 'lecture-09',
    lectureNumber: 9,
    lectureTopic: 'Tax smoothing: implication',
    topicTag: 'tax-smoothing',
    difficulty: 'easy',
    kind: 'exam',
    question: 'What does the tax-smoothing result imply in this lecture?',
    hints: [
      'The object is T_t / Y_t, not T_t alone.',
      'Convex collection distortions make large swings expensive.',
    ],
    options: [
      {
        label: 'Optimal policy keeps tax levels fixed in currency units over time.',
        correct: false,
        explanation:
          'The condition is about tax shares relative to GDP, not fixed nominal/real levels.',
      },
      {
        label: 'Optimal policy smooths tax rates relative to GDP and uses debt to absorb temporary shocks.',
        correct: true,
        explanation:
          'Yes. Equalizing marginal distortion over time gives tax-rate smoothing.',
      },
      {
        label: 'Optimal policy always repays all debt immediately to avoid interest costs.',
        correct: false,
        explanation:
          'Immediate full repayment is generally not implied by the smoothing framework.',
      },
    ],
  },
  {
    id: 'quiz:lecture10-strategic-debt',
    lectureSlug: 'lecture-10',
    lectureNumber: 10,
    lectureTopic: 'Political economy of debt',
    topicTag: 'political-economy',
    difficulty: 'easy',
    kind: 'concept',
    question: 'In Lecture 10, what does "strategic debt accumulation" mean?',
    hints: [
      'It is not mainly about forgetting to balance the budget.',
      'It is about constraining future policy choices.',
    ],
    options: [
      {
        label: 'Issuing debt today to constrain the fiscal choices of future governments (debt as a commitment device).',
        correct: true,
        explanation:
          'Correct. The lecture frames strategic debt as a political-economy motive that reallocates future fiscal space.',
      },
      {
        label: 'Running debt only because the government miscalculates its budget each year.',
        correct: false,
        explanation:
          'No. The lecture’s mechanism is strategic and forward-looking, not an accounting mistake story.',
      },
      {
        label: 'Using monetary policy to reduce inflation.',
        correct: false,
        explanation:
          'No. Strategic debt is a fiscal/political-economy mechanism, not a monetary-policy action.',
      },
    ],
  },
  {
    id: 'quiz:lecture10-lambda-definition',
    lectureSlug: 'lecture-10',
    lectureNumber: 10,
    lectureTopic: 'Sustainable debt ratios',
    topicTag: 'debt-ratio',
    difficulty: 'easy',
    kind: 'symbols',
    question: 'In Lecture 10, what does λ represent in the sustainability condition?',
    hints: ['It is a ratio of nominal debt to nominal GDP.'],
    options: [
      {
        label: 'The debt-to-GDP ratio: λ = B / (P*Y).',
        correct: true,
        explanation:
          'Correct. λ is the nominal debt ratio used to express sustainability conditions in scale-free form.',
      },
      {
        label: 'The inflation rate.',
        correct: false,
        explanation:
          'No. Inflation is π. λ is a debt ratio.',
      },
      {
        label: 'The probability of default.',
        correct: false,
        explanation:
          'No. Default probability is written π^{def} in this site to avoid confusion with inflation.',
      },
    ],
  },
  {
    id: 'lecture10-sustainable-deficit',
    lectureSlug: 'lecture-10',
    lectureNumber: 10,
    lectureTopic: 'Sustainable debt ratios: (g - r) logic',
    topicTag: 'debt-ratio',
    difficulty: 'medium',
    kind: 'exam',
    question:
      'In the lecture sustainability rule, when can a government run a primary deficit (G > T) while keeping debt-to-GDP stable?',
    hints: [
      'Use (G - T)/Y = (g - r) λ.',
      'Focus on the sign of (g - r).',
    ],
    options: [
      {
        label: 'When g > r, because growth can offset the debt burden at a given debt ratio.',
        correct: true,
        explanation:
          'Correct. If growth exceeds the real interest rate, a primary deficit can be consistent with a stable ratio.',
      },
      {
        label: 'Always, because debt-to-GDP is independent of the primary balance.',
        correct: false,
        explanation:
          'No. The primary balance enters directly; stability depends on g, r, and λ.',
      },
      {
        label: 'Only when inflation is high, regardless of real growth and real rates.',
        correct: false,
        explanation:
          'No. The slide’s key condition is about g - r once the Fisher relation is used.',
      },
    ],
  },
  {
    id: 'quiz:truefalse-lecture10-pi-notation',
    lectureSlug: 'lecture-10',
    lectureNumber: 10,
    lectureTopic: 'Notation discipline (inflation vs default probability)',
    topicTag: 'notation',
    difficulty: 'easy',
    kind: 'truefalse',
    question:
      'True or false: in the Lecture 10 crisis block, the symbol π can refer to default probability rather than inflation, so you must keep notation explicit.',
    hints: ['The lecture warns that π is reused across blocks.'],
    options: [
      {
        label: 'True',
        correct: true,
        explanation:
          'Correct. The site writes default probability as π^{def} to avoid confusion with inflation.',
      },
      {
        label: 'False',
        correct: false,
        explanation:
          'False. The lecture reuses π in different contexts; you must keep notation disciplined.',
      },
    ],
  },
  {
    id: 'quiz:lecture10-pricing-condition',
    lectureSlug: 'lecture-10',
    lectureNumber: 10,
    lectureTopic: 'Debt crises: risky-debt pricing',
    topicTag: 'crisis-model',
    difficulty: 'easy',
    kind: 'math',
    question:
      "In the lecture's crisis model, what does the pricing condition (1 - pi_def)*R = R' capture?",
    hints: [
      'R is the promised gross return on risky government debt.',
      "R' is the risk-free gross return.",
    ],
    options: [
      {
        label: 'Expected payoff on risky debt equals the risk-free payoff when default has zero payoff.',
        correct: true,
        explanation:
          'Correct. With probability (1 - pi_def) you get R; pricing sets expected return equal to risk-free.',
      },
      {
        label: 'The government always repays in full, so default probability is zero by assumption.',
        correct: false,
        explanation:
          'No. Default probability is central; pricing links higher default probability to higher required promised returns.',
      },
      {
        label: 'Inflation is always equal to the real interest rate.',
        correct: false,
        explanation:
          'No. This condition is about pricing risky debt, not Fisher relations between inflation and real rates.',
      },
    ],
  },
  {
    id: 'quiz:lecture10-default-mapping',
    lectureSlug: 'lecture-10',
    lectureNumber: 10,
    lectureTopic: 'Debt crises: default probability mapping',
    topicTag: 'crisis-model',
    difficulty: 'easy',
    kind: 'concept',
    question:
      'In the Lecture 10 crisis model, how is default probability linked to the required repayment burden?',
    hints: [
      'Default occurs when fiscal capacity (taxes) is below required repayment.',
      'The mapping is written as a CDF F(RD).',
    ],
    options: [
      {
        label: 'pi_def = Pr(T < R*D) = F(RD): higher promised repayment increases default probability.',
        correct: true,
        explanation:
          'Correct. A higher required repayment RD makes the default event more likely under the tax-capacity distribution.',
      },
      {
        label: 'pi_def is constant and independent of debt levels.',
        correct: false,
        explanation:
          'No. The lecture’s key mechanism is that debt burden and interest rates feed into default probability.',
      },
      {
        label: 'pi_def depends only on inflation.',
        correct: false,
        explanation:
          'No. Default probability in this model depends on repayment capacity relative to required repayment, not inflation per se.',
      },
    ],
  },
  {
    id: 'lecture10-multiple-equilibria',
    lectureSlug: 'lecture-10',
    lectureNumber: 10,
    lectureTopic: 'Debt crises: self-fulfilling dynamics',
    topicTag: 'crisis-model',
    difficulty: 'medium',
    kind: 'exam',
    question:
      "Why can the lecture's sovereign-debt crisis model generate self-fulfilling default dynamics?",
    hints: [
      'Pricing makes R rise when default probability rises.',
      'Higher R increases required repayment RD, which can raise default probability through F(RD).',
    ],
    options: [
      {
        label: 'Because higher perceived default risk raises required returns, which can raise default risk further via repayment capacity.',
        correct: true,
        explanation:
          'Yes. That feedback loop is the core multiple-equilibria mechanism in the slides.',
      },
      {
        label: 'Because default is always impossible when taxes are uncertain.',
        correct: false,
        explanation:
          'Uncertainty about taxes is what creates default probability in the first place.',
      },
      {
        label: "Because the risk-free rate R' is always zero in the model.",
        correct: false,
        explanation:
          "No. The model uses a risk-free factor R' and compares risky debt pricing to it.",
      },
    ],
  },
  {
    id: 'quiz:truefalse-lecture10-fundamentals',
    lectureSlug: 'lecture-10',
    lectureNumber: 10,
    lectureTopic: 'Debt crises: fundamentals vs beliefs',
    topicTag: 'crisis-model',
    difficulty: 'easy',
    kind: 'truefalse',
    question:
      'True or false: Lecture 10 argues that in multiple-equilibria debt crises, fundamentals still matter even if dynamics can be self-fulfilling.',
    hints: ['The slides list debt level, risk-free rate, and fiscal capacity distribution as fundamentals.'],
    options: [
      {
        label: 'True',
        correct: true,
        explanation:
          'Correct. The lecture emphasizes both: beliefs can be self-fulfilling, but fundamentals shift the equilibrium set and default likelihood.',
      },
      {
        label: 'False',
        correct: false,
        explanation:
          'False. The lecture explicitly states fundamentals matter even in a multiple-equilibria framework.',
      },
    ],
  },
];
