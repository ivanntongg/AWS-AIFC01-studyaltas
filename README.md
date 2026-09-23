# SenseiDoge

SenseiDoge is a bilingual (English / 简体中文) study app for the **AWS Certified AI Practitioner (AIF-C01)** exam, mapped to the official exam guide **v1.1 (April 2026)**.

- 14 lessons, one per task statement in the exam guide, each listing the objectives it covers
- 215 practice questions in all four official formats (154 multiple choice, 21 multiple response, 18 ordering, 22 matching), each tagged to its lesson, with an explanation for the right answer and a note on why every wrong option is wrong
- Practice by domain, lesson or single question; retry missed questions; timed 50-question quick mock
- Real exam simulation: 65 questions (50 scored + 15 unscored) in 90 minutes, one question per screen, flag for review, review screen, End exam with confirmation, and an estimated 100–1,000 scaled score
- Progress page: score history chart, accuracy by domain and a "focus next" suggestion
- 135 flashcards with spaced repetition (levels 1–5: 1, 3, 7, 14 and 30 days)
- Search across lessons, questions, flashcards, services and glossary (press `/` or Ctrl+K)
- Service map with exam-scope badges, glossary and a 7-day plan
- Light/dark theme, English/Chinese, works offline once visited (on the deployed site)
- Progress is saved in the browser (localStorage); no backend, no accounts

## Project layout

```
src/                 source: shell + styles, lesson content per domain, questions, notes, extras, app logic
build.mjs            bundles src/ into dist/ (page, icons, manifest, offline service worker)
test.mjs             content checks: answer keys, translations, wrong-option notes, formats
dist/index.html      build output that gets deployed
serve.mjs            tiny local server for previewing dist/
vercel.json          Vercel settings (build command + output directory)
```

## Run locally

Requires Node.js 18 or later.

```bash
npm run dev
```

Then open http://localhost:4173.

## Deploy to Vercel

Option A: Vercel CLI

```bash
npm i -g vercel
vercel
vercel --prod
```

Option B: Git. Push this folder to a GitHub repository, then choose **Add New → Project** in Vercel and import the repository. `vercel.json` already sets the build command (`node build.mjs`) and output directory (`dist`), so no extra settings are needed.

## Editing content

- Lessons: `src/10_d1.js` … `src/14_d5.js` (each task has `en` and `zh` HTML)
- Questions: `src/20_questions.js`, `src/22_questions2.js`, `src/25_questions3.js` (wrong-option notes: `src/24_notes*.js`)
- Flashcards, glossary, services, plan: `src/21_extras.js`, `src/23_services2.js`

Run `npm test` to check the content, then `npm run build`. Saved progress is keyed by question position, so only ever add new questions and flashcards at the end of the last file to keep existing progress valid.

## Credits

Craft by Eyevuhn.

## Disclaimer

Independent study material, not affiliated with or endorsed by Amazon Web Services. Always check the latest exam guide and AWS documentation before your exam.
