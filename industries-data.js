/**
 * Vorizo Info Tech - Master Industries & Vertical Solutions Data Dictionary
 * File: js/industries-data.js (also available as industries-data.js)
 * Generated for: Vorizo Info Tech India Pvt. Ltd
 * Reference Website: https://vorizoit.com/
 * Leadership: Anil Kumar Deeti (CEO) - anil@vorizoit.com | Pranaya - pranaya.d@vorizoit.com
 * Offices: USA (Giddings, TX) & India (Hyderabad, Telangana)
 */

const VORIZO_INDUSTRIES = {
    "industries": [
        {
            "id": "healthcare-life-sciences",
            "slug": "healthcare-digital-platforms",
            "name": "Healthcare & Life Sciences",
            "title": "Healthcare Digital Platforms & Cloud Modernization",
            "category": "Cloud Architecture & Healthcare IT",
            "clientName": "CareFirst Health Network",
            "location": "Dallas, TX (USA)",
            "timeline": "06 Months",
            "image": "images/projects/project-1.jpg",
            "shortDescription": "Modernizing legacy clinical systems into resilient, HIPAA-compliant cloud architectures with seamless patient portals and FHIR interoperability.",
            "overview": "Healthcare institutions face stringent regulatory demands, exponential growth in patient data, and increasing expectations for digital care delivery. Vorizo partners with health systems, medical device innovators, and telehealth platforms to design secure, HIPAA-compliant cloud environments, streamline electronic health record (EHR) interoperability, and deploy patient-first digital experiences.",
            "tailoredServices": [
                {
                    "title": "HIPAA-Compliant Cloud & Microservices",
                    "description": "Architecting multi-region AWS/Azure environments with automated AES-256 encryption at rest and in transit, dedicated private VPCs, and automated audit logging."
                },
                {
                    "title": "Telehealth & Patient Mobile Portals",
                    "description": "Developing secure WebRTC-powered video consultation platforms, appointment scheduling engines, and digital prescription workflows."
                },
                {
                    "title": "EHR & FHIR/HL7 Data Interoperability",
                    "description": "Engineering secure bi-directional clinical API gateways connecting Epic, Cerner, Athenahealth, and diagnostic labs."
                },
                {
                    "title": "Healthcare IT Staffing & Clinical Support",
                    "description": "Supplying verified Epic/Cerner certified analysts, biomedical software engineers, and healthcare data security leads across the USA."
                }
            ],
            "challenges": [
                {
                    "title": "Legacy Server Bottlenecks",
                    "description": "Aging on-premise infrastructure caused frequent clinical database timeouts during morning patient intake surges."
                },
                {
                    "title": "Manual Deployment & Compliance Gaps",
                    "description": "Two-week deployment windows with manual configuration that heightened audit exposure and downtime risks."
                },
                {
                    "title": "Disconnected Medical Records",
                    "description": "Fragmented patient history across 14 hospital branches prevented real-time provider decision making."
                }
            ],
            "solutions": [
                "Decomposed monolithic clinical software into containerized microservices managed on AWS EKS.",
                "Enforced zero-trust IAM access policies, CloudTrail audit trails, and end-to-end data encryption.",
                "Deployed automated blue-green cutover pipelines ensuring zero clinical downtime during migration."
            ],
            "results": [
                {
                    "title": "99.99% Uptime & Elasticity",
                    "description": "Achieved enterprise-grade system availability and seamless auto-scaling during traffic spikes, ensuring uninterrupted clinical workflows."
                },
                {
                    "title": "40% Infrastructure Cost Reduction",
                    "description": "Decommissioned costly physical colocation leases and right-sized cloud compute via automated FinOps policies."
                },
                {
                    "title": "1.2M+ Patient Records Migrated",
                    "description": "Migrated 1.2M historical medical records and telemetry logs with zero data loss and full HIPAA validation."
                }
            ],
            "metrics": [
                {
                    "label": "Deployment Velocity Increase",
                    "value": "95%"
                },
                {
                    "label": "Infrastructure Cost Optimization",
                    "value": "40%"
                },
                {
                    "label": "System Uptime SLA",
                    "value": "99.99%"
                }
            ],
            "techStack": [
                "AWS EKS",
                "Docker",
                "Terraform",
                "PostgreSQL",
                "FHIR / HL7",
                "FastAPI",
                "React",
                "OpenTelemetry",
                "HIPAA Compliance"
            ],
            "faqs": [
                {
                    "question": "How do you guarantee HIPAA compliance in cloud migrations?",
                    "answer": "We enforce strict Business Associate Agreements (BAAs), AES-256 encryption at rest/transit, automated VPC network isolation, and immutable AWS CloudTrail audit logs."
                },
                {
                    "question": "Can Vorizo integrate with Epic and Cerner EHR platforms?",
                    "answer": "Yes. Our healthcare engineers build certified HL7 and FHIR API connectors adhering to ONC standards for seamless health information exchange."
                },
                {
                    "question": "What contingency safeguards protect active hospital operations during cutover?",
                    "answer": "We use asynchronous database dual-writes and blue-green canary deployments to guarantee 100% clinical operational continuity with zero downtime."
                }
            ]
        },
        {
            "id": "bfsi-fintech",
            "slug": "banking-fintech-digital-transformation",
            "name": "Banking, Financial Services & Insurance (BFSI)",
            "title": "Banking & Fintech Digital Transformation",
            "category": "High-Throughput FinTech & Security",
            "clientName": "Apex FinTech Global",
            "location": "New York, NY (USA)",
            "timeline": "08 Months",
            "image": "images/projects/project-3.jpg",
            "shortDescription": "Engineering resilient, low-latency transaction processing pipelines, automated fraud detection engines, and PCI-DSS compliant cloud architectures.",
            "overview": "The financial services ecosystem demands sub-second transaction speed, unwavering security, and absolute regulatory adherence. Vorizo delivers enterprise banking transformations, payment gateway integrations, and quantitative trading infrastructure that empower financial institutions to outpace fintech disruption while adhering to strict PCI-DSS and SOX mandates.",
            "tailoredServices": [
                {
                    "title": "Real-Time Payment Orchestration",
                    "description": "Building high-throughput payment settlement engines supporting ACH, FedNow, RTP, and multi-currency international wires."
                },
                {
                    "title": "Automated Fraud Detection & AML",
                    "description": "Deploying machine learning models for real-time anomaly detection, risk scoring, and anti-money laundering (AML) regulatory compliance."
                },
                {
                    "title": "Core Banking Microservices Modernization",
                    "description": "Re-engineering monolithic core banking ledgers into distributed, event-driven microservices architectures with Apache Kafka."
                },
                {
                    "title": "Quantitative & FinTech Talent Staffing",
                    "description": "Placing verified senior Golang, Java, Python quant engineers, and cloud security compliance specialists across top financial firms."
                }
            ],
            "challenges": [
                {
                    "title": "Peak Transaction Timeout Failures",
                    "description": "Legacy SQL databases experienced deadlocks during end-of-month commercial payroll and trading surges."
                },
                {
                    "title": "Strict PCI-DSS v4.0 Audit Mandates",
                    "description": "Outdated network segmentation and manual key management jeopardized annual payment processing certifications."
                },
                {
                    "title": "High Customer Churn from Slow Mobile Apps",
                    "description": "Customer mobile account login latency exceeded 4.5 seconds, damaging retention against agile neo-banks."
                }
            ],
            "solutions": [
                "Architected event-driven asynchronous payment processing pipeline on AWS using Apache Kafka and Redis.",
                "Enforced automated HashiCorp Vault hardware-backed key rotation and isolated PCI-DSS compliant VPCs.",
                "Redesigned the mobile banking API layer with GraphQL, reducing client latency to under 300 milliseconds."
            ],
            "results": [
                {
                    "title": "Sub-10ms Transaction Processing",
                    "description": "Achieved average API settlement response times under 10ms across 250,000+ daily financial transactions."
                },
                {
                    "title": "100% PCI-DSS v4.0 Compliance",
                    "description": "Passed comprehensive third-party security audits with zero non-conformances and automated compliance gates."
                },
                {
                    "title": "8x Peak Throughput Capacity",
                    "description": "Supported 800% transaction surge during holiday payroll without a single dropped settlement."
                }
            ],
            "metrics": [
                {
                    "label": "Transaction Throughput Increase",
                    "value": "800%"
                },
                {
                    "label": "API Latency Reduction",
                    "value": "78%"
                },
                {
                    "label": "Audit Compliance Score",
                    "value": "100%"
                }
            ],
            "techStack": [
                "Golang",
                "Java Spring Boot",
                "Apache Kafka",
                "Redis Enterprise",
                "AWS KMS",
                "HashiCorp Vault",
                "PostgreSQL",
                "PCI-DSS v4.0"
            ],
            "faqs": [
                {
                    "question": "How does Vorizo ensure PCI-DSS security compliance?",
                    "answer": "We implement tokenization, automated key rotation via HashiCorp Vault, strict network micro-segmentation, and continuous vulnerability monitoring."
                },
                {
                    "question": "Can you modernize our legacy AS400 / mainframe banking core?",
                    "answer": "Yes. We deploy modern event-driven API facades and asynchronous Kafka messaging layers to decouple legacy cores without risky rip-and-replace cutovers."
                }
            ]
        },
        {
            "id": "retail-ecommerce",
            "slug": "retail-ecommerce-commerce-engines",
            "name": "Retail, Consumer Goods & E-Commerce",
            "title": "Retail & E-Commerce Commerce Engines",
            "category": "Headless Commerce & Omni-Channel Sync",
            "clientName": "OmniShop Global Brands",
            "location": "Chicago, IL (USA)",
            "timeline": "05 Months",
            "image": "images/projects/project-2.jpg",
            "shortDescription": "Designing high-conversion headless e-commerce architectures, real-time distributed inventory engines, and AI personalization platforms.",
            "overview": "Modern retail is defined by omnichannel agility\u2014connecting web storefronts, mobile apps, physical point-of-sale (POS) systems, and supply chains into a unified real-time ecosystem. Vorizo builds headless e-commerce platforms and automated inventory synchronization pipelines that eliminate stock-outs and deliver blisteringly fast customer shopping experiences.",
            "tailoredServices": [
                {
                    "title": "Headless Commerce Architecture",
                    "description": "Decoupling frontend web and mobile experiences from backend inventory and checkout engines using Next.js, Shopify Plus, and Commercelayer."
                },
                {
                    "title": "Real-Time Distributed Inventory Sync",
                    "description": "Sub-second stock availability synchronization between e-commerce cart reserves and 65+ physical retail store locations."
                },
                {
                    "title": "AI Personalization & Recommendation",
                    "description": "Implementing machine learning models that deliver hyper-personalized cross-sell recommendations and predictive search."
                },
                {
                    "title": "Seasonal Technical & Logistics Staffing",
                    "description": "Deploying temporary and permanent e-commerce software engineers, warehouse leads, and supply chain analysts for Q4 surges."
                }
            ],
            "challenges": [
                {
                    "title": "Black Friday Traffic Outages",
                    "description": "Legacy monolithic Magento storefront crashed under 10x traffic surges, costing estimated $600K in lost sales."
                },
                {
                    "title": "Severe Inventory Desynchronization",
                    "description": "Online customers frequently ordered out-of-stock items due to 4-hour batch updates from physical store POS terminals."
                },
                {
                    "title": "High Cart Abandonment on Mobile",
                    "description": "Mobile page load times of 5.8 seconds caused a 68% shopping cart abandonment rate."
                }
            ],
            "solutions": [
                "Re-architected the storefront using Next.js on Vercel with edge caching, slashing page load times to 1.1 seconds.",
                "Deployed real-time WebSockets and Kafka event pipelines synchronizing POS terminals with e-commerce inventories in sub-seconds.",
                "Integrated frictionless one-click Apple Pay and Google Pay checkouts with Stripe."
            ],
            "results": [
                {
                    "title": "100% Uptime During Black Friday",
                    "description": "Seamlessly handled a 15x traffic surge on Black Friday and Cyber Monday with zero downtime and sub-second checkout."
                },
                {
                    "title": "34% Reduction in Cart Abandonment",
                    "description": "Accelerated mobile checkout converted over 34% more mobile shoppers into paying customers."
                },
                {
                    "title": "Zero Overselling Stock-Outs",
                    "description": "Real-time inventory synchronization eliminated duplicate order cancellations across all 65 retail branches."
                }
            ],
            "metrics": [
                {
                    "label": "Mobile Load Time Improvement",
                    "value": "81%"
                },
                {
                    "label": "Black Friday Sales Uptime",
                    "value": "100%"
                },
                {
                    "label": "Inventory Sync Latency",
                    "value": "<500ms"
                }
            ],
            "techStack": [
                "Next.js",
                "React",
                "Shopify Plus API",
                "Commercelayer",
                "Stripe API",
                "Apache Kafka",
                "Redis",
                "Elasticsearch",
                "AWS"
            ],
            "faqs": [
                {
                    "question": "What is the primary benefit of Headless Commerce?",
                    "answer": "Headless architecture separates the customer-facing frontend from the backend commerce engine, enabling 3x faster page loads, complete design freedom, and easy multi-channel publishing."
                },
                {
                    "question": "How do you handle sudden 10x-20x holiday traffic spikes?",
                    "answer": "We deploy serverless auto-scaling compute (AWS Lambda / Fargate) and global Edge CDN caching (Cloudflare) that scales instantaneously with zero manual configuration."
                }
            ]
        },
        {
            "id": "manufacturing-supply-chain",
            "slug": "smart-manufacturing-iot-automation",
            "name": "Manufacturing, Logistics & Supply Chain",
            "title": "Smart Manufacturing IoT & Automation",
            "category": "Industrial IoT & Logistics Telematics",
            "clientName": "Vanguard Precision Manufacturing",
            "location": "Houston, TX (USA)",
            "timeline": "07 Months",
            "image": "images/projects/project-5.jpg",
            "shortDescription": "Connecting industrial shop-floor machinery, automated warehouse management systems (WMS), and predictive maintenance telemetry.",
            "overview": "Manufacturing and logistics organizations thrive on operational efficiency, equipment uptime, and supply chain predictability. Vorizo deploys industrial IoT platforms, automated warehouse management solutions (WMS), and AI predictive maintenance engines that alert floor supervisors to machine degradation before costly failures occur.",
            "tailoredServices": [
                {
                    "title": "Industrial IoT & Shop-Floor Telemetry",
                    "description": "Connecting CNC machinery, robotics, and PLCs to cloud analytics platforms via MQTT, OPC-UA, and edge computing gateways."
                },
                {
                    "title": "Predictive Maintenance & Health Scoring",
                    "description": "Deploying machine learning models analyzing vibration, temperature, and acoustic metrics to forecast equipment failures."
                },
                {
                    "title": "Automated Warehouse Management (WMS)",
                    "description": "Building barcode/RFID tracking software, automated pick-and-pack optimization, and automated carrier dispatch integrations."
                },
                {
                    "title": "Industrial & Plant Floor Staffing",
                    "description": "Supplying warehouse supervisors, logistics coordinators, CNC programmers, and quality control inspectors across the USA and India."
                }
            ],
            "challenges": [
                {
                    "title": "Unplanned Equipment Downtime",
                    "description": "Crucial assembly lines experienced 40+ hours of unplanned downtime monthly, costing over $80,000 per incident."
                },
                {
                    "title": "Manual Paper-Based Inventory Tracking",
                    "description": "Warehouse picking relied on printed manifests, resulting in a 4.2% error rate in order fulfillment."
                },
                {
                    "title": "Lack of Fleet Real-Time Visibility",
                    "description": "Dispatchers had no real-time GPS telemetry for 1,500 active delivery vehicles, delaying customer shipment ETAs."
                }
            ],
            "solutions": [
                "Installed edge IoT vibration sensors on 120 critical machines transmitting telemetry to AWS IoT Core.",
                "Engineered a mobile barcode-scanning WMS app eliminating paper manifests completely.",
                "Built a central GPS fleet telematics dispatch portal with dynamic traffic-aware route optimization."
            ],
            "results": [
                {
                    "title": "42% Reduction in Machine Downtime",
                    "description": "Predictive maintenance alerts caught 28 bearing and motor degradation issues before catastrophic line shutdowns occurred."
                },
                {
                    "title": "99.8% Order Fulfillment Accuracy",
                    "description": "Mobile barcode scanning eradicated order mispicks, reducing customer return rates by 85%."
                },
                {
                    "title": "18% Fuel & Fleet Savings",
                    "description": "Dynamic route optimization eliminated 240,000 unnecessary transit miles annually across commercial trucks."
                }
            ],
            "metrics": [
                {
                    "label": "Unplanned Downtime Reduction",
                    "value": "42%"
                },
                {
                    "label": "Picking Error Reduction",
                    "value": "85%"
                },
                {
                    "label": "Fleet Fuel Cost Savings",
                    "value": "18%"
                }
            ],
            "techStack": [
                "AWS IoT Core",
                "MQTT / OPC-UA",
                "Python",
                "Node.js",
                "PostgreSQL / TimescaleDB",
                "Flutter WMS App",
                "Docker",
                "Grafana"
            ],
            "faqs": [
                {
                    "question": "Can Vorizo integrate with older legacy factory equipment?",
                    "answer": "Yes. We install non-invasive retrofitted IoT sensors (vibration, heat, power) and edge gateways that communicate via standard industrial protocols without altering machine warranties."
                },
                {
                    "question": "How quickly can you staff warehouse and industrial facilities?",
                    "answer": "Through our Non-IT & Industrial Staffing division, we can screen and place 10 to 50+ background-checked warehouse and plant floor workers within 5 to 10 business days."
                }
            ]
        },
        {
            "id": "hospitality-erp",
            "slug": "hospitality-enterprise-erp-systems",
            "name": "Hospitality, Travel & Enterprise ERP",
            "title": "Hospitality Enterprise ERP Systems",
            "category": "Property Management & Reservation Engines",
            "clientName": "Grand Horizon Hospitality Group",
            "location": "Miami, FL (USA)",
            "timeline": "06 Months",
            "image": "images/projects/project-4.jpg",
            "shortDescription": "Unifying multi-property management systems (PMS), central reservation engines, dynamic pricing algorithms, and mobile guest portals.",
            "overview": "The modern hospitality industry requires unified guest profiles, automated room pricing, and effortless mobile experiences from booking to check-out. Vorizo modernizes hotel and resort operations with cloud Property Management Systems (PMS), channel managers, and contactless mobile room access integrations that maximize revenue per available room (RevPAR).",
            "tailoredServices": [
                {
                    "title": "Cloud Property Management (PMS)",
                    "description": "Centralizing reservations, housekeeping schedules, banquet billing, and folio management across multiple resort properties."
                },
                {
                    "title": "Dynamic Room Pricing Engines",
                    "description": "Implementing algorithmic revenue management systems that adjust room rates in real-time based on local market occupancy."
                },
                {
                    "title": "Mobile Check-In & Digital Key Integration",
                    "description": "Deploying iOS and Android guest apps with Bluetooth Low Energy (BLE) digital door lock key generation."
                },
                {
                    "title": "Hospitality Technical Staffing",
                    "description": "Placing hospitality IT systems administrators, PMS implementation consultants, and customer support talent."
                }
            ],
            "challenges": [
                {
                    "title": "Fragmented On-Premise PMS Software",
                    "description": "40 boutique hotel properties ran disconnected software versions, preventing centralized guest loyalty tracking."
                },
                {
                    "title": "Frequent Overbooking Penalties",
                    "description": "15-minute channel manager sync delays caused double-bookings during holiday peak booking hours."
                },
                {
                    "title": "Long Front-Desk Check-In Lines",
                    "description": "Peak 3:00 PM check-in queues averaged 25 minutes per guest, hurting customer satisfaction ratings."
                }
            ],
            "solutions": [
                "Migrated all 40 properties to a centralized cloud PMS on AWS with real-time multi-tenant data synchronization.",
                "Engineered a sub-second channel manager API integration connecting Expedia, Booking.com, and direct web portals.",
                "Launched a mobile guest app featuring automated mobile check-in and BLE digital room key unlocking."
            ],
            "results": [
                {
                    "title": "Zero Overbooking Errors",
                    "description": "Real-time channel synchronization eliminated double-bookings completely across 3,200 available resort rooms."
                },
                {
                    "title": "90% Mobile Check-In Adoption",
                    "description": "Over 90% of guests bypassed front-desk queues using the mobile app, reducing front-desk staffing pressure."
                },
                {
                    "title": "22% Increase in Direct Bookings",
                    "description": "Modern responsive web booking engine drove higher direct bookings, saving hundreds of thousands in OTA commission fees."
                }
            ],
            "metrics": [
                {
                    "label": "Overbooking Incidents",
                    "value": "0"
                },
                {
                    "label": "Mobile Check-In Usage",
                    "value": "90%"
                },
                {
                    "label": "Direct Booking Revenue Lift",
                    "value": "+22%"
                }
            ],
            "techStack": [
                "AWS",
                "Node.js",
                "React",
                "Flutter",
                "PostgreSQL",
                "Stripe Hospitality API",
                "BLE Door Lock SDKs",
                "Redis"
            ],
            "faqs": [
                {
                    "question": "Can you integrate with existing hotel door lock systems?",
                    "answer": "Yes. We integrate with major hospitality lock hardware manufacturers (Assa Abloy, dormakaba, Salto) via their native mobile access SDKs."
                },
                {
                    "question": "How do you manage international multi-currency billing?",
                    "answer": "Our platforms support automatic multi-currency dynamic conversion, localized tax structures (VAT, occupancy taxes), and global payment gateways."
                }
            ]
        },
        {
            "id": "telecom-high-tech",
            "slug": "telecom-infrastructure-connectivity",
            "name": "Telecommunications, Media & High-Tech",
            "title": "Telecom Infrastructure & Connectivity",
            "category": "5G Network Orchestration & High-Concurrency APIs",
            "clientName": "NexaWave Networks",
            "location": "Austin, TX (USA)",
            "timeline": "09 Months",
            "image": "images/projects/project-6.jpg",
            "shortDescription": "Orchestrating 5G virtual network functions, high-concurrency subscriber API gateways, and automated multi-cloud telecom SRE.",
            "overview": "Telecommunications and media technology providers operate at massive scale, requiring carrier-grade reliability, ultra-low latency, and elastic multi-cloud orchestration. Vorizo engineers carrier-grade API gateways, cloud-native 5G Network Function Virtualization (NFV) platforms, and real-time streaming architectures that handle millions of simultaneous subscriber sessions without jitter.",
            "tailoredServices": [
                {
                    "title": "5G Network Function Virtualization (NFV)",
                    "description": "Containerizing core network functions on Kubernetes with automated service mesh traffic steering and edge deployment."
                },
                {
                    "title": "High-Concurrency Subscriber Gateways",
                    "description": "Designing Go and Rust microservices capable of handling 200,000+ subscriber authentication requests per second."
                },
                {
                    "title": "Real-Time Telemetry & Network SRE",
                    "description": "24/7 carrier-grade observability dashboards tracking latency, packet loss, and jitter with automated auto-scaling."
                },
                {
                    "title": "High-Tech Engineering Staffing",
                    "description": "Supplying senior distributed systems engineers, Rust/Go developers, Kubernetes CKA architects, and network automation engineers."
                }
            ],
            "challenges": [
                {
                    "title": "Subscriber Provisioning Bottlenecks",
                    "description": "Activating new enterprise fiber and 5G lines took 4 days due to manual network switch configuration."
                },
                {
                    "title": "Network Configuration Drift",
                    "description": "Manual router and switch firmware updates created inconsistent security rules and intermittent outages."
                },
                {
                    "title": "Surge Congestion During Live Broadcasts",
                    "description": "Major live sporting broadcasts overwhelmed video transcoders, causing buffer freezes for 15% of viewers."
                }
            ],
            "solutions": [
                "Deployed automated Infrastructure as Code (Terraform & Ansible) reducing subscriber line provisioning from 4 days to 12 minutes.",
                "Built an automated GitOps configuration manager continuously auditing switch configurations against declarative Git repos.",
                "Engineered auto-scaling edge transcoding pods with Cloudflare and AWS Elemental MediaLive."
            ],
            "results": [
                {
                    "title": "99.999% Carrier-Grade Availability",
                    "description": "Delivered five-nines uptime across core subscriber authentication and billing gateways throughout the contract year."
                },
                {
                    "title": "98% Reduction in Provisioning Time",
                    "description": "Enterprise customer broadband activation time dropped from 4 business days to under 15 minutes."
                },
                {
                    "title": "Sub-50ms Streaming Latency",
                    "description": "Edge transcoders and multi-region CDN caching eliminated live stream buffering for over 2.5M concurrent viewers."
                }
            ],
            "metrics": [
                {
                    "label": "Line Provisioning Speedup",
                    "value": "98%"
                },
                {
                    "label": "Platform Availability SLA",
                    "value": "99.999%"
                },
                {
                    "label": "Concurrent Viewers Handled",
                    "value": "2.5M+"
                }
            ],
            "techStack": [
                "Golang",
                "Kubernetes",
                "Terraform",
                "Ansible",
                "Apache Kafka",
                "Cloudflare CDN",
                "Prometheus",
                "AWS Elemental"
            ],
            "faqs": [
                {
                    "question": "How do you achieve 99.999% availability in telecom platforms?",
                    "answer": "We enforce multi-region active-active deployments, automated health checks, sub-second failover routing, and zero-downtime canary updates."
                },
                {
                    "question": "Can you automate network device provisioning across multi-vendor equipment?",
                    "answer": "Yes. We use vendor-agnostic Ansible playbooks and Terraform providers to configure Cisco, Juniper, Arista, and open-source network hardware uniformly."
                }
            ]
        }
    ]
};

// Expose helper API methods
VORIZO_INDUSTRIES.getAllIndustries = function() {
    return this.industries;
};

VORIZO_INDUSTRIES.getIndustryBySlug = function(slug) {
    if (!slug) return null;
    const cleanSlug = slug.toLowerCase().trim();
    return this.industries.find(ind => 
        ind.slug.toLowerCase() === cleanSlug || 
        ind.id.toLowerCase() === cleanSlug
    ) || null;
};

VORIZO_INDUSTRIES.getIndustryById = function(id) {
    return this.industries.find(ind => ind.id === id) || null;
};

VORIZO_INDUSTRIES.searchIndustries = function(query) {
    if (!query) return this.getAllIndustries();
    const q = query.toLowerCase().trim();
    return this.industries.filter(ind => 
        ind.name.toLowerCase().includes(q) ||
        ind.title.toLowerCase().includes(q) ||
        ind.shortDescription.toLowerCase().includes(q) ||
        ind.techStack.some(t => t.toLowerCase().includes(q))
    );
};

// Support both Browser Window Global and CommonJS/ES Module Export
if (typeof window !== 'undefined') {
    window.VORIZO_INDUSTRIES = VORIZO_INDUSTRIES;
    // Also attach to window.VORIZO_DATA if present
    if (typeof window.VORIZO_DATA !== 'undefined') {
        window.VORIZO_DATA.industries = VORIZO_INDUSTRIES.industries;
        window.VORIZO_DATA.getAllIndustries = VORIZO_INDUSTRIES.getAllIndustries;
        window.VORIZO_DATA.getIndustryBySlug = VORIZO_INDUSTRIES.getIndustryBySlug;
    }
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VORIZO_INDUSTRIES;
}
