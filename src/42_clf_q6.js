/* CLF-C02 questions, set 2 (part 2: domain 3). Original questions that widen service coverage. Append-only. */
(function(){
function Q(k, t, a, en, zh, wEn, wZh){
  var q = {k: k, d: 'd' + k.charAt(0), t: t, a: a, en: {q: en[0], o: en[1], x: en[2]}, zh: {q: zh[0], o: zh[1], x: zh[2]}};
  var pad = a.map(function(){ return ''; }); q.w = {en: pad.concat(wEn), zh: pad.concat(wZh)};
  CLF.qs.push(q);
}

/* ---------- 3.1 deploy and operate ---------- */
Q('3.1','single',[0],
['A company wants to set up a new multi-account AWS environment quickly, with a landing zone, centralized logging and preventive guardrails applied to every new account. Which service should it use?',
 ['AWS Control Tower','AWS Service Catalog','Amazon Lightsail','AWS Batch'],
 'Control Tower automates a well-architected multi-account setup (landing zone) and applies controls (guardrails) across accounts.'],
['某公司希望快速搭建新的多账户 AWS 环境，包括着陆区、集中日志记录，以及应用到每个新账户的预防性防护措施。应使用哪项服务？',
 ['AWS Control Tower','AWS Service Catalog','Amazon Lightsail','AWS Batch'],
 'Control Tower 自动搭建架构良好的多账户环境（着陆区），并在各账户中应用控制措施（防护措施）。'],
['Service Catalog offers approved products, not a landing zone.','Lightsail provides simple servers.','Batch runs batch jobs.'],
['Service Catalog 提供经批准的产品，而不是着陆区。','Lightsail 提供简单的服务器。','Batch 运行批处理作业。']);

Q('3.1','single',[0],
['A central IT team wants developers to launch only approved, pre-configured environments (such as a standard web stack) from a self-service portal. Which service should it use?',
 ['AWS Service Catalog','AWS Control Tower','AWS Artifact','Amazon Inspector'],
 'Service Catalog lets administrators publish approved products (built on CloudFormation templates) that users can launch with governance.'],
['某中央 IT 团队希望开发人员只能从自助门户启动经批准、预先配置好的环境（例如标准 Web 堆栈）。应使用哪项服务？',
 ['AWS Service Catalog','AWS Control Tower','AWS Artifact','Amazon Inspector'],
 'Service Catalog 让管理员发布经批准的产品（基于 CloudFormation 模板），用户可以在受治理的前提下启动它们。'],
['Control Tower governs accounts, not a product catalogue.','Artifact provides compliance reports.','Inspector scans for vulnerabilities.'],
['Control Tower 治理的是账户，而不是产品目录。','Artifact 提供合规报告。','Inspector 扫描漏洞。']);

Q('3.1','single',[0],
['An administrator needs to connect to the shell of an EC2 instance in a private subnet without opening inbound SSH ports or managing SSH keys. Which feature should be used?',
 ['AWS Systems Manager Session Manager','A public IP address with port 22 open to the internet','AWS Artifact','Amazon Route 53'],
 'Session Manager provides secure, auditable shell access to instances through Systems Manager, with no inbound ports or bastion hosts.'],
['某管理员需要连接到私有子网中一台 EC2 实例的 Shell，但不想开放入站 SSH 端口，也不想管理 SSH 密钥。应使用哪项功能？',
 ['AWS Systems Manager Session Manager','分配公有 IP 地址并向互联网开放 22 端口','AWS Artifact','Amazon Route 53'],
 'Session Manager 通过 Systems Manager 提供安全、可审计的实例 Shell 访问，无需入站端口或堡垒主机。'],
['Opening SSH to the internet increases risk.','Artifact provides compliance reports.','Route 53 is DNS.'],
['向互联网开放 SSH 会增加风险。','Artifact 提供合规报告。','Route 53 是 DNS 服务。']);

/* ---------- 3.3 compute ---------- */
Q('3.3','single',[0],
['A team wants to run a containerized microservice and lets AWS manage the orchestration, using AWS-native tooling rather than Kubernetes. Which service should it choose?',
 ['Amazon ECS','Amazon EKS','Amazon ECR','AWS Outposts'],
 'Amazon ECS is AWS’s own container orchestration service; it can run tasks on EC2 or on serverless AWS Fargate.'],
['某团队希望运行一个容器化的微服务，由 AWS 管理编排，并使用 AWS 原生工具而不是 Kubernetes。应选择哪项服务？',
 ['Amazon ECS','Amazon EKS','Amazon ECR','AWS Outposts'],
 'Amazon ECS 是 AWS 自己的容器编排服务，可以在 EC2 或无服务器的 AWS Fargate 上运行任务。'],
['EKS is managed Kubernetes.','ECR stores images; it does not orchestrate.','Outposts runs AWS on premises.'],
['EKS 是托管的 Kubernetes。','ECR 存储镜像，不负责编排。','Outposts 在本地运行 AWS。']);

Q('3.3','single',[0],
['A developer with little infrastructure experience wants to deploy a Python web application and still be able to see and adjust the underlying EC2 instances if needed. Which service fits?',
 ['AWS Elastic Beanstalk','Amazon EKS','AWS Batch','AWS Direct Connect'],
 'Elastic Beanstalk handles provisioning, load balancing, scaling and monitoring, while you keep full access to the underlying resources.'],
['某开发人员缺乏基础设施经验，希望部署一个 Python Web 应用，同时在需要时仍能查看和调整底层的 EC2 实例。哪项服务合适？',
 ['AWS Elastic Beanstalk','Amazon EKS','AWS Batch','AWS Direct Connect'],
 'Elastic Beanstalk 负责配置、负载均衡、伸缩和监控，同时你仍可完全访问底层资源。'],
['EKS requires Kubernetes knowledge.','Batch is for batch jobs, not web apps.','Direct Connect is a network link.'],
['EKS 需要 Kubernetes 知识。','Batch 用于批处理作业，而不是 Web 应用。','Direct Connect 是网络连接。']);

Q('3.3','single',[0],
['A small agency needs a virtual server, a managed database and a static IP for a client website, all bundled at a low fixed monthly price. Which service is designed for this?',
 ['Amazon Lightsail','Amazon EC2 with Dedicated Hosts','AWS Outposts','Amazon EMR'],
 'Lightsail bundles virtual servers, managed databases, storage and static IPs into simple, predictable monthly plans.'],
['某小型代理公司需要为客户网站准备一台虚拟服务器、一个托管数据库和一个静态 IP，全部打包为低廉的固定月费。哪项服务专为此设计？',
 ['Amazon Lightsail','使用专属主机的 Amazon EC2','AWS Outposts','Amazon EMR'],
 'Lightsail 把虚拟服务器、托管数据库、存储和静态 IP 打包成简单、可预测的月度套餐。'],
['Dedicated Hosts are complex and expensive for this.','Outposts installs AWS hardware on premises.','EMR runs big data frameworks.'],
['对此而言，专属主机既复杂又昂贵。','Outposts 在本地安装 AWS 硬件。','EMR 运行大数据框架。']);

Q('3.3','single',[0],
['A factory must process sensor data locally because of millisecond latency needs, but wants the same AWS APIs and tools it uses in the cloud. Which offering fits?',
 ['AWS Outposts','Amazon CloudFront','AWS Global Accelerator','Amazon S3 Glacier'],
 'Outposts brings AWS infrastructure, services and APIs to on-premises locations for low-latency or local processing needs.'],
['某工厂由于毫秒级延迟需求必须在本地处理传感器数据，但希望使用与云中相同的 AWS API 和工具。哪种产品合适？',
 ['AWS Outposts','Amazon CloudFront','AWS Global Accelerator','Amazon S3 Glacier'],
 'Outposts 把 AWS 基础设施、服务和 API 带到本地场所，满足低延迟或本地处理需求。'],
['CloudFront caches content for internet users.','Global Accelerator routes traffic to AWS Regions.','Glacier is archive storage.'],
['CloudFront 为互联网用户缓存内容。','Global Accelerator 把流量路由到 AWS 区域。','Glacier 是归档存储。']);

Q('3.3','multi',[0,1],
['Which TWO statements about AWS Lambda are correct? (Select TWO.)',
 ['It scales automatically with the number of incoming events','It can be triggered by events such as S3 uploads or API Gateway requests','You must patch the operating system of Lambda servers','It is billed for every hour a function exists, even when idle','Each invocation can run for up to 24 hours'],
 'Lambda scales per event, integrates with many event sources and charges only for requests and duration, with a 15-minute maximum per invocation.'],
['关于 AWS Lambda，哪两种说法正确？（选择两项。）',
 ['它会随传入事件的数量自动伸缩','它可以由 S3 上传或 API Gateway 请求等事件触发','你必须为 Lambda 服务器的操作系统打补丁','函数只要存在，即使闲置也按小时计费','每次调用最长可运行 24 小时'],
 'Lambda 按事件伸缩，与许多事件源集成，只对请求次数和运行时长收费，每次调用最长 15 分钟。'],
['AWS manages the servers and OS for Lambda.','Idle functions cost nothing.','The maximum is 15 minutes per invocation.'],
['Lambda 的服务器和操作系统由 AWS 管理。','闲置的函数不产生费用。','每次调用最长为 15 分钟。']);

/* ---------- 3.4 databases ---------- */
Q('3.4','single',[0],
['A web application stores user session data that must be read in under a millisecond and shared across many web servers. Which service is the BEST fit?',
 ['Amazon ElastiCache','Amazon S3 Glacier Deep Archive','Amazon Redshift','AWS Backup'],
 'ElastiCache provides in-memory data stores with microsecond latency, a common choice for session stores and caching.'],
['某 Web 应用存储用户会话数据，这些数据必须在一毫秒内读取，并在多台 Web 服务器之间共享。哪项服务最合适？',
 ['Amazon ElastiCache','Amazon S3 Glacier Deep Archive','Amazon Redshift','AWS Backup'],
 'ElastiCache 提供微秒级延迟的内存数据存储，是会话存储和缓存的常见选择。'],
['Deep Archive retrieval takes hours.','Redshift is for analytics, not session lookups.','Backup manages backups.'],
['Deep Archive 取回需要数小时。','Redshift 用于分析，而不是会话查询。','Backup 管理备份。']);

Q('3.4','single',[0],
['A content platform stores product catalogue entries as flexible JSON documents and already uses MongoDB drivers. Which managed database fits with the least code change?',
 ['Amazon DocumentDB (with MongoDB compatibility)','Amazon Neptune','Amazon RDS for Oracle','Amazon ElastiCache'],
 'DocumentDB is a managed JSON document database compatible with MongoDB APIs and drivers.'],
['某内容平台以灵活的 JSON 文档形式存储产品目录条目，并且已经在使用 MongoDB 驱动程序。哪种托管数据库需要修改的代码最少？',
 ['Amazon DocumentDB（兼容 MongoDB）','Amazon Neptune','Amazon RDS for Oracle','Amazon ElastiCache'],
 'DocumentDB 是兼容 MongoDB API 和驱动程序的托管 JSON 文档数据库。'],
['Neptune is a graph database.','Oracle is relational.','ElastiCache is a cache, not a document store.'],
['Neptune 是图数据库。','Oracle 是关系数据库。','ElastiCache 是缓存，而不是文档存储。']);

Q('3.4','single',[0],
['A bank wants to detect fraud rings by analysing relationships between accounts, devices and transactions. Which database is designed for this kind of data?',
 ['Amazon Neptune','Amazon DynamoDB','Amazon RDS for MySQL','Amazon S3'],
 'Neptune is a graph database optimized for storing and querying relationships, such as fraud rings and social graphs.'],
['某银行希望通过分析账户、设备和交易之间的关系来发现欺诈团伙。哪种数据库专为这类数据设计？',
 ['Amazon Neptune','Amazon DynamoDB','Amazon RDS for MySQL','Amazon S3'],
 'Neptune 是针对存储和查询关系进行优化的图数据库，适用于欺诈团伙和社交图谱等场景。'],
['DynamoDB is key-value, not built for relationship traversal.','Relational joins become slow for deep relationship queries.','S3 is object storage.'],
['DynamoDB 是键值数据库，不擅长关系遍历。','对于深层关系查询，关系型连接会变慢。','S3 是对象存储。']);

/* ---------- 3.5 networking ---------- */
Q('3.5','single',[0],
['A company wants to create, publish and secure REST APIs that invoke Lambda functions, with throttling and API keys, without managing servers. Which service should it use?',
 ['Amazon API Gateway','Amazon Route 53','AWS Direct Connect','Elastic Load Balancing Gateway Load Balancer'],
 'API Gateway creates and manages REST, HTTP and WebSocket APIs, with authorization, throttling and monitoring, and integrates with Lambda.'],
['某公司希望创建、发布和保护调用 Lambda 函数的 REST API，并提供限流和 API 密钥功能，且无需管理服务器。应使用哪项服务？',
 ['Amazon API Gateway','Amazon Route 53','AWS Direct Connect','Elastic Load Balancing 的 Gateway Load Balancer'],
 'API Gateway 创建和管理 REST、HTTP 和 WebSocket API，提供授权、限流和监控，并与 Lambda 集成。'],
['Route 53 is DNS.','Direct Connect is a private network link.','Gateway Load Balancer is for third-party network appliances.'],
['Route 53 是 DNS 服务。','Direct Connect 是私有网络连接。','Gateway Load Balancer 用于第三方网络设备。']);

Q('3.5','single',[0],
['A multiplayer game uses UDP and needs players worldwide to reach the nearest healthy Region through two fixed IP addresses, with fast failover. Which service fits?',
 ['AWS Global Accelerator','Amazon CloudFront','Amazon S3 Transfer Acceleration','AWS Client VPN'],
 'Global Accelerator provides two static anycast IPs, supports TCP and UDP, and routes over the AWS network to the closest healthy endpoint.'],
['某多人游戏使用 UDP，需要让全球玩家通过两个固定 IP 地址访问最近的健康区域，并能快速故障转移。哪项服务合适？',
 ['AWS Global Accelerator','Amazon CloudFront','Amazon S3 Transfer Acceleration','AWS Client VPN'],
 'Global Accelerator 提供两个静态任播 IP，支持 TCP 和 UDP，并经由 AWS 网络路由到最近的健康端点。'],
['CloudFront focuses on caching HTTP(S) content.','Transfer Acceleration speeds up S3 uploads only.','Client VPN connects individual users to networks.'],
['CloudFront 侧重于缓存 HTTP(S) 内容。','Transfer Acceleration 只用于加快 S3 上传。','Client VPN 把个人用户连接到网络。']);

Q('3.5','single',[0],
['A company uses AWS Direct Connect and must also encrypt the traffic on that link to meet a policy. Which approach meets this?',
 ['Run an AWS Site-to-Site VPN connection over the Direct Connect link','Direct Connect traffic is always encrypted, so nothing is needed','Use Amazon CloudFront in front of Direct Connect','Enable S3 Transfer Acceleration'],
 'Direct Connect is private but not encrypted by default; a VPN over Direct Connect (or MACsec on supported connections) adds encryption.'],
['某公司使用 AWS Direct Connect，为了满足政策要求，还必须对该链路上的流量加密。哪种方法能满足要求？',
 ['在 Direct Connect 链路上运行 AWS Site-to-Site VPN 连接','Direct Connect 流量始终是加密的，因此无需任何操作','在 Direct Connect 前面使用 Amazon CloudFront','启用 S3 Transfer Acceleration'],
 'Direct Connect 是私有的，但默认不加密；在 Direct Connect 上运行 VPN（或在支持的连接上使用 MACsec）可以加密流量。'],
['Direct Connect is private, not encrypted by default.','CloudFront serves internet users and does not encrypt the link.','Transfer Acceleration is for S3 uploads over the internet.'],
['Direct Connect 是私有的，但默认不加密。','CloudFront 服务于互联网用户，不会加密该链路。','Transfer Acceleration 用于经互联网上传到 S3。']);

Q('3.5','single',[0],
['Remote employees need to connect from their laptops to resources in a VPC and to the on-premises network using an OpenVPN-based client. Which service should the company use?',
 ['AWS Client VPN','AWS Site-to-Site VPN','AWS Direct Connect','Amazon WorkSpaces Secure Browser'],
 'Client VPN is a managed, client-based VPN that lets individual users securely access AWS and on-premises networks.'],
['远程员工需要使用基于 OpenVPN 的客户端，从笔记本电脑连接到 VPC 中的资源和本地网络。公司应使用哪项服务？',
 ['AWS Client VPN','AWS Site-to-Site VPN','AWS Direct Connect','Amazon WorkSpaces Secure Browser'],
 'Client VPN 是托管的、基于客户端的 VPN，让个人用户安全地访问 AWS 和本地网络。'],
['Site-to-Site connects whole networks, not individual laptops.','Direct Connect is a dedicated line from a facility.','Secure Browser gives browser access to web apps, not network access.'],
['Site-to-Site 连接的是整个网络，而不是单台笔记本电脑。','Direct Connect 是从某个设施接入的专线。','Secure Browser 提供对 Web 应用的浏览器访问，而不是网络访问。']);

Q('3.5','single',[0],
['A SaaS provider wants customers in other AWS accounts to reach its service privately from their own VPCs, without VPC peering or traffic crossing the internet. Which service enables this?',
 ['AWS PrivateLink','Internet gateway','Amazon CloudFront','AWS Client VPN'],
 'PrivateLink exposes a service through VPC endpoints in consumer VPCs, keeping traffic on the AWS network.'],
['某 SaaS 提供商希望其他 AWS 账户中的客户能从自己的 VPC 私密地访问其服务，而无需 VPC 对等连接，流量也不经过互联网。哪项服务能实现这一点？',
 ['AWS PrivateLink','互联网网关','Amazon CloudFront','AWS Client VPN'],
 'PrivateLink 通过使用方 VPC 中的 VPC 终端节点公开服务，让流量保持在 AWS 网络上。'],
['An internet gateway sends traffic over the internet.','CloudFront serves public internet users.','Client VPN connects individual users.'],
['互联网网关让流量经过互联网。','CloudFront 服务于公共互联网用户。','Client VPN 连接个人用户。']);

Q('3.5','multi',[0,1],
['Which TWO options let resources in two VPCs communicate privately? (Select TWO.)',
 ['VPC peering','AWS Transit Gateway','Amazon CloudFront','AWS Artifact','Amazon S3 Glacier'],
 'VPC peering connects two VPCs directly; Transit Gateway connects many VPCs through a central hub.'],
['哪两个选项可以让两个 VPC 中的资源私密通信？（选择两项。）',
 ['VPC 对等连接','AWS Transit Gateway','Amazon CloudFront','AWS Artifact','Amazon S3 Glacier'],
 'VPC 对等连接直接连接两个 VPC；Transit Gateway 通过中心枢纽连接多个 VPC。'],
['CloudFront delivers content to internet users.','Artifact provides compliance reports.','Glacier is archive storage.'],
['CloudFront 向互联网用户分发内容。','Artifact 提供合规报告。','Glacier 是归档存储。']);

Q('3.5','single',[0],
['A company wants Route 53 to send users to a secondary Region automatically when health checks show the primary site is down. Which routing policy should it use?',
 ['Failover routing','Simple routing','Weighted routing with equal weights only','Geolocation routing'],
 'Failover routing sends traffic to a primary resource while it is healthy and to a standby resource when health checks fail.'],
['某公司希望当健康检查显示主站点宕机时，Route 53 能自动把用户引导到备用区域。应使用哪种路由策略？',
 ['故障转移路由','简单路由','仅使用相同权重的加权路由','地理位置路由'],
 '故障转移路由在主资源健康时把流量发送给它，在健康检查失败时把流量发送给备用资源。'],
['Simple routing has no health-based failover.','Equal weights split traffic rather than failing over.','Geolocation routes by user location, not health.'],
['简单路由没有基于健康状况的故障转移。','相同的权重是分流流量，而不是故障转移。','地理位置路由按用户位置路由，而不是按健康状况。']);

/* ---------- 3.6 storage ---------- */
Q('3.6','single',[0],
['A company wants to protect objects in an S3 bucket from accidental deletion or overwrites and be able to restore earlier versions. What should it enable?',
 ['S3 Versioning','S3 Transfer Acceleration','S3 static website hosting','Amazon CloudFront'],
 'Versioning keeps multiple versions of each object, so you can recover from accidental deletes and overwrites.'],
['某公司希望保护 S3 存储桶中的对象免遭意外删除或覆盖，并能恢复之前的版本。应启用什么？',
 ['S3 版本控制','S3 Transfer Acceleration','S3 静态网站托管','Amazon CloudFront'],
 '版本控制会保留每个对象的多个版本，因此可以从意外删除和覆盖中恢复。'],
['Transfer Acceleration speeds up uploads.','Static website hosting serves files as a website.','CloudFront caches content; it does not keep versions.'],
['Transfer Acceleration 用于加快上传。','静态网站托管把文件作为网站提供。','CloudFront 缓存内容，不保留版本。']);

Q('3.6','single',[0],
['A marketing team wants to host a simple website made only of HTML, CSS, JavaScript and images, with no servers to manage and very low cost. Which option fits?',
 ['Amazon S3 static website hosting (optionally behind CloudFront)','An EC2 instance running a web server','Amazon RDS','AWS Batch'],
 'S3 can serve static content as a website, with CloudFront for HTTPS and global caching, without any servers.'],
['某营销团队希望托管一个只包含 HTML、CSS、JavaScript 和图片的简单网站，无需管理服务器，成本极低。哪个选项合适？',
 ['Amazon S3 静态网站托管（可选择放在 CloudFront 后面）','运行 Web 服务器的 EC2 实例','Amazon RDS','AWS Batch'],
 'S3 可以把静态内容作为网站提供，配合 CloudFront 实现 HTTPS 和全球缓存，无需任何服务器。'],
['An EC2 server must be managed and costs more.','RDS is a database.','Batch runs batch jobs.'],
['EC2 服务器需要管理，而且成本更高。','RDS 是数据库。','Batch 运行批处理作业。']);

Q('3.6','single',[0],
['A company must keep a copy of every new S3 object in a bucket in another Region for disaster recovery. What should it configure?',
 ['S3 Cross-Region Replication','S3 Lifecycle expiration','S3 Transfer Acceleration','Amazon EBS snapshots'],
 'Cross-Region Replication automatically copies new objects to a bucket in another Region (versioning must be enabled on both buckets).'],
['为了灾难恢复，某公司必须把存储桶中每个新的 S3 对象在另一个区域保留一份副本。应配置什么？',
 ['S3 跨区域复制','S3 生命周期过期','S3 Transfer Acceleration','Amazon EBS 快照'],
 '跨区域复制会自动把新对象复制到另一个区域的存储桶中（两个存储桶都必须启用版本控制）。'],
['Lifecycle expiration deletes objects.','Transfer Acceleration speeds up uploads.','EBS snapshots back up block volumes, not S3 objects.'],
['生命周期过期会删除对象。','Transfer Acceleration 用于加快上传。','EBS 快照备份的是数据块卷，而不是 S3 对象。']);

Q('3.6','single',[0],
['Users on several continents upload large video files to a single S3 bucket in one Region and uploads are slow. Which feature can speed them up?',
 ['S3 Transfer Acceleration','S3 Object Lock','S3 Glacier Deep Archive','S3 Versioning'],
 'Transfer Acceleration routes uploads through CloudFront edge locations and the AWS network to speed up long-distance transfers to S3.'],
['多个大洲的用户把大型视频文件上传到同一区域的单个 S3 存储桶中，上传速度很慢。哪项功能可以加快速度？',
 ['S3 Transfer Acceleration','S3 对象锁定','S3 Glacier Deep Archive','S3 版本控制'],
 'Transfer Acceleration 通过 CloudFront 边缘站点和 AWS 网络路由上传，加快到 S3 的远距离传输。'],
['Object Lock prevents deletion.','Deep Archive is cold storage.','Versioning keeps object versions.'],
['对象锁定用于防止删除。','Deep Archive 是冷存储。','版本控制用于保留对象版本。']);

Q('3.6','single',[0],
['A company wants to replace its physical backup tapes with cloud storage without changing its existing backup software. Which service supports this?',
 ['AWS Storage Gateway Tape Gateway','Amazon EFS','Amazon ElastiCache','AWS Global Accelerator'],
 'Tape Gateway presents virtual tapes to existing backup applications and stores them in S3 and S3 Glacier storage classes.'],
['某公司希望在不改变现有备份软件的情况下，用云存储取代物理备份磁带。哪项服务支持这样做？',
 ['AWS Storage Gateway 磁带网关','Amazon EFS','Amazon ElastiCache','AWS Global Accelerator'],
 '磁带网关为现有备份应用提供虚拟磁带，并把它们存储在 S3 和 S3 Glacier 存储类别中。'],
['EFS is a file system for AWS compute.','ElastiCache is an in-memory cache.','Global Accelerator routes network traffic.'],
['EFS 是供 AWS 计算资源使用的文件系统。','ElastiCache 是内存缓存。','Global Accelerator 路由网络流量。']);

Q('3.6','single',[0],
['A company wants to recover its on-premises servers into AWS within minutes after a disaster, with data loss measured in seconds, using continuous replication. Which service should it use?',
 ['AWS Elastic Disaster Recovery','AWS Backup with weekly backups','Amazon S3 Glacier Deep Archive','AWS Artifact'],
 'Elastic Disaster Recovery continuously replicates servers to AWS, enabling RPOs of seconds and RTOs of minutes.'],
['某公司希望通过持续复制，在灾难发生后几分钟内把本地服务器恢复到 AWS，数据丢失以秒计。应使用哪项服务？',
 ['AWS Elastic Disaster Recovery','每周备份一次的 AWS Backup','Amazon S3 Glacier Deep Archive','AWS Artifact'],
 'Elastic Disaster Recovery 把服务器持续复制到 AWS，可实现以秒计的 RPO 和以分钟计的 RTO。'],
['Weekly backups could lose up to a week of data.','Deep Archive retrieval takes hours.','Artifact provides compliance reports.'],
['每周备份可能丢失多达一周的数据。','Deep Archive 取回需要数小时。','Artifact 提供合规报告。']);

Q('3.6','multi',[0,1],
['Which TWO AWS storage services provide shared file systems that multiple instances can mount at the same time? (Select TWO.)',
 ['Amazon EFS','Amazon FSx','Amazon EBS General Purpose SSD','Instance store','Amazon S3 Glacier Flexible Retrieval'],
 'EFS (NFS for Linux) and FSx (Windows File Server, Lustre, NetApp ONTAP, OpenZFS) are shared file systems.'],
['哪两项 AWS 存储服务提供可供多台实例同时挂载的共享文件系统？（选择两项。）',
 ['Amazon EFS','Amazon FSx','Amazon EBS 通用型 SSD','实例存储','Amazon S3 Glacier Flexible Retrieval'],
 'EFS（面向 Linux 的 NFS）和 FSx（Windows File Server、Lustre、NetApp ONTAP、OpenZFS）都是共享文件系统。'],
['EBS is block storage, usually attached to one instance.','Instance store is local to one host.','Glacier is archive object storage.'],
['EBS 是数据块存储，通常挂载到一台实例上。','实例存储仅限于一台主机。','Glacier 是归档对象存储。']);

/* ---------- 3.7 analytics and AI ---------- */
Q('3.7','single',[0],
['A retailer wants a fully managed data warehouse to run complex SQL analytics across years of sales data measured in petabytes. Which service should it use?',
 ['Amazon Redshift','Amazon DynamoDB','Amazon ElastiCache','Amazon Neptune'],
 'Redshift is a petabyte-scale data warehouse built for fast analytical (OLAP) queries.'],
['某零售商希望使用完全托管的数据仓库，对多年来以 PB 计的销售数据运行复杂的 SQL 分析。应使用哪项服务？',
 ['Amazon Redshift','Amazon DynamoDB','Amazon ElastiCache','Amazon Neptune'],
 'Redshift 是 PB 级数据仓库，专为快速的分析型（OLAP）查询而构建。'],
['DynamoDB is a NoSQL operational database.','ElastiCache is an in-memory cache.','Neptune is a graph database.'],
['DynamoDB 是 NoSQL 业务数据库。','ElastiCache 是内存缓存。','Neptune 是图数据库。']);

Q('3.7','single',[0],
['A data engineering team wants to run Apache Spark and Hadoop jobs on large datasets without building and tuning its own clusters from scratch. Which service should it use?',
 ['Amazon EMR','Amazon Athena','Amazon Quick Sight','Amazon Lex'],
 'EMR is a managed big data platform for open-source frameworks such as Spark, Hadoop, Hive and Presto.'],
['某数据工程团队希望在大型数据集上运行 Apache Spark 和 Hadoop 作业，而无需从零开始构建和调优自己的集群。应使用哪项服务？',
 ['Amazon EMR','Amazon Athena','Amazon Quick Sight','Amazon Lex'],
 'EMR 是面向 Spark、Hadoop、Hive 和 Presto 等开源框架的托管大数据平台。'],
['Athena runs SQL on S3, not Spark clusters.','Quick Sight builds dashboards.','Lex builds chatbots.'],
['Athena 对 S3 运行 SQL，而不是运行 Spark 集群。','Quick Sight 用于构建仪表板。','Lex 用于构建聊天机器人。']);

Q('3.7','single',[0],
['A company wants to search and analyse application logs in near real time and offer full-text search on its website. Which service fits?',
 ['Amazon OpenSearch Service','Amazon Redshift','AWS Glue','Amazon Polly'],
 'OpenSearch Service is a managed service for search, log analytics and observability, with dashboards.'],
['某公司希望近乎实时地搜索和分析应用日志，并在其网站上提供全文搜索。哪项服务合适？',
 ['Amazon OpenSearch Service','Amazon Redshift','AWS Glue','Amazon Polly'],
 'OpenSearch Service 是用于搜索、日志分析和可观测性的托管服务，并提供仪表板。'],
['Redshift is a data warehouse for SQL analytics.','Glue prepares and catalogues data.','Polly converts text to speech.'],
['Redshift 是用于 SQL 分析的数据仓库。','Glue 用于准备和编目数据。','Polly 把文本转换为语音。']);

Q('3.7','single',[0],
['A company has data files in S3 with unknown schemas and wants them discovered and added to a central data catalogue automatically so Athena can query them. Which feature should it use?',
 ['AWS Glue crawlers and the AWS Glue Data Catalog','Amazon Kinesis','Amazon Quick Sight','Amazon EMR Studio only'],
 'Glue crawlers scan data stores, infer schemas and populate the Glue Data Catalog, which Athena, Redshift and EMR can use.'],
['某公司在 S3 中有架构未知的数据文件，希望自动发现这些文件并添加到中央数据目录中，以便 Athena 查询。应使用哪项功能？',
 ['AWS Glue 爬网程序和 AWS Glue 数据目录','Amazon Kinesis','Amazon Quick Sight','仅使用 Amazon EMR Studio'],
 'Glue 爬网程序扫描数据存储、推断架构并填充 Glue 数据目录，供 Athena、Redshift 和 EMR 使用。'],
['Kinesis ingests streaming data.','Quick Sight visualizes data.','EMR Studio is a notebook environment, not a crawler.'],
['Kinesis 用于导入流数据。','Quick Sight 用于数据可视化。','EMR Studio 是笔记本环境，而不是爬网程序。']);

Q('3.7','single',[0],
['Developers want a generative AI assistant in their IDE and the AWS console that suggests code, answers questions about AWS services and helps troubleshoot. Which in-scope service fits?',
 ['Amazon Q (Amazon Q Developer)','Amazon Polly','Amazon Rekognition','AWS Glue'],
 'Amazon Q Developer is the generative AI assistant for building on AWS. (Amazon Q Business, the employee assistant, is closed to new customers; its successor is Amazon Quick.)'],
['开发人员希望在 IDE 和 AWS 控制台中使用一个生成式 AI 助手，它能建议代码、解答有关 AWS 服务的问题并帮助排查故障。哪项考试范围内的服务合适？',
 ['Amazon Q（Amazon Q Developer）','Amazon Polly','Amazon Rekognition','AWS Glue'],
 'Amazon Q Developer 是用于在 AWS 上构建的生成式 AI 助手。（面向员工的 Amazon Q Business 已不再向新客户开放，其后继产品是 Amazon Quick。）'],
['Polly converts text to speech.','Rekognition analyses images and video.','Glue prepares data.'],
['Polly 把文本转换为语音。','Rekognition 分析图像和视频。','Glue 用于准备数据。']);

Q('3.7','single',[0],
['A video platform wants to automatically generate subtitles in English for its videos and then provide them in Spanish. Which two-step combination works?',
 ['Amazon Transcribe to create English text, then Amazon Translate to produce Spanish','Amazon Polly, then Amazon Rekognition','Amazon Textract, then Amazon Lex','Amazon Comprehend, then Amazon Polly'],
 'Transcribe converts speech to text; Translate converts that text into other languages.'],
['某视频平台希望自动为其视频生成英文字幕，然后提供西班牙语字幕。哪种两步组合可行？',
 ['先用 Amazon Transcribe 生成英文文本，再用 Amazon Translate 生成西班牙语','先用 Amazon Polly，再用 Amazon Rekognition','先用 Amazon Textract，再用 Amazon Lex','先用 Amazon Comprehend，再用 Amazon Polly'],
 'Transcribe 把语音转换为文字；Translate 把文字翻译成其他语言。'],
['Polly makes speech and Rekognition analyses images; neither creates subtitles.','Textract reads documents and Lex builds chatbots.','Comprehend analyses text and Polly speaks it; neither transcribes or translates.'],
['Polly 生成语音，Rekognition 分析图像，两者都不能生成字幕。','Textract 读取文档，Lex 构建聊天机器人。','Comprehend 分析文本，Polly 朗读文本，两者都不负责转录或翻译。']);

/* ---------- 3.8 integration, dev tools, EUC, IoT ---------- */
Q('3.8','single',[0],
['An order process has several steps (charge payment, reserve stock, ship, email) with retries and error handling, implemented as Lambda functions. Which service coordinates these steps visually?',
 ['AWS Step Functions','Amazon SQS','Amazon Route 53','AWS CloudHSM'],
 'Step Functions orchestrates multi-step workflows as state machines, with built-in retries, branching and error handling.'],
['某订单流程有多个步骤（扣款、预留库存、发货、发送邮件），需要重试和错误处理，并以 Lambda 函数实现。哪项服务以可视化方式协调这些步骤？',
 ['AWS Step Functions','Amazon SQS','Amazon Route 53','AWS CloudHSM'],
 'Step Functions 把多步骤工作流编排为状态机，内置重试、分支和错误处理。'],
['SQS buffers messages but does not orchestrate a workflow.','Route 53 is DNS.','CloudHSM manages hardware keys.'],
['SQS 缓冲消息，但不编排工作流。','Route 53 是 DNS 服务。','CloudHSM 管理硬件密钥。']);

Q('3.8','single',[0],
['When a new order is placed, the company wants the same message delivered at once to an inventory queue, an analytics queue and an email address. Which pattern fits?',
 ['Publish to an Amazon SNS topic that fans out to the SQS queues and the email subscription','Send the message to one SQS queue and hope each consumer sees it','Store the message in Amazon S3 Glacier','Use AWS Artifact to distribute it'],
 'SNS fan-out pushes one published message to many subscribers, including SQS queues and email.'],
['每当有新订单时，公司希望同一条消息能同时发送到库存队列、分析队列和一个电子邮件地址。哪种模式合适？',
 ['发布到 Amazon SNS 主题，由它扇出到各个 SQS 队列和电子邮件订阅','把消息发送到一个 SQS 队列，指望每个消费者都能看到','把消息存储在 Amazon S3 Glacier 中','使用 AWS Artifact 分发消息'],
 'SNS 扇出把一条发布的消息推送给多个订阅方，包括 SQS 队列和电子邮件。'],
['Each SQS message is processed by one consumer, not all of them.','Glacier is archive storage.','Artifact provides compliance reports.'],
['每条 SQS 消息只由一个消费者处理，而不是所有消费者。','Glacier 是归档存储。','Artifact 提供合规报告。']);

Q('3.8','single',[0],
['A team wants an automated pipeline: when code is pushed, it is built and tested, then deployed to staging and production after approval. Which pair of services fits?',
 ['AWS CodePipeline to orchestrate the stages, with AWS CodeBuild for build and test','AWS X-Ray and Amazon Polly','Amazon Route 53 and AWS Artifact','Amazon Connect and Amazon SES'],
 'CodePipeline models and automates the release process; CodeBuild compiles code and runs tests as a stage.'],
['某团队希望建立一条自动化管道：代码推送后自动构建和测试，经批准后部署到预发布和生产环境。哪对服务合适？',
 ['用 AWS CodePipeline 编排各阶段，用 AWS CodeBuild 负责构建和测试','AWS X-Ray 和 Amazon Polly','Amazon Route 53 和 AWS Artifact','Amazon Connect 和 Amazon SES'],
 'CodePipeline 对发布流程进行建模和自动化；CodeBuild 作为其中一个阶段编译代码并运行测试。'],
['X-Ray traces requests and Polly makes speech.','Route 53 is DNS and Artifact provides reports.','Connect is a contact centre and SES sends email.'],
['X-Ray 跟踪请求，Polly 生成语音。','Route 53 是 DNS 服务，Artifact 提供报告。','Connect 是联络中心，SES 发送电子邮件。']);

Q('3.8','single',[0],
['A company wants to connect thousands of smart meters that send readings over MQTT and route the data to AWS services for storage and analysis. Which service should it use?',
 ['AWS IoT Core','Amazon Connect','AWS Amplify','Amazon AppStream 2.0'],
 'IoT Core securely connects devices using protocols such as MQTT and routes their messages to other AWS services with rules.'],
['某公司希望连接数千台通过 MQTT 发送读数的智能电表，并把数据路由到 AWS 服务进行存储和分析。应使用哪项服务？',
 ['AWS IoT Core','Amazon Connect','AWS Amplify','Amazon AppStream 2.0'],
 'IoT Core 使用 MQTT 等协议安全地连接设备，并通过规则把它们的消息路由到其他 AWS 服务。'],
['Connect is a contact centre.','Amplify builds web and mobile apps.','AppStream streams desktop applications.'],
['Connect 是联络中心。','Amplify 用于构建 Web 和移动应用。','AppStream 流式传输桌面应用。']);

Q('3.8','single',[0],
['A startup wants to build and host a React web app with a backend, authentication and CI/CD from a Git repository, with minimal cloud expertise. Which service fits?',
 ['AWS Amplify','AWS Outposts','Amazon EMR','AWS Direct Connect'],
 'Amplify provides tools and hosting to build, deploy and host full-stack web and mobile apps, with Git-based continuous deployment.'],
['某初创公司希望在云技能有限的情况下，构建并托管一个带后端、身份验证和基于 Git 仓库的 CI/CD 的 React Web 应用。哪项服务合适？',
 ['AWS Amplify','AWS Outposts','Amazon EMR','AWS Direct Connect'],
 'Amplify 提供构建、部署和托管全栈 Web 和移动应用的工具和托管服务，支持基于 Git 的持续部署。'],
['Outposts runs AWS on premises.','EMR runs big data frameworks.','Direct Connect is a network link.'],
['Outposts 在本地运行 AWS。','EMR 运行大数据框架。','Direct Connect 是网络连接。']);

Q('3.8','multi',[0,1],
['A company wants employees to use internal applications without storing company data on their personal laptops. Which TWO services can deliver this? (Select TWO.)',
 ['Amazon WorkSpaces','Amazon AppStream 2.0','Amazon S3 Transfer Acceleration','AWS DataSync','Amazon EBS'],
 'WorkSpaces streams full virtual desktops and AppStream 2.0 streams applications, so data stays in AWS rather than on the device.'],
['某公司希望员工使用内部应用，但不在个人笔记本电脑上存储公司数据。哪两项服务可以实现？（选择两项。）',
 ['Amazon WorkSpaces','Amazon AppStream 2.0','Amazon S3 Transfer Acceleration','AWS DataSync','Amazon EBS'],
 'WorkSpaces 流式传输完整的虚拟桌面，AppStream 2.0 流式传输应用，因此数据保留在 AWS 中，而不在设备上。'],
['Transfer Acceleration speeds up S3 uploads.','DataSync copies data, which is the opposite of the goal.','EBS is block storage for instances.'],
['Transfer Acceleration 用于加快 S3 上传。','DataSync 用于复制数据，这与目标正好相反。','EBS 是供实例使用的数据块存储。']);
})();
