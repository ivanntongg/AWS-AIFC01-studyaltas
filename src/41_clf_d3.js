/* CLF-C02 lessons, domain 3: Cloud Technology and Services (34%) */

/* ===================== TASK 3.1 ===================== */
CLF.tasks['3.1'] = {d:'d3',
title:{en:'Define methods of deploying and operating in the AWS Cloud', zh:'定义在 AWS 云中部署和操作的方法'},
obj:[
 ['Know the ways to provision, operate and access AWS services','了解配置、操作和访问 AWS 服务的各种方式'],
 ['Decide between programmatic access (APIs, SDKs, CLI), the AWS Management Console and infrastructure as code (IaC)','在编程访问（API、SDK、CLI）、AWS 管理控制台和基础设施即代码（IaC）之间做出选择'],
 ['Evaluate whether to use one-time operations or repeatable processes','评估应使用一次性操作还是可重复的流程'],
 ['Identify cloud deployment models: cloud, hybrid, on-premises','识别云部署模型：云、混合、本地部署']
],
en:`
<h3>Ways to access AWS</h3>
<div class="tw"><table><thead><tr><th>Method</th><th>What it is</th><th>Best for</th></tr></thead><tbody>
<tr><td>AWS Management Console</td><td>Web-based user interface</td><td>Learning, exploring, one-off tasks, visual monitoring</td></tr>
<tr><td>AWS Command Line Interface (AWS CLI)</td><td>Commands typed in a terminal (also available in the browser through AWS CloudShell)</td><td>Scripting and automating tasks</td></tr>
<tr><td>AWS SDKs</td><td>Libraries for programming languages (Python, Java, JavaScript, .NET and more)</td><td>Calling AWS from your own application code</td></tr>
<tr><td>APIs</td><td>The underlying HTTPS requests that every other method uses</td><td>Direct integration</td></tr>
<tr><td>Infrastructure as code (IaC)</td><td>Templates that define resources: <b>AWS CloudFormation</b> (JSON/YAML) and the AWS Cloud Development Kit (AWS CDK)</td><td>Repeatable, version-controlled environments</td></tr>
</tbody></table></div>
<div class="box rem"><p>The CLI, SDKs and console all use the same AWS APIs underneath. Programmatic access uses <b>access keys</b> or role credentials; the console uses a username and password (plus MFA).</p></div>

<h3>One-time operations vs repeatable processes</h3>
<ul>
<li>A quick, one-off change or experiment: the console is fine.</li>
<li>Something you will do again, in several environments or Regions, or that must be consistent and auditable: use <b>IaC or scripts</b>. AWS CloudFormation creates the same stack every time and can roll back if something fails.</li>
</ul>

<h3>Managed ways to deploy</h3>
<div class="tw"><table><thead><tr><th>Service</th><th>What it does</th></tr></thead><tbody>
<tr><td>AWS CloudFormation</td><td>Provisions and updates resources from a template (stack)</td></tr>
<tr><td>AWS Elastic Beanstalk</td><td>Upload your code and it handles capacity, load balancing, scaling and monitoring (platform as a service)</td></tr>
<tr><td>AWS Service Catalog</td><td>Lets an organization offer approved, pre-configured products for teams to launch</td></tr>
<tr><td>AWS Systems Manager</td><td>Operates and manages servers at scale: patching, running commands, inventory, Parameter Store</td></tr>
</tbody></table></div>

<h3>Cloud deployment models</h3>
<div class="tw"><table><thead><tr><th>Model</th><th>Description</th><th>Example</th></tr></thead><tbody>
<tr><td>Cloud (cloud-native)</td><td>All parts of the application run in the cloud</td><td>A startup builds everything on AWS</td></tr>
<tr><td>Hybrid</td><td>Connects cloud resources with existing on-premises infrastructure</td><td>Keep a mainframe on premises; run new web front ends on AWS, connected by AWS Direct Connect</td></tr>
<tr><td>On-premises (private cloud)</td><td>Resources run in your own data centre, using virtualization and management tools</td><td>AWS Outposts brings AWS infrastructure and services into your facility</td></tr>
</tbody></table></div>
<p>Service models: <b>IaaS</b> (you manage the OS and up, such as Amazon EC2), <b>PaaS</b> (you manage the code, such as AWS Elastic Beanstalk) and <b>SaaS</b> (you just use the software, such as Amazon WorkSpaces or a hosted email service).</p>
`,
zh:`
<h3>访问 AWS 的方式</h3>
<div class="tw"><table><thead><tr><th>方式</th><th>含义</th><th>最适合</th></tr></thead><tbody>
<tr><td>AWS 管理控制台</td><td>基于 Web 的用户界面</td><td>学习、探索、一次性任务、可视化监控</td></tr>
<tr><td>AWS 命令行界面（AWS CLI）</td><td>在终端中输入命令（也可通过 AWS CloudShell 在浏览器中使用）</td><td>编写脚本和自动化任务</td></tr>
<tr><td>AWS SDK</td><td>面向各编程语言的库（Python、Java、JavaScript、.NET 等）</td><td>在自己的应用代码中调用 AWS</td></tr>
<tr><td>API</td><td>所有其他方式底层使用的 HTTPS 请求</td><td>直接集成</td></tr>
<tr><td>基础设施即代码（IaC）</td><td>用模板定义资源：<b>AWS CloudFormation</b>（JSON/YAML）和 AWS Cloud Development Kit（AWS CDK）</td><td>可重复、受版本控制的环境</td></tr>
</tbody></table></div>
<div class="box rem"><p>CLI、SDK 和控制台底层使用的都是相同的 AWS API。编程访问使用<b>访问密钥</b>或角色凭证；控制台使用用户名和密码（加上 MFA）。</p></div>

<h3>一次性操作与可重复的流程</h3>
<ul>
<li>快速的一次性更改或试验：使用控制台即可。</li>
<li>需要重复执行、在多个环境或区域中执行，或必须保持一致和可审计的操作：使用 <b>IaC 或脚本</b>。AWS CloudFormation 每次都会创建相同的堆栈，出错时还能回滚。</li>
</ul>

<h3>托管的部署方式</h3>
<div class="tw"><table><thead><tr><th>服务</th><th>作用</th></tr></thead><tbody>
<tr><td>AWS CloudFormation</td><td>根据模板（堆栈）配置和更新资源</td></tr>
<tr><td>AWS Elastic Beanstalk</td><td>上传代码即可，由它处理容量、负载均衡、伸缩和监控（平台即服务）</td></tr>
<tr><td>AWS Service Catalog</td><td>让组织提供经批准、预先配置好的产品供团队启动</td></tr>
<tr><td>AWS Systems Manager</td><td>大规模运维和管理服务器：打补丁、运行命令、资产清单、Parameter Store</td></tr>
</tbody></table></div>

<h3>云部署模型</h3>
<div class="tw"><table><thead><tr><th>模型</th><th>说明</th><th>示例</th></tr></thead><tbody>
<tr><td>云（云原生）</td><td>应用的所有部分都在云中运行</td><td>初创公司把一切都构建在 AWS 上</td></tr>
<tr><td>混合</td><td>把云资源与现有的本地基础设施连接起来</td><td>大型机留在本地，新的 Web 前端运行在 AWS 上，通过 AWS Direct Connect 连接</td></tr>
<tr><td>本地部署（私有云）</td><td>资源在你自己的数据中心运行，使用虚拟化和管理工具</td><td>AWS Outposts 把 AWS 基础设施和服务带到你的设施中</td></tr>
</tbody></table></div>
<p>服务模式：<b>IaaS</b>（你管理操作系统及以上部分，例如 Amazon EC2）、<b>PaaS</b>（你只管理代码，例如 AWS Elastic Beanstalk）和 <b>SaaS</b>（你直接使用软件，例如 Amazon WorkSpaces 或托管邮件服务）。</p>
`};

/* ===================== TASK 3.2 ===================== */
CLF.tasks['3.2'] = {d:'d3',
title:{en:'Define the AWS global infrastructure', zh:'定义 AWS 全球基础设施'},
obj:[
 ['Describe the relationships among Regions, Availability Zones and edge locations','描述区域、可用区和边缘站点之间的关系'],
 ['Describe how to achieve high availability by using multiple Availability Zones, which do not share single points of failure','描述如何使用多个可用区实现高可用性，以及可用区之间不存在共同的单点故障'],
 ['Describe when to use multiple Regions: disaster recovery, business continuity, low latency for end users, data sovereignty','描述何时使用多个区域：灾难恢复、业务连续性、为终端用户提供低延迟、数据主权'],
 ['Understand the benefits of edge locations','了解边缘站点的益处']
],
en:`
<h3>Building blocks</h3>
<div class="tw"><table><thead><tr><th>Component</th><th>What it is</th><th>Used for</th></tr></thead><tbody>
<tr><td>Region</td><td>A separate geographic area (for example, Europe (Frankfurt)) containing multiple, isolated Availability Zones. Regions are independent of each other</td><td>Where you deploy resources; data stays in the Region unless you move it</td></tr>
<tr><td>Availability Zone (AZ)</td><td>One or more discrete data centres with redundant power, networking and connectivity, physically separated from other AZs in the Region but linked by fast, low-latency networks</td><td>High availability within a Region</td></tr>
<tr><td>Edge location</td><td>Sites in many more cities than Regions, used by Amazon CloudFront, Amazon Route 53 and AWS Global Accelerator</td><td>Caching content close to users, fast DNS, lower latency</td></tr>
<tr><td>Local Zones</td><td>Extensions of a Region placed in large cities</td><td>Single-digit millisecond latency for nearby users</td></tr>
<tr><td>Wavelength Zones</td><td>AWS infrastructure inside telecom 5G networks</td><td>Ultra-low latency for mobile apps</td></tr>
<tr><td>AWS Outposts</td><td>AWS-managed racks in your own data centre</td><td>Running AWS services on premises</td></tr>
</tbody></table></div>
<div class="box rem"><p>Nesting: a <b>Region</b> contains several <b>Availability Zones</b>; each AZ contains one or more <b>data centres</b>. <b>Edge locations</b> sit outside Regions, close to users.</p></div>

<h3>High availability with multiple AZs</h3>
<p>Availability Zones are designed <b>not to share single points of failure</b> (separate power, networking and flood plains). Running copies of your application in two or more AZs, behind a load balancer, keeps it available if one AZ fails. Many managed services do this for you (for example, Amazon RDS Multi-AZ, Amazon S3 storing data across at least three AZs, Amazon DynamoDB).</p>

<h3>When to use multiple Regions</h3>
<ul>
<li><b>Disaster recovery and business continuity:</b> survive the loss of an entire Region.</li>
<li><b>Low latency for end users:</b> serve customers on different continents from a nearby Region.</li>
<li><b>Data sovereignty and compliance:</b> keep data in the country or region the law requires.</li>
</ul>

<h3>How to choose a Region</h3>
<ol>
<li><b>Compliance and data governance</b> (legal requirements come first)</li>
<li><b>Proximity to customers</b> (latency)</li>
<li><b>Available services and features</b> (not every service is in every Region)</li>
<li><b>Pricing</b> (prices differ between Regions)</li>
</ol>
<div class="box trap"><p>A single AZ failure is handled with <b>Multi-AZ</b>. A whole-Region disaster or legal residency requirement calls for <b>multiple Regions</b>. Edge locations improve <b>latency</b>, not data residency.</p></div>
`,
zh:`
<h3>组成部分</h3>
<div class="tw"><table><thead><tr><th>组件</th><th>含义</th><th>用途</th></tr></thead><tbody>
<tr><td>区域</td><td>独立的地理区域（例如欧洲（法兰克福）），包含多个相互隔离的可用区。区域之间彼此独立</td><td>部署资源的位置；除非你主动迁移，数据会留在该区域</td></tr>
<tr><td>可用区（AZ）</td><td>一个或多个独立的数据中心，具有冗余的电力、网络和连接；与同一区域内的其他可用区物理隔离，但通过高速、低延迟的网络相连</td><td>在一个区域内实现高可用性</td></tr>
<tr><td>边缘站点</td><td>分布在比区域多得多的城市，供 Amazon CloudFront、Amazon Route 53 和 AWS Global Accelerator 使用</td><td>在靠近用户的位置缓存内容、加快 DNS 解析、降低延迟</td></tr>
<tr><td>本地扩展区</td><td>部署在大城市中的区域延伸</td><td>为附近用户提供个位数毫秒级的延迟</td></tr>
<tr><td>Wavelength 区域</td><td>部署在电信运营商 5G 网络中的 AWS 基础设施</td><td>为移动应用提供超低延迟</td></tr>
<tr><td>AWS Outposts</td><td>放在你自己数据中心里、由 AWS 管理的机架</td><td>在本地运行 AWS 服务</td></tr>
</tbody></table></div>
<div class="box rem"><p>层级关系：一个<b>区域</b>包含多个<b>可用区</b>；每个可用区包含一个或多个<b>数据中心</b>。<b>边缘站点</b>位于区域之外，靠近用户。</p></div>

<h3>用多个可用区实现高可用性</h3>
<p>可用区的设计<b>不存在共同的单点故障</b>（独立的电力、网络和防洪区域）。在两个或更多可用区中运行应用副本，并置于负载均衡器之后，即使一个可用区出故障，应用仍然可用。许多托管服务会自动这样做（例如 Amazon RDS 多可用区部署、Amazon S3 把数据存储在至少三个可用区、Amazon DynamoDB）。</p>

<h3>何时使用多个区域</h3>
<ul>
<li><b>灾难恢复和业务连续性：</b>在整个区域失效时仍能运行。</li>
<li><b>为终端用户提供低延迟：</b>从就近的区域为不同大洲的客户提供服务。</li>
<li><b>数据主权与合规：</b>把数据保留在法律要求的国家或地区。</li>
</ul>

<h3>如何选择区域</h3>
<ol>
<li><b>合规与数据治理</b>（法律要求优先）</li>
<li><b>与客户的距离</b>（延迟）</li>
<li><b>可用的服务和功能</b>（并非每项服务都在每个区域提供）</li>
<li><b>价格</b>（不同区域价格不同）</li>
</ol>
<div class="box trap"><p>单个可用区故障用<b>多可用区</b>应对；整个区域的灾难或法律上的数据驻留要求需要<b>多个区域</b>。边缘站点改善的是<b>延迟</b>，而不是数据驻留。</p></div>
`};

/* ===================== TASK 3.3 ===================== */
CLF.tasks['3.3'] = {d:'d3',
title:{en:'Identify AWS compute services', zh:'识别 AWS 计算服务'},
obj:[
 ['Recognize the appropriate use of Amazon EC2 instance types (for example, compute optimized, storage optimized)','识别各种 Amazon EC2 实例类型的适当用途（例如计算优化型、存储优化型）'],
 ['Recognize the appropriate use of container options (Amazon ECS, Amazon EKS)','识别各种容器选项的适当用途（Amazon ECS、Amazon EKS）'],
 ['Recognize the appropriate use of serverless compute options (AWS Fargate, AWS Lambda)','识别各种无服务器计算选项的适当用途（AWS Fargate、AWS Lambda）'],
 ['Recognize that auto scaling provides elasticity, and identify the purposes of load balancers','了解弹性伸缩提供弹性，并识别负载均衡器的用途']
],
en:`
<h3>Amazon EC2 instance families</h3>
<div class="tw"><table><thead><tr><th>Family</th><th>Optimized for</th><th>Typical workloads</th></tr></thead><tbody>
<tr><td>General purpose (M, T)</td><td>A balance of compute, memory and networking</td><td>Web servers, code repositories, small databases</td></tr>
<tr><td>Compute optimized (C)</td><td>High-performance processors</td><td>Batch processing, gaming servers, scientific modelling, high-performance web servers</td></tr>
<tr><td>Memory optimized (R, X)</td><td>Large amounts of memory</td><td>In-memory databases, real-time big data analytics</td></tr>
<tr><td>Storage optimized (I, D)</td><td>High, sequential read/write access to large local datasets</td><td>Data warehousing, distributed file systems, high-transaction databases</td></tr>
<tr><td>Accelerated computing (P, G, Inf, Trn)</td><td>Hardware accelerators such as GPUs</td><td>Machine learning, graphics rendering, video processing</td></tr>
</tbody></table></div>

<h3>Other compute services</h3>
<div class="tw"><table><thead><tr><th>Service</th><th>What it is</th><th>Question cue</th></tr></thead><tbody>
<tr><td>AWS Lambda</td><td>Runs code in response to events without managing servers; pay per request and compute time; runs up to 15 minutes per invocation</td><td>"Run code when a file is uploaded", "no servers to manage"</td></tr>
<tr><td>Amazon ECS</td><td>AWS's own container orchestration service</td><td>"Run Docker containers on AWS"</td></tr>
<tr><td>Amazon EKS</td><td>Managed Kubernetes</td><td>"Already use Kubernetes"</td></tr>
<tr><td>AWS Fargate</td><td>Serverless compute engine for containers (works with ECS and EKS): no servers or clusters to manage</td><td>"Containers without managing EC2 instances"</td></tr>
<tr><td>Amazon ECR</td><td>Registry to store and share container images</td><td>"Store Docker images"</td></tr>
<tr><td>AWS Elastic Beanstalk</td><td>Deploys web applications; handles infrastructure automatically</td><td>"Just upload the code"</td></tr>
<tr><td>Amazon Lightsail</td><td>Simple virtual private servers with predictable monthly pricing</td><td>"Simple website or small app, easy pricing"</td></tr>
<tr><td>AWS Batch</td><td>Runs batch computing jobs at any scale</td><td>"Thousands of batch jobs"</td></tr>
<tr><td>AWS Outposts</td><td>AWS compute and services in your own data centre</td><td>"Low latency to on-premises systems"</td></tr>
</tbody></table></div>

<h3>Elasticity: auto scaling</h3>
<p><b>Amazon EC2 Auto Scaling</b> adds instances when demand rises and removes them when it falls, keeping the number you need (minimum, desired and maximum capacity). <b>AWS Auto Scaling</b> manages scaling for several resource types together. Auto scaling is how AWS provides <b>elasticity</b>.</p>

<h3>Load balancers (Elastic Load Balancing)</h3>
<p>A load balancer spreads incoming traffic across multiple targets (instances, containers, IP addresses) in multiple AZs, checks their health and stops sending traffic to unhealthy ones.</p>
<div class="tw"><table><thead><tr><th>Type</th><th>Works at</th><th>Use for</th></tr></thead><tbody>
<tr><td>Application Load Balancer</td><td>Layer 7 (HTTP/HTTPS)</td><td>Web apps; route by URL path or host name</td></tr>
<tr><td>Network Load Balancer</td><td>Layer 4 (TCP/UDP)</td><td>Extreme performance, millions of requests per second, static IP</td></tr>
<tr><td>Gateway Load Balancer</td><td>Layer 3</td><td>Third-party virtual appliances such as firewalls</td></tr>
</tbody></table></div>
<div class="box trap"><p>Auto scaling changes <b>how many</b> instances run; a load balancer <b>spreads traffic</b> across them. They are usually used together.</p></div>
`,
zh:`
<h3>Amazon EC2 实例系列</h3>
<div class="tw"><table><thead><tr><th>系列</th><th>优化方向</th><th>典型工作负载</th></tr></thead><tbody>
<tr><td>通用型（M、T）</td><td>计算、内存和网络资源均衡</td><td>Web 服务器、代码仓库、小型数据库</td></tr>
<tr><td>计算优化型（C）</td><td>高性能处理器</td><td>批处理、游戏服务器、科学建模、高性能 Web 服务器</td></tr>
<tr><td>内存优化型（R、X）</td><td>大容量内存</td><td>内存数据库、实时大数据分析</td></tr>
<tr><td>存储优化型（I、D）</td><td>对大型本地数据集进行高速的顺序读写</td><td>数据仓库、分布式文件系统、高事务量数据库</td></tr>
<tr><td>加速计算型（P、G、Inf、Trn）</td><td>GPU 等硬件加速器</td><td>机器学习、图形渲染、视频处理</td></tr>
</tbody></table></div>

<h3>其他计算服务</h3>
<div class="tw"><table><thead><tr><th>服务</th><th>含义</th><th>题目线索</th></tr></thead><tbody>
<tr><td>AWS Lambda</td><td>响应事件运行代码，无需管理服务器；按请求次数和计算时间付费；每次调用最长运行 15 分钟</td><td>“文件上传时运行代码”“无需管理服务器”</td></tr>
<tr><td>Amazon ECS</td><td>AWS 自己的容器编排服务</td><td>“在 AWS 上运行 Docker 容器”</td></tr>
<tr><td>Amazon EKS</td><td>托管的 Kubernetes</td><td>“已经在使用 Kubernetes”</td></tr>
<tr><td>AWS Fargate</td><td>面向容器的无服务器计算引擎（可与 ECS 和 EKS 配合）：无需管理服务器或集群</td><td>“运行容器但不管理 EC2 实例”</td></tr>
<tr><td>Amazon ECR</td><td>存储和共享容器镜像的镜像仓库</td><td>“存储 Docker 镜像”</td></tr>
<tr><td>AWS Elastic Beanstalk</td><td>部署 Web 应用，自动处理基础设施</td><td>“只需上传代码”</td></tr>
<tr><td>Amazon Lightsail</td><td>简单的虚拟专用服务器，月费可预测</td><td>“简单网站或小型应用，定价简单”</td></tr>
<tr><td>AWS Batch</td><td>以任意规模运行批量计算作业</td><td>“成千上万个批处理作业”</td></tr>
<tr><td>AWS Outposts</td><td>在你自己的数据中心中提供 AWS 计算和服务</td><td>“与本地系统之间需要低延迟”</td></tr>
</tbody></table></div>

<h3>弹性：弹性伸缩</h3>
<p><b>Amazon EC2 Auto Scaling</b> 在需求上升时增加实例、需求下降时减少实例，保持所需的数量（最小、期望和最大容量）。<b>AWS Auto Scaling</b> 可同时管理多种资源类型的伸缩。弹性伸缩就是 AWS 实现<b>弹性</b>的方式。</p>

<h3>负载均衡器（Elastic Load Balancing）</h3>
<p>负载均衡器把传入流量分配到多个可用区中的多个目标（实例、容器、IP 地址），检查它们的健康状况，并停止向不健康的目标发送流量。</p>
<div class="tw"><table><thead><tr><th>类型</th><th>工作层级</th><th>用途</th></tr></thead><tbody>
<tr><td>Application Load Balancer</td><td>第 7 层（HTTP/HTTPS）</td><td>Web 应用；按 URL 路径或主机名路由</td></tr>
<tr><td>Network Load Balancer</td><td>第 4 层（TCP/UDP）</td><td>极致性能、每秒数百万请求、静态 IP</td></tr>
<tr><td>Gateway Load Balancer</td><td>第 3 层</td><td>防火墙等第三方虚拟设备</td></tr>
</tbody></table></div>
<div class="box trap"><p>弹性伸缩改变的是运行实例的<b>数量</b>；负载均衡器负责在它们之间<b>分配流量</b>。两者通常配合使用。</p></div>
`};

/* ===================== TASK 3.4 ===================== */
CLF.tasks['3.4'] = {d:'d3',
title:{en:'Identify AWS database services', zh:'识别 AWS 数据库服务'},
obj:[
 ['Decide when to use EC2-hosted databases or AWS managed databases','判断何时使用 EC2 托管的数据库或 AWS 托管数据库'],
 ['Identify relational databases (Amazon RDS, Amazon Aurora)','识别关系数据库（Amazon RDS、Amazon Aurora）'],
 ['Identify NoSQL databases (Amazon DynamoDB) and memory-based databases (Amazon ElastiCache)','识别 NoSQL 数据库（Amazon DynamoDB）和基于内存的数据库（Amazon ElastiCache）'],
 ['Identify database migration tools (AWS DMS, AWS SCT)','识别数据库迁移工具（AWS DMS、AWS SCT）']
],
en:`
<h3>EC2-hosted vs AWS managed databases</h3>
<div class="tw"><table><thead><tr><th></th><th>Database on Amazon EC2</th><th>AWS managed database (such as Amazon RDS)</th></tr></thead><tbody>
<tr><td>You manage</td><td>OS, database installation, patching, backups, replication, scaling</td><td>Schema, queries, users and access, data</td></tr>
<tr><td>AWS manages</td><td>Only the infrastructure</td><td>Hardware, OS and database patching, automated backups, Multi-AZ failover</td></tr>
<tr><td>Choose when</td><td>You need full control, an unsupported engine or OS-level access</td><td>You want less operational work (the usual best answer)</td></tr>
</tbody></table></div>

<h3>The database services</h3>
<div class="tw"><table><thead><tr><th>Service</th><th>Type</th><th>Key points</th><th>Question cue</th></tr></thead><tbody>
<tr><td>Amazon RDS</td><td>Relational (SQL)</td><td>Managed MySQL, PostgreSQL, MariaDB, Oracle, Microsoft SQL Server and IBM Db2; Multi-AZ for high availability; read replicas for read scaling</td><td>"Managed relational database", "SQL Server/Oracle"</td></tr>
<tr><td>Amazon Aurora</td><td>Relational (SQL)</td><td>AWS-built, MySQL- and PostgreSQL-compatible; higher performance; storage replicated across 3 AZs</td><td>"High-performance relational, MySQL/PostgreSQL compatible"</td></tr>
<tr><td>Amazon DynamoDB</td><td>NoSQL key-value and document</td><td>Serverless, single-digit millisecond performance at any scale; global tables</td><td>"Millions of requests per second", "flexible schema", "serverless database"</td></tr>
<tr><td>Amazon ElastiCache</td><td>In-memory cache</td><td>Valkey, Redis OSS or Memcached; microsecond latency</td><td>"Cache frequent queries", "session store", "reduce database load"</td></tr>
<tr><td>Amazon DocumentDB</td><td>Document (MongoDB-compatible)</td><td>Managed JSON document database</td><td>"MongoDB workloads"</td></tr>
<tr><td>Amazon Neptune</td><td>Graph</td><td>Highly connected data</td><td>"Social networks", "recommendation engines", "fraud graphs"</td></tr>
<tr><td>Amazon Redshift</td><td>Data warehouse</td><td>Analytics (OLAP) on large amounts of structured data</td><td>"Business intelligence on petabytes"</td></tr>
</tbody></table></div>
<div class="box trap"><p><b>Relational</b> = tables with a fixed schema and SQL joins (RDS, Aurora). <b>NoSQL</b> = flexible schema, massive scale (DynamoDB). <b>Data warehouse</b> = analytics, not day-to-day transactions (Redshift).</p></div>

<h3>Database migration</h3>
<ul>
<li><b>AWS Database Migration Service (AWS DMS):</b> moves data to AWS while the source stays fully operational, and keeps replicating changes. Works for same-engine (homogeneous) and different-engine (heterogeneous) migrations.</li>
<li><b>AWS Schema Conversion Tool (AWS SCT):</b> converts the schema and code when the target engine is different (for example, SQL Server to Aurora MySQL).</li>
</ul>
<div class="box rem"><p>Different engines: <b>SCT</b> converts the schema, then <b>DMS</b> moves the data. Same engine: DMS alone.</p></div>
`,
zh:`
<h3>EC2 托管的数据库与 AWS 托管数据库</h3>
<div class="tw"><table><thead><tr><th></th><th>在 Amazon EC2 上运行数据库</th><th>AWS 托管数据库（例如 Amazon RDS）</th></tr></thead><tbody>
<tr><td>你负责</td><td>操作系统、数据库安装、补丁、备份、复制、伸缩</td><td>架构、查询、用户与访问权限、数据</td></tr>
<tr><td>AWS 负责</td><td>只负责基础设施</td><td>硬件、操作系统和数据库补丁、自动备份、多可用区故障转移</td></tr>
<tr><td>适用场景</td><td>需要完全控制、使用不受支持的引擎或需要操作系统级访问</td><td>希望减少运维工作（通常是最佳答案）</td></tr>
</tbody></table></div>

<h3>各数据库服务</h3>
<div class="tw"><table><thead><tr><th>服务</th><th>类型</th><th>要点</th><th>题目线索</th></tr></thead><tbody>
<tr><td>Amazon RDS</td><td>关系数据库（SQL）</td><td>托管的 MySQL、PostgreSQL、MariaDB、Oracle、Microsoft SQL Server 和 IBM Db2；多可用区实现高可用；只读副本扩展读取能力</td><td>“托管关系数据库”“SQL Server/Oracle”</td></tr>
<tr><td>Amazon Aurora</td><td>关系数据库（SQL）</td><td>AWS 自研，兼容 MySQL 和 PostgreSQL；性能更高；存储在 3 个可用区之间复制</td><td>“高性能关系数据库，兼容 MySQL/PostgreSQL”</td></tr>
<tr><td>Amazon DynamoDB</td><td>NoSQL 键值与文档数据库</td><td>无服务器，任何规模下都能提供个位数毫秒级性能；全局表</td><td>“每秒数百万请求”“灵活的架构”“无服务器数据库”</td></tr>
<tr><td>Amazon ElastiCache</td><td>内存缓存</td><td>Valkey、Redis OSS 或 Memcached；微秒级延迟</td><td>“缓存频繁查询”“会话存储”“减轻数据库负载”</td></tr>
<tr><td>Amazon DocumentDB</td><td>文档数据库（兼容 MongoDB）</td><td>托管的 JSON 文档数据库</td><td>“MongoDB 工作负载”</td></tr>
<tr><td>Amazon Neptune</td><td>图数据库</td><td>高度关联的数据</td><td>“社交网络”“推荐引擎”“欺诈关系图”</td></tr>
<tr><td>Amazon Redshift</td><td>数据仓库</td><td>对海量结构化数据进行分析（OLAP）</td><td>“对 PB 级数据进行商业智能分析”</td></tr>
</tbody></table></div>
<div class="box trap"><p><b>关系数据库</b> = 有固定架构的表和 SQL 连接（RDS、Aurora）；<b>NoSQL</b> = 灵活的架构、超大规模（DynamoDB）；<b>数据仓库</b> = 用于分析，而不是日常事务（Redshift）。</p></div>

<h3>数据库迁移</h3>
<ul>
<li><b>AWS Database Migration Service（AWS DMS）：</b>在源数据库保持正常运行的同时把数据迁移到 AWS，并持续复制变更。支持同引擎（同构）和不同引擎（异构）迁移。</li>
<li><b>AWS Schema Conversion Tool（AWS SCT）：</b>当目标引擎不同时（例如从 SQL Server 迁移到 Aurora MySQL）转换架构和代码。</li>
</ul>
<div class="box rem"><p>不同引擎：先用 <b>SCT</b> 转换架构，再用 <b>DMS</b> 迁移数据。相同引擎：只用 DMS 即可。</p></div>
`};

/* ===================== TASK 3.5 ===================== */
CLF.tasks['3.5'] = {d:'d3',
title:{en:'Identify AWS network services', zh:'识别 AWS 网络服务'},
obj:[
 ['Identify the components of a VPC (for example, subnets, gateways)','识别 VPC 的组成部分（例如子网、网关）'],
 ['Understand security in a VPC: network ACLs, security groups, Amazon Inspector','了解 VPC 中的安全：网络 ACL、安全组、Amazon Inspector'],
 ['Understand the purpose of Amazon Route 53','了解 Amazon Route 53 的用途'],
 ['Identify network connectivity options to AWS (AWS VPN, AWS Direct Connect)','识别连接到 AWS 的网络选项（AWS VPN、AWS Direct Connect）']
],
en:`
<h3>Amazon VPC components</h3>
<p>An <b>Amazon Virtual Private Cloud (VPC)</b> is your own logically isolated network in a Region.</p>
<div class="tw"><table><thead><tr><th>Component</th><th>Purpose</th></tr></thead><tbody>
<tr><td>Subnet</td><td>A range of IP addresses in one Availability Zone. <b>Public</b> subnets have a route to the internet gateway; <b>private</b> subnets do not</td></tr>
<tr><td>Route table</td><td>Rules that decide where network traffic goes</td></tr>
<tr><td>Internet gateway</td><td>Lets resources in public subnets communicate with the internet</td></tr>
<tr><td>NAT gateway</td><td>Lets resources in private subnets reach the internet (for updates) while blocking inbound connections</td></tr>
<tr><td>Virtual private gateway</td><td>The AWS side of a Site-to-Site VPN connection</td></tr>
<tr><td>VPC peering</td><td>Private connection between two VPCs</td></tr>
<tr><td>AWS Transit Gateway</td><td>A central hub that connects many VPCs and on-premises networks</td></tr>
<tr><td>AWS PrivateLink (VPC endpoints)</td><td>Private access to AWS services and partner services without going over the internet</td></tr>
</tbody></table></div>

<h3>Security in a VPC</h3>
<div class="tw"><table><thead><tr><th></th><th>Security group</th><th>Network ACL</th></tr></thead><tbody>
<tr><td>Applies to</td><td>An instance (its network interface)</td><td>A subnet</td></tr>
<tr><td>Rules</td><td><b>Allow</b> rules only</td><td><b>Allow and deny</b> rules, evaluated in number order</td></tr>
<tr><td>State</td><td><b>Stateful</b>: return traffic is allowed automatically</td><td><b>Stateless</b>: return traffic must be allowed explicitly</td></tr>
<tr><td>Default</td><td>Denies all inbound, allows all outbound</td><td>The default network ACL allows all traffic</td></tr>
</tbody></table></div>
<p><b>Amazon Inspector</b> also checks network reachability: it finds instances that can be reached from the internet on risky ports, alongside software vulnerabilities.</p>
<div class="box trap"><p>"Block one specific IP address from a subnet" needs a <b>network ACL</b> (security groups cannot deny). "Firewall for a single instance" is a <b>security group</b>.</p></div>

<h3>Amazon Route 53</h3>
<p>A highly available <b>DNS</b> service: registers domain names, translates names to IP addresses, checks the health of endpoints and routes users with routing policies (simple, weighted, latency-based, failover, geolocation and more).</p>

<h3>Connecting to AWS and delivering content</h3>
<div class="tw"><table><thead><tr><th>Service</th><th>What it does</th><th>Question cue</th></tr></thead><tbody>
<tr><td>AWS Site-to-Site VPN</td><td>Encrypted tunnel between your network and a VPC over the public internet</td><td>"Quick, low-cost, encrypted connection"</td></tr>
<tr><td>AWS Client VPN</td><td>Managed VPN for individual users connecting to AWS or on-premises networks</td><td>"Remote employees connect securely"</td></tr>
<tr><td>AWS Direct Connect</td><td>A <b>dedicated private</b> network connection from your premises to AWS (does not use the internet)</td><td>"Consistent performance", "high bandwidth", "private connection"</td></tr>
<tr><td>Amazon CloudFront</td><td>Content delivery network (CDN) that caches content at edge locations</td><td>"Speed up a global website", "cache videos near users"</td></tr>
<tr><td>AWS Global Accelerator</td><td>Routes users over the AWS global network using fixed (anycast) IP addresses</td><td>"Improve availability and performance of global applications", "static IPs"</td></tr>
<tr><td>Amazon API Gateway</td><td>Creates, publishes and secures APIs at any scale</td><td>"Front door for serverless APIs"</td></tr>
</tbody></table></div>
<div class="box rem"><p>VPN = over the <b>internet</b>, encrypted, set up in minutes. Direct Connect = <b>private</b> line, consistent performance, takes longer to set up. Many companies use VPN as a backup for Direct Connect.</p></div>
`,
zh:`
<h3>Amazon VPC 的组成部分</h3>
<p><b>Amazon Virtual Private Cloud（VPC）</b>是你在一个区域内拥有的、逻辑隔离的专属网络。</p>
<div class="tw"><table><thead><tr><th>组成部分</th><th>用途</th></tr></thead><tbody>
<tr><td>子网</td><td>位于一个可用区中的一段 IP 地址范围。<b>公有</b>子网有通往互联网网关的路由；<b>私有</b>子网没有</td></tr>
<tr><td>路由表</td><td>决定网络流量去向的规则</td></tr>
<tr><td>互联网网关</td><td>让公有子网中的资源与互联网通信</td></tr>
<tr><td>NAT 网关</td><td>让私有子网中的资源访问互联网（例如下载更新），同时阻止入站连接</td></tr>
<tr><td>虚拟私有网关</td><td>Site-to-Site VPN 连接在 AWS 一侧的端点</td></tr>
<tr><td>VPC 对等连接</td><td>两个 VPC 之间的私有连接</td></tr>
<tr><td>AWS Transit Gateway</td><td>连接多个 VPC 和本地网络的中心枢纽</td></tr>
<tr><td>AWS PrivateLink（VPC 终端节点）</td><td>无需经过互联网即可私密地访问 AWS 服务和合作伙伴服务</td></tr>
</tbody></table></div>

<h3>VPC 中的安全</h3>
<div class="tw"><table><thead><tr><th></th><th>安全组</th><th>网络 ACL</th></tr></thead><tbody>
<tr><td>作用对象</td><td>实例（其网络接口）</td><td>子网</td></tr>
<tr><td>规则</td><td>只有<b>允许</b>规则</td><td>有<b>允许和拒绝</b>规则，按编号顺序评估</td></tr>
<tr><td>状态</td><td><b>有状态</b>：返回流量自动放行</td><td><b>无状态</b>：返回流量必须明确放行</td></tr>
<tr><td>默认行为</td><td>拒绝所有入站，允许所有出站</td><td>默认网络 ACL 允许所有流量</td></tr>
</tbody></table></div>
<p><b>Amazon Inspector</b> 除了扫描软件漏洞，还会检查网络可达性：找出可从互联网经由高风险端口访问的实例。</p>
<div class="box trap"><p>“阻止某个特定 IP 地址访问子网”需要用<b>网络 ACL</b>（安全组无法设置拒绝规则）；“单个实例的防火墙”是<b>安全组</b>。</p></div>

<h3>Amazon Route 53</h3>
<p>高可用的 <b>DNS</b> 服务：注册域名、把域名解析为 IP 地址、检查端点的健康状况，并通过路由策略（简单、加权、基于延迟、故障转移、地理位置等）引导用户。</p>

<h3>连接到 AWS 与内容分发</h3>
<div class="tw"><table><thead><tr><th>服务</th><th>作用</th><th>题目线索</th></tr></thead><tbody>
<tr><td>AWS Site-to-Site VPN</td><td>通过公共互联网在你的网络与 VPC 之间建立加密隧道</td><td>“快速、低成本、加密的连接”</td></tr>
<tr><td>AWS Client VPN</td><td>托管的 VPN，供个人用户连接到 AWS 或本地网络</td><td>“远程员工安全接入”</td></tr>
<tr><td>AWS Direct Connect</td><td>从你的场所到 AWS 的<b>专用私有</b>网络连接（不经过互联网）</td><td>“性能稳定”“高带宽”“私有连接”</td></tr>
<tr><td>Amazon CloudFront</td><td>在边缘站点缓存内容的内容分发网络（CDN）</td><td>“加速全球网站”“在用户附近缓存视频”</td></tr>
<tr><td>AWS Global Accelerator</td><td>使用固定（任播）IP 地址，经由 AWS 全球网络为用户路由流量</td><td>“提升全球应用的可用性和性能”“静态 IP”</td></tr>
<tr><td>Amazon API Gateway</td><td>以任意规模创建、发布和保护 API</td><td>“无服务器 API 的前门”</td></tr>
</tbody></table></div>
<div class="box rem"><p>VPN = 经由<b>互联网</b>、加密、几分钟即可建立；Direct Connect = <b>专线</b>、性能稳定、建立耗时更长。许多公司把 VPN 作为 Direct Connect 的备份。</p></div>
`};

/* ===================== TASK 3.6 ===================== */
CLF.tasks['3.6'] = {d:'d3',
title:{en:'Identify AWS storage services', zh:'确定 AWS 存储服务'},
obj:[
 ['Identify the uses for object storage and the differences between Amazon S3 storage classes','识别对象存储的用途以及 Amazon S3 存储类别之间的区别'],
 ['Identify block storage solutions (Amazon EBS, instance store) and file services (Amazon EFS, Amazon FSx)','识别数据块存储方案（Amazon EBS、实例存储）和文件服务（Amazon EFS、Amazon FSx）'],
 ['Identify cached file systems (AWS Storage Gateway)','识别缓存的文件系统（AWS Storage Gateway）'],
 ['Understand use cases for lifecycle policies and for AWS Backup','了解生命周期策略和 AWS Backup 的使用场景']
],
en:`
<h3>Three kinds of storage</h3>
<div class="tw"><table><thead><tr><th>Kind</th><th>AWS service</th><th>Think of it as</th><th>Use for</th></tr></thead><tbody>
<tr><td>Object</td><td>Amazon S3</td><td>Files (objects) with metadata in buckets, reached over HTTPS</td><td>Backups, data lakes, static websites, media, unlimited storage</td></tr>
<tr><td>Block</td><td>Amazon EBS, instance store</td><td>A hard drive attached to one instance</td><td>Operating systems, databases on EC2</td></tr>
<tr><td>File</td><td>Amazon EFS, Amazon FSx</td><td>A shared network drive many instances use at once</td><td>Shared content, home directories, lift-and-shift apps</td></tr>
</tbody></table></div>

<h3>Amazon S3 storage classes</h3>
<p>S3 is designed for <b>99.999999999% (11 nines) durability</b>. Choose a class by how often you access the data and how fast you need it back.</p>
<div class="tw"><table><thead><tr><th>Class</th><th>Use when</th></tr></thead><tbody>
<tr><td>S3 Standard</td><td>Frequently accessed data</td></tr>
<tr><td>S3 Intelligent-Tiering</td><td>Access patterns are unknown or change; S3 moves objects between tiers automatically</td></tr>
<tr><td>S3 Standard-Infrequent Access (S3 Standard-IA)</td><td>Accessed rarely but needed quickly; lower storage price, retrieval fee</td></tr>
<tr><td>S3 One Zone-Infrequent Access</td><td>Infrequent, re-creatable data that can live in a single AZ (cheaper, less resilient)</td></tr>
<tr><td>S3 Express One Zone</td><td>The fastest access for performance-critical apps, in a single AZ</td></tr>
<tr><td>S3 Glacier Instant Retrieval</td><td>Archive data that still needs millisecond access (about once a quarter)</td></tr>
<tr><td>S3 Glacier Flexible Retrieval</td><td>Archives retrieved in minutes to hours</td></tr>
<tr><td>S3 Glacier Deep Archive</td><td>The lowest cost; long-term retention (7–10 years or more), retrieved within hours</td></tr>
</tbody></table></div>
<div class="box ex"><p><b>Lifecycle policies</b> move objects to cheaper classes or delete them automatically: for example, move logs to S3 Standard-IA after 30 days, to S3 Glacier Deep Archive after 1 year, and delete them after 7 years.</p></div>

<h3>Block storage</h3>
<ul>
<li><b>Amazon EBS:</b> persistent volumes for an EC2 instance in the same AZ. Data survives when the instance stops. Back up with snapshots (stored in S3).</li>
<li><b>Instance store:</b> disks physically attached to the host. Very fast, but <b>temporary</b>: data is lost when the instance stops or terminates. Good for caches and scratch data.</li>
</ul>

<h3>File storage</h3>
<ul>
<li><b>Amazon EFS:</b> serverless, elastic NFS file system for Linux; thousands of instances can share it across AZs.</li>
<li><b>Amazon FSx:</b> fully managed third-party file systems: FSx for Windows File Server, FSx for Lustre (high-performance computing), FSx for NetApp ONTAP and FSx for OpenZFS.</li>
</ul>

<h3>Hybrid, backup and recovery</h3>
<div class="tw"><table><thead><tr><th>Service</th><th>What it does</th></tr></thead><tbody>
<tr><td>AWS Storage Gateway</td><td>Hybrid storage: on-premises applications use cloud storage through a local gateway that caches frequently used data (File, Volume and Tape Gateway)</td></tr>
<tr><td>AWS Backup</td><td>Centrally automates and manages backups across AWS services (EBS, RDS, DynamoDB, EFS, S3 and more) with backup plans and policies</td></tr>
<tr><td>AWS Elastic Disaster Recovery</td><td>Replicates servers to AWS so you can recover quickly after a disaster</td></tr>
</tbody></table></div>
<div class="box trap"><p>"Many EC2 instances need the same files at the same time" = <b>Amazon EFS</b> (not EBS). "Windows file shares" = <b>FSx for Windows File Server</b>. "On-premises apps using cloud storage with a local cache" = <b>Storage Gateway</b>.</p></div>
`,
zh:`
<h3>三种存储类型</h3>
<div class="tw"><table><thead><tr><th>类型</th><th>AWS 服务</th><th>可以理解为</th><th>用途</th></tr></thead><tbody>
<tr><td>对象存储</td><td>Amazon S3</td><td>存放在存储桶中的文件（对象）及其元数据，通过 HTTPS 访问</td><td>备份、数据湖、静态网站、媒体文件、无限量存储</td></tr>
<tr><td>数据块存储</td><td>Amazon EBS、实例存储</td><td>挂载到某台实例上的硬盘</td><td>EC2 上的操作系统和数据库</td></tr>
<tr><td>文件存储</td><td>Amazon EFS、Amazon FSx</td><td>供多台实例同时使用的共享网络驱动器</td><td>共享内容、主目录、直接迁移的应用</td></tr>
</tbody></table></div>

<h3>Amazon S3 存储类别</h3>
<p>S3 的设计持久性为 <b>99.999999999%（11 个 9）</b>。根据数据的访问频率以及需要多快取回来选择存储类别。</p>
<div class="tw"><table><thead><tr><th>存储类别</th><th>适用场景</th></tr></thead><tbody>
<tr><td>S3 Standard</td><td>频繁访问的数据</td></tr>
<tr><td>S3 Intelligent-Tiering</td><td>访问模式未知或会变化；S3 自动在各层之间移动对象</td></tr>
<tr><td>S3 Standard-Infrequent Access（S3 Standard-IA）</td><td>很少访问但需要快速取回；存储价格更低，有取回费用</td></tr>
<tr><td>S3 One Zone-Infrequent Access</td><td>不常访问、可重新生成、可以只放在一个可用区的数据（更便宜，韧性较低）</td></tr>
<tr><td>S3 Express One Zone</td><td>为性能关键型应用提供最快的访问，位于单个可用区</td></tr>
<tr><td>S3 Glacier Instant Retrieval</td><td>仍需毫秒级访问的归档数据（约每季度访问一次）</td></tr>
<tr><td>S3 Glacier Flexible Retrieval</td><td>在几分钟到几小时内取回的归档数据</td></tr>
<tr><td>S3 Glacier Deep Archive</td><td>成本最低；用于长期保留（7–10 年或更久），在数小时内取回</td></tr>
</tbody></table></div>
<div class="box ex"><p><b>生命周期策略</b>会自动把对象转移到更便宜的存储类别或删除它们：例如，日志 30 天后转到 S3 Standard-IA，1 年后转到 S3 Glacier Deep Archive，7 年后删除。</p></div>

<h3>数据块存储</h3>
<ul>
<li><b>Amazon EBS：</b>供同一可用区内 EC2 实例使用的持久卷。实例停止后数据仍然保留。可用快照（存储在 S3 中）进行备份。</li>
<li><b>实例存储：</b>物理连接在主机上的磁盘。速度极快，但是<b>临时性</b>的：实例停止或终止时数据会丢失。适合缓存和临时数据。</li>
</ul>

<h3>文件存储</h3>
<ul>
<li><b>Amazon EFS：</b>面向 Linux 的无服务器、弹性 NFS 文件系统；数千台实例可以跨可用区共享。</li>
<li><b>Amazon FSx：</b>完全托管的第三方文件系统：FSx for Windows File Server、FSx for Lustre（高性能计算）、FSx for NetApp ONTAP 和 FSx for OpenZFS。</li>
</ul>

<h3>混合存储、备份与恢复</h3>
<div class="tw"><table><thead><tr><th>服务</th><th>作用</th></tr></thead><tbody>
<tr><td>AWS Storage Gateway</td><td>混合存储：本地应用通过本地网关使用云存储，网关会缓存常用数据（文件网关、卷网关和磁带网关）</td></tr>
<tr><td>AWS Backup</td><td>通过备份计划和策略，集中自动管理各 AWS 服务（EBS、RDS、DynamoDB、EFS、S3 等）的备份</td></tr>
<tr><td>AWS Elastic Disaster Recovery</td><td>把服务器复制到 AWS，以便在灾难发生后快速恢复</td></tr>
</tbody></table></div>
<div class="box trap"><p>“多台 EC2 实例需要同时使用相同的文件”= <b>Amazon EFS</b>（不是 EBS）；“Windows 文件共享”= <b>FSx for Windows File Server</b>；“本地应用使用带本地缓存的云存储”= <b>Storage Gateway</b>。</p></div>
`};

/* ===================== TASK 3.7 ===================== */
CLF.tasks['3.7'] = {d:'d3',
title:{en:'Identify AWS AI/ML services and analytics services', zh:'识别 AWS 人工智能和机器学习 (AI/ML) 服务及分析服务'},
obj:[
 ['Understand AWS AI/ML services and the tasks they accomplish (for example, Amazon SageMaker AI, Amazon Lex)','了解 AWS AI/ML 服务及其完成的任务（例如 Amazon SageMaker AI、Amazon Lex）'],
 ['Identify the services for data analytics (for example, Amazon Athena, Amazon Kinesis, AWS Glue, Amazon Quick Sight)','识别用于数据分析的服务（例如 Amazon Athena、Amazon Kinesis、AWS Glue、Amazon Quick Sight）']
],
en:`
<h3>AI and machine learning services</h3>
<div class="tw"><table><thead><tr><th>Service</th><th>What it does</th><th>Question cue</th></tr></thead><tbody>
<tr><td>Amazon SageMaker AI</td><td>Build, train and deploy your own machine learning models</td><td>"Data scientists build custom models"</td></tr>
<tr><td>Amazon Lex</td><td>Conversational chatbots and voice bots</td><td>"Chatbot", "voice assistant for a call centre"</td></tr>
<tr><td>Amazon Polly</td><td>Text to lifelike speech</td><td>"Read text aloud"</td></tr>
<tr><td>Amazon Transcribe</td><td>Speech to text</td><td>"Transcribe recorded calls", "subtitles"</td></tr>
<tr><td>Amazon Translate</td><td>Language translation</td><td>"Translate content into other languages"</td></tr>
<tr><td>Amazon Comprehend</td><td>Natural language processing: sentiment, entities, key phrases</td><td>"Sentiment of customer reviews"</td></tr>
<tr><td>Amazon Rekognition</td><td>Image and video analysis: objects, faces, unsafe content</td><td>"Identify objects or faces in images"</td></tr>
<tr><td>Amazon Textract</td><td>Extracts text, forms and tables from scanned documents</td><td>"Read data from scanned forms"</td></tr>
<tr><td>Amazon Q</td><td>Generative AI-powered assistant, such as Amazon Q Developer for building on AWS (code suggestions, AWS answers, cost questions in the console). Amazon Q Business is closed to new customers; its successor is Amazon Quick</td><td>"Generative AI assistant for developers working on AWS"</td></tr>
</tbody></table></div>
<div class="box trap"><p><b>Transcribe</b> turns speech into text; <b>Polly</b> turns text into speech. <b>Comprehend</b> understands text; <b>Textract</b> pulls text out of documents.</p></div>

<h3>Analytics services</h3>
<div class="tw"><table><thead><tr><th>Service</th><th>What it does</th><th>Question cue</th></tr></thead><tbody>
<tr><td>Amazon Athena</td><td>Serverless, interactive SQL queries directly on data in Amazon S3; pay per query</td><td>"Query S3 data with SQL, no servers"</td></tr>
<tr><td>Amazon Kinesis</td><td>Collects and processes real-time streaming data</td><td>"Real-time clickstreams, IoT telemetry, live data"</td></tr>
<tr><td>AWS Glue</td><td>Serverless extract, transform and load (ETL) and the Glue Data Catalog</td><td>"Prepare and transform data", "data catalogue"</td></tr>
<tr><td>Amazon Quick Sight</td><td>Business intelligence dashboards and visualizations</td><td>"Interactive dashboards for business users"</td></tr>
<tr><td>Amazon Redshift</td><td>Data warehouse for fast SQL analytics at petabyte scale</td><td>"Data warehouse", "complex analytical queries"</td></tr>
<tr><td>Amazon EMR</td><td>Big data processing with frameworks such as Apache Spark and Hadoop</td><td>"Run Spark or Hadoop clusters"</td></tr>
<tr><td>Amazon OpenSearch Service</td><td>Search, log analytics and observability</td><td>"Full-text search", "analyse application logs"</td></tr>
</tbody></table></div>
<div class="box ex"><p>A typical pipeline: <b>Kinesis</b> ingests streaming data into <b>S3</b>, <b>Glue</b> cleans and catalogues it, <b>Athena</b> or <b>Redshift</b> queries it, and <b>Quick Sight</b> shows the dashboards.</p></div>
`,
zh:`
<h3>人工智能与机器学习服务</h3>
<div class="tw"><table><thead><tr><th>服务</th><th>作用</th><th>题目线索</th></tr></thead><tbody>
<tr><td>Amazon SageMaker AI</td><td>构建、训练和部署你自己的机器学习模型</td><td>“数据科学家构建定制模型”</td></tr>
<tr><td>Amazon Lex</td><td>对话式聊天机器人和语音机器人</td><td>“聊天机器人”“呼叫中心的语音助手”</td></tr>
<tr><td>Amazon Polly</td><td>把文本转换为逼真的语音</td><td>“朗读文本”</td></tr>
<tr><td>Amazon Transcribe</td><td>把语音转换为文字</td><td>“转录通话录音”“字幕”</td></tr>
<tr><td>Amazon Translate</td><td>语言翻译</td><td>“把内容翻译成其他语言”</td></tr>
<tr><td>Amazon Comprehend</td><td>自然语言处理：情感、实体、关键短语</td><td>“分析客户评论的情感”</td></tr>
<tr><td>Amazon Rekognition</td><td>图像和视频分析：物体、人脸、不安全内容</td><td>“识别图像中的物体或人脸”</td></tr>
<tr><td>Amazon Textract</td><td>从扫描文档中提取文字、表单和表格</td><td>“从扫描表单中读取数据”</td></tr>
<tr><td>Amazon Q</td><td>由生成式 AI 驱动的助手，例如用于在 AWS 上构建的 Amazon Q Developer（代码建议、AWS 问答、在控制台中询问成本问题）。Amazon Q Business 已不再向新客户开放，其后继产品是 Amazon Quick</td><td>“面向在 AWS 上工作的开发人员的生成式 AI 助手”</td></tr>
</tbody></table></div>
<div class="box trap"><p><b>Transcribe</b> 把语音转成文字；<b>Polly</b> 把文字转成语音。<b>Comprehend</b> 理解文本；<b>Textract</b> 从文档中提取文字。</p></div>

<h3>分析服务</h3>
<div class="tw"><table><thead><tr><th>服务</th><th>作用</th><th>题目线索</th></tr></thead><tbody>
<tr><td>Amazon Athena</td><td>无服务器、交互式地直接对 Amazon S3 中的数据运行 SQL 查询；按查询付费</td><td>“用 SQL 查询 S3 数据，无需服务器”</td></tr>
<tr><td>Amazon Kinesis</td><td>收集和处理实时流数据</td><td>“实时点击流、物联网遥测、实时数据”</td></tr>
<tr><td>AWS Glue</td><td>无服务器的提取、转换和加载（ETL）以及 Glue 数据目录</td><td>“准备和转换数据”“数据目录”</td></tr>
<tr><td>Amazon Quick Sight</td><td>商业智能仪表板和可视化</td><td>“面向业务用户的交互式仪表板”</td></tr>
<tr><td>Amazon Redshift</td><td>可在 PB 级规模下快速进行 SQL 分析的数据仓库</td><td>“数据仓库”“复杂的分析查询”</td></tr>
<tr><td>Amazon EMR</td><td>使用 Apache Spark、Hadoop 等框架进行大数据处理</td><td>“运行 Spark 或 Hadoop 集群”</td></tr>
<tr><td>Amazon OpenSearch Service</td><td>搜索、日志分析和可观测性</td><td>“全文搜索”“分析应用日志”</td></tr>
</tbody></table></div>
<div class="box ex"><p>典型数据流程：<b>Kinesis</b> 把流数据导入 <b>S3</b>，<b>Glue</b> 清洗并编目，<b>Athena</b> 或 <b>Redshift</b> 进行查询，<b>Quick Sight</b> 展示仪表板。</p></div>
`};

/* ===================== TASK 3.8 ===================== */
CLF.tasks['3.8'] = {d:'d3',
title:{en:'Identify services from other in-scope AWS service categories', zh:'识别其他考试范围内的 AWS 服务类别中的服务'},
obj:[
 ['Choose the right service to deliver messages and send alerts and notifications (Amazon EventBridge, Amazon SNS, Amazon SQS)','选择合适的服务来传递消息、发送告警和通知（Amazon EventBridge、Amazon SNS、Amazon SQS）'],
 ['Choose the right service for business application needs (Amazon Connect, Amazon SES) and business support assistance (AWS Support)','为业务应用需求（Amazon Connect、Amazon SES）和业务支持协助（AWS Support）选择合适的服务'],
 ['Identify tools to develop, deploy and troubleshoot applications (AWS CodeBuild, AWS CodePipeline, AWS X-Ray)','识别用于开发、部署和排查应用问题的工具（AWS CodeBuild、AWS CodePipeline、AWS X-Ray）'],
 ['Identify services that present virtual machine output on end-user machines (Amazon AppStream 2.0, Amazon WorkSpaces, Amazon WorkSpaces Secure Browser)','识别可在终端用户设备上呈现虚拟机输出的服务（Amazon AppStream 2.0、Amazon WorkSpaces、Amazon WorkSpaces Secure Browser）'],
 ['Identify services to build frontend and mobile apps (AWS Amplify) and to manage IoT devices (AWS IoT Core)','识别用于构建前端和移动应用（AWS Amplify）以及管理物联网设备（AWS IoT Core）的服务']
],
en:`
<h3>Application integration</h3>
<div class="tw"><table><thead><tr><th>Service</th><th>Model</th><th>Question cue</th></tr></thead><tbody>
<tr><td>Amazon SQS</td><td><b>Queue</b>: messages wait until a consumer processes them, decoupling components</td><td>"Decouple", "buffer orders so none are lost during spikes"</td></tr>
<tr><td>Amazon SNS</td><td><b>Publish/subscribe</b>: one message pushed to many subscribers (email, SMS, mobile push, Lambda, SQS)</td><td>"Send notifications", "alert operators by email or text"</td></tr>
<tr><td>Amazon EventBridge</td><td><b>Event bus</b>: routes events from AWS services, SaaS apps and your apps to targets using rules; also runs schedules</td><td>"React to events", "event-driven architecture", "run on a schedule"</td></tr>
<tr><td>AWS Step Functions</td><td><b>Workflow</b>: orchestrates steps (often Lambda functions) with retries and branching</td><td>"Coordinate a multi-step workflow"</td></tr>
</tbody></table></div>
<div class="box trap"><p>SQS <b>pulls</b> (consumers poll the queue, one consumer per message); SNS <b>pushes</b> (every subscriber gets a copy).</p></div>

<h3>Business applications and customer enablement</h3>
<ul>
<li><b>Amazon Connect:</b> cloud contact centre (phone and chat) set up in minutes.</li>
<li><b>Amazon Simple Email Service (Amazon SES):</b> sends marketing, notification and transactional email at scale.</li>
<li><b>AWS Support:</b> technical help, guidance and account assistance through the AWS Support plans (see task 4.3).</li>
</ul>

<h3>Developer tools</h3>
<div class="tw"><table><thead><tr><th>Service</th><th>What it does</th></tr></thead><tbody>
<tr><td>AWS CodeBuild</td><td>Compiles source code, runs tests and produces packages ready to deploy</td></tr>
<tr><td>AWS CodePipeline</td><td>Continuous delivery: automates build, test and deploy stages every time code changes</td></tr>
<tr><td>AWS X-Ray</td><td>Traces requests through a distributed application to find bottlenecks and errors</td></tr>
<tr><td>AWS CLI</td><td>Manage AWS services from the command line</td></tr>
</tbody></table></div>

<h3>End-user computing</h3>
<div class="tw"><table><thead><tr><th>Service</th><th>Delivers</th><th>Question cue</th></tr></thead><tbody>
<tr><td>Amazon WorkSpaces</td><td>Full virtual desktops (Windows or Linux)</td><td>"Virtual desktops for remote employees"</td></tr>
<tr><td>Amazon AppStream 2.0 (now named Amazon WorkSpaces Applications)</td><td>Individual desktop <b>applications</b> streamed to a browser</td><td>"Stream a design application to any device"</td></tr>
<tr><td>Amazon WorkSpaces Secure Browser</td><td>Secure browser access to internal websites and SaaS apps, without data on the device (closing to new customers on 29 October 2026)</td><td>"Contractors access internal web apps securely"</td></tr>
</tbody></table></div>

<h3>Frontend, mobile and IoT</h3>
<ul>
<li><b>AWS Amplify:</b> build, deploy and host full-stack web and mobile apps quickly.</li>
<li><b>AWS IoT Core:</b> securely connects billions of IoT devices and routes their messages to AWS services.</li>
</ul>
`,
zh:`
<h3>应用程序集成服务</h3>
<div class="tw"><table><thead><tr><th>服务</th><th>模式</th><th>题目线索</th></tr></thead><tbody>
<tr><td>Amazon SQS</td><td><b>队列</b>：消息在队列中等待消费者处理，实现组件解耦</td><td>“解耦”“在流量高峰期缓冲订单，避免丢失”</td></tr>
<tr><td>Amazon SNS</td><td><b>发布/订阅</b>：一条消息推送给多个订阅方（邮件、短信、移动推送、Lambda、SQS）</td><td>“发送通知”“通过邮件或短信提醒运维人员”</td></tr>
<tr><td>Amazon EventBridge</td><td><b>事件总线</b>：按规则把来自 AWS 服务、SaaS 应用和你自己应用的事件路由到目标；也能按计划运行</td><td>“响应事件”“事件驱动架构”“按计划运行”</td></tr>
<tr><td>AWS Step Functions</td><td><b>工作流</b>：编排各个步骤（通常是 Lambda 函数），支持重试和分支</td><td>“协调多步骤工作流”</td></tr>
</tbody></table></div>
<div class="box trap"><p>SQS 是<b>拉取</b>模式（消费者轮询队列，每条消息由一个消费者处理）；SNS 是<b>推送</b>模式（每个订阅方都会收到一份）。</p></div>

<h3>业务应用程序与客户支持服务</h3>
<ul>
<li><b>Amazon Connect：</b>几分钟即可搭建的云联络中心（电话和聊天）。</li>
<li><b>Amazon Simple Email Service（Amazon SES）：</b>大规模发送营销、通知和事务性邮件。</li>
<li><b>AWS Support：</b>通过 AWS Support 计划提供技术帮助、指导和账户协助（见任务 4.3）。</li>
</ul>

<h3>开发工具</h3>
<div class="tw"><table><thead><tr><th>服务</th><th>作用</th></tr></thead><tbody>
<tr><td>AWS CodeBuild</td><td>编译源代码、运行测试并生成可部署的软件包</td></tr>
<tr><td>AWS CodePipeline</td><td>持续交付：每次代码变更时自动执行构建、测试和部署阶段</td></tr>
<tr><td>AWS X-Ray</td><td>跟踪请求在分布式应用中的路径，找出瓶颈和错误</td></tr>
<tr><td>AWS CLI</td><td>通过命令行管理 AWS 服务</td></tr>
</tbody></table></div>

<h3>终端用户计算服务</h3>
<div class="tw"><table><thead><tr><th>服务</th><th>提供</th><th>题目线索</th></tr></thead><tbody>
<tr><td>Amazon WorkSpaces</td><td>完整的虚拟桌面（Windows 或 Linux）</td><td>“为远程员工提供虚拟桌面”</td></tr>
<tr><td>Amazon AppStream 2.0（现名 Amazon WorkSpaces Applications）</td><td>把单个桌面<b>应用程序</b>流式传输到浏览器</td><td>“把设计软件流式传输到任何设备”</td></tr>
<tr><td>Amazon WorkSpaces Secure Browser</td><td>安全地通过浏览器访问内部网站和 SaaS 应用，设备上不留数据（2026 年 10 月 29 日起不再向新客户开放）</td><td>“承包商安全访问内部 Web 应用”</td></tr>
</tbody></table></div>

<h3>前端 Web、移动与物联网</h3>
<ul>
<li><b>AWS Amplify：</b>快速构建、部署和托管全栈 Web 和移动应用。</li>
<li><b>AWS IoT Core：</b>安全地连接数十亿台物联网设备，并把它们的消息路由到 AWS 服务。</li>
</ul>
`};
