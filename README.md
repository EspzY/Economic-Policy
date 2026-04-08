# Economic Policy Study Site

An English study website for `GRA6631 Economic Policy`, built around the actual lecture slides, complementary notes, seminar sheets, and past exams stored in this repository.

## Goals

- turn fragmented course PDFs into a structured lecture-by-lecture study experience
- explain theory and derivations carefully enough for weaker-background students
- support active learning with checkpoints, hints, and progress tracking
- keep the project easy to maintain and extend as more modules are authored

## Stack

- Astro
- MDX
- TypeScript
- React islands for progress and quiz interactions
- KaTeX for math rendering

## Local Development

1. Install dependencies:

   ```powershell
   npm install
   ```

2. Start the dev server:

   ```powershell
   npm run dev
   ```

3. Build the static site:

   ```powershell
   npm run build
   ```

## Material Sync

The raw course PDFs stay in their original folders at the repository root.

Before `dev` and `build`, the project runs:

```powershell
npm run sync:materials
```

This script copies the source PDFs into `public/materials/` and generates a manifest at `src/generated/materials-manifest.json` so the web app can link to them without moving or altering the originals.

## Python / Conda Constraint

Do not rely on plain `python` being available on `PATH`.

If Python is needed for later extraction or OCR work, use:

```powershell
C:\Users\espen\anaconda3\Scripts\conda.exe run -n csvi_env python ...
```

The current scaffold avoids Python and uses Node for indexing/sync tasks.

## Current Scope

The initial implementation provides:

- site shell and navigation
- lecture-module architecture
- source-material linking
- foundational study pages
- progress-tracking skeleton
- first authored lecture modules

Detailed lecture coverage will be expanded incrementally and documented in `AGENTS.md`.

