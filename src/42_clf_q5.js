/* CLF-C02 questions, set 2 (part 1: domains 1, 2 and 4). Original questions that widen service coverage. Append-only. */
(function(){
function Q(k, t, a, en, zh, wEn, wZh){
  var q = {k: k, d: 'd' + k.charAt(0), t: t, a: a, en: {q: en[0], o: en[1], x: en[2]}, zh: {q: zh[0], o: zh[1], x: zh[2]}};
  var pad = a.map(function(){ return ''; }); q.w = {en: pad.concat(wEn), zh: pad.concat(wZh)};
  CLF.qs.push(q);
}

/* ---------- 1.2 design principles: loose coupling, DR ---------- */
Q('1.2','single',[0],
['An order service and an invoicing service call each other directly, so when invoicing slows down, orders fail too. Which design principle would fix this?',
 ['Loose coupling, for example by placing a queue between the services','Tight coupling, so both services always run on the same server','Vertical scaling of the order service only','Moving both services into a single Availability Zone'],
 'Loosely coupled components interact through interfaces such as queues or events, so a slow or failed component does not take the others down.'],
['订单服务和开票服务直接相互调用，因此开票变慢时，订单也会失败。哪项设计原则可以解决这个问题？',
 ['松耦合，例如在两个服务之间放置一个队列','紧耦合，让两个服务始终运行在同一台服务器上','只对订单服务进行纵向扩展','把两个服务都迁移到单个可用区'],
 '松耦合的组件通过队列或事件等接口交互，因此一个组件变慢或出故障不会拖垮其他组件。'],
['Tight coupling is what causes the failure to spread.','A bigger order server still waits on slow invoicing.','A single AZ reduces availability and does not decouple anything.'],
['紧耦合正是导致故障蔓延的原因。','更大的订单服务器仍然要等待缓慢的开票服务。','单个可用区会降低可用性，也没有实现任何解耦。']);

Q('1.2','single',[0],
['What does recovery time objective (RTO) measure?',
 ['The maximum acceptable time a workload can be unavailable after a disaster','The maximum acceptable amount of data loss, measured in time','The time it takes to launch one EC2 instance','How often backups are deleted'],
 'RTO is the maximum acceptable delay between the interruption of service and its restoration. RPO is the maximum acceptable data loss.'],
['恢复时间目标（RTO）衡量的是什么？',
 ['灾难发生后工作负载可以接受的最长不可用时间','可以接受的最大数据丢失量（以时间衡量）','启动一台 EC2 实例所需的时间','备份被删除的频率'],
 'RTO 是从服务中断到恢复之间可以接受的最长延迟。RPO 是可以接受的最大数据丢失量。'],
['That is the recovery point objective (RPO).','Instance launch time is not a recovery objective.','Backup deletion is a retention setting.'],
['这是恢复点目标（RPO）。','实例启动时间不是恢复目标。','备份删除属于保留设置。']);

Q('1.2','single',[0],
['A company can tolerate losing at most 5 minutes of data in a disaster. Which metric describes this requirement?',
 ['Recovery point objective (RPO)','Recovery time objective (RTO)','Service quota','Mean time between failures'],
 'RPO is the maximum acceptable amount of time since the last data recovery point, which equals how much data you can afford to lose.'],
['某公司在灾难中最多只能接受丢失 5 分钟的数据。哪个指标描述了这一要求？',
 ['恢复点目标（RPO）','恢复时间目标（RTO）','服务配额','平均故障间隔时间'],
 'RPO 是距离上一个数据恢复点可以接受的最长时间，也就是你能承受丢失多少数据。'],
['RTO is about downtime, not data loss.','Service quotas are limits on resources.','MTBF measures reliability, not acceptable data loss.'],
['RTO 关注的是停机时间，而不是数据丢失。','服务配额是对资源的限制。','平均故障间隔时间衡量的是可靠性，而不是可接受的数据丢失。']);

Q('1.2','single',[0],
['A small nonprofit has a very tight budget and can accept its website being offline for a day after a regional disaster. Which disaster recovery strategy fits BEST?',
 ['Backup and restore','Pilot light','Warm standby','Multi-site active/active'],
 'With a long acceptable recovery time and a small budget, backup and restore is enough: it only keeps backups, so it costs the least. Pilot light, warm standby and multi-site cost progressively more to recover faster.'],
['某小型非营利组织预算非常紧张，可以接受其网站在区域性灾难后离线一天。哪种灾难恢复策略最合适？',
 ['备份与还原','指示灯','温备用','多站点双活'],
 '可接受的恢复时间较长且预算有限时，备份与还原就足够了：它只保留备份，因此成本最低。指示灯、温备用和多站点依次花费更多，以换取更快的恢复。'],
['Pilot light keeps core data live, which costs more than this budget needs.','Warm standby runs a scaled-down copy all the time, which is more than a one-day recovery needs.','Multi-site runs full capacity in two places and is the most expensive option.'],
['指示灯让核心数据保持实时，成本超出了这个预算的需要。','温备用一直运行一个缩小规模的副本，超出了一天恢复时间的需要。','多站点在两个地方以完整容量运行，是成本最高的选项。']);

Q('1.2','single',[0],
['A company keeps its database continuously replicated to a second Region, but application servers there are switched off until a disaster. Which DR strategy is this?',
 ['Pilot light','Backup and restore','Multi-site active/active','Warm standby with full production capacity'],
 'In pilot light, the core (usually data) is always running and replicated, and the rest of the environment is provisioned or started only during recovery.'],
['某公司把数据库持续复制到第二个区域，但那里的应用服务器在灾难发生前一直关闭。这是哪种灾难恢复策略？',
 ['指示灯','备份与还原','多站点双活','以完整生产容量运行的温备用'],
 '在指示灯策略中，核心部分（通常是数据）始终运行并复制，环境的其余部分只在恢复时才配置或启动。'],
['Backup and restore has no live replication.','Multi-site serves traffic from both Regions all the time.','Warm standby keeps a running, scaled-down copy of the application.'],
['备份与还原没有实时复制。','多站点始终从两个区域提供流量。','温备用会保留一个正在运行、缩小规模的应用副本。']);

Q('1.2','multi',[0,1],
['Which TWO practices follow the AWS principle of designing for failure? (Select TWO.)',
 ['Deploy the application across multiple Availability Zones','Use health checks so traffic is routed away from unhealthy instances','Run the production database on a single instance with no backups','Hard-code server IP addresses into the application','Assume hardware will never fail'],
 'Designing for failure means expecting components to fail and building redundancy and automatic recovery around them.'],
['以下哪两项做法遵循了 AWS“为故障而设计”的原则？（选择两项。）',
 ['在多个可用区中部署应用','使用健康检查，让流量绕开不健康的实例','在没有备份的单个实例上运行生产数据库','把服务器 IP 地址硬编码到应用中','假设硬件永远不会出故障'],
 '为故障而设计意味着预期组件会出故障，并围绕它们构建冗余和自动恢复。'],
['A single instance with no backups is a single point of failure.','Hard-coded IPs break when a server is replaced.','Hardware does fail; the principle is to plan for it.'],
['没有备份的单个实例就是单点故障。','服务器被替换后，硬编码的 IP 就会失效。','硬件确实会出故障，原则是为此做好规划。']);

/* ---------- 1.3 migration ---------- */
Q('1.3','single',[0],
['A company has 2,000 on-premises servers and wants to know which ones talk to each other before grouping them into migration waves. Which service collects this dependency data?',
 ['AWS Application Discovery Service','AWS Artifact','Amazon Route 53','AWS Budgets'],
 'Application Discovery Service gathers configuration, utilization and network dependency data from on-premises servers to plan migration waves.'],
['某公司有 2000 台本地服务器，希望在把它们划分为迁移批次之前，了解哪些服务器之间相互通信。哪项服务收集这些依赖关系数据？',
 ['AWS Application Discovery Service','AWS Artifact','Amazon Route 53','AWS Budgets'],
 'Application Discovery Service 从本地服务器收集配置、利用率和网络依赖关系数据，用于规划迁移批次。'],
['Artifact provides compliance reports.','Route 53 is DNS.','Budgets tracks AWS spending.'],
['Artifact 提供合规报告。','Route 53 是 DNS 服务。','Budgets 跟踪 AWS 支出。']);

Q('1.3','single',[0],
['Which AWS service provides one dashboard to see the status of server and database migrations running in several tools?',
 ['AWS Migration Hub','AWS Control Tower','Amazon Detective','AWS Health Dashboard'],
 'Migration Hub gives a single place to track migrations across AWS and partner tools.'],
['哪项 AWS 服务提供一个仪表板，查看在多个工具中运行的服务器和数据库迁移的状态？',
 ['AWS Migration Hub','AWS Control Tower','Amazon Detective','AWS Health Dashboard'],
 'Migration Hub 提供一个统一的位置，跟踪跨 AWS 和合作伙伴工具的迁移。'],
['Control Tower sets up multi-account environments.','Detective investigates security findings.','The Health Dashboard shows AWS service events.'],
['Control Tower 用于搭建多账户环境。','Detective 调查安全发现。','Health Dashboard 显示 AWS 服务事件。']);

Q('1.3','single',[0],
['A company wants to rehost 300 Windows and Linux servers on AWS with minimal downtime, using continuous block-level replication and a quick cutover. Which service should it use?',
 ['AWS Application Migration Service','AWS Schema Conversion Tool','Amazon S3 Transfer Acceleration','AWS Service Catalog'],
 'Application Migration Service continuously replicates source servers to AWS and lets you test and cut over with minimal downtime.'],
['某公司希望通过持续的块级复制和快速切换，以最短停机时间把 300 台 Windows 和 Linux 服务器重新托管到 AWS 上。应使用哪项服务？',
 ['AWS Application Migration Service','AWS Schema Conversion Tool','Amazon S3 Transfer Acceleration','AWS Service Catalog'],
 'Application Migration Service 把源服务器持续复制到 AWS，让你以最短停机时间进行测试和切换。'],
['SCT converts database schemas.','Transfer Acceleration speeds up S3 uploads.','Service Catalog offers approved products to teams.'],
['SCT 用于转换数据库架构。','Transfer Acceleration 用于加快 S3 上传。','Service Catalog 向团队提供经批准的产品。']);

/* ---------- 2.2 compliance and security services ---------- */
Q('2.2','single',[0],
['A healthcare startup wants to store patient data on AWS. Which statement about HIPAA is correct?',
 ['The company must use HIPAA-eligible services, accept the Business Associate Addendum and configure its workloads to meet HIPAA requirements','AWS automatically makes every workload HIPAA compliant','HIPAA applies only to on-premises data centres','Encrypting data in Amazon S3 alone makes a workload HIPAA compliant'],
 'AWS offers HIPAA-eligible services and a BAA (through AWS Artifact), but compliance of the application remains the customer’s responsibility.'],
['某医疗初创公司希望在 AWS 上存储患者数据。关于 HIPAA，哪种说法正确？',
 ['公司必须使用符合 HIPAA 要求的服务，接受商业伙伴附录，并配置其工作负载以满足 HIPAA 要求','AWS 会自动让每个工作负载符合 HIPAA','HIPAA 只适用于本地数据中心','仅加密 Amazon S3 中的数据就能让工作负载符合 HIPAA'],
 'AWS 提供符合 HIPAA 要求的服务和 BAA（通过 AWS Artifact 获取），但应用的合规仍是客户的责任。'],
['Compliance is shared; nothing is automatic.','HIPAA applies to the data wherever it is stored.','Encryption is one control, not full compliance.'],
['合规是共同责任，没有什么是自动的。','无论数据存储在哪里，HIPAA 都适用。','加密只是一项控制措施，而不是完整的合规。']);

Q('2.2','single',[0],
['Which service gives a company dedicated, single-tenant hardware to generate and store its own encryption keys, with keys that AWS cannot access?',
 ['AWS CloudHSM','AWS Secrets Manager','Amazon Macie','AWS Certificate Manager'],
 'CloudHSM provides dedicated, FIPS-validated hardware security modules that you control exclusively.'],
['哪项服务为公司提供专用的单租户硬件，用于生成和存储自己的加密密钥，且 AWS 无法访问这些密钥？',
 ['AWS CloudHSM','AWS Secrets Manager','Amazon Macie','AWS Certificate Manager'],
 'CloudHSM 提供经过 FIPS 验证、由你独占控制的专用硬件安全模块。'],
['Secrets Manager stores secrets but is a managed multi-tenant service.','Macie discovers sensitive data in S3.','ACM manages TLS certificates.'],
['Secrets Manager 存储机密，但它是托管的多租户服务。','Macie 发现 S3 中的敏感数据。','ACM 管理 TLS 证书。']);

Q('2.2','single',[0],
['A security analyst sees a GuardDuty finding about an IAM user making unusual API calls and wants to see related activity over time to understand what happened. Which service should the analyst open next?',
 ['Amazon Detective','AWS Artifact','AWS License Manager','Amazon Polly'],
 'Detective builds a linked view of log data so analysts can investigate the scope and root cause of findings.'],
['安全分析师看到一条 GuardDuty 发现，内容是某个 IAM 用户发起了异常 API 调用，希望查看随时间推移的相关活动以了解发生了什么。分析师接下来应打开哪项服务？',
 ['Amazon Detective','AWS Artifact','AWS License Manager','Amazon Polly'],
 'Detective 为日志数据构建关联视图，帮助分析师调查安全发现的范围和根本原因。'],
['Artifact provides compliance reports.','License Manager tracks software licences.','Polly converts text to speech.'],
['Artifact 提供合规报告。','License Manager 跟踪软件许可证。','Polly 把文本转换为语音。']);

Q('2.2','single',[0],
['A company wants to capture information about the IP traffic going to and from network interfaces in its VPC to troubleshoot connectivity and spot unusual traffic. What should it enable?',
 ['VPC Flow Logs','S3 Transfer Acceleration','AWS Artifact reports','Amazon Polly'],
 'VPC Flow Logs record metadata about IP traffic (source, destination, ports, accept or reject) and can be sent to CloudWatch Logs or S3.'],
['某公司希望捕获其 VPC 中进出网络接口的 IP 流量信息，用于排查连接问题和发现异常流量。应启用什么？',
 ['VPC 流日志','S3 Transfer Acceleration','AWS Artifact 报告','Amazon Polly'],
 'VPC 流日志记录 IP 流量的元数据（源、目标、端口、接受或拒绝），可以发送到 CloudWatch Logs 或 S3。'],
['Transfer Acceleration speeds up uploads to S3.','Artifact reports describe AWS compliance.','Polly converts text to speech.'],
['Transfer Acceleration 用于加快向 S3 的上传。','Artifact 报告描述的是 AWS 的合规情况。','Polly 把文本转换为语音。']);

Q('2.2','multi',[0,1],
['A company must prove to auditors that encryption is enabled on all EBS volumes and be alerted if someone creates an unencrypted one. Which TWO services help? (Select TWO.)',
 ['AWS Config, with a rule that checks EBS encryption','AWS Security Hub, which runs best-practice checks and gathers findings','Amazon Lightsail','Amazon Polly','AWS Snowball Edge'],
 'Config rules continuously evaluate resource settings such as EBS encryption, and Security Hub includes such checks and centralizes the findings.'],
['某公司必须向审计人员证明所有 EBS 卷都启用了加密，并在有人创建未加密的卷时收到告警。哪两项服务有帮助？（选择两项。）',
 ['AWS Config，配合检查 EBS 加密的规则','AWS Security Hub，运行最佳实践检查并汇总安全发现','Amazon Lightsail','Amazon Polly','AWS Snowball Edge'],
 'Config 规则持续评估 EBS 加密等资源设置，Security Hub 也包含此类检查并集中管理安全发现。'],
['Lightsail is a simple compute service.','Polly converts text to speech.','Snowball Edge moves data offline.'],
['Lightsail 是简单的计算服务。','Polly 把文本转换为语音。','Snowball Edge 以离线方式迁移数据。']);

/* ---------- 2.3 identity ---------- */
Q('2.3','single',[0],
['A company wants its Windows workloads on AWS to join a managed Microsoft Active Directory domain without running domain controllers itself. Which service should it use?',
 ['AWS Directory Service (AWS Managed Microsoft AD)','Amazon Cognito user pools','AWS Artifact','AWS Resource Access Manager'],
 'AWS Directory Service provides a managed Microsoft Active Directory in AWS, or AD Connector to use an existing on-premises directory.'],
['某公司希望其在 AWS 上的 Windows 工作负载加入托管的 Microsoft Active Directory 域，而无需自己运行域控制器。应使用哪项服务？',
 ['AWS Directory Service（AWS Managed Microsoft AD）','Amazon Cognito 用户池','AWS Artifact','AWS Resource Access Manager'],
 'AWS Directory Service 在 AWS 中提供托管的 Microsoft Active Directory，也可以通过 AD Connector 使用现有的本地目录。'],
['Cognito is for app users, not Windows domains.','Artifact provides compliance reports.','RAM shares resources between accounts.'],
['Cognito 面向应用用户，而不是 Windows 域。','Artifact 提供合规报告。','RAM 在账户之间共享资源。']);

Q('2.3','single',[0],
['A shopping app needs customer sign-up and sign-in with email or social providers such as Google, and must give signed-in users temporary access to upload photos to S3. Which service fits?',
 ['Amazon Cognito','AWS IAM Identity Center','AWS Directory Service','IAM users for every customer'],
 'Cognito user pools handle customer sign-up and sign-in, and identity pools can exchange those identities for temporary AWS credentials.'],
['某购物应用需要让客户通过电子邮件或 Google 等社交身份提供商注册和登录，并且必须为已登录的用户提供上传照片到 S3 的临时权限。哪项服务合适？',
 ['Amazon Cognito','AWS IAM Identity Center','AWS Directory Service','为每位客户创建 IAM 用户'],
 'Cognito 用户池处理客户注册和登录，身份池可以把这些身份换成临时 AWS 凭证。'],
['Identity Center is for the workforce, not app customers.','Directory Service provides Active Directory for workloads.','IAM users are not designed for millions of app customers.'],
['Identity Center 面向员工，而不是应用的客户。','Directory Service 为工作负载提供 Active Directory。','IAM 用户并不是为数百万应用客户设计的。']);

Q('2.3','single',[0],
['A database password used by a Lambda function must change every 30 days without code changes or downtime. Which service is designed for this?',
 ['AWS Secrets Manager with automatic rotation','A plain-text file in the Lambda deployment package','An IAM password policy','Amazon S3 Object Lock'],
 'Secrets Manager rotates secrets on a schedule and the function retrieves the current value at run time.'],
['某 Lambda 函数使用的数据库密码必须每 30 天更换一次，且不需要修改代码、不能停机。哪项服务专为此设计？',
 ['启用自动轮换的 AWS Secrets Manager','放在 Lambda 部署包中的明文文件','IAM 密码策略','Amazon S3 对象锁定'],
 'Secrets Manager 按计划轮换机密，函数在运行时获取当前值。'],
['Plain-text secrets in code are insecure and need redeploys to change.','Password policies apply to IAM user passwords, not database passwords.','Object Lock prevents deletion; it does not rotate secrets.'],
['代码中的明文机密不安全，而且更改时需要重新部署。','密码策略适用于 IAM 用户密码，而不是数据库密码。','对象锁定用于防止删除，不会轮换机密。']);

Q('2.3','single',[0],
['A company wants to share one set of VPC subnets from a central networking account with several other accounts in its organization. Which service should it use?',
 ['AWS Resource Access Manager (AWS RAM)','AWS Artifact','Amazon Cognito','AWS Budgets'],
 'AWS RAM lets you share supported resources, such as subnets, Transit Gateways and License Manager configurations, across accounts.'],
['某公司希望把中央网络账户中的一组 VPC 子网共享给组织内的其他几个账户。应使用哪项服务？',
 ['AWS Resource Access Manager（AWS RAM）','AWS Artifact','Amazon Cognito','AWS Budgets'],
 'AWS RAM 让你在账户之间共享受支持的资源，例如子网、Transit Gateway 和 License Manager 配置。'],
['Artifact provides compliance reports.','Cognito handles app user sign-in.','Budgets tracks spending.'],
['Artifact 提供合规报告。','Cognito 处理应用用户登录。','Budgets 跟踪支出。']);

Q('2.3','multi',[0,1],
['Which TWO statements about IAM policies are correct? (Select TWO.)',
 ['An explicit deny in any policy overrides an allow','By default, a new IAM user has no permissions','A new IAM user has full administrator access by default','Allow statements always override deny statements','IAM policies apply only in the us-east-1 Region'],
 'IAM starts with an implicit deny, allows grant access, and any explicit deny wins over allows.'],
['关于 IAM 策略，哪两种说法正确？（选择两项。）',
 ['任何策略中的明确拒绝都会覆盖允许','默认情况下，新的 IAM 用户没有任何权限','新的 IAM 用户默认拥有完全的管理员权限','允许语句总是覆盖拒绝语句','IAM 策略只在 us-east-1 区域生效'],
 'IAM 从隐式拒绝开始，允许语句授予访问权限，而任何明确拒绝都优先于允许。'],
['New users start with no permissions.','Explicit denies win over allows.','IAM is global and applies in every Region.'],
['新用户一开始没有任何权限。','明确拒绝优先于允许。','IAM 是全球性的，在每个区域都适用。']);

/* ---------- 2.4 security resources ---------- */
Q('2.4','single',[0],
['A company with 30 AWS accounts wants to make sure every new account automatically gets the same AWS WAF rules and security group policies. Which service enforces this centrally?',
 ['AWS Firewall Manager','Amazon Inspector','Amazon Macie','AWS Artifact'],
 'Firewall Manager applies firewall policies (WAF, Shield Advanced, security groups, Network Firewall) across accounts, including new ones, in AWS Organizations.'],
['某公司有 30 个 AWS 账户，希望每个新账户都能自动获得相同的 AWS WAF 规则和安全组策略。哪项服务可以集中强制执行？',
 ['AWS Firewall Manager','Amazon Inspector','Amazon Macie','AWS Artifact'],
 'Firewall Manager 在 AWS Organizations 中跨账户（包括新账户）应用防火墙策略（WAF、Shield Advanced、安全组、Network Firewall）。'],
['Inspector scans for vulnerabilities.','Macie finds sensitive data.','Artifact provides compliance reports.'],
['Inspector 扫描漏洞。','Macie 查找敏感数据。','Artifact 提供合规报告。']);

Q('2.4','single',[0],
['Which AWS Trusted Advisor check category would flag an IAM access key that has not been rotated for a long time or S3 buckets with open access?',
 ['Security','Cost optimization','Performance','Service quotas'],
 'Trusted Advisor security checks cover items such as open S3 bucket permissions, security groups with unrestricted access, root MFA and IAM key rotation.'],
['哪个 AWS Trusted Advisor 检查类别会标记长时间未轮换的 IAM 访问密钥或开放访问的 S3 存储桶？',
 ['安全性','成本优化','性能','服务配额'],
 'Trusted Advisor 安全检查涵盖开放的 S3 存储桶权限、不受限制的安全组、根用户 MFA 和 IAM 密钥轮换等项目。'],
['Cost optimization flags idle or underused resources.','Performance flags things like overused instances.','Service quotas flags usage close to limits.'],
['成本优化标记闲置或未充分使用的资源。','性能标记过度使用的实例等问题。','服务配额标记接近限额的使用情况。']);

/* ---------- 4.1 pricing ---------- */
Q('4.1','single',[0],
['A company wants a 1-year commitment that gives the biggest discount for a specific EC2 instance family in one Region, and it does not need flexibility to switch families. Which option fits best?',
 ['EC2 Instance Savings Plans','Compute Savings Plans','On-Demand Instances','Spot Instances'],
 'EC2 Instance Savings Plans give a larger discount than Compute Savings Plans in exchange for committing to one instance family in one Region.'],
['某公司希望通过 1 年期承诺，为某个区域中的特定 EC2 实例系列获得最大折扣，并且不需要更换系列的灵活性。哪个选项最合适？',
 ['EC2 Instance Savings Plans','Compute Savings Plans','按需型实例','竞价型实例'],
 'EC2 Instance Savings Plans 要求承诺使用某个区域中的一个实例系列，作为交换，折扣比 Compute Savings Plans 更大。'],
['Compute Savings Plans are more flexible but give a smaller discount.','On-Demand has no discount.','Spot can be interrupted and is not a commitment.'],
['Compute Savings Plans 更灵活，但折扣较小。','按需型实例没有折扣。','竞价型实例可能被中断，也不是承诺。']);

Q('4.1','multi',[0,1],
['Which TWO workloads are good candidates for Spot Instances? (Select TWO.)',
 ['A big data analysis job that can resume from checkpoints','A stateless image rendering farm that can lose a node at any time','A primary production database that must never stop','A payment system with strict uptime requirements','A single-instance domain controller'],
 'Spot suits flexible, fault-tolerant, interruptible workloads. Critical stateful systems should not depend on capacity that can be reclaimed.'],
['以下哪两项工作负载适合使用竞价型实例？（选择两项。）',
 ['可以从检查点恢复的大数据分析作业','无状态、随时可以丢失一个节点的图像渲染集群','绝不能停止的主生产数据库','对正常运行时间有严格要求的支付系统','单实例的域控制器'],
 '竞价型实例适合灵活、容错、可中断的工作负载。关键的有状态系统不应依赖可能被收回的容量。'],
['A primary database must not be interrupted.','Strict uptime rules out interruptible capacity.','A single domain controller is a critical single point.'],
['主数据库不能被中断。','严格的正常运行时间要求排除了可中断容量。','单个域控制器是关键的单点。']);

Q('4.1','single',[0],
['A company sends 50 TB of data each month from its EC2 web servers to users on the internet. Which change is MOST likely to reduce data transfer costs while improving performance?',
 ['Serve the content through Amazon CloudFront','Move the servers to a larger instance type','Add more Availability Zones','Switch to Dedicated Hosts'],
 'CloudFront caches content at edge locations; transfer from AWS origins to CloudFront is free and CloudFront rates are often lower than direct data transfer out.'],
['某公司每月从其 EC2 Web 服务器向互联网用户发送 50 TB 数据。哪项更改最有可能在提升性能的同时降低数据传输成本？',
 ['通过 Amazon CloudFront 提供内容','把服务器换成更大的实例类型','增加更多可用区','改用专属主机'],
 'CloudFront 在边缘站点缓存内容；从 AWS 源站传输到 CloudFront 是免费的，而且 CloudFront 的价格通常低于直接传出数据的价格。'],
['A larger instance does not reduce data transfer charges.','More AZs can add cross-AZ transfer costs.','Dedicated Hosts change tenancy, not transfer costs.'],
['更大的实例不会降低数据传输费用。','更多可用区可能增加跨可用区传输成本。','专属主机改变的是租期，而不是传输成本。']);

/* ---------- 4.2 billing ---------- */
Q('4.2','single',[0],
['A company has three AWS accounts that each store 40 TB in Amazon S3. Why would combining them under AWS Organizations consolidated billing lower the S3 storage bill?',
 ['Usage is added together, so the combined 120 TB reaches cheaper volume pricing tiers sooner','AWS gives a fixed 50% discount to every organization','S3 becomes free for member accounts','Consolidated billing turns S3 Standard into S3 Glacier automatically'],
 'With consolidated billing, AWS treats all accounts as one for volume pricing, so tiered prices apply to total usage.'],
['某公司有三个 AWS 账户，每个账户在 Amazon S3 中存储 40 TB 数据。为什么在 AWS Organizations 整合账单下合并这些账户会降低 S3 存储费用？',
 ['用量会合并计算，合计的 120 TB 能更快达到更便宜的批量定价阶梯','AWS 会给每个组织固定 50% 的折扣','成员账户的 S3 变为免费','整合账单会自动把 S3 Standard 转换为 S3 Glacier'],
 '使用整合账单时，AWS 在批量定价上把所有账户视为一个账户，因此阶梯价格按总用量计算。'],
['There is no fixed organization discount.','S3 is not free for member accounts.','Billing does not change storage classes.'],
['不存在固定的组织折扣。','成员账户的 S3 并不免费。','账单不会改变存储类别。']);

Q('4.2','single',[0],
['An analyst needs hourly, resource-level billing data with cost allocation tags as columns, to load into a data warehouse. Which source should they use?',
 ['AWS Cost and Usage Reports (through AWS Data Exports)','AWS Budgets email alerts','The AWS Pricing Calculator','AWS Trusted Advisor'],
 'The Cost and Usage Report delivers the most granular billing data, including resource IDs and tag columns, to Amazon S3.'],
['某分析师需要按小时、精确到资源级别并以成本分配标签为列的账单数据，以加载到数据仓库中。应使用哪个数据源？',
 ['AWS 成本和使用情况报告（通过 AWS Data Exports）','AWS Budgets 电子邮件告警','AWS 定价计算器','AWS Trusted Advisor'],
 '成本和使用情况报告把最细粒度的账单数据（包括资源 ID 和标签列）交付到 Amazon S3。'],
['Budgets alerts are summaries, not line items.','The Pricing Calculator estimates planned costs.','Trusted Advisor gives recommendations, not billing data.'],
['Budgets 告警是汇总信息，而不是逐项明细。','定价计算器估算的是计划中的成本。','Trusted Advisor 提供建议，而不是账单数据。']);

Q('4.2','single',[0],
['A team keeps running out of the default limit for Elastic IP addresses in a Region. Where can it view the limit and request an increase?',
 ['Service Quotas','AWS Artifact','Amazon Inspector','AWS Marketplace'],
 'Service Quotas shows your quotas for AWS services in one place and lets you request increases.'],
['某团队在一个区域中反复用完弹性 IP 地址的默认限额。它可以在哪里查看限额并申请提高？',
 ['Service Quotas','AWS Artifact','Amazon Inspector','AWS Marketplace'],
 'Service Quotas 在一个地方显示你的 AWS 服务配额，并允许你申请提高。'],
['Artifact provides compliance reports.','Inspector scans for vulnerabilities.','Marketplace sells third-party software.'],
['Artifact 提供合规报告。','Inspector 扫描漏洞。','Marketplace 销售第三方软件。']);

Q('4.2','single',[0],
['A company wants machine learning–based recommendations on whether its EC2 instances, EBS volumes and Lambda functions are over-provisioned. Which service provides them?',
 ['AWS Compute Optimizer','AWS Artifact','Amazon Macie','AWS Directory Service'],
 'Compute Optimizer analyses utilization metrics and recommends optimal resource configurations to reduce cost and improve performance.'],
['某公司希望获得基于机器学习的建议，判断其 EC2 实例、EBS 卷和 Lambda 函数是否配置过度。哪项服务提供这些建议？',
 ['AWS Compute Optimizer','AWS Artifact','Amazon Macie','AWS Directory Service'],
 'Compute Optimizer 分析利用率指标，推荐最佳的资源配置，以降低成本并提升性能。'],
['Artifact provides compliance reports.','Macie finds sensitive data.','Directory Service provides Active Directory.'],
['Artifact 提供合规报告。','Macie 查找敏感数据。','Directory Service 提供 Active Directory。']);

Q('4.2','single',[0],
['A company wants to track how many software licences it uses across EC2 and on-premises servers and stop new instances from launching when it runs out. Which service should it use?',
 ['AWS License Manager','AWS Budgets','AWS Cost Explorer','Amazon Inspector'],
 'License Manager tracks licence usage against rules you define and can block launches that would exceed your licence count.'],
['某公司希望跟踪其在 EC2 和本地服务器上使用了多少软件许可证，并在许可证用完时阻止启动新实例。应使用哪项服务？',
 ['AWS License Manager','AWS Budgets','AWS Cost Explorer','Amazon Inspector'],
 'License Manager 根据你定义的规则跟踪许可证使用情况，并可以阻止会超出许可证数量的启动。'],
['Budgets tracks cost and usage, not licence counts.','Cost Explorer analyses spending.','Inspector scans for vulnerabilities.'],
['Budgets 跟踪成本和用量，而不是许可证数量。','Cost Explorer 分析支出。','Inspector 扫描漏洞。']);

/* ---------- 4.3 support and resources ---------- */
Q('4.3','single',[0],
['A company has Basic Support and needs help from an AWS engineer to troubleshoot an EC2 networking issue. What must it do?',
 ['Upgrade to a paid support plan, because Basic Support does not include technical support cases','Open a technical case under Basic Support','Contact the AWS Trust & Safety team','Post the issue in AWS Artifact'],
 'Basic Support covers account and billing questions and self-service resources; technical cases with engineers require a paid plan.'],
['某公司使用 Basic Support，需要 AWS 工程师帮助排查 EC2 网络问题。它必须怎么做？',
 ['升级到付费支持计划，因为 Basic Support 不包含技术支持案例','在 Basic Support 下提交技术案例','联系 AWS 信任与安全团队','在 AWS Artifact 中发布问题'],
 'Basic Support 涵盖账户和账单问题以及自助资源；由工程师处理的技术案例需要付费计划。'],
['Basic Support cannot open technical cases.','Trust & Safety handles abuse reports.','Artifact provides compliance documents.'],
['Basic Support 无法提交技术案例。','信任与安全团队处理滥用举报。','Artifact 提供合规文档。']);

Q('4.3','single',[0],
['Which AWS team works with customers to design solutions and answer architecture questions, often during pre-sales and planning?',
 ['AWS Solutions Architects','AWS Trust & Safety','AWS Artifact','AWS Billing Conductor'],
 'AWS Solutions Architects help customers design secure, reliable and cost-effective architectures.'],
['哪个 AWS 团队与客户合作设计解决方案并解答架构问题，通常在售前和规划阶段？',
 ['AWS 解决方案架构师','AWS 信任与安全团队','AWS Artifact','AWS Billing Conductor'],
 'AWS 解决方案架构师帮助客户设计安全、可靠且经济高效的架构。'],
['Trust & Safety handles abuse reports.','Artifact is a document portal, not a team.','Billing Conductor customizes billing data.'],
['信任与安全团队处理滥用举报。','Artifact 是文档门户，不是团队。','Billing Conductor 用于自定义账单数据。']);

Q('4.3','multi',[0,1],
['Which TWO resources are free for every AWS customer, without a paid support plan? (Select TWO.)',
 ['AWS re:Post','AWS documentation and whitepapers','A designated Technical Account Manager','24/7 phone access to cloud support engineers','Full Trusted Advisor checks'],
 're:Post, documentation, whitepapers and the Knowledge Center are free. A TAM, engineer access and full Trusted Advisor checks require paid plans.'],
['以下哪两项资源对所有 AWS 客户免费，无需付费支持计划？（选择两项。）',
 ['AWS re:Post','AWS 文档和白皮书','指定的技术客户经理','全天候电话联系云支持工程师','Trusted Advisor 全部检查'],
 're:Post、文档、白皮书和知识中心都是免费的。TAM、工程师支持和 Trusted Advisor 全部检查都需要付费计划。'],
['A TAM comes with Enterprise-level support.','Engineer access requires a paid plan.','Full checks require a paid plan.'],
['TAM 属于企业级支持。','联系工程师需要付费计划。','全部检查需要付费计划。']);

Q('4.3','single',[0],
['A company wants to hire an AWS Partner that is a system integrator to migrate its applications. Where should it search?',
 ['AWS Partner Solutions Finder in the AWS Partner Network','AWS Artifact','AWS Health Dashboard','AWS Service Catalog'],
 'The AWS Partner Network lets you find validated consulting and system integrator partners by specialty and location.'],
['某公司希望聘请一家身为系统集成商的 AWS 合作伙伴来迁移其应用。应在哪里搜索？',
 ['AWS 合作伙伴网络中的 AWS Partner Solutions Finder','AWS Artifact','AWS Health Dashboard','AWS Service Catalog'],
 '通过 AWS 合作伙伴网络，可以按专长和地区找到经过验证的咨询和系统集成商合作伙伴。'],
['Artifact provides compliance reports.','The Health Dashboard shows service events.','Service Catalog lists your own approved products.'],
['Artifact 提供合规报告。','Health Dashboard 显示服务事件。','Service Catalog 列出你自己经批准的产品。']);
})();
