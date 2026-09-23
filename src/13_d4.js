AIF.domains.push({id:'d4', n:4, w:14, q:7,
  title:{en:'Guidelines for Responsible AI', zh:'负责任 AI 准则'},
  tasks:['4.1','4.2']});

/* ===================== TASK 4.1 ===================== */
AIF.tasks['4.1'] = {d:'d4',
title:{en:'Explain the development of AI systems that are responsible', zh:'解释如何开发负责任的 AI 系统'},
obj:[
 ['Identify features of responsible AI: bias, fairness, inclusivity, robustness, safety, veracity','识别负责任 AI 的特征：偏见、公平性、包容性、鲁棒性、安全性、真实性'],
 ['Use tools to identify responsible AI features (Amazon Bedrock Guardrails)','使用工具识别负责任 AI 特征（Amazon Bedrock 护栏）'],
 ['Define responsible model selection practices: environmental considerations, sustainability','定义负责任的模型选择实践：环境因素、可持续性'],
 ['Identify legal risks of GenAI: IP infringement, biased outputs, loss of trust, end-user risk, hallucinations','识别生成式 AI 的法律风险：知识产权侵权、有偏见的输出、失去客户信任、终端用户风险、幻觉'],
 ['Identify dataset characteristics: inclusivity, diversity, curated sources, balance','识别数据集特征：包容性、多样性、经筛选的数据源、均衡性'],
 ['Describe effects of bias and variance: demographic effects, inaccuracy, overfitting, underfitting','描述偏差与方差的影响：对人口群体的影响、不准确、过拟合、欠拟合'],
 ['Describe tools to detect and monitor bias, trustworthiness and truthfulness: label quality analysis, human audits, subgroup analysis','描述检测与监控偏见、可信度和真实性的工具：标注质量分析、人工审计、子群体分析']
],
en:`
<h3>AWS's dimensions of responsible AI</h3>
<div class="tw"><table><thead><tr><th>Dimension</th><th>Meaning</th></tr></thead><tbody>
<tr><td>Fairness</td><td>Considering impacts on different groups of stakeholders; avoiding unjust outcomes.</td></tr>
<tr><td>Explainability</td><td>Understanding and evaluating why the system produced an output.</td></tr>
<tr><td>Privacy &amp; security</td><td>Obtaining, using and protecting data and models appropriately.</td></tr>
<tr><td>Safety</td><td>Preventing harmful output and misuse.</td></tr>
<tr><td>Controllability</td><td>Having mechanisms to monitor and steer the system's behavior.</td></tr>
<tr><td>Veracity &amp; robustness</td><td>Producing correct outputs, even with unexpected or adversarial inputs.</td></tr>
<tr><td>Governance</td><td>Defining, implementing and enforcing responsible AI practices across the supply chain.</td></tr>
<tr><td>Transparency</td><td>Helping stakeholders make informed choices about how they engage with an AI system.</td></tr>
</tbody></table></div>
<p>The exam guide also names <b>bias</b>, <b>inclusivity</b> (the system works well for people of all backgrounds and abilities), <b>robustness</b> and <b>veracity</b> (truthfulness).</p>
<div class="box ex"><p><b>A résumé-ranking tool, one action per dimension.</b> Fairness: compare shortlist rates by gender and age. Explainability: show which skills drove each score. Privacy: remove names and photos before scoring. Safety: block offensive text in generated feedback. Controllability: recruiters can override any ranking. Veracity: test with unusual but valid career paths. Governance: an HR-legal review before launch. Transparency: tell candidates AI is used.</p></div>

<h3>Amazon Bedrock Guardrails</h3>
<p>Configurable safeguards applied to both user <b>inputs</b> and model <b>outputs</b>. They work with any model in Bedrock, and through the <code>ApplyGuardrail</code> API with models hosted anywhere.</p>
<div class="tw"><table><thead><tr><th>Policy</th><th>What it does</th></tr></thead><tbody>
<tr><td>Content filters</td><td>Detect and block hate, insults, sexual content, violence, misconduct, and <b>prompt attacks</b> (jailbreaks and prompt injection), with adjustable strength. Cover text and images.</td></tr>
<tr><td>Denied topics</td><td>Topics you describe in plain language that the app must refuse (e.g. investment advice).</td></tr>
<tr><td>Word filters</td><td>Block specific words or phrases, such as profanity or competitor names.</td></tr>
<tr><td>Sensitive information filters</td><td>Detect PII (names, SSNs, card numbers…) and <b>block</b> or <b>mask</b> it; add custom regex patterns.</td></tr>
<tr><td>Contextual grounding check</td><td>Scores whether a response is <b>grounded</b> in the source material and <b>relevant</b> to the question; blocks answers below your threshold. Used to catch hallucinations in RAG, summarization and paraphrasing.</td></tr>
<tr><td>Automated Reasoning checks</td><td>Verify responses against formal logic rules built from your policy documents, giving mathematically checkable explanations.</td></tr>
</tbody></table></div>
<p><b>Other responsible AI tools:</b> <b>SageMaker Clarify</b> (bias metrics before and after training, explainability), <b>SageMaker Model Monitor</b> (bias drift in production), <b>Amazon Augmented AI (A2I)</b> (route low-confidence predictions to human reviewers), <b>SageMaker Ground Truth</b> (quality labeling), <b>Bedrock Model Evaluation</b> (toxicity and robustness tests).</p>

<h3>Responsible model selection: sustainability</h3>
<ul>
<li>Pick the <b>smallest model</b> that meets the requirement; bigger models use more energy per request.</li>
<li><b>Reuse pre-trained models</b> and fine-tune instead of training from scratch.</li>
<li>Use efficient hardware: <b>AWS Trainium</b> and <b>AWS Inferentia</b> offer better performance per watt for training and inference.</li>
<li>Batch requests, cache frequent answers and prompts, and right-size instances so they are not idle.</li>
<li>Also review the model's documentation, license and known limitations before choosing it.</li>
</ul>

<h3>Legal risks of generative AI</h3>
<div class="tw"><table><thead><tr><th>Risk</th><th>Example</th><th>Reduce it with</th></tr></thead><tbody>
<tr><td>Intellectual property infringement claims</td><td>Generated images or code closely resemble copyrighted work.</td><td>Models with clear training-data terms and indemnity, output review, content filters</td></tr>
<tr><td>Biased model outputs</td><td>A hiring assistant favors one gender, breaking anti-discrimination law.</td><td>Bias testing, balanced data, Clarify, human review</td></tr>
<tr><td>Loss of customer trust</td><td>A chatbot gives rude or wrong answers publicly.</td><td>Guardrails, evaluation, clear disclosure</td></tr>
<tr><td>End-user risk</td><td>Users act on harmful medical or financial advice.</td><td>Denied topics, disclaimers, human-in-the-loop for high-stakes decisions</td></tr>
<tr><td>Hallucinations</td><td>An assistant invents a refund policy the company must then honor.</td><td>RAG with citations, contextual grounding check</td></tr>
</tbody></table></div>

<h3>Dataset characteristics</h3>
<ul>
<li><b>Inclusive and diverse:</b> covers all the groups, languages, accents and situations the model will face.</li>
<li><b>Balanced:</b> no group or class heavily over- or under-represented.</li>
<li><b>Curated sources:</b> trustworthy, licensed, reviewed, free of toxic or low-quality content.</li>
<li>Also accurately labeled, current and representative of production data.</li>
</ul>

<h3>Bias, variance, underfitting and overfitting</h3>
<div class="tw"><table><thead><tr><th></th><th>Underfitting (high bias)</th><th>Good fit</th><th>Overfitting (high variance)</th></tr></thead><tbody>
<tr><td>Training performance</td><td>Poor</td><td>Good</td><td>Excellent</td></tr>
<tr><td>Test / real-world performance</td><td>Poor</td><td>Good</td><td>Poor</td></tr>
<tr><td>Cause</td><td>Model too simple, too few features, too little training</td><td>Balanced</td><td>Model too complex, memorized noise, too little data</td></tr>
<tr><td>Fixes</td><td>More features, a more complex model, train longer</td><td>—</td><td>More data, regularization, simpler model, early stopping, data augmentation, cross-validation</td></tr>
</tbody></table></div>
<div class="box rem"><p>Compare training and test scores. <b>Both low → underfitting.</b> <b>Training high, test low → overfitting.</b></p></div>
<p><b>Effects on demographic groups:</b> if a group is under-represented, the model is less accurate for them, which can mean unfair loan denials or misidentification. Bias and variance problems therefore become fairness problems.</p>

<h3>Detecting and monitoring bias and truthfulness</h3>
<ul>
<li><b>Label quality analysis:</b> check for inconsistent or prejudiced labels and measure agreement between labelers.</li>
<li><b>Human audits:</b> people review samples of outputs for bias, toxicity and factual errors.</li>
<li><b>Subgroup analysis:</b> compute accuracy, false positive rate and so on separately for each group and compare.</li>
<li><b>SageMaker Clarify</b> bias metrics, such as class imbalance before training and differences in outcomes between groups after training.</li>
<li><b>SageMaker Model Monitor</b> for bias drift over time; <b>A2I</b> for ongoing human review.</li>
</ul>
`,
zh:`
<h3>AWS 负责任 AI 的核心维度</h3>
<div class="tw"><table><thead><tr><th>维度</th><th>含义</th></tr></thead><tbody>
<tr><td>公平性</td><td>考虑对不同利益相关群体的影响，避免不公正的结果。</td></tr>
<tr><td>可解释性</td><td>理解并评估系统为何产生某个输出。</td></tr>
<tr><td>隐私与安全</td><td>恰当地获取、使用和保护数据与模型。</td></tr>
<tr><td>安全性 (Safety)</td><td>防止有害输出和滥用。</td></tr>
<tr><td>可控性</td><td>具备监控和引导系统行为的机制。</td></tr>
<tr><td>真实性与鲁棒性</td><td>即使面对意外或对抗性输入，也能给出正确输出。</td></tr>
<tr><td>治理</td><td>在整个 AI 供应链中定义、实施并落实负责任 AI 实践。</td></tr>
<tr><td>透明度</td><td>帮助利益相关方在知情的情况下决定如何使用 AI 系统。</td></tr>
</tbody></table></div>
<p>考纲还提到<b>偏见</b>、<b>包容性</b>（系统对不同背景和能力的人都表现良好）、<b>鲁棒性</b>和<b>真实性</b>。</p>
<div class="box ex"><p><b>简历排序工具：每个维度一项措施。</b>公平性：按性别和年龄比较入围率。可解释性：展示哪些技能决定了分数。隐私：打分前去除姓名和照片。安全性：拦截生成反馈中的冒犯性文字。可控性：招聘人员可覆盖任何排序。真实性：用非常规但合理的职业经历测试。治理：上线前经过人事与法务审核。透明度：告知候选人使用了 AI。</p></div>

<h3>Amazon Bedrock 护栏 (Guardrails)</h3>
<p>可配置的安全防护，同时作用于用户<b>输入</b>和模型<b>输出</b>。适用于 Bedrock 中的任何模型，并可通过 <code>ApplyGuardrail</code> API 用于托管在其他地方的模型。</p>
<div class="tw"><table><thead><tr><th>策略</th><th>作用</th></tr></thead><tbody>
<tr><td>内容过滤器</td><td>检测并拦截仇恨、侮辱、色情、暴力、不当行为以及<b>提示攻击</b>（越狱和提示注入），强度可调。支持文本和图像。</td></tr>
<tr><td>拒绝话题</td><td>用自然语言描述、应用必须拒绝的话题（如投资建议）。</td></tr>
<tr><td>词语过滤器</td><td>屏蔽特定词语或短语，如脏话、竞争对手名称。</td></tr>
<tr><td>敏感信息过滤器</td><td>检测 PII（姓名、身份证号、卡号……）并<b>拦截</b>或<b>掩码</b>；可添加自定义正则表达式。</td></tr>
<tr><td>上下文依据检查</td><td>评估回答是否<b>有据</b>于源材料、是否与问题<b>相关</b>；低于阈值则拦截。用于发现 RAG、摘要、改写中的幻觉。</td></tr>
<tr><td>自动推理检查</td><td>依据从政策文档中构建的形式化逻辑规则验证回答，给出可数学验证的解释。</td></tr>
</tbody></table></div>
<p><b>其他负责任 AI 工具：</b><b>SageMaker Clarify</b>（训练前后的偏差指标、可解释性）、<b>SageMaker Model Monitor</b>（生产环境中的偏差漂移）、<b>Amazon Augmented AI (A2I)</b>（把低置信度预测交给人工复核）、<b>SageMaker Ground Truth</b>（高质量标注）、<b>Bedrock 模型评估</b>（毒性与鲁棒性测试）。</p>

<h3>负责任的模型选择：可持续性</h3>
<ul>
<li>选择满足需求的<b>最小模型</b>；模型越大，每次请求耗能越多。</li>
<li><b>复用预训练模型</b>并微调，而不是从零训练。</li>
<li>使用高能效硬件：<b>AWS Trainium</b> 和 <b>AWS Inferentia</b> 在训练和推理上每瓦性能更高。</li>
<li>批量处理请求、缓存常见回答和提示、合理配置实例规格，避免闲置。</li>
<li>选择模型前还应查看其文档、许可证和已知局限。</li>
</ul>

<h3>生成式 AI 的法律风险</h3>
<div class="tw"><table><thead><tr><th>风险</th><th>例子</th><th>降低风险的方法</th></tr></thead><tbody>
<tr><td>知识产权侵权索赔</td><td>生成的图像或代码与受版权保护的作品高度相似。</td><td>选择训练数据条款清晰并提供赔偿保障的模型、审核输出、内容过滤</td></tr>
<tr><td>有偏见的模型输出</td><td>招聘助手偏向某一性别，违反反歧视法。</td><td>偏见测试、均衡数据、Clarify、人工复核</td></tr>
<tr><td>失去客户信任</td><td>聊天机器人公开给出粗鲁或错误的回答。</td><td>护栏、评估、明确告知</td></tr>
<tr><td>终端用户风险</td><td>用户按照有害的医疗或财务建议行事。</td><td>拒绝话题、免责声明、高风险决策引入人工</td></tr>
<tr><td>幻觉</td><td>助手编造了一条退款政策，公司不得不兑现。</td><td>带引用的 RAG、上下文依据检查</td></tr>
</tbody></table></div>

<h3>数据集特征</h3>
<ul>
<li><b>包容且多样：</b>覆盖模型将面对的所有群体、语言、口音和场景。</li>
<li><b>均衡：</b>没有哪个群体或类别被严重高估或低估。</li>
<li><b>数据源经过筛选：</b>可信、有授权、经过审核，不含有害或低质量内容。</li>
<li>此外还要标注准确、数据新鲜、能代表生产环境的数据。</li>
</ul>

<h3>偏差、方差、欠拟合与过拟合</h3>
<div class="tw"><table><thead><tr><th></th><th>欠拟合（高偏差）</th><th>良好拟合</th><th>过拟合（高方差）</th></tr></thead><tbody>
<tr><td>训练集表现</td><td>差</td><td>好</td><td>极好</td></tr>
<tr><td>测试集 / 真实表现</td><td>差</td><td>好</td><td>差</td></tr>
<tr><td>原因</td><td>模型太简单、特征太少、训练不足</td><td>平衡</td><td>模型太复杂、记住了噪声、数据太少</td></tr>
<tr><td>解决办法</td><td>增加特征、使用更复杂的模型、训练更久</td><td>—</td><td>更多数据、正则化、简化模型、提前停止、数据增强、交叉验证</td></tr>
</tbody></table></div>
<div class="box rem"><p>对比训练分和测试分。<b>都低 → 欠拟合。</b><b>训练高、测试低 → 过拟合。</b></p></div>
<p><b>对人口群体的影响：</b>如果某群体在数据中占比不足，模型对他们的准确率就更低，可能导致不公平的拒贷或错误识别。因此偏差和方差问题会演变成公平性问题。</p>

<h3>检测和监控偏见与真实性</h3>
<ul>
<li><b>标注质量分析：</b>检查不一致或带偏见的标签，衡量标注员间一致性。</li>
<li><b>人工审计：</b>由人抽查输出中的偏见、毒性和事实错误。</li>
<li><b>子群体分析：</b>分别计算每个群体的准确率、误报率等并进行比较。</li>
<li><b>SageMaker Clarify</b> 偏差指标：如训练前的类别不平衡、训练后不同群体结果的差异。</li>
<li>用 <b>SageMaker Model Monitor</b> 监控偏差随时间的漂移；用 <b>A2I</b> 持续进行人工复核。</li>
</ul>
`};

/* ===================== TASK 4.2 ===================== */
AIF.tasks['4.2'] = {d:'d4',
title:{en:'Recognize the importance of transparent and explainable models', zh:'认识透明且可解释模型的重要性'},
obj:[
 ['Describe how transparent, explainable models differ from those that are not','描述透明可解释模型与不透明模型的区别'],
 ['Describe tools that identify transparent and explainable models: SageMaker Model Cards, SageMaker Clarify, Bedrock Model Evaluations, open-source models, data, licensing','描述识别透明可解释模型的工具：SageMaker Model Cards、SageMaker Clarify、Bedrock 模型评估、开源模型、数据、许可'],
 ['Identify tradeoffs between model safety and transparency, e.g. interpretability vs performance','识别模型安全与透明度之间的权衡，例如可解释性与性能'],
 ['Describe human-centered design principles for explainable AI: user feedback, AI decision transparency','描述可解释 AI 的以人为本设计原则：用户反馈机制、AI 决策透明']
],
en:`
<h3>Transparent vs opaque models</h3>
<div class="tw"><table><thead><tr><th></th><th>Transparent / explainable</th><th>Opaque ("black box")</th></tr></thead><tbody>
<tr><td>Examples</td><td>Linear and logistic regression, decision trees, rule-based systems</td><td>Deep neural networks, LLMs, large ensembles</td></tr>
<tr><td>Why a decision was made</td><td>Can be traced directly (coefficients, tree path)</td><td>Needs post-hoc tools (feature attributions such as SHAP) and even then is approximate</td></tr>
<tr><td>Typical accuracy on complex data</td><td>Lower</td><td>Higher</td></tr>
<tr><td>Good for</td><td>Regulated decisions, audits</td><td>Language, vision, complex patterns</td></tr>
</tbody></table></div>
<div class="box def"><p><b>Interpretability:</b> how well a person can understand the model's inner workings. <b>Explainability:</b> the ability to explain a particular output in human terms. <b>Transparency:</b> openness about how the system was built, what data it used and its limits.</p></div>

<h3>Tools for transparency and explainability</h3>
<div class="tw"><table><thead><tr><th>Tool</th><th>What it provides</th></tr></thead><tbody>
<tr><td>Amazon SageMaker Model Cards</td><td>A single, standard document per model: intended use, risk rating, training details, evaluation results, caveats. The go-to record for audits and governance.</td></tr>
<tr><td>Amazon SageMaker Clarify</td><td>Feature importance (SHAP values), partial dependence plots and bias reports that explain predictions.</td></tr>
<tr><td>Amazon Bedrock Model Evaluations</td><td>Documented, repeatable comparisons of models on your criteria.</td></tr>
<tr><td>AWS AI Service Cards</td><td>AWS's own documentation for its AI services: intended use cases, limitations, responsible AI design choices.</td></tr>
<tr><td>Open-source models</td><td>Published weights and architecture can be inspected, tested and audited.</td></tr>
<tr><td>Data transparency</td><td>Documentation of training data sources, collection methods and known gaps.</td></tr>
<tr><td>Licensing</td><td>Clear terms on what you may do with the model and its outputs.</td></tr>
</tbody></table></div>

<h3>Tradeoffs</h3>
<ul>
<li><b>Interpretability vs performance:</b> simpler models are easier to explain but usually less accurate on complex data. Measure both and decide what the use case needs.</li>
<li><b>Transparency vs safety and security:</b> publishing everything about a model, its guardrails or its training data can help attackers bypass protections or expose private data.</li>
<li><b>Openness vs intellectual property:</b> open weights aid auditing but give away competitive advantage.</li>
</ul>
<div class="box trap"><p>If a question says a bank must explain every loan decision to regulators, prefer an <b>interpretable model</b> plus <b>SageMaker Clarify</b> and <b>Model Cards</b>, even at some cost in accuracy.</p></div>

<h3>Human-centered design for explainable AI</h3>
<ul>
<li><b>User feedback mechanisms:</b> thumbs up/down, "report a problem", corrections that flow back into evaluation.</li>
<li><b>AI decision transparency:</b> tell people when AI is involved; show the reasons, sources and confidence behind an answer.</li>
<li><b>Amplify, don't replace, human decisions:</b> AI recommends, a human decides for high-stakes outcomes.</li>
<li><b>Design for errors:</b> easy override, undo and escalation to a person.</li>
<li><b>Plain-language explanations</b> suited to the audience, and accessible, inclusive interfaces.</li>
</ul>
`,
zh:`
<h3>透明模型 vs 不透明模型</h3>
<div class="tw"><table><thead><tr><th></th><th>透明 / 可解释</th><th>不透明（“黑盒”）</th></tr></thead><tbody>
<tr><td>例子</td><td>线性回归和逻辑回归、决策树、基于规则的系统</td><td>深度神经网络、LLM、大型集成模型</td></tr>
<tr><td>决策原因</td><td>可直接追溯（系数、决策路径）</td><td>需要事后工具（如 SHAP 特征归因），且仍只是近似解释</td></tr>
<tr><td>复杂数据上的典型准确率</td><td>较低</td><td>较高</td></tr>
<tr><td>适合</td><td>受监管的决策、审计</td><td>语言、视觉、复杂模式</td></tr>
</tbody></table></div>
<div class="box def"><p><b>可解释性 (Interpretability)：</b>人能多大程度理解模型内部机制。<b>可说明性 (Explainability)：</b>用人能理解的方式解释某个具体输出的能力。<b>透明度 (Transparency)：</b>公开系统如何构建、使用了什么数据以及局限在哪里。</p></div>

<h3>透明度与可解释性工具</h3>
<div class="tw"><table><thead><tr><th>工具</th><th>提供什么</th></tr></thead><tbody>
<tr><td>Amazon SageMaker Model Cards</td><td>每个模型一份标准化文档：预期用途、风险评级、训练细节、评估结果、注意事项。审计与治理的首选记录。</td></tr>
<tr><td>Amazon SageMaker Clarify</td><td>特征重要性（SHAP 值）、部分依赖图和偏差报告，用于解释预测。</td></tr>
<tr><td>Amazon Bedrock 模型评估</td><td>按你的标准对模型进行有记录、可重复的比较。</td></tr>
<tr><td>AWS AI Service Cards</td><td>AWS 为自家 AI 服务编写的文档：预期用例、局限、负责任 AI 设计选择。</td></tr>
<tr><td>开源模型</td><td>公开的权重和架构可被检查、测试和审计。</td></tr>
<tr><td>数据透明</td><td>记录训练数据来源、收集方法和已知缺口。</td></tr>
<tr><td>许可</td><td>明确说明可以如何使用模型及其输出。</td></tr>
</tbody></table></div>

<h3>权衡</h3>
<ul>
<li><b>可解释性 vs 性能：</b>简单模型更易解释，但在复杂数据上通常不够准确。两者都要衡量，再根据场景需要取舍。</li>
<li><b>透明度 vs 安全：</b>公开模型、护栏或训练数据的全部细节，可能帮助攻击者绕过防护或泄露隐私数据。</li>
<li><b>开放 vs 知识产权：</b>开放权重便于审计，但会让出竞争优势。</li>
</ul>
<div class="box trap"><p>如果题目说银行必须向监管机构解释每一笔贷款决策，应优先选择<b>可解释模型</b>加上 <b>SageMaker Clarify</b> 和 <b>Model Cards</b>，即使牺牲一些准确率。</p></div>

<h3>可解释 AI 的以人为本设计</h3>
<ul>
<li><b>用户反馈机制：</b>点赞/点踩、“报告问题”，纠正信息回流到评估中。</li>
<li><b>AI 决策透明：</b>告知用户有 AI 参与；展示答案背后的理由、来源和置信度。</li>
<li><b>增强而非取代人的决策：</b>AI 给出建议，高风险结果由人决定。</li>
<li><b>为错误而设计：</b>便于覆盖、撤销并升级给人工。</li>
<li>针对受众的<b>通俗解释</b>，以及无障碍、包容的界面。</li>
</ul>
`};
