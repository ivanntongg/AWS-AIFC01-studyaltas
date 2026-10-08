/* CLF-C02 lessons, domain 4: Billing, Pricing, and Support (12%) */

/* ===================== TASK 4.1 ===================== */
CLF.tasks['4.1'] = {d:'d4',
title:{en:'Compare AWS pricing models', zh:'比较 AWS 定价模式'},
obj:[
 ['Identify compute purchasing options: On-Demand Instances, Reserved Instances, Spot Instances, Savings Plans, Dedicated Hosts, Dedicated Instances, Capacity Reservations','识别计算购买选项：按需型实例、预留实例、竞价型实例、AWS 节省计划、专属主机、专用实例、容量预留'],
 ['Understand Reserved Instance flexibility and Reserved Instance behaviour in AWS Organizations','了解预留实例的灵活度以及预留实例在 AWS Organizations 中的行为'],
 ['Understand incoming and outgoing data transfer costs (for example, from one Region to another, within the same Region)','了解传入和传出数据传输的成本（例如从一个区域到另一个区域、在同一区域内）'],
 ['Understand pricing options for storage tiers','了解各存储层的定价选项']
],
en:`
<h3>Amazon EC2 purchasing options</h3>
<div class="tw"><table><thead><tr><th>Option</th><th>How it works</th><th>Best for</th></tr></thead><tbody>
<tr><td>On-Demand Instances</td><td>Pay by the second or hour, no commitment</td><td>Short-term, spiky or unpredictable workloads; testing; workloads that cannot be interrupted</td></tr>
<tr><td>Savings Plans</td><td>Commit to a consistent amount of usage ($/hour) for 1 or 3 years; up to 72% off. <b>Compute Savings Plans</b> apply across EC2 (any family, size, Region, OS), AWS Fargate and AWS Lambda</td><td>Steady usage where you want flexibility to change instance types or services</td></tr>
<tr><td>Reserved Instances (RIs)</td><td>Commit to a specific instance configuration for 1 or 3 years; up to 72% off. Pay All Upfront, Partial Upfront or No Upfront (more upfront = bigger discount)</td><td>Steady, predictable workloads (such as a database running all year)</td></tr>
<tr><td>Spot Instances</td><td>Use spare EC2 capacity for up to 90% off; AWS can reclaim it with a <b>2-minute warning</b></td><td>Fault-tolerant, flexible, interruptible jobs: batch processing, data analysis, CI/CD, image rendering</td></tr>
<tr><td>Dedicated Hosts</td><td>A whole physical server for your use; you see sockets and cores</td><td>Server-bound software licences (BYOL) and compliance requirements</td></tr>
<tr><td>Dedicated Instances</td><td>Instances on hardware dedicated to your account, but without host-level visibility or control</td><td>Isolation requirements without managing the host</td></tr>
<tr><td>On-Demand Capacity Reservations</td><td>Reserve capacity in a specific AZ for any duration, paid at On-Demand rates, no term commitment</td><td>Guaranteeing capacity for a critical event or disaster recovery</td></tr>
</tbody></table></div>
<div class="box trap"><p>"Can be interrupted" or "cheapest for fault-tolerant jobs" = <b>Spot</b>. "Steady for 1–3 years" = <b>Reserved Instances or Savings Plans</b>. "Cannot be interrupted, short-term, unknown demand" = <b>On-Demand</b>. "Existing per-socket or per-core licences" = <b>Dedicated Hosts</b>.</p></div>

<h3>Reserved Instance flexibility</h3>
<ul>
<li><b>Standard RIs:</b> the biggest discount; you can change the AZ, instance size (within the same family, for Linux) and network type, and sell unused ones on the Reserved Instance Marketplace.</li>
<li><b>Convertible RIs:</b> a smaller discount, but you can exchange them for RIs with a different family, OS or tenancy.</li>
<li><b>Regional RIs</b> apply a discount to any AZ in the Region and offer size flexibility; <b>zonal RIs</b> also reserve capacity in one AZ.</li>
<li><b>In AWS Organizations</b> with consolidated billing, RI and Savings Plans discounts are <b>shared across all accounts</b> in the organization by default (the management account can turn sharing off).</li>
</ul>

<h3>Data transfer costs</h3>
<div class="tw"><table><thead><tr><th>Traffic</th><th>Typical cost</th></tr></thead><tbody>
<tr><td>Into AWS from the internet</td><td><b>Free</b></td></tr>
<tr><td>Out of AWS to the internet</td><td>Charged per GB (a free monthly allowance applies)</td></tr>
<tr><td>Between Regions</td><td>Charged per GB</td></tr>
<tr><td>Between AZs in the same Region</td><td>Usually a small charge per GB in each direction</td></tr>
<tr><td>Within the same AZ using private IP addresses</td><td>Usually free</td></tr>
<tr><td>Out through Amazon CloudFront</td><td>Charged at CloudFront rates; transfer from AWS origins to CloudFront is free</td></tr>
</tbody></table></div>

<h3>Storage pricing</h3>
<ul>
<li><b>Amazon S3:</b> pay for GB stored per month (by storage class), requests, data retrieval for IA and Glacier classes, and data transferred out. Colder classes cost less to store but more to retrieve.</li>
<li><b>Amazon EBS:</b> pay for provisioned GB per month (whether you use it or not), plus provisioned IOPS and throughput for some volume types, and snapshots.</li>
<li><b>Amazon EFS:</b> pay only for the storage you use; Infrequent Access and Archive classes cost less.</li>
</ul>
<div class="box rem"><p>Other ways to pay less: the <b>AWS Free Tier</b> (always-free offers, 12-month offers for older accounts and free trials; new accounts receive credits on a free plan), volume discounts as usage grows (S3 tiered pricing) and rightsizing.</p></div>
`,
zh:`
<h3>Amazon EC2 购买选项</h3>
<div class="tw"><table><thead><tr><th>选项</th><th>工作方式</th><th>最适合</th></tr></thead><tbody>
<tr><td>按需型实例</td><td>按秒或小时付费，无需承诺</td><td>短期、波动或不可预测的工作负载；测试；不能中断的工作负载</td></tr>
<tr><td>AWS 节省计划</td><td>承诺在 1 年或 3 年内保持一致的使用量（美元/小时），最高可节省 72%。<b>Compute Savings Plans</b> 适用于 EC2（任何系列、大小、区域、操作系统）、AWS Fargate 和 AWS Lambda</td><td>使用量稳定，同时希望能灵活更换实例类型或服务</td></tr>
<tr><td>预留实例（RI）</td><td>承诺在 1 年或 3 年内使用特定的实例配置，最高可节省 72%。可选择全额预付、部分预付或无预付（预付越多折扣越大）</td><td>稳定、可预测的工作负载（例如全年运行的数据库）</td></tr>
<tr><td>竞价型实例</td><td>使用 EC2 的闲置容量，最高可节省 90%；AWS 可能在<b>提前 2 分钟通知</b>后收回</td><td>容错、灵活、可中断的作业：批处理、数据分析、CI/CD、图像渲染</td></tr>
<tr><td>专属主机</td><td>整台物理服务器专供你使用；可以看到插槽和内核</td><td>与服务器绑定的软件许可证（BYOL）和合规要求</td></tr>
<tr><td>专用实例</td><td>运行在专供你的账户使用的硬件上的实例，但没有主机级的可见性或控制</td><td>需要隔离但不想管理主机</td></tr>
<tr><td>按需容量预留</td><td>在特定可用区中预留任意时长的容量，按按需价格付费，无期限承诺</td><td>为关键活动或灾难恢复保证容量</td></tr>
</tbody></table></div>
<div class="box trap"><p>“可以被中断”或“容错作业最便宜”= <b>竞价型实例</b>；“稳定运行 1–3 年”= <b>预留实例或节省计划</b>；“不能中断、短期、需求未知”= <b>按需型实例</b>；“已有按插槽或按内核计费的许可证”= <b>专属主机</b>。</p></div>

<h3>预留实例的灵活度</h3>
<ul>
<li><b>标准预留实例：</b>折扣最大；可以更改可用区、实例大小（同一系列内，适用于 Linux）和网络类型，未使用的部分可在预留实例市场出售。</li>
<li><b>可转换预留实例：</b>折扣较小，但可以兑换为不同系列、操作系统或租期类型的预留实例。</li>
<li><b>区域预留实例</b>的折扣适用于该区域内的任何可用区，并具有大小灵活性；<b>可用区预留实例</b>还会在一个可用区中预留容量。</li>
<li>在使用整合账单的 <b>AWS Organizations</b> 中，预留实例和节省计划的折扣默认<b>在组织内所有账户之间共享</b>（管理账户可以关闭共享）。</li>
</ul>

<h3>数据传输成本</h3>
<div class="tw"><table><thead><tr><th>流量</th><th>通常的费用</th></tr></thead><tbody>
<tr><td>从互联网传入 AWS</td><td><b>免费</b></td></tr>
<tr><td>从 AWS 传出到互联网</td><td>按 GB 收费（每月有免费额度）</td></tr>
<tr><td>区域之间</td><td>按 GB 收费</td></tr>
<tr><td>同一区域内的可用区之间</td><td>通常每个方向按 GB 收取少量费用</td></tr>
<tr><td>同一可用区内使用私有 IP 地址</td><td>通常免费</td></tr>
<tr><td>通过 Amazon CloudFront 传出</td><td>按 CloudFront 价格收费；从 AWS 源站传输到 CloudFront 免费</td></tr>
</tbody></table></div>

<h3>存储定价</h3>
<ul>
<li><b>Amazon S3：</b>按每月存储的 GB 数（按存储类别）、请求次数、IA 和 Glacier 类别的数据取回量以及传出的数据量付费。越“冷”的类别存储越便宜，但取回越贵。</li>
<li><b>Amazon EBS：</b>按每月预置的 GB 数付费（无论是否使用），部分卷类型还要为预置的 IOPS 和吞吐量付费，另加快照费用。</li>
<li><b>Amazon EFS：</b>只为实际使用的存储付费；不频繁访问和归档类别更便宜。</li>
</ul>
<div class="box rem"><p>其他省钱方式：<b>AWS 免费套餐</b>（永久免费项目、旧账户的 12 个月免费项目以及免费试用；新账户在免费计划中获得抵扣额度）、用量增长带来的批量折扣（S3 阶梯定价）以及合理调整大小。</p></div>
`};

/* ===================== TASK 4.2 ===================== */
CLF.tasks['4.2'] = {d:'d4',
title:{en:'Understand resources for billing, budget, and cost management', zh:'了解账单、预算和成本管理资源'},
obj:[
 ['Understand the appropriate uses and capabilities of AWS Budgets and AWS Cost Explorer','了解 AWS Budgets 和 AWS Cost Explorer 的适当用途和功能'],
 ['Understand the appropriate uses and capabilities of the AWS Pricing Calculator','了解 AWS 定价计算器的适当用途和功能'],
 ['Understand AWS Organizations consolidated billing and allocation of costs','了解 AWS Organizations 整合账单以及成本分配'],
 ['Understand the various types of cost allocation tags and their relation to billing reports (for example, AWS Cost and Usage Report)','了解各种类型的成本分配标签及其与账单报告的关系（例如 AWS 成本和使用情况报告）']
],
en:`
<h3>Before, during and after you spend</h3>
<div class="tw"><table><thead><tr><th>Tool</th><th>When</th><th>What it does</th><th>Question cue</th></tr></thead><tbody>
<tr><td>AWS Pricing Calculator</td><td><b>Before</b>: planning</td><td>Estimates the monthly cost of an architecture you have not built yet</td><td>"Estimate the cost of a new workload", "compare with on-premises"</td></tr>
<tr><td>AWS Budgets</td><td><b>During</b>: control</td><td>Set cost, usage, RI or Savings Plans budgets and get <b>alerts</b> (email or Amazon SNS) when actual or forecast spend crosses a threshold; budget actions can apply policies automatically</td><td>"Notify me when spend exceeds $500", "alert on forecast"</td></tr>
<tr><td>AWS Cost Explorer</td><td><b>After</b>: analysis</td><td>Visualizes and filters past costs and usage (up to 13 months of history) and forecasts the next 18 months; gives RI and Savings Plans recommendations</td><td>"Which service cost the most last quarter?", "spending trends"</td></tr>
<tr><td>AWS Cost and Usage Report (CUR) / AWS Data Exports</td><td>After: detailed data</td><td>The most detailed line-item billing data, delivered to Amazon S3 for analysis with Athena, Redshift or Quick Sight</td><td>"Most granular billing data", "hourly line items"</td></tr>
<tr><td>AWS Billing and Cost Management console</td><td>Any time</td><td>Bills, payments, invoices, the Billing dashboard and Free Tier usage</td><td>"View or pay the monthly bill"</td></tr>
<tr><td>AWS Cost Anomaly Detection</td><td>During</td><td>Uses machine learning to spot unusual spend and alert you</td><td>"Detect unexpected cost spikes automatically"</td></tr>
<tr><td>AWS Compute Optimizer</td><td>After</td><td>Recommends better-sized EC2 instances, EBS volumes and Lambda functions</td><td>"Rightsizing recommendations"</td></tr>
</tbody></table></div>
<div class="box trap"><p><b>Budgets</b> alert you about the future (thresholds and forecasts); <b>Cost Explorer</b> analyses the past. The <b>Pricing Calculator</b> estimates before anything exists.</p></div>

<h3>AWS Organizations and consolidated billing</h3>
<ul>
<li>One <b>management account</b> pays for all <b>member accounts</b>: <b>one bill</b>, at no extra cost.</li>
<li>Usage from all accounts is <b>combined for volume pricing tiers</b> (for example, S3 storage across accounts reaches cheaper tiers sooner).</li>
<li>Reserved Instance and Savings Plans discounts are <b>shared</b> across accounts.</li>
<li>You can still see the cost of each account, and group accounts into organizational units (OUs) with service control policies (SCPs).</li>
</ul>

<h3>Cost allocation tags</h3>
<p>A <b>tag</b> is a key-value label on a resource (for example, <code>Project=Website</code>, <code>CostCenter=1234</code>). Once <b>activated</b> in the Billing console, cost allocation tags appear as columns in the Cost and Usage Report and as filters in Cost Explorer, so you can split costs by team, project or environment.</p>
<div class="tw"><table><thead><tr><th>Type</th><th>Created by</th><th>Example</th></tr></thead><tbody>
<tr><td>AWS-generated tags</td><td>AWS (prefixed <code>aws:</code>)</td><td><code>aws:createdBy</code></td></tr>
<tr><td>User-defined tags</td><td>You (prefixed <code>user:</code> in reports)</td><td><code>user:Department</code></td></tr>
</tbody></table></div>
<div class="box rem"><p>Tags must be <b>activated</b> for cost allocation before they show up in billing data, and they only apply from activation onward. Use <b>AWS Cost Categories</b> to group costs with your own rules.</p></div>
`,
zh:`
<h3>花钱之前、之中和之后</h3>
<div class="tw"><table><thead><tr><th>工具</th><th>阶段</th><th>作用</th><th>题目线索</th></tr></thead><tbody>
<tr><td>AWS 定价计算器</td><td><b>之前</b>：规划</td><td>估算尚未构建的架构每月的成本</td><td>“估算新工作负载的成本”“与本地部署比较”</td></tr>
<tr><td>AWS Budgets</td><td><b>之中</b>：控制</td><td>设置成本、用量、预留实例或节省计划预算，当实际或预测支出超过阈值时发送<b>告警</b>（电子邮件或 Amazon SNS）；预算操作可以自动应用策略</td><td>“支出超过 500 美元时通知我”“按预测值告警”</td></tr>
<tr><td>AWS Cost Explorer</td><td><b>之后</b>：分析</td><td>可视化并筛选过去的成本和用量（最多 13 个月历史），预测未来 18 个月；提供预留实例和节省计划建议</td><td>“上季度哪项服务花费最多？”“支出趋势”</td></tr>
<tr><td>AWS 成本和使用情况报告（CUR）/ AWS Data Exports</td><td>之后：详细数据</td><td>最详细的逐项账单数据，交付到 Amazon S3，可用 Athena、Redshift 或 Quick Sight 分析</td><td>“最细粒度的账单数据”“按小时的明细”</td></tr>
<tr><td>AWS 账单与成本管理控制台</td><td>任何时候</td><td>账单、付款、发票、账单仪表板和免费套餐用量</td><td>“查看或支付月度账单”</td></tr>
<tr><td>AWS Cost Anomaly Detection</td><td>之中</td><td>用机器学习发现异常支出并提醒你</td><td>“自动发现意外的成本激增”</td></tr>
<tr><td>AWS Compute Optimizer</td><td>之后</td><td>为 EC2 实例、EBS 卷和 Lambda 函数推荐更合适的规格</td><td>“合理调整大小的建议”</td></tr>
</tbody></table></div>
<div class="box trap"><p><b>Budgets</b> 针对未来提醒你（阈值和预测）；<b>Cost Explorer</b> 分析过去；<b>定价计算器</b>在资源尚不存在时进行估算。</p></div>

<h3>AWS Organizations 与整合账单</h3>
<ul>
<li>一个<b>管理账户</b>为所有<b>成员账户</b>付费：<b>一张账单</b>，不额外收费。</li>
<li>所有账户的用量会<b>合并计算批量定价阶梯</b>（例如各账户的 S3 存储量合并后更快达到更便宜的阶梯）。</li>
<li>预留实例和节省计划的折扣在各账户之间<b>共享</b>。</li>
<li>仍可查看每个账户的成本，并可把账户分组到组织单位（OU）中，用服务控制策略（SCP）进行管控。</li>
</ul>

<h3>成本分配标签</h3>
<p><b>标签</b>是资源上的键值对标记（例如 <code>Project=Website</code>、<code>CostCenter=1234</code>）。在账单控制台中<b>激活</b>后，成本分配标签会作为列出现在成本和使用情况报告中，并可在 Cost Explorer 中作为筛选条件，从而按团队、项目或环境拆分成本。</p>
<div class="tw"><table><thead><tr><th>类型</th><th>创建者</th><th>示例</th></tr></thead><tbody>
<tr><td>AWS 生成的标签</td><td>AWS（前缀为 <code>aws:</code>）</td><td><code>aws:createdBy</code></td></tr>
<tr><td>用户定义的标签</td><td>你自己（在报告中前缀为 <code>user:</code>）</td><td><code>user:Department</code></td></tr>
</tbody></table></div>
<div class="box rem"><p>标签必须先<b>激活</b>为成本分配标签才会出现在账单数据中，并且只从激活时起生效。可用 <b>AWS Cost Categories</b> 按自定义规则对成本分组。</p></div>
`};

/* ===================== TASK 4.3 ===================== */
CLF.tasks['4.3'] = {d:'d4',
title:{en:'Identify AWS technical resources and AWS Support options', zh:'识别 AWS 技术资源和 AWS Support 选项'},
obj:[
 ['Locate AWS whitepapers, blogs, documentation and official resources (AWS Knowledge Center, AWS re:Post, AWS Prescriptive Guidance)','找到 AWS 白皮书、博客、文档和官方资源（AWS 知识中心、AWS re:Post、AWS 规范指引）'],
 ['Identify the AWS Support plans and their capabilities, including AWS Trusted Advisor and AWS Health','识别 AWS Support 计划及其功能，包括 AWS Trusted Advisor 和 AWS Health'],
 ['Understand the role of the AWS Partner Network (independent software vendors, system integrators) and AWS Marketplace','了解 AWS 合作伙伴网络（独立软件供应商、系统集成商）和 AWS Marketplace 的作用'],
 ['Identify the AWS Trust & Safety team, AWS Professional Services and AWS Solutions Architects','识别 AWS 信任与安全团队、AWS 专业服务团队和 AWS 解决方案架构师']
],
en:`
<h3>Self-service resources</h3>
<div class="tw"><table><thead><tr><th>Resource</th><th>What you find there</th></tr></thead><tbody>
<tr><td>AWS Documentation</td><td>User guides and API references for every service</td></tr>
<tr><td>AWS Whitepapers and Guides</td><td>Technical papers, including the AWS Well-Architected Framework</td></tr>
<tr><td>AWS Knowledge Center</td><td>Answers to the most common questions customers ask AWS Support</td></tr>
<tr><td>AWS re:Post</td><td>Community question-and-answer site, with answers from AWS experts and community members</td></tr>
<tr><td>AWS Prescriptive Guidance</td><td>Proven strategies, guides and patterns for migration and modernization</td></tr>
<tr><td>AWS Solutions Library</td><td>Vetted, ready-to-deploy solutions and reference architectures</td></tr>
<tr><td>AWS Blogs and AWS Skill Builder</td><td>News and how-tos; online training</td></tr>
</tbody></table></div>

<h3>AWS Support plans</h3>
<div class="tw"><table><thead><tr><th>Plan</th><th>Key features</th><th>Fastest response</th></tr></thead><tbody>
<tr><td>Basic (free, every account)</td><td>Account and billing help, documentation, re:Post, AWS Health Dashboard, <b>core Trusted Advisor checks</b></td><td>No technical cases</td></tr>
<tr><td>Business Support+</td><td>24/7 technical support from engineers, <b>full Trusted Advisor checks</b>, AI-assisted help, context-aware support for production workloads</td><td>Under 30 minutes for critical issues</td></tr>
<tr><td>Enterprise Support</td><td>A <b>designated Technical Account Manager (TAM)</b>, Trusted Advisor Priority, proactive reviews, training and Concierge-style billing help</td><td>Under 15 minutes for critical (business-critical system down) issues</td></tr>
<tr><td>Unified Operations</td><td>The highest tier: a dedicated team, including Incident Management Engineers and continuous monitoring of mission-critical workloads</td><td>5 minutes for critical issues</td></tr>
</tbody></table></div>
<div class="box note"><p>Older study material lists Developer, Business and Enterprise On-Ramp plans. Questions still focus on the same ideas: <b>a TAM means Enterprise-level support</b>, <b>full Trusted Advisor checks require a paid plan</b>, and <b>Basic offers no technical cases</b>.</p></div>

<h3>Tools that come with support</h3>
<ul>
<li><b>AWS Trusted Advisor:</b> checks your account against best practices in five categories: <b>cost optimization, performance, security, fault tolerance and service limits (quotas)</b>, plus operational excellence. Examples: idle resources, S3 buckets open to the public, root account without MFA.</li>
<li><b>AWS Health Dashboard:</b> shows AWS service health and <b>personalized</b> events that affect your resources, such as scheduled maintenance.</li>
</ul>

<h3>People and partners</h3>
<div class="tw"><table><thead><tr><th>Who</th><th>What they do</th></tr></thead><tbody>
<tr><td>AWS Partner Network (APN)</td><td>Global community of partners. <b>Independent software vendors (ISVs)</b> build software that runs on AWS; <b>system integrators (SIs)</b> and consulting partners help design, migrate and manage workloads</td></tr>
<tr><td>AWS Marketplace</td><td>Digital catalogue to find, buy, deploy and manage third-party software, data and services, billed through your AWS account</td></tr>
<tr><td>AWS Professional Services</td><td>AWS's own team of experts who work with your organization on large projects such as migrations</td></tr>
<tr><td>AWS Solutions Architects</td><td>Help customers design secure, reliable, cost-effective architectures</td></tr>
<tr><td>AWS Trust & Safety team</td><td>Handles <b>abuse reports</b>: spam, phishing, malware, port scanning or DDoS attacks coming from AWS resources</td></tr>
<tr><td>Technical Account Manager (TAM)</td><td>Your designated technical contact on Enterprise-level plans; proactive guidance</td></tr>
<tr><td>AWS Training and Certification / AWS Skill Builder</td><td>Learning paths, labs, official practice questions and exams</td></tr>
</tbody></table></div>
<div class="box trap"><p>"Report that an AWS IP address is sending spam or attacking you" = <b>AWS Trust & Safety</b>, not AWS Support. "Buy pre-configured third-party software" = <b>AWS Marketplace</b>. "Hire a partner to help migrate" = <b>AWS Partner Network</b>.</p></div>
`,
zh:`
<h3>自助资源</h3>
<div class="tw"><table><thead><tr><th>资源</th><th>可以找到什么</th></tr></thead><tbody>
<tr><td>AWS 文档</td><td>每项服务的用户指南和 API 参考</td></tr>
<tr><td>AWS 白皮书和指南</td><td>技术文档，包括 AWS Well-Architected 框架</td></tr>
<tr><td>AWS 知识中心</td><td>客户向 AWS Support 提出的最常见问题的解答</td></tr>
<tr><td>AWS re:Post</td><td>社区问答网站，由 AWS 专家和社区成员解答</td></tr>
<tr><td>AWS 规范指引</td><td>经过验证的迁移和现代化策略、指南和模式</td></tr>
<tr><td>AWS 解决方案库</td><td>经过审核、可直接部署的解决方案和参考架构</td></tr>
<tr><td>AWS 博客和 AWS Skill Builder</td><td>新闻和操作指南；在线培训</td></tr>
</tbody></table></div>

<h3>AWS Support 计划</h3>
<div class="tw"><table><thead><tr><th>计划</th><th>主要功能</th><th>最快响应时间</th></tr></thead><tbody>
<tr><td>Basic（免费，每个账户都有）</td><td>账户和账单帮助、文档、re:Post、AWS Health Dashboard、<b>Trusted Advisor 核心检查</b></td><td>不能提交技术支持案例</td></tr>
<tr><td>Business Support+</td><td>工程师提供 24/7 技术支持、<b>Trusted Advisor 全部检查</b>、AI 辅助帮助，为生产工作负载提供结合上下文的支持</td><td>关键问题 30 分钟内</td></tr>
<tr><td>Enterprise Support</td><td><b>指定的技术客户经理（TAM）</b>、Trusted Advisor Priority、主动评审、培训以及礼宾式账单帮助</td><td>关键问题（业务关键型系统宕机）15 分钟内</td></tr>
<tr><td>Unified Operations</td><td>最高级别：专属团队，包括事件管理工程师，并持续监控任务关键型工作负载</td><td>关键问题 5 分钟</td></tr>
</tbody></table></div>
<div class="box note"><p>较早的学习资料会列出 Developer、Business 和 Enterprise On-Ramp 计划。题目考查的核心思路不变：<b>有 TAM 就是企业级支持</b>、<b>Trusted Advisor 全部检查需要付费计划</b>、<b>Basic 不提供技术支持案例</b>。</p></div>

<h3>随支持计划提供的工具</h3>
<ul>
<li><b>AWS Trusted Advisor：</b>按最佳实践检查你的账户，涵盖五大类别：<b>成本优化、性能、安全性、容错能力和服务限额（配额）</b>，另有卓越运营类别。示例：闲置资源、对公众开放的 S3 存储桶、未启用 MFA 的根用户。</li>
<li><b>AWS Health Dashboard：</b>显示 AWS 服务的健康状况，以及影响你资源的<b>个性化</b>事件，例如计划内维护。</li>
</ul>

<h3>人员与合作伙伴</h3>
<div class="tw"><table><thead><tr><th>谁</th><th>做什么</th></tr></thead><tbody>
<tr><td>AWS 合作伙伴网络（APN）</td><td>全球合作伙伴社区。<b>独立软件供应商（ISV）</b>开发运行在 AWS 上的软件；<b>系统集成商（SI）</b>和咨询合作伙伴帮助设计、迁移和管理工作负载</td></tr>
<tr><td>AWS Marketplace</td><td>数字化目录，用于查找、购买、部署和管理第三方软件、数据和服务，费用计入你的 AWS 账单</td></tr>
<tr><td>AWS 专业服务团队</td><td>AWS 自己的专家团队，与你的组织合作完成迁移等大型项目</td></tr>
<tr><td>AWS 解决方案架构师</td><td>帮助客户设计安全、可靠、经济高效的架构</td></tr>
<tr><td>AWS 信任与安全团队</td><td>处理<b>滥用举报</b>：来自 AWS 资源的垃圾邮件、网络钓鱼、恶意软件、端口扫描或 DDoS 攻击</td></tr>
<tr><td>技术客户经理（TAM）</td><td>企业级计划中为你指定的技术联系人，提供主动指导</td></tr>
<tr><td>AWS 培训与认证 / AWS Skill Builder</td><td>学习路径、实验、官方练习题和考试</td></tr>
</tbody></table></div>
<div class="box trap"><p>“举报某个 AWS IP 地址在发送垃圾邮件或攻击你”= <b>AWS 信任与安全团队</b>，而不是 AWS Support；“购买预先配置好的第三方软件”= <b>AWS Marketplace</b>；“聘请合作伙伴帮助迁移”= <b>AWS 合作伙伴网络</b>。</p></div>
`};
