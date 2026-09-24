/* Fourth question set: fills gaps found by checking every example term in exam guide v1.1
   against the question bank. Append-only: add new questions at the end.
   Correct options are authored first (shuffled on screen); wrong-option notes follow in order. */
(function(){
function Q(k, t, a, en, zh, wEn, wZh){
  var q = {k: k, d: 'd' + k.charAt(0), t: t, a: a, en: {q: en[0], o: en[1], x: en[2]}, zh: {q: zh[0], o: zh[1], x: zh[2]}};
  if (wEn) { var pad = a.map(function(){ return ''; }); q.w = {en: pad.concat(wEn), zh: pad.concat(wZh)}; }
  AIF.qs.push(q);
}

/* ---------- 1.1 computer vision, NLP ---------- */
Q('1.1','single',[0],
['A factory uses cameras to spot scratches on products moving along a production line. Which field of AI is this?',
 ['Computer vision','Natural language processing (NLP)','Speech recognition','Time-series forecasting'],
 'Computer vision is AI that interprets images and video, such as finding defects in camera frames.'],
['一家工厂用摄像头检测生产线上产品的划痕。这属于哪个 AI 领域？',
 ['计算机视觉','自然语言处理（NLP）','语音识别','时间序列预测'],
 '计算机视觉是理解图像和视频的 AI，例如在摄像头画面中发现缺陷。'],
['NLP works with text and language, not images.','Speech recognition turns audio into text.','Forecasting predicts future values from past numbers.'],
['NLP 处理文本和语言，而不是图像。','语音识别把音频转成文字。','预测是根据历史数值推测未来。']);

Q('1.1','single',[0],
['Which task is an example of natural language processing (NLP)?',
 ['Deciding whether customer reviews are positive or negative','Detecting faces in security camera photos','Predicting next month\'s sales from past sales figures','Grouping customers by how much they spend'],
 'Sentiment analysis reads human language, which is exactly what NLP does.'],
['以下哪项属于自然语言处理（NLP）？',
 ['判断客户评论是正面还是负面','在监控照片中检测人脸','根据过去的销售额预测下个月的销售额','按消费金额对客户分组'],
 '情感分析是在理解人类语言，这正是 NLP 的工作。'],
['Faces in photos are a computer vision task.','That is forecasting on time-series numbers.','That is clustering on tabular data, not language.'],
['照片中的人脸属于计算机视觉任务。','这是基于时间序列数值的预测。','这是对表格数据聚类，与语言无关。']);

/* ---------- 1.3 cost per user ---------- */
Q('1.3','single',[0],
['A company runs an AI assistant for 20,000 employees. Finance wants to know whether it is cheaper to run than the tool it replaced. Which metric answers this most directly?',
 ['Cost per user: total monthly running cost divided by active users','F1 score of the model','Recall of the model','Training loss at the end of fine-tuning'],
 'Cost per user is a business metric that compares running costs fairly, whatever the number of users.'],
['一家公司为 2 万名员工提供 AI 助手。财务部想知道它的运行成本是否比替代的旧工具更低。哪个指标最直接回答这个问题？',
 ['人均成本：每月总运行成本除以活跃用户数','模型的 F1 分数','模型的召回率','微调结束时的训练损失'],
 '人均成本是一项业务指标，无论用户多少都能公平比较运行成本。'],
['F1 measures model quality, not cost.','Recall measures how many positives the model finds, not cost.','Training loss describes training progress, not running cost.'],
['F1 衡量模型质量，不是成本。','召回率衡量模型找到多少正例，不是成本。','训练损失描述训练过程，不是运行成本。']);

/* ---------- 2.1 code generation ---------- */
Q('2.1','single',[0],
['Developers want an assistant in their code editor that writes functions and unit tests from plain-English descriptions. Which generative AI use case is this?',
 ['Code generation','Image generation','Translation','Recommendation engine'],
 'Turning a natural-language request into working code is the code generation use case, as in Kiro or Amazon Q Developer.'],
['开发人员希望在代码编辑器中有一个助手，能根据简单的英文描述编写函数和单元测试。这属于哪种生成式 AI 用例？',
 ['代码生成','图像生成','翻译','推荐引擎'],
 '把自然语言需求变成可运行的代码就是代码生成用例，例如 Kiro 或 Amazon Q Developer。'],
['The output is code, not pictures.','Translation converts between human languages.','Recommendation engines suggest items to users.'],
['输出的是代码，不是图片。','翻译是在人类语言之间转换。','推荐引擎是向用户推荐商品或内容。']);

/* ---------- 2.2 capabilities and limitations ---------- */
Q('2.2','multi',[0,1],
['Which TWO are disadvantages of generative AI solutions? (Choose TWO.)',
 ['Hallucinations: confident answers that are wrong','Nondeterminism: the same prompt can give different answers','It cannot handle conversational input','It always needs labeled training data before it can be used','It can only produce text in English'],
 'Hallucinations and nondeterministic output are the classic limitations. Conversation, zero-setup use and many languages are strengths.'],
['以下哪两项是生成式 AI 解决方案的缺点？（选择两项）',
 ['幻觉：自信地给出错误答案','非确定性：同一个提示可能得到不同的回答','无法处理对话式输入','使用前总是需要带标签的训练数据','只能生成英文文本'],
 '幻觉和输出不确定是典型的局限；对话能力、开箱即用和多语言支持都是优势。'],
['Conversation is one of GenAI\'s strengths.','Foundation models work from prompts without new labeled data.','Many foundation models support dozens of languages.'],
['对话能力正是生成式 AI 的优势之一。','基础模型可以直接通过提示使用，无需新的标注数据。','许多基础模型支持数十种语言。']);

Q('2.2','single',[0],
['A tax firm needs answers that are exactly the same every time for the same input, and auditors must be able to trace how each answer was reached. What is the main concern with using a generative AI model here?',
 ['Its output can vary between runs and its reasoning is hard to interpret, so a rules-based system may fit better','It cannot read text documents','It is too cheap to be reliable','It cannot be called through an API'],
 'When a fixed, explainable outcome is required, GenAI\'s nondeterminism and limited interpretability are real drawbacks.'],
['一家税务公司要求相同输入每次都得到完全相同的答案，并且审计人员必须能追溯每个答案的得出过程。在这里使用生成式 AI 模型的主要顾虑是什么？',
 ['输出在不同运行之间可能变化，推理过程也难以解释，因此基于规则的系统可能更合适','它无法读取文本文件','它太便宜，因而不可靠','它无法通过 API 调用'],
 '当需要固定且可解释的结果时，生成式 AI 的不确定性和有限的可解释性是实际缺点。'],
['GenAI models handle text well.','Price is not the concern here.','Models on Amazon Bedrock are called through an API.'],
['生成式 AI 模型很擅长处理文本。','这里的顾虑与价格无关。','Amazon Bedrock 上的模型正是通过 API 调用的。']);

Q('2.2','single',[0],
['An online store adds AI-generated product descriptions. Which metric best shows whether this creates business value?',
 ['Conversion rate on pages with generated descriptions compared with pages without them','ROUGE score of the descriptions','Number of tokens generated per day','The temperature setting used'],
 'Business value shows up in business outcomes such as conversion rate, not in technical measures.'],
['一家网店加入了 AI 生成的商品描述。哪个指标最能说明这是否带来了业务价值？',
 ['比较有生成描述与没有生成描述的页面的转化率','描述的 ROUGE 分数','每天生成的 token 数量','所用的温度（temperature）设置'],
 '业务价值体现在转化率等业务结果上，而不是技术指标。'],
['ROUGE measures text overlap, not sales.','More tokens means more cost, not more value.','Temperature is a setting, not an outcome.'],
['ROUGE 衡量文本重合度，与销售无关。','更多 token 意味着更高成本，而非更多价值。','温度是一个参数设置，不是结果。']);

Q('2.2','single',[0],
['One foundation model summarizes emails, drafts replies and answers FAQs, with no separate training for each task. Which advantage of generative AI does this show?',
 ['Adaptability: one model handles many tasks through prompting','Determinism: it always gives the same answer','Guaranteed accuracy on every task','It costs nothing to run'],
 'Foundation models adapt to many tasks just by changing the prompt.'],
['一个基础模型可以总结邮件、起草回复和回答常见问题，而无需为每项任务单独训练。这体现了生成式 AI 的哪项优势？',
 ['适应性：一个模型通过提示就能完成多种任务','确定性：总是给出相同的答案','在每项任务上都保证准确','运行完全免费'],
 '只需改变提示，基础模型就能适应多种任务。'],
['GenAI output is nondeterministic.','No model guarantees accuracy; hallucinations happen.','Inference is billed, usually per token.'],
['生成式 AI 的输出是非确定性的。','没有模型能保证准确，幻觉时有发生。','推理是收费的，通常按 token 计费。']);

/* ---------- 2.3 speed to market, availability ---------- */
Q('2.3','single',[0],
['A startup wants to launch a generative AI chatbot within weeks, without hiring ML engineers or managing GPU servers. Which advantage of Amazon Bedrock matters most here?',
 ['Speed to market and a low barrier to entry: models are ready to use through an API with no infrastructure to manage','It guarantees the model never hallucinates','It requires training a custom model first, which improves accuracy','It is free for the first year'],
 'Managed, API-based access to foundation models removes infrastructure work, so teams ship faster.'],
['一家初创公司希望在几周内上线生成式 AI 聊天机器人，且不招聘机器学习工程师、不管理 GPU 服务器。Amazon Bedrock 的哪项优势在这里最重要？',
 ['上市速度快、门槛低：模型通过 API 即可使用，无需管理基础设施','保证模型永远不会产生幻觉','必须先训练自定义模型，从而提高准确率','第一年免费'],
 '以托管 API 方式使用基础模型省去了基础设施工作，团队可以更快上线。'],
['No service can guarantee zero hallucinations.','Bedrock models work out of the box; customization is optional.','Bedrock is pay-as-you-go, not free for a year.'],
['没有任何服务能保证零幻觉。','Bedrock 模型开箱即用，定制是可选的。','Bedrock 按用量付费，并非首年免费。']);

Q('2.3','single',[0],
['An app on Amazon Bedrock must keep serving users during traffic spikes that exceed one Region\'s capacity. The team is fine with requests being processed in another Region in the same geography. Which feature helps most?',
 ['Cross-Region inference, which routes requests across Regions for higher throughput and availability','Batch inference','Prompt caching','Model distillation'],
 'Cross-Region inference spreads on-demand traffic across Regions, adding redundancy and availability in exchange for a little control over where requests run.'],
['一个基于 Amazon Bedrock 的应用必须在流量高峰超出单个区域容量时继续服务用户。团队接受请求在同一地理范围内的其他区域处理。哪项功能最有帮助？',
 ['跨区域推理：在多个区域之间路由请求，提高吞吐量和可用性','批量推理','提示缓存','模型蒸馏'],
 '跨区域推理把按需流量分散到多个区域，以少量位置控制换取冗余和更高的可用性。'],
['Batch inference is asynchronous and suits offline jobs, not live users.','Prompt caching cuts cost and latency for repeated prompt prefixes; it does not add capacity.','Distillation makes a smaller model; it does not add Regions.'],
['批量推理是异步的，适合离线任务，不适合实时用户。','提示缓存降低重复提示前缀的成本和延迟，不会增加容量。','蒸馏产生更小的模型，不会增加区域。']);

/* ---------- 3.1 modality, multilingual ---------- */
Q('3.1','single',[0],
['An insurer needs a model that reads photos of damaged cars together with the adjuster\'s notes and writes a claim summary. Which model selection criterion matters most?',
 ['Modality: the model must accept both image and text input','Only the maximum output length','The lowest price per token, whatever inputs it accepts','Support for exactly one language'],
 'If the model cannot take images as input, nothing else matters. Check modality first.'],
['一家保险公司需要一个模型，同时读取受损车辆的照片和理赔员的文字记录，并写出理赔摘要。哪项模型选择标准最重要？',
 ['模态：模型必须能同时接收图像和文本输入','只看最大输出长度','只看每个 token 的最低价格，不管它接受什么输入','只支持一种语言'],
 '如果模型不能接收图像输入，其他条件都无关紧要，所以首先要看模态。'],
['Output length matters less than whether it can read images at all.','A cheap text-only model cannot do the job.','Language support is not the deciding factor here.'],
['输出长度远不如能否读取图像重要。','便宜的纯文本模型无法完成这项工作。','语言支持在这里不是决定因素。']);

Q('3.1','single',[0],
['A support assistant must answer customers in English, Japanese and Spanish using one model. What should the team check first when choosing a foundation model?',
 ['Which languages the model handles well, tested on their own example questions','Only the size of the context window','Whether the model is open source','Whether temperature can be set to 0'],
 'Multilingual quality varies a lot between models, so test each target language before choosing.'],
['一个客服助手必须用同一个模型以英语、日语和西班牙语回答客户。选择基础模型时，团队首先应检查什么？',
 ['模型对哪些语言处理得好，并用自己的示例问题测试','只看上下文窗口的大小','模型是否开源','温度能否设为 0'],
 '不同模型的多语言能力差异很大，因此选择前要逐一测试目标语言。'],
['A big context window does not mean good Japanese or Spanish.','Licensing does not tell you about language quality.','Temperature controls randomness, not language support.'],
['上下文窗口大并不代表日语或西班牙语好。','许可证类型无法说明语言质量。','温度控制随机性，与语言支持无关。']);

/* ---------- 3.2 one-shot prompting ---------- */
Q('3.2','single',[0],
['A prompt gives exactly one worked example of the desired answer format, then the new input. Which prompt engineering technique is this?',
 ['One-shot (single-shot) prompting','Zero-shot prompting','Few-shot prompting','Chain-of-thought prompting'],
 'One example is one-shot; none is zero-shot; several is few-shot.'],
['一个提示先给出恰好一个期望答案格式的示例，再给出新的输入。这是哪种提示工程技术？',
 ['单样本（one-shot）提示','零样本提示','少样本提示','思维链提示'],
 '一个示例是单样本；没有示例是零样本；多个示例是少样本。'],
['Zero-shot gives no examples at all.','Few-shot gives several examples, not one.','Chain-of-thought asks the model to reason step by step.'],
['零样本完全不提供示例。','少样本提供多个示例，而不是一个。','思维链是让模型逐步推理。']);

Q('3.2','match',[],
['Match each prompt to the technique it uses.',
 [['Only the instruction, with no examples','Zero-shot'],['One example, then the new input','One-shot'],['Several examples, then the new input','Few-shot'],['"Think through this step by step before answering"','Chain-of-thought'],['A saved prompt with placeholders filled in at run time','Prompt template']],
 'The number of examples separates zero-, one- and few-shot; chain-of-thought asks for reasoning; templates make prompts reusable.'],
['将每个提示与其使用的技术配对。',
 [['只有指令，没有示例','零样本'],['一个示例，然后是新输入','单样本'],['多个示例，然后是新输入','少样本'],['“回答前请一步一步思考”','思维链'],['保存好的提示，运行时填入占位符','提示模板']],
 '示例数量区分零样本、单样本和少样本；思维链要求推理过程；模板让提示可以复用。']);

/* ---------- 3.3 training and fine-tuning ---------- */
Q('3.3','order',[],
['Put the steps to customize a model in Amazon Bedrock in order.',
 ['Curate labeled prompt and response examples','Upload the training data to Amazon S3','Create a fine-tuning job in Amazon Bedrock','Set up inference for the custom model (for example, Provisioned Throughput)','Evaluate the custom model against the base model before rolling it out'],
 'Data first, then the training job. A custom model can only be called once inference is set up, so provision it, then evaluate it before real users see it.'],
['按顺序排列在 Amazon Bedrock 中定制模型的步骤。',
 ['整理带标签的提示与回答示例','把训练数据上传到 Amazon S3','在 Amazon Bedrock 中创建微调任务','为定制模型配置推理（例如预置吞吐量）','上线前将定制模型与基础模型进行对比评估'],
 '先准备数据，再运行训练任务。定制模型只有配置好推理后才能调用，因此要先配置，再在真实用户使用前进行评估。']);

Q('3.3','single',[0],
['A research company has millions of unlabeled internal papers and wants a model to learn its specialist vocabulary. Which method fits?',
 ['Continued pre-training on the unlabeled domain text','Instruction fine-tuning','Reinforcement learning from human feedback (RLHF)','Zero-shot prompting only'],
 'Continued pre-training learns from large amounts of unlabeled domain text; fine-tuning needs labeled examples.'],
['一家研究公司有数百万篇未标注的内部论文，希望模型学会其专业词汇。哪种方法合适？',
 ['在未标注的领域文本上进行继续预训练','指令微调','基于人类反馈的强化学习（RLHF）','只使用零样本提示'],
 '继续预训练从大量未标注的领域文本中学习；微调则需要带标签的示例。'],
['Instruction fine-tuning needs labeled prompt and response pairs.','RLHF needs people to rank model answers.','Prompting alone does not teach the model new vocabulary.'],
['指令微调需要带标签的提示与回答对。','RLHF 需要人工对模型回答进行排序。','仅靠提示无法让模型学会新词汇。']);

Q('3.3','single',[0],
['Human reviewers rank several model answers to the same prompt so the model learns which kinds of response people prefer. What is this technique called?',
 ['Reinforcement learning from human feedback (RLHF)','Data augmentation','Unsupervised clustering','Model distillation'],
 'RLHF uses human preference rankings to steer a model toward better answers.'],
['人工评审对同一提示的多个模型回答进行排序，让模型学习人们更喜欢哪种回答。这种技术叫什么？',
 ['基于人类反馈的强化学习（RLHF）','数据增强','无监督聚类','模型蒸馏'],
 'RLHF 利用人类偏好排序，引导模型给出更好的回答。'],
['Data augmentation creates extra training examples by varying existing ones.','Clustering groups unlabeled data; no people rank anything.','Distillation trains a small model to copy a large one.'],
['数据增强通过变换已有样本来生成更多训练样本。','聚类是对无标签数据分组，没有人工排序。','蒸馏是训练小模型去模仿大模型。']);

Q('3.3','single',[0],
['A fine-tuning dataset for a support bot contains only billing questions, but customers also ask about shipping and returns. What is the main problem with this data?',
 ['It is not representative of real use, so the model may do poorly on shipping and returns','The dataset is too large','The data is encrypted','The labels are too consistent'],
 'Training data should look like the questions the model will really get.'],
['一个客服机器人的微调数据只包含账单问题，但客户还会问配送和退货。这些数据的主要问题是什么？',
 ['数据不能代表真实使用情况，因此模型在配送和退货问题上可能表现不佳','数据集太大','数据经过了加密','标签过于一致'],
 '训练数据应与模型实际会遇到的问题相似。'],
['Size is not the issue; coverage is.','Encryption protects data and does not affect what the model learns.','Consistent labels are good.'],
['问题不在数量，而在覆盖面。','加密是保护数据，不影响模型学到什么。','标签一致是好事。']);

/* ---------- 3.4 user engagement ---------- */
Q('3.4','single',[0],
['After adding a generative AI writing assistant to a note-taking app, the product team wants to know whether people find it useful day to day. Which business metric fits best?',
 ['User engagement, such as the share of weekly active users who use the assistant and how often they come back','BLEU score','Number of GPUs used','Number of model parameters'],
 'Engagement shows whether real users keep choosing the feature.'],
['在笔记应用中加入生成式 AI 写作助手后，产品团队想知道用户在日常中是否觉得它有用。哪个业务指标最合适？',
 ['用户参与度，例如每周活跃用户中使用助手的比例以及回访频率','BLEU 分数','使用的 GPU 数量','模型参数数量'],
 '参与度能说明真实用户是否持续选择使用该功能。'],
['BLEU compares text with reference translations.','GPU count is an infrastructure figure.','Model size says nothing about usefulness to users.'],
['BLEU 是把文本与参考译文进行比较。','GPU 数量是基础设施数据。','模型大小并不能说明对用户是否有用。']);

/* ---------- 4.2 transparent and explainable models ---------- */
Q('4.2','single',[0],
['A lender must tell each applicant the main reasons a loan was declined. Which approach best supports this?',
 ['Use an interpretable model, or add explanations such as feature importance (for example, with Amazon SageMaker Clarify)','Use the largest deep learning model available','Keep the model details secret for security','Share only the model\'s overall accuracy'],
 'Per-decision explanations need an interpretable model or an explainability method.'],
['一家贷款机构必须告诉每位申请人贷款被拒的主要原因。哪种做法最能支持这一点？',
 ['使用可解释的模型，或加入特征重要性等解释（例如使用 Amazon SageMaker Clarify）','使用现有最大的深度学习模型','出于安全考虑对模型细节保密','只公布模型的整体准确率'],
 '要解释每一个决定，需要可解释的模型或可解释性方法。'],
['Bigger models are usually harder to explain.','Secrecy makes explaining decisions impossible.','Overall accuracy does not explain an individual decision.'],
['模型越大通常越难解释。','保密会让解释决定变得不可能。','整体准确率无法解释单个决定。']);

Q('4.2','single',[0],
['Where can a team record a model\'s intended use, training data, evaluation results and known limitations so reviewers can find them in one place?',
 ['Amazon SageMaker Model Cards','Amazon CloudWatch dashboards','AWS Cost Explorer','Amazon S3 Lifecycle rules'],
 'Model Cards document a model for transparency and governance.'],
['团队可以在哪里记录模型的预期用途、训练数据、评估结果和已知局限，方便审阅者集中查看？',
 ['Amazon SageMaker Model Cards（模型卡）','Amazon CloudWatch 仪表板','AWS Cost Explorer','Amazon S3 生命周期规则'],
 '模型卡用于记录模型信息，支持透明度和治理。'],
['CloudWatch shows metrics and logs, not model documentation.','Cost Explorer shows spending.','Lifecycle rules move or delete stored objects.'],
['CloudWatch 显示指标和日志，而不是模型文档。','Cost Explorer 显示支出情况。','生命周期规则用于转移或删除存储的对象。']);

Q('4.2','single',[0],
['Why might a company choose not to publish every detail of its content-safety filters, even though transparency is a goal?',
 ['Revealing the exact rules can help attackers get around them, so safety and transparency must be balanced','Publishing them would lower the model\'s accuracy','Transparency about AI is not allowed by law','The filters do not affect the output'],
 'This is the safety versus transparency trade-off named in the exam guide.'],
['尽管透明是目标，为什么公司可能选择不公开其内容安全过滤器的全部细节？',
 ['公开具体规则可能帮助攻击者绕过它们，因此需要在安全与透明之间取得平衡','公开会降低模型的准确率','法律不允许对 AI 保持透明','过滤器不会影响输出'],
 '这正是考试指南中提到的安全与透明之间的权衡。'],
['Publishing rules does not change accuracy.','Many rules encourage AI transparency.','Filters exist precisely to change what users see.'],
['公开规则不会改变准确率。','许多法规鼓励 AI 透明。','过滤器的作用正是改变用户看到的内容。']);

/* ---------- 5.1 vulnerability management, data leakage ---------- */
Q('5.1','single',[0],
['Which AWS service automatically scans the Amazon EC2 instances, container images and AWS Lambda functions behind an AI application for software vulnerabilities?',
 ['Amazon Inspector','Amazon Macie','AWS Artifact','Amazon Bedrock Guardrails'],
 'Amazon Inspector does continuous vulnerability management for workloads.'],
['哪项 AWS 服务会自动扫描 AI 应用背后的 Amazon EC2 实例、容器镜像和 AWS Lambda 函数中的软件漏洞？',
 ['Amazon Inspector','Amazon Macie','AWS Artifact','Amazon Bedrock Guardrails'],
 'Amazon Inspector 为工作负载提供持续的漏洞管理。'],
['Macie finds sensitive data such as PII in Amazon S3.','Artifact provides AWS compliance reports.','Guardrails filter prompts and responses, not software.'],
['Macie 在 Amazon S3 中查找 PII 等敏感数据。','Artifact 提供 AWS 的合规报告。','Guardrails 过滤提示和回答，而不是扫描软件。']);

Q('5.1','single',[0],
['A banking chatbot must never show account numbers or other personal data in its answers, even if the model retrieves them. What is the most direct control?',
 ['Amazon Bedrock Guardrails sensitive information filters that block or mask PII in responses','Raising the temperature','AWS CloudTrail logging','A larger context window'],
 'Output filtering catches data leakage before the answer reaches the user.'],
['一个银行聊天机器人即使检索到了账号等个人数据，也绝不能在回答中显示。最直接的控制措施是什么？',
 ['使用 Amazon Bedrock Guardrails 的敏感信息过滤器，在回答中拦截或遮盖 PII','调高温度','启用 AWS CloudTrail 日志','使用更大的上下文窗口'],
 '输出过滤能在回答到达用户之前拦截数据泄露。'],
['Temperature changes randomness; it does not hide data.','CloudTrail records API calls; it does not filter answers.','More context can mean more data, not less.'],
['温度只改变随机性，不会隐藏数据。','CloudTrail 记录 API 调用，不会过滤回答。','更多上下文可能意味着更多数据，而不是更少。']);

Q('5.1','multi',[0,1],
['Which TWO steps reduce the risk of data leakage in a retrieval augmented generation (RAG) application? (Choose TWO.)',
 ['Apply least-privilege access so retrieval returns only documents the user is allowed to see','Filter and validate model outputs, for example by masking PII, before showing them','Put every company document into the system prompt','Turn off encryption to speed up retrieval','Share one administrator IAM role across all applications'],
 'Limit what can be retrieved, then check what goes out.'],
['以下哪两项措施能降低检索增强生成（RAG）应用中的数据泄露风险？（选择两项）',
 ['采用最小权限访问，让检索只返回用户有权查看的文档','在展示前过滤并校验模型输出，例如遮盖 PII','把公司所有文档都放进系统提示','关闭加密以加快检索','所有应用共用一个管理员 IAM 角色'],
 '先限制能检索到什么，再检查输出了什么。'],
['That exposes everything to every user.','Encryption protects data at rest and in transit.','Shared admin roles break least privilege.'],
['这会把所有内容暴露给每个用户。','加密保护静态和传输中的数据。','共用管理员角色违背了最小权限原则。']);
})();
