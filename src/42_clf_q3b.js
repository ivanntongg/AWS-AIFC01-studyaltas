/* CLF-C02 questions, domain 3 (part 2: tasks 3.5–3.8). Original questions written against the exam guide. Append-only. */
(function(){
function Q(k, t, a, en, zh, wEn, wZh){
  var q = {k: k, d: 'd' + k.charAt(0), t: t, a: a, en: {q: en[0], o: en[1], x: en[2]}, zh: {q: zh[0], o: zh[1], x: zh[2]}};
  var pad = a.map(function(){ return ''; }); q.w = {en: pad.concat(wEn), zh: pad.concat(wZh)};
  CLF.qs.push(q);
}

/* ================= 3.5 Networking ================= */
Q('3.5','single',[0],
['What is an Amazon Virtual Private Cloud (Amazon VPC)?',
 ['A logically isolated section of the AWS Cloud where you launch resources in a virtual network you define','A physical data centre reserved for one customer','A content delivery network','A DNS service'],
 'A VPC is your own virtual network in a Region, with your IP ranges, subnets, route tables and gateways.'],
['什么是 Amazon Virtual Private Cloud（Amazon VPC）？',
 ['AWS 云中逻辑隔离的部分，你可以在自己定义的虚拟网络中启动资源','为某一客户保留的物理数据中心','内容分发网络','DNS 服务'],
 'VPC 是你在某个区域中拥有的虚拟网络，包含你定义的 IP 范围、子网、路由表和网关。'],
['A VPC is logical isolation, not a dedicated physical facility.','A CDN is CloudFront.','DNS is Route 53.'],
['VPC 是逻辑隔离，而不是专用的物理设施。','CDN 是 CloudFront。','DNS 是 Route 53。']);

Q('3.5','single',[0],
['A web server in a VPC must be reachable from the internet. Which component must the VPC have?',
 ['An internet gateway attached to the VPC, with a route from the public subnet','A NAT gateway only','A virtual private gateway only','AWS Direct Connect'],
 'An internet gateway enables communication between resources in public subnets and the internet.'],
['VPC 中的一台 Web 服务器必须能从互联网访问。该 VPC 必须具备哪个组件？',
 ['附加到 VPC 的互联网网关，并且公有子网有通往它的路由','仅 NAT 网关','仅虚拟私有网关','AWS Direct Connect'],
 '互联网网关让公有子网中的资源能够与互联网通信。'],
['A NAT gateway allows outbound-only access for private subnets.','A virtual private gateway is for VPN connections.','Direct Connect is a private link to your premises.'],
['NAT 网关只为私有子网提供出站访问。','虚拟私有网关用于 VPN 连接。','Direct Connect 是通往你场所的私有链路。']);

Q('3.5','single',[0],
['Instances in a private subnet need to download software updates from the internet, but must not accept inbound connections from the internet. What should be used?',
 ['A NAT gateway','An internet gateway route in the private subnet','A public IP address on each instance','Amazon CloudFront'],
 'A NAT gateway lets instances in private subnets start outbound connections while blocking unsolicited inbound traffic.'],
['私有子网中的实例需要从互联网下载软件更新，但不能接受来自互联网的入站连接。应使用什么？',
 ['NAT 网关','在私有子网中添加指向互联网网关的路由','为每个实例分配公有 IP 地址','Amazon CloudFront'],
 'NAT 网关允许私有子网中的实例发起出站连接，同时阻止未经请求的入站流量。'],
['That would make the subnet public.','Public IPs expose instances to inbound traffic.','CloudFront delivers content to users.'],
['这会让子网变成公有子网。','公有 IP 会让实例暴露于入站流量。','CloudFront 向用户分发内容。']);

Q('3.5','single',[0],
['Which statement about security groups is correct?',
 ['They are stateful firewalls at the instance level that support allow rules only','They are stateless and apply to subnets','They support explicit deny rules','They must be configured by AWS'],
 'Security groups act at the instance (network interface) level; return traffic is automatically allowed, and they contain only allow rules.'],
['关于安全组，哪种说法正确？',
 ['它们是实例级别的有状态防火墙，只支持允许规则','它们是无状态的，作用于子网','它们支持明确的拒绝规则','它们必须由 AWS 配置'],
 '安全组作用于实例（网络接口）级别；返回流量会自动放行，并且只包含允许规则。'],
['That describes network ACLs.','Only network ACLs support deny rules.','Customers configure their security groups.'],
['这描述的是网络 ACL。','只有网络 ACL 支持拒绝规则。','安全组由客户配置。']);

Q('3.5','single',[0],
['A company needs to block traffic from one specific malicious IP address to an entire subnet. Which feature should it use?',
 ['A network ACL with a deny rule','A security group deny rule','An IAM policy','AWS Artifact'],
 'Network ACLs operate at the subnet level and support both allow and deny rules, evaluated in number order.'],
['某公司需要阻止来自某个特定恶意 IP 地址、发往整个子网的流量。应使用哪项功能？',
 ['带有拒绝规则的网络 ACL','安全组拒绝规则','IAM 策略','AWS Artifact'],
 '网络 ACL 在子网级别工作，同时支持允许和拒绝规则，并按编号顺序评估。'],
['Security groups cannot contain deny rules.','IAM policies control API permissions, not network traffic.','Artifact provides compliance reports.'],
['安全组不能包含拒绝规则。','IAM 策略控制的是 API 权限，而不是网络流量。','Artifact 提供合规报告。']);

Q('3.5','single',[0],
['Which AWS service is a highly available DNS web service that can also register domain names and route users based on health checks?',
 ['Amazon Route 53','Amazon CloudFront','AWS Direct Connect','Amazon VPC'],
 'Route 53 provides domain registration, DNS routing and health checks, with routing policies such as latency-based and failover.'],
['哪项 AWS 服务是高可用的 DNS Web 服务，还可以注册域名，并根据健康检查为用户路由？',
 ['Amazon Route 53','Amazon CloudFront','AWS Direct Connect','Amazon VPC'],
 'Route 53 提供域名注册、DNS 路由和健康检查，支持基于延迟、故障转移等路由策略。'],
['CloudFront is a CDN.','Direct Connect is a private network connection.','VPC is a virtual network.'],
['CloudFront 是 CDN。','Direct Connect 是私有网络连接。','VPC 是虚拟网络。']);

Q('3.5','single',[0],
['A company needs a dedicated, private network connection from its data centre to AWS with consistent performance that does not travel over the public internet. Which service should it use?',
 ['AWS Direct Connect','AWS Site-to-Site VPN','Amazon CloudFront','AWS Client VPN'],
 'Direct Connect provides a dedicated private connection, offering consistent network performance and potentially lower data transfer costs.'],
['某公司需要从其数据中心到 AWS 的专用私有网络连接，性能稳定且不经过公共互联网。应使用哪项服务？',
 ['AWS Direct Connect','AWS Site-to-Site VPN','Amazon CloudFront','AWS Client VPN'],
 'Direct Connect 提供专用的私有连接，网络性能稳定，并可能降低数据传输成本。'],
['Site-to-Site VPN travels over the public internet.','CloudFront delivers content to users.','Client VPN connects individual users over the internet.'],
['Site-to-Site VPN 经由公共互联网传输。','CloudFront 向用户分发内容。','Client VPN 通过互联网连接个人用户。']);

Q('3.5','single',[0],
['A company needs an encrypted connection between its office network and its VPC that can be set up quickly at low cost over the internet. Which option fits?',
 ['AWS Site-to-Site VPN','AWS Direct Connect','Amazon Route 53','VPC peering'],
 'Site-to-Site VPN creates encrypted IPsec tunnels over the internet and can be set up in minutes.'],
['某公司需要在办公室网络与 VPC 之间建立加密连接，要求能通过互联网快速、低成本地建立。哪个选项合适？',
 ['AWS Site-to-Site VPN','AWS Direct Connect','Amazon Route 53','VPC 对等连接'],
 'Site-to-Site VPN 通过互联网建立加密的 IPsec 隧道，几分钟即可完成设置。'],
['Direct Connect takes longer to provision and is a dedicated line.','Route 53 is DNS.','VPC peering connects two VPCs, not an office network.'],
['Direct Connect 的开通时间更长，而且是专线。','Route 53 是 DNS 服务。','VPC 对等连接用于连接两个 VPC，而不是办公室网络。']);

Q('3.5','single',[0],
['A media company wants to deliver videos and images to users worldwide with low latency by caching them close to users. Which service should it use?',
 ['Amazon CloudFront','Amazon Route 53','AWS Direct Connect','Elastic Load Balancing'],
 'CloudFront is a content delivery network that caches content at edge locations around the world.'],
['某媒体公司希望通过在靠近用户的地方缓存视频和图片，以低延迟向全球用户分发这些内容。应使用哪项服务？',
 ['Amazon CloudFront','Amazon Route 53','AWS Direct Connect','Elastic Load Balancing'],
 'CloudFront 是在全球边缘站点缓存内容的内容分发网络。'],
['Route 53 resolves DNS but does not cache content.','Direct Connect links your data centre to AWS.','Load balancers distribute traffic within a Region.'],
['Route 53 负责 DNS 解析，但不缓存内容。','Direct Connect 把你的数据中心连接到 AWS。','负载均衡器在一个区域内分配流量。']);

Q('3.5','multi',[0,1],
['Which TWO are components of an Amazon VPC? (Select TWO.)',
 ['Subnets','Route tables','Edge locations','AWS Regions','IAM users'],
 'A VPC includes subnets, route tables, gateways, network ACLs and security groups. Edge locations and Regions are global infrastructure; IAM users are identities.'],
['以下哪两项是 Amazon VPC 的组成部分？（选择两项。）',
 ['子网','路由表','边缘站点','AWS 区域','IAM 用户'],
 'VPC 包括子网、路由表、网关、网络 ACL 和安全组。边缘站点和区域属于全球基础设施；IAM 用户是身份。'],
['Edge locations are part of the global infrastructure.','A VPC lives inside a Region.','IAM users are identities, not network components.'],
['边缘站点属于全球基础设施。','VPC 位于区域之内。','IAM 用户是身份，而不是网络组件。']);

Q('3.5','single',[0],
['A company has 40 VPCs and several on-premises networks that all need to connect to each other. Which service simplifies this with a central hub?',
 ['AWS Transit Gateway','VPC peering between every pair','Amazon CloudFront','Internet gateway'],
 'Transit Gateway acts as a hub that connects many VPCs and on-premises networks, avoiding a complex mesh of peering connections.'],
['某公司有 40 个 VPC 和多个本地网络，它们都需要相互连接。哪项服务通过中心枢纽简化了这一点？',
 ['AWS Transit Gateway','在每两个 VPC 之间建立对等连接','Amazon CloudFront','互联网网关'],
 'Transit Gateway 充当中心枢纽，连接多个 VPC 和本地网络，避免复杂的网状对等连接。'],
['Peering every pair creates a hard-to-manage mesh.','CloudFront delivers content.','An internet gateway connects a VPC to the internet.'],
['在每两个 VPC 之间建立对等连接会形成难以管理的网状结构。','CloudFront 分发内容。','互联网网关把 VPC 连接到互联网。']);

Q('3.5','single',[0],
['A subnet is called a public subnet when it has which characteristic?',
 ['Its route table has a route to an internet gateway','It contains only databases','It is located in an edge location','It has no security groups'],
 'Public subnets route to an internet gateway; private subnets do not.'],
['子网具有什么特征时被称为公有子网？',
 ['它的路由表中有一条指向互联网网关的路由','它只包含数据库','它位于边缘站点','它没有安全组'],
 '公有子网有路由指向互联网网关；私有子网没有。'],
['Databases usually belong in private subnets.','Subnets are in Availability Zones, not edge locations.','Instances in every subnet use security groups.'],
['数据库通常放在私有子网中。','子网位于可用区中，而不是边缘站点。','每个子网中的实例都使用安全组。']);

Q('3.5','single',[0],
['Which service lets applications in a VPC access supported AWS services and partner services privately, without traffic going over the public internet?',
 ['AWS PrivateLink (interface VPC endpoints)','Internet gateway','Amazon CloudFront','AWS Global Accelerator'],
 'PrivateLink provides private connectivity between VPCs, AWS services and partner services using endpoints inside your VPC.'],
['哪项服务让 VPC 中的应用无需经过公共互联网，即可私密地访问受支持的 AWS 服务和合作伙伴服务？',
 ['AWS PrivateLink（接口 VPC 终端节点）','互联网网关','Amazon CloudFront','AWS Global Accelerator'],
 'PrivateLink 使用你 VPC 内的终端节点，在 VPC、AWS 服务和合作伙伴服务之间提供私有连接。'],
['An internet gateway sends traffic to the internet.','CloudFront serves content to users.','Global Accelerator routes user traffic to applications.'],
['互联网网关把流量发往互联网。','CloudFront 向用户提供内容。','Global Accelerator 把用户流量路由到应用。']);

/* ================= 3.6 Storage ================= */
Q('3.6','single',[0],
['A company needs to store millions of images and videos with virtually unlimited capacity and 11 nines of durability, accessible over HTTPS. Which service should it use?',
 ['Amazon S3','Amazon EBS','Instance store','Amazon EFS'],
 'Amazon S3 is object storage designed for 99.999999999% durability and virtually unlimited scale.'],
['某公司需要存储数百万张图片和视频，要求容量几乎无限、持久性达到 11 个 9，并能通过 HTTPS 访问。应使用哪项服务？',
 ['Amazon S3','Amazon EBS','实例存储','Amazon EFS'],
 'Amazon S3 是对象存储，设计持久性为 99.999999999%，规模几乎无限。'],
['EBS is block storage attached to instances.','Instance store is temporary block storage.','EFS is a shared file system for instances.'],
['EBS 是挂载到实例上的数据块存储。','实例存储是临时的数据块存储。','EFS 是供实例共享的文件系统。']);

Q('3.6','single',[0],
['A company needs persistent block storage for the boot volume and database of a single EC2 instance. Which service should it use?',
 ['Amazon EBS','Amazon S3','Amazon S3 Glacier','AWS Storage Gateway'],
 'Amazon EBS provides persistent block-level volumes for EC2 instances in the same Availability Zone.'],
['某公司需要为单个 EC2 实例的启动卷和数据库提供持久的数据块存储。应使用哪项服务？',
 ['Amazon EBS','Amazon S3','Amazon S3 Glacier','AWS Storage Gateway'],
 'Amazon EBS 为同一可用区中的 EC2 实例提供持久的块级卷。'],
['S3 is object storage, not a boot volume.','Glacier is archive storage.','Storage Gateway connects on-premises applications to cloud storage.'],
['S3 是对象存储，不能作为启动卷。','Glacier 是归档存储。','Storage Gateway 把本地应用连接到云存储。']);

Q('3.6','single',[0],
['What happens to data on an EC2 instance store volume when the instance is stopped or terminated?',
 ['The data is lost','The data is automatically copied to Amazon S3','The data is moved to Amazon EBS','The data is kept for 30 days'],
 'Instance store provides temporary block storage physically attached to the host. It is ideal for caches and scratch data, not for data you must keep.'],
['当 EC2 实例停止或终止时，实例存储卷上的数据会怎样？',
 ['数据会丢失','数据会自动复制到 Amazon S3','数据会迁移到 Amazon EBS','数据会保留 30 天'],
 '实例存储提供物理连接在主机上的临时数据块存储，适合缓存和临时数据，不适合必须保留的数据。'],
['There is no automatic copy to S3.','There is no automatic move to EBS.','Instance store data is not retained.'],
['不会自动复制到 S3。','不会自动迁移到 EBS。','实例存储的数据不会保留。']);

Q('3.6','single',[0],
['Hundreds of Linux EC2 instances in multiple Availability Zones need to read and write the same files at the same time. Which service should be used?',
 ['Amazon EFS','Amazon EBS','Instance store','Amazon S3 Glacier Deep Archive'],
 'Amazon EFS is a serverless, elastic NFS file system that many instances can access concurrently across AZs.'],
['分布在多个可用区中的数百台 Linux EC2 实例需要同时读写相同的文件。应使用哪项服务？',
 ['Amazon EFS','Amazon EBS','实例存储','Amazon S3 Glacier Deep Archive'],
 'Amazon EFS 是无服务器、弹性的 NFS 文件系统，可供多台实例跨可用区并发访问。'],
['An EBS volume is generally attached to one instance in one AZ.','Instance store is local to one host.','Deep Archive is for long-term archives.'],
['EBS 卷通常挂载到一个可用区中的一台实例上。','实例存储仅限于一台主机。','Deep Archive 用于长期归档。']);

Q('3.6','single',[0],
['A company wants a fully managed shared file system for Windows applications that uses the SMB protocol and integrates with Active Directory. Which service should it use?',
 ['Amazon FSx for Windows File Server','Amazon EFS','Amazon S3','Amazon EBS'],
 'FSx for Windows File Server provides fully managed, native Windows file shares.'],
['某公司希望为 Windows 应用提供一个使用 SMB 协议并与 Active Directory 集成的完全托管共享文件系统。应使用哪项服务？',
 ['Amazon FSx for Windows File Server','Amazon EFS','Amazon S3','Amazon EBS'],
 'FSx for Windows File Server 提供完全托管的原生 Windows 文件共享。'],
['EFS uses NFS and is designed for Linux.','S3 is object storage.','EBS is block storage for one instance.'],
['EFS 使用 NFS，专为 Linux 设计。','S3 是对象存储。','EBS 是供单个实例使用的数据块存储。']);

Q('3.6','single',[0],
['A company has data with unknown or changing access patterns and wants S3 to optimize storage costs automatically without retrieval fees or performance impact. Which storage class should it use?',
 ['S3 Intelligent-Tiering','S3 Glacier Deep Archive','S3 One Zone-IA','S3 Standard only'],
 'S3 Intelligent-Tiering moves objects between access tiers automatically based on usage, for a small monitoring fee and no retrieval fees.'],
['某公司的数据访问模式未知或会变化，希望 S3 自动优化存储成本，且没有取回费用、不影响性能。应使用哪种存储类别？',
 ['S3 Intelligent-Tiering','S3 Glacier Deep Archive','S3 One Zone-IA','仅使用 S3 Standard'],
 'S3 Intelligent-Tiering 根据使用情况自动在各访问层之间移动对象，只收取少量监控费用，没有取回费用。'],
['Deep Archive has long retrieval times.','One Zone-IA has retrieval fees and stores data in one AZ.','S3 Standard does not optimize cost automatically.'],
['Deep Archive 的取回时间很长。','One Zone-IA 有取回费用，且只把数据存储在一个可用区。','S3 Standard 不会自动优化成本。']);

Q('3.6','single',[0],
['A company must keep financial records for 10 years. The records are almost never accessed, and retrieval within 12 hours is acceptable. Which S3 storage class is the MOST cost-effective?',
 ['S3 Glacier Deep Archive','S3 Standard','S3 Standard-IA','S3 Express One Zone'],
 'Glacier Deep Archive is the lowest-cost storage class, designed for long-term retention with retrieval within hours.'],
['某公司必须保留财务记录 10 年。这些记录几乎从不访问，可以接受 12 小时内取回。哪种 S3 存储类别最具成本效益？',
 ['S3 Glacier Deep Archive','S3 Standard','S3 Standard-IA','S3 Express One Zone'],
 'Glacier Deep Archive 是成本最低的存储类别，专为长期保留设计，可在数小时内取回。'],
['Standard is for frequently accessed data and costs more.','Standard-IA is for infrequent but fast access and costs more than archives.','Express One Zone is for the highest performance, not archives.'],
['Standard 适用于频繁访问的数据，成本更高。','Standard-IA 适用于不常访问但需快速取回的数据，成本高于归档类别。','Express One Zone 用于最高性能，而不是归档。']);

Q('3.6','single',[0],
['A company wants objects in S3 to move automatically to S3 Standard-IA after 30 days and be deleted after 1 year. What should it configure?',
 ['An S3 Lifecycle policy','S3 Transfer Acceleration','An S3 bucket policy','Cross-Region Replication'],
 'Lifecycle policies transition objects between storage classes and expire them on a schedule.'],
['某公司希望 S3 中的对象在 30 天后自动转移到 S3 Standard-IA，并在 1 年后删除。应配置什么？',
 ['S3 生命周期策略','S3 Transfer Acceleration','S3 存储桶策略','跨区域复制'],
 '生命周期策略按计划在存储类别之间转移对象并使其过期。'],
['Transfer Acceleration speeds up uploads.','Bucket policies control access.','Replication copies objects to another Region.'],
['Transfer Acceleration 用于加快上传速度。','存储桶策略控制访问。','复制把对象复制到另一个区域。']);

Q('3.6','single',[0],
['A company wants its on-premises applications to use Amazon S3 for storage, while keeping frequently accessed data cached locally for low latency. Which service should it use?',
 ['AWS Storage Gateway','Amazon EFS','AWS Snowball Edge','Amazon CloudFront'],
 'Storage Gateway is a hybrid cloud storage service that gives on-premises applications access to cloud storage, with local caching (a cached file system).'],
['某公司希望其本地应用使用 Amazon S3 进行存储，同时把频繁访问的数据缓存在本地以实现低延迟。应使用哪项服务？',
 ['AWS Storage Gateway','Amazon EFS','AWS Snowball Edge','Amazon CloudFront'],
 'Storage Gateway 是混合云存储服务，让本地应用可以访问云存储，并提供本地缓存（缓存的文件系统）。'],
['EFS serves AWS compute, not as a local cache for on-premises apps.','Snowball Edge is for one-off bulk data transfer.','CloudFront caches content for internet users.'],
['EFS 服务于 AWS 计算资源，而不是作为本地应用的本地缓存。','Snowball Edge 用于一次性的批量数据传输。','CloudFront 为互联网用户缓存内容。']);

Q('3.6','single',[0],
['A company wants to centrally manage and automate backups of Amazon EBS volumes, RDS databases, DynamoDB tables and EFS file systems with one backup plan. Which service should it use?',
 ['AWS Backup','Amazon S3 Lifecycle','AWS Config','AWS CloudTrail'],
 'AWS Backup centralizes and automates data protection across AWS services using backup plans and policies.'],
['某公司希望用一个备份计划集中管理并自动备份 Amazon EBS 卷、RDS 数据库、DynamoDB 表和 EFS 文件系统。应使用哪项服务？',
 ['AWS Backup','Amazon S3 生命周期','AWS Config','AWS CloudTrail'],
 'AWS Backup 使用备份计划和策略，跨 AWS 服务集中并自动化数据保护。'],
['Lifecycle manages S3 objects only.','Config records configurations.','CloudTrail records API activity.'],
['生命周期只管理 S3 对象。','Config 记录配置。','CloudTrail 记录 API 活动。']);

Q('3.6','multi',[0,1],
['Which TWO S3 storage classes are designed for archiving data? (Select TWO.)',
 ['S3 Glacier Flexible Retrieval','S3 Glacier Deep Archive','S3 Standard','S3 Express One Zone','S3 Intelligent-Tiering Frequent Access tier'],
 'The S3 Glacier storage classes (Instant Retrieval, Flexible Retrieval and Deep Archive) are designed for archives.'],
['哪两种 S3 存储类别专为归档数据而设计？（选择两项。）',
 ['S3 Glacier Flexible Retrieval','S3 Glacier Deep Archive','S3 Standard','S3 Express One Zone','S3 Intelligent-Tiering 的频繁访问层'],
 'S3 Glacier 存储类别（Instant Retrieval、Flexible Retrieval 和 Deep Archive）专为归档而设计。'],
['S3 Standard is for frequently accessed data.','Express One Zone is for high performance.','The Frequent Access tier is for active data.'],
['S3 Standard 适用于频繁访问的数据。','Express One Zone 用于高性能。','频繁访问层用于活跃数据。']);

Q('3.6','single',[0],
['How can a company back up an Amazon EBS volume?',
 ['Create an EBS snapshot, which is stored durably in Amazon S3','Copy the volume to instance store','Move the volume to an edge location','EBS volumes cannot be backed up'],
 'EBS snapshots are incremental, point-in-time backups stored in S3 (managed by AWS) and can be used to create new volumes.'],
['公司如何备份 Amazon EBS 卷？',
 ['创建 EBS 快照，快照会持久地存储在 Amazon S3 中','把卷复制到实例存储','把卷迁移到边缘站点','EBS 卷无法备份'],
 'EBS 快照是增量式的时间点备份，存储在 S3 中（由 AWS 管理），可用于创建新卷。'],
['Instance store is temporary.','Edge locations do not store volumes.','EBS volumes can be backed up with snapshots.'],
['实例存储是临时的。','边缘站点不存储卷。','EBS 卷可以用快照备份。']);

Q('3.6','single',[0],
['A high-performance computing workload needs a file system that can process massive datasets at hundreds of GB/s, linked to data in Amazon S3. Which service fits?',
 ['Amazon FSx for Lustre','Amazon FSx for Windows File Server','Amazon S3 Glacier Instant Retrieval','AWS Storage Gateway Tape Gateway'],
 'FSx for Lustre is a high-performance file system for HPC, machine learning and media processing, and can link to S3.'],
['某高性能计算工作负载需要一个能以每秒数百 GB 的速度处理海量数据集、并与 Amazon S3 中的数据关联的文件系统。哪项服务合适？',
 ['Amazon FSx for Lustre','Amazon FSx for Windows File Server','Amazon S3 Glacier Instant Retrieval','AWS Storage Gateway 磁带网关'],
 'FSx for Lustre 是面向高性能计算、机器学习和媒体处理的高性能文件系统，可以与 S3 关联。'],
['FSx for Windows is for Windows file shares.','Glacier Instant Retrieval is archive storage.','Tape Gateway replaces physical tape backups.'],
['FSx for Windows 用于 Windows 文件共享。','Glacier Instant Retrieval 是归档存储。','磁带网关用于取代物理磁带备份。']);

Q('3.6','single',[0],
['A company stores thumbnail images that can easily be regenerated. They are accessed infrequently. Which S3 storage class offers the lowest cost while accepting lower resilience?',
 ['S3 One Zone-Infrequent Access','S3 Standard','S3 Intelligent-Tiering','S3 Standard-IA'],
 'One Zone-IA stores data in a single AZ at a lower price than Standard-IA, which is suitable for re-creatable, infrequently accessed data.'],
['某公司存储可以轻松重新生成的缩略图，这些图片不常被访问。在可以接受较低韧性的前提下，哪种 S3 存储类别成本最低？',
 ['S3 One Zone-Infrequent Access','S3 Standard','S3 Intelligent-Tiering','S3 Standard-IA'],
 'One Zone-IA 把数据存储在单个可用区中，价格比 Standard-IA 更低，适合可重新生成、不常访问的数据。'],
['Standard costs more and is for frequent access.','Intelligent-Tiering is for unknown patterns and stores data across AZs.','Standard-IA stores across multiple AZs and costs more than One Zone-IA.'],
['Standard 成本更高，适用于频繁访问。','Intelligent-Tiering 适用于未知的访问模式，并跨可用区存储数据。','Standard-IA 跨多个可用区存储，成本高于 One Zone-IA。']);

/* ================= 3.7 AI/ML and analytics ================= */
Q('3.7','single',[0],
['A company wants to build a chatbot that understands customer requests through voice and text in its contact centre. Which service should it use?',
 ['Amazon Lex','Amazon Polly','Amazon Rekognition','Amazon Textract'],
 'Amazon Lex builds conversational interfaces (chatbots and voice bots) with automatic speech recognition and natural language understanding.'],
['某公司希望在其联络中心构建一个能通过语音和文本理解客户请求的聊天机器人。应使用哪项服务？',
 ['Amazon Lex','Amazon Polly','Amazon Rekognition','Amazon Textract'],
 'Amazon Lex 利用自动语音识别和自然语言理解来构建对话式界面（聊天机器人和语音机器人）。'],
['Polly converts text to speech but does not understand requests.','Rekognition analyses images and video.','Textract extracts text from documents.'],
['Polly 把文本转换为语音，但无法理解请求。','Rekognition 分析图像和视频。','Textract 从文档中提取文字。']);

Q('3.7','single',[0],
['A company wants to convert recorded customer calls into text for analysis. Which service should it use?',
 ['Amazon Transcribe','Amazon Polly','Amazon Translate','Amazon Comprehend'],
 'Amazon Transcribe converts speech to text (automatic speech recognition).'],
['某公司希望把录制的客户通话转换为文字以便分析。应使用哪项服务？',
 ['Amazon Transcribe','Amazon Polly','Amazon Translate','Amazon Comprehend'],
 'Amazon Transcribe 把语音转换为文字（自动语音识别）。'],
['Polly does the opposite: text to speech.','Translate converts between languages.','Comprehend analyses text that already exists.'],
['Polly 的作用正好相反：文本转语音。','Translate 在语言之间进行转换。','Comprehend 分析已有的文本。']);

Q('3.7','single',[0],
['An e-learning company wants its articles read aloud in natural-sounding voices. Which service should it use?',
 ['Amazon Polly','Amazon Transcribe','Amazon Lex','Amazon Textract'],
 'Amazon Polly turns text into lifelike speech.'],
['某在线教育公司希望用自然的声音朗读其文章。应使用哪项服务？',
 ['Amazon Polly','Amazon Transcribe','Amazon Lex','Amazon Textract'],
 'Amazon Polly 把文本转换为逼真的语音。'],
['Transcribe converts speech to text.','Lex builds chatbots.','Textract extracts text from documents.'],
['Transcribe 把语音转换为文字。','Lex 用于构建聊天机器人。','Textract 从文档中提取文字。']);

Q('3.7','single',[0],
['A retailer wants to determine whether thousands of product reviews are positive or negative. Which service should it use?',
 ['Amazon Comprehend','Amazon Rekognition','Amazon Polly','Amazon Textract'],
 'Amazon Comprehend uses natural language processing to find sentiment, entities, key phrases and language in text.'],
['某零售商希望判断数千条产品评论是正面还是负面。应使用哪项服务？',
 ['Amazon Comprehend','Amazon Rekognition','Amazon Polly','Amazon Textract'],
 'Amazon Comprehend 利用自然语言处理找出文本中的情感、实体、关键短语和语言。'],
['Rekognition analyses images and video.','Polly converts text to speech.','Textract extracts text from scanned documents.'],
['Rekognition 分析图像和视频。','Polly 把文本转换为语音。','Textract 从扫描文档中提取文字。']);

Q('3.7','single',[0],
['A company wants to detect objects, scenes and inappropriate content in images uploaded by users. Which service should it use?',
 ['Amazon Rekognition','Amazon Comprehend','Amazon Transcribe','Amazon Translate'],
 'Amazon Rekognition analyses images and videos to identify objects, people, text, scenes and unsafe content.'],
['某公司希望检测用户上传的图片中的物体、场景和不当内容。应使用哪项服务？',
 ['Amazon Rekognition','Amazon Comprehend','Amazon Transcribe','Amazon Translate'],
 'Amazon Rekognition 分析图像和视频，识别物体、人物、文字、场景和不安全内容。'],
['Comprehend analyses text.','Transcribe converts speech to text.','Translate translates text.'],
['Comprehend 分析文本。','Transcribe 把语音转换为文字。','Translate 翻译文本。']);

Q('3.7','single',[0],
['An insurance company wants to automatically extract text, form fields and tables from scanned claim forms. Which service should it use?',
 ['Amazon Textract','Amazon Comprehend','Amazon Rekognition','Amazon Lex'],
 'Amazon Textract extracts printed and handwritten text, forms and tables from documents.'],
['某保险公司希望从扫描的理赔表格中自动提取文字、表单字段和表格。应使用哪项服务？',
 ['Amazon Textract','Amazon Comprehend','Amazon Rekognition','Amazon Lex'],
 'Amazon Textract 从文档中提取印刷体和手写文字、表单和表格。'],
['Comprehend analyses the meaning of text after it is extracted.','Rekognition analyses general images rather than document structure.','Lex builds chatbots.'],
['Comprehend 分析的是提取之后文本的含义。','Rekognition 分析的是一般图像，而不是文档结构。','Lex 用于构建聊天机器人。']);

Q('3.7','single',[0],
['A team of data scientists wants to build, train and deploy custom machine learning models with fully managed infrastructure. Which service should it use?',
 ['Amazon SageMaker AI','Amazon Polly','Amazon Quick Sight','AWS Glue'],
 'Amazon SageMaker AI provides tools to build, train, tune and deploy machine learning models at scale.'],
['一个数据科学家团队希望使用完全托管的基础设施来构建、训练和部署定制机器学习模型。应使用哪项服务？',
 ['Amazon SageMaker AI','Amazon Polly','Amazon Quick Sight','AWS Glue'],
 'Amazon SageMaker AI 提供大规模构建、训练、调优和部署机器学习模型的工具。'],
['Polly is a pre-trained text-to-speech service.','Quick Sight is for BI dashboards.','Glue is for ETL and data cataloguing.'],
['Polly 是预训练的文本转语音服务。','Quick Sight 用于商业智能仪表板。','Glue 用于 ETL 和数据编目。']);

Q('3.7','single',[0],
['A company wants to run SQL queries directly on log files stored in Amazon S3 without loading them into a database or managing servers. Which service should it use?',
 ['Amazon Athena','Amazon RDS','Amazon EMR','Amazon ElastiCache'],
 'Athena is a serverless, interactive query service that analyses data in S3 using standard SQL, billed per query.'],
['某公司希望直接对存储在 Amazon S3 中的日志文件运行 SQL 查询，而无需把它们加载到数据库中，也无需管理服务器。应使用哪项服务？',
 ['Amazon Athena','Amazon RDS','Amazon EMR','Amazon ElastiCache'],
 'Athena 是无服务器的交互式查询服务，使用标准 SQL 分析 S3 中的数据，按查询计费。'],
['RDS requires loading data into a database.','EMR runs big data clusters you configure.','ElastiCache is an in-memory cache.'],
['RDS 需要把数据加载到数据库中。','EMR 运行需要你配置的大数据集群。','ElastiCache 是内存缓存。']);

Q('3.7','single',[0],
['A company needs to collect and process clickstream data from its website in real time. Which service should it use?',
 ['Amazon Kinesis','Amazon S3 Glacier','AWS Glue Data Catalog','Amazon Quick Sight'],
 'Amazon Kinesis collects, processes and analyses real-time streaming data, such as clickstreams, logs and IoT telemetry.'],
['某公司需要实时收集和处理来自其网站的点击流数据。应使用哪项服务？',
 ['Amazon Kinesis','Amazon S3 Glacier','AWS Glue 数据目录','Amazon Quick Sight'],
 'Amazon Kinesis 收集、处理和分析实时流数据，例如点击流、日志和物联网遥测数据。'],
['Glacier is archive storage.','The Data Catalog stores metadata.','Quick Sight visualizes data.'],
['Glacier 是归档存储。','数据目录存储元数据。','Quick Sight 用于数据可视化。']);

Q('3.7','single',[0],
['A company needs a serverless service to discover, prepare and transform data from several sources (extract, transform and load) before analysis. Which service should it use?',
 ['AWS Glue','Amazon Kinesis Video Streams','Amazon Lex','Amazon Neptune'],
 'AWS Glue is a serverless data integration (ETL) service, with a Data Catalog for metadata.'],
['某公司需要一个无服务器服务，在分析之前发现、准备和转换来自多个来源的数据（提取、转换和加载）。应使用哪项服务？',
 ['AWS Glue','Amazon Kinesis Video Streams','Amazon Lex','Amazon Neptune'],
 'AWS Glue 是无服务器的数据集成（ETL）服务，并提供用于存储元数据的数据目录。'],
['Kinesis Video Streams ingests video.','Lex builds chatbots.','Neptune is a graph database.'],
['Kinesis Video Streams 用于导入视频。','Lex 用于构建聊天机器人。','Neptune 是图数据库。']);

Q('3.7','single',[0],
['Business users want interactive dashboards and visualizations of sales data, accessible from a browser. Which service should they use?',
 ['Amazon Quick Sight','Amazon Athena','AWS Glue','Amazon Kinesis'],
 'Amazon Quick Sight is a business intelligence service for dashboards, visualizations and natural-language questions about data.'],
['业务用户希望通过浏览器查看销售数据的交互式仪表板和可视化图表。应使用哪项服务？',
 ['Amazon Quick Sight','Amazon Athena','AWS Glue','Amazon Kinesis'],
 'Amazon Quick Sight 是商业智能服务，提供仪表板、可视化以及用自然语言提问数据的功能。'],
['Athena runs SQL queries but is not a dashboard tool.','Glue prepares data.','Kinesis ingests streaming data.'],
['Athena 运行 SQL 查询，但不是仪表板工具。','Glue 用于准备数据。','Kinesis 用于导入流数据。']);

Q('3.7','multi',[0,1],
['A company wants to translate customer support emails into English and then find the sentiment of each email. Which TWO services should it use? (Select TWO.)',
 ['Amazon Translate','Amazon Comprehend','Amazon Polly','Amazon Rekognition','Amazon Transcribe'],
 'Translate converts the text to English; Comprehend analyses its sentiment.'],
['某公司希望把客户支持邮件翻译成英文，然后分析每封邮件的情感。应使用哪两项服务？（选择两项。）',
 ['Amazon Translate','Amazon Comprehend','Amazon Polly','Amazon Rekognition','Amazon Transcribe'],
 'Translate 把文本转换为英文；Comprehend 分析其情感。'],
['Polly converts text to speech.','Rekognition analyses images.','Transcribe converts audio to text; the emails are already text.'],
['Polly 把文本转换为语音。','Rekognition 分析图像。','Transcribe 把音频转换为文字；而邮件本身已经是文本。']);

/* ================= 3.8 Other in-scope services ================= */
Q('3.8','single',[0],
['A company wants to decouple its order-taking web tier from its order-processing tier so that orders are buffered and not lost during traffic spikes. Which service should it use?',
 ['Amazon Simple Queue Service (Amazon SQS)','Amazon Simple Notification Service (Amazon SNS)','Amazon Route 53','Amazon CloudFront'],
 'SQS is a fully managed message queue: producers send messages and consumers process them at their own pace, decoupling components.'],
['某公司希望把接收订单的 Web 层与处理订单的层解耦，使订单在流量高峰期间得到缓冲而不会丢失。应使用哪项服务？',
 ['Amazon Simple Queue Service（Amazon SQS）','Amazon Simple Notification Service（Amazon SNS）','Amazon Route 53','Amazon CloudFront'],
 'SQS 是完全托管的消息队列：生产者发送消息，消费者按自己的节奏处理，从而实现组件解耦。'],
['SNS pushes messages to subscribers immediately and does not buffer them for later processing.','Route 53 is DNS.','CloudFront delivers content.'],
['SNS 会立即把消息推送给订阅方，不会缓冲消息以供稍后处理。','Route 53 是 DNS 服务。','CloudFront 分发内容。']);

Q('3.8','single',[0],
['A company wants to send an email and SMS alert to its operations team whenever a CloudWatch alarm fires. Which service should it use?',
 ['Amazon Simple Notification Service (Amazon SNS)','Amazon SQS','AWS Step Functions','Amazon Kinesis'],
 'SNS is a publish/subscribe service that pushes messages to subscribers such as email, SMS, mobile push, Lambda and SQS.'],
['某公司希望在 CloudWatch 告警触发时，向运维团队发送电子邮件和短信提醒。应使用哪项服务？',
 ['Amazon Simple Notification Service（Amazon SNS）','Amazon SQS','AWS Step Functions','Amazon Kinesis'],
 'SNS 是发布/订阅服务，可以把消息推送给电子邮件、短信、移动推送、Lambda 和 SQS 等订阅方。'],
['SQS queues messages for applications; it does not send email or SMS.','Step Functions orchestrates workflows.','Kinesis processes streaming data.'],
['SQS 为应用排队消息，不会发送电子邮件或短信。','Step Functions 编排工作流。','Kinesis 处理流数据。']);

Q('3.8','single',[0],
['A company wants to react to events from AWS services and SaaS applications, routing them to targets such as Lambda functions using rules, and to run tasks on a schedule. Which service should it use?',
 ['Amazon EventBridge','Amazon SQS','Amazon SES','AWS CodeBuild'],
 'EventBridge is a serverless event bus that routes events using rules and also provides a scheduler.'],
['某公司希望响应来自 AWS 服务和 SaaS 应用的事件，使用规则把它们路由到 Lambda 函数等目标，并按计划运行任务。应使用哪项服务？',
 ['Amazon EventBridge','Amazon SQS','Amazon SES','AWS CodeBuild'],
 'EventBridge 是无服务器事件总线，使用规则路由事件，还提供调度器。'],
['SQS is a queue, not an event router with rules.','SES sends email.','CodeBuild compiles and tests code.'],
['SQS 是队列，而不是基于规则的事件路由器。','SES 发送电子邮件。','CodeBuild 编译和测试代码。']);

Q('3.8','single',[0],
['A company wants to set up a cloud-based contact centre with phone and chat support in minutes, paying only for usage. Which service should it use?',
 ['Amazon Connect','Amazon SES','Amazon WorkSpaces','AWS Amplify'],
 'Amazon Connect is an omnichannel cloud contact centre service.'],
['某公司希望在几分钟内搭建一个提供电话和聊天支持的云端联络中心，并且只按使用量付费。应使用哪项服务？',
 ['Amazon Connect','Amazon SES','Amazon WorkSpaces','AWS Amplify'],
 'Amazon Connect 是全渠道的云端联络中心服务。'],
['SES sends email at scale.','WorkSpaces provides virtual desktops.','Amplify builds web and mobile apps.'],
['SES 大规模发送电子邮件。','WorkSpaces 提供虚拟桌面。','Amplify 用于构建 Web 和移动应用。']);

Q('3.8','single',[0],
['An application needs to send order confirmation and password reset emails to customers at scale. Which service should it use?',
 ['Amazon Simple Email Service (Amazon SES)','Amazon SNS mobile push','Amazon Connect','Amazon Lex'],
 'Amazon SES is a cloud email service for sending transactional, marketing and notification email.'],
['某应用需要大规模地向客户发送订单确认和密码重置邮件。应使用哪项服务？',
 ['Amazon Simple Email Service（Amazon SES）','Amazon SNS 移动推送','Amazon Connect','Amazon Lex'],
 'Amazon SES 是云电子邮件服务，用于发送事务性、营销和通知邮件。'],
['Mobile push sends notifications to devices, not emails.','Connect is a contact centre.','Lex builds chatbots.'],
['移动推送向设备发送通知，而不是电子邮件。','Connect 是联络中心。','Lex 用于构建聊天机器人。']);

Q('3.8','single',[0],
['A team wants every code change to be automatically built, tested and deployed through a release pipeline. Which service orchestrates these stages?',
 ['AWS CodePipeline','AWS X-Ray','Amazon CloudWatch','AWS Artifact'],
 'CodePipeline is a continuous delivery service that automates the build, test and deploy phases of your release process.'],
['某团队希望每次代码变更都能通过发布管道自动构建、测试和部署。哪项服务负责编排这些阶段？',
 ['AWS CodePipeline','AWS X-Ray','Amazon CloudWatch','AWS Artifact'],
 'CodePipeline 是持续交付服务，可自动执行发布流程中的构建、测试和部署阶段。'],
['X-Ray traces requests for troubleshooting.','CloudWatch monitors metrics and logs.','Artifact provides compliance reports.'],
['X-Ray 跟踪请求以排查问题。','CloudWatch 监控指标和日志。','Artifact 提供合规报告。']);

Q('3.8','single',[0],
['Which service compiles source code, runs unit tests and produces packages ready to deploy, without managing build servers?',
 ['AWS CodeBuild','AWS CodePipeline','AWS X-Ray','Amazon ECR'],
 'CodeBuild is a fully managed build service. CodePipeline orchestrates the overall release; CodeBuild performs the build step.'],
['哪项服务可以编译源代码、运行单元测试并生成可部署的软件包，而无需管理构建服务器？',
 ['AWS CodeBuild','AWS CodePipeline','AWS X-Ray','Amazon ECR'],
 'CodeBuild 是完全托管的构建服务。CodePipeline 编排整个发布流程；CodeBuild 执行其中的构建步骤。'],
['CodePipeline orchestrates stages but does not compile code itself.','X-Ray traces requests.','ECR stores container images.'],
['CodePipeline 负责编排各阶段，但本身不编译代码。','X-Ray 跟踪请求。','ECR 存储容器镜像。']);

Q('3.8','single',[0],
['Developers want to trace requests through a distributed microservices application to find which service causes high latency. Which service should they use?',
 ['AWS X-Ray','AWS CloudTrail','AWS Config','Amazon Inspector'],
 'X-Ray collects traces and builds a service map to analyse and debug distributed applications.'],
['开发人员希望跟踪请求在分布式微服务应用中的路径，找出哪个服务导致了高延迟。应使用哪项服务？',
 ['AWS X-Ray','AWS CloudTrail','AWS Config','Amazon Inspector'],
 'X-Ray 收集跟踪数据并构建服务地图，用于分析和调试分布式应用。'],
['CloudTrail records API calls to AWS, not application request latency.','Config records configurations.','Inspector scans for vulnerabilities.'],
['CloudTrail 记录对 AWS 的 API 调用，而不是应用请求的延迟。','Config 记录配置。','Inspector 扫描漏洞。']);

Q('3.8','single',[0],
['A company wants to give remote employees secure, persistent Windows desktops that they can access from any device. Which service should it use?',
 ['Amazon WorkSpaces','Amazon AppStream 2.0','Amazon Connect','AWS Amplify'],
 'Amazon WorkSpaces provides managed virtual desktops (Windows or Linux).'],
['某公司希望为远程员工提供安全、持久的 Windows 桌面，可以从任何设备访问。应使用哪项服务？',
 ['Amazon WorkSpaces','Amazon AppStream 2.0','Amazon Connect','AWS Amplify'],
 'Amazon WorkSpaces 提供托管的虚拟桌面（Windows 或 Linux）。'],
['AppStream 2.0 streams individual applications, not full desktops.','Connect is a contact centre.','Amplify builds web and mobile apps.'],
['AppStream 2.0 流式传输单个应用，而不是完整的桌面。','Connect 是联络中心。','Amplify 用于构建 Web 和移动应用。']);

Q('3.8','single',[0],
['A design school wants students to use a powerful 3D modelling application from a web browser on any device, without installing it locally. Which service should it use?',
 ['Amazon AppStream 2.0','Amazon WorkSpaces Secure Browser','Amazon Lightsail','AWS IoT Core'],
 'AppStream 2.0 streams desktop applications to a web browser.'],
['某设计学院希望学生在任何设备上通过 Web 浏览器使用一款强大的 3D 建模软件，而无需在本地安装。应使用哪项服务？',
 ['Amazon AppStream 2.0','Amazon WorkSpaces Secure Browser','Amazon Lightsail','AWS IoT Core'],
 'AppStream 2.0 把桌面应用流式传输到 Web 浏览器。'],
['Secure Browser provides access to websites, not desktop applications.','Lightsail provides simple servers.','IoT Core connects devices.'],
['Secure Browser 用于访问网站，而不是桌面应用。','Lightsail 提供简单的服务器。','IoT Core 用于连接设备。']);

Q('3.8','single',[0],
['A company wants contractors to access its internal web applications through a secure browser, without any data being stored on their personal devices. Which service fits?',
 ['Amazon WorkSpaces Secure Browser','Amazon AppStream 2.0','AWS Client VPN with local file sync','Amazon S3 public website hosting'],
 'WorkSpaces Secure Browser provides secure browser access to internal websites and SaaS applications, keeping data off the device.'],
['某公司希望承包商通过安全浏览器访问其内部 Web 应用，且个人设备上不存储任何数据。哪项服务合适？',
 ['Amazon WorkSpaces Secure Browser','Amazon AppStream 2.0','带本地文件同步的 AWS Client VPN','Amazon S3 公有网站托管'],
 'WorkSpaces Secure Browser 提供对内部网站和 SaaS 应用的安全浏览器访问，数据不会留在设备上。'],
['AppStream 2.0 streams desktop applications, not just web access.','Local file sync puts data on the device.','A public website exposes internal apps to everyone.'],
['AppStream 2.0 流式传输的是桌面应用，而不仅仅是网页访问。','本地文件同步会把数据放到设备上。','公有网站会把内部应用暴露给所有人。']);

Q('3.8','multi',[0,1],
['Which TWO services help build frontend web and mobile apps and connect IoT devices? (Select TWO.)',
 ['AWS Amplify','AWS IoT Core','Amazon Redshift','AWS Snowball Edge','Amazon Neptune'],
 'Amplify builds and hosts full-stack web and mobile apps. IoT Core connects IoT devices securely to AWS.'],
['哪两项服务分别帮助构建前端 Web 和移动应用以及连接物联网设备？（选择两项。）',
 ['AWS Amplify','AWS IoT Core','Amazon Redshift','AWS Snowball Edge','Amazon Neptune'],
 'Amplify 用于构建和托管全栈 Web 和移动应用。IoT Core 把物联网设备安全地连接到 AWS。'],
['Redshift is a data warehouse.','Snowball Edge moves data offline.','Neptune is a graph database.'],
['Redshift 是数据仓库。','Snowball Edge 以离线方式迁移数据。','Neptune 是图数据库。']);
})();
