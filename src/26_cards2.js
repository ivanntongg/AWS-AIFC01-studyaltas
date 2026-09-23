/* Extra flashcards for supporting services. Append-only: add new cards at the end. */
(function(){
var C = [
['d2','What does AWS Lambda do in an AI solution?','Runs code without servers, e.g. the actions a Bedrock agent calls, or pre/post-processing of prompts.','AWS Lambda 在 AI 方案中做什么？','无需服务器运行代码，例如 Bedrock 智能体调用的操作，或对提示做前后处理。'],
['d2','Where would you store chat history and session state?','Amazon DynamoDB, a serverless key-value database.','聊天历史和会话状态存在哪里？','Amazon DynamoDB，无服务器键值数据库。'],
['d2','AWS Budgets vs AWS Cost Explorer?','Budgets alerts you when spend crosses a threshold; Cost Explorer analyzes where the money went.','AWS Budgets 与 AWS Cost Explorer 的区别？','Budgets 在支出超过阈值时告警；Cost Explorer 分析钱花在哪里。'],
['d2','What is Amazon Redshift, and how can Knowledge Bases use it?','A data warehouse; Knowledge Bases can answer natural-language questions over it by generating SQL.','什么是 Amazon Redshift？知识库如何使用它？','数据仓库；知识库可以通过生成 SQL，用自然语言对其提问。'],
['d2','Amazon EMR in one line','Managed big-data frameworks (Spark, Hadoop) for large-scale data processing.','一句话说明 Amazon EMR','托管的大数据框架（Spark、Hadoop），用于大规模数据处理。'],
['d2','What is AWS Data Exchange for?','Finding and subscribing to third-party datasets.','AWS Data Exchange 用来做什么？','查找并订阅第三方数据集。'],
['d2','Amazon ECS vs Amazon EKS?','Both run containers; EKS is managed Kubernetes, ECS is AWS\'s own orchestrator.','Amazon ECS 与 Amazon EKS 的区别？','都用于运行容器；EKS 是托管的 Kubernetes，ECS 是 AWS 自己的编排服务。'],
['d2','What is SageMaker HyperPod?','Resilient clusters for training very large foundation models over long periods.','什么是 SageMaker HyperPod？','用于长时间训练超大基础模型的高韧性集群。'],
['d2','Bedrock Flows vs Bedrock Agents?','Flows run a fixed, predictable sequence of steps; Agents let the model decide the next step.','Bedrock Flows 与 Bedrock Agents 的区别？','Flows 按固定、可预测的步骤执行；Agents 由模型决定下一步。'],
['d2','What does Bedrock Data Automation do?','Extracts structured insights from documents, images, audio and video.','Bedrock Data Automation 做什么？','从文档、图像、音频和视频中提取结构化信息。'],
['d2','What happened to Amazon Q Business?','Its enterprise assistant capabilities now live in Amazon Quick.','Amazon Q Business 怎么样了？','它的企业助手能力现已并入 Amazon Quick。'],
['d3','When is Amazon S3 Vectors the right vector store?','Very large vector datasets that are queried infrequently and must be cheap to store.','什么时候选 Amazon S3 Vectors 作为向量存储？','超大规模、查询不频繁、需要低成本存储的向量数据集。'],
['d3','Which vector stores can Bedrock Knowledge Bases use?','OpenSearch Serverless and managed clusters, S3 Vectors, Aurora PostgreSQL, Neptune Analytics, plus Pinecone, Redis Enterprise Cloud and MongoDB Atlas.','Bedrock 知识库可以使用哪些向量存储？','OpenSearch Serverless 和托管集群、S3 Vectors、Aurora PostgreSQL、Neptune Analytics，以及 Pinecone、Redis Enterprise Cloud 和 MongoDB Atlas。'],
['d5','Amazon VPC and AWS PrivateLink: how do they relate?','A VPC is your private network; PrivateLink interface endpoints inside it reach AWS services privately.','Amazon VPC 与 AWS PrivateLink 有什么关系？','VPC 是你的私有网络；其中的 PrivateLink 接口终端节点可私密访问 AWS 服务。'],
['d5','What is Amazon GuardDuty?','Threat detection that analyzes logs and account activity for suspicious behavior.','什么是 Amazon GuardDuty？','分析日志和账户活动、发现可疑行为的威胁检测服务。'],
['d5','What does AWS WAF protect?','Web apps and APIs, by filtering malicious traffic before it reaches them.','AWS WAF 保护什么？','Web 应用和 API，在恶意流量到达之前将其过滤。'],
['d5','What is AWS Audit Manager for?','Continuously collecting evidence for audits; it includes a generative AI best-practices framework.','AWS Audit Manager 用来做什么？','持续收集审计证据；包含生成式 AI 最佳实践框架。'],
['d5','Why S3 Glacier in AI governance?','Low-cost archive for data and logs you must retain but rarely access.','为什么 AI 治理会用到 S3 Glacier？','低成本归档必须保留但很少访问的数据和日志。']
];
C.forEach(function(c){AIF.cards.push({d:c[0],en:{q:c[1],a:c[2]},zh:{q:c[3],a:c[4]}});});
})();
