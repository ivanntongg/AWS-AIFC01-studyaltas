window.AIF = {domains: [], tasks: {}, cards: [], qs: [], svc: [], gloss: [], plan: []};

AIF.domains.push({id:'d1', n:1, w:20, q:10,
  title:{en:'Fundamentals of AI and ML', zh:'人工智能与机器学习基础'},
  tasks:['1.1','1.2','1.3']});

/* ===================== TASK 1.1 ===================== */
AIF.tasks['1.1'] = {d:'d1',
title:{en:'Explain basic AI concepts and terminologies', zh:'解释 AI 基本概念与术语'},
obj:[
 ['Define core terms: AI, ML, deep learning, neural networks, computer vision, NLP, model, algorithm, training vs inference, bias, fairness, fit, LLM, GenAI, agentic AI','定义核心术语：AI、ML、深度学习、神经网络、计算机视觉、NLP、模型、算法、训练与推理、偏差、公平性、拟合、LLM、生成式 AI、智能体 AI'],
 ['Compare AI, ML, deep learning, GenAI and agentic AI','比较 AI、ML、深度学习、生成式 AI 与智能体 AI 的异同'],
 ['Describe inference types: batch, real-time, asynchronous, serverless','描述推理类型：批量、实时、异步、无服务器'],
 ['Describe data types: labeled/unlabeled, tabular, time-series, image, text, structured/unstructured','描述数据类型：有标签/无标签、表格、时间序列、图像、文本、结构化/非结构化'],
 ['Describe learning types: supervised, unsupervised, reinforcement learning','描述学习类型：监督学习、无监督学习、强化学习']
],
en:`
<h3>The nested picture</h3>
<p>Each term on the exam sits inside a bigger one. Learn the nesting first; most "which is which" questions fall out of it.</p>
<div class="nest"><div style="--c:var(--d1)"><b>Artificial intelligence</b><i>Any technique that lets machines do tasks that normally need human intelligence: perceiving, reasoning, deciding, using language. Includes hand-written rules.</i>
 <div style="--c:var(--d2)"><b>Machine learning</b><i>Algorithms that learn patterns from data instead of being programmed with explicit rules.</i>
  <div style="--c:var(--d3)"><b>Deep learning</b><i>ML with multi-layer neural networks. Strong on unstructured data: images, audio, free text.</i>
   <div style="--c:var(--d4)"><b>Generative AI</b><i>Deep-learning models (mostly transformers and diffusion models) that create new content: text, images, audio, video, code.</i></div>
  </div>
 </div>
</div></div>
<div class="box def"><p><b>Agentic AI</b> is not another inner circle. It is a way of <i>using</i> generative models: a foundation model acts as the reasoning engine, <b>plans</b> steps, <b>calls tools</b> (APIs, databases, code), keeps <b>memory</b>, and takes actions toward a goal with limited human input.</p></div>
<div class="box ex"><p><b>One problem, five levels: incoming customer emails.</b></p>
<ul>
<li><b>Rule-based AI:</b> if the subject contains "refund", route to the billing queue.</li>
<li><b>ML:</b> a classifier trained on 50,000 labeled emails predicts the category.</li>
<li><b>Deep learning:</b> a neural network reads the whole message, coping with slang and typos.</li>
<li><b>GenAI:</b> drafts a polite, personalized reply.</li>
<li><b>Agentic AI:</b> reads the email, looks up the order through an API, issues a refund under $50, sends the reply, and escalates to a human above $50.</li>
</ul></div>

<h3>Core vocabulary</h3>
<div class="tw"><table><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody>
<tr><td>Algorithm</td><td>The learning procedure or recipe, e.g. linear regression, XGBoost, k-means.</td></tr>
<tr><td>Model</td><td>What you get after running an algorithm on data. It takes new inputs and returns predictions.</td></tr>
<tr><td>Training</td><td>Fitting the model's parameters to data. Compute-heavy, done occasionally.</td></tr>
<tr><td>Inference</td><td>Using a trained model to predict on new data. Happens on every request and is billed per call, token or instance-hour.</td></tr>
<tr><td>Neural network</td><td>Layers of connected nodes ("neurons") with weights. "Deep" means many hidden layers.</td></tr>
<tr><td>Computer vision (CV)</td><td>AI that interprets images and video: object detection, face analysis, OCR, defect detection.</td></tr>
<tr><td>Natural language processing (NLP)</td><td>AI that understands or generates human language: sentiment, entities, translation, summarization.</td></tr>
<tr><td>Large language model (LLM)</td><td>A very large transformer trained on huge amounts of text to predict the next token. A type of foundation model.</td></tr>
<tr><td>Feature / label / ground truth</td><td>Feature = an input variable (a column). Label = the answer the model learns to predict. Ground truth = labels verified as correct.</td></tr>
<tr><td>Parameters vs hyperparameters</td><td>Parameters (weights) are <b>learned</b> during training. Hyperparameters are <b>set by people</b> before training: learning rate, number of epochs, batch size, tree depth.</td></tr>
<tr><td>Epoch</td><td>One complete pass through the training dataset.</td></tr>
<tr><td>Fit</td><td>How well the model captures the real pattern: <b>underfit</b> (too simple), good fit, <b>overfit</b> (memorized noise).</td></tr>
<tr><td>Bias (two meanings)</td><td><b>Statistical bias:</b> systematic error from over-simple assumptions, which leads to underfitting. <b>Fairness bias:</b> outcomes that systematically disadvantage a group of people.</td></tr>
<tr><td>Fairness</td><td>The model's outcomes are equitable across groups such as gender, age or ethnicity.</td></tr>
</tbody></table></div>
<p><b>Dataset splits:</b> training set (about 70–80%) teaches the parameters; validation set (about 10–15%) is used to tune hyperparameters and pick between models; test set (about 10–15%) gives a final, unbiased score and is used once at the end.</p>

<h3>Types of data</h3>
<div class="tw"><table><thead><tr><th>Type</th><th>What it looks like</th><th>Typical use</th></tr></thead><tbody>
<tr><td>Labeled</td><td>Each example has the correct answer attached (email → "spam").</td><td>Supervised learning. Labeling costs money and time (SageMaker Ground Truth helps).</td></tr>
<tr><td>Unlabeled</td><td>Raw examples, no answers.</td><td>Unsupervised learning, self-supervised pre-training of FMs.</td></tr>
<tr><td>Structured / tabular</td><td>Rows and columns with a fixed schema: CSV, relational tables.</td><td>Classic ML: churn, credit risk, pricing.</td></tr>
<tr><td>Semi-structured</td><td>Tagged but flexible: JSON, XML, logs.</td><td>Parsing, then ML or analytics.</td></tr>
<tr><td>Unstructured</td><td>Free text, images, audio, video. Most enterprise data.</td><td>Deep learning and foundation models.</td></tr>
<tr><td>Time-series</td><td>Values ordered by timestamp: sensor readings, daily sales.</td><td>Forecasting, anomaly detection.</td></tr>
<tr><td>Image</td><td>Pixel grids, frames of video.</td><td>Computer vision.</td></tr>
<tr><td>Text</td><td>Documents, chats, emails, split into tokens.</td><td>NLP, LLMs.</td></tr>
</tbody></table></div>

<h3>Types of learning</h3>
<div class="tw"><table><thead><tr><th>Type</th><th>Data</th><th>Goal</th><th>Examples</th></tr></thead><tbody>
<tr><td>Supervised</td><td>Labeled</td><td>Predict the label for new inputs. <b>Classification</b> = category; <b>regression</b> = number.</td><td>Spam or not; house price; loan default.</td></tr>
<tr><td>Unsupervised</td><td>Unlabeled</td><td>Discover structure: <b>clustering</b>, dimensionality reduction (PCA), anomaly detection, association rules.</td><td>Customer segments; unusual transactions.</td></tr>
<tr><td>Reinforcement learning (RL)</td><td>Rewards from an environment</td><td>An agent learns a policy by trial and error to maximize cumulative reward.</td><td>Robotics, game play, AWS DeepRacer.</td></tr>
<tr><td>Self-supervised</td><td>Unlabeled; the label comes from the data itself</td><td>Predict the next or a masked word.</td><td>How LLMs are pre-trained.</td></tr>
<tr><td>Semi-supervised</td><td>A little labeled + a lot unlabeled</td><td>Stretch scarce labels further.</td><td>Medical images with few expert labels.</td></tr>
<tr><td>Transfer learning</td><td>A pre-trained model + a smaller new dataset</td><td>Reuse learned knowledge on a new task.</td><td>Fine-tuning an FM.</td></tr>
</tbody></table></div>
<div class="box rem"><p>Labels present → <b>supervised</b>. No labels, find groups → <b>unsupervised (clustering)</b>. Learn from rewards by trial and error → <b>reinforcement learning</b>. RLHF (reinforcement learning from human feedback) is RL used to align LLMs with human preferences; see Task 3.3.</p></div>

<h3>Types of inference</h3>
<p>Once a model is trained it has to serve predictions. Amazon SageMaker AI offers four ways; the exam describes a workload and asks which one fits.</p>
<div class="tw"><table><thead><tr><th>Option</th><th>Pick it when</th><th>Key facts</th></tr></thead><tbody>
<tr><td>Real-time</td><td>Interactive apps need answers in milliseconds; traffic is steady.</td><td>Persistent endpoint on instances you choose; small payloads (up to 6 MB, 60 s). You pay while instances run.</td></tr>
<tr><td>Serverless</td><td>Traffic is intermittent or unpredictable, with idle periods; some cold-start delay is acceptable.</td><td>No instances to manage; scales to zero; pay per use.</td></tr>
<tr><td>Asynchronous</td><td>Large payloads or long processing, but the caller can wait for a notification.</td><td>Payloads up to 1 GB, processing up to 1 hour; requests are queued; can scale to zero when idle; SNS notification when done.</td></tr>
<tr><td>Batch transform</td><td>Score a whole dataset offline, e.g. nightly; no endpoint needed.</td><td>Reads from and writes to S3; resources exist only for the job; usually lowest cost for big volumes.</td></tr>
</tbody></table></div>
<p>Amazon Bedrock has the same split for foundation models: <b>on-demand</b> calls for real-time use and <b>batch inference</b> jobs for large offline volumes at a lower price.</p>
<div class="box trap"><ul>
<li>"Large files, long processing, response can come later" → <b>asynchronous</b>, not batch.</li>
<li>"Score millions of records every night, no endpoint" → <b>batch transform</b>.</li>
<li>"Spiky traffic, idle for hours, minimize cost" → <b>serverless</b>.</li>
<li>"Sub-second latency for a live app with steady load" → <b>real-time</b>.</li>
</ul></div>
`,
zh:`
<h3>一张嵌套图看懂概念</h3>
<p>考试里的每个术语都包含在更大的概念中。先记住这个嵌套关系，大部分“哪个是哪个”的题目就迎刃而解。</p>
<div class="nest"><div style="--c:var(--d1)"><b>人工智能 (AI)</b><i>让机器完成通常需要人类智能的任务：感知、推理、决策、使用语言。也包括人工编写的规则系统。</i>
 <div style="--c:var(--d2)"><b>机器学习 (ML)</b><i>通过算法从数据中学习规律，而不是由人显式编写规则。</i>
  <div style="--c:var(--d3)"><b>深度学习 (DL)</b><i>使用多层神经网络的机器学习，擅长处理图像、音频、自由文本等非结构化数据。</i>
   <div style="--c:var(--d4)"><b>生成式 AI (GenAI)</b><i>能够创造新内容（文本、图像、音频、视频、代码）的深度学习模型，主要是 Transformer 和扩散模型。</i></div>
  </div>
 </div>
</div></div>
<div class="box def"><p><b>智能体 AI (Agentic AI)</b> 不是更内层的一个圈，而是<i>使用</i>生成式模型的一种方式：由基础模型充当推理引擎，<b>规划</b>步骤、<b>调用工具</b>（API、数据库、代码），保持<b>记忆</b>，并在较少人工干预下朝目标采取行动。</p></div>
<div class="box ex"><p><b>同一个问题的五个层次：处理客户邮件。</b></p>
<ul>
<li><b>基于规则的 AI：</b>主题含“退款”就转到账单队列。</li>
<li><b>ML：</b>用 5 万封已标注邮件训练的分类器预测邮件类别。</li>
<li><b>深度学习：</b>神经网络读取整封邮件，能理解俚语和错别字。</li>
<li><b>生成式 AI：</b>起草一封礼貌、个性化的回复。</li>
<li><b>智能体 AI：</b>读邮件 → 通过 API 查询订单 → 50 美元以下直接退款 → 发送回复；超过 50 美元转人工。</li>
</ul></div>

<h3>核心词汇</h3>
<div class="tw"><table><thead><tr><th>术语</th><th>含义</th></tr></thead><tbody>
<tr><td>算法 (Algorithm)</td><td>学习的方法或“配方”，如线性回归、XGBoost、k-means。</td></tr>
<tr><td>模型 (Model)</td><td>算法在数据上运行后得到的产物，输入新数据后给出预测。</td></tr>
<tr><td>训练 (Training)</td><td>让模型参数拟合数据的过程。计算量大，偶尔进行。</td></tr>
<tr><td>推理 (Inference)</td><td>用训练好的模型对新数据做预测。每次请求都会发生，按调用次数、Token 或实例小时计费。</td></tr>
<tr><td>神经网络</td><td>由带权重的节点（“神经元”）分层连接而成。“深度”指有很多隐藏层。</td></tr>
<tr><td>计算机视觉 (CV)</td><td>理解图像和视频的 AI：目标检测、人脸分析、OCR、缺陷检测。</td></tr>
<tr><td>自然语言处理 (NLP)</td><td>理解或生成人类语言的 AI：情感分析、实体识别、翻译、摘要。</td></tr>
<tr><td>大语言模型 (LLM)</td><td>在海量文本上训练、用于预测下一个 Token 的超大 Transformer 模型，属于基础模型的一种。</td></tr>
<tr><td>特征 / 标签 / 真实值</td><td>特征 = 输入变量（一列数据）；标签 = 模型要学会预测的答案；真实值 (ground truth) = 经过核实的正确标签。</td></tr>
<tr><td>参数 vs 超参数</td><td>参数（权重）在训练中<b>自动学习</b>；超参数由<b>人在训练前设定</b>：学习率、训练轮数、批大小、树深度等。</td></tr>
<tr><td>Epoch（轮）</td><td>完整遍历一次训练数据集。</td></tr>
<tr><td>拟合 (Fit)</td><td>模型捕捉真实规律的程度：<b>欠拟合</b>（太简单）、良好拟合、<b>过拟合</b>（记住了噪声）。</td></tr>
<tr><td>偏差（两种含义）</td><td><b>统计偏差：</b>过于简单的假设造成的系统误差，导致欠拟合。<b>公平性偏见：</b>系统性地对某类人群不利的结果。</td></tr>
<tr><td>公平性 (Fairness)</td><td>模型对不同群体（性别、年龄、族裔等）的结果是公平的。</td></tr>
</tbody></table></div>
<p><b>数据集划分：</b>训练集（约 70–80%）用于学习参数；验证集（约 10–15%）用于调超参数、选模型；测试集（约 10–15%）在最后只用一次，给出无偏的最终评分。</p>

<h3>数据类型</h3>
<div class="tw"><table><thead><tr><th>类型</th><th>样子</th><th>典型用途</th></tr></thead><tbody>
<tr><td>有标签数据</td><td>每个样本都附有正确答案（邮件 → “垃圾邮件”）。</td><td>监督学习。标注耗时耗钱（可用 SageMaker Ground Truth）。</td></tr>
<tr><td>无标签数据</td><td>只有原始样本，没有答案。</td><td>无监督学习、基础模型的自监督预训练。</td></tr>
<tr><td>结构化 / 表格数据</td><td>行和列、固定模式：CSV、关系表。</td><td>传统 ML：客户流失、信用风险、定价。</td></tr>
<tr><td>半结构化数据</td><td>有标记但结构灵活：JSON、XML、日志。</td><td>先解析，再做 ML 或分析。</td></tr>
<tr><td>非结构化数据</td><td>自由文本、图像、音频、视频，占企业数据的大部分。</td><td>深度学习和基础模型。</td></tr>
<tr><td>时间序列</td><td>按时间戳排列的数值：传感器读数、每日销量。</td><td>预测、异常检测。</td></tr>
<tr><td>图像</td><td>像素网格、视频帧。</td><td>计算机视觉。</td></tr>
<tr><td>文本</td><td>文档、聊天、邮件，会被切分成 Token。</td><td>NLP、LLM。</td></tr>
</tbody></table></div>

<h3>学习类型</h3>
<div class="tw"><table><thead><tr><th>类型</th><th>数据</th><th>目标</th><th>例子</th></tr></thead><tbody>
<tr><td>监督学习</td><td>有标签</td><td>为新输入预测标签。<b>分类</b> = 类别；<b>回归</b> = 数值。</td><td>是否垃圾邮件；房价；贷款违约。</td></tr>
<tr><td>无监督学习</td><td>无标签</td><td>发现结构：<b>聚类</b>、降维 (PCA)、异常检测、关联规则。</td><td>客户分群；异常交易。</td></tr>
<tr><td>强化学习 (RL)</td><td>来自环境的奖励</td><td>智能体通过试错学习策略，使累计奖励最大化。</td><td>机器人、游戏、AWS DeepRacer。</td></tr>
<tr><td>自监督学习</td><td>无标签，标签来自数据本身</td><td>预测下一个词或被遮盖的词。</td><td>LLM 的预训练方式。</td></tr>
<tr><td>半监督学习</td><td>少量有标签 + 大量无标签</td><td>让稀缺的标签发挥更大作用。</td><td>专家标注很少的医学影像。</td></tr>
<tr><td>迁移学习</td><td>预训练模型 + 较小的新数据集</td><td>把已学到的知识复用到新任务。</td><td>微调基础模型。</td></tr>
</tbody></table></div>
<div class="box rem"><p>有标签 → <b>监督学习</b>；无标签、找分组 → <b>无监督（聚类）</b>；通过试错从奖励中学习 → <b>强化学习</b>。RLHF（基于人类反馈的强化学习）是用 RL 让 LLM 对齐人类偏好，详见任务 3.3。</p></div>

<h3>推理类型</h3>
<p>模型训练好后要对外提供预测。Amazon SageMaker AI 提供四种方式，考题会描述一个场景让你选。</p>
<div class="tw"><table><thead><tr><th>方式</th><th>适用场景</th><th>要点</th></tr></thead><tbody>
<tr><td>实时推理</td><td>交互式应用需要毫秒级响应，流量稳定。</td><td>在你选定的实例上持续运行端点；负载小（最大 6 MB、60 秒）。实例运行期间持续计费。</td></tr>
<tr><td>无服务器推理</td><td>流量间歇或不可预测，有空闲期；可接受冷启动延迟。</td><td>无需管理实例；可缩容到零；按使用付费。</td></tr>
<tr><td>异步推理</td><td>负载大或处理时间长，但调用方可以等通知。</td><td>负载最大 1 GB，处理最长 1 小时；请求排队；空闲时可缩容到零；完成后通过 SNS 通知。</td></tr>
<tr><td>批量转换</td><td>离线对整个数据集打分（如每晚），不需要端点。</td><td>从 S3 读取、写回 S3；资源只在任务期间存在；大批量时通常成本最低。</td></tr>
</tbody></table></div>
<p>Amazon Bedrock 对基础模型也有同样的区分：实时场景用<b>按需调用</b>，大批量离线用价格更低的<b>批量推理</b>作业。</p>
<div class="box trap"><ul>
<li>“文件大、处理久、结果可以稍后返回” → <b>异步推理</b>，不是批量。</li>
<li>“每晚对数百万条记录打分、不需要端点” → <b>批量转换</b>。</li>
<li>“流量忽高忽低、长时间空闲、要省钱” → <b>无服务器推理</b>。</li>
<li>“在线应用、流量稳定、要求亚秒级延迟” → <b>实时推理</b>。</li>
</ul></div>
`};

/* ===================== TASK 1.2 ===================== */
AIF.tasks['1.2'] = {d:'d1',
title:{en:'Identify practical use cases for AI', zh:'识别 AI 的实际应用场景'},
obj:[
 ['Recognize where AI/ML adds value: assisting human decisions, scalability, automation','识别 AI/ML 的价值：辅助人类决策、方案可扩展性、自动化'],
 ['Know when AI/ML is not appropriate: cost-benefit, when a specific outcome is required rather than a prediction','判断何时不适合用 AI/ML：成本收益分析、需要确定结果而非预测时'],
 ['Pick the right technique: regression, classification, clustering','选择合适的技术：回归、分类、聚类'],
 ['Recognize real-world applications: CV, NLP, speech, recommendation, fraud detection, forecasting, knowledge bases, agentic AI','识别真实应用：计算机视觉、NLP、语音识别、推荐、欺诈检测、预测、知识库、智能体 AI'],
 ['Explain AWS managed AI/ML services: SageMaker AI, Transcribe, Translate, Comprehend, Lex, Polly and more','说明 AWS 托管 AI/ML 服务：SageMaker AI、Transcribe、Translate、Comprehend、Lex、Polly 等'],
 ['Decide between traditional ML and foundation models: regulation, explainability, operational constraints','在传统 ML 与基础模型之间做选择：监管、可解释性、运营约束']
],
en:`
<h3>Where AI and ML add value</h3>
<ul>
<li><b>Assist human decision-making:</b> a fraud score helps an analyst decide; a triage model flags which X-rays a radiologist should read first.</li>
<li><b>Scale:</b> review millions of images, calls or documents that no team could handle by hand.</li>
<li><b>Automate:</b> take over repetitive work such as extracting invoice fields or transcribing calls.</li>
<li>Also: find patterns humans miss, and personalize for every customer at once.</li>
</ul>

<h3>When AI and ML are the wrong tool</h3>
<ul>
<li><b>A specific, exact outcome is required.</b> ML returns predictions and probabilities. Payroll, tax computed from fixed rules, or an interest calculation should be ordinary code.</li>
<li><b>Cost outweighs benefit.</b> Count data collection, labeling, training, inference and maintenance against the value created.</li>
<li><b>Not enough good data</b>, or the data does not represent the real world.</li>
<li><b>Every decision must be fully explained</b> and a simple rule already works.</li>
<li><b>Errors are unacceptable</b> and no human can review the output.</li>
</ul>
<div class="box trap"><p>If the question says the system "must always produce the same rule-defined result", the answer is not ML. Pick deterministic, rules-based code.</p></div>

<h3>Match the problem to the technique</h3>
<div class="tw"><table><thead><tr><th>The question asks you to…</th><th>Technique</th><th>Example</th></tr></thead><tbody>
<tr><td>Predict a number</td><td>Regression</td><td>House price, delivery time, units sold</td></tr>
<tr><td>Predict a category</td><td>Classification (binary or multi-class)</td><td>Spam/not spam, churn yes/no, document type</td></tr>
<tr><td>Group similar items with no labels</td><td>Clustering</td><td>Customer segmentation</td></tr>
<tr><td>Predict future values over time</td><td>Forecasting (time-series)</td><td>Next month's demand, energy load</td></tr>
<tr><td>Spot rare, unusual events</td><td>Anomaly detection</td><td>Fraudulent card payments, faulty sensors</td></tr>
<tr><td>Suggest items to each user</td><td>Recommendation</td><td>"Customers also bought" (Amazon Personalize)</td></tr>
<tr><td>Answer questions from company documents</td><td>Knowledge base / RAG</td><td>HR policy assistant (Bedrock Knowledge Bases, Amazon Quick)</td></tr>
<tr><td>Complete a multi-step task using tools</td><td>Agentic AI</td><td>Rebook a flight and email the new itinerary</td></tr>
</tbody></table></div>

<h3>AWS managed AI services</h3>
<p>These are pre-trained and called through an API; no ML expertise needed. The exam gives a business need and expects the matching service.</p>
<div class="tw"><table><thead><tr><th>Service</th><th>What it does</th><th>Question cue</th></tr></thead><tbody>
<tr><td>Amazon SageMaker AI</td><td>Full platform to build, train, tune, deploy and monitor your own ML models.</td><td>"Data scientists", "custom model", "full control"</td></tr>
<tr><td>Amazon Transcribe</td><td>Speech to text; speaker identification, custom vocabulary, PII redaction; Call Analytics and Medical variants.</td><td>"Call recordings to text", "subtitles"</td></tr>
<tr><td>Amazon Translate</td><td>Neural machine translation; custom terminology; real-time and batch.</td><td>"Localize product pages into 10 languages"</td></tr>
<tr><td>Amazon Comprehend</td><td>NLP: sentiment, entities, key phrases, language detection, PII detection, topic modeling, custom classification.</td><td>"Sentiment of reviews", "find PII in text"</td></tr>
<tr><td>Amazon Lex</td><td>Conversational voice and text bots built on intents and slots; integrates with Amazon Connect.</td><td>"Chatbot to book appointments"</td></tr>
<tr><td>Amazon Polly</td><td>Text to lifelike speech; neural voices; SSML control.</td><td>"Read articles aloud", "voice for IVR"</td></tr>
<tr><td>Amazon Rekognition</td><td>Image and video analysis: objects, faces, text in images, content moderation, PPE detection.</td><td>"Detect unsafe images", "face verification"</td></tr>
<tr><td>Amazon Textract</td><td>Extracts printed and handwritten text, forms (key-value pairs) and tables from documents.</td><td>"Scanned invoices/forms into structured data"</td></tr>
<tr><td>Amazon Personalize</td><td>Real-time personalized recommendations.</td><td>"Recommend products per user"</td></tr>
<tr><td>Amazon Bedrock</td><td>Serverless API access to many foundation models, with RAG, agents, guardrails and customization.</td><td>"Generative AI app without managing infrastructure"</td></tr>
<tr><td>Amazon Nova</td><td>Amazon's own foundation models: text/multimodal understanding (Micro, Lite, Pro, Premier), image (Canvas), video (Reel), speech (Sonic).</td><td>"Amazon-built FM", "cost-effective multimodal model"</td></tr>
<tr><td>Amazon Quick</td><td>Agentic workspace for business users: chat with company data, research, BI dashboards, automations.</td><td>"Employees ask questions across company data"</td></tr>
<tr><td>Kiro</td><td>Agentic IDE for developers: spec-driven development (requirements → design → tasks), agent hooks.</td><td>"Developers build features from specs with AI agents"</td></tr>
<tr><td>AWS Transform</td><td>Agentic AI for migration and modernization: .NET, mainframe, VMware, Java upgrades.</td><td>"Modernize legacy applications"</td></tr>
</tbody></table></div>
<div class="box note"><p>Amazon Q Developer (AI assistant in the IDE, CLI and console) and Amazon Q Business still appear in older material. The v1.1 guide names Amazon Quick and Kiro as the current business-user and developer tools, and keeps Amazon Q in scope.</p></div>

<h3>Traditional ML or a foundation model?</h3>
<div class="tw"><table><thead><tr><th>Situation</th><th>Better choice</th><th>Why</th></tr></thead><tbody>
<tr><td>Regulated decision (credit, insurance) where each outcome must be explained</td><td>Traditional ML</td><td>Interpretable models (logistic regression, decision trees) plus explainability tools satisfy regulators.</td></tr>
<tr><td>Structured tabular prediction: churn, price, risk score</td><td>Traditional ML</td><td>Cheaper, faster and usually more accurate on tables.</td></tr>
<tr><td>Open-ended language, images or content creation; many varied tasks</td><td>Foundation model</td><td>One pre-trained model handles many tasks through prompts.</td></tr>
<tr><td>Little labeled data but language understanding needed</td><td>Foundation model</td><td>Prompting or few-shot works with no training.</td></tr>
<tr><td>Very high volume, tiny latency budget, one narrow task, or offline/edge</td><td>Small traditional model</td><td>Lower cost per prediction; runs on constrained hardware.</td></tr>
</tbody></table></div>
<div class="box rem"><p>Regulated + must explain each decision + tabular data → <b>traditional ML</b>. Unstructured, open-ended, generative → <b>foundation model</b>.</p></div>
`,
zh:`
<h3>AI 与 ML 的价值所在</h3>
<ul>
<li><b>辅助人类决策：</b>欺诈评分帮助分析师判断；分诊模型标出放射科医生应优先阅读的 X 光片。</li>
<li><b>规模化：</b>审阅人工无法处理的数百万张图片、通话或文档。</li>
<li><b>自动化：</b>接手重复性工作，如提取发票字段、转写通话。</li>
<li>此外：发现人类忽略的规律，为每位客户同时提供个性化服务。</li>
</ul>

<h3>什么时候不该用 AI/ML</h3>
<ul>
<li><b>需要确定、精确的结果。</b>ML 输出的是预测和概率。工资计算、按固定规则计税、利息计算应当用普通代码。</li>
<li><b>成本大于收益。</b>把数据收集、标注、训练、推理和维护成本与产生的价值对比。</li>
<li><b>缺乏足够的优质数据</b>，或数据不能代表真实情况。</li>
<li><b>每个决策都必须完全可解释</b>，而简单规则已经够用。</li>
<li><b>不允许出错</b>，且没有人工复核。</li>
</ul>
<div class="box trap"><p>如果题目说系统“必须始终给出由规则确定的相同结果”，答案就不是 ML，应选择确定性的规则代码。</p></div>

<h3>问题与技术的对应</h3>
<div class="tw"><table><thead><tr><th>题目要求……</th><th>技术</th><th>例子</th></tr></thead><tbody>
<tr><td>预测一个数值</td><td>回归</td><td>房价、送达时间、销量</td></tr>
<tr><td>预测一个类别</td><td>分类（二分类或多分类）</td><td>是否垃圾邮件、是否流失、文档类型</td></tr>
<tr><td>在无标签情况下把相似项分组</td><td>聚类</td><td>客户分群</td></tr>
<tr><td>预测未来随时间变化的值</td><td>时间序列预测</td><td>下月需求、用电负荷</td></tr>
<tr><td>发现罕见的异常事件</td><td>异常检测</td><td>信用卡欺诈、传感器故障</td></tr>
<tr><td>为每个用户推荐商品</td><td>推荐系统</td><td>“买了还买”（Amazon Personalize）</td></tr>
<tr><td>基于公司文档回答问题</td><td>知识库 / RAG</td><td>人事政策助手（Bedrock 知识库、Amazon Quick）</td></tr>
<tr><td>借助工具完成多步骤任务</td><td>智能体 AI</td><td>改签航班并把新行程发邮件给用户</td></tr>
</tbody></table></div>

<h3>AWS 托管 AI 服务</h3>
<p>这些服务已预训练好，通过 API 调用，无需 ML 专业知识。考题给出业务需求，要求选对服务。</p>
<div class="tw"><table><thead><tr><th>服务</th><th>功能</th><th>题目关键词</th></tr></thead><tbody>
<tr><td>Amazon SageMaker AI</td><td>构建、训练、调优、部署和监控自有 ML 模型的完整平台。</td><td>“数据科学家”“自定义模型”“完全控制”</td></tr>
<tr><td>Amazon Transcribe</td><td>语音转文字；说话人识别、自定义词汇、PII 脱敏；有 Call Analytics 和 Medical 版本。</td><td>“通话录音转文字”“字幕”</td></tr>
<tr><td>Amazon Translate</td><td>神经机器翻译；自定义术语；实时与批量。</td><td>“把商品页翻译成 10 种语言”</td></tr>
<tr><td>Amazon Comprehend</td><td>NLP：情感、实体、关键短语、语种识别、PII 检测、主题建模、自定义分类。</td><td>“评论情感”“找出文本中的 PII”</td></tr>
<tr><td>Amazon Lex</td><td>基于意图和槽位构建语音/文本对话机器人；可与 Amazon Connect 集成。</td><td>“预约挂号聊天机器人”</td></tr>
<tr><td>Amazon Polly</td><td>文本转逼真语音；神经语音；SSML 控制。</td><td>“朗读文章”“语音导航”</td></tr>
<tr><td>Amazon Rekognition</td><td>图像和视频分析：物体、人脸、图中文字、内容审核、防护装备检测。</td><td>“识别不良图片”“人脸验证”</td></tr>
<tr><td>Amazon Textract</td><td>从文档中提取印刷体和手写文字、表单（键值对）和表格。</td><td>“扫描发票/表单转结构化数据”</td></tr>
<tr><td>Amazon Personalize</td><td>实时个性化推荐。</td><td>“为每个用户推荐商品”</td></tr>
<tr><td>Amazon Bedrock</td><td>通过无服务器 API 使用多种基础模型，并提供 RAG、智能体、护栏和定制功能。</td><td>“无需管理基础设施的生成式 AI 应用”</td></tr>
<tr><td>Amazon Nova</td><td>亚马逊自研基础模型：文本/多模态理解（Micro、Lite、Pro、Premier）、图像 (Canvas)、视频 (Reel)、语音 (Sonic)。</td><td>“亚马逊自研 FM”“高性价比多模态模型”</td></tr>
<tr><td>Amazon Quick</td><td>面向业务用户的智能体工作空间：与企业数据对话、调研、BI 仪表板、自动化。</td><td>“员工跨公司数据提问”</td></tr>
<tr><td>Kiro</td><td>面向开发者的智能体 IDE：规格驱动开发（需求 → 设计 → 任务），智能体钩子。</td><td>“开发者借助 AI 智能体按规格开发功能”</td></tr>
<tr><td>AWS Transform</td><td>用于迁移和现代化的智能体 AI：.NET、大型机、VMware、Java 升级。</td><td>“现代化遗留应用”</td></tr>
</tbody></table></div>
<div class="box note"><p>旧资料中常见 Amazon Q Developer（IDE、CLI 和控制台中的 AI 助手）和 Amazon Q Business。v1.1 考纲把 Amazon Quick 和 Kiro 列为当前面向业务用户和开发者的工具，同时仍保留 Amazon Q 在考试范围内。</p></div>

<h3>传统 ML 还是基础模型？</h3>
<div class="tw"><table><thead><tr><th>场景</th><th>更佳选择</th><th>原因</th></tr></thead><tbody>
<tr><td>受监管的决策（信贷、保险），每个结果都要解释</td><td>传统 ML</td><td>可解释模型（逻辑回归、决策树）加上可解释性工具能满足监管要求。</td></tr>
<tr><td>结构化表格预测：流失、价格、风险评分</td><td>传统 ML</td><td>更便宜、更快，在表格数据上通常更准确。</td></tr>
<tr><td>开放式语言、图像或内容创作；任务多样</td><td>基础模型</td><td>一个预训练模型通过提示词即可处理多种任务。</td></tr>
<tr><td>标注数据很少但需要语言理解能力</td><td>基础模型</td><td>无需训练，用提示词或少样本即可。</td></tr>
<tr><td>超高调用量、极低延迟、单一窄任务，或离线/边缘部署</td><td>小型传统模型</td><td>单次预测成本低；可在受限硬件上运行。</td></tr>
</tbody></table></div>
<div class="box rem"><p>受监管 + 每个决策需解释 + 表格数据 → <b>传统 ML</b>。非结构化、开放式、生成式 → <b>基础模型</b>。</p></div>
`};

/* ===================== TASK 1.3 ===================== */
AIF.tasks['1.3'] = {d:'d1',
title:{en:'Describe the AI/ML development lifecycle', zh:'描述 AI/ML 开发生命周期'},
obj:[
 ['Describe and tell apart the components of an AI/ML pipeline','描述并区分 AI/ML 流水线的各个组成部分'],
 ['Describe where models come from: open-source pre-trained models, training custom models','描述模型来源：开源预训练模型、训练自定义模型'],
 ['Describe ways to run a model in production: managed API service vs self-hosted API','描述生产环境使用模型的方式：托管 API 服务 vs 自托管 API'],
 ['Map AWS services to each pipeline stage (Bedrock, Amazon Q, Amazon Quick, Kiro, SageMaker AI)','把 AWS 服务对应到流水线各阶段（Bedrock、Amazon Q、Amazon Quick、Kiro、SageMaker AI）'],
 ['Describe MLOps: experimentation, repeatable processes, scalability, technical debt, production readiness, monitoring, re-training','描述 MLOps：实验、可重复流程、可扩展系统、技术债管理、生产就绪、模型监控、再训练'],
 ['Describe model metrics (accuracy, precision, recall, F1) and business metrics (cost per user, development cost, customer feedback, ROI)','描述模型指标（准确率、精确率、召回率、F1）和业务指标（每用户成本、开发成本、客户反馈、ROI）']
],
en:`
<h3>The pipeline, stage by stage</h3>
<div class="flow loop"><span>Business goal</span><span>Frame the ML problem</span><span>Collect data</span><span>Prepare data &amp; EDA</span><span>Feature engineering</span><span>Train</span><span>Tune</span><span>Evaluate</span><span>Deploy</span><span>Monitor</span><span>Re-train ↺</span></div>
<div class="tw"><table><thead><tr><th>Stage</th><th>What happens</th><th>AWS services and features</th></tr></thead><tbody>
<tr><td>Business goal &amp; framing</td><td>Define the KPI and success criteria; decide whether ML is needed and what type (classification, regression…).</td><td>Stakeholder work; no service needed</td></tr>
<tr><td>Data collection</td><td>Gather, ingest and store data from many sources.</td><td>Amazon S3, AWS Glue (ETL), Amazon EMR (big data), AWS Data Exchange (third-party data), AWS Lake Formation</td></tr>
<tr><td>Preparation &amp; EDA</td><td>Clean, fix missing values, explore distributions (exploratory data analysis).</td><td>SageMaker Data Wrangler, AWS Glue DataBrew (no-code), SageMaker Studio notebooks</td></tr>
<tr><td>Labeling</td><td>Attach ground-truth labels.</td><td>SageMaker Ground Truth</td></tr>
<tr><td>Feature engineering</td><td>Create and select the inputs the model learns from; store them for reuse.</td><td>SageMaker Feature Store</td></tr>
<tr><td>Training &amp; tuning</td><td>Fit the model; search hyperparameters.</td><td>SageMaker AI training jobs, automatic model tuning, SageMaker Canvas (no-code), SageMaker JumpStart (pre-trained models)</td></tr>
<tr><td>Evaluation</td><td>Measure quality, bias and explainability on held-out data.</td><td>SageMaker Clarify, SageMaker experiment tracking (managed MLflow)</td></tr>
<tr><td>Deployment</td><td>Serve predictions; version and approve models.</td><td>SageMaker endpoints (real-time, serverless, async, batch), SageMaker Model Registry</td></tr>
<tr><td>Monitoring</td><td>Watch data quality, model quality, bias drift and feature attribution drift.</td><td>SageMaker Model Monitor, Amazon CloudWatch</td></tr>
<tr><td>Orchestration</td><td>Automate the whole flow as CI/CD for ML.</td><td>SageMaker Pipelines</td></tr>
</tbody></table></div>
<p><b>The generative AI path</b> is shorter because the model already exists: choose an FM in Amazon Bedrock → prompt it, add RAG or customize it → evaluate with Bedrock Model Evaluation → call it through the API → monitor with Guardrails, invocation logging and CloudWatch. Business users get GenAI through <b>Amazon Quick</b>; developers build with <b>Kiro</b> and <b>Amazon Q Developer</b>.</p>

<h3>Where models come from</h3>
<ul>
<li><b>Open-source / open-weight pre-trained models</b> (Llama, Mistral, models on Hugging Face): deploy from SageMaker JumpStart or the Bedrock Marketplace, or bring your own weights with Bedrock Custom Model Import.</li>
<li><b>Managed proprietary FMs</b> (Anthropic Claude, Amazon Nova, Cohere and others) through the Bedrock API.</li>
<li><b>Train your own custom model</b> on SageMaker AI: most control, most data, most cost.</li>
</ul>

<h3>Running a model in production</h3>
<div class="tw"><table><thead><tr><th></th><th>Managed API service</th><th>Self-hosted API</th></tr></thead><tbody>
<tr><td>Example</td><td>Amazon Bedrock</td><td>SageMaker AI endpoint, or EC2 / EKS you run yourself</td></tr>
<tr><td>You manage</td><td>Prompts, data, access</td><td>Model choice, instance type, scaling, patching, networking</td></tr>
<tr><td>Pricing</td><td>Per token or per request</td><td>Per instance-hour, even when idle (unless serverless)</td></tr>
<tr><td>Best for</td><td>Fast start, no ML ops team, variable load</td><td>Custom or open models, strict control, specific hardware</td></tr>
</tbody></table></div>

<h3>MLOps fundamentals</h3>
<p>MLOps applies DevOps discipline to machine learning so models reach production reliably and stay good.</p>
<ul>
<li><b>Experimentation:</b> track every run's data version, code, hyperparameters and metrics so results can be compared.</li>
<li><b>Repeatable processes:</b> pipelines and infrastructure as code; version data, code and models together.</li>
<li><b>Scalable systems:</b> training and serving grow with data and traffic without redesign.</li>
<li><b>Managing technical debt:</b> avoid undocumented models, one-off scripts and hidden data dependencies.</li>
<li><b>Production readiness:</b> automated tests, approval gates in a model registry, rollback plans.</li>
<li><b>Model monitoring:</b> performance degrades as the world changes.</li>
<li><b>Model re-training:</b> retrain on a schedule or when monitoring detects drift.</li>
</ul>
<div class="tw"><table><thead><tr><th>Drift type</th><th>What changed</th><th>Example</th></tr></thead><tbody>
<tr><td>Data drift</td><td>The distribution of <b>inputs</b> shifts.</td><td>A new, younger customer segment starts using the app.</td></tr>
<tr><td>Concept drift</td><td>The <b>relationship</b> between inputs and the target changes.</td><td>Fraudsters change tactics, so old patterns no longer mean fraud.</td></tr>
</tbody></table></div>

<h3>Model performance metrics</h3>
<p>Classification metrics come from the <b>confusion matrix</b>:</p>
<div class="tw"><table><thead><tr><th></th><th>Predicted positive</th><th>Predicted negative</th></tr></thead><tbody>
<tr><td>Actually positive</td><td>True positive (TP)</td><td>False negative (FN), a miss</td></tr>
<tr><td>Actually negative</td><td>False positive (FP), a false alarm</td><td>True negative (TN)</td></tr>
</tbody></table></div>
<div class="formula">Accuracy  = (TP + TN) / all
Precision = TP / (TP + FP)     of everything flagged, how much was right?
Recall    = TP / (TP + FN)     of all real positives, how many did we catch?
F1        = 2 × P × R / (P + R)</div>
<ul>
<li><b>Precision</b> matters when <b>false positives</b> are costly: a spam filter must not hide a real customer email.</li>
<li><b>Recall</b> matters when <b>false negatives</b> are costly: missing cancer or fraud.</li>
<li><b>F1</b> balances both; use it on imbalanced data.</li>
<li><b>AUC-ROC</b> measures how well the model separates the classes across all thresholds: 0.5 = random, 1.0 = perfect.</li>
<li>Regression: <b>MAE</b> (average absolute error), <b>RMSE</b> (punishes large errors more), <b>R²</b> (share of variance explained).</li>
</ul>
<div class="box ex"><p>A spam filter checks 100 emails: TP = 40, FP = 10, FN = 5, TN = 45.</p>
<p>Accuracy = 85/100 = <b>85%</b> · Precision = 40/50 = <b>80%</b> · Recall = 40/45 = <b>88.9%</b> · F1 = 2×0.80×0.889 / 1.689 ≈ <b>0.84</b>.</p>
<p>Ten legitimate emails went to spam (false positives). If customers complain about missing emails, tune for higher precision.</p></div>
<div class="box trap"><p>If 1% of transactions are fraud, a model that always says "not fraud" scores 99% accuracy with 0% recall. On imbalanced data, accuracy alone is misleading; look at recall, precision or F1.</p></div>

<h3>Business metrics</h3>
<ul>
<li><b>Cost per user</b> or per prediction; <b>development cost</b> (people, data, compute).</li>
<li><b>Customer feedback</b> and satisfaction (CSAT, ratings).</li>
<li><b>ROI</b> = (benefit − cost) ÷ cost.</li>
<li>Also conversion rate, average revenue per user, customer lifetime value, time saved.</li>
</ul>
<div class="box rem"><p>A model with great F1 but no business impact has failed. Tie every model metric to a business metric agreed at the start.</p></div>
`,
zh:`
<h3>流水线逐阶段拆解</h3>
<div class="flow loop"><span>业务目标</span><span>定义 ML 问题</span><span>收集数据</span><span>数据准备与 EDA</span><span>特征工程</span><span>训练</span><span>调优</span><span>评估</span><span>部署</span><span>监控</span><span>再训练 ↺</span></div>
<div class="tw"><table><thead><tr><th>阶段</th><th>做什么</th><th>AWS 服务与功能</th></tr></thead><tbody>
<tr><td>业务目标与问题定义</td><td>确定 KPI 与成功标准；判断是否需要 ML 以及类型（分类、回归……）。</td><td>与业务方沟通，无需服务</td></tr>
<tr><td>数据收集</td><td>从多个来源采集、导入并存储数据。</td><td>Amazon S3、AWS Glue (ETL)、Amazon EMR（大数据）、AWS Data Exchange（第三方数据）、AWS Lake Formation</td></tr>
<tr><td>数据准备与 EDA</td><td>清洗、处理缺失值、探索数据分布（探索性数据分析）。</td><td>SageMaker Data Wrangler、AWS Glue DataBrew（无代码）、SageMaker Studio 笔记本</td></tr>
<tr><td>数据标注</td><td>添加真实标签。</td><td>SageMaker Ground Truth</td></tr>
<tr><td>特征工程</td><td>构造和选择模型要学习的输入，并存储以便复用。</td><td>SageMaker Feature Store</td></tr>
<tr><td>训练与调优</td><td>拟合模型；搜索超参数。</td><td>SageMaker AI 训练任务、自动模型调优、SageMaker Canvas（无代码）、SageMaker JumpStart（预训练模型）</td></tr>
<tr><td>评估</td><td>在留出数据上衡量质量、偏差和可解释性。</td><td>SageMaker Clarify、SageMaker 实验跟踪（托管 MLflow）</td></tr>
<tr><td>部署</td><td>对外提供预测；管理模型版本与审批。</td><td>SageMaker 端点（实时、无服务器、异步、批量）、SageMaker Model Registry</td></tr>
<tr><td>监控</td><td>监控数据质量、模型质量、偏差漂移和特征归因漂移。</td><td>SageMaker Model Monitor、Amazon CloudWatch</td></tr>
<tr><td>编排</td><td>把整个流程自动化，实现 ML 的 CI/CD。</td><td>SageMaker Pipelines</td></tr>
</tbody></table></div>
<p><b>生成式 AI 路径</b>更短，因为模型已经存在：在 Amazon Bedrock 中选择 FM → 编写提示词、加入 RAG 或定制模型 → 用 Bedrock 模型评估进行评估 → 通过 API 调用 → 用护栏、调用日志和 CloudWatch 监控。业务用户通过 <b>Amazon Quick</b> 使用生成式 AI；开发者使用 <b>Kiro</b> 和 <b>Amazon Q Developer</b>。</p>

<h3>模型从哪里来</h3>
<ul>
<li><b>开源 / 开放权重的预训练模型</b>（Llama、Mistral、Hugging Face 上的模型）：通过 SageMaker JumpStart 或 Bedrock Marketplace 部署，或用 Bedrock Custom Model Import 导入自有权重。</li>
<li><b>托管的商业基础模型</b>（Anthropic Claude、Amazon Nova、Cohere 等），通过 Bedrock API 调用。</li>
<li><b>自己训练定制模型</b>（在 SageMaker AI 上）：控制力最强，需要的数据和成本也最多。</li>
</ul>

<h3>在生产中运行模型</h3>
<div class="tw"><table><thead><tr><th></th><th>托管 API 服务</th><th>自托管 API</th></tr></thead><tbody>
<tr><td>例子</td><td>Amazon Bedrock</td><td>SageMaker AI 端点，或自行运维的 EC2 / EKS</td></tr>
<tr><td>你负责</td><td>提示词、数据、访问控制</td><td>模型选择、实例类型、扩缩容、补丁、网络</td></tr>
<tr><td>计费</td><td>按 Token 或按请求</td><td>按实例小时，空闲也计费（无服务器除外）</td></tr>
<tr><td>适合</td><td>快速起步、没有 ML 运维团队、负载多变</td><td>定制或开源模型、严格控制、特定硬件</td></tr>
</tbody></table></div>

<h3>MLOps 基础</h3>
<p>MLOps 把 DevOps 的工程纪律用于机器学习，让模型可靠地进入生产并保持良好表现。</p>
<ul>
<li><b>实验管理：</b>记录每次运行的数据版本、代码、超参数和指标，方便对比。</li>
<li><b>可重复流程：</b>流水线和基础设施即代码；数据、代码、模型一起做版本管理。</li>
<li><b>可扩展系统：</b>训练和服务能随数据量和流量增长而扩展，无需重新设计。</li>
<li><b>管理技术债：</b>避免无文档的模型、一次性脚本和隐藏的数据依赖。</li>
<li><b>生产就绪：</b>自动化测试、模型注册表中的审批关卡、回滚预案。</li>
<li><b>模型监控：</b>现实世界变化会让模型性能下降。</li>
<li><b>模型再训练：</b>按计划或在监控发现漂移时重新训练。</li>
</ul>
<div class="tw"><table><thead><tr><th>漂移类型</th><th>变化的是什么</th><th>例子</th></tr></thead><tbody>
<tr><td>数据漂移</td><td><b>输入</b>数据的分布发生变化。</td><td>一批更年轻的新客户开始使用应用。</td></tr>
<tr><td>概念漂移</td><td>输入与目标之间的<b>关系</b>发生变化。</td><td>欺诈者改变手法，旧模式不再代表欺诈。</td></tr>
</tbody></table></div>

<h3>模型性能指标</h3>
<p>分类指标来自<b>混淆矩阵</b>：</p>
<div class="tw"><table><thead><tr><th></th><th>预测为正</th><th>预测为负</th></tr></thead><tbody>
<tr><td>实际为正</td><td>真正例 (TP)</td><td>假负例 (FN)，漏报</td></tr>
<tr><td>实际为负</td><td>假正例 (FP)，误报</td><td>真负例 (TN)</td></tr>
</tbody></table></div>
<div class="formula">准确率 Accuracy  = (TP + TN) / 总数
精确率 Precision = TP / (TP + FP)   被判为正的里面有多少是对的？
召回率 Recall    = TP / (TP + FN)   真正的正例里抓到了多少？
F1               = 2 × P × R / (P + R)</div>
<ul>
<li><b>误报 (FP)</b> 代价高时看<b>精确率</b>：垃圾邮件过滤不能把真实客户邮件藏起来。</li>
<li><b>漏报 (FN)</b> 代价高时看<b>召回率</b>：漏诊癌症、漏掉欺诈。</li>
<li><b>F1</b> 兼顾两者，适用于类别不平衡的数据。</li>
<li><b>AUC-ROC</b> 衡量模型在所有阈值下区分类别的能力：0.5 = 随机，1.0 = 完美。</li>
<li>回归指标：<b>MAE</b>（平均绝对误差）、<b>RMSE</b>（对大误差惩罚更重）、<b>R²</b>（解释的方差比例）。</li>
</ul>
<div class="box ex"><p>垃圾邮件过滤器检查 100 封邮件：TP = 40，FP = 10，FN = 5，TN = 45。</p>
<p>准确率 = 85/100 = <b>85%</b> · 精确率 = 40/50 = <b>80%</b> · 召回率 = 40/45 = <b>88.9%</b> · F1 = 2×0.80×0.889 / 1.689 ≈ <b>0.84</b>。</p>
<p>有 10 封正常邮件被误判为垃圾邮件（误报）。如果客户抱怨收不到邮件，就要调高精确率。</p></div>
<div class="box trap"><p>如果只有 1% 的交易是欺诈，一个永远回答“不是欺诈”的模型准确率为 99%，召回率却是 0%。数据不平衡时只看准确率会误导，要看召回率、精确率或 F1。</p></div>

<h3>业务指标</h3>
<ul>
<li><b>每用户成本</b>或每次预测成本；<b>开发成本</b>（人力、数据、算力）。</li>
<li><b>客户反馈</b>与满意度（CSAT、评分）。</li>
<li><b>投资回报率 ROI</b> = (收益 − 成本) ÷ 成本。</li>
<li>还有转化率、每用户平均收入、客户终身价值、节省的时间。</li>
</ul>
<div class="box rem"><p>F1 很高却没有业务影响的模型就是失败的。每个模型指标都要对应到项目开始时约定的业务指标。</p></div>
`};
