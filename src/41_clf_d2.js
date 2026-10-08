/* CLF-C02 lessons, domain 2: Security and Compliance (30%) */

/* ===================== TASK 2.1 ===================== */
CLF.tasks['2.1'] = {d:'d2',
title:{en:'Understand the AWS shared responsibility model', zh:'了解 AWS 责任共担模式'},
obj:[
 ['Recognize the components of the AWS shared responsibility model','识别 AWS 责任共担模式的组成部分'],
 ['Describe the customer’s responsibilities, AWS’s responsibilities and the responsibilities they share','描述客户的责任、AWS 的责任以及双方共担的责任'],
 ['Describe how responsibilities shift depending on the service used (for example, Amazon RDS, AWS Lambda, Amazon EC2)','描述责任如何随所用服务而变化（例如 Amazon RDS、AWS Lambda、Amazon EC2）']
],
en:`
<h3>The core idea</h3>
<div class="tw"><table><thead><tr><th>AWS: security <b>of</b> the cloud</th><th>Customer: security <b>in</b> the cloud</th></tr></thead><tbody>
<tr><td>Physical security of data centres</td><td>Customer data, and who can access it</td></tr>
<tr><td>Hardware, servers, storage and networking infrastructure</td><td>Identity and access management (IAM users, roles, policies, MFA)</td></tr>
<tr><td>The virtualization layer (hypervisor)</td><td>Guest operating system patches and updates (on Amazon EC2)</td></tr>
<tr><td>The global infrastructure: Regions, Availability Zones, edge locations</td><td>Application code and its security</td></tr>
<tr><td>The software of managed services (for example, the database engine in Amazon RDS)</td><td>Network and firewall configuration (security groups, network ACLs)</td></tr>
<tr><td>Decommissioning old storage devices securely</td><td>Encryption choices: client-side and server-side, in transit and at rest</td></tr>
</tbody></table></div>

<h3>Shared controls</h3>
<p>Some controls apply to both layers, each in its own context:</p>
<ul>
<li><b>Patch management:</b> AWS patches the infrastructure; customers patch their guest operating systems and applications.</li>
<li><b>Configuration management:</b> AWS configures its infrastructure; customers configure their operating systems, databases and applications.</li>
<li><b>Awareness and training:</b> AWS trains its employees; customers train their own staff.</li>
</ul>

<h3>Responsibility shifts with the service</h3>
<p>The more managed the service, the more AWS takes on.</p>
<div class="tw"><table><thead><tr><th>Service</th><th>AWS manages</th><th>Customer manages</th></tr></thead><tbody>
<tr><td>Amazon EC2 (infrastructure as a service)</td><td>Physical hosts, hypervisor, network infrastructure</td><td>Guest OS and its patches, installed software, security groups, data and encryption, IAM</td></tr>
<tr><td>Amazon RDS (managed database)</td><td>Hardware, OS, database engine installation and patching, automated backups</td><td>Database users and permissions, network access (security groups), choosing encryption, the data itself</td></tr>
<tr><td>AWS Lambda (serverless)</td><td>Servers, OS, runtime, scaling, availability</td><td>Function code, IAM permissions for the function, the data it handles</td></tr>
<tr><td>Amazon S3 (managed storage)</td><td>Storage infrastructure and durability</td><td>Bucket policies and access settings, encryption choices, object data</td></tr>
</tbody></table></div>
<div class="box trap"><p>The customer is <b>always</b> responsible for their data and for managing who has access to it (IAM), whatever the service.</p></div>
<div class="box trap"><p><b>Patching the guest OS on EC2</b> is the customer's job. <b>Patching the database engine on RDS</b> is AWS's job. This difference appears often on the exam.</p></div>
`,
zh:`
<h3>核心思想</h3>
<div class="tw"><table><thead><tr><th>AWS：负责云<b>本身</b>的安全</th><th>客户：负责云<b>中</b>的安全</th></tr></thead><tbody>
<tr><td>数据中心的物理安全</td><td>客户数据以及谁能访问它</td></tr>
<tr><td>硬件、服务器、存储和网络基础设施</td><td>身份和访问管理（IAM 用户、角色、策略、MFA）</td></tr>
<tr><td>虚拟化层（虚拟机管理程序）</td><td>客户操作系统的补丁和更新（在 Amazon EC2 上）</td></tr>
<tr><td>全球基础设施：区域、可用区、边缘站点</td><td>应用程序代码及其安全</td></tr>
<tr><td>托管服务的软件（例如 Amazon RDS 中的数据库引擎）</td><td>网络和防火墙配置（安全组、网络 ACL）</td></tr>
<tr><td>安全地销毁退役的存储设备</td><td>加密选择：客户端与服务器端、传输中加密与静态加密</td></tr>
</tbody></table></div>

<h3>共担控制</h3>
<p>有些控制措施同时适用于双方，但各自负责自己的层面：</p>
<ul>
<li><b>补丁管理：</b>AWS 为基础设施打补丁；客户为自己的客户操作系统和应用程序打补丁。</li>
<li><b>配置管理：</b>AWS 配置其基础设施；客户配置自己的操作系统、数据库和应用程序。</li>
<li><b>意识与培训：</b>AWS 培训自己的员工；客户培训自己的员工。</li>
</ul>

<h3>责任随服务而变化</h3>
<p>服务的托管程度越高，AWS 承担的责任就越多。</p>
<div class="tw"><table><thead><tr><th>服务</th><th>AWS 负责</th><th>客户负责</th></tr></thead><tbody>
<tr><td>Amazon EC2（基础设施即服务）</td><td>物理主机、虚拟机管理程序、网络基础设施</td><td>客户操作系统及其补丁、安装的软件、安全组、数据与加密、IAM</td></tr>
<tr><td>Amazon RDS（托管数据库）</td><td>硬件、操作系统、数据库引擎的安装与补丁、自动备份</td><td>数据库用户与权限、网络访问（安全组）、选择是否加密、数据本身</td></tr>
<tr><td>AWS Lambda（无服务器）</td><td>服务器、操作系统、运行时、伸缩、可用性</td><td>函数代码、函数的 IAM 权限、所处理的数据</td></tr>
<tr><td>Amazon S3（托管存储）</td><td>存储基础设施及持久性</td><td>存储桶策略和访问设置、加密选择、对象数据</td></tr>
</tbody></table></div>
<div class="box trap"><p>无论使用哪种服务，客户<b>始终</b>要对自己的数据以及谁能访问这些数据（IAM）负责。</p></div>
<div class="box trap"><p><b>为 EC2 上的客户操作系统打补丁</b>是客户的工作；<b>为 RDS 上的数据库引擎打补丁</b>是 AWS 的工作。这一区别经常出现在考试中。</p></div>
`};

/* ===================== TASK 2.2 ===================== */
CLF.tasks['2.2'] = {d:'d2',
title:{en:'Understand AWS Cloud security, governance, and compliance concepts', zh:'了解 AWS 云安全、监管和合规性概念'},
obj:[
 ['Know AWS compliance and governance concepts, and where to find compliance information (for example, AWS Artifact)','了解 AWS 合规性与治理概念，以及在哪里查找合规信息（例如 AWS Artifact）'],
 ['Understand compliance needs across geographic locations and industries','了解不同地区和行业的合规需求'],
 ['Describe how customers secure resources on AWS (Amazon Inspector, AWS Security Hub, Amazon GuardDuty, AWS Shield)','描述客户如何保护 AWS 上的资源（Amazon Inspector、AWS Security Hub、Amazon GuardDuty、AWS Shield）'],
 ['Identify encryption options: encryption in transit and encryption at rest','识别加密选项：传输中加密和静态加密'],
 ['Recognize services for governance and compliance: monitoring with Amazon CloudWatch; auditing with AWS CloudTrail and AWS Config; access reports; where security logs are kept','识别用于治理和合规的服务：用 Amazon CloudWatch 监控；用 AWS CloudTrail 和 AWS Config 审计；访问报告；安全日志存放位置']
],
en:`
<h3>Compliance on AWS</h3>
<ul>
<li>AWS infrastructure is certified against many global and industry standards (for example, ISO 27001, SOC 1/2/3, PCI DSS, HIPAA eligibility, FedRAMP, GDPR support).</li>
<li><b>AWS Artifact</b> is the self-service portal for downloading AWS compliance reports (such as SOC reports and ISO certificates) and accepting agreements (such as the Business Associate Addendum for HIPAA).</li>
<li><b>AWS Compliance Programs</b> pages show which services are in scope for each program. Compliance requirements <b>vary by service</b>: check that the specific services you use are in scope.</li>
<li>Compliance needs differ by <b>country and industry</b>: data residency laws may require keeping data in a particular Region, and industries such as healthcare and finance have their own rules.</li>
<li>Using compliant infrastructure does not make your workload compliant automatically: you must still configure your own applications and data correctly (shared responsibility).</li>
</ul>

<h3>Encryption</h3>
<div class="tw"><table><thead><tr><th>Type</th><th>Protects</th><th>How on AWS</th></tr></thead><tbody>
<tr><td>Encryption in transit</td><td>Data moving across a network</td><td>TLS/HTTPS; certificates from AWS Certificate Manager (ACM); VPN connections</td></tr>
<tr><td>Encryption at rest</td><td>Stored data</td><td>AWS Key Management Service (AWS KMS) keys for S3, EBS, RDS, DynamoDB and more; AWS CloudHSM for dedicated hardware security modules</td></tr>
</tbody></table></div>
<p>Benefits of cloud security: encryption is built into most services and easy to turn on, AWS manages the security of the infrastructure, and you get tools for visibility and automated response.</p>

<h3>Security services customers use</h3>
<div class="tw"><table><thead><tr><th>Service</th><th>What it does</th><th>Question cue</th></tr></thead><tbody>
<tr><td>Amazon GuardDuty</td><td>Intelligent threat detection: analyses logs (CloudTrail, VPC Flow Logs, DNS) for malicious or unusual activity</td><td>"Detect compromised instances or unusual API calls"</td></tr>
<tr><td>Amazon Inspector</td><td>Automated vulnerability scanning of EC2 instances, container images and Lambda functions</td><td>"Find software vulnerabilities and exposure"</td></tr>
<tr><td>AWS Security Hub</td><td>Central view of security findings from many services, with automated best-practice checks</td><td>"Single dashboard of security alerts and compliance status"</td></tr>
<tr><td>AWS Shield</td><td>DDoS protection. Shield Standard is automatic and free; Shield Advanced adds extra protection and a response team</td><td>"Protect against DDoS attacks"</td></tr>
<tr><td>Amazon Macie</td><td>Discovers sensitive data (such as personal information) in Amazon S3</td><td>"Find PII in S3 buckets"</td></tr>
<tr><td>Amazon Detective</td><td>Investigates the root cause of security findings</td><td>"Analyse and investigate a security issue"</td></tr>
</tbody></table></div>

<h3>Monitoring, auditing and logs</h3>
<div class="tw"><table><thead><tr><th>Service</th><th>Answers the question</th></tr></thead><tbody>
<tr><td>Amazon CloudWatch</td><td>"How are my resources performing?" Metrics, logs (CloudWatch Logs), alarms and dashboards</td></tr>
<tr><td>AWS CloudTrail</td><td>"Who did what, when, from where?" Records API calls and account activity, for auditing</td></tr>
<tr><td>AWS Config</td><td>"What does my resource configuration look like, how has it changed, and is it compliant?" Configuration history and rules</td></tr>
<tr><td>IAM access reports</td><td>Credential reports (status of all users' passwords, access keys and MFA) and last-accessed information to remove unused permissions</td></tr>
</tbody></table></div>
<div class="box trap"><p><b>CloudTrail vs CloudWatch vs Config:</b> CloudTrail = <i>who did it</i> (API activity). CloudWatch = <i>performance and alarms</i>. Config = <i>resource configuration and compliance over time</i>.</p></div>
<div class="box rem"><p>Security logs usually live in <b>CloudTrail</b> (account activity), <b>CloudWatch Logs</b> (application and system logs), <b>VPC Flow Logs</b> (network traffic) and <b>Amazon S3</b> (long-term storage of log files).</p></div>
`,
zh:`
<h3>AWS 上的合规性</h3>
<ul>
<li>AWS 基础设施通过了众多全球和行业标准认证（例如 ISO 27001、SOC 1/2/3、PCI DSS、符合 HIPAA 资格、FedRAMP、支持 GDPR）。</li>
<li><b>AWS Artifact</b> 是自助门户，可下载 AWS 合规报告（例如 SOC 报告和 ISO 证书），并接受相关协议（例如 HIPAA 的业务伙伴附录）。</li>
<li><b>AWS 合规计划</b>页面列出每个计划覆盖的服务。合规要求<b>因服务而异</b>：要确认你所用的具体服务在覆盖范围内。</li>
<li>合规需求因<b>国家和行业</b>而不同：数据驻留法律可能要求数据留在特定区域，医疗、金融等行业也有各自的规定。</li>
<li>使用合规的基础设施并不会让你的工作负载自动合规：你仍须正确配置自己的应用和数据（责任共担）。</li>
</ul>

<h3>加密</h3>
<div class="tw"><table><thead><tr><th>类型</th><th>保护对象</th><th>在 AWS 上的实现方式</th></tr></thead><tbody>
<tr><td>传输中加密</td><td>在网络中传输的数据</td><td>TLS/HTTPS；使用 AWS Certificate Manager（ACM）颁发的证书；VPN 连接</td></tr>
<tr><td>静态加密</td><td>存储的数据</td><td>为 S3、EBS、RDS、DynamoDB 等使用 AWS Key Management Service（AWS KMS）密钥；需要专用硬件安全模块时使用 AWS CloudHSM</td></tr>
</tbody></table></div>
<p>云安全的益处：大多数服务内置加密且易于开启，AWS 负责基础设施的安全，还提供可见性和自动响应工具。</p>

<h3>客户使用的安全服务</h3>
<div class="tw"><table><thead><tr><th>服务</th><th>作用</th><th>题目线索</th></tr></thead><tbody>
<tr><td>Amazon GuardDuty</td><td>智能威胁检测：分析日志（CloudTrail、VPC 流日志、DNS），发现恶意或异常活动</td><td>“检测被入侵的实例或异常 API 调用”</td></tr>
<tr><td>Amazon Inspector</td><td>自动扫描 EC2 实例、容器镜像和 Lambda 函数的漏洞</td><td>“发现软件漏洞和暴露风险”</td></tr>
<tr><td>AWS Security Hub</td><td>集中查看来自多项服务的安全发现，并自动进行最佳实践检查</td><td>“统一查看安全告警和合规状态的仪表板”</td></tr>
<tr><td>AWS Shield</td><td>DDoS 防护。Shield Standard 自动启用且免费；Shield Advanced 提供额外防护和响应团队</td><td>“防御 DDoS 攻击”</td></tr>
<tr><td>Amazon Macie</td><td>在 Amazon S3 中发现敏感数据（例如个人信息）</td><td>“在 S3 存储桶中查找 PII”</td></tr>
<tr><td>Amazon Detective</td><td>调查安全发现的根本原因</td><td>“分析和调查安全问题”</td></tr>
</tbody></table></div>

<h3>监控、审计和日志</h3>
<div class="tw"><table><thead><tr><th>服务</th><th>回答的问题</th></tr></thead><tbody>
<tr><td>Amazon CloudWatch</td><td>“我的资源运行得怎么样？”指标、日志（CloudWatch Logs）、告警和仪表板</td></tr>
<tr><td>AWS CloudTrail</td><td>“谁在什么时间、从哪里做了什么？”记录 API 调用和账户活动，用于审计</td></tr>
<tr><td>AWS Config</td><td>“我的资源配置是什么样的、如何变化、是否合规？”配置历史和规则</td></tr>
<tr><td>IAM 访问报告</td><td>凭证报告（所有用户的密码、访问密钥和 MFA 状态）以及上次访问信息，用于删除未使用的权限</td></tr>
</tbody></table></div>
<div class="box trap"><p><b>CloudTrail、CloudWatch 与 Config：</b>CloudTrail = <i>谁做的</i>（API 活动）；CloudWatch = <i>性能和告警</i>；Config = <i>资源配置及其随时间的合规情况</i>。</p></div>
<div class="box rem"><p>安全日志通常存放在 <b>CloudTrail</b>（账户活动）、<b>CloudWatch Logs</b>（应用和系统日志）、<b>VPC 流日志</b>（网络流量）以及 <b>Amazon S3</b>（长期保存日志文件）中。</p></div>
`};

/* ===================== TASK 2.3 ===================== */
CLF.tasks['2.3'] = {d:'d2',
title:{en:'Identify AWS access management capabilities', zh:'识别 AWS 访问管理功能'},
obj:[
 ['Understand identity and access management (IAM), the principle of least privilege and AWS IAM Identity Center','了解身份和访问管理（IAM）、最低权限原则以及 AWS IAM Identity Center'],
 ['Know why the AWS root user account must be protected, which tasks only the root user can perform and how to protect it','了解为何必须保护 AWS 根用户账户、哪些任务只有根用户才能执行以及如何保护它'],
 ['Understand access keys, password policies and credential storage (AWS Secrets Manager, AWS Systems Manager)','了解访问密钥、密码策略和凭证存储（AWS Secrets Manager、AWS Systems Manager）'],
 ['Identify authentication methods: MFA, IAM Identity Center, cross-account IAM roles; and types of identity management such as federation','识别身份验证方法：MFA、IAM Identity Center、跨账户 IAM 角色；以及联合等身份管理类型'],
 ['Define groups, users, custom policies and managed policies following least privilege','按照最低权限原则定义组、用户、自定义策略和托管策略']
],
en:`
<h3>AWS Identity and Access Management (IAM)</h3>
<div class="tw"><table><thead><tr><th>Building block</th><th>What it is</th></tr></thead><tbody>
<tr><td>IAM user</td><td>An identity for one person or application, with long-term credentials (password and/or access keys)</td></tr>
<tr><td>IAM group</td><td>A collection of users that share the same permissions; attach policies to the group rather than to each user</td></tr>
<tr><td>IAM role</td><td>An identity with permissions that is <b>assumed temporarily</b> by users, applications or AWS services; gives short-term credentials, no long-term keys</td></tr>
<tr><td>IAM policy</td><td>A JSON document that allows or denies actions on resources</td></tr>
<tr><td>AWS managed policy</td><td>Created and maintained by AWS for common job functions</td></tr>
<tr><td>Customer managed (custom) policy</td><td>Written by you for exactly the permissions you need</td></tr>
</tbody></table></div>
<p>IAM is <b>global</b> (not tied to a Region) and free to use.</p>
<div class="box def"><p><b>Principle of least privilege:</b> grant only the permissions needed to do a task, and nothing more. Start small and add permissions when needed.</p></div>
<div class="box rem"><p>Give an <b>EC2 instance or Lambda function an IAM role</b> to call other AWS services; never store access keys on the instance or in code.</p></div>

<h3>The root user</h3>
<p>The identity created with the account (the sign-up email address). It has <b>complete, unrestricted access</b> that cannot be limited by IAM policies.</p>
<p><b>Protect it:</b> enable MFA, use a strong password, don't create root access keys (delete any that exist), don't use it for everyday work, and create an administrative user in IAM Identity Center for daily tasks.</p>
<p><b>Tasks that only the root user can perform</b> include:</p>
<ul>
<li>Change account settings such as the root email address, root password and root access keys (for standalone accounts)</li>
<li>Close the AWS account (standalone accounts)</li>
<li>Restore permissions when the only IAM administrator has locked themselves out</li>
<li>Activate IAM access to the Billing and Cost Management console</li>
<li>Register as a seller in the Reserved Instance Marketplace</li>
<li>Enable MFA delete on an S3 bucket, or edit or delete an S3 bucket policy that denies all principals</li>
<li>Sign up for AWS GovCloud (US)</li>
</ul>
<div class="box trap"><p>Changing the AWS Support plan is <b>not</b> on the current list of root-only tasks; older material may say it is.</p></div>

<h3>Credentials and how to store them</h3>
<ul>
<li><b>Access keys</b> (access key ID and secret access key) are for programmatic access (CLI, SDK, API). Rotate them and never put them in code.</li>
<li><b>Password policies</b> enforce length, complexity, rotation and reuse rules for IAM user passwords.</li>
<li><b>AWS Secrets Manager</b> stores, retrieves and automatically <b>rotates</b> secrets such as database passwords and API keys.</li>
<li><b>AWS Systems Manager Parameter Store</b> stores configuration data and secrets (no built-in rotation).</li>
</ul>

<h3>Authentication methods</h3>
<div class="tw"><table><thead><tr><th>Method</th><th>Use it for</th></tr></thead><tbody>
<tr><td>Multi-factor authentication (MFA)</td><td>Adding a second factor (authenticator app, security key) on top of a password</td></tr>
<tr><td>AWS IAM Identity Center</td><td>Single sign-on for people across multiple AWS accounts and business apps; connects to your corporate identity source</td></tr>
<tr><td>Cross-account IAM roles</td><td>Letting users or apps in one AWS account access resources in another, with temporary credentials</td></tr>
<tr><td>Federation</td><td>Using an existing identity provider (corporate directory, SAML 2.0, OIDC) so people sign in without separate IAM users</td></tr>
<tr><td>Amazon Cognito</td><td>Sign-up and sign-in for the end users of your web and mobile apps</td></tr>
</tbody></table></div>
<div class="box trap"><p><b>IAM Identity Center</b> = your workforce signing in to AWS accounts. <b>Amazon Cognito</b> = your customers signing in to your app.</p></div>
`,
zh:`
<h3>AWS Identity and Access Management（IAM）</h3>
<div class="tw"><table><thead><tr><th>组成部分</th><th>含义</th></tr></thead><tbody>
<tr><td>IAM 用户</td><td>代表一个人或一个应用程序的身份，拥有长期凭证（密码和/或访问密钥）</td></tr>
<tr><td>IAM 组</td><td>共享相同权限的一组用户；把策略附加到组上，而不是逐个附加给用户</td></tr>
<tr><td>IAM 角色</td><td>带有权限、可被用户、应用或 AWS 服务<b>临时代入</b>的身份；提供短期凭证，没有长期密钥</td></tr>
<tr><td>IAM 策略</td><td>允许或拒绝对资源执行操作的 JSON 文档</td></tr>
<tr><td>AWS 托管策略</td><td>由 AWS 针对常见工作职能创建和维护</td></tr>
<tr><td>客户管理的（自定义）策略</td><td>由你编写，恰好包含所需的权限</td></tr>
</tbody></table></div>
<p>IAM 是<b>全局</b>服务（不绑定区域），并且免费使用。</p>
<div class="box def"><p><b>最低权限原则：</b>只授予完成任务所需的权限，不多给。先从少量权限开始，需要时再增加。</p></div>
<div class="box rem"><p>让 <b>EC2 实例或 Lambda 函数使用 IAM 角色</b>来调用其他 AWS 服务；绝不要把访问密钥存放在实例上或代码中。</p></div>

<h3>根用户</h3>
<p>随账户一起创建的身份（注册时使用的邮箱地址）。它拥有<b>完全、不受限制的访问权限</b>，无法通过 IAM 策略加以限制。</p>
<p><b>如何保护：</b>启用 MFA，使用强密码，不要创建根用户访问密钥（已有的要删除），不要用它做日常工作，并在 IAM Identity Center 中创建管理用户来处理日常任务。</p>
<p><b>只有根用户才能执行的任务</b>包括：</p>
<ul>
<li>更改账户设置，例如根用户邮箱地址、根用户密码和根用户访问密钥（适用于独立账户）</li>
<li>关闭 AWS 账户（独立账户）</li>
<li>在唯一的 IAM 管理员把自己锁在外面时恢复其权限</li>
<li>激活 IAM 对账单与成本管理控制台的访问权限</li>
<li>在预留实例市场注册为卖家</li>
<li>为 S3 存储桶启用 MFA 删除，或编辑、删除拒绝所有主体访问的 S3 存储桶策略</li>
<li>注册 AWS GovCloud (US)</li>
</ul>
<div class="box trap"><p>更改 AWS Support 计划<b>不在</b>当前的根用户专属任务列表中；旧资料可能仍说是。</p></div>

<h3>凭证及其存储方式</h3>
<ul>
<li><b>访问密钥</b>（访问密钥 ID 和秘密访问密钥）用于编程访问（CLI、SDK、API）。要定期轮换，绝不放进代码。</li>
<li><b>密码策略</b>为 IAM 用户密码规定长度、复杂度、轮换和重复使用规则。</li>
<li><b>AWS Secrets Manager</b> 存储、检索并自动<b>轮换</b>数据库密码、API 密钥等机密。</li>
<li><b>AWS Systems Manager Parameter Store</b> 存储配置数据和机密（不内置轮换）。</li>
</ul>

<h3>身份验证方法</h3>
<div class="tw"><table><thead><tr><th>方法</th><th>用途</th></tr></thead><tbody>
<tr><td>多重身份验证（MFA）</td><td>在密码之外再加一个验证因素（身份验证器应用、安全密钥）</td></tr>
<tr><td>AWS IAM Identity Center</td><td>为员工提供跨多个 AWS 账户和业务应用的单点登录；可连接企业身份源</td></tr>
<tr><td>跨账户 IAM 角色</td><td>让一个 AWS 账户中的用户或应用通过临时凭证访问另一个账户的资源</td></tr>
<tr><td>联合</td><td>使用现有的身份提供商（企业目录、SAML 2.0、OIDC），无需单独创建 IAM 用户即可登录</td></tr>
<tr><td>Amazon Cognito</td><td>为你的 Web 和移动应用的终端用户提供注册和登录</td></tr>
</tbody></table></div>
<div class="box trap"><p><b>IAM Identity Center</b> = 你的员工登录 AWS 账户；<b>Amazon Cognito</b> = 你的客户登录你的应用。</p></div>
`};

/* ===================== TASK 2.4 ===================== */
CLF.tasks['2.4'] = {d:'d2',
title:{en:'Identify components and resources for security', zh:'识别安全性相关组件和资源'},
obj:[
 ['Describe AWS security features and services (AWS WAF, AWS Firewall Manager, AWS Shield, Amazon GuardDuty)','描述 AWS 安全功能和服务（AWS WAF、AWS Firewall Manager、AWS Shield、Amazon GuardDuty）'],
 ['Understand that third-party security products are available from AWS Marketplace','了解可从 AWS Marketplace 获取第三方安全产品'],
 ['Identify where AWS security information is available (AWS Knowledge Center, AWS Security Center, AWS Security Blog)','识别在哪里可以获取 AWS 安全信息（AWS Knowledge Center、AWS 安全中心、AWS 安全博客）'],
 ['Understand the use of AWS services such as AWS Trusted Advisor for identifying security issues','了解如何使用 AWS Trusted Advisor 等服务识别安全问题']
],
en:`
<h3>Network and application protection</h3>
<div class="tw"><table><thead><tr><th>Service</th><th>Protects against</th><th>Question cue</th></tr></thead><tbody>
<tr><td>AWS WAF</td><td>Common web exploits (SQL injection, cross-site scripting) and bad bots, using rules on HTTP(S) requests. Works with Amazon CloudFront, Application Load Balancer and Amazon API Gateway</td><td>"Block SQL injection", "filter web requests by IP or country"</td></tr>
<tr><td>AWS Shield Standard</td><td>Common network and transport layer DDoS attacks; automatic, no extra cost</td><td>"DDoS protection included at no charge"</td></tr>
<tr><td>AWS Shield Advanced</td><td>Larger, more sophisticated DDoS attacks; adds the Shield Response Team and cost protection for scaling during attacks (paid)</td><td>"24/7 DDoS response team", "protection from DDoS-related cost spikes"</td></tr>
<tr><td>AWS Firewall Manager</td><td>Centrally configures and manages firewall rules (WAF, Shield Advanced, security groups, Network Firewall) across all accounts in AWS Organizations</td><td>"Apply firewall rules across many accounts"</td></tr>
<tr><td>Amazon GuardDuty</td><td>Threats such as compromised credentials, crypto-mining or calls from known malicious IPs, by analysing logs</td><td>"Continuous threat detection"</td></tr>
<tr><td>Security groups and network ACLs</td><td>Unwanted traffic to instances (security groups) and subnets (network ACLs)</td><td>"Instance-level firewall" / "subnet-level firewall"</td></tr>
</tbody></table></div>

<h3>Third-party security products</h3>
<p><b>AWS Marketplace</b> is a curated digital catalogue where you can find, buy and deploy third-party software, including firewalls, antivirus, identity and monitoring tools from security vendors, often billed through your AWS account.</p>

<h3>Where to find security information</h3>
<div class="tw"><table><thead><tr><th>Resource</th><th>What you find there</th></tr></thead><tbody>
<tr><td>AWS Security Center (aws.amazon.com/security)</td><td>AWS's security approach, compliance information, best practices and security bulletins</td></tr>
<tr><td>AWS Security Blog</td><td>Articles about new security features, guidance and solutions</td></tr>
<tr><td>AWS Knowledge Center (on AWS re:Post)</td><td>Answers to the most common questions and requests, including security topics</td></tr>
<tr><td>AWS documentation and whitepapers</td><td>Detailed security guides for each service and best-practice whitepapers</td></tr>
</tbody></table></div>

<h3>AWS Trusted Advisor</h3>
<p>Inspects your account and recommends improvements across <b>cost optimization, performance, security, fault tolerance, service limits and operational excellence</b>. Security checks include open security group ports, MFA on the root account, exposed access keys and publicly accessible S3 buckets.</p>
<div class="box rem"><p>All customers get the core security checks (Basic Support). Business Support+ and higher plans unlock the full set of checks.</p></div>
<div class="box trap"><p><b>Trusted Advisor</b> gives <i>recommendations</i> across several categories. <b>Security Hub</b> <i>aggregates security findings</i> from many services. <b>GuardDuty</b> <i>detects threats</i>.</p></div>
`,
zh:`
<h3>网络与应用防护</h3>
<div class="tw"><table><thead><tr><th>服务</th><th>防御对象</th><th>题目线索</th></tr></thead><tbody>
<tr><td>AWS WAF</td><td>常见 Web 攻击（SQL 注入、跨站脚本）和恶意机器人，通过针对 HTTP(S) 请求的规则实现。可与 Amazon CloudFront、Application Load Balancer 和 Amazon API Gateway 配合使用</td><td>“阻止 SQL 注入”“按 IP 或国家过滤 Web 请求”</td></tr>
<tr><td>AWS Shield Standard</td><td>常见的网络层和传输层 DDoS 攻击；自动启用，无额外费用</td><td>“免费提供的 DDoS 防护”</td></tr>
<tr><td>AWS Shield Advanced</td><td>规模更大、更复杂的 DDoS 攻击；增加 Shield 响应团队，并为攻击期间扩容产生的费用提供保护（付费）</td><td>“全天候 DDoS 响应团队”“防止 DDoS 导致的费用激增”</td></tr>
<tr><td>AWS Firewall Manager</td><td>在 AWS Organizations 的所有账户中集中配置和管理防火墙规则（WAF、Shield Advanced、安全组、Network Firewall）</td><td>“在多个账户中统一应用防火墙规则”</td></tr>
<tr><td>Amazon GuardDuty</td><td>通过分析日志发现凭证泄露、加密货币挖矿或来自已知恶意 IP 的调用等威胁</td><td>“持续的威胁检测”</td></tr>
<tr><td>安全组和网络 ACL</td><td>阻止流向实例（安全组）和子网（网络 ACL）的不必要流量</td><td>“实例级防火墙”/“子网级防火墙”</td></tr>
</tbody></table></div>

<h3>第三方安全产品</h3>
<p><b>AWS Marketplace</b> 是经过筛选的数字目录，你可以在其中查找、购买和部署第三方软件，包括安全厂商的防火墙、防病毒、身份和监控工具，费用通常通过你的 AWS 账户结算。</p>

<h3>在哪里获取安全信息</h3>
<div class="tw"><table><thead><tr><th>资源</th><th>可以找到的内容</th></tr></thead><tbody>
<tr><td>AWS 安全中心（aws.amazon.com/security）</td><td>AWS 的安全理念、合规信息、最佳实践和安全公告</td></tr>
<tr><td>AWS 安全博客</td><td>关于新安全功能、指南和解决方案的文章</td></tr>
<tr><td>AWS Knowledge Center（位于 AWS re:Post）</td><td>最常见问题和请求的解答，包括安全主题</td></tr>
<tr><td>AWS 文档和白皮书</td><td>各服务的详细安全指南和最佳实践白皮书</td></tr>
</tbody></table></div>

<h3>AWS Trusted Advisor</h3>
<p>检查你的账户，并在<b>成本优化、性能、安全性、容错能力、服务限额和卓越运营</b>等方面给出改进建议。安全检查包括安全组开放的端口、根账户是否启用 MFA、泄露的访问密钥以及可公开访问的 S3 存储桶。</p>
<div class="box rem"><p>所有客户都能使用核心安全检查（基本支持）。Business Support+ 及以上计划可使用全部检查项。</p></div>
<div class="box trap"><p><b>Trusted Advisor</b> 在多个类别中提供<i>建议</i>；<b>Security Hub</b> <i>汇总</i>来自多项服务的<i>安全发现</i>；<b>GuardDuty</b> <i>检测威胁</i>。</p></div>
`};
