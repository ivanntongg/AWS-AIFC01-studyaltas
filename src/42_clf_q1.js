/* CLF-C02 questions, domain 1: Cloud Concepts. Original questions written against the exam guide. Append-only.
   Correct options come first (they are shuffled on screen); w notes cover the wrong options only. */
(function(){
function Q(k, t, a, en, zh, wEn, wZh){
  var q = {k: k, d: 'd' + k.charAt(0), t: t, a: a, en: {q: en[0], o: en[1], x: en[2]}, zh: {q: zh[0], o: zh[1], x: zh[2]}};
  var pad = a.map(function(){ return ''; }); q.w = {en: pad.concat(wEn), zh: pad.concat(wZh)};
  CLF.qs.push(q);
}

/* ================= 1.1 Benefits of the AWS Cloud ================= */
Q('1.1','single',[0],
['A company no longer wants to guess how many servers it will need next year. Which benefit of the AWS Cloud addresses this?',
 ['Stop guessing capacity','Benefit from massive economies of scale','Go global in minutes','Trade fixed expense for variable expense'],
 'With the cloud you provision what you need now and scale up or down as demand changes, so you do not have to predict capacity in advance.'],
['某公司不想再猜测明年需要多少台服务器。AWS 云的哪项益处解决了这个问题？',
 ['无需再猜测容量','受益于大规模的规模经济','几分钟内实现全球部署','用可变成本取代固定成本'],
 '在云中，你按当前需要配置资源，并随需求变化扩展或缩减，无需提前预测容量。'],
['Economies of scale explain lower prices, not capacity planning.','Going global is about deploying in more Regions.','Variable expense is about paying for use instead of buying up front.'],
['规模经济解释的是价格更低，而不是容量规划。','全球部署关注的是在更多区域部署。','可变成本关注的是按使用付费而不是预先购买。']);

Q('1.1','single',[0],
['A startup launches its app in Europe and Asia within a day, without building data centres. Which advantage of cloud computing does this show?',
 ['Go global in minutes','Stop spending money running and maintaining data centres','Increase speed and agility','Stop guessing capacity'],
 'AWS Regions around the world let you deploy close to customers in minutes, with no new facilities.'],
['一家初创公司在一天内就在欧洲和亚洲上线了应用，而无需建设数据中心。这体现了云计算的哪项优势？',
 ['几分钟内实现全球部署','不再为运行和维护数据中心花钱','提高速度和敏捷性','无需再猜测容量'],
 'AWS 在全球各地的区域让你几分钟内就能在靠近客户的地方部署，无需新建设施。'],
['That benefit is about not managing physical facilities, not about reach.','Agility is about trying things quickly; the scenario is about global reach.','Capacity is about sizing, not geography.'],
['这项益处关注的是无需管理物理设施，而不是覆盖范围。','敏捷性关注的是快速尝试；本场景关注的是全球覆盖。','容量关注的是规模大小，而不是地理位置。']);

Q('1.1','single',[0],
['Which statement best describes the benefit "trade fixed expense for variable expense"?',
 ['Pay only for the computing resources you consume, instead of investing heavily in data centres and servers up front','Pay a lower price because AWS buys hardware in huge volumes','Commit to a 3-year term to receive the largest discount','Pay a fixed monthly fee for unlimited usage'],
 'Variable expense means you pay as you go for what you use, instead of large capital expenditure before you know how you will use it.'],
['哪种说法最能描述“用可变成本取代固定成本”这项益处？',
 ['只为消耗的计算资源付费，而不是预先大量投资于数据中心和服务器','由于 AWS 大批量采购硬件，因此价格更低','承诺 3 年期限以获得最大折扣','每月支付固定费用即可无限量使用'],
 '可变成本是指按实际使用量付费，而不是在知道如何使用之前就进行大额资本支出。'],
['That describes economies of scale.','A long-term commitment is a pricing option, not this benefit.','AWS does not charge a flat fee for unlimited usage.'],
['这描述的是规模经济。','长期承诺是一种定价选项，而不是这项益处。','AWS 不会收取固定费用提供无限量使用。']);

Q('1.1','single',[0],
['AWS has lowered its prices many times because of its large aggregate usage across hundreds of thousands of customers. Which benefit is this?',
 ['Economies of scale','Elasticity','High availability','Agility'],
 'Because AWS operates at a very large scale, it achieves lower costs and passes the savings on as lower pay-as-you-go prices.'],
['由于数十万客户的总体用量巨大，AWS 已多次降价。这属于哪项益处？',
 ['规模经济','弹性','高可用性','敏捷性'],
 '由于 AWS 的运营规模非常大，它能实现更低的成本，并以更低的按需付费价格让利给客户。'],
['Elasticity is about scaling resources with demand.','High availability is about staying up during failures.','Agility is about speed to experiment and deliver.'],
['弹性关注的是随需求伸缩资源。','高可用性关注的是在故障时保持运行。','敏捷性关注的是快速试验和交付。']);

Q('1.1','single',[0],
['An online store automatically adds servers during a holiday sale and removes them when traffic returns to normal. Which cloud concept is this?',
 ['Elasticity','High availability','Fault tolerance','Data sovereignty'],
 'Elasticity is the ability to acquire resources when you need them and release them when you no longer do.'],
['某在线商店在节日促销期间自动增加服务器，并在流量恢复正常后移除。这是哪个云概念？',
 ['弹性','高可用性','容错','数据主权'],
 '弹性是指在需要时获取资源、在不再需要时释放资源的能力。'],
['High availability is about running in multiple locations to avoid downtime.','Fault tolerance is about continuing to run when a component fails.','Data sovereignty is about where data is legally stored.'],
['高可用性关注的是在多个位置运行以避免停机。','容错关注的是在组件出故障时继续运行。','数据主权关注的是数据在法律上存储的位置。']);

Q('1.1','single',[0],
['A development team can create a test environment in minutes, try a new idea and delete it the same day at little cost. Which benefit does this describe?',
 ['Agility','Economies of scale','Durability','High availability'],
 'Agility means resources are only a click away, so the cost and time to experiment are very low and teams can innovate faster.'],
['开发团队可以在几分钟内创建测试环境、尝试新想法，并在当天以很低的成本删除它。这描述的是哪项益处？',
 ['敏捷性','规模经济','持久性','高可用性'],
 '敏捷性是指资源随点随用，试验的成本和时间都很低，团队可以更快地创新。'],
['Economies of scale explain lower prices.','Durability is about not losing stored data.','High availability is about uptime.'],
['规模经济解释的是价格更低。','持久性关注的是存储的数据不会丢失。','高可用性关注的是正常运行时间。']);

Q('1.1','single',[0],
['A company runs its web application on instances in two Availability Zones so the application keeps working if one data centre fails. Which concept does this demonstrate?',
 ['High availability','Elasticity','Agility','Economies of scale'],
 'High availability means a system keeps running with minimal downtime, which is achieved by removing single points of failure, such as by using multiple AZs.'],
['某公司把 Web 应用部署在两个可用区的实例上，这样即使一个数据中心出故障，应用仍能正常运行。这体现了哪个概念？',
 ['高可用性','弹性','敏捷性','规模经济'],
 '高可用性是指系统以最少的停机时间持续运行，通过消除单点故障（例如使用多个可用区）来实现。'],
['Elasticity is about changing capacity with demand.','Agility is about speed of experimentation.','Economies of scale are about lower costs.'],
['弹性关注的是随需求改变容量。','敏捷性关注的是试验的速度。','规模经济关注的是更低的成本。']);

Q('1.1','single',[0],
['Which benefit allows a company to focus on its customers instead of racking, stacking and powering servers?',
 ['Stop spending money running and maintaining data centres','Go global in minutes','Stop guessing capacity','Benefit from massive economies of scale'],
 'AWS handles the undifferentiated heavy lifting of physical infrastructure so you can focus on projects that differentiate your business.'],
['哪项益处让公司可以专注于客户，而不是上架、堆叠服务器和为其供电？',
 ['不再为运行和维护数据中心花钱','几分钟内实现全球部署','无需再猜测容量','受益于大规模的规模经济'],
 'AWS 承担了物理基础设施这类无差异化的繁重工作，让你专注于能让业务脱颖而出的项目。'],
['Global reach is about Regions, not about server maintenance.','Capacity is about sizing.','Economies of scale are about price.'],
['全球覆盖关注的是区域，而不是服务器维护。','容量关注的是规模大小。','规模经济关注的是价格。']);

Q('1.1','multi',[0,1],
['Which TWO are benefits of moving to the AWS Cloud? (Select TWO.)',
 ['Increased speed of deployment','Global reach through AWS Regions','Customers manage the physical security of AWS data centres','Hardware must be purchased three years in advance','Every service is free for the first year'],
 'The cloud provides speed of deployment and global reach. AWS, not the customer, secures data centres, and there is no up-front hardware purchase.'],
['迁移到 AWS 云有哪两项益处？（选择两项。）',
 ['部署速度更快','通过 AWS 区域实现全球覆盖','客户负责 AWS 数据中心的物理安全','必须提前三年购买硬件','所有服务第一年都免费'],
 '云提供部署速度和全球覆盖范围。数据中心由 AWS 而不是客户负责保护，而且不需要预先购买硬件。'],
['AWS is responsible for the physical security of its data centres.','The cloud removes the need to buy hardware in advance.','Only some services have Free Tier offers; not everything is free.'],
['数据中心的物理安全由 AWS 负责。','云消除了提前购买硬件的需要。','只有部分服务提供免费套餐，并不是全部免费。']);

Q('1.1','single',[0],
['What is the main difference between elasticity and scalability as AWS uses the terms?',
 ['Elasticity adds and removes resources automatically as demand changes; scalability is the ability to grow to handle more load','Elasticity applies only to storage; scalability applies only to compute','Scalability means resources can never shrink','They mean exactly the same thing and are never distinguished'],
 'Scalability is the ability to handle growth. Elasticity goes further: capacity follows demand up and down, often automatically, so you do not pay for idle resources.'],
['按 AWS 的用法，弹性与可扩展性的主要区别是什么？',
 ['弹性随需求变化自动增加和移除资源；可扩展性是为应对更多负载而增长的能力','弹性只适用于存储，可扩展性只适用于计算','可扩展性意味着资源永远不能缩减','两者含义完全相同，从不加以区分'],
 '可扩展性是应对增长的能力。弹性更进一步：容量随需求上下变化（通常是自动的），因此你不会为闲置资源付费。'],
['Both ideas apply to compute, storage and databases.','A scalable system can also scale in.','AWS distinguishes them: elasticity emphasizes matching demand in both directions.'],
['这两个概念都适用于计算、存储和数据库。','可扩展的系统也可以缩减。','AWS 会加以区分：弹性强调在两个方向上与需求匹配。']);

Q('1.1','single',[0],
['A news site has unpredictable traffic spikes when stories go viral. Which cloud characteristic helps it avoid paying for idle servers during quiet periods?',
 ['Elasticity','Data sovereignty','Fixed capacity provisioning','Single-AZ deployment'],
 'With elasticity, capacity drops when traffic falls, so the site pays only for what it uses.'],
['某新闻网站在报道走红时会出现不可预测的流量高峰。哪项云特性可以帮助它在流量低谷时不为闲置服务器付费？',
 ['弹性','数据主权','固定容量配置','单可用区部署'],
 '借助弹性，流量下降时容量随之减少，网站只为实际使用的部分付费。'],
['Data sovereignty is about where data is stored.','Fixed capacity is exactly what causes idle, paid-for servers.','A single AZ affects availability, not cost efficiency during quiet periods.'],
['数据主权关注的是数据存储在哪里。','固定容量恰恰是导致服务器闲置却仍要付费的原因。','单可用区影响的是可用性，而不是低谷期的成本效率。']);

Q('1.1','single',[0],
['Which concept describes the ability of a workload to keep operating correctly even when some of its components fail?',
 ['Fault tolerance','Elasticity','Agility','Economies of scale'],
 'Fault tolerance means the system continues to work, without interruption, when components fail. It is closely related to high availability.'],
['哪个概念描述了工作负载在部分组件出故障时仍能正确运行的能力？',
 ['容错','弹性','敏捷性','规模经济'],
 '容错是指系统在组件出故障时仍能不间断地运行。它与高可用性密切相关。'],
['Elasticity is about matching capacity to demand.','Agility is about speed.','Economies of scale are about cost.'],
['弹性关注的是让容量与需求匹配。','敏捷性关注的是速度。','规模经济关注的是成本。']);

Q('1.1','single',[0],
['A company wants its customers in Australia, Brazil and Japan to have low latency when they use its app. Which benefit of the AWS global infrastructure helps the most?',
 ['Global reach: deploy the application in Regions close to each group of customers','Economies of scale: lower prices in every Region','Agility: faster experiments in a single Region','Fixed expense: predictable data centre costs'],
 'Deploying in multiple Regions near customers reduces latency. This is the global reach benefit.'],
['某公司希望澳大利亚、巴西和日本的客户使用其应用时延迟较低。AWS 全球基础设施的哪项益处帮助最大？',
 ['全球覆盖范围：在靠近每组客户的区域部署应用','规模经济：每个区域价格都更低','敏捷性：在单个区域更快地试验','固定成本：可预测的数据中心成本'],
 '在靠近客户的多个区域部署可以降低延迟。这就是全球覆盖范围这项益处。'],
['Lower prices do not reduce latency.','A single Region is far from some customers.','Fixed data centre costs are what the cloud replaces.'],
['更低的价格并不能降低延迟。','单个区域离部分客户很远。','固定的数据中心成本正是云所取代的东西。']);

Q('1.1','multi',[0,1],
['Which TWO are characteristics of cloud computing? (Select TWO.)',
 ['On-demand self-service provisioning of resources','Pay-as-you-go pricing','Long procurement cycles for new servers','Capacity fixed for the life of the contract','Customers own the physical hardware'],
 'Cloud computing is the on-demand delivery of IT resources over the internet with pay-as-you-go pricing.'],
['以下哪两项是云计算的特征？（选择两项。）',
 ['按需自助配置资源','按需付费定价','新服务器需要漫长的采购周期','合同期内容量固定不变','客户拥有物理硬件'],
 '云计算是通过互联网按需提供 IT 资源，并采用按需付费定价。'],
['Long procurement is a feature of on-premises IT.','Cloud capacity can change at any time.','AWS owns and operates the hardware.'],
['漫长的采购周期是本地 IT 的特点。','云容量可以随时改变。','硬件由 AWS 拥有和运营。']);

Q('1.1','single',[0],
['Which phrase BEST defines cloud computing?',
 ['The on-demand delivery of IT resources over the internet with pay-as-you-go pricing','Renting a rack of servers in a colocation facility on a 5-year lease','Buying servers and installing them in your own office','Using only software-as-a-service email'],
 'This is AWS’s own definition: on-demand delivery of compute, storage, databases and other IT resources over the internet with pay-as-you-go pricing.'],
['哪种说法最能定义云计算？',
 ['通过互联网按需提供 IT 资源，并采用按需付费定价','以 5 年租约在托管机房租用一个服务器机架','购买服务器并安装在自己的办公室','只使用软件即服务形式的电子邮件'],
 '这是 AWS 自己的定义：通过互联网按需提供计算、存储、数据库和其他 IT 资源，并按需付费。'],
['A long lease is a fixed commitment, not on demand.','That is on-premises IT.','SaaS email is one example, not the definition.'],
['长期租约是固定承诺，而不是按需。','这是本地 IT。','SaaS 邮件只是一个例子，而不是定义。']);

Q('1.1','single',[0],
['A company used to wait 8 weeks for new hardware. On AWS it launches servers in minutes. Which benefit is this?',
 ['Speed of deployment','Data sovereignty','Economies of scale','Bring your own license'],
 'Resources can be provisioned in minutes instead of weeks, which speeds up deployment and time to market.'],
['某公司过去要等 8 周才能拿到新硬件，在 AWS 上几分钟就能启动服务器。这是哪项益处？',
 ['部署速度','数据主权','规模经济','自带许可证'],
 '资源可以在几分钟而不是几周内配置完成，加快了部署速度和上市时间。'],
['Data sovereignty is about where data lives.','Economies of scale concern price.','BYOL is a licensing strategy.'],
['数据主权关注的是数据存放在哪里。','规模经济关注的是价格。','自带许可证是一种许可策略。']);

Q('1.1','single',[0],
['An e-commerce company wants to test a new recommendation feature with 5% of users and drop it if it does not work, with almost no wasted investment. Which cloud benefit makes this practical?',
 ['Agility, because resources are quick and cheap to create and remove','High availability, because the feature runs in two AZs','Data sovereignty, because data stays in one country','Fixed expense, because the budget is set in advance'],
 'Agility lowers the cost of failure, so teams can experiment more often.'],
['某电商公司希望先让 5% 的用户试用一项新的推荐功能，若效果不好就放弃，而且几乎不浪费投资。哪项云益处让这变得可行？',
 ['敏捷性，因为创建和删除资源既快又便宜','高可用性，因为该功能在两个可用区中运行','数据主权，因为数据保留在一个国家','固定成本，因为预算是提前定好的'],
 '敏捷性降低了失败的成本，使团队可以更频繁地试验。'],
['High availability keeps it running; it does not make experiments cheap.','Data residency is unrelated to experimentation.','Fixed expense is the opposite of the cloud model.'],
['高可用性保证运行，但不会让试验变便宜。','数据驻留与试验无关。','固定成本与云模式恰恰相反。']);

Q('1.1','single',[0],
['A company’s workload has steady usage with a small daily peak. Which is the MOST accurate statement about how the cloud helps?',
 ['It can size capacity close to actual demand and scale for the peak, instead of buying for the peak all year','It requires buying enough capacity for the peak before migrating','It removes the need to monitor the workload','It guarantees that costs will never increase'],
 'Cloud resources can follow demand, so you avoid paying for peak capacity during the rest of the day. Monitoring and cost management are still your job.'],
['某公司的工作负载用量稳定，每天有一个小高峰。关于云如何提供帮助，哪种说法最准确？',
 ['可以让容量贴近实际需求并为高峰进行扩展，而不必全年按高峰采购','迁移前必须先购买足以应对高峰的容量','不再需要监控工作负载','保证成本永远不会增加'],
 '云资源可以随需求变化，因此在一天的其他时间不必为高峰容量付费。监控和成本管理仍然是你的责任。'],
['There is no need to pre-buy peak capacity.','You still monitor your workloads (for example with CloudWatch).','Costs rise if usage rises; nothing guarantees flat costs.'],
['无需预先购买高峰容量。','你仍然需要监控工作负载（例如使用 CloudWatch）。','用量增加成本就会增加，没有什么能保证成本不变。']);

/* ================= 1.2 Well-Architected Framework ================= */
Q('1.2','single',[0],
['Which pillar of the AWS Well-Architected Framework focuses on running and monitoring systems and continually improving processes and procedures?',
 ['Operational excellence','Reliability','Performance efficiency','Sustainability'],
 'Operational excellence covers operations as code, small reversible changes, refining procedures and learning from failures.'],
['AWS Well-Architected 框架的哪个支柱关注运行和监控系统，并持续改进流程和程序？',
 ['卓越运营','可靠性','性能效率','可持续性'],
 '卓越运营包括将运维操作代码化、进行小规模可逆的更改、完善程序以及从失败中学习。'],
['Reliability is about recovering from failure and meeting demand.','Performance efficiency is about using resources efficiently.','Sustainability is about reducing environmental impact.'],
['可靠性关注的是从故障中恢复和满足需求。','性能效率关注的是高效使用资源。','可持续性关注的是减少对环境的影响。']);

Q('1.2','single',[0],
['A workload automatically recovers from failure and scales horizontally so that no single resource can bring it down. Which pillar does this design support?',
 ['Reliability','Cost optimization','Security','Operational excellence'],
 'Reliability design principles include automatically recovering from failure, testing recovery procedures, scaling horizontally and stopping guessing capacity.'],
['某工作负载能自动从故障中恢复并进行横向扩展，因此没有任何单一资源能让它停机。这种设计支持哪个支柱？',
 ['可靠性','成本优化','安全性','卓越运营'],
 '可靠性的设计原则包括自动从故障中恢复、测试恢复程序、横向扩展以及无需再猜测容量。'],
['Cost optimization is about avoiding unnecessary cost.','Security is about protecting data and systems.','Operational excellence is about running and improving operations.'],
['成本优化关注的是避免不必要的成本。','安全性关注的是保护数据和系统。','卓越运营关注的是运行和改进运维。']);

Q('1.2','single',[0],
['A team applies security at every layer, enables traceability and protects data in transit and at rest. Which Well-Architected pillar is this?',
 ['Security','Reliability','Performance efficiency','Operational excellence'],
 'The security pillar includes a strong identity foundation, traceability, security at all layers, automating security best practices and protecting data in transit and at rest.'],
['某团队在每一层都实施安全措施、启用可追溯性，并保护传输中和静态的数据。这是哪个 Well-Architected 支柱？',
 ['安全性','可靠性','性能效率','卓越运营'],
 '安全性支柱包括坚实的身份基础、可追溯性、在所有层实施安全、自动化安全最佳实践以及保护传输中和静态的数据。'],
['Reliability is about recovering from failure.','Performance efficiency is about choosing efficient resources.','Operational excellence is about operations processes.'],
['可靠性关注的是从故障中恢复。','性能效率关注的是选择高效的资源。','卓越运营关注的是运维流程。']);

Q('1.2','single',[0],
['A company switches to serverless services and uses newer instance types to serve users with fewer resources and lower latency. Which pillar is this MOST closely related to?',
 ['Performance efficiency','Reliability','Security','Operational excellence'],
 'Performance efficiency is about using computing resources efficiently to meet requirements: democratize advanced technologies, go global in minutes, use serverless architectures and experiment more often.'],
['某公司改用无服务器服务和更新的实例类型，以更少的资源和更低的延迟为用户提供服务。这与哪个支柱最密切相关？',
 ['性能效率','可靠性','安全性','卓越运营'],
 '性能效率关注的是高效使用计算资源来满足需求：普及先进技术、几分钟内实现全球部署、使用无服务器架构以及更频繁地试验。'],
['Reliability is about recovery and availability.','Security is about protection.','Operational excellence is about running operations well.'],
['可靠性关注的是恢复和可用性。','安全性关注的是保护。','卓越运营关注的是把运维做好。']);

Q('1.2','single',[0],
['A company turns off development environments at night and analyses which business unit drives spending. Which pillar is it applying?',
 ['Cost optimization','Performance efficiency','Reliability','Security'],
 'Cost optimization means delivering business value at the lowest price: adopt a consumption model, measure efficiency and attribute expenditure.'],
['某公司在夜间关闭开发环境，并分析哪个业务部门推高了支出。它在应用哪个支柱？',
 ['成本优化','性能效率','可靠性','安全性'],
 '成本优化是指以最低的价格交付业务价值：采用按使用量付费的模式、衡量效率并归属支出。'],
['Performance efficiency is about speed and resource fit, not spending.','Reliability is about recovery.','Security is about protection.'],
['性能效率关注的是速度和资源匹配，而不是支出。','可靠性关注的是恢复。','安全性关注的是保护。']);

Q('1.2','single',[0],
['Which Well-Architected pillar focuses on minimizing the environmental impact of running cloud workloads?',
 ['Sustainability','Cost optimization','Operational excellence','Performance efficiency'],
 'Sustainability focuses on understanding your impact, maximizing utilization, using managed services and efficient hardware, and reducing the resources your workloads need.'],
['哪个 Well-Architected 支柱关注最大限度地减少运行云工作负载对环境的影响？',
 ['可持续性','成本优化','卓越运营','性能效率'],
 '可持续性关注了解自身影响、最大化利用率、使用托管服务和高效硬件，以及减少工作负载所需的资源。'],
['Cost optimization targets spending, although it often overlaps.','Operational excellence targets operations.','Performance efficiency targets meeting requirements efficiently.'],
['成本优化针对的是支出，尽管两者经常有重叠。','卓越运营针对的是运维。','性能效率针对的是高效地满足需求。']);

Q('1.2','single',[0],
['How many pillars does the AWS Well-Architected Framework have?',
 ['Six','Four','Five','Seven'],
 'The six pillars are operational excellence, security, reliability, performance efficiency, cost optimization and sustainability (added in 2021).'],
['AWS Well-Architected 框架有几个支柱？',
 ['六个','四个','五个','七个'],
 '六个支柱分别是卓越运营、安全性、可靠性、性能效率、成本优化和可持续性（2021 年新增）。'],
['There are six, not four.','Five was the number before sustainability was added.','There are six, not seven.'],
['共有六个，而不是四个。','五个是新增可持续性之前的数量。','共有六个，而不是七个。']);

Q('1.2','single',[0],
['Which design principle belongs to the operational excellence pillar?',
 ['Perform operations as code','Implement a strong identity foundation','Stop guessing capacity','Adopt a consumption model'],
 'Operational excellence principles include performing operations as code, making frequent, small, reversible changes and anticipating failure.'],
['哪项设计原则属于卓越运营支柱？',
 ['将运维操作代码化','建立坚实的身份基础','无需再猜测容量','采用按使用量付费的模式'],
 '卓越运营的原则包括将运维操作代码化、频繁进行小规模可逆的更改以及预见故障。'],
['Strong identity foundation is a security principle.','Stop guessing capacity is a reliability principle.','Adopting a consumption model is a cost optimization principle.'],
['建立坚实的身份基础是安全性原则。','无需再猜测容量是可靠性原则。','采用按使用量付费的模式是成本优化原则。']);

Q('1.2','single',[0],
['Which design principle belongs to the security pillar?',
 ['Apply security at all layers','Make frequent, small, reversible changes','Use serverless architectures','Analyse and attribute expenditure'],
 'Security principles: strong identity foundation, traceability, security at all layers, automate security best practices, protect data in transit and at rest, keep people away from data, prepare for security events.'],
['哪项设计原则属于安全性支柱？',
 ['在所有层实施安全措施','频繁进行小规模可逆的更改','使用无服务器架构','分析和归属支出'],
 '安全性原则：坚实的身份基础、可追溯性、在所有层实施安全、自动化安全最佳实践、保护传输中和静态的数据、让人员远离数据、为安全事件做好准备。'],
['Small reversible changes are an operational excellence principle.','Serverless architectures are a performance efficiency principle.','Attributing expenditure is a cost optimization principle.'],
['小规模可逆的更改是卓越运营原则。','无服务器架构是性能效率原则。','归属支出是成本优化原则。']);

Q('1.2','single',[0],
['A company regularly simulates the failure of an Availability Zone to confirm its application recovers. Which pillar and principle does this follow?',
 ['Reliability: test recovery procedures','Security: prepare for security events','Cost optimization: measure overall efficiency','Sustainability: maximize utilization'],
 'Testing how a workload fails and recovers is a reliability design principle.'],
['某公司定期模拟一个可用区故障，以确认其应用能够恢复。这遵循了哪个支柱和原则？',
 ['可靠性：测试恢复程序','安全性：为安全事件做好准备','成本优化：衡量整体效率','可持续性：最大化利用率'],
 '测试工作负载如何发生故障和恢复是可靠性的设计原则。'],
['Security events are breaches and incidents, not infrastructure failures.','Efficiency measurement concerns cost.','Utilization concerns environmental impact.'],
['安全事件是指入侵和安全事故，而不是基础设施故障。','衡量效率关注的是成本。','利用率关注的是环境影响。']);

Q('1.2','multi',[0,1],
['Which TWO are pillars of the AWS Well-Architected Framework? (Select TWO.)',
 ['Reliability','Cost optimization','Scalability','Elasticity','Agility'],
 'The pillars are operational excellence, security, reliability, performance efficiency, cost optimization and sustainability. Scalability, elasticity and agility are cloud benefits, not pillars.'],
['以下哪两项是 AWS Well-Architected 框架的支柱？（选择两项。）',
 ['可靠性','成本优化','可扩展性','弹性','敏捷性'],
 '支柱包括卓越运营、安全性、可靠性、性能效率、成本优化和可持续性。可扩展性、弹性和敏捷性是云的益处，而不是支柱。'],
['Scalability is a cloud characteristic, not a pillar.','Elasticity is a cloud benefit, not a pillar.','Agility is a cloud benefit, not a pillar.'],
['可扩展性是云的特征，而不是支柱。','弹性是云的益处，而不是支柱。','敏捷性是云的益处，而不是支柱。']);

Q('1.2','single',[0],
['Which AWS service lets you review your workloads against the Well-Architected best practices and track improvements?',
 ['AWS Well-Architected Tool','AWS Trusted Advisor','AWS Config','Amazon Inspector'],
 'The AWS Well-Architected Tool, in the console, asks questions for each pillar, records risks and creates an improvement plan.'],
['哪项 AWS 服务可以对照 Well-Architected 最佳实践审查工作负载并跟踪改进情况？',
 ['AWS Well-Architected Tool','AWS Trusted Advisor','AWS Config','Amazon Inspector'],
 'AWS Well-Architected Tool 位于控制台中，会针对每个支柱提出问题、记录风险并制定改进计划。'],
['Trusted Advisor runs automated checks on your account, but it is not the framework review tool.','Config records resource configuration changes.','Inspector scans for software vulnerabilities.'],
['Trusted Advisor 对账户运行自动检查，但它不是框架审查工具。','Config 记录资源配置的变更。','Inspector 扫描软件漏洞。']);

Q('1.2','single',[0],
['A company keeps people away from data by using automated tools instead of giving engineers direct access to production databases. Which pillar recommends this?',
 ['Security','Reliability','Performance efficiency','Cost optimization'],
 '"Keep people away from data" is a security design principle that reduces the risk of mishandling or human error.'],
['某公司使用自动化工具，而不是让工程师直接访问生产数据库，从而让人员远离数据。哪个支柱建议这样做？',
 ['安全性','可靠性','性能效率','成本优化'],
 '“让人员远离数据”是安全性的设计原则，可以降低数据处理不当或人为错误的风险。'],
['Reliability is about recovery and availability.','Performance efficiency is about resource fit.','Cost optimization is about spending.'],
['可靠性关注的是恢复和可用性。','性能效率关注的是资源匹配。','成本优化关注的是支出。']);

Q('1.2','single',[0],
['Which design principle belongs to the performance efficiency pillar?',
 ['Go global in minutes by deploying in multiple Regions','Enable traceability','Automatically recover from failure','Stop spending money on undifferentiated heavy lifting'],
 'Performance efficiency principles: democratize advanced technologies, go global in minutes, use serverless architectures, experiment more often and consider mechanical sympathy.'],
['哪项设计原则属于性能效率支柱？',
 ['通过在多个区域部署，几分钟内实现全球部署','启用可追溯性','自动从故障中恢复','不再为无差异化的繁重工作花钱'],
 '性能效率原则：普及先进技术、几分钟内实现全球部署、使用无服务器架构、更频繁地试验以及考虑技术契合度。'],
['Traceability is a security principle.','Automatic recovery is a reliability principle.','That is a cost optimization principle.'],
['可追溯性是安全性原则。','自动恢复是可靠性原则。','这是成本优化原则。']);

Q('1.2','single',[0],
['A company chooses an AWS Region partly because the Region uses more renewable energy and it right-sizes workloads to use fewer resources. Which pillar is this?',
 ['Sustainability','Reliability','Security','Operational excellence'],
 'Choosing Regions with a lower carbon footprint and reducing the resources a workload needs are sustainability practices.'],
['某公司选择 AWS 区域时部分考虑了该区域使用更多可再生能源，并合理调整工作负载大小以减少资源使用。这是哪个支柱？',
 ['可持续性','可靠性','安全性','卓越运营'],
 '选择碳足迹更低的区域并减少工作负载所需的资源都是可持续性实践。'],
['Reliability is about recovery.','Security is about protection.','Operational excellence is about operations.'],
['可靠性关注的是恢复。','安全性关注的是保护。','卓越运营关注的是运维。']);

Q('1.2','single',[0],
['A team writes post-incident reviews after every outage and updates its runbooks. Which pillar does this practice belong to?',
 ['Operational excellence','Cost optimization','Performance efficiency','Sustainability'],
 '"Learn from all operational failures" and "refine operations procedures frequently" are operational excellence principles.'],
['某团队在每次故障后都编写事后复盘报告，并更新运维手册。这项实践属于哪个支柱？',
 ['卓越运营','成本优化','性能效率','可持续性'],
 '“从所有运维故障中学习”和“经常完善运维程序”都是卓越运营的原则。'],
['Cost optimization is about spending.','Performance efficiency is about resource fit.','Sustainability is about environmental impact.'],
['成本优化关注的是支出。','性能效率关注的是资源匹配。','可持续性关注的是环境影响。']);

Q('1.2','multi',[0,1],
['Which TWO design principles belong to the reliability pillar? (Select TWO.)',
 ['Scale horizontally to increase aggregate workload availability','Manage change through automation','Use serverless architectures','Implement a strong identity foundation','Adopt a consumption model'],
 'Reliability principles: automatically recover from failure, test recovery procedures, scale horizontally, stop guessing capacity and manage change through automation.'],
['哪两项设计原则属于可靠性支柱？（选择两项。）',
 ['横向扩展以提高工作负载的整体可用性','通过自动化管理变更','使用无服务器架构','建立坚实的身份基础','采用按使用量付费的模式'],
 '可靠性原则：自动从故障中恢复、测试恢复程序、横向扩展、无需再猜测容量以及通过自动化管理变更。'],
['Serverless architectures are a performance efficiency principle.','Identity foundation is a security principle.','A consumption model is a cost optimization principle.'],
['无服务器架构是性能效率原则。','身份基础是安全性原则。','按使用量付费的模式是成本优化原则。']);

Q('1.2','single',[0],
['An architect is asked which pillar is concerned with a workload performing its intended function correctly and consistently. What is the answer?',
 ['Reliability','Performance efficiency','Operational excellence','Cost optimization'],
 'Reliability is the ability of a workload to perform its intended function correctly and consistently when expected, including recovering from failures.'],
['一位架构师被问到：哪个支柱关注工作负载正确、一致地执行其预期功能？答案是什么？',
 ['可靠性','性能效率','卓越运营','成本优化'],
 '可靠性是指工作负载在预期时间正确、一致地执行预期功能的能力，包括从故障中恢复。'],
['Performance efficiency is about meeting requirements with efficient resources.','Operational excellence is about running and improving operations.','Cost optimization is about spending.'],
['性能效率关注的是用高效的资源满足需求。','卓越运营关注的是运行和改进运维。','成本优化关注的是支出。']);

/* ================= 1.3 Migration to the cloud ================= */
Q('1.3','single',[0],
['Which AWS framework helps organizations plan their cloud adoption, organized into six perspectives such as Business, People and Governance?',
 ['AWS Cloud Adoption Framework (AWS CAF)','AWS Well-Architected Framework','AWS Shared Responsibility Model','AWS Prescriptive Guidance'],
 'AWS CAF has six perspectives: Business, People, Governance, Platform, Security and Operations.'],
['哪个 AWS 框架帮助组织规划云采用，并按业务、人员、治理等六个视角组织？',
 ['AWS 云采用框架（AWS CAF）','AWS Well-Architected 框架','AWS 责任共担模式','AWS 规范指引'],
 'AWS CAF 有六个视角：业务、人员、治理、平台、安全性和运营。'],
['Well-Architected reviews workload design, using six pillars.','The shared responsibility model divides security duties.','Prescriptive Guidance is a library of guides, not the adoption framework.'],
['Well-Architected 使用六个支柱审查工作负载设计。','责任共担模式划分的是安全职责。','规范指引是指南库，而不是云采用框架。']);

Q('1.3','single',[0],
['Which AWS CAF perspective focuses on organizational change management, culture and cloud skills?',
 ['People','Business','Platform','Operations'],
 'The People perspective is the bridge between technology and business: culture, organizational structure, leadership and workforce skills.'],
['哪个 AWS CAF 视角关注组织变革管理、文化和云技能？',
 ['人员','业务','平台','运营'],
 '人员视角是技术与业务之间的桥梁：文化、组织结构、领导力和员工技能。'],
['Business focuses on business outcomes and investment.','Platform focuses on building the cloud environment.','Operations focuses on running services day to day.'],
['业务视角关注业务成果和投资。','平台视角关注构建云环境。','运营视角关注日常运行服务。']);

Q('1.3','single',[0],
['Which AWS CAF perspective helps ensure that cloud investments accelerate digital transformation and business outcomes?',
 ['Business','Security','Platform','Governance'],
 'The Business perspective covers strategy, portfolio, innovation, product and data monetization. Key stakeholders include the CEO, CFO and COO.'],
['哪个 AWS CAF 视角帮助确保云投资能加速数字化转型和业务成果？',
 ['业务','安全性','平台','治理'],
 '业务视角涵盖战略、产品组合、创新、产品和数据变现。主要利益相关者包括 CEO、CFO 和 COO。'],
['Security focuses on confidentiality, integrity and availability.','Platform focuses on architecture and infrastructure.','Governance focuses on managing risk and benefits.'],
['安全性视角关注机密性、完整性和可用性。','平台视角关注架构和基础设施。','治理视角关注管理风险和收益。']);

Q('1.3','single',[0],
['A CFO wants to manage cloud spending, risk and program management during cloud adoption. Which AWS CAF perspective covers this?',
 ['Governance','People','Operations','Platform'],
 'The Governance perspective orchestrates cloud initiatives while maximizing benefits and minimizing risks: program management, risk, cloud financial management and data governance.'],
['一位 CFO 希望在云采用期间管理云支出、风险和项目管理。哪个 AWS CAF 视角涵盖这些内容？',
 ['治理','人员','运营','平台'],
 '治理视角在最大化收益、最小化风险的同时统筹云计划：项目管理、风险、云财务管理和数据治理。'],
['People covers culture and skills.','Operations covers running services.','Platform covers technical architecture.'],
['人员视角涵盖文化和技能。','运营视角涵盖服务运行。','平台视角涵盖技术架构。']);

Q('1.3','single',[0],
['Which AWS CAF perspective focuses on building an enterprise-grade, scalable hybrid cloud platform and modernizing workloads?',
 ['Platform','Business','People','Governance'],
 'The Platform perspective covers platform architecture, data architecture, platform engineering, CI/CD and modern application development. Stakeholders include the CTO and architects.'],
['哪个 AWS CAF 视角关注构建企业级、可扩展的混合云平台并对工作负载进行现代化改造？',
 ['平台','业务','人员','治理'],
 '平台视角涵盖平台架构、数据架构、平台工程、CI/CD 和现代应用开发。利益相关者包括 CTO 和架构师。'],
['Business is about outcomes.','People is about culture and skills.','Governance is about risk and cost management.'],
['业务视角关注成果。','人员视角关注文化和技能。','治理视角关注风险和成本管理。']);

Q('1.3','single',[0],
['Which AWS CAF perspective covers incident management, observability and making sure cloud services are delivered to agreed levels?',
 ['Operations','Security','Platform','Business'],
 'The Operations perspective covers observability, event and incident management, change and release management, and performance and capacity.'],
['哪个 AWS CAF 视角涵盖事件管理、可观测性，以及确保云服务按约定的水平交付？',
 ['运营','安全性','平台','业务'],
 '运营视角涵盖可观测性、事件和故障管理、变更和发布管理以及性能和容量。'],
['Security is about protecting data and workloads.','Platform is about building the environment.','Business is about outcomes.'],
['安全性视角关注保护数据和工作负载。','平台视角关注构建环境。','业务视角关注成果。']);

Q('1.3','multi',[0,1],
['Which TWO are business outcomes that AWS CAF says cloud adoption can bring? (Select TWO.)',
 ['Reduced business risk','Increased revenue','Higher fixed IT costs','Longer time to market','More hardware to maintain'],
 'AWS CAF lists four outcomes: reduced business risk; improved environmental, social and governance (ESG) performance; increased revenue; and increased operational efficiency.'],
['根据 AWS CAF，云采用可以带来哪两项业务成果？（选择两项。）',
 ['降低业务风险','增加收入','更高的固定 IT 成本','更长的上市时间','更多需要维护的硬件'],
 'AWS CAF 列出了四项成果：降低业务风险；提升环境、社会和监管（ESG）绩效；增加收入；提高运营效率。'],
['Cloud adoption aims to lower fixed costs.','Cloud adoption shortens time to market.','Cloud adoption reduces hardware you maintain.'],
['云采用旨在降低固定成本。','云采用会缩短上市时间。','云采用会减少你需要维护的硬件。']);

Q('1.3','single',[0],
['A company moves an application to AWS without changing it, to exit a data centre quickly. Which migration strategy is this?',
 ['Rehost (lift and shift)','Refactor','Repurchase','Retire'],
 'Rehosting moves applications as they are, often with AWS Application Migration Service. It is fast and can be optimized later.'],
['某公司为了尽快撤出数据中心，在不做任何修改的情况下把应用迁移到 AWS。这是哪种迁移策略？',
 ['重新托管（直接迁移）','重构','重新购买','停用'],
 '重新托管是指按原样迁移应用，通常使用 AWS Application Migration Service。速度快，之后还可以再优化。'],
['Refactoring re-architects the application to be cloud native.','Repurchasing moves to a different product, often SaaS.','Retiring turns off applications that are no longer needed.'],
['重构是把应用重新架构为云原生应用。','重新购买是改用另一个产品，通常是 SaaS。','停用是关闭不再需要的应用。']);

Q('1.3','single',[0],
['A company moves its database to Amazon RDS to stop managing patches and backups, but keeps the application code the same. Which migration strategy is this?',
 ['Replatform (lift, tinker and shift)','Rehost','Refactor','Retain'],
 'Replatforming makes a few cloud optimizations, such as moving to a managed database, without changing the core architecture.'],
['某公司把数据库迁移到 Amazon RDS，不再自己管理补丁和备份，但应用代码保持不变。这是哪种迁移策略？',
 ['更换平台（直接迁移并稍作调整）','重新托管','重构','保留'],
 '更换平台是在不改变核心架构的情况下做一些云优化，例如改用托管数据库。'],
['Rehosting changes nothing about the application or database.','Refactoring re-architects the application.','Retaining keeps the application where it is.'],
['重新托管不对应用或数据库做任何更改。','重构是对应用重新架构。','保留是把应用留在原地。']);

Q('1.3','single',[0],
['A company replaces its self-managed customer relationship management (CRM) software with a SaaS CRM product. Which migration strategy is this?',
 ['Repurchase','Rehost','Relocate','Refactor'],
 'Repurchasing ("drop and shop") moves to a different product, typically SaaS, for example through AWS Marketplace.'],
['某公司用 SaaS 形式的 CRM 产品取代了自行管理的客户关系管理（CRM）软件。这是哪种迁移策略？',
 ['重新购买','重新托管','迁移位置','重构'],
 '重新购买（“弃旧换新”）是改用另一个产品，通常是 SaaS，例如通过 AWS Marketplace 购买。'],
['Rehosting moves the same software unchanged.','Relocating moves VMware workloads to VMware Cloud on AWS without changes.','Refactoring rebuilds the application.'],
['重新托管是把同一软件原样迁移。','迁移位置是把 VMware 工作负载原样迁移到 VMware Cloud on AWS。','重构是重新构建应用。']);

Q('1.3','single',[0],
['A monolithic application is rebuilt as microservices using AWS Lambda and Amazon DynamoDB to gain agility and scale. Which migration strategy is this?',
 ['Refactor (re-architect)','Replatform','Rehost','Repurchase'],
 'Refactoring changes the architecture to use cloud-native features. It takes the most effort but brings the biggest benefits.'],
['一个单体应用被重建为使用 AWS Lambda 和 Amazon DynamoDB 的微服务，以获得敏捷性和可扩展性。这是哪种迁移策略？',
 ['重构（重新架构）','更换平台','重新托管','重新购买'],
 '重构是改变架构以使用云原生功能。它工作量最大，但收益也最大。'],
['Replatforming makes only small optimizations.','Rehosting makes no changes.','Repurchasing buys a different product.'],
['更换平台只做小的优化。','重新托管不做任何更改。','重新购买是购买另一个产品。']);

Q('1.3','multi',[0,1],
['During a migration assessment, a company finds some applications nobody uses and others it must keep on premises for now. Which TWO migration strategies apply? (Select TWO.)',
 ['Retire','Retain','Rehost','Refactor','Repurchase'],
 'Retire turns off applications that are no longer needed. Retain (revisit) keeps applications where they are for now, for example because of recent investment or dependencies.'],
['在迁移评估中，某公司发现有些应用无人使用，还有些应用目前必须留在本地。适用哪两种迁移策略？（选择两项。）',
 ['停用','保留','重新托管','重构','重新购买'],
 '停用是关闭不再需要的应用；保留（以后再评估）是暂时把应用留在原地，例如因为刚投入不久或存在依赖关系。'],
['Rehosting moves applications to AWS.','Refactoring rebuilds applications in the cloud.','Repurchasing replaces applications with new products.'],
['重新托管是把应用迁移到 AWS。','重构是在云中重新构建应用。','重新购买是用新产品取代应用。']);

Q('1.3','single',[0],
['Before migrating, a company’s leadership wants a data-driven business case that compares its current on-premises costs with the projected cost of running on AWS. Which service helps build it?',
 ['Migration Evaluator','AWS Application Migration Service','AWS Budgets','AWS Artifact'],
 'Migration Evaluator analyses your current environment and builds a business case with the projected cost of running on AWS.'],
['迁移之前，某公司的管理层希望得到一份基于数据的业务案例，比较当前的本地部署成本与在 AWS 上运行的预计成本。哪项服务可以帮助构建它？',
 ['Migration Evaluator','AWS Application Migration Service','AWS Budgets','AWS Artifact'],
 'Migration Evaluator 分析你当前的环境，并构建包含在 AWS 上运行的预计成本的业务案例。'],
['Application Migration Service performs the lift-and-shift itself, not the business case.','Budgets tracks spending after you are on AWS.','Artifact provides compliance reports.'],
['Application Migration Service 执行的是直接迁移本身，而不是构建业务案例。','Budgets 在你上云之后跟踪支出。','Artifact 提供合规报告。']);

Q('1.3','single',[0],
['A company wants to automatically discover its on-premises servers, their configuration and the dependencies between them to plan which applications to migrate together. Which service should it use?',
 ['AWS Application Discovery Service','AWS Migration Hub alone, with no data collected','Amazon Inspector','AWS Trusted Advisor'],
 'Application Discovery Service collects server inventory, configuration, utilization and dependency data to plan migrations. The data appears in Migration Hub.'],
['某公司希望自动发现其本地服务器、这些服务器的配置以及它们之间的依赖关系，以便规划哪些应用要一起迁移。应使用哪项服务？',
 ['AWS Application Discovery Service','仅使用 AWS Migration Hub，而不收集任何数据','Amazon Inspector','AWS Trusted Advisor'],
 'Application Discovery Service 收集服务器清单、配置、利用率和依赖关系数据，用于规划迁移。这些数据会显示在 Migration Hub 中。'],
['Migration Hub tracks migrations, but discovery data comes from a discovery tool.','Inspector scans AWS workloads for vulnerabilities.','Trusted Advisor checks AWS accounts, not on-premises servers.'],
['Migration Hub 跟踪迁移，但发现数据来自发现工具。','Inspector 扫描 AWS 工作负载中的漏洞。','Trusted Advisor 检查的是 AWS 账户，而不是本地服务器。']);

Q('1.3','single',[0],
['Which AWS service automates lift-and-shift migration of servers to AWS by continuously replicating them and then launching them on Amazon EC2?',
 ['AWS Application Migration Service','AWS Database Migration Service','AWS Schema Conversion Tool','AWS Backup'],
 'AWS Application Migration Service is the main rehost service: it replicates source servers and launches them in AWS with minimal downtime.'],
['哪项 AWS 服务通过持续复制服务器并在 Amazon EC2 上启动它们，实现服务器直接迁移的自动化？',
 ['AWS Application Migration Service','AWS Database Migration Service','AWS Schema Conversion Tool','AWS Backup'],
 'AWS Application Migration Service 是主要的重新托管服务：它复制源服务器，并以最短的停机时间在 AWS 中启动它们。'],
['DMS migrates databases, not whole servers.','SCT converts database schemas.','AWS Backup manages backups, not migrations.'],
['DMS 迁移的是数据库，而不是整台服务器。','SCT 转换数据库架构。','AWS Backup 管理备份，而不是迁移。']);

Q('1.3','single',[0],
['A company wants a single place to track the progress of application migrations across several AWS and partner tools. Which service should it use?',
 ['AWS Migration Hub','AWS Snowball Edge','Amazon CloudFront','AWS Organizations'],
 'AWS Migration Hub provides a central location to discover, plan and track migrations.'],
['某公司希望在一个地方跟踪跨多个 AWS 和合作伙伴工具的应用迁移进度。应使用哪项服务？',
 ['AWS Migration Hub','AWS Snowball Edge','Amazon CloudFront','AWS Organizations'],
 'AWS Migration Hub 提供一个集中位置来发现、规划和跟踪迁移。'],
['Snowball Edge moves data physically.','CloudFront delivers content.','Organizations manages multiple accounts.'],
['Snowball Edge 用于以物理方式迁移数据。','CloudFront 用于分发内容。','Organizations 用于管理多个账户。']);

Q('1.3','single',[0],
['Which program offers funding, tools, training and expert guidance to help organizations migrate to AWS?',
 ['AWS Migration Acceleration Program (MAP)','AWS Free Tier','AWS re:Post','AWS Marketplace'],
 'MAP is a comprehensive migration program with a methodology (assess, mobilize, migrate and modernize), tools, partners and investment to offset costs.'],
['哪个计划提供资金、工具、培训和专家指导，帮助组织迁移到 AWS？',
 ['AWS 迁移加速计划（MAP）','AWS 免费套餐','AWS re:Post','AWS Marketplace'],
 'MAP 是一个全面的迁移计划，包含方法论（评估、动员、迁移和现代化）、工具、合作伙伴以及用于抵消成本的投资。'],
['The Free Tier offers limited free usage, not migration programs.','re:Post is a community Q&A site.','Marketplace sells third-party software.'],
['免费套餐提供有限的免费用量，而不是迁移计划。','re:Post 是社区问答网站。','Marketplace 销售第三方软件。']);

Q('1.3','single',[0],
['A company keeps a copy of its on-premises database continuously replicated to AWS during migration so it can cut over with minimal downtime. Which service supports this?',
 ['AWS Database Migration Service (AWS DMS)','AWS Snowball Edge','Amazon S3 Glacier','AWS Artifact'],
 'AWS DMS keeps the source database operational and replicates ongoing changes (change data capture), so cutover downtime is minimal. This is database replication.'],
['某公司在迁移期间把本地数据库的副本持续复制到 AWS，以便以最短的停机时间完成切换。哪项服务支持这样做？',
 ['AWS Database Migration Service（AWS DMS）','AWS Snowball Edge','Amazon S3 Glacier','AWS Artifact'],
 'AWS DMS 让源数据库保持运行并复制持续发生的变更（变更数据捕获），因此切换停机时间极短。这就是数据库复制。'],
['Snowball Edge is offline and cannot replicate changes continuously.','Glacier is archive storage.','Artifact provides compliance reports.'],
['Snowball Edge 是离线方式，无法持续复制变更。','Glacier 是归档存储。','Artifact 提供合规报告。']);

/* ================= 1.4 Cloud economics ================= */
Q('1.4','single',[0],
['Which cost is an example of a fixed cost in an on-premises data centre?',
 ['Buying servers and storage hardware up front','Paying for Amazon EC2 instances by the second','Paying per GB for Amazon S3 storage used','Paying per request for AWS Lambda'],
 'Fixed costs (capital expenditure) are paid up front regardless of usage. The other options are variable, pay-as-you-go costs.'],
['在本地数据中心中，哪项成本是固定成本的例子？',
 ['预先购买服务器和存储硬件','按秒为 Amazon EC2 实例付费','按使用的 GB 数为 Amazon S3 存储付费','按请求次数为 AWS Lambda 付费'],
 '固定成本（资本支出）无论用量多少都要预先支付。其他选项都是按需付费的可变成本。'],
['EC2 billed per second is a variable cost.','S3 per-GB pricing is a variable cost.','Lambda per-request pricing is a variable cost.'],
['按秒计费的 EC2 是可变成本。','按 GB 计价的 S3 是可变成本。','按请求计价的 Lambda 是可变成本。']);

Q('1.4','single',[0],
['Moving from on premises to AWS changes spending mostly from which type to which type?',
 ['From capital expenditure (CapEx) to operational expenditure (OpEx)','From operational expenditure to capital expenditure','From variable cost to fixed cost','From pay-as-you-go to long-term leases'],
 'In the cloud you stop buying hardware up front (CapEx) and pay for what you use as an operating expense (OpEx).'],
['从本地迁移到 AWS，支出主要从哪种类型转变为哪种类型？',
 ['从资本支出（CapEx）转为运营支出（OpEx）','从运营支出转为资本支出','从可变成本转为固定成本','从按需付费转为长期租赁'],
 '在云中，你不再预先购买硬件（资本支出），而是按使用量以运营支出（OpEx）付费。'],
['It is the reverse direction.','The cloud turns fixed costs into variable costs.','The cloud is pay-as-you-go.'],
['方向正好相反。','云是把固定成本变成可变成本。','云是按需付费的。']);

Q('1.4','multi',[0,1],
['When comparing the total cost of ownership (TCO) of on premises and AWS, which TWO costs should be included for the on-premises side? (Select TWO.)',
 ['Data centre power and cooling','IT staff time spent racking and patching servers','AWS Support plan fees','Amazon EC2 On-Demand charges','AWS data transfer charges'],
 'On-premises TCO includes hardware, facilities, power, cooling, networking, software licences and the labour to manage it all. The other options are AWS costs.'],
['比较本地部署与 AWS 的总拥有成本（TCO）时，本地部署一侧应包括哪两项成本？（选择两项。）',
 ['数据中心的电力和制冷','IT 员工上架和修补服务器所花的时间','AWS Support 计划费用','Amazon EC2 按需费用','AWS 数据传输费用'],
 '本地部署的 TCO 包括硬件、设施、电力、制冷、网络、软件许可证以及管理这些资源的人工。其他选项都是 AWS 成本。'],
['Support plan fees are an AWS-side cost.','EC2 charges are an AWS-side cost.','Data transfer charges are an AWS-side cost.'],
['Support 计划费用是 AWS 一侧的成本。','EC2 费用是 AWS 一侧的成本。','数据传输费用是 AWS 一侧的成本。']);

Q('1.4','single',[0],
['A company already owns Microsoft SQL Server licences and wants to use them on AWS. What is this licensing approach called?',
 ['Bring your own license (BYOL)','License included','Savings Plans','Spot pricing'],
 'BYOL lets you use licences you already own. Some licences require Dedicated Hosts because they are tied to physical cores or sockets.'],
['某公司已经拥有 Microsoft SQL Server 许可证，希望在 AWS 上使用。这种许可方式叫什么？',
 ['自带许可证（BYOL）','随附许可证','节省计划','竞价定价'],
 'BYOL 允许你使用已经拥有的许可证。有些许可证与物理内核或插槽绑定，因此需要使用专属主机。'],
['License included means the licence cost is part of the AWS price.','Savings Plans are a compute discount, not a licence model.','Spot is a compute pricing option.'],
['随附许可证是指许可证费用包含在 AWS 价格中。','节省计划是计算折扣，而不是许可模式。','竞价是一种计算定价选项。']);

Q('1.4','single',[0],
['A company launches Amazon RDS for Oracle and pays one hourly price that includes the Oracle licence. Which licensing model is this?',
 ['License included','Bring your own license','Dedicated Host licensing','Reserved licensing'],
 'With license included, the software licence is bundled into the hourly price of the service, so you do not need to buy licences separately.'],
['某公司启动了 Amazon RDS for Oracle，并按小时支付一个包含 Oracle 许可证的价格。这是哪种许可模式？',
 ['随附许可证','自带许可证','专属主机许可','预留许可'],
 '在随附许可证模式下，软件许可证已包含在服务的小时价格中，因此无需单独购买许可证。'],
['BYOL uses licences you already own.','Dedicated Hosts help with BYOL, not license-included pricing.','"Reserved licensing" is not an AWS licensing model.'],
['BYOL 使用你已经拥有的许可证。','专属主机用于辅助 BYOL，而不是随附许可证定价。','“预留许可”不是 AWS 的许可模式。']);

Q('1.4','single',[0],
['A company finds that its EC2 instances average 8% CPU utilization. What should it do to optimize cost?',
 ['Rightsize the instances to a smaller type','Move them to larger instances for headroom','Buy 3-year Reserved Instances for the current size','Add more instances behind a load balancer'],
 'Rightsizing matches instance types and sizes to actual workload needs. AWS Compute Optimizer and Cost Explorer give rightsizing recommendations.'],
['某公司发现其 EC2 实例的平均 CPU 利用率只有 8%。为了优化成本，应该怎么做？',
 ['把实例合理调整为更小的类型','改用更大的实例以留出余量','为当前规格购买 3 年期预留实例','在负载均衡器后面添加更多实例'],
 '合理调整大小是让实例类型和大小与工作负载的实际需求相匹配。AWS Compute Optimizer 和 Cost Explorer 都会提供合理调整大小的建议。'],
['Larger instances would waste even more money.','Committing to an oversized instance locks in waste; rightsize first.','More instances add cost without need.'],
['更大的实例会浪费更多的钱。','为过大的实例做承诺会把浪费锁定下来；应先合理调整大小。','增加实例会无谓地增加成本。']);

Q('1.4','single',[0],
['Which statement about economies of scale in the AWS Cloud is correct?',
 ['AWS’s very large aggregate usage lets it achieve lower costs, which result in lower prices for customers','Customers must commit to large volumes to get any discount','Economies of scale apply only to customers with more than 1,000 instances','Prices rise as more customers use AWS'],
 'Because of the huge combined usage of all customers, AWS can buy and operate infrastructure more cheaply and pass savings on.'],
['关于 AWS 云中的规模经济，哪种说法正确？',
 ['AWS 庞大的总体用量使其能实现更低的成本，从而为客户带来更低的价格','客户必须承诺大批量用量才能获得任何折扣','规模经济只适用于拥有 1000 多个实例的客户','使用 AWS 的客户越多，价格越高'],
 '由于所有客户的总体用量巨大，AWS 能以更低的成本采购和运营基础设施，并把节省让利给客户。'],
['Every customer benefits from lower pay-as-you-go prices, without commitment.','There is no minimum size.','AWS has historically lowered prices.'],
['每位客户都能享受更低的按需付费价格，无需承诺。','没有规模下限。','AWS 历来都是在降价。']);

Q('1.4','single',[0],
['Which on-premises cost is typically reduced or eliminated by moving to AWS managed services?',
 ['Staff time spent on hardware maintenance, OS patching and backups','The cost of writing application business logic','The cost of designing the user interface','The cost of understanding customer needs'],
 'Managed services shift undifferentiated operational work to AWS, which lowers labour costs. You still build your own application and product.'],
['迁移到 AWS 托管服务通常会减少或消除哪项本地成本？',
 ['员工花在硬件维护、操作系统补丁和备份上的时间','编写应用业务逻辑的成本','设计用户界面的成本','了解客户需求的成本'],
 '托管服务把无差异化的运维工作转移给 AWS，从而降低人工成本。你仍然需要构建自己的应用和产品。'],
['Business logic is still your work.','UI design is still your work.','Understanding customers is still your work.'],
['业务逻辑仍然是你的工作。','用户界面设计仍然是你的工作。','了解客户仍然是你的工作。']);

Q('1.4','single',[0],
['A company uses AWS CloudFormation and auto scaling to create and remove environments automatically. How does this affect costs?',
 ['Automation reduces manual effort and keeps resources running only when needed','Automation always increases costs because templates are billed','Automation removes the need to pay for compute','Automation is only allowed with Enterprise Support'],
 'Automating provisioning and termination reduces labour, mistakes and idle resources. CloudFormation itself has no extra charge for AWS resources; you pay for the resources it creates.'],
['某公司使用 AWS CloudFormation 和弹性伸缩自动创建和删除环境。这对成本有什么影响？',
 ['自动化减少了人工工作量，并让资源只在需要时运行','自动化总会增加成本，因为模板要收费','自动化让你无需为计算付费','只有 Enterprise Support 才允许使用自动化'],
 '自动化配置和终止资源可以减少人工、差错和闲置资源。CloudFormation 本身对 AWS 资源不额外收费，你只需为它创建的资源付费。'],
['CloudFormation does not charge extra for AWS resource provisioning.','You still pay for the compute you use.','Automation is available to every account.'],
['CloudFormation 不会为配置 AWS 资源额外收费。','你仍然要为使用的计算资源付费。','所有账户都可以使用自动化。']);

Q('1.4','single',[0],
['Which AWS tool helps compare the cost of an on-premises environment with the estimated cost of running it on AWS before migrating?',
 ['AWS Pricing Calculator','AWS Cost Explorer','AWS Budgets','AWS Cost and Usage Report'],
 'The AWS Pricing Calculator estimates the cost of planned AWS resources, so you can compare it with your current costs. Cost Explorer and the CUR analyse costs you have already incurred.'],
['在迁移前，哪项 AWS 工具可以帮助比较本地环境的成本与在 AWS 上运行的估算成本？',
 ['AWS 定价计算器','AWS Cost Explorer','AWS Budgets','AWS 成本和使用情况报告'],
 'AWS 定价计算器估算计划使用的 AWS 资源的成本，方便你与当前成本进行比较。Cost Explorer 和 CUR 分析的是已经产生的成本。'],
['Cost Explorer analyses existing AWS spend.','Budgets alert on actual or forecast spend.','The CUR details costs already incurred.'],
['Cost Explorer 分析的是现有的 AWS 支出。','Budgets 针对实际或预测支出发出告警。','CUR 详细列出已经产生的成本。']);

Q('1.4','multi',[0,1],
['Which TWO are examples of variable costs on AWS? (Select TWO.)',
 ['Amazon S3 storage billed per GB-month','AWS Lambda billed per request and duration','A server purchased for a company data centre','A 10-year lease on office space for servers','A one-time payment for a perpetual software licence'],
 'Variable costs scale with usage. Hardware purchases, leases and perpetual licences are fixed, up-front costs.'],
['以下哪两项是 AWS 上可变成本的例子？（选择两项。）',
 ['按 GB-月计费的 Amazon S3 存储','按请求次数和运行时长计费的 AWS Lambda','为公司数据中心购买的服务器','为存放服务器签订的 10 年办公场地租约','一次性购买的永久软件许可证'],
 '可变成本随用量变化。购买硬件、签订租约和购买永久许可证都是预先支付的固定成本。'],
['Buying a server is a fixed cost.','A long lease is a fixed cost.','A perpetual licence is a one-time fixed cost.'],
['购买服务器是固定成本。','长期租约是固定成本。','永久许可证是一次性的固定成本。']);

Q('1.4','single',[0],
['A company’s on-premises servers sit mostly idle because they were sized for a peak that happens two weeks per year. How does the AWS Cloud reduce this waste?',
 ['Capacity can scale up for the peak and down afterwards, so you pay only for what you use','AWS requires you to buy the same peak capacity, but at a lower price','AWS gives idle servers away for free','AWS stores idle servers in Amazon S3 Glacier'],
 'Elastic capacity removes the need to own peak capacity all year.'],
['某公司的本地服务器大部分时间都处于闲置状态，因为它们是按每年只出现两周的高峰来配置的。AWS 云如何减少这种浪费？',
 ['容量可以在高峰时扩展、之后缩减，因此你只需为使用的部分付费','AWS 要求你购买同样的高峰容量，只是价格更低','AWS 免费提供闲置服务器','AWS 把闲置服务器存放在 Amazon S3 Glacier 中'],
 '弹性容量让你无需全年拥有高峰容量。'],
['You do not need to buy peak capacity in the cloud.','Idle running resources are still billed.','Servers are not stored in Glacier; that is archive storage for data.'],
['在云中不需要购买高峰容量。','正在运行的闲置资源仍然要收费。','服务器不会存放在 Glacier 中；Glacier 是数据归档存储。']);

Q('1.4','single',[0],
['Which licensing situation would MOST likely require Amazon EC2 Dedicated Hosts?',
 ['Existing software licences that are counted per physical socket or core','Open-source software with no licence fees','Software bought as SaaS through AWS Marketplace','Licence-included Windows instances'],
 'Dedicated Hosts give visibility of physical sockets and cores, which is needed for some server-bound BYOL licences.'],
['哪种许可情况最可能需要使用 Amazon EC2 专属主机？',
 ['按物理插槽或内核计数的现有软件许可证','无需许可费用的开源软件','通过 AWS Marketplace 以 SaaS 形式购买的软件','随附许可证的 Windows 实例'],
 '专属主机可以看到物理插槽和内核，这是某些与服务器绑定的 BYOL 许可证所需要的。'],
['Open-source software has no socket-based licensing.','SaaS has no server licensing for you to manage.','License-included instances already cover the licence.'],
['开源软件没有基于插槽的许可。','SaaS 不需要你管理服务器许可。','随附许可证的实例已经包含了许可证。']);

Q('1.4','single',[0],
['Which statement about the cost of moving to the cloud is MOST accurate?',
 ['Savings come from paying for actual usage, rightsizing, managed services and fewer facilities costs, but they depend on managing resources well','Moving to the cloud always halves costs automatically','Costs are the same, because AWS charges the same as on-premises hardware','The cloud is only cheaper for companies with more than 10,000 employees'],
 'The cloud offers many ways to save, but you need to rightsize, turn off unused resources and choose the right pricing model to realize them.'],
['关于迁移到云的成本，哪种说法最准确？',
 ['节省来自按实际用量付费、合理调整大小、托管服务以及更少的设施成本，但取决于能否管理好资源','迁移到云总会自动让成本减半','成本不变，因为 AWS 收费与本地硬件相同','云只对员工超过 10000 人的公司更便宜'],
 '云提供了许多节省成本的方式，但你需要合理调整大小、关闭未使用的资源并选择合适的定价模式，才能真正实现节省。'],
['There is no automatic, guaranteed saving.','Cloud pricing works very differently from buying hardware.','Companies of every size can benefit.'],
['没有自动的、有保证的节省。','云定价与购买硬件的方式截然不同。','各种规模的公司都能受益。']);

Q('1.4','single',[0],
['A company wants to reduce the cost of maintaining its own database servers, including licences, patching and backups. Which option on AWS BEST helps?',
 ['Use a managed database service such as Amazon RDS or Amazon Aurora','Install the database on Amazon EC2 and manage it the same way','Buy more on-premises database servers','Store the database files in Amazon S3 Glacier'],
 'Managed databases offload patching, backups and high availability to AWS, which reduces operational costs.'],
['某公司希望降低维护自有数据库服务器的成本，包括许可证、补丁和备份。AWS 上哪个选项最有帮助？',
 ['使用 Amazon RDS 或 Amazon Aurora 等托管数据库服务','在 Amazon EC2 上安装数据库并用同样的方式管理','购买更多本地数据库服务器','把数据库文件存放在 Amazon S3 Glacier 中'],
 '托管数据库把补丁、备份和高可用性交给 AWS 处理，从而降低运维成本。'],
['Self-managing on EC2 keeps the same operational work.','More on-premises servers increase costs.','Glacier is archive storage and cannot run a database.'],
['在 EC2 上自行管理，运维工作量不变。','更多本地服务器会增加成本。','Glacier 是归档存储，无法运行数据库。']);

Q('1.4','single',[0],
['Why do companies often see lower networking and facility costs after moving to AWS?',
 ['AWS operates the data centres, power, cooling and physical network, and spreads those costs across all customers','AWS does not charge for any network traffic','AWS requires customers to provide their own power','Companies must still build their own data centres'],
 'Facility and network infrastructure costs are absorbed by AWS and shared at massive scale. Some network traffic, such as data out to the internet, is still charged.'],
['为什么公司迁移到 AWS 后，网络和设施成本通常会降低？',
 ['数据中心、电力、制冷和物理网络由 AWS 运营，这些成本由所有客户分摊','AWS 不对任何网络流量收费','AWS 要求客户自行提供电力','公司仍然必须建设自己的数据中心'],
 '设施和网络基础设施成本由 AWS 承担，并以超大规模分摊。部分网络流量（例如传出到互联网的数据）仍然收费。'],
['Data transfer out and between Regions is charged.','AWS provides the power.','Customers do not need their own data centres.'],
['传出数据和跨区域传输是收费的。','电力由 AWS 提供。','客户不需要建设自己的数据中心。']);

Q('1.4','single',[0],
['A company wants to see how much its infrastructure is costing per application so it can find savings after migration. What should it do FIRST?',
 ['Apply cost allocation tags to resources and activate them','Buy Reserved Instances for every instance','Move all workloads to one Availability Zone','Open an AWS Support case'],
 'Tagging resources (for example, by application) and activating the tags lets Cost Explorer and the Cost and Usage Report break down costs.'],
['某公司希望查看每个应用的基础设施成本，以便在迁移后寻找节省空间。首先应该做什么？',
 ['为资源添加成本分配标签并激活这些标签','为每个实例购买预留实例','把所有工作负载迁移到一个可用区','提交 AWS Support 案例'],
 '为资源打标签（例如按应用）并激活这些标签后，Cost Explorer 和成本和使用情况报告就能按标签拆分成本。'],
['Buying commitments before you understand costs can waste money.','A single AZ hurts availability and does not reveal costs.','Support cannot attribute your costs for you; tags do.'],
['在了解成本之前就购买承诺可能会浪费钱。','单个可用区会损害可用性，也无法揭示成本。','Support 不能替你归属成本，标签才能做到。']);

Q('1.4','single',[0],
['Which concept explains why a company should NOT size its new AWS environment exactly like its old, over-provisioned on-premises servers?',
 ['Rightsizing: choose the smallest resources that meet actual performance needs, and adjust over time','High availability: always provision twice the capacity','Data sovereignty: resources must match the old data centre','Fixed cost: cloud capacity cannot change after launch'],
 'On-premises servers are often oversized. Rightsizing on AWS avoids paying for unused capacity, and you can change sizes later.'],
['哪个概念解释了为什么公司不应完全按照旧的、过度配置的本地服务器来规划新的 AWS 环境？',
 ['合理调整大小：选择能满足实际性能需求的最小资源，并随时间调整','高可用性：始终配置两倍的容量','数据主权：资源必须与旧数据中心一致','固定成本：云容量在启动后无法更改'],
 '本地服务器通常配置过大。在 AWS 上合理调整大小可以避免为未使用的容量付费，而且之后还可以更改大小。'],
['High availability uses multiple AZs, not double-sized servers.','Data sovereignty concerns location, not size.','Cloud capacity can change at any time.'],
['高可用性依靠多个可用区，而不是两倍大小的服务器。','数据主权关注的是位置，而不是大小。','云容量可以随时更改。']);

Q('1.4','single',[0],
['Which on-premises cost is often overlooked in a total cost of ownership (TCO) comparison?',
 ['Indirect costs such as staff time, facilities, power and hardware refresh cycles','The price of the application’s domain name','The cost of the developers’ laptops','The cost of customer support phone calls'],
 'A full TCO comparison includes direct and indirect costs: server hardware, storage, network, facilities, power and cooling, and IT labour, as well as refresh cycles.'],
['在总拥有成本（TCO）比较中，哪项本地成本经常被忽视？',
 ['间接成本，例如员工时间、设施、电力和硬件更新周期','应用域名的价格','开发人员笔记本电脑的成本','客户支持电话的成本'],
 '完整的 TCO 比较包括直接和间接成本：服务器硬件、存储、网络、设施、电力和制冷、IT 人工以及硬件更新周期。'],
['Domain names cost the same either way.','Developer laptops are needed either way.','Customer support calls are unrelated to infrastructure.'],
['无论哪种方式，域名的成本都一样。','无论哪种方式，都需要开发人员笔记本电脑。','客户支持电话与基础设施无关。']);

Q('1.4','single',[0],
['A company has both a 5-year-old data centre lease ending soon and servers due for replacement. Why is this a good time to evaluate migrating to AWS?',
 ['It avoids new fixed investments in facilities and hardware that would lock in costs for years','AWS charges less to companies whose leases are ending','Migration is only possible at the end of a lease','AWS buys the old servers from the company'],
 'Hardware refreshes and lease renewals are major capital decisions. Migrating instead avoids committing to new fixed costs.'],
['某公司为期 5 年的数据中心租约即将到期，服务器也到了更换周期。为什么这是评估迁移到 AWS 的好时机？',
 ['可以避免在设施和硬件上进行新的固定投资，而这些投资会把成本锁定多年','AWS 对租约即将到期的公司收费更低','只有在租约到期时才能迁移','AWS 会从公司购买旧服务器'],
 '硬件更新和租约续签都是重大的资本决策。改为迁移可以避免承诺新的固定成本。'],
['AWS pricing does not depend on your lease.','You can migrate at any time.','AWS does not buy customer hardware.'],
['AWS 的定价与你的租约无关。','你可以随时迁移。','AWS 不会购买客户的硬件。']);
})();
