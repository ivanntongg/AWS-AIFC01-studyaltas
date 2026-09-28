/* Fifth question set (v1.3), domain 3: applications of foundation models. Append-only. */
(function(){
function Q(k, t, a, en, zh, wEn, wZh){
  var q = {k: k, d: 'd' + k.charAt(0), t: t, a: a, en: {q: en[0], o: en[1], x: en[2]}, zh: {q: zh[0], o: zh[1], x: zh[2]}};
  if (wEn) { var pad = a.map(function(){ return ''; }); q.w = {en: pad.concat(wEn), zh: pad.concat(wZh)}; }
  AIF.qs.push(q);
}

/* ================= 3.1 Design considerations for FM applications ================= */
Q('3.1','single',[0],
['A data-extraction app must return the same JSON fields reliably for the same document. Which temperature setting fits best?',
 ['A low temperature, such as 0 to 0.2','A high temperature, such as 1.0 or above','A high temperature combined with top-p of 1','Temperature does not affect the output'],
 'Low temperature makes the model pick the most likely tokens, giving consistent, predictable output.'],
['一个数据提取应用必须对同一文档稳定地返回相同的 JSON 字段。哪种温度设置最合适？',
 ['较低的温度，例如 0 到 0.2','较高的温度，例如 1.0 或更高','较高的温度加上 top-p 为 1','温度不影响输出'],
 '低温度让模型选择最可能的令牌，使输出一致、可预测。'],
['High temperature adds randomness, which hurts consistency.','That combination maximizes variety, the opposite of what is needed.','Temperature directly controls randomness.'],
['高温度会增加随机性，损害一致性。','这种组合会最大化多样性，与需求相反。','温度直接控制随机性。']);

Q('3.1','single',[0],
['What does setting top-k to 5 do?',
 ['The model chooses each next token only from the 5 most likely tokens','The model returns 5 different answers','The response is limited to 5 words','The knowledge base retrieves 5 documents'],
 'Top-k limits sampling to the k most probable tokens, reducing unlikely word choices.'],
['把 top-k 设为 5 有什么作用？',
 ['模型在选择每个下一个令牌时，只从最可能的 5 个令牌中挑选','模型返回 5 个不同的答案','回答限制为 5 个词','知识库检索 5 篇文档'],
 'top-k 把采样限制在概率最高的 k 个令牌中，减少不太可能的用词。'],
['It shapes one response; it does not create several.','Length is controlled by maximum tokens.','Retrieval count is a separate knowledge base setting.'],
['它影响的是单个回答，不会生成多个回答。','长度由最大令牌数控制。','检索数量是知识库的另一个设置。']);

Q('3.1','single',[0],
['A prompt uses 7,500 tokens, the model’s context window is 8,000 tokens, and the request asks for up to 1,000 output tokens. What is likely to happen?',
 ['The request exceeds the context window, so it fails or the output is cut short; shorten the input or the output','The model compresses the input automatically with no loss','Nothing, because output tokens do not count','The model switches to a larger context window by itself'],
 'Input and output together must fit in the context window.'],
['某提示使用 7,500 个令牌，模型的上下文窗口是 8,000 个令牌，而请求要求最多输出 1,000 个令牌。可能会发生什么？',
 ['请求超出上下文窗口，因此会失败或输出被截断；应缩短输入或输出','模型会自动无损压缩输入','不会有问题，因为输出令牌不计入','模型会自动切换到更大的上下文窗口'],
 '输入和输出加起来必须在上下文窗口之内。'],
['Models do not silently compress input without loss.','Output tokens do count toward the window.','The context window is fixed for each model.'],
['模型不会悄悄地无损压缩输入。','输出令牌同样计入上下文窗口。','每个模型的上下文窗口是固定的。']);

Q('3.1','single',[0],
['A company expects to fine-tune its model later. What should it check when choosing a foundation model now?',
 ['Whether the model supports customization, such as fine-tuning in Amazon Bedrock','The model’s logo colour','Only the model’s release date','Only how many languages it supports'],
 'Customization support is a selection criterion: not every model can be fine-tuned.'],
['一家公司预计以后要微调模型。现在选择基础模型时应检查什么？',
 ['该模型是否支持定制，例如在 Amazon Bedrock 中进行微调','模型标志的颜色','只看模型的发布日期','只看它支持多少种语言'],
 '是否支持定制是一项选择标准：并非所有模型都能微调。'],
['Branding has nothing to do with capability.','A newer model may not support fine-tuning.','Language support matters, but not for this requirement.'],
['品牌外观与能力无关。','较新的模型不一定支持微调。','语言支持很重要，但与这项需求无关。']);

Q('3.1','single',[0],
['A field-service app must summarize notes on a tablet with no internet connection. Which model choice fits?',
 ['A small model that can run on the device','The largest model through a cloud API','A video generation model','A 70-billion-parameter model on the tablet'],
 'Offline, on-device use limits you to small, efficient models.'],
['一个外勤服务应用必须在没有网络的平板上总结笔记。哪种模型选择合适？',
 ['可以在设备上运行的小型模型','通过云端 API 调用最大的模型','视频生成模型','在平板上运行 700 亿参数的模型'],
 '离线、在设备端使用，只能选择小巧高效的模型。'],
['A cloud API needs an internet connection.','The task is text summarization.','That model is far too large for a tablet.'],
['云端 API 需要网络连接。','这是文本总结任务。','该模型对平板来说过于庞大。']);

Q('3.1','single',[0],
['Which is a strong business use of retrieval augmented generation (RAG)?',
 ['An HR assistant that answers from the current employee handbook and cites the policy it used','Generating random wallpaper images','Forecasting stock prices from numbers alone','Pre-training a brand-new foundation model'],
 'RAG answers questions from your own, up-to-date documents with sources.'],
['以下哪项是检索增强生成（RAG）的理想业务用途？',
 ['根据最新员工手册回答问题并注明所用政策的人力资源助手','生成随机的壁纸图片','仅凭数字预测股价','预训练一个全新的基础模型'],
 'RAG 基于你自己的最新文档回答问题，并提供出处。'],
['Image generation does not need document retrieval.','Numeric forecasting is a traditional ML task.','RAG uses an existing model; it does not pre-train one.'],
['图像生成不需要检索文档。','数值预测是传统机器学习任务。','RAG 使用现有模型，不会预训练模型。']);

Q('3.1','single',[0],
['Why does RAG reduce hallucinations?',
 ['It grounds answers in relevant source text that the model is told to use','It retrains the model’s weights','It raises the temperature','It removes the need for a prompt'],
 'Giving the model the facts in its context, and telling it to rely on them, reduces made-up answers.'],
['为什么 RAG 能减少幻觉？',
 ['它让回答基于相关的源文本，并要求模型使用这些文本','它会重新训练模型权重','它会调高温度','它让提示变得不再需要'],
 '把事实放进模型的上下文并要求它依据这些事实作答，可以减少编造的答案。'],
['RAG does not change the model’s weights.','Higher temperature would increase randomness.','RAG builds a richer prompt; it does not remove it.'],
['RAG 不改变模型权重。','调高温度会增加随机性。','RAG 会构建更丰富的提示，而不是去掉提示。']);

Q('3.1','single',[0],
['A team already runs Amazon Aurora PostgreSQL for its app and wants to add vector search with as little new infrastructure as possible. What should it use?',
 ['The pgvector extension in Aurora PostgreSQL','Amazon Neptune','A new Amazon S3 Glacier vault','Amazon Polly'],
 'pgvector adds vector storage and similarity search to PostgreSQL, next to existing data.'],
['一个团队的应用已经在使用 Amazon Aurora PostgreSQL，希望以尽量少的新基础设施加入向量搜索。应该使用什么？',
 ['Aurora PostgreSQL 中的 pgvector 扩展','Amazon Neptune','新建一个 Amazon S3 Glacier 存储库','Amazon Polly'],
 'pgvector 为 PostgreSQL 增加了向量存储和相似度搜索，可与现有数据放在一起。'],
['Neptune is a graph database, a separate new service.','Glacier is archive storage with no vector search.','Polly converts text to speech.'],
['Neptune 是图数据库，属于另一项新服务。','Glacier 是归档存储，不支持向量搜索。','Polly 把文本转成语音。']);

Q('3.1','single',[0],
['Which service offers vector search together with full-text keyword search in one engine, so a RAG app can use hybrid search?',
 ['Amazon OpenSearch Service','Amazon Simple Queue Service (Amazon SQS)','Amazon Polly','AWS Glue'],
 'OpenSearch combines keyword (lexical) and vector (semantic) search.'],
['哪项服务在同一个引擎中同时提供向量搜索和全文关键词搜索，让 RAG 应用可以使用混合搜索？',
 ['Amazon OpenSearch Service','Amazon Simple Queue Service (Amazon SQS)','Amazon Polly','AWS Glue'],
 'OpenSearch 同时支持关键词（词法）搜索和向量（语义）搜索。'],
['SQS is a message queue; it does not search.','Polly generates speech.','Glue is for data integration.'],
['SQS 是消息队列，不提供搜索功能。','Polly 生成语音。','Glue 用于数据集成。']);

Q('3.1','single',[0],
['A company adds new files to the Amazon S3 bucket behind its Amazon Bedrock knowledge base. What must happen before the chatbot can use them?',
 ['Run a sync (ingestion job) so the new files are chunked, embedded and indexed','Nothing, because new files are searchable instantly','Retrain the foundation model','Restart Amazon Bedrock'],
 'Knowledge bases index data during ingestion; syncing picks up new and changed files.'],
['一家公司向其 Amazon Bedrock 知识库背后的 Amazon S3 存储桶添加了新文件。聊天机器人使用这些文件之前需要做什么？',
 ['运行同步（摄取任务），让新文件被分块、嵌入并编入索引','什么都不用做，新文件会立即可被搜索','重新训练基础模型','重启 Amazon Bedrock'],
 '知识库在摄取过程中建立索引；同步会纳入新增和修改的文件。'],
['Files are only searchable after ingestion.','RAG does not require retraining the model.','Bedrock is a managed service; there is nothing to restart.'],
['文件只有在摄取之后才能被搜索。','RAG 不需要重新训练模型。','Bedrock 是托管服务，不需要重启。']);

Q('3.1','single',[0],
['A RAG app must only retrieve documents that belong to the user’s own department. Which technique fits?',
 ['Metadata filtering on retrieval, for example on a department attribute','A higher temperature','Bigger chunks','A separately fine-tuned model for each department'],
 'Metadata filters narrow the search to documents with matching attributes.'],
['某 RAG 应用只能检索属于用户所在部门的文档。哪种技术合适？',
 ['在检索时进行元数据过滤，例如按部门属性过滤','调高温度','使用更大的文本块','为每个部门单独微调一个模型'],
 '元数据过滤会把搜索范围限定在属性匹配的文档中。'],
['Temperature does not control which documents are retrieved.','Chunk size does not restrict access.','Fine-tuning per department is costly and does not limit retrieval.'],
['温度不控制检索哪些文档。','块大小不会限制访问范围。','按部门微调成本高，而且不能限制检索。']);

Q('3.1','single',[0],
['A RAG system retrieves relevant chunks, but the best ones often end up at the bottom of the list. What helps?',
 ['A reranker model that reorders results by relevance to the question','A higher temperature','Setting chunk overlap to zero','Switching to an image model'],
 'Reranking scores the retrieved chunks again so the most relevant ones reach the model first.'],
['某 RAG 系统能检索到相关的文本块，但最好的那些常常排在列表末尾。什么方法有帮助？',
 ['使用重排序模型，按与问题的相关性重新排列结果','调高温度','把块重叠设为 0','换用图像模型'],
 '重排序会重新为检索结果打分，让最相关的内容最先交给模型。'],
['Temperature affects generation, not retrieval order.','Overlap does not change ranking.','This is a text retrieval problem.'],
['温度影响生成，而不是检索顺序。','重叠不会改变排序。','这是文本检索问题。']);

Q('3.1','single',[0],
['Why is pre-training a foundation model from scratch rarely the right choice for a company?',
 ['It needs enormous amounts of data, compute and time, and existing models plus customization usually meet the need','It is illegal','It is impossible on AWS','It always produces a less accurate model'],
 'Pre-training is the most expensive customization option, so it is kept for very special cases.'],
['为什么从头预训练基础模型对大多数公司来说很少是正确选择？',
 ['它需要海量的数据、算力和时间，而现有模型加上定制通常就能满足需求','这是违法的','在 AWS 上无法做到','它得到的模型总是更不准确'],
 '预训练是成本最高的定制方式，只适用于非常特殊的情况。'],
['It is legal; it is just very costly.','AWS offers infrastructure such as SageMaker HyperPod for it.','A well-trained model can be excellent; cost is the issue.'],
['它是合法的，只是成本极高。','AWS 提供了 SageMaker HyperPod 等基础设施来支持它。','训练得好的模型可以非常出色，问题在于成本。']);

Q('3.1','single',[0],
['A team adds 20 examples to every prompt (in-context learning). When can this become more expensive than fine-tuning?',
 ['At very high request volume, when the extra input tokens on every call cost more than a one-time fine-tune and its hosting','Never, because in-context learning is free','Only when the model is small','Only when the examples are images'],
 'In-context learning has no training cost, but it adds tokens to every single request.'],
['一个团队在每个提示中加入 20 个示例（上下文学习）。什么时候这可能比微调更贵？',
 ['请求量非常大时，每次调用增加的输入令牌费用会超过一次性微调及其托管的费用','永远不会，因为上下文学习是免费的','只有模型很小时','只有示例是图像时'],
 '上下文学习没有训练成本，但每一次请求都会增加令牌。'],
['Every extra token in the prompt is billed.','Cost depends on volume and prompt length, not model size alone.','Text examples add tokens too.'],
['提示中每个额外的令牌都要计费。','成本取决于调用量和提示长度，而不只是模型大小。','文本示例同样会增加令牌。']);

Q('3.1','single',[0],
['What role does an AI agent play in an application?',
 ['It uses a foundation model to reason, plan steps and call tools or APIs to complete a goal','It only stores vectors','It only formats text','It replaces the database'],
 'Agents turn a model into a system that can take actions, not just answer.'],
['AI 智能体在应用中扮演什么角色？',
 ['利用基础模型进行推理、规划步骤，并调用工具或 API 来完成目标','只存储向量','只格式化文本','取代数据库'],
 '智能体把模型变成能采取行动的系统，而不只是回答问题。'],
['Vector databases store vectors.','Formatting is a small part of what agents do.','Agents use databases through tools; they do not replace them.'],
['向量数据库负责存储向量。','格式化只是智能体工作中很小的一部分。','智能体通过工具使用数据库，而不是取代它。']);

Q('3.1','single',[0],
['In Amazon Bedrock Agents, what defines the actions (APIs) an agent can call?',
 ['Action groups, described with an OpenAPI schema or function details and usually backed by AWS Lambda','Guardrails','Knowledge bases','Prompt templates alone'],
 'Action groups tell the agent which operations exist and how to call them.'],
['在 Amazon Bedrock Agents 中，由什么定义智能体可以调用的操作（API）？',
 ['操作组：用 OpenAPI 架构或函数详情描述，通常由 AWS Lambda 实现','防护机制','知识库','仅靠提示模板'],
 '操作组告诉智能体有哪些操作可用以及如何调用。'],
['Guardrails filter content; they do not define actions.','Knowledge bases supply information for RAG.','Templates shape prompts but do not register callable APIs.'],
['防护机制过滤内容，不定义操作。','知识库为 RAG 提供信息。','模板用于组织提示，但不会注册可调用的 API。']);

Q('3.1','multi',[0,1],
['Which TWO model selection criteria matter most for a customer chat app used worldwide? (Choose TWO.)',
 ['Support for many languages','Low latency','The ability to generate video','How many GPUs AWS owns','Whether the model is a diffusion model'],
 'Global chat needs good multilingual quality and fast replies.'],
['对于面向全球用户的客户聊天应用，哪两项模型选择标准最重要？（选择两项）',
 ['支持多种语言','低延迟','能否生成视频','AWS 拥有多少 GPU','该模型是否为扩散模型'],
 '全球化聊天需要良好的多语言能力和快速回复。'],
['Chat does not need video generation.','That is not a selection criterion for a model.','Diffusion models generate images, not chat.'],
['聊天不需要生成视频。','这不是模型的选择标准。','扩散模型生成图像，而不是用于聊天。']);

Q('3.1','multi',[0,1],
['Which TWO actions reduce the cost of a RAG application? (Choose TWO.)',
 ['Retrieve fewer, more relevant chunks so prompts are shorter','Use prompt caching for a long system prompt that repeats','Add every document to every prompt','Use the largest model for all questions','Set a very high maximum output'],
 'Fewer tokens and cached repeated context both cut cost.'],
['以下哪两项措施可以降低 RAG 应用的成本？（选择两项）',
 ['检索更少但更相关的文本块，让提示更短','对重复出现的长系统提示使用提示缓存','把所有文档都放进每个提示','对所有问题都使用最大的模型','设置非常高的最大输出'],
 '减少令牌和缓存重复上下文都能降低成本。'],
['That makes every prompt huge and expensive.','The largest model costs the most per token.','Longer outputs cost more.'],
['这会让每个提示都变得庞大又昂贵。','最大的模型每个令牌最贵。','更长的输出成本更高。']);

Q('3.1','match',[],
['Match each way of customizing a foundation model to its description.',
 [['Pre-training','Train a model from scratch on massive data'],['Fine-tuning','Train an existing model further on labeled examples'],['In-context learning','Put examples in the prompt, with no training'],['Retrieval augmented generation','Fetch relevant documents at question time'],['Distillation','Train a smaller model to imitate a larger one']],
 'These range from no training at all to training from scratch.'],
['将每种定制基础模型的方式与其描述配对。',
 [['预训练','在海量数据上从头训练模型'],['微调','在已标记的示例上继续训练现有模型'],['上下文学习','把示例放在提示中，无需训练'],['检索增强生成','在提问时获取相关文档'],['蒸馏','训练较小的模型去模仿较大的模型']],
 '这些方式从完全不训练到从头训练不等。']);

Q('3.1','single',[0],
['A company wants every generated message to follow its distinctive brand voice across thousands of outputs, and prompt instructions alone are not enough. Which approach fits?',
 ['Fine-tune the model on examples of on-brand writing','RAG over the brand guidelines only','A higher temperature','A lower maximum token setting'],
 'Fine-tuning shapes style and tone; RAG mainly adds facts.'],
['一家公司希望成千上万条生成内容都保持其独特的品牌语气，但仅靠提示中的指令还不够。哪种方法合适？',
 ['用符合品牌风格的写作示例微调模型','只对品牌指南做 RAG','调高温度','调低最大令牌数'],
 '微调能塑造风格和语气；RAG 主要是补充事实。'],
['RAG supplies information but is weaker at enforcing a consistent style.','Higher temperature makes output less consistent.','Shorter outputs do not change the voice.'],
['RAG 能提供信息，但在保持一致风格方面较弱。','调高温度会让输出更不一致。','更短的输出不会改变语气。']);

/* ================= 3.2 Prompt engineering ================= */
Q('3.2','single',[0],
['Adding “no text, no watermark, no blurry background” to an image generation prompt is an example of what?',
 ['Negative prompting','Chain-of-thought prompting','Few-shot prompting','A system role'],
 'A negative prompt tells the model what to leave out.'],
['在图像生成提示中加入“不要文字、不要水印、不要模糊背景”属于什么？',
 ['负面提示','思维链提示','少量样本提示','系统角色'],
 '负面提示告诉模型要避免哪些内容。'],
['Chain-of-thought asks for step-by-step reasoning.','Few-shot gives examples.','A system role sets the model’s persona.'],
['思维链要求逐步推理。','少量样本是提供示例。','系统角色设定模型的身份。']);

Q('3.2','single',[0],
['In the prompt “Summarize the email below in three bullet points,” followed by the email, which part is the instruction?',
 ['“Summarize the email below in three bullet points”','The email text','The model’s role','The examples'],
 'The instruction is the task you ask the model to do; the email is the input data.'],
['在提示“用三个要点总结下面的邮件”以及随后的邮件中，哪一部分是指令？',
 ['“用三个要点总结下面的邮件”','邮件正文','模型的角色','示例'],
 '指令是要求模型完成的任务；邮件是输入数据。'],
['The email is the input data the instruction works on.','No role is given in this prompt.','No examples are given in this prompt.'],
['邮件是指令所处理的输入数据。','这个提示中没有设定角色。','这个提示中没有示例。']);

Q('3.2','single',[0],
['Adding “Our customers are small-business owners with no accounting background” to a prompt provides what?',
 ['Context','An output indicator','A negative prompt','A hyperparameter'],
 'Context is background information that helps the model tailor its answer.'],
['在提示中加入“我们的客户是没有会计背景的小企业主”提供的是什么？',
 ['上下文','输出指示','负面提示','超参数'],
 '上下文是帮助模型定制回答的背景信息。'],
['An output indicator describes the format of the answer.','A negative prompt lists what to avoid.','Hyperparameters are model settings, not prompt text.'],
['输出指示描述的是回答的格式。','负面提示列出需要避免的内容。','超参数是模型设置，不是提示文字。']);

Q('3.2','single',[0],
['A team needs the model to return JSON with the fields “name” and “date”. What is the best practice?',
 ['State the exact output format in the prompt and show an example of the JSON','Hope the model guesses the format','Increase the temperature','Cut the prompt down to one word'],
 'Being explicit about the format, ideally with an example, gives reliable structure.'],
['团队需要模型返回包含“name”和“date”字段的 JSON。最佳做法是什么？',
 ['在提示中写明确切的输出格式，并给出 JSON 示例','指望模型猜出格式','调高温度','把提示缩短成一个词'],
 '明确说明格式（最好附上示例）能得到稳定的结构。'],
['Relying on guesses gives inconsistent output.','More randomness makes the format less reliable.','Too short a prompt gives the model nothing to go on.'],
['靠猜会导致输出不一致。','更多随机性会让格式更不可靠。','提示过短，模型无从下手。']);

Q('3.2','single',[0],
['Which prompt is the most specific?',
 ['“Write a 100-word product description of a women’s waterproof hiking boot, in a friendly tone, mentioning the two-year warranty.”','“Write about boots.”','“Describe something.”','“Make it good.”'],
 'Specific prompts state the audience, length, tone and key facts.'],
['以下哪个提示最具体？',
 ['“为一款女士防水登山靴写一段 100 字的商品描述，语气友好，并提到两年保修。”','“写一写靴子。”','“描述一样东西。”','“写好一点。”'],
 '具体的提示会说明受众、长度、语气和关键事实。'],
['Too vague: no audience, length or tone.','Too vague to produce anything useful.','Gives no task at all.'],
['太模糊：没有受众、长度或语气。','太模糊，无法产出有用的内容。','根本没有给出任务。']);

Q('3.2','single',[0],
['When is zero-shot prompting usually enough?',
 ['For common, well-defined tasks such as translating a sentence or detecting simple sentiment','When the output must follow an unusual custom format','When the task uses company-specific labels the model has never seen','When earlier attempts gave inconsistent results'],
 'Zero-shot works when the model already understands the task well.'],
['在什么情况下，零样本提示通常就足够了？',
 ['常见且定义明确的任务，例如翻译一个句子或判断简单情感','输出必须遵循不寻常的自定义格式时','任务使用模型从未见过的公司专用标签时','之前的尝试结果不一致时'],
 '当模型已经很了解任务时，零样本提示就能奏效。'],
['Unusual formats usually need examples (few-shot).','Unfamiliar labels need examples or fine-tuning.','Inconsistent results call for examples or clearer instructions.'],
['不寻常的格式通常需要示例（少量样本）。','陌生的标签需要示例或微调。','结果不一致需要示例或更清晰的指令。']);

Q('3.2','single',[0],
['Which task benefits most from chain-of-thought prompting?',
 ['A multi-step maths word problem','Translating a single word','Generating a logo','Listing the colours of the rainbow'],
 'Chain-of-thought helps when the answer depends on several reasoning steps.'],
['哪项任务最能从思维链提示中受益？',
 ['多步骤的数学应用题','翻译一个单词','生成标志','列出彩虹的颜色'],
 '当答案依赖多个推理步骤时，思维链最有帮助。'],
['A single word needs no reasoning steps.','Image generation does not use written reasoning steps.','A simple recall task needs no reasoning.'],
['单个词不需要推理步骤。','图像生成不使用文字推理步骤。','简单的回忆任务不需要推理。']);

Q('3.2','single',[0],
['What is the best way to improve a prompt’s results?',
 ['Iterate: test variants on a set of sample inputs, compare the outputs and keep the best version','Write it once and never change it','Always use the longest possible prompt','Copy prompts from the internet unchanged'],
 'Prompt engineering is experimental: measure, adjust and repeat.'],
['提升提示效果的最佳方式是什么？',
 ['反复迭代：用一组样本输入测试不同版本，比较输出并保留最好的版本','写一次后永不修改','总是使用尽可能长的提示','原样照搬网上的提示'],
 '提示工程是一个试验过程：衡量、调整、再重复。'],
['A first draft is rarely the best version.','Longer is not automatically better and costs more.','Prompts need adapting to your task and model.'],
['初稿很少是最佳版本。','越长不一定越好，而且成本更高。','提示需要根据你的任务和模型进行调整。']);

Q('3.2','single',[0],
['A team uses quick prompts to explore what a new model can do before committing to a design. Which benefit of prompt engineering is this?',
 ['Discovery','Poisoning','Jailbreaking','Tokenization'],
 'Prompting lets teams discover a model’s capabilities cheaply and quickly.'],
['一个团队在确定设计之前，先用简单提示探索新模型能做什么。这体现了提示工程的哪项好处？',
 ['发现能力','投毒','越狱','分词'],
 '提示让团队能以低成本快速发现模型的能力。'],
['Poisoning is an attack.','Jailbreaking is an attack.','Tokenization is internal text processing.'],
['投毒是一种攻击。','越狱是一种攻击。','分词是内部的文本处理过程。']);

Q('3.2','single',[0],
['Which is a prompt engineering best practice for safety?',
 ['Combine clear instructions with guardrails, such as Amazon Bedrock Guardrails, instead of relying on the prompt alone','Ask users to behave','Turn off logging','Put secrets in the system prompt'],
 'Prompts can be bypassed, so safety needs enforced controls as well.'],
['以下哪项是保障安全的提示工程最佳实践？',
 ['把清晰的指令与防护机制（例如 Amazon Bedrock Guardrails）结合，而不是只依赖提示','要求用户守规矩','关闭日志记录','把机密信息放进系统提示'],
 '提示可能被绕过，因此安全还需要强制性的控制措施。'],
['Attackers will not follow such requests.','Logs are needed to detect abuse.','Secrets in a prompt can be leaked.'],
['攻击者不会遵守这种请求。','需要日志来发现滥用。','提示中的机密可能被泄露。']);

Q('3.2','single',[0],
['Why use delimiters, such as XML tags or ###, to separate instructions from pasted user content?',
 ['They help the model tell instructions apart from data, which improves accuracy and lowers the risk of injection','They reduce the token count to zero','The model cannot read the prompt without them','The law requires them'],
 'Clearly separated sections make prompts easier for the model to follow.'],
['为什么要用分隔符（例如 XML 标签或 ###）把指令和粘贴进来的用户内容分开？',
 ['帮助模型区分指令和数据，提高准确性并降低注入风险','能把令牌数减到零','没有它们模型就读不懂提示','法律要求使用'],
 '清晰分隔的各个部分让模型更容易遵循提示。'],
['Delimiters add a few tokens, not remove them.','Models can read prompts without them; they just work better with them.','There is no such legal requirement.'],
['分隔符会增加少量令牌，而不是减少。','没有分隔符模型也能读，只是有了它们效果更好。','并没有这样的法律要求。']);

Q('3.2','single',[0],
['A bank’s chatbot is manipulated into writing poems and advertising for the attacker’s unrelated product. What is this?',
 ['Prompt hijacking','Data poisoning','Prompt exposure','Overfitting'],
 'Hijacking redirects the model away from its intended task toward the attacker’s goal.'],
['某银行的聊天机器人被操纵去为攻击者无关的产品写诗和打广告。这是什么？',
 ['提示劫持','数据投毒','提示暴露','过拟合'],
 '劫持会让模型偏离预定任务，转而为攻击者的目的服务。'],
['Poisoning corrupts training or retrieval data.','Exposure reveals hidden prompts or data.','Overfitting is a training problem.'],
['投毒是污染训练或检索数据。','泄露是暴露隐藏的提示或数据。','过拟合是训练问题。']);

Q('3.2','single',[0],
['How can a team reduce the risk of its system prompt being exposed to users?',
 ['Keep secrets out of the system prompt, and add output filtering and instructions not to reveal it','Put all secrets in the system prompt so the model knows them','Publish the system prompt on the website','Raise the temperature'],
 'Assume a system prompt can leak, so never store secrets in it.'],
['团队如何降低系统提示暴露给用户的风险？',
 ['不在系统提示中放机密，并加入输出过滤以及“不得泄露”的指令','把所有机密都放进系统提示，让模型知道','在网站上公开系统提示','调高温度'],
 '要假设系统提示可能泄露，因此绝不在其中存放机密。'],
['That turns any leak into a data breach.','That exposes it on purpose.','Temperature has no effect on leakage.'],
['这样一旦泄露就成了数据泄露事件。','这等于主动公开。','温度对泄露没有影响。']);

Q('3.2','single',[0],
['Attackers slip wrong examples into the data used to fine-tune a model, so it learns a hidden harmful behaviour. What is this?',
 ['Poisoning','Hijacking','Jailbreaking','Exposure'],
 'Poisoning corrupts the data a model learns from or retrieves.'],
['攻击者在用于微调模型的数据中混入错误示例，让模型学会一种隐藏的有害行为。这是什么？',
 ['投毒','劫持','越狱','泄露'],
 '投毒会污染模型学习或检索所用的数据。'],
['Hijacking manipulates a running model through prompts.','Jailbreaking tricks a model past its safety rules through prompts.','Exposure leaks hidden information.'],
['劫持是通过提示操纵运行中的模型。','越狱是通过提示诱使模型绕过安全规则。','泄露是暴露隐藏的信息。']);

Q('3.2','single',[0],
['In Amazon Bedrock Prompt Management, a prompt reads “Translate {{text}} into {{language}}.” What are {{text}} and {{language}}?',
 ['Variables that are filled in at run time, making the prompt a reusable template','Guardrail policies','Model hyperparameters','Knowledge base IDs'],
 'Variables let one managed prompt serve many requests.'],
['在 Amazon Bedrock Prompt Management 中，某个提示写着“Translate {{text}} into {{language}}”。其中的 {{text}} 和 {{language}} 是什么？',
 ['运行时填入的变量，让提示成为可复用的模板','防护机制策略','模型超参数','知识库 ID'],
 '变量让一个托管的提示可以服务许多请求。'],
['Guardrails are configured separately.','Hyperparameters such as temperature are separate settings.','Knowledge bases are not referenced this way.'],
['防护机制需要单独配置。','温度等超参数是另外的设置。','知识库不是这样引用的。']);

Q('3.2','multi',[0,1],
['Which TWO help defend a chatbot against jailbreaking? (Choose TWO.)',
 ['The prompt attack filter in Amazon Bedrock Guardrails','Testing with adversarial (red-team) prompts before launch','A higher temperature','Longer outputs','Publishing the system prompt'],
 'Automated filtering plus adversarial testing catches most jailbreak attempts.'],
['以下哪两项有助于保护聊天机器人免遭越狱攻击？（选择两项）',
 ['Amazon Bedrock Guardrails 中的提示攻击过滤器','上线前用对抗性（红队）提示进行测试','调高温度','更长的输出','公开系统提示'],
 '自动过滤加上对抗性测试可以拦住大多数越狱尝试。'],
['More randomness does not block attacks.','Output length has nothing to do with defence.','That helps attackers.'],
['更多随机性无法阻止攻击。','输出长度与防御无关。','这只会帮助攻击者。']);

Q('3.2','order',[],
['Put these prompt engineering steps in order.',
 ['Define the goal and how success will be measured','Write a first version of the prompt','Test it on a set of sample inputs','Review the outputs and adjust the wording or examples','Save the best version as a template'],
 'Prompt engineering is an iterative, measured process.'],
['按顺序排列以下提示工程步骤。',
 ['明确目标以及衡量成功的方式','写出提示的第一版','用一组样本输入进行测试','检查输出并调整措辞或示例','把效果最好的版本保存为模板'],
 '提示工程是一个可衡量的迭代过程。']);

/* ================= 3.3 Training and fine-tuning ================= */
Q('3.3','single',[0],
['What kind of data is used to pre-train a foundation model?',
 ['Massive amounts of broad, mostly unlabeled data','A small labeled dataset','Only images','Only user feedback'],
 'Pre-training learns general patterns from huge, varied datasets.'],
['预训练基础模型使用的是什么样的数据？',
 ['海量、广泛且大多未标记的数据','小型的已标记数据集','只有图像','只有用户反馈'],
 '预训练从庞大且多样的数据中学习通用规律。'],
['Small labeled sets are used for fine-tuning.','Many foundation models learn from text, code and more.','Feedback is used later to refine a model.'],
['小型已标记数据集用于微调。','许多基础模型从文本、代码等多种数据中学习。','反馈用于之后对模型的改进。']);

Q('3.3','single',[0],
['During pre-training, an LLM learns by predicting the next token in text. Which learning approach is this?',
 ['Self-supervised learning','Reinforcement learning from rewards','Supervised learning with a human label for every token','Clustering'],
 'The text supplies its own “labels”: the next token is the answer to predict.'],
['在预训练期间，LLM 通过预测文本中的下一个令牌来学习。这是哪种学习方式？',
 ['自监督学习','基于奖励的强化学习','每个令牌都有人工标签的监督学习','聚类'],
 '文本本身就提供了“标签”：下一个令牌就是要预测的答案。'],
['No reward signal is used here.','No human labels each token.','Clustering groups data; it does not predict tokens.'],
['这里没有使用奖励信号。','没有人为每个令牌打标签。','聚类是分组，不预测令牌。']);

Q('3.3','single',[0],
['In model distillation, what is the “teacher”?',
 ['The large model whose outputs are used to train a smaller “student” model','A human reviewer','The training dataset','The GPU'],
 'The student learns to imitate the teacher’s answers.'],
['在模型蒸馏中，“教师”指什么？',
 ['用其输出来训练较小“学生”模型的大模型','人工审核员','训练数据集','GPU'],
 '学生模型学习模仿教师模型的回答。'],
['Distillation learns from a model, not a person.','The dataset is the prompts, not the teacher.','Hardware is not part of the concept.'],
['蒸馏是向模型学习，而不是向人学习。','数据集是提示，而不是教师。','硬件不属于这个概念的一部分。']);

Q('3.3','single',[0],
['What does Amazon Bedrock Model Distillation mainly help you achieve?',
 ['A smaller, faster and cheaper model that comes close to a larger model’s accuracy for your use case','A larger model','A model that can generate images','A model that needs no data at all'],
 'Distillation transfers a large model’s skill on your task into a more efficient model.'],
['Amazon Bedrock Model Distillation 主要帮助你实现什么？',
 ['得到更小、更快、更便宜的模型，在你的用例上接近大模型的准确率','得到更大的模型','得到能生成图像的模型','得到完全不需要数据的模型'],
 '蒸馏把大模型在你任务上的能力迁移到更高效的模型中。'],
['The goal is a smaller model.','Distillation does not add new modalities.','It still needs prompts from your use case.'],
['目标是更小的模型。','蒸馏不会增加新的模态。','它仍然需要来自你用例的提示。']);

Q('3.3','single',[0],
['A bank fine-tunes a general model on its own customer-service transcripts so it uses banking terms correctly. What is this?',
 ['Domain adaptation through fine-tuning','Pre-training from scratch','Retrieval augmented generation','Prompt caching'],
 'Fine-tuning on domain data adapts a general model to a specialist field.'],
['一家银行用自己的客服对话记录微调通用模型，让它正确使用银行术语。这是什么？',
 ['通过微调进行领域适配','从头预训练','检索增强生成','提示缓存'],
 '在领域数据上微调，能让通用模型适应某个专业领域。'],
['It starts from an existing model, not from scratch.','RAG retrieves documents at question time; it does not change the model.','Caching saves cost; it does not teach terminology.'],
['它是从现有模型出发，而不是从头开始。','RAG 在提问时检索文档，不改变模型。','缓存用于节省成本，不能教会术语。']);

Q('3.3','single',[0],
['What is transfer learning?',
 ['Reusing what a model learned on one task as the starting point for a related task','Moving data between AWS Regions','Copying model weights to Amazon S3','Translating text between languages'],
 'Fine-tuning a pre-trained model is a form of transfer learning.'],
['什么是迁移学习？',
 ['把模型在一个任务上学到的知识作为相关任务的起点加以复用','在 AWS 区域之间迁移数据','把模型权重复制到 Amazon S3','在语言之间翻译文本'],
 '对预训练模型进行微调就是一种迁移学习。'],
['That is data transfer, not learning.','Copying weights is storage, not learning.','That is translation.'],
['那是数据传输，不是学习。','复制权重是存储，不是学习。','那是翻译。']);

Q('3.3','single',[0],
['After heavy fine-tuning on narrow data, a model becomes worse at general tasks it used to handle well. What is this called?',
 ['Catastrophic forgetting','Hallucination','Data drift','Underfitting'],
 'Over-specializing can overwrite general knowledge; careful data mixes and methods like PEFT help.'],
['在狭窄的数据上进行大量微调后，模型在原本擅长的通用任务上变差了。这叫什么？',
 ['灾难性遗忘','幻觉','数据漂移','欠拟合'],
 '过度专门化可能覆盖通用知识；合理混合数据以及 PEFT 等方法会有帮助。'],
['Hallucination is making things up, not losing skills.','Drift is a change in production data.','Underfitting means the model never learned the task well.'],
['幻觉是编造内容，而不是丧失能力。','漂移是生产数据发生了变化。','欠拟合是指模型一开始就没学好任务。']);

Q('3.3','single',[0],
['How much data does instruction fine-tuning typically need compared with pre-training?',
 ['Far less: hundreds to thousands of high-quality examples, compared with trillions of tokens','More than pre-training','Exactly the same amount','No data at all'],
 'Fine-tuning builds on what the model already knows, so a small, good dataset goes a long way.'],
['与预训练相比，指令优化通常需要多少数据？',
 ['少得多：几百到几千个高质量示例，而预训练需要数万亿个令牌','比预训练更多','完全相同','完全不需要数据'],
 '微调建立在模型已有知识之上，因此少量优质数据就能发挥很大作用。'],
['Pre-training needs vastly more data.','The scales are very different.','Fine-tuning always needs examples.'],
['预训练需要的数据要多得多。','两者的数据规模相差极大。','微调总是需要示例。']);

Q('3.3','single',[0],
['Which fine-tuning dataset is likely to give better results?',
 ['2,000 carefully reviewed, accurate and varied examples','50,000 unreviewed scraped examples full of errors and duplicates','10 examples','One very long example'],
 'For fine-tuning, quality and coverage matter more than raw quantity.'],
['哪个微调数据集更可能取得好结果？',
 ['2,000 个经过仔细审核、准确且多样的示例','50,000 个未经审核、充满错误和重复的抓取示例','10 个示例','一个非常长的示例'],
 '对于微调，质量和覆盖面比数量更重要。'],
['Errors and duplicates teach the model the wrong things.','Too few examples to learn from.','One example cannot cover the task.'],
['错误和重复会让模型学到错误的东西。','示例太少，无法学习。','一个示例无法覆盖整个任务。']);

Q('3.3','single',[0],
['Before fine-tuning a model on customer emails, which governance step is essential?',
 ['Confirm the right to use the data, remove or mask personal data, and record where the data came from','Skip the review to save time','Publish the emails','Raise the temperature'],
 'Data governance covers permission, privacy and provenance before training.'],
['在用客户邮件微调模型之前，哪项治理步骤必不可少？',
 ['确认有权使用这些数据，删除或遮盖个人数据，并记录数据来源','为了节省时间跳过审核','公开这些邮件','调高温度'],
 '数据治理要求在训练前处理好授权、隐私和来源问题。'],
['Skipping review risks privacy and legal problems.','Publishing would be a data breach.','Temperature is unrelated to data governance.'],
['跳过审核会带来隐私和法律风险。','公开邮件就是数据泄露。','温度与数据治理无关。']);

Q('3.3','single',[0],
['How does the training data for continued pre-training in Amazon Bedrock differ from the data for fine-tuning?',
 ['Continued pre-training uses unlabeled text; fine-tuning uses labeled prompt and response pairs','Continued pre-training needs labeled pairs; fine-tuning uses unlabeled text','Both use only images','Neither needs any data'],
 'Continued pre-training learns a domain from raw text; fine-tuning learns a task from examples.'],
['在 Amazon Bedrock 中，继续预训练的训练数据与微调的数据有何不同？',
 ['继续预训练使用未标记的文本；微调使用已标记的提示与回答对','继续预训练需要已标记的数据对；微调使用未标记的文本','两者都只使用图像','两者都不需要数据'],
 '继续预训练从原始文本中学习领域知识；微调从示例中学习任务。'],
['That is reversed.','Both typically use text.','Both need data.'],
['这是说反了。','两者通常都使用文本。','两者都需要数据。']);

Q('3.3','multi',[0,1],
['Which TWO statements about fine-tuning, compared with prompt engineering, are true? (Choose TWO.)',
 ['It changes the model’s weights','It needs labeled training data and compute','It takes effect instantly with no training','It is free','It is the same thing as RAG'],
 'Fine-tuning trains the model; prompt engineering only changes the input.'],
['与提示工程相比，关于微调的哪两项说法是正确的？（选择两项）',
 ['它会改变模型的权重','它需要已标记的训练数据和算力','它无需训练、立即生效','它是免费的','它与 RAG 是同一回事'],
 '微调会训练模型；提示工程只改变输入。'],
['Fine-tuning requires a training job.','Training and hosting a custom model cost money.','RAG retrieves documents and leaves weights unchanged.'],
['微调需要运行训练任务。','训练和托管定制模型都要花钱。','RAG 检索文档，不改变权重。']);

Q('3.3','match',[],
['Match each training method to its main goal.',
 [['Continued pre-training','Teach domain vocabulary from unlabeled text'],['Instruction tuning','Improve how well the model follows instructions'],['Reinforcement learning from human feedback','Align answers with human preferences'],['Distillation','Produce a smaller, cheaper model']],
 'Each method serves a different purpose in adapting a model.'],
['将每种训练方法与其主要目标配对。',
 [['继续预训练','从未标记文本中学习领域词汇'],['指令优化','提升模型遵循指令的能力'],['基于人类反馈的强化学习','让回答符合人类偏好'],['蒸馏','得到更小、更便宜的模型']],
 '每种方法在适配模型时各有不同的用途。']);

Q('3.3','order',[],
['Put these steps for preparing fine-tuning data in order.',
 ['Collect candidate examples','Remove personal data and confirm usage rights','Clean, deduplicate and label the examples','Split them into training and validation sets','Upload them to Amazon S3 for the fine-tuning job'],
 'Governance and cleaning come before splitting and uploading.'],
['按顺序排列准备微调数据的步骤。',
 ['收集候选示例','删除个人数据并确认使用权','清洗、去重并标记示例','划分为训练集和验证集','上传到 Amazon S3 供微调任务使用'],
 '治理和清洗要先于划分和上传。']);

/* ================= 3.4 Evaluating FM performance ================= */
Q('3.4','single',[0],
['What does ROUGE mainly measure?',
 ['How much of the reference text’s words and phrases appear in the generated text (recall-oriented overlap)','Precision of n-grams in machine translation','Semantic similarity using embeddings','Response latency'],
 'ROUGE is recall-oriented and widely used for summarization.'],
['ROUGE 主要衡量什么？',
 ['参考文本中的词语和短语有多少出现在生成文本中（以召回为导向的重合度）','机器翻译中 n-gram 的查准率','基于嵌入的语义相似度','响应延迟'],
 'ROUGE 以召回为导向，广泛用于评估摘要。'],
['That describes BLEU.','That describes BERTScore.','Latency is a performance measure, not a text metric.'],
['那描述的是 BLEU。','那描述的是 BERTScore。','延迟是性能指标，不是文本指标。']);

Q('3.4','single',[0],
['What does BLEU compare?',
 ['The n-gram precision of generated text against reference translations','How many users clicked a result','The semantic meaning using embeddings','How toxic the output is'],
 'BLEU is the classic machine translation metric.'],
['BLEU 比较的是什么？',
 ['生成文本相对于参考译文的 n-gram 查准率','有多少用户点击了结果','基于嵌入的语义含义','输出的有害程度'],
 'BLEU 是经典的机器翻译评估指标。'],
['Clicks are a business metric.','That is BERTScore.','Toxicity needs a different kind of check.'],
['点击量是业务指标。','那是 BERTScore。','有害性需要另一种检查方式。']);

Q('3.4','single',[0],
['A language model has lower perplexity on held-out text than another model. What does that mean?',
 ['It predicts that text better, so it is less “surprised” by it','It is more creative','It is more toxic','It is slower'],
 'Perplexity measures how well a model predicts text; lower is better.'],
['某语言模型在保留测试文本上的困惑度比另一个模型更低。这意味着什么？',
 ['它对这些文本的预测更好，也就是更不“意外”','它更有创造力','它更有害','它更慢'],
 '困惑度衡量模型预测文本的能力，越低越好。'],
['Perplexity does not measure creativity.','Perplexity says nothing about toxicity.','Perplexity is not a speed measure.'],
['困惑度不衡量创造力。','困惑度与有害性无关。','困惑度不是速度指标。']);

Q('3.4','single',[0],
['A model tops public benchmarks but performs poorly on the company’s own support tickets. What is the best explanation?',
 ['Public benchmarks may not reflect the company’s domain, so it should evaluate on its own representative data','Benchmarks are always wrong','The model is broken','The temperature needs to be higher'],
 'Always evaluate on data that looks like your real use case.'],
['某模型在公开基准测试中名列前茅，但在公司自己的客服工单上表现很差。最好的解释是什么？',
 ['公开基准可能无法反映公司的领域，应在自己有代表性的数据上评估','基准测试总是错的','模型坏了','需要调高温度'],
 '一定要在与真实用例相似的数据上进行评估。'],
['Benchmarks are useful but general.','The model works; it is just a poor fit for this domain.','Temperature will not fix a domain mismatch.'],
['基准测试有用，但比较通用。','模型本身没问题，只是不适合这个领域。','温度解决不了领域不匹配的问题。']);

Q('3.4','single',[0],
['Which Amazon Bedrock Model Evaluation option uses your own team to rate model responses?',
 ['Human-based evaluation with your own work team','Automatic evaluation with built-in metrics','LLM-as-a-judge evaluation','Amazon CloudWatch'],
 'Human evaluation lets people you choose judge qualities that metrics miss.'],
['Amazon Bedrock Model Evaluation 的哪个选项由你自己的团队对模型回答打分？',
 ['使用自有工作团队的人工评估','使用内置指标的自动评估','LLM 评审员的评估','Amazon CloudWatch'],
 '人工评估让你选定的人员判断指标无法衡量的质量。'],
['Automatic evaluation uses algorithms, not people.','LLM-as-a-judge uses a model to score answers.','CloudWatch monitors metrics and logs.'],
['自动评估使用算法，而不是人。','LLM 评审员是用模型给回答打分。','CloudWatch 用于监控指标和日志。']);

Q('3.4','single',[0],
['Which Amazon Bedrock capability evaluates a knowledge base on retrieval quality and on the answers it generates, for example context relevance and correctness?',
 ['Knowledge base (RAG) evaluation in Amazon Bedrock Evaluations','Amazon Bedrock Guardrails','Amazon Bedrock Prompt Management','Amazon Inspector'],
 'RAG evaluation checks both the retrieval step and the generated answer.'],
['哪项 Amazon Bedrock 功能可以从检索质量和生成答案两方面评估知识库，例如上下文相关性和正确性？',
 ['Amazon Bedrock Evaluations 中的知识库（RAG）评估','Amazon Bedrock Guardrails','Amazon Bedrock Prompt Management','Amazon Inspector'],
 'RAG 评估会同时检查检索步骤和生成的答案。'],
['Guardrails filter content; they do not score retrieval.','Prompt Management stores and versions prompts.','Inspector scans for software vulnerabilities.'],
['防护机制用于过滤内容，不为检索打分。','Prompt Management 用于存储和管理提示版本。','Inspector 扫描软件漏洞。']);

Q('3.4','single',[0],
['What is a known weakness of LLM-as-a-judge evaluation?',
 ['The judge model can have biases, such as favouring longer answers, so it should be checked against human ratings','It cannot read text','It is always slower than human reviewers','It always costs more than human review'],
 'LLM judges scale well but need calibration against people.'],
['“LLM 评审员”的评估方式有什么已知弱点？',
 ['评判模型可能存在偏好（例如偏爱更长的回答），因此应与人工评分对照校准','它无法阅读文本','它总是比人工审核员慢','它总是比人工审核更贵'],
 'LLM 评审员易于扩展，但需要与人工评分对照校准。'],
['Reading text is exactly what it does.','It is usually much faster than people.','It is usually cheaper at scale.'],
['阅读文本正是它的本事。','它通常比人快得多。','在大规模时它通常更便宜。']);

Q('3.4','single',[0],
['When is human evaluation most necessary?',
 ['For subjective qualities such as helpfulness and tone, or expert correctness that automatic metrics cannot judge','For checking JSON syntax','For counting tokens','For measuring latency'],
 'People are best at judging nuanced, subjective or expert qualities.'],
['在什么情况下最需要人工评估？',
 ['评估有用性、语气等主观品质，或自动指标无法判断的专业正确性时','检查 JSON 语法时','统计令牌数时','测量延迟时'],
 '人最擅长判断细微、主观或需要专业知识的品质。'],
['Syntax can be checked automatically.','Token counting is automatic.','Latency is measured automatically.'],
['语法可以自动检查。','令牌数可以自动统计。','延迟可以自动测量。']);

Q('3.4','single',[0],
['A travel-booking agent completes 820 of 1,000 requests without human help. Which metric is this?',
 ['Task completion rate (82%)','BLEU','Perplexity','Customer lifetime value'],
 'Task completion rate is a key measure of whether an agent achieves its goal.'],
['某旅行预订智能体在 1,000 个请求中有 820 个无需人工协助即完成。这是哪个指标？',
 ['任务完成率（82%）','BLEU','困惑度','客户终身价值'],
 '任务完成率是衡量智能体是否达成目标的关键指标。'],
['BLEU compares text with references.','Perplexity measures language prediction.','CLV is long-term revenue per customer.'],
['BLEU 是把文本与参考文本比较。','困惑度衡量语言预测能力。','CLV 是每位客户的长期收入。']);

Q('3.4','single',[0],
['A team collects thumbs-up and thumbs-down ratings and satisfaction scores after each chat. Which business metric is this?',
 ['User satisfaction','ROUGE','Token count','F1 score'],
 'User satisfaction shows whether the application meets people’s needs.'],
['团队在每次聊天后收集点赞、点踩和满意度评分。这是哪个业务指标？',
 ['用户满意度','ROUGE','令牌数量','F1 分数'],
 '用户满意度能说明应用是否满足了用户需求。'],
['ROUGE is a text-overlap metric.','Token count measures usage and cost.','F1 is a classification metric.'],
['ROUGE 是文本重合度指标。','令牌数量衡量的是用量和成本。','F1 是分类指标。']);

Q('3.4','single',[0],
['A generative AI coding assistant is judged by whether developers finish features faster. Which business objective is this?',
 ['Productivity','Conversion rate','BLEU score','Model size'],
 'Time saved per task is a productivity measure.'],
['某生成式 AI 编程助手以开发人员能否更快完成功能来评判。这是哪项业务目标？',
 ['生产力','转化率','BLEU 分数','模型大小'],
 '每项任务节省的时间属于生产力指标。'],
['Conversion rate measures sales or sign-ups.','BLEU measures translation overlap.','Model size is not a business outcome.'],
['转化率衡量销售或注册。','BLEU 衡量翻译重合度。','模型大小不是业务成果。']);

Q('3.4','single',[0],
['How should a multi-step generative AI workflow (extract, then validate, then summarize) be evaluated?',
 ['Evaluate each step’s output and the end-to-end result against expected outcomes','Measure only the final step’s latency','Count only the tokens used','Do not evaluate it, because each model was tested separately'],
 'Errors can enter at any step, so check the steps and the whole.'],
['应如何评估一个多步骤的生成式 AI 工作流（先提取、再校验、最后总结）？',
 ['对照预期结果，评估每一步的输出以及端到端的最终结果','只测量最后一步的延迟','只统计使用的令牌','不用评估，因为每个模型都单独测试过'],
 '错误可能出现在任何一步，因此既要检查各步，也要检查整体。'],
['Latency says nothing about correctness.','Token counts measure cost, not quality.','Parts that work alone can still fail together.'],
['延迟无法说明正确性。','令牌数衡量成本，而不是质量。','单独能用的部分组合在一起仍可能出错。']);

Q('3.4','single',[0],
['Beyond the final answer, what should be evaluated for an AI agent?',
 ['Whether it chose the right tools with correct parameters and took an efficient path','The font of its answer','Only the model’s size','Only the temperature setting'],
 'Agent evaluation looks at the trajectory: tool choices, parameters and steps.'],
['除了最终答案，还应评估 AI 智能体的哪些方面？',
 ['是否选对了工具、参数是否正确，以及路径是否高效','回答使用的字体','只看模型大小','只看温度设置'],
 '智能体评估要看其轨迹：工具选择、参数和步骤。'],
['Presentation is not what makes an agent work.','Model size does not show whether the agent behaves correctly.','Settings are not outcomes.'],
['外观并不决定智能体能否正常工作。','模型大小无法说明智能体行为是否正确。','设置不是结果。']);

Q('3.4','multi',[0,1],
['Which TWO are automatic metrics that compare generated text with reference text? (Choose TWO.)',
 ['ROUGE','BLEU','Customer lifetime value','Task completion rate','Human preference ratings'],
 'ROUGE and BLEU both measure overlap with reference text.'],
['以下哪两项是把生成文本与参考文本进行比较的自动指标？（选择两项）',
 ['ROUGE','BLEU','客户终身价值','任务完成率','人工偏好评分'],
 'ROUGE 和 BLEU 都衡量与参考文本的重合程度。'],
['CLV is a business metric.','Task completion is an outcome metric, not a text comparison.','Human ratings are not automatic.'],
['CLV 是业务指标。','任务完成率是结果指标，不是文本比较。','人工评分不是自动的。']);

Q('3.4','match',[],
['Match each evaluation approach to when it fits best.',
 [['Benchmark datasets','Compare models consistently on standard questions'],['Human evaluation','Judge tone, empathy and expert correctness'],['LLM-as-a-judge','Score open-ended answers at scale'],['ROUGE and BLEU','Measure overlap with reference answers']],
 'Combining approaches gives the fullest picture of model quality.'],
['将每种评估方法与其最适合的场景配对。',
 [['基准数据集','在标准问题上一致地比较模型'],['人工评估','判断语气、同理心和专业正确性'],['LLM 评审员','大规模地为开放式回答打分'],['ROUGE 和 BLEU','衡量与参考答案的重合程度']],
 '结合多种方法才能最全面地了解模型质量。']);

Q('3.4','single',[0],
['A team has two versions of a prompt. Which method best shows which one improves real business results?',
 ['An A/B test that splits live traffic and compares outcomes such as conversion or task completion','Asking the developer which one they prefer','Comparing the prompts’ word counts','Picking the newer one'],
 'A/B testing measures real impact on users rather than opinions.'],
['团队有两个版本的提示。哪种方法最能看出哪个版本能提升实际业务结果？',
 ['A/B 测试：把线上流量分流，比较转化率或任务完成率等结果','问开发人员更喜欢哪个','比较两个提示的字数','选择较新的那个'],
 'A/B 测试衡量的是对用户的真实影响，而不是个人看法。'],
['Personal preference is not evidence of business impact.','Length says nothing about results.','Newer is not necessarily better.'],
['个人偏好不能证明业务影响。','长度无法说明结果。','较新不一定更好。']);
})();
