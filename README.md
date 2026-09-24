# SenseiDoge

**Live:** https://senseidoge.vercel.app

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
- Progress is saved in the browser, and optionally synced across devices with an email sign-in link ("Sync my progress")

## Sync my progress (optional accounts)

Learners can sign in with an email link to keep progress in step across devices. It is off unless Supabase is configured:

1. Create a Supabase project and run `supabase/schema.sql` in its SQL Editor (creates the `progress` table with row-level security and a `delete_my_account` function).
2. In Supabase → Authentication → URL Configuration, set the Site URL to `https://senseidoge.vercel.app` and add redirect URLs for `https://senseidoge.vercel.app/**` and your preview domains.
3. Optional: in Authentication → Emails, use the SenseiDoge templates in `supabase/email-templates/`. Paste `magic-link.html` into **Magic Link** and `confirm-signup.html` into **Confirm signup**, and the matching `*.subject.txt` into each Subject. Each sends only the English or only the Chinese version, based on the learner's language (the app stores it as `lang` in the user's metadata). The `.en.html` / `.zh.html` files are the single-language versions for previewing and editing.
4. Set `SUPABASE_URL` and `SUPABASE_ANON_KEY` (the anon/public key, never the service_role key) as Vercel environment variables, then redeploy.

Progress still works fully without signing in; syncing merges devices safely (union of completed lessons, higher flashcard levels, combined score history).

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

## Deployment

The site is hosted on Vercel (project `senseidoge`) and connected to this GitHub repository:

- Every push to `main` deploys to production automatically (https://senseidoge.vercel.app).
- Pushes to other branches and pull requests get their own preview URL.
- `vercel.json` sets the build command (`node build.mjs`) and output directory (`dist`).

To deploy manually from your machine instead: `npx vercel deploy --prod`.

## Editing content

- Version history (footer → Version x.x): `CHANGELOG` in `src/30_app.js`; add a new entry at the top for each release

- Lessons: `src/10_d1.js` … `src/14_d5.js` (each task has `en` and `zh` HTML)
- Questions: `src/20_questions.js`, `src/22_questions2.js`, `src/25_questions3.js` (wrong-option notes: `src/24_notes*.js`)
- Flashcards, glossary, services, plan: `src/21_extras.js`, `src/23_services2.js`

Run `npm test` to check the content, then `npm run build`. Saved progress is keyed by question position, so only ever add new questions and flashcards at the end of the last file to keep existing progress valid.

## Credits

Craft by Eyevuhn.

## Disclaimer

Independent study material, not affiliated with or endorsed by Amazon Web Services. Always check the latest exam guide and AWS documentation before your exam.
