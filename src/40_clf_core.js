/* AWS Certified Cloud Practitioner (CLF-C02): exam identity, domains, wording and service categories.
   Lessons, questions and extras for this exam live in the 41_ to 44_ files. */
window.CLF = {domains: [], tasks: {}, cards: [], qs: [], svc: [], gloss: [], plan: []};

CLF.meta = {
  name: {en: 'AWS Certified Cloud Practitioner', zh: 'AWS 认证云从业者'},
  short: {en: 'Cloud Practitioner', zh: '云从业者'},
  checked: '2026-10-08'
};
/* every service in the map comes from the official in-scope list, so no scope toggle */
CLF.noScope = true;
CLF.svcCats = ['compute', 'storage', 'db', 'net', 'security', 'mgmt', 'finance', 'analytics', 'ml', 'migration', 'apps'];
CLF.catC = {compute: 'var(--d1)', storage: 'var(--d3)', db: 'var(--d2)', net: 'var(--d4)', security: 'var(--d5)', mgmt: 'var(--ink2)', finance: 'var(--accent-text)', analytics: 'var(--d2)', ml: 'var(--d1)', migration: 'var(--d4)', apps: 'var(--muted)'};

CLF.domains.push(
  {id: 'd1', n: 1, w: 24, q: 12, title: {en: 'Cloud Concepts', zh: '云概念'}, tasks: ['1.1', '1.2', '1.3', '1.4']},
  {id: 'd2', n: 2, w: 30, q: 15, title: {en: 'Security and Compliance', zh: '安全性与合规性'}, tasks: ['2.1', '2.2', '2.3', '2.4']},
  {id: 'd3', n: 3, w: 34, q: 17, title: {en: 'Cloud Technology and Services', zh: '云技术和服务'}, tasks: ['3.1', '3.2', '3.3', '3.4', '3.5', '3.6', '3.7', '3.8']},
  {id: 'd4', n: 4, w: 12, q: 6, title: {en: 'Billing, Pricing, and Support', zh: '账单、定价和支持'}, tasks: ['4.1', '4.2', '4.3']}
);

CLF.ui = {
  en: {
    sub: 'AWS Certified Cloud Practitioner · CLF-C02',
    eyebrow: 'AWS Certified Cloud Practitioner · CLF-C02',
    heroH: 'Every task in the CLF-C02 exam guide, <em>explained and drilled</em>.',
    heroP: '{n} lessons mapped one-to-one to the task statements in the CLF-C02 exam guide, a {q}-question bank in both official formats, {c} flashcards, a quick 50-question mock and a full 65-question exam simulation. Switch between English and 中文 at any time.',
    f4s: 'across 4 domains',
    examP: '{n} original questions written against the exam guide, in both official formats: multiple choice and multiple response. Options are shuffled every session. Practice by domain or lesson, retry your missed questions, take a quick 50-question mock, or sit a full 65-question simulation of the real exam.',
    simList: ['65 questions in 90 minutes, like the real CLF-C02. 50 are scored and weighted like the exam (D1 12 · D2 15 · D3 17 · D4 6); 15 are unscored, and you won\'t know which.',
      'One question per screen. Move with Previous and Next (or ← →), flag questions to revisit, and use the review screen to see what is unanswered or flagged.',
      'No domain or topic hints, and no answers until the exam is over.',
      'Use <b>End exam</b> to finish early. You\'ll be asked to confirm, and unanswered questions count as wrong.',
      'Your result shows an estimated scaled score (100–1,000; 700 passes) and a breakdown by domain. The timer keeps running if you close or refresh the page.'],
    mockList: ['50 questions drawn at random, weighted like the real exam: D1 12 · D2 15 · D3 17 · D4 6.',
      'Questions you have not seen yet are drawn first, so repeat mocks stay fresh.',
      'A 90-minute timer that keeps running if you close or refresh the page. Answers are revealed only after you submit.',
      'Your result is broken down by domain, and every miss is added to your Missed list.'],
    svcP: 'Every service on the CLF-C02 in-scope list, grouped by category: what it does and the question cue that points to it.',
    cat: {all: 'All', compute: 'Compute & containers', storage: 'Storage', db: 'Databases', net: 'Networking', security: 'Security & identity', mgmt: 'Management & governance', finance: 'Cost & support', analytics: 'Analytics', ml: 'AI & ML', migration: 'Migration', apps: 'Apps, integration & dev tools'},
    planP: 'A one-week sprint that follows the domain weights: Domain 3 (34%) gets two days and Domain 2 (30%) gets two. Tick items as you finish them; each links to the right lesson or drill.',
    checked: 'Content last checked against the CLF-C02 exam guide on {d}.',
    aboutP: ['SenseiDoge is <b>independent study material</b> for the AWS Certified Cloud Practitioner (CLF-C02) exam. It is <b>not affiliated with, endorsed by or sponsored by</b> Amazon Web Services (AWS) or Amazon.com, Inc.',
      'AWS, Amazon Web Services, AWS Certified Cloud Practitioner and all related names and logos are trademarks of Amazon.com, Inc. or its affiliates. They are used here only to identify the exam and the services being studied.',
      'Lessons follow the public CLF-C02 exam guide. All practice questions are original and are not taken from the real exam. Check the latest exam guide and AWS documentation before you sit the exam.',
      'Your progress is stored only in this browser. Nothing is sent to a server.']
  },
  zh: {
    sub: 'AWS 认证云从业者 · CLF-C02',
    eyebrow: 'AWS 认证云从业者 · CLF-C02',
    heroH: 'CLF-C02 考纲的每一项任务，<em>讲透并练熟</em>。',
    heroP: '{n} 节课与 CLF-C02 考纲的任务说明一一对应；{q} 道题覆盖两种官方题型；{c} 张闪卡；还有 50 题快速模考和 65 题真实考试模拟。随时可在 English 与中文之间切换。',
    f4s: '分布在 4 个领域',
    examP: '{n} 道依据考纲原创的题目，覆盖两种官方题型：单选题和多选题，选项每次都会打乱。可按领域或课程练习、重做错题、做 50 题快速模考，或参加 65 题的真实考试模拟。',
    simList: ['与真实 CLF-C02 一样：90 分钟 65 道题。其中 50 道计分，按考试权重分配（D1 12 · D2 15 · D3 17 · D4 6）；15 道不计分，且你不知道是哪几道。',
      '每屏一道题。用“上一题/下一题”（或 ← →）切换，可标记待复查的题目，并在检查页面查看未答和已标记的题。',
      '不显示领域或主题提示，考试结束前不显示答案。',
      '可用<b>结束考试</b>提前交卷。系统会要求你确认，未答题按错误计。',
      '成绩会显示估算的换算分（100–1,000，700 分及格）和各领域得分。关闭或刷新页面后计时继续。'],
    mockList: ['随机抽取 50 题，按真实考试权重分配：D1 12 · D2 15 · D3 17 · D4 6。',
      '优先抽取你没做过的题，重复模考也能保持新鲜。',
      '90 分钟计时，关闭或刷新页面后计时继续。交卷后才显示答案。',
      '成绩按领域拆分，每道错题都会加入“错题”列表。'],
    svcP: 'CLF-C02 考试范围内的全部服务，按类别分组：它们的作用，以及题目中指向它们的关键线索。',
    cat: {all: '全部', compute: '计算与容器', storage: '存储', db: '数据库', net: '网络', security: '安全与身份', mgmt: '管理与治理', finance: '成本与支持', analytics: '分析', ml: 'AI 与机器学习', migration: '迁移', apps: '应用、集成与开发工具'},
    planP: '按领域权重安排的一周冲刺计划：领域 3（34%）和领域 2（30%）各安排两天。完成一项勾选一项；每项都直接链接到对应课程或练习。',
    checked: '内容最近一次对照 CLF-C02 考试指南核对于 {d}。',
    aboutP: ['考汪是 AWS 认证云从业者 (CLF-C02) 考试的<b>独立学习资料</b>，与 Amazon Web Services (AWS) 或 Amazon.com, Inc. <b>无任何隶属、背书或赞助关系</b>。',
      'AWS、Amazon Web Services、AWS Certified Cloud Practitioner 及所有相关名称和标志均为 Amazon.com, Inc. 或其关联公司的商标，此处仅用于指明所学习的考试和服务。',
      '课程内容依据公开的 CLF-C02 考试指南编写。所有练习题均为原创，并非真实考题。参加考试前请查阅最新的考试指南和 AWS 文档。',
      '你的学习进度只保存在当前浏览器中，不会发送到任何服务器。']
  }
};
