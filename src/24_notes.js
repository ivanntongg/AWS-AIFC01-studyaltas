/* Why each wrong option is wrong. W(questionIndex, en[], zh[]): one entry per option in authored order,
   '' for correct options. Only single- and multiple-response questions have notes. */
(function(){
function W(i, en, zh){ if (AIF.qs[i]) AIF.qs[i].w = {en: en, zh: zh}; }

/* ---------- original set: Domain 1 ---------- */
W(0,['Needs labels; the retailer has none.','Predicts a number, not groups.','','Learns from rewards, not from finding groups in data.'],
    ['需要标签，而这家零售商没有标签。','预测的是数值，不是分组。','','是从奖励中学习，不是在数据中找分组。']);
W(1,['Underfitting means poor scores on BOTH sets; here training is excellent.','','Drift is a change over time in production, not a train/test gap.','Test set size does not cause a 37-point gap.'],
    ['欠拟合是两个数据集都差；这里训练集表现极好。','','漂移是生产中随时间发生的变化，不是训练/测试差距。','测试集大小不会造成 37 个百分点的差距。']);
W(2,['Precision guards against false alarms; here missed cases are the bigger danger.','','Misleading for rare diseases: predicting "healthy" for everyone scores high.','A regression metric; this is a classification problem.'],
    ['精确率防的是误报；这里漏报才是更大的危险。','','对罕见病有误导性：全部预测“健康”也能得高分。','这是回归指标，而这是分类问题。']);
W(3,['Payload and time limits are far too small (about 6 MB, 60 seconds).','Also limited to small payloads and short processing.','','For scoring whole datasets offline, not per-request notifications.'],
    ['负载和时长上限太小（约 6 MB、60 秒）。','同样只支持小负载、短处理时间。','','用于离线对整个数据集打分，而不是按请求通知。']);
W(4,['Would learn approximate patterns and could produce wrong pay.','Adds cost and nondeterminism to a fixed calculation.','','Trial-and-error learning is irrelevant to a known formula.'],
    ['只会学到近似规律，可能算错工资。','给固定计算增加成本和不确定性。','','已知公式根本不需要试错学习。']);
W(5,['','Weights are learned during training, so they are parameters.','','Bias terms are learned, so they are parameters too.','Predictions are outputs, not settings.'],
    ['','权重在训练中学习得到，属于参数。','','偏置项也是学习得到的，同样属于参数。','预测结果是输出，不是设置。']);
W(6,['Polly turns text INTO speech; the need is speech to text.','','Translate changes language; it does not measure sentiment.','Lex builds chatbots and Rekognition analyzes images.'],
    ['Polly 是把文字转成语音；这里需要语音转文字。','','Translate 只做翻译，不分析情感。','Lex 用于构建聊天机器人，Rekognition 分析图像。']);
W(7,['LLM decisions are hard to explain to regulators.','','Diffusion models generate images; irrelevant here.','Prompting an FM does not give traceable, auditable reasons.'],
    ['LLM 的决策难以向监管机构解释。','','扩散模型用于生成图像，与此无关。','对 FM 做提示工程无法给出可追溯、可审计的理由。']);
W(9,['Inputs have not changed, so it is not data drift; Clarify is for bias.','','The model worked before, so it was not too simple; Ground Truth is labeling.','Overfitting is a training issue; Feature Store stores features.'],
    ['输入没有变化，所以不是数据漂移；Clarify 用于偏差分析。','','模型之前表现正常，不是太简单；Ground Truth 用于标注。','过拟合是训练问题；Feature Store 用于存储特征。']);
W(11,['There are no labeled right answers, only rewards.','It is not finding structure in unlabeled data.','','Self-supervised learning creates labels from the data itself, not from rewards.'],
    ['没有标注好的正确答案，只有奖励。','并不是在无标签数据中找结构。','','自监督学习的标签来自数据本身，而非奖励。']);
W(12,['That is recall: 90 / (90 + 30).','','That is accuracy: (90 + 870) / 1000.','TP ÷ (TP + FP + FN); that is not precision.'],
    ['这是召回率：90 / (90 + 30)。','','这是准确率：(90 + 870) / 1000。','TP ÷ (TP + FP + FN)，不是精确率。']);
W(13,['','Ground Truth labels data; it does not build models.','Macie finds sensitive data in S3.','The Glue Data Catalog stores metadata about datasets.'],
    ['','Ground Truth 用于标注数据，不用于建模。','Macie 用于在 S3 中查找敏感数据。','Glue Data Catalog 存储数据集的元数据。']);

/* ---------- original set: Domain 2 ---------- */
W(14,['That would be 0.75 tokens per word; it is the other way round.','Tokens and words are not one-to-one.','','Far too many; that would be 4 tokens per word.'],
     ['这相当于每个词 0.75 个 Token，方向反了。','Token 和单词并非一一对应。','','太多了，相当于每个词 4 个 Token。']);
W(15,['LLMs generate text token by token, not by denoising.','','A simple statistical model; it generates nothing.','Embedding models produce vectors, not images.'],
     ['LLM 逐个 Token 生成文本，不是去噪。','','简单的统计模型，不会生成内容。','嵌入模型产生向量，不生成图像。']);
W(16,['Keywords only match the same words; these texts share none.','','A sampling setting for text generation, not search.','Stop sequences end generation; unrelated to search.'],
     ['关键词只能匹配相同的词，而这两段文字没有相同的词。','','是文本生成的采样参数，不是搜索。','停止序列用于结束生成，与搜索无关。']);
W(17,['','','This is a strength: adaptability.','This is a strength: conversational interface.','This is a strength: low barrier to entry.'],
     ['','','这是优势：适应性。','这是优势：对话式交互。','这是优势：上手门槛低。']);
W(18,['Changes randomness, not the number of tokens billed.','','A different billing model; it does not shrink the prompts.','Allows longer answers, which costs more.'],
     ['只改变随机性，不减少计费 Token 数。','','是另一种计费方式，并不会缩短提示。','允许更长的回答，反而更贵。']);
W(19,['That describes parameter-efficient fine-tuning, not MCP.','','MCP is a connection protocol, not encryption.','Summaries are measured with ROUGE, not MCP.'],
     ['这描述的是参数高效微调，不是 MCP。','','MCP 是连接协议，不是加密。','摘要用 ROUGE 衡量，与 MCP 无关。']);
W(20,['A swarm has no central lead agent.','','There are several agents, not one.','A pipeline passes work along in a fixed order; nobody combines results.'],
     ['蜂群没有中央主智能体。','','这里有多个智能体，不是一个。','流水线按固定顺序传递工作，没有汇总环节。']);
W(21,['A full ML platform where you manage models and instances.','','Virtual servers; you would host models yourself.','An image and video analysis service, not an FM platform.'],
     ['完整的 ML 平台，需要自己管理模型和实例。','','虚拟服务器，需要自己托管模型。','图像和视频分析服务，不是 FM 平台。']);
W(22,['Full price per token for a job that does not need real-time answers.','','Paying for reserved capacity around the clock is wasteful for a monthly job.','Always-on endpoint for an occasional offline job.'],
     ['对不需要实时结果的任务按全价计费。','','为每月一次的任务全天预留容量是浪费。','为偶尔的离线任务维持常驻端点。']);
W(23,['No throughput guarantee; subject to account quotas.','Asynchronous; not for live production traffic.','','Cuts cost for repeated prompts but guarantees no throughput.'],
     ['没有吞吐保障，受账户配额限制。','异步处理，不适合实时生产流量。','','能为重复提示降本，但不保证吞吐量。']);
W(24,['There is no opt-out because Bedrock never trains on your data.','','No model on Bedrock trains on your prompts, Amazon Nova included.','Providers have no access to your prompts.'],
     ['不存在“选择退出”，因为 Bedrock 从不用你的数据训练。','','Bedrock 上任何模型都不会用你的提示训练，包括 Amazon Nova。','模型提供商无法访问你的提示。']);
W(25,['That is long-term memory across sessions.','','Weights hold learned knowledge, not the conversation.','An archive, not memory an agent reads during a chat.'],
     ['这是跨会话的长期记忆。','','权重保存的是学到的知识，不是对话。','这是归档存储，不是对话中读取的记忆。']);
W(27,['','Irrelevant to response speed.','Benchmarks do not show speed.','Licensing does not make answers faster.'],
     ['','与响应速度无关。','基准测试反映不了速度。','许可方式不会让回答更快。']);
W(28,['That is infrastructure planning.','','Training changes weights; context engineering works at inference time.','Encryption is security, not context.'],
     ['这是基础设施规划。','','训练会改变权重；上下文工程发生在推理时。','加密属于安全，不是上下文。']);
W(29,['A translation-quality metric, not a business outcome.','','Measures language-model quality, not sales.','A training setting, not a business metric.'],
     ['翻译质量指标，不是业务结果。','','衡量语言模型质量，与销售无关。','训练设置，不是业务指标。']);

/* ---------- original set: Domain 3 ---------- */
W(30,['Retraining every week is slow and costly, and gives no citations.','','Expensive, changes weights, and still goes stale.','Blows the context window and token budget on every request.'],
     ['每周重新训练又慢又贵，也不提供引用。','','成本高、改变权重，而且知识仍会过时。','每次请求都会撑爆上下文窗口和 Token 预算。']);
W(31,['Controls randomness, not length.','Controls which tokens are considered, not length.','','Controls how many candidate tokens are considered, not length.'],
     ['控制随机性，不控制长度。','控制可选 Token 范围，不控制长度。','','控制候选 Token 数量，不控制长度。']);
W(32,['','Makes output even more repetitive.','Only shortens the slogans.','Only controls where generation stops.'],
     ['','会让输出更加重复。','只会让口号变短。','只控制在哪里停止生成。']);
W(33,['','','Text-to-speech; stores no vectors.','Compliance report portal; not a database.','Translation service; not a database.'],
     ['','','文字转语音，不存储向量。','合规报告门户，不是数据库。','翻译服务，不是数据库。']);
W(35,['Needs labeled prompt-response pairs, which the firm lacks.','','Examples in a prompt cannot teach broad domain vocabulary.','Shrinks a model; does not add legal knowledge.'],
     ['需要有标签的提示-回答对，而律所没有。','','提示中的几个示例无法教会大量领域词汇。','用于缩小模型，不能增加法律知识。']);
W(36,['','Enormously expensive and unnecessary.','Changes randomness; does not reduce cost.','Makes cost and latency worse.'],
     ['','成本极高且没有必要。','只改变随机性，不降低成本。','会让成本和延迟更糟。']);
W(37,['Gives no examples and asks for no reasoning steps.','','Says what to avoid; does not ask for reasoning.','A reusable prompt structure, not a reasoning technique.'],
     ['不给示例，也不要求推理步骤。','','说明要避免什么，不要求推理。','可复用的提示结构，不是推理技术。']);
W(38,['Poisoning corrupts training or knowledge data; this is an instruction in the input.','','Nothing here overloads the service.','Distillation is a training technique, not an attack.'],
     ['投毒是污染训练或知识数据；这里是输入中的指令。','','这里没有让服务过载。','蒸馏是训练技术，不是攻击。']);
W(39,['','Stores ML features, not prompts.','Tracks resource configuration.','Documents models, not prompts.'],
     ['','存储 ML 特征，不存储提示。','跟踪资源配置。','记录模型信息，不管理提示。']);
W(40,['Mainly used for machine translation.','','A regression error metric.','Measures classifier separation.'],
     ['主要用于机器翻译。','','回归误差指标。','衡量分类器的区分能力。']);
W(41,['','Measures word overlap, not whether the answer is supported.','Measures language-model fluency.','Speed, not correctness.'],
     ['','衡量词语重合度，而非答案是否有依据。','衡量语言模型的流畅度。','这是速度，不是正确性。']);
W(42,['','Needs reference answers and only compares wording.','Works only for fixed classification labels.','Tunes training settings; does not judge answers.'],
     ['','需要参考答案，而且只比较措辞。','只适用于固定的分类标签。','用于调训练参数，不评判回答。']);
W(43,['','Uses unlabeled domain text.','','Uses unlabeled text; the data provides its own targets.','Unsupervised; uses no labels.'],
     ['','使用无标签领域文本。','','使用无标签文本，目标来自数据本身。','无监督，不使用标签。']);
W(44,['That is distillation or quantization.','','RLHF has nothing to do with encryption.','That is a RAG preprocessing step.'],
     ['那是蒸馏或量化。','','RLHF 与加密无关。','那是 RAG 的预处理步骤。']);
W(46,['Violates least privilege; one bad decision could do huge damage.','','Secrets in prompts can leak.','Logging is required for audits and investigations.'],
     ['违反最小权限原则，一次错误决策就可能造成巨大损失。','','放在提示中的密钥可能泄露。','审计和调查需要日志。']);
W(47,['Text-overlap metrics, not business value.','','Measures language modeling, not value.','Model size says nothing about value.'],
     ['文本重合度指标，不代表业务价值。','','衡量语言建模能力，不代表价值。','模型大小说明不了价值。']);
W(48,['','Filters content; does not compare models.','A capacity purchase, not an evaluation tool.','Cuts cost; does not evaluate quality.'],
     ['','过滤内容，不比较模型。','是购买容量，不是评估工具。','用于降本，不评估质量。']);

/* ---------- original set: Domain 4 ---------- */
W(49,['','Matches exact words only; rephrased questions slip through.','Checks answers against sources; does not block topics.','Detects PII, not topics.'],
     ['','只匹配确切词语，换种问法就能绕过。','对照来源检查答案，不拦截话题。','检测 PII，不检测话题。']);
W(50,['Blocks harmful categories such as hate or violence, not PII.','','Blocks whole subjects, not specific data values.','Checks logic against policy rules, not PII.'],
     ['拦截仇恨、暴力等有害类别，不处理 PII。','','拦截整个话题，而非具体数据值。','依据政策规则检查逻辑，不处理 PII。']);
W(51,['','Text-to-speech.','Compliance reports.','Chatbots.'],
     ['','文字转语音。','合规报告。','聊天机器人。']);
W(52,['','','Bigger models use more energy per request.','Idle endpoints waste energy and money.','Unnecessary training wastes compute.'],
     ['','','模型越大，每次请求耗能越多。','闲置端点浪费能源和费用。','不必要的训练浪费算力。']);
W(53,['Temperature affects text generation, not face matching.','','Does not fix missing data for other groups.','A translation metric; irrelevant.'],
     ['温度影响文本生成，与人脸匹配无关。','','解决不了其他群体数据缺失的问题。','翻译指标，与此无关。']);
W(54,['Overfitting scores well on training data.','','Drift happens after deployment over time.','More data generally helps.'],
     ['过拟合在训练集上表现好。','','漂移发生在部署后，随时间出现。','更多数据通常有帮助。']);
W(55,['','Logs API calls.','Finds PII in S3.','Scans for vulnerabilities.'],
     ['','记录 API 调用。','在 S3 中查找 PII。','扫描漏洞。']);
W(56,['','About where data is stored.','A model-performance issue.','A model-performance issue.'],
     ['','关于数据存放位置。','模型性能问题。','模型性能问题。']);
W(57,['','','Hiding AI involvement breaks transparency.','People must be able to override high-stakes decisions.','Hiding sources removes the explanation.'],
     ['','','隐藏 AI 参与违背透明原则。','高风险决策必须允许人工覆盖。','隐藏来源就没有解释了。']);
W(58,['Deep neural networks, not logistic regression, are usually more accurate on images.','','Both need training data.','Logistic regression does not generate text.'],
     ['在图像上通常是深度神经网络更准，而不是逻辑回归。','','两者都需要训练数据。','逻辑回归不会生成文字。']);
W(59,['','Blocks listed words only.','Blocks subjects, not unsupported claims.','Stops jailbreaks and injection, not hallucinations.'],
     ['','只屏蔽列出的词语。','拦截话题，不拦截无依据的说法。','阻止越狱和注入，不处理幻觉。']);
W(60,['','Text-to-speech.','Configuration compliance.','An IDE for developers.'],
     ['','文字转语音。','配置合规。','开发者 IDE。']);

/* ---------- original set: Domain 5 ---------- */
W(61,['','Connects a VPC to the public internet, the opposite of what is needed.','A CDN for public content.','Sends traffic out to the internet.'],
     ['','把 VPC 连到公网，正好相反。','用于公开内容的 CDN。','把流量发往互联网。']);
W(62,['','Scans software vulnerabilities, not data.','Gives best-practice checks.','Provides AWS compliance reports.'],
     ['','扫描软件漏洞，不扫描数据。','提供最佳实践检查。','提供 AWS 合规报告。']);
W(63,['','Scans vulnerabilities.','Provides AWS compliance reports.','Finds PII in S3.'],
     ['','扫描漏洞。','提供 AWS 合规报告。','在 S3 中查找 PII。']);
W(64,['','Records actions, but does not evaluate whether configuration is compliant.','Provides AWS\'s own reports.','Text-to-speech.'],
     ['','记录操作，但不评估配置是否合规。','提供 AWS 自己的报告。','文字转语音。']);
W(65,['','Gives best-practice recommendations, not reports.','Scans vulnerabilities.','Tracks your resource configurations.'],
     ['','提供最佳实践建议，不提供报告。','扫描漏洞。','跟踪你的资源配置。']);
W(66,['A public app used as-is; the company built its own app here.','Buying a SaaS product; the company built its own app here.','','RAG does not change model weights, so it is not fine-tuning.'],
     ['直接使用公共应用；这里公司自己构建了应用。','采购 SaaS 产品；这里公司自己构建了应用。','','RAG 不改变模型权重，不算微调。']);
W(67,['A SaaS product, not your own model.','Using a model without changing its weights.','','Training from scratch; this started from an existing FM.'],
     ['SaaS 产品，不是自己的模型。','使用模型但不改变权重。','','从零训练；这里是基于现有 FM。']);
W(68,['AWS\'s responsibility.','AWS\'s responsibility for a managed service.','','AWS\'s responsibility.'],
     ['AWS 的责任。','托管服务下由 AWS 负责。','','AWS 的责任。']);
W(69,['','Records the API call but not the prompt text.','Best-practice checks.','Spending alerts.'],
     ['','记录 API 调用，但不记录提示文本。','最佳实践检查。','支出告警。']);
W(70,['','','Makes output more random, not more factual.','Removes the user\'s way to verify.','Longer answers are not more accurate.'],
     ['','','让输出更随机，而不是更真实。','让用户失去核实手段。','回答更长不等于更准确。']);
W(71,['','Finds PII in S3.','Compliance reports.','Archive storage.'],
     ['','在 S3 中查找 PII。','合规报告。','归档存储。']);
W(72,['','Scans data for PII, not software for CVEs.','Logs API calls.','Compliance reports.'],
     ['','扫描数据中的 PII，不扫描软件 CVE。','记录 API 调用。','合规报告。']);
W(74,['','How long data is kept.','Where data came from.','Seeing how a system behaves.'],
     ['','数据保存多久。','数据从哪里来。','观察系统如何运行。']);
W(75,['','Creating extra training examples.','Training a smaller model.','Splitting text into tokens.'],
     ['','生成额外的训练样本。','训练更小的模型。','把文本切分成 Token。']);
})();
