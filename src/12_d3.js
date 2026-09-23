AIF.domains.push({id:'d3', n:3, w:28, q:14,
  title:{en:'Applications of Foundation Models', zh:'基础模型的应用'},
  tasks:['3.1','3.2','3.3','3.4']});

/* ===================== TASK 3.1 ===================== */
AIF.tasks['3.1'] = {d:'d3',
title:{en:'Describe design considerations for applications that use foundation models', zh:'描述基于基础模型的应用的设计考量'},
obj:[
 ['Identify FM selection criteria: cost, modality, latency, multilingual, size, complexity, customization, input/output length, prompt caching','识别选择 FM 的标准：成本、模态、延迟、多语言、模型大小、复杂度、可定制性、输入/输出长度、提示缓存'],
 ['Describe how inference parameters (temperature, input/output length) affect responses','描述推理参数（温度、输入/输出长度）对回答的影响'],
 ['Define RAG and its business applications (Amazon Bedrock Knowledge Bases)','定义 RAG 及其业务应用（Amazon Bedrock 知识库）'],
 ['Identify AWS services that store embeddings in vector databases: OpenSearch Service, Aurora, Neptune, RDS for PostgreSQL','识别在向量数据库中存储嵌入的 AWS 服务：OpenSearch Service、Aurora、Neptune、RDS for PostgreSQL'],
 ['Explain cost tradeoffs of customization: pre-training, fine-tuning, in-context learning, RAG, distillation','解释各种定制方式的成本权衡：预训练、微调、上下文学习、RAG、模型蒸馏'],
 ['Define the role of AI agents and their business applications','定义 AI 智能体的作用及其业务应用']
],
en:`
<h3>Choosing a foundation model</h3>
<div class="tw"><table><thead><tr><th>Criterion</th><th>What to check</th></tr></thead><tbody>
<tr><td>Cost</td><td>Price per 1K input/output tokens (or hosting cost) at your expected volume.</td></tr>
<tr><td>Modality</td><td>Text only, or images, audio, video, embeddings?</td></tr>
<tr><td>Latency</td><td>Is it a live chat (needs fast responses) or an overnight job?</td></tr>
<tr><td>Multilingual</td><td>Does it handle every language your users write in?</td></tr>
<tr><td>Model size &amp; complexity</td><td>More parameters usually means more capability, higher cost and slower responses.</td></tr>
<tr><td>Customization</td><td>Can it be fine-tuned or distilled in Bedrock if you need that later?</td></tr>
<tr><td>Input/output length</td><td>Context window big enough for your documents; maximum output long enough for your answers.</td></tr>
<tr><td>Prompt caching</td><td>Supports caching a repeated prompt prefix to cut cost and latency.</td></tr>
</tbody></table></div>

<h3>Inference parameters</h3>
<div class="tw"><table><thead><tr><th>Parameter</th><th>What it does</th><th>Use</th></tr></thead><tbody>
<tr><td>Temperature</td><td>Controls randomness in picking the next token. Low → the most likely tokens, consistent output. High → more varied, creative output. Common range 0–1 (varies by model).</td><td>Low (0–0.3): extraction, classification, code, factual Q&amp;A. High (0.7–1): brainstorming, stories, marketing ideas.</td></tr>
<tr><td>Top-P (nucleus sampling)</td><td>Samples only from the smallest set of tokens whose probabilities add up to P.</td><td>Lower P → more focused. Usually adjust temperature <i>or</i> top-P, not both.</td></tr>
<tr><td>Top-K</td><td>Samples only from the K most likely tokens.</td><td>Lower K → fewer, safer choices.</td></tr>
<tr><td>Maximum tokens (response length)</td><td>Hard cap on output length.</td><td>Controls cost and latency. Too low and the answer is cut off mid-sentence.</td></tr>
<tr><td>Stop sequences</td><td>Strings that end generation when produced.</td><td>Stop after a closing tag or a delimiter.</td></tr>
<tr><td>Input length</td><td>How much you send in.</td><td>Longer input = more cost and latency; must fit the context window.</td></tr>
</tbody></table></div>
<div class="box trap"><p>"Responses are cut off mid-sentence" → raise <b>max tokens</b>. "Answers vary too much between runs" → lower <b>temperature</b>. "The model makes up facts" → neither; use <b>RAG / grounding</b>.</p></div>

<h3>Retrieval Augmented Generation (RAG)</h3>
<div class="box def"><p><b>RAG</b> retrieves relevant passages from your own data at question time and adds them to the prompt, so the FM answers from that material. The model's weights do <b>not</b> change.</p></div>
<div class="flow"><span>1 Ingest: chunk + embed docs</span><span>2 User asks</span><span>3 Retrieve similar chunks</span><span>4 Augment the prompt</span><span>5 Generate answer + citations</span></div>
<ul>
<li>Uses current and private data without retraining; update knowledge by re-syncing documents.</li>
<li>Reduces hallucinations and can cite sources.</li>
<li>Much cheaper and faster to set up than fine-tuning.</li>
</ul>
<p><b>Amazon Bedrock Knowledge Bases</b> is fully managed RAG: connect data sources (S3, web crawler, Confluence, SharePoint, Salesforce), and it handles parsing, chunking, embedding and storing vectors. Apps call <code>Retrieve</code> or <code>RetrieveAndGenerate</code> and get answers with source citations. It can also query structured data (natural language to SQL) and build GraphRAG with Amazon Neptune Analytics.</p>
<div class="box ex"><p><b>Question:</b> "How many days of parental leave do I get?"</p>
<p><b>Without RAG:</b> the model guesses from general internet knowledge: "Often 12 weeks…" (wrong for this company).</p>
<p><b>With RAG:</b> the knowledge base retrieves section 4.2 of the HR handbook; the model answers "18 weeks, paid in full (HR Handbook §4.2)".</p></div>
<p><b>Business applications:</b> help desks and customer support bots, legal and contract search, medical or technical knowledge assistants, employee onboarding, product Q&amp;A.</p>

<h3>Vector databases on AWS</h3>
<div class="tw"><table><thead><tr><th>Service</th><th>Why choose it</th></tr></thead><tbody>
<tr><td>Amazon OpenSearch Service (incl. Serverless)</td><td>Purpose-built search engine with a vector engine: k-NN and hybrid keyword + semantic search. The default "quick create" store for Bedrock Knowledge Bases.</td></tr>
<tr><td>Amazon Aurora PostgreSQL (pgvector)</td><td>Keep vectors next to relational data in a managed, high-performance SQL database.</td></tr>
<tr><td>Amazon RDS for PostgreSQL (pgvector)</td><td>Same pgvector extension on standard RDS; good when you already run PostgreSQL.</td></tr>
<tr><td>Amazon Neptune (Neptune Analytics)</td><td>Graph database; relationships between entities for GraphRAG.</td></tr>
<tr><td>Amazon DocumentDB</td><td>Vector search inside a JSON document database (MongoDB-compatible).</td></tr>
<tr><td>Amazon ElastiCache</td><td>In-memory vector search for very low latency, e.g. semantic caching of answers.</td></tr>
<tr><td>Amazon S3 Vectors</td><td>Low-cost, durable vector storage in S3 with sub-second queries; best for very large, infrequently queried datasets.</td></tr>
</tbody></table></div>
<div class="box note"><p>Bedrock Knowledge Bases can use Amazon OpenSearch Serverless, OpenSearch managed clusters, Amazon S3 Vectors, Amazon Aurora PostgreSQL and Amazon Neptune Analytics, plus third-party Pinecone, Redis Enterprise Cloud and MongoDB Atlas.</p></div>
<p>Vector search uses <b>k-nearest neighbors (k-NN)</b>: find the k stored vectors closest to the query vector. Approximate methods (such as HNSW) trade a little accuracy for large speed gains.</p>

<h3>Customization: the cost ladder</h3>
<div class="ladder">
<div><span class="n">1</span><span><b>Prompt engineering / in-context learning</b>: instructions and few-shot examples in the prompt. No training, weights unchanged.</span><span class="cost">$</span></div>
<div><span class="n">2</span><span><b>RAG</b>: retrieve your documents at query time. Weights unchanged. Costs: embeddings, vector store, longer prompts.</span><span class="cost">$$</span></div>
<div><span class="n">3</span><span><b>Fine-tuning</b>: train on labeled prompt–response pairs. Weights change. For style, format, specialized tasks.</span><span class="cost">$$$</span></div>
<div><span class="n">4</span><span><b>Continued pre-training</b>: train on large unlabeled domain text. Weights change. Teaches domain vocabulary.</span><span class="cost">$$$$</span></div>
<div><span class="n">5</span><span><b>Pre-training from scratch</b>: build a new FM. Massive data and compute; rarely justified.</span><span class="cost">$$$$$</span></div>
</div>
<div class="box def"><p><b>Model distillation</b>: a large "teacher" model generates responses that train a smaller "student" model. The student becomes nearly as accurate on your use case while being faster and cheaper to run (Amazon Bedrock Model Distillation). It lowers <i>inference</i> cost; it is not a way to add new knowledge.</p></div>
<div class="tw"><table><thead><tr><th>Situation</th><th>Best approach</th></tr></thead><tbody>
<tr><td>Answers must reflect documents that change daily, with citations</td><td>RAG</td></tr>
<tr><td>A quick prototype; a few examples show the output format</td><td>Few-shot prompting</td></tr>
<tr><td>Output must always follow a brand voice and fixed schema, and prompting is not reliable enough</td><td>Fine-tuning</td></tr>
<tr><td>The model does not understand specialized vocabulary; you have lots of unlabeled domain text</td><td>Continued pre-training</td></tr>
<tr><td>A big model works well but is too slow and costly at scale</td><td>Distillation</td></tr>
<tr><td>A new language or modality no existing model supports, with a huge budget</td><td>Pre-training</td></tr>
</tbody></table></div>
<div class="box trap"><p>Fine-tuning is the wrong answer for facts that change often: every change would mean retraining. Frequently updated knowledge → <b>RAG</b>.</p></div>

<h3>AI agents</h3>
<p>An AI agent takes a goal, plans the steps, calls tools and APIs, uses memory and completes multi-step tasks with little human input (see Task 2.1 for the building blocks).</p>
<div class="tw"><table><thead><tr><th>AWS option</th><th>What it gives you</th></tr></thead><tbody>
<tr><td>Amazon Bedrock Agents</td><td>Managed agents: instructions + action groups (Lambda / OpenAPI) + knowledge bases + guardrails; multi-agent collaboration; user confirmation before actions.</td></tr>
<tr><td>Amazon Bedrock AgentCore</td><td>Run agents built with any framework and any model: Runtime, Memory, Gateway (APIs → MCP tools), Identity, Policy, Observability, Browser, Code Interpreter.</td></tr>
<tr><td>Strands Agents</td><td>Open-source SDK to write agents in code.</td></tr>
</tbody></table></div>
<p><b>Business applications:</b> customer service that takes actions (refunds, bookings, address changes), IT operations and ticket triage, insurance claims processing, sales research, coding agents (Kiro), application modernization (AWS Transform), data analysis assistants.</p>
<div class="box rem"><p>Agent safety controls: least-privilege IAM for every tool, Bedrock Guardrails, AgentCore Identity and Policy, human approval for sensitive actions, limits on steps and spend, and full logging (CloudTrail, AgentCore Observability).</p></div>
`,
zh:`
<h3>选择基础模型</h3>
<div class="tw"><table><thead><tr><th>标准</th><th>检查什么</th></tr></thead><tbody>
<tr><td>成本</td><td>按预计调用量计算的每千输入/输出 Token 价格（或托管成本）。</td></tr>
<tr><td>模态</td><td>只需文本，还是需要图像、音频、视频、嵌入？</td></tr>
<tr><td>延迟</td><td>是实时聊天（需要快）还是夜间批处理？</td></tr>
<tr><td>多语言</td><td>能否处理用户使用的所有语言？</td></tr>
<tr><td>模型大小与复杂度</td><td>参数越多通常能力越强、成本越高、响应越慢。</td></tr>
<tr><td>可定制性</td><td>日后需要时能否在 Bedrock 中微调或蒸馏？</td></tr>
<tr><td>输入/输出长度</td><td>上下文窗口能否容纳你的文档；最大输出长度是否够用。</td></tr>
<tr><td>提示缓存</td><td>是否支持缓存重复的提示前缀以降低成本和延迟。</td></tr>
</tbody></table></div>

<h3>推理参数</h3>
<div class="tw"><table><thead><tr><th>参数</th><th>作用</th><th>用法</th></tr></thead><tbody>
<tr><td>温度 (Temperature)</td><td>控制选择下一个 Token 时的随机性。低 → 选最可能的 Token，输出一致；高 → 更多样、更有创意。常见范围 0–1（因模型而异）。</td><td>低 (0–0.3)：信息提取、分类、代码、事实问答。高 (0.7–1)：头脑风暴、故事、营销创意。</td></tr>
<tr><td>Top-P（核采样）</td><td>只在累计概率达到 P 的最小 Token 集合中采样。</td><td>P 越低越集中。通常只调温度<i>或</i> Top-P 其中之一。</td></tr>
<tr><td>Top-K</td><td>只在概率最高的 K 个 Token 中采样。</td><td>K 越小，选择越少越稳妥。</td></tr>
<tr><td>最大 Token 数（回答长度）</td><td>输出长度的硬上限。</td><td>控制成本和延迟。设得太低，回答会在句中被截断。</td></tr>
<tr><td>停止序列</td><td>生成到这些字符串时停止。</td><td>在闭合标签或分隔符处停止。</td></tr>
<tr><td>输入长度</td><td>发送给模型的内容多少。</td><td>输入越长成本越高、延迟越大；必须在上下文窗口内。</td></tr>
</tbody></table></div>
<div class="box trap"><p>“回答在句中被截断” → 调高<b>最大 Token 数</b>。“每次运行答案差异太大” → 调低<b>温度</b>。“模型编造事实” → 两者都不是，要用 <b>RAG / 依据增强</b>。</p></div>

<h3>检索增强生成 (RAG)</h3>
<div class="box def"><p><b>RAG</b> 在提问时从你自己的数据中检索相关段落并加入提示，让 FM 依据这些材料作答。模型权重<b>不会</b>改变。</p></div>
<div class="flow"><span>1 导入：文档分块 + 嵌入</span><span>2 用户提问</span><span>3 检索相似块</span><span>4 增强提示</span><span>5 生成答案 + 引用</span></div>
<ul>
<li>无需重新训练即可使用最新和私有数据；重新同步文档即可更新知识。</li>
<li>减少幻觉，并能给出引用来源。</li>
<li>比微调便宜得多，搭建也更快。</li>
</ul>
<p><b>Amazon Bedrock 知识库 (Knowledge Bases)</b> 是全托管 RAG：连接数据源（S3、网页爬虫、Confluence、SharePoint、Salesforce），自动完成解析、分块、嵌入和向量存储。应用调用 <code>Retrieve</code> 或 <code>RetrieveAndGenerate</code> 即可得到带来源引用的答案。它还能查询结构化数据（自然语言转 SQL），并可借助 Amazon Neptune Analytics 构建 GraphRAG。</p>
<div class="box ex"><p><b>问题：</b>“我能休多少天育儿假？”</p>
<p><b>没有 RAG：</b>模型根据互联网常识猜测：“通常为 12 周……”（对这家公司是错的）。</p>
<p><b>有 RAG：</b>知识库检索到员工手册第 4.2 节，模型回答“18 周，全薪（员工手册 §4.2）”。</p></div>
<p><b>业务应用：</b>服务台和客服机器人、法律与合同检索、医疗或技术知识助手、新员工入职、产品问答。</p>

<h3>AWS 上的向量数据库</h3>
<div class="tw"><table><thead><tr><th>服务</th><th>选择理由</th></tr></thead><tbody>
<tr><td>Amazon OpenSearch Service（含 Serverless）</td><td>自带向量引擎的专用搜索引擎：k-NN 以及关键词 + 语义的混合搜索。Bedrock 知识库“快速创建”的默认存储。</td></tr>
<tr><td>Amazon Aurora PostgreSQL (pgvector)</td><td>在托管的高性能 SQL 数据库中，把向量和关系数据放在一起。</td></tr>
<tr><td>Amazon RDS for PostgreSQL (pgvector)</td><td>在标准 RDS 上使用同样的 pgvector 扩展；适合已在使用 PostgreSQL 的团队。</td></tr>
<tr><td>Amazon Neptune (Neptune Analytics)</td><td>图数据库；利用实体之间的关系实现 GraphRAG。</td></tr>
<tr><td>Amazon DocumentDB</td><td>在 JSON 文档数据库（兼容 MongoDB）中进行向量搜索。</td></tr>
<tr><td>Amazon ElastiCache</td><td>内存级向量搜索，延迟极低，例如语义缓存答案。</td></tr>
<tr><td>Amazon S3 Vectors</td><td>在 S3 中低成本、持久地存储向量，查询为亚秒级；最适合超大规模、低频查询的数据集。</td></tr>
</tbody></table></div>
<div class="box note"><p>Bedrock 知识库可使用 Amazon OpenSearch Serverless、OpenSearch 托管集群、Amazon S3 Vectors、Amazon Aurora PostgreSQL 和 Amazon Neptune Analytics，以及第三方的 Pinecone、Redis Enterprise Cloud 和 MongoDB Atlas。</p></div>
<p>向量搜索使用 <b>k 近邻 (k-NN)</b>：找出与查询向量最接近的 k 个向量。近似算法（如 HNSW）以少量精度换取大幅提速。</p>

<h3>定制方式的成本阶梯</h3>
<div class="ladder">
<div><span class="n">1</span><span><b>提示工程 / 上下文学习</b>：在提示中给出指令和少样本示例。无需训练，权重不变。</span><span class="cost">$</span></div>
<div><span class="n">2</span><span><b>RAG</b>：查询时检索你的文档。权重不变。成本：嵌入、向量库、更长的提示。</span><span class="cost">$$</span></div>
<div><span class="n">3</span><span><b>微调</b>：用有标签的“提示–回答”对训练。权重改变。用于风格、格式、专门任务。</span><span class="cost">$$$</span></div>
<div><span class="n">4</span><span><b>持续预训练</b>：用大量无标签领域文本训练。权重改变。让模型掌握领域词汇。</span><span class="cost">$$$$</span></div>
<div><span class="n">5</span><span><b>从零预训练</b>：打造全新 FM。数据和算力需求巨大，很少值得。</span><span class="cost">$$$$$</span></div>
</div>
<div class="box def"><p><b>模型蒸馏 (Distillation)</b>：由大型“教师”模型生成回答，用来训练较小的“学生”模型。学生模型在你的场景中准确率接近教师，但运行更快更便宜（Amazon Bedrock 模型蒸馏）。它降低的是<i>推理</i>成本，不是添加新知识的方法。</p></div>
<div class="tw"><table><thead><tr><th>场景</th><th>最佳方式</th></tr></thead><tbody>
<tr><td>答案必须反映每天变化的文档，并附引用</td><td>RAG</td></tr>
<tr><td>快速原型；几个示例就能说明输出格式</td><td>少样本提示</td></tr>
<tr><td>输出必须始终符合品牌语气和固定格式，而提示词不够可靠</td><td>微调</td></tr>
<tr><td>模型不懂专业词汇；你有大量无标签领域文本</td><td>持续预训练</td></tr>
<tr><td>大模型效果好，但规模化后太慢太贵</td><td>蒸馏</td></tr>
<tr><td>现有模型都不支持的新语言或新模态，且预算巨大</td><td>预训练</td></tr>
</tbody></table></div>
<div class="box trap"><p>对经常变化的事实，微调是错误答案：每次变化都要重新训练。频繁更新的知识 → <b>RAG</b>。</p></div>

<h3>AI 智能体</h3>
<p>AI 智能体接收目标后规划步骤、调用工具和 API、利用记忆，在很少人工干预下完成多步骤任务（组成要素见任务 2.1）。</p>
<div class="tw"><table><thead><tr><th>AWS 方案</th><th>提供什么</th></tr></thead><tbody>
<tr><td>Amazon Bedrock Agents</td><td>托管智能体：指令 + 操作组（Lambda / OpenAPI）+ 知识库 + 护栏；多智能体协作；执行操作前可要求用户确认。</td></tr>
<tr><td>Amazon Bedrock AgentCore</td><td>运行任何框架、任何模型构建的智能体：Runtime、Memory、Gateway（API → MCP 工具）、Identity、Policy、Observability、Browser、Code Interpreter。</td></tr>
<tr><td>Strands Agents</td><td>用代码编写智能体的开源 SDK。</td></tr>
</tbody></table></div>
<p><b>业务应用：</b>能执行操作的客服（退款、预订、改地址）、IT 运维与工单分诊、保险理赔处理、销售调研、编码智能体 (Kiro)、应用现代化 (AWS Transform)、数据分析助手。</p>
<div class="box rem"><p>智能体安全控制：每个工具最小权限 IAM、Bedrock 护栏、AgentCore Identity 与 Policy、敏感操作需人工批准、限制步数与花费、完整日志（CloudTrail、AgentCore Observability）。</p></div>
`};

/* ===================== TASK 3.2 ===================== */
AIF.tasks['3.2'] = {d:'d3',
title:{en:'Choose effective prompt engineering techniques', zh:'选择有效的提示工程技术'},
obj:[
 ['Define prompt constructs: context, instruction, negative prompts','定义提示的组成：上下文、指令、否定提示'],
 ['Define techniques: chain-of-thought, zero-shot, single-shot, few-shot, prompt templates','定义技术：思维链、零样本、单样本、少样本、提示模板'],
 ['Describe benefits and best practices: quality, experimentation, guardrails, discovery, specificity and concision, multiple comments','描述好处与最佳实践：提升回答质量、实验、护栏、探索发现、具体简洁、多轮说明'],
 ['Define risks and limitations: exposure, poisoning, hijacking, jailbreaking','定义风险与局限：信息暴露、投毒、劫持、越狱'],
 ['Describe prompt versioning and management with Amazon Bedrock Prompt Management','描述使用 Amazon Bedrock Prompt Management 进行提示版本管理与管理策略']
],
en:`
<h3>Anatomy of a prompt</h3>
<div class="tw"><table><thead><tr><th>Part</th><th>Purpose</th></tr></thead><tbody>
<tr><td>Instruction</td><td>The task: "Summarize", "Classify", "Write a reply".</td></tr>
<tr><td>Context</td><td>Background the model needs: who the audience is, company policy, retrieved documents.</td></tr>
<tr><td>Input data</td><td>The specific content to work on: the email, the review, the table.</td></tr>
<tr><td>Output indicator</td><td>Format, length and structure of the answer: "3 bullet points", "JSON with keys a, b".</td></tr>
<tr><td>Role / system prompt</td><td>Persistent instructions and persona set before the conversation: "You are a careful insurance claims assistant".</td></tr>
<tr><td>Negative prompt</td><td>What to avoid: "Do not mention competitors", "No medical advice". For image models, elements to leave out of the picture ("no text, no watermark").</td></tr>
</tbody></table></div>
<div class="box ex"><p><b>[Role]</b> You are a support assistant for Acme Bank.<br>
<b>[Context]</b> Customers are retail clients. Policy: never ask for full card numbers.<br>
<b>[Instruction]</b> Write a reply to the customer email below.<br>
<b>[Input]</b> &lt;email&gt;My card was charged twice for the same coffee…&lt;/email&gt;<br>
<b>[Output]</b> Under 120 words, friendly tone, end with the next step.<br>
<b>[Negative]</b> Do not promise a refund amount.</p></div>

<h3>Techniques</h3>
<div class="tw"><table><thead><tr><th>Technique</th><th>What you do</th><th>Use when</th></tr></thead><tbody>
<tr><td>Zero-shot</td><td>Ask directly, no examples.</td><td>Simple, common tasks.</td></tr>
<tr><td>Single-shot (one-shot)</td><td>Give exactly one example.</td><td>Show a format once.</td></tr>
<tr><td>Few-shot</td><td>Give several examples (typically 2–5).</td><td>Consistent format, style or labeling.</td></tr>
<tr><td>Chain-of-thought (CoT)</td><td>Ask the model to reason step by step before the final answer.</td><td>Math, logic, multi-step reasoning.</td></tr>
<tr><td>Prompt template</td><td>A reusable prompt with variables such as {{customer_name}}, {{question}}.</td><td>Repeatable, consistent, versioned prompts in apps.</td></tr>
</tbody></table></div>
<p>Zero-, one- and few-shot are all forms of <b>in-context learning</b>: the model learns from the prompt, not from training. <b>ReAct</b> (reason + act) extends chain-of-thought with tool calls and is the basis of most agents.</p>
<div class="box ex"><p><b>Task: classify the sentiment of "Delivery was late but the product is great."</b></p>
<ul>
<li><b>Zero-shot:</b> "Classify the sentiment as Positive, Negative or Mixed."</li>
<li><b>One-shot:</b> adds "Example: 'Terrible support, never again.' → Negative".</li>
<li><b>Few-shot:</b> adds three labeled examples, including one Mixed.</li>
<li><b>Chain-of-thought:</b> "List the positive and negative points first, then decide." → late (negative) + great (positive) → Mixed.</li>
<li><b>Template:</b> "Classify the sentiment of: {{review}}. Answer with one word."</li>
</ul></div>

<h3>Benefits and best practices</h3>
<ul>
<li><b>Be specific and concise:</b> state the task, audience, length and format; remove filler.</li>
<li><b>Provide context and examples</b>; separate instructions from data with delimiters or XML tags.</li>
<li><b>Specify the output format</b> (JSON, table, bullet points) and length.</li>
<li><b>Assign a role</b> to set tone and expertise.</li>
<li><b>Break complex tasks</b> into steps or several prompts.</li>
<li><b>Experiment and iterate:</b> test variations and compare results (discovery).</li>
<li><b>Use multiple comments/turns</b> to refine: follow-up instructions correct and focus the output.</li>
<li><b>Add guardrails</b>: tell the model what it must not do, and back that up with Bedrock Guardrails.</li>
</ul>
<p>Benefits: better response quality, fewer hallucinations, consistent formatting, and all of it without the cost of training.</p>

<h3>Risks and limitations</h3>
<div class="tw"><table><thead><tr><th>Risk</th><th>What it looks like</th><th>Defenses</th></tr></thead><tbody>
<tr><td>Prompt injection / hijacking</td><td>Malicious instructions in user input or in retrieved content take over the model: "Ignore previous instructions and…". <b>Indirect</b> injection hides them in documents, web pages or emails the model reads.</td><td>Guardrails prompt-attack filter, separate and tag untrusted data, least-privilege tools, validate outputs before acting.</td></tr>
<tr><td>Jailbreaking</td><td>Role-play or hypothetical framing to make the model ignore its safety rules.</td><td>Guardrails content and prompt-attack filters, strong system prompts, monitoring.</td></tr>
<tr><td>Exposure / prompt leaking</td><td>The model reveals its system prompt, confidential data or other users' data.</td><td>Never put secrets in prompts, PII filters, output filtering, access control on retrieved data.</td></tr>
<tr><td>Poisoning</td><td>Malicious or wrong data inserted into training data or a knowledge base to corrupt answers.</td><td>Vet and control data sources, data lineage, restricted write access, evaluation.</td></tr>
</tbody></table></div>
<p><b>Limitations:</b> prompts cannot add knowledge the model lacks (use RAG), outputs remain nondeterministic, long prompts hit context limits and cost more, and prompts are brittle: a small wording change can change results.</p>

<h3>Amazon Bedrock Prompt Management</h3>
<ul>
<li>Create and save prompts with <b>variables</b>, a chosen model and inference settings.</li>
<li>Test and <b>compare variants side by side</b> across models and settings.</li>
<li>Create immutable <b>versions</b>; apps and Bedrock Flows reference a specific version, so you can roll back.</li>
<li><b>Share</b> prompts across the team instead of hard-coding them in each app.</li>
</ul>
<div class="box rem"><p>Versioning strategy: draft → test against an evaluation set → publish a version → point production at it → keep results and a change note for every version → roll back if metrics drop.</p></div>
`,
zh:`
<h3>提示的组成</h3>
<div class="tw"><table><thead><tr><th>部分</th><th>作用</th></tr></thead><tbody>
<tr><td>指令</td><td>要做的任务：“总结”“分类”“写一封回复”。</td></tr>
<tr><td>上下文</td><td>模型需要的背景：受众是谁、公司政策、检索到的文档。</td></tr>
<tr><td>输入数据</td><td>要处理的具体内容：邮件、评论、表格。</td></tr>
<tr><td>输出指示</td><td>答案的格式、长度和结构：“3 个要点”“包含 a、b 两个键的 JSON”。</td></tr>
<tr><td>角色 / 系统提示</td><td>对话开始前设定的持续性指令和人设：“你是一名严谨的保险理赔助手”。</td></tr>
<tr><td>否定提示</td><td>要避免的内容：“不要提及竞争对手”“不提供医疗建议”。对图像模型而言，是画面中不应出现的元素（“不要文字、不要水印”）。</td></tr>
</tbody></table></div>
<div class="box ex"><p><b>[角色]</b>你是 Acme 银行的客服助手。<br>
<b>[上下文]</b>客户均为零售客户。政策：绝不索要完整卡号。<br>
<b>[指令]</b>回复下面这封客户邮件。<br>
<b>[输入]</b>&lt;email&gt;我的卡为同一杯咖啡被扣了两次款……&lt;/email&gt;<br>
<b>[输出]</b>120 字以内，语气友好，结尾说明下一步。<br>
<b>[否定]</b>不要承诺具体退款金额。</p></div>

<h3>提示技术</h3>
<div class="tw"><table><thead><tr><th>技术</th><th>做法</th><th>适用</th></tr></thead><tbody>
<tr><td>零样本 (Zero-shot)</td><td>直接提问，不给示例。</td><td>简单常见的任务。</td></tr>
<tr><td>单样本 (Single/One-shot)</td><td>只给一个示例。</td><td>展示一次格式。</td></tr>
<tr><td>少样本 (Few-shot)</td><td>给几个示例（通常 2–5 个）。</td><td>要求格式、风格或标注一致。</td></tr>
<tr><td>思维链 (CoT)</td><td>让模型先逐步推理再给最终答案。</td><td>数学、逻辑、多步推理。</td></tr>
<tr><td>提示模板</td><td>带变量的可复用提示，如 {{customer_name}}、{{question}}。</td><td>应用中可重复、一致、可版本化的提示。</td></tr>
</tbody></table></div>
<p>零样本、单样本和少样本都属于<b>上下文学习 (in-context learning)</b>：模型从提示中学习，而不是通过训练。<b>ReAct</b>（推理 + 行动）在思维链基础上加入工具调用，是大多数智能体的基础。</p>
<div class="box ex"><p><b>任务：判断“配送晚了，但产品很棒。”的情感</b></p>
<ul>
<li><b>零样本：</b>“将情感分类为正面、负面或混合。”</li>
<li><b>单样本：</b>加上“示例：‘客服太差，再也不来了。’→ 负面”。</li>
<li><b>少样本：</b>加上三个已标注示例，其中一个是混合。</li>
<li><b>思维链：</b>“先列出正面和负面要点，再下结论。”→ 晚到（负面）+ 很棒（正面）→ 混合。</li>
<li><b>模板：</b>“判断以下评论的情感：{{review}}。只回答一个词。”</li>
</ul></div>

<h3>好处与最佳实践</h3>
<ul>
<li><b>具体而简洁：</b>说明任务、受众、长度和格式；去掉废话。</li>
<li><b>提供上下文和示例</b>；用分隔符或 XML 标签把指令与数据分开。</li>
<li><b>指定输出格式</b>（JSON、表格、要点）和长度。</li>
<li><b>设定角色</b>，确定语气和专业程度。</li>
<li><b>拆分复杂任务</b>为多个步骤或多个提示。</li>
<li><b>实验与迭代：</b>测试不同写法并对比结果（探索发现）。</li>
<li><b>通过多轮说明逐步完善：</b>用追加指令纠正和聚焦输出。</li>
<li><b>加上护栏</b>：告诉模型不能做什么，并用 Bedrock 护栏兜底。</li>
</ul>
<p>好处：提升回答质量、减少幻觉、格式一致，而且无需训练成本。</p>

<h3>风险与局限</h3>
<div class="tw"><table><thead><tr><th>风险</th><th>表现</th><th>防御</th></tr></thead><tbody>
<tr><td>提示注入 / 劫持</td><td>用户输入或检索内容中的恶意指令接管模型：“忽略之前的所有指令并……”。<b>间接</b>注入把指令藏在模型读取的文档、网页或邮件中。</td><td>护栏提示攻击过滤、隔离并标记不可信数据、工具最小权限、执行前校验输出。</td></tr>
<tr><td>越狱 (Jailbreaking)</td><td>通过角色扮演或假设情境让模型无视安全规则。</td><td>护栏内容过滤与提示攻击过滤、强健的系统提示、持续监控。</td></tr>
<tr><td>信息暴露 / 提示泄露</td><td>模型泄露系统提示、机密数据或其他用户的数据。</td><td>不在提示中放密钥、PII 过滤、输出过滤、对检索数据做访问控制。</td></tr>
<tr><td>投毒 (Poisoning)</td><td>在训练数据或知识库中植入恶意或错误数据以污染答案。</td><td>审核并管控数据源、数据血缘、限制写入权限、持续评估。</td></tr>
</tbody></table></div>
<p><b>局限：</b>提示无法补充模型不具备的知识（要用 RAG）；输出仍是非确定性的；长提示会触及上下文上限且更贵；提示很脆弱，措辞稍改结果就可能不同。</p>

<h3>Amazon Bedrock Prompt Management（提示管理）</h3>
<ul>
<li>创建并保存带<b>变量</b>、指定模型和推理参数的提示。</li>
<li>跨模型和参数<b>并排测试、比较不同版本</b>。</li>
<li>创建不可变的<b>版本</b>；应用和 Bedrock Flows 引用特定版本，因此可以回滚。</li>
<li>在团队中<b>共享</b>提示，而不是在每个应用里硬编码。</li>
</ul>
<div class="box rem"><p>版本策略：草稿 → 用评估集测试 → 发布版本 → 生产环境指向该版本 → 为每个版本保留测试结果和变更说明 → 指标下降时回滚。</p></div>
`};

/* ===================== TASK 3.3 ===================== */
AIF.tasks['3.3'] = {d:'d3',
title:{en:'Describe the training and fine-tuning process for foundation models', zh:'描述基础模型的训练与微调过程'},
obj:[
 ['Describe key elements of training an FM: pre-training, fine-tuning, continuous pre-training, distillation','描述训练 FM 的关键要素：预训练、微调、持续预训练、蒸馏'],
 ['Define fine-tuning methods: instruction tuning, domain adaptation, transfer learning, continuous pre-training','定义微调方法：指令微调、领域适配、迁移学习、持续预训练'],
 ['Describe data preparation: curation, governance, size, labeling, representativeness, RLHF','描述微调数据准备：数据筛选、治理、规模、标注、代表性、RLHF']
],
en:`
<h3>Training methods compared</h3>
<div class="tw"><table><thead><tr><th>Method</th><th>Data needed</th><th>Weights</th><th>Purpose</th></tr></thead><tbody>
<tr><td>Pre-training</td><td>Huge unlabeled corpus (trillions of tokens), self-supervised</td><td>Learned from scratch</td><td>General language and world knowledge</td></tr>
<tr><td>Continued (continuous) pre-training</td><td>Large <b>unlabeled</b> domain text (medical papers, legal filings)</td><td>Updated</td><td>Domain vocabulary and knowledge</td></tr>
<tr><td>Fine-tuning (supervised)</td><td><b>Labeled</b> prompt → response pairs (hundreds to thousands)</td><td>Updated</td><td>A specific task, style or output format</td></tr>
<tr><td>Instruction tuning</td><td>Labeled instruction → response examples across many tasks</td><td>Updated</td><td>Follow instructions reliably</td></tr>
<tr><td>Domain adaptation</td><td>Domain-specific data (labeled or unlabeled)</td><td>Updated</td><td>Make a general model an expert in one field</td></tr>
<tr><td>Transfer learning</td><td>A pre-trained model + a smaller task dataset</td><td>Reused, then updated</td><td>Reuse learned knowledge on a new task; fine-tuning is the usual form</td></tr>
<tr><td>Distillation</td><td>Prompts + teacher-model responses</td><td>Student model trained</td><td>A smaller, faster, cheaper model</td></tr>
<tr><td>RLHF</td><td>Human preference rankings of responses</td><td>Updated</td><td>Align with human values: helpful, honest, harmless</td></tr>
</tbody></table></div>
<div class="box trap"><p><b>Continued pre-training uses UNLABELED data; fine-tuning uses LABELED data.</b> This distinction appears in many questions. In Amazon Bedrock both produce a private custom model that only your account can use.</p></div>
<div class="box note"><p><b>Parameter-efficient fine-tuning (PEFT)</b>, for example LoRA, trains a small set of extra weights instead of the whole model. It is much cheaper and is what many managed fine-tuning services use behind the scenes.</p></div>

<h3>Preparing data for fine-tuning</h3>
<div class="tw"><table><thead><tr><th>Step</th><th>What good looks like</th></tr></thead><tbody>
<tr><td>Curation</td><td>High-quality, relevant, deduplicated examples; errors and toxic content removed.</td></tr>
<tr><td>Governance</td><td>You have the rights and consent to use the data; PII removed or masked; lineage recorded.</td></tr>
<tr><td>Size</td><td>Enough examples to cover the task. Quality beats quantity: a few thousand clean pairs outperform a noisy million.</td></tr>
<tr><td>Labeling</td><td>Accurate, consistent labels with clear guidelines; measure agreement between labelers. <b>SageMaker Ground Truth</b> provides labeling workflows and workforces.</td></tr>
<tr><td>Representativeness</td><td>Covers the real users, languages, edge cases and groups the model will serve, which avoids bias.</td></tr>
<tr><td>Format</td><td>For Bedrock: JSONL files in S3 with prompt/completion (or conversation) records, plus a validation set.</td></tr>
</tbody></table></div>

<h3>Reinforcement learning from human feedback (RLHF)</h3>
<div class="flow"><span>1 Supervised fine-tuning on demonstrations</span><span>2 Humans rank several answers → train a reward model</span><span>3 Optimize the LLM with RL to maximize reward</span></div>
<p>RLHF is how chat models learn to prefer answers people find helpful and safe. The human rankings are the costly part; SageMaker Ground Truth can collect them.</p>
<div class="box rem"><ul>
<li>New domain vocabulary, lots of raw text → <b>continued pre-training</b>.</li>
<li>Specific task or format, labeled examples → <b>fine-tuning</b> / instruction tuning.</li>
<li>Match human preferences, tone, safety → <b>RLHF</b>.</li>
<li>Smaller and cheaper, same quality on one task → <b>distillation</b>.</li>
</ul></div>
`,
zh:`
<h3>训练方法对比</h3>
<div class="tw"><table><thead><tr><th>方法</th><th>所需数据</th><th>权重</th><th>目的</th></tr></thead><tbody>
<tr><td>预训练</td><td>海量无标签语料（数万亿 Token），自监督</td><td>从零学习</td><td>通用语言与世界知识</td></tr>
<tr><td>持续预训练</td><td>大量<b>无标签</b>领域文本（医学论文、法律文书）</td><td>更新</td><td>领域词汇与知识</td></tr>
<tr><td>微调（监督式）</td><td><b>有标签</b>的“提示 → 回答”对（数百到数千条）</td><td>更新</td><td>特定任务、风格或输出格式</td></tr>
<tr><td>指令微调</td><td>覆盖多种任务的有标签“指令 → 回答”示例</td><td>更新</td><td>可靠地遵循指令</td></tr>
<tr><td>领域适配</td><td>特定领域数据（有标签或无标签）</td><td>更新</td><td>把通用模型变成某领域专家</td></tr>
<tr><td>迁移学习</td><td>预训练模型 + 较小的任务数据集</td><td>复用后更新</td><td>把已学知识用于新任务；微调是最常见形式</td></tr>
<tr><td>蒸馏</td><td>提示 + 教师模型的回答</td><td>训练学生模型</td><td>更小、更快、更便宜的模型</td></tr>
<tr><td>RLHF</td><td>人类对多个回答的偏好排序</td><td>更新</td><td>对齐人类价值：有帮助、诚实、无害</td></tr>
</tbody></table></div>
<div class="box trap"><p><b>持续预训练用无标签数据；微调用有标签数据。</b>很多题目考这一区别。在 Amazon Bedrock 中，两者都会生成只有你的账户能用的私有定制模型。</p></div>
<div class="box note"><p><b>参数高效微调 (PEFT)</b>，例如 LoRA，只训练一小部分额外权重而不是整个模型，成本低得多，许多托管微调服务在底层都采用这种方式。</p></div>

<h3>为微调准备数据</h3>
<div class="tw"><table><thead><tr><th>步骤</th><th>好的标准</th></tr></thead><tbody>
<tr><td>数据筛选 (Curation)</td><td>高质量、相关、去重；去除错误和有害内容。</td></tr>
<tr><td>治理</td><td>拥有使用数据的权利与授权；PII 已删除或脱敏；记录数据血缘。</td></tr>
<tr><td>规模</td><td>示例足以覆盖任务。质量胜过数量：几千条干净样本胜过百万条噪声数据。</td></tr>
<tr><td>标注</td><td>标签准确一致，有清晰的标注指南；衡量标注员间一致性。<b>SageMaker Ground Truth</b> 提供标注工作流和标注人员。</td></tr>
<tr><td>代表性</td><td>覆盖模型将服务的真实用户、语言、边界情况和群体，避免偏见。</td></tr>
<tr><td>格式</td><td>Bedrock 要求：存放在 S3 中的 JSONL 文件，包含 prompt/completion（或对话）记录，另附验证集。</td></tr>
</tbody></table></div>

<h3>基于人类反馈的强化学习 (RLHF)</h3>
<div class="flow"><span>1 用示范数据做监督微调</span><span>2 人类对多个回答排序 → 训练奖励模型</span><span>3 用强化学习优化 LLM 以最大化奖励</span></div>
<p>聊天模型正是通过 RLHF 学会偏好人们认为有用且安全的回答。人工排序是成本最高的部分，可用 SageMaker Ground Truth 收集。</p>
<div class="box rem"><ul>
<li>新的领域词汇、大量原始文本 → <b>持续预训练</b>。</li>
<li>特定任务或格式、有标注示例 → <b>微调</b> / 指令微调。</li>
<li>符合人类偏好、语气、安全性 → <b>RLHF</b>。</li>
<li>更小更便宜、在单一任务上质量不变 → <b>蒸馏</b>。</li>
</ul></div>
`};

/* ===================== TASK 3.4 ===================== */
AIF.tasks['3.4'] = {d:'d3',
title:{en:'Describe methods to evaluate foundation model performance', zh:'描述评估基础模型性能的方法'},
obj:[
 ['Determine evaluation approaches: human-in-the-loop, benchmark datasets, Amazon Bedrock Model Evaluation','确定评估方法：人在回路评估、基准数据集、Amazon Bedrock 模型评估'],
 ['Identify metrics: ROUGE, BLEU, BERTScore, LLM-as-a-judge','识别评估指标：ROUGE、BLEU、BERTScore、LLM 作为评审'],
 ['Determine whether an FM meets business objectives: productivity, user engagement, task engineering','判断 FM 是否达成业务目标：生产力、用户参与度、任务设计'],
 ['Identify how to evaluate FM-based applications: RAG, agents, workflows','识别评估基于 FM 的应用的方法：RAG、智能体、工作流'],
 ['Identify business alignment metrics: task completion rate, user satisfaction, cost per interaction','识别业务目标对齐指标：任务完成率、用户满意度、每次交互成本']
],
en:`
<h3>Three ways to evaluate</h3>
<div class="tw"><table><thead><tr><th>Approach</th><th>How</th><th>Strengths and weaknesses</th></tr></thead><tbody>
<tr><td>Human-in-the-loop evaluation</td><td>Subject-matter experts or users rate answers for correctness, helpfulness, tone and style.</td><td>Best for subjective, nuanced quality; slow and expensive to scale.</td></tr>
<tr><td>Benchmark datasets</td><td>Standard test sets (MMLU, HELM, GLUE/SuperGLUE) or your own "golden" set of questions with reference answers.</td><td>Repeatable and comparable across models; public benchmarks may not match your task.</td></tr>
<tr><td>Amazon Bedrock Model Evaluation</td><td>Managed jobs: <b>automatic</b> (built-in or custom datasets; metrics such as accuracy, robustness, toxicity), <b>human</b> (your team or an AWS-managed team), <b>LLM-as-a-judge</b>, and <b>RAG evaluation</b> for Knowledge Bases.</td><td>Compare models and settings side by side without building tooling.</td></tr>
</tbody></table></div>

<h3>Metrics</h3>
<div class="tw"><table><thead><tr><th>Metric</th><th>What it measures</th><th>Typical use</th></tr></thead><tbody>
<tr><td>ROUGE (Recall-Oriented Understudy for Gisting Evaluation)</td><td>Overlap of words / n-grams between output and reference, focused on <b>recall</b>: how much of the reference is covered.</td><td><b>Summarization</b></td></tr>
<tr><td>BLEU (Bilingual Evaluation Understudy)</td><td>N-gram <b>precision</b> against reference translations, with a penalty for too-short outputs.</td><td><b>Machine translation</b></td></tr>
<tr><td>BERTScore</td><td>Semantic similarity using contextual embeddings, so paraphrases score well.</td><td>Any generation where meaning matters more than exact words</td></tr>
<tr><td>LLM-as-a-judge</td><td>A strong model scores responses against criteria (correctness, completeness, helpfulness, harmfulness).</td><td>Scalable approximation of human judgment</td></tr>
<tr><td>Perplexity</td><td>How well a language model predicts text; lower is better.</td><td>Comparing language models</td></tr>
<tr><td>Accuracy / F1 / exact match</td><td>Correct labels or exact answers.</td><td>Classification, extraction, short-answer Q&amp;A</td></tr>
</tbody></table></div>
<div class="box ex"><p><b>Reference:</b> "The meeting moved to Friday at 3 pm." <b>Model:</b> "Meeting rescheduled for Friday 3pm."</p>
<p>BLEU and ROUGE are low (few identical n-grams). BERTScore is high (same meaning). An LLM judge marks it correct. Pick the metric that matches what matters for the task.</p></div>
<div class="box rem"><p><b>R</b>OUGE = <b>R</b>ecall = summa<b>R</b>ization. BLEU = precision = translation (think "bilingual").</p></div>

<h3>Does it meet the business objective?</h3>
<p>Good benchmark scores are not the goal. Check whether the FM improves <b>productivity</b> (time saved per task, tasks per hour), <b>user engagement</b> (active users, repeat use, session length) and whether the <b>task is engineered well</b>: is the work split sensibly between model, tools and people?</p>

<h3>Evaluating applications, not just models</h3>
<div class="tw"><table><thead><tr><th>Application</th><th>What to measure</th></tr></thead><tbody>
<tr><td>RAG</td><td><b>Retrieval:</b> context relevance, context coverage (did we fetch the right chunks?). <b>Generation:</b> faithfulness / groundedness (is the answer supported by the chunks?), answer relevance, correctness, completeness, citation accuracy.</td></tr>
<tr><td>Agents</td><td>Task completion (goal success) rate, correct tool selection and parameters, number of steps, latency and cost per task, safety and policy adherence.</td></tr>
<tr><td>Workflows</td><td>End-to-end success rate, quality at each step, error and retry rates, total latency.</td></tr>
</tbody></table></div>

<h3>Business alignment metrics</h3>
<ul>
<li><b>Task completion rate</b>: share of user goals achieved without a human stepping in.</li>
<li><b>User satisfaction</b>: CSAT, thumbs up/down, NPS.</li>
<li><b>Cost per interaction</b>: tokens, tools and infrastructure divided by conversations.</li>
<li>Also deflection rate (tickets avoided), average handle time, conversion.</li>
</ul>
<div class="box trap"><p>A question about "whether the chatbot is delivering value to the business" wants business metrics (task completion, satisfaction, cost per interaction), not ROUGE or BLEU.</p></div>
`,
zh:`
<h3>三种评估方法</h3>
<div class="tw"><table><thead><tr><th>方法</th><th>做法</th><th>优缺点</th></tr></thead><tbody>
<tr><td>人在回路评估</td><td>领域专家或用户对答案的正确性、有用性、语气和风格打分。</td><td>最适合主观、细微的质量判断；速度慢、难以规模化、成本高。</td></tr>
<tr><td>基准数据集</td><td>标准测试集（MMLU、HELM、GLUE/SuperGLUE）或你自己带参考答案的“黄金”问题集。</td><td>可重复，能跨模型比较；公开基准可能与你的任务不符。</td></tr>
<tr><td>Amazon Bedrock 模型评估</td><td>托管的评估任务：<b>自动评估</b>（内置或自定义数据集；准确性、鲁棒性、毒性等指标）、<b>人工评估</b>（你的团队或 AWS 托管团队）、<b>LLM 作为评审</b>，以及针对知识库的 <b>RAG 评估</b>。</td><td>无需自建工具即可并排比较模型和参数。</td></tr>
</tbody></table></div>

<h3>评估指标</h3>
<div class="tw"><table><thead><tr><th>指标</th><th>衡量什么</th><th>典型用途</th></tr></thead><tbody>
<tr><td>ROUGE</td><td>输出与参考文本之间词语 / n-gram 的重合度，侧重<b>召回率</b>：覆盖了多少参考内容。</td><td><b>文本摘要</b></td></tr>
<tr><td>BLEU</td><td>相对参考译文的 n-gram <b>精确率</b>，对过短的输出有惩罚。</td><td><b>机器翻译</b></td></tr>
<tr><td>BERTScore</td><td>用上下文嵌入衡量语义相似度，意思相同的改写也能得高分。</td><td>重语义而非字面的生成任务</td></tr>
<tr><td>LLM 作为评审</td><td>由强模型按标准（正确性、完整性、有用性、有害性）给回答打分。</td><td>可规模化地近似人工判断</td></tr>
<tr><td>困惑度 (Perplexity)</td><td>语言模型预测文本的能力；越低越好。</td><td>比较语言模型</td></tr>
<tr><td>准确率 / F1 / 完全匹配</td><td>标签或答案是否完全正确。</td><td>分类、信息抽取、简答问答</td></tr>
</tbody></table></div>
<div class="box ex"><p><b>参考答案：</b>“会议改到周五下午 3 点。” <b>模型输出：</b>“会议改期至周五 15:00。”</p>
<p>BLEU 和 ROUGE 较低（相同 n-gram 很少），BERTScore 很高（意思相同），LLM 评审判为正确。要选与任务真正关心的内容相匹配的指标。</p></div>
<div class="box rem"><p><b>R</b>OUGE = <b>R</b>ecall（召回）= 摘要 (summa<b>R</b>ization)。BLEU = 精确率 = 翻译（记住“Bilingual 双语”）。</p></div>

<h3>是否达成业务目标？</h3>
<p>基准分数高不是目的。要看 FM 是否提升了<b>生产力</b>（每项任务节省的时间、每小时完成的任务数）、<b>用户参与度</b>（活跃用户、重复使用、会话时长），以及<b>任务设计</b>是否合理：模型、工具和人之间的分工是否恰当？</p>

<h3>评估应用，而不仅是模型</h3>
<div class="tw"><table><thead><tr><th>应用</th><th>衡量什么</th></tr></thead><tbody>
<tr><td>RAG</td><td><b>检索：</b>上下文相关性、上下文覆盖度（取到正确的块了吗？）。<b>生成：</b>忠实度 / 有据性（答案是否有检索内容支撑？）、答案相关性、正确性、完整性、引用准确性。</td></tr>
<tr><td>智能体</td><td>任务完成率（目标达成率）、工具选择与参数是否正确、步骤数、每项任务的延迟和成本、安全与策略遵守情况。</td></tr>
<tr><td>工作流</td><td>端到端成功率、每一步的质量、错误与重试率、总延迟。</td></tr>
</tbody></table></div>

<h3>业务对齐指标</h3>
<ul>
<li><b>任务完成率</b>：无需人工介入即达成用户目标的比例。</li>
<li><b>用户满意度</b>：CSAT、点赞/点踩、NPS。</li>
<li><b>每次交互成本</b>：Token、工具和基础设施费用除以对话数。</li>
<li>还有分流率（避免的工单数）、平均处理时长、转化率。</li>
</ul>
<div class="box trap"><p>题目问“聊天机器人是否为业务创造价值”，要的是业务指标（任务完成率、满意度、每次交互成本），而不是 ROUGE 或 BLEU。</p></div>
`};
