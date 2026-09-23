AIF.domains.push({id:'d2', n:2, w:24, q:12,
  title:{en:'Fundamentals of Generative AI', zh:'生成式 AI 基础'},
  tasks:['2.1','2.2','2.3']});

/* ===================== TASK 2.1 ===================== */
AIF.tasks['2.1'] = {d:'d2',
title:{en:'Explain the basic concepts of generative AI', zh:'解释生成式 AI 的基本概念'},
obj:[
 ['Define tokens, chunking, embeddings, vectors, prompt engineering, transformer LLMs, FMs, multimodal and diffusion models','定义 Token、分块、嵌入、向量、提示工程、基于 Transformer 的 LLM、基础模型、多模态模型、扩散模型'],
 ['Identify GenAI use cases: image/video/audio generation, summarization, assistants, translation, code, customer service agents, search, recommendation','识别生成式 AI 用例：图像/视频/音频生成、摘要、AI 助手、翻译、代码生成、客服智能体、搜索、推荐引擎'],
 ['Describe the FM lifecycle: data selection, model selection, pre-training, fine-tuning, evaluation, deployment, feedback','描述基础模型生命周期：数据选择、模型选择、预训练、微调、评估、部署、反馈'],
 ['Describe token-based pricing and its effect on inference cost and performance','描述基于 Token 的计费模式及其对推理成本和性能的影响'],
 ['Describe the role of context engineering in FM applications','描述上下文工程在基础模型应用中的作用'],
 ['Define agentic AI concepts: multi-agent patterns, MCP, agent communication, memory, tool use, workflow orchestration','定义智能体 AI 概念：多智能体模式、MCP、智能体通信模式、记忆管理、工具使用、工作流编排']
],
en:`
<h3>From text to vectors</h3>
<div class="flow"><span>Document</span><span>Chunks</span><span>Tokens</span><span>Embedding model</span><span>Vectors</span><span>Vector store</span><span>Similarity search</span></div>
<div class="tw"><table><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody>
<tr><td>Token</td><td>The unit of text a model reads and writes: a word or part of a word. Rule of thumb: <b>1 token ≈ 4 characters ≈ 0.75 English words</b>. Models are priced and limited in tokens.</td></tr>
<tr><td>Chunking</td><td>Splitting long documents into smaller passages (e.g. 300–500 tokens, with some overlap) before embedding them for RAG. Too large dilutes meaning; too small loses context.</td></tr>
<tr><td>Embedding</td><td>A list of numbers that represents the <b>meaning</b> of text, an image or audio. Similar meanings produce nearby embeddings. Created by embedding models such as Amazon Titan Text Embeddings, Nova multimodal embeddings or Cohere Embed.</td></tr>
<tr><td>Vector</td><td>The array of numbers itself (e.g. 1,024 dimensions). Closeness is measured with cosine similarity or distance.</td></tr>
<tr><td>Prompt engineering</td><td>Designing the input text to steer a model toward the output you want (Task 3.2).</td></tr>
</tbody></table></div>
<div class="box ex"><p><b>Keyword vs semantic search.</b> A user types "laptop won't turn on". Keyword search misses the article "Notebook fails to power up" because no words match. Semantic search compares embeddings and finds it, because the meanings are close.</p>
<p><b>Sizing:</b> a 40-page HR handbook ≈ 20,000 words ≈ 27,000 tokens. With 500-token chunks that is about 54 chunks, so 54 vectors in the store.</p></div>

<h3>Model families</h3>
<div class="tw"><table><thead><tr><th>Family</th><th>How it works</th><th>Examples</th></tr></thead><tbody>
<tr><td>Transformer-based LLM</td><td><b>Self-attention</b> weighs every token against every other token in parallel, capturing context. Generates text one token at a time.</td><td>Anthropic Claude, Amazon Nova Pro, Meta Llama</td></tr>
<tr><td>Foundation model (FM)</td><td>A very large model pre-trained on broad data that can be adapted to many tasks without training from scratch.</td><td>Any model in Amazon Bedrock</td></tr>
<tr><td>Multimodal model</td><td>Takes in or produces more than one kind of data: text, image, audio, video.</td><td>Nova Lite/Pro (understand images and video), Claude (reads images)</td></tr>
<tr><td>Diffusion model</td><td>Trained to remove noise step by step; generates images (or video) by starting from random noise guided by a text prompt.</td><td>Stable Diffusion, Amazon Nova Canvas</td></tr>
</tbody></table></div>

<h3>What GenAI is used for</h3>
<ul>
<li>Image, video and audio generation (marketing visuals, product videos, voice-overs)</li>
<li>Summarization of documents, meetings and calls</li>
<li>AI assistants and chatbots</li>
<li>Translation and localization</li>
<li>Code generation and explanation</li>
<li>Customer service agents that answer and act</li>
<li>Search (semantic, conversational) and recommendation engines</li>
</ul>

<h3>The foundation model lifecycle</h3>
<div class="flow loop"><span>Data selection</span><span>Model selection</span><span>Pre-training</span><span>Fine-tuning</span><span>Evaluation</span><span>Deployment</span><span>Feedback ↺</span></div>
<p><b>Pre-training</b> is by far the most expensive stage: trillions of tokens, thousands of accelerators, weeks to months. Most companies start at <b>model selection</b> and pick an existing FM, then adapt it with prompting, RAG or fine-tuning. Feedback from users (ratings, corrections) feeds the next round of improvements.</p>

<h3>Token-based pricing</h3>
<p>Bedrock on-demand pricing charges separately for <b>input tokens</b> (your prompt, context, history) and <b>output tokens</b> (the answer). Output tokens usually cost several times more than input tokens.</p>
<ul>
<li>Longer prompts cost more <b>and</b> increase latency (time to first token).</li>
<li>Longer outputs cost more and take longer, because tokens are generated one after another.</li>
<li>Bigger models cost more per token and are usually slower.</li>
</ul>
<div class="box ex"><p><b>Support assistant, 10,000 chats a day</b> (illustrative prices: $0.003 per 1K input tokens, $0.015 per 1K output tokens).</p>
<p><b>Before:</b> 2,000 input + 400 output tokens each → input 20M tokens = $60, output 4M tokens = $60 → <b>$120/day</b>.</p>
<p><b>After</b> trimming chat history, retrieving only the top 3 chunks and capping max tokens: 800 input + 250 output → input 8M = $24, output 2.5M = $37.50 → <b>$61.50/day</b>, about half.</p></div>
<div class="box rem"><p>Cost levers: shorter prompts, fewer and better retrieved chunks, a max-tokens limit, <b>prompt caching</b> for repeated prefixes, a smaller or distilled model, and <b>batch inference</b> for non-urgent work.</p></div>

<h3>Context engineering</h3>
<div class="box def"><p><b>Context engineering</b> is deciding what goes into the model's context window on each call, and in what order and amount: system instructions, retrieved documents, conversation history, tool definitions and tool results, and memory. Prompt engineering is about wording the request; context engineering manages everything around it.</p></div>
<ul>
<li>The <b>context window</b> is the maximum number of tokens (input + output) a model can handle per request. Overflowing it truncates content or fails the request.</li>
<li>More context is not always better: irrelevant text raises cost and latency and can distract the model. Key facts buried in the middle of long contexts are more likely to be missed.</li>
<li>Techniques: retrieve only relevant chunks (RAG), summarize or trim old turns, put stable instructions first and cache them, filter tool output, load long-term memory only when relevant.</li>
</ul>

<h3>Agentic AI foundations</h3>
<div class="tw"><table><thead><tr><th>Component</th><th>Role</th></tr></thead><tbody>
<tr><td>Model (reasoning)</td><td>Understands the goal, decides the next step. A common loop is <b>ReAct</b>: reason → act (call a tool) → observe the result → repeat.</td></tr>
<tr><td>Tools</td><td>Functions the agent can call: APIs, Lambda functions, database queries, code execution, web browsing.</td></tr>
<tr><td>Memory</td><td><b>Short-term:</b> the current conversation held in the context window. <b>Long-term:</b> facts and preferences persisted across sessions in a store (e.g. AgentCore Memory).</td></tr>
<tr><td>Planning / orchestration</td><td>Breaks a goal into steps and decides their order.</td></tr>
<tr><td>Reflection</td><td>The agent checks its own output and corrects mistakes before finishing.</td></tr>
</tbody></table></div>

<h4>Model Context Protocol (MCP)</h4>
<div class="box def"><p><b>MCP</b> is an open standard (introduced by Anthropic in 2024) for connecting AI applications and agents to external tools and data. An <b>MCP server</b> wraps a system (a ticketing tool, a database, GitHub) and exposes its <b>tools</b>, <b>resources</b> and <b>prompts</b>. An <b>MCP client</b> inside the agent's host application discovers and calls them. Build the connector once; any MCP-compatible agent can use it.</p></div>
<div class="box ex"><p>A support agent is connected to two MCP servers: one for the ticketing system and one for the knowledge base. It reads ticket #4821, searches the knowledge base for the error code, posts the fix as a reply and sets the ticket to "Resolved", without custom integration code for each system. Amazon Bedrock AgentCore Gateway can turn existing APIs and Lambda functions into MCP tools.</p></div>

<h4>Multi-agent patterns</h4>
<div class="tw"><table><thead><tr><th>Pattern</th><th>How it works</th><th>Good for</th></tr></thead><tbody>
<tr><td>Single agent</td><td>One agent with a set of tools.</td><td>Simple, well-bounded tasks.</td></tr>
<tr><td>Supervisor / orchestrator (hierarchical)</td><td>A lead agent splits the goal, delegates to specialist agents and combines their results.</td><td>Complex tasks needing different expertise (Bedrock multi-agent collaboration).</td></tr>
<tr><td>Sequential (pipeline)</td><td>Agent A's output feeds agent B, then C.</td><td>Fixed stages: research → draft → review.</td></tr>
<tr><td>Parallel</td><td>Several agents work on independent sub-tasks at once; results are merged.</td><td>Speed: analyze five documents simultaneously.</td></tr>
<tr><td>Swarm / peer-to-peer</td><td>Agents hand work to each other directly, with no central controller.</td><td>Open-ended exploration and brainstorming.</td></tr>
</tbody></table></div>
<p><b>Communication:</b> agents exchange messages through an orchestrator, share state or memory, or talk directly using agent-to-agent protocols (such as A2A).</p>
<p><b>Workflow orchestration:</b> a <b>deterministic workflow</b> runs fixed steps in a fixed order (Amazon Bedrock Flows, AWS Step Functions), which is predictable and easy to audit. An <b>agent-driven</b> flow lets the model choose the next step, which is flexible but less predictable. Pick the workflow when the process is known and must be auditable.</p>
<div class="box note"><p><b>Strands Agents</b> is AWS's open-source SDK for building agents in a few lines of code (model-driven; supports MCP and multi-agent patterns). <b>Amazon Bedrock AgentCore</b> runs agents from any framework securely at scale: Runtime, Memory, Gateway, Identity, Policy, Observability, Browser and Code Interpreter.</p></div>
`,
zh:`
<h3>从文本到向量</h3>
<div class="flow"><span>文档</span><span>分块</span><span>Token</span><span>嵌入模型</span><span>向量</span><span>向量库</span><span>相似度搜索</span></div>
<div class="tw"><table><thead><tr><th>术语</th><th>含义</th></tr></thead><tbody>
<tr><td>Token（词元）</td><td>模型读写文本的基本单位：一个词或词的一部分。经验值：<b>1 个 Token ≈ 4 个字符 ≈ 0.75 个英文单词</b>。模型按 Token 计费，也按 Token 限制长度。</td></tr>
<tr><td>分块 (Chunking)</td><td>在为 RAG 生成嵌入前，把长文档切成较小的段落（如 300–500 个 Token，带部分重叠）。块太大会稀释语义，太小会丢失上下文。</td></tr>
<tr><td>嵌入 (Embedding)</td><td>表示文本、图像或音频<b>语义</b>的一组数字。含义相近，嵌入就相近。由嵌入模型生成，如 Amazon Titan Text Embeddings、Nova 多模态嵌入、Cohere Embed。</td></tr>
<tr><td>向量 (Vector)</td><td>那一串数字本身（例如 1,024 维）。用余弦相似度或距离衡量远近。</td></tr>
<tr><td>提示工程</td><td>设计输入文本，引导模型给出期望的输出（见任务 3.2）。</td></tr>
</tbody></table></div>
<div class="box ex"><p><b>关键词搜索 vs 语义搜索。</b>用户输入“笔记本开不了机”。关键词搜索找不到文章《电脑无法通电启动》，因为字面不匹配；语义搜索比较嵌入向量，因含义相近而能找到。</p>
<p><b>规模估算：</b>40 页的员工手册 ≈ 2 万英文单词 ≈ 2.7 万个 Token。按 500 Token 一块，约 54 块，即向量库中有 54 个向量。</p></div>

<h3>模型家族</h3>
<div class="tw"><table><thead><tr><th>类型</th><th>原理</th><th>例子</th></tr></thead><tbody>
<tr><td>基于 Transformer 的 LLM</td><td><b>自注意力机制</b>并行地衡量每个 Token 与其他所有 Token 的关系，从而理解上下文；逐个 Token 生成文本。</td><td>Anthropic Claude、Amazon Nova Pro、Meta Llama</td></tr>
<tr><td>基础模型 (FM)</td><td>在广泛数据上预训练的超大模型，无需从头训练即可适配多种任务。</td><td>Amazon Bedrock 中的各类模型</td></tr>
<tr><td>多模态模型</td><td>输入或输出不止一种数据：文本、图像、音频、视频。</td><td>Nova Lite/Pro（理解图像和视频）、Claude（可读图）</td></tr>
<tr><td>扩散模型</td><td>学习逐步去除噪声；从随机噪声出发、在文本提示引导下生成图像（或视频）。</td><td>Stable Diffusion、Amazon Nova Canvas</td></tr>
</tbody></table></div>

<h3>生成式 AI 的用途</h3>
<ul>
<li>图像、视频、音频生成（营销素材、产品视频、配音）</li>
<li>文档、会议、通话摘要</li>
<li>AI 助手与聊天机器人</li>
<li>翻译与本地化</li>
<li>代码生成与解释</li>
<li>能回答问题并执行操作的客服智能体</li>
<li>搜索（语义、对话式）与推荐引擎</li>
</ul>

<h3>基础模型生命周期</h3>
<div class="flow loop"><span>数据选择</span><span>模型选择</span><span>预训练</span><span>微调</span><span>评估</span><span>部署</span><span>反馈 ↺</span></div>
<p><b>预训练</b>是成本最高的阶段：数万亿 Token、数千块加速卡、数周到数月。大多数公司从<b>模型选择</b>开始，选用现成的 FM，再通过提示词、RAG 或微调来适配。用户反馈（评分、纠错）用于下一轮改进。</p>

<h3>基于 Token 的计费</h3>
<p>Bedrock 按需计费分别对<b>输入 Token</b>（提示词、上下文、历史）和<b>输出 Token</b>（回答）收费，输出 Token 通常比输入贵好几倍。</p>
<ul>
<li>提示越长，成本越高，延迟（首 Token 时间）也越长。</li>
<li>输出越长，成本越高、耗时越久，因为 Token 是逐个生成的。</li>
<li>模型越大，单价越高，通常也越慢。</li>
</ul>
<div class="box ex"><p><b>客服助手，每天 1 万次对话</b>（示例价格：输入每千 Token 0.003 美元，输出每千 Token 0.015 美元）。</p>
<p><b>优化前：</b>每次 2,000 输入 + 400 输出 → 输入 2,000 万 Token = 60 美元，输出 400 万 Token = 60 美元 → <b>每天 120 美元</b>。</p>
<p><b>优化后</b>（精简聊天历史、只检索前 3 个块、限制最大 Token）：800 输入 + 250 输出 → 输入 800 万 = 24 美元，输出 250 万 = 37.5 美元 → <b>每天 61.5 美元</b>，约减半。</p></div>
<div class="box rem"><p>降本手段：更短的提示、更少更准的检索块、设置最大 Token、对重复前缀使用<b>提示缓存</b>、换更小或蒸馏过的模型、非紧急任务用<b>批量推理</b>。</p></div>

<h3>上下文工程</h3>
<div class="box def"><p><b>上下文工程 (Context engineering)</b> 指决定每次调用时放进模型上下文窗口的内容、顺序和数量：系统指令、检索到的文档、对话历史、工具定义与工具结果、记忆。提示工程关注“怎么措辞”，上下文工程管理措辞之外的一切。</p></div>
<ul>
<li><b>上下文窗口</b>是模型单次请求能处理的最大 Token 数（输入 + 输出）。超出会被截断或请求失败。</li>
<li>上下文不是越多越好：无关内容增加成本和延迟，还会分散模型注意力；埋在长上下文中间的关键信息更容易被忽略。</li>
<li>做法：只检索相关块 (RAG)、摘要或裁剪旧对话、把稳定指令放前面并缓存、过滤工具输出、只在相关时加载长期记忆。</li>
</ul>

<h3>智能体 AI 基础</h3>
<div class="tw"><table><thead><tr><th>组成</th><th>作用</th></tr></thead><tbody>
<tr><td>模型（推理）</td><td>理解目标，决定下一步。常见循环是 <b>ReAct</b>：推理 → 行动（调用工具）→ 观察结果 → 重复。</td></tr>
<tr><td>工具</td><td>智能体可调用的函数：API、Lambda 函数、数据库查询、代码执行、网页浏览。</td></tr>
<tr><td>记忆</td><td><b>短期：</b>当前对话，保存在上下文窗口中。<b>长期：</b>跨会话持久保存的事实和偏好（如 AgentCore Memory）。</td></tr>
<tr><td>规划 / 编排</td><td>把目标拆成步骤并决定顺序。</td></tr>
<tr><td>反思</td><td>完成前检查自己的输出并纠错。</td></tr>
</tbody></table></div>

<h4>模型上下文协议 (MCP)</h4>
<div class="box def"><p><b>MCP</b> 是一个开放标准（Anthropic 于 2024 年推出），用于把 AI 应用和智能体连接到外部工具与数据。<b>MCP 服务器</b>封装某个系统（工单系统、数据库、GitHub），对外暴露<b>工具</b>、<b>资源</b>和<b>提示模板</b>；智能体宿主应用中的 <b>MCP 客户端</b>负责发现并调用它们。连接器只需构建一次，任何兼容 MCP 的智能体都能使用。</p></div>
<div class="box ex"><p>客服智能体连接两个 MCP 服务器：工单系统和知识库。它读取 4821 号工单，在知识库中搜索错误码，把解决方法回复给用户并把工单状态设为“已解决”，无需为每个系统单独写集成代码。Amazon Bedrock AgentCore Gateway 可以把现有 API 和 Lambda 函数转换为 MCP 工具。</p></div>

<h4>多智能体模式</h4>
<div class="tw"><table><thead><tr><th>模式</th><th>工作方式</th><th>适用</th></tr></thead><tbody>
<tr><td>单智能体</td><td>一个智能体配一组工具。</td><td>简单、边界清晰的任务。</td></tr>
<tr><td>主管 / 编排者（层级式）</td><td>主智能体拆分目标，分派给专业智能体，再汇总结果。</td><td>需要多种专长的复杂任务（Bedrock 多智能体协作）。</td></tr>
<tr><td>顺序式（流水线）</td><td>智能体 A 的输出交给 B，再交给 C。</td><td>固定阶段：调研 → 起草 → 审核。</td></tr>
<tr><td>并行式</td><td>多个智能体同时处理互不依赖的子任务，最后合并。</td><td>提速：同时分析五份文档。</td></tr>
<tr><td>蜂群 / 点对点</td><td>智能体之间直接交接工作，没有中央控制者。</td><td>开放式探索与头脑风暴。</td></tr>
</tbody></table></div>
<p><b>通信方式：</b>通过编排者传递消息、共享状态或记忆，或使用智能体间协议（如 A2A）直接对话。</p>
<p><b>工作流编排：</b><b>确定性工作流</b>按固定顺序执行固定步骤（Amazon Bedrock Flows、AWS Step Functions），可预测、易审计；<b>智能体驱动</b>的流程由模型决定下一步，灵活但不易预测。流程已知且必须可审计时，选工作流。</p>
<div class="box note"><p><b>Strands Agents</b> 是 AWS 的开源 SDK，几行代码即可构建智能体（模型驱动，支持 MCP 和多智能体模式）。<b>Amazon Bedrock AgentCore</b> 可安全、大规模地运行任何框架构建的智能体：Runtime、Memory、Gateway、Identity、Policy、Observability、Browser、Code Interpreter。</p></div>
`};

/* ===================== TASK 2.2 ===================== */
AIF.tasks['2.2'] = {d:'d2',
title:{en:'Understand the capabilities and limitations of GenAI for business problems', zh:'理解生成式 AI 解决业务问题的能力与局限'},
obj:[
 ['Describe GenAI advantages: adaptability, responsiveness, conversational ability, content generation','描述生成式 AI 的优势：适应性、响应速度、对话能力、内容生成能力'],
 ['Identify disadvantages: hallucinations, interpretability, inaccuracy, nondeterminism','识别劣势：幻觉、可解释性差、不准确、非确定性'],
 ['Identify model selection factors: type, performance, capabilities, constraints, compliance, cost, latency, complexity','识别选择模型的因素：模型类型、性能要求、能力、约束、合规、成本、延迟、模型复杂度'],
 ['Determine business value and metrics: cross-domain performance, ROI, efficiency, conversion rate, ARPU, accuracy, customer lifetime value','确定业务价值与指标：跨领域表现、ROI、效率、转化率、每用户平均收入、准确度、客户终身价值']
],
en:`
<h3>Advantages</h3>
<div class="tw"><table><thead><tr><th>Advantage</th><th>What it means in practice</th></tr></thead><tbody>
<tr><td>Adaptability</td><td>One model handles many tasks (summarize, classify, draft, translate) just by changing the prompt.</td></tr>
<tr><td>Responsiveness</td><td>Answers in seconds, around the clock, at any scale.</td></tr>
<tr><td>Conversational capability</td><td>People use natural language instead of forms or query languages.</td></tr>
<tr><td>Content generation</td><td>Creates text, images, code and audio on demand.</td></tr>
<tr><td>Low barrier to start</td><td>No training data or ML team needed to build a first version.</td></tr>
</tbody></table></div>

<h3>Disadvantages and how to reduce them</h3>
<div class="tw"><table><thead><tr><th>Limitation</th><th>What happens</th><th>Mitigation</th></tr></thead><tbody>
<tr><td>Hallucination</td><td>Confident, fluent, but false statements or made-up sources.</td><td>RAG with citations, Guardrails contextual grounding check, human review</td></tr>
<tr><td>Interpretability</td><td>Hard to explain <i>why</i> the model produced an answer.</td><td>Show sources and reasoning; use an interpretable traditional model when regulation demands it</td></tr>
<tr><td>Inaccuracy</td><td>Outdated knowledge (training cut-off), weak arithmetic, domain errors.</td><td>RAG for current data, tools for calculations, evaluation on your own test set</td></tr>
<tr><td>Nondeterminism</td><td>The same prompt can give different answers.</td><td>Lower temperature, structured output formats, prompt templates</td></tr>
<tr><td>Other risks</td><td>Cost and latency at scale, bias, IP and privacy concerns, prompt injection.</td><td>Right-size the model, Guardrails, governance (Domains 4–5)</td></tr>
</tbody></table></div>
<div class="box trap"><p>Lowering temperature makes output more consistent; it does <b>not</b> make it more factual. For hallucinations, the answer is grounding (RAG, contextual grounding checks), not temperature.</p></div>

<h3>Factors when selecting a model</h3>
<div class="tw"><table><thead><tr><th>Factor</th><th>Questions to ask</th></tr></thead><tbody>
<tr><td>Model type / modality</td><td>Text, image, embedding or multimodal? Does it need to read images or produce audio?</td></tr>
<tr><td>Performance requirements</td><td>How accurate must it be on <i>your</i> task? Test with your own data, not just public benchmarks.</td></tr>
<tr><td>Capabilities</td><td>Context window size, languages, tool use, reasoning, structured output.</td></tr>
<tr><td>Constraints</td><td>Throughput, rate limits, region availability, customization support.</td></tr>
<tr><td>Compliance</td><td>Data residency, licensing terms, industry rules, model documentation.</td></tr>
<tr><td>Cost</td><td>Price per input/output token or hosting cost at expected volume.</td></tr>
<tr><td>Latency</td><td>Time to first token and total response time for the use case.</td></tr>
<tr><td>Model complexity / size</td><td>Bigger is more capable but slower and pricier. Is a small model enough?</td></tr>
</tbody></table></div>
<div class="box rem"><p>Start with the <b>smallest, cheapest model that passes your quality test</b>. Only move up when evaluation shows you must.</p></div>

<h3>Business value and metrics</h3>
<div class="tw"><table><thead><tr><th>Metric</th><th>Example for a GenAI app</th></tr></thead><tbody>
<tr><td>ROI</td><td>Savings and new revenue compared to build and run costs.</td></tr>
<tr><td>Efficiency</td><td>Average handle time down from 9 to 6 minutes; documents processed per hour.</td></tr>
<tr><td>Conversion rate</td><td>Share of shoppers who buy after using an AI shopping assistant.</td></tr>
<tr><td>Average revenue per user (ARPU)</td><td>Revenue per user rises thanks to personalized recommendations.</td></tr>
<tr><td>Customer lifetime value (CLV)</td><td>Total expected revenue from a customer increases as retention improves.</td></tr>
<tr><td>Accuracy</td><td>Share of answers judged correct against a reference set.</td></tr>
<tr><td>Cross-domain performance</td><td>How well one model works across departments and task types, avoiding one model per task.</td></tr>
</tbody></table></div>
`,
zh:`
<h3>优势</h3>
<div class="tw"><table><thead><tr><th>优势</th><th>实际含义</th></tr></thead><tbody>
<tr><td>适应性</td><td>只需改提示词，一个模型就能完成多种任务（摘要、分类、起草、翻译）。</td></tr>
<tr><td>响应速度</td><td>数秒内作答，全天候，任意规模。</td></tr>
<tr><td>对话能力</td><td>用户用自然语言交互，无需表单或查询语言。</td></tr>
<tr><td>内容生成</td><td>按需生成文本、图像、代码和音频。</td></tr>
<tr><td>上手门槛低</td><td>做第一个版本无需训练数据或 ML 团队。</td></tr>
</tbody></table></div>

<h3>劣势及缓解方法</h3>
<div class="tw"><table><thead><tr><th>局限</th><th>表现</th><th>缓解方法</th></tr></thead><tbody>
<tr><td>幻觉</td><td>自信流畅但错误的陈述，或编造来源。</td><td>带引用的 RAG、护栏上下文依据检查、人工复核</td></tr>
<tr><td>可解释性差</td><td>难以说明模型<i>为什么</i>给出某个答案。</td><td>展示来源和推理过程；监管要求时改用可解释的传统模型</td></tr>
<tr><td>不准确</td><td>知识过时（训练截止日期）、算术弱、领域错误。</td><td>用 RAG 引入最新数据、用工具做计算、用自有测试集评估</td></tr>
<tr><td>非确定性</td><td>同一提示可能得到不同答案。</td><td>调低温度、结构化输出格式、提示模板</td></tr>
<tr><td>其他风险</td><td>大规模时的成本与延迟、偏见、知识产权与隐私问题、提示注入。</td><td>选择合适规模的模型、护栏、治理（领域 4–5）</td></tr>
</tbody></table></div>
<div class="box trap"><p>调低温度让输出更一致，但<b>不会</b>让它更真实。解决幻觉要靠依据增强（RAG、上下文依据检查），而不是温度。</p></div>

<h3>选择模型时考虑的因素</h3>
<div class="tw"><table><thead><tr><th>因素</th><th>要问的问题</th></tr></thead><tbody>
<tr><td>模型类型 / 模态</td><td>文本、图像、嵌入还是多模态？需要看图或输出音频吗？</td></tr>
<tr><td>性能要求</td><td>在<i>你的</i>任务上需要多准确？用自己的数据测试，别只看公开基准。</td></tr>
<tr><td>能力</td><td>上下文窗口大小、支持语言、工具调用、推理、结构化输出。</td></tr>
<tr><td>约束</td><td>吞吐量、速率限制、区域可用性、是否支持定制。</td></tr>
<tr><td>合规</td><td>数据驻留、许可条款、行业法规、模型文档。</td></tr>
<tr><td>成本</td><td>预计调用量下每输入/输出 Token 的价格或托管成本。</td></tr>
<tr><td>延迟</td><td>该场景下首 Token 时间和总响应时间。</td></tr>
<tr><td>模型复杂度 / 规模</td><td>越大能力越强，但更慢更贵。小模型够用吗？</td></tr>
</tbody></table></div>
<div class="box rem"><p>先选<b>能通过质量测试的最小、最便宜的模型</b>。只有评估结果证明必须时才升级。</p></div>

<h3>业务价值与指标</h3>
<div class="tw"><table><thead><tr><th>指标</th><th>生成式 AI 应用示例</th></tr></thead><tbody>
<tr><td>投资回报率 (ROI)</td><td>节省的成本和新增收入对比建设与运行成本。</td></tr>
<tr><td>效率</td><td>平均处理时长从 9 分钟降到 6 分钟；每小时处理的文档数。</td></tr>
<tr><td>转化率</td><td>使用 AI 导购助手后下单的顾客比例。</td></tr>
<tr><td>每用户平均收入 (ARPU)</td><td>个性化推荐带来的人均收入提升。</td></tr>
<tr><td>客户终身价值 (CLV)</td><td>留存率提升后，单个客户预期总收入增加。</td></tr>
<tr><td>准确度</td><td>对照参考答案集被判定正确的回答比例。</td></tr>
<tr><td>跨领域表现</td><td>同一模型在不同部门、不同任务类型上的表现，避免一任务一模型。</td></tr>
</tbody></table></div>
`};

/* ===================== TASK 2.3 ===================== */
AIF.tasks['2.3'] = {d:'d2',
title:{en:'Describe AWS infrastructure and technologies for building GenAI applications', zh:'描述用于构建生成式 AI 应用的 AWS 基础设施与技术'},
obj:[
 ['Identify AWS services to build GenAI apps: Bedrock, SageMaker AI, SageMaker JumpStart, Amazon Quick, Kiro, Strands Agents, Bedrock AgentCore','识别构建生成式 AI 应用的 AWS 服务：Bedrock、SageMaker AI、SageMaker JumpStart、Amazon Quick、Kiro、Strands Agents、Bedrock AgentCore'],
 ['Describe advantages of AWS GenAI services: accessibility, lower barrier, efficiency, cost-effectiveness, speed to market, business objectives','描述 AWS 生成式 AI 服务的优势：易用性、低门槛、效率、成本效益、上市速度、满足业务目标'],
 ['Describe benefits of AWS infrastructure: security, compliance, responsibility, safety','描述 AWS 基础设施的好处：安全、合规、责任、安全保障'],
 ['Describe cost tradeoffs: responsiveness, availability, redundancy, performance, regional coverage, token pricing, provisioned throughput, custom models','描述成本权衡：响应性、可用性、冗余、性能、区域覆盖、Token 计费、预置吞吐量、自定义模型']
],
en:`
<h3>The AWS generative AI stack</h3>
<div class="tw"><table><thead><tr><th>Layer</th><th>Who uses it</th><th>Services</th></tr></thead><tbody>
<tr><td>Applications (use AI)</td><td>Business users and developers who want ready-made AI</td><td><b>Amazon Quick</b> (business agents, research, BI), <b>Amazon Q Developer</b>, <b>Kiro</b> (agentic IDE), <b>AWS Transform</b> (modernization)</td></tr>
<tr><td>Tools to build with models</td><td>Application builders</td><td><b>Amazon Bedrock</b> and its features (Knowledge Bases, Agents, Guardrails, Model Evaluation, Prompt Management, Flows, Data Automation), <b>Bedrock AgentCore</b>, <b>Strands Agents</b>, <b>SageMaker JumpStart</b></td></tr>
<tr><td>Infrastructure (build, train, host)</td><td>ML engineers and model builders</td><td><b>SageMaker AI</b> (training, HyperPod clusters, endpoints), <b>Amazon EC2</b> GPU and accelerator instances, <b>AWS Trainium</b> (training chips), <b>AWS Inferentia</b> (inference chips), <b>Amazon S3</b></td></tr>
</tbody></table></div>

<h3>Bedrock vs SageMaker AI vs JumpStart</h3>
<div class="tw"><table><thead><tr><th></th><th>Amazon Bedrock</th><th>Amazon SageMaker AI</th><th>SageMaker JumpStart</th></tr></thead><tbody>
<tr><td>What it is</td><td>Serverless API to many FMs (Anthropic, Amazon Nova, Meta, Mistral, Cohere, AI21, Stability AI, DeepSeek and others)</td><td>Full platform to build, train and deploy any ML model</td><td>Hub of pre-trained open models and solution templates inside SageMaker</td></tr>
<tr><td>Infrastructure</td><td>None to manage</td><td>You choose instances and scaling</td><td>Deploys to SageMaker endpoints you manage</td></tr>
<tr><td>Customization</td><td>Fine-tuning, continued pre-training, distillation, custom model import</td><td>Anything: your own code and algorithms</td><td>One-click fine-tuning and deployment of hub models</td></tr>
<tr><td>Pick it when</td><td>You want GenAI features fast with no ML ops</td><td>You need full control or a custom/traditional model</td><td>You want an open-source model on your own endpoint quickly</td></tr>
</tbody></table></div>

<h3>Why build GenAI on AWS managed services</h3>
<ul>
<li><b>Accessibility and lower barrier to entry:</b> call a model through an API; no ML expertise or GPUs needed.</li>
<li><b>Efficiency:</b> serverless, managed scaling, built-in RAG, agents and guardrails.</li>
<li><b>Cost-effectiveness:</b> pay as you go; no idle clusters.</li>
<li><b>Speed to market:</b> prototype in days rather than months.</li>
<li><b>Meeting business objectives:</b> choice of many models, easy switching, integration with your existing AWS data.</li>
</ul>

<h3>Benefits of AWS infrastructure</h3>
<div class="tw"><table><thead><tr><th>Benefit</th><th>What AWS provides</th></tr></thead><tbody>
<tr><td>Security</td><td>Encryption in transit and at rest (KMS), IAM access control, private connectivity with PrivateLink, isolated model deployments.</td></tr>
<tr><td>Compliance</td><td>Certifications and attestations (SOC, ISO, PCI, HIPAA eligibility, GDPR support); reports in AWS Artifact.</td></tr>
<tr><td>Responsibility</td><td>Shared responsibility model, AWS Responsible AI policy, AI Service Cards documenting AWS AI services.</td></tr>
<tr><td>Safety</td><td>Amazon Bedrock Guardrails, model evaluation, abuse detection.</td></tr>
</tbody></table></div>
<div class="box rem"><p>Amazon Bedrock does <b>not</b> use your prompts or outputs to train base models and does not share them with model providers. Model providers have no access to your data. Your data stays in the AWS Region you use unless you choose cross-Region inference.</p></div>

<h3>Cost tradeoffs</h3>
<div class="tw"><table><thead><tr><th>Option</th><th>How you pay</th><th>Tradeoff</th></tr></thead><tbody>
<tr><td>On-demand</td><td>Per input and output token, no commitment</td><td>Flexible and good for variable traffic; subject to account throughput quotas.</td></tr>
<tr><td>Batch inference</td><td>Per token at a lower rate (about 50% below on-demand for supported models)</td><td>Cheapest for large volumes, but asynchronous: results arrive later in S3.</td></tr>
<tr><td>Provisioned Throughput</td><td>Hourly for purchased model units; optional 1- or 6-month commitment for a discount</td><td>Guaranteed, consistent throughput for high steady load; you pay whether or not you use it. The default way to serve a customized model.</td></tr>
<tr><td>Custom models</td><td>Training (per token processed) + monthly storage + inference</td><td>Better fit for your domain, but extra cost. AWS's general rule: a customized model needs Provisioned Throughput. Exception: some customized models (certain Amazon Nova and Llama models, in specific Regions) can be deployed for on-demand inference.</td></tr>
<tr><td>Prompt caching</td><td>Cached prompt prefix tokens billed at a steep discount (up to about 90% on supported models)</td><td>Big savings and lower latency when many requests share the same long context.</td></tr>
<tr><td>Cross-Region inference</td><td>Same price; requests routed across Regions in a geography</td><td>Higher availability and throughput in bursts; check data residency needs.</td></tr>
</tbody></table></div>
<p>Other dimensions the exam mentions:</p>
<ul>
<li><b>Responsiveness and performance:</b> bigger models and longer outputs are slower; latency-optimized options cost more.</li>
<li><b>Availability and redundancy:</b> multi-AZ or multi-Region designs improve resilience but add cost.</li>
<li><b>Regional coverage:</b> not every model is available in every Region; this affects latency and residency.</li>
</ul>
<div class="box trap"><ul>
<li>"Steady, high-volume traffic needs guaranteed throughput" → <b>Provisioned Throughput</b>.</li>
<li>"Summarize 1 million archived documents as cheaply as possible, no rush" → <b>batch inference</b>.</li>
<li>"Unpredictable, low traffic for a new prototype" → <b>on-demand</b>.</li>
</ul></div>

<h3>Supporting AWS services you should recognize</h3>
<p>These core services appear in the exam guide's in-scope list. They are rarely the main answer to an AI question, but they show up as parts of a solution and as distractors, so know what each one does.</p>
<div class="tw"><table><thead><tr><th>Area</th><th>Service</th><th>Role in an AI solution</th></tr></thead><tbody>
<tr><td>Compute</td><td>AWS Lambda</td><td>Serverless functions: run code for agent actions (Bedrock action groups), pre/post-process prompts, glue services together.</td></tr>
<tr><td>Compute</td><td>Amazon EC2</td><td>Virtual servers, including GPU, Trainium and Inferentia instances for self-hosted training and inference.</td></tr>
<tr><td>Containers</td><td>Amazon ECS / Amazon EKS</td><td>Run containerized apps and model servers; EKS is managed Kubernetes.</td></tr>
<tr><td>Databases</td><td>Amazon DynamoDB</td><td>Serverless key-value/NoSQL database: chat history, session state, user profiles.</td></tr>
<tr><td>Databases</td><td>Amazon Aurora, Amazon RDS, Amazon DocumentDB, Amazon Neptune, Amazon ElastiCache</td><td>Relational, document, graph and in-memory databases; several also store vectors for RAG (Task 3.1).</td></tr>
<tr><td>Analytics</td><td>Amazon Redshift</td><td>Data warehouse for structured analytics; Knowledge Bases can answer questions over it with natural language to SQL.</td></tr>
<tr><td>Analytics</td><td>Amazon EMR, AWS Glue, AWS Glue DataBrew, AWS Lake Formation, AWS Data Exchange</td><td>Big-data processing, ETL and data catalog, no-code data prep, governed data lakes, and buying third-party datasets.</td></tr>
<tr><td>Analytics</td><td>Amazon OpenSearch Service</td><td>Search and vector search engine for RAG.</td></tr>
<tr><td>Networking</td><td>Amazon VPC (with AWS PrivateLink)</td><td>Private network isolation; interface endpoints keep traffic to Bedrock and SageMaker off the internet.</td></tr>
<tr><td>Networking</td><td>Amazon CloudFront</td><td>Content delivery network in front of a web front end for an AI app.</td></tr>
<tr><td>Storage</td><td>Amazon S3, Amazon S3 Glacier</td><td>S3 holds training data, documents and model artifacts; Glacier archives data you must keep but rarely use.</td></tr>
<tr><td>Cost</td><td>AWS Budgets, AWS Cost Explorer</td><td>Budgets alert you before spend exceeds a limit; Cost Explorer analyzes where spend goes, e.g. by model or team.</td></tr>
</tbody></table></div>
<div class="box trap"><p>"Alert the team when monthly Bedrock spend passes $5,000" → <b>AWS Budgets</b>, not Cost Explorer or CloudWatch. "Store conversation history for each session" → <b>DynamoDB</b>. "Run code when an agent action is invoked" → <b>Lambda</b>.</p></div>
`,
zh:`
<h3>AWS 生成式 AI 技术栈</h3>
<div class="tw"><table><thead><tr><th>层级</th><th>使用者</th><th>服务</th></tr></thead><tbody>
<tr><td>应用层（直接使用 AI）</td><td>想用现成 AI 的业务用户和开发者</td><td><b>Amazon Quick</b>（业务智能体、调研、BI）、<b>Amazon Q Developer</b>、<b>Kiro</b>（智能体 IDE）、<b>AWS Transform</b>（应用现代化）</td></tr>
<tr><td>工具层（基于模型构建）</td><td>应用开发者</td><td><b>Amazon Bedrock</b> 及其功能（知识库、Agents、护栏、模型评估、提示管理、Flows、Data Automation）、<b>Bedrock AgentCore</b>、<b>Strands Agents</b>、<b>SageMaker JumpStart</b></td></tr>
<tr><td>基础设施层（构建、训练、托管）</td><td>ML 工程师与模型构建者</td><td><b>SageMaker AI</b>（训练、HyperPod 集群、端点）、<b>Amazon EC2</b> GPU 与加速实例、<b>AWS Trainium</b>（训练芯片）、<b>AWS Inferentia</b>（推理芯片）、<b>Amazon S3</b></td></tr>
</tbody></table></div>

<h3>Bedrock、SageMaker AI 与 JumpStart 对比</h3>
<div class="tw"><table><thead><tr><th></th><th>Amazon Bedrock</th><th>Amazon SageMaker AI</th><th>SageMaker JumpStart</th></tr></thead><tbody>
<tr><td>是什么</td><td>通过无服务器 API 使用多家 FM（Anthropic、Amazon Nova、Meta、Mistral、Cohere、AI21、Stability AI、DeepSeek 等）</td><td>构建、训练、部署任意 ML 模型的完整平台</td><td>SageMaker 中的开源预训练模型与解决方案模板中心</td></tr>
<tr><td>基础设施</td><td>无需管理</td><td>自选实例与扩缩容</td><td>部署到你管理的 SageMaker 端点</td></tr>
<tr><td>定制</td><td>微调、持续预训练、蒸馏、自定义模型导入</td><td>任意方式：自己的代码和算法</td><td>一键微调并部署中心里的模型</td></tr>
<tr><td>何时选</td><td>想快速获得生成式 AI 能力、不做 ML 运维</td><td>需要完全控制，或需要定制/传统模型</td><td>想快速把开源模型部署到自己的端点</td></tr>
</tbody></table></div>

<h3>为什么在 AWS 托管服务上构建生成式 AI</h3>
<ul>
<li><b>易用、门槛低：</b>通过 API 调用模型，无需 ML 专业知识或 GPU。</li>
<li><b>高效：</b>无服务器、自动扩缩容，内置 RAG、智能体和护栏。</li>
<li><b>成本效益：</b>按用量付费，没有闲置集群。</li>
<li><b>上市速度快：</b>几天而不是几个月就能做出原型。</li>
<li><b>满足业务目标：</b>模型选择多、切换方便，易与现有 AWS 数据集成。</li>
</ul>

<h3>AWS 基础设施的好处</h3>
<div class="tw"><table><thead><tr><th>好处</th><th>AWS 提供什么</th></tr></thead><tbody>
<tr><td>安全</td><td>传输中和静态加密 (KMS)、IAM 访问控制、PrivateLink 私有连接、隔离的模型部署。</td></tr>
<tr><td>合规</td><td>各类认证与证明（SOC、ISO、PCI、符合 HIPAA 条件、支持 GDPR）；报告可在 AWS Artifact 下载。</td></tr>
<tr><td>责任</td><td>责任共担模型、AWS 负责任 AI 政策、记录 AWS AI 服务的 AI Service Cards。</td></tr>
<tr><td>安全保障</td><td>Amazon Bedrock 护栏、模型评估、滥用检测。</td></tr>
</tbody></table></div>
<div class="box rem"><p>Amazon Bedrock <b>不会</b>用你的提示或输出训练基础模型，也不会与模型提供商共享；模型提供商无法访问你的数据。除非你选择跨区域推理，数据会留在你使用的 AWS 区域内。</p></div>

<h3>成本权衡</h3>
<div class="tw"><table><thead><tr><th>方式</th><th>计费</th><th>权衡</th></tr></thead><tbody>
<tr><td>按需 (On-demand)</td><td>按输入/输出 Token，无承诺</td><td>灵活，适合流量多变；受账户吞吐量配额限制。</td></tr>
<tr><td>批量推理</td><td>按 Token，价格更低（受支持模型约比按需低 50%）</td><td>大批量最便宜，但是异步的：结果稍后写入 S3。</td></tr>
<tr><td>预置吞吐量 (Provisioned Throughput)</td><td>按购买的模型单元每小时计费；可选 1 或 6 个月承诺以获折扣</td><td>为持续高负载提供有保障、稳定的吞吐；用不用都要付费。这是为定制模型提供服务的默认方式。</td></tr>
<tr><td>自定义模型</td><td>训练（按处理的 Token）+ 每月存储 + 推理</td><td>更贴合你的领域，但有额外成本。AWS 的一般规则：定制模型需要预置吞吐量。例外：部分定制模型（特定区域的某些 Amazon Nova 和 Llama 模型）可以部署为按需推理。</td></tr>
<tr><td>提示缓存</td><td>被缓存的提示前缀 Token 按大幅折扣计费（受支持模型最高约 90%）</td><td>大量请求共享同一长上下文时，显著省钱并降低延迟。</td></tr>
<tr><td>跨区域推理</td><td>价格不变；请求在同一地理范围内跨区域路由</td><td>突发时可用性和吞吐更高；需核对数据驻留要求。</td></tr>
</tbody></table></div>
<p>考试还会涉及：</p>
<ul>
<li><b>响应性与性能：</b>模型越大、输出越长越慢；延迟优化选项更贵。</li>
<li><b>可用性与冗余：</b>多可用区或多区域设计提高韧性，但增加成本。</li>
<li><b>区域覆盖：</b>并非所有模型在所有区域都可用，会影响延迟和数据驻留。</li>
</ul>
<div class="box trap"><ul>
<li>“稳定的高流量，需要有保障的吞吐量” → <b>预置吞吐量</b>。</li>
<li>“尽可能便宜地总结 100 万份归档文档，不着急” → <b>批量推理</b>。</li>
<li>“新原型，流量低且不可预测” → <b>按需</b>。</li>
</ul></div>

<h3>需要认识的支撑类 AWS 服务</h3>
<p>这些核心服务在考纲的考试范围清单中。它们很少是 AI 题的主答案，但常作为方案的组成部分或干扰项出现，所以要知道各自的作用。</p>
<div class="tw"><table><thead><tr><th>领域</th><th>服务</th><th>在 AI 方案中的角色</th></tr></thead><tbody>
<tr><td>计算</td><td>AWS Lambda</td><td>无服务器函数：执行智能体操作（Bedrock 操作组）、对提示做前后处理、串联各服务。</td></tr>
<tr><td>计算</td><td>Amazon EC2</td><td>虚拟服务器，包括用于自托管训练和推理的 GPU、Trainium、Inferentia 实例。</td></tr>
<tr><td>容器</td><td>Amazon ECS / Amazon EKS</td><td>运行容器化应用和模型服务；EKS 是托管的 Kubernetes。</td></tr>
<tr><td>数据库</td><td>Amazon DynamoDB</td><td>无服务器键值/NoSQL 数据库：保存聊天历史、会话状态、用户档案。</td></tr>
<tr><td>数据库</td><td>Amazon Aurora、Amazon RDS、Amazon DocumentDB、Amazon Neptune、Amazon ElastiCache</td><td>关系型、文档、图和内存数据库；其中多个还能为 RAG 存储向量（任务 3.1）。</td></tr>
<tr><td>分析</td><td>Amazon Redshift</td><td>用于结构化分析的数据仓库；知识库可通过自然语言转 SQL 对其提问。</td></tr>
<tr><td>分析</td><td>Amazon EMR、AWS Glue、AWS Glue DataBrew、AWS Lake Formation、AWS Data Exchange</td><td>大数据处理、ETL 与数据目录、无代码数据准备、受治理的数据湖，以及购买第三方数据集。</td></tr>
<tr><td>分析</td><td>Amazon OpenSearch Service</td><td>用于 RAG 的搜索与向量搜索引擎。</td></tr>
<tr><td>网络</td><td>Amazon VPC（含 AWS PrivateLink）</td><td>私有网络隔离；接口终端节点让访问 Bedrock 和 SageMaker 的流量不经公网。</td></tr>
<tr><td>网络</td><td>Amazon CloudFront</td><td>部署在 AI 应用网页前端前面的内容分发网络。</td></tr>
<tr><td>存储</td><td>Amazon S3、Amazon S3 Glacier</td><td>S3 存放训练数据、文档和模型产物；Glacier 归档必须保留但很少使用的数据。</td></tr>
<tr><td>成本</td><td>AWS Budgets、AWS Cost Explorer</td><td>Budgets 在支出超限前告警；Cost Explorer 分析支出去向，例如按模型或团队。</td></tr>
</tbody></table></div>
<div class="box trap"><p>“每月 Bedrock 支出超过 5,000 美元时提醒团队” → <b>AWS Budgets</b>，不是 Cost Explorer 或 CloudWatch。“为每个会话保存对话历史” → <b>DynamoDB</b>。“智能体操作被调用时运行代码” → <b>Lambda</b>。</p></div>
`};
