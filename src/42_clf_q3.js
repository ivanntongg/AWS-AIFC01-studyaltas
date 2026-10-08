/* CLF-C02 questions, domain 3 (part 1: tasks 3.1–3.4). Original questions written against the exam guide. Append-only. */
(function(){
function Q(k, t, a, en, zh, wEn, wZh){
  var q = {k: k, d: 'd' + k.charAt(0), t: t, a: a, en: {q: en[0], o: en[1], x: en[2]}, zh: {q: zh[0], o: zh[1], x: zh[2]}};
  var pad = a.map(function(){ return ''; }); q.w = {en: pad.concat(wEn), zh: pad.concat(wZh)};
  CLF.qs.push(q);
}

/* ================= 3.1 Deploying and operating ================= */
Q('3.1','single',[0],
['A company wants to create the same VPC, subnets and EC2 instances in three Regions in a repeatable, version-controlled way. Which approach is BEST?',
 ['Infrastructure as code with AWS CloudFormation templates','Clicking through the AWS Management Console in each Region','Asking AWS Support to create the resources','Emailing a checklist to each team'],
 'IaC templates create identical environments every time, can be stored in version control and reduce manual errors.'],
['某公司希望以可重复、受版本控制的方式在三个区域中创建相同的 VPC、子网和 EC2 实例。哪种方法最好？',
 ['使用 AWS CloudFormation 模板实现基础设施即代码','在每个区域的 AWS 管理控制台中逐一点击创建','请 AWS Support 帮忙创建资源','给每个团队发送一份检查清单'],
 'IaC 模板每次都能创建完全相同的环境，可以存储在版本控制中，并减少人为错误。'],
['Manual console work is slow and error-prone for repeatable tasks.','AWS Support does not build your environments.','A checklist still relies on manual work.'],
['对于可重复的任务，手动在控制台操作既慢又容易出错。','AWS Support 不会替你搭建环境。','检查清单仍然依赖人工操作。']);

Q('3.1','single',[0],
['A developer wants to call AWS services from a Python application. What should they use?',
 ['The AWS SDK for Python (Boto3)','The AWS Management Console','AWS Artifact','Amazon WorkSpaces'],
 'AWS SDKs provide language-specific libraries for calling AWS APIs from application code.'],
['某开发人员希望从 Python 应用中调用 AWS 服务。应该使用什么？',
 ['AWS SDK for Python（Boto3）','AWS 管理控制台','AWS Artifact','Amazon WorkSpaces'],
 'AWS SDK 提供针对特定编程语言的库，用于在应用代码中调用 AWS API。'],
['The console is a web interface, not a code library.','Artifact provides compliance reports.','WorkSpaces provides virtual desktops.'],
['控制台是 Web 界面，不是代码库。','Artifact 提供合规报告。','WorkSpaces 提供虚拟桌面。']);

Q('3.1','single',[0],
['An administrator wants to write a script that stops all development EC2 instances every evening. Which tool is MOST suitable?',
 ['AWS Command Line Interface (AWS CLI)','AWS Management Console','AWS Marketplace','AWS Artifact'],
 'The AWS CLI lets you control AWS services with commands that can be scripted and scheduled.'],
['某管理员希望编写一个脚本，每晚停止所有开发用 EC2 实例。哪种工具最合适？',
 ['AWS 命令行界面（AWS CLI）','AWS 管理控制台','AWS Marketplace','AWS Artifact'],
 'AWS CLI 让你通过命令控制 AWS 服务，这些命令可以写成脚本并按计划运行。'],
['The console is manual and cannot be scripted.','Marketplace sells software.','Artifact provides compliance reports.'],
['控制台需要手动操作，无法写成脚本。','Marketplace 销售软件。','Artifact 提供合规报告。']);

Q('3.1','single',[0],
['A new employee wants to explore AWS services visually and launch a single test instance. Which access method is MOST appropriate?',
 ['The AWS Management Console','AWS CloudFormation','The AWS SDK for Java','AWS CodePipeline'],
 'The console is a web-based interface well suited to learning, exploring and one-time tasks.'],
['一名新员工希望以可视化方式探索 AWS 服务，并启动一个测试实例。哪种访问方式最合适？',
 ['AWS 管理控制台','AWS CloudFormation','AWS SDK for Java','AWS CodePipeline'],
 '控制台是基于 Web 的界面，很适合学习、探索和一次性任务。'],
['CloudFormation is for repeatable infrastructure, which is overkill here.','An SDK requires writing code.','CodePipeline automates software releases.'],
['CloudFormation 用于可重复的基础设施，在这里大材小用。','SDK 需要编写代码。','CodePipeline 用于自动化软件发布。']);

Q('3.1','single',[0],
['A team wants to upload its Java web application code and have AWS automatically handle capacity provisioning, load balancing, scaling and health monitoring. Which service should it use?',
 ['AWS Elastic Beanstalk','Amazon EC2 with manual configuration','AWS CloudTrail','Amazon S3 Glacier'],
 'Elastic Beanstalk is a platform for deploying web applications: you provide the code and it manages the underlying infrastructure.'],
['某团队希望上传其 Java Web 应用代码，由 AWS 自动处理容量配置、负载均衡、伸缩和健康监控。应使用哪项服务？',
 ['AWS Elastic Beanstalk','手动配置的 Amazon EC2','AWS CloudTrail','Amazon S3 Glacier'],
 'Elastic Beanstalk 是用于部署 Web 应用的平台：你提供代码，它管理底层基础设施。'],
['Manual EC2 means managing everything yourself.','CloudTrail logs API calls.','Glacier is archive storage.'],
['手动配置 EC2 意味着一切都要自己管理。','CloudTrail 记录 API 调用。','Glacier 是归档存储。']);

Q('3.1','single',[0],
['A company keeps its main application in its own data centre but uses AWS for backups and a new analytics workload, connected by a private network link. Which deployment model is this?',
 ['Hybrid','Cloud-native (all-in cloud)','On-premises only','Software as a service'],
 'A hybrid deployment connects cloud resources with existing on-premises infrastructure.'],
['某公司把主要应用保留在自己的数据中心，但使用 AWS 进行备份和运行新的分析工作负载，两者通过私有网络链路连接。这是哪种部署模型？',
 ['混合','云原生（完全在云中）','仅本地部署','软件即服务'],
 '混合部署把云资源与现有的本地基础设施连接起来。'],
['Part of the workload is still on premises.','AWS is also used, so it is not on-premises only.','SaaS is a service model, not a deployment model.'],
['部分工作负载仍在本地。','同时使用了 AWS，因此不是仅本地部署。','SaaS 是服务模式，而不是部署模型。']);

Q('3.1','single',[0],
['A startup builds every part of its application on AWS from day one, using managed and serverless services. Which deployment model is this?',
 ['Cloud (cloud-native)','Hybrid','On-premises','Private cloud'],
 'In a cloud deployment, all parts of the application run in the cloud.'],
['一家初创公司从第一天起就在 AWS 上构建应用的所有部分，使用托管和无服务器服务。这是哪种部署模型？',
 ['云（云原生）','混合','本地部署','私有云'],
 '在云部署中，应用的所有部分都在云中运行。'],
['Hybrid connects on-premises and cloud.','Nothing runs on premises here.','A private cloud runs in the company’s own data centre.'],
['混合是把本地和云连接起来。','这里没有任何部分在本地运行。','私有云运行在公司自己的数据中心中。']);

Q('3.1','multi',[0,1],
['Which TWO are benefits of using infrastructure as code? (Select TWO.)',
 ['Environments can be recreated consistently and quickly','Changes can be reviewed and tracked in version control','It removes the need to pay for resources','It works only through the AWS Management Console','It prevents all application bugs'],
 'IaC makes infrastructure repeatable, consistent and auditable. You still pay for the resources it creates.'],
['使用基础设施即代码有哪两项益处？（选择两项。）',
 ['可以一致、快速地重建环境','可以在版本控制中审查和跟踪变更','无需为资源付费','只能通过 AWS 管理控制台使用','可以防止所有应用缺陷'],
 'IaC 让基础设施可重复、一致且可审计。你仍然要为它创建的资源付费。'],
['Resources created by IaC are still billed.','IaC is template-based, not console-only.','IaC does not fix application code bugs.'],
['IaC 创建的资源仍然要收费。','IaC 基于模板，而不是只能用控制台。','IaC 不能修复应用代码中的缺陷。']);

Q('3.1','single',[0],
['A company wants to run AWS services, such as Amazon EC2 and Amazon EBS, inside its own data centre for low-latency access to on-premises systems. Which offering should it use?',
 ['AWS Outposts','AWS Local Zones','Amazon CloudFront','AWS Direct Connect'],
 'AWS Outposts delivers AWS-managed infrastructure and services to your own facility.'],
['某公司希望在自己的数据中心内运行 Amazon EC2 和 Amazon EBS 等 AWS 服务，以便低延迟地访问本地系统。应使用哪种产品？',
 ['AWS Outposts','AWS 本地扩展区','Amazon CloudFront','AWS Direct Connect'],
 'AWS Outposts 把由 AWS 管理的基础设施和服务带到你自己的设施中。'],
['Local Zones are AWS-operated locations in cities, not in your data centre.','CloudFront caches content at edge locations.','Direct Connect is a network link, not compute in your facility.'],
['本地扩展区是 AWS 在城市中运营的站点，而不在你的数据中心里。','CloudFront 在边缘站点缓存内容。','Direct Connect 是网络连接，而不是你设施内的计算资源。']);

Q('3.1','single',[0],
['An administrator needs to run a quick AWS CLI command but does not want to install anything locally. Which option provides a browser-based shell with the CLI preinstalled?',
 ['AWS CloudShell','Installing the AWS CLI on a laptop','Amazon WorkSpaces Secure Browser','AWS Systems Manager Parameter Store'],
 'AWS CloudShell is a browser-based shell launched from the console, already authenticated with your console credentials and with the AWS CLI preinstalled.'],
['某管理员需要快速运行一条 AWS CLI 命令，但不想在本地安装任何东西。哪个选项提供预装了 CLI 的浏览器 Shell？',
 ['AWS CloudShell','在笔记本电脑上安装 AWS CLI','Amazon WorkSpaces Secure Browser','AWS Systems Manager Parameter Store'],
 'AWS CloudShell 是从控制台启动的浏览器 Shell，已使用你的控制台凭证完成身份验证，并预装了 AWS CLI。'],
['Installing something locally is exactly what they want to avoid.','Secure Browser gives access to internal websites, not an AWS shell.','Parameter Store stores configuration values.'],
['在本地安装东西正是他们想避免的。','Secure Browser 用于访问内部网站，而不是 AWS Shell。','Parameter Store 存储配置值。']);

Q('3.1','single',[0],
['A company wants to patch hundreds of EC2 instances and on-premises servers on a schedule and run commands on them without SSH. Which service should it use?',
 ['AWS Systems Manager','AWS CloudFormation','Amazon Inspector','AWS Config'],
 'Systems Manager provides Patch Manager, Run Command, Session Manager and inventory for managing servers at scale, in AWS and on premises.'],
['某公司希望按计划为数百台 EC2 实例和本地服务器打补丁，并在不使用 SSH 的情况下对它们运行命令。应使用哪项服务？',
 ['AWS Systems Manager','AWS CloudFormation','Amazon Inspector','AWS Config'],
 'Systems Manager 提供 Patch Manager、Run Command、Session Manager 和资产清单，用于大规模管理 AWS 和本地的服务器。'],
['CloudFormation provisions resources; it does not patch running servers.','Inspector finds vulnerabilities but does not apply patches.','Config records configurations.'],
['CloudFormation 用于配置资源，不会为运行中的服务器打补丁。','Inspector 发现漏洞，但不会应用补丁。','Config 记录配置。']);

Q('3.1','single',[0],
['A developer prefers to define infrastructure using familiar programming languages such as TypeScript or Python instead of YAML. Which tool fits?',
 ['AWS Cloud Development Kit (AWS CDK)','AWS Management Console','Amazon Lightsail','AWS Artifact'],
 'The AWS CDK lets you define cloud infrastructure in programming languages; it synthesizes AWS CloudFormation templates.'],
['某开发人员更喜欢用 TypeScript 或 Python 等熟悉的编程语言而不是 YAML 来定义基础设施。哪种工具合适？',
 ['AWS Cloud Development Kit（AWS CDK）','AWS 管理控制台','Amazon Lightsail','AWS Artifact'],
 'AWS CDK 让你使用编程语言定义云基础设施，它会合成 AWS CloudFormation 模板。'],
['The console is not code.','Lightsail is a simple compute service.','Artifact provides compliance reports.'],
['控制台不是代码。','Lightsail 是简单的计算服务。','Artifact 提供合规报告。']);

/* ================= 3.2 Global infrastructure ================= */
Q('3.2','single',[0],
['What is an AWS Availability Zone?',
 ['One or more discrete data centres with redundant power, networking and connectivity in an AWS Region','A geographic area containing several Regions','A content cache located in a city','A single physical server'],
 'Each Region contains multiple, isolated Availability Zones, which are physically separated but connected with low-latency links.'],
['什么是 AWS 可用区？',
 ['AWS 区域内一个或多个具有冗余电力、网络和连接的独立数据中心','包含多个区域的地理区域','位于某个城市的内容缓存','单台物理服务器'],
 '每个区域都包含多个相互隔离的可用区，它们在物理上分开，但通过低延迟链路相连。'],
['A Region contains AZs, not the other way around.','That describes an edge location.','An AZ contains many servers in one or more data centres.'],
['区域包含可用区，而不是反过来。','这描述的是边缘站点。','可用区在一个或多个数据中心内包含大量服务器。']);

Q('3.2','single',[0],
['How should a company design an application to remain available if one Availability Zone fails?',
 ['Deploy resources across at least two Availability Zones in the Region','Deploy larger instances in a single Availability Zone','Use a single EC2 instance with a large EBS volume','Deploy only in edge locations'],
 'Availability Zones do not share single points of failure, so spreading resources across multiple AZs keeps the application running if one fails.'],
['公司应如何设计应用，使其在一个可用区出故障时仍保持可用？',
 ['在该区域的至少两个可用区中部署资源','在单个可用区中部署更大的实例','使用一个带有大容量 EBS 卷的 EC2 实例','只在边缘站点部署'],
 '可用区之间不存在共同的单点故障，因此把资源分布在多个可用区中，即使其中一个出故障，应用也能继续运行。'],
['Larger instances in one AZ still fail with that AZ.','A single instance is a single point of failure.','Edge locations cache content; they do not run your application servers.'],
['单个可用区内的大型实例仍会随该可用区一起故障。','单个实例就是单点故障。','边缘站点缓存内容，不运行你的应用服务器。']);

Q('3.2','single',[0],
['A company must be able to keep operating even if an entire AWS Region becomes unavailable. What should it do?',
 ['Replicate its workload and data to a second AWS Region for disaster recovery','Deploy across more Availability Zones in the same Region','Use more edge locations','Buy Reserved Instances'],
 'Protecting against the loss of a whole Region requires a multi-Region disaster recovery strategy.'],
['某公司必须在整个 AWS 区域不可用时仍能继续运营。应该怎么做？',
 ['把工作负载和数据复制到第二个 AWS 区域，以实现灾难恢复','在同一区域中跨更多可用区部署','使用更多边缘站点','购买预留实例'],
 '要防范整个区域的失效，需要采用多区域灾难恢复策略。'],
['All AZs in one Region are affected by a Region-wide outage.','Edge locations do not run your full workload.','Reserved Instances are a pricing option.'],
['区域级故障会影响该区域的所有可用区。','边缘站点不会运行你的完整工作负载。','预留实例是一种定价选项。']);

Q('3.2','multi',[0,1],
['Which TWO factors should a company consider when choosing an AWS Region? (Select TWO.)',
 ['Compliance and data residency requirements','Proximity to customers for lower latency','The colour scheme of the AWS console','The number of IAM users in the account','The name of the company’s CEO'],
 'Key factors are compliance, proximity to users, available services and pricing.'],
['选择 AWS 区域时，公司应考虑哪两个因素？（选择两项。）',
 ['合规和数据驻留要求','靠近客户以降低延迟','AWS 控制台的配色方案','账户中 IAM 用户的数量','公司 CEO 的名字'],
 '关键因素包括合规、与用户的距离、可用的服务以及价格。'],
['The console appearance is irrelevant.','IAM is global and does not depend on the Region.','This is not a selection factor.'],
['控制台外观无关紧要。','IAM 是全球性的，与区域无关。','这不是选择因素。']);

Q('3.2','single',[0],
['What is the main purpose of AWS edge locations?',
 ['To cache content and serve DNS close to users for lower latency, through services such as Amazon CloudFront and Route 53','To run Amazon RDS databases','To store backups for disaster recovery','To host the AWS Management Console'],
 'Edge locations deliver content and DNS responses from locations close to end users.'],
['AWS 边缘站点的主要用途是什么？',
 ['通过 Amazon CloudFront 和 Route 53 等服务，在靠近用户的地方缓存内容和提供 DNS 解析，以降低延迟','运行 Amazon RDS 数据库','存储用于灾难恢复的备份','托管 AWS 管理控制台'],
 '边缘站点从靠近终端用户的位置分发内容和返回 DNS 响应。'],
['RDS runs in Regions and AZs.','Backups are stored in Regions.','The console is a global web service, not hosted in edge locations specifically.'],
['RDS 运行在区域和可用区中。','备份存储在区域中。','控制台是全球性的 Web 服务，并不专门托管在边缘站点。']);

Q('3.2','single',[0],
['Which statement about AWS Regions is correct?',
 ['Each Region is isolated from other Regions, and data is not replicated between Regions unless the customer configures it','All Regions share the same data automatically','A Region contains only one data centre','Every AWS service is available in every Region on the same day'],
 'Regions are independent for fault isolation and data sovereignty. Service availability varies by Region.'],
['关于 AWS 区域，哪种说法正确？',
 ['每个区域都与其他区域隔离，除非客户自行配置，否则数据不会在区域之间复制','所有区域自动共享相同的数据','一个区域只包含一个数据中心','每项 AWS 服务都会在同一天于所有区域上线'],
 '区域之间相互独立，以实现故障隔离和数据主权。各区域提供的服务有所不同。'],
['Data stays in its Region by default.','A Region has multiple AZs, each with one or more data centres.','Service availability differs by Region.'],
['默认情况下数据会留在所在区域。','一个区域有多个可用区，每个可用区有一个或多个数据中心。','各区域提供的服务不同。']);

Q('3.2','single',[0],
['A game company needs single-digit millisecond latency for players in a large city that is far from the nearest AWS Region. Which infrastructure option fits?',
 ['AWS Local Zones','A second Availability Zone in the distant Region','AWS Artifact','Amazon S3 Glacier'],
 'Local Zones place compute, storage and other services closer to large population centres for very low latency.'],
['某游戏公司需要为一座远离最近 AWS 区域的大城市中的玩家提供个位数毫秒级的延迟。哪种基础设施选项合适？',
 ['AWS 本地扩展区','在遥远区域中再使用一个可用区','AWS Artifact','Amazon S3 Glacier'],
 '本地扩展区把计算、存储和其他服务部署在更靠近大型人口中心的地方，以实现极低的延迟。'],
['Another AZ in a distant Region is still far away.','Artifact provides compliance reports.','Glacier is archive storage.'],
['遥远区域中的另一个可用区依然很远。','Artifact 提供合规报告。','Glacier 是归档存储。']);

Q('3.2','single',[0],
['A mobile app needs ultra-low latency for users on 5G networks. Which AWS infrastructure is designed for this?',
 ['AWS Wavelength Zones','AWS Outposts','AWS Direct Connect','Amazon Lightsail'],
 'Wavelength embeds AWS compute and storage inside telecommunications providers’ 5G networks.'],
['某移动应用需要为 5G 网络上的用户提供超低延迟。哪种 AWS 基础设施专为此设计？',
 ['AWS Wavelength 区域','AWS Outposts','AWS Direct Connect','Amazon Lightsail'],
 'Wavelength 把 AWS 计算和存储资源嵌入到电信运营商的 5G 网络中。'],
['Outposts runs in your own data centre.','Direct Connect is a private network link.','Lightsail is simple compute in Regions.'],
['Outposts 运行在你自己的数据中心中。','Direct Connect 是私有网络连接。','Lightsail 是区域中的简单计算服务。']);

Q('3.2','single',[0],
['How are Availability Zones in a Region connected to each other?',
 ['Through high-bandwidth, low-latency, redundant private networking','Only over the public internet','They are not connected','Through satellite links only'],
 'AZs are linked by fully redundant, dedicated metro fibre, which enables synchronous replication between them.'],
['一个区域内的可用区之间是如何连接的？',
 ['通过高带宽、低延迟、冗余的私有网络','只通过公共互联网','它们之间没有连接','只通过卫星链路'],
 '可用区之间通过完全冗余的专用城域光纤相连，因此可以在它们之间进行同步复制。'],
['AZs use private AWS networking, not the public internet.','They are connected, which is what enables Multi-AZ designs.','They use fibre, not satellites.'],
['可用区使用 AWS 私有网络，而不是公共互联网。','它们是相连的，这正是多可用区设计得以实现的原因。','它们使用光纤，而不是卫星。']);

Q('3.2','multi',[0,1],
['Which TWO are reasons to deploy an application in multiple AWS Regions? (Select TWO.)',
 ['To serve users on different continents with lower latency','To meet disaster recovery requirements if a Region fails','To get the AWS Free Tier more than once','To avoid using Availability Zones','To bypass IAM permissions'],
 'Multiple Regions help with latency for global users, disaster recovery and business continuity, and data sovereignty.'],
['在多个 AWS 区域中部署应用有哪两个原因？（选择两项。）',
 ['以更低的延迟为不同大洲的用户提供服务','满足区域失效时的灾难恢复要求','多次获得 AWS 免费套餐','避免使用可用区','绕过 IAM 权限'],
 '多区域部署有助于降低全球用户的延迟、实现灾难恢复和业务连续性，并满足数据主权要求。'],
['The Free Tier is per account, not per Region.','Multi-Region designs still use AZs within each Region.','IAM applies everywhere.'],
['免费套餐按账户计算，而不是按区域。','多区域设计在每个区域内仍然使用可用区。','IAM 在所有地方都适用。']);

Q('3.2','single',[0],
['A company stores data in Amazon S3 Standard. How does S3 protect against the loss of a single Availability Zone?',
 ['It stores data redundantly across at least three Availability Zones in the Region','It copies data to every Region automatically','It stores data only in edge locations','It does not protect against AZ loss'],
 'S3 Standard stores objects across a minimum of three AZs, which is part of how it achieves 11 nines of durability.'],
['某公司把数据存储在 Amazon S3 Standard 中。S3 如何防范单个可用区的损失？',
 ['在该区域的至少三个可用区中冗余存储数据','自动把数据复制到每个区域','只把数据存储在边缘站点','它无法防范可用区损失'],
 'S3 Standard 把对象存储在至少三个可用区中，这是它实现 11 个 9 持久性的方式之一。'],
['Cross-Region copying requires replication that you configure.','Edge locations cache, they do not durably store S3 data.','S3 Standard is designed to survive the loss of an AZ.'],
['跨区域复制需要你自行配置。','边缘站点只做缓存，不会持久存储 S3 数据。','S3 Standard 的设计可以承受一个可用区的损失。']);

Q('3.2','single',[0],
['Why might a company choose one AWS Region over another for the same workload, even when both meet its compliance needs?',
 ['Prices and available services can differ between Regions','Every Region has identical prices and services','Regions differ only by name','Some Regions do not support IAM'],
 'Pricing and service availability vary by Region, so they are factors after compliance and latency.'],
['即使两个区域都满足合规需求，公司为什么仍可能为同一工作负载选择其中一个区域？',
 ['不同区域的价格和可用服务可能不同','每个区域的价格和服务都完全相同','区域之间只有名称不同','某些区域不支持 IAM'],
 '不同区域的价格和服务可用性各不相同，因此在合规和延迟之后，它们也是考虑因素。'],
['Prices and services vary.','They differ in location, price and services.','IAM is a global service.'],
['价格和服务各不相同。','它们在位置、价格和服务上都有差异。','IAM 是全球性服务。']);

Q('3.2','single',[0],
['Which service uses the AWS global network and edge locations to route user traffic to the optimal application endpoint, using static IP addresses?',
 ['AWS Global Accelerator','Amazon S3','Amazon RDS','AWS Batch'],
 'Global Accelerator provides static anycast IPs and routes traffic over the AWS backbone to healthy endpoints in one or more Regions.'],
['哪项服务利用 AWS 全球网络和边缘站点，使用静态 IP 地址把用户流量路由到最佳的应用端点？',
 ['AWS Global Accelerator','Amazon S3','Amazon RDS','AWS Batch'],
 'Global Accelerator 提供静态任播 IP，并通过 AWS 骨干网把流量路由到一个或多个区域中的健康端点。'],
['S3 is object storage.','RDS is a relational database.','Batch runs batch jobs.'],
['S3 是对象存储。','RDS 是关系数据库。','Batch 运行批处理作业。']);

Q('3.2','single',[0],
['A company uses Amazon RDS Multi-AZ. What happens if the primary database’s Availability Zone has an outage?',
 ['RDS automatically fails over to the standby in another Availability Zone','The database is lost','The company must restore from a backup manually in all cases','Traffic is routed to an edge location'],
 'Multi-AZ keeps a synchronous standby in a different AZ and fails over automatically, supporting high availability.'],
['某公司使用 Amazon RDS 多可用区部署。如果主数据库所在的可用区发生故障，会怎样？',
 ['RDS 会自动故障转移到另一个可用区中的备用实例','数据库会丢失','在任何情况下公司都必须手动从备份恢复','流量会被路由到边缘站点'],
 '多可用区部署在另一个可用区中保留一个同步的备用实例，并自动进行故障转移，从而实现高可用性。'],
['The standby keeps the data.','Failover is automatic with Multi-AZ.','Edge locations do not host databases.'],
['备用实例保留了数据。','多可用区部署会自动进行故障转移。','边缘站点不托管数据库。']);

/* ================= 3.3 Compute ================= */
Q('3.3','single',[0],
['A company runs a scientific simulation that needs high-performance processors. Which EC2 instance family should it choose?',
 ['Compute optimized','Memory optimized','Storage optimized','General purpose'],
 'Compute optimized instances (such as the C family) suit compute-bound workloads: batch processing, scientific modelling, gaming servers and high-performance web servers.'],
['某公司运行一项需要高性能处理器的科学模拟。应选择哪个 EC2 实例系列？',
 ['计算优化型','内存优化型','存储优化型','通用型'],
 '计算优化型实例（例如 C 系列）适合计算密集型工作负载：批处理、科学建模、游戏服务器和高性能 Web 服务器。'],
['Memory optimized suits large in-memory datasets.','Storage optimized suits high local disk I/O.','General purpose balances resources and is not the best for compute-heavy work.'],
['内存优化型适合大型内存数据集。','存储优化型适合高本地磁盘 I/O。','通用型资源均衡，并不是计算密集型工作的最佳选择。']);

Q('3.3','single',[0],
['A company runs an in-memory database that processes large datasets in real time. Which EC2 instance family is the BEST fit?',
 ['Memory optimized','Compute optimized','Accelerated computing','Storage optimized'],
 'Memory optimized instances (such as R and X families) deliver fast performance for workloads that process large datasets in memory.'],
['某公司运行一个实时处理大型数据集的内存数据库。哪个 EC2 实例系列最合适？',
 ['内存优化型','计算优化型','加速计算型','存储优化型'],
 '内存优化型实例（例如 R 和 X 系列）为在内存中处理大型数据集的工作负载提供高速性能。'],
['Compute optimized prioritizes CPU, not memory.','Accelerated computing uses GPUs or other accelerators.','Storage optimized prioritizes local disk throughput.'],
['计算优化型优先考虑 CPU，而不是内存。','加速计算型使用 GPU 或其他加速器。','存储优化型优先考虑本地磁盘吞吐量。']);

Q('3.3','single',[0],
['A data warehousing application needs very high, sequential read and write access to large datasets on local storage. Which EC2 instance family should be used?',
 ['Storage optimized','Memory optimized','General purpose','Compute optimized'],
 'Storage optimized instances (such as I and D families) are designed for high IOPS and throughput on local storage.'],
['某数据仓库应用需要对本地存储上的大型数据集进行极高速的顺序读写。应使用哪个 EC2 实例系列？',
 ['存储优化型','内存优化型','通用型','计算优化型'],
 '存储优化型实例（例如 I 和 D 系列）专为本地存储上的高 IOPS 和高吞吐量而设计。'],
['Memory optimized prioritizes RAM.','General purpose balances resources.','Compute optimized prioritizes CPU.'],
['内存优化型优先考虑内存。','通用型资源均衡。','计算优化型优先考虑 CPU。']);

Q('3.3','single',[0],
['A company wants to run code in response to images being uploaded to an S3 bucket, without provisioning or managing servers, and pay only when the code runs. Which service should it use?',
 ['AWS Lambda','Amazon EC2','Amazon Lightsail','AWS Outposts'],
 'Lambda runs code in response to events, scales automatically and bills per request and compute duration.'],
['某公司希望在图片上传到 S3 存储桶时运行代码，无需配置或管理服务器，并且只在代码运行时付费。应使用哪项服务？',
 ['AWS Lambda','Amazon EC2','Amazon Lightsail','AWS Outposts'],
 'Lambda 响应事件运行代码，自动伸缩，并按请求次数和计算时长计费。'],
['EC2 requires managing instances and is billed while running.','Lightsail provides servers you manage.','Outposts runs AWS infrastructure on premises.'],
['EC2 需要管理实例，且运行期间一直计费。','Lightsail 提供需要你自己管理的服务器。','Outposts 在本地运行 AWS 基础设施。']);

Q('3.3','single',[0],
['A company wants to run Docker containers on AWS without managing EC2 instances or clusters of servers. Which option should it choose?',
 ['AWS Fargate','Amazon EC2 with Docker installed manually','Amazon Lightsail databases','AWS Elastic Disaster Recovery'],
 'Fargate is a serverless compute engine for containers that works with Amazon ECS and Amazon EKS.'],
['某公司希望在 AWS 上运行 Docker 容器，而无需管理 EC2 实例或服务器集群。应选择哪个选项？',
 ['AWS Fargate','手动安装了 Docker 的 Amazon EC2','Amazon Lightsail 数据库','AWS Elastic Disaster Recovery'],
 'Fargate 是面向容器的无服务器计算引擎，可与 Amazon ECS 和 Amazon EKS 配合使用。'],
['That means managing EC2 instances yourself.','Lightsail databases are not a container service.','Elastic Disaster Recovery is for recovery, not running containers.'],
['这意味着需要自己管理 EC2 实例。','Lightsail 数据库不是容器服务。','Elastic Disaster Recovery 用于灾难恢复，而不是运行容器。']);

Q('3.3','single',[0],
['A company already uses Kubernetes on premises and wants a managed Kubernetes service on AWS. Which service should it use?',
 ['Amazon Elastic Kubernetes Service (Amazon EKS)','Amazon Elastic Container Service (Amazon ECS)','AWS Lambda','AWS Batch'],
 'Amazon EKS is a managed Kubernetes service, so existing Kubernetes tools and skills carry over.'],
['某公司已在本地使用 Kubernetes，希望在 AWS 上使用托管的 Kubernetes 服务。应使用哪项服务？',
 ['Amazon Elastic Kubernetes Service（Amazon EKS）','Amazon Elastic Container Service（Amazon ECS）','AWS Lambda','AWS Batch'],
 'Amazon EKS 是托管的 Kubernetes 服务，因此现有的 Kubernetes 工具和技能都可以沿用。'],
['ECS is AWS’s own orchestrator, not Kubernetes.','Lambda runs functions, not Kubernetes clusters.','Batch runs batch jobs.'],
['ECS 是 AWS 自己的编排服务，而不是 Kubernetes。','Lambda 运行函数，而不是 Kubernetes 集群。','Batch 运行批处理作业。']);

Q('3.3','single',[0],
['Which service is AWS’s own fully managed container orchestration service for running and scaling containerized applications?',
 ['Amazon Elastic Container Service (Amazon ECS)','Amazon Elastic Container Registry (Amazon ECR)','Amazon EKS Anywhere','AWS Elastic Beanstalk'],
 'Amazon ECS orchestrates containers on EC2 or Fargate. ECR stores container images.'],
['哪项服务是 AWS 自己的完全托管容器编排服务，用于运行和伸缩容器化应用？',
 ['Amazon Elastic Container Service（Amazon ECS）','Amazon Elastic Container Registry（Amazon ECR）','Amazon EKS Anywhere','AWS Elastic Beanstalk'],
 'Amazon ECS 在 EC2 或 Fargate 上编排容器。ECR 用于存储容器镜像。'],
['ECR stores images; it does not run containers.','EKS Anywhere runs Kubernetes on your own infrastructure.','Elastic Beanstalk deploys web applications.'],
['ECR 存储镜像，不运行容器。','EKS Anywhere 在你自己的基础设施上运行 Kubernetes。','Elastic Beanstalk 用于部署 Web 应用。']);

Q('3.3','single',[0],
['What is the main purpose of Elastic Load Balancing?',
 ['To distribute incoming traffic across multiple targets, such as EC2 instances in multiple Availability Zones, and route only to healthy targets','To add or remove EC2 instances based on demand','To store container images','To cache content at edge locations'],
 'A load balancer spreads traffic and performs health checks. Auto scaling changes the number of instances.'],
['Elastic Load Balancing 的主要用途是什么？',
 ['把传入流量分配到多个目标（例如多个可用区中的 EC2 实例），并只路由到健康的目标','根据需求增加或移除 EC2 实例','存储容器镜像','在边缘站点缓存内容'],
 '负载均衡器负责分配流量并执行健康检查。弹性伸缩负责改变实例数量。'],
['Adding and removing instances is auto scaling.','Container images are stored in ECR.','Edge caching is CloudFront.'],
['增加和移除实例是弹性伸缩的功能。','容器镜像存储在 ECR 中。','边缘缓存是 CloudFront 的功能。']);

Q('3.3','single',[0],
['Which service automatically adds EC2 instances when demand increases and removes them when demand decreases?',
 ['Amazon EC2 Auto Scaling','Elastic Load Balancing','Amazon CloudFront','AWS Trusted Advisor'],
 'EC2 Auto Scaling maintains the right number of instances, which provides elasticity and cost efficiency.'],
['哪项服务在需求增加时自动添加 EC2 实例，在需求减少时自动移除？',
 ['Amazon EC2 Auto Scaling','Elastic Load Balancing','Amazon CloudFront','AWS Trusted Advisor'],
 'EC2 Auto Scaling 保持合适的实例数量，从而提供弹性和成本效率。'],
['Load balancing distributes traffic but does not change capacity.','CloudFront caches content.','Trusted Advisor gives recommendations.'],
['负载均衡分配流量，但不会改变容量。','CloudFront 缓存内容。','Trusted Advisor 提供建议。']);

Q('3.3','multi',[0,1],
['A company wants its web application to handle sudden traffic spikes and stay available if an instance fails. Which TWO services should it combine? (Select TWO.)',
 ['Amazon EC2 Auto Scaling','Elastic Load Balancing','AWS Artifact','Amazon Macie','AWS Budgets'],
 'Auto scaling adjusts capacity to demand; the load balancer spreads traffic and routes around unhealthy instances.'],
['某公司希望其 Web 应用能应对突发流量高峰，并在某个实例出故障时保持可用。应组合使用哪两项服务？（选择两项。）',
 ['Amazon EC2 Auto Scaling','Elastic Load Balancing','AWS Artifact','Amazon Macie','AWS Budgets'],
 '弹性伸缩根据需求调整容量；负载均衡器分配流量并绕开不健康的实例。'],
['Artifact provides compliance reports.','Macie finds sensitive data.','Budgets tracks spending.'],
['Artifact 提供合规报告。','Macie 查找敏感数据。','Budgets 跟踪支出。']);

Q('3.3','single',[0],
['A small business wants a simple virtual server with a predictable monthly price to host a WordPress website. Which service is the EASIEST choice?',
 ['Amazon Lightsail','Amazon EKS','AWS Batch','AWS Outposts'],
 'Lightsail offers easy-to-use virtual private servers, storage and networking for a low, predictable monthly price.'],
['某小企业希望用一个简单的、月费可预测的虚拟服务器来托管 WordPress 网站。最简单的选择是哪项服务？',
 ['Amazon Lightsail','Amazon EKS','AWS Batch','AWS Outposts'],
 'Lightsail 以较低且可预测的月费提供易于使用的虚拟专用服务器、存储和网络。'],
['EKS is managed Kubernetes, which is too complex for this.','Batch runs batch jobs.','Outposts runs AWS on premises.'],
['EKS 是托管的 Kubernetes，对此来说太复杂。','Batch 运行批处理作业。','Outposts 在本地运行 AWS。']);

Q('3.3','single',[0],
['A research team needs to run thousands of batch computing jobs, with AWS provisioning the right amount of compute automatically. Which service should it use?',
 ['AWS Batch','Amazon Lightsail','Amazon Route 53','AWS Amplify'],
 'AWS Batch plans, schedules and runs batch computing workloads, provisioning compute resources based on job requirements.'],
['某研究团队需要运行数千个批量计算作业，并由 AWS 自动配置适量的计算资源。应使用哪项服务？',
 ['AWS Batch','Amazon Lightsail','Amazon Route 53','AWS Amplify'],
 'AWS Batch 规划、调度和运行批量计算工作负载，并根据作业需求配置计算资源。'],
['Lightsail is for simple servers.','Route 53 is DNS.','Amplify builds web and mobile apps.'],
['Lightsail 用于简单的服务器。','Route 53 是 DNS 服务。','Amplify 用于构建 Web 和移动应用。']);

Q('3.3','single',[0],
['Which EC2 instance family is designed for machine learning training and graphics workloads that need GPUs?',
 ['Accelerated computing','Storage optimized','Memory optimized','General purpose'],
 'Accelerated computing instances (such as P, G, Inf and Trn families) use hardware accelerators such as GPUs and AWS Trainium or Inferentia chips.'],
['哪个 EC2 实例系列专为需要 GPU 的机器学习训练和图形工作负载而设计？',
 ['加速计算型','存储优化型','内存优化型','通用型'],
 '加速计算型实例（例如 P、G、Inf 和 Trn 系列）使用 GPU 以及 AWS Trainium 或 Inferentia 芯片等硬件加速器。'],
['Storage optimized focuses on disk throughput.','Memory optimized focuses on RAM.','General purpose has no specialized accelerators.'],
['存储优化型侧重于磁盘吞吐量。','内存优化型侧重于内存。','通用型没有专门的加速器。']);

Q('3.3','single',[0],
['A company has a web application with balanced CPU and memory needs and moderate traffic. Which EC2 instance family is a good starting point?',
 ['General purpose','Storage optimized','Accelerated computing','Memory optimized'],
 'General purpose instances (such as M and T families) balance compute, memory and networking for many common workloads.'],
['某公司有一个 Web 应用，对 CPU 和内存的需求均衡，流量中等。哪个 EC2 实例系列是很好的起点？',
 ['通用型','存储优化型','加速计算型','内存优化型'],
 '通用型实例（例如 M 和 T 系列）在计算、内存和网络之间取得平衡，适合许多常见的工作负载。'],
['Storage optimized is for heavy local disk I/O.','Accelerated computing is for GPU workloads.','Memory optimized is for memory-heavy workloads.'],
['存储优化型适用于大量本地磁盘 I/O。','加速计算型适用于 GPU 工作负载。','内存优化型适用于内存密集型工作负载。']);

/* ================= 3.4 Databases ================= */
Q('3.4','single',[0],
['A company wants a managed relational database for its PostgreSQL application, with automated backups, patching and Multi-AZ high availability. Which service should it use?',
 ['Amazon RDS','Amazon DynamoDB','Amazon ElastiCache','Amazon Neptune'],
 'Amazon RDS is a managed relational database service supporting engines such as PostgreSQL, MySQL, MariaDB, Oracle, SQL Server and Db2.'],
['某公司希望为其 PostgreSQL 应用使用托管关系数据库，具备自动备份、补丁和多可用区高可用性。应使用哪项服务？',
 ['Amazon RDS','Amazon DynamoDB','Amazon ElastiCache','Amazon Neptune'],
 'Amazon RDS 是托管的关系数据库服务，支持 PostgreSQL、MySQL、MariaDB、Oracle、SQL Server 和 Db2 等引擎。'],
['DynamoDB is a NoSQL key-value database.','ElastiCache is an in-memory cache.','Neptune is a graph database.'],
['DynamoDB 是 NoSQL 键值数据库。','ElastiCache 是内存缓存。','Neptune 是图数据库。']);

Q('3.4','single',[0],
['A gaming company needs a serverless database that delivers single-digit millisecond performance at any scale for player profiles stored as key-value data. Which service should it use?',
 ['Amazon DynamoDB','Amazon RDS for MySQL','Amazon Redshift','Amazon Aurora'],
 'DynamoDB is a serverless NoSQL key-value and document database with consistent single-digit millisecond performance.'],
['某游戏公司需要一个无服务器数据库，在任何规模下都能为以键值形式存储的玩家资料提供个位数毫秒级的性能。应使用哪项服务？',
 ['Amazon DynamoDB','Amazon RDS for MySQL','Amazon Redshift','Amazon Aurora'],
 'DynamoDB 是无服务器的 NoSQL 键值和文档数据库，能提供稳定的个位数毫秒级性能。'],
['RDS for MySQL is relational and instance-based.','Redshift is a data warehouse for analytics.','Aurora is relational, not a key-value store.'],
['RDS for MySQL 是关系型的，且基于实例。','Redshift 是用于分析的数据仓库。','Aurora 是关系型数据库，而不是键值存储。']);

Q('3.4','single',[0],
['A company wants to reduce the load on its database by caching frequently read query results in memory with microsecond latency. Which service should it use?',
 ['Amazon ElastiCache','Amazon S3 Glacier','Amazon Redshift','AWS Backup'],
 'ElastiCache (Valkey, Redis OSS or Memcached) is an in-memory cache that speeds up applications and reduces database load.'],
['某公司希望把频繁读取的查询结果缓存在内存中，以微秒级延迟减轻数据库负载。应使用哪项服务？',
 ['Amazon ElastiCache','Amazon S3 Glacier','Amazon Redshift','AWS Backup'],
 'ElastiCache（Valkey、Redis OSS 或 Memcached）是一种内存缓存，可以加快应用速度并减轻数据库负载。'],
['Glacier is archive storage.','Redshift is a data warehouse.','Backup manages backups.'],
['Glacier 是归档存储。','Redshift 是数据仓库。','Backup 管理备份。']);

Q('3.4','single',[0],
['Which AWS database is MySQL- and PostgreSQL-compatible, built by AWS for higher performance, with storage replicated six ways across three Availability Zones?',
 ['Amazon Aurora','Amazon DynamoDB','Amazon DocumentDB','Amazon Neptune'],
 'Aurora is a cloud-native relational database compatible with MySQL and PostgreSQL, offering high performance and availability.'],
['哪种 AWS 数据库兼容 MySQL 和 PostgreSQL，由 AWS 为更高性能而构建，存储在三个可用区之间复制六份？',
 ['Amazon Aurora','Amazon DynamoDB','Amazon DocumentDB','Amazon Neptune'],
 'Aurora 是兼容 MySQL 和 PostgreSQL 的云原生关系数据库，提供高性能和高可用性。'],
['DynamoDB is NoSQL.','DocumentDB is MongoDB-compatible.','Neptune is a graph database.'],
['DynamoDB 是 NoSQL 数据库。','DocumentDB 兼容 MongoDB。','Neptune 是图数据库。']);

Q('3.4','single',[0],
['A company wants to migrate its Oracle database to Amazon Aurora PostgreSQL. Which tool converts the database schema and code to the new engine?',
 ['AWS Schema Conversion Tool (AWS SCT)','AWS Snowball Edge','Amazon Athena','AWS Glue DataBrew'],
 'AWS SCT (and DMS Schema Conversion) converts the schema and code objects for heterogeneous migrations; AWS DMS then moves the data.'],
['某公司希望把 Oracle 数据库迁移到 Amazon Aurora PostgreSQL。哪个工具可以把数据库架构和代码转换为新引擎的格式？',
 ['AWS Schema Conversion Tool（AWS SCT）','AWS Snowball Edge','Amazon Athena','AWS Glue DataBrew'],
 'AWS SCT（以及 DMS Schema Conversion）为异构迁移转换架构和代码对象；之后再由 AWS DMS 迁移数据。'],
['Snowball Edge moves data physically; it does not convert schemas.','Athena queries data in S3.','DataBrew cleans and prepares data for analytics.'],
['Snowball Edge 以物理方式迁移数据，不转换架构。','Athena 查询 S3 中的数据。','DataBrew 为分析清洗和准备数据。']);

Q('3.4','single',[0],
['When should a company run its database on Amazon EC2 instead of using a managed database service?',
 ['When it needs full control of the operating system or a database engine or version that managed services do not support','When it wants AWS to handle patching and backups','When it wants the least operational effort','When it needs automatic Multi-AZ failover with no setup'],
 'Self-managing on EC2 gives full control but also full responsibility. Managed services reduce operational work.'],
['公司什么时候应在 Amazon EC2 上运行数据库，而不是使用托管数据库服务？',
 ['当需要完全控制操作系统，或需要托管服务不支持的数据库引擎或版本时','当希望由 AWS 处理补丁和备份时','当希望运维工作量最少时','当需要无需设置的自动多可用区故障转移时'],
 '在 EC2 上自行管理可以获得完全控制权，但也要承担全部责任。托管服务可以减少运维工作。'],
['Patching and backups by AWS is what managed services provide.','Managed services require less effort.','Managed RDS provides Multi-AZ failover easily.'],
['由 AWS 处理补丁和备份正是托管服务提供的。','托管服务需要的工作量更少。','托管的 RDS 可以轻松实现多可用区故障转移。']);

Q('3.4','single',[0],
['A social network wants to store and query highly connected data, such as friends of friends. Which database service is designed for this?',
 ['Amazon Neptune','Amazon RDS','Amazon ElastiCache','Amazon S3'],
 'Neptune is a managed graph database optimized for relationships, such as social networks, recommendation engines and fraud detection.'],
['某社交网络希望存储和查询高度关联的数据，例如“朋友的朋友”。哪种数据库服务专为此设计？',
 ['Amazon Neptune','Amazon RDS','Amazon ElastiCache','Amazon S3'],
 'Neptune 是针对关系进行优化的托管图数据库，适用于社交网络、推荐引擎和欺诈检测等场景。'],
['RDS is relational and less efficient for deep relationship queries.','ElastiCache is a cache.','S3 is object storage.'],
['RDS 是关系数据库，处理深层关系查询的效率较低。','ElastiCache 是缓存。','S3 是对象存储。']);

Q('3.4','single',[0],
['A company runs MongoDB workloads and wants a managed, compatible document database on AWS. Which service should it use?',
 ['Amazon DocumentDB (with MongoDB compatibility)','Amazon Neptune','Amazon Redshift','Amazon RDS for SQL Server'],
 'Amazon DocumentDB is a managed JSON document database that is compatible with MongoDB APIs.'],
['某公司运行 MongoDB 工作负载，希望在 AWS 上使用兼容的托管文档数据库。应使用哪项服务？',
 ['Amazon DocumentDB（兼容 MongoDB）','Amazon Neptune','Amazon Redshift','Amazon RDS for SQL Server'],
 'Amazon DocumentDB 是兼容 MongoDB API 的托管 JSON 文档数据库。'],
['Neptune is a graph database.','Redshift is a data warehouse.','SQL Server is a relational engine.'],
['Neptune 是图数据库。','Redshift 是数据仓库。','SQL Server 是关系引擎。']);

Q('3.4','multi',[0,1],
['Which TWO are relational database services on AWS? (Select TWO.)',
 ['Amazon RDS','Amazon Aurora','Amazon DynamoDB','Amazon ElastiCache','Amazon Neptune'],
 'RDS and Aurora are relational. DynamoDB is NoSQL, ElastiCache is in-memory and Neptune is a graph database.'],
['以下哪两项是 AWS 上的关系数据库服务？（选择两项。）',
 ['Amazon RDS','Amazon Aurora','Amazon DynamoDB','Amazon ElastiCache','Amazon Neptune'],
 'RDS 和 Aurora 是关系数据库。DynamoDB 是 NoSQL 数据库，ElastiCache 是内存数据库，Neptune 是图数据库。'],
['DynamoDB is a NoSQL key-value database.','ElastiCache is an in-memory data store.','Neptune is a graph database.'],
['DynamoDB 是 NoSQL 键值数据库。','ElastiCache 是内存数据存储。','Neptune 是图数据库。']);

Q('3.4','single',[0],
['A company wants to migrate its on-premises MySQL database to Amazon RDS for MySQL with minimal downtime while the source keeps running. Which service should it use?',
 ['AWS Database Migration Service (AWS DMS)','AWS Schema Conversion Tool only','AWS DataSync','Amazon Kinesis'],
 'For a homogeneous migration (same engine), DMS alone can migrate data and replicate ongoing changes with minimal downtime.'],
['某公司希望把本地 MySQL 数据库迁移到 Amazon RDS for MySQL，在源数据库持续运行的同时将停机时间降到最低。应使用哪项服务？',
 ['AWS Database Migration Service（AWS DMS）','仅使用 AWS Schema Conversion Tool','AWS DataSync','Amazon Kinesis'],
 '对于同构迁移（相同引擎），只用 DMS 就能迁移数据并复制持续发生的变更，将停机时间降到最低。'],
['SCT converts schemas between different engines; the engine is the same here.','DataSync moves files, not live database changes.','Kinesis processes streaming data.'],
['SCT 用于在不同引擎之间转换架构；这里引擎相同。','DataSync 迁移文件，而不是实时的数据库变更。','Kinesis 处理流数据。']);

Q('3.4','single',[0],
['How can Amazon RDS improve read performance for a read-heavy application?',
 ['Create read replicas to offload read queries','Enable Multi-AZ, which serves reads from the standby in all cases','Move the database to Amazon S3 Glacier','Turn off automated backups'],
 'Read replicas handle read traffic. Multi-AZ is mainly for high availability (the standby in classic Multi-AZ does not serve reads).'],
['对于读取密集型的应用，Amazon RDS 如何提高读取性能？',
 ['创建只读副本来分担读取查询','启用多可用区部署，在任何情况下都由备用实例提供读取服务','把数据库迁移到 Amazon S3 Glacier','关闭自动备份'],
 '只读副本处理读取流量。多可用区部署主要用于高可用性（传统多可用区部署中的备用实例不提供读取服务）。'],
['Classic Multi-AZ standbys are for failover, not reads.','Glacier is archive storage.','Turning off backups risks data loss and does not improve reads.'],
['传统多可用区部署中的备用实例用于故障转移，而不是读取。','Glacier 是归档存储。','关闭备份会带来数据丢失风险，也不能提高读取性能。']);

Q('3.4','single',[0],
['Which statement BEST describes the difference between relational and NoSQL databases?',
 ['Relational databases use tables with a fixed schema and SQL joins; NoSQL databases use flexible schemas and scale horizontally for specific access patterns','NoSQL databases cannot store any data','Relational databases cannot be managed by AWS','They are identical except for price'],
 'Relational databases suit structured data and complex queries; NoSQL databases (such as DynamoDB) suit massive scale and flexible data models.'],
['哪种说法最能描述关系数据库与 NoSQL 数据库的区别？',
 ['关系数据库使用具有固定架构的表和 SQL 连接；NoSQL 数据库使用灵活的架构，并针对特定访问模式进行横向扩展','NoSQL 数据库无法存储任何数据','关系数据库无法由 AWS 托管','两者除了价格之外完全相同'],
 '关系数据库适合结构化数据和复杂查询；NoSQL 数据库（例如 DynamoDB）适合超大规模和灵活的数据模型。'],
['NoSQL databases store data in different models.','Amazon RDS and Aurora are managed relational databases.','They differ in data model, schema and scaling.'],
['NoSQL 数据库以不同的模型存储数据。','Amazon RDS 和 Aurora 都是托管的关系数据库。','它们在数据模型、架构和扩展方式上都不同。']);
})();
