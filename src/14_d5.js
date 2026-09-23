AIF.domains.push({id:'d5', n:5, w:14, q:7,
  title:{en:'Security, Compliance, and Governance for AI Solutions', zh:'AI 解决方案的安全、合规与治理'},
  tasks:['5.1','5.2']});

/* ===================== TASK 5.1 ===================== */
AIF.tasks['5.1'] = {d:'d5',
title:{en:'Explain methods to secure AI systems', zh:'解释保护 AI 系统的方法'},
obj:[
 ['Identify AWS services and features to secure AI: IAM, encryption, Macie, PrivateLink, shared responsibility, AgentCore Identity, Policy in AgentCore, Bedrock Guardrails','识别保护 AI 的 AWS 服务与功能：IAM、加密、Macie、PrivateLink、责任共担模型、AgentCore Identity、AgentCore 中的 Policy、Bedrock 护栏'],
 ['Describe source citation and documenting data origins: data lineage, data cataloging, SageMaker Model Cards','描述来源引用和数据来源记录：数据血缘、数据编目、SageMaker Model Cards'],
 ['Describe secure data engineering: data quality, privacy-enhancing technologies, access control, data integrity','描述安全数据工程最佳实践：评估数据质量、隐私增强技术、数据访问控制、数据完整性'],
 ['Describe security and privacy considerations: app security, threat detection, vulnerability management, infrastructure protection, prompt injection, encryption, data leakage, output filtering, audit logging, toxicity','描述安全与隐私考量：应用安全、威胁检测、漏洞管理、基础设施保护、提示注入、加密、数据泄露防护、输出过滤与校验、审计日志、毒性'],
 ['Describe hallucination detection and grounding: RAG grounding, output validation, confidence scoring','描述幻觉检测与依据增强技术：RAG 依据、输出校验、置信度评分']
],
en:`
<h3>The shared responsibility model for AI</h3>
<div class="tw"><table><thead><tr><th>AWS: security <i>of</i> the cloud</th><th>You: security <i>in</i> the cloud</th></tr></thead><tbody>
<tr><td>Data centers, hardware, global network, virtualization; the infrastructure and model hosting behind managed services such as Amazon Bedrock</td><td>Your data and its classification, IAM users/roles/policies, encryption settings and keys, network configuration, prompts and application logic, guardrail configuration, which model you use and how you use its output</td></tr>
</tbody></table></div>
<p>The more you manage yourself (e.g. a model on EC2 instead of Bedrock), the more of the stack, such as OS patching, becomes your responsibility.</p>

<h3>AWS security services and features</h3>
<div class="tw"><table><thead><tr><th>Service / feature</th><th>Role in AI security</th></tr></thead><tbody>
<tr><td>AWS IAM (roles, policies, permissions)</td><td>Who can call which model or read which data. Apply <b>least privilege</b>: e.g. allow <code>bedrock:InvokeModel</code> only on approved model ARNs; SageMaker and agents run with their own execution roles.</td></tr>
<tr><td>Encryption: AWS KMS + TLS</td><td>KMS keys (including customer managed keys) encrypt data <b>at rest</b>: S3 training data, custom models, knowledge bases, logs. TLS protects data <b>in transit</b>.</td></tr>
<tr><td>Amazon Macie</td><td>Uses ML to discover and classify sensitive data (PII) in S3 before it reaches training or a knowledge base.</td></tr>
<tr><td>AWS PrivateLink</td><td>Interface VPC endpoints so traffic to Bedrock or SageMaker stays on the AWS network and never crosses the public internet.</td></tr>
<tr><td>AWS Secrets Manager</td><td>Stores and rotates API keys and database credentials instead of hard-coding them in apps or prompts.</td></tr>
<tr><td>Amazon Inspector</td><td>Automated vulnerability scanning of EC2 instances, container images and Lambda functions (known CVEs, network exposure).</td></tr>
<tr><td>Amazon Bedrock Guardrails</td><td>Filters prompt attacks, harmful content and PII on inputs and outputs.</td></tr>
<tr><td>Amazon Bedrock AgentCore Identity</td><td>Identity and credential management for agents: who may invoke an agent (inbound) and how the agent securely gets OAuth tokens or API keys to act on a user's behalf in other systems (outbound).</td></tr>
<tr><td>Policy in AgentCore</td><td>Deterministic rules that allow or deny which tools an agent can call, for which users and with which parameters. Written in Cedar (or described in plain English and converted to Cedar) and enforced at the AgentCore Gateway, outside the agent's own code, with every decision logged.</td></tr>
</tbody></table></div>

<h3>Source citation and data origins</h3>
<ul>
<li><b>Data lineage:</b> the record of where data came from and every transformation it went through, from source to model.</li>
<li><b>Data cataloging:</b> a searchable inventory of datasets and their metadata, e.g. the <b>AWS Glue Data Catalog</b>.</li>
<li><b>SageMaker Model Cards:</b> document which data trained a model and how it was evaluated.</li>
<li><b>Source citations</b> in RAG answers let users verify where each statement came from.</li>
</ul>

<h3>Secure data engineering</h3>
<div class="tw"><table><thead><tr><th>Practice</th><th>What it involves</th></tr></thead><tbody>
<tr><td>Assess data quality</td><td>Completeness, accuracy, timeliness, consistency; automate checks (AWS Glue Data Quality, Glue DataBrew).</td></tr>
<tr><td>Privacy-enhancing technologies</td><td>Anonymization, pseudonymization and tokenization, masking, aggregation, differential privacy, encryption.</td></tr>
<tr><td>Data access control</td><td>Least-privilege IAM, <b>AWS Lake Formation</b> fine-grained (table, column, row) permissions, S3 bucket policies and Block Public Access.</td></tr>
<tr><td>Data integrity</td><td>Checksums, validation, S3 Versioning and Object Lock, immutable audit logs, so data cannot be silently altered.</td></tr>
</tbody></table></div>

<h3>Security and privacy considerations</h3>
<div class="tw"><table><thead><tr><th>Consideration</th><th>How to address it</th></tr></thead><tbody>
<tr><td>Application security</td><td>Secure coding, authentication, input validation, rate limiting; treat the model as untrusted input.</td></tr>
<tr><td>Threat detection</td><td>Monitor for unusual activity (e.g. Amazon GuardDuty, CloudWatch alarms on invocation spikes).</td></tr>
<tr><td>Vulnerability management</td><td>Scan and patch continuously (Amazon Inspector).</td></tr>
<tr><td>Infrastructure protection</td><td>Private subnets, security groups, PrivateLink, AWS WAF in front of public endpoints.</td></tr>
<tr><td>Prompt injection</td><td>Guardrails prompt-attack filter, separate untrusted content, least-privilege tools.</td></tr>
<tr><td>Encryption at rest and in transit</td><td>KMS and TLS everywhere.</td></tr>
<tr><td>Data leakage prevention</td><td>Send only the data needed, mask PII, restrict what retrieval can return per user. Bedrock does not store or train on your prompts.</td></tr>
<tr><td>Output filtering and validation</td><td>Guardrails on outputs; check format and schema; never execute model output (SQL, code, commands) without validation.</td></tr>
<tr><td>Audit trail and logging</td><td><b>CloudTrail</b> records API calls (who invoked what, when). <b>Bedrock model invocation logging</b> captures the prompts and responses themselves to CloudWatch Logs or S3. CloudWatch metrics track usage.</td></tr>
<tr><td>Toxicity</td><td>Guardrails content filters on input and output; human review for sensitive apps.</td></tr>
</tbody></table></div>
<div class="box trap"><p>CloudTrail shows <i>that</i> someone called <code>InvokeModel</code>; it does not store the prompt text. To audit <b>what was asked and answered</b>, enable <b>model invocation logging</b>.</p></div>

<h3>Detecting hallucinations and grounding answers</h3>
<div class="tw"><table><thead><tr><th>Method</th><th>How it helps</th></tr></thead><tbody>
<tr><td>RAG grounding</td><td>Retrieve trusted text and instruct the model to answer only from it.</td></tr>
<tr><td>Output validation</td><td>Check format, citations, numbers and business rules before showing or acting on the answer.</td></tr>
<tr><td>Confidence scoring</td><td>Use grounding and relevance scores, retrieval similarity scores or model confidence; route low scores to "I don't know" or a human.</td></tr>
<tr><td>Guardrails contextual grounding check</td><td>Blocks responses whose grounding or relevance score is below your threshold.</td></tr>
<tr><td>Automated Reasoning checks</td><td>Verify answers against formal policy rules.</td></tr>
<tr><td>Citations</td><td>Show sources so users can verify claims.</td></tr>
<tr><td>LLM-as-a-judge</td><td>A second model checks the first model's answer against the sources.</td></tr>
<tr><td>Human in the loop</td><td>Required review for high-risk answers.</td></tr>
</tbody></table></div>
<div class="box rem"><p>Lowering temperature reduces variation but does not verify facts. Grounding (RAG + contextual grounding check + citations) is the answer to hallucinations.</p></div>
`,
zh:`
<h3>AI 的责任共担模型</h3>
<div class="tw"><table><thead><tr><th>AWS：负责云<i>本身</i>的安全</th><th>你：负责云<i>中</i>的安全</th></tr></thead><tbody>
<tr><td>数据中心、硬件、全球网络、虚拟化；Amazon Bedrock 等托管服务背后的基础设施和模型托管</td><td>你的数据及其分类、IAM 用户/角色/策略、加密设置与密钥、网络配置、提示和应用逻辑、护栏配置、使用哪个模型以及如何使用其输出</td></tr>
</tbody></table></div>
<p>自行管理的越多（例如在 EC2 上运行模型而非使用 Bedrock），操作系统补丁等更多层次就归你负责。</p>

<h3>AWS 安全服务与功能</h3>
<div class="tw"><table><thead><tr><th>服务 / 功能</th><th>在 AI 安全中的作用</th></tr></thead><tbody>
<tr><td>AWS IAM（角色、策略、权限）</td><td>控制谁能调用哪个模型、读取哪些数据。遵循<b>最小权限</b>：例如只允许对批准的模型 ARN 执行 <code>bedrock:InvokeModel</code>；SageMaker 和智能体使用各自的执行角色。</td></tr>
<tr><td>加密：AWS KMS + TLS</td><td>KMS 密钥（包括客户托管密钥）对<b>静态</b>数据加密：S3 训练数据、定制模型、知识库、日志。TLS 保护<b>传输中</b>的数据。</td></tr>
<tr><td>Amazon Macie</td><td>用 ML 在 S3 中发现并分类敏感数据 (PII)，在其进入训练或知识库之前拦截。</td></tr>
<tr><td>AWS PrivateLink</td><td>接口型 VPC 终端节点，让访问 Bedrock 或 SageMaker 的流量留在 AWS 网络内，不经过公网。</td></tr>
<tr><td>AWS Secrets Manager</td><td>存储并轮换 API 密钥和数据库凭证，避免硬编码在应用或提示中。</td></tr>
<tr><td>Amazon Inspector</td><td>自动扫描 EC2 实例、容器镜像和 Lambda 函数的漏洞（已知 CVE、网络暴露）。</td></tr>
<tr><td>Amazon Bedrock 护栏</td><td>对输入和输出过滤提示攻击、有害内容和 PII。</td></tr>
<tr><td>Amazon Bedrock AgentCore Identity</td><td>智能体的身份与凭证管理：谁可以调用智能体（入站），以及智能体如何安全获取 OAuth 令牌或 API 密钥、代表用户访问其他系统（出站）。</td></tr>
<tr><td>AgentCore 中的 Policy</td><td>确定性地允许或拒绝智能体为哪些用户、以哪些参数调用哪些工具的规则。用 Cedar 编写（或用英文自然语言描述后转换为 Cedar），在智能体代码之外的 AgentCore Gateway 处强制执行，每次决策都有日志。</td></tr>
</tbody></table></div>

<h3>来源引用与数据来源</h3>
<ul>
<li><b>数据血缘 (Data lineage)：</b>记录数据从何而来，以及从源头到模型经历的每一次转换。</li>
<li><b>数据编目：</b>可搜索的数据集及元数据清单，例如 <b>AWS Glue Data Catalog</b>。</li>
<li><b>SageMaker Model Cards：</b>记录模型用哪些数据训练、如何评估。</li>
<li>RAG 答案中的<b>来源引用</b>让用户能核实每句话的出处。</li>
</ul>

<h3>安全数据工程</h3>
<div class="tw"><table><thead><tr><th>实践</th><th>内容</th></tr></thead><tbody>
<tr><td>评估数据质量</td><td>完整性、准确性、时效性、一致性；自动化检查（AWS Glue Data Quality、Glue DataBrew）。</td></tr>
<tr><td>隐私增强技术</td><td>匿名化、假名化与令牌化、掩码、聚合、差分隐私、加密。</td></tr>
<tr><td>数据访问控制</td><td>最小权限 IAM、<b>AWS Lake Formation</b> 细粒度（表、列、行）权限、S3 存储桶策略与阻止公有访问。</td></tr>
<tr><td>数据完整性</td><td>校验和、数据校验、S3 版本控制与对象锁定、不可篡改的审计日志，防止数据被悄悄修改。</td></tr>
</tbody></table></div>

<h3>安全与隐私考量</h3>
<div class="tw"><table><thead><tr><th>考量</th><th>应对方法</th></tr></thead><tbody>
<tr><td>应用安全</td><td>安全编码、身份认证、输入校验、限流；把模型输出当作不可信输入。</td></tr>
<tr><td>威胁检测</td><td>监控异常活动（如 Amazon GuardDuty、针对调用量激增的 CloudWatch 告警）。</td></tr>
<tr><td>漏洞管理</td><td>持续扫描与修补（Amazon Inspector）。</td></tr>
<tr><td>基础设施保护</td><td>私有子网、安全组、PrivateLink、在公网端点前部署 AWS WAF。</td></tr>
<tr><td>提示注入</td><td>护栏提示攻击过滤、隔离不可信内容、工具最小权限。</td></tr>
<tr><td>静态与传输中加密</td><td>全程使用 KMS 和 TLS。</td></tr>
<tr><td>数据泄露防护</td><td>只发送必要的数据、PII 掩码、按用户限制检索可返回的内容。Bedrock 不存储也不用你的提示训练模型。</td></tr>
<tr><td>输出过滤与校验</td><td>对输出应用护栏；检查格式和模式；未经校验绝不执行模型输出（SQL、代码、命令）。</td></tr>
<tr><td>审计追踪与日志</td><td><b>CloudTrail</b> 记录 API 调用（谁在何时调用了什么）。<b>Bedrock 模型调用日志</b>把提示和回答内容本身写入 CloudWatch Logs 或 S3。CloudWatch 指标追踪使用量。</td></tr>
<tr><td>毒性</td><td>对输入和输出启用护栏内容过滤；敏感应用加人工复核。</td></tr>
</tbody></table></div>
<div class="box trap"><p>CloudTrail 只显示<i>有人</i>调用了 <code>InvokeModel</code>，不保存提示文本。要审计<b>问了什么、答了什么</b>，需开启<b>模型调用日志</b>。</p></div>

<h3>检测幻觉与依据增强</h3>
<div class="tw"><table><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody>
<tr><td>RAG 依据</td><td>检索可信文本，并要求模型只依据它作答。</td></tr>
<tr><td>输出校验</td><td>在展示或执行前检查格式、引用、数字和业务规则。</td></tr>
<tr><td>置信度评分</td><td>使用依据与相关性分数、检索相似度分数或模型置信度；分数低时回答“不知道”或转人工。</td></tr>
<tr><td>护栏上下文依据检查</td><td>拦截依据或相关性分数低于阈值的回答。</td></tr>
<tr><td>自动推理检查</td><td>依据形式化的政策规则验证答案。</td></tr>
<tr><td>引用来源</td><td>展示来源，方便用户核实。</td></tr>
<tr><td>LLM 作为评审</td><td>由第二个模型对照来源检查第一个模型的回答。</td></tr>
<tr><td>人在回路</td><td>高风险答案必须人工复核。</td></tr>
</tbody></table></div>
<div class="box rem"><p>调低温度只能减少波动，不能核实事实。应对幻觉的答案是依据增强（RAG + 上下文依据检查 + 引用）。</p></div>
`};

/* ===================== TASK 5.2 ===================== */
AIF.tasks['5.2'] = {d:'d5',
title:{en:'Recognize governance and compliance regulations for AI systems', zh:'认识 AI 系统的治理与合规要求'},
obj:[
 ['Identify AWS governance and compliance services: AWS Config, Amazon Inspector, AWS Artifact, AWS CloudTrail, AWS Trusted Advisor','识别辅助治理与合规的 AWS 服务：AWS Config、Amazon Inspector、AWS Artifact、AWS CloudTrail、AWS Trusted Advisor'],
 ['Describe data governance strategies: lifecycles, logging, residency, monitoring, observation, retention','描述数据治理策略：数据生命周期、日志、驻留、监控、可观测性、保留'],
 ['Describe governance protocols: policies, review cadence and strategies, frameworks such as the Generative AI Security Scoping Matrix, transparency standards, team training','描述遵循治理规程的流程：政策、审查频率与策略、生成式 AI 安全范围矩阵等框架、透明度标准、团队培训要求']
],
en:`
<h3>Governance and compliance services</h3>
<div class="tw"><table><thead><tr><th>Service</th><th>Answers the question</th><th>AI example</th></tr></thead><tbody>
<tr><td>AWS CloudTrail</td><td>"<b>Who did what, when?</b>" A log of API activity.</td><td>Who created a fine-tuning job or changed a guardrail.</td></tr>
<tr><td>AWS Config</td><td>"<b>How is each resource configured, and is it compliant?</b>" Configuration history and rules.</td><td>Flag any S3 training bucket without encryption; any SageMaker notebook with direct internet access.</td></tr>
<tr><td>Amazon Inspector</td><td>"<b>Which workloads have known vulnerabilities?</b>"</td><td>CVEs in the container image serving a model.</td></tr>
<tr><td>AWS Artifact</td><td>"<b>Where are AWS's compliance reports and agreements?</b>" Self-service downloads of SOC, ISO and PCI reports; accept agreements such as a BAA.</td><td>Auditors need proof AWS infrastructure meets ISO 27001.</td></tr>
<tr><td>AWS Trusted Advisor</td><td>"<b>Are we following best practices?</b>" Checks for cost optimization, performance, security, fault tolerance and service quotas.</td><td>Idle endpoints wasting money; open security groups.</td></tr>
<tr><td>Amazon CloudWatch</td><td>Metrics, logs, alarms, dashboards.</td><td>Alarm when model invocations or errors spike.</td></tr>
<tr><td>AWS Well-Architected Tool</td><td>Review a workload against the Well-Architected pillars, including the Machine Learning and Generative AI lenses.</td><td>Structured design review before launch.</td></tr>
</tbody></table></div>
<div class="box trap"><p><b>CloudTrail = actions</b> (API calls by users and services). <b>Config = state</b> (what a resource looks like now and over time, and whether it complies with rules). Artifact = <b>AWS's</b> compliance paperwork, not yours.</p></div>
<div class="box note"><p>AWS Audit Manager (not named in the guide) can continuously collect evidence for audits and includes a generative AI best-practices framework. For spending governance, AWS Budgets and Cost Explorer are in scope.</p></div>

<h3>Data governance strategies</h3>
<div class="tw"><table><thead><tr><th>Strategy</th><th>What it means</th></tr></thead><tbody>
<tr><td>Data lifecycle</td><td>Manage data from creation → storage → use → archive (e.g. S3 Glacier) → deletion, with S3 Lifecycle rules.</td></tr>
<tr><td>Logging</td><td>Record access and changes (CloudTrail, invocation logs, S3 access logs).</td></tr>
<tr><td>Residency</td><td>Keep data in required countries or Regions; choose Regions deliberately and check cross-Region inference settings.</td></tr>
<tr><td>Monitoring</td><td>Track data quality, access patterns, model behavior and drift.</td></tr>
<tr><td>Observation (observability)</td><td>Traces, metrics and logs that show how an AI system behaves end to end (CloudWatch, AgentCore Observability).</td></tr>
<tr><td>Retention</td><td>Keep data and logs only as long as regulation and business needs require, then delete.</td></tr>
</tbody></table></div>

<h3>Generative AI Security Scoping Matrix</h3>
<p>An AWS framework that classifies a GenAI use case by <b>how much of the model and application you own</b>. Your security and governance duties grow from Scope 1 to Scope 5.</p>
<div class="tw"><table><thead><tr><th>Scope</th><th>You are…</th><th>Example</th></tr></thead><tbody>
<tr><td>1 · Consumer app</td><td>Using a public GenAI service as-is. You control only what you type in.</td><td>Staff use a free public chatbot.</td></tr>
<tr><td>2 · Enterprise app</td><td>Using a third-party business application (SaaS) with GenAI features, under an enterprise agreement.</td><td>AI features built into a CRM or office suite.</td></tr>
<tr><td>3 · Pre-trained models</td><td>Building your own app on an existing FM through an API.</td><td>A support bot calling a Claude or Nova model on Amazon Bedrock, with RAG.</td></tr>
<tr><td>4 · Fine-tuned models</td><td>Fine-tuning an existing FM with your data, so your data is in the weights.</td><td>A Bedrock custom model fine-tuned on claims history.</td></tr>
<tr><td>5 · Self-trained models</td><td>Training a model from scratch on your data.</td><td>A bank pre-trains its own model on SageMaker AI.</td></tr>
</tbody></table></div>
<p>For every scope, consider five security disciplines: <b>governance &amp; compliance</b>, <b>legal &amp; privacy</b>, <b>risk management</b>, <b>controls</b> and <b>resilience</b>.</p>
<div class="box trap"><p>Adding RAG to a Bedrock model is still <b>Scope 3</b>: RAG does not change the model's weights. It becomes Scope 4 only when you fine-tune.</p></div>

<h3>Governance protocols</h3>
<ul>
<li><b>Policies:</b> acceptable use, data classification and handling, model approval, when human review is required.</li>
<li><b>Review cadence:</b> regular scheduled reviews plus a review whenever the model, data or use case changes.</li>
<li><b>Review strategies:</b> technical, legal and ethics/risk reviews; independent audits; red-teaming.</li>
<li><b>Governance frameworks:</b> the Generative AI Security Scoping Matrix, AWS Well-Architected (ML and GenAI lenses), NIST AI Risk Management Framework (Govern, Map, Measure, Manage), ISO/IEC 42001 (AI management systems), the EU AI Act (risk tiers).</li>
<li><b>Transparency standards:</b> Model Cards, AI Service Cards, notices telling users they are interacting with AI.</li>
<li><b>Team training requirements:</b> responsible use, security, privacy and the limits of AI for everyone who builds or uses it.</li>
</ul>
<div class="box rem"><p>A governance answer usually combines <b>policy</b> (written rules) + <b>people</b> (review boards, human oversight, training) + <b>tools</b> (CloudTrail, Config, Model Cards, Guardrails). When two answers look equally right, pick the documented, human-reviewed option.</p></div>
`,
zh:`
<h3>治理与合规服务</h3>
<div class="tw"><table><thead><tr><th>服务</th><th>回答的问题</th><th>AI 场景示例</th></tr></thead><tbody>
<tr><td>AWS CloudTrail</td><td>“<b>谁在什么时候做了什么？</b>”API 活动日志。</td><td>谁创建了微调任务、谁修改了护栏。</td></tr>
<tr><td>AWS Config</td><td>“<b>每个资源如何配置？是否合规？</b>”配置历史和规则。</td><td>标记任何未加密的 S3 训练桶、任何可直接访问互联网的 SageMaker 笔记本。</td></tr>
<tr><td>Amazon Inspector</td><td>“<b>哪些工作负载存在已知漏洞？</b>”</td><td>提供模型服务的容器镜像中的 CVE。</td></tr>
<tr><td>AWS Artifact</td><td>“<b>AWS 的合规报告和协议在哪里？</b>”自助下载 SOC、ISO、PCI 报告；签署 BAA 等协议。</td><td>审计师需要证明 AWS 基础设施符合 ISO 27001。</td></tr>
<tr><td>AWS Trusted Advisor</td><td>“<b>我们遵循最佳实践了吗？</b>”检查成本优化、性能、安全、容错和服务配额。</td><td>闲置端点浪费费用；安全组对外开放。</td></tr>
<tr><td>Amazon CloudWatch</td><td>指标、日志、告警、仪表板。</td><td>模型调用量或错误激增时告警。</td></tr>
<tr><td>AWS Well-Architected Tool</td><td>按 Well-Architected 支柱（含机器学习和生成式 AI 透镜）评审工作负载。</td><td>上线前进行结构化的设计评审。</td></tr>
</tbody></table></div>
<div class="box trap"><p><b>CloudTrail = 行为</b>（用户和服务的 API 调用）。<b>Config = 状态</b>（资源当前及历史的配置，是否符合规则）。Artifact = <b>AWS 自己</b>的合规文件，不是你的。</p></div>
<div class="box note"><p>AWS Audit Manager（考纲未点名）可持续收集审计证据，并提供生成式 AI 最佳实践框架。支出治理方面，AWS Budgets 和 Cost Explorer 也在考试范围内。</p></div>

<h3>数据治理策略</h3>
<div class="tw"><table><thead><tr><th>策略</th><th>含义</th></tr></thead><tbody>
<tr><td>数据生命周期</td><td>管理数据从创建 → 存储 → 使用 → 归档（如 S3 Glacier）→ 删除的全过程，可用 S3 生命周期规则。</td></tr>
<tr><td>日志</td><td>记录访问和变更（CloudTrail、调用日志、S3 访问日志）。</td></tr>
<tr><td>数据驻留</td><td>把数据保存在要求的国家或区域；审慎选择区域并检查跨区域推理设置。</td></tr>
<tr><td>监控</td><td>跟踪数据质量、访问模式、模型行为和漂移。</td></tr>
<tr><td>可观测性</td><td>用链路追踪、指标和日志端到端展示 AI 系统的行为（CloudWatch、AgentCore Observability）。</td></tr>
<tr><td>保留</td><td>数据和日志只保留法规与业务需要的时长，然后删除。</td></tr>
</tbody></table></div>

<h3>生成式 AI 安全范围矩阵 (Scoping Matrix)</h3>
<p>AWS 的一个框架，按<b>你对模型和应用的掌控程度</b>对生成式 AI 用例分类。从范围 1 到范围 5，你的安全和治理责任逐步增加。</p>
<div class="tw"><table><thead><tr><th>范围</th><th>你在……</th><th>例子</th></tr></thead><tbody>
<tr><td>1 · 消费级应用</td><td>直接使用公开的生成式 AI 服务，只能控制自己输入的内容。</td><td>员工使用免费的公共聊天机器人。</td></tr>
<tr><td>2 · 企业级应用</td><td>在企业协议下使用带生成式 AI 功能的第三方商业应用 (SaaS)。</td><td>CRM 或办公套件中内置的 AI 功能。</td></tr>
<tr><td>3 · 预训练模型</td><td>通过 API 基于现有 FM 构建自己的应用。</td><td>在 Amazon Bedrock 上调用 Claude 或 Nova 模型、带 RAG 的客服机器人。</td></tr>
<tr><td>4 · 微调模型</td><td>用你的数据微调现有 FM，你的数据进入了模型权重。</td><td>基于理赔历史微调的 Bedrock 定制模型。</td></tr>
<tr><td>5 · 自训练模型</td><td>用你的数据从零训练模型。</td><td>银行在 SageMaker AI 上预训练自己的模型。</td></tr>
</tbody></table></div>
<p>每个范围都要考虑五个安全领域：<b>治理与合规</b>、<b>法律与隐私</b>、<b>风险管理</b>、<b>控制措施</b>和<b>韧性</b>。</p>
<div class="box trap"><p>给 Bedrock 模型加上 RAG 仍然是<b>范围 3</b>：RAG 不改变模型权重。只有微调后才变成范围 4。</p></div>

<h3>治理规程</h3>
<ul>
<li><b>政策：</b>可接受使用、数据分类与处理、模型审批、何时必须人工复核。</li>
<li><b>审查频率：</b>定期审查，加上模型、数据或用例变化时的专项审查。</li>
<li><b>审查策略：</b>技术、法律和伦理/风险审查；独立审计；红队测试。</li>
<li><b>治理框架：</b>生成式 AI 安全范围矩阵、AWS Well-Architected（ML 和生成式 AI 透镜）、NIST AI 风险管理框架（治理、映射、衡量、管理）、ISO/IEC 42001（AI 管理体系）、欧盟《人工智能法案》（风险分级）。</li>
<li><b>透明度标准：</b>Model Cards、AI Service Cards、告知用户正在与 AI 交互。</li>
<li><b>团队培训要求：</b>所有构建或使用 AI 的人员都要接受负责任使用、安全、隐私和 AI 局限性方面的培训。</li>
</ul>
<div class="box rem"><p>治理类答案通常是 <b>政策</b>（书面规则）+ <b>人</b>（评审委员会、人工监督、培训）+ <b>工具</b>（CloudTrail、Config、Model Cards、护栏）的组合。两个选项看起来都对时，选有记录、有人工审核的那个。</p></div>
`};
