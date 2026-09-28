/* Fifth question set (v1.3), domain 4: guidelines for responsible AI. Append-only. */
(function(){
function Q(k, t, a, en, zh, wEn, wZh){
  var q = {k: k, d: 'd' + k.charAt(0), t: t, a: a, en: {q: en[0], o: en[1], x: en[2]}, zh: {q: zh[0], o: zh[1], x: zh[2]}};
  if (wEn) { var pad = a.map(function(){ return ''; }); q.w = {en: pad.concat(wEn), zh: pad.concat(wZh)}; }
  AIF.qs.push(q);
}

/* ================= 4.1 Developing responsible AI systems ================= */
Q('4.1','single',[0],
['A model’s answers change wildly when a user adds a typo or rephrases a question slightly. Which responsible AI property is lacking?',
 ['Robustness','Inclusivity','Transparency','Sustainability'],
 'A robust model gives stable, reliable results when inputs vary a little.'],
['用户只要加一个错别字或稍微换个说法，某模型的回答就大幅变化。它缺少哪项负责任 AI 特性？',
 ['稳健性','包容性','透明度','可持续性'],
 '稳健的模型在输入略有变化时，仍能给出稳定可靠的结果。'],
['Inclusivity is about serving diverse users.','Transparency is about explaining how the system works.','Sustainability is about environmental impact.'],
['包容性关注的是服务多样化的用户。','透明度关注的是解释系统如何运作。','可持续性关注的是环境影响。']);

Q('4.1','single',[0],
['Which responsible AI property is about outputs being truthful and correct?',
 ['Veracity','Controllability','Privacy','Fairness'],
 'Veracity means the system produces accurate, truthful outputs.'],
['哪项负责任 AI 特性关注的是输出真实、正确？',
 ['真实性','可控性','隐私','公平性'],
 '真实性是指系统输出准确、真实的内容。'],
['Controllability is about monitoring and steering the system.','Privacy is about protecting personal data.','Fairness is about equal treatment of groups.'],
['可控性关注的是监控和引导系统。','隐私关注的是保护个人数据。','公平性关注的是对各群体一视同仁。']);

Q('4.1','single',[0],
['A speech app is designed and tested with users of different ages, accents and abilities. Which responsible AI property does this support?',
 ['Inclusivity','Veracity','Explainability','Cost efficiency'],
 'Inclusive design makes sure the system works for the full range of people who will use it.'],
['一款语音应用在设计和测试时纳入了不同年龄、口音和能力的用户。这体现了哪项负责任 AI 特性？',
 ['包容性','真实性','可解释性','成本效率'],
 '包容性设计确保系统适用于所有将要使用它的人群。'],
['Veracity is about truthful output.','Explainability is about understanding decisions.','Cost is not a responsible AI property.'],
['真实性关注的是输出真实。','可解释性关注的是理解决策。','成本不是负责任 AI 的特性。']);

Q('4.1','single',[0],
['A chatbot refuses to give step-by-step instructions for making a weapon. Which responsible AI property is this?',
 ['Safety','Fairness','Veracity','Transparency'],
 'Safety means preventing harmful outputs and misuse.'],
['某聊天机器人拒绝提供制造武器的分步说明。这体现了哪项负责任 AI 特性？',
 ['安全性','公平性','真实性','透明度'],
 '安全性是指防止有害输出和滥用。'],
['Fairness concerns equal treatment of groups.','Veracity concerns truthful answers.','Transparency concerns how the system is explained.'],
['公平性关注对各群体的平等对待。','真实性关注回答是否真实。','透明度关注如何解释系统。']);

Q('4.1','single',[0],
['Which Amazon Bedrock Guardrails policy blocks hate, insults, sexual content and violence at adjustable strengths?',
 ['Content filters','Denied topics','Word filters','Contextual grounding check'],
 'Content filters detect harmful categories and let you set how strictly each is blocked.'],
['Amazon Bedrock Guardrails 的哪项策略可以按可调强度拦截仇恨、侮辱、色情和暴力内容？',
 ['内容过滤器','拒绝主题','字词过滤器','上下文依据检查'],
 '内容过滤器能识别有害类别，并允许你设置每个类别的拦截强度。'],
['Denied topics block subjects you define, such as investment advice.','Word filters block specific words or phrases.','Grounding checks whether answers are supported by sources.'],
['拒绝主题拦截你定义的话题，例如投资建议。','字词过滤器拦截特定的词或短语。','依据检查判断回答是否有来源支持。']);

Q('4.1','single',[0],
['Where can Amazon Bedrock Guardrails apply its checks?',
 ['On both the user’s input and the model’s response','Only on the model’s response','Only on the training data','Only on images'],
 'Guardrails evaluate prompts and responses, catching problems on the way in and on the way out.'],
['Amazon Bedrock Guardrails 可以在哪里进行检查？',
 ['用户的输入和模型的回答都可以','只能检查模型的回答','只能检查训练数据','只能检查图像'],
 '防护栏会评估提示和回答，在输入和输出两端都能拦截问题。'],
['Inputs are checked too.','Guardrails work at inference time, not on training data.','Guardrails mainly check text, and can check images too.'],
['输入同样会被检查。','防护栏在推理时工作，而不是针对训练数据。','防护栏主要检查文本，也能检查图像。']);

Q('4.1','single',[0],
['Two models both meet the accuracy target, and one is much smaller. Which is the more responsible choice from a sustainability point of view?',
 ['The smaller, more efficient model, because it uses less energy','The larger model, for prestige','Running both at the same time','The one that was trained most recently'],
 'Choosing the smallest model that meets the need reduces energy use and cost.'],
['两个模型都达到了准确率目标，其中一个小得多。从可持续性角度看，哪个选择更负责任？',
 ['更小、更高效的模型，因为它耗能更少','更大的模型，因为更有面子','同时运行两个','最近训练的那个'],
 '选择能满足需求的最小模型，可以降低能耗和成本。'],
['Prestige is not a responsible reason to use more energy.','Running both doubles the energy use.','Recency does not make a model more efficient.'],
['面子不是多耗能的正当理由。','同时运行两个会让能耗翻倍。','更新并不意味着更高效。']);

Q('4.1','single',[0],
['Which choice can reduce the environmental impact of training a model on AWS?',
 ['Use energy-efficient accelerators such as AWS Trainium and avoid oversized instances','Run the largest GPUs around the clock','Retrain every day even when nothing has changed','Keep idle endpoints running'],
 'Efficient hardware and right-sizing cut energy use.'],
['哪项选择可以降低在 AWS 上训练模型的环境影响？',
 ['使用 AWS Trainium 等高能效加速器，并避免使用过大的实例','全天候运行最大的 GPU','即使没有变化也每天重新训练','让闲置的端点一直运行'],
 '高效的硬件和合理配置规格可以减少能耗。'],
['Always-on large GPUs waste energy.','Needless retraining wastes compute.','Idle endpoints use energy for nothing.'],
['常开的大型 GPU 会浪费能源。','不必要的重新训练会浪费算力。','闲置端点白白消耗能源。']);

Q('4.1','single',[0],
['A generative AI app gives medical-sounding advice that a user follows and is harmed by. Which legal risk is this?',
 ['End-user risk: harm to the people using the system','Intellectual property infringement','Data residency','Latency'],
 'Outputs that users act on can cause real harm and liability.'],
['某生成式 AI 应用给出了听起来像医疗建议的内容，用户照做后受到伤害。这是哪种法律风险？',
 ['终端用户风险：对使用系统的人造成伤害','知识产权侵权','数据驻留','延迟'],
 '用户据以行动的输出可能造成真实伤害并带来法律责任。'],
['No one’s creative work was copied.','Where data is stored is not the issue here.','Speed is not a legal risk.'],
['这里没有抄袭任何人的创作。','问题不在于数据存储在哪里。','速度不是法律风险。']);

Q('4.1','single',[0],
['A chatbot insults a customer, and screenshots spread widely online. Which risk does this show?',
 ['Loss of customer trust and damage to reputation','Overfitting','Intellectual property infringement','Model drift'],
 'Harmful outputs quickly erode trust in the brand.'],
['某聊天机器人辱骂了一位客户，截图在网上广泛传播。这体现了哪种风险？',
 ['失去客户信任并损害声誉','过拟合','知识产权侵权','模型漂移'],
 '有害的输出会迅速侵蚀人们对品牌的信任。'],
['Overfitting is a training problem.','No protected work was copied.','Drift is a gradual change in data.'],
['过拟合是训练问题。','没有抄袭受保护的作品。','漂移是数据的逐渐变化。']);

Q('4.1','single',[0],
['A résumé-screening model ranks women lower than men with similar experience, exposing the company to discrimination claims. Which legal risk is this?',
 ['Biased model outputs','Hallucination','Prompt exposure','Data poisoning by an attacker'],
 'Biased outputs in decisions such as hiring can break anti-discrimination laws.'],
['某简历筛选模型把经验相近的女性排在男性之后，使公司面临歧视指控。这是哪种法律风险？',
 ['模型输出存在偏见','幻觉','提示泄露','攻击者的数据投毒'],
 '在招聘等决策中出现有偏见的输出，可能违反反歧视法律。'],
['Hallucination is inventing facts.','Exposure is leaking hidden prompts.','There is no sign of an attack; the bias came from the model or its data.'],
['幻觉是编造事实。','泄露是暴露隐藏的提示。','没有迹象表明遭到攻击，偏见来自模型或其数据。']);

Q('4.1','single',[0],
['Why prefer curated data sources for training a model?',
 ['Known quality and provenance reduce errors, bias and legal risk','They are always larger','They are always free','They need no review'],
 'Curated sources are checked, documented and licensed appropriately.'],
['为什么训练模型时应优先选择经过整理的数据源？',
 ['已知的质量和来源可以减少错误、偏见和法律风险','它们总是更大','它们总是免费的','它们不需要审核'],
 '经过整理的数据源都经过检查、记录并获得了适当授权。'],
['Curated data is often smaller but cleaner.','Curated data can cost money to license.','Curated data still needs review.'],
['经过整理的数据往往更小但更干净。','经过整理的数据可能需要付费授权。','经过整理的数据仍需审核。']);

Q('4.1','single',[0],
['Only 1% of the examples in a fraud dataset are fraud. Which technique helps the model learn the rare class?',
 ['Rebalance the data, for example by oversampling fraud or generating synthetic examples, and use suitable metrics','Delete the fraud examples','Train only on legitimate transactions','Raise the temperature'],
 'Balanced datasets help models learn minority classes instead of ignoring them.'],
['某欺诈数据集中只有 1% 的样本是欺诈。哪种技术能帮助模型学习这个稀有类别？',
 ['重新平衡数据，例如对欺诈样本过采样或生成合成样本，并使用合适的指标','删除欺诈样本','只用正常交易训练','调高温度'],
 '平衡的数据集能帮助模型学习少数类别，而不是忽略它们。'],
['That removes the very cases the model must learn.','The model would never see fraud.','Temperature is a generative model setting.'],
['这会删掉模型必须学习的案例。','模型将永远看不到欺诈。','温度是生成式模型的参数。']);

Q('4.1','single',[0],
['A model’s predictions change a lot when it is trained on different samples of the same data, and it overfits. What does this indicate?',
 ['High variance','High bias','Low variance','A well-balanced model'],
 'High variance means the model is too sensitive to its particular training data.'],
['当用同一数据的不同样本训练时，某模型的预测变化很大，而且出现过拟合。这说明什么？',
 ['高方差','高偏差','低方差','平衡良好的模型'],
 '高方差意味着模型对其特定训练数据过于敏感。'],
['High bias causes underfitting, not overfitting.','Low variance means stable predictions.','A balanced model would not overfit.'],
['高偏差会导致欠拟合，而不是过拟合。','低方差意味着预测稳定。','平衡的模型不会过拟合。']);

Q('4.1','single',[0],
['Why can a model with high overall accuracy still be unfair?',
 ['Its errors may be concentrated in a minority group, hidden inside the average','High accuracy guarantees fairness','Fairness only matters for image models','Unfairness only comes from bugs in the code'],
 'Always look at performance for each group, not just the overall number.'],
['为什么整体准确率很高的模型仍可能不公平？',
 ['它的错误可能集中在某个少数群体身上，被平均值掩盖了','高准确率保证了公平','公平性只对图像模型重要','不公平只来源于代码缺陷'],
 '一定要查看每个群体的表现，而不只看整体数字。'],
['Overall accuracy can hide unequal errors.','Fairness matters for any model that affects people.','Unfairness often comes from data, not code bugs.'],
['整体准确率可能掩盖不均衡的错误。','任何影响人的模型都需要关注公平性。','不公平往往来自数据，而不是代码缺陷。']);

Q('4.1','single',[0],
['Which method best checks whether a chatbot’s answers are truthful, using a sample of real conversations?',
 ['A human audit, with experts reviewing sampled answers against trusted sources','Counting the tokens in each answer','Increasing the temperature','Trusting the model’s own confidence'],
 'Human audits are a direct way to monitor truthfulness and trustworthiness.'],
['用真实对话样本来检查聊天机器人的回答是否真实，最好的方法是什么？',
 ['人工审计：由专家对照可信来源审查抽样的回答','统计每个回答的 token 数','调高温度','相信模型自己的置信度'],
 '人工审计是监测真实性和可信度的直接方法。'],
['Length says nothing about truth.','Temperature does not check anything.','Models can be confidently wrong.'],
['长度与真实性无关。','温度不会检查任何内容。','模型可能自信地给出错误答案。']);

Q('4.1','single',[0],
['Which service can compute bias metrics on a training dataset before a model is trained, such as how balanced the classes are?',
 ['Amazon SageMaker Clarify','Amazon Polly','AWS Artifact','Amazon Kendra'],
 'Clarify detects bias in data before training and in predictions after training.'],
['哪项服务可以在训练模型之前计算训练数据集的偏差指标，例如各类别是否平衡？',
 ['Amazon SageMaker Clarify','Amazon Polly','AWS Artifact','Amazon Kendra'],
 'Clarify 能在训练前检测数据中的偏差，也能在训练后检测预测中的偏差。'],
['Polly generates speech.','Artifact provides compliance reports.','Kendra is a search service.'],
['Polly 生成语音。','Artifact 提供合规报告。','Kendra 是搜索服务。']);

Q('4.1','multi',[0,1],
['Which TWO describe a responsible training dataset? (Choose TWO.)',
 ['Diverse and representative of the people who will use the system','Balanced across important groups and classes','Scraped without checking licences','As small as possible','Drawn from only one region'],
 'Representative, balanced data leads to fairer, more reliable models.'],
['以下哪两项描述了负责任的训练数据集？（选择两项）',
 ['多样且能代表将使用该系统的人群','在重要的群体和类别之间保持平衡','未经检查许可证就抓取的数据','越小越好','只来自一个地区'],
 '具有代表性且平衡的数据会带来更公平、更可靠的模型。'],
['Unlicensed data creates legal risk.','Too little data makes models weak and biased.','One region will not represent everyone.'],
['未经授权的数据会带来法律风险。','数据太少会让模型又弱又有偏见。','一个地区无法代表所有人。']);

Q('4.1','match',[],
['Match each responsible AI dimension to an example.',
 [['Fairness','Approval rates are similar across groups'],['Privacy and security','Customer data is protected and never exposed'],['Transparency','Users are told they are talking to an AI'],['Controllability','Humans can monitor and steer the system’s behaviour'],['Safety','The system refuses harmful instructions']],
 'These dimensions together describe a responsible AI system.'],
['将每个负责任 AI 维度与相应的例子配对。',
 [['公平性','各群体的审批通过率相近'],['隐私与安全','客户数据受到保护，绝不外泄'],['透明度','告知用户正在与 AI 对话'],['可控性','人类可以监控并引导系统行为'],['安全性','系统会拒绝有害的指令']],
 '这些维度共同描述了负责任的 AI 系统。']);

Q('4.1','order',[],
['Put these steps to add a safety guardrail to an Amazon Bedrock application in order.',
 ['Define the policies, such as denied topics, content filters and PII handling','Create the guardrail and publish a version','Test it with sample safe and unsafe prompts','Attach the guardrail version to the application’s model calls','Monitor blocked requests and refine the policies'],
 'Define, create, test, deploy, then keep improving.'],
['按顺序排列为 Amazon Bedrock 应用添加安全防护栏的步骤。',
 ['定义策略，例如拒绝主题、内容过滤器和 PII 处理','创建防护栏并发布一个版本','用安全和不安全的示例提示进行测试','把该防护栏版本附加到应用的模型调用上','监控被拦截的请求并完善策略'],
 '定义、创建、测试、部署，然后持续改进。']);

/* ================= 4.2 Transparent and explainable models ================= */
Q('4.2','single',[0],
['What makes a model transparent?',
 ['People can inspect and understand how it works and why it produces its outputs','It runs quickly','It is very large','Its internals are kept secret'],
 'Transparency means the model’s workings, data and design can be examined and understood.'],
['什么样的模型才是透明的？',
 ['人们能够检查并理解它如何运作以及为何产生这样的输出','运行速度快','规模很大','内部细节保密'],
 '透明意味着模型的运作方式、数据和设计可以被审视和理解。'],
['Speed is unrelated to transparency.','Larger models are usually harder to understand.','Secrecy is the opposite of transparency.'],
['速度与透明度无关。','更大的模型通常更难理解。','保密与透明恰恰相反。']);

Q('4.2','single',[0],
['Why is a large deep neural network often called a “black box”?',
 ['Its reasoning is spread across millions or billions of weights and cannot be read directly','It runs on black hardware','The law requires its code to be secret','It has no inputs'],
 'The internal logic of deep models is not directly understandable, which makes explanation hard.'],
['为什么大型深度神经网络常被称为“黑箱”？',
 ['它的推理分散在数百万乃至数十亿个权重中，无法直接读懂','它运行在黑色硬件上','法律要求其代码保密','它没有输入'],
 '深度模型的内部逻辑无法直接理解，因此很难解释。'],
['The name is about understanding, not colour.','No law requires this.','It clearly has inputs; its logic is what is hidden.'],
['这个说法与理解有关，与颜色无关。','没有法律这样要求。','它当然有输入，看不透的是其内部逻辑。']);

Q('4.2','single',[0],
['A simple decision tree is easy to explain but 5% less accurate than a deep model for medical triage. What is the right approach?',
 ['Weigh the trade-off based on risk and regulation, for example an interpretable model, or the deep model with explainability tools and human review','Always choose the most accurate model','Always choose the simplest model','Ignore both and skip AI'],
 'Interpretability and performance must be balanced for each use case.'],
['在医疗分诊中，一个简单的决策树易于解释，但准确率比深度模型低 5%。正确的做法是什么？',
 ['根据风险和监管要求权衡取舍，例如选用可解释模型，或使用深度模型并配合可解释性工具和人工审核','总是选择最准确的模型','总是选择最简单的模型','两者都不用，放弃 AI'],
 '每个用例都需要在可解释性和性能之间取得平衡。'],
['Accuracy alone ignores the need to explain decisions.','Simplicity alone ignores the accuracy gap.','Giving up on AI ignores its real benefits.'],
['只看准确率会忽视解释决策的需要。','只看简单会忽视准确率的差距。','放弃 AI 会忽视它的实际好处。']);

Q('4.2','single',[0],
['How can open-source models and data support transparency?',
 ['Others can inspect the weights, training details and data sources, and verify how the model behaves','They are always more accurate','They never need a licence','They cannot be audited'],
 'Openness lets independent people examine and test a model.'],
['开源模型和数据如何支持透明度？',
 ['其他人可以检查权重、训练细节和数据来源，并验证模型的行为','它们总是更准确','它们永远不需要许可证','它们无法被审计'],
 '开放让独立的人能够检查和测试模型。'],
['Openness does not guarantee accuracy.','Open-source models still come with licences.','Openness makes auditing easier, not impossible.'],
['开放并不保证准确。','开源模型同样附带许可证。','开放让审计更容易，而不是不可能。']);

Q('4.2','single',[0],
['Before using an open-source model in a commercial product, what must the team check?',
 ['The licence terms, such as whether commercial use is allowed and what attribution or restrictions apply','Nothing, because open source means there are no rules','Only the model’s size','Only the colour of its logo'],
 'Licensing is part of responsible and transparent model use.'],
['在商业产品中使用开源模型之前，团队必须检查什么？',
 ['许可证条款，例如是否允许商业使用、需要哪些署名或有何限制','什么都不用查，开源就意味着没有规则','只看模型大小','只看标志的颜色'],
 '许可证是负责任、透明地使用模型的一部分。'],
['Open-source licences do carry conditions.','Size does not tell you what you are allowed to do.','Branding has no legal meaning here.'],
['开源许可证同样带有条件。','大小无法说明你被允许做什么。','品牌外观在这里没有法律意义。']);

Q('4.2','single',[0],
['How do Amazon Bedrock Model Evaluations support transparency?',
 ['They produce documented, comparable results on accuracy, robustness and toxicity that can be shared with stakeholders','They reveal the model’s weights','They train new models','They remove bias automatically'],
 'Evaluation reports give evidence about how a model performs.'],
['Amazon Bedrock Model Evaluations 如何支持透明度？',
 ['它们会就准确性、稳健性和有害性生成有记录、可比较的结果，可与相关方分享','它们会公开模型权重','它们会训练新模型','它们会自动消除偏见'],
 '评估报告为模型的表现提供了证据。'],
['Evaluations do not expose weights.','Evaluations measure models; they do not train them.','Evaluations can reveal bias but do not fix it.'],
['评估不会公开权重。','评估是衡量模型，而不是训练模型。','评估能揭示偏见，但不会修正偏见。']);

Q('4.2','single',[0],
['Which practice improves data transparency?',
 ['Documenting data sources, how the data was collected and its known gaps','Deleting records of where the data came from','Hiding gaps in the data','Using undocumented scraped data'],
 'Clear records about data help others judge a model’s strengths and limits.'],
['哪种做法能提高数据透明度？',
 ['记录数据来源、收集方式及已知缺陷','删除数据来源的记录','隐瞒数据中的缺陷','使用没有记录的抓取数据'],
 '清晰的数据记录能帮助他人判断模型的优势和局限。'],
['That destroys provenance.','Hidden gaps mislead users.','Undocumented data cannot be verified.'],
['这会破坏来源记录。','隐瞒缺陷会误导用户。','没有记录的数据无法核实。']);

Q('4.2','single',[0],
['A “Was this helpful?” button with a comment box on every AI answer is an example of which human-centred design principle?',
 ['A user-feedback mechanism','Data poisoning','Overfitting','Model distillation'],
 'Feedback mechanisms let people correct and improve the system.'],
['在每个 AI 回答旁提供“这个回答有帮助吗？”按钮和评论框，体现了哪项以人为本的设计原则？',
 ['用户反馈机制','数据投毒','过拟合','模型蒸馏'],
 '反馈机制让人们能够纠正并改进系统。'],
['Poisoning is an attack.','Overfitting is a training problem.','Distillation shrinks a model.'],
['投毒是一种攻击。','过拟合是训练问题。','蒸馏是把模型变小。']);

Q('4.2','single',[0],
['An app labels AI-generated content and shows the sources used for each answer. Which principle does this follow?',
 ['AI decision transparency','Data poisoning','Overfitting','Model distillation'],
 'Showing that content is AI-made, and where it came from, helps users judge it.'],
['某应用标注了 AI 生成的内容，并展示每个回答所用的来源。这遵循了哪项原则？',
 ['AI 决策透明','数据投毒','过拟合','模型蒸馏'],
 '标明内容由 AI 生成并说明其来源，有助于用户进行判断。'],
['Poisoning is an attack.','Overfitting is a training problem.','Distillation shrinks a model.'],
['投毒是一种攻击。','过拟合是训练问题。','蒸馏是把模型变小。']);

Q('4.2','single',[0],
['Who should explanations of an AI decision be designed for?',
 ['The specific people affected by or using them, in language they understand','Only ML engineers','Nobody','Only regulators'],
 'Good explanations fit the audience, such as a loan applicant or a data scientist.'],
['AI 决策的解释应当为谁而设计？',
 ['受影响或使用这些解释的具体人群，并用他们能理解的语言','只为机器学习工程师','不为任何人','只为监管机构'],
 '好的解释要契合受众，例如贷款申请人或数据科学家。'],
['People affected by decisions also need explanations.','Unexplained decisions erode trust.','Users and affected people matter too.'],
['受决策影响的人同样需要解释。','没有解释的决策会侵蚀信任。','用户和受影响的人同样重要。']);

Q('4.2','single',[0],
['A regulator wants to know which features matter most across ALL of a model’s decisions. What kind of explanation is needed?',
 ['A global explanation, such as overall feature importance','A local explanation of a single prediction','A confusion matrix','A token count'],
 'Global explanations describe the model overall; local ones explain one prediction.'],
['监管机构想知道在模型的所有决策中哪些特征最重要。需要哪种解释？',
 ['全局解释，例如整体特征重要性','对单个预测的局部解释','混淆矩阵','token 数量'],
 '全局解释描述模型整体；局部解释说明单个预测。'],
['A local explanation covers only one decision.','A confusion matrix shows errors, not feature importance.','Token counts are unrelated.'],
['局部解释只涵盖一个决策。','混淆矩阵显示错误情况，而不是特征重要性。','token 数与此无关。']);

Q('4.2','single',[0],
['In which situation is an interpretable model worth choosing even if it is slightly less accurate?',
 ['High-stakes decisions that must be justified to individuals or regulators, such as lending or hiring','Recommending songs','Generating wallpaper images','Suggesting emojis'],
 'The higher the stakes, the more explainability matters.'],
['在哪种情况下，即使可解释模型的准确率略低，也值得选择它？',
 ['必须向个人或监管机构说明理由的高风险决策，例如放贷或招聘','推荐歌曲','生成壁纸图片','推荐表情符号'],
 '风险越高，可解释性越重要。'],
['Low-stakes recommendations rarely need explanations.','Creative images do not need justification.','A wrong emoji suggestion harms no one.'],
['低风险的推荐很少需要解释。','创意图片不需要说明理由。','推荐错表情符号不会伤害任何人。']);

Q('4.2','multi',[0,1],
['Which TWO help make a generative AI application transparent to its users? (Choose TWO.)',
 ['Clearly disclose that responses are AI-generated','Show citations or sources for answers','Hide the fact that it is an AI','Remove any way to give feedback','Show the model’s internal weights to users'],
 'Disclosure and sources help users understand and trust what they see.'],
['以下哪两项有助于让生成式 AI 应用对用户透明？（选择两项）',
 ['明确告知回答由 AI 生成','为回答展示引用或来源','隐瞒它是 AI 的事实','移除所有反馈渠道','向用户展示模型的内部权重'],
 '明确告知和提供来源，有助于用户理解并信任所看到的内容。'],
['Hiding AI use is the opposite of transparency.','Feedback supports transparency and trust.','Raw weights mean nothing to users.'],
['隐瞒 AI 的使用与透明背道而驰。','反馈有助于透明和信任。','原始权重对用户毫无意义。']);

Q('4.2','order',[],
['Put these steps for explaining a credit model’s decisions to applicants in order.',
 ['Train or choose the credit model','Generate feature attributions for each decision, for example with SageMaker Clarify','Turn the top factors into plain-language reasons','Show the reasons to applicants and collect their feedback'],
 'Technical explanations must be translated for the people affected.'],
['按顺序排列向申请人解释信贷模型决策的步骤。',
 ['训练或选定信贷模型','为每个决策生成特征归因，例如使用 SageMaker Clarify','把主要因素转换成通俗易懂的理由','向申请人展示理由并收集反馈'],
 '技术层面的解释必须转化为受影响者能理解的语言。']);
})();
