/* Fifth question set (v1.3), domain 1: doubles the bank with new angles on every objective.
   Append-only. Correct options are authored first (shuffled on screen); wrong-option notes follow in order. */
(function(){
function Q(k, t, a, en, zh, wEn, wZh){
  var q = {k: k, d: 'd' + k.charAt(0), t: t, a: a, en: {q: en[0], o: en[1], x: en[2]}, zh: {q: zh[0], o: zh[1], x: zh[2]}};
  if (wEn) { var pad = a.map(function(){ return ''; }); q.w = {en: pad.concat(wEn), zh: pad.concat(wZh)}; }
  AIF.qs.push(q);
}

/* ================= 1.1 Basic AI concepts and terminology ================= */
Q('1.1','single',[0],
['Which statement correctly describes how AI, machine learning, deep learning and generative AI relate to each other?',
 ['Generative AI is a subset of deep learning, which is a subset of machine learning, which is a subset of AI','Machine learning is a subset of deep learning','AI is a subset of generative AI','Deep learning and machine learning are unrelated fields'],
 'Each is a narrower part of the one before: AI ⊃ ML ⊃ deep learning ⊃ generative AI.'],
['以下哪项正确描述了 AI、机器学习、深度学习和生成式 AI 之间的关系？',
 ['生成式 AI 是深度学习的子集，深度学习是机器学习的子集，机器学习是 AI 的子集','机器学习是深度学习的子集','AI 是生成式 AI 的子集','深度学习和机器学习是互不相关的领域'],
 '每一个都是前一个的更窄部分：AI ⊃ 机器学习 ⊃ 深度学习 ⊃ 生成式 AI。'],
['It is the other way round: deep learning is a subset of machine learning.','AI is the broadest field; generative AI sits inside it.','Deep learning is a kind of machine learning that uses neural networks.'],
['正好相反：深度学习是机器学习的子集。','AI 是范围最广的领域，生成式 AI 位于其中。','深度学习是使用神经网络的一类机器学习。']);

Q('1.1','single',[0],
['What is the difference between an algorithm and a model in machine learning?',
 ['The algorithm is the learning procedure; the model is the trained result that makes predictions','They mean exactly the same thing','The model is the raw training data','The algorithm is what training produces at the end'],
 'An algorithm (such as XGBoost) learns from data; the output of that training is the model you deploy.'],
['机器学习中“算法”和“模型”有什么区别？',
 ['算法是学习的过程；模型是训练得到、用于预测的结果','两者含义完全相同','模型就是原始训练数据','算法是训练结束时得到的产物'],
 '算法（例如 XGBoost）从数据中学习，训练的产物就是可部署的模型。'],
['They are different: one is the method, the other is its output.','Data is the input to training, not the model.','Training produces the model, not the algorithm.'],
['两者不同：一个是方法，一个是方法的产物。','数据是训练的输入，而不是模型。','训练产生的是模型，而不是算法。']);

Q('1.1','single',[0],
['A deployed model receives a new customer’s details and returns a churn risk score. What is this step called?',
 ['Inference','Training','Data labeling','Hyperparameter tuning'],
 'Inference means using a trained model to make predictions on new data.'],
['一个已部署的模型接收新客户的信息，并返回流失风险分数。这个步骤叫什么？',
 ['推理','训练','数据标记','超参数调优'],
 '推理是指用训练好的模型对新数据进行预测。'],
['Training happens earlier, when the model learns from historical data.','Labeling adds correct answers to training data.','Tuning searches for the best training settings before deployment.'],
['训练发生在更早阶段，即模型从历史数据中学习。','标记是给训练数据加上正确答案。','调优是在部署前寻找最佳训练设置。']);

Q('1.1','single',[0],
['Every night a retailer scores all 2 million customers for the next day’s marketing campaign. Nobody waits for the results. Which type of inference fits best?',
 ['Batch inference','Real-time inference','Serverless inference for each customer as they log in','Streaming inference on a dedicated endpoint'],
 'Large scheduled jobs where no one is waiting are the classic use for batch inference, which is also the cheapest option.'],
['一家零售商每晚为全部 200 万名客户打分，供第二天的营销活动使用，没有人在等待结果。哪种推理方式最合适？',
 ['批量推理','实时推理','客户登录时逐个进行无服务器推理','在专用端点上进行流式推理'],
 '无人等待的大规模定时任务是批量推理的典型用途，而且成本最低。'],
['Real-time endpoints run all day for instant answers, which nobody needs here.','Scoring one by one at login is slow and misses customers who don’t log in.','A dedicated always-on endpoint wastes money for a nightly job.'],
['实时端点全天运行以即时响应，而这里没人需要即时结果。','登录时逐个打分速度慢，还会漏掉不登录的客户。','为每晚一次的任务常驻专用端点会浪费成本。']);

Q('1.1','single',[0],
['A card payment must be checked for fraud in under 100 milliseconds during checkout. Which inference type is required?',
 ['Real-time inference','Batch inference','Asynchronous inference','A monthly offline scoring job'],
 'An instant decision while the customer waits needs a low-latency, always-available real-time endpoint.'],
['结账时必须在 100 毫秒内完成信用卡欺诈检查。需要哪种推理方式？',
 ['实时推理','批量推理','异步推理','每月一次的离线评分任务'],
 '客户等待时的即时决策需要低延迟、随时可用的实时端点。'],
['Batch jobs run later on large datasets, far too slow for checkout.','Asynchronous inference queues requests and returns results later.','A monthly job cannot stop a fraudulent payment now.'],
['批量任务稍后才处理大数据集，对结账来说太慢。','异步推理会把请求排队，稍后才返回结果。','每月一次的任务无法阻止当下的欺诈付款。']);

Q('1.1','single',[0],
['Which of these is an example of structured data?',
 ['A database table of customer IDs, ages and account balances','Written product reviews','Recorded support calls','Scanned PDF contracts'],
 'Structured data fits a fixed schema of rows and columns.'],
['以下哪项属于结构化数据？',
 ['包含客户 ID、年龄和账户余额的数据库表','书面的商品评价','录制的客服通话','扫描的 PDF 合同'],
 '结构化数据符合固定的行列模式。'],
['Free text is unstructured.','Audio is unstructured.','Scanned documents are images, which are unstructured.'],
['自由文本属于非结构化数据。','音频属于非结构化数据。','扫描文件是图像，属于非结构化数据。']);

Q('1.1','single',[0],
['Which dataset is labeled?',
 ['Emails that are each tagged “spam” or “not spam”','Raw photos with no descriptions','Web server logs','A clickstream of pages visited'],
 'Labeled data includes the correct answer (the label) for each example.'],
['以下哪个数据集是已标记的？',
 ['每封邮件都标记了“垃圾邮件”或“正常邮件”','没有任何说明的原始照片','Web 服务器日志','用户访问页面的点击流'],
 '已标记的数据为每个样本提供了正确答案（标签）。'],
['Photos without descriptions have no labels.','Logs record events but carry no target answer.','A clickstream shows behavior, not a labeled outcome.'],
['没有说明的照片没有标签。','日志记录事件，但不包含目标答案。','点击流体现的是行为，而不是已标记的结果。']);

Q('1.1','multi',[0,1],
['Which TWO are supervised learning tasks? (Choose TWO.)',
 ['Predicting house prices from past sales where the sale price is known','Classifying emails as spam or not spam using labeled examples','Grouping customers into segments with no predefined labels','Training a game-playing agent with rewards and penalties','Reducing hundreds of features to two for a chart'],
 'Supervised learning learns from examples that include the correct answer: regression and classification.'],
['以下哪两项属于监督学习任务？（选择两项）',
 ['根据已知成交价的历史销售预测房价','用已标记的样本将邮件分为垃圾邮件或正常邮件','在没有预设标签的情况下对客户分群','通过奖励和惩罚训练玩游戏的智能体','把数百个特征降到两个以便画图'],
 '监督学习从带有正确答案的样本中学习，例如回归和分类。'],
['Grouping without labels is clustering, which is unsupervised.','Learning from rewards is reinforcement learning.','Dimensionality reduction without labels is unsupervised.'],
['没有标签的分组是聚类，属于无监督学习。','从奖励中学习属于强化学习。','没有标签的降维属于无监督学习。']);

Q('1.1','single',[0],
['A delivery model consistently underestimates delivery times for rural addresses. In machine learning terms, what is this?',
 ['Bias: a systematic error in one direction','Variance: sensitivity to small changes in the training data','Data leakage from the test set','Latency'],
 'Bias is error that consistently pushes predictions the same way, often because the model or data does not capture part of the problem.'],
['一个配送模型总是低估农村地址的送达时间。用机器学习术语来说，这是什么？',
 ['偏差：朝同一方向的系统性误差','方差：对训练数据细微变化的敏感程度','测试集的数据泄露','延迟'],
 '偏差是指始终把预测推向同一方向的误差，通常是因为模型或数据没有涵盖问题的某一部分。'],
['Variance makes predictions scatter, not lean one way.','Leakage inflates test scores; it does not cause a steady underestimate.','Latency is response time, not prediction error.'],
['方差会让预测分散，而不是偏向一边。','数据泄露会虚高测试分数，不会造成持续低估。','延迟是响应时间，而不是预测误差。']);

Q('1.1','single',[0],
['What does fairness mean for an AI model?',
 ['Its outcomes do not unfairly disadvantage individuals or groups, for example by gender or ethnicity','It has high overall accuracy','It gives every user exactly the same output','Its code is open source'],
 'Fairness is about how outcomes are distributed across people and groups, not overall accuracy.'],
['对 AI 模型而言，“公平性”指什么？',
 ['其结果不会让个人或群体（例如因性别或族裔）受到不公正的不利影响','整体准确率很高','给每个用户完全相同的输出','代码是开源的'],
 '公平性关注的是结果在不同人和群体之间的分布，而不是整体准确率。'],
['A model can be accurate overall and still be unfair to a group.','Identical outputs for everyone would make most models useless.','Open code helps transparency but does not make outcomes fair.'],
['模型可能整体准确，却仍然对某个群体不公平。','对所有人输出完全相同，大多数模型就失去了意义。','开源代码有助于透明，但不能让结果变得公平。']);

Q('1.1','single',[0],
['A model reaches 91% accuracy on the training data and 90% on the validation data. What does this suggest?',
 ['A good fit: the model generalizes well to new data','Overfitting','Underfitting','The validation data was leaked into training'],
 'Similar, strong scores on training and validation data mean the model has learned patterns that generalize.'],
['一个模型在训练数据上的准确率是 91%，在验证数据上是 90%。这说明什么？',
 ['拟合良好：模型能很好地泛化到新数据','过拟合','欠拟合','验证数据泄露进了训练集'],
 '训练集和验证集得分都高且接近，说明模型学到了可以泛化的规律。'],
['Overfitting shows a big gap: high training score, much lower validation score.','Underfitting shows low scores on both sets.','Close scores alone are not evidence of leakage.'],
['过拟合的特征是差距大：训练分高，验证分低得多。','欠拟合的特征是两个数据集得分都低。','仅凭得分接近不能说明发生了数据泄露。']);

Q('1.1','single',[0],
['What is a large language model (LLM)?',
 ['A transformer-based model trained on huge amounts of text to predict the next token, able to perform many language tasks','A rule-based chatbot with scripted replies','A database of stored answers','A model trained for one classification task only'],
 'LLMs learn general language patterns at scale, so one model can summarize, translate, answer questions and more.'],
['什么是大语言模型（LLM）？',
 ['基于 Transformer、用海量文本训练来预测下一个令牌的模型，能完成多种语言任务','使用预设回复的规则型聊天机器人','存储答案的数据库','只针对单一分类任务训练的模型'],
 'LLM 大规模学习通用语言规律，因此一个模型就能总结、翻译、问答等。'],
['Scripted bots follow fixed rules; they do not learn from data.','LLMs generate text; they do not look answers up in a table.','Single-task models are the opposite of general-purpose LLMs.'],
['脚本机器人遵循固定规则，不从数据中学习。','LLM 生成文本，而不是在表格里查答案。','单一任务模型与通用的 LLM 正好相反。']);

Q('1.1','single',[0],
['What distinguishes agentic AI from a standard generative AI chatbot?',
 ['It plans and takes actions with tools over several steps to reach a goal, with some autonomy','It produces text','It uses a large language model','It always answers faster'],
 'Agentic AI goes beyond responding: it decides on steps, calls tools and acts.'],
['与普通的生成式 AI 聊天机器人相比，智能体 AI 的区别是什么？',
 ['它会规划并借助工具分多步行动以完成目标，具有一定自主性','它能生成文本','它使用大语言模型','它总是回答得更快'],
 '智能体 AI 不只是回应：它会决定步骤、调用工具并采取行动。'],
['Both produce text; that is not the difference.','Chatbots often use LLMs too.','Agents usually take longer because they run several steps.'],
['两者都能生成文本，这不是区别。','聊天机器人通常也使用 LLM。','智能体通常更慢，因为要执行多个步骤。']);

Q('1.1','single',[0],
['What is a neural network?',
 ['Layers of connected nodes whose weights are adjusted during training to learn patterns','A set of hand-written if-then rules','A SQL query','A single decision tree'],
 'Neural networks learn by adjusting connection weights; deep learning uses many such layers.'],
['什么是神经网络？',
 ['由相互连接的节点组成的多层结构，训练时调整权重以学习规律','一组人工编写的 if-then 规则','一条 SQL 查询','单棵决策树'],
 '神经网络通过调整连接权重来学习；深度学习使用很多这样的层。'],
['Hand-written rules do not learn from data.','SQL retrieves data; it does not learn.','A decision tree is a different kind of model.'],
['人工规则不会从数据中学习。','SQL 用于检索数据，不会学习。','决策树是另一类模型。']);

Q('1.1','order',[],
['Order these fields from the broadest to the most specific.',
 ['Artificial intelligence','Machine learning','Deep learning','Generative AI'],
 'Each field is a subset of the one before it.'],
['按从最广到最具体的顺序排列这些领域。',
 ['人工智能','机器学习','深度学习','生成式 AI'],
 '每个领域都是前一个领域的子集。']);

Q('1.1','match',[],
['Match each dataset to its type of data.',
 [['Hourly temperature readings from a sensor','Time-series data'],['A customer table with name, age and city columns','Tabular data'],['Photos of products for an online store','Image data'],['Customer support emails','Text data']],
 'Time-ordered measurements are time-series; rows and columns are tabular; photos are images; emails are text.'],
['将每个数据集与其数据类型配对。',
 [['传感器每小时的温度读数','时间序列数据'],['包含姓名、年龄和城市列的客户表','表格数据'],['网店的商品照片','图像数据'],['客户支持邮件','文本数据']],
 '按时间排序的测量值是时间序列；行和列是表格数据；照片是图像；邮件是文本。']);

/* ================= 1.2 Practical use cases for AI ================= */
Q('1.2','single',[0],
['An e-learning platform wants to turn lesson scripts into natural-sounding audio in several voices. Which AWS service fits?',
 ['Amazon Polly','Amazon Transcribe','Amazon Comprehend','Amazon Lex'],
 'Amazon Polly converts text to lifelike speech.'],
['一个在线学习平台希望把课程脚本转换成多种声音、听起来自然的音频。哪项 AWS 服务合适？',
 ['Amazon Polly','Amazon Transcribe','Amazon Comprehend','Amazon Lex'],
 'Amazon Polly 可以把文本转换成逼真的语音。'],
['Transcribe does the reverse: speech to text.','Comprehend analyzes text; it does not speak.','Lex builds conversational bots that understand intents.'],
['Transcribe 的方向相反：把语音转成文字。','Comprehend 分析文本，不会发声。','Lex 用于构建能理解意图的对话机器人。']);

Q('1.2','single',[0],
['A news company wants to pull company names, people, places and dates out of thousands of articles. Which AWS service fits?',
 ['Amazon Comprehend (entity recognition)','Amazon Translate','Amazon Rekognition','Amazon Polly'],
 'Comprehend is the managed NLP service for entities, key phrases, sentiment and more.'],
['一家新闻公司希望从数千篇文章中提取公司名、人名、地点和日期。哪项 AWS 服务合适？',
 ['Amazon Comprehend（实体识别）','Amazon Translate','Amazon Rekognition','Amazon Polly'],
 'Comprehend 是托管的 NLP 服务，可识别实体、关键短语、情感等。'],
['Translate changes the language but does not extract entities.','Rekognition analyzes images and video, not text.','Polly turns text into speech.'],
['Translate 只转换语言，不提取实体。','Rekognition 分析图像和视频，而不是文本。','Polly 把文本转成语音。']);

Q('1.2','single',[0],
['A social app must automatically detect inappropriate content in images that users upload. Which AWS service fits?',
 ['Amazon Rekognition content moderation','Amazon Comprehend','Amazon Polly','Amazon Textract'],
 'Rekognition’s moderation APIs flag unsafe or inappropriate images and videos.'],
['一个社交应用必须自动识别用户上传图片中的不当内容。哪项 AWS 服务合适？',
 ['Amazon Rekognition 内容审核','Amazon Comprehend','Amazon Polly','Amazon Textract'],
 'Rekognition 的审核 API 可以标记不安全或不当的图片和视频。'],
['Comprehend works on text, not images.','Polly produces speech.','Textract reads text and forms from documents; it does not judge content.'],
['Comprehend 处理文本，而不是图像。','Polly 用于生成语音。','Textract 读取文档中的文字和表单，不判断内容是否恰当。']);

Q('1.2','single',[0],
['An online store wants to recommend products to each shopper based on their browsing and purchase history. Which AWS service is built for this?',
 ['Amazon Personalize','Amazon Comprehend','Amazon Lex','Amazon Polly'],
 'Amazon Personalize creates real-time personalized recommendations from user behavior data.'],
['一家网店希望根据每位顾客的浏览和购买记录推荐商品。哪项 AWS 服务专为此设计？',
 ['Amazon Personalize','Amazon Comprehend','Amazon Lex','Amazon Polly'],
 'Amazon Personalize 根据用户行为数据生成实时个性化推荐。'],
['Comprehend analyzes text; it does not build recommendation models.','Lex builds chatbots.','Polly converts text to speech.'],
['Comprehend 分析文本，不构建推荐模型。','Lex 用于构建聊天机器人。','Polly 把文本转成语音。']);

Q('1.2','single',[0],
['Employees want to ask natural-language questions and get answers from documents spread across SharePoint, Confluence and Amazon S3. Which AWS service provides this intelligent enterprise search?',
 ['Amazon Kendra','Amazon Polly','Amazon Transcribe','Amazon Rekognition'],
 'Kendra indexes content from many sources and answers natural-language queries.'],
['员工希望用自然语言提问，并从分散在 SharePoint、Confluence 和 Amazon S3 中的文档里获得答案。哪项 AWS 服务提供这种智能企业搜索？',
 ['Amazon Kendra','Amazon Polly','Amazon Transcribe','Amazon Rekognition'],
 'Kendra 会为多个来源的内容建立索引，并回答自然语言问题。'],
['Polly speaks text aloud; it does not search.','Transcribe converts speech to text.','Rekognition analyzes images and video.'],
['Polly 只朗读文本，不做搜索。','Transcribe 把语音转成文字。','Rekognition 分析图像和视频。']);

Q('1.2','single',[0],
['A dealership wants to predict the price a used car will sell for. Which ML technique fits?',
 ['Regression','Classification','Clustering','Dimensionality reduction'],
 'Predicting a continuous number, such as a price, is a regression task.'],
['一家车行希望预测二手车的成交价格。哪种机器学习技术合适？',
 ['回归','分类','聚类','降维'],
 '预测价格这样的连续数值属于回归任务。'],
['Classification predicts categories, not a price.','Clustering groups similar items without predicting a value.','Dimensionality reduction simplifies features; it does not predict.'],
['分类预测的是类别，而不是价格。','聚类是把相似项分组，不预测数值。','降维用于简化特征，不做预测。']);

Q('1.2','single',[0],
['A help desk wants to sort each new ticket as urgent, normal or low priority. Which ML technique fits?',
 ['Multi-class classification','Regression','Clustering','Time-series forecasting'],
 'Assigning one of several known categories is multi-class classification.'],
['一个服务台希望把每张新工单归为紧急、普通或低优先级。哪种机器学习技术合适？',
 ['多分类','回归','聚类','时间序列预测'],
 '在几个已知类别中选择一个属于多分类。'],
['Regression predicts a number, not a category.','Clustering finds groups without predefined labels.','Forecasting predicts future values over time.'],
['回归预测数值，而不是类别。','聚类在没有预设标签的情况下寻找分组。','预测是对随时间变化的未来数值进行推测。']);

Q('1.2','single',[0],
['A small bakery gets about 20 online orders a month and is considering a custom ML demand forecaster that would cost $50,000 to build. What is the best advice?',
 ['Don’t build it: the cost is far greater than the benefit, and simple rules or a spreadsheet will do','Build it to stay modern','Fine-tune a large language model instead','Collect more data and train a deep learning model'],
 'AI is not appropriate when a cost-benefit analysis shows that a simpler approach meets the need.'],
['一家小面包店每月约有 20 笔网上订单，正在考虑花 5 万美元定制一个机器学习需求预测模型。最好的建议是什么？',
 ['不要做：成本远高于收益，简单规则或电子表格就够了','为了跟上潮流而开发','改为微调一个大语言模型','收集更多数据并训练深度学习模型'],
 '当成本收益分析表明更简单的方法就能满足需求时，就不适合使用 AI。'],
['Being modern is not a business case.','That would cost even more for the same small problem.','With 20 orders a month there is not enough data or value to justify it.'],
['“跟上潮流”并不是商业理由。','这会让同样的小问题花费更多。','每月 20 笔订单，数据量和价值都不足以支撑。']);

Q('1.2','single',[0],
['When is a generative AI model a poor choice?',
 ['When the output must be exactly correct and reproducible, such as calculating invoice totals','Drafting marketing copy','Summarizing meeting notes','Brainstorming product names'],
 'Tasks that need a specific, exact outcome are better handled by deterministic code.'],
['在什么情况下，生成式 AI 模型是一个糟糕的选择？',
 ['输出必须完全正确且可复现时，例如计算发票总额','撰写营销文案','总结会议记录','为产品起名集思广益'],
 '需要特定、精确结果的任务更适合用确定性代码处理。'],
['Drafting copy is a strong fit for generative AI.','Summarization is a strong fit for generative AI.','Brainstorming benefits from generative AI’s creativity.'],
['撰写文案非常适合生成式 AI。','总结非常适合生成式 AI。','集思广益正好发挥生成式 AI 的创造力。']);

Q('1.2','single',[0],
['Radiologists want AI to highlight suspicious areas on scans, while doctors still make the final diagnosis. Which value does AI provide here?',
 ['Assisting human decision making','Fully replacing the doctors','Guaranteeing a correct diagnosis','Removing the need for any training data'],
 'AI adds value by supporting experts’ decisions rather than replacing them.'],
['放射科医生希望 AI 在扫描影像上标出可疑区域，而最终诊断仍由医生做出。AI 在这里提供了什么价值？',
 ['辅助人类决策','完全取代医生','保证诊断正确','不再需要任何训练数据'],
 'AI 的价值在于支持专家决策，而不是取代专家。'],
['Doctors still decide; the AI only assists.','No AI system can guarantee correctness.','The model still needs labeled scans to learn from.'],
['仍由医生做决定，AI 只是辅助。','没有任何 AI 系统能保证正确。','模型仍需要已标记的影像来学习。']);

Q('1.2','single',[0],
['An insurer uses AI to review 50,000 claims a day, far more than its 10 staff could ever read. Which value of AI does this show?',
 ['Scalability','Explainability','Creativity','Lower data quality requirements'],
 'AI can handle volumes that would be impossible for people alone.'],
['一家保险公司用 AI 每天审核 5 万份理赔，远超 10 名员工能处理的数量。这体现了 AI 的哪项价值？',
 ['可扩展性','可解释性','创造力','降低对数据质量的要求'],
 'AI 能处理仅靠人工不可能完成的工作量。'],
['Explainability is about understanding decisions, not volume.','Reviewing claims is not a creative task.','AI still needs good-quality data.'],
['可解释性关乎理解决策，而不是处理量。','审核理赔并不是创造性任务。','AI 仍然需要高质量的数据。']);

Q('1.2','single',[0],
['A telecom company predicts customer churn from 30 tabular features. It scores millions of rows a day, needs low latency and must explain each prediction to regulators. Which approach fits best?',
 ['A traditional ML model, such as gradient-boosted trees, trained on the tabular data','Prompting a large language model for every row','An image generation model','Fine-tuning a 70-billion-parameter LLM'],
 'For structured data with explainability and cost constraints, traditional ML usually beats foundation models.'],
['一家电信公司用 30 个表格特征预测客户流失。它每天要为数百万行数据打分，要求低延迟，并且必须向监管机构解释每个预测。哪种方法最合适？',
 ['在表格数据上训练的传统机器学习模型，例如梯度提升树','为每一行数据调用一次大语言模型','图像生成模型','微调一个 700 亿参数的 LLM'],
 '对于有可解释性和成本约束的结构化数据，传统机器学习通常优于基础模型。'],
['Calling an LLM per row is slow, costly and hard to explain.','This is a tabular prediction task, not image generation.','A huge LLM adds cost and latency and is harder to explain.'],
['逐行调用 LLM 速度慢、成本高，也难以解释。','这是表格预测任务，不是图像生成。','超大 LLM 会增加成本和延迟，也更难解释。']);

Q('1.2','single',[0],
['A company wants to summarize free-text customer feedback written in many languages. It has no labeled data. Which approach fits best?',
 ['A foundation model through Amazon Bedrock','Linear regression','K-means clustering alone','A hand-written rules engine'],
 'Foundation models handle open-ended language tasks in many languages without task-specific labeled data.'],
['一家公司希望总结用多种语言写成的客户自由文本反馈，而且没有已标记的数据。哪种方法最合适？',
 ['通过 Amazon Bedrock 使用基础模型','线性回归','仅使用 K 均值聚类','人工编写的规则引擎'],
 '基础模型无需特定任务的标记数据，就能处理多种语言的开放式语言任务。'],
['Regression predicts numbers; it cannot write summaries.','Clustering can group feedback but cannot summarize it.','Rules cannot cope with free text in many languages.'],
['回归预测数值，不能写总结。','聚类可以对反馈分组，但不能总结。','规则无法应对多种语言的自由文本。']);

Q('1.2','multi',[0,1],
['Which TWO are real-world applications of computer vision? (Choose TWO.)',
 ['Reading license plates at a parking gate','Counting people in store camera footage','Translating chat messages','Forecasting next month’s sales','Converting text to speech'],
 'Computer vision interprets images and video.'],
['以下哪两项是计算机视觉的实际应用？（选择两项）',
 ['在停车场入口识别车牌','统计商店监控画面中的人数','翻译聊天消息','预测下个月的销售额','把文本转换成语音'],
 '计算机视觉用于理解图像和视频。'],
['Translation is an NLP task.','Sales forecasting works on numbers over time.','Text-to-speech is a speech task.'],
['翻译属于 NLP 任务。','销售预测处理的是随时间变化的数值。','文本转语音属于语音任务。']);

Q('1.2','match',[],
['Match each business problem to the ML technique that fits it.',
 [['Predict tomorrow’s electricity demand in megawatts','Regression'],['Flag an email as phishing or safe','Classification'],['Group news articles by topic with no labels','Clustering'],['Spot unusual sensor readings on a machine','Anomaly detection']],
 'Numbers → regression; categories → classification; unlabeled groups → clustering; rare outliers → anomaly detection.'],
['将每个业务问题与适合它的机器学习技术配对。',
 [['预测明天的用电需求（兆瓦）','回归'],['判断邮件是钓鱼邮件还是安全邮件','分类'],['在没有标签的情况下按主题对新闻分组','聚类'],['发现机器上异常的传感器读数','异常检测']],
 '数值 → 回归；类别 → 分类；无标签分组 → 聚类；罕见离群值 → 异常检测。']);

Q('1.2','single',[0],
['A team needs a fully managed service to build, train and deploy its own custom ML models, with notebooks, training jobs and hosted endpoints. Which AWS service fits?',
 ['Amazon SageMaker AI','Amazon Polly','Amazon Translate','Amazon Lex'],
 'SageMaker AI covers the whole custom ML workflow, from data preparation to deployment.'],
['一个团队需要一项完全托管的服务，用笔记本、训练任务和托管端点来构建、训练和部署自己的定制机器学习模型。哪项 AWS 服务合适？',
 ['Amazon SageMaker AI','Amazon Polly','Amazon Translate','Amazon Lex'],
 'SageMaker AI 覆盖从数据准备到部署的整个定制机器学习流程。'],
['Polly is a ready-made text-to-speech service.','Translate is a ready-made translation service.','Lex is for building chatbots, not training custom models.'],
['Polly 是现成的文本转语音服务。','Translate 是现成的翻译服务。','Lex 用于构建聊天机器人，而不是训练定制模型。']);

/* ================= 1.3 AI/ML development lifecycle ================= */
Q('1.3','single',[0],
['Before training, a team plots feature distributions and checks for missing values and outliers. Which pipeline stage is this?',
 ['Exploratory data analysis','Deployment','Model monitoring','Hyperparameter tuning'],
 'Exploratory data analysis (EDA) examines the data to understand it and spot quality problems.'],
['在训练之前，团队绘制特征分布图并检查缺失值和异常值。这属于管道的哪个阶段？',
 ['探索性数据分析','部署','模型监控','超参数调优'],
 '探索性数据分析（EDA）通过查看数据来理解它并发现质量问题。'],
['Deployment happens after the model is trained and evaluated.','Monitoring watches a model already in production.','Tuning adjusts training settings; it comes after data work.'],
['部署发生在模型训练和评估之后。','监控针对已上线的模型。','调优是调整训练设置，发生在数据工作之后。']);

Q('1.3','single',[0],
['A data scientist creates a “days since last purchase” column from raw purchase dates. What is this an example of?',
 ['Feature engineering','Model evaluation','Inference','Data labeling'],
 'Feature engineering turns raw data into inputs that help the model learn.'],
['数据科学家根据原始购买日期新建了一列“距上次购买的天数”。这属于什么？',
 ['特征工程','模型评估','推理','数据标记'],
 '特征工程是把原始数据转换成有助于模型学习的输入。'],
['Evaluation measures a trained model’s performance.','Inference uses a trained model to predict.','Labeling adds the correct answers to examples.'],
['评估是衡量已训练模型的表现。','推理是用已训练的模型进行预测。','标记是为样本加上正确答案。']);

Q('1.3','single',[0],
['A team wants to automatically try many combinations of learning rate and tree depth to find the best-performing model. Which SageMaker AI capability fits?',
 ['Automatic model tuning (hyperparameter tuning)','SageMaker Model Monitor','SageMaker Ground Truth','SageMaker Clarify'],
 'Automatic model tuning runs many training jobs with different hyperparameters and picks the best.'],
['一个团队希望自动尝试多种学习率和树深度组合，找出表现最好的模型。哪项 SageMaker AI 功能合适？',
 ['自动模型调优（超参数调优）','SageMaker Model Monitor','SageMaker Ground Truth','SageMaker Clarify'],
 '自动模型调优会用不同的超参数运行多个训练任务，并选出最佳结果。'],
['Model Monitor watches deployed models for drift.','Ground Truth is for labeling data.','Clarify detects bias and explains predictions.'],
['Model Monitor 监控已部署模型的漂移。','Ground Truth 用于数据标记。','Clarify 用于检测偏差和解释预测。']);

Q('1.3','single',[0],
['A team wants to use a foundation model without managing servers, scaling or patching, and pay per request. How should it use the model in production?',
 ['Through a managed API service such as Amazon Bedrock','Self-host it on GPU instances it manages','Buy on-premises GPU servers','Train its own model from scratch'],
 'A managed API removes all infrastructure work and charges for usage.'],
['一个团队希望使用基础模型，但不想管理服务器、扩缩容或打补丁，并按请求付费。它应该如何在生产环境中使用模型？',
 ['通过 Amazon Bedrock 等托管 API 服务','自行管理 GPU 实例并托管模型','购买本地 GPU 服务器','从头训练自己的模型'],
 '托管 API 免去了所有基础设施工作，并按用量计费。'],
['Self-hosting means managing servers, scaling and patching.','On-premises hardware is the most infrastructure work of all.','Training from scratch is extremely costly and unnecessary here.'],
['自行托管意味着要管理服务器、扩缩容和补丁。','本地硬件的基础设施工作量最大。','从头训练成本极高，这里也没有必要。']);

Q('1.3','single',[0],
['When might a company self-host an open-source model on a SageMaker AI endpoint instead of calling a managed API?',
 ['When it needs full control over the model weights, version and serving configuration','When it wants zero operations work','When it wants to avoid all infrastructure cost','When it has no ML skills at all'],
 'Self-hosting trades extra operational work for control over the model and how it runs.'],
['在什么情况下，公司可能会选择在 SageMaker AI 端点上自行托管开源模型，而不是调用托管 API？',
 ['需要完全掌控模型权重、版本和服务配置时','希望完全不做运维工作时','希望避免一切基础设施成本时','完全没有机器学习技能时'],
 '自行托管用更多运维工作换取对模型及其运行方式的掌控。'],
['Self-hosting adds operations work.','An endpoint you run has instance costs.','Self-hosting needs more skills, not fewer.'],
['自行托管会增加运维工作。','自己运行的端点需要支付实例费用。','自行托管需要更多技能，而不是更少。']);

Q('1.3','single',[0],
['What is the main trade-off between starting from a pre-trained open-source model and training your own model from scratch?',
 ['A pre-trained model is far cheaper and faster to start with; training from scratch gives full control but needs huge data and compute','A pre-trained model is always more accurate for every domain','Training from scratch is cheaper','Open-source models cannot be customized'],
 'Most teams start from a pre-trained model and customize it; training from scratch is rarely worth it.'],
['从预训练的开源模型起步与从头训练自己的模型，主要权衡是什么？',
 ['预训练模型起步更便宜、更快；从头训练能完全掌控，但需要海量数据和算力','预训练模型在任何领域都更准确','从头训练更便宜','开源模型无法定制'],
 '大多数团队会从预训练模型出发再加以定制，从头训练很少值得。'],
['A general model may still need customizing for a specialist domain.','Training from scratch is by far the most expensive option.','Open-source models can be fine-tuned and adapted.'],
['通用模型在专业领域可能仍需定制。','从头训练是迄今最昂贵的选项。','开源模型可以微调和调整。']);

Q('1.3','match',[],
['Match each ML pipeline stage to the SageMaker AI capability that supports it.',
 [['Label the training data','SageMaker Ground Truth'],['Clean and transform data with little code','SageMaker Data Wrangler'],['Train and tune the model','SageMaker AI training jobs'],['Watch the model in production for drift','SageMaker Model Monitor']],
 'Each stage of the pipeline has a matching managed capability in SageMaker AI.'],
['将机器学习管道的每个阶段与支持它的 SageMaker AI 功能配对。',
 [['标记训练数据','SageMaker Ground Truth'],['用少量代码清洗和转换数据','SageMaker Data Wrangler'],['训练和调优模型','SageMaker AI 训练任务'],['监控生产环境中模型的漂移','SageMaker Model Monitor']],
 '管道的每个阶段在 SageMaker AI 中都有对应的托管功能。']);

Q('1.3','single',[0],
['Business users want to explore the results of an AI project, build dashboards and ask questions about the data in plain language. Which AWS offering fits?',
 ['Amazon Quick','Kiro','SageMaker Ground Truth','Amazon Polly'],
 'Amazon Quick brings business intelligence and AI assistants together for business users.'],
['业务用户希望查看 AI 项目的结果、构建仪表板，并用自然语言对数据提问。哪项 AWS 产品合适？',
 ['Amazon Quick','Kiro','SageMaker Ground Truth','Amazon Polly'],
 'Amazon Quick 为业务用户整合了商业智能和 AI 助手。'],
['Kiro is an agentic IDE for developers.','Ground Truth is for labeling training data.','Polly converts text to speech.'],
['Kiro 是面向开发人员的智能体 IDE。','Ground Truth 用于标记训练数据。','Polly 把文本转成语音。']);

Q('1.3','single',[0],
['Which AWS tool helps developers write the application code around an AI model using spec-driven, agent-assisted development?',
 ['Kiro','Amazon Quick','Amazon Macie','Amazon Transcribe'],
 'Kiro turns requirements into specs, designs and tasks, then helps implement them.'],
['哪项 AWS 工具通过规格驱动、智能体辅助的开发方式，帮助开发人员编写 AI 模型周边的应用代码？',
 ['Kiro','Amazon Quick','Amazon Macie','Amazon Transcribe'],
 'Kiro 把需求转化为规格、设计和任务，再协助实现。'],
['Quick is for business analytics and assistants, not coding.','Macie finds sensitive data in S3.','Transcribe converts speech to text.'],
['Quick 用于业务分析和助手，而不是编程。','Macie 在 S3 中查找敏感数据。','Transcribe 把语音转成文字。']);

Q('1.3','single',[0],
['A team copies notebooks by hand for every model, with hard-coded paths and no tests. Months later, every change breaks something. Which MLOps concern is this?',
 ['Technical debt, fixed with repeatable, versioned and tested pipelines','Underfitting','Data drift','Hallucination'],
 'Manual, untested processes pile up technical debt; MLOps replaces them with automated pipelines.'],
['一个团队为每个模型手动复制笔记本，路径写死、没有测试。几个月后，每次改动都会出问题。这是哪种 MLOps 问题？',
 ['技术债务：用可重复、有版本控制并经过测试的管道解决','欠拟合','数据漂移','幻觉'],
 '手动且未经测试的流程会不断累积技术债务；MLOps 用自动化管道取而代之。'],
['Underfitting is a model quality issue, not a process issue.','Drift is a change in production data.','Hallucination concerns generative model output.'],
['欠拟合是模型质量问题，而不是流程问题。','漂移是生产数据发生了变化。','幻觉涉及生成式模型的输出。']);

Q('1.3','single',[0],
['Which is a production-readiness check before deploying a model?',
 ['Load-testing the endpoint and setting up monitoring and a rollback plan','Adding more training epochs','Deleting the test set','Skipping evaluation to launch sooner'],
 'Production readiness means the model can handle real traffic safely and be observed and rolled back.'],
['以下哪项属于部署模型前的上线就绪检查？',
 ['对端点做负载测试，并设置监控和回滚方案','增加训练轮次','删除测试集','跳过评估以便更快上线'],
 '上线就绪意味着模型能安全地处理真实流量，并且可被观察和回滚。'],
['More epochs change training, not readiness.','The test set is needed to prove the model works.','Skipping evaluation is the opposite of readiness.'],
['增加轮次改变的是训练，而不是就绪程度。','需要测试集来证明模型可用。','跳过评估与上线就绪背道而驰。']);

Q('1.3','single',[0],
['Data scientists run dozens of training runs with different features and settings and need to compare the results later. What should they use?',
 ['Experiment tracking, for example managed MLflow in SageMaker AI','Amazon Polly','Spreadsheets emailed between team members','Amazon Macie'],
 'Experiment tracking records parameters, metrics and artifacts for every run so results can be compared and reproduced.'],
['数据科学家用不同的特征和设置进行了几十次训练，之后需要比较结果。他们应该使用什么？',
 ['实验跟踪，例如 SageMaker AI 中的托管 MLflow','Amazon Polly','在团队成员之间用邮件发送电子表格','Amazon Macie'],
 '实验跟踪会记录每次运行的参数、指标和产物，便于比较和复现结果。'],
['Polly is a text-to-speech service.','Emailed spreadsheets are error-prone and not reproducible.','Macie finds sensitive data; it does not track experiments.'],
['Polly 是文本转语音服务。','用邮件传电子表格容易出错，也无法复现。','Macie 用于查找敏感数据，不跟踪实验。']);

Q('1.3','single',[0],
['SageMaker Model Monitor reports that the input data for a production model has drifted significantly. What is the best next step?',
 ['Investigate, retrain on recent data through the pipeline, evaluate, then redeploy','Ignore it, because the model passed testing at launch','Raise the temperature setting','Turn off monitoring to stop the alerts'],
 'Monitoring and retraining together keep a model accurate as the world changes.'],
['SageMaker Model Monitor 报告某个生产模型的输入数据发生了明显漂移。最佳的下一步是什么？',
 ['调查原因，通过管道用最新数据重新训练、评估，然后重新部署','忽略它，因为模型上线时已通过测试','调高温度参数','关闭监控以停止告警'],
 '监控与再训练相结合，才能在环境变化时保持模型准确。'],
['Passing tests at launch does not protect against later drift.','Temperature is a generative model setting, not a fix for drift.','Hiding alerts leaves the model getting worse.'],
['上线时通过测试并不能防止之后的漂移。','温度是生成式模型的参数，不能解决漂移。','关掉告警只会让模型继续变差。']);

Q('1.3','single',[0],
['99% of transactions are legitimate. A model that labels every transaction “legitimate” scores 99% accuracy. Why is accuracy misleading here?',
 ['The classes are imbalanced, so the model catches no fraud at all; recall, precision or F1 tell the real story','Accuracy is always the best metric','99% accuracy proves the model is excellent','Precision cannot be calculated, so the model is perfect'],
 'With rare positives, accuracy hides failure; use metrics that focus on the positive class.'],
['99% 的交易都是正常的。一个把所有交易都判为“正常”的模型准确率达到 99%。为什么这里的准确率具有误导性？',
 ['类别不平衡，模型根本抓不到欺诈；查全率、查准率或 F1 才能反映真实情况','准确率永远是最好的指标','99% 的准确率证明模型非常出色','无法计算查准率，所以模型是完美的'],
 '正例很少时，准确率会掩盖失败；应使用关注正类的指标。'],
['Accuracy is often the wrong metric for imbalanced data.','It misses 100% of fraud cases.','An undefined precision is a warning sign, not proof of quality.'],
['对于不平衡数据，准确率往往是错误的指标。','它漏掉了 100% 的欺诈案例。','查准率无法计算是一个警示信号，而不是质量证明。']);

Q('1.3','single',[0],
['A fraud model finds 45 of the 50 actual fraud cases and also flags 15 legitimate transactions. What is its recall?',
 ['90%','75%','97%','50%'],
 'Recall = true positives ÷ all actual positives = 45 ÷ 50 = 90%.'],
['一个欺诈模型在 50 个真实欺诈案例中找出了 45 个，同时误报了 15 笔正常交易。它的查全率是多少？',
 ['90%','75%','97%','50%'],
 '查全率 = 真正例 ÷ 所有实际正例 = 45 ÷ 50 = 90%。'],
['75% is precision: 45 ÷ (45 + 15).','That does not match either formula.','That does not match either formula.'],
['75% 是查准率：45 ÷ (45 + 15)。','这与两个公式都不符。','这与两个公式都不符。']);

Q('1.3','multi',[0,1],
['Which TWO are business metrics, rather than model metrics, for an ML solution? (Choose TWO.)',
 ['Development cost','Customer feedback scores','F1 score','Precision','Area under the ROC curve (AUC)'],
 'Business metrics measure value to the organization; model metrics measure prediction quality.'],
['以下哪两项是机器学习方案的业务指标，而不是模型指标？（选择两项）',
 ['开发成本','客户反馈评分','F1 分数','查准率','ROC 曲线下面积（AUC）'],
 '业务指标衡量对组织的价值；模型指标衡量预测质量。'],
['F1 is a model metric.','Precision is a model metric.','AUC is a model metric.'],
['F1 是模型指标。','查准率是模型指标。','AUC 是模型指标。']);
})();
