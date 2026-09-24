// Builds the study app from src/ into:
//   dist/index.html (+ icons, manifest)  for Vercel or any static host
//   senseidoge-artifact.html              fragment used for the Claude artifact preview
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const here = (p) => new URL(p, import.meta.url);
const read = (f) => readFileSync(here(`./src/${f}`), 'utf8');

const mark = 'data:image/webp;base64,' + readFileSync(here('./src/assets/mark-96.webp')).toString('base64');
const shell = read('00_shell.html').replaceAll('__MARK__', mark);
const data = ['10_d1.js', '11_d2.js', '12_d3.js', '13_d4.js', '14_d5.js', '20_questions.js', '22_questions2.js', '24_notes.js', '24_notes2.js', '25_questions3.js', '21_extras.js', '26_cards2.js', '23_services2.js', '31_merge.js'].map(read).join('\n');
const pkg = JSON.parse(readFileSync(here('./package.json'), 'utf8'));
const appVersion = pkg.version.split('.').slice(0, 2).join('.');
// "Sync my progress" is switched on when Supabase settings are present at build time (Vercel env vars).
const sbUrl = (process.env.SUPABASE_URL || '').trim(), sbKey = (process.env.SUPABASE_ANON_KEY || '').trim();
if (/service_role/.test(sbKey)) throw new Error('SUPABASE_ANON_KEY looks like a service_role key. Use the anon (public) key only.');
const appSrc = read('30_app.js').replace('__APP_VERSION__', appVersion);
const app = appSrc.replace('__SB_URL__', sbUrl).replace('__SB_KEY__', sbKey);
const appNoSync = appSrc.replace('__SB_URL__', '').replace('__SB_KEY__', ''); // Claude artifact preview cannot reach Supabase

for (const src of [data, app]) {
  if (src.includes('</script')) throw new Error('A source file contains "</script", which would break the inline script.');
}
const scripts = `<script>\n${data}\n</script>\n<script>\n${app}\n</script>\n`;
const scriptsNoSync = `<script>\n${data}\n</script>\n<script>\n${appNoSync}\n</script>\n`;

const cut = shell.indexOf('<div class="shell">');
if (cut < 0) throw new Error('Could not find the shell markup in src/00_shell.html.');
const head = shell.slice(0, cut);
const body = shell.slice(cut);

const full = `<!doctype html>
<html lang="en" data-theme="light">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#F5F5F2">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
<link rel="icon" type="image/png" sizes="64x64" href="/favicon-64.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/manifest.webmanifest">
${head}</head>
<body>
${body}
${scripts}<script>
if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
  addEventListener('load', function(){ navigator.serviceWorker.register('/sw.js').catch(function(){}); });
}
</script>
</body>
</html>
`;

const manifest = {
  name: 'SenseiDoge',
  short_name: 'SenseiDoge',
  description: 'Bilingual study app for the AWS Certified AI Practitioner (AIF-C01) exam.',
  start_url: '/',
  display: 'standalone',
  background_color: '#F5F5F2',
  theme_color: '#F5F5F2',
  icons: [
    { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    { src: '/icon-512.png', sizes: '512x512', type: 'image/png' }
  ]
};

const buildId = createHash('sha256').update(full).digest('hex').slice(0, 10);
const sw = `// SenseiDoge offline support. Network first for the page (so updates arrive), cache fallback when offline.
const CACHE = 'senseidoge-${appVersion}-${buildId}';
const CORE = ['/', '/index.html', '/manifest.webmanifest', '/favicon-32.png', '/favicon-64.png', '/apple-touch-icon.png', '/icon-192.png', '/icon-512.png'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then((res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put('/index.html', copy)); return res; })
      .catch(() => caches.match('/index.html')));
    return;
  }
  if (url.origin === location.origin || url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.match(req).then((hit) => {
      const net = fetch(req).then((res) => { if (res && (res.ok || res.type === 'opaque')) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); } return res; }).catch(() => hit);
      return hit || net;
    }));
  }
});
`;
mkdirSync(here('./dist/'), { recursive: true });
writeFileSync(here('./dist/sw.js'), sw);
writeFileSync(here('./dist/index.html'), full);
writeFileSync(here('./dist/manifest.webmanifest'), JSON.stringify(manifest, null, 2));
for (const f of ['favicon-32.png', 'favicon-64.png', 'apple-touch-icon.png', 'icon-192.png', 'icon-512.png']) {
  copyFileSync(here(`./src/assets/${f}`), here(`./dist/${f}`));
}
writeFileSync(here('./senseidoge-artifact.html'), shell + '\n' + scriptsNoSync);
console.log(`Built dist/index.html (${(full.length / 1024).toFixed(0)} KB) with icons and manifest, and senseidoge-artifact.html · sync ${sbUrl && sbKey ? 'ON' : 'off (no SUPABASE_URL / SUPABASE_ANON_KEY)'}`);
