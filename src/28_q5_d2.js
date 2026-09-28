/* Fifth question set (v1.3), domain 2: fundamentals of generative AI. Append-only. */
(function(){
function Q(k, t, a, en, zh, wEn, wZh){
  var q = {k: k, d: 'd' + k.charAt(0), t: t, a: a, en: {q: en[0], o: en[1], x: en[2]}, zh: {q: zh[0], o: zh[1], x: zh[2]}};
  if (wEn) { var pad = a.map(function(){ return ''; }); q.w = {en: pad.concat(wEn), zh: pad.concat(wZh)}; }
  AIF.qs.push(q);
}

/* ================= 2.1 Basic concepts of generative AI ================= */
Q('2.1','single',[0],
['Why are long documents split into chunks before embeddings are created for a RAG application?',
 ['So each piece fits the embedding model’s input limit and retrieval returns focused, relevant passages','To encrypt the documents','To reduce the number of stored tokens to zero','To train the foundation model on them'],
 'Chunking keeps each embedding focused on one idea and within size limits, which makes retrieval precise.'],
['在为 RAG 应用创建嵌入之前，为什么要把长文档切分成块？',
 ['让每一块都符合嵌入模型的输入上限，并让检索返回聚焦、相关的段落','为了加密文档','为了把存储的令牌数减到零','为了用它们训练基础模型'],
 '分块让每个嵌入聚焦于一个主题并符合大小限制，从而提高检索精度。'],
['Chunking does not encrypt anything.','Chunks still contain all the text.','RAG retrieves chunks at query time; it does not train the model.'],
['分块不会加密任何内容。','各个块仍然包含全部文本。','RAG 在查询时检索文本块，不会训练模型。']);

Q('2.1','single',[0],
['A RAG system stores whole book chapters as single chunks. What problem is most likely?',
 ['Retrieved chunks contain lots of irrelevant text, which dilutes relevance and wastes tokens','The model can no longer read English','The embeddings turn into images','Retrieval becomes faster and more precise'],
 'Chunks that are too large mix many topics, so matches are vague and prompts get long and expensive.'],
['某个 RAG 系统把整章书内容作为一个块存储。最可能出现什么问题？',
 ['检索到的块包含大量无关文本，降低相关性并浪费令牌','模型不再能读懂英文','嵌入会变成图像','检索变得更快、更精确'],
 '块太大会混杂多个主题，导致匹配模糊，提示也变得冗长昂贵。'],
['Chunk size does not affect the model’s language skills.','Embeddings are always vectors of numbers.','Oversized chunks make retrieval less precise, not more.'],
['块的大小不影响模型的语言能力。','嵌入始终是数值向量。','块过大会降低检索精度，而不是提高。']);

Q('2.1','single',[0],
['What is the purpose of chunk overlap when splitting documents?',
 ['To keep context that spans a chunk boundary, so a sentence is not cut off from its meaning','To double the security of the data','To reduce storage costs','To raise the model’s temperature'],
 'A small overlap repeats text at the edges so ideas that cross a boundary are not lost.'],
['切分文档时设置“块重叠”的目的是什么？',
 ['保留跨越块边界的上下文，避免句子与其含义被割裂','让数据安全性翻倍','降低存储成本','提高模型的温度'],
 '少量重叠会在边缘重复部分文本，避免跨越边界的内容丢失。'],
['Overlap has nothing to do with security.','Overlap slightly increases storage, since text is repeated.','Temperature is an inference setting, unrelated to chunking.'],
['重叠与安全无关。','重叠会重复部分文本，反而略微增加存储。','温度是推理参数，与分块无关。']);

Q('2.1','single',[0],
['Two sentences have embeddings with a very high cosine similarity. What does this tell you?',
 ['The sentences have similar meanings','They contain exactly the same words','They are the same length','They must be in the same language'],
 'Embeddings place text with similar meaning close together in vector space, even when the wording differs.'],
['两个句子的嵌入余弦相似度非常高。这说明什么？',
 ['这两个句子含义相近','它们包含完全相同的词语','它们长度相同','它们一定是同一种语言'],
 '嵌入会把含义相近的文本放在向量空间中相近的位置，即使措辞不同。'],
['Similar meaning does not require identical wording.','Length is not what embeddings capture.','Multilingual embedding models place translations close together.'],
['含义相近并不要求措辞相同。','嵌入捕捉的不是长度。','多语言嵌入模型会把译文放在相近的位置。']);

Q('2.1','single',[0],
['Which mechanism lets transformer models weigh how strongly each word in a sentence relates to every other word?',
 ['Self-attention','Convolution only','A decision tree','Recurrence with no attention'],
 'Self-attention is the core idea of the transformer architecture behind today’s LLMs.'],
['哪种机制让 Transformer 模型能够衡量句子中每个词与其他所有词的关联程度？',
 ['自注意力','仅使用卷积','决策树','不带注意力的循环结构'],
 '自注意力是当今 LLM 所用 Transformer 架构的核心思想。'],
['Convolutions are mainly used in image models.','Decision trees are a different kind of ML model.','Older recurrent networks processed words one by one, without attention.'],
['卷积主要用于图像模型。','决策树是另一类机器学习模型。','早期的循环网络逐词处理，没有注意力机制。']);

Q('2.1','single',[0],
['Which kind of model can take a photo plus a question about it and answer in text?',
 ['A multimodal model','A text-only language model','A regression model','A clustering model'],
 'Multimodal models accept and combine more than one type of input, such as images and text.'],
['哪种模型可以接收一张照片和一个关于它的问题，并用文字回答？',
 ['多模态模型','纯文本语言模型','回归模型','聚类模型'],
 '多模态模型可以接收并融合多种类型的输入，例如图像和文本。'],
['A text-only model cannot see the image.','Regression predicts numbers.','Clustering groups data; it does not answer questions.'],
['纯文本模型看不到图像。','回归用于预测数值。','聚类用于分组，不能回答问题。']);

Q('2.1','single',[0],
['What makes a model a “foundation model”?',
 ['It is pre-trained on broad, large-scale data and can be adapted to many different tasks','It is trained for a single narrow task','It is small enough to run on a phone','It follows hand-written rules'],
 'Foundation models are general-purpose starting points for many downstream uses.'],
['什么样的模型才算“基础模型”？',
 ['在广泛、大规模的数据上预训练，并可适配多种不同任务','只针对单一狭窄任务训练','小到可以在手机上运行','遵循人工编写的规则'],
 '基础模型是通用的起点，可以用于许多下游任务。'],
['Single-task models are the opposite of foundation models.','Size is not the defining feature; most are very large.','Foundation models learn from data, not rules.'],
['单一任务模型与基础模型正好相反。','大小不是定义特征，大多数基础模型都很大。','基础模型从数据中学习，而不是依靠规则。']);

Q('2.1','single',[0],
['A marketing team wants short product videos generated from text descriptions on Amazon Bedrock. Which Amazon model is built for video generation?',
 ['Amazon Nova Reel','Amazon Nova Micro','Amazon Titan Text Embeddings','Amazon Polly'],
 'Nova Reel generates short videos from text and images.'],
['一个营销团队希望在 Amazon Bedrock 上根据文字描述生成简短的产品视频。哪个 Amazon 模型专为视频生成而设计？',
 ['Amazon Nova Reel','Amazon Nova Micro','Amazon Titan Text Embeddings','Amazon Polly'],
 'Nova Reel 可以根据文本和图像生成短视频。'],
['Nova Micro is a fast, text-only model.','Embedding models turn text into vectors; they do not create video.','Polly generates speech, not video.'],
['Nova Micro 是快速的纯文本模型。','嵌入模型把文本转成向量，不能生成视频。','Polly 生成语音，而不是视频。']);

Q('2.1','single',[0],
['A retailer wants to create product images from text descriptions on Amazon Bedrock. Which Amazon model fits?',
 ['Amazon Nova Canvas','Amazon Nova Reel','Amazon Titan Text Embeddings','Amazon Transcribe'],
 'Nova Canvas is Amazon’s image generation model.'],
['一家零售商希望在 Amazon Bedrock 上根据文字描述生成商品图片。哪个 Amazon 模型合适？',
 ['Amazon Nova Canvas','Amazon Nova Reel','Amazon Titan Text Embeddings','Amazon Transcribe'],
 'Nova Canvas 是 Amazon 的图像生成模型。'],
['Nova Reel generates video rather than still images.','Embedding models do not generate images.','Transcribe converts speech to text.'],
['Nova Reel 生成的是视频，而不是静态图片。','嵌入模型不能生成图像。','Transcribe 把语音转成文字。']);

Q('2.1','single',[0],
['An airline wants a chat assistant that can look up bookings, change seats and answer policy questions. Which generative AI use case is this?',
 ['A customer service agent that uses tools','A diffusion model','Batch clustering','Optical character recognition'],
 'A customer service agent combines a model with tools such as booking APIs to act for the customer.'],
['一家航空公司希望有一个能查询预订、更换座位并回答政策问题的聊天助手。这属于哪种生成式 AI 用例？',
 ['使用工具的客户服务智能体','扩散模型','批量聚类','光学字符识别'],
 '客户服务智能体把模型与预订 API 等工具结合，代表客户执行操作。'],
['Diffusion models generate images, not conversations with actions.','Clustering groups data offline.','OCR reads text from images.'],
['扩散模型生成图像，而不是可执行操作的对话。','聚类是离线对数据分组。','OCR 是从图像中读取文字。']);

Q('2.1','single',[0],
['Before pre-training, a team removes duplicates, toxic text and personal data from a web-crawled corpus. Which stage of the foundation model lifecycle is this?',
 ['Data selection','Deployment','Feedback','Evaluation'],
 'Data selection and curation decide what the model learns from, which strongly shapes its quality and safety.'],
['在预训练之前，团队从网络爬取的语料中删除重复内容、有害文本和个人数据。这属于基础模型生命周期的哪个阶段？',
 ['数据选择','部署','反馈','评估'],
 '数据选择与整理决定了模型从什么中学习，极大地影响其质量和安全性。'],
['Deployment happens after training and evaluation.','Feedback is collected from users after deployment.','Evaluation tests a trained model.'],
['部署发生在训练和评估之后。','反馈是在部署后从用户那里收集的。','评估是对已训练模型的测试。']);

Q('2.1','single',[0],
['After deployment, thumbs-up and thumbs-down ratings from users are collected to improve the model later. Which lifecycle stage is this?',
 ['Feedback','Pre-training','Model selection','Data selection'],
 'Feedback closes the loop by feeding real-world signals into the next round of improvement.'],
['部署之后，团队收集用户的点赞和点踩，用于日后改进模型。这属于生命周期的哪个阶段？',
 ['反馈','预训练','模型选择','数据选择'],
 '反馈把真实世界的信号带入下一轮改进，形成闭环。'],
['Pre-training happens at the very start.','Model selection happens before building.','Data selection happens before training.'],
['预训练发生在最开始。','模型选择发生在构建之前。','数据选择发生在训练之前。']);

Q('2.1','single',[0],
['A team compares several foundation models for cost, latency and quality on sample tasks before building anything. Which lifecycle stage is this?',
 ['Model selection','Fine-tuning','Deployment','Feedback'],
 'Model selection picks the best starting model for the use case.'],
['团队在动手构建之前，用示例任务比较几个基础模型的成本、延迟和质量。这属于生命周期的哪个阶段？',
 ['模型选择','微调','部署','反馈'],
 '模型选择是为用例挑选最合适的起点模型。'],
['Fine-tuning comes after a model has been chosen.','Deployment comes after the model is ready.','Feedback comes from users after launch.'],
['微调发生在选定模型之后。','部署发生在模型准备好之后。','反馈来自上线后的用户。']);

Q('2.1','single',[0],
['A model costs $0.003 per 1,000 input tokens and $0.015 per 1,000 output tokens. One request uses 2,000 input tokens and 500 output tokens. What does it cost?',
 ['$0.0135','$0.0075','$0.0375','$0.0315'],
 '2 × $0.003 = $0.006 for input, plus 0.5 × $0.015 = $0.0075 for output, total $0.0135.'],
['某模型的输入价格为每 1,000 个令牌 0.003 美元，输出价格为每 1,000 个令牌 0.015 美元。一次请求使用 2,000 个输入令牌和 500 个输出令牌，费用是多少？',
 ['0.0135 美元','0.0075 美元','0.0375 美元','0.0315 美元'],
 '输入 2 × 0.003 = 0.006 美元，输出 0.5 × 0.015 = 0.0075 美元，合计 0.0135 美元。'],
['That prices all 2,500 tokens at the input rate.','That prices all 2,500 tokens at the output rate.','That swaps the input and output rates.'],
['这是把全部 2,500 个令牌都按输入价格计算。','这是把全部 2,500 个令牌都按输出价格计算。','这是把输入和输出价格弄反了。']);

Q('2.1','single',[0],
['Which change most directly lowers the token cost of a summarization app?',
 ['Limit the output length and trim unnecessary text from each prompt','Increase the temperature','Switch to a larger model','Add more examples to every prompt'],
 'You pay for every input and output token, so shorter prompts and outputs cost less.'],
['哪项改动最直接地降低摘要应用的令牌成本？',
 ['限制输出长度，并删减每个提示中不必要的文本','调高温度','换用更大的模型','在每个提示中加入更多示例'],
 '每个输入和输出令牌都要付费，因此更短的提示和输出更便宜。'],
['Temperature changes randomness, not the number of tokens.','Larger models usually cost more per token.','More examples add input tokens to every call.'],
['温度改变的是随机性，而不是令牌数量。','更大的模型通常每个令牌更贵。','更多示例会让每次调用增加输入令牌。']);

Q('2.1','single',[0],
['An agent’s answers get worse as its prompt fills up with every past tool result. Which context-engineering fix helps most?',
 ['Summarize or drop stale tool output and keep only what the current step needs','Raise the maximum output tokens','Increase the temperature','Add even more tool output to the prompt'],
 'Context engineering is about giving the model the right information, not all of it.'],
['随着提示中塞满过去所有工具调用的结果，某个智能体的回答越来越差。哪种上下文工程方法最有帮助？',
 ['总结或丢弃过时的工具输出，只保留当前步骤需要的内容','调高最大输出令牌数','调高温度','在提示中加入更多工具输出'],
 '上下文工程的关键是给模型提供正确的信息，而不是全部信息。'],
['A longer answer does not fix a cluttered prompt.','More randomness makes answers less reliable.','That makes the clutter worse.'],
['更长的回答无法解决提示杂乱的问题。','更多随机性会让回答更不可靠。','这会让杂乱更严重。']);

Q('2.1','single',[0],
['Which is an example of context engineering in a RAG assistant?',
 ['Choosing which retrieved passages, user profile facts and instructions go into the prompt, and in what order','Buying more GPUs','Changing the model’s tokenizer','Retraining the model’s weights'],
 'Context engineering designs everything the model sees at inference time.'],
['以下哪项是 RAG 助手中的上下文工程示例？',
 ['决定哪些检索段落、用户资料和指令放进提示，以及它们的顺序','购买更多 GPU','更换模型的分词器','重新训练模型权重'],
 '上下文工程是设计模型在推理时看到的全部内容。'],
['Hardware does not decide what the model is told.','The tokenizer is part of the model, not its context.','Retraining changes the model, not the context.'],
['硬件并不决定告诉模型什么。','分词器属于模型本身，而不是上下文。','重新训练改变的是模型，而不是上下文。']);

Q('2.1','single',[0],
['A company has built MCP servers for its CRM and ticketing systems. What is the main benefit?',
 ['Any MCP-compatible agent or app can use these tools through one standard protocol, without custom integrations','The servers train new foundation models','The servers store embeddings for RAG','The servers encrypt Amazon S3 buckets'],
 'MCP standardizes how agents discover and call tools and data sources.'],
['一家公司为其 CRM 和工单系统构建了 MCP 服务器。主要好处是什么？',
 ['任何兼容 MCP 的智能体或应用都能通过同一个标准协议使用这些工具，无需定制集成','这些服务器会训练新的基础模型','这些服务器为 RAG 存储嵌入','这些服务器会加密 Amazon S3 存储桶'],
 'MCP 统一了智能体发现和调用工具及数据源的方式。'],
['MCP connects agents to tools; it does not train models.','Vector databases store embeddings.','Encryption is handled by services like AWS KMS.'],
['MCP 把智能体连接到工具，不训练模型。','向量数据库负责存储嵌入。','加密由 AWS KMS 等服务负责。']);

Q('2.1','single',[0],
['In the Model Context Protocol, what does the MCP client do?',
 ['It runs inside the AI application and connects to MCP servers, passing their tools and data to the model','It stores the model’s weights','It is the vector database','It is the end user’s password manager'],
 'The host application uses MCP clients to talk to one or more MCP servers.'],
['在模型上下文协议（MCP）中，MCP 客户端的作用是什么？',
 ['它运行在 AI 应用中，连接 MCP 服务器，并把服务器提供的工具和数据交给模型','它存储模型权重','它就是向量数据库','它是终端用户的密码管理器'],
 '宿主应用通过 MCP 客户端与一个或多个 MCP 服务器通信。'],
['Weights live with the model, not the MCP client.','A vector database is a separate component.','MCP has nothing to do with password managers.'],
['权重属于模型本身，而不是 MCP 客户端。','向量数据库是另一个组件。','MCP 与密码管理器无关。']);

Q('2.1','single',[0],
['A document passes from an extraction agent to a checking agent to a writing agent, each handing its output to the next. Which multi-agent pattern is this?',
 ['Sequential (pipeline)','Parallel (fan-out)','Hierarchical supervisor','A single agent'],
 'In a sequential pattern, agents run one after another, each building on the previous result.'],
['一份文档依次经过提取智能体、检查智能体和写作智能体，每个都把输出交给下一个。这是哪种多智能体模式？',
 ['顺序（管道）模式','并行（扇出）模式','分层主管模式','单一智能体'],
 '在顺序模式中，智能体依次运行，每个都基于上一个的结果。'],
['Parallel agents work at the same time, not in a chain.','A supervisor delegates and coordinates, rather than passing work down a line.','Three separate agents are involved.'],
['并行智能体同时工作，而不是串联。','主管模式负责分派和协调，而不是沿管道传递。','这里涉及三个不同的智能体。']);

Q('2.1','single',[0],
['Three agents research competitors, pricing and customer reviews at the same time, and a final step combines their results. Which pattern is this?',
 ['Parallel (fan-out and fan-in)','Sequential','Reflection','Human-in-the-loop'],
 'Parallel agents split independent work to save time, then merge the results.'],
['三个智能体同时研究竞争对手、定价和客户评价，最后一步汇总它们的结果。这是哪种模式？',
 ['并行（扇出与汇合）','顺序','反思','人工参与'],
 '并行智能体把相互独立的工作分开同时进行以节省时间，然后合并结果。'],
['Sequential agents run one after another.','Reflection is an agent critiquing and improving its own output.','No human step is described.'],
['顺序模式中智能体依次运行。','反思是智能体评审并改进自己的输出。','题目中没有人工步骤。']);

Q('2.1','single',[0],
['Which Amazon Bedrock AgentCore component stores short-term and long-term memory for agents?',
 ['AgentCore Memory','AgentCore Gateway','AgentCore Identity','AgentCore Observability'],
 'AgentCore Memory keeps conversation context and facts that persist across sessions.'],
['Amazon Bedrock AgentCore 的哪个组件为智能体存储短期和长期记忆？',
 ['AgentCore Memory','AgentCore Gateway','AgentCore Identity','AgentCore Observability'],
 'AgentCore Memory 保存对话上下文以及可跨会话保留的信息。'],
['Gateway turns APIs into tools for agents.','Identity manages agent access and credentials.','Observability traces and monitors agent runs.'],
['Gateway 把 API 转换成智能体可用的工具。','Identity 管理智能体的访问权限和凭证。','Observability 负责跟踪和监控智能体的运行。']);

Q('2.1','multi',[0,1],
['Which TWO are examples of an AI agent using tools? (Choose TWO.)',
 ['Calling a weather API to answer a question about tomorrow’s forecast','Running a SQL query on a sales database','Choosing a higher temperature','Splitting the prompt into tokens','The model’s pre-training on web text'],
 'Tool use means the agent calls external functions, APIs or systems to get information or act.'],
['以下哪两项是 AI 智能体使用工具的例子？（选择两项）',
 ['调用天气 API 回答明天天气的问题','在销售数据库上运行 SQL 查询','选择更高的温度','把提示切分成令牌','模型在网页文本上的预训练'],
 '使用工具是指智能体调用外部函数、API 或系统来获取信息或执行操作。'],
['Temperature is an inference setting, not a tool.','Tokenization is internal to the model.','Pre-training happened before the agent ran.'],
['温度是推理参数，不是工具。','分词是模型内部的过程。','预训练发生在智能体运行之前。']);

Q('2.1','match',[],
['Match each agentic AI concept to what it means.',
 [['Orchestration','Deciding the order of steps and which agent or tool runs next'],['Tool use','Calling an API or function to fetch data or take an action'],['Memory','Keeping facts from earlier steps or sessions'],['Agent-to-agent communication','Agents exchanging messages and results with each other']],
 'These are the building blocks of agentic systems named in the exam guide.'],
['将每个智能体 AI 概念与其含义配对。',
 [['编排','决定步骤顺序以及下一步由哪个智能体或工具执行'],['工具使用','调用 API 或函数来获取数据或执行操作'],['记忆','保留之前步骤或会话中的信息'],['智能体间通信','智能体之间交换消息和结果']],
 '这些是考试指南中提到的智能体系统的基本组成部分。']);

/* ================= 2.2 Capabilities and limitations ================= */
Q('2.2','single',[0],
['A retailer’s FAQ assistant answers questions instantly at 3 a.m. in any time zone. Which advantage of generative AI does this show?',
 ['Responsiveness','Determinism','Interpretability','Zero cost'],
 'Generative AI can respond instantly and at any hour.'],
['一家零售商的常见问题助手在凌晨 3 点、任何时区都能即时回答问题。这体现了生成式 AI 的哪项优势？',
 ['响应迅速','确定性','可解释性','零成本'],
 '生成式 AI 可以随时即时响应。'],
['Generative AI output is not deterministic.','Interpretability is a known weakness, not the advantage shown.','Running a model always costs money.'],
['生成式 AI 的输出并不确定。','可解释性是已知弱点，并非此处体现的优势。','运行模型总是需要成本的。']);

Q('2.2','single',[0],
['A team produces 500 first drafts of product descriptions in an hour. Which generative AI advantage is this?',
 ['The ability to generate content at scale','Perfect accuracy','Full explainability','No need for human review'],
 'Generating large amounts of content quickly is a core strength; people should still review it.'],
['一个团队在一小时内生成了 500 份商品描述初稿。这体现了生成式 AI 的哪项优势？',
 ['大规模生成内容的能力','完全准确','完全可解释','无需人工审核'],
 '快速生成大量内容是核心优势；但仍应有人审核。'],
['Drafts can contain errors.','Large models are hard to explain.','Generated content should still be reviewed.'],
['初稿可能包含错误。','大模型很难解释。','生成的内容仍应经过审核。']);

Q('2.2','single',[0],
['A model says a regulation took effect in 2023, but it actually changed in 2025, after the model’s training data was collected. Which limitation is this, and how is it best addressed?',
 ['Inaccuracy from outdated training data; ground the model with current documents using RAG','Nondeterminism; set the temperature to 0','Bias; rebalance the dataset','Latency; use a faster model'],
 'Models only know what was in their training data; RAG supplies current facts at query time.'],
['某模型称一项法规于 2023 年生效，但该法规实际在 2025 年才变更，而那是在模型训练数据收集之后。这是哪种局限，最好如何解决？',
 ['训练数据过时导致的不准确；用 RAG 让模型基于最新文档作答','不确定性；把温度设为 0','偏见；重新平衡数据集','延迟；换用更快的模型'],
 '模型只知道训练数据中的内容；RAG 可以在查询时提供最新事实。'],
['A temperature of 0 makes answers repeatable, not up to date.','This is a knowledge gap, not unfair treatment of a group.','Speed has nothing to do with the wrong date.'],
['温度设为 0 能让回答可复现，但不能让它更新。','这是知识缺口，而不是对某个群体的不公平对待。','速度与日期错误无关。']);

Q('2.2','single',[0],
['Why is interpretability a disadvantage of large generative models?',
 ['Their billions of parameters make it hard to explain why a specific output was produced','They cannot produce text','They always explain their own reasoning accurately','They are simple rule-based systems'],
 'It is hard to trace how a large model arrived at a particular answer.'],
['为什么可解释性是大型生成式模型的一个缺点？',
 ['数十亿个参数使得很难解释某个输出为何产生','它们无法生成文本','它们总能准确解释自己的推理过程','它们是简单的规则系统'],
 '很难追溯大模型是如何得出某个具体答案的。'],
['Generating text is exactly what they do.','A model’s own explanation of its reasoning is not guaranteed to be accurate.','They are the opposite of simple rule-based systems.'],
['生成文本正是它们的本领。','模型对自身推理的解释并不一定准确。','它们与简单的规则系统恰恰相反。']);

Q('2.2','single',[0],
['A healthcare company must keep data in one Region and use a model covered by its compliance program. Which model selection factor is this?',
 ['Compliance and regulatory constraints','Creativity','Model size alone','Output formatting'],
 'Compliance requirements can rule out models or Regions regardless of quality.'],
['一家医疗公司必须把数据保留在一个区域内，并使用其合规计划覆盖的模型。这属于哪项模型选择因素？',
 ['合规与监管约束','创造力','仅看模型大小','输出格式'],
 '无论质量如何，合规要求都可能排除某些模型或区域。'],
['Creativity does not satisfy regulators.','Size says nothing about compliance.','Formatting is a minor usability concern.'],
['创造力无法满足监管要求。','模型大小与合规无关。','输出格式只是次要的可用性问题。']);

Q('2.2','single',[0],
['A simple text classification task runs millions of times a day. Which model choice is usually best?',
 ['A smaller, cheaper and faster model that meets the accuracy target','The largest model available','A video generation model','A diffusion model'],
 'Match model size and cost to the task: simple, high-volume tasks rarely need the biggest model.'],
['一个简单的文本分类任务每天要运行数百万次。通常哪种模型选择最好？',
 ['达到准确率目标、更小、更便宜且更快的模型','现有最大的模型','视频生成模型','扩散模型'],
 '让模型规模和成本与任务相匹配：简单、高频的任务很少需要最大的模型。'],
['The largest model would multiply cost and latency for little gain.','This is a text task, not video.','Diffusion models generate images.'],
['最大的模型会成倍增加成本和延迟，收益却很小。','这是文本任务，不是视频任务。','扩散模型用于生成图像。']);

Q('2.2','single',[0],
['Why can a bigger, more complex model be the wrong choice?',
 ['It costs more and responds more slowly, with little gain if the task is simple','Bigger models cannot follow prompts','Bigger models are always less accurate','Bigger models cannot be used on Amazon Bedrock'],
 'Model complexity should be justified by the task’s needs.'],
['为什么更大、更复杂的模型可能是错误的选择？',
 ['成本更高、响应更慢，而对简单任务几乎没有提升','更大的模型无法遵循提示','更大的模型总是更不准确','更大的模型无法在 Amazon Bedrock 上使用'],
 '模型复杂度应当与任务需求相称。'],
['Larger models usually follow prompts well.','They are often more accurate, just not always worth the cost.','Bedrock offers many large models.'],
['更大的模型通常能很好地遵循提示。','它们往往更准确，只是未必值得这个成本。','Bedrock 提供许多大模型。']);

Q('2.2','single',[0],
['Which metric divides total revenue by the number of users in a period?',
 ['Average revenue per user (ARPU)','Customer lifetime value (CLV)','Conversion rate','Return on investment (ROI)'],
 'ARPU = revenue ÷ users for a period, a common way to show the value of a feature.'],
['哪个指标是用一段时间内的总收入除以用户数？',
 ['每用户平均收入（ARPU）','客户终身价值（CLV）','转化率','投资回报率（ROI）'],
 'ARPU = 一段时间的收入 ÷ 用户数，常用于体现某项功能的价值。'],
['CLV estimates revenue from one customer over the whole relationship.','Conversion rate is the share of visitors who take an action.','ROI compares gain with cost.'],
['CLV 估算一位客户在整个合作期间带来的收入。','转化率是采取某种行动的访客比例。','ROI 比较收益与成本。']);

Q('2.2','single',[0],
['An AI assistant cuts the average time to resolve a support ticket from 12 minutes to 7. Which kind of business metric shows this value?',
 ['Efficiency (time saved)','BLEU score','Perplexity','Token count'],
 'Efficiency gains, such as time saved per task, are a direct measure of business value.'],
['一个 AI 助手把处理一张客服工单的平均时间从 12 分钟缩短到 7 分钟。哪类业务指标体现了这一价值？',
 ['效率（节省的时间）','BLEU 分数','困惑度','令牌数量'],
 '效率提升（例如每项任务节省的时间）是衡量业务价值的直接指标。'],
['BLEU measures translation overlap, not business results.','Perplexity is a technical language-model measure.','Token count is a cost input, not a result.'],
['BLEU 衡量翻译重合度，而不是业务结果。','困惑度是语言模型的技术指标。','令牌数量是成本投入，而不是结果。']);

Q('2.2','single',[0],
['A company wants one model that performs well on legal, finance and HR questions. Which consideration does this describe?',
 ['Cross-domain performance','Single-task accuracy only','Latency only','Image resolution'],
 'Cross-domain performance measures how well one model handles many different subject areas.'],
['一家公司希望有一个在法律、财务和人力资源问题上都表现出色的模型。这描述的是哪项考量？',
 ['跨领域表现','仅看单一任务的准确率','仅看延迟','图像分辨率'],
 '跨领域表现衡量一个模型处理多个不同领域的能力。'],
['Several domains are involved, not one task.','Speed alone does not show quality across domains.','This is about text answers, not images.'],
['涉及多个领域，而不是单一任务。','仅凭速度无法说明跨领域的质量。','这里讲的是文字回答，而不是图像。']);

Q('2.2','multi',[0,1],
['Which TWO factors matter most when choosing a model for a real-time voice assistant on a phone line? (Choose TWO.)',
 ['Low latency','Strong conversational ability','Image generation quality','The size of the model’s training dataset','The model’s release date'],
 'Callers need quick, natural back-and-forth, so speed and conversation skills come first.'],
['为电话线路上的实时语音助手选择模型时，哪两个因素最重要？（选择两项）',
 ['低延迟','出色的对话能力','图像生成质量','模型训练数据集的大小','模型的发布日期'],
 '来电者需要快速、自然的互动，因此速度和对话能力最重要。'],
['Images play no part in a phone call.','Training data size does not guarantee speed or conversation quality.','Newer is not automatically better for this use case.'],
['电话中不涉及图像。','训练数据的大小并不能保证速度或对话质量。','对这个用例来说，越新并不一定越好。']);

Q('2.2','match',[],
['Match each generative AI limitation to an example of it.',
 [['Hallucination','The model invents a citation that does not exist'],['Nondeterminism','The same question gets a different answer each time'],['Limited interpretability','No one can explain why the model chose this answer'],['Bias','The model assumes nurses are women and engineers are men']],
 'Recognizing each limitation in practice is the first step to mitigating it.'],
['将每种生成式 AI 局限与相应的例子配对。',
 [['幻觉','模型编造了一个不存在的引用'],['不确定性','同一个问题每次得到不同的回答'],['可解释性有限','没有人能解释模型为什么选择这个答案'],['偏见','模型默认护士是女性、工程师是男性']],
 '在实践中识别每种局限，是缓解它的第一步。']);

Q('2.2','single',[0],
['Which is an advantage of generative AI over traditional ML?',
 ['It can take on new tasks through prompts, without task-specific labeled data','It is always more accurate on tabular predictions','It is cheaper per prediction for simple tasks','It is fully explainable'],
 'Foundation models adapt to new tasks by prompting, which traditional ML cannot do.'],
['与传统机器学习相比，生成式 AI 的一项优势是什么？',
 ['无需特定任务的标记数据，通过提示就能承担新任务','在表格预测上总是更准确','对于简单任务，每次预测更便宜','完全可解释'],
 '基础模型可以通过提示适应新任务，这是传统机器学习做不到的。'],
['Traditional ML often wins on tabular data.','Traditional ML is usually cheaper for simple, high-volume predictions.','Generative models are harder to explain.'],
['在表格数据上，传统机器学习往往更胜一筹。','对于简单、高频的预测，传统机器学习通常更便宜。','生成式模型更难解释。']);

Q('2.2','single',[0],
['A system would automatically publish medication doses written by a generative AI model, with no human review. What is the main concern?',
 ['Outputs can be wrong, so this needs human review or a deterministic system','Setting the temperature to 0 guarantees correct answers','A larger model removes all errors','Generative AI is always correct about medical facts'],
 'Where errors can cause harm, generative AI output must be verified.'],
['某系统会在没有人工审核的情况下，自动发布由生成式 AI 模型撰写的药物剂量。主要顾虑是什么？',
 ['输出可能出错，因此需要人工审核或改用确定性系统','把温度设为 0 就能保证答案正确','更大的模型能消除所有错误','生成式 AI 对医学事实总是正确的'],
 '当错误可能造成伤害时，生成式 AI 的输出必须经过核实。'],
['Temperature 0 makes answers repeatable, not correct.','Larger models still hallucinate.','No model is always right, especially on critical facts.'],
['温度设为 0 只能让回答可复现，而不能保证正确。','更大的模型仍会产生幻觉。','没有任何模型总是正确，尤其是在关键事实上。']);

/* ================= 2.3 AWS infrastructure and technologies ================= */
Q('2.3','single',[0],
['Which open-source SDK from AWS lets developers build AI agents in a few lines of code, letting the model plan and choose tools?',
 ['Strands Agents','Kiro','Amazon Quick','SageMaker Ground Truth'],
 'Strands Agents takes a model-driven approach: you give the model a prompt and tools, and it plans the steps.'],
['AWS 的哪个开源 SDK 让开发人员只用几行代码就能构建 AI 智能体，由模型自行规划并选择工具？',
 ['Strands Agents','Kiro','Amazon Quick','SageMaker Ground Truth'],
 'Strands Agents 采用模型驱动的方法：只需给模型提示和工具，由它来规划步骤。'],
['Kiro is an agentic IDE, not an agent SDK.','Quick is for business users’ analytics and assistants.','Ground Truth is for labeling data.'],
['Kiro 是智能体 IDE，而不是智能体 SDK。','Quick 面向业务用户的分析和助手。','Ground Truth 用于数据标记。']);

Q('2.3','single',[0],
['A team wants to visually link a prompt, a knowledge base lookup and an AWS Lambda function into a reusable generative AI workflow, without writing orchestration code. Which feature fits?',
 ['Amazon Bedrock Flows','Amazon Polly','AWS CloudTrail','Amazon Kendra'],
 'Bedrock Flows connects prompts, knowledge bases, Lambda and other nodes into workflows.'],
['一个团队希望把提示、知识库查询和 AWS Lambda 函数可视化地串联成可复用的生成式 AI 工作流，而不必编写编排代码。哪项功能合适？',
 ['Amazon Bedrock Flows','Amazon Polly','AWS CloudTrail','Amazon Kendra'],
 'Bedrock Flows 可以把提示、知识库、Lambda 等节点连接成工作流。'],
['Polly converts text to speech.','CloudTrail records API activity.','Kendra is an enterprise search service.'],
['Polly 把文本转成语音。','CloudTrail 记录 API 活动。','Kendra 是企业搜索服务。']);

Q('2.3','single',[0],
['A company fine-tuned an open-source Llama model outside AWS and wants to run it serverlessly alongside other Bedrock models. Which feature fits?',
 ['Amazon Bedrock Custom Model Import','Amazon Bedrock Guardrails','Amazon Bedrock Knowledge Bases','Amazon Bedrock Model Evaluation'],
 'Custom Model Import brings supported open-weight models you have customized into Bedrock.'],
['一家公司在 AWS 之外微调了一个开源 Llama 模型，希望以无服务器方式与其他 Bedrock 模型一起运行。哪项功能合适？',
 ['Amazon Bedrock Custom Model Import','Amazon Bedrock Guardrails','Amazon Bedrock Knowledge Bases','Amazon Bedrock Model Evaluation'],
 'Custom Model Import 可以把你定制过的受支持开放权重模型导入 Bedrock。'],
['Guardrails filter content; they do not host models.','Knowledge Bases provide RAG, not model hosting.','Model Evaluation compares models; it does not import them.'],
['Guardrails 用于过滤内容，不托管模型。','Knowledge Bases 提供 RAG，而不是托管模型。','Model Evaluation 用于比较模型，不导入模型。']);

Q('2.3','single',[0],
['A company wants one API to extract structured information from documents, images, audio and video. Which Amazon Bedrock capability fits?',
 ['Amazon Bedrock Data Automation','Amazon Polly','SageMaker Ground Truth','AWS Artifact'],
 'Bedrock Data Automation turns unstructured multimodal content into structured output.'],
['一家公司希望用一个 API 从文档、图像、音频和视频中提取结构化信息。哪项 Amazon Bedrock 功能合适？',
 ['Amazon Bedrock Data Automation','Amazon Polly','SageMaker Ground Truth','AWS Artifact'],
 'Bedrock Data Automation 把非结构化的多模态内容转换成结构化输出。'],
['Polly generates speech.','Ground Truth is for human labeling.','Artifact provides compliance reports.'],
['Polly 生成语音。','Ground Truth 用于人工标记。','Artifact 提供合规报告。']);

Q('2.3','single',[0],
['An agent needs to run Python code safely to analyze an uploaded CSV file. Which AgentCore capability fits?',
 ['AgentCore Code Interpreter, which runs code in an isolated sandbox','Running the code on the customer’s laptop','AgentCore Browser','Amazon Polly'],
 'Code Interpreter executes agent-generated code in a secure, isolated environment.'],
['某个智能体需要安全地运行 Python 代码来分析上传的 CSV 文件。哪项 AgentCore 功能合适？',
 ['AgentCore Code Interpreter：在隔离沙箱中运行代码','在客户的笔记本电脑上运行代码','AgentCore Browser','Amazon Polly'],
 'Code Interpreter 在安全、隔离的环境中执行智能体生成的代码。'],
['Running untrusted code on a customer’s machine is unsafe.','AgentCore Browser is for interacting with websites.','Polly converts text to speech.'],
['在客户机器上运行不受信任的代码并不安全。','AgentCore Browser 用于与网站交互。','Polly 把文本转成语音。']);

Q('2.3','single',[0],
['What is the main difference between using a foundation model in Amazon Bedrock and in SageMaker JumpStart?',
 ['Bedrock gives serverless API access with no infrastructure; JumpStart deploys models to SageMaker endpoints you manage','Bedrock requires you to manage GPU instances; JumpStart is serverless','They are exactly the same service','JumpStart only supports image models'],
 'Bedrock trades control for simplicity; JumpStart gives more control over hosting.'],
['在 Amazon Bedrock 和 SageMaker JumpStart 中使用基础模型，主要区别是什么？',
 ['Bedrock 提供无服务器 API 访问，无需管理基础设施；JumpStart 把模型部署到你自己管理的 SageMaker 端点','Bedrock 需要你管理 GPU 实例；JumpStart 是无服务器的','两者是完全相同的服务','JumpStart 只支持图像模型'],
 'Bedrock 以掌控力换取简便；JumpStart 在托管方面提供更多控制。'],
['That is reversed.','They are different services with different trade-offs.','JumpStart offers many text, image and other models.'],
['这是说反了。','两者是不同的服务，各有取舍。','JumpStart 提供大量文本、图像等模型。']);

Q('2.3','single',[0],
['A company training a very large foundation model needs resilient clusters that recover automatically from hardware failures. Which service fits?',
 ['Amazon SageMaker HyperPod','Amazon Bedrock Guardrails','Amazon Polly','AWS Artifact'],
 'HyperPod provides resilient, large-scale clusters for training foundation models.'],
['一家公司在训练超大型基础模型，需要能从硬件故障中自动恢复的高韧性集群。哪项服务合适？',
 ['Amazon SageMaker HyperPod','Amazon Bedrock Guardrails','Amazon Polly','AWS Artifact'],
 'HyperPod 为基础模型训练提供高韧性的大规模集群。'],
['Guardrails filter model content.','Polly generates speech.','Artifact provides compliance reports.'],
['Guardrails 过滤模型内容。','Polly 生成语音。','Artifact 提供合规报告。']);

Q('2.3','single',[0],
['Why can pay-per-token pricing be cost-effective for an app with low, unpredictable traffic?',
 ['You pay only for what you use, with no idle GPU costs','It is cheaper than every other option at any scale','It includes unlimited free tokens','It requires a large upfront commitment'],
 'On-demand pricing suits spiky or small workloads; commitments suit steady, high volume.'],
['对于流量低且不可预测的应用，为什么按令牌计费可能更划算？',
 ['只为实际用量付费，没有 GPU 闲置成本','在任何规模下都比其他选项便宜','包含无限量的免费令牌','需要大额预付承诺'],
 '按需计费适合波动或小规模的工作负载；承诺用量适合稳定的高流量。'],
['At steady high volume, committed capacity can be cheaper.','There are no unlimited free tokens.','On-demand needs no upfront commitment.'],
['在稳定的高流量下，承诺容量可能更便宜。','不存在无限量的免费令牌。','按需计费无需预付承诺。']);

Q('2.3','single',[0],
['Which Amazon-built foundation model family on Amazon Bedrock includes models for text, image and video generation?',
 ['Amazon Nova','Amazon Kendra','AWS Glue','Amazon Lex'],
 'Amazon Nova includes understanding models (Micro, Lite, Pro) and creative models (Canvas, Reel).'],
['Amazon Bedrock 上哪个由 Amazon 打造的基础模型系列包含文本、图像和视频生成模型？',
 ['Amazon Nova','Amazon Kendra','AWS Glue','Amazon Lex'],
 'Amazon Nova 包括理解类模型（Micro、Lite、Pro）和创作类模型（Canvas、Reel）。'],
['Kendra is an enterprise search service.','Glue is a data integration service.','Lex builds chatbots.'],
['Kendra 是企业搜索服务。','Glue 是数据集成服务。','Lex 用于构建聊天机器人。']);

Q('2.3','single',[0],
['A healthcare provider wants to process patient data with Amazon Bedrock. What should it confirm first?',
 ['That Bedrock is HIPAA-eligible, and that it has a Business Associate Addendum with AWS and configures the service correctly','Nothing, because AWS handles all compliance automatically','That generative AI can never be used with health data','That a public chatbot website would be simpler'],
 'AWS infrastructure supports compliance programs, but customers must still meet their own obligations.'],
['一家医疗机构希望用 Amazon Bedrock 处理患者数据。它首先应确认什么？',
 ['Bedrock 符合 HIPAA 资格，且已与 AWS 签订业务伙伴附录（BAA）并正确配置服务','什么都不用确认，AWS 会自动处理所有合规事项','生成式 AI 永远不能用于健康数据','改用公共聊天网站会更简单'],
 'AWS 基础设施支持各项合规计划，但客户仍须履行自己的义务。'],
['Compliance is a shared responsibility.','Eligible services can be used with health data under the right agreements.','Public chatbots are the riskiest place for patient data.'],
['合规是共同承担的责任。','在正确的协议下，符合资格的服务可以用于健康数据。','公共聊天网站是存放患者数据最危险的地方。']);

Q('2.3','single',[0],
['Which AWS feature lets a company apply the same safety controls across several foundation models?',
 ['Amazon Bedrock Guardrails','Amazon Polly','AWS Trusted Advisor','Amazon Kendra'],
 'One guardrail can be applied to many models, giving consistent safety policies.'],
['哪项 AWS 功能让公司能在多个基础模型上应用相同的安全控制？',
 ['Amazon Bedrock Guardrails','Amazon Polly','AWS Trusted Advisor','Amazon Kendra'],
 '一个防护机制可以应用于多个模型，从而实现一致的安全策略。'],
['Polly generates speech.','Trusted Advisor checks account best practices, not model output.','Kendra is a search service.'],
['Polly 生成语音。','Trusted Advisor 检查账户的最佳实践，而不是模型输出。','Kendra 是搜索服务。']);

Q('2.3','single',[0],
['The newest model is only available in a Region far from the company’s users. What is the trade-off?',
 ['More network latency, and possible data residency conflicts; a nearby Region with an older model may be the better choice','There is no trade-off, because Regions do not matter','Every model is available in every Region','Latency falls as distance grows'],
 'Regional coverage affects latency, compliance and which models you can use.'],
['最新的模型只在离公司用户很远的区域提供。需要权衡什么？',
 ['网络延迟增加，并可能与数据驻留要求冲突；选择附近区域中较旧的模型也许更好','没有任何权衡，因为区域无关紧要','每个模型在每个区域都可用','距离越远延迟越低'],
 '区域覆盖范围会影响延迟、合规以及可用的模型。'],
['Region choice affects latency and compliance.','Model availability varies by Region.','Latency grows with distance.'],
['区域选择会影响延迟和合规。','模型可用性因区域而异。','距离越远，延迟越高。']);

Q('2.3','single',[0],
['A chatbot sends every message, even “hello”, to the largest and most expensive model. How can cost fall without hurting quality much?',
 ['Route simple requests to a smaller model, for example with Amazon Bedrock intelligent prompt routing','Always use the largest model','Raise the maximum output tokens','Turn off prompt caching'],
 'Intelligent prompt routing sends each request to the model that can handle it at the lowest cost.'],
['某聊天机器人把每条消息（哪怕只是“你好”）都发送给最大、最贵的模型。如何在不太影响质量的情况下降低成本？',
 ['把简单请求路由到更小的模型，例如使用 Amazon Bedrock 智能提示路由','始终使用最大的模型','调高最大输出令牌数','关闭提示缓存'],
 '智能提示路由会把每个请求发送给能以最低成本处理它的模型。'],
['That is the current, costly situation.','Longer outputs cost more.','Caching lowers cost; turning it off raises it.'],
['这正是目前高成本的做法。','输出越长成本越高。','缓存能降低成本，关闭它会让成本上升。']);

Q('2.3','single',[0],
['A team needs full control over its training code, instance types and custom algorithms to build a proprietary model. Which service fits?',
 ['Amazon SageMaker AI','Amazon Bedrock','Amazon Quick','Amazon Polly'],
 'SageMaker AI is for building, training and deploying your own models with full control.'],
['一个团队需要完全掌控训练代码、实例类型和自定义算法，以构建专有模型。哪项服务合适？',
 ['Amazon SageMaker AI','Amazon Bedrock','Amazon Quick','Amazon Polly'],
 'SageMaker AI 用于在完全掌控的情况下构建、训练和部署自己的模型。'],
['Bedrock provides managed foundation models, with less control over training.','Quick is for business analytics and assistants.','Polly is a text-to-speech service.'],
['Bedrock 提供托管的基础模型，对训练的控制较少。','Quick 用于业务分析和助手。','Polly 是文本转语音服务。']);

Q('2.3','multi',[0,1],
['Which TWO factors raise the cost of a generative AI application on Amazon Bedrock? (Choose TWO.)',
 ['Longer prompts and outputs, meaning more tokens','Using a larger, more capable model','Using prompt caching for repeated context','Using batch inference for offline jobs','Choosing a smaller model for simple tasks'],
 'Token volume and model size are the main drivers of on-demand cost.'],
['以下哪两个因素会提高 Amazon Bedrock 上生成式 AI 应用的成本？（选择两项）',
 ['更长的提示和输出，即更多令牌','使用更大、能力更强的模型','对重复上下文使用提示缓存','对离线任务使用批量推理','为简单任务选择更小的模型'],
 '令牌用量和模型规模是按需成本的主要来源。'],
['Prompt caching reduces cost.','Batch inference is cheaper than on-demand.','Smaller models cost less.'],
['提示缓存能降低成本。','批量推理比按需调用更便宜。','更小的模型成本更低。']);

Q('2.3','match',[],
['Match each Amazon Bedrock AgentCore component to what it does.',
 [['AgentCore Runtime','Hosts and scales the agent in isolated sessions'],['AgentCore Gateway','Turns APIs and Lambda functions into tools for agents'],['AgentCore Memory','Keeps conversation and long-term user context'],['AgentCore Identity','Manages the agent’s access to other services on a user’s behalf'],['AgentCore Observability','Traces and monitors each step an agent takes']],
 'AgentCore provides the building blocks to run agents securely in production.'],
['将 Amazon Bedrock AgentCore 的每个组件与其功能配对。',
 [['AgentCore Runtime','在隔离的会话中托管并扩展智能体'],['AgentCore Gateway','把 API 和 Lambda 函数转换成智能体可用的工具'],['AgentCore Memory','保存对话以及长期的用户上下文'],['AgentCore Identity','代表用户管理智能体对其他服务的访问'],['AgentCore Observability','跟踪并监控智能体的每一步']],
 'AgentCore 提供在生产环境中安全运行智能体的基本组件。']);

Q('2.3','single',[0],
['Which Amazon Bedrock feature lets you try the same prompt on different models side by side in the console?',
 ['The Bedrock playgrounds (with compare mode)','AWS CloudFormation','AWS Cost Explorer','Amazon Macie'],
 'Playgrounds let you experiment with models and settings before writing code.'],
['Amazon Bedrock 的哪项功能让你在控制台中用同一个提示并排试用不同模型？',
 ['Bedrock 操场（带比较模式）','AWS CloudFormation','AWS Cost Explorer','Amazon Macie'],
 '操场让你在写代码之前试验不同的模型和设置。'],
['CloudFormation deploys infrastructure as code.','Cost Explorer shows spending.','Macie finds sensitive data.'],
['CloudFormation 以代码方式部署基础设施。','Cost Explorer 显示支出情况。','Macie 查找敏感数据。']);

Q('2.3','single',[0],
['A company’s goal is to launch a generative AI pilot in two weeks, then decide whether to invest more. Which approach fits best?',
 ['Start with a managed model on Amazon Bedrock using prompt engineering or RAG, and customize later only if needed','Pre-train its own foundation model first','Buy GPU servers before designing anything','Hire a full ML research team before starting'],
 'Managed services and light-weight techniques give the fastest route to a working pilot.'],
['一家公司的目标是两周内上线一个生成式 AI 试点，再决定是否追加投入。哪种方式最合适？',
 ['先在 Amazon Bedrock 上使用托管模型，结合提示工程或 RAG，确有需要时再做定制','先预训练自己的基础模型','在设计任何东西之前先购买 GPU 服务器','在开始之前先组建完整的机器学习研究团队'],
 '托管服务加上轻量级技术，是做出可用试点的最快途径。'],
['Pre-training takes months and huge budgets.','Hardware is not needed for a managed service.','A pilot does not need a research team.'],
['预训练需要数月时间和巨额预算。','使用托管服务无需购买硬件。','试点不需要研究团队。']);

Q('2.3','single',[0],
['Which AWS-designed chip is built for cost-efficient training of large deep learning models?',
 ['AWS Trainium','AWS Inferentia','AWS Graviton','AWS Nitro'],
 'Trainium targets training; Inferentia targets inference.'],
['哪款 AWS 自研芯片专为高性价比地训练大型深度学习模型而设计？',
 ['AWS Trainium','AWS Inferentia','AWS Graviton','AWS Nitro'],
 'Trainium 面向训练；Inferentia 面向推理。'],
['Inferentia is designed for inference.','Graviton is a general-purpose CPU.','Nitro is the virtualization and security system behind EC2.'],
['Inferentia 专为推理设计。','Graviton 是通用 CPU。','Nitro 是 EC2 背后的虚拟化与安全系统。']);

Q('2.3','order',[],
['Put these steps to build and run an agent with Strands Agents and Amazon Bedrock AgentCore in order.',
 ['Define the agent’s instructions and tools with Strands Agents','Test the agent locally','Deploy it to AgentCore Runtime','Monitor its runs with AgentCore Observability'],
 'Build and test first, then deploy to managed hosting, then observe it in production.'],
['按顺序排列使用 Strands Agents 和 Amazon Bedrock AgentCore 构建并运行智能体的步骤。',
 ['用 Strands Agents 定义智能体的指令和工具','在本地测试智能体','把它部署到 AgentCore Runtime','用 AgentCore Observability 监控其运行'],
 '先构建和测试，再部署到托管环境，最后在生产中观察它。']);
})();
