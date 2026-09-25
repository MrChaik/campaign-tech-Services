export interface Service {
  slug: string;
  title: string;
  tagline: string;
  overviewHeading: string;
  overview: string[];
  benefits: string[];
  seoTitle: string;
  seoDescription: string;
}

export const services: Service[] = [
  {
    slug: "whatsapp-irm",
    title: "WhatsApp / IRM",
    tagline: "Secure messaging and intelligent response management for campaigns.",
    overviewHeading: "What is WhatsApp / IRM?",
    overview: [
      "WhatsApp and Intelligent Response Management (IRM) provide a direct communication channel for reaching audiences through personalized and interactive conversations. It allows campaigns to move beyond one-way messaging and create structured communication experiences.",
      "Campaign teams can send targeted messages, manage responses, automate common conversations, and organize audiences into meaningful segments. This creates a more efficient way to manage communication at scale while keeping interactions relevant.",
    ],
    benefits: [
      "WhatsApp provides a familiar channel for reaching audiences directly and keeping them informed throughout different stages of a campaign.",
      "Audience segmentation allows different groups to receive communication that is relevant to them, while personalized messaging can make each interaction more meaningful.",
      "Automated responses and structured workflows reduce repetitive manual work and help campaign teams manage a growing volume of conversations efficiently.",
    ],
    seoTitle: "WhatsApp / IRM | CampaignTech",
    seoDescription: "Secure messaging and intelligent response management for campaigns.",
  },
  {
    slug: "bulk-sms",
    title: "Bulk SMS",
    tagline: "Reach thousands instantly with reliable, high-volume messaging.",
    overviewHeading: "What is Bulk SMS?",
    overview: [
      "Bulk SMS provides a scalable way to communicate with large audiences through direct mobile messaging. Campaign teams can send important updates, reminders, announcements, and targeted messages without requiring users to open an application or visit a website.",
      "Messages can be personalized and organized around different audience groups, allowing campaigns to manage large communication lists from a centralized system.",
    ],
    benefits: [
      "Bulk SMS helps campaigns distribute important information quickly across large audiences, making it useful for time-sensitive communication and large-scale outreach.",
      "Campaign teams can segment their audience and send different messages based on specific campaign requirements, locations, or audience groups.",
      "Scheduling and delivery tracking make it easier to manage communication at scale while giving teams visibility into campaign messaging activity.",
    ],
    seoTitle: "Bulk SMS | CampaignTech",
    seoDescription: "Reach thousands instantly with reliable, high-volume messaging.",
  },
  {
    slug: "voice-ivr",
    title: "Voice / IVR",
    tagline: "Interactive voice systems for communication, surveys, updates, and support.",
    overviewHeading: "What is Voice / IVR?",
    overview: [
      "Voice and Interactive Voice Response (IVR) systems allow campaigns to communicate with audiences through automated phone interactions. Users can receive information, navigate menus, provide responses, or connect to specific services using their phones.",
      "Campaign teams can create structured call journeys that automate common interactions and collect information through keypad selections, voice responses, or missed-call services.",
    ],
    benefits: [
      "Voice communication provides an additional channel for reaching audiences who may not regularly interact with digital applications or websites.",
      "Automated IVR flows allow campaigns to deliver information and collect responses without requiring teams to manually handle every interaction.",
      "Campaign teams can also track calls, responses, and survey information to better understand audience participation and improve communication workflows.",
    ],
    seoTitle: "Voice / IVR | CampaignTech",
    seoDescription: "Interactive voice systems for communication, surveys, updates, and support.",
  },
  {
    slug: "websites-apps",
    title: "Websites & Apps",
    tagline: "Campaign websites, landing pages, and mobile apps built for better digital engagement.",
    overviewHeading: "What is Websites & Apps?",
    overview: [
      "Websites and applications provide a dedicated digital destination where audiences can access campaign information, participate in activities, submit information, and interact with campaign services.",
      "From campaign websites and landing pages to custom mobile applications, digital experiences can be designed around specific campaign objectives and connected with the systems managing campaign data.",
    ],
    benefits: [
      "A dedicated digital presence gives audiences a central place to find information instead of depending on multiple disconnected communication channels.",
      "Landing pages and mobile experiences can guide users toward specific actions such as registration, participation, feedback, or accessing campaign resources.",
      "Integrated forms, analytics, and backend systems also allow campaign teams to understand digital activity and turn interactions into structured information.",
    ],
    seoTitle: "Websites & Apps | CampaignTech",
    seoDescription:
      "Campaign websites, landing pages, and mobile apps built for better digital engagement.",
  },
  {
    slug: "automation-analytics",
    title: "Automation & Analytics",
    tagline: "Automated workflows and real-time insights for smarter campaign operations.",
    overviewHeading: "What is Automation & Analytics?",
    overview: [
      "Automation and analytics bring campaign workflows, data, reporting, and operational processes together. Instead of relying on repetitive manual tasks, teams can create automated workflows that respond to specific campaign activities and conditions.",
      "Analytics provides a structured view of campaign performance, audience activity, and operational data through dashboards and reports.",
    ],
    benefits: [
      "Automation reduces the amount of repetitive work campaign teams need to handle manually, allowing common processes such as notifications, follow-ups, and routing to happen automatically.",
      "Analytics helps teams understand what is happening across their campaign by bringing important information into centralized dashboards and reports.",
      "Together, automation and analytics create a more organized campaign operation where teams can monitor activity, identify patterns, and make decisions using current campaign data.",
    ],
    seoTitle: "Automation & Analytics | CampaignTech",
    seoDescription: "Automated workflows and real-time insights for smarter campaign operations.",
  },
  {
    slug: "campaign-command-centers",
    title: "Campaign Command Centers",
    tagline: "Centralized dashboards for monitoring communication and campaign operations.",
    overviewHeading: "What is a Campaign Command Center?",
    overview: [
      "A Campaign Command Center provides a centralized view of campaign activities, communication, teams, and operational information. It brings different campaign functions together so teams can monitor activity from one place.",
      "Dashboards can be configured around the information different teams need, providing both high-level visibility and detailed operational data.",
    ],
    benefits: [
      "Campaign teams can monitor ongoing activity without switching between multiple disconnected systems and dashboards.",
      "Real-time information helps teams understand what is happening across different campaign operations, while role-based access allows different users to work with the information relevant to them.",
      "Centralized monitoring also makes coordination easier by giving campaign teams a shared operational view of their activities and performance.",
    ],
    seoTitle: "Campaign Command Centers | CampaignTech",
    seoDescription: "Centralized dashboards for monitoring communication and campaign operations.",
  },
  {
    slug: "digital-forms-surveys",
    title: "Digital Forms & Surveys",
    tagline: "Digital tools for collecting structured feedback and field-level information.",
    overviewHeading: "What are Digital Forms & Surveys?",
    overview: [
      "Digital forms and surveys provide a structured way to collect information directly from audiences, teams, and field operations. They can be designed for registrations, feedback, surveys, applications, data collection, and other campaign requirements.",
      "Responses can be collected digitally and organized into centralized datasets, reducing the need for manual paperwork and data entry.",
    ],
    benefits: [
      "Digital forms make it easier to collect information consistently across different audiences, locations, and campaign activities.",
      "Campaign teams can create customized forms for different purposes and collect responses in a structured format that can be accessed and analyzed more easily.",
      "Real-time submissions also provide better visibility into incoming information, helping teams monitor responses and identify patterns without waiting for manual data consolidation.",
    ],
    seoTitle: "Digital Forms & Surveys | CampaignTech",
    seoDescription: "Digital tools for collecting structured feedback and field-level information.",
  },
  {
    slug: "campaign-data-platforms",
    title: "Campaign Data Platforms",
    tagline: "Centralized technology for organizing campaign data and operational information.",
    overviewHeading: "What is a Campaign Data Platform?",
    overview: [
      "A Campaign Data Platform brings important campaign information into a centralized environment where it can be organized, managed, and accessed by authorized teams.",
      "It provides a structured foundation for storing audience information, operational data, campaign activity, and information collected through different campaign channels.",
    ],
    benefits: [
      "Centralized data reduces the need to manage important campaign information across disconnected spreadsheets, systems, and databases.",
      "Teams can access relevant information through controlled user permissions while maintaining a consistent structure for managing campaign data.",
      "Integrations with other campaign systems also allow information to move between platforms, creating a more connected operational environment.",
    ],
    seoTitle: "Campaign Data Platforms | CampaignTech",
    seoDescription: "Centralized technology for organizing campaign data and operational information.",
  },
  {
    slug: "ai-calling",
    title: "AI Calling",
    tagline: "Automated voice conversations for high-volume audience outreach.",
    overviewHeading: "What is AI Calling?",
    overview: [
      "AI Calling uses artificial intelligence to conduct automated voice conversations with audiences at scale. Instead of relying entirely on manually operated calls, AI-powered systems can handle structured conversations and collect responses automatically.",
      "Campaign teams can define conversation flows, questions, and response requirements while the AI handles interactions according to those workflows.",
    ],
    benefits: [
      "AI Calling allows campaigns to conduct large volumes of voice interactions without requiring teams to manually handle every call.",
      "Automated conversations can collect information, answer predefined questions, conduct surveys, and guide users through specific call journeys.",
      "Responses from these conversations can be captured and organized as structured campaign data, making it easier for teams to understand interactions and manage follow-up activities.",
    ],
    seoTitle: "AI Calling | CampaignTech",
    seoDescription: "Automated voice conversations for high-volume audience outreach.",
  },
  {
    slug: "ai-chat-assistants",
    title: "AI Chat & Assistants",
    tagline: "AI-powered assistants for answering questions and managing conversations.",
    overviewHeading: "What is AI Chat & Assistants?",
    overview: [
      "AI Chat and Assistants provide automated conversational experiences that can answer questions, provide information, and guide users through common requests.",
      "These assistants can operate across digital channels and use predefined information, workflows, and campaign context to provide responses without requiring a team member to manually handle every conversation.",
    ],
    benefits: [
      "AI assistants can provide continuous support for common questions and information requests, helping audiences get answers without waiting for manual responses.",
      "They can also handle repetitive conversations and direct users toward the appropriate information, service, or next step.",
      "By automating common interactions, campaign teams can reduce response workload while maintaining a consistent communication experience across large audiences.",
    ],
    seoTitle: "AI Chat & Assistants | CampaignTech",
    seoDescription: "AI-powered assistants for answering questions and managing conversations.",
  },
  {
    slug: "ai-content-communication",
    title: "AI Content & Communication",
    tagline: "AI-assisted content workflows for high-volume campaign communication.",
    overviewHeading: "What is AI Content & Communication?",
    overview: [
      "AI Content and Communication tools help campaign teams create, adapt, and personalize communication at scale. AI can assist with generating message variations, translating content, and adapting communication for different audiences.",
      "This allows teams to produce more communication while maintaining a consistent structure and messaging approach.",
    ],
    benefits: [
      "Creating large volumes of communication manually can take significant time, especially when the same information needs to be adapted for different audiences and channels.",
      "AI-assisted workflows can help teams generate message variations and adapt existing content for different communication requirements.",
      "Translation and personalization capabilities also make it easier to create communication that is appropriate for different languages, audience groups, and campaign contexts.",
    ],
    seoTitle: "AI Content & Communication | CampaignTech",
    seoDescription: "AI-assisted content workflows for high-volume campaign communication.",
  },
  {
    slug: "ai-sentiment-feedback",
    title: "AI Sentiment & Feedback",
    tagline: "Turn large volumes of audience feedback into structured insights.",
    overviewHeading: "What is AI Sentiment & Feedback?",
    overview: [
      "AI Sentiment and Feedback tools analyze large volumes of responses, comments, survey results, and other audience feedback to identify patterns within the information.",
      "Instead of manually reviewing every response, AI can organize feedback into categories and identify recurring themes, sentiment patterns, and topics.",
    ],
    benefits: [
      "Large campaigns can generate significant amounts of feedback that can be difficult to review manually. AI helps organize this information into a more manageable structure.",
      "Sentiment analysis can identify broad patterns in how audiences are responding, while topic detection can highlight subjects appearing frequently across responses.",
      "Automated summaries give campaign teams a quicker way to understand large datasets and identify areas that may require further attention or communication.",
    ],
    seoTitle: "AI Sentiment & Feedback | CampaignTech",
    seoDescription: "Turn large volumes of audience feedback into structured insights.",
  },
  {
    slug: "ai-data-intelligence",
    title: "AI Data Intelligence",
    tagline: "AI-powered analysis that turns campaign data into actionable insights.",
    overviewHeading: "What is AI Data Intelligence?",
    overview: [
      "AI Data Intelligence uses artificial intelligence to analyze campaign datasets and identify patterns, relationships, and useful information within them.",
      "It can process large amounts of campaign data and help organize complex information into insights that teams can understand and use in their day-to-day operations.",
    ],
    benefits: [
      "Campaigns generate information across communication channels, audience interactions, forms, websites, and operational systems. AI can help bring meaning to this information by identifying patterns across different datasets.",
      "Teams can use automated analysis to explore audience behavior, identify recurring trends, and understand campaign activity without manually reviewing every dataset.",
      "Automated reporting can also reduce the time required to turn raw campaign data into information that teams can use for planning and monitoring.",
    ],
    seoTitle: "AI Data Intelligence | CampaignTech",
    seoDescription: "AI-powered analysis that turns campaign data into actionable insights.",
  },
  {
    slug: "ai-workflow-automation",
    title: "AI Workflow Automation",
    tagline: "Automate repetitive campaign operations with intelligent workflows.",
    overviewHeading: "What is AI Workflow Automation?",
    overview: [
      "AI Workflow Automation combines intelligent decision-making with automated campaign processes. It allows repetitive operational tasks to be triggered, routed, and completed based on predefined rules and campaign conditions.",
      "Instead of requiring teams to manually monitor every task, automated workflows can manage routine operations and initiate the appropriate next step.",
    ],
    benefits: [
      "Campaign operations often involve repetitive tasks such as routing leads, sending notifications, managing responses, and assigning activities to different teams.",
      "AI-powered workflows can automate these processes and reduce the amount of manual coordination required.",
      "This allows campaign teams to create more consistent processes, respond to activities faster, and maintain visibility across ongoing operations.",
    ],
    seoTitle: "AI Workflow Automation | CampaignTech",
    seoDescription: "Automate repetitive campaign operations with intelligent workflows.",
  },
  {
    slug: "ai-voice-ivr",
    title: "AI Voice & IVR",
    tagline: "Intelligent voice systems that automate conversations, routing, and responses.",
    overviewHeading: "What is AI Voice & IVR?",
    overview: [
      "AI Voice and IVR combine traditional interactive voice systems with AI-powered conversational capabilities. They allow audiences to interact with automated voice systems using natural conversations or structured IVR menus.",
      "Campaign teams can create intelligent voice journeys that answer questions, collect information, route calls, and manage different types of interactions automatically.",
    ],
    benefits: [
      "AI-powered voice systems can handle a high volume of conversations while reducing the need for teams to manually manage every call.",
      "Smart call routing can direct users toward the appropriate service or workflow based on their responses, while voice surveys can collect structured information directly through phone conversations.",
      "Responses can then be analyzed and organized, allowing campaign teams to understand interactions and use the collected information across their broader campaign operations.",
    ],
    seoTitle: "AI Voice & IVR | CampaignTech",
    seoDescription: "Intelligent voice systems that automate conversations, routing, and responses.",
  },
];

export function getService(slug: string | undefined) {
  return services.find((service) => service.slug === slug);
}
