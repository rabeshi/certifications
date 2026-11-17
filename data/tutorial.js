// AI-103 study guide. Module ids match the `module` field on each question in data/questions.js,
// so every module can launch a practice session on exactly its own questions.
// Inline formatting: `code` and **bold** are rendered by js/app.js.
window.AI103_TUTORIAL = [
  {
    id: 'overview',
    badge: 'GO',
    title: 'Start here: how the pieces fit',
    tagline: 'A 5-minute map of Microsoft Foundry and the Azure AI services the exam expects you to pick between.',
    intro: 'AI-103 tests whether you can build AI apps and agents on Azure: choose the right service for a scenario, wire it up securely, ground it in your data, keep it safe, and prove it works. Almost every question is a **"which service / which setting"** decision, so this guide is organised around what each service is for and the clue words that point to it.',
    diagram: {
      title: 'How a Foundry solution is assembled',
      steps: [
        { t: 'Foundry resource', d: 'One Azure resource (kind `AIServices`). Holds keys, networking and billing.' },
        { t: 'Projects', d: 'Workspaces inside the resource. Agents, evaluations and connections live here.' },
        { t: 'Model deployments', d: 'Models from the catalog deployed as Standard, Global Standard or Provisioned.' },
        { t: 'Agents + tools', d: 'Instructions + model + tools (File search, AI Search, Bing, Code interpreter…).' },
        { t: 'Safety, evaluation, tracing', d: 'Guardrails on every step; evaluators and OpenTelemetry traces prove quality.' }
      ]
    },
    services: [
      ['Microsoft Foundry', 'The platform: model catalog, deployments, projects, agents, evaluations, guardrails.'],
      ['Foundry Agent Service', 'Hosted agents with threads, memory, tools and multi-agent workflows.'],
      ['Azure AI Search', 'Enterprise retrieval: indexes, vector + hybrid + semantic search for RAG.'],
      ['Azure Content Understanding', 'Generative extraction from documents, images, audio and video into a schema.'],
      ['Azure Document Intelligence', 'OCR, layout, tables and prebuilt models (invoice, receipt, ID).'],
      ['Azure Vision / Custom Vision', 'Image analysis, OCR on images, custom classifiers and object detectors.'],
      ['Azure Language / Translator', 'Sentiment, entities, PII redaction, custom NER, translation.'],
      ['Azure Speech', 'Speech to text, text to speech, speech translation, custom speech.'],
      ['Azure AI Content Safety', 'Harm detection, Prompt Shields, blocklists, protected material, groundedness.']
    ],
    points: [
      { h: 'How to use this app', items: [
        'Read a module, then press **Practice this topic** to drill only its questions in Learn mode.',
        'Learn mode checks each answer immediately and explains every option. The score bar at the top tracks your accuracy and streak.',
        'Exam mode hides answers until you finish, has an optional time limit and gives a per-topic breakdown. Aim for 80% or more before booking. Microsoft\'s pass mark is 700 on a 1–1000 scaled score.',
        'Missed and flagged questions are remembered, so use **Review missed / flagged** in Learn mode to close gaps.'
      ]},
      { h: 'Naming you will see in questions', items: [
        '**Microsoft Foundry** is the platform formerly called Azure AI Foundry / Azure AI Studio.',
        'Single-purpose services are now branded **"… in Foundry Tools"**, e.g. *Azure Speech in Foundry Tools*, *Azure Vision in Foundry Tools*, *Azure Language in Foundry Tools*.',
        'Older wording still appears in some questions: *Cognitive Services*, *Azure AI services*, *Azure OpenAI*. Treat them as the same family.'
      ]}
    ],
    tips: [
      ['"single key and endpoint for multiple services", "consolidate billing"', 'A multi-service resource: Foundry / `CognitiveServices` kind, not a single-service kind.'],
      ['"minimize development effort"', 'Prefer a prebuilt model or built-in tool over custom training or custom code.'],
      ['"principle of least privilege", "keyless"', 'Managed identity + the narrowest data-plane RBAC role (Reader / User, not Contributor / Owner).'],
      ['"current / public / recent information"', 'Grounding with Bing Search. "Uploaded during the conversation" → File search.']
    ],
    figures: [],
    search: 'Microsoft Foundry overview'
  },
  {
    id: 'foundry',
    badge: 'PD',
    title: 'Plan & deploy in Foundry',
    tagline: 'Resources, projects, connections, deployment types, quotas, containers.',
    intro: 'Before you build anything you choose a resource type, create a project, and deploy a model. Questions here test deployment types, sharing resources between projects, handling throttling, and running services in containers.',
    diagram: {
      title: 'Picking a deployment type',
      steps: [
        { t: 'Standard', d: 'Pay per token, regional data processing. Default choice.' },
        { t: 'Global Standard', d: 'Pay per token, routed globally for highest availability and quota.' },
        { t: 'Data Zone', d: 'Pay per token, processing stays in a geography (EU / US).' },
        { t: 'Provisioned (PTU)', d: 'Reserved throughput for predictable latency at steady high volume.' }
      ]
    },
    services: [
      ['Model catalog', 'Compare models with leaderboards and model cards before deploying.'],
      ['Serverless (standard) deployment', 'Pay-as-you-go API, no infrastructure to manage.'],
      ['Managed compute deployment', 'Dedicated VMs for models that need it. You manage capacity.'],
      ['Connections', 'Share an AI Search, Key Vault, storage or another model resource with every app in a project.'],
      ['Model router', 'One deployment that sends easy prompts to small models and hard ones to reasoning models.'],
      ['Containers', 'Run Speech / Language / Vision models on-prem or at the edge, still billed to Azure.']
    ],
    points: [
      { h: 'Resources and connections', items: [
        'A **Foundry resource** gives one endpoint and key for many capabilities (OpenAI models, Speech, Language, Vision).',
        'To reuse the same model or search service across several apps or agents, **create a connection** in the project and reference it. Don\'t copy keys into each app.',
        'Creating a resource through ARM is an idempotent `PUT` to the full resource URI. With the CLI: `az cognitiveservices account create --kind OpenAI --encryption …` for customer-managed keys.',
        'An SDK client needs the **endpoint**, a **credential** (key or Entra ID) and the **deployment name**.'
      ]},
      { h: 'Quotas, limits and errors', items: [
        '**HTTP 429** = rate limit. Retry with **exponential backoff and jitter**, or request more quota or use PTU.',
        '**HTTP 400 file size exceeded** = split content into smaller files before upload.',
        'Version upgrade policy controls automatic model version upgrades on a deployment.'
      ]},
      { h: 'Containers', items: [
        '`docker run` needs `Eula=accept`, `Billing={ENDPOINT_URI}` and `ApiKey={API_KEY}`. Containers still report usage to Azure for billing.',
        'Pull images from the **Microsoft Container Registry (mcr.microsoft.com)**, not Docker Hub.',
        '`/status` checks the API key is valid without a query; `/swagger` documents the endpoints.'
      ]}
    ],
    tips: [
      ['"reuse the model configuration across applications in the project"', 'Create a connection to the model resource.'],
      ['"evaluate models before choosing"', 'Model catalog leaderboards and model cards.'],
      ['"no infrastructure management, pay per use"', 'Serverless / standard deployment.'],
      ['"intermittent 429 under load"', 'Exponential backoff with jitter.']
    ],
    figures: [
      { src: 'assets/questions/q160-p170-8afc44f8.png', caption: 'Running a Language container with docker run: Eula, Billing and ApiKey are required.', q: 160 }
    ],
    search: 'Microsoft Foundry deployment types'
  },
  {
    id: 'security',
    badge: 'SI',
    title: 'Security, identity & CI/CD',
    tagline: 'Managed identities, RBAC, Key Vault, networking and GitHub Actions without secrets.',
    intro: 'The exam strongly prefers **keyless** designs. If an option stores a key, a SAS token or a client secret and another option uses Microsoft Entra ID with a managed identity, the managed identity is almost always right.',
    diagram: {
      title: 'Keyless access chain',
      steps: [
        { t: 'App / agent / project', d: 'Runs with a system- or user-assigned managed identity.' },
        { t: 'Microsoft Entra ID', d: 'Issues a token. In code: `DefaultAzureCredential()`.' },
        { t: 'RBAC role assignment', d: 'Narrowest data-plane role, e.g. Storage Blob Data Reader.' },
        { t: 'Target resource', d: 'Storage, Key Vault, AI Search or a model deployment.' }
      ]
    },
    services: [
      ['DefaultAzureCredential', 'One credential class that works locally (developer sign-in) and in Azure (managed identity).'],
      ['System-assigned managed identity', 'Tied to one resource or project. Deleted with it. Best for least privilege.'],
      ['User-assigned managed identity', 'Standalone identity shared by several resources.'],
      ['Azure Key Vault', 'Secrets and keys. Grant **Key Vault Secrets User** to read secrets.'],
      ['Private endpoints / VNet rules', 'Keep traffic off the public internet; restrict which networks can call the service.'],
      ['OIDC + workload identity federation', 'GitHub Actions gets short-lived Entra tokens, so no stored secrets.']
    ],
    points: [
      { h: 'Least-privilege roles to recognise', items: [
        '**Storage Blob Data Reader**: read blobs only. **Contributor** adds write/delete, so it is too much if you only read.',
        '**Key Vault Secrets User**: read secret values. Prefer RBAC over legacy access policies.',
        '**Cognitive Services User / Azure AI User**: call models and services with Entra ID.',
        'Assign the identity at the **narrowest scope** that works: project level rather than the whole Foundry resource.'
      ]},
      { h: 'Connections and keys', items: [
        'A project connection to Key Vault in Bicep uses `category: \'AzureKeyVault\'` and `authType: \'AccountManagedIdentity\'`.',
        'An OpenAPI tool that needs an API key should **reference a project connection** that stores the key, not the key in code.',
        'Every service has two keys so you can **rotate without downtime**: switch apps to key 2, regenerate key 1.',
        'Customer-managed keys (CMK) use the `encryption` property with `keySource: Microsoft.KeyVault`.'
      ]},
      { h: 'CI/CD with GitHub Actions', items: [
        'Authenticate with the **Azure Login action using OpenID Connect (OIDC)**, backed by **workload identity federation**.',
        'PATs, publish profiles and stored client secrets are long-lived credentials, which the exam treats as wrong.'
      ]}
    ],
    tips: [
      ['"avoid storage account keys or SAS"', 'Managed identity + Storage Blob Data Reader.'],
      ['"passwordless" / "eliminate long-lived credentials" in a pipeline', 'OIDC Azure Login + workload identity federation.'],
      ['"only specific Azure networks can access the service"', 'Virtual network rules / private endpoint.'],
      ['"detect suspicious sign-in, investigate incidents"', 'Microsoft Defender for Cloud / Sentinel integration.']
    ],
    figures: [],
    search: 'Azure AI services managed identity RBAC'
  },
  {
    id: 'genai',
    badge: 'GA',
    title: 'Generative AI models & prompting',
    tagline: 'Responses API, parameters, structured output, multimodal input, image and video generation.',
    intro: 'These questions check that you can call a deployed model correctly and steer its output: prompt design, sampling parameters, structured JSON, images in the input, and generating or editing images and video.',
    diagram: {
      title: 'Anatomy of a model call',
      steps: [
        { t: 'System message', d: 'Role, scope and rules. The first place to restrict what the model answers.' },
        { t: 'Few-shot examples', d: 'Show input → output pairs to raise accuracy on a task like classification.' },
        { t: 'User content', d: 'Text and images as typed parts: `type: text`, `type: image_url`.' },
        { t: 'Parameters', d: '`temperature`, `max_tokens`, reasoning `effort`, `response_format`.' },
        { t: 'Output', d: 'Free text or schema-validated JSON (structured outputs).' }
      ]
    },
    services: [
      ['Chat / reasoning models (GPT family)', 'Text generation, reasoning, tool use. Called via Responses or Chat Completions API.'],
      ['Image generation (gpt-image, DALL·E)', 'Create images from prompts. Edit with a **mask (inpainting)** to change only one area.'],
      ['Video generation (Sora)', '`client.videos.create(...)`, poll with `retrieve`, then `download_content`.'],
      ['Realtime models', 'Low-latency speech-in / speech-out conversations.'],
      ['Fine-tuning', 'Adapt a model to a style or format. The training data must pass automatic RAI checks.']
    ],
    points: [
      { h: 'Parameters that come up repeatedly', items: [
        '**temperature**: lower (0) = more deterministic and consistent; higher = more varied and creative.',
        '**max_tokens**: caps output length. It doesn\'t fix accuracy, but raising it can stop truncated answers.',
        '**reasoning effort** (`"high"`): more thinking for harder problems, at higher latency and cost.',
        '**Structured outputs** (`response_format` with a JSON schema, `strict`): stops unexpected fields breaking downstream code.'
      ]},
      { h: 'Prompt techniques', items: [
        'Restrict scope (e.g. "answer only about Contoso products") in the **system message**.',
        'Improve classification accuracy with **few-shot examples** in the prompt.',
        'Improve completeness with a **reflection / self-check pass** before returning the answer.',
        'Rephrasing the user question is weaker than changing the system message.'
      ]},
      { h: 'Images in and out', items: [
        'Multimodal input must be sent as a **content array** with `type: text` and `type: image_url` items, not a URL pasted into text.',
        'To remove one object (a logo, a car) while keeping the rest of the image, use **mask-based inpainting**.'
      ]}
    ],
    tips: [
      ['"identical prompts must return consistent responses"', 'Decrease temperature (toward 0).'],
      ['"response contains unexpected JSON fields"', 'Structured outputs with a strict JSON schema.'],
      ['"remove only the logo / vehicle, preserve everything else"', 'Mask-based inpainting edit.'],
      ['"simple FAQs plus some hard reasoning, optimise cost"', 'Model router.']
    ],
    figures: [
      { src: 'assets/questions/q154-p163-9cd8f000.png', caption: 'A chat completion call: the system message sets behaviour and the user message carries the question.', q: 154 }
    ],
    search: 'Azure OpenAI Responses API structured outputs'
  },
  {
    id: 'agents',
    badge: 'AG',
    title: 'Foundry Agent Service',
    tagline: 'Agents, threads, memory, built-in tools and multi-agent workflows.',
    intro: 'An agent is a model plus instructions plus tools, running on threads (conversations). The exam mostly asks you to **match a requirement to the right tool**, choose how state is remembered, and design workflows with approvals.',
    diagram: {
      title: 'One agent run',
      steps: [
        { t: 'User message', d: 'Added to a thread (the conversation).' },
        { t: 'Agent reasons', d: 'Model + instructions decide whether to call a tool. `tool_choice` can force it.' },
        { t: 'Tool call', d: 'File search, AI Search, Bing, Code interpreter, OpenAPI, MCP, function…' },
        { t: 'Tool response', d: 'Results return to the model and are checked by guardrails.' },
        { t: 'Answer', d: 'Grounded reply with citations. The run is traced end to end.' }
      ]
    },
    services: [
      ['File search', 'Search documents **uploaded to the agent or during the conversation**.'],
      ['Azure AI Search tool', 'Search a **large, existing enterprise index** (millions of docs).'],
      ['Grounding with Bing Search', '**Current, public web** information: news, weather, recent court decisions.'],
      ['Code interpreter', 'Run Python: analyse spreadsheets and CSVs, do calculations, **draw charts**.'],
      ['Computer use', 'Operate a UI or website that has no API, e.g. a legacy portal.'],
      ['Microsoft Fabric', 'Query enterprise data in Fabric through a data agent.'],
      ['OpenAPI / function / MCP tools', 'Call your own APIs or an MCP server. Authenticate through a project connection.']
    ],
    points: [
      { h: 'Remembering things', items: [
        '**Conversation history / thread**: context within one conversation.',
        '**Agent memory with persistent storage**: preferences that survive **across separate sessions**.',
        'Orchestration-managed session context and prompt caches do not persist user preferences long-term.'
      ]},
      { h: 'Controlling tools', items: [
        '`tool_choice: "required"` forces the agent to call a tool instead of answering from the base model.',
        'To force a specific tool type, e.g. an MCP knowledge base: `tool_choice` with `{"type": "mcp"}`.',
        'Give each client its own **agent identity** rather than a shared project identity or keys in prompts.'
      ]},
      { h: 'Workflows (visual builder / YAML)', items: [
        '**Sequential** template: predictable, node-by-node execution.',
        '**Group chat**: dynamic routing between agents. **Human-in-the-loop**: pauses for input.',
        'Use an **Ask a question** node (`type: ask_question`) for approvals, then a **Condition** such as `approval == "approved"`.'
      ]}
    ],
    tips: [
      ['"documents uploaded during the conversation"', 'File search.'],
      ['"millions of documents already indexed"', 'Azure AI Search tool.'],
      ['"analyze spreadsheets", "generate charts", "calculations"', 'Code interpreter.'],
      ['"interact with a website that has no API"', 'Computer use.'],
      ['"remember preferences across sessions"', 'Agent memory with persistent storage.']
    ],
    figures: [
      { src: 'assets/questions/q149-p157-573e9acc.png', caption: 'Running an agent on a thread with the Foundry SDK: create_and_process waits for the run to finish.', q: 149 }
    ],
    search: 'Foundry Agent Service tools'
  },
  {
    id: 'search',
    badge: 'RS',
    title: 'Azure AI Search & RAG',
    tagline: 'Indexes, indexers, skillsets, vector/hybrid/semantic search, knowledge stores and keys.',
    intro: 'Retrieval-Augmented Generation (RAG) means retrieving your own content and giving it to the model as context. Azure AI Search is the retrieval engine. Know how content gets **into** an index, how to **query** it well, and how to **secure** it.',
    diagram: {
      title: 'The RAG pipeline',
      steps: [
        { t: 'Data source', d: 'Blob Storage, SQL, Cosmos DB, SharePoint…' },
        { t: 'Indexer + skillset', d: 'Crack documents, OCR, layout parsing, chunking, embeddings.' },
        { t: 'Index', d: 'Searchable, filterable and vector fields.' },
        { t: 'Query', d: 'Hybrid (keyword + vector) with semantic ranker; security filters.' },
        { t: 'Model', d: 'Top chunks added to the prompt, so the answer cites its sources.' }
      ]
    },
    services: [
      ['Indexer', 'Pulls data on a schedule from a supported source into an index.'],
      ['Skillset', 'AI enrichment during indexing: OCR, entity extraction, layout, embeddings.'],
      ['Integrated vectorization', 'Chunk and embed during indexing, and vectorize queries automatically.'],
      ['Semantic ranker', 'Re-ranks top results by meaning; adds captions and answers.'],
      ['Knowledge store', 'Saves enriched output to Storage as **projections** for other tools.'],
      ['Agentic retrieval / knowledge sources', 'Lets agents plan multi-step queries over indexes.']
    ],
    points: [
      { h: 'Ingestion choices', items: [
        'Scanned PDFs with tables losing their structure: use **advanced data parsing / layout** (Document Intelligence layout skill) when re-ingesting.',
        'Page-level citations with bounding polygons need layout output that keeps page numbers and coordinates.',
        'Knowledge store projections: **Object** = JSON hierarchy, **Table** = flattened rows (e.g. extracted text), **File** = images.'
      ]},
      { h: 'Query quality and cost', items: [
        '**Hybrid search** (keyword + vector) + **semantic ranker** usually gives the most relevant results.',
        'Prompt size and cost doubled but quality unchanged? **Retrieve fewer chunks** first.',
        'Answers not grounded in the documents? Check **groundedness**, retrieval quality and chunking.'
      ]},
      { h: 'Security', items: [
        '**Admin keys** have full read/write. **Query keys** are read-only, so give apps query keys.',
        'Compromised query key: **add a new query key → switch the app → delete the old key** (no downtime).',
        'Document-level access: add a security field and apply **security filters** at query time (or use Entra-based permission filtering).',
        'Share one Search service across agents through a **project connection**.'
      ]}
    ],
    tips: [
      ['"tables, headings and page numbers lost during ingestion"', 'Advanced data parsing / layout.'],
      ['"users should only have read-only access"', 'Query key, not admin key.'],
      ['"JSON data" vs "extracted text" in a knowledge store', 'Object projection vs Table projection.'],
      ['"compare documents for semantic similarity"', 'Embeddings model + vector search.']
    ],
    figures: [],
    search: 'Azure AI Search RAG overview'
  },
  {
    id: 'documents',
    badge: 'DC',
    title: 'Document Intelligence & Content Understanding',
    tagline: 'OCR, layout, prebuilt models, custom extraction and analyzers for any content type.',
    intro: 'Both services turn unstructured files into structured data. **Document Intelligence** is the specialist for documents (OCR, layout, prebuilt and custom models). **Content Understanding** is the newer generative service: you define fields, and it extracts or generates values from documents, images, audio and **video**.',
    diagram: {
      title: 'Choosing a document model',
      steps: [
        { t: 'prebuilt-read', d: 'Just the text (printed and handwritten).' },
        { t: 'prebuilt-layout', d: 'Text + tables + selection marks + structure (and barcodes / QR with add-ons).' },
        { t: 'Prebuilt domain', d: 'Invoice, receipt, ID document, business card…' },
        { t: 'Custom model', d: 'Template (fixed layout) or neural (varied layouts). Combine them with a composed model.' }
      ]
    },
    services: [
      ['Document Intelligence: read', 'OCR only. The cheapest way to get text.'],
      ['Document Intelligence: layout', 'Tables, multipage tables, columns, paragraphs, figures.'],
      ['Document Intelligence: prebuilt invoice / ID', 'Known fields without training.'],
      ['Content Understanding analyzers', 'Schema of fields, each with a method: **extract**, **generate** or **classify**.'],
      ['Content Understanding modes', '**Standard** for single-file extraction; **Pro** for multi-file reasoning across documents.']
    ],
    points: [
      { h: 'Content Understanding analyzers', items: [
        'Field value types: `string`, `number`, `date`, `boolean`, `table`, `group` (nested object).',
        'Method **extract** pulls values that are in the content. **generate** creates new text (e.g. "describe the colour scheme"). **classify** picks from fixed categories.',
        'Enable `estimateFieldSourceAndConfidence` to get source grounding and confidence scores for each field.',
        'For video, enable **segmentation** so fields are produced per segment.'
      ]},
      { h: 'Picking the right tool', items: [
        'Varied layouts across vendors call for a **prebuilt** or **neural** model rather than a template.',
        'Tables that span pages call for **layout** (or a prebuilt model built on it).',
        'Extract text from PDFs **and** run sentiment: Document Intelligence → Azure Language.'
      ]}
    ],
    tips: [
      ['"tables", "selection marks", "document structure"', 'prebuilt-layout.'],
      ['"describe / summarise" a field that isn\'t written in the file', 'Content Understanding field with method **generate**.'],
      ['"one pipeline per file vs reasoning across several files"', 'Single-file standard mode vs multi-file pro mode.'],
      ['"confidence and source for each field"', '`estimateFieldSourceAndConfidence`.']
    ],
    figures: [],
    search: 'Azure Content Understanding analyzers'
  },
  {
    id: 'vision',
    badge: 'VI',
    title: 'Vision & Custom Vision',
    tagline: 'Image analysis, OCR on images, and training your own classifiers and detectors.',
    intro: 'Use **Azure Vision** prebuilt image analysis when generic features are enough (captions, tags, objects, text, brands). Use **Custom Vision** when the things you need to recognise are specific to your business, like your own faulty components.',
    diagram: {
      title: 'Custom Vision workflow',
      steps: [
        { t: 'Create a project', d: 'Choose Classification or Object Detection and a domain.' },
        { t: 'Upload and tag images', d: 'Label examples of each class (e.g. faulty / OK).' },
        { t: 'Train', d: 'Quick or advanced training creates an iteration.' },
        { t: 'Evaluate', d: 'Precision, recall, mAP at a probability threshold.' },
        { t: 'Publish / export', d: 'Prediction endpoint, or a compact model for devices.' }
      ]
    },
    services: [
      ['Image Analysis', 'Captions, dense captions, tags, objects, people, smart crops.'],
      ['Read (OCR)', 'Text from images and photos. Lowest-effort OCR for scanned images.'],
      ['Custom Vision: classification', '**Multiclass** = one tag per image; **multilabel** = several tags.'],
      ['Custom Vision: object detection', 'Finds **where** objects are with bounding boxes.'],
      ['Compact domains', 'Exportable models for iOS (Core ML), Android (TensorFlow) and edge devices.']
    ],
    points: [
      { h: 'Metrics on the Performance tab', items: [
        '**Precision** = TP ÷ (TP + FP): of what was predicted, how much was right. 100% precision means **0 false positives**.',
        '**Recall** = TP ÷ (TP + FN): of what exists, how much was found.',
        '**mAP** (object detection) summarises precision across recall levels.',
        'The probability threshold trades precision against recall.'
      ]},
      { h: 'Image Analysis API details', items: [
        'Brands (logos) come back with a name, a **confidence** and a **rectangle** `x, y, w, h`, where x and y are the **top-left** corner.',
        'Request features are chosen with `visualFeatures=` (e.g. `tags`, `objects`, `description`) on a `GET`/`POST` to `/analyze`.'
      ]}
    ],
    tips: [
      ['"components specific to your business"', 'Custom Vision, not prebuilt analysis.'],
      ['"deploy in an iOS app / offline"', 'A compact domain (e.g. General (compact)).'],
      ['"each image contains either a cat or a dog"', 'Classification, multiclass.'],
      ['"locate items in the image"', 'Object detection.']
    ],
    figures: [
      { src: 'assets/questions/q143-p149-5c85139b.png', caption: 'Custom Vision portal, Performance tab: precision, recall and mAP for a trained iteration.', q: 143 },
      { src: 'assets/questions/q117-p119-1303c770.png', caption: 'Reading brand detections: name, confidence and the bounding rectangle.', q: 117 }
    ],
    search: 'Azure AI Custom Vision evaluate classifier'
  },
  {
    id: 'language',
    badge: 'LT',
    title: 'Language & Translator',
    tagline: 'Sentiment, entities, PII redaction, custom NER, translation and accessibility.',
    intro: 'Azure Language bundles many text-analysis features behind one endpoint. Questions usually ask which feature fits, or what a short code snippet will return.',
    diagram: {
      title: 'Text in, insight out',
      steps: [
        { t: 'Detect language', d: 'Which language is this?' },
        { t: 'Analyse', d: 'Sentiment, key phrases, entities, linked entities.' },
        { t: 'Protect', d: 'PII detection and redaction before text reaches a model.' },
        { t: 'Customise', d: 'Custom NER, custom classification, CLU, question answering.' }
      ]
    },
    services: [
      ['Sentiment analysis / opinion mining', 'Positive, negative or neutral, per sentence and per aspect.'],
      ['Named entity recognition (NER)', 'People, places, organisations, dates.'],
      ['Entity linking', 'Links entities to **Wikipedia**. `matches` gives the offset where each entity appears.'],
      ['PII detection', 'Finds and redacts personal data. Filter with `piiCategories` and choose a redaction policy such as an entity mask.'],
      ['Custom NER', 'Train your own entity types from labelled examples.'],
      ['Translator', 'Text and document translation across 100+ languages.'],
      ['Immersive Reader', 'Read-aloud and reading aids for users with dyslexia or other learning differences.']
    ],
    points: [
      { h: 'Reading code questions', items: [
        'Entity linking returns a **Wikipedia URL**, not a Bing link, and does not detect language unless you call that feature.',
        'If PII detection is limited to `["Person", "PhoneNumber"]`, emails and ID numbers are **not** detected and stay in the text.',
        '`recognize_entities` returns **entities**, not key phrases, even when the variable is called `key_words`.'
      ]},
      { h: 'Deploying Language', items: [
        'Language can run in **containers**: pull from MCR, run with billing endpoint and key.',
        'To restrict access to specific networks, use **virtual network rules** / private endpoints.'
      ]}
    ],
    tips: [
      ['"redact personal data before sending to a model"', 'PII detection with redaction.'],
      ['"users with dyslexia", "reading comprehension"', 'Immersive Reader.'],
      ['"press releases in PDF → sentiment"', 'Document Intelligence for text, then Language for sentiment.']
    ],
    figures: [
      { src: 'assets/questions/q151-p159-7aa51bd1.png', caption: 'Entity linking with TextAnalyticsClient.recognize_linked_entities.', q: 151 },
      { src: 'assets/questions/q127-p131-07f38e27.png', caption: 'PII redaction request: piiCategories limits what is detected; the redaction policy controls masking.', q: 127 }
    ],
    search: 'Azure AI Language PII detection'
  },
  {
    id: 'speech',
    badge: 'SP',
    title: 'Speech',
    tagline: 'Speech to text, text to speech, translation, custom speech and realtime voice.',
    intro: 'Pick the Speech feature by asking two things: **is audio streaming live or already recorded**, and **are you turning audio into text or text into audio**?',
    diagram: {
      title: 'Choosing a speech feature',
      steps: [
        { t: 'Live audio → text', d: 'Real-time speech to text (seconds of latency).' },
        { t: 'Recorded files → text', d: 'Batch transcription (large volumes, async).' },
        { t: 'Text → audio', d: 'Text to speech with neural voices and SSML.' },
        { t: 'Audio → other language', d: 'Speech translation.' },
        { t: 'Live voice conversation', d: 'Realtime model / voice agent for low-latency, two-way speech.' }
      ]
    },
    services: [
      ['Real-time speech to text', 'Streaming transcription for live calls and captions.'],
      ['Batch transcription', 'Recorded audio at scale. Not for live scenarios.'],
      ['Custom speech', 'Fine-tune STT for vocabulary, accents or noise. Deploy to a custom endpoint.'],
      ['Language identification', 'Continuous LID for audio that switches language mid-stream.'],
      ['Text to speech + SSML', 'Control pronunciation (`phoneme`, `say-as`, lexicons), rate, pitch and voice.'],
      ['Speech translation', 'Spoken input translated to text or speech in other languages.']
    ],
    points: [
      { h: 'Things that trip people up', items: [
        'Transcripts that mix English and Spanish need **continuous language identification** with candidate languages.',
        'Words mispronounced by TTS are fixed with **SSML** (phoneme or a custom lexicon), not by retraining.',
        'After fine-tuning custom speech, compare **word error rate (WER)** against the baseline model.'
      ]}
    ],
    tips: [
      ['"transcripts within a few seconds of the audio stream"', 'Real-time speech to text.'],
      ['"recorded audio files overnight"', 'Batch transcription.'],
      ['"read text aloud, fix pronunciation"', 'Text to speech with SSML.'],
      ['"natural, low-latency voice conversation with an agent"', 'Realtime model.']
    ],
    figures: [],
    search: 'Azure AI Speech service overview'
  },
  {
    id: 'safety',
    badge: 'CS',
    title: 'Content Safety & Responsible AI',
    tagline: 'Harm categories, Prompt Shields, guardrails, blocklists and the responsible AI principles.',
    intro: 'Azure AI Content Safety screens text and images going into and out of your models. In Foundry the same checks are configured as **guardrails** on a model deployment or agent, with an action of **Annotate** (flag only) or **Block** (stop it).',
    diagram: {
      title: 'Where guardrails apply in an agent',
      steps: [
        { t: 'User input', d: 'Prompt Shields for user prompts (jailbreaks), harm filters.' },
        { t: 'Tool call', d: 'Check what the agent is about to send.' },
        { t: 'Tool response', d: 'Prompt Shields for documents (indirect injection).' },
        { t: 'Output', d: 'Harm filters, protected material, groundedness.' }
      ]
    },
    services: [
      ['Harm categories', 'Hate, sexual, violence, self-harm, each scored by severity.'],
      ['Prompt Shields: user prompts', 'Detects **direct** attacks / jailbreaks typed by the user.'],
      ['Prompt Shields: documents', 'Detects **indirect** attacks hidden in documents, web pages, images or tool output.'],
      ['Spotlighting', 'Marks untrusted content so the model treats it as data, not instructions.'],
      ['Custom blocklists', 'Block specific terms your policy forbids.'],
      ['Protected material', 'Detects copyrighted text or code in outputs.'],
      ['Groundedness detection', 'Flags output not supported by the provided sources.']
    ],
    points: [
      { h: 'Configuring it right', items: [
        'To **prevent** harmful content, set the action to **Block**. Annotate only labels it.',
        'For end-to-end agent protection, apply guardrails to **user input, output, tool call and tool response**.',
        'Text analysis in code: `client.analyze_text(AnalyzeTextOptions(text=comment))`, then read `categories_analysis` for the severity.',
        'Content Safety reading blobs by URL: system-assigned managed identity + **Storage Blob Data Reader**.'
      ]},
      { h: 'Responsible AI principles', items: [
        '**Fairness, reliability & safety, privacy & security, inclusiveness, transparency, accountability.**',
        'Telling users how their data is processed is **transparency**.'
      ]}
    ],
    tips: [
      ['"user tries to bypass system instructions"', 'Prompt Shields for user prompts.'],
      ['"instructions hidden in an uploaded image / web page / document"', 'Prompt Shields for documents (+ Spotlighting).'],
      ['"prevent", "stop", "must not be returned"', 'Action = Block.'],
      ['"check for copyrighted content in responses"', 'Protected material.']
    ],
    figures: [],
    search: 'Azure AI Content Safety Prompt Shields'
  },
  {
    id: 'evaluation',
    badge: 'EV',
    title: 'Evaluation & observability',
    tagline: 'Quality and safety evaluators, CI gates, tracing, metrics and logs.',
    intro: 'Two kinds of question appear here: **"is the output good?"**, answered by evaluators, and **"what happened and why is it slow or expensive?"**, answered by tracing, metrics and logs. Match the symptom to the signal.',
    diagram: {
      title: 'Symptom → signal',
      steps: [
        { t: 'Answers not supported by sources', d: 'Groundedness evaluator.' },
        { t: 'Answers miss the question', d: 'Relevance evaluator.' },
        { t: 'Slow responses', d: 'Latency breakdown in traces (spans per tool / model call).' },
        { t: 'Costs rising', d: 'Token usage analytics (prompt vs completion tokens).' },
        { t: 'Policy violations', d: 'Risk and safety evaluators.' }
      ]
    },
    services: [
      ['Quality evaluators', 'Groundedness, relevance, coherence, fluency, similarity, F1 / ROUGE / BLEU.'],
      ['Risk & safety evaluators', 'Hateful/unfair, violent, sexual, self-harm, protected material, indirect attack.'],
      ['Agent evaluators', 'Intent resolution, task adherence, tool call accuracy.'],
      ['Tracing (OpenTelemetry)', 'Hierarchical spans for each run, model call and tool call, sent to **Application Insights**.'],
      ['Azure Monitor metrics & logs', 'Requests, latency, tokens, availability, provisioned utilisation; diagnostic logs such as `RequestResponse`.']
    ],
    points: [
      { h: 'Evaluators', items: [
        '**Groundedness** needs context; **similarity / F1** need ground truth; **relevance** needs the query.',
        'A **medium** severity threshold flags more content than **high**, so its defect rate is higher. Protected material is unaffected by harm thresholds.',
        'Lowering a content filter will **not** fix a fine-tuning dataset that fails RAI checks. Clean the data instead.',
        'Use a groundedness threshold to **reject** unsupported answers and return a fallback.'
      ]},
      { h: 'CI/CD gates', items: [
        'Run evaluations in GitHub Actions on every **pull request**, pointing `evaluation-config` at the YAML file.',
        'Compare against the **latest approved baseline**. If regression exceeds tolerance, **fail the workflow** and require it to pass before merge.'
      ]},
      { h: 'Tracing', items: [
        'Agents outside the Foundry portal still trace with **OpenTelemetry + Application Insights**.',
        'Set different `OTEL_SERVICE_NAME` values to separate services. With `enable_content_recording=False`, prompts and tool data are **not** captured.',
        '**Hierarchical spans** capture nested operations; **tool call attributes** record arguments and results.'
      ]}
    ],
    tips: [
      ['"responses not supported by retrieved documents"', 'Groundedness.'],
      ['"quality degraded but requests succeed and latency unchanged"', 'Evaluation metrics, not latency or success rate.'],
      ['"capture latency breakdown and exceptions across runs"', 'OpenTelemetry + Application Insights.'],
      ['"block a merge when quality drops"', 'PR evaluation workflow that fails + branch protection.']
    ],
    figures: [],
    search: 'Microsoft Foundry evaluation tracing'
  }
];
