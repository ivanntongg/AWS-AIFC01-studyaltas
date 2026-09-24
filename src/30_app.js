(function(){
'use strict';
var A = window.AIF;
var root = document.documentElement;
/* progress keys that "Sync my progress" carries between devices (display prefs like theme stay per device) */
var SYNC_KEYS = ['done', 'task', 'srs', 'missed', 'seen', 'stats', 'hist', 'best', 'bestSim', 'plan', 'exam', 'lang', 'cardMode', 'known'];
var store = {
  get: function(k, d){ try { var v = localStorage.getItem('aifc01:' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set: function(k, v){
    try {
      localStorage.setItem('aifc01:' + k, JSON.stringify(v));
      if (SYNC_KEYS.indexOf(k) >= 0) {
        var ts = {}; try { ts = JSON.parse(localStorage.getItem('aifc01:_ts') || '{}') || {}; } catch (e2) {}
        ts[k] = Date.now(); localStorage.setItem('aifc01:_ts', JSON.stringify(ts));
        syncDirty();
      }
    } catch (e) {}
  }
};
var ESC = {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'};
function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return ESC[c]; }); }
function fmt(s, o){ return s.replace(/\{(\w+)\}/g, function(m, k){ return (k in o) ? o[k] : m; }); }
function shuffle(a){ a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; } return a; }
function dc(id){ return 'var(--' + id + ')'; }
var APP_VERSION = '__APP_VERSION__';
var LET = 'ABCDEFGH';
var NUMW = ['', 'ONE', 'TWO', 'THREE', 'FOUR'];
var DOM = {}; A.domains.forEach(function(d){ DOM[d.id] = d; });
var ORDER = []; A.domains.forEach(function(d){ d.tasks.forEach(function(t){ ORDER.push(t); }); });
var VIEWS = ['overview','course','cards','exam','services','glossary','plan'];
var CATC = {genai:'var(--d2)', ml:'var(--d1)', ai:'var(--d3)', infra:'var(--d4)', data:'var(--accent-text)', core:'var(--ink2)', sec:'var(--d5)', gov:'var(--muted)'};

var SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"/></svg>';
var MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7z"/></svg>';

var T = {
en: {
  overview:'Overview', course:'Course', cards:'Flashcards', exam:'Practice exam', services:'Services', glossary:'Glossary', plan:'7-day plan',
  sub:'AWS Certified AI Practitioner · exam guide v1.1',
  langBtn:'中文', langLabel:'切换到中文', langCta:'阅读中文版：课程、练习题和闪卡都有完整的简体中文。', langCtaLang:'zh-CN', openMenu:'Open menu', closeMenu:'Close menu', toLight:'Switch to light theme', toDark:'Switch to dark theme',
  eyebrow:'AWS Certified AI Practitioner · AIF-C01',
  heroH:'Every objective in the AIF-C01 exam guide, <em>explained and drilled</em>.',
  heroP:'14 lessons mapped one-to-one to the task statements in exam guide v1.1, a {q}-question bank in all four official formats, {c} flashcards, a quick 50-question mock and a full 65-question exam simulation. Switch between English and 中文 at any time.',
  reviewLesson:'Review lesson: Task', practiceTask:'Practice this lesson\'s {n} questions', missedChip:'Missed', practiceMissed:'Practice the {n} you missed', reviewMissed:'Review {n} missed questions',
  noMissed:'No missed questions yet. Anything you answer wrong in practice or a mock exam collects here until you get it right.', taskChip:'Task {k}',
  scopeL:'Listed in guide', scopeF:'Part of a listed service', scopeC:'Context only', scopeOnly:'Only services in the guide\'s scope',
  f1:'questions', f1s:'50 scored + 15 unscored', f2:'minutes', f2s:'one sitting', f3:'to pass', f3s:'scaled score, 100–1,000', f4:'task statements', f4s:'across 5 domains',
  start:'Start the course', cont:'Continue with Task ', review:'Review the course', mock:'Take the exam simulation',
  weights:'Domain weights', weightsP:'Share of the 50 scored questions. Domains 2 and 3 together are more than half of the exam.',
  qApprox:'≈ {n} questions', tasksDone:'{a}/{b} lessons done',
  qtypes:'Question types',
  qtypesList:[['MC','Multiple choice','One correct answer and three distractors.'],['MR','Multiple response','Two or more correct out of five or more options. Pick all of them to score.'],['ORD','Ordering','Put 3–5 responses in the correct sequence.'],['MATCH','Matching','Match responses to 3–7 prompts. Every pair must be right.']],
  scoring:'Scoring rules',
  scoringList:['Scaled score from 100 to 1,000; <b>700 passes</b>.','Compensatory scoring: you only need to pass overall, not each domain.','15 unscored questions are mixed in and not marked.','<b>No penalty for guessing.</b> Unanswered questions count as wrong, so answer every one.','Multiple response, ordering and matching give no partial credit.'],
  how:'How to use this course',
  howList:['Work through the <b>Course</b> in order. Each lesson opens with the official objectives it covers, then explains them with tables, worked examples, "Remember" rules and exam traps.','Mark each lesson done; this page tracks your progress by domain.','Drill the <b>Flashcards</b> daily and mark the ones you know so the deck shrinks.','After each domain, practice its questions in <b>Practice exam</b>. Before booking, sit at least two timed mock exams.','Keep the <b>Services</b> map and <b>Glossary</b> open for quick look-ups. Both search in English and Chinese.'],
  lessons:'Lessons', search:'Search lessons…', jump:'Jump to a lesson', domain:'Domain', task:'Task',
  objsH:'Exam guide objectives', objsS:'Numbered as in the official guide',
  markDone:'Mark lesson as done', done:'Done ✓', prev:'←', next:'→',
  cardsH:'Flashcards', cardsP0:'Tap the card to flip it. Mark the cards you know; switch on "Hide known cards" to focus on the rest.',
  cardsP:'Spaced repetition: cards you know come back after 1, 3, 7, 14 and then 30 days; cards you miss come back later in this round. Tap a card to flip it.',
  modeDue:"Today's review", modeAll:'Browse all', dueEmpty:'Nothing is due right now. Come back tomorrow, or browse all cards.', roundDone:'Round complete. Nice work.', newRound:'Start another round', browseAll:'Browse all cards',
  boxNew:'New card', boxN:'Level {b} of 5', mastered:'{a} of {b} mastered', dueToday:'{n} due today', ofQueue:'{i} of {n} left in this round',
  whyWrong:'Why the other options are wrong', qChip:'Single question',
  progH:'Your progress', progP:'Saved in this browser. Every quick mock and exam simulation adds a point.', progEmpty:'Take a quick mock or an exam simulation and your score history will appear here.',
  chartT:'Score by attempt', passLine:'≈ pass (700)', legSim:'Exam simulation', legMock:'Quick mock', lastAvg:'Average of your last {n}: {p}%',
  accT:'Accuracy by domain', accP:'Every answer you have checked or submitted, across practice, mocks and simulations.', accNone:'Not enough answers yet', focusNext:'Focus next: Domain {n}', practiceIt:'Practice it',
  tableView:'Show as table', colN:'#', colDate:'Date', colMode:'Mode', colScore:'Score', colEst:'Est. score',
  stLessons:'lessons done', stCards:'cards mastered', stDue:'cards due today', stMissed:'missed questions',
  searchBtn:'Search everything', searchPh:'Search lessons, questions, flashcards, services, glossary…', sLessons:'Lessons', sQuestions:'Questions', sCards:'Flashcards', sServices:'Services', sGloss:'Glossary', sNone:'No results for “{q}”.', sHint:'Type at least 2 characters. Tip: press / anywhere to search.', sMore:'+{n} more', skip:'Skip to content',
  liveOk:'Correct.', liveNo:'Not quite. The answer is {a}.',
  all:'All', hideKnown:'Hide known cards', question:'Question', answer:'Answer', tapFlip:'Tap, or press Space, to flip · ← → to move',
  know:'I know this', learning:'Still learning', shuffle:'Shuffle', unshuffle:'Original order', knownOf:'{a} of {b} known',
  noCards:'Every card in this set is marked as known. Turn off "Hide known cards" to review them again.',
  examH:'Practice exam', examP:'{n} original questions written against the exam guide, in all four official formats. Options are shuffled every session. Practice by domain or lesson, retry your missed questions, take a quick 50-question mock, or sit a full 65-question simulation of the real exam.',
  simMode:'Exam simulation · 65', simH:'Real exam simulation',
  simList:['65 questions in 90 minutes, like the real AIF-C01. 50 are scored and weighted like the exam (D1 10 · D2 12 · D3 14 · D4 7 · D5 7); 15 are unscored, and you won\'t know which.','One question per screen. Move with Previous and Next (or ← →), flag questions to revisit, and use the review screen to see what is unanswered or flagged.','No domain or topic hints, and no answers until the exam is over.','Use <b>End exam</b> to finish early. You\'ll be asked to confirm, and unanswered questions count as wrong.','Your result shows an estimated scaled score (100–1,000; 700 passes) and a breakdown by domain. The timer keeps running if you close or refresh the page.'],
  simStart:'Start exam simulation', simBest:'Best estimated score so far', qOf:'Question {n} of {t}',
  prevQ:'← Previous', nextQ:'Next →', toReview:'Review answers →', flag:'Flag for review', flagged:'Flagged', reviewBtn:'Review', endExam:'End exam',
  revH:'Review your answers', revP:'{a} answered · {u} unanswered · {f} flagged. Select a question number to go back to it.', revAns:'Answered', revUn:'Unanswered', revFl:'Flagged',
  backToQ:'← Return to question {n}', submitExam:'Submit exam', simKeys:'Tip: use ← and → to move between questions.',
  dlgEndT:'End the exam now?', dlgEndP:'You have answered {a} of {t} questions. If you end now, your answers are scored, the {u} unanswered questions count as wrong, and you cannot go back into the exam.', dlgEndOk:'End exam', dlgCancel:'Continue exam',
  dlgSubT:'Submit your exam?', dlgSubP:'You still have {u} unanswered and {f} flagged questions. Unanswered questions count as wrong. After you submit, you cannot change any answers.', dlgSubPAll:'All {t} questions are answered. After you submit, you cannot change any answers.', dlgSubOk:'Submit exam', dlgKeep:'Keep reviewing',
  simResH:'Exam result', estScore:'estimated scaled score', passEst:'Likely pass', failEst:'Likely fail',
  simLine:'Scored questions: {c} of {n} correct ({p}%). The 15 unscored questions are not counted.', howEnd:'You ended the exam early.', howTime:'Time ran out, so the exam was submitted automatically.',
  estNote:'AWS does not publish how raw scores convert to the scaled score. This estimate assumes about 72% correct ≈ 700, so treat it as a guide only.',
  unscoredTag:'Unscored', rfWrong:'Wrong', newSim:'Start a new simulation',
  practice:'Practice by domain', mockMode:'Quick mock · 50', check:'Check answer', correct:'Correct.', incorrect:'Not quite.', notAnswered:'Not answered.',
  answerIs:'Answer:', correctOrder:'Correct order:', single:'Choose ONE', chooseN:'Choose {n}', orderT:'Ordering', matchT:'Matching',
  resetOrder:'Reset order', orderHint:'Click the items in the correct order.', select:'Select…',
  statsLine:'{c} checked · {r} correct', clearTxt:'Clear', qbNav:'Question navigator', qbPos:'Question {k} of {n}', qbAns:'{a} answered', qbNext:'Next question', qbNextS:'Next', qbAllDone:'All done · back to top', qbTop:'Back to top', qbGo:'Go to question number', qbGoPh:'Go to #', qbGoErr:'Enter 1–{n}', resetPractice:'Clear answers',
  mockH:'Timed mock exam', mockList:['50 questions drawn at random, weighted like the real exam: D1 10 · D2 12 · D3 14 · D4 7 · D5 7.','Questions you have not seen yet are drawn first, so repeat mocks stay fresh.','A 90-minute timer that keeps running if you close or refresh the page. Answers are revealed only after you submit.','Your result is broken down by domain, and every miss is added to your Missed list.'],
  startMock:'Start mock exam', best:'Best mock score so far', timeLeft:'Time left', answered:'Answered', submit:'Submit exam', confirmSubmit:'{n} unanswered. Submit anyway?',
  result:'Your result', resultLine:'{c} of {n} correct', target:'Aim for 80% or more on mock exams before booking. The real exam reports a scaled score, so treat this percentage as a guide.', retake:'Start a new mock exam', byDomain:'By domain',
  svcH:'Service map', svcP:'The AWS services this exam leans on, what each does, and the question cue that points to it.', svcSearch:'Filter services…',
  cat:{all:'All', genai:'Generative AI', ml:'SageMaker AI', ai:'AI services', infra:'Infrastructure', data:'Data & vectors', core:'Core AWS', sec:'Security', gov:'Governance'},
  svcCol:['Service','What it does','Pick it when'],
  glH:'Glossary', glP:'{n} exam terms with short definitions. Search in English or Chinese.', glSearch:'Search terms…', none:'No matches.',
  planH:'7-day plan', planP:'A one-week sprint that follows the domain weights, with two days for Domain 3, the largest. Tick items as you finish them; each links to the right lesson or drill.', day:'Day', go:'Open',
  foot:'Independent study material', ver:'Version {v}', logOpen:'Version history', logT:'Version history', logNow:'Current', aboutOpen:'About this site and disclaimer',
  syncBtn:'Sync my progress', syncT:'Sync my progress', syncP:'Sign in with your email to keep your lessons, flashcards, missed questions and exam history in step on every device. No password: we email you a one-time sign-in link.',
  emailL:'Email address', sendLink:'Email me a sign-in link', sending:'Sending…', sentH:'Check your email', sentTo:'We sent a sign-in link to', sentHow:'Open the link on the device you want to sign in on. It can take a minute to arrive, so check spam or promotions too. The link works once and expires after an hour.', resend:'Resend link', resendIn:'Resend in {n}s', otherEmail:'Use a different email', resent:'A new link is on its way. Use the newest email; earlier links stop working.', waitN:'Please wait {n} seconds before sending another link.', tooMany:'Too many sign-in emails were sent recently. Please try again in a little while.', linkErr:'Could not send the link: {m}', badEmail:'Enter a valid email address.',
  syncPriv:'Only your email address and your study progress are stored, and only to sync them. You can delete both at any time.', signedAs:'Signed in as {e}', stSynced:'All changes synced · {t}', stPending:'Saving changes…', stErr:'Sync paused ({m}). Your progress is safe on this device and will sync when possible.', syncOffline:'You are offline. Changes are saved on this device and will sync when you reconnect.',
  justNow:'just now', minAgo:'{n} min ago', syncNow:'Sync now', signOut:'Sign out', signOutNote:'Signing out keeps your progress on this device.', delAcct:'Delete my account and synced data', delAsk:'This permanently deletes your account and the progress saved online. Progress on this device stays. Delete?', delYes:'Delete permanently', cancel:'Cancel', deleted:'Your account and synced data were deleted.',
  linkExpired:'That sign-in link did not work ({m}). Send yourself a new one.', syncCta:'Studying on more than one device? Keep your progress in step.', syncCtaBtn:'Sync my progress',
  aboutSync:'Your progress is stored in this browser. If you sign in to sync it, your email address and progress are also stored in our database (hosted by Supabase) so they follow you across devices. You can delete them at any time from "Sync my progress".',
  brand:'SenseiDoge', aboutT:'About SenseiDoge', aboutClose:'Close',
  aboutP:['SenseiDoge is <b>independent study material</b> for the AWS Certified AI Practitioner (AIF-C01) exam. It is <b>not affiliated with, endorsed by or sponsored by</b> Amazon Web Services (AWS) or Amazon.com, Inc.',
    'AWS, Amazon Web Services, AWS Certified AI Practitioner, Amazon Bedrock, Amazon SageMaker and all related names and logos are trademarks of Amazon.com, Inc. or its affiliates. They are used here only to identify the exam and the services being studied.',
    'Lessons follow the public AIF-C01 exam guide, version 1.1 (April 2026). All practice questions are original and are not taken from the real exam. Check the latest exam guide and AWS documentation before you sit the exam.',
    'Your progress is stored only in this browser. Nothing is sent to a server.']
},
zh: {
  overview:'总览', course:'课程', cards:'闪卡', exam:'模拟练习', services:'服务速查', glossary:'术语表', plan:'7 天计划',
  sub:'AWS 认证 AI 从业者 · 考纲 v1.1',
  langBtn:'EN', langLabel:'Switch to English', langCta:'Prefer English? Every lesson, question and flashcard is available in English.', langCtaLang:'en', openMenu:'打开菜单', closeMenu:'关闭菜单', toLight:'切换到浅色主题', toDark:'切换到深色主题',
  eyebrow:'AWS 认证 AI 从业者 · AIF-C01',
  heroH:'AIF-C01 考纲的每一个目标，<em>讲透并练熟</em>。',
  heroP:'14 节课与考纲 v1.1 的任务陈述一一对应；{q} 道题覆盖全部四种官方题型；{c} 张闪卡；还有 50 题快速模考和 65 题真实考试模拟。随时可在 English 与中文之间切换。',
  reviewLesson:'复习课程：任务', practiceTask:'练习本课的 {n} 道题', missedChip:'错题', practiceMissed:'练习答错的 {n} 道题', reviewMissed:'复习 {n} 道错题',
  noMissed:'暂无错题。练习或模拟考试中答错的题会汇总到这里，直到你答对为止。', taskChip:'任务 {k}',
  scopeL:'考纲列出', scopeF:'所列服务的功能', scopeC:'仅作背景', scopeOnly:'只看考纲范围内的服务',
  f1:'道题', f1s:'50 道计分 + 15 道不计分', f2:'分钟', f2s:'一次完成', f3:'分及格', f3s:'换算分 100–1,000', f4:'个任务陈述', f4s:'分布在 5 个领域',
  start:'开始学习', cont:'继续学习任务 ', review:'复习课程', mock:'参加真实考试模拟',
  weights:'领域权重', weightsP:'各领域在 50 道计分题中的占比。领域 2 和领域 3 合计超过一半。',
  qApprox:'约 {n} 道题', tasksDone:'已完成 {a}/{b} 课',
  qtypes:'题型',
  qtypesList:[['单选','单项选择','一个正确答案和三个干扰项。'],['多选','多项选择','五个或以上选项中有两个或以上正确，必须全部选对才得分。'],['排序','排序题','把 3–5 个选项按正确顺序排列。'],['匹配','匹配题','把选项与 3–7 个题干一一匹配，每一对都要正确。']],
  scoring:'计分规则',
  scoringList:['换算分 100 到 1,000，<b>700 分及格</b>。','补偿式计分：只需总分及格，不要求每个领域都及格。','混有 15 道不计分题，且不做标记。','<b>猜错不扣分。</b>未作答按错误计，所以每题都要作答。','多选、排序和匹配题没有部分得分。'],
  how:'如何使用本课程',
  howList:['按顺序学习<b>课程</b>。每节课先列出所覆盖的官方目标，再用表格、实例讲解、“考试必记”和考试陷阱逐一讲透。','每学完一课就标记完成，本页会按领域跟踪进度。','每天刷<b>闪卡</b>，把已掌握的标记出来，卡组会越来越少。','每学完一个领域，就在<b>模拟练习</b>中练习该领域题目。报名前至少完成两次限时模拟考试。','随时打开<b>服务速查</b>和<b>术语表</b>，二者都支持中英文搜索。'],
  lessons:'课程目录', search:'搜索课程内容…', jump:'跳转到课程', domain:'领域', task:'任务',
  objsH:'考纲目标', objsS:'编号与官方考纲一致',
  markDone:'标记本课已完成', done:'已完成 ✓', prev:'←', next:'→',
  cardsH:'闪卡', cardsP0:'点击卡片翻面。把已掌握的卡片标记出来；打开“隐藏已掌握”可专注于剩下的卡片。',
  cardsP:'间隔重复：已掌握的卡片会在 1、3、7、14 天后，之后每 30 天再次出现；答不上来的卡片会在本轮稍后再次出现。点击卡片翻面。',
  modeDue:'今日复习', modeAll:'浏览全部', dueEmpty:'目前没有需要复习的卡片。明天再来，或浏览全部卡片。', roundDone:'本轮完成，做得好。', newRound:'再来一轮', browseAll:'浏览全部卡片',
  boxNew:'新卡片', boxN:'第 {b}/5 级', mastered:'已掌握 {a}/{b}', dueToday:'今日待复习 {n} 张', ofQueue:'本轮剩余 {n} 张 · 第 {i} 张',
  whyWrong:'其他选项为什么错', qChip:'单道题',
  progH:'学习进度', progP:'保存在当前浏览器中。每次快速模考和考试模拟都会记录一个点。', progEmpty:'完成一次快速模考或考试模拟后，成绩记录就会显示在这里。',
  chartT:'每次成绩', passLine:'≈ 及格 (700)', legSim:'考试模拟', legMock:'快速模考', lastAvg:'最近 {n} 次平均：{p}%',
  accT:'各领域正确率', accP:'你在练习、模考和模拟中核对或提交过的所有答案。', accNone:'作答数量不足', focusNext:'下一步重点：领域 {n}', practiceIt:'去练习',
  tableView:'以表格显示', colN:'#', colDate:'日期', colMode:'方式', colScore:'成绩', colEst:'估算分',
  stLessons:'课已完成', stCards:'张卡已掌握', stDue:'张卡今日待复习', stMissed:'道错题',
  searchBtn:'全站搜索', searchPh:'搜索课程、题目、闪卡、服务、术语……', sLessons:'课程', sQuestions:'题目', sCards:'闪卡', sServices:'服务', sGloss:'术语', sNone:'没有找到“{q}”的结果。', sHint:'至少输入 2 个字符。提示：在任意位置按 / 即可搜索。', sMore:'还有 {n} 条', skip:'跳到正文',
  liveOk:'回答正确。', liveNo:'回答错误。正确答案是 {a}。',
  all:'全部', hideKnown:'隐藏已掌握', question:'问题', answer:'答案', tapFlip:'点击或按空格翻面 · ← → 切换',
  know:'已掌握', learning:'还在学', shuffle:'打乱顺序', unshuffle:'恢复顺序', knownOf:'已掌握 {a}/{b}',
  noCards:'本组所有卡片都已标记为已掌握。关闭“隐藏已掌握”即可重新复习。',
  examH:'模拟练习', examP:'{n} 道依据考纲原创的题目，覆盖全部四种官方题型，选项每次都会打乱。可按领域或课程练习、重做错题、做 50 题快速模考，或参加 65 题的真实考试模拟。',
  simMode:'真实考试模拟 · 65', simH:'真实考试模拟',
  simList:['与真实 AIF-C01 一样：90 分钟 65 道题。其中 50 道计分，按考试权重分配（D1 10 · D2 12 · D3 14 · D4 7 · D5 7）；15 道不计分，且你不知道是哪几道。','每屏一道题。用“上一题/下一题”（或 ← →）切换，可标记待复查的题目，并在检查页面查看未答和已标记的题。','不显示领域或主题提示，考试结束前不显示答案。','可用<b>结束考试</b>提前交卷。系统会要求你确认，未答题按错误计。','成绩会显示估算的换算分（100–1,000，700 分及格）和各领域得分。关闭或刷新页面后计时继续。'],
  simStart:'开始考试模拟', simBest:'目前最佳估算分', qOf:'第 {n} 题，共 {t} 题',
  prevQ:'← 上一题', nextQ:'下一题 →', toReview:'检查答案 →', flag:'标记待复查', flagged:'已标记', reviewBtn:'检查', endExam:'结束考试',
  revH:'检查你的答案', revP:'已答 {a} 题 · 未答 {u} 题 · 已标记 {f} 题。点击题号即可返回该题。', revAns:'已答', revUn:'未答', revFl:'已标记',
  backToQ:'← 返回第 {n} 题', submitExam:'交卷', simKeys:'提示：可用 ← 和 → 在题目之间切换。',
  dlgEndT:'现在结束考试？', dlgEndP:'你已回答 {a}/{t} 题。现在结束的话，已作答的题目会被评分，{u} 道未答题按错误计，且无法再返回考试。', dlgEndOk:'结束考试', dlgCancel:'继续考试',
  dlgSubT:'确认交卷？', dlgSubP:'还有 {u} 道未答、{f} 道已标记的题。未答题按错误计。交卷后将无法修改任何答案。', dlgSubPAll:'全部 {t} 题均已作答。交卷后将无法修改任何答案。', dlgSubOk:'确认交卷', dlgKeep:'继续检查',
  simResH:'考试结果', estScore:'估算换算分', passEst:'预计通过', failEst:'预计未通过',
  simLine:'计分题：答对 {c}/{n} 题（{p}%）。15 道不计分题未计入。', howEnd:'你提前结束了考试。', howTime:'时间到，已自动交卷。',
  estNote:'AWS 未公布原始分如何换算为换算分。此估算假设答对约 72% ≈ 700 分，仅供参考。',
  unscoredTag:'不计分', rfWrong:'答错', newSim:'开始新的模拟',
  practice:'按领域练习', mockMode:'快速模考 · 50', check:'核对答案', correct:'回答正确。', incorrect:'回答错误。', notAnswered:'未作答。',
  answerIs:'答案：', correctOrder:'正确顺序：', single:'单选', chooseN:'选择 {n} 项', orderT:'排序题', matchT:'匹配题',
  resetOrder:'重新排序', orderHint:'按正确顺序依次点击各项。', select:'请选择…',
  statsLine:'已核对 {c} 题 · 答对 {r} 题', clearTxt:'清除', qbNav:'题目导航', qbPos:'第 {k} / {n} 题', qbAns:'已答 {a} 题', qbNext:'下一题', qbNextS:'下一题', qbAllDone:'全部完成 · 回到顶部', qbTop:'回到顶部', qbGo:'跳转到第几题', qbGoPh:'跳至题号', qbGoErr:'请输入 1–{n}', resetPractice:'清空答案',
  mockH:'限时模拟考试', mockList:['随机抽取 50 题，按真实考试权重分配：D1 10 · D2 12 · D3 14 · D4 7 · D5 7。','优先抽取你没做过的题，重复模考也能保持新鲜。','90 分钟计时，关闭或刷新页面后计时继续。交卷后才显示答案。','成绩按领域拆分，每道错题都会加入“错题”列表。'],
  startMock:'开始模拟考试', best:'目前最佳成绩', timeLeft:'剩余时间', answered:'已答', submit:'交卷', confirmSubmit:'还有 {n} 题未答，仍要交卷？',
  result:'你的成绩', resultLine:'答对 {c}/{n} 题', target:'建议模拟考试稳定在 80% 以上再报名。真实考试给出的是换算分，此百分比仅供参考。', retake:'开始新的模拟考试', byDomain:'各领域',
  svcH:'服务速查', svcP:'本考试常考的 AWS 服务、它们的作用，以及题目中指向它们的关键线索。', svcSearch:'筛选服务…',
  cat:{all:'全部', genai:'生成式 AI', ml:'SageMaker AI', ai:'AI 服务', infra:'基础设施', data:'数据与向量', core:'核心服务', sec:'安全', gov:'治理'},
  svcCol:['服务','作用','何时选它'],
  glH:'术语表', glP:'{n} 个考试术语及简明定义，支持中英文搜索。', glSearch:'搜索术语…', none:'没有匹配结果。',
  planH:'7 天计划', planP:'按领域权重安排的一周冲刺计划，最大的领域 3 安排两天。完成一项勾选一项；每项都直接链接到对应课程或练习。', day:'第', go:'打开',
  foot:'独立学习资料', ver:'版本 {v}', logOpen:'版本记录', logT:'版本记录', logNow:'当前版本', aboutOpen:'关于本站及免责声明',
  syncBtn:'同步我的进度', syncT:'同步我的进度', syncP:'用邮箱登录后，你的课程、闪卡、错题和考试记录会在所有设备间保持同步。无需密码：我们会发送一次性登录链接到你的邮箱。',
  emailL:'邮箱地址', sendLink:'发送登录链接', sending:'正在发送……', sentH:'查收你的邮箱', sentTo:'我们已将登录链接发送至', sentHow:'请在需要登录的设备上打开该链接。邮件可能需要一分钟左右才能送达，也请查看垃圾邮件或推广邮件。链接只能使用一次，一小时后失效。', resend:'重新发送链接', resendIn:'{n} 秒后可重新发送', otherEmail:'换一个邮箱', resent:'新的链接已发送。请使用最新的邮件，之前的链接将失效。', waitN:'请等待 {n} 秒后再发送新的链接。', tooMany:'最近发送的登录邮件过多，请稍后再试。', linkErr:'无法发送链接：{m}', badEmail:'请输入有效的邮箱地址。',
  syncPriv:'我们只保存你的邮箱地址和学习进度，且仅用于同步。你可以随时删除。', signedAs:'已登录：{e}', stSynced:'所有更改已同步 · {t}', stPending:'正在保存更改……', stErr:'同步暂停（{m}）。你的进度仍安全保存在本设备上，恢复后会自动同步。', syncOffline:'你目前处于离线状态。更改已保存在本设备上，重新联网后会自动同步。',
  justNow:'刚刚', minAgo:'{n} 分钟前', syncNow:'立即同步', signOut:'退出登录', signOutNote:'退出登录后，本设备上的进度仍会保留。', delAcct:'删除我的账户和已同步数据', delAsk:'这将永久删除你的账户以及保存在网上的进度，本设备上的进度会保留。确定删除吗？', delYes:'永久删除', cancel:'取消', deleted:'你的账户和已同步数据已删除。',
  linkExpired:'该登录链接无效（{m}）。请重新发送一个。', syncCta:'在多台设备上学习？让进度保持同步。', syncCtaBtn:'同步我的进度',
  aboutSync:'你的学习进度保存在当前浏览器中。如果你登录并开启同步，你的邮箱地址和学习进度也会保存在我们的数据库（由 Supabase 托管）中，以便在不同设备间同步。你可以随时在“同步我的进度”中删除。',
  brand:'考汪', aboutT:'关于考汪', aboutClose:'关闭',
  aboutP:['考汪是 AWS 认证 AI 从业者 (AIF-C01) 考试的<b>独立学习资料</b>，与 Amazon Web Services (AWS) 或 Amazon.com, Inc. <b>无任何隶属、背书或赞助关系</b>。',
    'AWS、Amazon Web Services、AWS Certified AI Practitioner、Amazon Bedrock、Amazon SageMaker 及所有相关名称和标志均为 Amazon.com, Inc. 或其关联公司的商标，本站仅用于指明所学习的考试和服务。',
    '课程内容依据公开的 AIF-C01 考纲 1.1 版（2026 年 4 月）编写。所有练习题均为原创，并非真实考题。参加考试前请查阅最新考纲和 AWS 文档。',
    '你的学习进度只保存在当前浏览器中，不会发送到任何服务器。']
}
};

/* ---------------- state ---------------- */
var navLang = (navigator.language || '').toLowerCase();
var S = {
  lang: store.get('lang', null) || (navLang.indexOf('zh') === 0 ? 'zh' : 'en'),
  view: 'overview',
  task: store.get('task', '1.1'),
  done: store.get('done', []),
  q: '',
  cardDomain: 'all', hideKnown: store.get('hideKnown', false), known: store.get('known', []), cardIdx: 0, flip: false, perm: null,
  exMode: 'practice', exFilter: 'all', ans: {}, checked: {}, qperm: {}, mock: null, confirmSubmit: false,
  best: store.get('best', null), missed: store.get('missed', []), seen: store.get('seen', []),
  srs: store.get('srs', {}), cardMode: store.get('cardMode', 'due'), queue: null, qTotal: 0, hist: store.get('hist', []), stats: store.get('stats', {}), gsQ: '',
  svcQ: '', svcCat: 'all', svcScope: false, glQ: '',
  planDone: store.get('plan', [])
};
(function(){
  var ex = store.get('exam', null);
  if (!ex || ex.n !== A.qs.length) return;
  S.ans = ex.ans || {}; S.checked = ex.checked || {}; S.qperm = ex.qperm || {}; S.mock = ex.mock || null; S.sim = ex.sim || null;
  if (ex.mode === 'mock' || ex.mode === 'practice' || ex.mode === 'sim') S.exMode = ex.mode;
})();
function saveExam(){ store.set('exam', {n: A.qs.length, ans: S.ans, checked: S.checked, qperm: S.qperm, mock: S.mock, sim: S.sim, mode: S.exMode}); }
function recordResult(qi, ok){
  var dd = A.qs[qi].d; S.stats[dd] = S.stats[dd] || [0, 0]; S.stats[dd][1]++; if (ok) S.stats[dd][0]++; store.set('stats', S.stats);
  if (!inArr(S.seen, qi)) S.seen = S.seen.concat([qi]);
  if (ok) S.missed = S.missed.filter(function(x){ return x !== qi; });
  else if (!inArr(S.missed, qi)) S.missed = S.missed.concat([qi]);
  store.set('seen', S.seen); store.set('missed', S.missed);
}
if (S.lang !== 'en' && S.lang !== 'zh') S.lang = 'en';
if (S.cardMode !== 'due' && S.cardMode !== 'all') S.cardMode = 'due';
/* one-time migration: cards marked "known" before spaced repetition start at level 2 */
(function(){ var k = store.get('known', []); if (!k.length || Object.keys(S.srs).length) return; var due = Date.now() + 3 * 86400000; k.forEach(function(i){ if (A.cards[i]) S.srs[i] = {b: 2, due: due}; }); store.set('srs', S.srs); })();
if (!A.tasks[S.task]) S.task = '1.1';
var hash = (location.hash || '').slice(1);
if (VIEWS.indexOf(hash) >= 0) S.view = hash;
var savedTheme = store.get('theme', null);
root.setAttribute('data-theme', savedTheme === 'dark' ? 'dark' : 'light');

function t(){ return T[S.lang]; }
function L(){ return S.lang; }
function inArr(a, v){ return a.indexOf(v) >= 0; }

/* ---------------- header ---------------- */
function isDark(){
  var a = root.getAttribute('data-theme');
  if (a === 'dark') return true;
  if (a === 'light') return false;
  return !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
}
function updateThemeBtn(){
  var tb = document.getElementById('themeBtn'), dark = isDark(), tt = t();
  tb.innerHTML = dark ? SUN : MOON;
  tb.setAttribute('aria-label', dark ? tt.toLight : tt.toDark);
  tb.setAttribute('data-hint', dark ? tt.toLight : tt.toDark);
}
var NAVICON = (function(){
  var p = {
    overview: '<rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/>',
    course: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/>',
    cards: '<rect x="3" y="6" width="14" height="14" rx="2"/><path d="M7 3h12a2 2 0 0 1 2 2v12"/>',
    exam: '<path d="M9 11l2.5 2.5L16 9"/><rect x="4" y="3" width="16" height="18" rx="2"/>',
    services: '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/>',
    glossary: '<path d="M8 6h12M8 12h12M8 18h12"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',
    plan: '<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M3.5 10h17M8 3v4M16 3v4"/>'
  };
  var o = {};
  Object.keys(p).forEach(function(k){ o[k] = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p[k] + '</svg>'; });
  return o;
})();
var menuOpen = false;
function setMenu(open, restoreFocus){
  menuOpen = open;
  root.classList.toggle('menu-open', open);
  var mb = document.getElementById('menuBtn');
  mb.setAttribute('aria-expanded', String(open));
  mb.setAttribute('aria-label', open ? t().closeMenu : t().openMenu);
  document.body.style.overflow = open ? 'hidden' : '';
  if (open) { var cur = document.querySelector('.dlink[aria-current="page"]') || document.querySelector('.dlink'); if (cur) setTimeout(function(){ cur.focus({preventScroll: true}); }, 60); }
  else if (restoreFocus) mb.focus({preventScroll: true});
}
function renderHeader(){
  var tt = t();
  root.lang = S.lang === 'zh' ? 'zh-CN' : 'en';
  var bn = tt.brand;
  ['brandName', 'drawerName'].forEach(function(id){ var el = document.getElementById(id); el.textContent = bn; el.classList.toggle('brand-zh', S.lang === 'zh'); });
  document.querySelector('.brand').setAttribute('aria-label', bn);
  document.title = bn;
  document.getElementById('tabs').innerHTML = VIEWS.map(function(v){
    return '<button class="tab" type="button" data-go="' + v + '"' + (S.view === v ? ' aria-current="page"' : '') + '>' + tt[v] + '</button>';
  }).join('');
  document.getElementById('drawerNav').innerHTML = VIEWS.map(function(v){
    return '<button class="dlink" type="button" data-go="' + v + '"' + (S.view === v ? ' aria-current="page"' : '') + '>' + NAVICON[v] + '<span>' + tt[v] + '</span></button>';
  }).join('');
  document.getElementById('drawerFoot').innerHTML = '<button type="button" class="dlink dlang" data-act="lang" lang="' + tt.langCtaLang + '">' + GLOBE + '<span>' + tt.langLabel + '</span></button><span>' + '<button type="button" class="link foot-about" data-act="about" aria-haspopup="dialog" data-hint="' + esc(tt.aboutOpen) + '">' + esc(tt.foot) + '</button> · ' + '<button type="button" class="link foot-about" data-act="log" aria-haspopup="dialog" data-hint="' + esc(tt.logOpen) + '">' + esc(fmt(tt.ver, {v: APP_VERSION})) + '</button>' + '</span>' + '<span class="credit">Craft by <b>Eyevuhn</b></span>';
  var sb = document.getElementById('searchBtn'); sb.setAttribute('aria-label', tt.searchBtn); sb.setAttribute('data-hint', tt.searchBtn + ' ( / )');
  paintSync();
  document.getElementById('skipLink').textContent = tt.skip;
  var mb = document.getElementById('menuBtn');
  mb.setAttribute('aria-label', menuOpen ? tt.closeMenu : tt.openMenu);
  document.getElementById('drawerClose').setAttribute('aria-label', tt.closeMenu);
  updateThemeBtn();
  document.getElementById('foot').innerHTML = '<span class="credit">Craft by <b>Eyevuhn</b></span><span>' + '<button type="button" class="link foot-about" data-act="about" aria-haspopup="dialog" data-hint="' + esc(tt.aboutOpen) + '">' + esc(tt.foot) + '</button> · ' + '<button type="button" class="link foot-about" data-act="log" aria-haspopup="dialog" data-hint="' + esc(tt.logOpen) + '">' + esc(fmt(tt.ver, {v: APP_VERSION})) + '</button>' + '</span>';
  fitNav();
}
/* Show the full tab bar only when it truly fits; otherwise hide the subtitle, then fall back to the burger. */
/* The tabs are centered absolutely; they "don't fit" when they would come within 16px of the logo or the buttons. */
function tabsOverflow(){
  var tb = document.getElementById('tabs').getBoundingClientRect();
  var br = document.querySelector('.brand').getBoundingClientRect();
  var ct = document.querySelector('.ctrls').getBoundingClientRect();
  return tb.left < br.right + 16 || tb.right > ct.left - 16;
}
function fitNav(){
  root.classList.add('nav-measured');
  root.classList.remove('nav-compact', 'nav-tight', 'nav-mini');
  if (tabsOverflow()) {
    root.classList.add('nav-tight');
    if (tabsOverflow()) root.classList.add('nav-compact');
  }
  // on the narrowest screens keep just the dog mark when the name would run under the buttons
  if (document.getElementById('brandName').getBoundingClientRect().right > document.querySelector('.ctrls').getBoundingClientRect().left - 8) root.classList.add('nav-mini');
  if (menuOpen && !root.classList.contains('nav-compact')) setMenu(false, false);
}

/* ---------------- overview ---------------- */
function vOverview(){
  var tt = t(), l = L();
  var next = ORDER.filter(function(id){ return !inArr(S.done, id); })[0];
  var label = S.done.length === 0 ? tt.start : (next ? tt.cont + next : tt.review);
  var facts = [['65', tt.f1, tt.f1s], ['90', tt.f2, tt.f2s], ['700', tt.f3, tt.f3s], ['14', tt.f4, tt.f4s]];
  return '<section class="hero"><div>' +
    '<p class="eyebrow">' + tt.eyebrow + '</p><h1>' + tt.heroH + '</h1><p class="lede">' + fmt(tt.heroP, {q: A.qs.length, c: A.cards.length}) + '</p>' +
    '<div class="row"><button class="btn pri" type="button" data-act="open-task" data-task="' + (next || '1.1') + '">' + label + '</button>' +
    '<button class="btn" type="button" data-go="exam" data-mode="sim">' + tt.mock + '</button>' +
    (S.missed.length ? '<button class="btn" type="button" data-act="practice-missed">' + fmt(tt.reviewMissed, {n: S.missed.length}) + '</button>' : '') + '</div></div>' +
    '<div class="facts">' + facts.map(function(f){ return '<div class="fact"><b>' + f[0] + '</b><span>' + f[1] + '<br>' + f[2] + '</span></div>'; }).join('') + '</div></section>' +
    '<div class="stack">' + vProgress() +
    '<section class="panel"><h2 class="ph">' + tt.weights + '</h2><p class="muted" style="margin:4px 0 0">' + tt.weightsP + '</p>' +
    '<div class="wbar" role="img" aria-label="' + A.domains.map(function(d){ return 'D' + d.n + ' ' + d.w + '%'; }).join(', ') + '">' +
    A.domains.map(function(d){ return '<div style="--c:' + dc(d.id) + ';width:' + d.w + '%"><span class="wl">D' + d.n + ' · </span>' + d.w + '%</div>'; }).join('') + '</div>' +
    '<div class="dlist">' + A.domains.map(function(d){
      var dn = d.tasks.filter(function(x){ return inArr(S.done, x); }).length;
      return '<div class="drow" style="--c:' + dc(d.id) + '"><div class="dn">D' + d.n + '<small>' + d.w + '%</small></div><div><h3>' + esc(d.title[l]) + '</h3><div class="tl">' +
        d.tasks.map(function(id){ return '<button type="button" class="tchip' + (inArr(S.done, id) ? ' done' : '') + '" data-act="open-task" data-task="' + id + '"><span class="code">' + id + '</span><span>' + esc(A.tasks[id].title[l]) + '</span></button>'; }).join('') +
        '</div></div><div class="pct">' + fmt(tt.qApprox, {n: d.q}) + '<br>' + fmt(tt.tasksDone, {a: dn, b: d.tasks.length}) + '</div></div>';
    }).join('') + '</div></section>' +
    '<section class="two"><div class="panel"><h2 class="ph">' + tt.qtypes + '</h2><div class="qtypes">' +
    tt.qtypesList.map(function(x){ return '<div class="qtype"><span class="ic">' + x[0] + '</span><p><b>' + x[1] + '.</b> ' + x[2] + '</p></div>'; }).join('') + '</div></div>' +
    '<div class="panel"><h2 class="ph">' + tt.scoring + '</h2><ul class="plain">' + tt.scoringList.map(function(x){ return '<li>' + x + '</li>'; }).join('') + '</ul></div></section>' +
    '<section class="panel"><h2 class="ph">' + tt.how + '</h2><ul class="plain">' + tt.howList.map(function(x){ return '<li>' + x + '</li>'; }).join('') + '</ul></section>' +
    '</div>';
}

/* ---------------- progress (overview) ---------------- */
function progChart(){
  var tt = t(), h = S.hist.slice(-12), n = h.length, off = S.hist.length - n;
  var W = Math.max(280, Math.min(820, ((document.querySelector('.prog-chart') || document.getElementById('app') || {}).clientWidth || 600) - 4));
  var H = 200, Lp = 40, Rp = 20, Tp = 22, Bp = 28;
  var x = function(i){ return n === 1 ? (Lp + W - Rp) / 2 : Lp + i * (W - Lp - Rp) / (n - 1); };
  var y = function(p){ return Tp + (100 - p) * (H - Tp - Bp) / 100; };
  var g = '';
  [0, 25, 50, 75, 100].forEach(function(v){ g += '<line x1="' + Lp + '" x2="' + (W - Rp) + '" y1="' + y(v) + '" y2="' + y(v) + '" class="cg"/><text x="' + (Lp - 8) + '" y="' + (y(v) + 4) + '" class="ct" text-anchor="end">' + v + '%</text>'; });
  g += '<line x1="' + Lp + '" x2="' + (W - Rp) + '" y1="' + y(72) + '" y2="' + y(72) + '" class="cpass"/><text x="' + (W - Rp) + '" y="' + (y(72) + 15) + '" class="ct" text-anchor="end">' + tt.passLine + '</text>';
  var path = h.map(function(r, i){ return (i ? 'L' : 'M') + x(i).toFixed(1) + ' ' + y(r.pct).toFixed(1); }).join(' ');
  var step = n > 8 ? 2 : 1, pts = '', lbl = '';
  h.forEach(function(r, i){
    var cx = x(i).toFixed(1), cy = y(r.pct).toFixed(1), num = off + i + 1;
    var tip = '#' + num + ' · ' + (r.m === 'sim' ? tt.legSim : tt.legMock) + ' · ' + r.pct + '%' + (r.sc ? ' (≈' + r.sc + ')' : '') + ' · ' + new Date(r.t).toLocaleDateString(L() === 'zh' ? 'zh-CN' : 'en');
    pts += '<circle cx="' + cx + '" cy="' + cy + '" r="4.5" class="' + (r.m === 'sim' ? 'cpt-f' : 'cpt-h') + '"/>' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="15" class="chit" tabindex="0" role="img" aria-label="' + esc(tip) + '" data-tip="' + esc(tip) + '"/>';
    if ((n - 1 - i) % step === 0) lbl += '<text x="' + cx + '" y="' + (H - 8) + '" class="ct" text-anchor="middle">#' + num + '</text>';
  });
  var last = h[n - 1];
  var lastLbl = '<text x="' + x(n - 1).toFixed(1) + '" y="' + (y(last.pct) - 11).toFixed(1) + '" class="ct cval" text-anchor="' + (n === 1 ? 'middle' : 'end') + '">' + last.pct + '%</text>';
  return '<div class="chartbox"><svg width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H + '" role="group" aria-label="' + esc(tt.chartT) + '">' + g +
    (n > 1 ? '<path d="' + path + '" class="cline"/>' : '') + pts + lbl + lastLbl + '</svg><div class="ctip" role="tooltip" hidden></div></div>';
}
function vProgress(){
  var tt = t(), l = L();
  var stats = '<div class="pstats">' + [[S.done.length + '/' + ORDER.length, tt.stLessons], [masteredCount(true) + '/' + A.cards.length, tt.stCards], [dueCount(true), tt.stDue], [S.missed.length, tt.stMissed]].map(function(x){
    return '<div><b>' + x[0] + '</b><span>' + x[1] + '</span></div>'; }).join('') + '</div>';
  var chart;
  if (!S.hist.length) chart = '<h3>' + tt.chartT + '</h3><p class="muted" style="margin:6px 0 0">' + tt.progEmpty + '</p>';
  else {
    var lastN = S.hist.slice(-3), avg = Math.round(lastN.reduce(function(s2, r){ return s2 + r.pct; }, 0) / lastN.length);
    chart = '<div class="chart-h"><h3>' + tt.chartT + '</h3><div class="legend"><span><i class="lg-f"></i>' + tt.legSim + '</span><span><i class="lg-h"></i>' + tt.legMock + '</span></div></div>' +
      '<p class="muted" style="margin:2px 0 8px;font-size:13.5px">' + fmt(tt.lastAvg, {n: lastN.length, p: avg}) + '</p><div class="prog-chart">' + progChart() + '</div>' +
      '<div class="tview"><button type="button" class="tview-btn" data-act="tview" aria-expanded="false" aria-controls="tviewBody">' + CHEVRON + '<span>' + tt.tableView + '</span></button><div class="tw" id="tviewBody" hidden><table><thead><tr><th>' + tt.colN + '</th><th>' + tt.colDate + '</th><th>' + tt.colMode + '</th><th>' + tt.colScore + '</th><th>' + tt.colEst + '</th></tr></thead><tbody>' +
      S.hist.map(function(r, i){ return '<tr><td>' + (i + 1) + '</td><td>' + new Date(r.t).toLocaleString(l === 'zh' ? 'zh-CN' : 'en') + '</td><td>' + (r.m === 'sim' ? tt.legSim : tt.legMock) + '</td><td>' + r.pct + '%</td><td>' + (r.sc || '—') + '</td></tr>'; }).reverse().join('') +
      '</tbody></table></div></div>';
  }
  var weakest = null;
  var rows = A.domains.map(function(d){
    var st = S.stats[d.id] || [0, 0], p = st[1] ? Math.round(st[0] * 100 / st[1]) : null;
    if (p != null && st[1] >= 3 && (!weakest || p < weakest.p)) weakest = {d: d, p: p};
    return '<div class="acc" style="--c:' + dc(d.id) + '"><span class="acc-d">D' + d.n + '</span><span class="acc-t">' + esc(d.title[l]) + '</span><span class="acc-bar">' + (p != null ? '<i style="width:' + Math.max(p, 2) + '%"></i>' : '') + '</span><span class="acc-v">' + (p != null ? p + '% · ' + st[0] + '/' + st[1] : tt.accNone) + '</span></div>';
  }).join('');
  var focus = weakest ? '<div class="focus"><span>' + fmt(tt.focusNext, {n: weakest.d.n}) + ' · ' + esc(weakest.d.title[l]) + ' (' + weakest.p + '%)</span><button type="button" class="btn sm pri" data-act="focus-go" data-f="' + weakest.d.id + '">' + tt.practiceIt + '</button></div>' : '';
  return '<section class="panel prog"><h2 class="ph">' + tt.progH + '</h2><p class="muted" style="margin:4px 0 0">' + tt.progP + '</p>' + syncCta() + langCta() + stats +
    '<div class="prog-grid"><div class="prog-left">' + chart + '</div><div><h3>' + tt.accT + '</h3><p class="muted" style="margin:2px 0 10px;font-size:13.5px">' + tt.accP + '</p>' + rows + focus + '</div></div></section>';
}

/* ---------------- course ---------------- */
var TXT = {};
function taskText(id){
  var k = id + S.lang;
  if (!TXT[k]) {
    var tk = A.tasks[id], li = S.lang === 'en' ? 0 : 1;
    TXT[k] = (tk.title[S.lang] + ' ' + tk.obj.map(function(o){ return o[li]; }).join(' ') + ' ' + tk[S.lang].replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&')).toLowerCase();
  }
  return TXT[k];
}
function countHits(id, q){ var s = taskText(id), n = 0, i = 0; while ((i = s.indexOf(q, i)) !== -1) { n++; i += q.length; } return n; }
function railList(){
  var l = L(), q = S.q.trim().toLowerCase(), any = false;
  var html = A.domains.map(function(d){
    var items = d.tasks.map(function(id){
      var hits = q ? countHits(id, q) : 0;
      if (q && !hits) return '';
      any = true;
      return '<button type="button" class="rt' + (id === S.task ? ' on' : '') + (inArr(S.done, id) ? ' done' : '') + '" data-act="open-task" data-task="' + id + '"><span class="code">' + id + '</span><span>' + esc(A.tasks[id].title[l]) + (q ? ' <span class="hits">· ' + hits + '</span>' : '') + '</span><span class="chk">✓</span></button>';
    }).join('');
    if (!items) return '';
    return '<div class="rd" style="--c:' + dc(d.id) + '"><div class="rd-h"><span class="code">D' + d.n + ' · ' + d.w + '%</span><span>' + esc(d.title[l]) + '</span></div>' + items + '</div>';
  }).join('');
  return any ? html : '<p class="muted" style="padding:6px">' + t().none + '</p>';
}
function vCourse(){
  var tt = t(), l = L(), tk = A.tasks[S.task], d = DOM[tk.d], i = ORDER.indexOf(S.task);
  var prev = ORDER[i - 1], next = ORDER[i + 1], isDone = inArr(S.done, S.task), li = l === 'en' ? 0 : 1;
  var opts = [];
  A.domains.forEach(function(dd){ dd.tasks.forEach(function(id){ opts.push({v: id, label: id + ' · ' + A.tasks[id].title[l], group: 'D' + dd.n + ' · ' + dd.title[l]}); }); });
  return '<div class="course">' +
    '<aside class="rail" aria-label="' + tt.lessons + '">' + '<div class="sfield">' + '<input id="railSearch" class="field" type="search" enterkeyhint="search" autocomplete="off" placeholder="' + tt.search + '" value="' + esc(S.q) + '" aria-label="' + tt.search + '">' + '<button type="button" class="sclear" data-act="sclear" aria-label="' + tt.clearTxt + '" data-hint="' + tt.clearTxt + '">' + XICON + '</button></div>' + '<div id="railList">' + railList() + '</div></aside>' +
    '<div class="mselect"><span class="eyebrow" id="taskSelectL">' + tt.jump + '</span>' + ddHTML({id: 'taskSelect', labelledby: 'taskSelectL', value: S.task, options: opts, cls: 'dd-field', pick: openTask}) + '</div>' +
    '<article class="lesson" style="--c:' + dc(d.id) + '">' +
    '<div class="crumb"><span>' + tt.domain + ' ' + d.n + '</span><span class="sep">/</span><span>' + esc(d.title[l]) + '</span><span class="sep">/</span><span>' + d.w + '%</span></div>' +
    '<h2>' + tt.task + ' ' + S.task + ' · ' + esc(tk.title[l]) + '</h2>' +
    '<div class="objs"><div class="objs-h"><b>' + tt.objsH + '</b><span>' + tt.objsS + '</span></div><ol>' +
    tk.obj.map(function(o, k){ return '<li><span class="oc">' + S.task + '.' + (k + 1) + '</span><span>' + esc(o[li]) + '</span></li>'; }).join('') + '</ol></div>' +
    '<div class="prose">' + tk[l] + '</div>' +
    '<div class="lfoot"><div class="row"><button type="button" class="btn done-btn" data-act="toggle-done" aria-pressed="' + isDone + '">' + (isDone ? tt.done : tt.markDone) + '</button>' +
    '<button type="button" class="btn" data-act="practice-task" data-task="' + S.task + '">' + fmt(tt.practiceTask, {n: A.qs.filter(function(q){ return q.k === S.task; }).length}) + '</button></div><div class="row">' +
    (prev ? '<button type="button" class="btn" data-act="open-task" data-task="' + prev + '">' + tt.prev + ' ' + tt.task + ' ' + prev + '</button>' : '') +
    (next ? '<button type="button" class="btn pri" data-act="open-task" data-task="' + next + '">' + tt.task + ' ' + next + ' ' + tt.next + '</button>' : '') +
    '</div></div></article></div>';
}

/* ---------------- flashcards ---------------- */
/* ---------------- flashcards (spaced repetition, Leitner levels 0–5) ---------------- */
var BOXDAYS = [0, 1, 3, 7, 14, 30];
function inCardScope(i){ return S.cardDomain === 'all' || A.cards[i].d === S.cardDomain; }
function buildQueue(){
  var now = Date.now(), all = A.cards.map(function(_, i){ return i; }).filter(inCardScope);
  var reviews = all.filter(function(i){ return S.srs[i] && S.srs[i].due <= now; }).sort(function(a, b){ return S.srs[a].due - S.srs[b].due; });
  var fresh = all.filter(function(i){ return !S.srs[i]; }).slice(0, 20);
  S.queue = reviews.concat(fresh); S.qTotal = S.queue.length; S.cardIdx = 0; S.flip = false;
}
function deck(){
  if (S.cardMode === 'due') { if (!S.queue) buildQueue(); return S.queue; }
  var base = S.perm || A.cards.map(function(_, i){ return i; });
  return base.filter(inCardScope);
}
function dueCount(scopeAll){
  var now = Date.now(), rev = 0, fresh = 0;
  A.cards.forEach(function(_, i){ if (!scopeAll && !inCardScope(i)) return; if (!S.srs[i]) fresh++; else if (S.srs[i].due <= now) rev++; });
  return rev + Math.min(fresh, 20);
}
function masteredCount(scopeAll){ var n = 0; A.cards.forEach(function(_, i){ if ((scopeAll || inCardScope(i)) && S.srs[i] && S.srs[i].b >= 4) n++; }); return n; }
function rateCard(ci, ok){
  var cur = S.srs[ci] || {b: 0, due: 0}, now = Date.now();
  var nb = ok ? Math.min(5, cur.b + 1) : 0;
  S.srs[ci] = {b: nb, due: ok ? now + BOXDAYS[nb] * 86400000 : now};
  store.set('srs', S.srs);
}
function levelDots(b){ var h = ''; for (var k = 1; k <= 5; k++) h += '<i class="' + (k <= b ? 'on' : '') + '"></i>'; return '<span class="lvl" aria-hidden="true">' + h + '</span>'; }
function vCards(){
  var tt = t(), l = L(), dk = deck();
  if (S.cardIdx >= dk.length) S.cardIdx = Math.max(0, dk.length - 1);
  var counts = {}; A.cards.forEach(function(c){ counts[c.d] = (counts[c.d] || 0) + 1; });
  var total = A.cards.filter(function(c, i){ return inCardScope(i); }).length, mast = masteredCount(false);
  var seg = '<div class="seg" role="group">' + [['due', tt.modeDue + ' · ' + (S.cardMode === 'due' ? dk.length : dueCount(false))], ['all', tt.modeAll + ' · ' + total]].map(function(m){
    return '<button type="button" data-act="cmode" data-mode="' + m[0] + '" aria-pressed="' + (S.cardMode === m[0]) + '">' + m[1] + '</button>'; }).join('') + '</div>';
  var chips = '<button type="button" class="chip" data-act="cdom" data-d="all" aria-pressed="' + (S.cardDomain === 'all') + '">' + tt.all + ' · ' + A.cards.length + '</button>' +
    A.domains.map(function(d){ return '<button type="button" class="chip" style="--c:' + dc(d.id) + '" data-act="cdom" data-d="' + d.id + '" aria-pressed="' + (S.cardDomain === d.id) + '"><span class="dot"></span>D' + d.n + ' · ' + counts[d.id] + '</button>'; }).join('');
  var head = '<div class="sechead"><div><h2>' + tt.cardsH + '</h2><p>' + tt.cardsP + '</p></div>' + seg + '</div>';
  var bar = '<div class="filters"><div class="chips">' + chips + '</div></div>';
  var prog = '<div style="margin-top:18px"><div class="fc-top"><span>' + fmt(tt.mastered, {a: mast, b: total}) + '</span><span>' + fmt(tt.dueToday, {n: dueCount(false)}) + '</span></div><div class="meter"><i style="width:' + (total ? Math.round(mast * 100 / total) : 0) + '%"></i></div></div>';
  if (!dk.length) {
    var more = S.cardMode === 'due' && dueCount(false) > 0;
    return head + bar + '<div class="fcwrap"><div class="panel empty"><p style="margin:0 0 14px">' + (S.cardMode === 'due' && S.qTotal ? tt.roundDone : tt.dueEmpty) + '</p><div class="row" style="justify-content:center">' +
      (more ? '<button type="button" class="btn pri" data-act="newround">' + tt.newRound + '</button>' : '') +
      '<button type="button" class="btn" data-act="cmode" data-mode="all">' + tt.browseAll + '</button></div></div>' + prog + '</div>';
  }
  var ci = dk[S.cardIdx], c = A.cards[ci], d = DOM[c.d], st = S.srs[ci];
  var pos = S.cardMode === 'due' ? fmt(tt.ofQueue, {i: S.cardIdx + 1, n: dk.length}) : (S.cardIdx + 1) + ' / ' + dk.length;
  return head + bar + '<div class="fcwrap">' +
    '<button type="button" class="fc' + (S.flip ? ' back' : '') + '" id="fcard" data-act="flip" style="--c:' + dc(c.d) + '">' +
    '<span class="fc-top"><span class="d">D' + d.n + ' · ' + esc(d.title[l]) + '</span><span>' + pos + '</span></span>' +
    '<span class="fc-mid"><span class="fc-side">' + (S.flip ? tt.answer : tt.question) + '</span><span class="fc-body" aria-live="polite">' + esc(S.flip ? c[l].a : c[l].q) + '</span></span>' +
    '<span class="fc-hint"><span class="lvl-wrap">' + levelDots(st ? st.b : 0) + (st ? fmt(tt.boxN, {b: st.b}) : tt.boxNew) + '</span><span>' + tt.tapFlip + '</span></span></button>' +
    '<div class="fcnav"><div class="row"><button type="button" class="btn" data-act="cprev" aria-label="Previous">←</button><button type="button" class="btn" data-act="cnext" aria-label="Next">→</button></div>' +
    '<div class="row"><button type="button" class="btn" data-act="learn">' + tt.learning + '</button><button type="button" class="btn pri" data-act="know">' + tt.know + '</button></div>' +
    (S.cardMode === 'all' ? '<button type="button" class="btn" data-act="cshuffle" aria-pressed="' + (!!S.perm) + '">' + (S.perm ? tt.unshuffle : tt.shuffle) + '</button>' : '') + '</div>' +
    prog + '</div>';
}

/* ---------------- exam ---------------- */
function getPerm(qi, n){ if (!S.qperm[qi]) S.qperm[qi] = shuffle(Array.apply(null, {length: n}).map(function(_, i){ return i; })); return S.qperm[qi]; }
function exState(){ return S.exMode === 'mock' ? S.mock : (S.exMode === 'sim' ? S.sim : null); }
function getAns(qi){ if (S.exMode === 'practice') return S.ans[qi]; var s = exState(); return s ? s.ans[qi] : undefined; }
function setAns(qi, v){ if (S.exMode === 'practice') S.ans[qi] = v; else exState().ans[qi] = v; }
function revealed(qi){ if (S.exMode === 'practice') return !!S.checked[qi]; var s = exState(); return !!(s && s.submitted); }
function simLive(){ return S.exMode === 'sim' && S.sim && !S.sim.submitted; }
function answered(q, a){
  if (a == null) return false;
  if (q.t === 'single') return typeof a === 'number';
  if (q.t === 'multi') return a.length > 0;
  if (q.t === 'order') return a.length === q.en.o.length;
  return a.length === q.en.o.length && a.every(function(v){ return v >= 0; });
}
function correct(q, a){
  if (!answered(q, a)) return false;
  if (q.t === 'single') return a === q.a[0];
  if (q.t === 'multi') { var s = a.slice().sort(); return s.length === q.a.length && s.every(function(v, i){ return v === q.a[i]; }); }
  return a.every(function(v, i){ return v === i; });
}
function qHTML(qi, num){
  var tt = t(), l = L(), q = A.qs[qi], Q = q[l], d = DOM[q.d], rev = revealed(qi), a = getAns(qi), typ, body = '';
  if (q.t === 'single' || q.t === 'multi') {
    typ = q.t === 'single' ? tt.single : fmt(tt.chooseN, {n: l === 'en' ? NUMW[q.a.length] : q.a.length});
    var op = getPerm(qi, Q.o.length);
    body = '<div class="opts">' + op.map(function(i, pos){
      var sel = q.t === 'single' ? a === i : !!(a && inArr(a, i)), cls = 'opt';
      if (rev) { if (inArr(q.a, i)) cls += ' right'; else if (sel) cls += ' wrong'; } else if (sel) cls += ' sel';
      return '<button type="button" class="' + cls + '" data-act="pick" data-q="' + qi + '" data-i="' + i + '"' + (rev ? ' disabled' : '') + ' aria-pressed="' + sel + '"><span class="L">' + LET[pos] + '</span><span>' + esc(Q.o[i]) + '</span></button>';
    }).join('') + '</div>';
  } else if (q.t === 'order') {
    typ = tt.orderT;
    var perm = getPerm(qi, Q.o.length), arr = a || [];
    body = '<p class="muted" style="margin:0 0 8px;font-size:13.5px">' + tt.orderHint + '</p><div class="opts">' + perm.map(function(i){
      var pos = arr.indexOf(i), cls = 'opt';
      if (rev) cls += pos === i ? ' right' : ' wrong'; else if (pos >= 0) cls += ' sel';
      return '<button type="button" class="' + cls + '" data-act="ord" data-q="' + qi + '" data-i="' + i + '"' + (rev || pos >= 0 ? ' disabled' : '') + '><span class="L">' + (pos >= 0 ? pos + 1 : '·') + '</span><span>' + esc(Q.o[i]) + '</span></button>';
    }).join('') + '</div>';
  } else {
    typ = tt.matchT;
    var mp = getPerm(qi, Q.o.length), marr = a || [];
    body = '<div class="opts">' + Q.o.map(function(p, i){
      var v = marr[i] == null ? -1 : marr[i], cls = 'mrow';
      if (rev) cls += v === i ? ' right' : ' wrong';
      return '<div class="' + cls + '"><span id="ml-' + qi + '-' + i + '">' + esc(p[0]) + '</span>' +
        ddHTML({id: 'm-' + qi + '-' + i, labelledby: 'ml-' + qi + '-' + i, value: v, placeholder: tt.select, disabled: rev,
          options: mp.map(function(j){ return {v: j, label: Q.o[j][1]}; }),
          pick: function(val){ pickMatch(qi, i, val); }}) + '</div>';
    }).join('') + '</div>';
  }
  var foot = '', btns = '';
  if (!rev) {
    if (S.exMode === 'practice') btns += '<button type="button" class="btn sm pri" data-act="check" data-q="' + qi + '"' + (answered(q, a) ? '' : ' disabled') + '>' + tt.check + '</button>';
    if (q.t === 'order' && a && a.length) btns += '<button type="button" class="btn sm" data-act="ordreset" data-q="' + qi + '">' + tt.resetOrder + '</button>';
    if (btns) foot = '<div class="qact">' + btns + '</div>';
  }
  var fb = '';
  if (rev) {
    var ok = correct(q, a), key;
    if (q.t === 'single' || q.t === 'multi') { var kp = getPerm(qi, Q.o.length); key = '<b>' + tt.answerIs + '</b> ' + q.a.map(function(i){ return LET[kp.indexOf(i)]; }).sort().join(', '); }
    else if (q.t === 'order') key = '<b>' + tt.correctOrder + '</b><ol>' + Q.o.map(function(x){ return '<li>' + esc(x) + '</li>'; }).join('') + '</ol>';
    else key = '<b>' + tt.answerIs + '</b><ol>' + Q.o.map(function(p){ return '<li>' + esc(p[0]) + ' → ' + esc(p[1]) + '</li>'; }).join('') + '</ol>';
    fb = '<div class="fb ' + (ok ? 'ok' : 'no') + '"><b>' + (ok ? tt.correct : (answered(q, a) ? tt.incorrect : tt.notAnswered)) + '</b> ' + key + '<p>' + esc(Q.x) + '</p>' +
      whyWrongHTML(qi, q, a) +
      (q.k ? '<p><button type="button" class="link" data-act="open-task" data-task="' + q.k + '">' + tt.reviewLesson + ' ' + q.k + ' →</button></p>' : '') + '</div>';
  }
  var qh;
  if (simLive()) {
    qh = '<span class="qn">' + fmt(tt.qOf, {n: num, t: S.sim.set.length}) + '</span>' + (inArr(S.sim.flags, qi) ? '<span class="qflag">⚑ ' + tt.flagged + '</span>' : '');
  } else {
    qh = '<span class="qn">Q' + num + '</span><span class="qd">' + (q.k ? fmt(tt.taskChip, {k: q.k}) : 'D' + d.n) + ' · ' + esc(d.title[l]) + '</span>' +
      (S.exMode === 'sim' && S.sim && inArr(S.sim.uns, qi) ? '<span class="qflag uns">' + tt.unscoredTag + '</span>' : '') +
      (S.exMode === 'sim' && S.sim && inArr(S.sim.flags, qi) ? '<span class="qflag">⚑ ' + tt.flagged + '</span>' : '');
  }
  return '<div class="q" id="q-' + qi + '" data-num="' + num + '" style="--c:' + dc(q.d) + '"><div class="qh">' + qh + '<span class="qt">' + typ + '</span></div><p class="qs">' + esc(Q.q) + '</p>' + body + foot + fb + '</div>';
}
function whyWrongHTML(qi, q, a){
  if (!q.w || (q.t !== 'single' && q.t !== 'multi')) return '';
  var l = L(), p = getPerm(qi, q[l].o.length), items = '';
  p.forEach(function(i, pos){
    var note = q.w[l][i]; if (!note) return;
    var mine = q.t === 'single' ? a === i : !!(a && inArr(a, i));
    items += '<li' + (mine ? ' class="mine"' : '') + '><b>' + LET[pos] + '</b><span>' + esc(note) + '</span></li>';
  });
  return items ? '<div class="why"><b class="why-h">' + t().whyWrong + '</b><ul>' + items + '</ul></div>' : '';
}
function answerKey(qi, q){ var p = getPerm(qi, q.en.o.length); return q.a.map(function(i){ return LET[p.indexOf(i)]; }).sort().join(', '); }
function announce(msg){ var lv = document.getElementById('live'); if (lv) { lv.textContent = ''; setTimeout(function(){ lv.textContent = msg; }, 30); } }
function practiceList(){
  var f = S.exFilter;
  return A.qs.map(function(_, i){ return i; }).filter(function(i){
    if (f === 'all') return true;
    if (f === 'missed') return inArr(S.missed, i);
    if (f.indexOf('t:') === 0) return A.qs[i].k === f.slice(2);
    if (f.indexOf('q:') === 0) return i === +f.slice(2);
    return A.qs[i].d === f;
  });
}
function clearAnswers(list){ list.forEach(function(k){ delete S.ans[k]; delete S.checked[k]; delete S.qperm[k]; }); saveExam(); }
function goPracticeMissed(){ S.exMode = 'practice'; S.exFilter = 'missed'; clearAnswers(S.missed.slice()); setView('exam'); }
function practiceStats(){
  var list = practiceList(), c = 0, r = 0;
  list.forEach(function(i){ if (S.checked[i]) { c++; if (correct(A.qs[i], S.ans[i])) r++; } });
  return fmt(t().statsLine, {c: c, r: r}) + ' / ' + list.length;
}
function fmtTime(ms){ var s = Math.max(0, Math.ceil(ms / 1000)), m = Math.floor(s / 60); s = s % 60; return m + ':' + (s < 10 ? '0' : '') + s; }
function mockAnswered(){ return S.mock.set.filter(function(qi){ return answered(A.qs[qi], S.mock.ans[qi]); }).length; }
function submitLabel(){ var un = S.mock.set.length - mockAnswered(); return S.confirmSubmit && un > 0 ? fmt(t().confirmSubmit, {n: un}) : t().submit; }
function vExam(){
  var tt = t(), l = L();
  var seg = '<div class="seg" role="group">' + [['practice', tt.practice], ['mock', tt.mockMode], ['sim', tt.simMode]].map(function(m){
    return '<button type="button" data-act="exmode" data-mode="' + m[0] + '" aria-pressed="' + (S.exMode === m[0]) + '">' + m[1] + '</button>';
  }).join('') + '</div>';
  var head = '<div class="sechead"><div><h2>' + tt.examH + '</h2><p>' + fmt(tt.examP, {n: A.qs.length}) + '</p></div>' + seg + '</div>';
  if (S.exMode === 'sim') return head + vSim();
  if (S.exMode === 'practice') {
    var counts = {}; A.qs.forEach(function(q){ counts[q.d] = (counts[q.d] || 0) + 1; });
    var f = S.exFilter;
    var chips = '<button type="button" class="chip" data-act="exfilter" data-f="all" aria-pressed="' + (f === 'all') + '">' + tt.all + ' · ' + A.qs.length + '</button>' +
      A.domains.map(function(d){ return '<button type="button" class="chip" style="--c:' + dc(d.id) + '" data-act="exfilter" data-f="' + d.id + '" aria-pressed="' + (f === d.id) + '"><span class="dot"></span>D' + d.n + ' · ' + counts[d.id] + '</button>'; }).join('') +
      '<button type="button" class="chip" style="--c:var(--bad)" data-act="exfilter" data-f="missed" aria-pressed="' + (f === 'missed') + '"><span class="dot"></span>' + tt.missedChip + ' · ' + S.missed.length + '</button>' +
      (f.indexOf('q:') === 0 ? '<button type="button" class="chip" data-act="exfilter" data-f="all" aria-pressed="true" aria-label="Clear filter">' + tt.qChip + ' ×</button>' : '') +
      (f.indexOf('t:') === 0 ? '<button type="button" class="chip" data-act="exfilter" data-f="all" aria-pressed="true" aria-label="Clear filter">' + fmt(tt.taskChip, {k: f.slice(2)}) + ' · ' + practiceList().length + ' ×</button>' : '');
    var list = practiceList();
    var body = (f === 'missed' && !list.length) ? '<div class="panel empty" style="max-width:860px">' + tt.noMissed + '</div>' :
      '<div class="qlist">' + list.map(function(qi, k){ return qHTML(qi, k + 1); }).join('') + '</div>';
    return head + '<div class="filters"><div class="chips">' + chips + '</div><span class="muted" id="pstats" style="font-size:13px">' + practiceStats() + '</span><button type="button" class="btn sm" data-act="reset-practice">' + tt.resetPractice + '</button></div>' + body + qbarHTML();
  }
  if (!S.mock) {
    return head + '<section class="panel" style="max-width:860px"><h3 style="font-size:20px">' + tt.mockH + '</h3><ul class="plain">' + tt.mockList.map(function(x){ return '<li>' + x + '</li>'; }).join('') + '</ul>' +
      (S.best != null ? '<p class="muted" style="margin:12px 0 0">' + tt.best + ': <b style="color:var(--ink)">' + S.best + '%</b></p>' : '') +
      '<div class="row" style="margin-top:16px"><button type="button" class="btn pri" data-act="start-mock">' + tt.startMock + '</button></div></section>';
  }
  var list = '<div class="qlist">' + S.mock.set.map(function(qi, k){ return qHTML(qi, k + 1); }).join('') + '</div>';
  if (!S.mock.submitted) {
    var left = S.mock.end - Date.now();
    return head + '<div class="exbar"><span class="muted">' + tt.timeLeft + '</span><span class="tm' + (left < 300000 ? ' low' : '') + '" id="timer">' + fmtTime(left) + '</span><span class="muted">' + tt.answered + ' <b id="ansCount" style="color:var(--ink)">' + mockAnswered() + '</b>/' + S.mock.set.length + '</span><span class="sp"></span><button type="button" class="btn sm pri" id="submitBtn" data-act="submit-mock">' + submitLabel() + '</button></div>' + list + qbarHTML();
  }
  var r = S.mock.res, cls = r.pct >= 80 ? ' ok' : (r.pct < 70 ? ' no' : '');
  return head + '<section class="panel" style="max-width:860px;margin-bottom:16px"><div class="score"><div class="big' + cls + '">' + r.pct + '%</div><div><h3 style="font-size:20px">' + tt.result + '</h3><p class="muted" style="margin:4px 0">' + fmt(tt.resultLine, {c: r.c, n: r.n}) + '</p><p class="muted" style="margin:4px 0 10px;font-size:13.5px">' + tt.target + '</p>' +
    '<div class="dscore">' + A.domains.map(function(d){ var b = r.by[d.id] || {c: 0, n: 0}, p = b.n ? Math.round(b.c * 100 / b.n) : 0; return '<div style="--c:' + dc(d.id) + '"><span>D' + d.n + '</span><span class="bar"><i style="width:' + p + '%"></i></span><span>' + b.c + '/' + b.n + '</span></div>'; }).join('') + '</div>' +
    '<div class="row" style="margin-top:16px"><button type="button" class="btn pri" data-act="start-mock">' + tt.retake + '</button>' +
    (r.n - r.c > 0 ? '<button type="button" class="btn" data-act="practice-missed">' + fmt(tt.practiceMissed, {n: r.n - r.c}) + '</button>' : '') + '</div></div></div></section>' + list;
}
function startMock(){
  var want = {d1: 10, d2: 12, d3: 14, d4: 7, d5: 7}, set = [];
  Object.keys(want).forEach(function(d){
    var ids = A.qs.map(function(_, i){ return i; }).filter(function(i){ return A.qs[i].d === d; });
    var fresh = shuffle(ids.filter(function(i){ return !inArr(S.seen, i); }));
    var old = shuffle(ids.filter(function(i){ return inArr(S.seen, i); }));
    set = set.concat(fresh.concat(old).slice(0, want[d]));
  });
  set.forEach(function(qi){ delete S.qperm[qi]; });
  S.confirmSubmit = false;
  S.mock = {set: shuffle(set), ans: {}, end: Date.now() + 90 * 60 * 1000, submitted: false};
  saveExam();
}
function submitMock(fromTimer){
  var c = 0, by = {};
  S.mock.set.forEach(function(qi){ var q = A.qs[qi], ok = correct(q, S.mock.ans[qi]); by[q.d] = by[q.d] || {c: 0, n: 0}; by[q.d].n++; if (ok) { c++; by[q.d].c++; } recordResult(qi, ok); });
  S.mock.res = {c: c, n: S.mock.set.length, pct: Math.round(c * 100 / S.mock.set.length), by: by};
  S.mock.submitted = true; S.confirmSubmit = false; saveExam();
  S.hist = S.hist.concat([{t: Date.now(), m: 'mock', pct: S.mock.res.pct}]).slice(-60); store.set('hist', S.hist);
  if (S.best == null || S.mock.res.pct > S.best) { S.best = S.mock.res.pct; store.set('best', S.best); }
  if (S.view === 'exam') { render(); if (!fromTimer || S.exMode === 'mock') window.scrollTo(0, 0); }
}
function afterAnswer(){
  if (simLive()) {
    var sc = document.getElementById('ansCount'); if (sc) sc.textContent = simAnswered();
  } else if (S.exMode === 'mock' && S.mock && !S.mock.submitted) {
    var ac = document.getElementById('ansCount'); if (ac) ac.textContent = mockAnswered();
    S.confirmSubmit = false;
    var sb = document.getElementById('submitBtn'); if (sb) sb.textContent = submitLabel();
  } else {
    var ps = document.getElementById('pstats'); if (ps) ps.textContent = practiceStats();
  }
  paintQbar();
}
/* ---------------- our own UI parts: icons, dropdown, tooltips ---------------- */
var CHEVRON = '<svg class="chev" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
var XICON = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>';
var TICK = '<svg class="dd-tick" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12.5 4.5 4.5L19 7.5"/></svg>';
function pickMatch(qi, i, val){
  var n = A.qs[qi].en.o.length, arr = (getAns(qi) || Array.apply(null, {length: n}).map(function(){ return -1; })).slice();
  arr[i] = val; setAns(qi, arr); saveExam(); reQ(qi); focusSel('#m-' + qi + '-' + i);
}
/* Dropdown: a button that opens a listbox. Options live in DD by id, filled while the HTML is built. */
var DD = {}, ddOpen = null;
function ddHTML(o){
  DD[o.id] = o;
  var cur = o.options.filter(function(x){ return x.v === o.value; })[0];
  return '<div class="dd' + (o.cls ? ' ' + o.cls : '') + '"><button type="button" class="dd-btn" id="' + o.id + '" data-act="dd" aria-haspopup="listbox" aria-expanded="false"' +
    (o.labelledby ? ' aria-labelledby="' + o.labelledby + ' ' + o.id + '"' : '') + (o.disabled ? ' disabled' : '') + '>' +
    '<span class="dd-val' + (cur ? '' : ' dd-ph') + '">' + esc(cur ? cur.label : (o.placeholder || '')) + '</span>' + CHEVRON + '</button></div>';
}
function ddPlace(){
  if (!ddOpen) return;
  var b = document.getElementById(ddOpen.id), ls = document.getElementById('ddList');
  if (!b || !ls) return ddClose(false);
  var r = b.getBoundingClientRect(), vh = window.innerHeight, below = vh - r.bottom - 12, above = r.top - 12 - 64;
  var up = below < 220 && above > below, room = Math.max(120, Math.min(320, up ? above : below));
  ls.style.maxHeight = room + 'px';
  ls.style.width = Math.min(window.innerWidth - 32, Math.max(r.width, 280)) + 'px';
  var left = Math.min(Math.max(16, r.left), window.innerWidth - ls.offsetWidth - 16);
  ls.style.left = left + 'px';
  ls.style.top = (up ? r.top - 6 - Math.min(room, ls.scrollHeight) : r.bottom + 6) + 'px';
  ls.classList.toggle('up', up);
}
function ddOpenList(id){
  var o = DD[id], b = document.getElementById(id);
  if (!o || !b || b.disabled) return;
  ddClose(false);
  hideHint();
  var h = '', lastG = null, sel = -1;
  o.options.forEach(function(x, k){
    if (x.group && x.group !== lastG) { h += '<li class="dd-group" role="presentation">' + esc(x.group) + '</li>'; lastG = x.group; }
    var on = x.v === o.value; if (on) sel = k;
    h += '<li class="dd-opt' + (on ? ' on' : '') + '" role="option" id="ddo-' + k + '" data-k="' + k + '" aria-selected="' + on + '"><span>' + esc(x.label) + '</span>' + TICK + '</li>';
  });
  document.body.insertAdjacentHTML('beforeend', '<ul class="dd-list" id="ddList" role="listbox" tabindex="-1" aria-labelledby="' + (o.labelledby || id) + '">' + h + '</ul>');
  ddOpen = {id: id, active: sel < 0 ? 0 : sel, typed: '', typedAt: 0};
  b.setAttribute('aria-expanded', 'true');
  ddPlace();
  ddActive(ddOpen.active, true);
  document.getElementById('ddList').focus({preventScroll: true});
}
function ddActive(k, center){
  var ls = document.getElementById('ddList'); if (!ls || !ddOpen) return;
  var n = DD[ddOpen.id].options.length; k = Math.max(0, Math.min(n - 1, k)); ddOpen.active = k;
  Array.prototype.forEach.call(ls.querySelectorAll('.dd-opt.act'), function(x){ x.classList.remove('act'); });
  var el = document.getElementById('ddo-' + k); if (!el) return;
  el.classList.add('act'); ls.setAttribute('aria-activedescendant', el.id);
  var top = el.offsetTop, bot = top + el.offsetHeight;
  if (center) ls.scrollTop = top - ls.clientHeight / 2 + el.offsetHeight / 2;
  else if (top < ls.scrollTop) ls.scrollTop = top - 4; else if (bot > ls.scrollTop + ls.clientHeight) ls.scrollTop = bot - ls.clientHeight + 4;
}
function ddClose(refocus){
  var ls = document.getElementById('ddList'); if (ls) ls.parentNode.removeChild(ls);
  if (!ddOpen) return;
  var b = document.getElementById(ddOpen.id); ddOpen = null;
  if (b) { b.setAttribute('aria-expanded', 'false'); if (refocus) b.focus({preventScroll: true}); }
}
function ddPick(k){
  if (!ddOpen) return;
  var o = DD[ddOpen.id], x = o.options[k];
  ddClose(true);
  if (x && x.v !== o.value) o.pick(x.v);
}
document.addEventListener('keydown', function(e){
  var t2 = e.target;
  // Enter and Space already click the button; arrows open it too
  if (t2 && t2.classList && t2.classList.contains('dd-btn') && !ddOpen && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) { e.preventDefault(); ddOpenList(t2.id); return; }
  if (!ddOpen || !t2 || t2.id !== 'ddList') return;
  if (e.key !== 'Tab') e.stopPropagation(); // keys in the open list are for the list, not page shortcuts
  var n = DD[ddOpen.id].options.length, k = ddOpen.active;
  if (e.key === 'ArrowDown') { e.preventDefault(); ddActive(k + 1); }
  else if (e.key === 'ArrowUp') { e.preventDefault(); ddActive(k - 1); }
  else if (e.key === 'Home' || e.key === 'PageUp') { e.preventDefault(); ddActive(e.key === 'Home' ? 0 : k - 6); }
  else if (e.key === 'End' || e.key === 'PageDown') { e.preventDefault(); ddActive(e.key === 'End' ? n - 1 : k + 6); }
  else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); ddPick(k); }
  else if (e.key === 'Escape') { e.preventDefault(); ddClose(true); }
  else if (e.key === 'Tab') { ddClose(true); }
  else if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
    // type to jump to an option
    var now = Date.now(); ddOpen.typed = (now - ddOpen.typedAt > 700 ? '' : ddOpen.typed) + e.key.toLowerCase(); ddOpen.typedAt = now;
    var opts = DD[ddOpen.id].options;
    for (var j = 0; j < n; j++) { var c = (k + (ddOpen.typed.length > 1 ? 0 : 1) + j) % n; if (opts[c].label.toLowerCase().indexOf(ddOpen.typed) === 0) { ddActive(c); break; } }
  }
}, true);
document.addEventListener('pointerdown', function(e){
  if (!ddOpen) return;
  var inList = e.target.closest && e.target.closest('#ddList'), onBtn = e.target.closest && e.target.closest('#' + ddOpen.id);
  if (!inList && !onBtn) ddClose(false);
});
document.addEventListener('click', function(e){
  var o = e.target.closest && e.target.closest('#ddList .dd-opt');
  if (o) ddPick(+o.getAttribute('data-k'));
});
document.addEventListener('pointermove', function(e){
  var o = ddOpen && e.target.closest && e.target.closest('#ddList .dd-opt');
  if (o && +o.getAttribute('data-k') !== ddOpen.active) ddActive(+o.getAttribute('data-k'));
});
window.addEventListener('scroll', function(){ if (ddOpen) requestAnimationFrame(ddPlace); }, {passive: true});
window.addEventListener('resize', function(){ ddClose(false); });

/* Tooltips: shown on mouse hover (after a short pause) and on keyboard focus; never on touch */
var hintEl = null, hintFor = null, hintTimer = null;
function showHint(el){
  var txt = el.getAttribute('data-hint'); if (!txt || ddOpen) return;
  if (!hintEl) { hintEl = document.createElement('div'); hintEl.className = 'hint'; hintEl.setAttribute('aria-hidden', 'true'); document.body.appendChild(hintEl); }
  hintEl.textContent = txt; hintFor = el;
  var r = el.getBoundingClientRect(), tw = hintEl.offsetWidth, th = hintEl.offsetHeight;
  var top = r.bottom + 8; if (top + th > window.innerHeight - 8) top = r.top - th - 8;
  var left = Math.min(Math.max(8, r.left + r.width / 2 - tw / 2), window.innerWidth - tw - 8);
  hintEl.style.left = Math.round(left) + 'px'; hintEl.style.top = Math.round(top) + 'px';
  hintEl.classList.add('on');
}
function hideHint(){ clearTimeout(hintTimer); if (hintEl) hintEl.classList.remove('on'); hintFor = null; }
document.addEventListener('pointerover', function(e){
  if (e.pointerType === 'touch') return;
  var el = e.target.closest && e.target.closest('[data-hint]');
  if (!el || el === hintFor) return;
  clearTimeout(hintTimer); hintTimer = setTimeout(function(){ if (el.isConnected && el.matches(':hover')) showHint(el); }, 400);
});
document.addEventListener('pointerout', function(e){
  var el = e.target.closest && e.target.closest('[data-hint]');
  if (el && !(e.relatedTarget && el.contains(e.relatedTarget))) hideHint();
});
document.addEventListener('focusin', function(e){
  var el = e.target.closest && e.target.closest('[data-hint]');
  hideHint();
  if (el && el.matches(':focus-visible')) showHint(el);
});
document.addEventListener('focusout', hideHint);
document.addEventListener('pointerdown', hideHint, true);
window.addEventListener('scroll', hideHint, {passive: true});
document.addEventListener('keydown', function(e){ if (e.key === 'Escape' && hintFor) hideHint(); });

/* ---------------- floating question bar (practice and quick mock) ---------------- */
var ARROW_DN = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6"/></svg>';
var ARROW_UP = '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6"/></svg>';
function qbarList(){ return S.exMode === 'mock' ? S.mock.set : practiceList(); }
function qbarDone(qi){ return S.exMode === 'mock' ? answered(A.qs[qi], S.mock.ans[qi]) : !!S.checked[qi]; }
function qbarHTML(){
  var tt = t();
  if (!qbarList().length) return '';
  return '<div class="qbar" id="qbar" role="region" aria-label="' + tt.qbNav + '"><div class="qbar-in">' +
    '<div class="qbar-info"><div class="qbar-line"><b id="qbPos"></b><span id="qbStats"></span><span class="qbar-err" id="qbErr" role="status"></span></div><div class="qbar-prog" aria-hidden="true"><i id="qbProg"></i></div></div>' +
    '<form class="qbar-go" id="qbGo" novalidate><label for="qbGoIn" class="sr-only">' + tt.qbGo + '</label><input id="qbGoIn" class="field" type="text" inputmode="numeric" pattern="[0-9]*" maxlength="3" autocomplete="off" enterkeyhint="go" placeholder="' + tt.qbGoPh + '" data-hint="' + tt.qbGo + '"></form>' +
    '<button type="button" class="ctl qbar-top" data-act="qb-top" aria-label="' + tt.qbTop + '" data-hint="' + tt.qbTop + '">' + ARROW_UP + '</button>' +
    '<button type="button" class="btn pri qbar-next" id="qbNext" data-act="qb-next"></button></div></div>';
}
/* questions sit below the sticky header (and the mock's timer bar) */
function qbarOffset(){
  var h = document.querySelector('.top').getBoundingClientRect().bottom, eb = document.querySelector('.exbar');
  if (eb) h = Math.max(h, (parseFloat(getComputedStyle(eb).top) || 0) + eb.offsetHeight); // where the timer bar sits once stuck
  return h + 12;
}
/* the question at the top of the screen: the first one whose bottom is still below the header */
function qbarCurrent(list){
  var top = qbarOffset() + 40, lo = 0, hi = list.length - 1, at = list.length - 1;
  while (lo <= hi) {
    var mid = (lo + hi) >> 1, el = document.getElementById('q-' + list[mid]);
    if (!el) return 0;
    if (el.getBoundingClientRect().bottom > top) { at = mid; hi = mid - 1; } else lo = mid + 1;
  }
  return at;
}
function qbarNext(list, cur){
  for (var k = 1; k <= list.length; k++) { var j = (cur + k) % list.length; if (!qbarDone(list[j])) return j; }
  return -1;
}
function paintQbar(){
  var bar = document.getElementById('qbar');
  document.body.classList.toggle('has-qbar', !!bar);
  if (!bar) return;
  var tt = t(), list = qbarList(), cur = qbarCurrent(list), done = 0, right = 0;
  list.forEach(function(qi){ if (qbarDone(qi)) { done++; if (S.exMode === 'practice' && correct(A.qs[qi], S.ans[qi])) right++; } });
  // long labels on wide screens, short ones on phones (CSS picks which shows)
  var pos = '<span class="lg">' + esc(fmt(tt.qbPos, {k: cur + 1, n: list.length})) + '</span><span class="sm" aria-hidden="true">' + (cur + 1) + ' / ' + list.length + '</span>', pe = document.getElementById('qbPos');
  if (pe.innerHTML !== pos) pe.innerHTML = pos;
  document.getElementById('qbStats').textContent = S.exMode === 'mock' ? fmt(tt.qbAns, {a: done}) : fmt(tt.statsLine, {c: done, r: right});
  document.getElementById('qbProg').style.width = (list.length ? done * 100 / list.length : 0) + '%';
  var nx = qbarNext(list, cur), b = document.getElementById('qbNext');
  b.setAttribute('data-to', nx < 0 ? '' : list[nx]);
  var html = nx < 0 ? esc(tt.qbAllDone) : '<span class="lg">' + esc(tt.qbNext) + '</span><span class="sm">' + esc(tt.qbNextS) + '</span>' + ARROW_DN;
  if (b.innerHTML !== html) b.innerHTML = html;
}
function goToQ(){
  var inp = document.getElementById('qbGoIn'), err = document.getElementById('qbErr'), list = qbarList();
  var n = parseInt((inp.value || '').replace(/\D/g, ''), 10);
  if (!(n >= 1 && n <= list.length)) {
    var m = fmt(t().qbGoErr, {n: list.length});
    inp.setAttribute('aria-invalid', 'true'); err.textContent = m; inp.select();
    return;
  }
  inp.value = ''; inp.removeAttribute('aria-invalid'); err.textContent = '';
  scrollToQ(list[n - 1], true);
  announce(fmt(t().qbPos, {k: n, n: list.length}));
}
function smoothScroll(){ return !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches); }
function scrollToQ(qi, focus){
  var el = document.getElementById('q-' + qi); if (!el) return;
  // focus first: in Chrome, moving focus cancels a smooth scroll that is already running
  if (focus) { el.setAttribute('tabindex', '-1'); el.focus({preventScroll: true}); }
  window.scrollTo({top: Math.max(0, window.scrollY + el.getBoundingClientRect().top - qbarOffset()), behavior: smoothScroll() ? 'smooth' : 'auto'});
}
var qbTick = false;
function queueQbar(){ if (qbTick) return; qbTick = true; requestAnimationFrame(function(){ qbTick = false; paintQbar(); }); }
window.addEventListener('scroll', queueQbar, {passive: true});
window.addEventListener('resize', queueQbar);
function reQ(qi){ var el = document.getElementById('q-' + qi); if (!el) return; el.outerHTML = qHTML(qi, +el.getAttribute('data-num')); afterAnswer(); }

/* ---------------- real exam simulation ---------------- */
function simAnswered(){ return S.sim.set.filter(function(qi){ return answered(A.qs[qi], S.sim.ans[qi]); }).length; }
function simCounts(){ var a = simAnswered(); return {a: a, u: S.sim.set.length - a, f: S.sim.flags.length, t: S.sim.set.length}; }
/* AWS does not publish the raw-to-scaled conversion; assume ~72% correct lands at 700. */
function scaledEstimate(frac){ return Math.round(frac <= 0.72 ? 100 + frac / 0.72 * 600 : 700 + (frac - 0.72) / 0.28 * 300); }
function freshFirst(ids){
  return shuffle(ids.filter(function(i){ return !inArr(S.seen, i); })).concat(shuffle(ids.filter(function(i){ return inArr(S.seen, i); })));
}
function startSim(){
  var want = {d1: 10, d2: 12, d3: 14, d4: 7, d5: 7}, scored = [];
  Object.keys(want).forEach(function(d){
    scored = scored.concat(freshFirst(A.qs.map(function(_, i){ return i; }).filter(function(i){ return A.qs[i].d === d; })).slice(0, want[d]));
  });
  var uns = freshFirst(A.qs.map(function(_, i){ return i; }).filter(function(i){ return !inArr(scored, i); })).slice(0, 15);
  var set = shuffle(scored.concat(uns));
  set.forEach(function(qi){ delete S.qperm[qi]; });
  S.sim = {set: set, uns: uns, ans: {}, flags: [], idx: 0, screen: 'q', rf: 'all', end: Date.now() + 90 * 60 * 1000, submitted: false};
  S.simDlg = null;
  saveExam();
}
function finishSim(how){
  var sim = S.sim, c = 0, n = 0, by = {}, wrong = 0;
  sim.set.forEach(function(qi){
    var q = A.qs[qi], ok = correct(q, sim.ans[qi]);
    recordResult(qi, ok);
    if (!ok) wrong++;
    if (inArr(sim.uns, qi)) return;
    n++; by[q.d] = by[q.d] || {c: 0, n: 0}; by[q.d].n++;
    if (ok) { c++; by[q.d].c++; }
  });
  var frac = n ? c / n : 0;
  sim.res = {c: c, n: n, pct: Math.round(frac * 100), scaled: scaledEstimate(frac), by: by, wrong: wrong, how: how};
  sim.submitted = true; sim.rf = 'all'; S.simDlg = null;
  S.hist = S.hist.concat([{t: Date.now(), m: 'sim', pct: sim.res.pct, sc: sim.res.scaled}]).slice(-60); store.set('hist', S.hist);
  var best = store.get('bestSim', null);
  if (best == null || sim.res.scaled > best) store.set('bestSim', sim.res.scaled);
  saveExam();
  if (S.view === 'exam') { render(); if (S.exMode === 'sim') window.scrollTo(0, 0); }
}
function simGo(idx){
  S.sim.idx = Math.max(0, Math.min(S.sim.set.length - 1, idx)); S.sim.screen = 'q';
  saveExam(); render(); window.scrollTo(0, 0);
}
function simDialog(){
  var tt = t(), k = simCounts(), end = S.simDlg === 'end', title, text, ok, cancel;
  if (end) { title = tt.dlgEndT; text = fmt(tt.dlgEndP, k); ok = tt.dlgEndOk; cancel = tt.dlgCancel; }
  else { title = tt.dlgSubT; text = (k.u || k.f) ? fmt(tt.dlgSubP, k) : fmt(tt.dlgSubPAll, k); ok = tt.dlgSubOk; cancel = tt.dlgKeep; }
  return '<div class="dlg-back"><div class="dlg" role="alertdialog" aria-modal="true" aria-labelledby="dlgT" aria-describedby="dlgD">' +
    '<h3 id="dlgT">' + title + '</h3><p id="dlgD">' + text + '</p>' +
    '<div class="dlg-stats"><span><b>' + k.a + '</b> ' + tt.revAns + '</span><span><b>' + k.u + '</b> ' + tt.revUn + '</span><span><b>' + k.f + '</b> ' + tt.revFl + '</span></div>' +
    '<div class="row dlg-act"><button type="button" class="btn" id="dlgCancel" data-act="sim-dlg-cancel">' + cancel + '</button><button type="button" class="btn ' + (end ? 'danger-solid' : 'pri') + '" data-act="sim-dlg-ok">' + ok + '</button></div></div></div>';
}
function vSim(){
  var tt = t(), sim = S.sim;
  if (!sim) {
    var best = store.get('bestSim', null);
    return '<section class="panel" style="max-width:860px"><h3 style="font-size:20px">' + tt.simH + '</h3><ul class="plain">' + tt.simList.map(function(x){ return '<li>' + x + '</li>'; }).join('') + '</ul>' +
      (best != null ? '<p class="muted" style="margin:12px 0 0">' + tt.simBest + ': <b style="color:var(--ink)">' + best + '</b> / 1000</p>' : '') +
      '<div class="row" style="margin-top:16px"><button type="button" class="btn pri" data-act="sim-start">' + tt.simStart + '</button></div></section>';
  }
  if (!sim.submitted) {
    var left = sim.end - Date.now(), k = simCounts();
    var bar = '<div class="exbar"><span class="muted">' + tt.timeLeft + '</span><span class="tm' + (left < 300000 ? ' low' : '') + '" id="timer">' + fmtTime(left) + '</span>' +
      '<span class="muted">' + tt.answered + ' <b id="ansCount" style="color:var(--ink)">' + k.a + '</b>/' + k.t + '</span><span class="sp"></span>' +
      (sim.screen === 'q' ? '<button type="button" class="btn sm" data-act="sim-review">' + tt.reviewBtn + '</button>' : '') +
      '<button type="button" class="btn sm danger" data-act="sim-end-ask">' + tt.endExam + '</button></div>';
    var main;
    if (sim.screen === 'review') {
      var list = sim.set.map(function(qi, i){ return i; }).filter(function(i){
        var qi = sim.set[i];
        if (sim.rf === 'un') return !answered(A.qs[qi], sim.ans[qi]);
        if (sim.rf === 'fl') return inArr(sim.flags, qi);
        return true;
      });
      main = '<section class="panel simrev"><h3 style="font-size:20px">' + tt.revH + '</h3><p class="muted" style="margin:4px 0 14px">' + fmt(tt.revP, k) + '</p>' +
        '<div class="seg" role="group">' + [['all', tt.all + ' · ' + k.t], ['un', tt.revUn + ' · ' + k.u], ['fl', tt.revFl + ' · ' + k.f]].map(function(f){
          return '<button type="button" data-act="sim-rf" data-f="' + f[0] + '" aria-pressed="' + (sim.rf === f[0]) + '">' + f[1] + '</button>'; }).join('') + '</div>' +
        (list.length ? '<div class="tiles">' + list.map(function(i){
          var qi = sim.set[i], an = answered(A.qs[qi], sim.ans[qi]), fl = inArr(sim.flags, qi);
          return '<button type="button" class="tile' + (an ? ' ans' : '') + (fl ? ' fl' : '') + (i === sim.idx ? ' cur' : '') + '" data-act="sim-go" data-i="' + i + '" aria-label="' + fmt(tt.qOf, {n: i + 1, t: k.t}) + (an ? '' : ', ' + tt.revUn) + (fl ? ', ' + tt.revFl : '') + '">' + (i + 1) + '</button>';
        }).join('') + '</div>' : '<p class="muted">' + tt.none + '</p>') +
        '<div class="tile-key"><span><i class="tile ans"></i>' + tt.revAns + '</span><span><i class="tile"></i>' + tt.revUn + '</span><span><i class="tile fl"></i>' + tt.revFl + '</span></div>' +
        '<div class="row" style="margin-top:18px;justify-content:space-between"><button type="button" class="btn" data-act="sim-go" data-i="' + sim.idx + '">' + fmt(tt.backToQ, {n: sim.idx + 1}) + '</button>' +
        '<button type="button" class="btn pri" data-act="sim-submit-ask">' + tt.submitExam + '</button></div></section>';
    } else {
      var qi = sim.set[sim.idx], last = sim.idx === sim.set.length - 1, fl = inArr(sim.flags, qi);
      main = '<div class="simq">' + qHTML(qi, sim.idx + 1) +
        '<div class="simnav"><button type="button" class="btn" data-act="sim-prev"' + (sim.idx === 0 ? ' disabled' : '') + '>' + tt.prevQ + '</button>' +
        '<button type="button" class="btn flagbtn" data-act="sim-flag" aria-pressed="' + fl + '">⚑ ' + (fl ? tt.flagged : tt.flag) + '</button>' +
        '<button type="button" class="btn pri" data-act="' + (last ? 'sim-review' : 'sim-next') + '">' + (last ? tt.toReview : tt.nextQ) + '</button></div>' +
        '<p class="muted simhint">' + tt.simKeys + '</p></div>';
    }
    return bar + main + (S.simDlg ? simDialog() : '');
  }
  var r = sim.res, pass = r.scaled >= 700;
  var how = r.how === 'end' ? tt.howEnd : (r.how === 'time' ? tt.howTime : '');
  var shown = sim.set.map(function(qi, i){ return i; }).filter(function(i){
    var qi = sim.set[i];
    if (sim.rf === 'wrong') return !correct(A.qs[qi], sim.ans[qi]);
    if (sim.rf === 'fl') return inArr(sim.flags, qi);
    if (sim.rf === 'uns') return inArr(sim.uns, qi);
    return true;
  });
  return '<section class="panel" style="max-width:860px;margin-bottom:16px"><div class="score"><div><div class="big ' + (pass ? 'ok' : 'no') + '">' + r.scaled + '</div><div class="muted" style="font-size:12.5px;margin-top:4px">/ 1000 · ' + tt.estScore + '</div></div>' +
    '<div><h3 style="font-size:20px">' + tt.simResH + ' <span class="verdict ' + (pass ? 'ok' : 'no') + '">' + (pass ? tt.passEst : tt.failEst) + '</span></h3>' +
    '<p class="muted" style="margin:6px 0 4px">' + fmt(tt.simLine, {c: r.c, n: r.n, p: r.pct}) + (how ? ' ' + how : '') + '</p>' +
    '<p class="muted" style="margin:0 0 10px;font-size:13px">' + tt.estNote + '</p>' +
    '<div class="dscore">' + A.domains.map(function(d){ var b = r.by[d.id] || {c: 0, n: 0}, p = b.n ? Math.round(b.c * 100 / b.n) : 0; return '<div style="--c:' + dc(d.id) + '"><span>D' + d.n + '</span><span class="bar"><i style="width:' + p + '%"></i></span><span>' + b.c + '/' + b.n + '</span></div>'; }).join('') + '</div>' +
    '<div class="row" style="margin-top:16px"><button type="button" class="btn pri" data-act="sim-start">' + tt.newSim + '</button>' +
    (r.wrong ? '<button type="button" class="btn" data-act="practice-missed">' + fmt(tt.practiceMissed, {n: r.wrong}) + '</button>' : '') + '</div></div></div></section>' +
    '<div class="filters"><div class="chips">' + [['all', tt.all + ' · ' + sim.set.length], ['wrong', tt.rfWrong + ' · ' + r.wrong], ['fl', tt.revFl + ' · ' + sim.flags.length], ['uns', tt.unscoredTag + ' · ' + sim.uns.length]].map(function(f){
      return '<button type="button" class="chip" data-act="sim-rf" data-f="' + f[0] + '" aria-pressed="' + (sim.rf === f[0]) + '">' + f[1] + '</button>'; }).join('') + '</div></div>' +
    '<div class="qlist">' + shown.map(function(i){ return qHTML(sim.set[i], i + 1); }).join('') + '</div>';
}

/* ---------------- services ---------------- */
function svcTable(){
  var tt = t(), l = L(), q = S.svcQ.trim().toLowerCase();
  var rows = A.svc.filter(function(s){ return (S.svcCat === 'all' || s.c === S.svcCat) && (!S.svcScope || s.s) && (!q || (s.n + ' ' + s.en.w + ' ' + s.en.p + ' ' + s.zh.w + ' ' + s.zh.p).toLowerCase().indexOf(q) >= 0); });
  if (!rows.length) return '<div class="empty">' + tt.none + '</div>';
  return '<div class="tw svc"><table><thead><tr><th>' + tt.svcCol[0] + '</th><th>' + tt.svcCol[1] + '</th><th>' + tt.svcCol[2] + '</th></tr></thead><tbody>' +
    rows.map(function(s){
      var sc = s.s === 'L' ? '<span class="badge in">' + tt.scopeL + '</span>' : (s.s === 'F' ? '<span class="badge part">' + tt.scopeF + '</span>' : '<span class="badge ctx">' + tt.scopeC + '</span>');
      return '<tr><td>' + esc(s.n) + '<div class="cat" style="--c:' + CATC[s.c] + '">' + tt.cat[s.c] + '</div>' + sc + '</td><td>' + esc(s[l].w) + '</td><td>' + esc(s[l].p) + '</td></tr>';
    }).join('') + '</tbody></table></div>';
}
function vServices(){
  var tt = t();
  var cats = ['all','genai','ml','ai','infra','data','core','sec','gov'];
  return '<div class="sechead"><div><h2>' + tt.svcH + '</h2><p>' + tt.svcP + '</p></div></div>' +
    '<div class="filters">' + '<div class="sfield">' + '<input id="svcSearch" class="field" type="search" enterkeyhint="search" autocomplete="off" placeholder="' + tt.svcSearch + '" aria-label="' + tt.svcSearch + '" value="' + esc(S.svcQ) + '">' + '<button type="button" class="sclear" data-act="sclear" aria-label="' + tt.clearTxt + '" data-hint="' + tt.clearTxt + '">' + XICON + '</button></div>' + '<div class="chips">' +
    cats.map(function(c){ return '<button type="button" class="chip"' + (c !== 'all' ? ' style="--c:' + CATC[c] + '"' : '') + ' data-act="svccat" data-c="' + c + '" aria-pressed="' + (S.svcCat === c) + '">' + (c !== 'all' ? '<span class="dot"></span>' : '') + tt.cat[c] + '</button>'; }).join('') +
    '</div><label class="toggle" for="svcScope"><input type="checkbox" id="svcScope"' + (S.svcScope ? ' checked' : '') + '> ' + tt.scopeOnly + '</label></div><div id="svcTable">' + svcTable() + '</div>';
}

/* ---------------- glossary ---------------- */
function glList(){
  var tt = t(), l = L(), o = l === 'en' ? 'zh' : 'en', q = S.glQ.trim().toLowerCase();
  var items = A.gloss.filter(function(g){ return !q || (g.en.t + ' ' + g.en.d + ' ' + g.zh.t + ' ' + g.zh.d).toLowerCase().indexOf(q) >= 0; })
    .sort(function(a, b){ return a.en.t.toLowerCase() < b.en.t.toLowerCase() ? -1 : 1; });
  if (!items.length) return '<div class="empty">' + tt.none + '</div>';
  return '<div class="gl">' + items.map(function(g){ return '<div class="gi"><b>' + esc(g[l].t) + '</b>' + (g[o].t !== g[l].t ? '<small>' + esc(g[o].t) + '</small>' : '') + '<p>' + esc(g[l].d) + '</p></div>'; }).join('') + '</div>';
}
function vGlossary(){
  var tt = t();
  return '<div class="sechead"><div><h2>' + tt.glH + '</h2><p>' + fmt(tt.glP, {n: A.gloss.length}) + '</p></div></div>' +
    '<div class="filters">' + '<div class="sfield">' + '<input id="glSearch" class="field" type="search" enterkeyhint="search" autocomplete="off" placeholder="' + tt.glSearch + '" aria-label="' + tt.glSearch + '" value="' + esc(S.glQ) + '">' + '<button type="button" class="sclear" data-act="sclear" aria-label="' + tt.clearTxt + '" data-hint="' + tt.clearTxt + '">' + XICON + '</button></div>' + '</div><div id="glList">' + glList() + '</div>';
}

/* ---------------- plan ---------------- */
function vPlan(){
  var tt = t(), l = L();
  return '<div class="sechead"><div><h2>' + tt.planH + '</h2><p>' + tt.planP + '</p></div></div><div class="days">' +
    A.plan.map(function(day, di){
      var n = day.items.length, dn = day.items.filter(function(_, ii){ return inArr(S.planDone, di + '-' + ii); }).length;
      var dayLabel = l === 'en' ? tt.day + ' ' + (di + 1) : tt.day + ' ' + (di + 1) + ' 天';
      return '<section class="day"><div class="day-h"><span class="dn">' + dayLabel + '</span><h3>' + esc(day[l]) + '</h3><span class="pct">' + dn + '/' + n + '</span></div><ul>' +
        day.items.map(function(it, ii){
          var key = di + '-' + ii, on = inArr(S.planDone, key);
          return '<li><label class="' + (on ? 'on' : '') + '" for="p-' + key + '"><input type="checkbox" id="p-' + key + '" data-act="plan" data-k="' + key + '"' + (on ? ' checked' : '') + '><span>' + esc(l === 'en' ? it[1] : it[2]) + ' <button type="button" class="link" data-act="plan-go" data-t="' + it[0] + '">' + tt.go + '</button></span></label></li>';
        }).join('') + '</ul></section>';
    }).join('') + '</div>';
}

/* ---------------- render + events ---------------- */
var VIEWFN = {overview: vOverview, course: vCourse, cards: vCards, exam: vExam, services: vServices, glossary: vGlossary, plan: vPlan};
function render(){ renderHeader(); document.getElementById('app').innerHTML = VIEWFN[S.view](); paintQbar(); }
function setView(v){
  if (menuOpen) setMenu(false, false);
  S.view = v;
  try { if (!/access_token=|error_description=/.test(location.hash || '')) history.replaceState(null, '', '#' + v); } catch (e) {}
  render(); window.scrollTo(0, 0);
}
function openTask(id){ if (!A.tasks[id]) return; S.task = id; store.set('task', id); setView('course'); }
function focusSel(sel){ var el = document.querySelector(sel); if (el && !el.disabled) el.focus({preventScroll: true}); }
function cardMove(step){ var n = deck().length; if (!n) return; S.cardIdx = (S.cardIdx + step + n) % n; S.flip = false; render(); }

document.addEventListener('click', function(e){
  var go = e.target.closest('[data-go]');
  if (go) { e.preventDefault(); if (go.getAttribute('data-mode')) S.exMode = go.getAttribute('data-mode'); setView(go.getAttribute('data-go')); return; }
  var el = e.target.closest('[data-act]');
  if (!el || el.disabled) return;
  var act = el.getAttribute('data-act'), qi = +el.getAttribute('data-q'), i = +el.getAttribute('data-i');
  switch (act) {
    case 'about': openAbout(el); break;
    case 'log': openLog(el); break;
    case 'acct': openAcct(); break;
    case 'acct-x': closeAcct(true); break;
    case 'acct-sync': safePull(); break;
    case 'acct-resend': resendLink(); break;
    case 'acct-other': otherEmail(); break;
    case 'acct-out': sbc.auth.signOut().then(function(){ acctMsg = ''; paintSync(); render(); }); break;
    case 'acct-del': acctDel = true; paintAcct(); focusSel('[data-act="acct-del-no"]'); break;
    case 'acct-del-no': acctDel = false; paintAcct(); focusSel('.acct-del'); break;
    case 'acct-del-yes': sbc.rpc('delete_my_account').then(function(r){
        if (r.error) { acctMsg = errText(r.error); acctDel = false; paintAcct(); return; }
        return sbc.auth.signOut({scope: 'local'}).then(function(){ acctDel = false; acctMsg = t().deleted; paintSync(); render(); });
      }); break;
    case 'focus-go': S.exMode = 'practice'; S.exFilter = el.getAttribute('data-f'); saveExam(); setView('exam'); break;
    case 'gs-go': searchGo(el.getAttribute('data-kind'), el.getAttribute('data-id')); break;
    case 'gs-close': if (e.target === el || el.tagName === 'BUTTON') closeSearch(); break;
    case 'skip': e.preventDefault(); var mn = document.getElementById('app'); mn.setAttribute('tabindex', '-1'); mn.focus(); break;
    case 'about-close': if (e.target === el) closeAbout(); break;
    case 'open-task': openTask(el.getAttribute('data-task')); break;
    case 'toggle-done':
      if (inArr(S.done, S.task)) S.done = S.done.filter(function(x){ return x !== S.task; }); else S.done = S.done.concat([S.task]);
      store.set('done', S.done); render(); focusSel('.done-btn'); break;
    case 'cdom': S.cardDomain = el.getAttribute('data-d'); S.queue = null; S.cardIdx = 0; S.flip = false; render(); break;
    case 'cmode': S.cardMode = el.getAttribute('data-mode'); store.set('cardMode', S.cardMode); S.queue = null; S.cardIdx = 0; S.flip = false; render(); break;
    case 'newround': S.queue = null; render(); break;
    case 'flip': S.flip = !S.flip; render(); focusSel('#fcard'); break;
    case 'cprev': cardMove(-1); focusSel('[data-act="cprev"]'); break;
    case 'cnext': cardMove(1); focusSel('[data-act="cnext"]'); break;
    case 'know': case 'learn': {
      var dk = deck(), ci = dk[S.cardIdx];
      if (ci == null) break;
      var okc = act === 'know';
      rateCard(ci, okc);
      if (S.cardMode === 'due') { S.queue.splice(S.cardIdx, 1); if (!okc) S.queue.push(ci); if (S.cardIdx >= S.queue.length) S.cardIdx = 0; }
      else if (dk.length) S.cardIdx = (S.cardIdx + 1) % dk.length;
      S.flip = false; render(); focusSel('[data-act="' + act + '"]'); break;
    }
    case 'cshuffle': S.perm = S.perm ? null : shuffle(A.cards.map(function(_, k){ return k; })); S.cardIdx = 0; S.flip = false; render(); break;
    case 'exmode': S.exMode = el.getAttribute('data-mode'); saveExam(); render(); break;
    case 'exfilter': {
      S.exFilter = el.getAttribute('data-f');
      if (S.exFilter === 'missed') clearAnswers(S.missed.slice());
      render(); break;
    }
    case 'practice-task': S.exMode = 'practice'; S.exFilter = 't:' + el.getAttribute('data-task'); saveExam(); setView('exam'); break;
    case 'practice-missed': goPracticeMissed(); break;
    case 'pick': {
      var q = A.qs[qi];
      if (q.t === 'single') setAns(qi, i);
      else { var cur = (getAns(qi) || []).slice(), at = cur.indexOf(i); if (at >= 0) cur.splice(at, 1); else cur.push(i); setAns(qi, cur); }
      saveExam(); reQ(qi); focusSel('[data-act="pick"][data-q="' + qi + '"][data-i="' + i + '"]'); break;
    }
    case 'ord': { var arr = (getAns(qi) || []).slice(); if (!inArr(arr, i)) arr.push(i); setAns(qi, arr); saveExam(); reQ(qi); break; }
    case 'ordreset': setAns(qi, []); saveExam(); reQ(qi); break;
    case 'check': { var cq = A.qs[qi], cok = correct(cq, S.ans[qi]); S.checked[qi] = true; recordResult(qi, cok); saveExam(); reQ(qi); scrollToQ(qi, true);
      announce(cok ? t().liveOk : ((cq.t === 'single' || cq.t === 'multi') ? fmt(t().liveNo, {a: answerKey(qi, cq)}) : t().incorrect)); break; }
    case 'qb-next': { var to = el.getAttribute('data-to');
      if (to === '') window.scrollTo({top: 0, behavior: smoothScroll() ? 'smooth' : 'auto'});
      else { var tl = qbarList(); scrollToQ(+to, true); announce(fmt(t().qbPos, {k: tl.indexOf(+to) + 1, n: tl.length})); }
      break; }
    case 'qb-top': window.scrollTo({top: 0, behavior: smoothScroll() ? 'smooth' : 'auto'}); break;
    case 'dd': if (ddOpen && ddOpen.id === el.id) ddClose(true); else ddOpenList(el.id); break;
    case 'sclear': { var si = el.parentNode.querySelector('input'); if (si) { si.value = ''; si.dispatchEvent(new Event('input', {bubbles: true})); si.focus(); } break; }
    case 'tview': { var tb2 = document.getElementById('tviewBody'), open = el.getAttribute('aria-expanded') !== 'true'; el.setAttribute('aria-expanded', String(open)); tb2.hidden = !open; break; }
    case 'lang': if (menuOpen) setMenu(false, false); switchLang(el); break;
    case 'reset-practice': clearAnswers(practiceList()); render(); break;
    case 'start-mock': startMock(); render(); window.scrollTo(0, 0); break;
    case 'sim-start': startSim(); render(); window.scrollTo(0, 0); break;
    case 'sim-next': simGo(S.sim.idx + 1); break;
    case 'sim-prev': simGo(S.sim.idx - 1); break;
    case 'sim-go': simGo(+el.getAttribute('data-i')); break;
    case 'sim-flag': {
      var fq = S.sim.set[S.sim.idx];
      S.sim.flags = inArr(S.sim.flags, fq) ? S.sim.flags.filter(function(x){ return x !== fq; }) : S.sim.flags.concat([fq]);
      saveExam(); render(); focusSel('[data-act="sim-flag"]'); break;
    }
    case 'sim-review': S.sim.screen = 'review'; S.sim.rf = 'all'; saveExam(); render(); window.scrollTo(0, 0); break;
    case 'sim-rf': S.sim.rf = el.getAttribute('data-f'); saveExam(); render(); break;
    case 'sim-end-ask': S.simDlg = 'end'; render(); focusSel('#dlgCancel'); break;
    case 'sim-submit-ask': S.simDlg = 'submit'; render(); focusSel('#dlgCancel'); break;
    case 'sim-dlg-cancel': { var was = S.simDlg; S.simDlg = null; render(); focusSel(was === 'end' ? '[data-act="sim-end-ask"]' : '[data-act="sim-submit-ask"]'); break; }
    case 'sim-dlg-ok': finishSim(S.simDlg === 'end' ? 'end' : 'submit'); break;
    case 'submit-mock': {
      var un = S.mock.set.length - mockAnswered();
      if (un > 0 && !S.confirmSubmit) { S.confirmSubmit = true; el.textContent = submitLabel(); break; }
      submitMock(false); break;
    }
    case 'svccat': S.svcCat = el.getAttribute('data-c'); render(); break;
    case 'plan-go': {
      e.preventDefault();
      var tg = el.getAttribute('data-t').split(':'), kind = tg[0], val = tg[1];
      if (kind === 't') openTask(val);
      else if (kind === 'c') { S.cardDomain = val; S.cardIdx = 0; S.flip = false; setView('cards'); }
      else if (kind === 'q') { S.exMode = 'practice'; S.exFilter = val; setView('exam'); }
      else if (kind === 'r') goPracticeMissed();
      else if (kind === 'm') { S.exMode = val === '2' ? 'sim' : 'mock'; setView('exam'); }
      else if (kind === 's') setView('services');
      break;
    }
  }
});
document.addEventListener('change', function(e){
  var el = e.target;
  if (el.id === 'svcScope') { S.svcScope = el.checked; document.getElementById('svcTable').innerHTML = svcTable(); }
  else if (el.id === 'hideKnown') { S.hideKnown = el.checked; store.set('hideKnown', S.hideKnown); S.cardIdx = 0; S.flip = false; render(); focusSel('#hideKnown'); }
  else if (el.getAttribute('data-act') === 'plan') {
    var k = el.getAttribute('data-k');
    if (el.checked) { if (!inArr(S.planDone, k)) S.planDone = S.planDone.concat([k]); } else S.planDone = S.planDone.filter(function(x){ return x !== k; });
    store.set('plan', S.planDone); render(); focusSel('#p-' + k);
  }
});
document.addEventListener('input', function(e){
  var el = e.target;
  if (el.id === 'gsInput') { runSearch(el.value); return; }
  if (el.id === 'railSearch') { S.q = el.value; document.getElementById('railList').innerHTML = railList(); }
  else if (el.id === 'svcSearch') { S.svcQ = el.value; document.getElementById('svcTable').innerHTML = svcTable(); }
  else if (el.id === 'glSearch') { S.glQ = el.value; document.getElementById('glList').innerHTML = glList(); }
});
document.getElementById('menuBtn').addEventListener('click', function(){ setMenu(!menuOpen, true); });
document.getElementById('searchBtn').addEventListener('click', function(){ openSearch(this); });
document.getElementById('acctBtn').addEventListener('click', function(){ if (document.getElementById('acctDlg')) closeAcct(false); else openAcct(); });
function outsideAcct(el){ return el && el.nodeType === 1 && !el.closest('#acctDlg, #acctBtn, [data-act="acct"]'); }
document.addEventListener('pointerdown', function(e){ if (document.getElementById('acctDlg') && outsideAcct(e.target)) closeAcct(false); });
document.addEventListener('focusin', function(e){ if (document.getElementById('acctDlg') && outsideAcct(e.target)) closeAcct(false); });
document.addEventListener('submit', function(e){
  if (e.target && e.target.id === 'acctForm') { e.preventDefault(); sendLink(); }
  else if (e.target && e.target.id === 'qbGo') { e.preventDefault(); goToQ(); }
});
document.addEventListener('input', function(e){
  if (e.target && e.target.id === 'qbGoIn') { e.target.value = e.target.value.replace(/\D/g, ''); e.target.removeAttribute('aria-invalid'); var er = document.getElementById('qbErr'); if (er) er.textContent = ''; }
});
document.getElementById('drawerClose').addEventListener('click', function(){ setMenu(false, true); });
document.getElementById('drawerBack').addEventListener('click', function(){ setMenu(false, true); });
var fitQueued = false;
function queueFit(){ if (fitQueued) return; fitQueued = true; requestAnimationFrame(function(){ fitQueued = false; fitNav(); }); }
window.addEventListener('resize', queueFit);
var chartW = 0;
window.addEventListener('resize', function(){ if (S.view !== 'overview' || !S.hist.length) return; var w = (document.getElementById('app') || {}).clientWidth || 0; if (Math.abs(w - chartW) < 40) return; chartW = w; var cb = document.querySelector('.chartbox'); if (cb) cb.outerHTML = progChart(); });
function showTip(el){ var box = el.closest('.chartbox'), tip = box && box.querySelector('.ctip'); if (!tip) return; tip.textContent = el.getAttribute('data-tip'); tip.hidden = false;
  var cx = +el.getAttribute('cx'), cy = +el.getAttribute('cy'), w = box.clientWidth; tip.style.left = Math.min(Math.max(cx, 110), w - 110) + 'px'; tip.style.top = (cy - 14) + 'px'; }
function hideTip(el){ var box = el.closest('.chartbox'), tip = box && box.querySelector('.ctip'); if (tip) tip.hidden = true; }
['mouseover', 'focusin'].forEach(function(ev){ document.addEventListener(ev, function(e){ var el = e.target.closest && e.target.closest('[data-tip]'); if (el) showTip(el); }); });
['mouseout', 'focusout'].forEach(function(ev){ document.addEventListener(ev, function(e){ var el = e.target.closest && e.target.closest('[data-tip]'); if (el) hideTip(el); }); });
try { new ResizeObserver(queueFit).observe(document.querySelector('.top-in')); } catch (e) {}
try { document.fonts.ready.then(queueFit); } catch (e) {}
/* ---------------- global search ---------------- */
var SIDX = {};
function plain(h){ return String(h).replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim(); }
function searchIndex(){
  var l = L();
  if (SIDX[l]) return SIDX[l];
  var o = l === 'en' ? 'zh' : 'en', idx = [];
  ORDER.forEach(function(id){ var tk = A.tasks[id], body = plain(tk[l]); idx.push({k: 'l', id: id, title: id + ' · ' + tk.title[l], body: body, s: (tk.title[l] + ' ' + body).toLowerCase()}); });
  A.qs.forEach(function(q, i){ var Q = q[l], opts = Q.o.map(function(x){ return Array.isArray(x) ? x.join(' ') : x; }).join(' '); idx.push({k: 'q', id: i, title: Q.q, body: '', s: (Q.q + ' ' + opts + ' ' + Q.x).toLowerCase(), tag: q.k}); });
  A.cards.forEach(function(c, i){ idx.push({k: 'c', id: i, title: c[l].q, body: c[l].a, s: (c[l].q + ' ' + c[l].a).toLowerCase()}); });
  A.svc.forEach(function(sv){ idx.push({k: 's', id: sv.n, title: sv.n, body: sv[l].w, s: (sv.n + ' ' + sv[l].w + ' ' + sv[l].p + ' ' + sv[o].w).toLowerCase()}); });
  A.gloss.forEach(function(g){ idx.push({k: 'g', id: g.en.t, title: g[l].t + (g[o].t !== g[l].t ? ' · ' + g[o].t : ''), body: g[l].d, s: (g.en.t + ' ' + g.zh.t + ' ' + g[l].d).toLowerCase()}); });
  return (SIDX[l] = idx);
}
function snippet(text, term){
  var i = text.toLowerCase().indexOf(term); if (i < 0) return text.slice(0, 120);
  var a = Math.max(0, i - 50), b = Math.min(text.length, i + term.length + 70);
  return (a ? '…' : '') + text.slice(a, b) + (b < text.length ? '…' : '');
}
function markTerms(text, terms){
  var out = esc(text);
  terms.forEach(function(tm){ if (!tm) return; var re = new RegExp('(' + esc(tm).replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'); out = out.replace(re, '<mark>$1</mark>'); });
  return out;
}
function runSearch(q){
  var tt = t(), box = document.getElementById('gsRes'); if (!box) return;
  S.gsQ = q; q = q.trim().toLowerCase();
  if (q.length < 2) { box.innerHTML = '<p class="muted gs-hint">' + tt.sHint + '</p>'; return; }
  var terms = q.split(/\s+/).filter(Boolean);
  var hits = searchIndex().filter(function(r){ return terms.every(function(tm){ return r.s.indexOf(tm) >= 0; }); });
  if (!hits.length) { box.innerHTML = '<p class="muted gs-hint">' + fmt(tt.sNone, {q: esc(q)}) + '</p>'; return; }
  var groups = [['l', tt.sLessons, 6], ['q', tt.sQuestions, 8], ['c', tt.sCards, 6], ['s', tt.sServices, 6], ['g', tt.sGloss, 6]];
  box.innerHTML = groups.map(function(gr){
    var list = hits.filter(function(r){ return r.k === gr[0]; }); if (!list.length) return '';
    return '<section class="gs-g"><h4>' + gr[1] + ' <span>' + list.length + '</span></h4><ul>' + list.slice(0, gr[2]).map(function(r){
      var sub = r.k === 'l' ? snippet(r.body, terms[0]) : (r.body ? snippet(r.body, terms[0]) : (r.tag ? fmt(tt.taskChip, {k: r.tag}) : ''));
      var title = r.title.length > 150 ? r.title.slice(0, 150) + '…' : r.title;
      return '<li><button type="button" class="gs-item" data-act="gs-go" data-kind="' + r.k + '" data-id="' + esc(r.id) + '"><span class="gs-t">' + markTerms(title, terms) + '</span>' + (sub ? '<span class="gs-s">' + markTerms(sub, terms) + '</span>' : '') + '</button></li>';
    }).join('') + '</ul>' + (list.length > gr[2] ? '<p class="gs-more">' + fmt(tt.sMore, {n: list.length - gr[2]}) + '</p>' : '') + '</section>';
  }).join('');
}
var searchReturn = null;
function openSearch(from){
  if (document.getElementById('gsDlg')) return;
  if (menuOpen) setMenu(false, false);
  searchReturn = from || document.activeElement;
  var tt = t();
  document.body.insertAdjacentHTML('beforeend', '<div class="dlg-back gs-back" id="gsDlg" data-act="gs-close"><div class="gs" role="dialog" aria-modal="true" aria-label="' + esc(tt.searchBtn) + '">' +
    '<div class="gs-bar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg>' +
    '<input id="gsInput" type="search" enterkeyhint="search" autocomplete="off" placeholder="' + esc(tt.searchPh) + '" aria-label="' + esc(tt.searchBtn) + '" value="' + esc(S.gsQ || '') + '"><button type="button" class="sclear" data-act="sclear" aria-label="' + tt.clearTxt + '" data-hint="' + tt.clearTxt + '">' + XICON + '</button><button type="button" class="ctl gs-esc" data-act="gs-close" aria-label="Close">Esc</button></div>' +
    '<div class="gs-res" id="gsRes" aria-live="polite"></div></div></div>');
  document.body.style.overflow = 'hidden';
  runSearch(S.gsQ || '');
  setTimeout(function(){ var i = document.getElementById('gsInput'); if (i) { i.focus({preventScroll: true}); i.select(); } }, 30);
}
function closeSearch(silent){
  var d = document.getElementById('gsDlg'); if (!d) return;
  d.parentNode.removeChild(d); document.body.style.overflow = '';
  if (!silent && searchReturn && document.body.contains(searchReturn)) searchReturn.focus({preventScroll: true});
}
function searchGo(kind, id){
  closeSearch(true);
  var q = (S.gsQ || '').trim();
  if (kind === 'l') { S.q = q; openTask(id); }
  else if (kind === 'q') { S.exMode = 'practice'; S.exFilter = 'q:' + id; saveExam(); setView('exam'); }
  else if (kind === 'c') { S.cardMode = 'all'; S.cardDomain = 'all'; S.perm = null; S.queue = null; S.cardIdx = +id; S.flip = false; setView('cards'); }
  else if (kind === 's') { S.svcQ = id; S.svcCat = 'all'; S.svcScope = false; setView('services'); }
  else if (kind === 'g') { S.glQ = id; setView('glossary'); }
}

/* ---------------- sync my progress (Supabase, email sign-in link) ---------------- */
var SYNC_CFG = {url: '__SB_URL__', key: '__SB_KEY__'};
var SB_JS = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.117.1/dist/umd/supabase.js';
var sentTo = '', resendAt = 0, resendTimer = null;
var sbc = null, syncUser = null, syncState = 'off', syncErr = '', lastSync = 0, lastPull = 0, pushTimer = null, syncBusy = false, acctMsg = '', acctDel = false;
function syncEnabled(){ return SYNC_CFG.url.indexOf('https://') === 0 && SYNC_CFG.key.length > 20; }
function localSnapshot(){
  var data = {}, ts = store.get('_ts', {}) || {};
  SYNC_KEYS.forEach(function(k){ var v = store.get(k, undefined); if (v !== undefined) data[k] = v; });
  return {data: data, ts: ts};
}
function writeLocal(snap){
  try {
    Object.keys(snap.data).forEach(function(k){ localStorage.setItem('aifc01:' + k, JSON.stringify(snap.data[k])); });
    localStorage.setItem('aifc01:_ts', JSON.stringify(snap.ts || {}));
  } catch (e) {}
}
function hydrate(){
  S.done = store.get('done', []); S.task = store.get('task', S.task) || '1.1'; if (!A.tasks[S.task]) S.task = '1.1';
  S.srs = store.get('srs', {}); S.missed = store.get('missed', []); S.seen = store.get('seen', []);
  S.stats = store.get('stats', {}); S.hist = store.get('hist', []); S.best = store.get('best', null); S.planDone = store.get('plan', []);
  var ex = store.get('exam', null);
  if (ex && ex.n === A.qs.length) { S.ans = ex.ans || {}; S.checked = ex.checked || {}; S.qperm = ex.qperm || {}; S.mock = ex.mock || null; S.sim = ex.sim || null; }
  var lg = store.get('lang', S.lang); if (lg === 'en' || lg === 'zh') S.lang = lg;
  var cm = store.get('cardMode', S.cardMode); if (cm === 'due' || cm === 'all') S.cardMode = cm;
  S.queue = null;
  if (!document.getElementById('gsDlg') && !S.simDlg) render();
  saveEmailLang();
}
/* sign-in emails are sent in the learner's language (Supabase reads user_metadata.lang) */
function saveEmailLang(){
  if (!syncUser || !sbc || (syncUser.user_metadata || {}).lang === S.lang) return;
  sbc.auth.updateUser({data: {lang: S.lang}}).then(function(r){ if (!r.error && r.data && r.data.user) syncUser = r.data.user; });
}
function setSync(state, err){ syncState = state; syncErr = err || ''; if (state === 'synced') lastSync = Date.now(); paintSync(); }
function syncDirty(){
  if (!syncUser) return;
  setSync('pending');
  clearTimeout(pushTimer);
  pushTimer = setTimeout(safePush, 2500);
}
function errText(e){ return (e && (e.message || e.error_description)) || String(e); }
function safePush(){ if (!syncUser || syncBusy) { if (syncUser) { clearTimeout(pushTimer); pushTimer = setTimeout(safePush, 1500); } return; } syncBusy = true; push().catch(function(e){ setSync(navigator.onLine === false ? 'offline' : 'error', errText(e)); }).then(function(){ syncBusy = false; }); }
function safePull(){ if (!syncUser || syncBusy) return; syncBusy = true; setSync('pending'); pull().catch(function(e){ setSync(navigator.onLine === false ? 'offline' : 'error', errText(e)); }).then(function(){ syncBusy = false; }); }
function push(){
  var snap = localSnapshot();
  return sbc.from('progress').upsert({user_id: syncUser.id, data: snap, updated_at: new Date().toISOString()}).then(function(r){ if (r.error) throw r.error; setSync('synced'); });
}
function pull(){
  lastPull = Date.now();
  return sbc.from('progress').select('data').eq('user_id', syncUser.id).maybeSingle().then(function(r){
    if (r.error) throw r.error;
    var local = localSnapshot(), remote = (r.data && r.data.data && r.data.data.data) ? r.data.data : {data: {}, ts: {}};
    var merged = SDMerge.merge(local, remote);
    var localChanged = JSON.stringify(merged.data) !== JSON.stringify(local.data);
    var remoteChanged = JSON.stringify(merged.data) !== JSON.stringify(remote.data);
    writeLocal(merged);
    if (localChanged) hydrate();
    if (remoteChanged) return push();
    setSync('synced');
  });
}
function loadSupabase(cb){
  if (window.supabase && window.supabase.createClient) return cb();
  var s = document.createElement('script'); s.src = SB_JS; s.async = true;
  s.onload = cb; s.onerror = function(){ setSync('error', 'could not load the sign-in service'); };
  document.head.appendChild(s);
}
function initSync(){
  if (!syncEnabled()) return;
  var h = location.hash || '';
  var m = h.match(/error_description=([^&]*)/);
  if (m) { try { acctMsg = fmt(t().linkExpired, {m: decodeURIComponent(m[1].replace(/\+/g, ' '))}); } catch (e) { acctMsg = fmt(t().linkExpired, {m: ''}); } }
  loadSupabase(function(){
    sbc = window.supabase.createClient(SYNC_CFG.url, SYNC_CFG.key, {auth: {persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, flowType: 'implicit', storageKey: 'aifc01-auth'}});
    sbc.auth.onAuthStateChange(function(ev, session){
      var before = syncUser && syncUser.id;
      syncUser = session ? session.user : null;
      if (syncUser && syncUser.id !== before) { acctMsg = ''; sentTo = ''; safePull(); saveEmailLang(); }
      if (!syncUser) setSync('off');
      paintSync();
      if (/access_token=|error_description=/.test(location.hash || '')) { try { history.replaceState(null, '', location.pathname + location.search + '#' + S.view); } catch (e) {} }
      if (m && !syncUser) openAcct();
    });
  });
  document.addEventListener('visibilitychange', function(){
    if (!syncUser) return;
    if (document.visibilityState === 'hidden' && syncState === 'pending') { clearTimeout(pushTimer); safePush(); }
    else if (document.visibilityState === 'visible' && Date.now() - lastPull > 30000) safePull();
  });
  window.addEventListener('online', function(){ if (syncUser) safePull(); });
  window.addEventListener('offline', function(){ if (syncUser) setSync('offline'); });
  setInterval(function(){ if (document.getElementById('acctDlg')) paintAcct(); }, 30000);
}
function ago(ms){ var tt = t(), mins = Math.round((Date.now() - ms) / 60000); return mins < 1 ? tt.justNow : fmt(tt.minAgo, {n: mins}); }
function paintSync(){
  var b = document.getElementById('acctBtn'); if (!b) return;
  b.hidden = !syncEnabled();
  b.className = 'ctl acct' + (syncUser ? ' is-' + syncState : '');
  var tt = t();
  b.setAttribute('aria-label', tt.syncBtn + (syncUser ? ' · ' + fmt(tt.signedAs, {e: syncUser.email}) : ''));
  b.setAttribute('data-hint', b.getAttribute('aria-label'));
  if (document.getElementById('acctDlg')) paintAcct();
}
function acctHTML(){
  var tt = t();
  if (!sbc) return '<p class="muted">' + (syncState === 'error' ? esc(fmt(tt.stErr, {m: syncErr})) : tt.sending) + '</p>';
  if (!syncUser && sentTo) {
    return '<div class="acct-sent"><span class="acct-sent-ic" aria-hidden="true"><svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 6.5 8.5-6.5"/></svg></span>' +
      '<h4 id="acctSentH" tabindex="-1">' + tt.sentH + '</h4><p class="acct-sent-lead">' + tt.sentTo + '<br><b class="acct-sent-to">' + esc(sentTo) + '</b></p>' +
      '<p class="acct-sent-how">' + tt.sentHow + '</p>' +
      '<div class="row acct-sent-act"><button type="button" class="btn" id="acctResend" data-act="acct-resend"' + (resendLeft() ? ' disabled' : '') + '>' + resendLabel() + '</button><button type="button" class="link" data-act="acct-other">' + tt.otherEmail + '</button></div>' +
      '<p class="acct-msg" id="acctMsg" role="status">' + esc(acctMsg) + '</p></div>';
  }
  if (!syncUser) {
    return '<p>' + tt.syncP + '</p><form id="acctForm" class="acct-form" novalidate><label for="acctEmail">' + tt.emailL + '</label>' +
      '<div class="acct-row"><input id="acctEmail" class="field" type="email" autocomplete="email" inputmode="email" required placeholder="you@example.com"><button type="submit" class="btn pri" id="acctSend">' + tt.sendLink + '</button></div></form>' +
      '<p class="acct-msg" id="acctMsg" role="status">' + esc(acctMsg) + '</p><p class="acct-priv">' + tt.syncPriv + '</p>';
  }
  var st = syncState === 'synced' ? fmt(tt.stSynced, {t: ago(lastSync)}) : syncState === 'pending' ? tt.stPending : syncState === 'offline' ? tt.syncOffline : syncState === 'error' ? fmt(tt.stErr, {m: syncErr}) : '';
  return '<p class="acct-who">' + esc(fmt(tt.signedAs, {e: syncUser.email || ''})) + '</p>' +
    '<p class="acct-state is-' + syncState + '" role="status"><i aria-hidden="true"></i>' + esc(st) + '</p>' +
    '<div class="row"><button type="button" class="btn" data-act="acct-sync">' + tt.syncNow + '</button><button type="button" class="btn" data-act="acct-out">' + tt.signOut + '</button></div>' +
    '<p class="acct-priv">' + tt.signOutNote + '</p>' +
    '<div class="acct-danger">' + (acctDel ?
      '<p>' + tt.delAsk + '</p><div class="row"><button type="button" class="btn" data-act="acct-del-no">' + tt.cancel + '</button><button type="button" class="btn danger-solid" data-act="acct-del-yes">' + tt.delYes + '</button></div>' :
      '<button type="button" class="link acct-del" data-act="acct-del">' + tt.delAcct + '</button>') + '</div>';
}
function paintAcct(){
  var body = document.getElementById('acctBody'); if (!body) return;
  var focusId = document.activeElement && document.activeElement.id, emailVal = (document.getElementById('acctEmail') || {}).value;
  body.innerHTML = acctHTML();
  var em = document.getElementById('acctEmail'); if (em && emailVal) em.value = emailVal;
  if (focusId && document.getElementById(focusId)) document.getElementById(focusId).focus({preventScroll: true});
}
function openAcct(from){
  if (document.getElementById('acctDlg') || !syncEnabled()) return;
  if (menuOpen) setMenu(false, false);
  acctDel = false;
  var tt = t(), b = document.getElementById('acctBtn');
  b.insertAdjacentHTML('afterend', '<div class="acct-pop" id="acctDlg" role="dialog" aria-labelledby="acctT"><div class="acct-pop-h"><h3 id="acctT">' + tt.syncT + '</h3>' +
    '<button type="button" class="acct-x" data-act="acct-x" aria-label="' + tt.aboutClose + '" data-hint="' + tt.aboutClose + '"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button></div><div id="acctBody">' + acctHTML() + '</div></div>');
  b.setAttribute('aria-expanded', 'true');
  if (resendLeft() && !resendTimer) resendTimer = setInterval(tickResend, 1000);
  setTimeout(function(){ var f = document.getElementById('acctEmail') || document.getElementById('acctResend') || document.querySelector('#acctDlg button'); if (f) f.focus({preventScroll: true}); }, 30);
}
function closeAcct(refocus){
  var d = document.getElementById('acctDlg'); if (!d) return;
  d.parentNode.removeChild(d);
  var b = document.getElementById('acctBtn'); b.setAttribute('aria-expanded', 'false');
  if (refocus) b.focus({preventScroll: true});
}
var RESEND_WAIT = 60;
function resendLeft(){ return Math.max(0, Math.ceil((resendAt - Date.now()) / 1000)); }
function resendLabel(){ var n = resendLeft(); return n ? fmt(t().resendIn, {n: n}) : t().resend; }
function tickResend(){
  var b = document.getElementById('acctResend');
  if (b && !b.getAttribute('data-busy')) { b.textContent = resendLabel(); b.disabled = resendLeft() > 0; }
  if (!resendLeft() || !document.getElementById('acctDlg')) { clearInterval(resendTimer); resendTimer = null; }
}
function startResendWait(sec){ resendAt = Date.now() + sec * 1000; if (!resendTimer) resendTimer = setInterval(tickResend, 1000); tickResend(); }
function sendErr(e){
  var m = errText(e), wait = m.match(/after (\d+) seconds?/i);
  if (wait) { startResendWait(+wait[1]); return fmt(t().waitN, {n: wait[1]}); }
  if (/rate limit|too many/i.test(m) || (e && e.status === 429)) return t().tooMany;
  return fmt(t().linkErr, {m: m});
}
function requestLink(email){
  return sbc.auth.signInWithOtp({email: email, options: {emailRedirectTo: location.origin + location.pathname, shouldCreateUser: true, data: {lang: S.lang}}})
    .then(function(r){ if (r.error) throw r.error; }, function(e){ throw e; });
}
function sendLink(){
  var tt = t(), em = document.getElementById('acctEmail'), msg = document.getElementById('acctMsg'), btn = document.getElementById('acctSend');
  var email = (em.value || '').trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { acctMsg = tt.badEmail; msg.textContent = acctMsg; em.focus(); return; }
  btn.disabled = true; btn.textContent = tt.sending; acctMsg = ''; msg.textContent = '';
  requestLink(email).then(function(){
    sentTo = email; acctMsg = ''; startResendWait(RESEND_WAIT); paintAcct();
    var h = document.getElementById('acctSentH'); if (h) h.focus({preventScroll: true});
    announce(t().sentH + '. ' + t().sentTo + ' ' + email);
  }, function(e){
    acctMsg = sendErr(e); btn.disabled = false; btn.textContent = tt.sendLink; msg.textContent = acctMsg;
  });
}
function resendLink(){
  var b = document.getElementById('acctResend'), msg = document.getElementById('acctMsg');
  if (!b || resendLeft()) return;
  b.disabled = true; b.setAttribute('data-busy', '1'); b.textContent = t().sending; acctMsg = ''; msg.textContent = '';
  requestLink(sentTo).then(function(){ acctMsg = t().resent; startResendWait(RESEND_WAIT); }, function(e){ acctMsg = sendErr(e); })
    .then(function(){
      b.removeAttribute('data-busy'); msg.textContent = acctMsg; tickResend();
      if (!resendLeft()) b.disabled = false;
    });
}
function otherEmail(){
  var prev = sentTo; sentTo = ''; acctMsg = ''; paintAcct();
  var em = document.getElementById('acctEmail'); if (em) { em.value = prev; em.focus({preventScroll: true}); em.select(); }
}
var GLOBE = '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/></svg>';
/* written in the language it offers, so the reader it is meant for can read it */
function langCta(){
  var tt = t();
  return '<div class="sync-cta lang-cta" lang="' + tt.langCtaLang + '"><span class="lang-cta-t">' + GLOBE + '<span>' + tt.langCta + '</span></span><button type="button" class="btn sm" data-act="lang">' + tt.langLabel + '</button></div>';
}
function syncCta(){
  if (!syncEnabled() || syncUser) return '';
  var tt = t();
  return '<div class="sync-cta"><span>' + tt.syncCta + '</span><button type="button" class="btn sm" data-act="acct">' + tt.syncCtaBtn + '</button></div>';
}

/* ---------------- about / disclaimer dialog ---------------- */
var aboutReturn = null;
function openAbout(from){
  closeAbout(true);
  aboutReturn = from || null;
  if (menuOpen) setMenu(false, false);
  var tt = t();
  document.body.insertAdjacentHTML('beforeend', '<div class="dlg-back about-back" id="aboutDlg" data-act="about-close"><div class="dlg about" role="dialog" aria-modal="true" aria-labelledby="aboutT">' +
    '<div class="about-h"><img class="mark" src="' + document.querySelector('.brand .mark').getAttribute('src') + '" alt="" width="38" height="38"><h3 id="aboutT">' + tt.aboutT + '</h3></div>' +
    (syncEnabled() ? tt.aboutP.slice(0, -1).concat([tt.aboutSync]) : tt.aboutP).map(function(x){ return '<p>' + x + '</p>'; }).join('') +
    '<p class="about-ver"><button type="button" class="link foot-about" data-act="log">' + esc(fmt(tt.ver, {v: APP_VERSION})) + '</button> · Craft by Eyevuhn</p>' +
    '<div class="row dlg-act"><button type="button" class="btn pri" id="aboutClose" data-act="about-close">' + tt.aboutClose + '</button></div></div></div>');
  document.body.style.overflow = 'hidden';
  setTimeout(function(){ var b = document.getElementById('aboutClose'); if (b) b.focus({preventScroll: true}); }, 30);
}
var CHANGELOG = [
  {v: '1.2', date: '2026-09-24', en: [
    '<b>Sync my progress</b>: sign in with an email link to keep lessons, flashcards, missed questions and exam history in step on every device. No password.',
    'Progress still saves on the device first and syncs in the background; two devices combine without losing lessons, flashcard levels or scores.',
    'Account menu under the person icon: sync status, Sync now, Sign out and Delete account.',
    'After you ask for a link, a check-your-email screen shows where it went, with Resend.',
    'Sign-in emails arrive in English or Chinese to match your language.',
    'Practice and quick mock: a floating bar shows which question you are on, how many you have answered and your score, with a Next question button and a Go to # box to jump to any question number. Checking an answer brings that question to the top so its explanation is in view.',
    'SenseiDoge’s own dropdowns, checkboxes, switches, search boxes and tooltips replace the browser’s built-in ones; header buttons are now plain icons.',
    'The language switch moved from the header to a pinned notice under Your progress (and the side menu on phones).',
    'New lettering for the logo, and a Chinese name: <b>考汪</b> (a play on 考王, “exam king”).'
  ], zh: [
    '<b>同步我的进度</b>：用邮箱链接登录，课程、闪卡、错题和考试记录在所有设备间保持同步，无需密码。',
    '进度仍先保存在本设备，并在后台同步；两台设备的进度会合并，不会丢失课程、闪卡等级或成绩。',
    '人像图标下的账户菜单：同步状态、立即同步、退出登录和删除账户。',
    '发送登录链接后，会显示“查收你的邮箱”页面，并可重新发送。',
    '登录邮件会按你的界面语言以中文或英文发送。',
    '练习与快速模考：底部浮动栏显示当前题号、已答题数和得分，并提供“下一题”按钮和可跳转到任意题号的输入框；核对答案后，该题会移到页面顶部，方便查看解析。',
    '下拉菜单、复选框、开关、搜索框和提示框改用本站自己的设计，不再使用浏览器自带样式；顶部按钮改为纯图标。',
    '语言切换从顶部移到“学习进度”下方的置顶提示（手机上也可在侧边菜单中切换）。',
    '全新标志字体，并启用中文名<b>考汪</b>（谐音“考王”）。'
  ]},
  {v: '1.1', date: '2026-09-23', en: [
    'First release: 14 lessons, one for each task statement in the AIF-C01 exam guide v1.1, in English and 简体中文.',
    '215 practice questions in all four exam formats, with a note on why every wrong option is wrong.',
    'Full exam simulation: 65 questions in 90 minutes, flag for review, review screen and an estimated scaled score.',
    '135 flashcards with spaced repetition, plus a progress page with score history and accuracy by domain.',
    'Search, service map, glossary and a 7-day plan; light and dark themes; works offline once visited.'
  ], zh: [
    '首个版本：14 节课程，与 AIF-C01 考试指南 v1.1 的每个任务说明一一对应，提供英文和简体中文。',
    '215 道练习题，覆盖全部四种考试题型，并说明每个错误选项错在哪里。',
    '完整模拟考试：90 分钟 65 道题，可标记复查，设有复查页面并估算换算分数。',
    '135 张闪卡，采用间隔重复；进度页面显示成绩记录和各领域正确率。',
    '搜索、服务地图、术语表和 7 天学习计划；浅色与深色主题；访问过后可离线使用。'
  ]}
];
function fmtDate(iso){
  var d = iso.split('-');
  return S.lang === 'zh' ? (+d[0]) + ' 年 ' + (+d[1]) + ' 月 ' + (+d[2]) + ' 日'
    : (+d[2]) + ' ' + ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][+d[1] - 1] + ' ' + d[0];
}
function openLog(from){
  closeAbout(true);
  aboutReturn = from || null;
  if (menuOpen) setMenu(false, false);
  var tt = t();
  var list = CHANGELOG.map(function(r){
    return '<section class="log-rel"><h4>' + esc(fmt(tt.ver, {v: r.v})) + (r.v === APP_VERSION ? ' <span class="log-now">' + tt.logNow + '</span>' : '') +
      '<time datetime="' + r.date + '">' + fmtDate(r.date) + '</time></h4><ul>' + r[S.lang].map(function(x){ return '<li>' + x + '</li>'; }).join('') + '</ul></section>';
  }).join('');
  document.body.insertAdjacentHTML('beforeend', '<div class="dlg-back about-back" id="aboutDlg" data-act="about-close"><div class="dlg about log-dlg" role="dialog" aria-modal="true" aria-labelledby="aboutT">' +
    '<div class="about-h"><img class="mark" src="' + document.querySelector('.brand .mark').getAttribute('src') + '" alt="" width="38" height="38"><h3 id="aboutT">' + tt.logT + '</h3></div>' +
    '<div class="log-list">' + list + '</div>' +
    '<div class="row dlg-act"><button type="button" class="btn pri" id="aboutClose" data-act="about-close">' + tt.aboutClose + '</button></div></div></div>');
  document.body.style.overflow = 'hidden';
  setTimeout(function(){ var b = document.getElementById('aboutClose'); if (b) b.focus({preventScroll: true}); }, 30);
}
function closeAbout(silent){
  var d = document.getElementById('aboutDlg');
  if (!d) return;
  d.parentNode.removeChild(d);
  document.body.style.overflow = '';
  if (silent) return;
  var back = aboutReturn && document.body.contains(aboutReturn) ? aboutReturn : document.querySelector('.foot .foot-about');
  if (back) back.focus({preventScroll: true});
}
document.addEventListener('keydown', function(e){
  if (document.getElementById('acctDlg') && e.key === 'Escape') { e.preventDefault(); closeAcct(true); return; }
  if (document.getElementById('gsDlg')) {
    if (e.key === 'Escape') { e.preventDefault(); closeSearch(); }
    else if (e.key === 'Tab') {
      var gi = Array.prototype.slice.call(document.querySelectorAll('#gsDlg input, #gsDlg button'));
      var ga = gi.indexOf(document.activeElement); e.preventDefault(); gi[(ga + (e.shiftKey ? gi.length - 1 : 1) + gi.length) % gi.length].focus();
    }
    return;
  }
  var tg = (e.target.tagName || '').toLowerCase();
  if (!document.getElementById('aboutDlg') && !S.simDlg && tg !== 'input' && tg !== 'textarea' && tg !== 'select' && ((e.key === '/' && !e.ctrlKey && !e.metaKey) || ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')))) {
    if (!(S.view === 'exam' && simLive())) { e.preventDefault(); openSearch(); return; }
  }
  if (document.getElementById('aboutDlg')) {
    if (e.key === 'Escape') { e.preventDefault(); closeAbout(); }
    else if (e.key === 'Tab') { e.preventDefault(); var b = document.getElementById('aboutClose'); if (b) b.focus(); }
    return;
  }
  if (menuOpen) {
    if (e.key === 'Escape') { e.preventDefault(); setMenu(false, true); }
    else if (e.key === 'Tab') {
      var items = Array.prototype.slice.call(document.querySelectorAll('#drawer button'));
      var at = items.indexOf(document.activeElement);
      e.preventDefault(); items[(at + (e.shiftKey ? items.length - 1 : 1) + items.length) % items.length].focus();
    }
    return;
  }
  if (e.altKey || e.ctrlKey || e.metaKey) return;
  var tag = (e.target.tagName || '').toLowerCase();
  if (S.view === 'exam' && simLive()) {
    if (S.simDlg) {
      if (e.key === 'Escape') { e.preventDefault(); var was = S.simDlg; S.simDlg = null; render(); focusSel(was === 'end' ? '[data-act="sim-end-ask"]' : '[data-act="sim-submit-ask"]'); }
      else if (e.key === 'Tab') {
        var btns = Array.prototype.slice.call(document.querySelectorAll('.dlg button'));
        var at = btns.indexOf(document.activeElement);
        e.preventDefault(); btns[(at + (e.shiftKey ? btns.length - 1 : 1)) % btns.length].focus();
      }
      return;
    }
    if (tag === 'input' || tag === 'select' || tag === 'textarea' || S.sim.screen !== 'q') return;
    if (e.key === 'ArrowRight' && S.sim.idx < S.sim.set.length - 1) { e.preventDefault(); simGo(S.sim.idx + 1); }
    else if (e.key === 'ArrowLeft' && S.sim.idx > 0) { e.preventDefault(); simGo(S.sim.idx - 1); }
    return;
  }
  if (S.view !== 'cards') return;
  if (tag === 'input' || tag === 'select' || tag === 'textarea') return;
  if (e.key === 'ArrowRight') { e.preventDefault(); cardMove(1); }
  else if (e.key === 'ArrowLeft') { e.preventDefault(); cardMove(-1); }
  else if ((e.key === ' ' || e.key === 'Enter') && tag !== 'button' && tag !== 'a') { e.preventDefault(); S.flip = !S.flip; render(); }
});
function switchLang(from){
  var sel = from && from.classList.contains('dlang') ? '#menuBtn' : '.lang-cta [data-act="lang"]';
  S.lang = S.lang === 'en' ? 'zh' : 'en'; store.set('lang', S.lang); render(); saveEmailLang(); focusSel(sel);
}
document.getElementById('themeBtn').addEventListener('click', function(){ var next = isDark() ? 'light' : 'dark'; root.setAttribute('data-theme', next); store.set('theme', next); updateThemeBtn(); });
try { var mq = window.matchMedia('(prefers-color-scheme: dark)'); if (mq.addEventListener) mq.addEventListener('change', updateThemeBtn); else if (mq.addListener) mq.addListener(updateThemeBtn); } catch (e) {}
try { new MutationObserver(updateThemeBtn).observe(root, {attributes: true, attributeFilter: ['data-theme']}); } catch (e) {}
setInterval(function(){
  var el = document.getElementById('timer');
  if (S.mock && !S.mock.submitted) {
    var left = S.mock.end - Date.now();
    if (left <= 0) submitMock(true);
    else if (el && S.exMode === 'mock') { el.textContent = fmtTime(left); if (left < 300000) el.classList.add('low'); }
  }
  if (S.sim && !S.sim.submitted) {
    var sl = S.sim.end - Date.now();
    if (sl <= 0) finishSim('time');
    else if (el && S.exMode === 'sim') { el.textContent = fmtTime(sl); if (sl < 300000) el.classList.add('low'); }
  }
}, 1000);

if (S.mock && !S.mock.submitted && S.mock.end <= Date.now()) submitMock(true);
if (S.sim && !S.sim.submitted && S.sim.end <= Date.now()) finishSim('time');
initSync();
render();
})();
