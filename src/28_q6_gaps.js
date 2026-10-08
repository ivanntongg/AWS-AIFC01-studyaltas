/* Sixth question set (v2.0): original questions that widen service coverage for AIF-C01. Append-only: keep after all earlier AIF question files. */
(function(){
function Q(k, t, a, en, zh, wEn, wZh){
  var q = {k: k, d: 'd' + k.charAt(0), t: t, a: a, en: {q: en[0], o: en[1], x: en[2]}, zh: {q: zh[0], o: zh[1], x: zh[2]}};
  if (wEn) { var pad = a.map(function(){ return ''; }); q.w = {en: pad.concat(wEn), zh: pad.concat(wZh)}; }
  AIF.qs.push(q);
}

/* ---------- 1.2 use cases: managed AI services ---------- */
Q('1.2','single',[0],
['A bank must find and redact names, account numbers and addresses in thousands of customer emails before analysts read them. Which managed service detects this personal data in text?',
 ['Amazon Comprehend','Amazon Polly','Amazon Rekognition','Amazon Personalize'],
 'Comprehend can detect and locate PII entities in text so they can be redacted.'],
['某银行必须在分析师阅读之前，找出并遮盖数千封客户邮件中的姓名、账号和地址。哪项托管服务可以检测文本中的这些个人数据？',
 ['Amazon Comprehend','Amazon Polly','Amazon Rekognition','Amazon Personalize'],
 'Comprehend 可以检测并定位文本中的 PII 实体，以便进行遮盖。'],
['Polly converts text to speech.','Rekognition analyses images and video.','Personalize produces recommendations.'],
['Polly 把文本转换为语音。','Rekognition 分析图像和视频。','Personalize 生成推荐。']);

Q('1.2','single',[0],
['A support team wants incoming tickets sorted automatically into its own categories, such as "billing", "outage" and "account access", using examples it has labeled. Which capability fits?',
 ['Amazon Comprehend custom classification','Amazon Polly lexicons','Amazon Textract Queries','Amazon Rekognition Custom Labels'],
 'Comprehend custom classification trains a text classifier on your labeled examples to assign your own categories.'],
['某支持团队希望利用自己标记的示例，把收到的工单自动归入“账单”“故障”“账户访问”等自定义类别。哪项功能合适？',
 ['Amazon Comprehend 自定义分类','Amazon Polly 词典','Amazon Textract Queries','Amazon Rekognition Custom Labels'],
 'Comprehend 自定义分类利用你标记的示例训练文本分类器，为文本分配你自己的类别。'],
['Polly lexicons control pronunciation.','Textract Queries extract answers from documents.','Rekognition Custom Labels classify images, not text.'],
['Polly 词典用于控制发音。','Textract Queries 从文档中提取答案。','Rekognition Custom Labels 对图像而不是文本进行分类。']);

Q('1.2','single',[0],
['A contact centre wants call recordings turned into text with each speaker identified, sensitive details such as card numbers removed, and product names recognized correctly. Which service provides these features?',
 ['Amazon Transcribe (speaker diarization, PII redaction, custom vocabulary)','Amazon Translate','Amazon Polly','Amazon Kendra'],
 'Transcribe converts speech to text and supports speaker identification, automatic PII redaction and custom vocabularies; Call Analytics adds call insights.'],
['某联络中心希望把通话录音转换为文字，识别每位发言人，去除卡号等敏感信息，并正确识别产品名称。哪项服务提供这些功能？',
 ['Amazon Transcribe（发言人分离、PII 遮盖、自定义词汇）','Amazon Translate','Amazon Polly','Amazon Kendra'],
 'Transcribe 把语音转换为文字，支持发言人识别、自动 PII 遮盖和自定义词汇；Call Analytics 还提供通话洞察。'],
['Translate converts text between languages.','Polly converts text to speech.','Kendra is enterprise search.'],
['Translate 在语言之间转换文本。','Polly 把文本转换为语音。','Kendra 是企业搜索服务。']);

Q('1.2','single',[0],
['An e-commerce site wants "recommended for you" product lists based on each shopper’s browsing and purchase history, without building ML models itself. Which service fits?',
 ['Amazon Personalize','Amazon Comprehend','Amazon Textract','Amazon Transcribe'],
 'Personalize creates real-time personalized recommendations from user interaction data, using the same kind of technology as Amazon.com.'],
['某电商网站希望根据每位购物者的浏览和购买历史生成“为你推荐”的商品列表，且无需自己构建 ML 模型。哪项服务合适？',
 ['Amazon Personalize','Amazon Comprehend','Amazon Textract','Amazon Transcribe'],
 'Personalize 根据用户交互数据生成实时个性化推荐，所用技术与 Amazon.com 同类。'],
['Comprehend analyses text.','Textract extracts text from documents.','Transcribe converts speech to text.'],
['Comprehend 分析文本。','Textract 从文档中提取文字。','Transcribe 把语音转换为文字。']);

Q('1.2','single',[0],
['Employees want to type natural-language questions such as "What is our parental leave policy?" and get precise answers found across SharePoint, Confluence and file shares. Which service provides intelligent enterprise search?',
 ['Amazon Kendra','Amazon Polly','Amazon Rekognition','Amazon Lex alone'],
 'Kendra is an ML-powered enterprise search service with connectors to many repositories; it can also act as the retriever for RAG.'],
['员工希望输入“我们的育儿假政策是什么？”这样的自然语言问题，从 SharePoint、Confluence 和文件共享中找到准确答案。哪项服务提供智能企业搜索？',
 ['Amazon Kendra','Amazon Polly','Amazon Rekognition','单独使用 Amazon Lex'],
 'Kendra 是由 ML 驱动的企业搜索服务，提供连接多种数据存储库的连接器，也可以作为 RAG 的检索器。'],
['Polly converts text to speech.','Rekognition analyses images.','Lex builds conversational interfaces but does not index documents.'],
['Polly 把文本转换为语音。','Rekognition 分析图像。','Lex 用于构建对话界面，但不会为文档建立索引。']);

Q('1.2','single',[0],
['A company wants its voice assistant to pronounce brand names correctly and add pauses and emphasis to Amazon Polly output. What should it use?',
 ['SSML tags and custom lexicons in Amazon Polly','Amazon Transcribe custom vocabulary','Amazon Comprehend sentiment','Amazon Translate custom terminology'],
 'Polly supports Speech Synthesis Markup Language (SSML) for pauses and emphasis, and lexicons to control pronunciation.'],
['某公司希望其语音助手能正确读出品牌名称，并在 Amazon Polly 的输出中加入停顿和重音。应使用什么？',
 ['Amazon Polly 中的 SSML 标签和自定义词典','Amazon Transcribe 自定义词汇','Amazon Comprehend 情感分析','Amazon Translate 自定义术语'],
 'Polly 支持语音合成标记语言（SSML）来添加停顿和重音，并支持用词典控制发音。'],
['Custom vocabulary improves speech recognition, not speech output.','Sentiment analysis does not change speech.','Custom terminology controls translations.'],
['自定义词汇改进的是语音识别，而不是语音输出。','情感分析不会改变语音。','自定义术语控制的是翻译。']);

Q('1.2','multi',[0,1],
['A company processes scanned loan applications. Which TWO services together extract the data and then flag low-confidence results for a person to check? (Select TWO.)',
 ['Amazon Textract','Amazon Augmented AI (Amazon A2I)','Amazon Polly','Amazon Personalize','Amazon Translate'],
 'Textract extracts text, forms and tables; A2I routes low-confidence predictions to human reviewers.'],
['某公司处理扫描的贷款申请。哪两项服务组合起来，可以提取数据并把低置信度的结果标记出来交给人工检查？（选择两项。）',
 ['Amazon Textract','Amazon Augmented AI（Amazon A2I）','Amazon Polly','Amazon Personalize','Amazon Translate'],
 'Textract 提取文字、表单和表格；A2I 把低置信度的预测转给人工审核员。'],
['Polly converts text to speech.','Personalize recommends items.','Translate changes languages.'],
['Polly 把文本转换为语音。','Personalize 推荐商品。','Translate 转换语言。']);

/* ---------- 1.3 ML lifecycle ---------- */
Q('1.3','single',[0],
['A data scientist wants a visual tool to import, explore, clean and transform data with hundreds of built-in transformations before training, with little code. Which SageMaker capability fits?',
 ['SageMaker Data Wrangler (in SageMaker Canvas)','SageMaker Model Monitor','SageMaker Ground Truth','SageMaker Clarify'],
 'Data Wrangler provides a visual interface for data preparation and feature engineering with many built-in transforms.'],
['某数据科学家希望在训练前使用可视化工具，几乎不写代码就能导入、探索、清洗和转换数据，并提供数百种内置转换。哪项 SageMaker 功能合适？',
 ['SageMaker Data Wrangler（位于 SageMaker Canvas 中）','SageMaker Model Monitor','SageMaker Ground Truth','SageMaker Clarify'],
 'Data Wrangler 提供用于数据准备和特征工程的可视化界面，内置大量转换。'],
['Model Monitor watches deployed models.','Ground Truth labels data.','Clarify detects bias and explains predictions.'],
['Model Monitor 监控已部署的模型。','Ground Truth 标记数据。','Clarify 检测偏差并解释预测。']);

Q('1.3','single',[0],
['Several teams compute the same customer features (such as "purchases in the last 30 days") separately, causing inconsistent results between training and live inference. Which capability solves this?',
 ['SageMaker Feature Store','SageMaker Ground Truth','Amazon Polly','Amazon Kendra'],
 'Feature Store is a central repository to store, share and reuse features, with an offline store for training and an online store for low-latency inference.'],
['多个团队分别计算相同的客户特征（例如“过去 30 天的购买次数”），导致训练和实时推理之间结果不一致。哪项功能可以解决这个问题？',
 ['SageMaker Feature Store','SageMaker Ground Truth','Amazon Polly','Amazon Kendra'],
 'Feature Store 是用于存储、共享和复用特征的中央存储库，提供用于训练的离线存储和用于低延迟推理的在线存储。'],
['Ground Truth labels training data.','Polly converts text to speech.','Kendra is enterprise search.'],
['Ground Truth 标记训练数据。','Polly 把文本转换为语音。','Kendra 是企业搜索服务。']);

Q('1.3','single',[0],
['What is the main difference between SageMaker Ground Truth and Amazon Augmented AI (A2I)?',
 ['Ground Truth labels data to create training datasets; A2I adds human review of model predictions in production','Ground Truth deploys models; A2I trains them','Both only translate text','A2I labels training data; Ground Truth reviews predictions'],
 'Ground Truth is used before training to label data; A2I is used after deployment to send low-confidence predictions to people.'],
['SageMaker Ground Truth 与 Amazon Augmented AI（A2I）的主要区别是什么？',
 ['Ground Truth 标记数据以创建训练数据集；A2I 在生产环境中对模型预测增加人工审核','Ground Truth 部署模型；A2I 训练模型','两者都只翻译文本','A2I 标记训练数据；Ground Truth 审核预测'],
 'Ground Truth 在训练之前用于标记数据；A2I 在部署之后用于把低置信度的预测交给人工处理。'],
['Neither service deploys or trains models.','Neither is a translation service.','The roles are the other way round.'],
['这两项服务都不负责部署或训练模型。','两者都不是翻译服务。','两者的角色正好相反。']);

Q('1.3','single',[0],
['A company’s raw sales data sits in several databases and S3 buckets. Before training a model, it needs a serverless service to extract, clean, join and load the data into one place. Which service fits?',
 ['AWS Glue','Amazon Polly','Amazon Lex','AWS Artifact'],
 'Glue is a serverless data integration (ETL) service with a Data Catalog, commonly used to prepare data for ML.'],
['某公司的原始销售数据分散在多个数据库和 S3 存储桶中。在训练模型之前，它需要一个无服务器服务来提取、清洗、关联数据并把数据加载到一个地方。哪项服务合适？',
 ['AWS Glue','Amazon Polly','Amazon Lex','AWS Artifact'],
 'Glue 是无服务器的数据集成（ETL）服务，带有数据目录，常用于为 ML 准备数据。'],
['Polly converts text to speech.','Lex builds chatbots.','Artifact provides compliance reports.'],
['Polly 把文本转换为语音。','Lex 用于构建聊天机器人。','Artifact 提供合规报告。']);

Q('1.3','single',[0],
['Data analysts who know SQL want to create and use ML models directly from their data warehouse with SQL statements. Which option fits?',
 ['Amazon Redshift ML','Amazon Polly','AWS Glue DataBrew only','Amazon Lex'],
 'Redshift ML lets you create, train and use models with SQL in Redshift; it uses SageMaker behind the scenes.'],
['熟悉 SQL 的数据分析师希望直接在数据仓库中用 SQL 语句创建和使用 ML 模型。哪个选项合适？',
 ['Amazon Redshift ML','Amazon Polly','仅使用 AWS Glue DataBrew','Amazon Lex'],
 'Redshift ML 让你在 Redshift 中用 SQL 创建、训练和使用模型，它在后台使用 SageMaker。'],
['Polly converts text to speech.','DataBrew prepares data but does not train models.','Lex builds chatbots.'],
['Polly 把文本转换为语音。','DataBrew 用于准备数据，但不训练模型。','Lex 用于构建聊天机器人。']);

Q('1.3','single',[0],
['An ML team wants alarms when the latency or error rate of a SageMaker endpoint rises above a threshold. Which service collects these metrics and raises alarms?',
 ['Amazon CloudWatch','AWS Artifact','Amazon Macie','AWS Glue'],
 'SageMaker endpoints publish metrics such as invocations, latency and errors to CloudWatch, where you can set alarms.'],
['某 ML 团队希望在 SageMaker 端点的延迟或错误率超过阈值时收到告警。哪项服务收集这些指标并发出告警？',
 ['Amazon CloudWatch','AWS Artifact','Amazon Macie','AWS Glue'],
 'SageMaker 端点会把调用次数、延迟和错误等指标发布到 CloudWatch，你可以在其中设置告警。'],
['Artifact provides compliance reports.','Macie finds sensitive data in S3.','Glue prepares data.'],
['Artifact 提供合规报告。','Macie 在 S3 中查找敏感数据。','Glue 用于准备数据。']);

/* ---------- 2.3 AWS GenAI services ---------- */
Q('2.3','single',[0],
['A development team wants an AI assistant in its IDE that suggests code, explains code, scans for security issues and helps upgrade old Java applications. Which service fits?',
 ['Amazon Q Developer','Amazon Q Business','Amazon Polly','Amazon Comprehend'],
 'Amazon Q Developer is a generative AI assistant for software development and AWS tasks, available in IDEs, the console and the command line.'],
['某开发团队希望在 IDE 中使用一个 AI 助手，它能建议代码、解释代码、扫描安全问题，并帮助升级旧的 Java 应用。哪项服务合适？',
 ['Amazon Q Developer','Amazon Q Business','Amazon Polly','Amazon Comprehend'],
 'Amazon Q Developer 是面向软件开发和 AWS 任务的生成式 AI 助手，可在 IDE、控制台和命令行中使用。'],
['Q Business answers questions from company data for employees.','Polly converts text to speech.','Comprehend analyses text.'],
['Q Business 依据公司数据为员工回答问题。','Polly 把文本转换为语音。','Comprehend 分析文本。']);

Q('2.3','single',[0],
['A company wants a ready-made generative AI assistant that connects to its existing data sources and only shows employees information they already have permission to see. Which service fits with the least building?',
 ['Amazon Q Business','A custom model trained from scratch on SageMaker AI','Amazon Polly','AWS Glue'],
 'Q Business is a fully managed assistant with connectors to many enterprise sources, and it respects the access controls of those sources.'],
['某公司希望有一个现成的生成式 AI 助手，它能连接现有的数据源，并且只向员工显示他们本来就有权查看的信息。哪项服务需要构建的工作最少？',
 ['Amazon Q Business','在 SageMaker AI 上从零训练的定制模型','Amazon Polly','AWS Glue'],
 'Q Business 是完全托管的助手，带有连接多种企业数据源的连接器，并遵守这些数据源的访问控制。'],
['Training from scratch takes the most effort and cost.','Polly converts text to speech.','Glue prepares data; it is not an assistant.'],
['从零训练需要的工作量和成本最高。','Polly 把文本转换为语音。','Glue 用于准备数据，不是助手。']);

Q('2.3','single',[0],
['A teacher wants students to experiment with building small generative AI apps in a browser, without needing an AWS account or writing code. Which option fits?',
 ['PartyRock, an Amazon Bedrock playground','Amazon SageMaker HyperPod','Amazon EC2 with GPUs','AWS Outposts'],
 'PartyRock lets anyone build and share generative AI apps in a browser, powered by Bedrock models, without an AWS account.'],
['一位老师希望学生在浏览器中尝试构建小型生成式 AI 应用，无需 AWS 账户，也不用写代码。哪个选项合适？',
 ['PartyRock（Amazon Bedrock 演练平台）','Amazon SageMaker HyperPod','带 GPU 的 Amazon EC2','AWS Outposts'],
 'PartyRock 让任何人都能在浏览器中构建和分享由 Bedrock 模型驱动的生成式 AI 应用，无需 AWS 账户。'],
['HyperPod is for large-scale model training.','GPU instances need an account and setup.','Outposts runs AWS on premises.'],
['HyperPod 用于大规模模型训练。','GPU 实例需要账户和配置。','Outposts 在本地运行 AWS。']);

Q('2.3','multi',[0,1],
['Which TWO statements describe how Amazon Q Developer and Amazon Q Business differ? (Select TWO.)',
 ['Q Developer focuses on writing, explaining and transforming code and working with AWS resources','Q Business focuses on answering employees’ questions using company data and business applications','Both are only text-to-speech services','Q Business requires you to train your own foundation model first','Q Developer can only be used by AWS employees'],
 'Q Developer serves developers and IT; Q Business serves business users with company knowledge. Neither requires you to train a model.'],
['哪两种说法描述了 Amazon Q Developer 与 Amazon Q Business 的区别？（选择两项。）',
 ['Q Developer 侧重于编写、解释和转换代码以及操作 AWS 资源','Q Business 侧重于利用公司数据和业务应用回答员工的问题','两者都只是文本转语音服务','Q Business 要求你先训练自己的基础模型','Q Developer 只能由 AWS 员工使用'],
 'Q Developer 服务于开发人员和 IT 人员；Q Business 借助公司知识服务于业务用户。两者都不需要你训练模型。'],
['Neither is a text-to-speech service.','No model training is required.','Q Developer is available to customers.'],
['两者都不是文本转语音服务。','无需训练模型。','客户可以使用 Q Developer。']);

/* ---------- 3.1 application design ---------- */
Q('3.1','single',[0],
['A chatbot built on Amazon Bedrock must remember each user’s previous messages across visits. Which AWS service is a common, serverless choice for storing this conversation history?',
 ['Amazon DynamoDB','Amazon S3 Glacier Deep Archive','AWS Artifact','Amazon Polly'],
 'DynamoDB offers fast, serverless key-value storage, which suits per-user session and chat history lookups.'],
['基于 Amazon Bedrock 构建的聊天机器人必须在用户多次访问之间记住其之前的消息。哪项 AWS 服务是存储这些对话历史的常见无服务器选择？',
 ['Amazon DynamoDB','Amazon S3 Glacier Deep Archive','AWS Artifact','Amazon Polly'],
 'DynamoDB 提供快速的无服务器键值存储，适合按用户查询会话和聊天历史。'],
['Deep Archive retrieval takes hours.','Artifact provides compliance reports.','Polly converts text to speech.'],
['Deep Archive 取回需要数小时。','Artifact 提供合规报告。','Polly 把文本转换为语音。']);

Q('3.1','single',[0],
['A company already uses Amazon Kendra to index its documents and now wants a generative AI app that answers questions from those documents. What role can Kendra play?',
 ['The retriever in a RAG architecture, returning relevant passages that are added to the prompt','The foundation model that generates the final answer','A tool to fine-tune the model weights','A text-to-speech engine for the answers'],
 'In RAG, Kendra can retrieve the most relevant passages, which are passed to a foundation model (for example in Amazon Bedrock) to generate a grounded answer.'],
['某公司已经使用 Amazon Kendra 为其文档建立索引，现在希望构建一个依据这些文档回答问题的生成式 AI 应用。Kendra 可以扮演什么角色？',
 ['RAG 架构中的检索器，返回相关段落并将其加入提示','生成最终答案的基础模型','用于微调模型权重的工具','为答案提供文本转语音的引擎'],
 '在 RAG 中，Kendra 可以检索最相关的段落，再交给基础模型（例如 Amazon Bedrock 中的模型）生成有依据的答案。'],
['Kendra searches; a foundation model generates the answer.','Kendra does not change model weights.','Kendra does not produce speech.'],
['Kendra 负责搜索，由基础模型生成答案。','Kendra 不会改变模型权重。','Kendra 不会生成语音。']);

Q('3.1','single',[0],
['A travel assistant built with Amazon Bedrock Agents must look up live flight prices and book tickets through the company’s APIs. Which agent feature makes these API calls possible?',
 ['Action groups, defined with an API schema and backed by Lambda functions','Prompt caching','Model distillation','Watermark detection'],
 'Action groups describe the APIs an agent can call (for example with an OpenAPI schema) and connect them to Lambda functions that do the work.'],
['某旅行助手使用 Amazon Bedrock Agents 构建，必须通过公司的 API 查询实时机票价格并预订机票。哪项智能体功能使这些 API 调用成为可能？',
 ['操作组，用 API 架构定义并由 Lambda 函数提供支持','提示缓存','模型蒸馏','水印检测'],
 '操作组描述智能体可以调用的 API（例如使用 OpenAPI 架构），并把它们连接到实际执行工作的 Lambda 函数。'],
['Prompt caching reduces cost and latency for repeated context.','Distillation creates a smaller model.','Watermark detection identifies AI-generated images.'],
['提示缓存降低重复上下文的成本和延迟。','蒸馏用于创建更小的模型。','水印检测用于识别 AI 生成的图像。']);

/* ---------- 5.1 securing AI systems ---------- */
Q('5.1','single',[0],
['A company must keep all traffic between its VPC applications and Amazon Bedrock off the public internet. What should it configure?',
 ['An interface VPC endpoint for Amazon Bedrock (AWS PrivateLink)','A public NAT gateway route only','Amazon CloudFront in front of Bedrock','An S3 bucket policy'],
 'PrivateLink interface endpoints let resources in a VPC call Bedrock privately over the AWS network.'],
['某公司必须让其 VPC 中的应用与 Amazon Bedrock 之间的所有流量都不经过公共互联网。应配置什么？',
 ['Amazon Bedrock 的接口 VPC 终端节点（AWS PrivateLink）','仅配置指向公有 NAT 网关的路由','在 Bedrock 前面使用 Amazon CloudFront','S3 存储桶策略'],
 'PrivateLink 接口终端节点让 VPC 中的资源通过 AWS 网络私密地调用 Bedrock。'],
['A NAT gateway sends traffic out to the internet.','CloudFront serves public internet users.','A bucket policy controls S3 access, not Bedrock traffic.'],
['NAT 网关会把流量发往互联网。','CloudFront 服务于公共互联网用户。','存储桶策略控制的是 S3 访问，而不是 Bedrock 流量。']);

Q('5.1','single',[0],
['A security team wants a record of the prompts sent to Amazon Bedrock and the responses returned, for auditing and investigating misuse. What should it enable?',
 ['Bedrock model invocation logging to Amazon CloudWatch Logs or Amazon S3','Amazon Polly speech marks','AWS Glue crawlers','S3 Transfer Acceleration'],
 'Model invocation logging captures request and response data for Bedrock calls and delivers it to CloudWatch Logs and/or S3. CloudTrail separately records the API calls themselves.'],
['某安全团队希望记录发送到 Amazon Bedrock 的提示以及返回的响应，用于审计和调查滥用行为。应启用什么？',
 ['把 Bedrock 模型调用日志记录到 Amazon CloudWatch Logs 或 Amazon S3','Amazon Polly 语音标记','AWS Glue 爬网程序','S3 Transfer Acceleration'],
 '模型调用日志记录会捕获 Bedrock 调用的请求和响应数据，并交付到 CloudWatch Logs 和/或 S3。CloudTrail 则单独记录 API 调用本身。'],
['Speech marks describe Polly audio timing.','Crawlers catalogue data.','Transfer Acceleration speeds up uploads.'],
['语音标记描述的是 Polly 音频的时间信息。','爬网程序用于编目数据。','Transfer Acceleration 用于加快上传。']);

Q('5.1','multi',[0,1],
['Which TWO AWS services help monitor the operation of a generative AI application on Bedrock? (Select TWO.)',
 ['Amazon CloudWatch, for invocation metrics, latency and alarms','AWS CloudTrail, for a record of who called which Bedrock APIs','Amazon Polly','Amazon Textract','AWS Snowball Edge'],
 'CloudWatch tracks performance and usage metrics and logs; CloudTrail records API activity for auditing.'],
['哪两项 AWS 服务有助于监控 Bedrock 上生成式 AI 应用的运行情况？（选择两项。）',
 ['Amazon CloudWatch，用于调用指标、延迟和告警','AWS CloudTrail，用于记录谁调用了哪些 Bedrock API','Amazon Polly','Amazon Textract','AWS Snowball Edge'],
 'CloudWatch 跟踪性能和用量指标以及日志；CloudTrail 记录 API 活动以供审计。'],
['Polly converts text to speech.','Textract extracts text from documents.','Snowball Edge moves data offline.'],
['Polly 把文本转换为语音。','Textract 从文档中提取文字。','Snowball Edge 以离线方式迁移数据。']);

/* ---------- 5.2 governance ---------- */
Q('5.2','single',[0],
['A compliance officer wants to continuously collect evidence that the company’s generative AI workloads follow AWS best practices, mapped to controls, for an upcoming audit. Which service helps?',
 ['AWS Audit Manager, using its generative AI best practices framework','Amazon Polly','Amazon Personalize','AWS Global Accelerator'],
 'Audit Manager automates evidence collection against prebuilt and custom frameworks, including one for generative AI best practices.'],
['某合规官希望持续收集证据，证明公司的生成式 AI 工作负载遵循 AWS 最佳实践并映射到相应控制措施，以应对即将到来的审计。哪项服务有帮助？',
 ['AWS Audit Manager，使用其生成式 AI 最佳实践框架','Amazon Polly','Amazon Personalize','AWS Global Accelerator'],
 'Audit Manager 根据预置和自定义框架（包括生成式 AI 最佳实践框架）自动收集证据。'],
['Polly converts text to speech.','Personalize produces recommendations.','Global Accelerator routes network traffic.'],
['Polly 把文本转换为语音。','Personalize 生成推荐。','Global Accelerator 路由网络流量。']);

Q('5.2','single',[0],
['Auditors ask a company to prove which team changed the Guardrails configuration of its Bedrock application last month. Which service provides this record?',
 ['AWS CloudTrail','Amazon CloudWatch metrics alone','Amazon Comprehend','Amazon Kendra'],
 'CloudTrail records management API calls, including who changed Bedrock resources such as guardrails, and when.'],
['审计人员要求某公司证明上个月是哪个团队修改了其 Bedrock 应用的护栏配置。哪项服务提供这一记录？',
 ['AWS CloudTrail','仅使用 Amazon CloudWatch 指标','Amazon Comprehend','Amazon Kendra'],
 'CloudTrail 记录管理 API 调用，包括谁在何时修改了护栏等 Bedrock 资源。'],
['Metrics show performance, not who made changes.','Comprehend analyses text.','Kendra is enterprise search.'],
['指标显示的是性能，而不是谁做了更改。','Comprehend 分析文本。','Kendra 是企业搜索服务。']);
})();
