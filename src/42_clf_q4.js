/* CLF-C02 questions, domain 4: Billing, Pricing, and Support. Original questions written against the exam guide. Append-only. */
(function(){
function Q(k, t, a, en, zh, wEn, wZh){
  var q = {k: k, d: 'd' + k.charAt(0), t: t, a: a, en: {q: en[0], o: en[1], x: en[2]}, zh: {q: zh[0], o: zh[1], x: zh[2]}};
  var pad = a.map(function(){ return ''; }); q.w = {en: pad.concat(wEn), zh: pad.concat(wZh)};
  CLF.qs.push(q);
}

/* ================= 4.1 Pricing models ================= */
Q('4.1','single',[0],
['A company has a short-term workload with unpredictable usage that must not be interrupted. Which EC2 pricing option is the BEST fit?',
 ['On-Demand Instances','Spot Instances','3-year Reserved Instances','Dedicated Hosts with a 3-year reservation'],
 'On-Demand has no commitment and is not interrupted by AWS, which suits short-term, unpredictable workloads.'],
['某公司有一个短期工作负载，用量不可预测，且不能被中断。哪种 EC2 定价选项最合适？',
 ['按需型实例','竞价型实例','3 年期预留实例','3 年期预留的专属主机'],
 '按需型实例无需承诺，也不会被 AWS 中断，适合短期、不可预测的工作负载。'],
['Spot Instances can be interrupted.','A 3-year commitment does not suit a short-term workload.','A 3-year host reservation is a long commitment and costly.'],
['竞价型实例可能被中断。','3 年期承诺不适合短期工作负载。','3 年期主机预留是长期承诺，而且成本高。']);

Q('4.1','single',[0],
['A company runs fault-tolerant batch image-processing jobs that can be stopped and restarted at any time. Which EC2 pricing option is the MOST cost-effective?',
 ['Spot Instances','On-Demand Instances','Dedicated Instances','On-Demand Capacity Reservations'],
 'Spot Instances use spare capacity at up to 90% off. AWS can reclaim them with a two-minute warning, which is fine for interruptible jobs.'],
['某公司运行可随时停止和重启的容错式批量图像处理作业。哪种 EC2 定价选项最具成本效益？',
 ['竞价型实例','按需型实例','专用实例','按需容量预留'],
 '竞价型实例使用闲置容量，最高可节省 90%。AWS 可能会提前两分钟通知后收回，这对可中断的作业没有影响。'],
['On-Demand costs more than Spot.','Dedicated Instances cost more and add isolation the job does not need.','Capacity Reservations are billed at On-Demand rates.'],
['按需型实例比竞价型实例贵。','专用实例更贵，而且提供了作业并不需要的隔离。','容量预留按按需价格计费。']);

Q('4.1','single',[0],
['A company runs a database server continuously and expects to for the next three years. Which option gives a large discount for this steady, predictable usage?',
 ['Reserved Instances or Savings Plans with a 3-year term','Spot Instances','On-Demand Instances','The AWS Free Tier'],
 'Committing to 1 or 3 years with Reserved Instances or Savings Plans gives up to 72% off compared with On-Demand.'],
['某公司一直持续运行一台数据库服务器，并预计未来三年都会如此。对于这种稳定、可预测的用量，哪个选项能提供大幅折扣？',
 ['3 年期的预留实例或节省计划','竞价型实例','按需型实例','AWS 免费套餐'],
 '通过预留实例或节省计划承诺 1 年或 3 年，与按需相比最高可节省 72%。'],
['A database should not run on interruptible Spot capacity.','On-Demand is the most expensive option for steady use.','The Free Tier is limited and not intended for production databases.'],
['数据库不应运行在可被中断的竞价容量上。','对于稳定用量，按需型实例是最贵的选项。','免费套餐有限，不适合生产数据库。']);

Q('4.1','single',[0],
['A company wants a discount for a consistent amount of compute usage, measured in dollars per hour, that applies across EC2 instance families, Regions, AWS Fargate and AWS Lambda. Which option should it choose?',
 ['Compute Savings Plans','Standard Reserved Instances','Spot Instances','Dedicated Hosts'],
 'Compute Savings Plans apply automatically to EC2 usage regardless of family, size, Region or OS, and to Fargate and Lambda.'],
['某公司希望为以“美元/小时”计量的稳定计算用量获得折扣，并且折扣适用于不同的 EC2 实例系列、区域、AWS Fargate 和 AWS Lambda。应选择哪个选项？',
 ['Compute Savings Plans','标准预留实例','竞价型实例','专属主机'],
 'Compute Savings Plans 自动适用于 EC2 用量（无论系列、大小、区域或操作系统），以及 Fargate 和 Lambda。'],
['Standard RIs are tied to an instance family and do not cover Lambda or Fargate.','Spot has no commitment and no such coverage.','Dedicated Hosts are physical servers, not a flexible discount.'],
['标准预留实例绑定到实例系列，不涵盖 Lambda 或 Fargate。','竞价型实例没有承诺，也没有这样的覆盖范围。','专属主机是物理服务器，而不是灵活的折扣。']);

Q('4.1','single',[0],
['A company must use its existing per-core software licences on AWS and needs visibility into the physical cores of the server. Which option should it use?',
 ['Dedicated Hosts','Dedicated Instances','Spot Instances','On-Demand Instances on shared tenancy'],
 'Dedicated Hosts provide a physical server dedicated to you with visibility of sockets and cores, which supports server-bound BYOL.'],
['某公司必须在 AWS 上使用其现有的按内核计费的软件许可证，需要了解服务器的物理内核情况。应使用哪个选项？',
 ['专属主机','专用实例','竞价型实例','共享租期的按需型实例'],
 '专属主机为你提供专用的物理服务器，并可查看插槽和内核，支持与服务器绑定的 BYOL。'],
['Dedicated Instances run on dedicated hardware but give no host-level visibility.','Spot Instances run on shared, interruptible capacity.','Shared tenancy gives no core visibility.'],
['专用实例运行在专用硬件上，但不提供主机级的可见性。','竞价型实例运行在共享、可中断的容量上。','共享租期无法查看内核。']);

Q('4.1','single',[0],
['A company needs to guarantee EC2 capacity in a specific Availability Zone for a product launch next week, without a long-term commitment. Which option should it use?',
 ['On-Demand Capacity Reservations','Spot Instances','A 3-year Standard Reserved Instance','Savings Plans'],
 'Capacity Reservations reserve capacity in a specific AZ for any duration, billed at On-Demand rates, with no term commitment.'],
['某公司需要为下周的产品发布保证特定可用区中的 EC2 容量，且不想做长期承诺。应使用哪个选项？',
 ['按需容量预留','竞价型实例','3 年期标准预留实例','节省计划'],
 '容量预留可以在特定可用区中预留任意时长的容量，按按需价格计费，无期限承诺。'],
['Spot capacity is not guaranteed.','A 3-year RI is a long-term commitment.','Savings Plans give discounts but do not reserve capacity.'],
['竞价容量无法保证。','3 年期预留实例是长期承诺。','节省计划提供折扣，但不预留容量。']);

Q('4.1','single',[0],
['Which Reserved Instance payment option gives the LARGEST discount?',
 ['All Upfront','Partial Upfront','No Upfront','Monthly On-Demand billing'],
 'The more you pay up front, the bigger the discount: All Upfront gives the most, then Partial Upfront, then No Upfront.'],
['哪种预留实例付款选项的折扣最大？',
 ['全额预付','部分预付','无预付','按月按需计费'],
 '预付越多，折扣越大：全额预付最多，其次是部分预付，然后是无预付。'],
['Partial Upfront gives a smaller discount than All Upfront.','No Upfront gives the smallest RI discount.','On-Demand billing has no RI discount.'],
['部分预付的折扣比全额预付小。','无预付的预留实例折扣最小。','按需计费没有预留实例折扣。']);

Q('4.1','single',[0],
['What is the main difference between Standard and Convertible Reserved Instances?',
 ['Convertible RIs can be exchanged for different instance families, OS or tenancy, but offer a smaller discount than Standard RIs','Standard RIs can be cancelled at any time','Convertible RIs are only for Spot Instances','Standard RIs apply to AWS Lambda'],
 'Standard RIs give the biggest discount and can be sold on the RI Marketplace; Convertible RIs trade some discount for flexibility to exchange.'],
['标准预留实例与可转换预留实例的主要区别是什么？',
 ['可转换预留实例可以兑换为不同的实例系列、操作系统或租期类型，但折扣比标准预留实例小','标准预留实例可以随时取消','可转换预留实例只适用于竞价型实例','标准预留实例适用于 AWS Lambda'],
 '标准预留实例折扣最大，并可在预留实例市场出售；可转换预留实例牺牲部分折扣来换取兑换的灵活性。'],
['RIs are commitments and cannot simply be cancelled.','RIs are unrelated to Spot.','RIs apply to EC2 and other specific services, not Lambda; Savings Plans cover Lambda.'],
['预留实例是承诺，不能随意取消。','预留实例与竞价型实例无关。','预留实例适用于 EC2 等特定服务，而不是 Lambda；Lambda 由节省计划覆盖。']);

Q('4.1','single',[0],
['A company uses AWS Organizations with consolidated billing. One account bought Reserved Instances it is not fully using. What happens by default?',
 ['The RI discount can apply to matching usage in other accounts in the organization','The unused RIs are refunded automatically','The discount is lost','Each account must buy its own RIs to receive any discount'],
 'With consolidated billing, RI and Savings Plans discounts are shared across accounts by default. The management account can turn off sharing.'],
['某公司使用带整合账单的 AWS Organizations。其中一个账户购买的预留实例没有被充分使用。默认情况下会怎样？',
 ['预留实例折扣可以应用到组织中其他账户的匹配用量上','未使用的预留实例会自动退款','折扣会作废','每个账户必须自己购买预留实例才能获得折扣'],
 '使用整合账单时，预留实例和节省计划的折扣默认在各账户之间共享。管理账户可以关闭共享。'],
['RIs are not refunded automatically.','The discount is shared, not lost.','Sharing means other accounts can benefit.'],
['预留实例不会自动退款。','折扣是共享的，不会作废。','共享意味着其他账户也能受益。']);

Q('4.1','single',[0],
['Which type of data transfer is generally free on AWS?',
 ['Data transferred into AWS from the internet','Data transferred out of AWS to the internet','Data transferred between AWS Regions','Data transferred between Availability Zones'],
 'Inbound data transfer from the internet is free. Data out to the internet, between Regions and (usually) between AZs is charged.'],
['在 AWS 上，哪种数据传输通常是免费的？',
 ['从互联网传入 AWS 的数据','从 AWS 传出到互联网的数据','在 AWS 区域之间传输的数据','在可用区之间传输的数据'],
 '从互联网传入的数据是免费的。传出到互联网、区域之间以及（通常）可用区之间的数据传输都要收费。'],
['Data out to the internet is charged.','Inter-Region transfer is charged.','Cross-AZ transfer usually incurs a charge.'],
['传出到互联网的数据要收费。','跨区域传输要收费。','跨可用区传输通常要收费。']);

Q('4.1','multi',[0,1],
['Which TWO factors affect the cost of storing data in Amazon S3? (Select TWO.)',
 ['The storage class and amount of data stored','Requests and data retrieval','The number of IAM users in the account','The number of Availability Zones in the Region','The AWS Support plan level'],
 'S3 pricing depends on storage (by class), requests and data retrievals, data transfer out and management features.'],
['哪两个因素会影响在 Amazon S3 中存储数据的成本？（选择两项。）',
 ['存储类别和存储的数据量','请求次数和数据取回','账户中 IAM 用户的数量','区域中可用区的数量','AWS Support 计划级别'],
 'S3 的价格取决于存储量（按类别）、请求次数和数据取回、传出的数据量以及管理功能。'],
['IAM is free and does not change S3 prices.','The AZ count does not set your S3 price.','Support plans are billed separately.'],
['IAM 是免费的，不会影响 S3 价格。','可用区数量不决定 S3 价格。','Support 计划单独计费。']);

Q('4.1','single',[0],
['How is an Amazon EBS General Purpose SSD volume mainly billed?',
 ['By the amount of storage provisioned per month, whether or not it is used','Only by the data actually written','Per request, like AWS Lambda','It is free when attached to an instance'],
 'EBS charges for provisioned capacity (GB-month), and for some volume types also for provisioned IOPS and throughput.'],
['Amazon EBS 通用型 SSD 卷主要如何计费？',
 ['按每月预置的存储量计费，无论是否使用','只按实际写入的数据计费','按请求次数计费，就像 AWS Lambda 一样','挂载到实例上时免费'],
 'EBS 按预置的容量（GB-月）收费，部分卷类型还会对预置的 IOPS 和吞吐量收费。'],
['You pay for what you provision, not only what you write.','EBS is not billed per request like Lambda.','EBS volumes are always billed while they exist.'],
['你为预置的容量付费，而不仅是写入的数据。','EBS 不像 Lambda 那样按请求计费。','EBS 卷只要存在就一直计费。']);

Q('4.1','single',[0],
['A company wants to try several AWS services at no cost while learning. Which offer helps?',
 ['The AWS Free Tier','Savings Plans','Reserved Instances','Dedicated Hosts'],
 'The AWS Free Tier offers free usage of many services within limits, such as always-free offers, free trials and credits for new accounts.'],
['某公司希望在学习期间免费试用几项 AWS 服务。哪种优惠有帮助？',
 ['AWS 免费套餐','节省计划','预留实例','专属主机'],
 'AWS 免费套餐在一定限额内免费提供许多服务，例如永久免费项目、免费试用以及新账户的抵扣额度。'],
['Savings Plans require a paid commitment.','Reserved Instances require a paid commitment.','Dedicated Hosts are a paid option.'],
['节省计划需要付费承诺。','预留实例需要付费承诺。','专属主机是付费选项。']);

Q('4.1','single',[0],
['Which statement about AWS Lambda pricing is correct?',
 ['You pay for the number of requests and the compute duration of your functions; there is no charge when code is not running','You pay a fixed monthly fee per function','You pay for idle servers waiting for requests','Lambda requires a 1-year commitment'],
 'Lambda is billed per request and per duration (GB-seconds), which makes it cost-effective for intermittent workloads.'],
['关于 AWS Lambda 的定价，哪种说法正确？',
 ['按请求次数和函数的计算时长付费；代码未运行时不收费','每个函数每月支付固定费用','为等待请求的闲置服务器付费','Lambda 需要 1 年期承诺'],
 'Lambda 按请求次数和运行时长（GB-秒）计费，因此对间歇性工作负载很有成本效益。'],
['There is no fixed monthly fee per function.','There are no idle servers to pay for.','No commitment is required (Savings Plans are optional).'],
['每个函数没有固定的月费。','没有需要付费的闲置服务器。','无需承诺（节省计划是可选的）。']);

/* ================= 4.2 Billing and cost management ================= */
Q('4.2','single',[0],
['A company wants an email alert when its forecasted monthly AWS spend is expected to exceed $1,000. Which service should it use?',
 ['AWS Budgets','AWS Cost Explorer','AWS Pricing Calculator','AWS Artifact'],
 'AWS Budgets lets you set custom cost and usage budgets and sends alerts when actual or forecasted values cross thresholds.'],
['某公司希望在预测的每月 AWS 支出预计超过 1000 美元时收到电子邮件告警。应使用哪项服务？',
 ['AWS Budgets','AWS Cost Explorer','AWS 定价计算器','AWS Artifact'],
 'AWS Budgets 让你设置自定义的成本和用量预算，并在实际值或预测值超过阈值时发送告警。'],
['Cost Explorer analyses and forecasts but is not the alerting tool.','The Pricing Calculator estimates costs before deployment.','Artifact provides compliance reports.'],
['Cost Explorer 用于分析和预测，但不是告警工具。','定价计算器在部署前估算成本。','Artifact 提供合规报告。']);

Q('4.2','single',[0],
['A finance team wants to see which AWS services drove costs over the last six months and view the trend in a graph. Which tool should it use?',
 ['AWS Cost Explorer','AWS Budgets','AWS Pricing Calculator','AWS Trusted Advisor'],
 'Cost Explorer visualizes, filters and groups historical cost and usage data, and forecasts future spend.'],
['某财务团队希望查看过去六个月中哪些 AWS 服务推高了成本，并以图表形式查看趋势。应使用哪种工具？',
 ['AWS Cost Explorer','AWS Budgets','AWS 定价计算器','AWS Trusted Advisor'],
 'Cost Explorer 可视化、筛选并分组历史成本和用量数据，还能预测未来支出。'],
['Budgets focuses on thresholds and alerts.','The Pricing Calculator estimates future architectures.','Trusted Advisor gives best-practice recommendations.'],
['Budgets 侧重于阈值和告警。','定价计算器估算未来架构的成本。','Trusted Advisor 提供最佳实践建议。']);

Q('4.2','single',[0],
['Before building a new workload, a company wants to estimate its monthly AWS cost. Which tool should it use?',
 ['AWS Pricing Calculator','AWS Cost Explorer','AWS Cost and Usage Report','AWS Budgets'],
 'The AWS Pricing Calculator creates cost estimates for AWS services you plan to use.'],
['在构建新的工作负载之前，某公司希望估算其每月的 AWS 成本。应使用哪种工具？',
 ['AWS 定价计算器','AWS Cost Explorer','AWS 成本和使用情况报告','AWS Budgets'],
 'AWS 定价计算器为你计划使用的 AWS 服务创建成本估算。'],
['Cost Explorer shows costs already incurred.','The CUR details past usage.','Budgets tracks spending against limits.'],
['Cost Explorer 显示已经产生的成本。','CUR 详细列出过去的用量。','Budgets 根据限额跟踪支出。']);

Q('4.2','single',[0],
['A company needs the most detailed, line-item data about its AWS costs and usage, delivered to an S3 bucket for analysis with Amazon Athena. What should it use?',
 ['AWS Cost and Usage Report (through AWS Data Exports)','AWS Budgets alerts','The AWS Pricing Calculator','AWS Health Dashboard'],
 'The Cost and Usage Report contains the most comprehensive billing data, delivered to S3 and queryable with Athena, Redshift or Quick Sight.'],
['某公司需要关于其 AWS 成本和用量最详细的逐项数据，并交付到 S3 存储桶中以便用 Amazon Athena 分析。应使用什么？',
 ['AWS 成本和使用情况报告（通过 AWS Data Exports）','AWS Budgets 告警','AWS 定价计算器','AWS Health Dashboard'],
 '成本和使用情况报告包含最全面的账单数据，交付到 S3 后可用 Athena、Redshift 或 Quick Sight 查询。'],
['Budgets alerts are not detailed line items.','The Pricing Calculator estimates; it does not report actual usage.','The Health Dashboard shows service events.'],
['Budgets 告警不是详细的逐项数据。','定价计算器用于估算，不报告实际用量。','Health Dashboard 显示服务事件。']);

Q('4.2','multi',[0,1],
['Which TWO are benefits of consolidated billing in AWS Organizations? (Select TWO.)',
 ['One bill for multiple AWS accounts','Combined usage across accounts can reach volume pricing tiers sooner','Each account automatically receives Enterprise Support','All services become free for member accounts','Member accounts no longer need IAM'],
 'Consolidated billing provides a single bill, combined usage for volume discounts and shared RI and Savings Plans discounts, at no extra cost.'],
['AWS Organizations 中的整合账单有哪两项益处？（选择两项。）',
 ['多个 AWS 账户只需一张账单','各账户的合并用量可以更快达到批量定价阶梯','每个账户自动获得 Enterprise Support','成员账户的所有服务都变为免费','成员账户不再需要 IAM'],
 '整合账单提供单一账单、合并用量以享受批量折扣，并共享预留实例和节省计划折扣，且不额外收费。'],
['Support plans are purchased separately.','Services are not free because of consolidated billing.','Every account still uses IAM for access control.'],
['Support 计划需要单独购买。','整合账单不会让服务变为免费。','每个账户仍然使用 IAM 进行访问控制。']);

Q('4.2','single',[0],
['A company tags resources with "Project" and "CostCenter". What must it do before these tags appear in its billing reports?',
 ['Activate them as cost allocation tags in the Billing and Cost Management console','Nothing; all tags appear automatically in billing data','Ask AWS Support to enable them','Buy a Savings Plan'],
 'User-defined tags must be activated for cost allocation; they then appear in Cost Explorer and the Cost and Usage Report from activation onward.'],
['某公司为资源打上了“Project”和“CostCenter”标签。在这些标签出现在账单报告中之前，它必须做什么？',
 ['在账单与成本管理控制台中把它们激活为成本分配标签','什么都不用做，所有标签都会自动出现在账单数据中','请 AWS Support 启用它们','购买节省计划'],
 '用户定义的标签必须先激活为成本分配标签，之后才会从激活时起出现在 Cost Explorer 和成本和使用情况报告中。'],
['Tags must be activated for cost allocation first.','You activate them yourself; Support is not needed.','Savings Plans are unrelated to tagging.'],
['标签必须先激活为成本分配标签。','你可以自己激活，无需 Support。','节省计划与打标签无关。']);

Q('4.2','single',[0],
['What is the difference between AWS-generated cost allocation tags and user-defined cost allocation tags?',
 ['AWS-generated tags are created by AWS (prefixed aws:), while user-defined tags are created by the customer','User-defined tags are free, while AWS-generated tags cost extra','AWS-generated tags can only be used in us-east-1','There is no difference'],
 'AWS-generated tags (such as aws:createdBy) are applied by AWS; user-defined tags (prefixed user: in reports) are created by you. Both must be activated.'],
['AWS 生成的成本分配标签与用户定义的成本分配标签有什么区别？',
 ['AWS 生成的标签由 AWS 创建（前缀为 aws:），而用户定义的标签由客户创建','用户定义的标签免费，而 AWS 生成的标签要额外收费','AWS 生成的标签只能在 us-east-1 中使用','两者没有区别'],
 'AWS 生成的标签（例如 aws:createdBy）由 AWS 应用；用户定义的标签（在报告中前缀为 user:）由你创建。两者都必须激活。'],
['Neither type has a separate charge.','Tags are not limited to one Region.','They differ in who creates them.'],
['两种标签都不单独收费。','标签不限于某个区域。','它们的区别在于由谁创建。']);

Q('4.2','single',[0],
['A company wants to be alerted automatically if AWS detects unusual spending patterns, such as a sudden spike in one service. Which feature should it use?',
 ['AWS Cost Anomaly Detection','AWS Pricing Calculator','AWS Artifact','Amazon Inspector'],
 'Cost Anomaly Detection uses machine learning to monitor spend and alerts you about anomalies and their root causes.'],
['某公司希望在 AWS 检测到异常支出模式（例如某项服务的支出突然激增）时自动收到告警。应使用哪项功能？',
 ['AWS Cost Anomaly Detection','AWS 定价计算器','AWS Artifact','Amazon Inspector'],
 'Cost Anomaly Detection 利用机器学习监控支出，并就异常情况及其根本原因向你发出告警。'],
['The Pricing Calculator estimates costs before deployment.','Artifact provides compliance reports.','Inspector scans for vulnerabilities.'],
['定价计算器在部署前估算成本。','Artifact 提供合规报告。','Inspector 扫描漏洞。']);

Q('4.2','single',[0],
['Which AWS account in an organization pays the consolidated bill for all member accounts?',
 ['The management account','Every member account pays separately','The account with the most resources','The AWS Support account'],
 'In AWS Organizations, the management account is responsible for paying the charges of all member accounts.'],
['在组织中，哪个 AWS 账户为所有成员账户支付整合账单？',
 ['管理账户','每个成员账户分别付款','资源最多的账户','AWS Support 账户'],
 '在 AWS Organizations 中，管理账户负责支付所有成员账户的费用。'],
['Consolidated billing means one payer, not separate payments.','Resource count does not decide the payer.','There is no "AWS Support account" that pays your bill.'],
['整合账单意味着由一个付款方付款，而不是分别付款。','资源数量不决定付款方。','不存在替你付账的“AWS Support 账户”。']);

Q('4.2','single',[0],
['A company wants recommendations on which Savings Plans to buy based on its past usage. Where can it find them?',
 ['AWS Cost Explorer (Savings Plans recommendations)','AWS Artifact','AWS Health Dashboard','AWS Marketplace'],
 'Cost Explorer analyses historical usage and recommends Savings Plans and Reserved Instance purchases.'],
['某公司希望根据过去的用量获得购买哪些节省计划的建议。它可以在哪里找到？',
 ['AWS Cost Explorer（节省计划建议）','AWS Artifact','AWS Health Dashboard','AWS Marketplace'],
 'Cost Explorer 分析历史用量，并给出节省计划和预留实例的购买建议。'],
['Artifact provides compliance reports.','The Health Dashboard shows service events.','Marketplace sells third-party software.'],
['Artifact 提供合规报告。','Health Dashboard 显示服务事件。','Marketplace 销售第三方软件。']);

Q('4.2','single',[0],
['A company wants an action to run automatically, such as applying a restrictive IAM policy, when a budget threshold is exceeded. Which feature supports this?',
 ['AWS Budgets actions','AWS Cost Explorer filters','AWS Pricing Calculator groups','Amazon CloudFront signed cookies'],
 'Budgets actions can apply IAM policies or SCPs, or stop specific EC2 or RDS instances, when a budget threshold is reached.'],
['某公司希望在超过预算阈值时自动执行某个操作，例如应用一个限制性的 IAM 策略。哪项功能支持这样做？',
 ['AWS Budgets 操作','AWS Cost Explorer 筛选器','AWS 定价计算器分组','Amazon CloudFront 签名 Cookie'],
 '当达到预算阈值时，Budgets 操作可以应用 IAM 策略或 SCP，或者停止特定的 EC2 或 RDS 实例。'],
['Cost Explorer filters only change the view.','Calculator groups organize estimates.','Signed cookies control content access.'],
['Cost Explorer 筛选器只改变视图。','计算器分组用于组织估算。','签名 Cookie 控制对内容的访问。']);

Q('4.2','single',[0],
['Which tool helps identify over-provisioned EC2 instances and recommends better-sized options?',
 ['AWS Compute Optimizer','AWS Artifact','Amazon Macie','AWS Organizations'],
 'Compute Optimizer uses machine learning on utilization metrics to recommend optimal resources for EC2, EBS, Lambda and more.'],
['哪种工具可以帮助识别配置过度的 EC2 实例并推荐更合适的规格？',
 ['AWS Compute Optimizer','AWS Artifact','Amazon Macie','AWS Organizations'],
 'Compute Optimizer 基于利用率指标运用机器学习，为 EC2、EBS、Lambda 等推荐最佳资源配置。'],
['Artifact provides compliance reports.','Macie finds sensitive data.','Organizations manages accounts.'],
['Artifact 提供合规报告。','Macie 查找敏感数据。','Organizations 管理账户。']);

/* ================= 4.3 Technical resources and support ================= */
Q('4.3','single',[0],
['A company wants a designated Technical Account Manager (TAM) who provides proactive guidance. Which AWS Support plan includes this?',
 ['Enterprise Support','Basic Support','Business Support+','There is no plan with a TAM'],
 'A designated TAM is part of Enterprise-level support. Remember: TAM = Enterprise.'],
['某公司希望有一位指定的技术客户经理（TAM）提供主动指导。哪个 AWS Support 计划包含这项服务？',
 ['Enterprise Support','Basic Support','Business Support+','没有任何计划提供 TAM'],
 '指定的 TAM 属于企业级支持的一部分。记住：TAM = Enterprise。'],
['Basic Support has no technical support at all.','Business Support+ does not include a designated TAM.','Enterprise Support includes a designated TAM.'],
['Basic Support 完全不提供技术支持。','Business Support+ 不包含指定的 TAM。','Enterprise Support 包含指定的 TAM。']);

Q('4.3','single',[0],
['What is included in AWS Basic Support for every account?',
 ['Account and billing help, documentation, AWS re:Post, the AWS Health Dashboard and core Trusted Advisor checks','24/7 technical support from cloud engineers','A designated Technical Account Manager','All Trusted Advisor checks'],
 'Basic Support is free and covers customer service for account and billing, plus self-service resources. Technical cases need a paid plan.'],
['每个账户的 AWS Basic Support 包含哪些内容？',
 ['账户和账单帮助、文档、AWS re:Post、AWS Health Dashboard 以及 Trusted Advisor 核心检查','云工程师提供的全天候技术支持','指定的技术客户经理','Trusted Advisor 全部检查'],
 'Basic Support 是免费的，涵盖账户和账单方面的客户服务以及自助资源。技术支持案例需要付费计划。'],
['Technical support needs a paid plan.','A TAM is part of Enterprise Support.','The full set of checks needs a paid plan.'],
['技术支持需要付费计划。','TAM 属于 Enterprise Support。','全部检查需要付费计划。']);

Q('4.3','single',[0],
['A company wants to review recommendations across cost optimization, performance, security, fault tolerance and service quotas for its account. Which service provides these checks?',
 ['AWS Trusted Advisor','AWS Artifact','Amazon Inspector','AWS Config'],
 'Trusted Advisor inspects your environment and recommends improvements based on AWS best practices in these categories.'],
['某公司希望查看其账户在成本优化、性能、安全性、容错能力和服务配额方面的建议。哪项服务提供这些检查？',
 ['AWS Trusted Advisor','AWS Artifact','Amazon Inspector','AWS Config'],
 'Trusted Advisor 检查你的环境，并根据这些类别中的 AWS 最佳实践提出改进建议。'],
['Artifact provides compliance reports.','Inspector focuses on software vulnerabilities.','Config records configurations against your own rules.'],
['Artifact 提供合规报告。','Inspector 侧重于软件漏洞。','Config 根据你自己的规则记录配置。']);

Q('4.3','single',[0],
['A company wants to know about AWS scheduled maintenance and service issues that affect its own resources. Where should it look?',
 ['AWS Health Dashboard (your account health)','AWS Pricing Calculator','AWS Marketplace','AWS Artifact'],
 'The AWS Health Dashboard shows the general status of AWS services and personalized events that affect your account and resources.'],
['某公司希望了解影响其自身资源的 AWS 计划内维护和服务问题。应查看哪里？',
 ['AWS Health Dashboard（你的账户健康状况）','AWS 定价计算器','AWS Marketplace','AWS Artifact'],
 'AWS Health Dashboard 显示 AWS 服务的总体状态，以及影响你的账户和资源的个性化事件。'],
['The Pricing Calculator estimates costs.','Marketplace sells software.','Artifact provides compliance reports.'],
['定价计算器估算成本。','Marketplace 销售软件。','Artifact 提供合规报告。']);

Q('4.3','single',[0],
['A company finds that an Amazon EC2 instance owned by someone else is sending spam to its mail servers. Whom should it contact?',
 ['The AWS Trust & Safety team','AWS Professional Services','The company’s Technical Account Manager','AWS Marketplace sellers'],
 'The AWS Trust & Safety team handles reports of abuse from AWS resources, such as spam, phishing, malware, port scanning and DDoS attacks.'],
['某公司发现一台属于他人的 Amazon EC2 实例正在向其邮件服务器发送垃圾邮件。应联系谁？',
 ['AWS 信任与安全团队','AWS 专业服务团队','公司的技术客户经理','AWS Marketplace 卖家'],
 'AWS 信任与安全团队处理有关 AWS 资源滥用行为的举报，例如垃圾邮件、网络钓鱼、恶意软件、端口扫描和 DDoS 攻击。'],
['Professional Services helps customers with projects, not abuse reports.','A TAM helps with your own account, not abuse by others.','Marketplace sellers are third-party vendors.'],
['专业服务团队协助客户完成项目，而不是处理滥用举报。','TAM 协助处理你自己的账户，而不是他人的滥用行为。','Marketplace 卖家是第三方供应商。']);

Q('4.3','single',[0],
['A large company wants AWS’s own team of experts to help it plan and carry out a complex data centre migration. Which AWS offering should it engage?',
 ['AWS Professional Services','AWS Trust & Safety','AWS re:Post','AWS Free Tier'],
 'AWS Professional Services is a global team of experts that works with customers (often with partners) to achieve business outcomes such as migrations.'],
['某大公司希望由 AWS 自己的专家团队帮助其规划并执行复杂的数据中心迁移。应联系哪项 AWS 服务？',
 ['AWS 专业服务团队','AWS 信任与安全团队','AWS re:Post','AWS 免费套餐'],
 'AWS 专业服务团队是一支全球专家团队，与客户（通常与合作伙伴一起）合作实现迁移等业务成果。'],
['Trust & Safety handles abuse reports.','re:Post is a community Q&A site.','The Free Tier offers free usage.'],
['信任与安全团队处理滥用举报。','re:Post 是社区问答网站。','免费套餐提供免费用量。']);

Q('4.3','multi',[0,1],
['Which TWO types of partners are part of the AWS Partner Network? (Select TWO.)',
 ['Independent software vendors (ISVs) that build software on AWS','System integrators (SIs) and consulting partners that help customers design and migrate workloads','AWS Trust & Safety investigators','AWS data centre security guards','Certified exam proctors only'],
 'The APN includes software partners such as ISVs and services partners such as system integrators and consulting partners.'],
['以下哪两类合作伙伴属于 AWS 合作伙伴网络？（选择两项。）',
 ['在 AWS 上构建软件的独立软件供应商（ISV）','帮助客户设计和迁移工作负载的系统集成商（SI）和咨询合作伙伴','AWS 信任与安全团队调查人员','AWS 数据中心保安','仅限认证考试监考人员'],
 'APN 包括 ISV 等软件合作伙伴，以及系统集成商和咨询合作伙伴等服务合作伙伴。'],
['Trust & Safety is an AWS team, not a partner.','Security guards are AWS staff or contractors, not APN partners.','Proctors are not the focus of the APN.'],
['信任与安全团队是 AWS 的团队，而不是合作伙伴。','保安是 AWS 员工或承包商，而不是 APN 合作伙伴。','监考人员不是 APN 的重点。']);

Q('4.3','single',[0],
['A developer has a common question about configuring an S3 bucket and wants an official article written by AWS Support engineers. Which resource should they check?',
 ['AWS Knowledge Center','AWS Artifact','AWS Cost Explorer','AWS Marketplace'],
 'The AWS Knowledge Center answers the questions AWS Support receives most often.'],
['某开发人员有一个关于配置 S3 存储桶的常见问题，希望找到由 AWS Support 工程师撰写的官方文章。应查看哪个资源？',
 ['AWS 知识中心','AWS Artifact','AWS Cost Explorer','AWS Marketplace'],
 'AWS 知识中心解答 AWS Support 最常收到的问题。'],
['Artifact provides compliance reports.','Cost Explorer analyses spending.','Marketplace sells software.'],
['Artifact 提供合规报告。','Cost Explorer 分析支出。','Marketplace 销售软件。']);

Q('4.3','single',[0],
['A company wants proven, step-by-step guidance and patterns from AWS for migrating and modernizing workloads. Which resource should it use?',
 ['AWS Prescriptive Guidance','AWS Trust & Safety','AWS Budgets','Amazon Polly'],
 'AWS Prescriptive Guidance provides time-tested strategies, guides and patterns from AWS and AWS Partners.'],
['某公司希望获得 AWS 提供的、经过验证的分步指导和模式，用于迁移和现代化工作负载。应使用哪个资源？',
 ['AWS 规范指引','AWS 信任与安全团队','AWS Budgets','Amazon Polly'],
 'AWS 规范指引提供来自 AWS 和 AWS 合作伙伴的、经过时间检验的策略、指南和模式。'],
['Trust & Safety handles abuse reports.','Budgets tracks spending.','Polly converts text to speech.'],
['信任与安全团队处理滥用举报。','Budgets 跟踪支出。','Polly 把文本转换为语音。']);

Q('4.3','single',[0],
['A company wants to find, buy and deploy third-party software such as a monitoring tool, billed through its AWS account. Where should it go?',
 ['AWS Marketplace','AWS Artifact','AWS Knowledge Center','AWS Health Dashboard'],
 'AWS Marketplace is a curated digital catalogue of software, data and services from third-party sellers, with charges on your AWS bill.'],
['某公司希望查找、购买并部署第三方软件（例如监控工具），费用计入其 AWS 账户。应去哪里？',
 ['AWS Marketplace','AWS Artifact','AWS 知识中心','AWS Health Dashboard'],
 'AWS Marketplace 是经过筛选的数字目录，提供来自第三方卖家的软件、数据和服务，费用计入你的 AWS 账单。'],
['Artifact provides compliance reports.','The Knowledge Center answers common questions.','The Health Dashboard shows service events.'],
['Artifact 提供合规报告。','知识中心解答常见问题。','Health Dashboard 显示服务事件。']);
})();
