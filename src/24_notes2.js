/* Wrong-option notes for the second question set (correct option is always authored first). */
(function(){
function W(i, en, zh){ if (AIF.qs[i]) AIF.qs[i].w = {en: [''].concat(en), zh: [''].concat(zh)}; }
function W2(i, en, zh){ if (AIF.qs[i]) AIF.qs[i].w = {en: ['', ''].concat(en), zh: ['', ''].concat(zh)}; }

/* 1.1 */
W2(76,['A table with a fixed schema is structured data.','CSV rows and columns are structured (tabular).','A spreadsheet is structured data.'],['有固定模式的表是结构化数据。','CSV 的行列属于结构化（表格）数据。','电子表格是结构化数据。']);
W(77,['Pixels, not timestamped values.','These are numbers, not text.','No JSON; values are ordered by time.'],['这是像素数据，不是带时间戳的数值。','这些是数字，不是文本。','没有 JSON，数值按时间排序。']);
W(78,['That is rule-based AI, not deep learning.','Deep learning usually needs more data.','Images and audio are where deep learning excels.'],['那是基于规则的 AI，不是深度学习。','深度学习通常需要更多数据。','图像和音频正是深度学习擅长的领域。']);
W(79,['Pays for an instance that sits idle most of the day.','For scoring datasets offline, not on-demand requests.','For large payloads and long jobs, not a few quick calls.'],['为大部分时间闲置的实例付费。','用于离线对数据集打分，不适合按需请求。','用于大负载、长任务，不适合几次快速调用。']);
W(81,['A single content-generation step.','A single translation task.','A single summarization task.'],['只是一次内容生成。','只是一次翻译。','只是一次摘要。']);
/* 1.2 */
W(82,['Groups items; does not predict future values.','Predicts a category, not a number over time.','Reduces features; predicts nothing.'],['只做分组，不预测未来值。','预测类别，而不是随时间变化的数值。','减少特征，不做预测。']);
W(83,['Predicts a number, not unusual events.','Suggests items to users.','Condenses text.'],['预测数值，不识别异常事件。','为用户推荐商品。','压缩文本。']);
W(84,['Only speaks text aloud; does not understand intent.','Only converts speech to text.','Makes recommendations.'],['只把文字读出来，不理解意图。','只把语音转成文字。','做推荐。']);
W2(85,['Fixed statutory rates mean an exact calculation: use code.','Must always be exact: use rules, not predictions.','A simple deterministic operation.'],['税率固定，是精确计算，应写代码。','必须始终精确，应用规则而非预测。','简单的确定性操作。']);
W(86,['Analyzes text meaning; does not read scanned forms.','Finds objects in images; not built for form fields.','Translates languages.'],['分析文本含义，不读取扫描表单。','识别图像中的物体，不是为表单字段设计的。','做语言翻译。']);
W(87,['Needs labeled data and ML skills the team does not have.','Enormous cost and time.','Analyzes images, not text sentiment.'],['需要团队不具备的有标签数据和 ML 技能。','成本和时间都极高。','分析图像，不分析文本情感。']);
W(88,['Text to speech.','Builds chatbots; does not translate.','Extracts text from documents.'],['文字转语音。','构建聊天机器人，不做翻译。','从文档中提取文字。']);
/* 1.3 */
W(89,['Labels data.','Explains predictions and detects bias.','Documents models.'],['标注数据。','解释预测并检测偏差。','记录模型信息。']);
W(90,['Text to speech.','Compliance reports.','Finds PII in S3.'],['文字转语音。','合规报告。','在 S3 中查找 PII。']);
W(91,['Archive storage; no approval workflow.','Best-practice checks.','Content delivery network.'],['归档存储，没有审批流程。','最佳实践检查。','内容分发网络。']);
W(92,['Needs ops skills the startup lacks, and bills while idle.','Takes months and a lot of money.','Bills around the clock even with no traffic.'],['需要初创公司不具备的运维能力，空闲也计费。','需要数月时间和大量资金。','即使没有流量也全天计费。']);
W2(93,['Manual steps are error-prone and not repeatable.','Skipping tests undermines production readiness.','Undocumented work creates technical debt.'],['手动步骤容易出错、不可重复。','跳过测试会破坏生产就绪。','无文档的工作会产生技术债。']);
W(94,['The simple average of 0.60 and 0.90, not F1.','That is P × R.','That is recall alone.'],['这是 0.60 和 0.90 的简单平均，不是 F1。','这是 P × R。','这只是召回率。']);
W(95,['Benefit ÷ cost, without subtracting the cost first.','(Benefit − cost) ÷ benefit: divides by the wrong number.','Cost ÷ benefit.'],['收益 ÷ 成本，没有先减去成本。','(收益 − 成本) ÷ 收益：除错了数。','成本 ÷ 收益。']);
/* 2.1 */
W(96,['The FM generates the answer, not the embedding model.','Encryption is handled by KMS.','Chunking splits documents; embedding comes after.'],['答案由 FM 生成，不是嵌入模型。','加密由 KMS 负责。','分块负责切分文档，嵌入在其后。']);
W(98,['Temperature does not cause request errors.','Fine-tuning does not change context length.','A missing stop sequence cannot cause an error on input.'],['温度不会导致请求报错。','微调不改变上下文长度。','缺少停止序列不会导致输入报错。']);
W(99,['Output tokens are billed.','Each output token takes time to generate.','Output usually costs more per token.'],['输出 Token 要计费。','每个输出 Token 都需要时间生成。','输出通常单价更高。']);
W2(100,['An evaluation metric, not part of an agent.','A pricing option, not part of an agent.','A sampling setting, not part of an agent.'],['评估指标，不是智能体组成部分。','计费选项，不是智能体组成部分。','采样参数，不是智能体组成部分。']);
W(101,['Longer outputs do not remember past sessions.','Makes answers less varied; stores nothing.','Ends generation; stores nothing.'],['更长的输出不会记住以前的会话。','让回答更一致，但不存储任何东西。','结束生成，不存储任何东西。']);
W(103,['Unpredictable, the opposite of an auditable fixed process.','Random output is the opposite of predictable.','Training does not define a business process.'],['不可预测，与可审计的固定流程相反。','随机输出与可预测相反。','训练不能定义业务流程。']);
W(104,['Training happens elsewhere; MCP only connects tools.','That is a vector store.','Encryption is handled by TLS and KMS.'],['训练在别处进行，MCP 只负责连接工具。','那是向量库的功能。','加密由 TLS 和 KMS 负责。']);
W(105,['Cheap: just writing inputs.','Costs far less than training from scratch.','Collecting ratings is cheap.'],['很便宜，只是写输入。','比从零训练便宜得多。','收集评分成本很低。']);
/* 2.2 */
W(106,['Makes answers even more varied.','Removes the instructions that keep answers consistent.','Adds more randomness.'],['会让答案更加多样。','去掉了保持答案一致的指令。','增加随机性。']);
W2(107,['GenAI can hallucinate, so accuracy is not guaranteed.','GenAI models are hard to interpret.','GenAI is nondeterministic.'],['生成式 AI 会产生幻觉，无法保证准确。','生成式 AI 模型难以解释。','生成式 AI 是非确定性的。']);
W(108,['Irrelevant to reading contracts.','Irrelevant to reading contracts.','Affects retrieval, not how much text fits in one request.'],['与阅读合同无关。','与阅读合同无关。','影响检索，不影响单次请求能放多少文本。']);
W(109,['Adaptability is a strength.','Responsiveness is a strength.','A low barrier to entry is a strength.'],['适应性是优势。','响应速度是优势。','低门槛是优势。']);
W(110,['Revenue per user over a period, not the whole relationship.','Share of visitors who buy.','A language-model metric.'],['某段时间内的人均收入，不是整个客户关系。','购买的访客比例。','语言模型指标。']);
W(111,['A language-model metric.','Measures handling speed for one team.','A training setting.'],['语言模型指标。','衡量单个团队的处理速度。','训练设置。']);
/* 2.3 */
W(112,['Optimized for training.','Graviton is a general-purpose CPU, not a storage or inference chip.','Archive storage, not a chip.'],['为训练优化。','Graviton 是通用 CPU，不是存储或推理芯片。','归档存储，不是芯片。']);
W(113,['A business-user workspace; not for hosting models.','Text to speech.','Compliance reports.'],['面向业务用户的工作空间，不用于托管模型。','文字转语音。','合规报告。']);
W(114,['An ML platform for builders.','A chip.','A code SDK for developers.'],['面向构建者的 ML 平台。','芯片。','面向开发者的代码 SDK。']);
W(115,['Builds chatbots.','Tracks configuration.','Extracts text from documents.'],['构建聊天机器人。','跟踪配置。','从文档中提取文字。']);
W(116,['Recommendations.','NLP on text.','Best-practice checks.'],['推荐。','文本 NLP。','最佳实践检查。']);
W2(117,['Bedrock is serverless; no GPUs to buy.','Bedrock does not share prompts with providers.','Bedrock offers many providers\' models.'],['Bedrock 是无服务器的，不用买 GPU。','Bedrock 不会与提供商共享提示。','Bedrock 提供多家提供商的模型。']);
W(118,['Reserves throughput; does not reuse the shared prompt.','Adds randomness; no cost saving.','Evaluates models; no cost saving.'],['预留吞吐，不复用共享提示。','增加随机性，不省钱。','评估模型，不省钱。']);
W(119,['A SageMaker pricing plan, not Bedrock inference.','There are no batch credits; batch jobs process offline volumes, they do not serve a custom model.','Artifact holds compliance agreements.'],['SageMaker 的计费方案，不适用于 Bedrock 推理。','没有“批量额度”这回事；批量任务用于离线大批量处理，不用于提供定制模型服务。','Artifact 存放合规协议。']);
W(120,['Caches web content; does not route model requests.','Asynchronous; does not help live peaks.','Compliance reports.'],['缓存网页内容，不路由模型请求。','异步处理，无助于实时高峰。','合规报告。']);
/* 3.1 */
W(122,['Only changes answer length.','Allows the full long tail of unlikely tokens.','Stop sequences end generation; they do not filter words.'],['只改变回答长度。','会放开全部罕见 Token 的长尾。','停止序列只结束生成，不过滤词语。']);
W(123,['Adds randomness.','Limits candidate tokens; cannot stop at a string.','A capacity purchase.'],['增加随机性。','限制候选 Token，无法在指定字符串处停止。','购买容量。']);
W(124,['Archive storage; no vector search.','Key-value database; not a Knowledge Bases graph store.','Compliance reports.'],['归档存储，不支持向量搜索。','键值数据库，不是知识库的图存储。','合规报告。']);
W(125,['In-memory, which is costly for billions of rarely used vectors.','A model endpoint, not storage.','Content delivery network.'],['内存存储，对于数十亿很少使用的向量来说成本高。','是模型端点，不是存储。','内容分发网络。']);
W2(126,['Changing style is what fine-tuning does.','RAG needs documents to retrieve.','Retrieval adds a step, so it is not always faster.'],['改变风格是微调的作用。','RAG 需要可检索的文档。','检索多了一步，并不总是更快。']);
W(127,['Returns chunks only, no generated answer.','Applies guardrails to text.','Starts a fine-tuning job.'],['只返回块，不生成答案。','对文本应用护栏。','启动微调任务。']);
W(129,['One generation step; no tools needed.','One translation step.','One summarization step.'],['一步生成，不需要工具。','一步翻译。','一步摘要。']);
W(130,['Changes randomness; no approval step.','Asynchronous jobs; no approval step.','Holds more text; no approval step.'],['只改变随机性，没有确认环节。','异步任务，没有确认环节。','能容纳更多文本，没有确认环节。']);
W(131,['Requires a training job.','Requires a large training job.','The most expensive training of all.'],['需要训练任务。','需要大型训练任务。','成本最高的训练。']);
/* 3.2 */
W(132,['Says what to avoid.','Ends generation.','A vector, not prompt text.'],['说明要避免什么。','结束生成。','是向量，不是提示文字。']);
W(133,['Asks for step-by-step reasoning.','Provides examples.','A training technique.'],['要求逐步推理。','提供示例。','训练技术。']);
W(134,['Thousands of fine-tuned models is absurdly costly.','Makes descriptions less consistent.','Training does not create a reusable prompt.'],['数千个微调模型成本高得离谱。','会让描述更不一致。','训练不会产生可复用的提示。']);
W2(135,['Vague prompts give vague, inconsistent answers.','Secrets in prompts can leak.','Maximum randomness reduces consistency.'],['模糊的提示带来模糊、不一致的答案。','提示中的密钥可能泄露。','最大随机性会降低一致性。']);
W(136,['Poisoning corrupts data sources.','A training technique.','A document-splitting step.'],['投毒是污染数据源。','训练技术。','文档切分步骤。']);
W(137,['A model-fit problem.','Input distribution changing over time.','Varying outputs, not leaked secrets.'],['模型拟合问题。','输入分布随时间变化。','输出不稳定，不是泄密。']);
W(138,['Jailbreaking comes from the user\'s prompt, not the data.','The false policy came from bad data, not randomness.','A training-fit problem.'],['越狱来自用户的提示，而非数据。','错误政策来自坏数据，不是随机性。','训练拟合问题。']);
W(140,['Enormous cost for a formatting problem.','Adds randomness.','Buys capacity; does not fix format.'],['为格式问题付出巨大成本。','增加随机性。','购买容量，解决不了格式问题。']);
/* 3.3 */
W(141,['That is a system prompt at run time, not tuning.','That is part of RLHF.','That is distillation or quantization.'],['那是运行时的系统提示，不是微调。','那是 RLHF 的一部分。','那是蒸馏或量化。']);
W(142,['Training data is not uploaded through chat.','Bedrock reads training files from S3.','Embeddings are for RAG, not fine-tuning.'],['训练数据不是通过聊天上传的。','Bedrock 从 S3 读取训练文件。','嵌入用于 RAG，不用于微调。']);
W2(143,['Noise and harmful content lower quality.','PII should be removed or masked.','Inconsistent labels teach the model noise.'],['噪声和有害内容会降低质量。','PII 应删除或掩码。','不一致的标签会让模型学到噪声。']);
W(144,['There are labels, and the goal is classification.','No rewards are involved.','It starts from an existing model.'],['有标签，目标是分类。','不涉及奖励。','是基于现有模型开始的。']);
W(146,['Trains all weights from nothing.','Reuses prompt prefixes; no training.','Asynchronous inference; no training.'],['从零训练全部权重。','复用提示前缀，不涉及训练。','异步推理，不涉及训练。']);
W(147,['Finds PII.','A metadata catalog.','Scans vulnerabilities.'],['查找 PII。','元数据目录。','扫描漏洞。']);
/* 3.4 */
W(148,['Used for summarization.','A regression metric.','A classification metric.'],['用于摘要。','回归指标。','分类指标。']);
W(149,['Also n-gram based, with the same problem.','Length says nothing about quality.','Measures language-model fluency, not similarity.'],['同样基于 n-gram，有同样的问题。','长度说明不了质量。','衡量语言模型流畅度，不衡量相似度。']);
W(150,['Compares wording, not empathy.','A language-model metric.','Length is not tone.'],['只比较措辞，不衡量同理心。','语言模型指标。','长度不等于语气。']);
W(151,['Not fixed, so not comparable across models.','Documentation, not a test set.','API logs, not a test set.'],['不固定，无法跨模型比较。','是文档，不是测试集。','是 API 日志，不是测试集。']);
W2(152,['A translation metric.','A language-model metric.','Model size is not agent performance.'],['翻译指标。','语言模型指标。','模型大小不代表智能体表现。']);
W(154,['Length does not fix the wrong documents.','Randomness does not fix retrieval.','Measures wording, not retrieval.'],['长度解决不了文档取错的问题。','随机性解决不了检索问题。','衡量措辞，不衡量检索。']);
W(155,['Share of goals achieved, not cost.','How happy users are, not cost.','A summarization metric.'],['目标达成比例，不是成本。','用户满意度，不是成本。','摘要指标。']);
/* 4.1 */
W(156,['Checks answers against sources.','Checks logic against policy rules.','Detects PII.'],['对照来源检查答案。','依据政策规则检查逻辑。','检测 PII。']);
W(157,['Blocks listed words only.','Blocks subjects; does not verify logic.','Blocks violent content.'],['只屏蔽列出的词语。','拦截话题，不验证逻辑。','拦截暴力内容。']);
W(158,['ApplyGuardrail works with any model.','Guardrails are not part of model weights.','Compliance reports.'],['ApplyGuardrail 适用于任何模型。','护栏不属于模型权重。','合规报告。']);
W2(159,['A business goal, not a responsible-AI dimension.','Not a responsible-AI dimension.','A performance goal, not a responsible-AI dimension.'],['业务目标，不是负责任 AI 维度。','不是负责任 AI 维度。','性能目标，不是负责任 AI 维度。']);
W(160,['Splits documents.','Tunes training settings.','Trains a smaller model.'],['切分文档。','调整训练参数。','训练更小的模型。']);
W(161,['Irrelevant to labels.','Training longer on bad labels makes it worse.','An inference option.'],['与标签无关。','用坏标签训练更久只会更糟。','推理方式。']);
W(162,['No copyrighted work was reproduced.','About where data is stored.','A model-fit problem.'],['没有复制受版权保护的作品。','关于数据存放位置。','模型拟合问题。']);
W(163,['More epochs usually increase overfitting.','A more complex model overfits more.','The validation set is what detects overfitting.'],['更多轮数通常会加重过拟合。','更复杂的模型更容易过拟合。','验证集正是发现过拟合的工具。']);
W(164,['Temperature is a text-generation setting.','Unrelated to speech recognition accuracy.','How it is served does not affect accuracy.'],['温度是文本生成参数。','与语音识别准确率无关。','服务方式不影响准确率。']);
W(165,['Compliance reports.','Text to speech.','Content delivery network.'],['合规报告。','文字转语音。','内容分发网络。']);
/* 4.2 */
W(166,['For documenting your own models.','Compliance reports and agreements.','API logs.'],['用于记录你自己的模型。','合规报告和协议。','API 日志。']);
W(167,['An inference option.','Spending alerts.','Translation.'],['推理方式。','支出告警。','翻译。']);
W(168,['Publishing does not change accuracy.','Publishing prompts is not illegal.','Publishing does not affect token cost.'],['公开不会改变准确率。','公开提示并不违法。','公开不影响 Token 成本。']);
W(169,['Weights are hidden behind the API.','Irrelevant to inspecting a model.','A CDN hides nothing and reveals nothing.'],['权重隐藏在 API 后面。','与检查模型无关。','CDN 与模型检查无关。']);
W2(170,['Text to speech.','Spending alerts.','Translation.'],['文字转语音。','支出告警。','翻译。']);
W(171,['The officer still decides, so humans are not removed.','The AI is visible, not hidden.','Complexity is not a design principle.'],['信贷员仍在决策，并没有让人退出。','AI 是公开可见的，并未隐藏。','复杂度不是设计原则。']);
/* 5.1 */
W(172,['Compliance reports.','Scans vulnerabilities.','Content delivery network.'],['合规报告。','扫描漏洞。','内容分发网络。']);
W(173,['Secrets in prompts can leak through outputs.','Hard-coded secrets end up in repositories.','Anyone could read it.'],['提示中的密钥可能通过输出泄露。','硬编码的密钥会进入代码仓库。','任何人都能读取。']);
W(174,['Filters words in text, not API access.','Compliance reports.','Irrelevant to access control.'],['过滤文本中的词语，不控制 API 访问。','合规报告。','与访问控制无关。']);
W(175,['Prompts can be ignored or manipulated; not deterministic.','Does not stop tool calls.','Finds PII.'],['提示可能被忽略或操纵，不是确定性的。','无法阻止工具调用。','查找 PII。']);
W2(176,['Irrelevant to privacy.','Exposes all the data.','Weakens protection.'],['与隐私无关。','会暴露全部数据。','削弱保护。']);
W(177,['Irrelevant to storage.','Text to speech.','A sampling setting.'],['与存储无关。','文字转语音。','采样参数。']);
W(178,['Model output is untrusted input.','The model cannot reliably judge its own output.','Adds randomness.'],['模型输出是不可信输入。','模型无法可靠判断自己的输出。','增加随机性。']);
W(179,['Image analysis.','RAG; not access control on tables.','Content delivery network.'],['图像分析。','RAG，不是表级访问控制。','内容分发网络。']);
W(180,['Cost saving; no quality check.','Model compression.','Offline processing.'],['用于降本，不检查质量。','模型压缩。','离线处理。']);
/* 5.2 */
W(181,['Compliance reports.','Finds PII.','Translation.'],['合规报告。','查找 PII。','翻译。']);
W(182,['Building your own app on a model API.','Fine-tuning a model.','Training from scratch.'],['基于模型 API 自建应用。','微调模型。','从零训练。']);
W(183,['A free public app used as-is, not under an enterprise agreement.','Building your own app on a model API.','Training from scratch.'],['直接使用的免费公共应用，没有企业协议。','基于模型 API 自建应用。','从零训练。']);
W(185,['Residency is about location, and CloudFront is a CDN.','Lineage tracks origin; Macie finds PII.','Observability is monitoring; Polly is speech.'],['驻留关注位置，而 CloudFront 是 CDN。','血缘追踪来源；Macie 查找 PII。','可观测性是监控；Polly 是语音服务。']);
W(186,['An information-security standard, not AI-specific.','A payment-card security standard.','Splits security duties with AWS; not a framework with those functions.'],['信息安全标准，不针对 AI。','支付卡安全标准。','划分与 AWS 的安全职责，不是具有这些职能的框架。']);
W2(187,['Missing documentation breaks transparency and audits.','Policies must be consistent across the organization.','Audit logs are required for governance.'],['缺少文档会破坏透明度和审计。','政策必须在全组织保持一致。','治理需要审计日志。']);
W(188,['Compliance reports.','Finds PII.','Text to speech.'],['合规报告。','查找 PII。','文字转语音。']);
W(189,['Compliance reports.','Config evaluates configuration, not usage spikes.','Extracts text from documents.'],['合规报告。','Config 评估配置，不监控用量激增。','从文档中提取文字。']);
})();
