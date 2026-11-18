// One recommended YouTube video per study-guide module, plus an alternative.
// Every id was checked against YouTube's oEmbed endpoint (exists and allows embedding) on 2026-11-17.
// These are third-party videos: product names and portal screens may differ slightly from the exam wording.
window.AI103_VIDEOS = {
  overview: {
    main: { id: 'Qt5ZUnl_894', title: 'Microsoft Foundry Overview', channel: 'Lionel Gurret' },
    alt: { id: 'ZLfPCHrRbEw', title: 'What is Microsoft Foundry?', channel: 'Power Tech Speck' },
    why: 'A tour of the model catalog, Agent Service, tools and governance: the map for every other module.'
  },
  foundry: {
    main: { id: 'HnUNi1RMMTA', title: 'Azure OpenAI Deployment Types and Resiliency', channel: "John Savill's Technical Training" },
    alt: { id: 'aO7QjVuZEqI', title: 'Azure OpenAI Deployment Types Explained', channel: "Kirby's Data & SQL Talk" },
    why: 'Global vs Data Zone vs Standard vs Provisioned: when to pick each, and what it means for data residency and throughput.'
  },
  security: {
    main: { id: 'IkDcQvKoQ8k', title: 'Using Keyless Auth with Azure AI Services', channel: 'Microsoft Reactor' },
    alt: { id: 'auDYXaGSiE0', title: 'Azure OpenAI & Managed Identity: A Complete Setup Tutorial', channel: 'Stephen W. Thomas' },
    why: 'Entra ID, managed identity and RBAC roles instead of API keys: the pattern behind most security questions.'
  },
  genai: {
    main: { id: '_vwzQQwzsKg', title: 'Apply prompt engineering with Azure OpenAI Service', channel: 'Microsoft Reactor' },
    alt: { id: 'LYFKAusDqwU', title: "Live coding: Let's try Structured Outputs!", channel: 'Pamela Fox' },
    why: 'System messages, few-shot examples and parameters, then structured outputs that return guaranteed JSON.'
  },
  agents: {
    main: { id: 'MPS5y0IuRi0', title: 'Foundry Agent Service Explained', channel: 'CSharpCorner' },
    alt: { id: 'uAR6xilJSe4', title: 'Integrate custom functions as tools in AI Agent with Azure AI Foundry', channel: 'WafaStudies' },
    why: 'How agents, tools (file search, code interpreter, functions) and conversations fit together in Foundry.'
  },
  search: {
    main: { id: 'fDDabiixHrs', title: 'Azure AI Search Explained: Keyword vs Vector vs Hybrid Search + RAG', channel: 'Karthikeyan Vijayakumar' },
    alt: { id: 'q2_UZZAn6I0', title: 'Azure AI Foundry - RAG with Azure AI Search', channel: 'LinoTV' },
    why: 'Indexes, vectors, hybrid queries and semantic ranking, then how they feed a RAG answer.'
  },
  documents: {
    main: { id: 'h0hNfDEvhV4', title: 'Document Intelligence and Content Understanding - Overview for beginners', channel: 'Dani Kahil' },
    alt: { id: 'WdLMq-mZFng', title: 'Azure Content Understanding in Microsoft Foundry', channel: 'Lionel Gurret' },
    why: 'Prebuilt and custom extraction models versus Content Understanding analyzers, side by side.'
  },
  vision: {
    main: { id: 'l_2eM1-e1e4', title: 'Using AI Vision to Detect Packaging Defects', channel: 'Rob Kerr' },
    alt: { id: 'gigbdHOigtE', title: 'Object Detection using Custom Vision Azure Cognitive Service', channel: 'Sympa Says This!' },
    why: 'An end-to-end Custom Vision object-detection build on a factory scenario, just like the exam questions.'
  },
  language: {
    main: { id: 'ZDaog_MJGS8', title: 'Protect sensitive data with Azure AI Language PII Redaction', channel: 'Microsoft Developer' },
    alt: { id: 'anu8kPVt5PA', title: 'Getting Started with the Azure AI Language Service', channel: 'Douglas Starnes' },
    why: 'PII detection and redaction (categories, masking), plus a tour of the other Language features.'
  },
  speech: {
    main: { id: 'egFzHo57SQg', title: 'Azure AI Speech Explained: Speech-to-Text, Text-to-Speech & Voice AI', channel: 'Skilltech Club' },
    alt: { id: 'XZ3HzYpBTc0', title: 'Introduction to Microsoft Azure Speech Studio', channel: 'Toni Soueid' },
    why: 'Recognition, synthesis, voices and the Speech Studio tools that the exam scenarios use.'
  },
  safety: {
    main: { id: '-vgLI5OSm0w', title: 'Azure AI Content Safety Prompt Shields', channel: 'Microsoft Developer' },
    alt: { id: 'odxAPb0uf34', title: 'Correct hallucinations and ungrounded outputs using Azure AI Content Safety', channel: 'Microsoft Azure' },
    why: 'User-prompt (jailbreak) vs document (indirect) attacks, and how Prompt Shields catches each.'
  },
  evaluation: {
    main: { id: 'JQFyd-RvfGo', title: 'Observe and evaluate agents for quality and safety in Microsoft Foundry', channel: 'Microsoft Azure Developers' },
    alt: { id: 'D8MTd7rFlLY', title: 'AI and Agent Observability in Azure AI Foundry and Azure Monitor (Build 2025)', channel: 'Microsoft Learn' },
    why: 'Evaluators, tracing and monitoring in Foundry: what to measure before and after go-live.'
  }
};
