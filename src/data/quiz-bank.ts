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
];
