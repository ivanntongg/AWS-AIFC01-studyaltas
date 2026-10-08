/* CLF-C02 lessons, domain 1: Cloud Concepts (24%) */

/* ===================== TASK 1.1 ===================== */
CLF.tasks['1.1'] = {d:'d1',
title:{en:'Define the benefits of the AWS Cloud', zh:'定义 AWS 云的益处'},
obj:[
 ['Explain the value proposition of the AWS Cloud','说明 AWS 云的价值主张'],
 ['Understand the benefits of global infrastructure: speed of deployment, global reach','了解全球基础设施的益处：部署速度、全球覆盖范围'],
 ['Understand the advantages of high availability, elasticity and agility','了解高可用性、弹性和敏捷性的优势']
],
en:`
<h3>What "the cloud" means</h3>
<p>Cloud computing is the <b>on-demand delivery of IT resources over the internet with pay-as-you-go pricing</b>. Instead of buying and running your own servers and data centres, you rent compute, storage, databases and many other services from AWS and pay only for what you use.</p>

<h3>The six advantages of cloud computing</h3>
<p>AWS describes six advantages. Exam questions often describe one of them in a scenario and ask you to name it.</p>
<div class="tw"><table><thead><tr><th>Advantage</th><th>What it means</th><th>Question cue</th></tr></thead><tbody>
<tr><td>Trade fixed expense for variable expense</td><td>No big upfront hardware purchase (capital expense); pay for what you use (operating expense).</td><td>"No upfront investment", "pay only for what you consume"</td></tr>
<tr><td>Benefit from massive economies of scale</td><td>AWS buys at huge scale, so its prices per unit are lower than you could achieve alone, and it keeps lowering them.</td><td>"Lower variable cost because of AWS's size"</td></tr>
<tr><td>Stop guessing capacity</td><td>Scale up or down as demand changes instead of buying for the peak.</td><td>"Unpredictable traffic", "avoid over-provisioning"</td></tr>
<tr><td>Increase speed and agility</td><td>New resources are a few clicks or API calls away: minutes instead of weeks.</td><td>"Experiment quickly", "launch in minutes"</td></tr>
<tr><td>Stop spending money running and maintaining data centres</td><td>AWS handles racking, power, cooling and hardware; you focus on your customers.</td><td>"Focus on the business, not infrastructure"</td></tr>
<tr><td>Go global in minutes</td><td>Deploy in Regions around the world for lower latency, at low cost.</td><td>"Serve customers on other continents"</td></tr>
</tbody></table></div>

<h3>Benefits of the global infrastructure</h3>
<ul>
<li><b>Speed of deployment:</b> infrastructure is already built; you can launch a full environment in minutes.</li>
<li><b>Global reach:</b> many Regions on every inhabited continent, plus hundreds of edge locations, let you put applications close to users.</li>
<li><b>Reliability:</b> each Region has multiple, isolated Availability Zones, so one failure does not take down your application.</li>
</ul>

<h3>High availability, elasticity and agility</h3>
<div class="tw"><table><thead><tr><th>Term</th><th>Meaning</th><th>Example</th></tr></thead><tbody>
<tr><td>High availability</td><td>The system keeps running with minimal downtime, even when a component fails.</td><td>Instances in two Availability Zones behind a load balancer.</td></tr>
<tr><td>Elasticity</td><td>Resources grow and shrink <b>automatically</b> to match demand.</td><td>Auto Scaling adds servers during a sale and removes them afterwards.</td></tr>
<tr><td>Scalability</td><td>The ability to handle more load by adding resources (up or out).</td><td>Moving to a larger instance, or adding more instances.</td></tr>
<tr><td>Agility</td><td>Speed to experiment and innovate, because resources are quick and cheap to obtain.</td><td>A team tries a new idea in an afternoon and deletes it if it fails.</td></tr>
<tr><td>Fault tolerance</td><td>The system continues working with no interruption when a component fails.</td><td>Redundant components that take over instantly.</td></tr>
</tbody></table></div>
<div class="box trap"><p><b>Elasticity vs scalability:</b> elasticity is about matching demand automatically in both directions (scale in as well as out). If the question stresses "automatically" and "scale down when demand drops", the answer is elasticity.</p></div>
<div class="box rem"><p>"Pay only for what you use" and "trade upfront capital expense for variable expense" describe the same benefit. Capital expense (CapEx) = buying hardware; operating expense (OpEx) = paying as you go.</p></div>
`,
zh:`
<h3>“云”是什么意思</h3>
<p>云计算是<b>通过互联网按需提供 IT 资源，并采用按使用量付费的定价方式</b>。你无需购买和运营自己的服务器与数据中心，而是向 AWS 租用计算、存储、数据库等众多服务，并且只为实际用量付费。</p>

<h3>云计算的六大优势</h3>
<p>AWS 总结了六大优势。考题经常在场景中描述其中一项，让你说出它的名称。</p>
<div class="tw"><table><thead><tr><th>优势</th><th>含义</th><th>题目线索</th></tr></thead><tbody>
<tr><td>以可变成本取代固定成本</td><td>无需大笔预先购买硬件（资本支出）；按使用量付费（运营支出）。</td><td>“无需前期投入”“只为实际消耗付费”</td></tr>
<tr><td>受益于巨大的规模经济</td><td>AWS 大规模采购，单位价格低于你自己能做到的水平，并且持续降价。</td><td>“由于 AWS 规模大而带来更低的可变成本”</td></tr>
<tr><td>不再猜测容量</td><td>随需求变化扩大或缩小规模，而不是按峰值采购。</td><td>“流量不可预测”“避免过度配置”</td></tr>
<tr><td>提高速度和敏捷性</td><td>新资源只需点几下或调用 API 即可获得：从数周缩短到几分钟。</td><td>“快速试验”“几分钟内上线”</td></tr>
<tr><td>不再花钱运营和维护数据中心</td><td>机架、电力、制冷和硬件都由 AWS 负责；你专注于客户。</td><td>“专注业务而非基础设施”</td></tr>
<tr><td>几分钟内走向全球</td><td>以低成本在全球各区域部署，降低延迟。</td><td>“服务其他大洲的客户”</td></tr>
</tbody></table></div>

<h3>全球基础设施的益处</h3>
<ul>
<li><b>部署速度：</b>基础设施已经建好，几分钟内就能启动完整环境。</li>
<li><b>全球覆盖范围：</b>遍布各大洲的众多区域，加上数百个边缘站点，让应用可以靠近用户。</li>
<li><b>可靠性：</b>每个区域都有多个相互隔离的可用区，单点故障不会让整个应用瘫痪。</li>
</ul>

<h3>高可用性、弹性和敏捷性</h3>
<div class="tw"><table><thead><tr><th>术语</th><th>含义</th><th>示例</th></tr></thead><tbody>
<tr><td>高可用性</td><td>即使某个组件出故障，系统也能持续运行，停机时间极少。</td><td>在两个可用区运行实例，并置于负载均衡器之后。</td></tr>
<tr><td>弹性</td><td>资源随需求<b>自动</b>增加和减少。</td><td>促销期间弹性伸缩自动增加服务器，结束后再自动减少。</td></tr>
<tr><td>可扩展性</td><td>通过增加资源（纵向或横向）来承载更多负载的能力。</td><td>换用更大的实例，或增加更多实例。</td></tr>
<tr><td>敏捷性</td><td>由于资源获取快且便宜，可以快速试验和创新。</td><td>团队一个下午就能试一个新想法，失败了就删除。</td></tr>
<tr><td>容错能力</td><td>组件出故障时系统仍能不间断地继续工作。</td><td>冗余组件可以立即接管。</td></tr>
</tbody></table></div>
<div class="box trap"><p><b>弹性与可扩展性：</b>弹性强调自动地双向匹配需求（既能扩展也能收缩）。如果题目强调“自动”以及“需求下降时缩减”，答案就是弹性。</p></div>
<div class="box rem"><p>“只为实际用量付费”和“以可变成本取代前期资本支出”说的是同一个益处。资本支出（CapEx）= 购买硬件；运营支出（OpEx）= 按需付费。</p></div>
`};

/* ===================== TASK 1.2 ===================== */
CLF.tasks['1.2'] = {d:'d1',
title:{en:'Identify design principles of the AWS Cloud', zh:'确定 AWS 云的设计原则'},
obj:[
 ['Know the AWS Well-Architected Framework','了解 AWS Well-Architected Framework'],
 ['Understand the six pillars: operational excellence, security, reliability, performance efficiency, cost optimization, sustainability','了解六大支柱：卓越运营、安全性、可靠性、性能效率、成本优化、可持续性'],
 ['Identify the differences between the pillars','识别各支柱之间的区别']
],
en:`
<h3>The AWS Well-Architected Framework</h3>
<p>A set of best practices and questions for building secure, reliable, efficient, cost-effective and sustainable workloads on AWS. The free <b>AWS Well-Architected Tool</b> in the console lets you review a workload against these questions and get an improvement plan.</p>

<h3>The six pillars</h3>
<div class="tw"><table><thead><tr><th>Pillar</th><th>Focus</th><th>Key design principles</th><th>Question cue</th></tr></thead><tbody>
<tr><td>Operational excellence</td><td>Running and monitoring systems, and improving processes</td><td>Perform operations as code; make frequent, small, reversible changes; anticipate failure; learn from all operational events</td><td>"Automate deployments", "runbooks", "infrastructure as code", "post-incident reviews"</td></tr>
<tr><td>Security</td><td>Protecting data, systems and assets</td><td>Strong identity foundation (least privilege); traceability; security at all layers; protect data in transit and at rest; prepare for security events</td><td>"Least privilege", "encrypt", "MFA", "audit trail"</td></tr>
<tr><td>Reliability</td><td>Recovering from failure and meeting demand</td><td>Automatically recover from failure; test recovery procedures; scale horizontally; stop guessing capacity; manage change through automation</td><td>"Multi-AZ", "recover automatically", "backups", "disaster recovery"</td></tr>
<tr><td>Performance efficiency</td><td>Using resources efficiently as demand changes</td><td>Democratize advanced technologies (use managed services); go global in minutes; use serverless; experiment more often</td><td>"Right instance type", "lower latency", "use managed/serverless"</td></tr>
<tr><td>Cost optimization</td><td>Avoiding unnecessary cost</td><td>Adopt a consumption model; measure overall efficiency; stop spending on undifferentiated heavy lifting; analyse and attribute spend</td><td>"Rightsize", "Savings Plans", "turn off idle resources", "cost allocation tags"</td></tr>
<tr><td>Sustainability</td><td>Minimizing environmental impact</td><td>Understand your impact; maximize utilization; use managed services and efficient hardware; reduce downstream impact</td><td>"Reduce carbon footprint", "energy-efficient", "maximize utilization"</td></tr>
</tbody></table></div>
<div class="box trap"><p><b>Reliability vs performance efficiency:</b> reliability is about <i>recovering from failure and keeping running</i>; performance efficiency is about <i>using the right resources efficiently</i>. "Recover from an Availability Zone failure" is reliability; "choose the right instance type for the workload" is performance efficiency.</p></div>
<div class="box trap"><p><b>Operational excellence vs reliability:</b> operational excellence is about <i>how you run things</i> (automation, monitoring, small changes, learning from incidents). Reliability is about <i>the workload surviving failures</i>.</p></div>

<h3>General cloud design principles</h3>
<ul>
<li><b>Design for failure:</b> assume components will fail and build so the system keeps working (multiple AZs, health checks, automatic recovery).</li>
<li><b>Decouple components:</b> use queues and events (Amazon SQS, Amazon SNS, Amazon EventBridge) so parts can fail or scale independently.</li>
<li><b>Implement elasticity:</b> scale automatically with demand.</li>
<li><b>Think parallel and automate:</b> use infrastructure as code and automation instead of manual steps.</li>
</ul>
<div class="box rem"><p>Memory aid for the six pillars: <b>"SPORCS"</b>: Security, Performance efficiency, Operational excellence, Reliability, Cost optimization, Sustainability.</p></div>
`,
zh:`
<h3>AWS Well-Architected Framework</h3>
<p>一套最佳实践和问题清单，用于在 AWS 上构建安全、可靠、高效、经济且可持续的工作负载。控制台中免费的 <b>AWS Well-Architected Tool</b> 可以按这些问题审查工作负载，并给出改进计划。</p>

<h3>六大支柱</h3>
<div class="tw"><table><thead><tr><th>支柱</th><th>关注点</th><th>主要设计原则</th><th>题目线索</th></tr></thead><tbody>
<tr><td>卓越运营</td><td>运行和监控系统，持续改进流程</td><td>以代码方式执行运维；频繁进行小规模、可回滚的变更；预见故障；从所有运维事件中学习</td><td>“自动化部署”“运行手册”“基础设施即代码”“事后复盘”</td></tr>
<tr><td>安全性</td><td>保护数据、系统和资产</td><td>建立强大的身份基础（最低权限）；可追溯；在各层实施安全；保护传输中和静态数据；为安全事件做好准备</td><td>“最低权限”“加密”“MFA”“审计记录”</td></tr>
<tr><td>可靠性</td><td>从故障中恢复并满足需求</td><td>自动从故障中恢复；测试恢复流程；横向扩展；不再猜测容量；通过自动化管理变更</td><td>“多可用区”“自动恢复”“备份”“灾难恢复”</td></tr>
<tr><td>性能效率</td><td>随需求变化高效使用资源</td><td>让先进技术普及化（使用托管服务）；几分钟内走向全球；使用无服务器架构；更频繁地试验</td><td>“合适的实例类型”“降低延迟”“使用托管/无服务器”</td></tr>
<tr><td>成本优化</td><td>避免不必要的成本</td><td>采用按用量消费的模式；衡量整体效率；不再为无差异化的繁重工作花钱；分析并分摊支出</td><td>“合理调整大小”“节省计划”“关闭闲置资源”“成本分配标签”</td></tr>
<tr><td>可持续性</td><td>尽量减少对环境的影响</td><td>了解自身影响；最大化利用率；使用托管服务和高效硬件；减少下游影响</td><td>“降低碳足迹”“高能效”“最大化利用率”</td></tr>
</tbody></table></div>
<div class="box trap"><p><b>可靠性与性能效率：</b>可靠性关注<i>从故障中恢复并持续运行</i>；性能效率关注<i>高效地使用合适的资源</i>。“从可用区故障中恢复”属于可靠性；“为工作负载选择合适的实例类型”属于性能效率。</p></div>
<div class="box trap"><p><b>卓越运营与可靠性：</b>卓越运营关注<i>如何运行系统</i>（自动化、监控、小规模变更、从事件中学习）；可靠性关注<i>工作负载能否扛住故障</i>。</p></div>

<h3>通用的云设计原则</h3>
<ul>
<li><b>为故障而设计：</b>假设组件一定会出故障，并让系统仍能运行（多个可用区、健康检查、自动恢复）。</li>
<li><b>解耦组件：</b>使用队列和事件（Amazon SQS、Amazon SNS、Amazon EventBridge），让各部分可以独立出故障或扩展。</li>
<li><b>实现弹性：</b>随需求自动伸缩。</li>
<li><b>并行思考并自动化：</b>用基础设施即代码和自动化取代手动步骤。</li>
</ul>
<div class="box rem"><p>六大支柱记忆法：<b>“安性运可成持”</b>：安全性、性能效率、卓越运营、可靠性、成本优化、可持续性。</p></div>
`};

/* ===================== TASK 1.3 ===================== */
CLF.tasks['1.3'] = {d:'d1',
title:{en:'Understand the benefits of and strategies for migration to the AWS Cloud', zh:'了解迁移到 AWS 云的益处和策略'},
obj:[
 ['Know cloud adoption strategies and the resources that support the migration journey','了解云采用策略以及支持迁移之旅的资源'],
 ['Understand the AWS Cloud Adoption Framework (AWS CAF) and its benefits: reduced business risk, improved ESG performance, increased revenue, increased operational efficiency','了解 AWS Cloud Adoption Framework（AWS CAF）及其益处：降低业务风险、改善 ESG 表现、增加收入、提高运营效率'],
 ['Identify appropriate migration strategies (for example, database replication)','确定适当的迁移策略（例如数据库复制）']
],
en:`
<h3>The AWS Cloud Adoption Framework (AWS CAF)</h3>
<p>Guidance that helps organizations plan and carry out a successful move to the cloud. It groups capabilities into <b>six perspectives</b>:</p>
<div class="tw"><table><thead><tr><th>Perspective</th><th>Type</th><th>Focus</th><th>Typical stakeholders</th></tr></thead><tbody>
<tr><td>Business</td><td>Business</td><td>Make sure cloud investments speed up business outcomes</td><td>CEO, CFO, COO, strategy owners</td></tr>
<tr><td>People</td><td>Business</td><td>Culture, skills, training and organizational change</td><td>HR, staffing, people managers</td></tr>
<tr><td>Governance</td><td>Business</td><td>Manage risk and get the most value; program and portfolio management</td><td>CIO, program managers, risk officers</td></tr>
<tr><td>Platform</td><td>Technical</td><td>Build a scalable, enterprise-grade hybrid cloud platform</td><td>CTO, architects, engineers</td></tr>
<tr><td>Security</td><td>Technical</td><td>Confidentiality, integrity and availability of data and workloads</td><td>CISO, security engineers</td></tr>
<tr><td>Operations</td><td>Technical</td><td>Deliver cloud services at the agreed level for the business</td><td>IT operations, support managers</td></tr>
</tbody></table></div>
<p><b>Business outcomes</b> the AWS CAF says cloud adoption can deliver:</p>
<ul>
<li><b>Reduced business risk</b> (better reliability, performance and security)</li>
<li><b>Improved environmental, social and governance (ESG) performance</b> (for example, lower carbon footprint)</li>
<li><b>Increased revenue</b> (new products and faster time to market)</li>
<li><b>Increased operational efficiency</b> (lower operating costs, higher productivity)</li>
</ul>
<div class="box trap"><p>The People perspective is about <b>skills and culture</b>; the Governance perspective is about <b>risk, portfolio and value</b>. "Training staff for the cloud" points to People.</p></div>

<h3>Migration strategies: the 7 Rs</h3>
<div class="tw"><table><thead><tr><th>Strategy</th><th>What happens</th><th>Example</th></tr></thead><tbody>
<tr><td>Rehost ("lift and shift")</td><td>Move as-is, no changes</td><td>Copy VMs to Amazon EC2 with AWS Application Migration Service</td></tr>
<tr><td>Replatform ("lift, tinker and shift")</td><td>Small optimizations, no change to core architecture</td><td>Move a self-managed database to Amazon RDS</td></tr>
<tr><td>Repurchase ("drop and shop")</td><td>Switch to a different product, often SaaS</td><td>Replace an in-house CRM with a SaaS CRM</td></tr>
<tr><td>Refactor / re-architect</td><td>Redesign using cloud-native features</td><td>Break a monolith into serverless microservices</td></tr>
<tr><td>Retire</td><td>Turn off what is no longer needed</td><td>Decommission an unused reporting server</td></tr>
<tr><td>Retain</td><td>Keep on premises for now</td><td>An app with a recent hardware purchase or strict latency needs</td></tr>
<tr><td>Relocate</td><td>Move infrastructure to the cloud without buying hardware or rewriting apps</td><td>Move VMware workloads to VMware Cloud on AWS</td></tr>
</tbody></table></div>
<div class="box rem"><p><b>Rehost</b> is the fastest and least effort; <b>refactor</b> takes the most effort but gives the most cloud benefit.</p></div>

<h3>Migration tools and resources</h3>
<div class="tw"><table><thead><tr><th>Tool</th><th>Purpose</th></tr></thead><tbody>
<tr><td>AWS Migration Hub</td><td>One place to track the progress of migrations across tools</td></tr>
<tr><td>AWS Application Discovery Service</td><td>Discovers on-premises servers, their configuration and dependencies to plan a migration</td></tr>
<tr><td>Migration Evaluator</td><td>Builds a data-driven business case (projected cost of running on AWS)</td></tr>
<tr><td>AWS Application Migration Service</td><td>Rehosts (lift and shift) servers to AWS with minimal downtime</td></tr>
<tr><td>AWS Database Migration Service (AWS DMS)</td><td>Migrates databases with the source still running, using continuous <b>database replication</b></td></tr>
<tr><td>AWS Schema Conversion Tool (AWS SCT)</td><td>Converts a database schema between engines (for example, Oracle to Amazon Aurora PostgreSQL)</td></tr>
<tr><td>AWS Snow Family</td><td>Physical devices for moving very large amounts of data offline</td></tr>
<tr><td>AWS DataSync</td><td>Online data transfer from on-premises storage to AWS storage</td></tr>
</tbody></table></div>
<div class="box ex"><p>A company must migrate an Oracle database to Amazon Aurora with minimal downtime: use <b>AWS SCT</b> to convert the schema, then <b>AWS DMS</b> to copy and continuously replicate the data until cut-over.</p></div>
<p>People resources: <b>AWS Professional Services</b> and <b>AWS Partners</b> help with migrations; the <b>AWS Migration Acceleration Program (MAP)</b> provides methodology, tools and funding.</p>
`,
zh:`
<h3>AWS Cloud Adoption Framework（AWS CAF）</h3>
<p>帮助组织规划并顺利迁移到云的指导框架。它把各项能力分为<b>六个视角</b>：</p>
<div class="tw"><table><thead><tr><th>视角</th><th>类型</th><th>关注点</th><th>典型相关方</th></tr></thead><tbody>
<tr><td>业务</td><td>业务</td><td>确保云投入能加快实现业务成果</td><td>CEO、CFO、COO、战略负责人</td></tr>
<tr><td>人员</td><td>业务</td><td>文化、技能、培训和组织变革</td><td>人力资源、人员配置、人员经理</td></tr>
<tr><td>治理</td><td>业务</td><td>管控风险并实现价值最大化；项目和组合管理</td><td>CIO、项目经理、风险官</td></tr>
<tr><td>平台</td><td>技术</td><td>构建可扩展的企业级混合云平台</td><td>CTO、架构师、工程师</td></tr>
<tr><td>安全</td><td>技术</td><td>数据和工作负载的机密性、完整性和可用性</td><td>CISO、安全工程师</td></tr>
<tr><td>运营</td><td>技术</td><td>按与业务约定的水平交付云服务</td><td>IT 运营、支持经理</td></tr>
</tbody></table></div>
<p>AWS CAF 指出，采用云可以带来以下<b>业务成果</b>：</p>
<ul>
<li><b>降低业务风险</b>（更好的可靠性、性能和安全性）</li>
<li><b>改善环境、社会和监管（ESG）表现</b>（例如降低碳足迹）</li>
<li><b>增加收入</b>（推出新产品、更快上市）</li>
<li><b>提高运营效率</b>（降低运营成本、提高生产力）</li>
</ul>
<div class="box trap"><p>人员视角关注<b>技能和文化</b>；治理视角关注<b>风险、组合和价值</b>。“为员工开展云培训”指向人员视角。</p></div>

<h3>迁移策略：7R</h3>
<div class="tw"><table><thead><tr><th>策略</th><th>做法</th><th>示例</th></tr></thead><tbody>
<tr><td>重新托管（“直接迁移”）</td><td>原样迁移，不做修改</td><td>用 AWS Application Migration Service 把虚拟机复制到 Amazon EC2</td></tr>
<tr><td>更换平台（“迁移并稍作调整”）</td><td>做少量优化，不改变核心架构</td><td>把自行管理的数据库迁移到 Amazon RDS</td></tr>
<tr><td>重新购买（“弃旧换新”）</td><td>换用其他产品，通常是 SaaS</td><td>用 SaaS CRM 替换自研 CRM</td></tr>
<tr><td>重构 / 重新架构</td><td>利用云原生特性重新设计</td><td>把单体应用拆分为无服务器微服务</td></tr>
<tr><td>停用</td><td>关闭不再需要的系统</td><td>下线一台没人用的报表服务器</td></tr>
<tr><td>保留</td><td>暂时留在本地</td><td>刚采购了硬件或有严格延迟要求的应用</td></tr>
<tr><td>迁址</td><td>不买硬件、不改写应用，把基础设施搬到云上</td><td>把 VMware 工作负载迁到 VMware Cloud on AWS</td></tr>
</tbody></table></div>
<div class="box rem"><p><b>重新托管</b>最快、工作量最小；<b>重构</b>工作量最大，但获得的云收益也最多。</p></div>

<h3>迁移工具和资源</h3>
<div class="tw"><table><thead><tr><th>工具</th><th>用途</th></tr></thead><tbody>
<tr><td>AWS Migration Hub</td><td>在一个地方跟踪各工具的迁移进度</td></tr>
<tr><td>AWS Application Discovery Service</td><td>发现本地服务器及其配置和依赖关系，用于规划迁移</td></tr>
<tr><td>Migration Evaluator</td><td>基于数据构建业务案例（预估在 AWS 上的运行成本）</td></tr>
<tr><td>AWS Application Migration Service</td><td>以极短停机时间把服务器重新托管（直接迁移）到 AWS</td></tr>
<tr><td>AWS Database Migration Service（AWS DMS）</td><td>在源数据库持续运行的同时迁移数据库，使用持续的<b>数据库复制</b></td></tr>
<tr><td>AWS Schema Conversion Tool（AWS SCT）</td><td>在不同数据库引擎之间转换架构（例如从 Oracle 转为 Amazon Aurora PostgreSQL）</td></tr>
<tr><td>AWS Snow Family</td><td>用于离线迁移海量数据的物理设备</td></tr>
<tr><td>AWS DataSync</td><td>把本地存储的数据在线传输到 AWS 存储</td></tr>
</tbody></table></div>
<div class="box ex"><p>某公司必须以最短停机时间把 Oracle 数据库迁移到 Amazon Aurora：先用 <b>AWS SCT</b> 转换架构，再用 <b>AWS DMS</b> 复制数据并持续同步，直到切换。</p></div>
<p>人力资源方面：<b>AWS 专业服务团队</b>和 <b>AWS 合作伙伴</b>可以协助迁移；<b>AWS 迁移加速计划（MAP）</b>提供方法论、工具和资金支持。</p>
`};

/* ===================== TASK 1.4 ===================== */
CLF.tasks['1.4'] = {d:'d1',
title:{en:'Understand concepts of cloud economics', zh:'了解云经济性的概念'},
obj:[
 ['Understand aspects of cloud economics and the cost savings of moving to the cloud','了解云经济性的各个方面以及迁移上云带来的成本节省'],
 ['Understand fixed costs compared with variable costs, and the costs of on-premises environments','了解固定成本与可变成本的对比，以及本地部署环境的成本'],
 ['Understand licensing strategies: Bring Your Own License (BYOL) compared with included licenses','了解许可策略：自带许可证（BYOL）与随附许可证的对比'],
 ['Understand rightsizing, the benefits of automation and economies of scale','了解合理调整大小、自动化的益处以及规模经济']
],
en:`
<h3>Fixed costs vs variable costs</h3>
<div class="tw"><table><thead><tr><th></th><th>On premises</th><th>AWS Cloud</th></tr></thead><tbody>
<tr><td>Cost type</td><td>Mostly <b>fixed</b>, paid upfront (capital expense)</td><td>Mostly <b>variable</b>, pay as you go (operating expense)</td></tr>
<tr><td>Capacity</td><td>Buy for the expected peak; idle the rest of the time</td><td>Match capacity to demand and pay only for what runs</td></tr>
<tr><td>Risk</td><td>Hardware may be under-used or run out</td><td>Scale up or down at any time</td></tr>
</tbody></table></div>

<h3>Costs of running on premises</h3>
<p>When comparing with AWS, count the <b>total cost of ownership (TCO)</b>, not just server prices:</p>
<ul>
<li>Servers, storage and network hardware, and replacing them every few years</li>
<li>Data centre space, power, cooling and physical security</li>
<li>Software licences and support contracts</li>
<li>Staff to rack, patch, maintain and monitor everything</li>
<li>Capacity bought for peaks that sits idle most of the time</li>
</ul>
<div class="box rem"><p><b>Migration Evaluator</b> builds a business case that compares your current on-premises costs with the projected cost on AWS. <b>AWS Pricing Calculator</b> estimates the cost of a planned AWS architecture.</p></div>

<h3>Licensing: BYOL vs included licences</h3>
<div class="tw"><table><thead><tr><th>Model</th><th>How it works</th><th>When it fits</th></tr></thead><tbody>
<tr><td>Bring Your Own License (BYOL)</td><td>Use licences you already own (for example, Microsoft Windows Server or SQL Server) on AWS, subject to the vendor's licence terms. Often needs Dedicated Hosts for per-core or per-socket licences.</td><td>You already paid for licences and want to reuse them</td></tr>
<tr><td>License included</td><td>The licence cost is built into the hourly price of the AWS resource</td><td>You have no licences, or want flexibility without managing them</td></tr>
</tbody></table></div>
<p><b>AWS License Manager</b> helps track and manage software licences across AWS and on premises.</p>

<h3>Rightsizing</h3>
<p>Matching instance types and sizes to the workload's actual needs, so you don't pay for capacity you don't use. Review utilization regularly and move to smaller (or different) instance types. <b>AWS Compute Optimizer</b> and <b>AWS Cost Explorer</b> recommend rightsizing; <b>AWS Trusted Advisor</b> flags idle and under-used resources.</p>

<h3>Benefits of automation</h3>
<ul>
<li>Fewer manual errors and consistent, repeatable environments (infrastructure as code with AWS CloudFormation)</li>
<li>Resources that start and stop on schedule or scale with demand, cutting waste</li>
<li>Staff time freed for higher-value work</li>
</ul>

<h3>Economies of scale</h3>
<p>Because AWS aggregates usage from millions of customers, it achieves lower costs than any single company could, and it passes savings on through lower prices.</p>
<div class="box trap"><p>"Lower costs because AWS buys hardware at huge volume" = <b>economies of scale</b>. "Pay only when you use it" = <b>trade fixed expense for variable expense</b>. These are different benefits.</p></div>
`,
zh:`
<h3>固定成本与可变成本</h3>
<div class="tw"><table><thead><tr><th></th><th>本地部署</th><th>AWS 云</th></tr></thead><tbody>
<tr><td>成本类型</td><td>以<b>固定成本</b>为主，需预先支付（资本支出）</td><td>以<b>可变成本</b>为主，按需付费（运营支出）</td></tr>
<tr><td>容量</td><td>按预期峰值采购，其余时间闲置</td><td>让容量与需求匹配，只为运行中的资源付费</td></tr>
<tr><td>风险</td><td>硬件可能利用不足或不够用</td><td>随时扩大或缩小规模</td></tr>
</tbody></table></div>

<h3>本地部署环境的成本</h3>
<p>与 AWS 比较时，应计算<b>总拥有成本（TCO）</b>，而不只是服务器价格：</p>
<ul>
<li>服务器、存储和网络硬件，以及每隔几年的更换</li>
<li>数据中心空间、电力、制冷和物理安保</li>
<li>软件许可证和支持合同</li>
<li>负责上架、打补丁、维护和监控的人员</li>
<li>为峰值采购、大部分时间闲置的容量</li>
</ul>
<div class="box rem"><p><b>Migration Evaluator</b> 会构建业务案例，比较当前本地部署成本与预计的 AWS 成本。<b>AWS 定价计算器</b>用于估算计划中的 AWS 架构成本。</p></div>

<h3>许可：BYOL 与随附许可证</h3>
<div class="tw"><table><thead><tr><th>模式</th><th>运作方式</th><th>适用场景</th></tr></thead><tbody>
<tr><td>自带许可证（BYOL）</td><td>在 AWS 上使用你已拥有的许可证（例如 Microsoft Windows Server 或 SQL Server），需遵守供应商的许可条款。按核或按插槽计费的许可证通常需要专属主机。</td><td>你已购买许可证并希望继续使用</td></tr>
<tr><td>随附许可证</td><td>许可证费用已包含在 AWS 资源的小时价格中</td><td>你没有许可证，或希望灵活而无需自行管理</td></tr>
</tbody></table></div>
<p><b>AWS License Manager</b> 帮助你在 AWS 和本地跟踪和管理软件许可证。</p>

<h3>合理调整大小</h3>
<p>让实例类型和规格与工作负载的实际需求相匹配，不为用不上的容量付费。定期检查利用率，换用更小（或不同）的实例类型。<b>AWS Compute Optimizer</b> 和 <b>AWS Cost Explorer</b> 会给出合理调整大小的建议；<b>AWS Trusted Advisor</b> 会标出闲置和利用不足的资源。</p>

<h3>自动化的益处</h3>
<ul>
<li>减少人为错误，环境一致、可重复（用 AWS CloudFormation 实现基础设施即代码）</li>
<li>资源按计划启停或随需求伸缩，减少浪费</li>
<li>释放员工时间，投入更有价值的工作</li>
</ul>

<h3>规模经济</h3>
<p>AWS 汇聚了数百万客户的用量，成本低于任何单个公司所能达到的水平，并通过降价把节省让利给客户。</p>
<div class="box trap"><p>“因为 AWS 大批量采购硬件而成本更低”= <b>规模经济</b>；“只在使用时付费”= <b>以可变成本取代固定成本</b>。这是两项不同的益处。</p></div>
`};
