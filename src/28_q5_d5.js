/* Fifth question set (v1.3), domain 5: security, compliance and governance. Append-only. */
(function(){
function Q(k, t, a, en, zh, wEn, wZh){
  var q = {k: k, d: 'd' + k.charAt(0), t: t, a: a, en: {q: en[0], o: en[1], x: en[2]}, zh: {q: zh[0], o: zh[1], x: zh[2]}};
  if (wEn) { var pad = a.map(function(){ return ''; }); q.w = {en: pad.concat(wEn), zh: pad.concat(wZh)}; }
  AIF.qs.push(q);
}

/* ================= 5.1 Securing AI systems ================= */
Q('5.1','single',[0],
['An application on Amazon EC2 needs to call Amazon Bedrock. What is the most secure way to give it credentials?',
 ['Attach an IAM role to the instance, with a least-privilege policy, so it gets temporary credentials','Hard-code access keys in the application','Use the AWS account root user','Store access keys in the code repository'],
 'IAM roles provide short-lived credentials automatically, with no long-term keys to leak.'],
['一个运行在 Amazon EC2 上的应用需要调用 Amazon Bedrock。为它提供凭证最安全的方式是什么？',
 ['为实例附加一个遵循最小权限策略的 IAM 角色，让它获取临时凭证','把访问密钥硬编码在应用中','使用 AWS 账户根用户','把访问密钥存放在代码仓库中'],
 'IAM 角色会自动提供短期凭证，不存在可泄露的长期密钥。'],
['Hard-coded keys are easily leaked.','The root user should never be used by applications.','Keys in a repository are a common cause of breaches.'],
['硬编码的密钥很容易泄露。','应用绝不应使用根用户。','仓库中的密钥是常见的泄露原因。']);

Q('5.1','single',[0],
['A customer manages its own AWS KMS key for its training data. Who can decrypt data encrypted with that key?',
 ['Only principals allowed by the key policy and their IAM permissions','Anyone with access to the S3 bucket, regardless of the key','Every AWS employee','Anyone who knows the bucket name'],
 'KMS key policies add a separate layer of control over who can decrypt data.'],
['某客户为其训练数据自行管理一个 AWS KMS 密钥。谁可以解密用该密钥加密的数据？',
 ['只有密钥策略允许且拥有相应 IAM 权限的主体','任何能访问该 S3 存储桶的人，与密钥无关','每一位 AWS 员工','任何知道存储桶名称的人'],
 'KMS 密钥策略在“谁能解密数据”上增加了一层独立的控制。'],
['Bucket access alone is not enough; the key must allow decryption too.','AWS staff cannot use your customer managed key.','A bucket name grants no access.'],
['仅有存储桶访问权限不够，还必须获得密钥的解密许可。','AWS 员工无法使用你的客户托管密钥。','知道存储桶名称并不授予任何访问权限。']);

Q('5.1','single',[0],
['Which service detects suspicious activity, such as unusual API calls or compromised credentials, in the AWS account that runs an AI application?',
 ['Amazon GuardDuty','Amazon Macie','Amazon Inspector','AWS Artifact'],
 'GuardDuty provides continuous threat detection across your AWS account.'],
['哪项服务可以在运行 AI 应用的 AWS 账户中检测可疑活动，例如异常的 API 调用或被盗用的凭证？',
 ['Amazon GuardDuty','Amazon Macie','Amazon Inspector','AWS Artifact'],
 'GuardDuty 在整个 AWS 账户中提供持续的威胁检测。'],
['Macie finds sensitive data in S3.','Inspector scans software for vulnerabilities.','Artifact provides compliance reports.'],
['Macie 在 S3 中查找敏感数据。','Inspector 扫描软件漏洞。','Artifact 提供合规报告。']);

Q('5.1','single',[0],
['Which service helps protect a public generative AI web app from common web exploits and floods of bot traffic?',
 ['AWS WAF','Amazon Macie','SageMaker Model Cards','AWS Config'],
 'AWS WAF filters malicious web requests, and AWS Shield adds DDoS protection.'],
['哪项服务有助于保护面向公众的生成式 AI Web 应用免受常见 Web 攻击和大量机器人流量的冲击？',
 ['AWS WAF','Amazon Macie','SageMaker Model Cards','AWS Config'],
 'AWS WAF 过滤恶意 Web 请求，AWS Shield 则提供 DDoS 防护。'],
['Macie finds sensitive data.','Model Cards document models.','Config tracks resource configurations.'],
['Macie 查找敏感数据。','Model Cards 用于记录模型信息。','Config 跟踪资源配置。']);

Q('5.1','single',[0],
['Which Amazon Bedrock Guardrails feature detects prompt injection and jailbreak attempts in user input?',
 ['The prompt attack filter','Word filters','Sensitive information filters','The contextual grounding check'],
 'The prompt attack filter looks for attempts to override instructions or bypass safety rules.'],
['Amazon Bedrock Guardrails 的哪项功能可以检测用户输入中的提示注入和越狱企图？',
 ['提示攻击过滤器','字词过滤器','敏感信息过滤器','上下文依据检查'],
 '提示攻击过滤器会识别试图覆盖指令或绕过安全规则的行为。'],
['Word filters block specific words.','Sensitive information filters handle PII.','Grounding checks answers against sources.'],
['字词过滤器拦截特定词语。','敏感信息过滤器处理 PII。','依据检查把回答与来源进行核对。']);

Q('5.1','single',[0],
['Which service keeps a central catalogue of datasets, with their schemas and locations, so teams can find and document training data?',
 ['AWS Glue Data Catalog','Amazon Polly','Amazon Bedrock Guardrails','Amazon Inspector'],
 'A data catalogue records what data exists and where, supporting lineage and governance.'],
['哪项服务提供数据集的集中目录（包括其结构和位置），方便团队查找并记录训练数据？',
 ['AWS Glue Data Catalog','Amazon Polly','Amazon Bedrock Guardrails','Amazon Inspector'],
 '数据目录记录了有哪些数据以及存放位置，为数据沿袭和治理提供支持。'],
['Polly generates speech.','Guardrails filter model content.','Inspector scans for vulnerabilities.'],
['Polly 生成语音。','Guardrails 过滤模型内容。','Inspector 扫描漏洞。']);

Q('5.1','single',[0],
['Why should a RAG assistant show citations to its source documents?',
 ['So users can check answers, which builds trust and documents where the information came from','To make answers longer','Because the model cannot run without them','To hide where data came from'],
 'Source citation supports verification and data provenance.'],
['为什么 RAG 助手应当展示所引用的源文档？',
 ['让用户能够核对答案，从而建立信任并记录信息来源','为了让回答更长','因为没有引用模型就无法运行','为了隐藏数据来源'],
 '引用来源有助于核实信息并记录数据出处。'],
['Length is not the goal.','The model works without citations; they are for users.','Citations do the opposite: they reveal sources.'],
['目的不是让回答更长。','没有引用模型也能运行，引用是给用户看的。','引用的作用恰恰相反：它公开了来源。']);

Q('5.1','single',[0],
['Which activity is part of assessing data quality before training?',
 ['Checking for missing values, duplicates, errors and outdated records','Increasing the number of training epochs','Choosing the model’s logo colour','Encrypting the data'],
 'Poor-quality data leads to poor models, so it must be checked first.'],
['以下哪项活动属于训练前的数据质量评估？',
 ['检查缺失值、重复项、错误和过时记录','增加训练轮数','选择模型标志的颜色','加密数据'],
 '低质量数据会导致低质量模型，因此必须先行检查。'],
['Epochs are a training setting.','Branding has nothing to do with data quality.','Encryption protects data; it does not check its quality.'],
['训练轮数是训练设置。','品牌外观与数据质量无关。','加密是保护数据，而不是检查数据质量。']);

Q('5.1','single',[0],
['Which technique adds carefully calibrated noise so that individual records cannot be identified from a model or from statistics?',
 ['Differential privacy','Chunking','Prompt caching','Model distillation'],
 'Differential privacy is a privacy-enhancing technology that protects individuals in a dataset.'],
['哪种技术会加入精心校准的噪声，使人无法从模型或统计结果中识别出个人记录？',
 ['差分隐私','分块','提示缓存','模型蒸馏'],
 '差分隐私是一种保护数据集中个人信息的隐私增强技术。'],
['Chunking splits documents for RAG.','Caching reduces cost and latency.','Distillation creates a smaller model.'],
['分块是为 RAG 切分文档。','缓存用于降低成本和延迟。','蒸馏用于得到更小的模型。']);

Q('5.1','single',[0],
['Which technique replaces credit card numbers in training data with meaningless values that only a secure system can map back?',
 ['Tokenization (pseudonymization)','Compression','Chunking','Embedding'],
 'Tokenization protects sensitive values while keeping data usable.'],
['哪种技术会把训练数据中的信用卡号替换为无意义的值，并且只有安全系统才能将其映射回原值？',
 ['令牌化（假名化）','压缩','分块','嵌入'],
 '令牌化在保护敏感值的同时仍让数据可用。'],
['Compression makes data smaller but does not protect it.','Chunking splits text.','Embeddings turn text into vectors and do not protect it.'],
['压缩只让数据变小，不能保护数据。','分块是切分文本。','嵌入把文本转为向量，并不能保护数据。']);

Q('5.1','single',[0],
['How can confidence scoring reduce the harm of hallucinations?',
 ['Low-confidence answers can be flagged, withheld or sent for human review','It raises the temperature','It hides all errors from users','It makes the model bigger'],
 'Routing uncertain answers to people prevents wrong answers from reaching users unchecked.'],
['置信度评分如何降低幻觉造成的危害？',
 ['可以对低置信度的回答进行标记、暂不展示或送交人工审核','它会调高温度','它会对用户隐藏所有错误','它会让模型变大'],
 '把不确定的回答交给人工处理，可以避免错误答案未经检查就送达用户。'],
['Temperature does not measure confidence.','Hiding errors is not the aim; catching them is.','Scoring does not change the model.'],
['温度不衡量置信度。','目的不是隐藏错误，而是拦截错误。','评分不会改变模型。']);

Q('5.1','single',[0],
['An AI app accepts file uploads that are passed to the model. Which is an application-security best practice?',
 ['Validate and scan uploads, limit their size and type, and treat their content as untrusted input','Trust every uploaded file','Run uploaded files as code','Turn off logging for uploads'],
 'Uploaded content can carry malware or hidden prompt injection.'],
['某 AI 应用接收用户上传的文件并把它们交给模型处理。以下哪项是应用安全的最佳实践？',
 ['验证并扫描上传文件，限制大小和类型，并把其内容视为不可信的输入','信任所有上传的文件','把上传的文件当作代码运行','关闭上传相关的日志'],
 '上传的内容可能携带恶意软件或隐藏的提示注入。'],
['Uploads can be malicious.','Executing uploads invites attacks.','Logs are needed to investigate incidents.'],
['上传的内容可能是恶意的。','执行上传文件会招来攻击。','需要日志来调查安全事件。']);

Q('5.1','single',[0],
['Under the AWS shared responsibility model, who patches the container image and code that a customer deploys on a SageMaker AI endpoint?',
 ['The customer, while AWS manages the underlying infrastructure','AWS, for everything','Nobody','The model provider'],
 'AWS secures the cloud; customers secure what they put in it, including their own code.'],
['根据 AWS 责任共担模型，客户部署在 SageMaker AI 端点上的容器镜像和代码由谁负责打补丁？',
 ['客户负责，AWS 负责底层基础设施','全部由 AWS 负责','没有人负责','模型提供商负责'],
 'AWS 负责云本身的安全；客户负责其放入云中内容的安全，包括自己的代码。'],
['AWS does not manage the customer’s own code.','Someone must be responsible.','For a custom container, the customer owns it.'],
['AWS 不管理客户自己的代码。','必须有人负责。','对于自定义容器，归属和责任都在客户。']);

Q('5.1','single',[0],
['Which instruction in a RAG prompt best improves grounding?',
 ['“Answer only from the documents provided. If the answer is not there, say you do not know.”','“Use your imagination.”','“Always give an answer, even if you are unsure.”','“Ignore the documents if they seem unclear.”'],
 'Telling the model to rely only on sources, and to admit gaps, reduces made-up answers.'],
['在 RAG 提示中，哪条指令最能提升回答的依据性？',
 ['“只根据提供的文档回答。如果文档中没有答案，就说不知道。”','“发挥你的想象力。”','“即使不确定，也一定要给出答案。”','“如果文档看起来不清楚，就忽略它们。”'],
 '要求模型只依据来源并承认不知道，可以减少编造的答案。'],
['That invites hallucination.','That forces guesses.','That throws away the grounding.'],
['这会诱发幻觉。','这会迫使模型乱猜。','这等于放弃了依据。']);

Q('5.1','multi',[0,1],
['Which TWO help keep an AI application’s API keys and credentials secure? (Choose TWO.)',
 ['Store secrets in AWS Secrets Manager','Use IAM roles that provide temporary credentials','Hard-code keys in the source code','Put keys in the system prompt','Email keys to the team'],
 'Managed secret storage and short-lived role credentials avoid exposed long-term keys.'],
['以下哪两项有助于保护 AI 应用的 API 密钥和凭证？（选择两项）',
 ['把机密存放在 AWS Secrets Manager 中','使用提供临时凭证的 IAM 角色','把密钥硬编码在源代码里','把密钥放进系统提示','通过邮件把密钥发给团队'],
 '托管的机密存储和短期角色凭证可以避免长期密钥外泄。'],
['Source code is often shared and leaked.','Prompts can be exposed to users.','Email is not a secure channel for secrets.'],
['源代码经常被共享和泄露。','提示可能被暴露给用户。','邮件不是传递机密的安全渠道。']);

Q('5.1','match',[],
['Match each security risk in an AI application to a control that addresses it.',
 [['Prompt injection','Guardrails prompt attack filter and input validation'],['Data leakage','Sensitive information filters and least-privilege retrieval'],['Account threats','Amazon GuardDuty'],['Software vulnerabilities','Amazon Inspector'],['Missing audit trail','AWS CloudTrail and model invocation logging']],
 'Each risk needs its own control; together they give defence in depth.'],
['将 AI 应用中的每种安全风险与应对它的控制措施配对。',
 [['提示注入','防护栏提示攻击过滤器和输入验证'],['数据泄露','敏感信息过滤器和最小权限检索'],['账户威胁','Amazon GuardDuty'],['软件漏洞','Amazon Inspector'],['缺少审计记录','AWS CloudTrail 和模型调用日志']],
 '每种风险都需要相应的控制措施，组合起来形成纵深防御。']);

Q('5.1','order',[],
['Put these steps of a secure data pipeline for training data in order.',
 ['Find personal data with Amazon Macie','Mask or remove the sensitive fields','Store the data encrypted in Amazon S3 with restricted access','Record lineage in the data catalogue','Use the approved dataset for training'],
 'Discover and protect sensitive data before it is stored, documented and used.'],
['按顺序排列训练数据安全流水线的步骤。',
 ['用 Amazon Macie 查找个人数据','遮盖或删除敏感字段','把数据加密存储在访问受限的 Amazon S3 中','在数据目录中记录数据沿袭','使用经批准的数据集进行训练'],
 '先发现并保护敏感数据，再进行存储、记录和使用。']);

Q('5.1','single',[0],
['How is data protected in transit when an application calls Amazon Bedrock?',
 ['API requests are encrypted with TLS','It is not protected in transit','It is protected only when stored at rest','It must be sent by email'],
 'Calls to AWS service endpoints use TLS encryption in transit; encryption at rest is a separate layer.'],
['当应用调用 Amazon Bedrock 时，传输中的数据如何受到保护？',
 ['API 请求使用 TLS 加密','传输过程中不受保护','只有在静态存储时才受保护','必须通过邮件发送'],
 '对 AWS 服务端点的调用在传输中使用 TLS 加密；静态加密是另一层保护。'],
['Requests to AWS endpoints are encrypted in transit.','At-rest and in-transit encryption are separate protections, and both apply.','Applications call the API directly; email has no part in it.'],
['对 AWS 端点的请求在传输中是加密的。','静态加密和传输加密是两种独立的保护，两者都适用。','应用直接调用 API，与邮件无关。']);

/* ================= 5.2 Governance and compliance ================= */
Q('5.2','single',[0],
['Which service continuously collects evidence to help prepare for audits, including against a generative AI best practices framework?',
 ['AWS Audit Manager','AWS Artifact','AWS Config','Amazon Polly'],
 'Audit Manager automates evidence collection against frameworks you choose.'],
['哪项服务可以持续收集证据以帮助准备审计，包括依据生成式 AI 最佳实践框架进行审计？',
 ['AWS Audit Manager','AWS Artifact','AWS Config','Amazon Polly'],
 'Audit Manager 会按照你选择的框架自动收集证据。'],
['Artifact provides AWS’s own compliance reports.','Config records configurations and evaluates rules.','Polly generates speech.'],
['Artifact 提供 AWS 自身的合规报告。','Config 记录配置并评估规则。','Polly 生成语音。']);

Q('5.2','single',[0],
['Which feature can centrally stop every account in a company from using Amazon Bedrock in unapproved Regions?',
 ['Service control policies (SCPs) in AWS Organizations','AWS Trusted Advisor','Amazon Polly','SageMaker Model Cards'],
 'SCPs set guardrails on what accounts in an organization are allowed to do.'],
['哪项功能可以集中阻止公司所有账户在未经批准的区域使用 Amazon Bedrock？',
 ['AWS Organizations 中的服务控制策略（SCP）','AWS Trusted Advisor','Amazon Polly','SageMaker Model Cards'],
 'SCP 为组织内各账户能做什么设置了边界。'],
['Trusted Advisor gives recommendations; it cannot block actions.','Polly generates speech.','Model Cards document models.'],
['Trusted Advisor 只给建议，不能阻止操作。','Polly 生成语音。','Model Cards 用于记录模型信息。']);

Q('5.2','single',[0],
['Moving old training data to cheaper storage after 90 days and deleting it after two years is managed with what?',
 ['Amazon S3 Lifecycle policies','AWS CloudTrail','Amazon Bedrock Guardrails','Amazon Macie'],
 'Lifecycle rules automate the data lifecycle, supporting retention policies.'],
['90 天后把旧训练数据转移到更便宜的存储、两年后删除，应该用什么来管理？',
 ['Amazon S3 生命周期策略','AWS CloudTrail','Amazon Bedrock Guardrails','Amazon Macie'],
 '生命周期规则可以自动管理数据生命周期，支持数据保留策略。'],
['CloudTrail records API activity.','Guardrails filter model content.','Macie finds sensitive data.'],
['CloudTrail 记录 API 活动。','Guardrails 过滤模型内容。','Macie 查找敏感数据。']);

Q('5.2','single',[0],
['Which is a good data governance logging practice for an AI application?',
 ['Log who accessed which data and every model invocation, and store the logs securely with a set retention period','Turn off logging to go faster','Log secrets in plain text','Keep logs forever with public access'],
 'Secure, retained logs support audits and investigations.'],
['以下哪项是 AI 应用良好的数据治理日志做法？',
 ['记录谁访问了哪些数据以及每次模型调用，并安全存储日志、设定保留期限','为了提速关闭日志','以明文记录机密信息','永久保存日志并公开访问'],
 '安全且有保留期限的日志可以为审计和调查提供支持。'],
['Without logs you cannot investigate incidents.','Secrets in logs can leak.','Public logs expose sensitive activity.'],
['没有日志就无法调查事件。','日志中的机密可能泄露。','公开的日志会暴露敏感活动。']);

Q('5.2','single',[0],
['Governance requires ongoing observation of a model’s behaviour in production. Which practice fits?',
 ['Dashboards and alerts on quality, drift and usage, with regular reviews','Checking it once at launch','Never checking it','Checking only when users complain'],
 'Continuous monitoring catches problems before they grow.'],
['治理要求对生产环境中模型的行为进行持续观察。哪种做法合适？',
 ['针对质量、漂移和用量设置仪表板与告警，并定期审查','只在上线时检查一次','从不检查','只在用户投诉时检查'],
 '持续监控能在问题扩大之前发现它们。'],
['Models change after launch as data drifts.','Unmonitored models fail silently.','Waiting for complaints means harm has already happened.'],
['上线后数据会漂移，模型表现也会变化。','无人监控的模型会悄无声息地失效。','等到投诉时，伤害已经发生了。']);

Q('5.2','single',[0],
['A company must keep data in the EU. Which Amazon Bedrock cross-Region inference option respects this?',
 ['A geographic (EU) inference profile that routes requests only within EU Regions','A global inference profile','Turning off encryption','A US-only inference profile'],
 'Geographic inference profiles spread load for resilience while keeping data within a geography.'],
['一家公司必须把数据保留在欧盟境内。哪种 Amazon Bedrock 跨区域推理选项符合这一要求？',
 ['只在欧盟区域之间路由请求的地理（EU）推理配置文件','全球推理配置文件','关闭加密','仅限美国的推理配置文件'],
 '地理推理配置文件在分担负载、提高韧性的同时，把数据留在指定地理范围内。'],
['A global profile can route requests anywhere in the world.','Encryption is unrelated to where data is processed.','That would send data outside the EU.'],
['全球配置文件可能把请求路由到世界各地。','加密与数据在哪里处理无关。','那会把数据发送到欧盟之外。']);

Q('5.2','single',[0],
['What should an AI acceptable-use policy define?',
 ['Approved tools and use cases, what data may or may not be entered, and when human review is required','Only the model’s hyperparameters','The office dress code','Nothing, because AI tools are self-governing'],
 'Clear policies tell staff how AI may be used safely.'],
['AI 可接受使用政策应当规定什么？',
 ['批准使用的工具和用例、哪些数据可以或不可以输入，以及何时需要人工审核','只规定模型的超参数','办公室着装规范','什么都不用规定，AI 工具会自我管理'],
 '清晰的政策告诉员工如何安全地使用 AI。'],
['Hyperparameters are technical settings, not policy.','Dress codes are unrelated.','Tools do not govern themselves.'],
['超参数是技术设置，不是政策。','着装规范与此无关。','工具不会自我管理。']);

Q('5.2','single',[0],
['How often should an AI system’s risks and performance be reviewed?',
 ['On a regular, defined schedule, and whenever the model, data or use changes significantly','Never after launch','Once a year, whatever happens','Only when a regulator asks'],
 'A review cadence plus change-triggered reviews keeps governance current.'],
['应该多久审查一次 AI 系统的风险和表现？',
 ['按固定的周期审查，并在模型、数据或用途发生重大变化时审查','上线后就不再审查','无论发生什么，每年一次','只在监管机构要求时'],
 '定期审查加上变更触发的审查，能让治理保持与时俱进。'],
['Risks change after launch.','Big changes should not wait a year.','Governance should be proactive.'],
['上线后风险仍会变化。','重大变化不应等上一年。','治理应当主动进行。']);

Q('5.2','single',[0],
['Which is a sound review strategy for high-risk AI use cases?',
 ['Independent review by a cross-functional board, including legal, security and domain experts, before launch','The developer approves their own work','Skip the review to launch faster','Let users vote on it'],
 'Independent, multi-disciplinary review catches risks a single team misses.'],
['对于高风险的 AI 用例，哪种审查策略是合理的？',
 ['上线前由包括法务、安全和领域专家在内的跨职能委员会进行独立审查','由开发人员自己审批','为了更快上线而跳过审查','让用户投票决定'],
 '独立的多学科审查能发现单个团队遗漏的风险。'],
['Self-approval is not independent.','Skipping review is how risks slip through.','User votes are not a risk review.'],
['自我审批不具备独立性。','跳过审查正是风险漏网的原因。','用户投票不是风险审查。']);

Q('5.2','single',[0],
['Which is an example of a transparency standard a company might adopt?',
 ['Tell users when they are dealing with AI, and publish documentation such as model cards','Hide that AI is involved','Delete all system documentation','Forbid users from giving feedback'],
 'Transparency standards set expectations for disclosure and documentation.'],
['以下哪项是公司可能采用的透明度标准示例？',
 ['在用户与 AI 打交道时告知他们，并发布模型卡等文档','隐瞒使用了 AI','删除所有系统文档','禁止用户提供反馈'],
 '透明度标准规定了信息披露和文档记录的要求。'],
['Hiding AI use breaks transparency.','Documentation is the core of transparency.','Feedback supports transparency.'],
['隐瞒 AI 的使用违背透明原则。','文档是透明的核心。','反馈有助于透明。']);

Q('5.2','single',[0],
['Why is team training part of AI governance?',
 ['Staff need to understand the policies, the risks such as data leakage and prompt injection, and how to use AI responsibly','Training replaces technical controls','Only executives need it','Managed services make training unnecessary'],
 'People are part of the control system; training makes policies work.'],
['为什么团队培训是 AI 治理的一部分？',
 ['员工需要了解政策、数据泄露和提示注入等风险，以及如何负责任地使用 AI','培训可以取代技术控制','只有高管需要培训','使用托管服务就不需要培训'],
 '人是控制体系的一部分，培训让政策真正落地。'],
['Training complements controls; it does not replace them.','Everyone who uses AI needs it.','People still make choices with managed services.'],
['培训是对控制措施的补充，而不是替代。','每一位使用 AI 的人都需要培训。','使用托管服务时仍然需要人来做决定。']);

Q('5.2','single',[0],
['Which international standard specifies the requirements for an AI management system?',
 ['ISO/IEC 42001','ISO 9001','PCI DSS','SOC 2'],
 'ISO/IEC 42001 sets out how organizations should manage AI responsibly.'],
['哪项国际标准规定了 AI 管理体系的要求？',
 ['ISO/IEC 42001','ISO 9001','PCI DSS','SOC 2'],
 'ISO/IEC 42001 规定了组织应如何负责任地管理 AI。'],
['ISO 9001 is about quality management in general.','PCI DSS is about payment card security.','SOC 2 reports on security controls, not AI management.'],
['ISO 9001 是通用的质量管理标准。','PCI DSS 关乎支付卡安全。','SOC 2 报告的是安全控制，而不是 AI 管理。']);

Q('5.2','single',[0],
['Which regulation sorts AI systems by risk level, from unacceptable and high risk to limited and minimal risk?',
 ['The EU AI Act','GDPR','HIPAA','SOC 2'],
 'The EU AI Act sets obligations according to an AI system’s level of risk.'],
['哪项法规按风险等级对 AI 系统进行分类，从不可接受风险、高风险到有限风险和最低风险？',
 ['欧盟《人工智能法》','GDPR','HIPAA','SOC 2'],
 '欧盟《人工智能法》根据 AI 系统的风险等级规定相应义务。'],
['GDPR is about personal data protection.','HIPAA covers US health information.','SOC 2 is an audit report, not a law.'],
['GDPR 关乎个人数据保护。','HIPAA 适用于美国的健康信息。','SOC 2 是审计报告，而不是法律。']);

Q('5.2','multi',[0,1],
['Which TWO help provide an audit trail for an AI application on AWS? (Choose TWO.)',
 ['AWS CloudTrail, which records API activity','Amazon Bedrock model invocation logging, which records prompts and responses','Amazon Polly','AWS Trainium','Amazon Rekognition'],
 'Together they show who did what, and what the model was asked and answered.'],
['以下哪两项有助于为 AWS 上的 AI 应用提供审计记录？（选择两项）',
 ['记录 API 活动的 AWS CloudTrail','记录提示和回答的 Amazon Bedrock 模型调用日志','Amazon Polly','AWS Trainium','Amazon Rekognition'],
 '两者结合可以说明谁做了什么，以及模型被问了什么、回答了什么。'],
['Polly generates speech.','Trainium is a training chip.','Rekognition analyzes images.'],
['Polly 生成语音。','Trainium 是训练芯片。','Rekognition 分析图像。']);

Q('5.2','order',[],
['Put these steps for applying the Generative AI Security Scoping Matrix to a new project in order.',
 ['Identify the use case and how the model will be used','Decide which scope (1 to 5) the project falls into','Identify the security and governance controls that scope needs','Put the controls in place and review them'],
 'The scope decides which responsibilities and controls apply.'],
['按顺序排列把生成式 AI 安全范围矩阵应用到新项目的步骤。',
 ['明确用例以及模型的使用方式','确定项目属于哪个范围（1 到 5）','找出该范围所需的安全和治理控制','落实这些控制措施并进行审查'],
 '范围决定了适用哪些职责和控制措施。']);
})();
