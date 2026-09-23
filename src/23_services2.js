(function(){
/* Extra services: [name, cat, what en, pick-when en, what zh, pick-when zh] */
var S = [
['SageMaker Canvas','ml','No-code interface to prepare data and build ML models (includes AutoML).','Business analysts build models without code.','无代码的数据准备与 ML 建模界面（含 AutoML）。','业务分析师无需编程即可建模。'],
['SageMaker Data Wrangler','ml','Visual data preparation and exploratory data analysis.','Clean and explore data before training.','可视化的数据准备与探索性数据分析。','训练前清洗并探索数据。'],
['SageMaker Feature Store','ml','Stores features for training (offline) and low-latency inference (online).','Reuse consistent features across teams and models.','为训练（离线）和低延迟推理（在线）存储特征。','在团队和模型间复用一致的特征。'],
['SageMaker Pipelines','ml','CI/CD workflows for ML: prepare, train, evaluate, register.','Repeatable, automated MLOps.','ML 的 CI/CD 工作流：准备、训练、评估、注册。','可重复、自动化的 MLOps。'],
['SageMaker Model Registry','ml','Catalog of model versions with approval status.','Govern which model version goes to production.','记录模型版本及审批状态的目录。','管理哪个模型版本进入生产。'],
['SageMaker HyperPod','infra','Resilient clusters for large-scale training of foundation models.','Train or fine-tune very large models for weeks.','用于大规模基础模型训练的高韧性集群。','长时间训练或微调超大模型。'],
['Bedrock Flows','genai','Visual builder for fixed, multi-step GenAI workflows linking prompts, knowledge bases and Lambda.','Predictable, auditable GenAI workflows.','可视化构建固定的多步骤生成式 AI 工作流，连接提示、知识库和 Lambda。','可预测、可审计的生成式 AI 工作流。'],
['Bedrock Data Automation','genai','Extracts insights from documents, images, audio and video into structured output.','Process unstructured multimodal content at scale.','从文档、图像、音频和视频中提取结构化信息。','大规模处理非结构化多模态内容。'],
['Bedrock Model Distillation','genai','Trains a smaller student model from a larger teacher model\'s responses.','Near-teacher accuracy at lower cost and latency.','用大型教师模型的回答训练较小的学生模型。','以更低成本和延迟获得接近教师模型的准确率。'],
['Amazon Q Business','genai','Earlier AWS assistant for enterprise data; its capabilities now live in Amazon Quick.','Seen in older questions about enterprise Q&A.','早期面向企业数据的 AWS 助手，其能力现已并入 Amazon Quick。','出现在关于企业问答的旧题中。'],
['PartyRock','genai','No-code playground for building small GenAI apps; named in the v1.0 guide only.','Learning and experimenting, not production.','构建小型生成式 AI 应用的无代码练习场；仅在 v1.0 考纲中出现。','学习和试验，而非生产。'],
['AWS Lambda','core','Serverless functions triggered by events.','Run code for agent actions or to glue AI services together.','由事件触发的无服务器函数。','为智能体操作运行代码，或串联 AI 服务。'],
['Amazon ECS / Amazon EKS','core','Managed container orchestration (EKS = Kubernetes).','Run containerized model servers and apps.','托管的容器编排（EKS = Kubernetes）。','运行容器化的模型服务和应用。'],
['Amazon DynamoDB','core','Serverless key-value / NoSQL database.','Chat history, session state, user profiles.','无服务器键值 / NoSQL 数据库。','聊天历史、会话状态、用户档案。'],
['Amazon Redshift','core','Cloud data warehouse for analytics.','Structured analytics; natural-language-to-SQL over warehouse data.','用于分析的云数据仓库。','结构化分析；对仓库数据进行自然语言转 SQL 查询。'],
['Amazon EMR','core','Managed big-data frameworks such as Spark and Hadoop.','Large-scale data processing before training.','托管的 Spark、Hadoop 等大数据框架。','训练前的大规模数据处理。'],
['AWS Data Exchange','core','Marketplace to find and subscribe to third-party datasets.','Buy external data to enrich models.','查找并订阅第三方数据集的市场。','购买外部数据以丰富模型。'],
['Amazon DocumentDB','data','MongoDB-compatible document database with vector search.','Vectors alongside JSON documents.','兼容 MongoDB、支持向量搜索的文档数据库。','向量与 JSON 文档放在一起。'],
['Amazon ElastiCache','data','In-memory cache with vector search.','Ultra-low-latency lookups, semantic caching.','支持向量搜索的内存缓存。','超低延迟查询、语义缓存。'],
['Amazon S3 Vectors','data','Low-cost vector storage and query inside S3.','Huge, infrequently queried vector datasets.','在 S3 中低成本存储和查询向量。','超大规模、低频查询的向量数据集。'],
['Amazon VPC','core','Isolated private network for your resources; home of PrivateLink endpoints.','Keep AI workloads off the public internet.','为资源提供隔离的私有网络；PrivateLink 终端节点所在之处。','让 AI 工作负载远离公网。'],
['Amazon CloudFront','core','Global content delivery network.','Fast, secure delivery of an AI app\'s web front end.','全球内容分发网络。','快速、安全地分发 AI 应用的网页前端。'],
['Amazon S3 Glacier','core','Low-cost archive storage classes.','Keep old datasets and logs cheaply for retention.','低成本归档存储类别。','为满足保留要求低成本保存旧数据和日志。'],
['AWS Budgets','core','Alerts when cost or usage exceeds thresholds.','"Notify us when Bedrock spend passes $X."','成本或用量超过阈值时告警。','“Bedrock 支出超过 X 美元时通知我们。”'],
['AWS Cost Explorer','core','Visualize and analyze past and forecast spending.','Find which models or teams drive cost.','可视化分析历史和预测支出。','找出是哪些模型或团队在推高成本。'],
['Amazon GuardDuty','sec','Threat detection from logs and account activity.','Detect suspicious activity in AI accounts.','基于日志和账户活动的威胁检测。','发现 AI 账户中的可疑活动。'],
['AWS WAF','sec','Web application firewall.','Filter malicious traffic before it reaches an AI app\'s API.','Web 应用防火墙。','在恶意流量到达 AI 应用 API 之前将其过滤。'],
['AWS Audit Manager','gov','Continuously collects evidence for audits; includes a GenAI best-practices framework.','Prepare for compliance audits of AI workloads.','持续收集审计证据；提供生成式 AI 最佳实践框架。','为 AI 工作负载的合规审计做准备。']
];
S.forEach(function(s){AIF.svc.push({n:s[0],c:s[1],en:{w:s[2],p:s[3]},zh:{w:s[4],p:s[5]}});});

/* Scope marker: L = named in the exam guide's in-scope list; F = feature of a listed service; otherwise context only. */
var L = ['Amazon Bedrock','Bedrock AgentCore','Amazon Nova','SageMaker JumpStart','Strands Agents','Amazon Quick','Amazon Q Developer','Kiro','AWS Transform',
 'Amazon SageMaker AI','Amazon Comprehend','Amazon Transcribe','Amazon Translate','Amazon Polly','Amazon Lex','Amazon Rekognition','Amazon Textract','Amazon Personalize',
 'Amazon EC2','Amazon S3','Amazon OpenSearch Service','Amazon Aurora / RDS for PostgreSQL','Amazon Neptune','AWS Glue / DataBrew','AWS Lake Formation',
 'AWS IAM','AWS KMS','Amazon Macie','AWS Secrets Manager','Amazon Inspector','AWS Artifact','AWS CloudTrail','AWS Config','AWS Trusted Advisor','Amazon CloudWatch','AWS Well-Architected Tool',
 'AWS Lambda','Amazon ECS / Amazon EKS','Amazon DynamoDB','Amazon Redshift','Amazon EMR','AWS Data Exchange','Amazon DocumentDB','Amazon ElastiCache','Amazon VPC','Amazon CloudFront','Amazon S3 Glacier','AWS Budgets','AWS Cost Explorer'];
var F = ['Bedrock Knowledge Bases','Bedrock Agents','Bedrock Guardrails','Bedrock Model Evaluation','Bedrock Prompt Management','Bedrock Flows','Bedrock Data Automation','Bedrock Model Distillation',
 'SageMaker Clarify','SageMaker Model Monitor','SageMaker Ground Truth','SageMaker Model Cards','SageMaker Canvas','SageMaker Data Wrangler','SageMaker Feature Store','SageMaker Pipelines','SageMaker Model Registry','SageMaker HyperPod',
 'AWS Trainium','AWS Inferentia','AWS PrivateLink','Amazon S3 Vectors'];
AIF.svc.forEach(function(s){ s.s = L.indexOf(s.n) >= 0 ? 'L' : (F.indexOf(s.n) >= 0 ? 'F' : ''); });
})();
