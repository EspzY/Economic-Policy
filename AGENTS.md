# AGENTS.md

## Project Objective

Build a high-quality English study website for `GRA6631 Economic Policy` that helps students with weak prior exposure learn the course in a structured way and realistically aim for an A/B within about 20 days. The site should prioritize pedagogical clarity, explicit derivations, active recall, worked reasoning, exam preparation, and maintainability.

## Repository And Environment

- Working root: `C:\Skole\Economic Policy`
- Intended Git remotes:
  - HTTPS: `https://github.com/EspzY/Economic-Policy.git`
  - SSH: `git@github.com:EspzY/Economic-Policy.git`
- Current state when work started: the folder contained course materials but was **not** yet a Git repository.
- Current repository state:
  - `git init -b main` completed
  - `origin` configured to `https://github.com/EspzY/Economic-Policy.git`
- OS/context: Windows, PowerShell, workspace-write sandbox.
- Node available:
  - `node v24.14.1`
  - `npm 11.11.0`
- Python constraint:
  - Do **not** assume plain `python` exists on `PATH`.
  - Conda executable located at `C:\Users\espen\anaconda3\Scripts\conda.exe`
  - If Python is needed, use:
    - `C:\Users\espen\anaconda3\Scripts\conda.exe run -n csvi_env python ...`
- PDF tooling discovered:
  - `pdftotext.exe`: `C:\Users\espen\AppData\Local\Programs\MiKTeX\miktex\bin\x64\pdftotext.exe`
  - `pdfinfo.exe`: `C:\Users\espen\AppData\Local\Programs\MiKTeX\miktex\bin\x64\pdfinfo.exe`
  - These tools currently print useful output but return non-zero because MiKTeX cannot write its log file in AppData. Treat them as partially usable, not fully reliable automation dependencies.

## Source Material Map

### Root-Level Files

- `GRA6631_2026_LecturePlan.pdf`
- `Norges Bank -- Monetary Policy Handbook.pdf`

### Lecture Folders

- `Lecture 1`
  - Main lecture slides
  - Complementary lecture
- `Lecture 2`
  - Main lecture slides
  - Complementary lecture
  - Derivation notes on NKPC markups, natural real rate, and MC/output-gap proportionality
- `Lecture 3`
  - Main lecture slides
  - Matrix-form derivation notes
  - Recursive substitution notes
- `Lecture 4`
  - Main lecture slides
  - Complementary slides on the output gap
  - Notes on commitment
  - Notes on interest rate under discretion
- `Lecture 5`
  - Time inconsistency / independence lecture material
  - Drechsel paper and related reading
- `Lecture 6`
  - Forward guidance slides
  - Complementary lecture on the forward-guidance puzzle
- `Lecture 7`
  - Phillips curve slope lecture PDF
- `Lecture 8`
  - Inequality lecture PDF
- `Lecture 9`
  - Government debt lecture
  - Handwritten notes
- `Lecture 10`
  - Debt / debt crisis lecture
  - Handwritten notes
  - Two additional paper PDFs
- `Lecture 11`
  - Inequality lecture
  - Handwritten notes
  - Norges Bank MPR / related paper
- `Lecture 12`
  - Sustainability and environment lecture
  - Handwritten notes
  - Brundtland / Hardin / Stern / Weitzman readings

### Problem Sets

- `Problem sets\Seminar 1`
  - TA exercises
  - Natural rate note
  - Solutions
- `Problem sets\Seminar 2`
  - TA exercises
  - Presentation
  - Solutions
- `Problem sets\Seminar 3`
  - TA sheet

### Exams

- Exam PDFs for `2020`, `2021`, `2022`, `2023`, `2024`, `2025`
- Solutions available for `2020`, `2021`, `2024`, `2025`

## Syllabus Understanding From Initial Inspection

The lecture plan identifies the main lecture sequence:

1. Monetary policy objectives, rules, systematic vs. unsystematic policy
2. Review of the three-equation New Keynesian model and shock transmission
3. Divine coincidence
4. Optimal monetary policy
5. Optimal monetary policy continued
6. Time inconsistency and central bank independence
7. Unconventional monetary policy and the Phillips curve slope
8. Macroeconomics and inequality
9. Government debt
10. Debt and debt crises
11. Inequality
12. Sustainability and the environment

Important observation: the source material is split between polished lecture slides, complementary lecture PDFs, derivation notes, seminar sheets, handwritten notes, papers, and past exams. The website therefore needs both:

- a clean student-facing canonical explanation layer
- a transparent source layer with links back to the actual course files

## Stack Choice And Reasoning

### Selected Stack

- `Astro`
- `TypeScript`
- `MDX`
- `remark-math` + `rehype-katex`
- Small `React` islands for interactive quiz/progress components

### Why This Stack

- Astro is well suited to a mostly static, content-driven study site with a few interactive islands.
- MDX allows lecture pages to be written as structured study modules with reusable pedagogy components.
- Math rendering is first-class with remark/rehype plugins and KaTeX.
- The site can remain easy to maintain and deploy as static output.
- React islands are enough for quizzes, hints, checkpoints, and local progress tracking without turning the whole site into a heavy SPA.

### Content Pipeline Decision

- Keep the original course files exactly where they are.
- Do **not** move or overwrite lecture/problem/exam source PDFs.
- Build a small Node-based sync/index pipeline that:
  - scans the root course-material folders
  - generates structured metadata for the site
  - copies/link-prepares materials into a web-served location when needed
- Prefer Node for initial automation so the project is not blocked on Python setup.
- If later PDF extraction or OCR work genuinely benefits from Python, use the `csvi_env` Conda environment explicitly and document those commands.

## Planned Information Architecture

### Top-Level Pages

- Home
- Course roadmap
- How to use this site
- Lectures
- Problem sets
- Past exams
- Formula and concept review
- Exam strategy
- Progress dashboard

### Lecture Module Template

Each lecture page should eventually include:

- What this lecture is about
- Learning goals
- Core concepts
- Intuition first
- Formal theory
- Definitions
- Step-by-step derivations
- Figure walkthroughs
- Common pitfalls
- Exam focus
- Active-recall questions
- Quiz/checkpoint block
- Worked examples or linked seminar problems
- Source file links

## Architectural Decisions

1. The course-material root will also serve as the repository root.
   - Reason: avoids a second copy of the materials and keeps the study site close to the real sources.
2. Original PDFs remain the canonical source material.
   - Reason: prevents accidental loss and makes provenance explicit.
3. Student-facing explanations will be authored separately from raw extracted text.
   - Reason: the goal is teaching quality, not a PDF dump.
4. Every substantial content page should reference which source PDFs it is based on.
   - Reason: accuracy and future maintainability.
5. The first implementation milestone is a strong shell and content model, not immediate full lecture transcription.
   - Reason: good architecture is necessary before scaling across 12 lectures.

## Important Conventions

- All new website text must be in English.
- Do not hallucinate course content. Base explanations on actual local material.
- When content is uncertain, say so explicitly in the site copy or notes.
- Use web-native diagrams/components where pedagogically useful, but only when grounded in the lecture material.
- Prefer explicit derivation steps over compressed expert shorthand.
- Treat handwritten notes and scan-like PDFs as potentially noisy sources requiring manual review.

## Current Status

### Completed

- Confirmed the available source-material layout.
- Located the Conda executable path needed for Python-safe work.
- Confirmed Node/npm availability.
- Sampled lecture-plan, lecture, seminar, and exam text to validate the syllabus and exam emphasis.
- Chosen the technical stack and initial architecture.
- Initialized Git repository and connected remote `origin`.
- Scaffolded Astro project structure with TypeScript, MDX, React islands, and KaTeX-ready math configuration.
- Implemented a `scripts/sync-materials.mjs` pipeline that indexes and copies all source PDFs into `public/materials` and generates a manifest at `src/generated/materials-manifest.json`.
- Added full site shell and navigation:
  - Home
  - Course roadmap
  - How to use this site
  - Lectures index and lecture detail routing
  - Problem sets
  - Past exams
  - Formula/concept review
  - Exam strategy
  - Progress dashboard
- Implemented interactive learning foundation:
  - Lecture completion toggles
  - Quiz checkpoint component with progressive hints
  - Local progress and points tracking in `localStorage`
- Added guided-problem-solving infrastructure:
  - `GuidedSolution` component with progressive hints and step-by-step reveal
  - Study-point integration when a guided solution is marked understood
- Added first worked problem-solving page:
  - `/problem-sets/seminar-1/` with a grounded NK technology-shock reasoning exercise
- Added a web-native conceptual diagram (`TransmissionFlow`) for NK shock transmission.
- Created lecture content collection entries for all 12 lectures.
- Authored in-progress teaching modules for:
  - Lecture 1 (policy objectives/rules/systematic vs unsystematic policy)
  - Lecture 2 (3-equation NK model, transmission logic, and explicit derivation from seminar equations to NKPC output-gap form)
- Upgraded Lecture 3 to authored status with:
  - recursive-substitution walkthrough
  - matrix/uniqueness interpretation
  - Taylor-principle discussion
  - common pitfalls and interactive checkpoints
- Upgraded Lecture 4 to authored status with:
  - cost-push trade-off setup
  - discretionary targeting-rule derivation from the Lagrangian
  - analytical response formulas and implementation interpretation
  - output-gap measurement caveats and interactive checkpoints
- Upgraded Lecture 5 to authored status with:
  - commitment to simple targeting-rule analysis
  - derivation and interpretation of alpha_x^c = alpha_x(1 - beta rho_pi)
  - state-contingent commitment and history-dependence condition
  - bridge to credibility and time inconsistency
- Upgraded Lecture 6 to authored status with:
  - discretionary inflation-bias derivation
  - rational-expectations equilibrium logic
  - commitment benchmark and independence interpretation
  - integration of evidence framing and policy implications
- Upgraded Lecture 7 to authored status with:
  - Delphic versus Odyssean forward-guidance distinctions
  - forward-guidance-puzzle derivations and attenuation extensions
  - Phillips-curve slope identification cautions
  - interactive checkpoints and a web-native `PhillipsCurveLens` explainer
- Upgraded Lecture 8 to authored status with:
  - representative-agent to heterogeneous-agent macro transition framing
  - step-by-step aggregate-MPC and matching-multiplier decomposition
  - Auclert redistribution-channel and HANK-versus-RANK transmission interpretation
  - Fed 2020 strategy link and interactive checkpoints
- Added a web-native `MpcAmplificationLens` explainer for the matching-multiplier mechanism.
- Upgraded Lecture 9 to authored status with:
  - flow-to-present-value government budget derivation and no-Ponzi interpretation
  - nominal-versus-real deficit measurement walkthrough
  - Ricardian-equivalence benchmark logic plus realism breaks
  - tax-smoothing derivation and interpretation
- Added a web-native `DebtArithmeticLens` explainer for fiscal sustainability mechanics.
- Upgraded Lecture 10 to authored status with:
  - strategic debt accumulation (political-economy motive) framing
  - sustainable debt-ratio derivation and interpretation of $(g-r)\lambda$
  - default-risk pricing and multiple-equilibria debt-crisis mechanics
  - interactive checkpoints and a web-native `DebtCrisisLens` explainer
- Upgraded Lecture 11 to authored status with:
  - functional versus personal inequality distinction and exam-safe usage
  - Scandinavian wage-setting block and inflation-target interpretation
  - Lorenz curve and Gini coefficient measurement walkthrough
  - interactive checkpoints and a web-native `LorenzCurveLens` explainer
- Upgraded Lecture 12 to authored status with:
  - Brundtland sustainability definition translated into economic constraints
  - Solow growth recap plus growth-with-resources accounting and "resource drag" interpretation
  - Coase theorem and welfare-theorem positioning for externality policy
  - climate change as flow-stock externality with uncertainty, discounting, and fairness framing
  - Hotelling rule derivation and renewable vs non-renewable distinctions
  - interactive checkpoints and a web-native `FlowStockLens` explainer
- All lecture modules (1 to 12) are now authored.
- Migrated content configuration to Astro v6 format (`src/content.config.ts` + `glob` loader).
- Verified a successful full static production build (`npm run build`).
- Installed `@astrojs/check` and verified diagnostics are clean (`0 errors, 0 warnings, 0 hints`) with `npm run check`.

### Next Steps

1. Continue the lecture-by-lecture pedagogy upgrade systematically from Lecture 1 to Lecture 12 (do not jump around).
2. Keep lecture pages to a few light checkpoints only; move the main active-recall workload into the central Quiz bank page.
3. Upgrade Lecture 7 next using the same structure (big picture, symbols, careful derivations, selective visuals, pitfalls, exam takeaways) and keep checkpoints light.
4. Add a Lecture 7 quiz set, then continue adding quiz items lecture-by-lecture as each lecture page is upgraded.
5. Keep changes in small, lecture-scoped commits and push regularly (code-only; course PDFs remain local inputs).

## Phase Progress

- Phase 1 (Inspect and plan): Completed
- Phase 2 (Scaffold project): Completed
- Phase 3 (Foundational pages): Completed
- Phase 4 (Build lecture modules): In progress
- Phase 5 (Interactive features): In progress
- Phase 6 (Refine and document): In progress

## Known Issues / Risks

- `pdftotext.exe` and `pdfinfo.exe` currently exit non-zero due MiKTeX log-file permission errors, even though they still emit useful output.
- Some material appears to be handwritten notes or scanned PDFs, so extraction quality may vary.
- `Lecture 9/Handwrittennotes0403.pdf` currently yields effectively no usable text via `pdftotext`; lecture authoring for Lecture 9 is therefore grounded primarily in `Lecture 9/Lecture 9.pdf`.
- There is a source-layout mismatch around lecture numbering/topics (especially lectures 5 to 7). The site currently follows inspected PDF titles and explicitly documents this.
- In this sandbox, non-elevated builds may hit Windows permission errors in `node_modules/.vite`; elevated build succeeds. This appears environment-specific, not project-logic specific.
- A few legacy scaffold lines still contain mojibake quote artifacts from earlier extraction/copy steps; cleanup is pending during the next content pass.
- Some Git operations may require elevated execution due to Windows ACL quirks on `.git` in this environment (observed as `index.lock` permission errors). When that happens, rerun the Git command with escalation and document the fix.
- `Lecture 10/Handwrittennotes1103.pdf` also appears to be mostly non-extractable via `pdftotext`, so Lecture 10 authoring is grounded primarily in `Lecture 10/Lecture 10.pdf` plus the included papers.
- `Lecture 11/Handwrittennotes1803.pdf` currently yields effectively no usable text via `pdftotext`, so Lecture 11 authoring is grounded primarily in `Lecture 11/Lecture 11.pdf` plus the listed Norges Bank readings.
- `Lecture 12/Handwrittennotes2503.pdf` currently yields effectively no usable text via `pdftotext`, so Lecture 12 authoring is grounded primarily in `Lecture 12/Lecture 12.pdf` plus the canonical readings in the folder.

## Decision Log

- `2026-04-08`: Use Astro + MDX + React islands rather than a full SPA framework.
  - Reason: better fit for a static, lecture-driven learning site with selective interactivity.
- `2026-04-08`: Keep the course-material folders in place and build around them.
  - Reason: preserves source provenance and avoids risky file moves.
- `2026-04-08`: Prefer Node-based project automation first; reserve Python for later extraction tasks only if needed.
  - Reason: Node is already available and avoids violating the Conda-only Python constraint.
- `2026-04-08`: Disable Astro telemetry from package scripts via `ASTRO_TELEMETRY_DISABLED=1`.
  - Reason: sandbox blocks Astro from writing telemetry config in AppData; disabling telemetry removes irrelevant local friction.
- `2026-04-08`: Make material sync idempotent by copying only when source size/mtime differs.
  - Reason: repeated `predev`/`prebuild` runs should be reliable without file-access collisions.
- `2026-04-08`: Migrate to Astro v6 content-layer config using `src/content.config.ts` and `glob` loader.
  - Reason: legacy `src/content/config.ts` is no longer valid in Astro v6.
- `2026-04-08`: Use content entry `id` as lecture route parameter.
  - Reason: with content-layer loader, `id` is stable and avoids missing-parameter route generation errors.
- `2026-04-08`: Use `zod` directly in `src/content.config.ts` rather than deprecated schema exports.
  - Reason: removes deprecation hints and keeps content schemas future-proof.
- `2026-04-08`: Prefer `$...$` inline math in MDX lecture files instead of `\(...\)` to avoid parser ambiguity.
  - Reason: resolved MDX/acorn parse failures during static build while preserving math rendering.
- `2026-04-08`: When mojibake in legacy scaffold text prevented reliable patch matching, rewrite affected MDX files directly and then re-run `check`/`build`.
  - Reason: preserves momentum and avoids brittle partial edits while keeping validation strict.
- `2026-04-08`: Teach Lecture 8 around MPC-distribution mechanics before paper-by-paper detail.
  - Reason: source slides repeatedly return to MPC heterogeneity as the organizing transmission concept.
- `2026-04-08`: For Lecture 9, anchor authoring in the main slide deck and treat handwritten notes as supplemental when extraction is not machine-readable.
  - Reason: preserves source accuracy while avoiding fabricated content from unreadable scans.
- `2026-04-08`: For Lecture 10, keep the crisis mechanism "exam-first" and treat included papers as optional enrichment.
  - Reason: the lecture slide deck contains the full equilibrium logic; papers are better used for evidence/intuition extension.
- `2026-04-08`: For Lecture 11, teach "inequality" by separating functional shares from personal dispersion, then anchor measurement in Lorenz/Gini.
  - Reason: this matches the lecture outline and prevents the most common exam confusion.
- `2026-04-08`: For Lecture 12, treat climate as a flow-stock externality and use the Hotelling condition as the anchor for non-renewable resource logic.
  - Reason: these are the two most exam-stable pieces of formal structure in the slide deck.
- `2026-04-08`: Quiz architecture: keep lecture pages focused on teaching flow with only a few light checkpoints; move the main quiz/revision experience to a separate filterable quiz bank page.
  - Reason: heavy in-lecture quizzing can interrupt derivations; a central bank supports cross-lecture revision and exam drilling while still feeding the same progress system.

## Implementation Log

- `2026-04-08`: Created `AGENTS.md` and recorded the initial architecture, environment constraints, source inventory, and execution priorities.
- `2026-04-08`: Initialized Git repository (`main`) and configured `origin` remote to the provided GitHub repository.
- `2026-04-08`: Added project scaffold files (`package.json`, `astro.config.mjs`, `tsconfig.json`, `.gitignore`, `README.md`).
- `2026-04-08`: Implemented material synchronization script and manifest generation.
- `2026-04-08`: Added global layout, visual design system, navigation, cards, source-link component, and stat components.
- `2026-04-08`: Added progress-state logic and interactive React components for completion tracking and quiz checkpoints.
- `2026-04-08`: Added all core site routes and dynamic lecture pages.
- `2026-04-08`: Authored Lecture 1 and Lecture 2 as substantial teaching modules and scaffolded lectures 3 to 12.
- `2026-04-08`: Fixed build blockers:
  - Astro v6 legacy content config migration
  - Route generation using content `id`
  - Sync-script idempotence
- `2026-04-08`: Verified successful production build with static routes generated for all pages and lecture modules.
- `2026-04-08`: Installed `@astrojs/check` and validated project diagnostics are fully clean.
- `2026-04-08`: Added guided solution workflow and first seminar workbench route for active problem-solving support.
- `2026-04-08`: Re-authored Lecture 3 and Lecture 4 into full pedagogy modules and validated with clean `check` + `build`.
- `2026-04-08`: Re-authored Lecture 5 and Lecture 6 into full pedagogy modules and validated with clean `check` + `build`.
- `2026-04-08`: Re-authored Lecture 7 into a full module and added `src/components/learning/PhillipsCurveLens.astro`.
- `2026-04-08`: Used `pdftotext.exe -layout` (MiKTeX build) for targeted page-level extraction while authoring Lecture 8, then removed temporary `.txt` artifacts from `Lecture 8`.
- `2026-04-08`: Re-authored Lecture 8 into a full module and added `src/components/learning/MpcAmplificationLens.astro`.
- `2026-04-08`: Fixed a Lecture 8 MDX tokenization edge case (`<->` rendered as JSX) and re-validated with clean `npm run check` and successful `npm run build`.
- `2026-04-08`: Extracted and reviewed `Lecture 9/Lecture 9.pdf`; attempted extraction of `Lecture 9/Handwrittennotes0403.pdf` returned minimal/empty text.
- `2026-04-08`: Re-authored Lecture 9 into a full module and added `src/components/learning/DebtArithmeticLens.astro`.
- `2026-04-08`: Removed temporary `.txt` extraction artifacts from `Lecture 9` after authoring.
- `2026-04-08`: Validated Lecture 9 changes with clean `npm run check` and successful `npm run build`.
- `2026-04-08`: Extracted and reviewed `Lecture 10/Lecture 10.pdf`; attempted extraction of `Lecture 10/Handwrittennotes1103.pdf` returned minimal/empty text.
- `2026-04-08`: Re-authored Lecture 10 into a full module and added `src/components/learning/DebtCrisisLens.astro`.
- `2026-04-08`: Removed temporary `.txt` extraction artifacts from `Lecture 10` after authoring.
- `2026-04-08`: Fixed an Astro content-schema issue where YAML `examFocus` items containing `:` were parsed as objects; quoted those strings and re-validated with clean `npm run check` and successful `npm run build`.
- `2026-04-08`: Extracted and reviewed `Lecture 11/Lecture 11.pdf`; attempted extraction of `Lecture 11/Handwrittennotes1803.pdf` returned minimal/empty text.
- `2026-04-08`: Re-authored Lecture 11 into a full module and added `src/components/learning/LorenzCurveLens.astro`.
- `2026-04-08`: Removed temporary `.txt` extraction artifacts from `Lecture 11` after authoring.
- `2026-04-08`: Validated Lecture 11 changes with clean `npm run check` and successful `npm run build`.
- `2026-04-08`: Extracted and reviewed `Lecture 12/Lecture 12.pdf`; attempted extraction of `Lecture 12/Handwrittennotes2503.pdf` returned minimal/empty text.
- `2026-04-08`: Re-authored Lecture 12 into a full module and added `src/components/learning/FlowStockLens.astro`.
- `2026-04-08`: Removed temporary `.txt` extraction artifacts from `Lecture 12` after authoring.
- `2026-04-08`: Validated Lecture 12 changes with clean `npm run check` and successful `npm run build`.
- `2026-04-08`: Upgraded Lecture 3 into a "gold standard" teaching module:
  - Expanded big-picture framing, symbols/parameters, and step-by-step derivations (recursive substitution, matrix form, divine coincidence, sunspot logic).
  - Added a pedagogical equation dependency diagram component (`src/components/learning/NkEquationMap.astro`).
  - Added an interactive Taylor-principle + determinacy explorer (`src/components/interactive/TaylorPrincipleExplorer.tsx`).
  - Extended global styling for the new teaching visuals and explorer readouts.
- `2026-04-08`: Added the cross-lecture quiz bank:
  - Data: `src/data/quiz-bank.ts` (start with Lecture 1 questions and expand lecture-by-lecture).
  - UI: `src/pages/quizzes.astro` + `src/components/interactive/QuizBank.tsx` with filtering (lecture/topic/difficulty/type) and "missed only" mode.
  - Updated `QuizCard` to support a configurable label (`kicker`) so lectures show "Checkpoint" while the bank shows "Quiz".
- `2026-04-08`: Rewrote Lecture 1 to the new teaching standard (big picture, symbols/objects, step-by-step Taylor-rule rewrite, systematic vs unsystematic policy, pitfalls, exam takeaways) while keeping only light embedded checkpoints.
- `2026-04-08`: Upgraded Lecture 2 to the new teaching standard:
  - Replaced the tail "shock reasoning" section with a disciplined, exam-safe routine centered on the real-rate gap.
  - Added explicit "How to use the derivation notes", pitfalls, and exam-useful takeaways.
  - Kept only one light embedded checkpoint on the lecture page to avoid quiz clutter.
- `2026-04-08`: Expanded the central quiz bank with an initial Lecture 2 question set and migrated the prior embedded NKPC-meaning quiz into the bank.
- `2026-04-08`: Refactored Lecture 3 to match the "light checkpoints on lecture pages" standard:
  - Reduced embedded quiz cards from 9 to 3 checkpoints to avoid interrupting derivation flow.
  - Migrated the removed Lecture 3 quiz questions into the central quiz bank so revision happens primarily on `/quizzes`.
- `2026-04-08`: Rewrote Lecture 4 to the new teaching standard:
  - Reframed as "big picture + symbols/gaps + core trade-off intuition + step-by-step targeting-rule derivation + exam takeaways".
  - Kept only two light embedded checkpoints and pointed the main practice to `/quizzes`.
- `2026-04-08`: Added a first Lecture 4 quiz set to `src/data/quiz-bank.ts` (gaps, cost-push meaning, divine-coincidence break, targeting rule, strict targeting cases).
- `2026-04-08`: Rewrote Lecture 5 to the new teaching standard:
  - Added a concrete step-by-step derivation of $\alpha_x^c = \alpha_x(1-\beta\rho_{\pi})$ using the slide-provided response form.
  - Expanded the state-contingent commitment FOC logic into an explicit derivation of the history-dependent targeting condition.
  - Kept only two embedded checkpoints and pointed most active recall to `/quizzes`.
- `2026-04-08`: Added an initial Lecture 5 quiz set to `src/data/quiz-bank.ts` (commitment meaning, simple-rule result, history dependence, and core traps).
- `2026-04-08`: Rewrote Lecture 6 to the new teaching standard:
  - Added a big-picture framing connecting Lecture 5 commitment gains to the time-inconsistency problem.
  - Expanded the inflation-bias derivation with explicit substitution and FOC steps + economic meaning per step.
  - Added a minimal timeline figure to clarify expectations timing (promise → expectations → temptation → equilibrium).
  - Kept only two embedded checkpoints and pointed most active recall to `/quizzes`.
- `2026-04-08`: Added an initial Lecture 6 quiz set to `src/data/quiz-bank.ts` (time inconsistency meaning, key assumption, inflation-bias equilibrium, output result, independence interpretation, traps).
- `2026-04-08`: Updated `.gitignore` to ignore local course-material inputs (`Lecture *`, `Problem sets`, `Exams`, `*.pdf`) to prevent accidental commits/pushes.
- `2026-04-08`: Created the first Git commits for the site source and pushed to `origin/main` (merged the remote initial README-only history).
- `2026-04-08`: Set local Git author identity for this repo to `EspzY` + GitHub noreply email (repo-local `git config`, not global).
