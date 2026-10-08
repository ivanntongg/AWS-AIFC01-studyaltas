/* CLF-C02 questions, domain 2: Security and Compliance. Original questions written against the exam guide. Append-only. */
(function(){
function Q(k, t, a, en, zh, wEn, wZh){
  var q = {k: k, d: 'd' + k.charAt(0), t: t, a: a, en: {q: en[0], o: en[1], x: en[2]}, zh: {q: zh[0], o: zh[1], x: zh[2]}};
  var pad = a.map(function(){ return ''; }); q.w = {en: pad.concat(wEn), zh: pad.concat(wZh)};
  CLF.qs.push(q);
}

/* ================= 2.1 Shared responsibility model ================= */
Q('2.1','single',[0],
['Under the AWS shared responsibility model, who is responsible for patching the guest operating system on an Amazon EC2 instance?',
 ['The customer','AWS','AWS and the customer equally','The AWS Partner that sold the instance'],
 'EC2 is infrastructure as a service: the customer manages the guest OS (including updates and security patches), applications and security group configuration.'],
['根据 AWS 责任共担模式，谁负责为 Amazon EC2 实例上的客户机操作系统打补丁？',
 ['客户','AWS','AWS 和客户平均分担','销售该实例的 AWS 合作伙伴'],
 'EC2 属于基础设施即服务：客户负责管理客户机操作系统（包括更新和安全补丁）、应用程序以及安全组配置。'],
['AWS patches the host and hypervisor, not the guest OS on EC2.','The guest OS is clearly the customer’s responsibility.','Partners are not part of the shared responsibility model for your instances.'],
['AWS 负责修补主机和虚拟机管理程序，而不是 EC2 上的客户机操作系统。','客户机操作系统明确属于客户的责任。','合作伙伴不属于你的实例的责任共担模式。']);

Q('2.1','single',[0],
['Which task is the responsibility of AWS under the shared responsibility model?',
 ['Physical security of data centres','Configuring security groups','Encrypting customer data','Managing IAM user permissions'],
 'AWS is responsible for security OF the cloud: facilities, hardware, network infrastructure and virtualization. Customers handle security IN the cloud.'],
['根据责任共担模式，哪项任务由 AWS 负责？',
 ['数据中心的物理安全','配置安全组','加密客户数据','管理 IAM 用户权限'],
 'AWS 负责“云本身的安全”：设施、硬件、网络基础设施和虚拟化。客户负责“云中的安全”。'],
['Security groups are configured by the customer.','Encrypting data is a customer choice and responsibility.','IAM permissions are managed by the customer.'],
['安全组由客户配置。','加密数据是客户的选择和责任。','IAM 权限由客户管理。']);

Q('2.1','single',[0],
['A company uses Amazon RDS. Which task remains the customer’s responsibility?',
 ['Managing database user accounts and network access rules','Patching the database engine’s underlying operating system','Replacing failed storage hardware','Maintaining the physical network'],
 'With RDS, AWS patches the OS and database software and runs the hardware. The customer still manages database users, security groups, encryption settings and data.'],
['某公司使用 Amazon RDS。哪项任务仍由客户负责？',
 ['管理数据库用户账户和网络访问规则','为数据库引擎底层的操作系统打补丁','更换出故障的存储硬件','维护物理网络'],
 '使用 RDS 时，由 AWS 为操作系统和数据库软件打补丁并运行硬件。客户仍需管理数据库用户、安全组、加密设置和数据。'],
['AWS patches the underlying OS for RDS.','AWS replaces hardware.','AWS maintains the physical network.'],
['RDS 底层的操作系统由 AWS 打补丁。','硬件由 AWS 更换。','物理网络由 AWS 维护。']);

Q('2.1','single',[0],
['How does the customer’s security responsibility change when moving a workload from Amazon EC2 to AWS Lambda?',
 ['The customer no longer manages the operating system or runtime patching, but still secures its code, data and IAM permissions','The customer becomes responsible for the physical servers','The customer no longer has any security responsibility','The customer must now patch the hypervisor'],
 'The more managed (abstracted) the service, the less the customer manages. With Lambda, AWS runs the OS and runtime; the customer secures function code, data and access.'],
['把工作负载从 Amazon EC2 迁移到 AWS Lambda 后，客户的安全责任有什么变化？',
 ['客户不再管理操作系统或运行时补丁，但仍需保护自己的代码、数据和 IAM 权限','客户开始负责物理服务器','客户不再承担任何安全责任','客户现在必须修补虚拟机管理程序'],
 '服务的托管（抽象）程度越高，客户需要管理的就越少。使用 Lambda 时，操作系统和运行时由 AWS 负责；客户负责保护函数代码、数据和访问权限。'],
['AWS always manages physical servers.','Customers always keep some responsibility, such as data and access.','The hypervisor is always AWS’s responsibility.'],
['物理服务器始终由 AWS 管理。','客户始终保留部分责任，例如数据和访问权限。','虚拟机管理程序始终由 AWS 负责。']);

Q('2.1','multi',[0,1],
['Which TWO are customer responsibilities when using Amazon S3? (Select TWO.)',
 ['Setting bucket policies and access permissions','Choosing whether to encrypt objects and managing the keys if self-managed','Maintaining the hardware that stores the objects','Ensuring S3 storage is durable across Availability Zones','Patching the S3 service software'],
 'For S3, customers control access (bucket policies, Block Public Access) and encryption choices. AWS runs and patches the service and designs it for durability.'],
['使用 Amazon S3 时，哪两项属于客户责任？（选择两项。）',
 ['设置存储桶策略和访问权限','选择是否加密对象，若自行管理密钥则负责管理密钥','维护存储对象的硬件','确保 S3 存储在多个可用区之间的持久性','为 S3 服务软件打补丁'],
 '对于 S3，客户控制访问权限（存储桶策略、阻止公有访问）和加密选择。AWS 负责运行和修补该服务，并为持久性进行设计。'],
['Hardware is AWS’s responsibility.','Durability is built into the service by AWS.','AWS patches the S3 service.'],
['硬件由 AWS 负责。','持久性由 AWS 内置于服务中。','S3 服务由 AWS 打补丁。']);

Q('2.1','single',[0],
['Which control is a shared control between AWS and the customer?',
 ['Patch management','Physical and environmental controls','Data centre access logs','Hypervisor maintenance'],
 'Shared controls apply to both layers in different contexts: patch management, configuration management, and awareness and training. AWS patches its infrastructure; customers patch their guest OS and applications.'],
['哪项控制属于 AWS 与客户之间的共享控制？',
 ['补丁管理','物理和环境控制','数据中心访问日志','虚拟机管理程序维护'],
 '共享控制在不同的层面同时适用于双方：补丁管理、配置管理以及意识和培训。AWS 为其基础设施打补丁；客户为客户机操作系统和应用程序打补丁。'],
['Physical and environmental controls are inherited from AWS.','Data centre access is controlled only by AWS.','The hypervisor is maintained only by AWS.'],
['物理和环境控制由客户从 AWS 继承。','数据中心访问只由 AWS 控制。','虚拟机管理程序只由 AWS 维护。']);

Q('2.1','single',[0],
['Under the shared responsibility model, who configures the firewall rules (security groups) for an Amazon EC2 instance?',
 ['The customer','AWS','AWS Support','The AWS Trust & Safety team'],
 'Security groups are virtual firewalls that the customer configures to allow the traffic their application needs.'],
['根据责任共担模式，谁为 Amazon EC2 实例配置防火墙规则（安全组）？',
 ['客户','AWS','AWS Support','AWS 信任与安全团队'],
 '安全组是虚拟防火墙，由客户配置以允许其应用所需的流量。'],
['AWS provides the feature but does not configure your rules.','Support can advise but does not own your configuration.','Trust & Safety handles abuse reports.'],
['AWS 提供该功能，但不会配置你的规则。','Support 可以提供建议，但不负责你的配置。','信任与安全团队处理滥用举报。']);

Q('2.1','single',[0],
['Which statement BEST summarizes the AWS shared responsibility model?',
 ['AWS is responsible for security of the cloud; customers are responsible for security in the cloud','AWS is responsible for all security once data is uploaded','Customers are responsible for the security of AWS data centres','Security responsibilities are identical for every AWS service'],
 'AWS protects the infrastructure that runs all services; customers protect what they put in the cloud and how they configure it. The split depends on the service.'],
['哪种说法最能概括 AWS 责任共担模式？',
 ['AWS 负责云本身的安全；客户负责云中的安全','数据上传后所有安全都由 AWS 负责','客户负责 AWS 数据中心的安全','每项 AWS 服务的安全责任都完全相同'],
 'AWS 保护运行所有服务的基础设施；客户保护他们放入云中的内容以及配置方式。具体分工取决于所用的服务。'],
['Customers always retain responsibility for their data and access.','Data centres are AWS’s responsibility.','Responsibilities vary by service type.'],
['客户始终对自己的数据和访问权限负责。','数据中心由 AWS 负责。','责任会因服务类型而异。']);

Q('2.1','single',[0],
['A company runs a database on Amazon EC2 instead of using Amazon RDS. Which additional responsibility does it take on?',
 ['Installing, patching and backing up the database software and the operating system','Physical security of the EC2 host','Maintaining the AWS global network','Replacing failed disks in the data centre'],
 'Running a database on EC2 means the customer manages the OS and database, including patches, backups and high availability, which RDS would otherwise handle.'],
['某公司在 Amazon EC2 上运行数据库，而不是使用 Amazon RDS。它因此承担了哪项额外责任？',
 ['安装、修补和备份数据库软件及操作系统','EC2 主机的物理安全','维护 AWS 全球网络','更换数据中心内出故障的磁盘'],
 '在 EC2 上运行数据库意味着客户要管理操作系统和数据库，包括补丁、备份和高可用性，而这些本可以由 RDS 处理。'],
['Physical host security is always AWS’s.','The global network is AWS’s.','Data centre hardware is AWS’s.'],
['物理主机安全始终由 AWS 负责。','全球网络由 AWS 负责。','数据中心硬件由 AWS 负责。']);

Q('2.1','single',[0],
['Which responsibility ALWAYS remains with the customer, no matter which AWS service is used?',
 ['Their data and who is allowed to access it','Patching the operating system','Maintaining the hypervisor','Securing the edge locations'],
 'For every service, customers own their data, decide how it is classified and protected, and manage identities and permissions. OS patching depends on the service.'],
['无论使用哪项 AWS 服务，哪项责任始终由客户承担？',
 ['他们的数据以及谁可以访问这些数据','为操作系统打补丁','维护虚拟机管理程序','保护边缘站点'],
 '对于每项服务，客户都拥有自己的数据，决定如何分类和保护数据，并管理身份和权限。操作系统补丁责任则取决于服务。'],
['OS patching is AWS’s for managed and serverless services.','The hypervisor is always AWS’s.','Edge locations are AWS infrastructure.'],
['对于托管和无服务器服务，操作系统补丁由 AWS 负责。','虚拟机管理程序始终由 AWS 负责。','边缘站点是 AWS 的基础设施。']);

Q('2.1','single',[0],
['In the shared responsibility model, which item is part of "security of the cloud"?',
 ['The hardware and software that run AWS Regions, Availability Zones and edge locations','Client-side data encryption','Network traffic protection settings chosen by the customer','Customer IAM roles'],
 'Security of the cloud covers the global infrastructure: hardware, software, networking and facilities.'],
['在责任共担模式中，哪一项属于“云本身的安全”？',
 ['运行 AWS 区域、可用区和边缘站点的硬件和软件','客户端数据加密','客户选择的网络流量保护设置','客户的 IAM 角色'],
 '云本身的安全涵盖全球基础设施：硬件、软件、网络和设施。'],
['Client-side encryption is a customer responsibility.','Traffic protection settings are chosen by the customer.','IAM roles are created and managed by the customer.'],
['客户端加密是客户的责任。','流量保护设置由客户选择。','IAM 角色由客户创建和管理。']);

Q('2.1','multi',[0,1],
['Which TWO tasks are AWS responsibilities for Amazon DynamoDB? (Select TWO.)',
 ['Operating system and database software patching','Maintaining the underlying servers and storage','Creating IAM policies that control table access','Classifying the data stored in tables','Deciding which users can read items'],
 'DynamoDB is fully managed: AWS handles the infrastructure, OS and database software. The customer controls access and the data.'],
['对于 Amazon DynamoDB，哪两项任务由 AWS 负责？（选择两项。）',
 ['操作系统和数据库软件补丁','维护底层服务器和存储','创建控制表访问的 IAM 策略','对表中存储的数据进行分类','决定哪些用户可以读取项目'],
 'DynamoDB 是完全托管的：AWS 负责基础设施、操作系统和数据库软件。客户控制访问权限和数据。'],
['IAM policies are written by the customer.','Data classification is a customer task.','Access decisions belong to the customer.'],
['IAM 策略由客户编写。','数据分类是客户的任务。','访问决策属于客户。']);

Q('2.1','single',[0],
['A company enables encryption at rest for its Amazon EBS volumes. Under the shared responsibility model, whose responsibility was it to turn this on?',
 ['The customer','AWS','Nobody, because EBS is always encrypted with customer keys','The volume manufacturer'],
 'AWS provides encryption features, but the customer decides to use them and configures them (although an account-level default can encrypt new volumes automatically).'],
['某公司为其 Amazon EBS 卷启用了静态加密。根据责任共担模式，启用这项功能是谁的责任？',
 ['客户','AWS','没有人，因为 EBS 始终使用客户密钥加密','卷的制造商'],
 'AWS 提供加密功能，但由客户决定是否使用并进行配置（不过可以设置账户级默认值，让新卷自动加密）。'],
['AWS offers the feature but you choose to enable it.','Encryption with customer keys is not automatic.','Manufacturers are not part of this model.'],
['AWS 提供该功能，但由你选择启用。','使用客户密钥加密并不是自动的。','制造商不属于这一模式。']);

Q('2.1','single',[0],
['Which AWS service type shifts the MOST security responsibility to AWS?',
 ['Fully managed or serverless services such as AWS Lambda and Amazon DynamoDB','Infrastructure services such as Amazon EC2','Self-managed databases on EC2','Software installed on AWS Outposts by the customer'],
 'With abstracted services, AWS manages the infrastructure, OS and platform, leaving the customer with data, access and configuration.'],
['哪种类型的 AWS 服务把最多的安全责任转移给了 AWS？',
 ['完全托管或无服务器服务，例如 AWS Lambda 和 Amazon DynamoDB','基础设施服务，例如 Amazon EC2','在 EC2 上自行管理的数据库','客户在 AWS Outposts 上安装的软件'],
 '对于抽象化的服务，AWS 管理基础设施、操作系统和平台，客户只需负责数据、访问和配置。'],
['EC2 leaves the OS and above to the customer.','Self-managed databases keep the most work with the customer.','Customer-installed software is managed by the customer.'],
['EC2 把操作系统及以上部分留给客户。','自行管理的数据库让客户承担最多工作。','客户安装的软件由客户管理。']);

Q('2.1','single',[0],
['A company must make sure its developers know how to handle data securely on AWS. Under the shared responsibility model, what type of control is security training?',
 ['A shared control: AWS trains its employees and the customer trains its own','An inherited control that only AWS provides','A control only AWS Support can deliver','Not part of the shared responsibility model'],
 'Awareness and training is a shared control. AWS trains AWS employees; customers must train their own staff.'],
['某公司必须确保其开发人员知道如何在 AWS 上安全地处理数据。根据责任共担模式，安全培训属于哪种控制？',
 ['共享控制：AWS 培训自己的员工，客户培训自己的员工','只由 AWS 提供的继承控制','只有 AWS Support 能提供的控制','不属于责任共担模式'],
 '意识和培训是共享控制。AWS 培训 AWS 员工；客户必须培训自己的员工。'],
['Customers cannot inherit training for their own staff.','Support does not train your staff as part of the model.','Training is explicitly listed as a shared control.'],
['客户无法为自己的员工“继承”培训。','在这一模式中，Support 不负责培训你的员工。','培训明确被列为共享控制。']);

Q('2.1','single',[0],
['A company wants to know which security controls it inherits from AWS for compliance purposes, such as physical controls. What are these called?',
 ['Inherited controls','Customer-specific controls','Shared controls','Preventive guardrails'],
 'Inherited controls are fully handled by AWS (for example, physical and environmental controls), and customers inherit them for their own compliance.'],
['为了合规，某公司想了解它从 AWS 继承了哪些安全控制，例如物理控制。这些控制叫什么？',
 ['继承控制','客户特定控制','共享控制','预防性防护措施'],
 '继承控制完全由 AWS 负责（例如物理和环境控制），客户在自己的合规中继承这些控制。'],
['Customer-specific controls are solely the customer’s, such as zone security for its data.','Shared controls involve both parties.','Guardrails are an AWS Control Tower concept.'],
['客户特定控制完全由客户负责，例如针对其数据的区域安全。','共享控制涉及双方。','防护措施是 AWS Control Tower 中的概念。']);

Q('2.1','single',[0],
['For Amazon EC2, who is responsible for the network traffic protection between the customer’s instances, such as choosing whether to encrypt it?',
 ['The customer','AWS','The internet service provider','AWS Trusted Advisor'],
 'Network traffic protection (encryption, integrity, identity) for the customer’s applications is a customer responsibility in the "security in the cloud" layer.'],
['对于 Amazon EC2，谁负责客户实例之间的网络流量保护，例如选择是否加密？',
 ['客户','AWS','互联网服务提供商','AWS Trusted Advisor'],
 '客户应用的网络流量保护（加密、完整性、身份）属于“云中的安全”层面的客户责任。'],
['AWS provides tools, but the customer configures traffic protection.','The ISP is not part of the model.','Trusted Advisor gives recommendations; it is not responsible.'],
['AWS 提供工具，但流量保护由客户配置。','互联网服务提供商不属于这一模式。','Trusted Advisor 只提供建议，不承担责任。']);

Q('2.1','single',[0],
['A customer stores files in Amazon S3 and accidentally makes a bucket public. Under the shared responsibility model, who is responsible for this misconfiguration?',
 ['The customer','AWS','AWS and the customer jointly','No one, because S3 is a managed service'],
 'Configuring access to customer data is always a customer responsibility, even for managed services. S3 Block Public Access helps prevent this.'],
['某客户在 Amazon S3 中存储文件时，不小心把一个存储桶设置为公开。根据责任共担模式，谁对这个错误配置负责？',
 ['客户','AWS','AWS 和客户共同负责','没有人，因为 S3 是托管服务'],
 '配置对客户数据的访问始终是客户的责任，即使是托管服务也一样。S3 阻止公有访问功能可以帮助防止这种情况。'],
['AWS does not control your bucket permissions.','Access configuration is not shared; it is the customer’s.','Managed services still leave access control to the customer.'],
['AWS 不控制你的存储桶权限。','访问配置不是共享的，而是客户的。','托管服务仍然把访问控制留给客户。']);

Q('2.1','single',[0],
['Which component is the responsibility of AWS for all compute services, including Amazon EC2?',
 ['The virtualization layer (hypervisor)','The guest operating system','The application code','The security group rules'],
 'AWS manages the host OS and virtualization layer for EC2. The guest OS, applications and security groups belong to the customer.'],
['对于包括 Amazon EC2 在内的所有计算服务，哪个组件由 AWS 负责？',
 ['虚拟化层（虚拟机管理程序）','客户机操作系统','应用代码','安全组规则'],
 '对于 EC2，AWS 管理主机操作系统和虚拟化层。客户机操作系统、应用程序和安全组属于客户。'],
['The guest OS on EC2 is the customer’s.','Application code is always the customer’s.','Security group rules are the customer’s.'],
['EC2 上的客户机操作系统由客户负责。','应用代码始终由客户负责。','安全组规则由客户负责。']);

Q('2.1','multi',[0,1],
['Which TWO are customer responsibilities when using Amazon EC2? (Select TWO.)',
 ['Installing security patches on the guest operating system','Managing access keys and IAM permissions for users who launch instances','Decommissioning storage devices at end of life','Securing the facilities that host the instances','Maintaining the virtualization infrastructure'],
 'Customers manage the guest OS and identities. AWS securely decommissions hardware, protects facilities and runs the virtualization layer.'],
['使用 Amazon EC2 时，哪两项属于客户责任？（选择两项。）',
 ['为客户机操作系统安装安全补丁','为启动实例的用户管理访问密钥和 IAM 权限','在存储设备寿命结束时进行报废处理','保护托管实例的设施','维护虚拟化基础设施'],
 '客户管理客户机操作系统和身份。AWS 负责安全地报废硬件、保护设施并运行虚拟化层。'],
['AWS decommissions storage media securely.','Facilities are protected by AWS.','Virtualization is run by AWS.'],
['存储介质由 AWS 安全地报废。','设施由 AWS 保护。','虚拟化由 AWS 运行。']);

Q('2.1','single',[0],
['A company uses AWS Fargate to run containers. Which task does the company NOT need to manage?',
 ['Patching the underlying servers that run the containers','Securing the container images it builds','Defining IAM roles for its tasks','Protecting sensitive data inside the application'],
 'Fargate is serverless compute for containers: AWS manages the servers and their OS. Customers still secure images, IAM roles and application data.'],
['某公司使用 AWS Fargate 运行容器。哪项任务公司不需要管理？',
 ['为运行容器的底层服务器打补丁','保护自己构建的容器镜像','为其任务定义 IAM 角色','保护应用中的敏感数据'],
 'Fargate 是面向容器的无服务器计算：服务器及其操作系统由 AWS 管理。客户仍需保护镜像、IAM 角色和应用数据。'],
['Container images are built and secured by the customer.','IAM roles are defined by the customer.','Application data protection is the customer’s.'],
['容器镜像由客户构建并保护。','IAM 角色由客户定义。','应用数据保护由客户负责。']);

Q('2.1','single',[0],
['Which example shows a customer-specific control under the shared responsibility model?',
 ['Defining which services can be used in which Regions to meet data residency rules for the customer’s data','Physical access control to the data centre','Environmental controls such as fire suppression','Maintaining the global backbone network'],
 'Customer-specific controls are solely the customer’s responsibility, based on the application, such as zoning data within particular security environments.'],
['哪个例子体现了责任共担模式中的客户特定控制？',
 ['规定哪些服务可以在哪些区域中使用，以满足客户数据的数据驻留规定','数据中心的物理访问控制','环境控制，例如灭火系统','维护全球骨干网络'],
 '客户特定控制完全由客户负责，取决于其应用，例如把数据划分到特定的安全环境中。'],
['Physical access is controlled by AWS.','Environmental controls are AWS’s.','The global network is AWS’s.'],
['物理访问由 AWS 控制。','环境控制由 AWS 负责。','全球网络由 AWS 负责。']);

/* ================= 2.2 Security, governance and compliance ================= */
Q('2.2','single',[0],
['An auditor needs a copy of AWS’s SOC 2 and PCI DSS compliance reports. Where can the company download them?',
 ['AWS Artifact','AWS Config','AWS Trusted Advisor','Amazon Inspector'],
 'AWS Artifact is a self-service portal for on-demand access to AWS security and compliance reports and to agreements such as the Business Associate Addendum (BAA).'],
['审计人员需要 AWS 的 SOC 2 和 PCI DSS 合规报告副本。公司可以在哪里下载？',
 ['AWS Artifact','AWS Config','AWS Trusted Advisor','Amazon Inspector'],
 'AWS Artifact 是一个自助服务门户，可按需获取 AWS 安全与合规报告以及商业伙伴附录（BAA）等协议。'],
['Config tracks your resource configurations.','Trusted Advisor checks your account against best practices.','Inspector scans for vulnerabilities.'],
['Config 跟踪你的资源配置。','Trusted Advisor 按最佳实践检查你的账户。','Inspector 扫描漏洞。']);

Q('2.2','single',[0],
['Which service records who made an API call, from which IP address and when, across an AWS account?',
 ['AWS CloudTrail','Amazon CloudWatch','AWS Config','Amazon GuardDuty'],
 'CloudTrail logs API activity and account actions, which supports auditing, governance and investigating changes.'],
['哪项服务记录了 AWS 账户中谁在何时从哪个 IP 地址发起了 API 调用？',
 ['AWS CloudTrail','Amazon CloudWatch','AWS Config','Amazon GuardDuty'],
 'CloudTrail 记录 API 活动和账户操作，支持审计、治理和调查变更。'],
['CloudWatch monitors metrics and logs from resources and applications.','Config records resource configuration state and compliance.','GuardDuty detects threats; it is not the audit log.'],
['CloudWatch 监控资源和应用的指标与日志。','Config 记录资源的配置状态和合规情况。','GuardDuty 检测威胁，它不是审计日志。']);

Q('2.2','single',[0],
['A company wants an alarm when the CPU utilization of an EC2 instance exceeds 80% for 10 minutes. Which service should it use?',
 ['Amazon CloudWatch','AWS CloudTrail','AWS Config','AWS Artifact'],
 'CloudWatch collects metrics and logs and can trigger alarms and actions, such as notifications or auto scaling.'],
['某公司希望在 EC2 实例的 CPU 利用率连续 10 分钟超过 80% 时收到告警。应使用哪项服务？',
 ['Amazon CloudWatch','AWS CloudTrail','AWS Config','AWS Artifact'],
 'CloudWatch 收集指标和日志，并可以触发告警和操作，例如发送通知或弹性伸缩。'],
['CloudTrail records API calls, not performance metrics.','Config records configuration changes.','Artifact provides compliance reports.'],
['CloudTrail 记录 API 调用，而不是性能指标。','Config 记录配置变更。','Artifact 提供合规报告。']);

Q('2.2','single',[0],
['A company must show auditors how a security group’s rules changed over the last six months and whether it complied with company rules. Which service is designed for this?',
 ['AWS Config','Amazon CloudWatch','AWS Shield','Amazon Macie'],
 'AWS Config records resource configurations and their history, and evaluates them against rules to show compliance.'],
['某公司必须向审计人员展示某个安全组的规则在过去六个月中是如何变化的，以及是否符合公司规定。哪项服务专门用于此目的？',
 ['AWS Config','Amazon CloudWatch','AWS Shield','Amazon Macie'],
 'AWS Config 记录资源配置及其历史，并根据规则进行评估以显示合规情况。'],
['CloudWatch focuses on metrics, logs and alarms.','Shield protects against DDoS attacks.','Macie finds sensitive data in S3.'],
['CloudWatch 侧重于指标、日志和告警。','Shield 用于防护 DDoS 攻击。','Macie 在 S3 中查找敏感数据。']);

Q('2.2','single',[0],
['Which service uses machine learning and threat intelligence to continuously monitor AWS accounts for malicious activity, such as unusual API calls or communication with known bad IP addresses?',
 ['Amazon GuardDuty','Amazon Inspector','AWS Config','AWS Artifact'],
 'GuardDuty is a threat detection service that analyses sources such as CloudTrail events, VPC Flow Logs and DNS logs.'],
['哪项服务利用机器学习和威胁情报持续监控 AWS 账户中的恶意活动，例如异常的 API 调用或与已知恶意 IP 地址的通信？',
 ['Amazon GuardDuty','Amazon Inspector','AWS Config','AWS Artifact'],
 'GuardDuty 是一项威胁检测服务，会分析 CloudTrail 事件、VPC 流日志和 DNS 日志等数据源。'],
['Inspector scans workloads for software vulnerabilities.','Config tracks configuration compliance.','Artifact provides reports.'],
['Inspector 扫描工作负载中的软件漏洞。','Config 跟踪配置合规情况。','Artifact 提供报告。']);

Q('2.2','single',[0],
['A company wants to automatically scan its EC2 instances, container images and Lambda functions for software vulnerabilities and unintended network exposure. Which service should it use?',
 ['Amazon Inspector','Amazon GuardDuty','Amazon Macie','AWS Shield'],
 'Amazon Inspector continually scans workloads for known software vulnerabilities (CVEs) and network reachability.'],
['某公司希望自动扫描其 EC2 实例、容器镜像和 Lambda 函数中的软件漏洞以及意外的网络暴露。应使用哪项服务？',
 ['Amazon Inspector','Amazon GuardDuty','Amazon Macie','AWS Shield'],
 'Amazon Inspector 持续扫描工作负载中的已知软件漏洞（CVE）和网络可达性。'],
['GuardDuty detects threats from activity logs.','Macie discovers sensitive data in S3.','Shield protects against DDoS.'],
['GuardDuty 从活动日志中检测威胁。','Macie 发现 S3 中的敏感数据。','Shield 防护 DDoS。']);

Q('2.2','single',[0],
['Which service discovers and protects sensitive data such as personally identifiable information (PII) in Amazon S3 buckets?',
 ['Amazon Macie','Amazon Inspector','AWS Secrets Manager','Amazon Detective'],
 'Macie uses machine learning and pattern matching to find sensitive data in S3 and alerts on risks such as public buckets.'],
['哪项服务可以发现并保护 Amazon S3 存储桶中的敏感数据，例如个人身份信息（PII）？',
 ['Amazon Macie','Amazon Inspector','AWS Secrets Manager','Amazon Detective'],
 'Macie 利用机器学习和模式匹配在 S3 中查找敏感数据，并对公开存储桶等风险发出警报。'],
['Inspector scans for software vulnerabilities.','Secrets Manager stores credentials.','Detective investigates the root cause of findings.'],
['Inspector 扫描软件漏洞。','Secrets Manager 存储凭证。','Detective 调查安全发现的根本原因。']);

Q('2.2','single',[0],
['A security team wants one dashboard that collects findings from GuardDuty, Inspector and Macie and checks the account against security best practices. Which service should it use?',
 ['AWS Security Hub','Amazon Detective','AWS Artifact','AWS Config'],
 'Security Hub aggregates and prioritizes security findings across AWS services and partners, and runs automated security posture checks.'],
['某安全团队希望有一个仪表板，收集来自 GuardDuty、Inspector 和 Macie 的安全发现，并按安全最佳实践检查账户。应使用哪项服务？',
 ['AWS Security Hub','Amazon Detective','AWS Artifact','AWS Config'],
 'Security Hub 汇总 AWS 服务和合作伙伴的安全发现并确定优先级，还会运行自动化的安全态势检查。'],
['Detective helps investigate the root cause of a specific finding.','Artifact provides AWS compliance reports.','Config evaluates resource settings; it does not gather findings from GuardDuty, Inspector and Macie.'],
['Detective 帮助调查某个具体发现的根本原因。','Artifact 提供 AWS 合规报告。','Config 评估资源设置，不会汇总 GuardDuty、Inspector 和 Macie 的发现。']);

Q('2.2','single',[0],
['After GuardDuty raises a finding, an analyst wants to visualize related activity and find the root cause. Which service helps with this investigation?',
 ['Amazon Detective','Amazon Macie','AWS Shield Advanced','AWS Firewall Manager'],
 'Detective automatically collects log data and uses graph analysis to help investigate security findings.'],
['GuardDuty 发出安全发现后，分析师希望把相关活动可视化并找出根本原因。哪项服务可以帮助进行这种调查？',
 ['Amazon Detective','Amazon Macie','AWS Shield Advanced','AWS Firewall Manager'],
 'Detective 自动收集日志数据，并通过图分析帮助调查安全发现。'],
['Macie finds sensitive data.','Shield Advanced protects against DDoS.','Firewall Manager manages firewall rules across accounts.'],
['Macie 查找敏感数据。','Shield Advanced 防护 DDoS。','Firewall Manager 跨账户管理防火墙规则。']);

Q('2.2','single',[0],
['Which service creates and controls the cryptographic keys used to encrypt data across many AWS services?',
 ['AWS Key Management Service (AWS KMS)','AWS Certificate Manager (ACM)','AWS Secrets Manager','Amazon Macie'],
 'AWS KMS lets you create, manage and control encryption keys, integrated with services such as S3, EBS and RDS for encryption at rest.'],
['哪项服务用于创建和控制在众多 AWS 服务中加密数据所用的加密密钥？',
 ['AWS Key Management Service（AWS KMS）','AWS Certificate Manager（ACM）','AWS Secrets Manager','Amazon Macie'],
 'AWS KMS 让你创建、管理和控制加密密钥，并与 S3、EBS 和 RDS 等服务集成以实现静态加密。'],
['ACM manages SSL/TLS certificates for encryption in transit.','Secrets Manager stores passwords and API keys.','Macie discovers sensitive data.'],
['ACM 管理用于传输中加密的 SSL/TLS 证书。','Secrets Manager 存储密码和 API 密钥。','Macie 发现敏感数据。']);

Q('2.2','single',[0],
['A company needs free public SSL/TLS certificates for its website behind an Application Load Balancer, with automatic renewal. Which service should it use?',
 ['AWS Certificate Manager (ACM)','AWS KMS','AWS CloudHSM','AWS Secrets Manager'],
 'ACM provisions, manages and renews public and private SSL/TLS certificates for use with services such as Elastic Load Balancing and CloudFront. Public certificates used with integrated services are free.'],
['某公司需要为 Application Load Balancer 后面的网站提供免费的公有 SSL/TLS 证书，并能自动续订。应使用哪项服务？',
 ['AWS Certificate Manager（ACM）','AWS KMS','AWS CloudHSM','AWS Secrets Manager'],
 'ACM 为 Elastic Load Balancing 和 CloudFront 等服务配置、管理和续订公有和私有 SSL/TLS 证书。与集成服务一起使用的公有证书是免费的。'],
['KMS manages encryption keys, not certificates.','CloudHSM provides dedicated hardware security modules.','Secrets Manager stores secrets such as passwords.'],
['KMS 管理加密密钥，而不是证书。','CloudHSM 提供专用的硬件安全模块。','Secrets Manager 存储密码等机密。']);

Q('2.2','single',[0],
['Which type of encryption protects data as it moves between a user’s browser and a website?',
 ['Encryption in transit, using TLS (HTTPS)','Encryption at rest, using AWS KMS','Client-side hashing','S3 Object Lock'],
 'Encryption in transit protects data moving over a network, typically with TLS. Encryption at rest protects stored data.'],
['哪种加密在数据于用户浏览器与网站之间传输时保护数据？',
 ['使用 TLS（HTTPS）的传输中加密','使用 AWS KMS 的静态加密','客户端哈希','S3 对象锁定'],
 '传输中加密保护通过网络传输的数据，通常使用 TLS。静态加密保护存储的数据。'],
['Encryption at rest protects stored data, not data moving over the network.','Hashing is not encryption and cannot be reversed.','Object Lock prevents deletion; it does not encrypt.'],
['静态加密保护存储的数据，而不是网络中传输的数据。','哈希不是加密，且不可逆。','对象锁定用于防止删除，而不是加密。']);

Q('2.2','multi',[0,1],
['Which TWO are examples of encryption at rest on AWS? (Select TWO.)',
 ['Server-side encryption of objects in Amazon S3','Encrypting an Amazon EBS volume with an AWS KMS key','Using HTTPS to call an API','A Site-to-Site VPN tunnel','TLS on an Application Load Balancer listener'],
 'Encryption at rest protects stored data, such as S3 objects and EBS volumes. HTTPS, VPN and TLS protect data in transit.'],
['以下哪两项是 AWS 上静态加密的例子？（选择两项。）',
 ['Amazon S3 中对象的服务器端加密','使用 AWS KMS 密钥加密 Amazon EBS 卷','使用 HTTPS 调用 API','Site-to-Site VPN 隧道','Application Load Balancer 侦听器上的 TLS'],
 '静态加密保护存储的数据，例如 S3 对象和 EBS 卷。HTTPS、VPN 和 TLS 保护的是传输中的数据。'],
['HTTPS protects data in transit.','A VPN encrypts data in transit.','TLS protects data in transit.'],
['HTTPS 保护传输中的数据。','VPN 加密传输中的数据。','TLS 保护传输中的数据。']);

Q('2.2','single',[0],
['A company must meet a regulation that requires it to use dedicated, single-tenant hardware security modules (HSMs) under its exclusive control. Which service meets this?',
 ['AWS CloudHSM','AWS KMS with AWS managed keys','AWS Certificate Manager','AWS Secrets Manager'],
 'CloudHSM provides dedicated, FIPS-validated HSMs in your VPC that only you control.'],
['某公司必须遵守一项法规，要求使用由其独占控制的专用单租户硬件安全模块（HSM）。哪项服务可以满足？',
 ['AWS CloudHSM','使用 AWS 托管密钥的 AWS KMS','AWS Certificate Manager','AWS Secrets Manager'],
 'CloudHSM 在你的 VPC 中提供只由你控制、经过 FIPS 验证的专用 HSM。'],
['KMS is a multi-tenant managed service.','ACM manages certificates.','Secrets Manager stores secrets.'],
['KMS 是多租户的托管服务。','ACM 管理证书。','Secrets Manager 存储机密。']);

Q('2.2','single',[0],
['A company must be able to show auditors at any time whether its AWS resources comply with rules based on PCI DSS, using a prebuilt set of rules. Which service is designed for this?',
 ['AWS Config (with a conformance pack)','AWS Artifact','Amazon Inspector','AWS Trusted Advisor'],
 'AWS Config continuously evaluates resource configurations against rules, and conformance packs bundle rules for frameworks such as PCI DSS. Config also keeps a configuration history for audits.'],
['某公司必须能随时向审计人员展示其 AWS 资源是否符合基于 PCI DSS 的规则，并使用一套预置的规则。哪项服务专门用于此目的？',
 ['AWS Config（配合一致性包）','AWS Artifact','Amazon Inspector','AWS Trusted Advisor'],
 'AWS Config 根据规则持续评估资源配置，一致性包把 PCI DSS 等框架的规则打包在一起。Config 还会保留配置历史以供审计。'],
['Artifact provides AWS’s own compliance reports, not checks of your resources.','Inspector scans for software vulnerabilities, not compliance rules.','Trusted Advisor gives general best-practice recommendations, not framework-based compliance checks.'],
['Artifact 提供的是 AWS 自己的合规报告，而不是检查你的资源。','Inspector 扫描软件漏洞，而不是合规规则。','Trusted Advisor 提供一般性的最佳实践建议，而不是基于框架的合规检查。']);

Q('2.2','single',[0],
['Where can a customer find which AWS services are in scope for a specific compliance program, such as HIPAA?',
 ['The AWS Services in Scope by Compliance Program page','AWS Cost Explorer','AWS Marketplace','The AWS Pricing Calculator'],
 'AWS publishes which services are covered by each compliance program. Customers are still responsible for their own compliance when using them.'],
['客户可以在哪里找到哪些 AWS 服务属于某个特定合规计划（例如 HIPAA）的范围？',
 ['“按合规计划划分的范围内 AWS 服务”页面','AWS Cost Explorer','AWS Marketplace','AWS 定价计算器'],
 'AWS 会公布每个合规计划涵盖哪些服务。客户在使用这些服务时仍需对自己的合规负责。'],
['Cost Explorer analyses spending.','Marketplace sells third-party software.','The Pricing Calculator estimates costs.'],
['Cost Explorer 分析支出。','Marketplace 销售第三方软件。','定价计算器估算成本。']);

Q('2.2','single',[0],
['A healthcare company must sign a Business Associate Addendum (BAA) with AWS. Where can it review and accept the agreement?',
 ['AWS Artifact','AWS Organizations','AWS Support Center','AWS Config'],
 'AWS Artifact Agreements lets you review, accept and manage agreements such as the BAA.'],
['某医疗公司必须与 AWS 签订商业伙伴附录（BAA）。它可以在哪里查看并接受该协议？',
 ['AWS Artifact','AWS Organizations','AWS Support 中心','AWS Config'],
 'AWS Artifact Agreements 让你查看、接受和管理 BAA 等协议。'],
['Organizations manages accounts.','The Support Center handles support cases.','Config records and evaluates resource configurations.'],
['Organizations 管理账户。','Support 中心处理支持案例。','Config 记录并评估资源配置。']);

Q('2.2','single',[0],
['Which IAM feature generates a downloadable report that lists all users in an account and the status of their passwords, access keys and MFA devices?',
 ['IAM credential report','IAM Access Analyzer','AWS Config rules','AWS CloudTrail Lake'],
 'The IAM credential report is an access report covering every user’s credential status, which helps audits and credential rotation.'],
['哪项 IAM 功能会生成一份可下载的报告，列出账户中的所有用户及其密码、访问密钥和 MFA 设备的状态？',
 ['IAM 凭证报告','IAM Access Analyzer','AWS Config 规则','AWS CloudTrail Lake'],
 'IAM 凭证报告是一种访问报告，涵盖每个用户的凭证状态，有助于审计和凭证轮换。'],
['Access Analyzer finds resources shared with external entities and unused access.','Config rules evaluate resource configurations.','CloudTrail Lake queries API activity.'],
['Access Analyzer 查找与外部实体共享的资源以及未使用的访问权限。','Config 规则评估资源配置。','CloudTrail Lake 查询 API 活动。']);

Q('2.2','single',[0],
['A security team wants to find which services an IAM role has not used in 90 days so it can remove unnecessary permissions. Which feature helps?',
 ['Last accessed information (IAM access advisor)','The IAM credential report','AWS Artifact','Amazon CloudWatch alarms'],
 'IAM access advisor shows the services a user or role can access and when they last used them, which helps apply least privilege.'],
['某安全团队希望找出某个 IAM 角色在 90 天内未使用过的服务，以便删除不必要的权限。哪项功能有帮助？',
 ['上次访问信息（IAM 访问顾问）','IAM 凭证报告','AWS Artifact','Amazon CloudWatch 告警'],
 'IAM 访问顾问显示用户或角色可以访问的服务及其上次使用时间，有助于落实最低权限原则。'],
['The credential report covers credential status, not service usage.','Artifact provides compliance reports.','CloudWatch alarms monitor metrics.'],
['凭证报告涵盖凭证状态，而不是服务使用情况。','Artifact 提供合规报告。','CloudWatch 告警监控指标。']);

Q('2.2','multi',[0,1],
['Which TWO services help a company monitor and audit its AWS environment for governance? (Select TWO.)',
 ['AWS CloudTrail','AWS Config','Amazon Polly','AWS Snowball Edge','Amazon Lightsail'],
 'CloudTrail records account activity and Config records resource configuration history and compliance. Both support governance and auditing.'],
['哪两项服务帮助公司监控和审计其 AWS 环境以实现治理？（选择两项。）',
 ['AWS CloudTrail','AWS Config','Amazon Polly','AWS Snowball Edge','Amazon Lightsail'],
 'CloudTrail 记录账户活动，Config 记录资源配置历史和合规情况。两者都支持治理和审计。'],
['Polly converts text to speech.','Snowball Edge moves data offline.','Lightsail provides simple virtual servers.'],
['Polly 把文本转换为语音。','Snowball Edge 以离线方式迁移数据。','Lightsail 提供简单的虚拟服务器。']);

Q('2.2','single',[0],
['A company must keep all its data inside Germany to satisfy local regulations. Which approach meets this requirement?',
 ['Deploy resources only in the Europe (Frankfurt) Region, because data does not leave a Region unless the customer moves it','Use Amazon CloudFront edge locations in Germany for storage','Rely on AWS to automatically move data to the nearest country','Store data in any Region and encrypt it'],
 'Customers choose the Region where data is stored, and AWS does not move it out of that Region without the customer’s action. This supports data residency requirements.'],
['为了满足当地法规，某公司必须把所有数据保留在德国境内。哪种方法能满足这一要求？',
 ['只在欧洲（法兰克福）区域部署资源，因为除非客户主动迁移，否则数据不会离开所在区域','使用位于德国的 Amazon CloudFront 边缘站点进行存储','依靠 AWS 自动把数据迁移到最近的国家','在任意区域存储数据并对其加密'],
 '客户选择存储数据的区域，未经客户操作，AWS 不会把数据移出该区域。这有助于满足数据驻留要求。'],
['Edge locations cache content; they are not the place to keep data for residency.','AWS does not move data between Regions on its own.','Encryption does not change where data is located.'],
['边缘站点用于缓存内容，不是为数据驻留而存放数据的地方。','AWS 不会自行在区域之间迁移数据。','加密不会改变数据所在的位置。']);

Q('2.2','single',[0],
['Which statement about compliance on AWS is correct?',
 ['AWS maintains certifications for its infrastructure, but customers are responsible for making their own workloads compliant','Using AWS automatically makes every application compliant with all regulations','Compliance requirements are the same in every country and industry','Only AWS Partners can be compliant on AWS'],
 'AWS compliance programs cover the infrastructure. Customers must configure and operate their applications to meet the requirements of their industry and location.'],
['关于 AWS 上的合规，哪种说法正确？',
 ['AWS 为其基础设施维护各项认证，但客户负责让自己的工作负载符合要求','使用 AWS 会自动让每个应用符合所有法规','各国家和行业的合规要求都相同','只有 AWS 合作伙伴才能在 AWS 上实现合规'],
 'AWS 合规计划涵盖的是基础设施。客户必须配置和运营其应用，以满足所在行业和地区的要求。'],
['Compliance is a shared responsibility; nothing is automatic.','Requirements differ by geography and industry.','Any customer can build compliant workloads.'],
['合规是共同责任，没有什么是自动的。','要求因地区和行业而异。','任何客户都可以构建合规的工作负载。']);

Q('2.2','single',[0],
['A company wants to store CloudTrail logs so they cannot be deleted or overwritten for seven years, to meet a regulation. Which feature helps?',
 ['Amazon S3 Object Lock in compliance mode','Amazon S3 Transfer Acceleration','Amazon CloudFront signed URLs','Amazon EBS snapshots'],
 'S3 Object Lock uses a write-once-read-many (WORM) model to prevent objects from being deleted or overwritten for a retention period.'],
['为了满足法规要求，某公司希望存储 CloudTrail 日志，并确保它们在七年内不能被删除或覆盖。哪项功能有帮助？',
 ['合规模式下的 Amazon S3 对象锁定','Amazon S3 Transfer Acceleration','Amazon CloudFront 签名 URL','Amazon EBS 快照'],
 'S3 对象锁定采用一次写入多次读取（WORM）模式，在保留期内防止对象被删除或覆盖。'],
['Transfer Acceleration speeds up uploads.','Signed URLs control temporary access to content.','EBS snapshots back up volumes; they do not enforce WORM retention.'],
['Transfer Acceleration 用于加快上传速度。','签名 URL 用于控制对内容的临时访问。','EBS 快照用于备份卷，并不能强制执行 WORM 保留。']);

Q('2.2','single',[0],
['Which service helps protect web applications from common exploits such as SQL injection and cross-site scripting?',
 ['AWS WAF','AWS Shield Standard','Amazon GuardDuty','Amazon Inspector'],
 'AWS WAF is a web application firewall that filters HTTP(S) requests using rules, including managed rule groups for common exploits.'],
['哪项服务帮助保护 Web 应用免受 SQL 注入和跨站脚本等常见攻击？',
 ['AWS WAF','AWS Shield Standard','Amazon GuardDuty','Amazon Inspector'],
 'AWS WAF 是一种 Web 应用防火墙，它使用规则（包括针对常见攻击的托管规则组）筛选 HTTP(S) 请求。'],
['Shield Standard protects against network-layer DDoS attacks.','GuardDuty detects threats from logs; it does not filter web requests.','Inspector scans for vulnerabilities.'],
['Shield Standard 防护网络层 DDoS 攻击。','GuardDuty 从日志中检测威胁，不会筛选 Web 请求。','Inspector 扫描漏洞。']);

Q('2.2','single',[0],
['Which DDoS protection is automatically included for all AWS customers at no additional cost?',
 ['AWS Shield Standard','AWS Shield Advanced','AWS WAF','AWS Firewall Manager'],
 'Shield Standard protects against common network and transport layer DDoS attacks automatically. Shield Advanced is a paid service with extra protections and the Shield Response Team.'],
['哪种 DDoS 防护会自动免费提供给所有 AWS 客户？',
 ['AWS Shield Standard','AWS Shield Advanced','AWS WAF','AWS Firewall Manager'],
 'Shield Standard 自动防护常见的网络层和传输层 DDoS 攻击。Shield Advanced 是付费服务，提供额外防护和 Shield 响应团队支持。'],
['Shield Advanced costs extra.','AWS WAF is charged per web ACL and rule.','Firewall Manager is a paid management service.'],
['Shield Advanced 需要额外付费。','AWS WAF 按 Web ACL 和规则收费。','Firewall Manager 是付费的管理服务。']);

Q('2.2','single',[0],
['A company wants 24/7 access to AWS DDoS experts and protection against cost spikes caused by DDoS attacks. Which service should it subscribe to?',
 ['AWS Shield Advanced','AWS Shield Standard','Amazon GuardDuty','AWS WAF'],
 'Shield Advanced adds enhanced detection, the Shield Response Team (SRT) and cost protection for scaling charges during DDoS attacks.'],
['某公司希望能全天候联系 AWS DDoS 专家，并在 DDoS 攻击导致成本激增时获得保护。应订阅哪项服务？',
 ['AWS Shield Advanced','AWS Shield Standard','Amazon GuardDuty','AWS WAF'],
 'Shield Advanced 提供增强的检测、Shield 响应团队（SRT）支持，以及针对 DDoS 攻击期间扩展费用的成本保护。'],
['Shield Standard has no response team or cost protection.','GuardDuty detects threats but does not provide DDoS response.','WAF filters web requests but has no DDoS response team.'],
['Shield Standard 没有响应团队，也没有成本保护。','GuardDuty 检测威胁，但不提供 DDoS 响应。','WAF 筛选 Web 请求，但没有 DDoS 响应团队。']);

Q('2.2','single',[0],
['Which AWS website is the official place to find security bulletins, best practices and information on AWS security services?',
 ['The AWS Security Center','AWS Marketplace','The AWS Pricing Calculator','AWS Budgets'],
 'The AWS Security Center (aws.amazon.com/security) gathers security bulletins, compliance information, whitepapers and learning resources.'],
['哪个 AWS 网站是查找安全公告、最佳实践和 AWS 安全服务信息的官方渠道？',
 ['AWS 安全中心','AWS Marketplace','AWS 定价计算器','AWS Budgets'],
 'AWS 安全中心（aws.amazon.com/security）汇集了安全公告、合规信息、白皮书和学习资源。'],
['Marketplace sells software.','The Pricing Calculator estimates costs.','Budgets tracks spending against limits.'],
['Marketplace 销售软件。','定价计算器估算成本。','Budgets 根据限额跟踪支出。']);

Q('2.2','multi',[0,1],
['Which TWO services detect or assess security issues in an AWS environment? (Select TWO.)',
 ['Amazon GuardDuty','Amazon Inspector','Amazon Polly','Amazon Route 53','AWS Snowball Edge'],
 'GuardDuty detects threats and Inspector assesses vulnerabilities. Polly, Route 53 and Snowball Edge are not security assessment services.'],
['哪两项服务可以检测或评估 AWS 环境中的安全问题？（选择两项。）',
 ['Amazon GuardDuty','Amazon Inspector','Amazon Polly','Amazon Route 53','AWS Snowball Edge'],
 'GuardDuty 检测威胁，Inspector 评估漏洞。Polly、Route 53 和 Snowball Edge 都不是安全评估服务。'],
['Polly is a text-to-speech service.','Route 53 is a DNS service.','Snowball Edge moves data.'],
['Polly 是文本转语音服务。','Route 53 是 DNS 服务。','Snowball Edge 用于迁移数据。']);

Q('2.2','single',[0],
['Which AWS resource gives the latest news, announcements and deep dives about AWS security topics?',
 ['The AWS Security Blog','AWS Cost Explorer','AWS Health Dashboard','The AWS Free Tier page'],
 'The AWS Security Blog publishes security news, how-to guides and best practices.'],
['哪个 AWS 资源提供有关 AWS 安全主题的最新新闻、公告和深入解读？',
 ['AWS 安全博客','AWS Cost Explorer','AWS Health Dashboard','AWS 免费套餐页面'],
 'AWS 安全博客发布安全新闻、操作指南和最佳实践。'],
['Cost Explorer analyses spending.','The Health Dashboard shows service health events.','The Free Tier page describes free offers.'],
['Cost Explorer 分析支出。','Health Dashboard 显示服务健康事件。','免费套餐页面介绍免费项目。']);

Q('2.2','single',[0],
['A company wants to centrally manage AWS WAF rules, Shield Advanced protections and security groups across all accounts in AWS Organizations. Which service should it use?',
 ['AWS Firewall Manager','AWS Network Firewall','Amazon Inspector','AWS Config'],
 'Firewall Manager centrally configures and manages firewall rules across accounts and applications in an organization.'],
['某公司希望在 AWS Organizations 的所有账户中集中管理 AWS WAF 规则、Shield Advanced 防护和安全组。应使用哪项服务？',
 ['AWS Firewall Manager','AWS Network Firewall','Amazon Inspector','AWS Config'],
 'Firewall Manager 在组织中跨账户和应用集中配置和管理防火墙规则。'],
['Network Firewall is a VPC firewall, not a central manager for WAF and Shield.','Inspector scans for vulnerabilities.','Config records configurations; it does not manage firewall rules.'],
['Network Firewall 是 VPC 防火墙，而不是 WAF 和 Shield 的集中管理器。','Inspector 扫描漏洞。','Config 记录配置，不管理防火墙规则。']);

Q('2.2','single',[0],
['Where can AWS customers find logs that help them investigate changes made to their resources during a security incident?',
 ['AWS CloudTrail event history and trails','AWS Pricing Calculator','AWS Marketplace','Amazon Polly'],
 'CloudTrail keeps 90 days of management event history by default; trails deliver logs to S3 for longer retention and analysis.'],
['在安全事件期间，AWS 客户可以在哪里找到帮助调查其资源变更的日志？',
 ['AWS CloudTrail 事件历史记录和跟踪','AWS 定价计算器','AWS Marketplace','Amazon Polly'],
 'CloudTrail 默认保留 90 天的管理事件历史记录；跟踪可以把日志交付到 S3，以便更长时间保留和分析。'],
['The Pricing Calculator estimates costs.','Marketplace sells software.','Polly converts text to speech.'],
['定价计算器估算成本。','Marketplace 销售软件。','Polly 把文本转换为语音。']);

/* ================= 2.3 Access management ================= */
Q('2.3','single',[0],
['Which security best practice should a company follow for the AWS account root user?',
 ['Enable MFA, avoid using it for everyday tasks, and do not create access keys for it','Share the root user password with all administrators','Use the root user for daily administrative work','Create access keys for the root user to use in applications'],
 'Protect the root user with a strong password and MFA, lock away its credentials and use it only for the few tasks that require it.'],
['公司应对 AWS 账户根用户遵循哪项安全最佳实践？',
 ['启用 MFA，避免在日常任务中使用根用户，并且不要为其创建访问密钥','与所有管理员共享根用户密码','使用根用户进行日常管理工作','为根用户创建访问密钥供应用程序使用'],
 '用强密码和 MFA 保护根用户，妥善保管其凭证，只在少数需要根用户的任务中使用。'],
['Never share root credentials.','Use IAM identities for daily work, not the root user.','Root access keys are a serious risk; applications should use roles.'],
['切勿共享根用户凭证。','日常工作应使用 IAM 身份，而不是根用户。','根用户访问密钥风险极大；应用应使用角色。']);

Q('2.3','multi',[0,1],
['Which TWO tasks require signing in as the AWS account root user? (Select TWO.)',
 ['Closing the AWS account','Changing the root user’s email address on a standalone account','Creating an IAM user','Launching an Amazon EC2 instance','Viewing the AWS Cost Explorer dashboard'],
 'Root-only tasks include changing root user details on a standalone account, closing the account, restoring IAM user permissions and a few others. Normal administration uses IAM.'],
['哪两项任务需要以 AWS 账户根用户身份登录？（选择两项。）',
 ['关闭 AWS 账户','更改独立账户的根用户电子邮件地址','创建 IAM 用户','启动 Amazon EC2 实例','查看 AWS Cost Explorer 仪表板'],
 '只有根用户才能执行的任务包括更改独立账户的根用户信息、关闭账户、恢复 IAM 用户权限等少数任务。日常管理使用 IAM 即可。'],
['IAM administrators can create IAM users.','Any IAM identity with permission can launch EC2 instances.','IAM users can view Cost Explorer once billing access is activated.'],
['IAM 管理员可以创建 IAM 用户。','任何有权限的 IAM 身份都可以启动 EC2 实例。','激活账单访问权限后，IAM 用户可以查看 Cost Explorer。']);

Q('2.3','single',[0],
['What does the principle of least privilege mean?',
 ['Grant users only the permissions they need to perform their tasks','Give all developers administrator access to work faster','Grant permissions to the root user only','Remove all permissions from every user'],
 'Least privilege reduces the impact of mistakes and compromised credentials. Start with minimum permissions and add more only when needed.'],
['最低权限原则是什么意思？',
 ['只授予用户执行任务所需的权限','给所有开发人员管理员权限以加快工作','只向根用户授予权限','移除所有用户的全部权限'],
 '最低权限可以降低误操作和凭证泄露带来的影响。从最小权限开始，只在需要时再增加。'],
['Broad admin access violates least privilege.','The root user should rarely be used.','Users need some permissions to do their jobs.'],
['授予宽泛的管理员权限违反了最低权限原则。','应尽量少用根用户。','用户需要一定的权限才能完成工作。']);

Q('2.3','single',[0],
['A team of 20 developers needs the same set of permissions. What is the MOST efficient way to manage this in IAM?',
 ['Create an IAM group, attach the policy to the group and add the users to it','Attach the same inline policy separately to each user','Share one IAM user among all developers','Give each developer the root user credentials'],
 'IAM groups let you manage permissions for many users at once. Sharing identities or root credentials removes accountability and is insecure.'],
['一个由 20 名开发人员组成的团队需要相同的一组权限。在 IAM 中最高效的管理方式是什么？',
 ['创建 IAM 组，把策略附加到组上，再把用户加入组','分别为每个用户附加相同的内联策略','让所有开发人员共用一个 IAM 用户','把根用户凭证发给每位开发人员'],
 'IAM 组让你一次性管理多个用户的权限。共用身份或根用户凭证会失去可追溯性，而且不安全。'],
['Separate inline policies are hard to maintain.','Shared users remove individual accountability.','Root credentials must never be shared.'],
['分散的内联策略难以维护。','共用用户会失去个人可追溯性。','绝不能共享根用户凭证。']);

Q('2.3','single',[0],
['An application running on an Amazon EC2 instance needs to read objects from an S3 bucket. What is the MOST secure way to give it access?',
 ['Attach an IAM role to the instance with a policy that allows reading the bucket','Store an IAM user’s access keys in the application code','Make the bucket public','Use the root user’s access keys'],
 'IAM roles provide temporary credentials that are rotated automatically. Hard-coded keys and public buckets are serious risks.'],
['运行在 Amazon EC2 实例上的应用需要从 S3 存储桶读取对象。授予其访问权限最安全的方法是什么？',
 ['为实例附加一个 IAM 角色，该角色的策略允许读取该存储桶','把某个 IAM 用户的访问密钥存放在应用代码中','把存储桶设为公开','使用根用户的访问密钥'],
 'IAM 角色提供会自动轮换的临时凭证。硬编码的密钥和公开存储桶都是严重的风险。'],
['Hard-coded keys can leak and do not rotate.','A public bucket exposes the data to everyone.','Root access keys should never be used.'],
['硬编码的密钥可能泄露，且不会轮换。','公开存储桶会把数据暴露给所有人。','绝不应使用根用户访问密钥。']);

Q('2.3','single',[0],
['Which IAM identity is BEST for granting temporary access to AWS resources to a service, application or user from another account?',
 ['IAM role','IAM user with long-term access keys','IAM group','The AWS account root user'],
 'A role is assumed to obtain temporary security credentials. Roles are used for AWS services, cross-account access and federated users.'],
['哪种 IAM 身份最适合向服务、应用或来自其他账户的用户授予对 AWS 资源的临时访问权限？',
 ['IAM 角色','拥有长期访问密钥的 IAM 用户','IAM 组','AWS 账户根用户'],
 '通过代入角色获取临时安全凭证。角色用于 AWS 服务、跨账户访问和联合用户。'],
['IAM users have long-term credentials.','Groups cannot be assumed and have no credentials.','The root user should not be used for this.'],
['IAM 用户拥有长期凭证。','组无法被代入，也没有凭证。','不应为此使用根用户。']);

Q('2.3','single',[0],
['A company wants auditors from a partner company to view resources in its AWS account without creating IAM users for them. What should it use?',
 ['A cross-account IAM role that the partner’s account can assume','The root user credentials of the company','A shared IAM user with read-only access','A public S3 bucket containing exported data'],
 'Cross-account IAM roles let trusted principals in another account assume a role with defined permissions, using temporary credentials.'],
['某公司希望合作伙伴公司的审计人员能够查看其 AWS 账户中的资源，而无需为他们创建 IAM 用户。应使用什么？',
 ['合作伙伴账户可以代入的跨账户 IAM 角色','公司的根用户凭证','具有只读权限的共享 IAM 用户','包含导出数据的公开 S3 存储桶'],
 '跨账户 IAM 角色允许另一个账户中受信任的主体使用临时凭证代入具有既定权限的角色。'],
['Root credentials must never be shared.','Shared users remove accountability and need long-term keys.','A public bucket exposes data to everyone.'],
['绝不能共享根用户凭证。','共享用户会失去可追溯性，还需要长期密钥。','公开存储桶会把数据暴露给所有人。']);

Q('2.3','single',[0],
['What is an IAM policy?',
 ['A JSON document that defines which actions are allowed or denied on which resources','A list of users in a group','A password complexity rule only','A billing report'],
 'IAM policies are JSON documents with statements (Effect, Action, Resource, optional Condition) that grant or deny permissions.'],
['什么是 IAM 策略？',
 ['一种 JSON 文档，定义对哪些资源允许或拒绝哪些操作','组中的用户列表','仅仅是密码复杂度规则','一份账单报告'],
 'IAM 策略是由语句（Effect、Action、Resource，以及可选的 Condition）组成的 JSON 文档，用于授予或拒绝权限。'],
['A group contains users; policies define permissions.','Password rules are set in the password policy, a different feature.','Billing reports are unrelated.'],
['组包含用户；策略定义权限。','密码规则在密码策略中设置，这是另一项功能。','账单报告与此无关。']);

Q('2.3','single',[0],
['What is the difference between AWS managed policies and customer managed policies?',
 ['AWS managed policies are created and maintained by AWS; customer managed policies are written and maintained by the customer for its specific needs','Customer managed policies are always more permissive','AWS managed policies can only be attached to the root user','There is no difference'],
 'AWS managed policies cover common use cases and are updated by AWS. Custom (customer managed) policies let you grant precise least-privilege permissions.'],
['AWS 托管策略与客户托管策略有什么区别？',
 ['AWS 托管策略由 AWS 创建和维护；客户托管策略由客户根据自身需求编写和维护','客户托管策略总是更宽松','AWS 托管策略只能附加到根用户','两者没有区别'],
 'AWS 托管策略覆盖常见用例，由 AWS 更新。自定义（客户托管）策略让你授予精确的最低权限。'],
['Customer managed policies can be as narrow as you like.','Managed policies attach to IAM users, groups and roles.','They differ in who creates and maintains them.'],
['客户托管策略可以按需设置得非常精细。','托管策略可附加到 IAM 用户、组和角色。','两者的区别在于由谁创建和维护。']);

Q('2.3','single',[0],
['A company wants to require all IAM users to use passwords of at least 14 characters that include symbols and expire every 90 days. What should it configure?',
 ['An IAM account password policy','An S3 bucket policy','A service control policy in AWS Organizations','An AWS KMS key policy'],
 'The IAM password policy sets rules for IAM user passwords, such as minimum length, character types, expiration and reuse.'],
['某公司要求所有 IAM 用户使用至少 14 个字符、包含符号且每 90 天过期的密码。应配置什么？',
 ['IAM 账户密码策略','S3 存储桶策略','AWS Organizations 中的服务控制策略','AWS KMS 密钥策略'],
 'IAM 密码策略为 IAM 用户的密码设置规则，例如最小长度、字符类型、过期时间和重复使用限制。'],
['Bucket policies control access to S3 buckets.','SCPs limit the maximum permissions of accounts.','Key policies control access to KMS keys.'],
['存储桶策略控制对 S3 存储桶的访问。','SCP 限制账户的最大权限。','密钥策略控制对 KMS 密钥的访问。']);

Q('2.3','single',[0],
['Which service stores database passwords and API keys securely and can rotate them automatically?',
 ['AWS Secrets Manager','AWS Certificate Manager','Amazon Macie','AWS Artifact'],
 'Secrets Manager stores, retrieves and automatically rotates secrets such as database credentials, with integration for Amazon RDS.'],
['哪项服务可以安全地存储数据库密码和 API 密钥，并自动轮换它们？',
 ['AWS Secrets Manager','AWS Certificate Manager','Amazon Macie','AWS Artifact'],
 'Secrets Manager 存储、检索并自动轮换数据库凭证等机密，并与 Amazon RDS 集成。'],
['ACM manages SSL/TLS certificates.','Macie discovers sensitive data in S3.','Artifact provides compliance reports.'],
['ACM 管理 SSL/TLS 证书。','Macie 发现 S3 中的敏感数据。','Artifact 提供合规报告。']);

Q('2.3','single',[0],
['A company needs a low-cost place to store application configuration values and some encrypted parameters, without automatic rotation. Which option fits?',
 ['AWS Systems Manager Parameter Store','AWS Secrets Manager','Amazon S3 Glacier Deep Archive','AWS CloudHSM'],
 'Parameter Store provides hierarchical storage for configuration data and secrets (standard parameters at no extra charge). Secrets Manager adds built-in automatic rotation at a per-secret price.'],
['某公司需要一个低成本的位置来存储应用配置值和一些加密参数，不需要自动轮换。哪个选项合适？',
 ['AWS Systems Manager Parameter Store','AWS Secrets Manager','Amazon S3 Glacier Deep Archive','AWS CloudHSM'],
 'Parameter Store 为配置数据和机密提供分层存储（标准参数不额外收费）。Secrets Manager 提供内置的自动轮换，按每个机密收费。'],
['Secrets Manager costs more and is chosen mainly for rotation.','Glacier Deep Archive is for archives, not live configuration.','CloudHSM provides hardware security modules, which is far more than needed.'],
['Secrets Manager 成本更高，主要因自动轮换而被选用。','Glacier Deep Archive 用于归档，而不是实时配置。','CloudHSM 提供硬件安全模块，远超所需。']);

Q('2.3','single',[0],
['What does multi-factor authentication (MFA) add to an AWS sign-in?',
 ['A second factor, such as a code from a device or a passkey, in addition to the password','A longer password','Encryption of all S3 objects','Automatic rotation of access keys'],
 'MFA requires something you know (password) and something you have (an authenticator app, hardware key or passkey), greatly reducing the risk of account takeover.'],
['多重身份验证（MFA）为 AWS 登录增加了什么？',
 ['在密码之外增加第二个因素，例如设备生成的验证码或通行密钥','更长的密码','对所有 S3 对象加密','自动轮换访问密钥'],
 'MFA 要求“你知道的东西”（密码）加上“你拥有的东西”（身份验证器应用、硬件密钥或通行密钥），大大降低账户被盗用的风险。'],
['A longer password is still a single factor.','MFA does not encrypt data.','MFA does not rotate keys.'],
['更长的密码仍然只是一个因素。','MFA 不会加密数据。','MFA 不会轮换密钥。']);

Q('2.3','single',[0],
['A company has 15 AWS accounts and wants employees to sign in once with their corporate credentials and access the accounts they are assigned to. Which service should it use?',
 ['AWS IAM Identity Center','Amazon Cognito','IAM users in each account','AWS Directory Service only'],
 'IAM Identity Center provides single sign-on for the workforce across multiple AWS accounts and applications, and can connect to an existing identity provider.'],
['某公司有 15 个 AWS 账户，希望员工用公司凭证登录一次，即可访问分配给他们的账户。应使用哪项服务？',
 ['AWS IAM Identity Center','Amazon Cognito','在每个账户中创建 IAM 用户','仅使用 AWS Directory Service'],
 'IAM Identity Center 为员工提供跨多个 AWS 账户和应用的单点登录，并可连接到现有的身份提供商。'],
['Cognito is for customers signing in to your apps.','IAM users in each account means many sets of credentials.','Directory Service provides directories but not multi-account SSO by itself.'],
['Cognito 用于客户登录你的应用。','在每个账户中创建 IAM 用户意味着要管理多套凭证。','Directory Service 提供目录服务，但本身不提供多账户单点登录。']);

Q('2.3','single',[0],
['A mobile app needs to let millions of customers sign up and sign in, including with social identity providers. Which service should the developers use?',
 ['Amazon Cognito','AWS IAM Identity Center','IAM users','AWS Organizations'],
 'Amazon Cognito provides customer identity and access management for web and mobile apps: sign-up, sign-in and federation with social and enterprise providers.'],
['某移动应用需要让数百万客户注册和登录，包括使用社交身份提供商。开发人员应使用哪项服务？',
 ['Amazon Cognito','AWS IAM Identity Center','IAM 用户','AWS Organizations'],
 'Amazon Cognito 为 Web 和移动应用提供客户身份和访问管理：注册、登录，以及与社交和企业身份提供商联合。'],
['Identity Center is for workforce access to AWS accounts.','IAM users are for people and workloads in your AWS account, not app customers.','Organizations manages AWS accounts.'],
['Identity Center 用于员工访问 AWS 账户。','IAM 用户用于你 AWS 账户中的人员和工作负载，而不是应用的客户。','Organizations 管理 AWS 账户。']);

Q('2.3','single',[0],
['A company already manages employee identities in Microsoft Active Directory and wants employees to access AWS without separate AWS passwords. What is this approach called?',
 ['Federation','Rightsizing','Consolidated billing','Encryption in transit'],
 'Federation lets users authenticated by an external identity provider (using SAML 2.0 or OIDC) access AWS through roles, without IAM users.'],
['某公司已在 Microsoft Active Directory 中管理员工身份，希望员工无需单独的 AWS 密码即可访问 AWS。这种方法叫什么？',
 ['联合','合理调整大小','整合账单','传输中加密'],
 '联合允许由外部身份提供商（使用 SAML 2.0 或 OIDC）验证的用户通过角色访问 AWS，无需 IAM 用户。'],
['Rightsizing concerns resource size.','Consolidated billing combines bills.','Encryption in transit protects data on the network.'],
['合理调整大小关注的是资源大小。','整合账单是合并账单。','传输中加密保护网络中的数据。']);

Q('2.3','multi',[0,1],
['Which TWO are recommended practices for IAM access keys? (Select TWO.)',
 ['Rotate access keys regularly and delete unused ones','Prefer IAM roles with temporary credentials over long-term access keys','Embed access keys in public code repositories for convenience','Create access keys for the root user','Share one set of access keys across the whole team'],
 'Use temporary credentials where possible, rotate and remove unused keys and never share or expose them.'],
['以下哪两项是关于 IAM 访问密钥的推荐做法？（选择两项。）',
 ['定期轮换访问密钥并删除未使用的密钥','优先使用提供临时凭证的 IAM 角色，而不是长期访问密钥','为方便起见把访问密钥嵌入公共代码仓库','为根用户创建访问密钥','整个团队共用一组访问密钥'],
 '尽可能使用临时凭证，轮换并删除未使用的密钥，绝不共享或暴露密钥。'],
['Keys in public repositories are quickly found and abused.','Root access keys should not exist.','Sharing keys removes accountability.'],
['公共仓库中的密钥很快会被发现并滥用。','不应存在根用户访问密钥。','共享密钥会失去可追溯性。']);

Q('2.3','single',[0],
['An IAM user needs to use the AWS CLI. Which credentials does the CLI use for programmatic access?',
 ['An access key ID and secret access key (or temporary credentials from a role or IAM Identity Center)','The user’s console password only','The root user’s MFA device','An SSH key pair for EC2'],
 'Programmatic access uses access keys or, preferably, temporary credentials. Console access uses a password.'],
['某 IAM 用户需要使用 AWS CLI。CLI 使用哪种凭证进行编程访问？',
 ['访问密钥 ID 和秘密访问密钥（或来自角色或 IAM Identity Center 的临时凭证）','只用该用户的控制台密码','根用户的 MFA 设备','EC2 的 SSH 密钥对'],
 '编程访问使用访问密钥，更推荐使用临时凭证。控制台访问使用密码。'],
['The console password is for the Management Console.','The root user’s MFA is not a CLI credential.','SSH keys log in to instances, not to the AWS API.'],
['控制台密码用于管理控制台。','根用户的 MFA 不是 CLI 凭证。','SSH 密钥用于登录实例，而不是调用 AWS API。']);

Q('2.3','single',[0],
['An administrator accidentally removed all permissions from the only IAM administrator. Who can restore the permissions?',
 ['The AWS account root user','Any IAM user without permissions','AWS Support, by changing the policy for you','Amazon Cognito'],
 'Restoring IAM user permissions when no administrator can do it is a task that requires the root user.'],
['管理员不小心移除了唯一一位 IAM 管理员的所有权限。谁能恢复这些权限？',
 ['AWS 账户根用户','任何没有权限的 IAM 用户','AWS Support，会替你修改策略','Amazon Cognito'],
 '当没有管理员能恢复 IAM 用户权限时，恢复权限是一项需要根用户才能执行的任务。'],
['A user without permissions cannot change IAM.','AWS Support does not modify your IAM policies.','Cognito manages app user identities.'],
['没有权限的用户无法更改 IAM。','AWS Support 不会修改你的 IAM 策略。','Cognito 管理应用的用户身份。']);

Q('2.3','single',[0],
['A company uses AWS Organizations and wants to prevent any account in the Development OU from using services outside approved Regions, even for administrators. What should it use?',
 ['A service control policy (SCP)','An IAM password policy','A security group','An S3 bucket policy'],
 'SCPs set the maximum permissions for accounts in an organization or OU. They apply to all IAM users and roles in those accounts, including administrators.'],
['某公司使用 AWS Organizations，希望阻止开发 OU 中的任何账户（即使是管理员）在批准区域之外使用服务。应使用什么？',
 ['服务控制策略（SCP）','IAM 密码策略','安全组','S3 存储桶策略'],
 'SCP 为组织或 OU 中的账户设置最大权限，适用于这些账户中的所有 IAM 用户和角色，包括管理员。'],
['Password policies govern passwords.','Security groups filter network traffic.','Bucket policies control access to a bucket.'],
['密码策略管理的是密码。','安全组筛选网络流量。','存储桶策略控制对存储桶的访问。']);

Q('2.3','single',[0],
['Where should a company store the credentials of the AWS account root user?',
 ['In a secure location, such as a password manager or safe, protected by MFA and available only to a few trusted people','In a shared spreadsheet for all engineers','Inside the source code of the application','In a public S3 bucket so they are not lost'],
 'Root credentials should be strongly protected and rarely used. Credential storage should be secure and access to it limited.'],
['公司应把 AWS 账户根用户的凭证存放在哪里？',
 ['存放在安全的位置，例如密码管理器或保险柜，由 MFA 保护，只有少数受信任的人可以获取','存放在所有工程师共享的电子表格中','存放在应用的源代码中','存放在公开的 S3 存储桶中以免丢失'],
 '根用户凭证应受到严密保护，且很少使用。凭证存储应安全，访问应受到限制。'],
['Shared spreadsheets expose credentials widely.','Source code can leak.','A public bucket exposes credentials to everyone.'],
['共享电子表格会让凭证广泛暴露。','源代码可能泄露。','公开存储桶会把凭证暴露给所有人。']);

Q('2.3','multi',[0,1],
['Which TWO are features of AWS Identity and Access Management (IAM)? (Select TWO.)',
 ['Fine-grained permissions using policies','Multi-factor authentication for users','Automatic scaling of EC2 instances','DDoS protection for websites','Content delivery from edge locations'],
 'IAM manages identities and permissions, including MFA. Auto scaling, Shield and CloudFront provide the other features.'],
['以下哪两项是 AWS Identity and Access Management（IAM）的功能？（选择两项。）',
 ['使用策略实现精细的权限控制','为用户提供多重身份验证','自动伸缩 EC2 实例','为网站提供 DDoS 防护','从边缘站点分发内容'],
 'IAM 管理身份和权限，包括 MFA。其他功能分别由弹性伸缩、Shield 和 CloudFront 提供。'],
['Auto scaling is an EC2 Auto Scaling feature.','DDoS protection comes from AWS Shield.','Content delivery is Amazon CloudFront.'],
['自动伸缩是 EC2 Auto Scaling 的功能。','DDoS 防护由 AWS Shield 提供。','内容分发是 Amazon CloudFront 的功能。']);

Q('2.3','single',[0],
['IAM is a global service. What does this mean for IAM users and roles?',
 ['They are available across all Regions of the account, not tied to one Region','They must be created separately in each Region','They exist only in the us-east-1 Region and cannot be used elsewhere','They are shared with every AWS customer'],
 'IAM identities and policies apply across all commercial Regions in the account.'],
['IAM 是全球性服务。这对 IAM 用户和角色意味着什么？',
 ['它们在账户的所有区域中都可用，不绑定到某个区域','必须在每个区域分别创建','它们只存在于 us-east-1 区域，不能在其他地方使用','它们与所有 AWS 客户共享'],
 'IAM 身份和策略适用于账户中的所有商业区域。'],
['You create IAM identities once per account.','They can be used in every Region.','IAM identities belong to your account only.'],
['每个账户只需创建一次 IAM 身份。','它们可以在每个区域中使用。','IAM 身份只属于你的账户。']);

Q('2.3','single',[0],
['A company wants to find S3 buckets and IAM roles in its account that are shared with external accounts. Which feature should it use?',
 ['IAM Access Analyzer','IAM credential report','Amazon CloudWatch','AWS Cost Explorer'],
 'IAM Access Analyzer identifies resources shared with external entities and helps you find unused access, supporting least privilege.'],
['某公司希望找出其账户中与外部账户共享的 S3 存储桶和 IAM 角色。应使用哪项功能？',
 ['IAM Access Analyzer','IAM 凭证报告','Amazon CloudWatch','AWS Cost Explorer'],
 'IAM Access Analyzer 识别与外部实体共享的资源，并帮助发现未使用的访问权限，以落实最低权限原则。'],
['The credential report lists credential status.','CloudWatch monitors metrics and logs.','Cost Explorer analyses spending.'],
['凭证报告列出凭证状态。','CloudWatch 监控指标和日志。','Cost Explorer 分析支出。']);

/* ================= 2.4 Security resources ================= */
Q('2.4','single',[0],
['Which AWS service helps protect against DDoS attacks on applications behind Amazon CloudFront and Route 53, with automatic protection for every customer?',
 ['AWS Shield','AWS Artifact','Amazon Macie','AWS Secrets Manager'],
 'AWS Shield Standard is automatically applied to all customers, protecting resources such as CloudFront and Route 53 against common DDoS attacks.'],
['哪项 AWS 服务帮助防护针对 Amazon CloudFront 和 Route 53 后端应用的 DDoS 攻击，并为每位客户提供自动防护？',
 ['AWS Shield','AWS Artifact','Amazon Macie','AWS Secrets Manager'],
 'AWS Shield Standard 自动应用于所有客户，保护 CloudFront 和 Route 53 等资源免受常见 DDoS 攻击。'],
['Artifact provides compliance reports.','Macie discovers sensitive data.','Secrets Manager stores secrets.'],
['Artifact 提供合规报告。','Macie 发现敏感数据。','Secrets Manager 存储机密。']);

Q('2.4','single',[0],
['A company wants to block requests from specific countries and limit the rate of requests from a single IP address to its API. Which service should it use?',
 ['AWS WAF','Network ACLs only','Amazon Inspector','AWS Config'],
 'AWS WAF supports geographic match rules, IP sets and rate-based rules for web applications and APIs.'],
['某公司希望阻止来自特定国家的请求，并限制单个 IP 地址对其 API 的请求速率。应使用哪项服务？',
 ['AWS WAF','仅使用网络 ACL','Amazon Inspector','AWS Config'],
 'AWS WAF 为 Web 应用和 API 提供地理位置匹配规则、IP 集和基于速率的规则。'],
['Network ACLs filter by IP and port, not by country or request rate.','Inspector scans for vulnerabilities.','Config tracks configurations.'],
['网络 ACL 按 IP 和端口筛选，不能按国家或请求速率筛选。','Inspector 扫描漏洞。','Config 跟踪配置。']);

Q('2.4','single',[0],
['A company wants to buy a third-party firewall appliance and security software that is already configured to run on AWS. Where should it look?',
 ['AWS Marketplace','AWS Artifact','AWS Health Dashboard','AWS Knowledge Center'],
 'AWS Marketplace is a curated digital catalogue of third-party software, including security products, that you can buy and deploy on AWS.'],
['某公司希望购买已预先配置好、可在 AWS 上运行的第三方防火墙设备和安全软件。应在哪里寻找？',
 ['AWS Marketplace','AWS Artifact','AWS Health Dashboard','AWS 知识中心'],
 'AWS Marketplace 是经过筛选的第三方软件数字目录，包括安全产品，可以购买并部署在 AWS 上。'],
['Artifact provides compliance documents.','The Health Dashboard shows service events.','The Knowledge Center answers common questions.'],
['Artifact 提供合规文档。','Health Dashboard 显示服务事件。','知识中心解答常见问题。']);

Q('2.4','single',[0],
['Which AWS service checks an account for security issues such as root accounts without MFA, open security group ports and publicly accessible S3 buckets?',
 ['AWS Trusted Advisor','AWS Artifact','AWS Pricing Calculator','Amazon Polly'],
 'Trusted Advisor provides best-practice checks in categories including security, cost optimization, performance, fault tolerance and service quotas.'],
['哪项 AWS 服务会检查账户中的安全问题，例如未启用 MFA 的根用户、开放的安全组端口和可公开访问的 S3 存储桶？',
 ['AWS Trusted Advisor','AWS Artifact','AWS 定价计算器','Amazon Polly'],
 'Trusted Advisor 提供多个类别的最佳实践检查，包括安全性、成本优化、性能、容错能力和服务配额。'],
['Artifact provides AWS compliance reports.','The Pricing Calculator estimates costs.','Polly converts text to speech.'],
['Artifact 提供 AWS 合规报告。','定价计算器估算成本。','Polly 把文本转换为语音。']);

Q('2.4','single',[0],
['A company wants a managed, stateful network firewall with intrusion prevention for traffic entering and leaving its VPCs. Which service should it use?',
 ['AWS Network Firewall','AWS WAF','Security groups only','AWS Shield Standard'],
 'AWS Network Firewall provides stateful inspection, intrusion prevention and filtering for VPC traffic.'],
['某公司希望为进出其 VPC 的流量部署一个具备入侵防御功能、有状态的托管网络防火墙。应使用哪项服务？',
 ['AWS Network Firewall','AWS WAF','仅使用安全组','AWS Shield Standard'],
 'AWS Network Firewall 为 VPC 流量提供有状态检测、入侵防御和筛选功能。'],
['WAF filters HTTP(S) requests, not all VPC traffic.','Security groups do not provide intrusion prevention.','Shield protects against DDoS.'],
['WAF 筛选的是 HTTP(S) 请求，而不是所有 VPC 流量。','安全组不提供入侵防御。','Shield 用于防护 DDoS。']);

Q('2.4','single',[0],
['A developer wants to read community questions and answers about AWS security from AWS experts and other customers. Which resource should they use?',
 ['AWS re:Post','AWS Artifact','AWS Organizations','AWS Budgets'],
 'AWS re:Post is a community-driven question-and-answer service where AWS experts and community members answer questions.'],
['某开发人员希望阅读由 AWS 专家和其他客户解答的 AWS 安全社区问答。应使用哪个资源？',
 ['AWS re:Post','AWS Artifact','AWS Organizations','AWS Budgets'],
 'AWS re:Post 是一个社区驱动的问答服务，由 AWS 专家和社区成员解答问题。'],
['Artifact provides compliance reports.','Organizations manages accounts.','Budgets tracks spending.'],
['Artifact 提供合规报告。','Organizations 管理账户。','Budgets 跟踪支出。']);

Q('2.4','multi',[0,1],
['Which TWO AWS resources provide official security guidance and documentation? (Select TWO.)',
 ['AWS Security Center','AWS Knowledge Center','AWS Marketplace seller listings','AWS Pricing Calculator','Amazon Lightsail blueprints'],
 'The AWS Security Center and Knowledge Center are official sources of security information and answers. The others are not security guidance.'],
['哪两项 AWS 资源提供官方的安全指导和文档？（选择两项。）',
 ['AWS 安全中心','AWS 知识中心','AWS Marketplace 卖家列表','AWS 定价计算器','Amazon Lightsail 蓝图'],
 'AWS 安全中心和知识中心是安全信息和解答的官方来源。其他选项都不是安全指导。'],
['Seller listings describe products, not AWS security guidance.','The Pricing Calculator estimates costs.','Lightsail blueprints are application templates.'],
['卖家列表描述的是产品，而不是 AWS 安全指导。','定价计算器估算成本。','Lightsail 蓝图是应用模板。']);

Q('2.4','single',[0],
['Which service lets a company detect threats in its accounts by analysing logs, without deploying any agents or software?',
 ['Amazon GuardDuty','Amazon Inspector agent on each instance','AWS Network Firewall appliances','AWS WAF rules'],
 'GuardDuty is enabled with a few clicks and analyses data sources such as CloudTrail, VPC Flow Logs and DNS logs, with no agents required for its core detection.'],
['哪项服务让公司无需部署任何代理或软件，就能通过分析日志检测账户中的威胁？',
 ['Amazon GuardDuty','每个实例上的 Amazon Inspector 代理','AWS Network Firewall 设备','AWS WAF 规则'],
 '只需点击几下即可启用 GuardDuty，它会分析 CloudTrail、VPC 流日志和 DNS 日志等数据源，核心检测无需代理。'],
['Inspector scans for vulnerabilities, not threats in activity logs.','Network Firewall filters traffic.','WAF filters web requests.'],
['Inspector 扫描漏洞，而不是活动日志中的威胁。','Network Firewall 筛选流量。','WAF 筛选 Web 请求。']);

Q('2.4','single',[0],
['A company wants to see a security score and a list of failed best-practice checks across all its AWS accounts in one place. Which service fits best?',
 ['AWS Security Hub','AWS Artifact','AWS Cost Explorer','Amazon Route 53'],
 'Security Hub runs automated checks against standards such as the AWS Foundational Security Best Practices and shows a security score across accounts.'],
['某公司希望在一个地方看到所有 AWS 账户的安全评分以及未通过的最佳实践检查列表。哪项服务最合适？',
 ['AWS Security Hub','AWS Artifact','AWS Cost Explorer','Amazon Route 53'],
 'Security Hub 根据 AWS 基础安全最佳实践等标准运行自动检查，并显示跨账户的安全评分。'],
['Artifact provides compliance reports from AWS.','Cost Explorer analyses spending.','Route 53 is DNS.'],
['Artifact 提供来自 AWS 的合规报告。','Cost Explorer 分析支出。','Route 53 是 DNS 服务。']);

Q('2.4','single',[0],
['Which Trusted Advisor checks are available to every AWS customer on the Basic Support plan?',
 ['Core security and service quota checks','All checks in every category','Only cost optimization checks','No checks at all'],
 'Basic Support includes core Trusted Advisor checks (such as S3 bucket permissions, security groups, IAM use, root MFA and service quotas). Paid plans unlock the full set.'],
['使用 Basic Support 计划的每位 AWS 客户都可以使用哪些 Trusted Advisor 检查？',
 ['核心安全检查和服务配额检查','所有类别的全部检查','只有成本优化检查','完全没有检查'],
 'Basic Support 包含 Trusted Advisor 核心检查（例如 S3 存储桶权限、安全组、IAM 使用、根用户 MFA 和服务配额）。付费计划可以使用全部检查。'],
['The full set requires a paid support plan.','Cost optimization checks require a paid plan.','Basic does include core checks.'],
['全部检查需要付费支持计划。','成本优化检查需要付费计划。','Basic 确实包含核心检查。']);

Q('2.4','single',[0],
['A company wants an AWS Partner to help it design and run its security operations. Where can it find qualified partners?',
 ['AWS Partner Network (AWS Partner Solutions Finder)','AWS Artifact','AWS Trusted Advisor','AWS Config'],
 'The AWS Partner Network includes consulting partners and managed security service providers that hold AWS security competencies.'],
['某公司希望由 AWS 合作伙伴帮助它设计和运营安全运营体系。它可以在哪里找到合格的合作伙伴？',
 ['AWS 合作伙伴网络（AWS Partner Solutions Finder）','AWS Artifact','AWS Trusted Advisor','AWS Config'],
 'AWS 合作伙伴网络包括拥有 AWS 安全能力认证的咨询合作伙伴和托管安全服务提供商。'],
['Artifact provides compliance reports.','Trusted Advisor runs checks; it does not list partners.','Config records configurations.'],
['Artifact 提供合规报告。','Trusted Advisor 运行检查，不列出合作伙伴。','Config 记录配置。']);

Q('2.4','single',[0],
['Which statement about AWS Marketplace security products is correct?',
 ['They are third-party products that can be deployed in a customer’s account and billed through AWS','They are free and built only by AWS','They replace the customer’s responsibilities under the shared responsibility model','They can be used only by Enterprise Support customers'],
 'Marketplace offers third-party software (firewalls, antivirus, SIEM and more) billed on your AWS bill. Customers remain responsible for configuring and using them.'],
['关于 AWS Marketplace 安全产品，哪种说法正确？',
 ['它们是可部署在客户账户中、通过 AWS 计费的第三方产品','它们是免费的，而且只由 AWS 构建','它们取代了客户在责任共担模式下的责任','只有 Enterprise Support 客户才能使用'],
 'Marketplace 提供第三方软件（防火墙、防病毒、SIEM 等），费用计入你的 AWS 账单。客户仍负责配置和使用这些产品。'],
['Most are paid and built by third parties.','Customer responsibilities remain.','Any customer can use Marketplace.'],
['大多数产品需要付费，且由第三方构建。','客户的责任仍然存在。','任何客户都可以使用 Marketplace。']);

Q('2.4','single',[0],
['A company wants to learn about recently disclosed security vulnerabilities that affect AWS services. Where should it check?',
 ['AWS security bulletins in the AWS Security Center','AWS Cost and Usage Report','AWS Marketplace reviews','AWS Pricing Calculator'],
 'AWS publishes security bulletins about vulnerabilities and the actions customers should take.'],
['某公司希望了解最近公布的、影响 AWS 服务的安全漏洞。应查看哪里？',
 ['AWS 安全中心的 AWS 安全公告','AWS 成本和使用情况报告','AWS Marketplace 评论','AWS 定价计算器'],
 'AWS 会发布有关漏洞以及客户应采取的措施的安全公告。'],
['The CUR contains billing data.','Marketplace reviews are product feedback.','The Pricing Calculator estimates costs.'],
['CUR 包含的是账单数据。','Marketplace 评论是产品反馈。','定价计算器估算成本。']);

Q('2.4','single',[0],
['A company’s security team wants Amazon EventBridge to send an alert whenever GuardDuty raises a high-severity finding. Why is this useful?',
 ['It automates response to security events instead of relying on someone to check a console','It encrypts all data automatically','It prevents all attacks from happening','It replaces the need for IAM'],
 'Integrating security services with EventBridge and SNS lets you notify people or trigger automated remediation, which supports the "prepare for security events" principle.'],
['某公司的安全团队希望在 GuardDuty 发出高严重性发现时，由 Amazon EventBridge 发送告警。这样做有什么好处？',
 ['自动响应安全事件，而不是依赖人工查看控制台','自动加密所有数据','阻止所有攻击发生','不再需要 IAM'],
 '把安全服务与 EventBridge 和 SNS 集成，可以通知相关人员或触发自动修复，符合“为安全事件做好准备”的原则。'],
['Alerts do not encrypt data.','No service prevents all attacks.','IAM is still needed for access control.'],
['告警不会加密数据。','没有任何服务能阻止所有攻击。','访问控制仍然需要 IAM。']);

Q('2.4','multi',[0,1],
['A company wants to protect a public web application from both DDoS attacks and malicious HTTP requests. Which TWO services should it use? (Select TWO.)',
 ['AWS Shield','AWS WAF','AWS Artifact','Amazon Macie','AWS Backup'],
 'Shield protects against DDoS attacks and WAF filters malicious web requests. They are often used together with CloudFront.'],
['某公司希望保护一个公开的 Web 应用，使其免受 DDoS 攻击和恶意 HTTP 请求的影响。应使用哪两项服务？（选择两项。）',
 ['AWS Shield','AWS WAF','AWS Artifact','Amazon Macie','AWS Backup'],
 'Shield 防护 DDoS 攻击，WAF 筛选恶意 Web 请求。两者通常与 CloudFront 一起使用。'],
['Artifact provides compliance reports.','Macie finds sensitive data in S3.','Backup manages backups.'],
['Artifact 提供合规报告。','Macie 在 S3 中查找敏感数据。','Backup 管理备份。']);

Q('2.4','single',[0],
['Which security information resource contains detailed whitepapers such as the security pillar of the AWS Well-Architected Framework?',
 ['AWS Whitepapers and Guides','AWS Cost Explorer','Amazon Lightsail','AWS Marketplace billing page'],
 'AWS publishes whitepapers and guides, including the Well-Architected security pillar and security best practices.'],
['哪个安全信息资源包含详细的白皮书，例如 AWS Well-Architected 框架的安全性支柱？',
 ['AWS 白皮书和指南','AWS Cost Explorer','Amazon Lightsail','AWS Marketplace 账单页面'],
 'AWS 发布白皮书和指南，包括 Well-Architected 安全性支柱和安全最佳实践。'],
['Cost Explorer analyses spending.','Lightsail is a compute service.','The billing page shows charges.'],
['Cost Explorer 分析支出。','Lightsail 是计算服务。','账单页面显示费用。']);

Q('2.4','single',[0],
['Which AWS service helps a security team respond to findings by using pre-built integrations that send findings to ticketing and SIEM tools from AWS Partners?',
 ['AWS Security Hub','Amazon Lightsail','AWS Snowball Edge','Amazon Polly'],
 'Security Hub integrates with many AWS Partner products, sending and receiving findings so teams can manage them in their existing tools.'],
['哪项 AWS 服务通过预置的集成，把安全发现发送到 AWS 合作伙伴的工单和 SIEM 工具中，帮助安全团队进行响应？',
 ['AWS Security Hub','Amazon Lightsail','AWS Snowball Edge','Amazon Polly'],
 'Security Hub 与许多 AWS 合作伙伴产品集成，可以发送和接收安全发现，让团队在现有工具中管理这些发现。'],
['Lightsail is simple compute.','Snowball Edge moves data offline.','Polly converts text to speech.'],
['Lightsail 是简单的计算服务。','Snowball Edge 以离线方式迁移数据。','Polly 把文本转换为语音。']);

Q('2.4','single',[0],
['A company notices that one of its EC2 instances is sending spam and suspects compromise. Which AWS resource provides guidance on investigating and responding?',
 ['The AWS Security Incident Response Guide and AWS security documentation','AWS Pricing Calculator','AWS Free Tier page','Amazon Lightsail console'],
 'AWS provides incident response guidance (whitepapers, documentation and Knowledge Center articles). AWS Trust & Safety may also contact you about abuse reports.'],
['某公司发现其一台 EC2 实例正在发送垃圾邮件，怀疑已被入侵。哪个 AWS 资源提供调查和响应方面的指导？',
 ['AWS 安全事件响应指南和 AWS 安全文档','AWS 定价计算器','AWS 免费套餐页面','Amazon Lightsail 控制台'],
 'AWS 提供事件响应指导（白皮书、文档和知识中心文章）。AWS 信任与安全团队也可能就滥用举报与你联系。'],
['The Pricing Calculator estimates costs.','The Free Tier page lists free offers.','The Lightsail console manages Lightsail resources.'],
['定价计算器估算成本。','免费套餐页面列出免费项目。','Lightsail 控制台管理 Lightsail 资源。']);
})();
