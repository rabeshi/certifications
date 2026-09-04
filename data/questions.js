window.AI103_QUESTIONS = [
  {
    "id": 1,
    "type": "single",
    "question": "You are building a speech processing solution in Microsoft Foundry for a customer support platform.\nThe platform will transcribe live phone calls, so that supervisors at your company can view call transcripts\nand detect issues while the calls are in progress. The call audio will arrive as a continuous stream from the\ntelephony system.\nYou need to ensure that the call transcripts appear within only a few seconds of the audio stream.\nWhat should you do?",
    "options": [
      {
        "id": "A",
        "text": "Use text to speech by using a custom neural voice."
      },
      {
        "id": "B",
        "text": "Use speech translation to generate the transcripts into multiple languages."
      },
      {
        "id": "C",
        "text": "Run a batch transcription job on recorded audio files."
      },
      {
        "id": "D",
        "text": "Use real -time speech to text to process streaming audio input."
      }
    ],
    "correctAnswer": [
      "D"
    ],
    "sourceAnswer": "D. Use real -time speech to text to process streaming audio input.",
    "explanation": "Correct Answer:\nD. Use real -time speech to text to process streaming audio input.\nReal-time speech to text is specifically designed to transcribe streaming audio with low latency, making it\nideal for live scenarios such as customer support phone calls. As audio is received from the telephony\nsystem, the Speech service continuously conve rts speech into text, allowing supervisors to view transcripts\nwithin seconds and monitor conversations while they are still in progress. This capability supports live\ncaptioning, real -time monitoring, and immediate issue detection, which are key requireme nts of the scenario.\n\nIncorrect Answers:\nA. Use text to speech by using a custom neural voice.\nText to speech converts text into spoken audio. It does not transcribe audio into text.\nB. Use speech translation to generate the transcripts into multiple languages.\nSpeech translation is intended for translating spoken language into another language. The requirement is to\ngenerate live transcripts, not translations.\nC. Run a batch transcription job on recorded audio files.\nBatch transcription processes completed audio recordings and is not suitable for generating transcripts\nduring live phone calls.",
    "incorrectExplanations": {
      "A": "Use text to speech by using a custom neural voice.\nText to speech converts text into spoken audio. It does not transcribe audio into text.",
      "B": "Use speech translation to generate the transcripts into multiple languages.\nSpeech translation is intended for translating spoken language into another language. The requirement is to\ngenerate live transcripts, not translations.",
      "C": "Run a batch transcription job on recorded audio files.\nBatch transcription processes completed audio recordings and is not suitable for generating transcripts\nduring live phone calls."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests speech concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Use real -time speech to text to process streaming audio input.",
    "topic": "Speech",
    "sourceQuestionNumber": 1,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 2,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an agent.\nThe agent ingests scanned PDF vendor invoices that contain tables and embedded QR codes.\nThe agent must preserve the PDF layout in the extracted output to ensure that downstream processing can\nreference sections and tables.\nYou plan to call Azure Content Understanding in Foundry Tools.\nYou need to extract content and layout elements and detect QR codes without requiring a language model\ndeployment.\nWhich built -in analyzer should you use?",
    "options": [
      {
        "id": "A",
        "text": "prebuilt -documentFieldSchema"
      },
      {
        "id": "B",
        "text": "prebuilt -read"
      },
      {
        "id": "C",
        "text": "prebuilt -documentSearch"
      },
      {
        "id": "D",
        "text": "prebuilt -layout"
      }
    ],
    "correctAnswer": [
      "D"
    ],
    "sourceAnswer": "D. prebuilt -layout",
    "explanation": "Correct Answer:\nD. prebuilt -layout\nThe prebuilt -layout  analyzer is designed to extract the structural elements of a document while preserving its\nlayout. It identifies text, paragraphs, tables, selection marks, and other layout components, enabling\ndownstream processes to reference the original document struc ture accurately. It also supports the detection\nof barcodes and QR codes without requiring a language model deployment. This makes it the best choice for\nprocessing scanned PDF vendor invoices that contain tables and embedded QR codes while maintaining the\ndocument's layout.\n\nIncorrect Answers:\nA. prebuilt -documentFieldSchema\nThis analyzer focuses on extracting predefined fields from documents rather than preserving the complete\ndocument layout or detecting QR codes.\nB. prebuilt -read\nThe prebuilt -read analyzer is intended primarily for OCR and text extraction. It does not provide the rich\nlayout analysis needed for preserving document structure.\nC. prebuilt -documentSearch\nThis analyzer is intended for document search and retrieval scenarios rather than extracting layout elements\nand QR codes for downstream processing.",
    "incorrectExplanations": {
      "A": "prebuilt -documentFieldSchema\nThis analyzer focuses on extracting predefined fields from documents rather than preserving the complete\ndocument layout or detecting QR codes.",
      "B": "prebuilt -read\nThe prebuilt -read analyzer is intended primarily for OCR and text extraction. It does not provide the rich\nlayout analysis needed for preserving document structure.",
      "C": "prebuilt -documentSearch\nThis analyzer is intended for document search and retrieval scenarios rather than extracting layout elements\nand QR codes for downstream processing."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests speech concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "prebuilt -layout",
    "topic": "Speech",
    "sourceQuestionNumber": 2,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 3,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an agent.\nThe agent accepts user -uploaded screenshots and uses a multimodal chat model. Some screenshots contain\npotentially malicious embedded text.\nYou need to prevent a prompt injection attack and ensure that third -party content is treated as lower trust.\nHow should you configure prompt shields for document attacks?",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "Prompt shields action: Set action to block.\nSetting the prompt shield action to block  ensures that any detected prompt injection attack in uploaded\nscreenshots or documents is prevented from reaching the multimodal language model. Since the\nscreenshots may contain malicious embedded text, blocking the request provides the highest level of\nprotection by stopping the attack before it can influence the model's behavior.\nAdditional mitigation: Enable Spotlighting.\nSpotlighting  is designed to help the model distinguish between trusted system instructions and untrusted\nthird-party content, such as uploaded screenshots and documents. It marks external content as lower trust,\nreducing the likelihood that malicious instructions embe dded within the content will be followed by the\nmodel. This is the recommended mitigation for defending against indirect prompt injection attacks.",
    "explanation": "Correct Answers:\nPrompt shields action: Set action to block.\nSetting the prompt shield action to block  ensures that any detected prompt injection attack in uploaded\nscreenshots or documents is prevented from reaching the multimodal language model. Since the\nscreenshots may contain malicious embedded text, blocking the request provides the highest level of\nprotection by stopping the attack before it can influence the model's behavior.\nAdditional mitigation: Enable Spotlighting.\nSpotlighting  is designed to help the model distinguish between trusted system instructions and untrusted\nthird-party content, such as uploaded screenshots and documents. It marks external content as lower trust,\nreducing the likelihood that malicious instructions embe dded within the content will be followed by the\nmodel. This is the recommended mitigation for defending against indirect prompt injection attacks.\n\nIncorrect Answers:\nDisable the shield.\nDisabling the shield removes protection against prompt injection attacks and leaves the application\nvulnerable.\n\nSet action to annotate.\nAnnotate detects and flags potential prompt injection attempts but still allows the request to continue. Since\nthe requirement is to prevent the attack, blocking is the appropriate choice.\nCreate a custom blocklist.\nA custom blocklist filters specific words or phrases but does not protect against prompt injection attacks or\nestablish trust boundaries between trusted and untrusted content.\nUse optical character recognition (OCR) to extract the text from the images first.\nOCR only extracts text from images. It does not detect or prevent prompt injection attacks, and the extracted\ntext could still contain malicious instructions.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q3-p4-327efb54.png"
    ],
    "answerImages": [
      "assets/questions/q3-p4-59b0db90.png"
    ],
    "concept": "This question tests content safety & prompt shields concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Prompt shields action: Set action to block.",
    "topic": "Content Safety & Prompt Shields",
    "sourceQuestionNumber": 3,
    "needsReview": true,
    "sourceMaterial": "You have a Microsoft Foundry project that contains an agent.\nThe agent accepts user -uploaded screenshots and uses a multimodal chat model. Some screenshots contain\npotentially malicious embedded text.\nYou need to prevent a prompt injection attack and ensure that third -party content is treated as lower trust.\nHow should you configure prompt shields for document attacks?"
  },
  {
    "id": 4,
    "type": "single",
    "question": "You are building a web app named App1 that generates responses by using a model deployed to a\nMicrosoft Foundry project named Project1.  Before sending the prompts to the model, App1 must retrieve\ndocuments by using Azure AI Search. You need to integrate Project1 and App1.\nThe solution must meet the following requirements:\n• Multiple client applications must use the same search configuration.\n• A security policy must prevent key -based authentication.\n• Administrative effort must be minimized.\nWhat should you do?",
    "options": [
      {
        "id": "A",
        "text": "Create a custom HTTP connection in Foundry and manually configure Azure AI Search endpoints per\napplication."
      },
      {
        "id": "B",
        "text": "Configure an Azure AI Search connection in Project1 and reference the connection in each application."
      },
      {
        "id": "C",
        "text": "Call Azure AI Search directly from each application by using Microsoft Entra authentication."
      },
      {
        "id": "D",
        "text": "Enable a managed identity for each application and call Azure AI Search directly."
      }
    ],
    "correctAnswer": [
      "B"
    ],
    "sourceAnswer": "B. Configure an Azure AI Search connection in Project1 and reference the connection in each application.",
    "explanation": "Correct Answer:\nB. Configure an Azure AI Search connection in Project1 and reference the connection in each application.\nCreating an Azure AI Search connection in the Microsoft Foundry project centralizes the search configuration\nso that multiple client applications can reuse the same connection. The connection can use Microsoft Entra\nID authentication, satisfying the requir ement to prevent key -based authentication. Since the search endpoint\nand authentication settings are managed once within the Foundry project, administrative effort is minimized\nwhile ensuring consistent configuration across all applications.\n\nIncorrect Answers:\nA. Create a custom HTTP connection in Foundry and manually configure Azure AI Search endpoints per\napplication.\nThis requires each application to maintain its own search configuration, increasing administrative overhead\nand reducing consistency.\n\nC. Call Azure AI Search directly from each application by using Microsoft Entra authentication.\nAlthough this avoids key -based authentication, each application must maintain its own search configuration,\nwhich does not meet the requirement for a shared configuration and minimal administration.\nD. Enable a managed identity for each application and call Azure AI Search directly.\nManaged identities provide secure authentication, but each application still requires separate configuration,\nincreasing administrative effort compared to using a shared Foundry connection.",
    "incorrectExplanations": {
      "A": "Create a custom HTTP connection in Foundry and manually configure Azure AI Search endpoints per\napplication.\nThis requires each application to maintain its own search configuration, increasing administrative overhead\nand reducing consistency.",
      "C": "Call Azure AI Search directly from each application by using Microsoft Entra authentication.\nAlthough this avoids key -based authentication, each application must maintain its own search configuration,\nwhich does not meet the requirement for a shared configuration and minimal administration.",
      "D": "Enable a managed identity for each application and call Azure AI Search directly.\nManaged identities provide secure authentication, but each application still requires separate configuration,\nincreasing administrative effort compared to using a shared Foundry connection."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Configure an Azure AI Search connection in Project1 and reference the connection in each application.",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 4,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 5,
    "type": "drag-drop",
    "question": "You have a Microsoft Foundry project that contains a customer support agent. The agent calls an internal\nknowledge API tool before generating responses.\nUsers report the following issues:\n• Some requests take more than 15 seconds to complete.\n• Some responses are incorrect, even when the knowledge API returns the expected data.\nYou need to inspect individual agent runs to view the ordered sequence of large language model (LLM) calls,\ntool invocations, and timing information.\nWhich observability capability should you use?",
    "options": [
      {
        "id": "A",
        "text": "token usage"
      },
      {
        "id": "B",
        "text": "monitoring"
      },
      {
        "id": "C",
        "text": "safety metrics"
      },
      {
        "id": "D",
        "text": "tracing"
      }
    ],
    "correctAnswer": [
      "D"
    ],
    "sourceAnswer": "D. tracing",
    "explanation": "Correct Answer:\nD. tracing\nTracing provides detailed visibility into the execution of an individual agent run. It records the complete\nsequence of operations, including large language model (LLM) calls, tool invocations, prompts, responses,\nexecution order, and timing information. T his enables developers to diagnose latency issues, identify where\ndelays occur, and determine whether incorrect responses originate from the model, the tool, or the\norchestration logic. Since the requirement is to inspect individual agent runs and view the  ordered sequence\nof events, tracing is the appropriate observability capability.\n\nIncorrect Answers:\nA. token usage\nToken usage reports the number of input and output tokens consumed by the model. It does not show the\nexecution flow, tool calls, or timing information.\nB. monitoring\nMonitoring provides high -level metrics and trends across applications, such as performance and availability,\nbut it does not provide detailed step -by-step execution information for individual agent runs.\nC. safety metrics\nSafety metrics measure content safety, such as harmful or unsafe outputs, and do not provide information\nabout tool invocations, execution flow, or latency.",
    "incorrectExplanations": {
      "A": "token usage\nToken usage reports the number of input and output tokens consumed by the model. It does not show the\nexecution flow, tool calls, or timing information.",
      "B": "monitoring\nMonitoring provides high -level metrics and trends across applications, such as performance and availability,\nbut it does not provide detailed step -by-step execution information for individual agent runs.",
      "C": "safety metrics\nSafety metrics measure content safety, such as harmful or unsafe outputs, and do not provide information\nabout tool invocations, execution flow, or latency."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests agent tools & workflows concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "tracing",
    "topic": "Agent Tools & Workflows",
    "sourceQuestionNumber": 5,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 6,
    "type": "drag-drop",
    "question": "You have a Microsoft Foundry project that contains an agent used by the financial analysts at your\ncompany. You need to optimize the agent workflow by providing additional data access and processing\ncapabilities. The solution must meet the following re quirements:\n• Ensure that the agent can perform calculations during conversations.\n• Ensure that the agent can access up -to-date information from public websites.\n• Ensure that the agent can retrieve information from documents uploaded directly to the agent.\nWhat should you use for each requirement? To answer, drag the appropriate tools to the correct\nrequirements. Each tool may be used once, more than once, or not at all.",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "Access up -to-date information from public websites: Grounding with Bing Search\nGrounding with Bing Search enables an agent to retrieve current information from the public web during a\nconversation. Since the model's training data is static, Bing Search provides access to the latest information,\nmaking it ideal for answering questions  about recent events, current facts, or publicly available data.\nPerform calculations during conversations: Code interpreter\nThe Code Interpreter tool allows the agent to execute Python code to perform mathematical calculations,\ndata analysis, statistical operations, and other computational tasks. This enables the agent to produce\naccurate calculation results instead of relying solely on the language model's reasoning capabilities.\nRetrieve information from documents uploaded directly to the agent: File search\nFile Search indexes documents uploaded directly to the agent and retrieves relevant content during\nconversations. It enables the agent to answer questions based on the uploaded files using retrieval -\naugmented generation, without requiring external search s ervices.",
    "explanation": "Correct Answers:\nAccess up -to-date information from public websites: Grounding with Bing Search\nGrounding with Bing Search enables an agent to retrieve current information from the public web during a\nconversation. Since the model's training data is static, Bing Search provides access to the latest information,\nmaking it ideal for answering questions  about recent events, current facts, or publicly available data.\nPerform calculations during conversations: Code interpreter\nThe Code Interpreter tool allows the agent to execute Python code to perform mathematical calculations,\ndata analysis, statistical operations, and other computational tasks. This enables the agent to produce\naccurate calculation results instead of relying solely on the language model's reasoning capabilities.\nRetrieve information from documents uploaded directly to the agent: File search\nFile Search indexes documents uploaded directly to the agent and retrieves relevant content during\nconversations. It enables the agent to answer questions based on the uploaded files using retrieval -\naugmented generation, without requiring external search s ervices.\n\nIncorrect Answers:\nComputer use\nComputer Use is designed to interact with graphical user interfaces and perform actions on applications. It is\nnot intended for calculations, web grounding, or searching uploaded documents.\nMicrosoft Fabric\nMicrosoft Fabric is an analytics and data platform used for enterprise data engineering, warehousing, and\nbusiness intelligence. It is not the appropriate tool for these agent capabilities.",
    "incorrectExplanations": {},
    "matchingPairs": [
      {
        "target": "Access up -to-date information from public websites",
        "value": "Grounding with Bing Search"
      },
      {
        "target": "Perform calculations during conversations",
        "value": "Code interpreter"
      },
      {
        "target": "Retrieve information from documents uploaded directly to the agent",
        "value": "File search"
      }
    ],
    "dragCandidates": [
      "Code interpreter",
      "Computer use",
      "File search",
      "Grounding with Bing Search",
      "Microsoft Fabric"
    ],
    "sourceImages": [
      "assets/questions/q6-p7-83fd052b.png"
    ],
    "answerImages": [
      "assets/questions/q6-p7-a3aeebbc.png"
    ],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "ccess up -to-date information from public websites: Grounding with Bing Search",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 6,
    "needsReview": true,
    "sourceMaterial": "You have a Microsoft Foundry project that contains an agent used by the financial analysts at your\ncompany. You need to optimize the agent workflow by providing additional data access and processing\ncapabilities. The solution must meet the following re quirements:\n• Ensure that the agent can perform calculations during conversations.\n• Ensure that the agent can access up -to-date information from public websites.\n• Ensure that the agent can retrieve information from documents uploaded directly to the agent.\nWhat should you use for each requirement? To answer, drag the appropriate tools to the correct\nrequirements. Each tool may be used once, more than once, or not at all."
  },
  {
    "id": 7,
    "type": "single",
    "question": "You have a Microsoft Foundry project named Project1 that contains an agent. The agent uses an\nOpenAPI 3.0 specification to call an external weather service.\nThe weather service requires a key to be passed in an HTTP header. The key value is stored as a connection\nin Project1.\nYou need to ensure that the key value from the connection is included automatically whenever the OpenAPI\ntool is invoked.\nWhat should you configure in the OpenAPI specification?",
    "options": [
      {
        "id": "A",
        "text": "a header parameter defined for each operation"
      },
      {
        "id": "B",
        "text": "an Azure Key Vault connection"
      },
      {
        "id": "C",
        "text": "an API key security scheme"
      },
      {
        "id": "D",
        "text": "a Bearer token security scheme"
      }
    ],
    "correctAnswer": [
      "C"
    ],
    "sourceAnswer": "C. an API key security scheme",
    "explanation": "Correct Answer:\nC. an API key security scheme\nAn API key security scheme  in an OpenAPI 3.0 specification defines how an API key is supplied with\nrequests, such as in an HTTP header, query parameter, or cookie. When the API key value is stored as a\nconnection in Microsoft Foundry, the OpenAPI tool automatically retrieves the ke y from the connection and\nincludes it in the appropriate HTTP header whenever the tool is invoked. This provides secure authentication\nwithout requiring the application or developer to manually include the key in every request.\n\nIncorrect Answers:\nA. a header parameter defined for each operation\nA header parameter only defines a request header. It does not automatically bind the value from a Foundry\nconnection or provide standardized API key authentication.\nB. an Azure Key Vault connection\nAzure Key Vault securely stores secrets, but the question states that the key is already stored as a\nconnection in Project1. The OpenAPI specification still requires an API key security scheme to use that\nconnection automatically.\n\nD. a Bearer token security scheme\nA Bearer token security scheme is used for OAuth or JWT bearer tokens, not for API keys passed in HTTP\nheaders.",
    "incorrectExplanations": {
      "A": "a header parameter defined for each operation\nA header parameter only defines a request header. It does not automatically bind the value from a Foundry\nconnection or provide standardized API key authentication.",
      "B": "an Azure Key Vault connection\nAzure Key Vault securely stores secrets, but the question states that the key is already stored as a\nconnection in Project1. The OpenAPI specification still requires an API key security scheme to use that\nconnection automatically.",
      "D": "a Bearer token security scheme\nA Bearer token security scheme is used for OAuth or JWT bearer tokens, not for API keys passed in HTTP\nheaders."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests agent tools & workflows concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "an API key security scheme",
    "topic": "Agent Tools & Workflows",
    "sourceQuestionNumber": 7,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 8,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains three agents as shown in the following table.\n\nYou need to orchestrate the agents to ensure that the customer requests meet the following requirements:\n\n• Support a deterministic, step -based process that uses conditional branching and shared state across\nthe agents.\n• Optionally trigger a ticket action based on the triage result.\n• The solution must minimize development effort.\n\nWhat should you include in the solution?",
    "options": [
      {
        "id": "A",
        "text": "a workflow"
      },
      {
        "id": "B",
        "text": "threads and runs without a workflow"
      },
      {
        "id": "C",
        "text": "a multi -agent group chat session"
      },
      {
        "id": "D",
        "text": "separate agent runs coordinated in the application code"
      }
    ],
    "correctAnswer": [
      "A"
    ],
    "sourceAnswer": "A. a workflow",
    "explanation": "Correct Answer:\nA. a workflow\nA workflow  in Microsoft Foundry is designed for deterministic, step -based orchestration of agents. It\nsupports sequential execution, conditional branching, shared state between steps, and optional execution\npaths. In this scenario, the workflow can first invoke the TriageAgent, then conditionally call the PolicyAgent\nor ActionAgent based on the triage result, while maintaining shared context throughout the process. Since\nworkflows provide these capabilities out of the box, they minimize development effort and are the  best\nchoice for implementing predictable business processes.\n\nIncorrect Answers:\nB. threads and runs without a workflow\nThreads and runs manage conversations with agents but do not provide built -in deterministic orchestration,\nbranching, or shared workflow state across multiple agents.\n\nC. a multi -agent group chat session\nA multi -agent group chat is intended for collaborative conversations among agents. It is not designed for\ndeterministic, step -based business workflows with conditional branching.\nD. separate agent runs coordinated in the application code\nAlthough this approach can implement the required behavior, it requires custom orchestration logic,\nincreasing development effort. The question specifically requires minimizing development effort.",
    "incorrectExplanations": {
      "B": "threads and runs without a workflow\nThreads and runs manage conversations with agents but do not provide built -in deterministic orchestration,\nbranching, or shared workflow state across multiple agents.",
      "C": "a multi -agent group chat session\nA multi -agent group chat is intended for collaborative conversations among agents. It is not designed for\ndeterministic, step -based business workflows with conditional branching.",
      "D": "separate agent runs coordinated in the application code\nAlthough this approach can implement the required behavior, it requires custom orchestration logic,\nincreasing development effort. The question specifically requires minimizing development effort."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q8-p9-0d34c7ce.png"
    ],
    "answerImages": [],
    "concept": "This question tests foundry agent service concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "a workflow",
    "topic": "Foundry Agent Service",
    "sourceQuestionNumber": 8,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 9,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains a customer support agent. The agent is deployed by\nusing a GitHub Actions workflow.\nThe organization has the following requirements:\n• Every deployment to the production environment must use the latest approved evaluation baseline.\n• Deployments must stop automatically if the current evaluation scores regress beyond the configured\ntolerance.\nHow should you configure the workflow?",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "Evaluation comparison: Compare against the latest approved baseline\nThe requirement states that every deployment to the production environment must use the latest approved\nevaluation baseline . Configuring the workflow to compare the current evaluation results against the latest\napproved baseline ensures that new deployments are validated against the organization's approved quality\nstandard rather than against previous runs or source code chang es.\nIf evaluation regression exceeds the configured tolerance: Fail the workflow\nFailing the workflow automatically stops the deployment whenever evaluation scores regress beyond the\nconfigured tolerance. This prevents lower -quality models or agents from reaching the production\nenvironment and enforces the organization's deployment qua lity gates.",
    "explanation": "Correct Answers:\nEvaluation comparison: Compare against the latest approved baseline\nThe requirement states that every deployment to the production environment must use the latest approved\nevaluation baseline . Configuring the workflow to compare the current evaluation results against the latest\napproved baseline ensures that new deployments are validated against the organization's approved quality\nstandard rather than against previous runs or source code chang es.\nIf evaluation regression exceeds the configured tolerance: Fail the workflow\nFailing the workflow automatically stops the deployment whenever evaluation scores regress beyond the\nconfigured tolerance. This prevents lower -quality models or agents from reaching the production\nenvironment and enforces the organization's deployment qua lity gates.\n\nIncorrect Answers:\nCompare against the previous workflow run\nThe previous workflow run may not represent the latest approved baseline and therefore does not satisfy the\nrequirement.\nCompare against the production deployment logs\nProduction logs contain runtime information and are not used as evaluation baselines for deployment\nvalidation.\nCompare against the repository default branch\nThe repository's default branch contains source code, not approved evaluation results for comparison.\nContinue deployment and send an alert\nThis allows a deployment with degraded evaluation scores to reach production, which violates the\nrequirement to stop deployments automatically.\nRetry the evaluation automatically\nRetrying an evaluation does not address a genuine regression in evaluation scores.\n\nLock the target branch\nLocking the branch prevents code changes but does not stop a deployment based on evaluation regression.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q9-p10-676f2448.png"
    ],
    "answerImages": [
      "assets/questions/q9-p11-6d2f718b.png"
    ],
    "concept": "This question tests evaluation & observability concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "valuation comparison: Compare against the latest approved baseline",
    "topic": "Evaluation & Observability",
    "sourceQuestionNumber": 9,
    "needsReview": true,
    "sourceMaterial": "You have a Microsoft Foundry project that contains a customer support agent. The agent is deployed by\nusing a GitHub Actions workflow.\nThe organization has the following requirements:\n• Every deployment to the production environment must use the latest approved evaluation baseline.\n• Deployments must stop automatically if the current evaluation scores regress beyond the configured\ntolerance.\nHow should you configure the workflow?"
  },
  {
    "id": 10,
    "type": "yes-no-matrix",
    "question": "Your company is piloting a customer support agent in a Microsoft Foundry project name Project1.\nProject1 is connected to an existing Application Insights resource, and the company’s support team reviews\nruns in the Traces tab.\nThe Foundry Agent Service is configured to perform the following actions:\n\nRetrieve the Application Insights connection string by calling\nproject_client.telemetry.get_application_insights_connection_string().\nCall configure_azure_monitor(connection_string=...) to enable telemetry.\n\nA separate LangChain service is configured to use OpenTelemetry and has the following configurations:\nUses AzureAIOpenTelemetryTracer(connection_string=..., enable_content_recording=False)\n\nPasses the tracer by using config= “callbacks”:[azure_tracer] Company policy has the following requirements:\n• Telemetry from LangChain and OpenTelemetry must be distinguishable within the same Application\nInsights resource.\n• Secrets and credentials must NOT be stored in prompts, tool arguments, or span attributes.\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "1. The LangChain service will appear in Traces without configuring a tracer. — No\nLangChain does not automatically send telemetry to Application Insights. To capture LangChain traces, you\nmust configure an OpenTelemetry tracer, such as AzureAIOpenTelemetryTracer , and pass it to LangChain\nthrough the callback configuration. Without configuring a tracer, LangChain activity will not appear in the\nTraces view.\n2. Setting different OTEL_SERVICE_NAME values separates the services in Application Insights. — Yes\nThe OTEL_SERVICE_NAME  resource attribute identifies the originating service for OpenTelemetry telemetry.\nAssigning different service names allows telemetry from multiple applications or services to be distinguished\nwithin the same Application Insights resource, making it easie r to filter and analyze traces for each service\nindependently.\n3. When using enable_content_recording=False, prompts and tool data will be captured in the telemetry.\n— No\nSetting enable_content_recording=False  disables recording of sensitive content such as prompts, model\nresponses, and tool inputs or outputs. This helps prevent secrets, credentials, or other sensitive information\nfrom being stored in telemetry, aligning with the company's security policy.",
    "explanation": "Correct Answers:\n1. The LangChain service will appear in Traces without configuring a tracer. — No\nLangChain does not automatically send telemetry to Application Insights. To capture LangChain traces, you\nmust configure an OpenTelemetry tracer, such as AzureAIOpenTelemetryTracer , and pass it to LangChain\nthrough the callback configuration. Without configuring a tracer, LangChain activity will not appear in the\nTraces view.\n2. Setting different OTEL_SERVICE_NAME values separates the services in Application Insights. — Yes\nThe OTEL_SERVICE_NAME  resource attribute identifies the originating service for OpenTelemetry telemetry.\nAssigning different service names allows telemetry from multiple applications or services to be distinguished\nwithin the same Application Insights resource, making it easie r to filter and analyze traces for each service\nindependently.\n3. When using enable_content_recording=False, prompts and tool data will be captured in the telemetry.\n— No\nSetting enable_content_recording=False  disables recording of sensitive content such as prompts, model\nresponses, and tool inputs or outputs. This helps prevent secrets, credentials, or other sensitive information\nfrom being stored in telemetry, aligning with the company's security policy.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q10-p12-43d2214a.png"
    ],
    "answerImages": [
      "assets/questions/q10-p12-7c6f66c8.png"
    ],
    "concept": "This question tests evaluation & observability concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "1. The LangChain service will appear in Traces without configuring a tracer. — No",
    "topic": "Evaluation & Observability",
    "sourceQuestionNumber": 10,
    "needsReview": true,
    "sourceMaterial": "Your company is piloting a customer support agent in a Microsoft Foundry project name Project1.\nProject1 is connected to an existing Application Insights resource, and the company’s support team reviews\nruns in the Traces tab.\nThe Foundry Agent Service is configured to perform the following actions:\n\nRetrieve the Application Insights connection string by calling\nproject_client.telemetry.get_application_insights_connection_string().\nCall configure_azure_monitor(connection_string=...) to enable telemetry.\n\nA separate LangChain service is configured to use OpenTelemetry and has the following configurations:\nUses AzureAIOpenTelemetryTracer(connection_string=..., enable_content_recording=False)\n\nPasses the tracer by using config= “callbacks”:[azure_tracer] Company policy has the following requirements:\n• Telemetry from LangChain and OpenTelemetry must be distinguishable within the same Application\nInsights resource.\n• Secrets and credentials must NOT be stored in prompts, tool arguments, or span attributes.\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No."
  },
  {
    "id": 11,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an agent and an image generation model\ndeployment. The agent generates original images from user -supplied product photos.\nYou need to ensure that the generated images maintain the product identity and visual characteristics of the\nprovided photo.\nWhat should you do?",
    "options": [
      {
        "id": "A",
        "text": "Set the input_fidelity parameter to high."
      },
      {
        "id": "B",
        "text": "Apply a groundedness detection filter."
      },
      {
        "id": "C",
        "text": "Include a prompt and input image in the request."
      },
      {
        "id": "D",
        "text": "Decrease the value of the temperature parameter."
      }
    ],
    "correctAnswer": [
      "A"
    ],
    "sourceAnswer": "A. Set the input_fidelity parameter to high.",
    "explanation": "Correct Answer:\nA. Set the input_fidelity parameter to high.\nThe input_fidelity  parameter controls how closely the generated image preserves the identity and visual\ncharacteristics of the input image. Setting input_fidelity  to high ensures that the model strongly adheres to\nthe product's appearance, including its shape, colors, textures, branding, and other visual details, while still\nallowing the requested creative modifications. Since the requirement is to maintain the product ide ntity and\nvisual characteristics of the provided photo, this is the most appropriate setting.\n\nIncorrect Answers:\n\nB. Apply a groundedness detection filter.\nGroundedness detection verifies whether generated content is supported by the provided source or context.\nIt does not control how faithfully an image preserves the characteristics of an input image.\nC. Include a prompt and input image in the request.\nAlthough an image generation request requires a prompt and an input image, simply including them does not\nguarantee that the generated image will preserve the product's identity. The input_fidelity  parameter controls\nthat behavior.\nD. Decrease the value of the temperature parameter.\nLowering the temperature reduces randomness in the model's output, but it does not specifically ensure that\nthe generated image maintains the identity and visual characteristics of the input image.",
    "incorrectExplanations": {
      "B": "Apply a groundedness detection filter.\nGroundedness detection verifies whether generated content is supported by the provided source or context.\nIt does not control how faithfully an image preserves the characteristics of an input image.",
      "C": "Include a prompt and input image in the request.\nAlthough an image generation request requires a prompt and an input image, simply including them does not\nguarantee that the generated image will preserve the product's identity. The input_fidelity  parameter controls\nthat behavior.",
      "D": "Decrease the value of the temperature parameter.\nLowering the temperature reduces randomness in the model's output, but it does not specifically ensure that\nthe generated image maintains the identity and visual characteristics of the input image."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests image / video generation concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Set the input_fidelity parameter to high.",
    "topic": "Image / Video Generation",
    "sourceQuestionNumber": 11,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 12,
    "type": "single",
    "question": "You are developing a travel planning agent by using Microsoft Foundry Agent Service.\nThe solution must meet the following requirements:\n• Remember each user's preferred airline and hotel chain across future conversations.\n• Ensure that payment card details are discarded after the conversation ends.\n• Minimize custom development.\nWhich implementation should you recommend?",
    "options": [
      {
        "id": "A",
        "text": "Store both preferences and payment information in persistent agent memory."
      },
      {
        "id": "B",
        "text": "Store preferences in persistent agent memory and retain payment information only in orchestration -\nmanaged session context."
      },
      {
        "id": "C",
        "text": "Store both preferences and payment information in conversation history."
      },
      {
        "id": "D",
        "text": "Store payment information in Azure AI Search and preferences in session context."
      }
    ],
    "correctAnswer": [
      "B"
    ],
    "sourceAnswer": "B. Store preferences in persistent agent memory and retain payment information only in orchestration -\nmanaged session context.",
    "explanation": "Correct Answer:\nB. Store preferences in persistent agent memory and retain payment information only in orchestration -\nmanaged session context.\nPersistent agent memory is designed to store long -term user preferences that should be available across\nfuture conversations, such as a user's preferred airline or hotel chain. In contrast, sensitive information like\npayment card details should not be reta ined after a conversation ends. Storing payment information only in\nthe orchestration -managed session context ensures that it is available only during the current conversation\nand is discarded when the session ends. This approach satisfies both requirement s while minimizing custom\ndevelopment by using the built -in memory capabilities of Microsoft Foundry Agent Service.\n\nIncorrect Answers:\nA. Store both preferences and payment information in persistent agent memory.\nPayment card details should not be stored in persistent memory because they must be discarded after the\nconversation ends.\n\nC. Store both preferences and payment information in conversation history.\nConversation history is not intended for long -term storage of user preferences across future conversations,\nand it may also retain sensitive payment information longer than required.\nD. Store payment information in Azure AI Search and preferences in session context.\nAzure AI Search is intended for indexing and retrieving searchable content, not for storing sensitive payment\ninformation. In addition, storing preferences in session context would not preserve them across future\nconversations.",
    "incorrectExplanations": {
      "A": "Store both preferences and payment information in persistent agent memory.\nPayment card details should not be stored in persistent memory because they must be discarded after the\nconversation ends.",
      "C": "Store both preferences and payment information in conversation history.\nConversation history is not intended for long -term storage of user preferences across future conversations,\nand it may also retain sensitive payment information longer than required.",
      "D": "Store payment information in Azure AI Search and preferences in session context.\nAzure AI Search is intended for indexing and retrieving searchable content, not for storing sensitive payment\ninformation. In addition, storing preferences in session context would not preserve them across future\nconversations."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests foundry agent service concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Store preferences in persistent agent memory and retain payment information only in orchestration -",
    "topic": "Foundry Agent Service",
    "sourceQuestionNumber": 12,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 13,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an agent. The agent uses tools to retrieve internal\ncontent and call external APIs. The agent is configured to let the model decide when to call the tools.\nYou need to publish the agent for a compliance workflow.\nThe solution must meet the following requirements:\n• Each workflow run must include a retrieval step before generating a response.\n• Tool calls must authenticate by using the published agent’s own identity.\n• Tool access must use an identity isolated from other project resources.\n• Tool access must use support audit tracing.\nWhat should you do?",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "Set tool_choice to: required\nSetting tool_choice  to required  ensures that the model must invoke a tool before generating a response.\nSince the compliance workflow requires every workflow run to include a retrieval step , this setting\nguarantees that the retrieval tool is always called instead of leaving the decision to the model.\nConfigure the tool to authenticate by: Using a distinct agent identity bound to the client application\nUsing a distinct agent identity  provides an isolated identity for the published agent, separate from other\nproject resources. This approach supports least -privilege access, enables comprehensive audit tracing of tool\ncalls, and ensures that all tool invocations are performed using the p ublished agent's own identity. It satisfies\nthe requirements for identity isolation and compliance auditing.",
    "explanation": "Correct Answers:\nSet tool_choice to: required\nSetting tool_choice  to required  ensures that the model must invoke a tool before generating a response.\nSince the compliance workflow requires every workflow run to include a retrieval step , this setting\nguarantees that the retrieval tool is always called instead of leaving the decision to the model.\nConfigure the tool to authenticate by: Using a distinct agent identity bound to the client application\nUsing a distinct agent identity  provides an isolated identity for the published agent, separate from other\nproject resources. This approach supports least -privilege access, enables comprehensive audit tracing of tool\ncalls, and ensures that all tool invocations are performed using the p ublished agent's own identity. It satisfies\nthe requirements for identity isolation and compliance auditing.\n\nIncorrect Answers:\nauto\nThe model decides whether to call a tool. This does not guarantee that every workflow run performs the\nrequired retrieval step.\nnone\nThe model is prevented from calling any tools, making it impossible to perform the mandatory retrieval step.\n\nStoring API keys in prompts\nEmbedding API keys in prompts is insecure and violates security best practices. It also does not support\nidentity -based authentication or audit tracing.\nUsing the shared project agent identity\nA shared project identity is not isolated from other project resources and does not meet the requirement for\ndedicated identity isolation for the published agent.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q13-p15-a0631cc4.png"
    ],
    "answerImages": [
      "assets/questions/q13-p16-e1252c6c.png"
    ],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Set tool_choice to: required",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 13,
    "needsReview": true,
    "sourceMaterial": "You have a Microsoft Foundry project that contains an agent. The agent uses tools to retrieve internal\ncontent and call external APIs. The agent is configured to let the model decide when to call the tools.\nYou need to publish the agent for a compliance workflow.\nThe solution must meet the following requirements:\n• Each workflow run must include a retrieval step before generating a response.\n• Tool calls must authenticate by using the published agent’s own identity.\n• Tool access must use an identity isolated from other project resources.\n• Tool access must use support audit tracing.\nWhat should you do?"
  },
  {
    "id": 14,
    "type": "single",
    "question": "You have a chat app in a Microsoft Foundry project and an Azure AI Search vectorized index.\nYou need to connect to the index to meet the following requirements:\n• Complex questions must retrieve information from multiple chunks.\n• Multi-turn conversations must influence retrieval planning.\n• Retrievals must run in parallel to reduce latency.\nWhich retrieval approach should you use?",
    "options": [
      {
        "id": "A",
        "text": "iterative retrieval"
      },
      {
        "id": "B",
        "text": "agentic Retrieval Augmented Generation (RAG)"
      },
      {
        "id": "C",
        "text": "chain of thought"
      },
      {
        "id": "D",
        "text": "classic Retrieval Augmented Generation (RAG)"
      }
    ],
    "correctAnswer": [
      "B"
    ],
    "sourceAnswer": "B. agentic Retrieval Augmented Generation (RAG)",
    "explanation": "Correct Answer:\nB. agentic Retrieval Augmented Generation (RAG)\nAgentic Retrieval Augmented Generation (RAG) is designed for advanced retrieval scenarios where an AI\nagent actively plans and orchestrates the retrieval process. It can decompose complex questions into\nmultiple search queries, retrieve information from mu ltiple chunks in parallel, and use the context of previous\nconversation turns to improve retrieval planning. This enables more accurate responses for complex, multi -\nturn conversations while reducing latency through parallel retrieval operations. These capa bilities directly\nsatisfy all the requirements in the scenario.\n\nIncorrect Answers:\nA. iterative retrieval\nIterative retrieval performs searches sequentially, refining results over multiple steps. While it can improve\nretrieval quality, it does not inherently support parallel retrieval or conversation -aware retrieval planning.\nC. chain of thought\nChain of thought is a reasoning technique used by language models to improve reasoning. It is not a retrieval\napproach for Azure AI Search.\nD. classic Retrieval Augmented Generation (RAG)\nClassic RAG performs a single retrieval step before generating a response. It does not perform retrieval\nplanning across multiple conversation turns or execute parallel retrievals for complex queries.",
    "incorrectExplanations": {
      "A": "iterative retrieval\nIterative retrieval performs searches sequentially, refining results over multiple steps. While it can improve\nretrieval quality, it does not inherently support parallel retrieval or conversation -aware retrieval planning.",
      "C": "chain of thought\nChain of thought is a reasoning technique used by language models to improve reasoning. It is not a retrieval\napproach for Azure AI Search.",
      "D": "classic Retrieval Augmented Generation (RAG)\nClassic RAG performs a single retrieval step before generating a response. It does not perform retrieval\nplanning across multiple conversation turns or execute parallel retrievals for complex queries."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "agentic Retrieval Augmented Generation (RAG)",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 14,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 15,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an agent.\nThe agent processes scanned employee identification cards from multiple countries.\nThe solution must meet the following requirements:\n• Extract structured fields such as employee ID, full name, and expiration date.\n• Return the extracted values as a structured schema instead of raw text.\n• Minimize custom post -processing.\nYou plan to call Azure Content Understanding in Foundry Tools.\nWhich built -in analyzer should you use?",
    "options": [
      {
        "id": "A",
        "text": "prebuilt -layout"
      },
      {
        "id": "B",
        "text": "prebuilt -documentSearch"
      },
      {
        "id": "C",
        "text": "prebuilt -documentFieldSchema"
      },
      {
        "id": "D",
        "text": "prebuilt -read"
      }
    ],
    "correctAnswer": [
      "C"
    ],
    "sourceAnswer": "C. prebuilt -documentFieldSchema",
    "explanation": "Correct Answer:\nC. prebuilt -documentFieldSchema\nThe prebuilt -documentFieldSchema  analyzer is specifically designed to extract predefined structured fields\nfrom documents and return the results in a structured schema. It is ideal for processing employee\nidentification cards because it can identify fields such as employee ID, full name,  and expiration date without\nrequiring extensive custom parsing. Since the output is already structured, it minimizes the amount of post -\nprocessing required by the application, directly meeting all the stated requirements.\n\nIncorrect Answers:\nA. prebuilt -layout\nThe prebuilt -layout  analyzer preserves the document's structure by extracting text, tables, paragraphs, and\nother layout elements. It does not focus on returning predefined fields as a structured schema.\nB. prebuilt -documentSearch\nThe prebuilt -documentSearch  analyzer is intended for document search and retrieval scenarios rather than\nextracting structured document fields.\nD. prebuilt -read\nThe prebuilt -read analyzer performs OCR and extracts raw text from documents. It does not return\nstructured fields such as employee ID or expiration date without additional post -processing.",
    "incorrectExplanations": {
      "A": "prebuilt -layout\nThe prebuilt -layout  analyzer preserves the document's structure by extracting text, tables, paragraphs, and\nother layout elements. It does not focus on returning predefined fields as a structured schema.",
      "B": "prebuilt -documentSearch\nThe prebuilt -documentSearch  analyzer is intended for document search and retrieval scenarios rather than\nextracting structured document fields.",
      "D": "prebuilt -read\nThe prebuilt -read analyzer performs OCR and extracts raw text from documents. It does not return\nstructured fields such as employee ID or expiration date without additional post -processing."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests azure content understanding concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "prebuilt -documentFieldSchema",
    "topic": "Azure Content Understanding",
    "sourceQuestionNumber": 15,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 16,
    "type": "drag-drop",
    "question": "You have a Microsoft Foundry project that contains a deployed ticket -triage agent.\nYou discover that sometimes the agent responds without calling any tools, even when a tool is required. You\nneed to ensure that the agent calls a tool during execution.\nHow should you complete the Python code?\nTo answer, drag the appropriate values to the correct targets. Each value may be used once, more than once,\nor not at all.",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "First blank: \"tool_choice\"\nThe tool_choice  parameter controls whether the language model can decide to use a tool or must use one. It\ndetermines the model's tool invocation behavior during execution. Since the requirement is to ensure that a\ntool is always called, the payload must include the tool_choice  parameter.\nSecond blank: \"required\"\nSetting tool_choice  to required  forces the model to invoke at least one tool before generating a response.\nThis guarantees that the deployed ticket -triage agent does not respond directly without calling the necessary\nretrieval or action tool.",
    "explanation": "Correct Answers:\nFirst blank: \"tool_choice\"\nThe tool_choice  parameter controls whether the language model can decide to use a tool or must use one. It\ndetermines the model's tool invocation behavior during execution. Since the requirement is to ensure that a\ntool is always called, the payload must include the tool_choice  parameter.\nSecond blank: \"required\"\nSetting tool_choice  to required  forces the model to invoke at least one tool before generating a response.\nThis guarantees that the deployed ticket -triage agent does not respond directly without calling the necessary\nretrieval or action tool.\n\nIncorrect Answers:\n\"auto\"\nThe model decides whether to call a tool. It may generate a response without using any tool, which does not\nsatisfy the requirement.\n\"response_format\"\nThis parameter controls the structure of the model's output, not whether tools are invoked.\n\n\"tools\"\nThe tools property defines the available tools but does not force the model to use them.\n\"type\"\nThe type field specifies the type of a tool or schema and does not control tool invocation behavior.",
    "incorrectExplanations": {},
    "matchingPairs": [
      {
        "target": "First blank",
        "value": "tool_choice"
      },
      {
        "target": "Second blank",
        "value": "required"
      }
    ],
    "dragCandidates": [
      "\"auto\"",
      "\"required\"",
      "\"response_format\"",
      "\"tool_choice\"",
      "\"tools\"",
      "\"type\""
    ],
    "sourceImages": [
      "assets/questions/q16-p19-ac44cf0b.png"
    ],
    "answerImages": [
      "assets/questions/q16-p19-9550f394.png"
    ],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "irst blank: \"tool_choice\"",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 16,
    "needsReview": true,
    "sourceMaterial": "You have a Microsoft Foundry project that contains a deployed ticket -triage agent.\nYou discover that sometimes the agent responds without calling any tools, even when a tool is required. You\nneed to ensure that the agent calls a tool during execution.\nHow should you complete the Python code?\nTo answer, drag the appropriate values to the correct targets. Each value may be used once, more than once,\nor not at all."
  },
  {
    "id": 17,
    "type": "single",
    "question": "You have a customer support agent built by using the Microsoft Foundry Agent Service. The agent calls\nan Azure OpenAI model deployment.\nDuring load testing, calls intermittently fail and return an HTTP 429 rate limit exceeded error.\nYou need to handle throttling to reduce call failures and improve reliability under load. The solution must\nremain within the service and model limits.\nWhat should you do?",
    "options": [
      {
        "id": "A",
        "text": "Create a new thread and retry the calls immediately."
      },
      {
        "id": "B",
        "text": "Reduce the number of registered tools."
      },
      {
        "id": "C",
        "text": "Implement a retry policy that uses exponential backoff and jitter."
      },
      {
        "id": "D",
        "text": "Spit uploaded content into smaller files."
      }
    ],
    "correctAnswer": [
      "C"
    ],
    "sourceAnswer": "C. Implement a retry policy that uses exponential backoff and jitter.",
    "explanation": "Correct Answer:\nC. Implement a retry policy that uses exponential backoff and jitter.\nAn HTTP 429 (Too Many Requests)  response indicates that the service or model deployment has reached its\nrate limit. The recommended approach is to implement a retry policy that uses exponential backoff\ncombined with jitter. Exponential backoff progressively increases the delay between retry attempts, while\njitter introduces randomness to prevent multiple clients from retrying simultaneously. This reduces\ncontention, improves reliability under load, and allows requests to su cceed without exceeding the service's\nconfigured limits.\n\nIncorrect Answers:\nA. Create a new thread and retry the calls immediately.\nCreating a new thread does not bypass rate limits, and immediately retrying requests can make throttling\neven worse.\nB. Reduce the number of registered tools.\nThe number of registered tools does not affect Azure OpenAI rate limits or resolve HTTP 429 errors.\nD. Split uploaded content into smaller files.\nSplitting files may reduce the size of individual requests but does not address request throttling or rate -limit\nexceeded errors.",
    "incorrectExplanations": {
      "A": "Create a new thread and retry the calls immediately.\nCreating a new thread does not bypass rate limits, and immediately retrying requests can make throttling\neven worse.",
      "B": "Reduce the number of registered tools.\nThe number of registered tools does not affect Azure OpenAI rate limits or resolve HTTP 429 errors.",
      "D": "Split uploaded content into smaller files.\nSplitting files may reduce the size of individual requests but does not address request throttling or rate -limit\nexceeded errors."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests model deployment concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Implement a retry policy that uses exponential backoff and jitter.",
    "topic": "Model Deployment",
    "sourceQuestionNumber": 17,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 18,
    "type": "single",
    "question": "You are planning a Microsoft Foundry project named Project1 that will contain several prompt flow\napplications and agents.\nEach application must use the same Azure AI Foundry Model deployment hosted in another Azure resource.\nYou need to recommend a solution that enables all applications in Project1 to reuse the model configuration\nwithout duplicating connection settings.\nWhat should you recommend?",
    "options": [
      {
        "id": "A",
        "text": "Create a connection to the model resource."
      },
      {
        "id": "B",
        "text": "Configure a managed private endpoint."
      },
      {
        "id": "C",
        "text": "Enable role -based access control (RBAC) on the model deployment."
      },
      {
        "id": "D",
        "text": "Configure diagnostic settings for the model deployment."
      }
    ],
    "correctAnswer": [
      "A"
    ],
    "sourceAnswer": "A. Create a connection to the model resource.",
    "explanation": "Correct Answer:\nA. Create a connection to the model resource.\nA connection  in Microsoft Azure AI Foundry provides a centralized way to reference external resources such\nas model deployments. By creating a connection to the Azure AI Foundry model hosted in another Azure\nresource, all prompt flow applications and agents within Project1  can reuse the same model configuration.\nThis eliminates the need to duplicate endpoint URLs, authentication settings, and other connection details\nacross multiple applications, reducing administrative effort and ensuring consistent configuration.\n\nIncorrect Answers:\nB. Configure a managed private endpoint.\nA managed private endpoint provides secure network connectivity to Azure resources but does not enable\napplications to share or reuse model connection settings.\nC. Enable role -based access control (RBAC) on the model deployment.\nRBAC controls who can access the model deployment, but it does not centralize or reuse model\nconfiguration across multiple applications.\nD. Configure diagnostic settings for the model deployment.\nDiagnostic settings collect logs and metrics for monitoring. They do not provide reusable model connection\nconfigurations.",
    "incorrectExplanations": {
      "B": "Configure a managed private endpoint.\nA managed private endpoint provides secure network connectivity to Azure resources but does not enable\napplications to share or reuse model connection settings.",
      "C": "Enable role -based access control (RBAC) on the model deployment.\nRBAC controls who can access the model deployment, but it does not centralize or reuse model\nconfiguration across multiple applications.",
      "D": "Configure diagnostic settings for the model deployment.\nDiagnostic settings collect logs and metrics for monitoring. They do not provide reusable model connection\nconfigurations."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests model deployment concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Create a connection to the model resource.",
    "topic": "Model Deployment",
    "sourceQuestionNumber": 18,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 19,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an agent that answers questions by using Retrieval -\nAugmented Generation (RAG).\nA GitHub Actions workflow automatically deploys updates whenever a pull request is approved.\nThe organization has the following requirements:\n• Validate that responses remain grounded in the retrieved documents before deployment.\n• Prevent pull requests from being merged if the evaluation does not satisfy the required quality\nthresholds.",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "Evaluation to execute: Groundedness evaluation\nGroundedness evaluation verifies whether the agent's responses are supported by the retrieved documents.\nSince the agent uses Retrieval -Augmented Generation (RAG), this evaluation ensures that answers remain\nfaithful to the retrieved content and do not int roduce hallucinations. This directly satisfies the requirement to\nvalidate that responses remain grounded before deployment.\nPull request policy: Require the evaluation workflow to succeed before merging\nRequiring the evaluation workflow to succeed before merging enforces quality gates in the CI/CD pipeline. If\n\nthe groundedness evaluation fails to meet the configured quality thresholds, the pull request cannot be\nmerged, preventing unvalidated changes from being deployed to production.",
    "explanation": "Correct Answers:\nEvaluation to execute: Groundedness evaluation\nGroundedness evaluation verifies whether the agent's responses are supported by the retrieved documents.\nSince the agent uses Retrieval -Augmented Generation (RAG), this evaluation ensures that answers remain\nfaithful to the retrieved content and do not int roduce hallucinations. This directly satisfies the requirement to\nvalidate that responses remain grounded before deployment.\nPull request policy: Require the evaluation workflow to succeed before merging\nRequiring the evaluation workflow to succeed before merging enforces quality gates in the CI/CD pipeline. If\n\nthe groundedness evaluation fails to meet the configured quality thresholds, the pull request cannot be\nmerged, preventing unvalidated changes from being deployed to production.\n\nIncorrect Answers:\nFluency evaluation\nFluency evaluates grammar, readability, and language quality, but it does not verify whether responses are\ngrounded in retrieved documents.\nSimilarity evaluation\nSimilarity compares responses against reference answers but does not determine whether the responses are\nsupported by the retrieved documents.\nContent Safety evaluation\nContent Safety evaluates harmful or unsafe content. It does not measure whether responses are grounded in\nthe retrieved knowledge.\nAutomatically rerun failed evaluations until they pass\nAutomatically retrying evaluations does not resolve genuine quality issues and does not enforce deployment\nquality standards.\nNotify reviewers when evaluations fail\nNotification alone does not prevent a pull request from being merged.\nAllow the merge and run evaluations after deployment\nThis allows potentially poor -quality changes to reach production, violating the requirement to validate\nresponses before deployment.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q19-p22-5f25c2ec.png"
    ],
    "answerImages": [
      "assets/questions/q19-p22-b32a8983.png"
    ],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "valuation to execute: Groundedness evaluation",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 19,
    "needsReview": true,
    "sourceMaterial": "You have a Microsoft Foundry project that contains an agent that answers questions by using Retrieval -\nAugmented Generation (RAG).\nA GitHub Actions workflow automatically deploys updates whenever a pull request is approved.\nThe organization has the following requirements:\n• Validate that responses remain grounded in the retrieved documents before deployment.\n• Prevent pull requests from being merged if the evaluation does not satisfy the required quality\nthresholds."
  },
  {
    "id": 20,
    "type": "single",
    "question": "You are creating an image -processing workflow in a Microsoft Foundry project. The workflow must\nmeet the following requirements:\n• Generate multiple alternative versions of an existing product image for marketing campaigns.\n• Preserve the overall composition, lighting, and subject.\n• Use the built -in image generation capabilities without training a custom model.\nYou need to configure the workflow to generate several stylistic alternatives from the original image.\nHow should you configure the workflow?",
    "options": [
      {
        "id": "A",
        "text": "Enable image_variation mode and provide the original image as the input."
      },
      {
        "id": "B",
        "text": "Enable mask_inpainting and provide a mask that covers the entire image."
      },
      {
        "id": "C",
        "text": "Enable text_to_image mode and describe the original image in the prompt."
      },
      {
        "id": "D",
        "text": "Enable image_to_image mode with the strength parameter set to 1.0."
      }
    ],
    "correctAnswer": [
      "A"
    ],
    "sourceAnswer": "A. Enable image_variation mode and provide the original image as the input.",
    "explanation": "Correct Answer:\nA. Enable image_variation mode and provide the original image as the input.\nThe image_variation  mode is specifically designed to generate multiple alternative versions of an existing\nimage while preserving its key visual characteristics. It maintains the overall composition, lighting, subject,\nand structure of the original image, making it ideal for  creating different marketing variations of a product\n\nphoto. Since it is a built -in capability of Microsoft Foundry image generation models, it also satisfies the\nrequirement of generating alternatives without training a custom model.\n\nIncorrect Answers:\nB. Enable mask_inpainting and provide a mask that covers the entire image.\nMask inpainting is intended to modify selected portions of an image. Using a mask that covers the entire\nimage effectively repaints the whole image and is not designed for generating multiple stylistic variations\nwhile preserving the original composition.\nC. Enable text_to_image mode and describe the original image in the prompt.\nText-to-image generation creates a new image based solely on the text prompt. Even with a detailed\ndescription, it cannot reliably preserve the exact composition, lighting, and subject of the original product\nimage.\nD. Enable image_to_image mode with the strength parameter set to 1.0.\nWith image -to-image  generation, a strength  value of 1.0 gives maximum influence to the text prompt and\nminimal influence to the input image. This makes it unlikely to preserve the original composition and visual\ncharacteristics.",
    "incorrectExplanations": {
      "B": "Enable mask_inpainting and provide a mask that covers the entire image.\nMask inpainting is intended to modify selected portions of an image. Using a mask that covers the entire\nimage effectively repaints the whole image and is not designed for generating multiple stylistic variations\nwhile preserving the original composition.",
      "C": "Enable text_to_image mode and describe the original image in the prompt.\nText-to-image generation creates a new image based solely on the text prompt. Even with a detailed\ndescription, it cannot reliably preserve the exact composition, lighting, and subject of the original product\nimage.",
      "D": "Enable image_to_image mode with the strength parameter set to 1.0.\nWith image -to-image  generation, a strength  value of 1.0 gives maximum influence to the text prompt and\nminimal influence to the input image. This makes it unlikely to preserve the original composition and visual\ncharacteristics."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests image / video generation concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Enable image_variation mode and provide the original image as the input.",
    "topic": "Image / Video Generation",
    "sourceQuestionNumber": 20,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 21,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an agent.\nThe agent uses a knowledge source built from documents stored in Azure Blob Storage. The documents\ninclude digitally scanned PDFs that contain multipage tables.\nYou have an ingestion job that extracts only plain text, causing loss of table structure, headings, and page -\nnumber metadata.\nUsers frequently ask questions that require the retrieval of specific table rows across the pages.\nYou need to configure an ingestion job for a Retrieval Augmented Generation (RAG) pipeline that performs\noptical character recognition (OCR) on scanned PDFs, preserves tables and headings as structure -aware\nchunks, and stores page -number metadata with each  chunk.\nHow should you configure the ingestion job?",
    "options": [
      {
        "id": "A",
        "text": "Use advanced data parsing to reingest the documents."
      },
      {
        "id": "B",
        "text": "Use OCR and page -level chunking."
      },
      {
        "id": "C",
        "text": "Use page -level OCR extraction and store each page as a single chunk."
      },
      {
        "id": "D",
        "text": "Use basic parsing and fixed -size chunking."
      }
    ],
    "correctAnswer": [
      "A"
    ],
    "sourceAnswer": "A. Use advanced data parsing to reingest the documents.",
    "explanation": "Correct Answer:\nA. Use advanced data parsing to reingest the documents.\nAdvanced data parsing  is designed for ingestion scenarios involving complex documents such as scanned\nPDFs. It performs OCR on scanned content, preserves document structure including headings, tables, and\nsections, creates structure -aware chunks instead of plain -text chunks, a nd stores useful metadata such as\npage numbers with each chunk. This enables Retrieval -Augmented Generation (RAG) systems to retrieve\nspecific table rows across multiple pages while maintaining the original document context. Since the current\n\ningestion process loses table structure and metadata, reingesting the documents with advanced data parsing\ndirectly addresses all the stated requirements.\n\nIncorrect Answers:\nB. Use OCR and page -level chunking.\nAlthough OCR extracts text from scanned PDFs, page -level chunking stores an entire page as a chunk and\ndoes not preserve document structure such as tables and headings as structure -aware chunks.\nC. Use page -level OCR extraction and store each page as a single chunk.\nStoring each page as a single chunk produces large chunks that make retrieval less precise, especially when\nusers need information from specific table rows across pages.\nD. Use basic parsing and fixed -size chunking.\nBasic parsing with fixed -size chunking loses document structure, table relationships, headings, and page\nmetadata, making it unsuitable for scanned documents used in RAG.",
    "incorrectExplanations": {
      "B": "Use OCR and page -level chunking.\nAlthough OCR extracts text from scanned PDFs, page -level chunking stores an entire page as a chunk and\ndoes not preserve document structure such as tables and headings as structure -aware chunks.",
      "C": "Use page -level OCR extraction and store each page as a single chunk.\nStoring each page as a single chunk produces large chunks that make retrieval less precise, especially when\nusers need information from specific table rows across pages.",
      "D": "Use basic parsing and fixed -size chunking.\nBasic parsing with fixed -size chunking loses document structure, table relationships, headings, and page\nmetadata, making it unsuitable for scanned documents used in RAG."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Use advanced data parsing to reingest the documents.",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 21,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 22,
    "type": "single",
    "question": "A Microsoft Foundry agent helps engineers troubleshoot production systems.\nThe solution must meet the following requirements:\n• Download diagnostic logs from an internal web application that does not expose APIs.\n• Analyze the downloaded log files to identify performance bottlenecks.\nWhich combination of tools should you recommend?",
    "options": [
      {
        "id": "A",
        "text": "Computer use and Code interpreter"
      },
      {
        "id": "B",
        "text": "File search and Microsoft Fabric"
      },
      {
        "id": "C",
        "text": "Grounding with Bing Search and Code interpreter"
      },
      {
        "id": "D",
        "text": "Computer use and File search"
      }
    ],
    "correctAnswer": [
      "A"
    ],
    "sourceAnswer": "A. Computer use and Code interpreter",
    "explanation": "Correct Answer:\nA. Computer use and Code interpreter\nThis scenario requires two distinct capabilities. Computer Use  enables the agent to interact with web\napplications through their graphical user interface, making it possible to navigate the internal web application\nand download diagnostic log files even when no APIs are available. Code Interpreter  can then analyze the\ndownloaded log files by executing Python code to identify performance bottlenecks, detect patterns,\ngenerate statistics, and visualize results. Together, these tools satisfy both requirements with minimal custom\ndevelopment.\n\nIncorrect Answers:\nB. File search and Microsoft Fabric\nFile Search retrieves information from indexed documents, while Microsoft Fabric is an analytics platform.\nNeither tool can interact with a web application's user interface to download log files.\n\nC. Grounding with Bing Search and Code interpreter\nGrounding with Bing Search retrieves information from public websites. It cannot access an internal web\napplication or download diagnostic logs.\nD. Computer use and File search\nComputer Use can download the log files, but File Search is intended for retrieving information from indexed\ndocuments rather than analyzing log files for performance bottlenecks.",
    "incorrectExplanations": {
      "B": "File search and Microsoft Fabric\nFile Search retrieves information from indexed documents, while Microsoft Fabric is an analytics platform.\nNeither tool can interact with a web application's user interface to download log files.",
      "C": "Grounding with Bing Search and Code interpreter\nGrounding with Bing Search retrieves information from public websites. It cannot access an internal web\napplication or download diagnostic logs.",
      "D": "Computer use and File search\nComputer Use can download the log files, but File Search is intended for retrieving information from indexed\ndocuments rather than analyzing log files for performance bottlenecks."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests agent tools & workflows concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Computer use and Code interpreter",
    "topic": "Agent Tools & Workflows",
    "sourceQuestionNumber": 22,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 23,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an internal Q&A agent.\nUsers report the following issues when they ask the agent questions:\nAn increase in the following response: “No relevant information found”\nPeriodic HTTP 429 rate limit exceeded errors during peak hours\nYou need to identify whether each issue is caused by model unavailability, resource limits, or inference\nfailures.\nWhat should you do?",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "Metrics to enable: Model Availability Rate and Provisioned Utilization\nModel Availability Rate  helps determine whether requests are failing because the model deployment is\nunavailable. Provisioned Utilization  shows how much of the model's allocated capacity is being consumed,\nmaking it possible to identify whether HTTP 429 errors are caused by resource exhaustion during peak\nusage. Together, these metrics help distinguish between model unavailability and capac ity-related throttling.\nDiagnostic log to collect: RequestResponse\nThe RequestResponse  diagnostic log captures detailed information about inference requests and responses,\nincluding HTTP status codes, error details, latency, and failure reasons. This enables developers to determine\nwhether requests failed because of inference errors, thrott ling, or other runtime issues, making it the\nappropriate diagnostic log for troubleshooting the reported problems.",
    "explanation": "Correct Answers:\nMetrics to enable: Model Availability Rate and Provisioned Utilization\nModel Availability Rate  helps determine whether requests are failing because the model deployment is\nunavailable. Provisioned Utilization  shows how much of the model's allocated capacity is being consumed,\nmaking it possible to identify whether HTTP 429 errors are caused by resource exhaustion during peak\nusage. Together, these metrics help distinguish between model unavailability and capac ity-related throttling.\nDiagnostic log to collect: RequestResponse\nThe RequestResponse  diagnostic log captures detailed information about inference requests and responses,\nincluding HTTP status codes, error details, latency, and failure reasons. This enables developers to determine\nwhether requests failed because of inference errors, thrott ling, or other runtime issues, making it the\nappropriate diagnostic log for troubleshooting the reported problems.\n\nIncorrect Answers:\nOnly Tokens Cache Match Rate\nThis metric measures cache effectiveness and does not help identify model availability or throttling issues.\nOnly Total Requests filtered to status code 200\nMonitoring only successful requests ignores failed requests, including HTTP 429 errors and inference\nfailures.\nTime To Response and Total Tokens\nThese metrics measure latency and token consumption but do not identify whether failures are caused by\nmodel availability or resource limits.\n\nAllMetrics\nAllMetrics provides aggregated performance metrics but does not include the detailed request and response\ninformation required to diagnose inference failures.\n\naudit\nAudit logs record administrative and management operations, not inference request failures.\ntrace\nTrace logs provide execution traces but do not capture the complete inference request and response details\nneeded to analyze HTTP 429 and inference failures.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q23-p26-d609df27.png"
    ],
    "answerImages": [
      "assets/questions/q23-p27-14900f4f.png"
    ],
    "concept": "This question tests foundry agent service concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Metrics to enable: Model Availability Rate and Provisioned Utilization",
    "topic": "Foundry Agent Service",
    "sourceQuestionNumber": 23,
    "needsReview": true,
    "sourceMaterial": "You have a Microsoft Foundry project that contains an internal Q&A agent.\nUsers report the following issues when they ask the agent questions:\nAn increase in the following response: “No relevant information found”\nPeriodic HTTP 429 rate limit exceeded errors during peak hours\nYou need to identify whether each issue is caused by model unavailability, resource limits, or inference\nfailures.\nWhat should you do?"
  },
  {
    "id": 24,
    "type": "multiple",
    "question": "You have a Microsoft Foundry project that contains a prompt agent used by a customer support web\napp. The agent is invoked from a Python service that does NOT run in the Foundry portal.\nYou need to implement end -to-end tracing to capture latency breakdowns and exceptions across agent runs.\nWhich two components can you use?",
    "options": [
      {
        "id": "A",
        "text": "a Log Analytics workspace"
      },
      {
        "id": "B",
        "text": "Application Insights"
      },
      {
        "id": "C",
        "text": "OpenTelemetry"
      },
      {
        "id": "D",
        "text": "the Azure Monitor Agent"
      },
      {
        "id": "E",
        "text": "Microsoft Sentinel"
      }
    ],
    "correctAnswer": [
      "B",
      "C"
    ],
    "sourceAnswer": "B. Application Insights\nC. OpenTelemetry",
    "explanation": "Correct Answers:\nB. Application Insights\nApplication Insights is used to collect, store, and visualize telemetry generated by the application and\nMicrosoft Foundry Agent Service. It provides end -to-end monitoring, including request latency, dependency\ntracking, exceptions, and distributed traces.  This allows developers to analyze agent performance and\ntroubleshoot failures across agent runs.\nC. OpenTelemetry\nOpenTelemetry is the industry -standard framework for collecting distributed traces, metrics, and logs. Since\nthe Python service runs outside the Foundry portal, it can be instrumented with OpenTelemetry to generate\nend-to-end traces. These traces can then be exported to Application Insights, providing detailed latency\nbreakdowns and exception tracking across the entire application workflow.\n\nIncorrect Answers:\nA. a Log Analytics workspace\nA Log Analytics workspace stores and queries monitoring data, but it does not provide application\ninstrumentation or distributed tracing by itself.\nD. the Azure Monitor Agent\nThe Azure Monitor Agent collects telemetry from Azure virtual machines and servers. It is not used to\ninstrument Python applications or capture end -to-end application traces.\nE. Microsoft Sentinel\nMicrosoft Sentinel is a security information and event management solution used for threat detection and\nsecurity analytics. It is not intended for application performance tracing.",
    "incorrectExplanations": {
      "A": "a Log Analytics workspace\nA Log Analytics workspace stores and queries monitoring data, but it does not provide application\ninstrumentation or distributed tracing by itself.",
      "D": "the Azure Monitor Agent\nThe Azure Monitor Agent collects telemetry from Azure virtual machines and servers. It is not used to\ninstrument Python applications or capture end -to-end application traces.",
      "E": "Microsoft Sentinel\nMicrosoft Sentinel is a security information and event management solution used for threat detection and\nsecurity analytics. It is not intended for application performance tracing."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests evaluation & observability concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Application Insights",
    "topic": "Evaluation & Observability",
    "sourceQuestionNumber": 24,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 25,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains a customer support agent.\nThe agent uses multiple tools during execution. Users report that responses are delayed because the agent\nwaits for several independent tool calls to complete.\nYou need to reduce the overall response time. The solution must be implemented in the application logic.\nWhat should you do?",
    "options": [
      {
        "id": "A",
        "text": "Execute independent tool calls in parallel before generating the response."
      },
      {
        "id": "B",
        "text": "Increase the maximum completion tokens."
      },
      {
        "id": "C",
        "text": "Replace the language model with a larger deployment."
      },
      {
        "id": "D",
        "text": "Enable persistent agent memory."
      }
    ],
    "correctAnswer": [
      "A"
    ],
    "sourceAnswer": "A. Execute independent tool calls in parallel before generating the response.",
    "explanation": "Correct Answer:\nA. Execute independent tool calls in parallel before generating the response.\nWhen multiple tool calls are independent of each other, executing them in parallel significantly reduces the\noverall response time. Instead of waiting for one tool to finish before starting the next, the application can\ninvoke all independent tools simulta neously and wait for all results before generating the final response.\nSince the question specifically states that the solution must be implemented in the application logic , parallel\nexecution is the recommended approach to improve performance.\n\nIncorrect Answers:\nB. Increase the maximum completion tokens.\nIncreasing the maximum completion tokens allows the model to generate longer responses but does not\nreduce the latency caused by waiting for tool calls.\nC. Replace the language model with a larger deployment.\nA larger model generally increases processing time and cost. It does not address delays caused by\nsequential tool execution.\nD. Enable persistent agent memory.\nPersistent agent memory stores information across conversations to improve personalization. It does not\nreduce the execution time of independent tool calls.",
    "incorrectExplanations": {
      "B": "Increase the maximum completion tokens.\nIncreasing the maximum completion tokens allows the model to generate longer responses but does not\nreduce the latency caused by waiting for tool calls.",
      "C": "Replace the language model with a larger deployment.\nA larger model generally increases processing time and cost. It does not address delays caused by\nsequential tool execution.",
      "D": "Enable persistent agent memory.\nPersistent agent memory stores information across conversations to improve personalization. It does not\nreduce the execution time of independent tool calls."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests agent tools & workflows concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Execute independent tool calls in parallel before generating the response.",
    "topic": "Agent Tools & Workflows",
    "sourceQuestionNumber": 25,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 26,
    "type": "drag-drop",
    "question": "You have a Microsoft Foundry project that contains a customer support agent grounded in internal\ndocumentation. After a recent update, users report the following issues:\n• Some answers are unsupported by retrieved documents.\n• A small number of responses are flagged for policy violations.\nYou need to evaluate each issue.\nWhich observability signals should you use for each issue?\nTo answer, drag the appropriate observability signals to the correct issues. Each observability signal may be\nused once, more than once, or not at all.",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "Unsupported responses: Groundedness evaluation metrics\nGroundedness evaluation metrics measure whether an agent's responses are supported by the retrieved\ndocuments in a Retrieval -Augmented Generation (RAG) solution. If answers are not backed by the retrieved\ncontent, these metrics help identify hallucinations  and determine whether the response is properly grounded\nin the knowledge source. Since users report that some answers are unsupported by the retrieved\ndocuments, groundedness evaluation metrics are the appropriate observability signal.\nPolicy violations: Risk and safety metrics\nRisk and safety metrics evaluate responses for content policy violations, including harmful, unsafe, or\notherwise non -compliant content. They help identify responses that violate organizational or responsible AI\npolicies, making them the appropriate observ ability signal for monitoring policy violations.",
    "explanation": "Correct Answers:\nUnsupported responses: Groundedness evaluation metrics\nGroundedness evaluation metrics measure whether an agent's responses are supported by the retrieved\ndocuments in a Retrieval -Augmented Generation (RAG) solution. If answers are not backed by the retrieved\ncontent, these metrics help identify hallucinations  and determine whether the response is properly grounded\nin the knowledge source. Since users report that some answers are unsupported by the retrieved\ndocuments, groundedness evaluation metrics are the appropriate observability signal.\nPolicy violations: Risk and safety metrics\nRisk and safety metrics evaluate responses for content policy violations, including harmful, unsafe, or\notherwise non -compliant content. They help identify responses that violate organizational or responsible AI\npolicies, making them the appropriate observ ability signal for monitoring policy violations.\n\nIncorrect Answers:\nLatency breakdown traces\nLatency breakdown traces measure the execution time of different stages of an agent run. They are useful for\nperformance analysis but do not evaluate grounding or policy compliance.\nToken usage analytics\nToken usage analytics track input and output token consumption for cost and usage analysis. They do not\ndetermine whether responses are grounded or whether they violate content policies.",
    "incorrectExplanations": {},
    "matchingPairs": [
      {
        "target": "Unsupported responses",
        "value": "Groundedness evaluation metrics"
      },
      {
        "target": "Policy violations",
        "value": "Risk and safety metrics"
      }
    ],
    "dragCandidates": [
      "Groundedness evaluation metrics",
      "Latency breakdown traces",
      "Risk and safety metrics",
      "Token usage analytics"
    ],
    "sourceImages": [
      "assets/questions/q26-p30-658daf5e.png"
    ],
    "answerImages": [
      "assets/questions/q26-p30-81ea54db.png"
    ],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Unsupported responses: Groundedness evaluation metrics",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 26,
    "needsReview": true,
    "sourceMaterial": "You have a Microsoft Foundry project that contains a customer support agent grounded in internal\ndocumentation. After a recent update, users report the following issues:\n• Some answers are unsupported by retrieved documents.\n• A small number of responses are flagged for policy violations.\nYou need to evaluate each issue.\nWhich observability signals should you use for each issue?\nTo answer, drag the appropriate observability signals to the correct issues. Each observability signal may be\nused once, more than once, or not at all."
  },
  {
    "id": 27,
    "type": "single",
    "question": "You are creating an image -editing workflow in a Microsoft Foundry project.\nThe workflow must meet the following requirements:\n• Ensure that background objects can be removed by applying a mask -based inpainting edit.\n• Preserve the original lighting and style of the edited images.\n• Use the built -in image editing controls, NOT a custom model.\nYou need to ensure that image edits apply exclusively inside the masked area.\nHow should you configure the workflow?",
    "options": [
      {
        "id": "A",
        "text": "Set generation mode to image_variation and provide the original image as a reference."
      },
      {
        "id": "B",
        "text": "Enable text_to_image mode and a prompt describing the desired background removal."
      },
      {
        "id": "C",
        "text": "Enable image_to_image mode and a high -strength value to regenerate the full image based on the\nprompt."
      },
      {
        "id": "D",
        "text": "Enable mask_inpainting and supply both the input image and a mask indicating which part of the image\nto modify."
      }
    ],
    "correctAnswer": [
      "D"
    ],
    "sourceAnswer": "D. Enable mask_inpainting and supply both the input image and a mask indicating which part of the image\nto modify.",
    "explanation": "Correct Answer:\nD. Enable mask_inpainting and supply both the input image and a mask indicating which part of the image\nto modify.\nMask inpainting  is specifically designed for selective image editing. By providing both the original image and\na mask, the model modifies only the pixels within the masked region while preserving the rest of the image,\nincluding its lighting, style, composition, and subj ect. This makes it ideal for removing background objects\nwhile keeping the remainder of the image unchanged. Since mask inpainting is a built -in image editing\ncapability of Microsoft Foundry, it also satisfies the requirement to avoid training a custom mod el.\n\nIncorrect Answers:\nA. Set generation mode to image_variation and provide the original image as a reference.\nImage variation generates alternative versions of the entire image. It is not intended for editing only a specific\nmasked region.\nB. Enable text_to_image mode and a prompt describing the desired background removal.\nText-to-image generates a completely new image from a text prompt. It cannot reliably preserve the original\nlighting, composition, and style, nor does it support mask -based editing.\nC. Enable image_to_image mode and a high -strength value to regenerate the full image based on the\nprompt.\nA high strength  value causes the model to regenerate much of the image based on the prompt, rather than\nlimiting edits to the masked area. As a result, changes may extend beyond the intended region.",
    "incorrectExplanations": {
      "A": "Set generation mode to image_variation and provide the original image as a reference.\nImage variation generates alternative versions of the entire image. It is not intended for editing only a specific\nmasked region.",
      "B": "Enable text_to_image mode and a prompt describing the desired background removal.\nText-to-image generates a completely new image from a text prompt. It cannot reliably preserve the original\nlighting, composition, and style, nor does it support mask -based editing.",
      "C": "Enable image_to_image mode and a high -strength value to regenerate the full image based on the\nprompt.\nA high strength  value causes the model to regenerate much of the image based on the prompt, rather than\nlimiting edits to the masked area. As a result, changes may extend beyond the intended region."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests agent tools & workflows concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Enable mask_inpainting and supply both the input image and a mask indicating which part of the image",
    "topic": "Agent Tools & Workflows",
    "sourceQuestionNumber": 27,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 28,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an agent. The agent uses Azure AI Search in\nFoundry Tools to retrieve documents from a search index.\nThe application returns an error indicating that the specified index cannot be found.\nYou verify that the Azure AI Search service is reachable and authentication succeeds.\nYou need to configure the request to reference the correct search index.\nTo what should you set the index property?",
    "options": [
      {
        "id": "A",
        "text": "The Azure AI Search service name"
      },
      {
        "id": "B",
        "text": "The Azure AI Search endpoint URL"
      },
      {
        "id": "C",
        "text": "The Azure AI Search index name"
      },
      {
        "id": "D",
        "text": "The Microsoft Foundry project name"
      }
    ],
    "correctAnswer": [
      "C"
    ],
    "sourceAnswer": "C. The Azure AI Search index name",
    "explanation": "Correct Answer:\nC. The Azure AI Search index name\nThe index  property must be set to the Azure AI Search index name , which uniquely identifies the search\nindex that contains the documents to be queried. Since the Azure AI Search service is reachable and\nauthentication succeeds, the error indicates that the request is referencing an incorrect or non -existent\nindex. Spec ifying the correct index name enables the agent to retrieve documents from the intended search\nindex.\n\nIncorrect Answers:\nA. The Azure AI Search service name\nThe service name identifies the Azure AI Search service instance, not the specific index within that service.\nB. The Azure AI Search endpoint URL\nThe endpoint URL specifies the location of the Azure AI Search service. It does not identify which search\nindex should be queried.\nD. The Microsoft Foundry project name\nThe Microsoft Foundry project name identifies the AI project but has no relationship to the Azure AI Search\nindex used for document retrieval.",
    "incorrectExplanations": {
      "A": "The Azure AI Search service name\nThe service name identifies the Azure AI Search service instance, not the specific index within that service.",
      "B": "The Azure AI Search endpoint URL\nThe endpoint URL specifies the location of the Azure AI Search service. It does not identify which search\nindex should be queried.",
      "D": "The Microsoft Foundry project name\nThe Microsoft Foundry project name identifies the AI project but has no relationship to the Azure AI Search\nindex used for document retrieval."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "The Azure AI Search index name",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 28,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 29,
    "type": "single",
    "question": "You need to recommend a plan to create a customer support agent by using the Microsoft Foundry\nAgent Service.\nThe agent must meet the following requirements:\n• Retain user preferences across multiple conversations.\n• Enable users to provide contextual grounding by directly uploading documents during a chat.\nWhich Foundry capability should you recommend for each requirement?",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "To retain user preferences across conversations: Agent memory that uses persistent storage\nPersistent agent memory is designed to store long -term user information such as preferences, allowing the\nagent to remember details across multiple conversations. This capability enables personalized interactions\nwithout requiring users to repeat their pre ferences in every new chat.\nTo enable users to provide contextual grounding during chats: File search tool\nThe File search  tool allows users to upload documents directly during a conversation. The agent indexes\nthese uploaded files and retrieves relevant information from them to ground its responses. This enables\ncontextual question answering based on documents supplied by th e user during the chat.",
    "explanation": "Correct Answers:\nTo retain user preferences across conversations: Agent memory that uses persistent storage\nPersistent agent memory is designed to store long -term user information such as preferences, allowing the\nagent to remember details across multiple conversations. This capability enables personalized interactions\nwithout requiring users to repeat their pre ferences in every new chat.\nTo enable users to provide contextual grounding during chats: File search tool\nThe File search  tool allows users to upload documents directly during a conversation. The agent indexes\nthese uploaded files and retrieves relevant information from them to ground its responses. This enables\ncontextual question answering based on documents supplied by th e user during the chat.\n\nIncorrect Answers:\nConversation history\nConversation history maintains messages within a conversation but is not intended for storing long -term\nuser preferences across multiple conversations.\n\nOrchestration -managed session context\nSession context exists only for the duration of the current conversation and is discarded when the session\nends.\nAzure AI Search tool\nAzure AI Search retrieves information from existing Azure AI Search indexes. It is not designed for users to\nupload documents directly during a chat.\nCode interpreter tool\nThe Code Interpreter executes code and analyzes uploaded files but is not intended to provide document\ngrounding through semantic document retrieval.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q29-p33-e8c732d4.png"
    ],
    "answerImages": [
      "assets/questions/q29-p33-62cd3f45.png"
    ],
    "concept": "This question tests foundry agent service concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "To retain user preferences across conversations: Agent memory that uses persistent storage",
    "topic": "Foundry Agent Service",
    "sourceQuestionNumber": 29,
    "needsReview": true,
    "sourceMaterial": "You need to recommend a plan to create a customer support agent by using the Microsoft Foundry\nAgent Service.\nThe agent must meet the following requirements:\n• Retain user preferences across multiple conversations.\n• Enable users to provide contextual grounding by directly uploading documents during a chat.\nWhich Foundry capability should you recommend for each requirement?"
  },
  {
    "id": 30,
    "type": "single",
    "question": "You are developing an image -editing workflow in a Microsoft Foundry project.\nThe workflow must meet the following requirements:\n• Replace the sky in landscape photographs with a sunset.\n• Modify only the selected sky region.\n• Preserve all foreground objects without regeneration.\n• Use the built -in image editing capabilities.\nYou need to configure the workflow.\nHow should you configure the workflow?",
    "options": [
      {
        "id": "A",
        "text": "Enable image_variation mode and provide the original image."
      },
      {
        "id": "B",
        "text": "Enable mask_inpainting and provide the original image together with a mask covering the sky."
      },
      {
        "id": "C",
        "text": "Enable text_to_image mode and describe the desired landscape."
      },
      {
        "id": "D",
        "text": "Enable image_to_image mode with a high -strength value."
      }
    ],
    "correctAnswer": [
      "B"
    ],
    "sourceAnswer": "B. Enable mask_inpainting and provide the original image together with a mask covering the sky.",
    "explanation": "Correct Answer:\nB. Enable mask_inpainting and provide the original image together with a mask covering the sky.\nMask inpainting  is the built -in image editing capability designed for selective image modifications. By\nsupplying the original image along with a mask covering only the sky, the model applies the requested edit\nexclusively within the masked region while preserving the re st of the image. This ensures that the foreground\nobjects, lighting, composition, and other unmasked areas remain unchanged. It satisfies all the stated\nrequirements by replacing only the sky with a sunset using the built -in image editing capabilities.\n\nIncorrect Answers:\nA. Enable image_variation mode and provide the original image.\nImage variation generates alternative versions of the entire image rather than modifying only a selected\nregion defined by a mask.\nC. Enable text_to_image mode and describe the desired landscape.\nText-to-image generates a completely new image from a text prompt and cannot preserve the original\nforeground objects or composition.\n\nD. Enable image_to_image mode with a high -strength value.\nA high -strength value causes much of the image to be regenerated based on the prompt, which can modify\nareas outside the intended sky region and alter foreground objects.",
    "incorrectExplanations": {
      "A": "Enable image_variation mode and provide the original image.\nImage variation generates alternative versions of the entire image rather than modifying only a selected\nregion defined by a mask.",
      "C": "Enable text_to_image mode and describe the desired landscape.\nText-to-image generates a completely new image from a text prompt and cannot preserve the original\nforeground objects or composition.",
      "D": "Enable image_to_image mode with a high -strength value.\nA high -strength value causes much of the image to be regenerated based on the prompt, which can modify\nareas outside the intended sky region and alter foreground objects."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests agent tools & workflows concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Enable mask_inpainting and provide the original image together with a mask covering the sky.",
    "topic": "Agent Tools & Workflows",
    "sourceQuestionNumber": 30,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 31,
    "type": "single",
    "question": "You are planning a Microsoft Foundry project named Project1 that will contain multiple agents. Each\nagent will access the same Azure AI Search resource.\nYou need to recommend a solution to centrally manage the Azure AI Search credentials within Project1. The\nsolution must be implemented across all the agents.\nWhat should you recommend?",
    "options": [
      {
        "id": "A",
        "text": "Enable role -based access control (RBAC) for the Azure AI Search resource."
      },
      {
        "id": "B",
        "text": "Disable key -based access control on the Azure AI Search resource."
      },
      {
        "id": "C",
        "text": "Add a connection to the Azure AI Search resource."
      },
      {
        "id": "D",
        "text": "Create a managed private endpoint that connects to the Azure AI Search resource."
      }
    ],
    "correctAnswer": [
      "C"
    ],
    "sourceAnswer": "C. Add a connection to the Azure AI Search resource.",
    "explanation": "Correct Answer:\nC. Add a connection to the Azure AI Search resource.\nA connection  in Microsoft Foundry provides a centralized way to store and manage the endpoint and\nauthentication credentials for external resources such as Azure AI Search. Once the connection is created\nwithin Project1 , all agents in the project can reference the same connection instead of maintaining separate\ncredentials. This simplifies administration, ensures consistent configuration, and eliminates duplication\nacross multiple agents.\n\nIncorrect Answers:\nA. Enable role -based access control (RBAC) for the Azure AI Search resource.\nRBAC controls access permissions to the Azure AI Search resource but does not centrally manage or share\nconnection credentials across multiple agents.\nB. Disable key -based access control on the Azure AI Search resource.\nDisabling key -based authentication changes the authentication method but does not provide centralized\ncredential management within the Foundry project.\nD. Create a managed private endpoint that connects to the Azure AI Search resource.\nA managed private endpoint provides secure network connectivity to the Azure AI Search resource but does\nnot manage or centralize authentication credentials.",
    "incorrectExplanations": {
      "A": "Enable role -based access control (RBAC) for the Azure AI Search resource.\nRBAC controls access permissions to the Azure AI Search resource but does not centrally manage or share\nconnection credentials across multiple agents.",
      "B": "Disable key -based access control on the Azure AI Search resource.\nDisabling key -based authentication changes the authentication method but does not provide centralized\ncredential management within the Foundry project.",
      "D": "Create a managed private endpoint that connects to the Azure AI Search resource.\nA managed private endpoint provides secure network connectivity to the Azure AI Search resource but does\nnot manage or centralize authentication credentials."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Add a connection to the Azure AI Search resource.",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 31,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 32,
    "type": "single",
    "question": "You are deploying a support agent that enables users to upload photos.\nYou need to automatically classify uploaded images for harmful content. The solution must block content\nbased on severity levels.\nWhat should you do?",
    "options": [
      {
        "id": "A",
        "text": "Apply keyword scanning to optical character recognition (OCR) output by using Azure Vision in Foundry\nTools."
      },
      {
        "id": "B",
        "text": "Enable prompt shields."
      },
      {
        "id": "C",
        "text": "Use blocklists."
      },
      {
        "id": "D",
        "text": "Implement image moderation."
      }
    ],
    "correctAnswer": [
      "D"
    ],
    "sourceAnswer": "D. Implement image moderation.",
    "explanation": "Correct Answer:\nD. Implement image moderation.\nImage moderation  is designed to analyze uploaded images and classify them for harmful or unsafe content.\nIt evaluates images against predefined safety categories and assigns severity levels, allowing the application\nto automatically block content that exceeds configured t hresholds. This directly satisfies the requirement to\nclassify uploaded images and block them based on severity levels using Microsoft's built -in responsible AI\ncapabilities.\n\nIncorrect Answers:\nA. Apply keyword scanning to optical character recognition (OCR) output by using Azure Vision in Foundry\nTools.\nOCR extracts text from images, but keyword scanning cannot detect harmful visual content such as violence,\nsexual content, or graphic imagery.\nB. Enable prompt shields.\nPrompt shields protect against prompt injection attacks and malicious instructions. They do not classify\nuploaded images for harmful visual content.\nC. Use blocklists.\nBlocklists filter specific words or phrases in text. They are not intended for image content moderation or\nseverity -based image classification.",
    "incorrectExplanations": {
      "A": "Apply keyword scanning to optical character recognition (OCR) output by using Azure Vision in Foundry\nTools.\nOCR extracts text from images, but keyword scanning cannot detect harmful visual content such as violence,\nsexual content, or graphic imagery.",
      "B": "Enable prompt shields.\nPrompt shields protect against prompt injection attacks and malicious instructions. They do not classify\nuploaded images for harmful visual content.",
      "C": "Use blocklists.\nBlocklists filter specific words or phrases in text. They are not intended for image content moderation or\nseverity -based image classification."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests content safety & prompt shields concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Implement image moderation.",
    "topic": "Content Safety & Prompt Shields",
    "sourceQuestionNumber": 32,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 33,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an agent named PaymentAgent.\nPaymentAgent includes a function tool that issues customer refunds by using an external API.\nYou are creating a workflow in YAML.\nYou need to ensure that the workflow pauses for human approval and continues with the refund step only\nafter approval is granted.\nHow should you complete the workflow definition?",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "Type: ask_question\nThe ask_question  workflow step pauses execution and waits for human input before continuing. It is\ndesigned for Human -in-the-Loop (HITL) scenarios where a user or approver must review and approve an\naction before the workflow proceeds. Since the requirement is to pause th e workflow until a human approves\nthe refund, this is the appropriate step type.\nCondition: approval == \"approved\"\nThe refund should only be executed after explicit approval is received. Setting the condition to approval ==\n\"approved\"  ensures that the execute_refund  step runs only when the approval step returns the value\napproved , preventing unauthorized refunds.",
    "explanation": "Correct Answers:\n\nType: ask_question\nThe ask_question  workflow step pauses execution and waits for human input before continuing. It is\ndesigned for Human -in-the-Loop (HITL) scenarios where a user or approver must review and approve an\naction before the workflow proceeds. Since the requirement is to pause th e workflow until a human approves\nthe refund, this is the appropriate step type.\nCondition: approval == \"approved\"\nThe refund should only be executed after explicit approval is received. Setting the condition to approval ==\n\"approved\"  ensures that the execute_refund  step runs only when the approval step returns the value\napproved , preventing unauthorized refunds.\n\nIncorrect Answers:\nbasic_chat\nA basic chat step generates conversational responses but does not pause the workflow for structured human\napproval.\ndata_transformation\nA data transformation step modifies or reshapes data. It is not intended for collecting human approval.\npropose_refund.output != null\nThis condition only checks whether the previous step produced an output. It does not verify that a human\napproved the refund.\ntrue\nThis condition always evaluates to true, causing the refund to execute regardless of whether approval was\ngranted.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q33-p37-340b5ef6.png"
    ],
    "answerImages": [
      "assets/questions/q33-p37-27214b5e.png"
    ],
    "concept": "This question tests ci/cd concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Type: ask_question",
    "topic": "CI/CD",
    "sourceQuestionNumber": 33,
    "needsReview": true,
    "sourceMaterial": "You have a Microsoft Foundry project that contains an agent named PaymentAgent.\nPaymentAgent includes a function tool that issues customer refunds by using an external API.\nYou are creating a workflow in YAML.\nYou need to ensure that the workflow pauses for human approval and continues with the refund step only\nafter approval is granted.\nHow should you complete the workflow definition?"
  },
  {
    "id": 34,
    "type": "single",
    "question": "You have a Microsoft Foundry project that uses Azure AI Search to ground an agent in internal\ndocumentation. After a recent content update, users report that the agent’s answers have become less\naccurate.\nYou need to identify whether the retrieved content is negatively influencing the model’s generated responses.\nWhich observability signal should you review?",
    "options": [
      {
        "id": "A",
        "text": "indexer status and failure history"
      },
      {
        "id": "B",
        "text": "latency breakdown traces"
      },
      {
        "id": "C",
        "text": "prediction drift metrics"
      },
      {
        "id": "D",
        "text": "groundedness evaluation metrics"
      }
    ],
    "correctAnswer": [
      "D"
    ],
    "sourceAnswer": "D. groundedness evaluation metrics",
    "explanation": "Correct Answer:\nD. groundedness evaluation metrics\nGroundedness evaluation metrics measure whether the agent's generated responses are supported by the\nretrieved documents in a Retrieval -Augmented Generation (RAG) solution. If recent updates to the indexed\ncontent cause the retrieved information to become less relevant or incorrect, groundedness metrics help\n\ndetermine whether the retrieved content is negatively influencing the model's responses. This is the\nappropriate observability signal for diagnosing answer quality issues in a RAG -based agent.\n\nIncorrect Answers:\nA. indexer status and failure history\nIndexer status helps determine whether documents were successfully indexed, but it does not evaluate\nwhether the retrieved content is producing accurate or well -grounded responses.\nB. latency breakdown traces\nLatency breakdown traces measure the execution time of retrieval, tool calls, and model inference. They do\nnot measure response quality or grounding.\nC. prediction drift metrics\nPrediction drift metrics monitor changes in model predictions over time, typically for machine learning\nmodels. They are not used to evaluate whether RAG responses are supported by retrieved documents.",
    "incorrectExplanations": {
      "A": "indexer status and failure history\nIndexer status helps determine whether documents were successfully indexed, but it does not evaluate\nwhether the retrieved content is producing accurate or well -grounded responses.",
      "B": "latency breakdown traces\nLatency breakdown traces measure the execution time of retrieval, tool calls, and model inference. They do\nnot measure response quality or grounding.",
      "C": "prediction drift metrics\nPrediction drift metrics monitor changes in model predictions over time, typically for machine learning\nmodels. They are not used to evaluate whether RAG responses are supported by retrieved documents."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "groundedness evaluation metrics",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 34,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 35,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an agent used by a legal department. The agent\ngenerates answers by using documents retrieved from an Azure AI Search index .\nUsers report that some answers omit important clauses from lengthy legal documents.\nYou need to improve the completeness of responses. The solution must be implemented in the application\nlogic without changing the search index or replacing the deployed model.\nWhat should you do?",
    "options": [
      {
        "id": "A",
        "text": "Increase the number of retrieved document chunks before constructing the prompt."
      },
      {
        "id": "B",
        "text": "Enable Prompt Shields for document attacks."
      },
      {
        "id": "C",
        "text": "Configure Content Safety to annotate responses."
      },
      {
        "id": "D",
        "text": "Use a lower temperature value."
      }
    ],
    "correctAnswer": [
      "A"
    ],
    "sourceAnswer": "A. Increase the number of retrieved document chunks before constructing the prompt.",
    "explanation": "Correct Answer:\nA. Increase the number of retrieved document chunks before constructing the prompt.\nThe agent uses Retrieval -Augmented Generation (RAG) with documents stored in an Azure AI Search index.\nIf users report that important clauses from lengthy legal documents are being omitted, the most effective\nsolution is to retrieve more relevant document chunks before building the prompt sent to the language\nmodel. By increasing the number of retrieved chunks, the application provides the model with a broader and\nmore complete context, improving the likelihood that all relevant legal clauses are included i n the generated\nresponse. This solution is implemented entirely in the application logic and does not require changes to the\nsearch index or the deployed model.\n\nIncorrect Answers:\nB. Enable Prompt Shields for document attacks.\nPrompt Shields protect against prompt injection attacks and malicious instructions. They do not improve\nretrieval completeness or include additional document content.\n\nC. Configure Content Safety to annotate responses.\nContent Safety evaluates responses for harmful or policy -violating content. It does not improve the\ncompleteness of responses generated from retrieved documents.\nD. Use a lower temperature value.\nReducing the temperature makes responses more deterministic, but it does not provide the model with\nadditional document context or prevent important clauses from being omitted.",
    "incorrectExplanations": {
      "B": "Enable Prompt Shields for document attacks.\nPrompt Shields protect against prompt injection attacks and malicious instructions. They do not improve\nretrieval completeness or include additional document content.",
      "C": "Configure Content Safety to annotate responses.\nContent Safety evaluates responses for harmful or policy -violating content. It does not improve the\ncompleteness of responses generated from retrieved documents.",
      "D": "Use a lower temperature value.\nReducing the temperature makes responses more deterministic, but it does not provide the model with\nadditional document context or prevent important clauses from being omitted."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Increase the number of retrieved document chunks before constructing the prompt.",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 35,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 36,
    "type": "drag-drop",
    "question": "You have a Microsoft Foundry project that processes procurement documents submitted by suppliers.\nYou need to implement two pipelines by using Azure Content Understanding in Foundry Tools.\nThe solution must meet the following requirements:\n• Include a pipeline named Pipeline1 that supports cost -effective, high -volume processing of\nstandalone PDF invoices.\n• Include a pipeline named Pipeline2 that supports cross -document validation by using multi -step\nreasoning and reference data.\nHow should you configure each pipeline?\nTo answer, drag the appropriate configurations to the correct pipelines. Each configuration may be used once,\nmore than once, of not at all.",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "Pipeline1: Single -file task in standard mode\nPipeline1 is intended for cost-effective, high -volume processing of standalone PDF invoices . Since each\ninvoice is processed independently and does not require advanced reasoning or cross -document analysis, a\n\nsingle -file task in standard mode  is the most efficient and economical choice. Standard mode is optimized\nfor straightforward document extraction at scale.\nPipeline2: Multi -file task in pro mode\nPipeline2 must perform cross -document validation  using multi -step reasoning  and reference data . This\nrequires analyzing multiple related documents together, comparing information across them, and applying\nadvanced reasoning. A multi -file task in pro mode  is specifically designed for these complex document\nunderstanding scenarios.",
    "explanation": "Correct Answers:\nPipeline1: Single -file task in standard mode\nPipeline1 is intended for cost-effective, high -volume processing of standalone PDF invoices . Since each\ninvoice is processed independently and does not require advanced reasoning or cross -document analysis, a\n\nsingle -file task in standard mode  is the most efficient and economical choice. Standard mode is optimized\nfor straightforward document extraction at scale.\nPipeline2: Multi -file task in pro mode\nPipeline2 must perform cross -document validation  using multi -step reasoning  and reference data . This\nrequires analyzing multiple related documents together, comparing information across them, and applying\nadvanced reasoning. A multi -file task in pro mode  is specifically designed for these complex document\nunderstanding scenarios.\n\nIncorrect Answers:\nMulti -file task in standard mode\nStandard mode does not provide the advanced multi -step reasoning capabilities needed for cross -document\nvalidation.\nSingle -file task in pro mode\nAlthough Pro mode supports advanced reasoning, a single -file task cannot analyze relationships across\nmultiple documents and therefore does not meet the cross -document validation requirement.",
    "incorrectExplanations": {},
    "matchingPairs": [
      {
        "target": "Pipeline1",
        "value": "Single -file task in standard mode"
      },
      {
        "target": "Pipeline2",
        "value": "Multi -file task in pro mode"
      }
    ],
    "dragCandidates": [
      "Multi-file task in pro mode",
      "Multi-file task in standard mode",
      "Single-file task in pro mode",
      "Single-file task in standard mode"
    ],
    "sourceImages": [
      "assets/questions/q36-p40-9158afdb.png"
    ],
    "answerImages": [
      "assets/questions/q36-p40-38d7bf00.png"
    ],
    "concept": "This question tests speech concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Pipeline1: Single -file task in standard mode",
    "topic": "Speech",
    "sourceQuestionNumber": 36,
    "needsReview": true,
    "sourceMaterial": "You have a Microsoft Foundry project that processes procurement documents submitted by suppliers.\nYou need to implement two pipelines by using Azure Content Understanding in Foundry Tools.\nThe solution must meet the following requirements:\n• Include a pipeline named Pipeline1 that supports cost -effective, high -volume processing of\nstandalone PDF invoices.\n• Include a pipeline named Pipeline2 that supports cross -document validation by using multi -step\nreasoning and reference data.\nHow should you configure each pipeline?\nTo answer, drag the appropriate configurations to the correct pipelines. Each configuration may be used once,\nmore than once, of not at all."
  },
  {
    "id": 37,
    "type": "single",
    "question": "You have a multimodal AI generative model that accepts image uploads and uses extracted image text\nto generate responses.\nYou discover that users can upload unsafe images and embed hidden instructions into images to manipulate\nthe model.\nYou need to implement controls to mitigate the risk.\nSolution: You configure a prompt shield for user prompts.\nDoes this meet the goal?",
    "options": [
      {
        "id": "A",
        "text": "Yes"
      },
      {
        "id": "B",
        "text": "No"
      }
    ],
    "correctAnswer": [
      "B"
    ],
    "sourceAnswer": "B. No",
    "explanation": "Prompt Shields for user prompts  protect against direct prompt injection attacks where malicious instructions\nare entered directly by the user in the prompt. In this scenario, the threat comes from uploaded images\ncontaining hidden or embedded text  that is extracted and supplied to the multimodal model. This is an\nindirect prompt injection (document attack) . To mitigate this risk, you should configure Prompt Shields for\ndocument attacks . If the content comes from third -party sources, enabling Spotlighting  provides additional\nprotection by treating that content as lower trust.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests content safety & prompt shields concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "No",
    "topic": "Content Safety & Prompt Shields",
    "sourceQuestionNumber": 37,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 38,
    "type": "single",
    "question": "You have a multimodal AI generative model that accepts image uploads and uses extracted image text\nto generate responses.\nYou discover that users can upload unsafe images and embed hidden instructions into images to manipulate\nthe model.\nYou need to implement controls to mitigate the risk.\nSolution: You configure image moderation to block unsafe content before processing the images.\nDoes this meet the goal?",
    "options": [
      {
        "id": "A",
        "text": "Yes"
      },
      {
        "id": "B",
        "text": "No"
      }
    ],
    "correctAnswer": [
      "B"
    ],
    "sourceAnswer": "B. No",
    "explanation": "Image moderation is designed to detect and block unsafe visual content , such as violence, sexual content,\nor other harmful imagery based on configured severity levels. However, it does not protect against hidden\nprompt injection instructions embedded as text within images . In this scenario, the risk is an indirect\nprompt injection attack , which should be mitigated by using Prompt Shields for document attacks . If the\nimages originate from external or third -party sources, Spotlighting  should also be enabled to treat the\nextracted content as lower trust.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests document processing concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "No",
    "topic": "Document Processing",
    "sourceQuestionNumber": 38,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 39,
    "type": "single",
    "question": "You have a multimodal AI generative model that accepts image uploads and uses extracted image text\nto generate responses.\nYou discover that users can upload unsafe images and embed hidden instructions into images to manipulate\nthe model.\nYou need to implement controls to mitigate the risk.\nSolution: You configure a prompt shield for documents. .\nDoes this meet the goal?",
    "options": [
      {
        "id": "A",
        "text": "Yes"
      },
      {
        "id": "B",
        "text": "No"
      }
    ],
    "correctAnswer": [
      "A"
    ],
    "sourceAnswer": "A. Yes",
    "explanation": "Prompt Shields for documents  are specifically designed to protect against indirect prompt injection attacks\noriginating from documents, images, and other external content. In this scenario, users upload images\ncontaining hidden embedded text  that is extracted and passed to the multimodal model. By enabling Prompt\nShields for documents, the service analyzes the extracted content and detects attempts to manipulate the\nmodel through embedded instructions. This directly mitigates the identified r isk. For third -party or untrusted\ncontent, enabling Spotlighting  provides additional protection by treating the extracted content as lower trust.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests content safety & prompt shields concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Yes",
    "topic": "Content Safety & Prompt Shields",
    "sourceQuestionNumber": 39,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 40,
    "type": "single",
    "question": "You have a multimodal AI generative model that accepts image uploads and uses extracted image text\nto generate responses.\nYou discover that users can upload unsafe images and embed hidden instructions into images to manipulate\nthe model.\nYou need to implement controls to mitigate the risk.\nSolution: You configure protected material detection.\nDoes this meet the goal?",
    "options": [
      {
        "id": "A",
        "text": "Yes"
      },
      {
        "id": "B",
        "text": "No"
      }
    ],
    "correctAnswer": [
      "B"
    ],
    "sourceAnswer": "B. No",
    "explanation": "Protected material detection  is designed to identify copyrighted or protected content, such as copyrighted\ntext, code, lyrics, or other protected material. Its purpose is to help prevent the generation or reproduction of\ncopyrighted content. It does not detect or prevent indirect prompt injection attacks  where hidden\ninstructions are embedded in uploaded images. To mitigate this scenario, the appropriate control is Prompt\nShields for document attacks , which analyze extracted content from documents and images for malicious\ninstructions.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests document processing concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "No",
    "topic": "Document Processing",
    "sourceQuestionNumber": 40,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 41,
    "type": "single",
    "question": "You have a Microsoft Foundry project that ingests scanned PDF invoices stored in Azure Blob Storage.\nEach invoice contains printed fine items and has a table -based layout.\nExtracted results are stored as structured JSON and used as grounding data for an agent in a Retrieval\nAugmented Generation (RAG) solution.\nYou need to create a single analyzer that meets the following requirements:\n• Extracts the invoice number, invoice date, vendor name, and total amount across varying templates\n• Returns confidence scores so that results with confidence below 0.80 can be routed for supervisor\nreview\nWhat should you use?",
    "options": [
      {
        "id": "A",
        "text": "a Foundry agent that has groundedness guardrails enabled to extract invoice fields and confidence scores"
      },
      {
        "id": "B",
        "text": "a custom Azure Content Understanding in Foundry Tools analyzer that defines the required fields as the\nextracted fields and the returned confidence scores for routing"
      },
      {
        "id": "C",
        "text": "the Azure Content Understanding in Foundry Tools prebuilt -layout analyzer"
      },
      {
        "id": "D",
        "text": "the Azure Content Understanding in Foundry Tools prebuilt -documentSearch analyzer and search.score\nfrom the Azure AI Search results for routing"
      }
    ],
    "correctAnswer": [
      "B"
    ],
    "sourceAnswer": "B. a custom Azure Content Understanding in Foundry Tools analyzer that defines the required fields as the\nextracted fields and the returned confidence scores for routing",
    "explanation": "Correct Answer:\nB. a custom Azure Content Understanding in Foundry Tools analyzer that defines the required fields as the\nextracted fields and the returned confidence scores for routing\nA custom Azure Content Understanding analyzer  allows you to define the exact fields to extract, such as\ninvoice number, invoice date, vendor name, and total amount , even when invoices use different templates.\nIt also returns confidence scores  for each extracted field, enabling the application to automatically identify\nlow-confidence results. By routing documents with confidence scores below 0.80 for supervisor review, the\nsolution meets both the extraction and validation requirements while producing structured JSON suitable for\na Retrieval -Augmented Generation (RAG) solution.\n\nIncorrect Answers:\nA. a Foundry agent that has groundedness guardrails enabled to extract invoice fields and confidence\nscores\nGroundedness guardrails evaluate whether generated responses are supported by retrieved content. They\nare not designed to extract structured invoice fields or provide extraction confidence scores.\nC. the Azure Content Understanding in Foundry Tools prebuilt -layout analyzer\nThe prebuilt -layout  analyzer extracts document layout elements such as text, tables, and paragraphs, but it\ndoes not extract predefined invoice fields with confidence scores across varying invoice templates.\nD. the Azure Content Understanding in Foundry Tools prebuilt -documentSearch analyzer and search.score\nfrom the Azure AI Search results for routing\nThe search.score  in Azure AI Search represents the relevance of search results, not the confidence of\nextracted document fields. It cannot be used to determine the accuracy of invoice field extraction.",
    "incorrectExplanations": {
      "A": "a Foundry agent that has groundedness guardrails enabled to extract invoice fields and confidence\nscores\nGroundedness guardrails evaluate whether generated responses are supported by retrieved content. They\nare not designed to extract structured invoice fields or provide extraction confidence scores.",
      "C": "the Azure Content Understanding in Foundry Tools prebuilt -layout analyzer\nThe prebuilt -layout  analyzer extracts document layout elements such as text, tables, and paragraphs, but it\ndoes not extract predefined invoice fields with confidence scores across varying invoice templates.",
      "D": "the Azure Content Understanding in Foundry Tools prebuilt -documentSearch analyzer and search.score\nfrom the Azure AI Search results for routing\nThe search.score  in Azure AI Search represents the relevance of search results, not the confidence of\nextracted document fields. It cannot be used to determine the accuracy of invoice field extraction."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests speech concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "a custom Azure Content Understanding in Foundry Tools analyzer that defines the required fields as the",
    "topic": "Speech",
    "sourceQuestionNumber": 41,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 42,
    "type": "single",
    "question": "A Microsoft Foundry agent retrieves content from external websites by using Grounding with Bing\nSearch.\nSecurity administrators want to:\n• Detect indirect prompt injection attempts.\n• Review detections before deciding whether to block requests.\nWhich configuration should you recommend?",
    "options": [
      {
        "id": "A",
        "text": "Disable Prompt Shields."
      },
      {
        "id": "B",
        "text": "Configure Prompt Shields to Block."
      },
      {
        "id": "C",
        "text": "Configure Prompt Shields to Annotate and enable Spotlighting."
      },
      {
        "id": "D",
        "text": "Configure Content Safety to Block Hate content."
      }
    ],
    "correctAnswer": [
      "C"
    ],
    "sourceAnswer": "C. Configure Prompt Shields to Annotate and enable Spotlighting.",
    "explanation": "Correct Answer:\nC. Configure Prompt Shields to Annotate and enable Spotlighting.\nThis solution satisfies both requirements. Setting Prompt Shields  to Annotate  detects indirect prompt\ninjection attempts without automatically blocking requests, allowing security administrators to review\n\ndetections before taking action. Enabling Spotlighting  marks third -party content, such as web content\nretrieved through Grounding with Bing Search , as lower -trust input. This helps the model distinguish trusted\ninstructions from potentially malicious embedded instructions, reducing the risk of indirect prompt injection\nattacks.\n\nIncorrect Answers:\nA. Disable Prompt Shields.\nDisabling Prompt Shields removes protection against indirect prompt injection attacks and does not detect\nmalicious instructions.\nB. Configure Prompt Shields to Block.\nBlock mode automatically rejects detected prompt injection attempts. The requirement is to review detections\nbefore deciding whether to block requests.\nD. Configure Content Safety to Block Hate content.\nContent Safety filters harmful or unsafe content such as hate, violence, or sexual content. It does not detect\nor mitigate indirect prompt injection attacks.",
    "incorrectExplanations": {
      "A": "Disable Prompt Shields.\nDisabling Prompt Shields removes protection against indirect prompt injection attacks and does not detect\nmalicious instructions.",
      "B": "Configure Prompt Shields to Block.\nBlock mode automatically rejects detected prompt injection attempts. The requirement is to review detections\nbefore deciding whether to block requests.",
      "D": "Configure Content Safety to Block Hate content.\nContent Safety filters harmful or unsafe content such as hate, violence, or sexual content. It does not detect\nor mitigate indirect prompt injection attacks."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests foundry agent service concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Configure Prompt Shields to Annotate and enable Spotlighting.",
    "topic": "Foundry Agent Service",
    "sourceQuestionNumber": 42,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 43,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains a workflow for a customer support triage process.\nYou have an Ask a question node that stores user responses in a local variable named Var01.\nYou need to create the following Power Fx expressions:\n• An if/else condition expression that ensures that Var01 contains a value\n• A Send message expression that returns the stored user response in uppercase\nHow should you configure the expressions?",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "If/else condition expression: Not(IsBlank(Local.Var01))\nThe requirement is to ensure that Var01 contains a value  before proceeding. The IsBlank()  function returns\ntrue when the variable is empty or has no value. By wrapping it with Not(), the expression evaluates to true\nonly when Var01 contains a value , making it the correct condition for the If/Else node.\nSend message expression: {Upper(Local.Var01)}\nThe Upper()  function converts the contents of the local variable to uppercase. Using {Upper(Local.Var01)}\nreturns the stored user response in uppercase while correctly referencing the local variable.",
    "explanation": "Correct Answers:\nIf/else condition expression: Not(IsBlank(Local.Var01))\nThe requirement is to ensure that Var01 contains a value  before proceeding. The IsBlank()  function returns\ntrue when the variable is empty or has no value. By wrapping it with Not(), the expression evaluates to true\nonly when Var01 contains a value , making it the correct condition for the If/Else node.\nSend message expression: {Upper(Local.Var01)}\nThe Upper()  function converts the contents of the local variable to uppercase. Using {Upper(Local.Var01)}\nreturns the stored user response in uppercase while correctly referencing the local variable.\nIncorrect Answers:\nIsBlank(Local.Var01)\nThis returns true when the variable is empty , which is the opposite of the requirement.\nIsEmpty(Local.Var01)\nIsEmpty()  is intended for tables and collections, not for checking whether a text variable contains a value.\n{Local.Var01}\nThis returns the stored value but does not convert it to uppercase.\n{Upper(Var01)}\nThis does not correctly reference the local variable. The variable should be referenced as Local.Var01 .",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q43-p45-9d66dd51.png"
    ],
    "answerImages": [],
    "concept": "This question tests agent tools & workflows concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "If/else condition expression: Not(IsBlank(Local.Var01))",
    "topic": "Agent Tools & Workflows",
    "sourceQuestionNumber": 43,
    "needsReview": true,
    "sourceMaterial": "You have a Microsoft Foundry project that contains a workflow for a customer support triage process.\nYou have an Ask a question node that stores user responses in a local variable named Var01.\nYou need to create the following Power Fx expressions:\n• An if/else condition expression that ensures that Var01 contains a value\n• A Send message expression that returns the stored user response in uppercase\nHow should you configure the expressions?"
  },
  {
    "id": 44,
    "type": "single",
    "question": "You have a customer support agent that uses the Microsoft Foundry Agent Service.\nSometimes, customers return to a session days later to continue the same support case, and the agent must\nresume with the full historical context.\nThe agent must provide the following:\n• Multi-turn continuity within the session Cross -session continuity for the same case\n• Access to the full interaction history, including user messages, agent messages, tool calls, and tool\noutputs\nYou need to ensure that the agent automatically reloads the complete history on each new turn.\nWhat should you do?",
    "options": [
      {
        "id": "A",
        "text": "Create and reuse a conversation by storing the conversation’s ID and supplying the ID on subsequent\nrequests."
      },
      {
        "id": "B",
        "text": "Persist only the final model response stored in the client application and prepend the response to future\nprompts."
      },
      {
        "id": "C",
        "text": "Enable memory summarization on the agent definition to persist the context automatically."
      }
    ],
    "correctAnswer": [
      "A"
    ],
    "sourceAnswer": "A. Create and reuse a conversation by storing the conversation’s ID and supplying the ID on subsequent\nrequests.",
    "explanation": "Correct Answer:\nA. Create and reuse a conversation by storing the conversation’s ID and supplying the ID on subsequent\nrequests.\nMicrosoft Foundry Agent Service maintains the complete conversation history within a conversation\n(thread) . By storing the conversation ID  and supplying it on subsequent requests, the agent automatically\nreloads the entire interaction history, including user messages, agent responses, tool calls, and tool\noutputs . This provides both multi -turn continuity  and cross -session continuity , allowing users to resume a\nsupport case days later without manually rebuilding the context.\n\nIncorrect Answers:\nB. Persist only the final model response stored in the client application and prepend the response to\nfuture prompts.\nStoring only the final response loses the complete conversation history, including earlier messages, tool\ncalls, and tool outputs.\nC. Enable memory summarization on the agent definition to persist the context automatically.\nMemory summarization stores condensed information rather than the complete interaction history. It does\nnot guarantee that every user message, agent message, tool call, and tool output will be available when the\nconversation resumes.",
    "incorrectExplanations": {
      "B": "Persist only the final model response stored in the client application and prepend the response to\nfuture prompts.\nStoring only the final response loses the complete conversation history, including earlier messages, tool\ncalls, and tool outputs.",
      "C": "Enable memory summarization on the agent definition to persist the context automatically.\nMemory summarization stores condensed information rather than the complete interaction history. It does\nnot guarantee that every user message, agent message, tool call, and tool output will be available when the\nconversation resumes."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q44-p46-82394d89.png"
    ],
    "answerImages": [],
    "concept": "This question tests agent tools & workflows concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Create and reuse a conversation by storing the conversation’s ID and supplying the ID on subsequent",
    "topic": "Agent Tools & Workflows",
    "sourceQuestionNumber": 44,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 45,
    "type": "single",
    "question": "You have a Microsoft Foundry Agent Service project that contains an HR onboarding agent.\nEmployees frequently pause conversations and continue them several days later.\nThe solution must meet the following requirements:\n• Resume the conversation exactly where it ended.\n• Ensure the agent can reference previous tool invocations and uploaded documents.\n• Avoid manually reconstructing conversation history.\nWhat should you do?",
    "options": [
      {
        "id": "A",
        "text": "Create a new thread for each user request and copy previous responses into the prompt."
      },
      {
        "id": "B",
        "text": "Persist the thread ID and continue subsequent requests by using the existing thread."
      },
      {
        "id": "C",
        "text": "Store conversation summaries in persistent memory and start a new thread for every session."
      },
      {
        "id": "D",
        "text": "Save only the final assistant response and include it as context in future requests."
      }
    ],
    "correctAnswer": [
      "B"
    ],
    "sourceAnswer": "B. Persist the thread ID and continue subsequent requests by using the existing thread.",
    "explanation": "Correct Answer:\n\nB. Persist the thread ID and continue subsequent requests by using the existing thread.\nIn Microsoft Foundry Agent Service, a thread  maintains the complete conversation history, including user\nmessages, assistant responses, tool invocations, tool outputs, and uploaded documents . By persisting the\nthread ID  and reusing it for future requests, the agent automatically resumes the conversation exactly where\nit left off without requiring the application to rebuild the context. This satisfies all the stated requirements,\nincluding preserving uploaded documents an d previous tool interactions.\n\nIncorrect Answers:\nA. Create a new thread for each user request and copy previous responses into the prompt.\nCreating a new thread loses the complete execution history, including tool invocations and uploaded\ndocuments, and requires unnecessary manual reconstruction.\nC. Store conversation summaries in persistent memory and start a new thread for every session.\nConversation summaries preserve only condensed context and do not retain the complete history of tool\ncalls, uploaded documents, and detailed interactions.\nD. Save only the final assistant response and include it as context in future requests.\nSaving only the final response loses earlier user messages, tool executions, and uploaded documents,\npreventing the agent from fully resuming the conversation.",
    "incorrectExplanations": {
      "A": "Create a new thread for each user request and copy previous responses into the prompt.\nCreating a new thread loses the complete execution history, including tool invocations and uploaded\ndocuments, and requires unnecessary manual reconstruction.",
      "C": "Store conversation summaries in persistent memory and start a new thread for every session.\nConversation summaries preserve only condensed context and do not retain the complete history of tool\ncalls, uploaded documents, and detailed interactions.",
      "D": "Save only the final assistant response and include it as context in future requests.\nSaving only the final response loses earlier user messages, tool executions, and uploaded documents,\npreventing the agent from fully resuming the conversation."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests agent tools & workflows concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Persist the thread ID and continue subsequent requests by using the existing thread.",
    "topic": "Agent Tools & Workflows",
    "sourceQuestionNumber": 45,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 46,
    "type": "drag-drop",
    "question": "You have a Microsoft Foundry project that processes regulatory compliance documents submitted by\nregional offices.\nYou need to implement two pipelines by using Content Understanding in Microsoft Foundry Tools.\nThe solution must meet the following requirements:\n• Include a pipeline named Pipeline1 that extracts key compliance information from individual audit\nreports while minimizing processing costs.\n• Include a pipeline named Pipeline2 that analyzes multiple related audit reports together to identify\ninconsistencies across reporting periods by using advanced reasoning.\nHow should you configure each pipeline?\nTo answer, drag the appropriate configurations to the correct pipelines. Each configuration may be used once,\nmore than once, or not at all.",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "Pipeline1: Single -file task in standard mode\nPipeline1 processes individual audit reports  and the primary goal is to minimize processing costs . Since\neach document is processed independently and does not require advanced reasoning or cross -document\nanalysis, a single -file task in standard mode  is the most cost -effective configuration. It is optimized for high -\nvolume document extraction without the additional cost of advanced reasoning capabilities.\nPipeline2: Multi -file task in pro mode\nPipeline2 must analyze multiple related audit reports together  to identify inconsistencies across reporting\nperiods  using advanced reasoning . This requires comparing information across multiple documents and\nperforming multi -step reasoning. A multi -file task in pro mode  is specifically designed for these advanced\ncross -document analysis scenarios.",
    "explanation": "Correct Answers:\nPipeline1: Single -file task in standard mode\nPipeline1 processes individual audit reports  and the primary goal is to minimize processing costs . Since\neach document is processed independently and does not require advanced reasoning or cross -document\nanalysis, a single -file task in standard mode  is the most cost -effective configuration. It is optimized for high -\nvolume document extraction without the additional cost of advanced reasoning capabilities.\nPipeline2: Multi -file task in pro mode\nPipeline2 must analyze multiple related audit reports together  to identify inconsistencies across reporting\nperiods  using advanced reasoning . This requires comparing information across multiple documents and\nperforming multi -step reasoning. A multi -file task in pro mode  is specifically designed for these advanced\ncross -document analysis scenarios.\n\nIncorrect Answers:\nMulti -file task in standard mode\nAlthough it processes multiple documents, Standard mode does not provide the advanced reasoning\ncapabilities required to identify inconsistencies across reporting periods.\nSingle -file task in pro mode\nPro mode supports advanced reasoning, but a single -file task cannot compare multiple related audit reports,\nso it does not meet the cross -document analysis requirement.",
    "incorrectExplanations": {},
    "matchingPairs": [
      {
        "target": "Pipeline1",
        "value": "Single -file task in standard mode"
      },
      {
        "target": "Pipeline2",
        "value": "Multi -file task in pro mode"
      }
    ],
    "dragCandidates": [
      "Multi-file task in pro mode",
      "Multi-file task in standard mode",
      "Single-file task in pro mode",
      "Single-file task in standard mode"
    ],
    "sourceImages": [
      "assets/questions/q46-p48-9158afdb.png"
    ],
    "answerImages": [],
    "concept": "This question tests azure content understanding concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Pipeline1: Single -file task in standard mode",
    "topic": "Azure Content Understanding",
    "sourceQuestionNumber": 46,
    "needsReview": true,
    "sourceMaterial": "You have a Microsoft Foundry project that processes regulatory compliance documents submitted by\nregional offices.\nYou need to implement two pipelines by using Content Understanding in Microsoft Foundry Tools.\nThe solution must meet the following requirements:\n• Include a pipeline named Pipeline1 that extracts key compliance information from individual audit\nreports while minimizing processing costs.\n• Include a pipeline named Pipeline2 that analyzes multiple related audit reports together to identify\ninconsistencies across reporting periods by using advanced reasoning.\nHow should you configure each pipeline?\nTo answer, drag the appropriate configurations to the correct pipelines. Each configuration may be used once,\nmore than once, or not at all."
  },
  {
    "id": 47,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains a high -traffic agent. After a recent update,\noperational costs increase significantly .\nMonitoring confirms that the volume of user traffic to the agent remains unchanged.\nYou suspect that changes to the request or response characteristics are causing the increase.\nYou need to identify whether the additional costs are driven by the model input size, the model output size, or\nexpanded tool usage.\nWhich observability capability should you use?",
    "options": [
      {
        "id": "A",
        "text": "latency"
      },
      {
        "id": "B",
        "text": "evaluation metrics"
      },
      {
        "id": "C",
        "text": "run success rate"
      },
      {
        "id": "D",
        "text": "token usage"
      }
    ],
    "correctAnswer": [
      "D"
    ],
    "sourceAnswer": "D. token usage",
    "explanation": "Correct Answer:\nD. token usage\nToken usage  provides detailed insights into the number of input tokens, output tokens, and tokens consumed\nduring tool calls. Since user traffic has remained unchanged but operational costs have increased, the most\nlikely cause is that requests or responses have beco me larger or that the agent is using more tools. Token\nusage metrics allow you to determine whether the increase in cost is driven by larger prompts, longer model\nresponses, or expanded tool usage, making it the correct observability capability for this sc enario.\n\nIncorrect Answers:\nA. latency\nLatency measures how long requests take to complete. It does not explain increases in token consumption or\noperational costs.\nB. evaluation metrics\nEvaluation metrics assess response quality, such as groundedness, fluency, or similarity. They do not\nmeasure the factors that drive model costs.\nC. run success rate\nRun success rate indicates whether agent runs complete successfully. It does not provide information about\ntoken consumption or cost increases.",
    "incorrectExplanations": {
      "A": "latency\nLatency measures how long requests take to complete. It does not explain increases in token consumption or\noperational costs.",
      "B": "evaluation metrics\nEvaluation metrics assess response quality, such as groundedness, fluency, or similarity. They do not\nmeasure the factors that drive model costs.",
      "C": "run success rate\nRun success rate indicates whether agent runs complete successfully. It does not provide information about\ntoken consumption or cost increases."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q47-p49-38d7bf00.png"
    ],
    "answerImages": [],
    "concept": "This question tests evaluation & observability concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "token usage",
    "topic": "Evaluation & Observability",
    "sourceQuestionNumber": 47,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 48,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an Azure Storage account used to store documents\nfor Retrieval -Augmented Generation (RAG).\nThe agents authenticate by using managed identities.\nThe agents must be able to read blob data but must not upload, modify, or delete files.\nWhich role -based access control (RBAC) role should you assign to the managed identities?",
    "options": [
      {
        "id": "A",
        "text": "Storage Blob Data Owner"
      },
      {
        "id": "B",
        "text": "Storage Blob Data Contributor"
      },
      {
        "id": "C",
        "text": "Storage Blob Data Reader"
      },
      {
        "id": "D",
        "text": "Contributor"
      }
    ],
    "correctAnswer": [
      "C"
    ],
    "sourceAnswer": "C. Storage Blob Data Reader",
    "explanation": "Correct Answer:\nC. Storage Blob Data Reader\nThe Storage Blob Data Reader  role grants read-only access  to blob data in an Azure Storage account. It\nallows managed identities to read and download blobs, which is exactly what Retrieval -Augmented\nGeneration (RAG) agents need to retrieve documents. At the same time, it prevents uploading, modifying, or\ndeletin g blobs, satisfying the principle of least privilege and meeting the security requirements.\n\nIncorrect Answers:\n\nA. Storage Blob Data Owner\nThis role provides full control over blob data, including reading, writing, deleting, and managing permissions,\nwhich exceeds the required permissions.\nB. Storage Blob Data Contributor\nThis role allows reading, creating, modifying, and deleting blob data. It grants write permissions that are not\nrequired.\nD. Contributor\nThe Contributor role provides management access to Azure resources but does not specifically grant blob\ndata access. It also grants far more permissions than are needed for read -only document retrieval.",
    "incorrectExplanations": {
      "A": "Storage Blob Data Owner\nThis role provides full control over blob data, including reading, writing, deleting, and managing permissions,\nwhich exceeds the required permissions.",
      "B": "Storage Blob Data Contributor\nThis role allows reading, creating, modifying, and deleting blob data. It grants write permissions that are not\nrequired.",
      "D": "Contributor\nThe Contributor role provides management access to Azure resources but does not specifically grant blob\ndata access. It also grants far more permissions than are needed for read -only document retrieval."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Storage Blob Data Reader",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 48,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 49,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an agent.\nYou use a GitHub Actions workflow for CI/CD.\nYou need to configure the workflow to automatically evaluate the agent when a pull request (PR) is created\nand prevent branches from merging if the evaluation results do NOT meet the defined thresholds.\nHow should you configure the workflow?",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "Authentication method: An Azure Login action that uses OpenID Connect (OIDC)\nThe recommended authentication method for GitHub Actions is Azure Login with OpenID Connect (OIDC) .\nOIDC enables GitHub Actions to authenticate securely to Azure without storing long -lived credentials such as\nsecrets or personal access tokens. It follows Microsoft's recommended security best practices and is the\npreferred authentication mechanism for C I/CD workflows deploying Microsoft Foundry resources.\nIf the evaluation results are NOT met, configure the workflow to: Fail\nConfiguring the workflow to Fail ensures that the GitHub Actions workflow stops when evaluation thresholds\nare not met. Combined with GitHub branch protection rules that require the workflow to succeed before\nmerging, this prevents pull requests from being merged until the evaluation pas ses, satisfying the stated\nrequirement.",
    "explanation": "Correct Answers:\n\nAuthentication method: An Azure Login action that uses OpenID Connect (OIDC)\nThe recommended authentication method for GitHub Actions is Azure Login with OpenID Connect (OIDC) .\nOIDC enables GitHub Actions to authenticate securely to Azure without storing long -lived credentials such as\nsecrets or personal access tokens. It follows Microsoft's recommended security best practices and is the\npreferred authentication mechanism for C I/CD workflows deploying Microsoft Foundry resources.\nIf the evaluation results are NOT met, configure the workflow to: Fail\nConfiguring the workflow to Fail ensures that the GitHub Actions workflow stops when evaluation thresholds\nare not met. Combined with GitHub branch protection rules that require the workflow to succeed before\nmerging, this prevents pull requests from being merged until the evaluation pas ses, satisfying the stated\nrequirement.\n\nIncorrect Answers:\nA personal access token (PAT)\nA PAT is a long -lived credential that requires manual management and is not the recommended\nauthentication method for Azure resources.\nA user -assigned managed identity\nManaged identities are intended for Azure -hosted resources and cannot be used directly by GitHub -hosted\nrunners.\nLock the target branch\nLocking a branch prevents all updates to the branch rather than preventing merges based on evaluation\nresults.\nSend an alert\nSending an alert notifies administrators but does not stop the pull request from being merged.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q49-p51-834a8765.png"
    ],
    "answerImages": [
      "assets/questions/q49-p51-1f985189.png"
    ],
    "concept": "This question tests evaluation & observability concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "uthentication method: An Azure Login action that uses OpenID Connect (OIDC)",
    "topic": "Evaluation & Observability",
    "sourceQuestionNumber": 49,
    "needsReview": true,
    "sourceMaterial": "You have a Microsoft Foundry project that contains an agent.\nYou use a GitHub Actions workflow for CI/CD.\nYou need to configure the workflow to automatically evaluate the agent when a pull request (PR) is created\nand prevent branches from merging if the evaluation results do NOT meet the defined thresholds.\nHow should you configure the workflow?"
  },
  {
    "id": 50,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an agent. The agent uses Azure Speech in Foundry\nTools. You fine -tune a baseline speech to text model for the en -us locale and publish the model.\nThe agent calls the Speech to text REST API and returns an error message indicating that the project ID is\ninvalid. You need to set the project property to the correct ID.\nTo what should you set the project property?",
    "options": [
      {
        "id": "A",
        "text": "the project URL"
      },
      {
        "id": "B",
        "text": "the custom speech project ID"
      },
      {
        "id": "C",
        "text": "the project ID"
      },
      {
        "id": "D",
        "text": "the custom speech endpoint URL"
      }
    ],
    "correctAnswer": [
      "B"
    ],
    "sourceAnswer": "B. the custom speech project ID",
    "explanation": "Correct Answer:\nB. the custom speech project ID\nWhen using a custom Speech -to-Text model  that has been trained and published in Azure Speech, the\nSpeech -to-Text REST API expects the project  property to contain the Custom Speech project ID . This unique\n\nidentifier associates the request with the correct custom speech project and its published models. If an\ninvalid or incorrect ID is provided, the service returns an error indicating that the project ID is invalid.\n\nIncorrect Answers:\nA. the project URL\nThe REST API expects a project ID, not the URL of the project.\nC. the project ID\nThe generic Microsoft Foundry project ID is different from the Custom Speech project ID  required by the\nSpeech service.\nD. the custom speech endpoint URL\nThe endpoint URL specifies where the request is sent, but it is not used as the value of the project property.",
    "incorrectExplanations": {
      "A": "the project URL\nThe REST API expects a project ID, not the URL of the project.",
      "C": "the project ID\nThe generic Microsoft Foundry project ID is different from the Custom Speech project ID  required by the\nSpeech service.",
      "D": "the custom speech endpoint URL\nThe endpoint URL specifies where the request is sent, but it is not used as the value of the project property."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests speech concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "the custom speech project ID",
    "topic": "Speech",
    "sourceQuestionNumber": 50,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 51,
    "type": "single",
    "question": "You have a Microsoft Foundry project named Project1.\nProject1 contains an application that processes PDF vendor invoices.\nYou need to configure Azure Document Intelligence in Foundry Tools to generate a Markdown output that\npreserves the sections and table structure of the PDFs. The solution must minimize development effort.\nWhat should you do?",
    "options": [
      {
        "id": "A",
        "text": "Configure output=figures when you analyze the PDF ."
      },
      {
        "id": "B",
        "text": "Configure content=markdown when you analyze the document."
      },
      {
        "id": "C",
        "text": "Increase the confidence threshold."
      },
      {
        "id": "D",
        "text": "Set the output_content_format=ContentFormat.MARKDOWN value."
      }
    ],
    "correctAnswer": [
      "D"
    ],
    "sourceAnswer": "D. Set the output_content_format=ContentFormat.MARKDOWN value.",
    "explanation": "Correct Answer:\nD. Set the output_content_format=ContentFormat.MARKDOWN value.\nAzure Document Intelligence supports returning document content in Markdown  format by setting the\noutput_content_format  parameter to ContentFormat.MARKDOWN . This preserves the document's logical\nstructure, including headings, sections, paragraphs, lists, and tables, making it ideal for Retrieval -Augmented\nGeneration (RAG) and downstream processing. Since this is a built -in capability, it minimizes developmen t\neffort while producing well -structured Markdown output.\n\nIncorrect Answers:\nA. Configure output=figures when you analyze the PDF .\nThe figures  output extracts figures and images from the document. It does not generate Markdown or\npreserve the complete document structure.\nB. Configure content=markdown when you analyze the document.\nThere is no content=markdown  parameter in the Azure Document Intelligence API for specifying Markdown\noutput.\n\nC. Increase the confidence threshold.\nIncreasing the confidence threshold affects the acceptance of extracted content but does not change the\noutput format to Markdown.",
    "incorrectExplanations": {
      "A": "Configure output=figures when you analyze the PDF .\nThe figures  output extracts figures and images from the document. It does not generate Markdown or\npreserve the complete document structure.",
      "B": "Configure content=markdown when you analyze the document.\nThere is no content=markdown  parameter in the Azure Document Intelligence API for specifying Markdown\noutput.",
      "C": "Increase the confidence threshold.\nIncreasing the confidence threshold affects the acceptance of extracted content but does not change the\noutput format to Markdown."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests speech concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Set the output_content_format=ContentFormat.MARKDOWN value.",
    "topic": "Speech",
    "sourceQuestionNumber": 51,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 52,
    "type": "single",
    "question": "A legal research agent must satisfy the following requirements:\n• Search contracts uploaded by users during an active conversation.\n• Search millions of historical court decisions stored in a centralized enterprise index.\nWhich combination should you recommend?",
    "options": [
      {
        "id": "A",
        "text": "File Search for both requirements"
      },
      {
        "id": "B",
        "text": "Azure AI Search for both requirements"
      },
      {
        "id": "C",
        "text": "File Search for uploaded contracts and Azure AI Search for historical court decisions"
      },
      {
        "id": "D",
        "text": "Microsoft Fabric for uploaded contracts and File Search for historical court decisions"
      }
    ],
    "correctAnswer": [
      "C"
    ],
    "sourceAnswer": "C. File Search for uploaded contracts and Azure AI Search for historical court decisions",
    "explanation": "Correct Answer:\nC. File Search for uploaded contracts and Azure AI Search for historical court decisions\nThe File Search  tool is designed to work with documents that users upload during an active conversation. It\nautomatically indexes the uploaded files and enables the agent to retrieve relevant information from those\ndocuments without requiring a separate indexing process.  This makes it ideal for searching contracts\nuploaded during the current chat.\nAzure AI Search  is designed for large -scale enterprise search scenarios. It can index and search millions of\ndocuments, supports advanced indexing, vector search, hybrid search, semantic ranking, and scalable\nretrieval. This makes it the appropriate choice for searching a centralized repository containing millions of\nhistorical court decisions.\n\nIncorrect Answers:\nA. File Search for both requirements\nFile Search is intended for documents uploaded during a conversation. It is not designed to index and search\nmillions of enterprise documents.\nB. Azure AI Search for both requirements\nAzure AI Search is excellent for enterprise repositories but is not intended for temporary user -uploaded\ndocuments within an active conversation, where File Search provides a simpler and more efficient solution.\nD. Microsoft Fabric for uploaded contracts and File Search for historical court decisions\nMicrosoft Fabric is an analytics platform rather than a conversational document retrieval tool, and File Search\nis not intended for searching millions of historical enterprise documents.",
    "incorrectExplanations": {
      "A": "File Search for both requirements\nFile Search is intended for documents uploaded during a conversation. It is not designed to index and search\nmillions of enterprise documents.",
      "B": "Azure AI Search for both requirements\nAzure AI Search is excellent for enterprise repositories but is not intended for temporary user -uploaded\ndocuments within an active conversation, where File Search provides a simpler and more efficient solution.",
      "D": "Microsoft Fabric for uploaded contracts and File Search for historical court decisions\nMicrosoft Fabric is an analytics platform rather than a conversational document retrieval tool, and File Search\nis not intended for searching millions of historical enterprise documents."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests authentication & security concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "File Search for uploaded contracts and Azure AI Search for historical court decisions",
    "topic": "Authentication & Security",
    "sourceQuestionNumber": 52,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 53,
    "type": "single",
    "question": "You have a Python application named App1 that integrates with a Microsoft Foundry project named\nProject1.\nYou need to ensure that App1 meets the following requirements:\n• Authenticates by using a Microsoft Entra managed identity\n• Sends prompts to a deployed model by using the Azure OpenAI Responses API\nHow should you complete the Python code?",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "Credential: DefaultAzureCredential\nDefaultAzureCredential enables the application to authenticate by using Microsoft Entra ID , including a\nmanaged identity  when the application is running in Azure. It automatically selects the appropriate\nauthentication mechanism based on the execution environment, making it the recommended credential for\napplications that use managed identities.\nResponses API method: create\nThe Azure OpenAI Responses API  uses the responses.create() method to send prompts to a deployed model\nand generate responses. This is the standard method for creating a new model response through the\nResponses API.",
    "explanation": "Correct Answers:\n\nCredential: DefaultAzureCredential\nDefaultAzureCredential enables the application to authenticate by using Microsoft Entra ID , including a\nmanaged identity  when the application is running in Azure. It automatically selects the appropriate\nauthentication mechanism based on the execution environment, making it the recommended credential for\napplications that use managed identities.\nResponses API method: create\nThe Azure OpenAI Responses API  uses the responses.create() method to send prompts to a deployed model\nand generate responses. This is the standard method for creating a new model response through the\nResponses API.\n\nIncorrect Answers:\nAzureKeyCredential\nThis uses an API key rather than Microsoft Entra managed identity authentication.\nClientSecretCredential\nAlthough it uses Microsoft Entra ID, it requires storing a client secret instead of using a managed identity.\ncompact\nThis is not a valid method for sending requests to the Responses API.\nretrieve\nThis retrieves an existing response rather than creating a new one.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q53-p55-c6f912e7.png"
    ],
    "answerImages": [
      "assets/questions/q53-p55-26fab854.png"
    ],
    "concept": "This question tests authentication & security concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "redential: DefaultAzureCredential",
    "topic": "Authentication & Security",
    "sourceQuestionNumber": 53,
    "needsReview": true,
    "sourceMaterial": "You have a Python application named App1 that integrates with a Microsoft Foundry project named\nProject1.\nYou need to ensure that App1 meets the following requirements:\n• Authenticates by using a Microsoft Entra managed identity\n• Sends prompts to a deployed model by using the Azure OpenAI Responses API\nHow should you complete the Python code?"
  },
  {
    "id": 54,
    "type": "single",
    "question": "You have a Microsoft Foundry project that generates product marketing images from text prompts.\nAfter publishing several images, the legal team at your company identifies a competitor’s logo on a sign in\nthe background of an image.\nYou need to remove only the logo, while preserving the rest of the image.\nWhat should you do?",
    "options": [
      {
        "id": "A",
        "text": "Apply a mask -based inpainting edit to the part of the image that contains the logo."
      },
      {
        "id": "B",
        "text": "Increase the prompt guidance strength."
      },
      {
        "id": "C",
        "text": "Modify the original prompt to exclude brand names."
      },
      {
        "id": "D",
        "text": "Rerun the prompt by using a different random seed."
      }
    ],
    "correctAnswer": [
      "A"
    ],
    "sourceAnswer": "A. Apply a mask -based inpainting edit to the part of the image that contains the logo.",
    "explanation": "Correct Answer:\nA. Apply a mask -based inpainting edit to the part of the image that contains the logo.\nMask -based inpainting  is designed to modify only a selected region of an existing image. By providing a\nmask that covers the competitor's logo, the image generation model replaces only that specific area while\npreserving the rest of the image, including the background, lightin g, composition, and surrounding objects.\nThis is the most precise way to remove unwanted content without regenerating the entire image.\n\nIncorrect Answers:\nB. Increase the prompt guidance strength.\nIncreasing prompt guidance influences how closely the generated image follows the prompt, but it does not\nselectively remove an existing logo from an image.\nC. Modify the original prompt to exclude brand names.\nChanging the prompt may reduce the chance of logos appearing in future generations, but it does not edit\nthe existing image.\nD. Rerun the prompt by using a different random seed.\nUsing a different random seed generates a completely new image and does not guarantee that only the logo\nwill be removed while preserving the rest of the image.",
    "incorrectExplanations": {
      "B": "Increase the prompt guidance strength.\nIncreasing prompt guidance influences how closely the generated image follows the prompt, but it does not\nselectively remove an existing logo from an image.",
      "C": "Modify the original prompt to exclude brand names.\nChanging the prompt may reduce the chance of logos appearing in future generations, but it does not edit\nthe existing image.",
      "D": "Rerun the prompt by using a different random seed.\nUsing a different random seed generates a completely new image and does not guarantee that only the logo\nwill be removed while preserving the rest of the image."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests foundry agent service concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Apply a mask -based inpainting edit to the part of the image that contains the logo.",
    "topic": "Foundry Agent Service",
    "sourceQuestionNumber": 54,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 55,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an agent.\nThe agent processes scanned maintenance reports that are uploaded by field technicians.\nThe solution must meet the following requirements:\n• Extract all readable text from each document.\n• Ignore the document layout, including tables and paragraph positions.\n• Do not identify key -value pairs or structured business fields.\n• Minimize processing costs and avoid using a language model deployment.\nYou plan to call Azure Content Understanding in Foundry Tools.\nWhich built -in analyzer should you use?",
    "options": [
      {
        "id": "A",
        "text": "prebuilt -documentFieldSchema"
      },
      {
        "id": "B",
        "text": "prebuilt -layout"
      },
      {
        "id": "C",
        "text": "prebuilt -read"
      },
      {
        "id": "D",
        "text": "prebuilt -documentSearch"
      }
    ],
    "correctAnswer": [
      "C"
    ],
    "sourceAnswer": "C. prebuilt -read",
    "explanation": "Correct Answer:\nC. prebuilt -read\nThe prebuilt -read analyzer is designed to perform optical character recognition (OCR)  and extract all\nreadable text from documents and images. It does not attempt to preserve document layout, detect tables,\nidentify key -value pairs, or extract structured business fields. Because it focuses only on text extraction and\ndoes not require a lan guage model deployment, it is the most cost -effective option for this scenario.\n\nIncorrect Answers:\nA. prebuilt -documentFieldSchema\nThis analyzer extracts structured business fields and returns them according to a predefined schema, which\nis not required.\nB. prebuilt -layout\nThe prebuilt -layout analyzer preserves document structure, including tables, paragraphs, and layout\ninformation, which the requirements specifically state should be ignored.\n\nD. prebuilt -documentSearch\nThis analyzer is intended for semantic document search scenarios rather than simple OCR -based text\nextraction.",
    "incorrectExplanations": {
      "A": "prebuilt -documentFieldSchema\nThis analyzer extracts structured business fields and returns them according to a predefined schema, which\nis not required.",
      "B": "prebuilt -layout\nThe prebuilt -layout analyzer preserves document structure, including tables, paragraphs, and layout\ninformation, which the requirements specifically state should be ignored.",
      "D": "prebuilt -documentSearch\nThis analyzer is intended for semantic document search scenarios rather than simple OCR -based text\nextraction."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests azure content understanding concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "prebuilt -read",
    "topic": "Azure Content Understanding",
    "sourceQuestionNumber": 55,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 56,
    "type": "drag-drop",
    "question": "You have a Microsoft Foundry project that contains a sales assistant agent. The agent retrieves product\ninformation from an Azure AI Search index and generates responses by using a large language model.\nAfter deploying a new version of the agent, users report the following issues:\n• The average response time has increased significantly when users ask complex questions.\n• Monthly model inference costs have increased even though the number of user requests has\nremained unchanged.\nYou need to evaluate each issue.\nWhich observability signals should you use for each issue?\nTo answer, drag the appropriate observability signals to the correct issues. Each observability signal may be\nused once, more than once, or not at all.",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "Increased response time: Latency breakdown traces\nLatency breakdown traces  provide detailed timing information for every stage of an agent run, including\nAzure AI Search retrieval, tool invocations, prompt construction, and large language model inference. Since\nresponse times have increased for complex questions, latency traces help identify which component is\nintroducing the delay and where optimization is needed.\nIncreased inference costs: Token usage analytics\nToken usage analytics  show the number of input tokens, output tokens, and token consumption during each\nrequest. Because user traffic has remained unchanged while inference costs have increased, token usage\n\nanalytics can determine whether the increase is caused by larger prompts, longer model responses, or\nincreased retrieval context.",
    "explanation": "Correct Answers:\nIncreased response time: Latency breakdown traces\nLatency breakdown traces  provide detailed timing information for every stage of an agent run, including\nAzure AI Search retrieval, tool invocations, prompt construction, and large language model inference. Since\nresponse times have increased for complex questions, latency traces help identify which component is\nintroducing the delay and where optimization is needed.\nIncreased inference costs: Token usage analytics\nToken usage analytics  show the number of input tokens, output tokens, and token consumption during each\nrequest. Because user traffic has remained unchanged while inference costs have increased, token usage\n\nanalytics can determine whether the increase is caused by larger prompts, longer model responses, or\nincreased retrieval context.\n\nIncorrect Answers:\nGroundedness evaluation metrics\nGroundedness metrics determine whether responses are supported by retrieved documents. They do not\ndiagnose latency or inference costs.\nRisk and safety metrics\nRisk and safety metrics monitor content safety issues and policy violations. They do not provide information\nabout performance or token consumption.",
    "incorrectExplanations": {},
    "matchingPairs": [
      {
        "target": "Increased response time",
        "value": "Latency breakdown traces"
      },
      {
        "target": "Increased inference costs",
        "value": "Token usage analytics"
      }
    ],
    "dragCandidates": [
      "Groundedness evaluation metrics",
      "Latency breakdown traces",
      "Risk and safety metrics",
      "Token usage analytics"
    ],
    "sourceImages": [
      "assets/questions/q56-p58-328a020c.png"
    ],
    "answerImages": [
      "assets/questions/q56-p58-cbb7c09d.png"
    ],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Increased response time: Latency breakdown traces",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 56,
    "needsReview": true,
    "sourceMaterial": "You have a Microsoft Foundry project that contains a sales assistant agent. The agent retrieves product\ninformation from an Azure AI Search index and generates responses by using a large language model.\nAfter deploying a new version of the agent, users report the following issues:\n• The average response time has increased significantly when users ask complex questions.\n• Monthly model inference costs have increased even though the number of user requests has\nremained unchanged.\nYou need to evaluate each issue.\nWhich observability signals should you use for each issue?\nTo answer, drag the appropriate observability signals to the correct issues. Each observability signal may be\nused once, more than once, or not at all."
  },
  {
    "id": 57,
    "type": "single",
    "question": "You have an application named App1 that uses Azure Speech in Foundry Tools to transcribe live calls.\nTranscript segments often contain both English and Spanish.\nApp1 sends each segment to Azure Translator in Foundry Tools to translate to another language.\nSometimes, mixed -language segments result in incomplete or incorrect translations.\nYou need to reduce translation errors. The solution must ensure that the entire transcript is translated\nsuccessfully.\nWhat should you do before sending the segments to Translator?",
    "options": [
      {
        "id": "A",
        "text": "Use document translation to translate the entire transcript as a single document."
      },
      {
        "id": "B",
        "text": "Split the mixed -language segments into single -language segments and translate each segment\nseparately."
      },
      {
        "id": "C",
        "text": "Enable automatic language detection for the translation request."
      },
      {
        "id": "D",
        "text": "Specify English as the source language in the translation request for all the segments."
      }
    ],
    "correctAnswer": [
      "B"
    ],
    "sourceAnswer": "B. Split the mixed -language segments into single -language segments and translate each segment\nseparately.",
    "explanation": "Correct Answer:\nB. Split the mixed -language segments into single -language segments and translate each segment\nseparately.\nAzure Translator works best when each request contains text in a single source language . Mixed -language\ninput can reduce translation accuracy because the service expects a consistent source language for each\ntranslation request. By splitting transcript segments into separate English and Spanish portions before\nsending them to Translator, eac h segment can be translated accurately, ensuring that the entire transcript is\ntranslated successfully.\n\nIncorrect Answers:\nA. Use document translation to translate the entire transcript as a single document.\nDocument Translation is intended for translating complete documents such as PDFs or Office files, not live\nstreaming transcript segments.\n\nC. Enable automatic language detection for the translation request.\nAutomatic language detection identifies the dominant language in a request. It does not reliably handle\nsegments containing multiple languages.\nD. Specify English as the source language in the translation request for all the segments.\nSpecifying English as the source language causes Spanish portions of the transcript to be translated\nincorrectly or ignored.",
    "incorrectExplanations": {
      "A": "Use document translation to translate the entire transcript as a single document.\nDocument Translation is intended for translating complete documents such as PDFs or Office files, not live\nstreaming transcript segments.",
      "C": "Enable automatic language detection for the translation request.\nAutomatic language detection identifies the dominant language in a request. It does not reliably handle\nsegments containing multiple languages.",
      "D": "Specify English as the source language in the translation request for all the segments.\nSpecifying English as the source language causes Spanish portions of the transcript to be translated\nincorrectly or ignored."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests speech concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Split the mixed -language segments into single -language segments and translate each segment",
    "topic": "Speech",
    "sourceQuestionNumber": 57,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 58,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an agent used by a customer service application.\nFollowing a recent deployment, users report that responses take significantly longer to generate. Monitoring\nshows that the number of requests per minute has remained constant.\nYou need to determine whether the increased response time is caused by document retrieval, tool execution,\nor model inference.\nWhich observability capability should you use?",
    "options": [
      {
        "id": "A",
        "text": "Evaluation metrics"
      },
      {
        "id": "B",
        "text": "Latency"
      },
      {
        "id": "C",
        "text": "Run success rate"
      },
      {
        "id": "D",
        "text": "Token usage"
      }
    ],
    "correctAnswer": [
      "B"
    ],
    "sourceAnswer": "B. Latency",
    "explanation": "Correct Answer:\nB. Latency\nLatency  observability provides a detailed breakdown of the time spent during each stage of an agent run,\nincluding document retrieval , tool execution , and model inference . Since the request volume has remained\nconstant but response times have increased, latency analysis enables you to determine exactly which stage\nis responsible for the slowdown and target the appropriate optimization.\n\nIncorrect Answers:\nA. Evaluation metrics\nEvaluation metrics measure response quality, such as groundedness, fluency, and similarity. They do not\nidentify performance bottlenecks.\nC. Run success rate\nRun success rate indicates whether agent executions succeed or fail, but it does not show where time is\nbeing spent during execution.\nD. Token usage\nToken usage measures the number of input and output tokens consumed. It helps analyze inference costs\nbut does not identify whether delays are caused by document retrieval, tool execution, or model inference.",
    "incorrectExplanations": {
      "A": "Evaluation metrics\nEvaluation metrics measure response quality, such as groundedness, fluency, and similarity. They do not\nidentify performance bottlenecks.",
      "C": "Run success rate\nRun success rate indicates whether agent executions succeed or fail, but it does not show where time is\nbeing spent during execution.",
      "D": "Token usage\nToken usage measures the number of input and output tokens consumed. It helps analyze inference costs\nbut does not identify whether delays are caused by document retrieval, tool execution, or model inference."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Latency",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 58,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 59,
    "type": "single",
    "question": "You have a Microsoft Foundry project that processes engineering drawings stored in Azure Blob\nStorage.\nAzure AI Content Safety must retrieve images by using blob URLs to evaluate user -submitted images.\nThe solution must meet the following requirements:\n• Follow the principle of least privilege.\n• Avoid using storage account keys or shared access signatures (SAS).\n• Allow Content Safety to read images stored in Azure Blob Storage.",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "Authentication: System -assigned managed identity\nA system -assigned managed identity  enables Azure AI Content Safety to authenticate securely to Azure Blob\nStorage without using storage account keys or SAS tokens. This satisfies the requirement to avoid shared\nsecrets while leveraging Microsoft Entra ID authentication.\nAzure RBAC role: Storage Blob Data Reader\nThe Storage Blob Data Reader  role grants read-only access to blob data. This follows the principle of least\nprivilege , allowing Content Safety to retrieve images for evaluation without permitting uploads, modifications,\nor deletions.",
    "explanation": "Correct Answers\nAuthentication: System -assigned managed identity\nA system -assigned managed identity  enables Azure AI Content Safety to authenticate securely to Azure Blob\nStorage without using storage account keys or SAS tokens. This satisfies the requirement to avoid shared\nsecrets while leveraging Microsoft Entra ID authentication.\nAzure RBAC role: Storage Blob Data Reader\nThe Storage Blob Data Reader  role grants read-only access to blob data. This follows the principle of least\nprivilege , allowing Content Safety to retrieve images for evaluation without permitting uploads, modifications,\nor deletions.\n\nIncorrect Answers:\nStorage account access keys\nThese provide full access to the storage account and violate the requirement to avoid storage account keys.\nShared Access Signature (SAS)\nAlthough SAS can provide limited access, the requirement explicitly states to avoid using SAS .\nUser-assigned managed identity\nA user -assigned managed identity could work technically, but unless there's a requirement to share the\nidentity across multiple resources, a system -assigned managed identity  is the simpler and recommended\nchoice.\n\nStorage Blob Data Contributor\nThis role grants read, write, and delete permissions, exceeding the required read -only access.\nStorage Queue Data Contributor\nThis role applies to Azure Storage Queues, not Blob Storage.\nOwner\nThis grants full management permissions and violates the principle of least privilege.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q59-p61-8b207a60.png"
    ],
    "answerImages": [
      "assets/questions/q59-p61-d40002ff.png"
    ],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "uthentication: System -assigned managed identity",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 59,
    "needsReview": true,
    "sourceMaterial": "You have a Microsoft Foundry project that processes engineering drawings stored in Azure Blob\nStorage.\nAzure AI Content Safety must retrieve images by using blob URLs to evaluate user -submitted images.\nThe solution must meet the following requirements:\n• Follow the principle of least privilege.\n• Avoid using storage account keys or shared access signatures (SAS).\n• Allow Content Safety to read images stored in Azure Blob Storage."
  },
  {
    "id": 60,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an agent and an image generation model\ndeployment.\nThe agent creates lifestyle marketing images for clothing products.\nUsers provide a photograph of a jacket and request new scenes in different environments.\nThe solution must ensure that the generated images continue to depict the same jacket while allowing the\nbackground, lighting, and setting to change.\nWhat should you do?",
    "options": [
      {
        "id": "A",
        "text": "Include the original image as a reference image in the generation request."
      },
      {
        "id": "B",
        "text": "Reduce the max_tokens parameter."
      },
      {
        "id": "C",
        "text": "Enable groundedness detection."
      },
      {
        "id": "D",
        "text": "Configure Content Safety to annotate the generated images."
      }
    ],
    "correctAnswer": [
      "A"
    ],
    "sourceAnswer": "A. Include the original image as a reference image in the generation request.",
    "explanation": "Correct Answer:\nA. Include the original image as a reference image in the generation request.\nProviding the original jacket photo as a reference image  (image -to-image or reference -guided generation)\nallows the image generation model to preserve the product's visual characteristics, such as its color, texture,\npattern, and design, while generating new scenes with different backgrounds, lighting, and envi ronments.\nThis is the recommended approach for maintaining product identity across generated images.\n\nIncorrect Answers:\nB. Reduce the max_tokens parameter.\nThe max_tokens  parameter applies to text generation models and controls the maximum length of the\ngenerated text. It has no effect on image generation or visual consistency.\nC. Enable groundedness detection.\nGroundedness detection evaluates whether generated text is supported by provided source material. It does\nnot help preserve the appearance of an object across generated images.\nD. Configure Content Safety to annotate the generated images.\nContent Safety is used to detect and annotate potentially harmful or unsafe content. It does not influence\nhow faithfully the model preserves the jacket's appearance.",
    "incorrectExplanations": {
      "B": "Reduce the max_tokens parameter.\nThe max_tokens  parameter applies to text generation models and controls the maximum length of the\ngenerated text. It has no effect on image generation or visual consistency.",
      "C": "Enable groundedness detection.\nGroundedness detection evaluates whether generated text is supported by provided source material. It does\nnot help preserve the appearance of an object across generated images.",
      "D": "Configure Content Safety to annotate the generated images.\nContent Safety is used to detect and annotate potentially harmful or unsafe content. It does not influence\nhow faithfully the model preserves the jacket's appearance."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests image / video generation concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Include the original image as a reference image in the generation request.",
    "topic": "Image / Video Generation",
    "sourceQuestionNumber": 60,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 61,
    "type": "single",
    "question": "You have an Azure Speech in Foundry Tools resource that hosts a custom speech to text model\ndeployed to a custom endpoint. An agent uses the endpoint to perform real -time speech recognition.\nYou are approaching the expiration date of the custom speech to text model.\nWhat is the expected behavior when the model expires?",
    "options": [
      {
        "id": "A",
        "text": "Speech recognition requests will return a 4xx error until a new custom model is deployed."
      },
      {
        "id": "B",
        "text": "Speech recognition requests will continue to use the expired custom model until the model is removed\nmanually."
      },
      {
        "id": "C",
        "text": "Speech recognition requests will fall back to the most recent base model for the same locale."
      },
      {
        "id": "D",
        "text": "The custom model will be deleted automatically when the model expires."
      }
    ],
    "correctAnswer": [
      "C"
    ],
    "sourceAnswer": "C. Speech recognition requests will fall back to the most recent base model for the same locale.",
    "explanation": "Correct Answer:\nC. Speech recognition requests will fall back to the most recent base model for the same locale.\nIn Azure Speech, when a custom Speech -to-Text model expires , it is no longer used for inference. Requests\nsent to the custom endpoint automatically fall back to the latest available base model for the same locale .\nThis ensures that speech recognition continues without interruption, although the accuracy improvements\nprovided by the custom model are no longer available.\n\nIncorrect Answers:\nA. Speech recognition requests will return a 4xx error until a new custom model is deployed.\nThis is incorrect. The endpoint does not stop functioning or return client errors simply because the custom\nmodel expires. Instead, it falls back to the corresponding base model.\nB. Speech recognition requests will continue to use the expired custom model until the model is removed\nmanually.\nThis is incorrect. Once the custom model expires, it is no longer used for inference.\nD. The custom model will be deleted automatically when the model expires.\nThis is incorrect. Expiration prevents the model from being used, but it is not automatically deleted.",
    "incorrectExplanations": {
      "A": "Speech recognition requests will return a 4xx error until a new custom model is deployed.\nThis is incorrect. The endpoint does not stop functioning or return client errors simply because the custom\nmodel expires. Instead, it falls back to the corresponding base model.",
      "B": "Speech recognition requests will continue to use the expired custom model until the model is removed\nmanually.\nThis is incorrect. Once the custom model expires, it is no longer used for inference.",
      "D": "The custom model will be deleted automatically when the model expires.\nThis is incorrect. Expiration prevents the model from being used, but it is not automatically deleted."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests speech concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Speech recognition requests will fall back to the most recent base model for the same locale.",
    "topic": "Speech",
    "sourceQuestionNumber": 61,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 62,
    "type": "single",
    "question": "You have a technical support agent that uses the Microsoft Foundry Agent Service.\nCustomers often upload log files while troubleshooting issues. A support case can remain open for several\nweeks, and different support engineers may continue the conversation during that time.\nThe solution must meet the following requirements:\n• Maintain the complete conversation history across multiple sessions.\n• Preserve uploaded files, tool calls, tool outputs, and agent responses.\n• Minimize application code.\nWhat should you do?",
    "options": [
      {
        "id": "A",
        "text": "Store the thread ID after the initial conversation and provide the same thread ID when continuing the\nsupport case."
      },
      {
        "id": "B",
        "text": "Store the generated responses in Azure AI Search and prepend them to every new prompt."
      },
      {
        "id": "C",
        "text": "Enable persistent agent memory and allow the agent to reconstruct previous conversations automatically."
      },
      {
        "id": "D",
        "text": "Store conversation summaries in a database and include the summaries in each new request."
      }
    ],
    "correctAnswer": [
      "A"
    ],
    "sourceAnswer": "A. Store the thread ID after the initial conversation and provide the same thread ID when continuing the\nsupport case.",
    "explanation": "Correct Answer:\nA. Store the thread ID after the initial conversation and provide the same thread ID when continuing the\nsupport case.\nIn Microsoft Foundry Agent Service, a thread  automatically stores the entire conversation state, including\nuser and assistant messages , uploaded files , tool calls , tool outputs and c onversation context .\nBy persisting the thread ID  and reusing it for subsequent requests, the agent can resume the conversation\nexactly where it left off, even if different support engineers continue the case weeks later. This approach also\nminimizes application code , since the Agent Service manages the conversation history automatically.\n\nIncorrect Answers:\nB. Store the generated responses in Azure AI Search and prepend them to every new prompt.\nThis requires manually reconstructing the conversation and does not preserve uploaded files, tool calls, or\ntool outputs.\nC. Enable persistent agent memory and allow the agent to reconstruct previous conversations\nautomatically.\nPersistent agent memory is intended for storing long -term user preferences or facts, not complete\nconversation history with files, tool invocations, and execution state.\nD. Store conversation summaries in a database and include the summaries in each new request.\nConversation summaries lose important details such as uploaded files, tool outputs, and the complete\nexecution history. They also require additional application logic.",
    "incorrectExplanations": {
      "B": "Store the generated responses in Azure AI Search and prepend them to every new prompt.\nThis requires manually reconstructing the conversation and does not preserve uploaded files, tool calls, or\ntool outputs.",
      "C": "Enable persistent agent memory and allow the agent to reconstruct previous conversations\nautomatically.\nPersistent agent memory is intended for storing long -term user preferences or facts, not complete\nconversation history with files, tool invocations, and execution state.",
      "D": "Store conversation summaries in a database and include the summaries in each new request.\nConversation summaries lose important details such as uploaded files, tool outputs, and the complete\nexecution history. They also require additional application logic."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests agent tools & workflows concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Store the thread ID after the initial conversation and provide the same thread ID when continuing the",
    "topic": "Agent Tools & Workflows",
    "sourceQuestionNumber": 62,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 63,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains a customer support agent built by using the\nFoundry Agent Service.\nThe agent uploads user -provided screenshots to Azure Storage through a ticketing tool and receives a blob\nURL for additional reasoning.\nYou need to use image moderation during agent runs and prevent harmful content from being returned\nduring runs.\nAzure AI Content Safety must access the images by using the blob URL. The solution must follow the\nprinciple of least privilege.",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "Guardrails: Select User input, Output, Tool response, and Tool call and set Action to Block.\nThe requirement is to prevent harmful content from being returned during agent runs . Setting the Content\nSafety guardrails to Block  ensures that harmful content is stopped rather than merely annotated. Applying\nthe guardrails to User input, Output, Tool response, and Tool call  provides end -to-end protection throughout\nthe agent execution pipeline.\nStorage access: A system -assigned managed identity that is assigned the Storage Blob Data Reader role.\nAzure AI Content Safety must retrieve images by using the blob URL . The solution must also follow the\nprinciple of least privilege .\nA system -assigned managed identity  eliminates the need for storage account keys or SAS tokens, and the\nStorage Blob Data Reader  role grants only the permissions required to read the images —nothing more.\n\nIncorrect Answers\nSelect Tool call and set Action to Block.\nThis protects only tool calls and does not inspect user input, tool responses, or model output.\nSelect User input and Output and set Action to Annotate.\nAnnotate only detects harmful content but does not prevent it from being returned.\nSelect User input and Tool response and set Action to Annotate.\nThis also annotates rather than blocks and does not protect all stages of the pipeline.\nStorage account access keys.\nThese provide excessive permissions and do not follow Microsoft's recommended identity -based\nauthentication.\nA user -assigned identity assigned the Storage Queue Data Contributor role.\nThis role applies to Azure Storage Queues, not Blob Storage.\n\nA system -assigned managed identity assigned the Storage Blob Data Contributor role.\nContributor grants write and delete permissions, exceeding the requirement to only read images.",
    "explanation": "Correct Answers\nGuardrails: Select User input, Output, Tool response, and Tool call and set Action to Block.\nThe requirement is to prevent harmful content from being returned during agent runs . Setting the Content\nSafety guardrails to Block  ensures that harmful content is stopped rather than merely annotated. Applying\nthe guardrails to User input, Output, Tool response, and Tool call  provides end -to-end protection throughout\nthe agent execution pipeline.\nStorage access: A system -assigned managed identity that is assigned the Storage Blob Data Reader role.\nAzure AI Content Safety must retrieve images by using the blob URL . The solution must also follow the\nprinciple of least privilege .\nA system -assigned managed identity  eliminates the need for storage account keys or SAS tokens, and the\nStorage Blob Data Reader  role grants only the permissions required to read the images —nothing more.\n\nIncorrect Answers\nSelect Tool call and set Action to Block.\nThis protects only tool calls and does not inspect user input, tool responses, or model output.\nSelect User input and Output and set Action to Annotate.\nAnnotate only detects harmful content but does not prevent it from being returned.\nSelect User input and Tool response and set Action to Annotate.\nThis also annotates rather than blocks and does not protect all stages of the pipeline.\nStorage account access keys.\nThese provide excessive permissions and do not follow Microsoft's recommended identity -based\nauthentication.\nA user -assigned identity assigned the Storage Queue Data Contributor role.\nThis role applies to Azure Storage Queues, not Blob Storage.\n\nA system -assigned managed identity assigned the Storage Blob Data Contributor role.\nContributor grants write and delete permissions, exceeding the requirement to only read images.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q63-p65-05d21382.png"
    ],
    "answerImages": [
      "assets/questions/q63-p66-eafcab73.png"
    ],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "uardrails: Select User input, Output, Tool response, and Tool call and set Action to Block.",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 63,
    "needsReview": true,
    "sourceMaterial": "You have a Microsoft Foundry project that contains a customer support agent built by using the\nFoundry Agent Service.\nThe agent uploads user -provided screenshots to Azure Storage through a ticketing tool and receives a blob\nURL for additional reasoning.\nYou need to use image moderation during agent runs and prevent harmful content from being returned\nduring runs.\nAzure AI Content Safety must access the images by using the blob URL. The solution must follow the\nprinciple of least privilege."
  },
  {
    "id": 64,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an agent. The agent generates summaries from\nretrieved policy documents.\nYou need to improve response completeness. The solution must be implemented in the logic of the\napplication code before responses are returned.\nWhat should you do?",
    "options": [
      {
        "id": "A",
        "text": "Add a retry evaluation before the responses are returned."
      },
      {
        "id": "B",
        "text": "Decrease the value of the max_tokens parameter."
      },
      {
        "id": "C",
        "text": "Switch to Retrieval Augmented Generation (RAG)."
      },
      {
        "id": "D",
        "text": "Replace the model with a smaller deployment."
      }
    ],
    "correctAnswer": [
      "A"
    ],
    "sourceAnswer": "A. Add a retry evaluation before the responses are returned.",
    "explanation": "Correct Answer:\nA. Add a retry evaluation before the responses are returned.\nThe requirement is to improve response completeness  and to implement the solution in the application\nlogic before responses are returned .\nA retry evaluation  enables the application to assess whether the generated summary is sufficiently complete.\nIf the evaluation determines that important information is missing, the application can automatically\nregenerate or refine the response before returning it to the us er. This approach improves completeness\nwithout changing the underlying model or retrieval architecture.\n\nIncorrect Answers:\nB. Decrease the value of the max_tokens parameter.\nReducing max_tokens  limits the maximum response length, making summaries less complete , not more.\nC. Switch to Retrieval Augmented Generation (RAG).\nThe question states that the agent already generates summaries from retrieved policy documents , which\nimplies a retrieval -based workflow is already in use. Switching to RAG would not address the stated\nrequirement.\nD. Replace the model with a smaller deployment.\nA smaller model generally has lower reasoning and summarization capabilities and is less likely to improve\nresponse completeness.",
    "incorrectExplanations": {
      "B": "Decrease the value of the max_tokens parameter.\nReducing max_tokens  limits the maximum response length, making summaries less complete , not more.",
      "C": "Switch to Retrieval Augmented Generation (RAG).\nThe question states that the agent already generates summaries from retrieved policy documents , which\nimplies a retrieval -based workflow is already in use. Switching to RAG would not address the stated\nrequirement.",
      "D": "Replace the model with a smaller deployment.\nA smaller model generally has lower reasoning and summarization capabilities and is less likely to improve\nresponse completeness."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests foundry agent service concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Add a retry evaluation before the responses are returned.",
    "topic": "Foundry Agent Service",
    "sourceQuestionNumber": 64,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 65,
    "type": "single",
    "question": "You have an app named App1 that uses a Microsoft Foundry chat model deployment.\nApp1 accepts free -form text entered directly by users.\nSome users intentionally submit prompts that attempt to bypass system instructions, reveal hidden prompts,\nor manipulate tool execution.\nYou need to detect these direct prompt injection attempts before the model processes the user's input.\nWhat should you use?",
    "options": [
      {
        "id": "A",
        "text": "Image moderation"
      },
      {
        "id": "B",
        "text": "Prompt Shields for documents"
      },
      {
        "id": "C",
        "text": "Protected material text"
      },
      {
        "id": "D",
        "text": "Prompt Shields for user prompts"
      }
    ],
    "correctAnswer": [
      "D"
    ],
    "sourceAnswer": "D. Prompt Shields for user prompts",
    "explanation": "Correct Answer:\nD. Prompt Shields for user prompts\nPrompt Shields for user prompts  are specifically designed to detect and mitigate direct prompt injection\nattacks , where users intentionally try to  override or ignore system instructions , reveal hidden prompts ,\nmanipulate tool execution and c hange the behavior of the model .\nSince App1 accepts free-form text entered directly by users , Prompt Shields for user prompts is the correct\nprotection mechanism.\n\nIncorrect Answers:\nA. Image moderation\nImage moderation detects harmful or inappropriate content in images. It does not analyze text prompts or\ndetect prompt injection attacks.\nB. Prompt Shields for documents\nPrompt Shields for documents protect against indirect prompt injection , where malicious instructions are\nembedded in external content such as documents, web pages, or retrieved files. They do not protect against\nattacks entered directly by users.\nC. Protected material text\nProtected material detection identifies copyrighted or protected text in model outputs. It does not detect\nprompt injection attempts.",
    "incorrectExplanations": {
      "A": "Image moderation\nImage moderation detects harmful or inappropriate content in images. It does not analyze text prompts or\ndetect prompt injection attacks.",
      "B": "Prompt Shields for documents\nPrompt Shields for documents protect against indirect prompt injection , where malicious instructions are\nembedded in external content such as documents, web pages, or retrieved files. They do not protect against\nattacks entered directly by users.",
      "C": "Protected material text\nProtected material detection identifies copyrighted or protected text in model outputs. It does not detect\nprompt injection attempts."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests model deployment concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Prompt Shields for user prompts",
    "topic": "Model Deployment",
    "sourceQuestionNumber": 65,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 66,
    "type": "drag-drop",
    "question": "You have a Microsoft Foundry project that contains an agent that answers employee questions by using\nRetrieval -Augmented Generation (RAG).\nAfter deployment, users report the following issues:\n• The retrieved documents are relevant, but the generated answers do not address the user's question.\n• Responses generated by the agent are significantly longer than expected, increasing inference costs.\nYou need to determine which diagnostic capability to use for each issue.\nWhich diagnostic capability should you use?\n\nTo answer, drag the appropriate diagnostic capabilities to the correct issues. Each diagnostic capability may\nbe used once, more than once, or not at all.",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "Answers do not address the user's question: Relevance Evaluation\nThe retrieved documents are already relevant , so the retrieval stage is working correctly. The problem is that\nthe generated answer does not address the user's question . Relevance Evaluation  measures whether the\nmodel's response is relevant to the user's query, making it the appropriate diagnostic capability.\nResponses are longer than expected: Completion token analytics\nLonger -than-expected responses directly increase inference costs because more completion tokens  are\ngenerated. Completion token analytics  helps identify excessive output token usage and determine whether\nlong model responses are driving the higher costs.\n\nIncorrect Answers\nGroundedness evaluation\nGroundedness checks whether the response is supported by the retrieved documents. In this scenario, the\ndocuments are already relevant. The issue is that the response does not answer the user's question, making\nRelevance Evaluation  the better choice.\nPrompt traces\nPrompt traces help inspect prompts and model interactions for debugging but do not directly evaluate\nresponse relevance or output token usage.\nLatency timeline\nLatency timeline measures execution time across retrieval, tool execution, and inference. It is useful for\ndiagnosing performance issues, not response quality or inference costs.",
    "explanation": "Correct Answers\nAnswers do not address the user's question: Relevance Evaluation\nThe retrieved documents are already relevant , so the retrieval stage is working correctly. The problem is that\nthe generated answer does not address the user's question . Relevance Evaluation  measures whether the\nmodel's response is relevant to the user's query, making it the appropriate diagnostic capability.\nResponses are longer than expected: Completion token analytics\nLonger -than-expected responses directly increase inference costs because more completion tokens  are\ngenerated. Completion token analytics  helps identify excessive output token usage and determine whether\nlong model responses are driving the higher costs.\n\nIncorrect Answers\nGroundedness evaluation\nGroundedness checks whether the response is supported by the retrieved documents. In this scenario, the\ndocuments are already relevant. The issue is that the response does not answer the user's question, making\nRelevance Evaluation  the better choice.\nPrompt traces\nPrompt traces help inspect prompts and model interactions for debugging but do not directly evaluate\nresponse relevance or output token usage.\nLatency timeline\nLatency timeline measures execution time across retrieval, tool execution, and inference. It is useful for\ndiagnosing performance issues, not response quality or inference costs.",
    "incorrectExplanations": {},
    "matchingPairs": [
      {
        "target": "Answers do not address the user's question",
        "value": "Relevance Evaluation"
      },
      {
        "target": "Responses are longer than expected",
        "value": "Completion token analytics"
      }
    ],
    "dragCandidates": [
      "Relevance Evaluation",
      "Completion token analytics",
      "Groundedness evaluation",
      "Prompt traces",
      "Latency timeline"
    ],
    "sourceImages": [
      "assets/questions/q66-p69-1c319fe2.png"
    ],
    "answerImages": [
      "assets/questions/q66-p69-eb080e78.png"
    ],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "nswers do not address the user's question: Relevance Evaluation",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 66,
    "needsReview": true,
    "sourceMaterial": "You have a Microsoft Foundry project that contains an agent that answers employee questions by using\nRetrieval -Augmented Generation (RAG).\nAfter deployment, users report the following issues:\n• The retrieved documents are relevant, but the generated answers do not address the user's question.\n• Responses generated by the agent are significantly longer than expected, increasing inference costs.\nYou need to determine which diagnostic capability to use for each issue.\nWhich diagnostic capability should you use?\n\nTo answer, drag the appropriate diagnostic capabilities to the correct issues. Each diagnostic capability may\nbe used once, more than once, or not at all."
  },
  {
    "id": 67,
    "type": "single",
    "question": "You have a Microsoft Foundry project named Project1 that contains the following: An OpenAPI tool that\ncalls an external API\nA project connection named Connection1 that stores the API key of the external API\nWhen an agent calls the OpenAPI tool, the API returns a 401 unauthorized error, and traces show that the API\nkey header is NOT being sent.\nYou need to ensure that the OpenAPI tool automatically includes the API key from Connection1 on all\nrequests.\nWhat should you do?",
    "options": [
      {
        "id": "A",
        "text": "Enable identity passthrough so that the tool uses the Microsoft Entra token of the caller."
      },
      {
        "id": "B",
        "text": "Add the API key header manually to the OpenAPI specification."
      },
      {
        "id": "C",
        "text": "Configure the tool to use the default connection of Project1."
      },
      {
        "id": "D",
        "text": "Connect the tool to Connection1."
      }
    ],
    "correctAnswer": [
      "D"
    ],
    "sourceAnswer": "D. Connect the tool to Connection1.",
    "explanation": "Correct Answer:\nD. Connect the tool to Connection1.\nIn Microsoft Foundry, project connections  securely store credentials such as API keys. When an OpenAPI\ntool is associated with a project connection , the Agent Service automatically retrieves the API key from the\nconnection and injects it into the request according to the API key security scheme  defined in the OpenAPI\nspecification.\nSince the traces show that the API key header is not being sent , the OpenAPI tool is not using Connection1 .\nConnecting the tool to Connection1  ensures the API key is automatically included in every request.\n\nIncorrect Answers\nA. Enable identity passthrough so that the tool uses the Microsoft Entra token of the caller.\nIdentity passthrough is used for Microsoft Entra ID authentication, not for APIs that require an API key.\nB. Add the API key header manually to the OpenAPI specification.\nManually adding the header hardcodes authentication behavior and does not use the secure API key stored in\nConnection1 . The recommended approach is to use a project connection together with an API key security\nscheme.\nC. Configure the tool to use the default connection of Project1.\nThe question specifies that the API key is stored in Connection1 . Using a default connection does not\nguarantee that the correct credentials will be supplied.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests authentication & security concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Connect the tool to Connection1.",
    "topic": "Authentication & Security",
    "sourceQuestionNumber": 67,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 68,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains a customer support agent.\nAfter deploying a new prompt template, administrators observe that Azure OpenAI costs have increased\nsignificantly, even though the number of user requests has remained constant.\nYou need to determine whether the prompt or generated responses are consuming more tokens than\nexpected.\nWhich observability signal should you review?",
    "options": [
      {
        "id": "A",
        "text": "Groundedness evaluation metrics"
      },
      {
        "id": "B",
        "text": "Retrieval evaluation metrics"
      },
      {
        "id": "C",
        "text": "Token usage analytics"
      },
      {
        "id": "D",
        "text": "Agent execution timeline"
      }
    ],
    "correctAnswer": [
      "C"
    ],
    "sourceAnswer": "C. Token usage analytics",
    "explanation": "Correct Answer:\nC. Token usage analytics\nToken usage analytics  provides detailed information about the number of input tokens (prompt tokens)  and\noutput tokens (completion tokens)  consumed by each request.\nSince  the number of user requests has remained constant , and Azure OpenAI costs have increased\nsignificantly , the most likely cause is that either  the new prompt template is sending more input tokens , or\nthe model is generating more output tokens .\nToken usage analytics allows you to identify exactly whether the increase is due to larger prompts, longer\nresponses, or both.\n\nIncorrect Answers\nA. Groundedness evaluation metrics\nGroundedness metrics determine whether responses are supported by retrieved documents. They do not\nmeasure token consumption or explain increased model costs.\nB. Retrieval evaluation metrics\nRetrieval evaluation metrics assess the quality of document retrieval, such as whether relevant documents\nwere retrieved. They do not show prompt or completion token usage.\nD. Agent execution timeline\nThe execution timeline shows the duration of different stages of an agent run, such as retrieval, tool\nexecution, and model inference. It helps diagnose performance issues, not token consumption or inference\ncosts.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests model deployment concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Token usage analytics",
    "topic": "Model Deployment",
    "sourceQuestionNumber": 68,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 69,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains a customer support agent. The agent uses Azure AI\nSearch as a knowledge source to answer questions by using Retrieval -Augmented Generation (RAG).\nAfter a recent deployment, users report the following issues:\n• The agent occasionally generates responses that are not supported by the retrieved documents.\n• Support engineers want the agent to return a fallback response instead of generating an answer\nwhen insufficient grounding evidence is available.\nYou need to identify the evaluation metric and the recommended configuration to address the issues.",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "Evaluation metric: Groundedness\nThe issue states that  the agent occasionally generates responses that are not supported by the retrieved\ndocuments.\nThis is exactly what the Groundedness  evaluation metric measures. It determines whether the generated\nresponse is supported by the retrieved knowledge source rather than containing hallucinations or\nunsupported claims.\nRecommended configuration: Reject responses that do not meet the groundedness threshold.\nThe second requirement is  Return a fallback response instead of generating an answer when insufficient\ngrounding evidence is available.\nThe appropriate configuration is to reject responses that fail the groundedness threshold . When a response\nis not sufficiently grounded, the application can return a fallback message such as \"I couldn't find enough\ninformation to answer that question.\"  instead of returning a potentially hallucinated response.\n\nIncorrect Answers\nIncrease the model temperature.\nA higher temperature makes responses more creative and less deterministic, increasing the likelihood of\nunsupported answers.\nIncrease the maximum completion tokens.\nIncreasing completion tokens only allows longer responses. It does not improve grounding or reduce\nhallucinations.\nFine-tune the model by using the retrieved documents.\nRAG is designed to ground responses using retrieved documents at inference time. Fine -tuning is\nunnecessary for this requirement and does not ensure that every response is grounded in the retrieved\ncontent.",
    "explanation": "Correct Answers\n\nEvaluation metric: Groundedness\nThe issue states that  the agent occasionally generates responses that are not supported by the retrieved\ndocuments.\nThis is exactly what the Groundedness  evaluation metric measures. It determines whether the generated\nresponse is supported by the retrieved knowledge source rather than containing hallucinations or\nunsupported claims.\nRecommended configuration: Reject responses that do not meet the groundedness threshold.\nThe second requirement is  Return a fallback response instead of generating an answer when insufficient\ngrounding evidence is available.\nThe appropriate configuration is to reject responses that fail the groundedness threshold . When a response\nis not sufficiently grounded, the application can return a fallback message such as \"I couldn't find enough\ninformation to answer that question.\"  instead of returning a potentially hallucinated response.\n\nIncorrect Answers\nIncrease the model temperature.\nA higher temperature makes responses more creative and less deterministic, increasing the likelihood of\nunsupported answers.\nIncrease the maximum completion tokens.\nIncreasing completion tokens only allows longer responses. It does not improve grounding or reduce\nhallucinations.\nFine-tune the model by using the retrieved documents.\nRAG is designed to ground responses using retrieved documents at inference time. Fine -tuning is\nunnecessary for this requirement and does not ensure that every response is grounded in the retrieved\ncontent.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q69-p72-8205ab1f.png"
    ],
    "answerImages": [
      "assets/questions/q69-p72-b761975c.png"
    ],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "valuation metric: Groundedness",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 69,
    "needsReview": true,
    "sourceMaterial": "You have a Microsoft Foundry project that contains a customer support agent. The agent uses Azure AI\nSearch as a knowledge source to answer questions by using Retrieval -Augmented Generation (RAG).\nAfter a recent deployment, users report the following issues:\n• The agent occasionally generates responses that are not supported by the retrieved documents.\n• Support engineers want the agent to return a fallback response instead of generating an answer\nwhen insufficient grounding evidence is available.\nYou need to identify the evaluation metric and the recommended configuration to address the issues."
  },
  {
    "id": 70,
    "type": "multiple",
    "question": "You have a Microsoft Foundry project that contains an agent.\nYour organization needs to detect suspicious sign -in activity, investigate security incidents, and correlate\nalerts generated from Microsoft Foundry, Microsoft Defender, and Microsoft Entra ID.\nThe solution must provide a centralized security operations platform.\nWhich two components should you use?",
    "options": [
      {
        "id": "A",
        "text": "Microsoft Sentinel"
      },
      {
        "id": "B",
        "text": "Log Analytics workspace"
      },
      {
        "id": "C",
        "text": "Azure Monitor Agent"
      },
      {
        "id": "D",
        "text": "Application Insights"
      },
      {
        "id": "E",
        "text": "OpenTelemetry"
      }
    ],
    "correctAnswer": [
      "A",
      "B"
    ],
    "sourceAnswer": "A. Microsoft Sentinel\nB. Log Analytics workspace",
    "explanation": "Correct Answers\nA. Microsoft Sentinel\n\nMicrosoft Sentinel  is Microsoft's cloud -native SIEM (Security Information and Event Management)  and\nSOAR (Security Orchestration, Automation, and Response)  platform.\nIt enables security teams to  detect suspicious sign -in activity , investigate security incidents , correlate alerts\nacross multiple services and a utomate incident response\nSince the requirement is for a centralized security operations platform , Microsoft Sentinel is the correct\nchoice.\nB. Log Analytics workspace\nA Log Analytics workspace  serves as the data repository for Sentinel.\nIt collects logs from  Microsoft Foundry , Microsoft Defender , Microsoft Entra ID , Azure resources and o ther\nconnected data sources\nSentinel uses the Log Analytics workspace to query, correlate, and investigate security events.\n\nIncorrect Answers\nC. Azure Monitor Agent\nAzure Monitor Agent collects telemetry from Azure VMs and servers, but it is not the centralized security\nplatform or incident correlation engine required in this scenario.\nD. Application Insights\nApplication Insights monitors application performance, availability, requests, dependencies, and exceptions. It\nis intended for application observability, not security operations.\nE. OpenTelemetry\nOpenTelemetry provides a vendor -neutral framework for collecting traces, metrics, and logs for application\nobservability. It does not provide SIEM capabilities or security incident correlation.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests authentication & security concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Microsoft Sentinel",
    "topic": "Authentication & Security",
    "sourceQuestionNumber": 70,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 71,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains a model deployment.\nYou have an application that calls the deployment by using the Azure OpenAI v1 API and\nDefaultAzureCredential. The developers at your company receive HTTP 403 errors when they send inference\nrequests, even after running az login.\nYou need to ensure that the developers can perform model inference. The solution must follow the principle\nof least privilege.\nWhich role -based access control (RBAC) role should you assign to the developers?",
    "options": [
      {
        "id": "A",
        "text": "Cognitive Services User"
      },
      {
        "id": "B",
        "text": "Cognitive Services OpenAI User"
      },
      {
        "id": "C",
        "text": "Contributor"
      },
      {
        "id": "D",
        "text": "Cognitive Services Data Reader"
      }
    ],
    "correctAnswer": [
      "B"
    ],
    "sourceAnswer": "B. Cognitive Services OpenAI User",
    "explanation": "Correct Answer:\nB. Cognitive Services OpenAI User\nThe application authenticates by using DefaultAzureCredential , which relies on Microsoft Entra ID  for\nauthentication. Although the developers have successfully authenticated by running az login , they receive\n\nHTTP 403 Forbidden  errors because they do not have sufficient permissions to perform inference on the\nAzure OpenAI model deployment.\nThe Cognitive Services OpenAI User  role grants the minimum permissions required to invoke Azure OpenAI\nmodels. It allows developers to perform inference requests without granting unnecessary management\npermissions, thereby following the principle of least privilege.\n\nIncorrect Answers:\nA. Cognitive Services User\nThis role provides access to Azure AI services in general but does not specifically grant the permissions\nrequired to perform inference against Azure OpenAI model deployments.\nC. Contributor\nThe Contributor role grants broad management permissions, including creating, modifying, and deleting\nAzure resources. This exceeds the permissions required for developers who only need to perform model\ninference.\nD. Cognitive Services Data Reader\nThis role provides read -only access to resource data and configuration. It does not allow users to invoke\nAzure OpenAI model deployments.",
    "incorrectExplanations": {
      "A": "Cognitive Services User\nThis role provides access to Azure AI services in general but does not specifically grant the permissions\nrequired to perform inference against Azure OpenAI model deployments.",
      "C": "Contributor\nThe Contributor role grants broad management permissions, including creating, modifying, and deleting\nAzure resources. This exceeds the permissions required for developers who only need to perform model\ninference.",
      "D": "Cognitive Services Data Reader\nThis role provides read -only access to resource data and configuration. It does not allow users to invoke\nAzure OpenAI model deployments."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests authentication & security concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Cognitive Services OpenAI User",
    "topic": "Authentication & Security",
    "sourceQuestionNumber": 71,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 72,
    "type": "single",
    "question": "You have an app named App1 that uses a Microsoft Foundry multimodal model deployment.\nApp1 runs optical character recognition (OCR) on uploaded images and appends the OCR output to the\nprompt as additional context.\nSome uploaded images contain embedded text.\nYou need to prevent potentially malicious instructions from being processed by the model.\nWhat should you use?",
    "options": [
      {
        "id": "A",
        "text": "image moderation"
      },
      {
        "id": "B",
        "text": "prompt shields for documents"
      },
      {
        "id": "C",
        "text": "protected material text"
      },
      {
        "id": "D",
        "text": "prompt shields for user prompts"
      }
    ],
    "correctAnswer": [
      "B"
    ],
    "sourceAnswer": "B. Prompt Shields for documents",
    "explanation": "Correct Answer:\nB. Prompt Shields for documents\nThe application performs OCR on uploaded images  and appends the extracted text to the prompt before\nsending it to the multimodal model. If an attacker embeds malicious instructions within the image, those\ninstructions become part of the prompt after OCR. This is known as an indirect prompt injection attack , also\nreferred to as a document attack .\nPrompt Shields for documents  are specifically designed to detect and mitigate indirect prompt injection\nattacks originating from documents, images, and other external content. They analyze the extracted content\nbefore it reaches the model and help prevent malicious embedded instructi ons from influencing the model's\nbehavior.\n\nIncorrect Answers:\nA. Image moderation\nImage moderation detects harmful visual content such as violence, sexual content, or graphic imagery. It\ndoes not detect malicious instructions embedded as text within images.\nC. Protected material text\nProtected material text identifies copyrighted or protected text. It does not protect against prompt injection\nattacks.\nD. Prompt Shields for user prompts\nPrompt Shields for user prompts protect against direct prompt injection , where malicious instructions are\ntyped directly into the user's prompt. They do not protect against instructions extracted from uploaded\ndocuments or images.",
    "incorrectExplanations": {
      "A": "Image moderation\nImage moderation detects harmful visual content such as violence, sexual content, or graphic imagery. It\ndoes not detect malicious instructions embedded as text within images.",
      "C": "Protected material text\nProtected material text identifies copyrighted or protected text. It does not protect against prompt injection\nattacks.",
      "D": "Prompt Shields for user prompts\nPrompt Shields for user prompts protect against direct prompt injection , where malicious instructions are\ntyped directly into the user's prompt. They do not protect against instructions extracted from uploaded\ndocuments or images."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests model deployment concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Prompt Shields for documents",
    "topic": "Model Deployment",
    "sourceQuestionNumber": 72,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 73,
    "type": "single",
    "question": "You need to recommend a solution for a legal research agent by using the Microsoft Foundry Agent\nService.\nThe solution must meet the following requirements:\n• Retain attorney preferences across multiple conversations.\n• Enable the agent to retrieve reference material from documents uploaded during a conversation.\nWhich Foundry capability should you recommend for each requirement?",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "The correct answers are Agent memory that uses persistent storage  and File search tool .\nTo retain attorney preferences across multiple conversations, the agent must use persistent agent memory .\nUnlike conversation history or session context, persistent memory stores user preferences across sessions,\nallowing the agent to remember long -term information such as preferred legal terminology, citation style, or\ndocument formatting preferences.\nTo retrieve reference material from documents uploaded during a conversation, the File search tool  is the\nappropriate capability. It indexes uploaded files and enables the agent to search their contents during the\nconversation, making it ideal for legal research scenarios where users upload contracts, case files, or other\nreference documents.",
    "explanation": "Correct Answers\nThe correct answers are Agent memory that uses persistent storage  and File search tool .\nTo retain attorney preferences across multiple conversations, the agent must use persistent agent memory .\nUnlike conversation history or session context, persistent memory stores user preferences across sessions,\nallowing the agent to remember long -term information such as preferred legal terminology, citation style, or\ndocument formatting preferences.\nTo retrieve reference material from documents uploaded during a conversation, the File search tool  is the\nappropriate capability. It indexes uploaded files and enables the agent to search their contents during the\nconversation, making it ideal for legal research scenarios where users upload contracts, case files, or other\nreference documents.\n\nIncorrect Answers:\nConversation history  is incorrect because it maintains the messages within a conversation or thread but is\nnot intended for storing long -term user preferences across multiple conversations.\nOrchestration -managed session context  is incorrect because it exists only for the duration of the current\nsession and is discarded afterward.\nPrompt cache  is incorrect because it is an optimization feature that reduces latency and cost by caching\nrepeated prompts. It does not store user preferences.\nCode interpreter tool  is incorrect because it is designed to execute Python code and analyze data rather than\nsearch uploaded documents.\nComputer use tool  is incorrect because it automates interactions with graphical user interfaces and is\nunrelated to document retrieval.\nAzure AI Translator  is incorrect because it translates text and documents but does not retrieve information\nfrom uploaded files.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q73-p76-f28ff679.png"
    ],
    "answerImages": [
      "assets/questions/q73-p76-3d15c8b4.png"
    ],
    "concept": "This question tests foundry agent service concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "The correct answers are Agent memory that uses persistent storage and File search tool .",
    "topic": "Foundry Agent Service",
    "sourceQuestionNumber": 73,
    "needsReview": true,
    "sourceMaterial": "You need to recommend a solution for a legal research agent by using the Microsoft Foundry Agent\nService.\nThe solution must meet the following requirements:\n• Retain attorney preferences across multiple conversations.\n• Enable the agent to retrieve reference material from documents uploaded during a conversation.\nWhich Foundry capability should you recommend for each requirement?"
  },
  {
    "id": 74,
    "type": "single",
    "question": "You have a Microsoft Foundry project named Project1.\nProject1 contains an application that processes scanned engineering drawings.\nYou need to configure Azure Document Intelligence in Foundry Tools to extract the document content while\npreserving tables, headings, paragraphs, and reading order. The extracted content will be passed directly to a\nlarge language model for summarization.\nThe solution must minimize custom post -processing.\nWhat should you do?",
    "options": [
      {
        "id": "A",
        "text": "Configure output=figures when analyzing the document."
      },
      {
        "id": "B",
        "text": "Set output_content_format=ContentFormat.MARKDOWN."
      },
      {
        "id": "C",
        "text": "Configure string_index_type=UnicodeCodePoint."
      },
      {
        "id": "D",
        "text": "Increase the OCR resolution before processing."
      }
    ],
    "correctAnswer": [
      "B"
    ],
    "sourceAnswer": "B. Set output_content_format=ContentFormat.MARKDOWN.",
    "explanation": "Correct Answer:\n\nB. Set output_content_format=ContentFormat.MARKDOWN.\nThe application needs to extract content from scanned engineering drawings while preserving tables,\nheadings, paragraphs, and reading order . The extracted content will be passed directly to a large language\nmodel, so the output should be structured and require minimal post -processing.\nSetting output_content_format=ContentFormat.MARKDOWN  instructs Azure Document Intelligence to return\nthe extracted content in Markdown  format. Markdown preserves the logical structure of the document,\nincluding headings, tables, paragraphs, and reading order, making it ideal for Retrieval -Augmented\nGeneration (RAG) and LLM summarization scenarios.\n\nIncorrect Answers:\nA. Configure output=figures when analyzing the document.\nThis option extracts figures and images from the document. It does not preserve the overall document\nstructure or produce structured text suitable for an LLM.\nC. Configure string_index_type=UnicodeCodePoint.\nThis setting controls how text offsets are represented in the response. It does not affect the extracted\ncontent or preserve tables, headings, or reading order.\nD. Increase the OCR resolution before processing.\nIncreasing OCR resolution may improve text recognition quality for low -quality scans, but it does not produce\nstructured output or reduce the need for custom post -processing.",
    "incorrectExplanations": {
      "A": "Configure output=figures when analyzing the document.\nThis option extracts figures and images from the document. It does not preserve the overall document\nstructure or produce structured text suitable for an LLM.",
      "C": "Configure string_index_type=UnicodeCodePoint.\nThis setting controls how text offsets are represented in the response. It does not affect the extracted\ncontent or preserve tables, headings, or reading order.",
      "D": "Increase the OCR resolution before processing.\nIncreasing OCR resolution may improve text recognition quality for low -quality scans, but it does not produce\nstructured output or reduce the need for custom post -processing."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests azure content understanding concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Set output_content_format=ContentFormat.MARKDOWN.",
    "topic": "Azure Content Understanding",
    "sourceQuestionNumber": 74,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 75,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an Azure AI Search resource used to ground\nmultiple agents.\nDevelopers at your company use Microsoft Entra ID authentication to query the search index from a custom\napplication. They receive HTTP 403 (Forbidden) errors when executing search queries.\nYou need to grant the minimum permissions required for developers to query the search index.\nWhich role -based access control (RBAC) role should you assign?",
    "options": [
      {
        "id": "A",
        "text": "Search Service Contributor"
      },
      {
        "id": "B",
        "text": "Search Index Data Reader"
      },
      {
        "id": "C",
        "text": "Contributor"
      },
      {
        "id": "D",
        "text": "Reader"
      }
    ],
    "correctAnswer": [
      "B"
    ],
    "sourceAnswer": "B. Search Index Data Reader",
    "explanation": "Correct Answer:\nB. Search Index Data Reader\nThe developers are using Microsoft Entra ID authentication  to query an Azure AI Search index . An HTTP\n403 (Forbidden)  error indicates that authentication has succeeded, but the developers do not have sufficient\npermissions to perform search queries.\nThe Search Index Data Reader  role grants the minimum permissions required to query documents in an\nAzure AI Search index. It follows the principle of least privilege by allowing users to execute search\noperations without granting permissions to modify the search service or indexes.\n\nIncorrect Answers:\nA. Search Service Contributor\nThis role allows users to create, modify, and manage Azure AI Search resources and indexes. It grants far\nmore permissions than are required for simply querying the index.\nC. Contributor\nThe Contributor role provides broad Azure resource management permissions, including creating, updating,\nand deleting resources. This exceeds the permissions needed to perform search queries.\nD. Reader\nThe Reader role allows users to view Azure resource metadata but does not grant permission to query data\nstored in the search index.",
    "incorrectExplanations": {
      "A": "Search Service Contributor\nThis role allows users to create, modify, and manage Azure AI Search resources and indexes. It grants far\nmore permissions than are required for simply querying the index.",
      "C": "Contributor\nThe Contributor role provides broad Azure resource management permissions, including creating, updating,\nand deleting resources. This exceeds the permissions needed to perform search queries.",
      "D": "Reader\nThe Reader role allows users to view Azure resource metadata but does not grant permission to query data\nstored in the search index."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Search Index Data Reader",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 75,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 76,
    "type": "drag-drop",
    "question": "You have a Microsoft Foundry project that contains an agent used by an insurance company.\nYou need to enhance the agent by using built -in tools. The solution must meet the following requirements:\n• Allow the agent to analyze claim spreadsheets uploaded during conversations and generate charts.\n• Allow the agent to interact with a legacy claims management website that does not expose APIs.\n• Allow the agent to answer questions by using policy documents uploaded directly to the current\nconversation.\nWhat should you use for each requirement?\nTo answer, drag the appropriate tools to the correct requirements. Each tool may be used once, more than\nonce, or not at all.",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "Analyze uploaded spreadsheets and generate charts: Code Interpreter\n\nThe Code Interpreter  tool is designed to analyze uploaded files such as spreadsheets. It can execute Python\ncode to process claim data, perform calculations, and generate charts or other visualizations during the\nconversation.\nInteract with the legacy claims management website: Computer Use\nThe Computer Use  tool enables an agent to interact with applications and websites that do not expose APIs.\nIt can navigate web pages, click buttons, enter text, and perform other user interface actions, making it ideal\nfor legacy web applications.\nRetrieve information from uploaded policy documents: File Search\nThe File Search  tool indexes documents uploaded during the current conversation and allows the agent to\nretrieve relevant information from those files when answering user questions.",
    "explanation": "Correct Answers:\nAnalyze uploaded spreadsheets and generate charts: Code Interpreter\n\nThe Code Interpreter  tool is designed to analyze uploaded files such as spreadsheets. It can execute Python\ncode to process claim data, perform calculations, and generate charts or other visualizations during the\nconversation.\nInteract with the legacy claims management website: Computer Use\nThe Computer Use  tool enables an agent to interact with applications and websites that do not expose APIs.\nIt can navigate web pages, click buttons, enter text, and perform other user interface actions, making it ideal\nfor legacy web applications.\nRetrieve information from uploaded policy documents: File Search\nThe File Search  tool indexes documents uploaded during the current conversation and allows the agent to\nretrieve relevant information from those files when answering user questions.\n\nIncorrect Answers:\nGrounding with Bing Search\nThis tool retrieves information from public websites on the internet. It cannot search documents uploaded\nduring a conversation or interact with internal legacy applications.\nMicrosoft Fabric\nMicrosoft Fabric is an analytics platform for enterprise data workloads. It is not intended for analyzing\nuploaded spreadsheets during a chat, interacting with websites, or retrieving information from conversation -\nuploaded documents.",
    "incorrectExplanations": {},
    "matchingPairs": [
      {
        "target": "Analyze uploaded spreadsheets and generate charts",
        "value": "Code Interpreter"
      },
      {
        "target": "Interact with the legacy claims management website",
        "value": "Computer Use"
      },
      {
        "target": "Retrieve information from uploaded policy documents",
        "value": "File Search"
      }
    ],
    "dragCandidates": [
      "Code Interpreter",
      "Computer Use",
      "File Search",
      "Grounding with Bing Search",
      "Microsoft Fabric"
    ],
    "sourceImages": [
      "assets/questions/q76-p79-e46854c2.png"
    ],
    "answerImages": [
      "assets/questions/q76-p79-dd9f8be3.png"
    ],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "nalyze uploaded spreadsheets and generate charts: Code Interpreter",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 76,
    "needsReview": true,
    "sourceMaterial": "You have a Microsoft Foundry project that contains an agent used by an insurance company.\nYou need to enhance the agent by using built -in tools. The solution must meet the following requirements:\n• Allow the agent to analyze claim spreadsheets uploaded during conversations and generate charts.\n• Allow the agent to interact with a legacy claims management website that does not expose APIs.\n• Allow the agent to answer questions by using policy documents uploaded directly to the current\nconversation.\nWhat should you use for each requirement?\nTo answer, drag the appropriate tools to the correct requirements. Each tool may be used once, more than\nonce, or not at all."
  },
  {
    "id": 77,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an agent. The agent has a Model Context Protocol\n(MCP) tool that queries a knowledge base stored in Azure AI Search.\nSome agent runs return answers from the base model without invoking the knowledge base, which results in\nresponses without grounded citations.\nYou are provided with the following code snippet that runs the agent.\nrun = project_client.agents.runs.create_and_process(\n    thread_id=thread.id,\n    agent_id=agent.id\n)\nYou need to add the correct tool _choice parameter to the code to deterministically force the agent to invoke\nthe MCP tool on each run.\nWhat should you add?",
    "options": [
      {
        "id": "A",
        "text": "tool_choice= “required”"
      },
      {
        "id": "B",
        "text": "tool_choice= “auto”"
      },
      {
        "id": "C",
        "text": "tool_choice= “type”:“knowledge_base”"
      },
      {
        "id": "D",
        "text": "tool_choice = “type”:“mcp”"
      }
    ],
    "correctAnswer": [
      "D"
    ],
    "sourceAnswer": "D. tool_choice={\"type\":\"mcp\"}",
    "explanation": "Correct Answer:\nD. tool_choice={\"type\":\"mcp\"}\n\nThe requirement is to deterministically force the agent to invoke the MCP tool  on every run. Setting\ntool_choice={\"type\":\"mcp\"}  explicitly instructs the agent to use the Model Context Protocol (MCP)  tool\ninstead of allowing the model to decide whether to call a tool. This guarantees that the agent queries the\nAzure AI Search knowledge base through the MCP tool before generating a response, ensuring grounded\nanswers with citations.\n\nIncorrect Answers:\nA. tool_choice=\"required\"\nThis forces the agent to call a tool , but it does not guarantee that the MCP tool  will be selected if multiple\ntools are available.\nB. tool_choice=\"auto\"\nThis is the default behavior. The model decides whether to call a tool, which is exactly the problem described\nin the scenario because it sometimes answers directly from the base model.\nC. tool_choice={\"type\":\"knowledge_base\"}\nThere is no supported knowledge_base  tool type for the tool_choice parameter. Since the knowledge base is\nexposed through an MCP server, the correct tool type is mcp.",
    "incorrectExplanations": {
      "A": "tool_choice=\"required\"\nThis forces the agent to call a tool , but it does not guarantee that the MCP tool  will be selected if multiple\ntools are available.",
      "B": "tool_choice=\"auto\"\nThis is the default behavior. The model decides whether to call a tool, which is exactly the problem described\nin the scenario because it sometimes answers directly from the base model.",
      "C": "tool_choice={\"type\":\"knowledge_base\"}\nThere is no supported knowledge_base  tool type for the tool_choice parameter. Since the knowledge base is\nexposed through an MCP server, the correct tool type is mcp."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "tool_choice={\"type\":\"mcp\"}",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 77,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 78,
    "type": "single",
    "question": "A Microsoft Foundry agent invokes three custom tools.\nAdministrators report that users occasionally experience response delays.\nThey need to determine which tool contributes the most to the total response time.\nWhich diagnostic capability should they review?",
    "options": [
      {
        "id": "A",
        "text": "Token usage analytics"
      },
      {
        "id": "B",
        "text": "Tool execution traces"
      },
      {
        "id": "C",
        "text": "Groundedness evaluation"
      },
      {
        "id": "D",
        "text": "Conversation history"
      }
    ],
    "correctAnswer": [
      "B"
    ],
    "sourceAnswer": "B. Tool execution traces",
    "explanation": "Correct Answer:\nB. Tool execution traces\nThe administrators need to determine which of the three custom tools contributes the most to the overall\nresponse time . Tool execution traces  provide detailed diagnostics for each tool invocation, including when a\ntool starts, how long it executes, whether it succeeds or fails, and how much time each tool adds to the\noverall agent run. This makes it possible to identify the slowest tool and pin point the source of response\ndelays.\n\nIncorrect Answers:\nA. Token usage analytics\nToken usage analytics measures the number of input and output tokens consumed by the language model. It\nhelps analyze inference costs but does not identify which tool is causing latency.\n\nC. Groundedness evaluation\nGroundedness evaluation measures whether the generated response is supported by retrieved data. It\nevaluates response quality rather than tool performance or execution time.\nD. Conversation history\nConversation history records the messages exchanged during a conversation. It does not provide timing or\nperformance information for individual tool executions.",
    "incorrectExplanations": {
      "A": "Token usage analytics\nToken usage analytics measures the number of input and output tokens consumed by the language model. It\nhelps analyze inference costs but does not identify which tool is causing latency.",
      "C": "Groundedness evaluation\nGroundedness evaluation measures whether the generated response is supported by retrieved data. It\nevaluates response quality rather than tool performance or execution time.",
      "D": "Conversation history\nConversation history records the messages exchanged during a conversation. It does not provide timing or\nperformance information for individual tool executions."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests agent tools & workflows concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Tool execution traces",
    "topic": "Agent Tools & Workflows",
    "sourceQuestionNumber": 78,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 79,
    "type": "single",
    "question": "You need to recommend a solution for a customer service agent by using the Microsoft Foundry Agent\nService.\nThe agent must meet the following requirements:\n• Execute Python code to analyze spreadsheets uploaded by users during conversations.\n• Access current weather conditions from public websites without requiring users to upload\ndocuments.\nWhich Foundry capability should you recommend for each requirement?",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "To analyze uploaded spreadsheets: Code Interpreter Tool\nThe Code Interpreter Tool  enables the agent to execute Python code on user -uploaded files. It can analyze\nspreadsheets, perform calculations, manipulate data, and generate charts or other visualizations during the\nconversation.\nTo retrieve current weather information: Grounding with Bing Search\nGrounding with Bing Search  allows the agent to retrieve current, real -time information from public websites,\nincluding weather conditions, without requiring users to upload documents. It is specifically designed to\nground responses using live web content.",
    "explanation": "Correct Answers:\n\nTo analyze uploaded spreadsheets: Code Interpreter Tool\nThe Code Interpreter Tool  enables the agent to execute Python code on user -uploaded files. It can analyze\nspreadsheets, perform calculations, manipulate data, and generate charts or other visualizations during the\nconversation.\nTo retrieve current weather information: Grounding with Bing Search\nGrounding with Bing Search  allows the agent to retrieve current, real -time information from public websites,\nincluding weather conditions, without requiring users to upload documents. It is specifically designed to\nground responses using live web content.\n\nIncorrect Answers:\nFile Search Tool\nThe File Search Tool retrieves information from files uploaded during the conversation. It cannot access live\ninformation from public websites such as current weather.\nComputer Use Tool\nThe Computer Use Tool automates interactions with graphical user interfaces and websites. It is intended for\noperating applications or websites that require user interface interactions, not for retrieving grounded public\nweb information.\nAzure AI Search Tool\nAzure AI Search queries enterprise search indexes. It is not intended for analyzing uploaded spreadsheets or\nretrieving current public weather information.\nMicrosoft Fabric Tool\nMicrosoft Fabric is an enterprise analytics platform and is not used to retrieve live weather information during\nagent conversations.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q79-p82-dc744e53.png"
    ],
    "answerImages": [
      "assets/questions/q79-p82-b4ba954e.png"
    ],
    "concept": "This question tests foundry agent service concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "To analyze uploaded spreadsheets: Code Interpreter Tool",
    "topic": "Foundry Agent Service",
    "sourceQuestionNumber": 79,
    "needsReview": true,
    "sourceMaterial": "You need to recommend a solution for a customer service agent by using the Microsoft Foundry Agent\nService.\nThe agent must meet the following requirements:\n• Execute Python code to analyze spreadsheets uploaded by users during conversations.\n• Access current weather conditions from public websites without requiring users to upload\ndocuments.\nWhich Foundry capability should you recommend for each requirement?"
  },
  {
    "id": 80,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an agent used by an internal HR application.\nFollowing a prompt update, administrators notice that users are reporting more incomplete and unsupported",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "s. The application continues to process requests successfully, and response times remain unchanged.\nYou need to determine whether the quality of the generated responses has degraded.\nWhich observability capability should you use?\nA. Token usage\nB. Latency\nC. Evaluation metrics\nD. Run success rate\n\nAnswer:\nC. Evaluation metrics",
    "explanation": "Correct Answer:\nC. Evaluation metrics\nThe issue is that users are receiving more incomplete and unsupported answers , indicating that the quality\nof the generated responses has degraded . Since the application continues to process requests successfully\n\nand response times have not changed, the problem is related to response quality rather than performance or\nreliability.\nEvaluation metrics  measure qualitative aspects of model outputs, such as groundedness, relevance,\ncompleteness, coherence, and fluency . These metrics help determine whether a prompt update has\nnegatively affected the quality of the generated responses.\n\nIncorrect Answers:\nA. Token usage\nToken usage measures the number of input and output tokens consumed by the model. It is useful for\nanalyzing inference costs but does not evaluate response quality.\nB. Latency\nLatency measures how long requests take to complete and helps diagnose performance bottlenecks. The\nquestion states that response times remain unchanged, so latency is not the issue.\nD. Run success rate\nRun success rate indicates whether agent runs complete successfully or fail. Since the application continues\nto process requests successfully, this metric does not identify degraded response quality.",
    "incorrectExplanations": {
      "A": "Token usage\nToken usage measures the number of input and output tokens consumed by the model. It is useful for\nanalyzing inference costs but does not evaluate response quality.",
      "B": "Latency\nLatency measures how long requests take to complete and helps diagnose performance bottlenecks. The\nquestion states that response times remain unchanged, so latency is not the issue.",
      "D": "Run success rate\nRun success rate indicates whether agent runs complete successfully or fail. Since the application continues\nto process requests successfully, this metric does not identify degraded response quality."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests foundry agent service concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "s. The application continues to process requests successfully, and response times remain unchanged.",
    "topic": "Foundry Agent Service",
    "sourceQuestionNumber": 80,
    "needsReview": true,
    "sourceMaterial": "You have a Microsoft Foundry project that contains an agent used by an internal HR application.\nFollowing a prompt update, administrators notice that users are reporting more incomplete and unsupported"
  },
  {
    "id": 81,
    "type": "single",
    "question": "You have a Microsoft Foundry project that serves a high -volume chat app. Most requests are simple\nFAQs, but some require advanced reasoning.\nYou need to reduce costs and latency for common queries, without degrading the quality of the responses to\ncomplex questions.\nWhat should you do?",
    "options": [
      {
        "id": "A",
        "text": "Route all the requests to a smaller model."
      },
      {
        "id": "B",
        "text": "Use a model cascade that routes the requests to different models."
      },
      {
        "id": "C",
        "text": "Increase the value of the max_tokens parameter for all the requests."
      },
      {
        "id": "D",
        "text": "Route all the requests to the most capable model."
      }
    ],
    "correctAnswer": [
      "B"
    ],
    "sourceAnswer": "B. Use a model cascade that routes the requests to different models.",
    "explanation": "Correct Answer:\nB. Use a model cascade that routes the requests to different models.\nThe application receives a mix of simple FAQ requests  and complex reasoning requests . A model cascade\nintelligently routes each request to the most appropriate model based on its complexity.\nSimple FAQ queries can be handled by a smaller, lower -cost, lower -latency model , while complex reasoning\ntasks are routed to a more capable model . This reduces overall inference costs and improves response\ntimes without sacrificing the quality of responses for more challenging questions.\n\nIncorrect Answers:\nA. Route all the requests to a smaller model.\nUsing only a smaller model would reduce costs and latency, but complex reasoning tasks could receive\nlower -quality responses.\n\nC. Increase the value of the max_tokens parameter for all the requests.\nIncreasing max_tokens allows longer responses but also increases inference costs and does not improve\nrouting or latency.\nD. Route all the requests to the most capable model.\nUsing the largest model for every request maintains response quality but increases both costs and latency\nfor simple FAQ requests.",
    "incorrectExplanations": {
      "A": "Route all the requests to a smaller model.\nUsing only a smaller model would reduce costs and latency, but complex reasoning tasks could receive\nlower -quality responses.",
      "C": "Increase the value of the max_tokens parameter for all the requests.\nIncreasing max_tokens allows longer responses but also increases inference costs and does not improve\nrouting or latency.",
      "D": "Route all the requests to the most capable model.\nUsing the largest model for every request maintains response quality but increases both costs and latency\nfor simple FAQ requests."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests foundry agent service concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Use a model cascade that routes the requests to different models.",
    "topic": "Foundry Agent Service",
    "sourceQuestionNumber": 81,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 82,
    "type": "single",
    "question": "A financial reporting application generates JSON that is consumed by downstream automation.\nOccasionally, responses contain unexpected fields that cause processing failures.\nWhich approach should you recommend?",
    "options": [
      {
        "id": "A",
        "text": "Lower the model temperature."
      },
      {
        "id": "B",
        "text": "Use structured outputs with a JSON schema."
      },
      {
        "id": "C",
        "text": "Increase the maximum completion tokens."
      },
      {
        "id": "D",
        "text": "Fine-tune the model."
      }
    ],
    "correctAnswer": [
      "B"
    ],
    "sourceAnswer": "B. Use structured outputs with a JSON schema.",
    "explanation": "Correct Answer:\nB. Use structured outputs with a JSON schema.\nThe application generates JSON that is consumed by downstream automation , so the output must conform\nto a predictable structure. If the model occasionally returns unexpected fields, downstream processing can\nfail.\nStructured outputs with a JSON schema  constrain the model to generate responses that match a predefined\nschema. This ensures that only the expected fields are returned, improving reliability and making the output\nsuitable for automated processing.\n\nIncorrect Answers:\nA. Lower the model temperature.\nLowering the temperature makes responses more deterministic, but it does not guarantee that the generated\nJSON will conform to a required schema or prevent unexpected fields.\nC. Increase the maximum completion tokens.\nIncreasing the maximum completion tokens allows the model to generate longer responses. It does not\nenforce a specific JSON structure and may even increase the likelihood of unnecessary content.\nD. Fine -tune the model.\nFine-tuning can improve model behavior for specific tasks, but it does not provide the same guarantee of\nschema compliance as structured outputs. It is also more complex and unnecessary for this scenario.",
    "incorrectExplanations": {
      "A": "Lower the model temperature.\nLowering the temperature makes responses more deterministic, but it does not guarantee that the generated\nJSON will conform to a required schema or prevent unexpected fields.",
      "C": "Increase the maximum completion tokens.\nIncreasing the maximum completion tokens allows the model to generate longer responses. It does not\nenforce a specific JSON structure and may even increase the likelihood of unnecessary content.",
      "D": "Fine -tune the model.\nFine-tuning can improve model behavior for specific tasks, but it does not provide the same guarantee of\nschema compliance as structured outputs. It is also more complex and unnecessary for this scenario."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests document processing concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Use structured outputs with a JSON schema.",
    "topic": "Document Processing",
    "sourceQuestionNumber": 82,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 83,
    "type": "single",
    "question": "You need to recommend a solution for a procurement agent by using the Microsoft Foundry Agent\nService.\nThe solution must meet the following requirements:\n• Answer questions by using supplier contracts uploaded by users during conversations.\n• Generate charts that summarize purchasing trends from uploaded Excel workbooks.\nWhich Foundry capability should you recommend for each requirement?",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "To answer questions from uploaded contracts: File Search Tool\nThe File Search Tool  is designed to retrieve information from documents uploaded during a conversation. It\nindexes the uploaded supplier contracts and enables the agent to search them efficiently when answering\nuser questions.\nTo generate charts from Excel workbooks: Code Interpreter Tool\nThe Code Interpreter Tool  can execute Python code to analyze uploaded Excel workbooks, perform\ncalculations, summarize purchasing trends, and generate charts and visualizations during the conversation.",
    "explanation": "Correct Answers:\nTo answer questions from uploaded contracts: File Search Tool\nThe File Search Tool  is designed to retrieve information from documents uploaded during a conversation. It\nindexes the uploaded supplier contracts and enables the agent to search them efficiently when answering\nuser questions.\nTo generate charts from Excel workbooks: Code Interpreter Tool\nThe Code Interpreter Tool  can execute Python code to analyze uploaded Excel workbooks, perform\ncalculations, summarize purchasing trends, and generate charts and visualizations during the conversation.\n\nIncorrect Answers:\nGrounding with Bing Search\nThis tool retrieves information from public websites. It cannot search user -uploaded contracts or analyze\nExcel workbooks.\nComputer Use Tool\nThe Computer Use Tool is intended for interacting with graphical user interfaces and legacy applications. It is\nnot designed for document retrieval or spreadsheet analysis.\nAzure AI Search Tool\nAzure AI Search is used to query enterprise search indexes. The requirement is to use contracts uploaded\nduring the current conversation, making the File Search Tool the appropriate choice.\nMicrosoft Fabric Tool\nMicrosoft Fabric is an enterprise analytics platform. It is not the built -in tool used by Foundry agents to\nanalyze uploaded Excel files during a conversation.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q83-p86-025c8cfb.png"
    ],
    "answerImages": [
      "assets/questions/q83-p86-ac443dd9.png"
    ],
    "concept": "This question tests foundry agent service concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "To answer questions from uploaded contracts: File Search Tool",
    "topic": "Foundry Agent Service",
    "sourceQuestionNumber": 83,
    "needsReview": true,
    "sourceMaterial": "You need to recommend a solution for a procurement agent by using the Microsoft Foundry Agent\nService.\nThe solution must meet the following requirements:\n• Answer questions by using supplier contracts uploaded by users during conversations.\n• Generate charts that summarize purchasing trends from uploaded Excel workbooks.\nWhich Foundry capability should you recommend for each requirement?"
  },
  {
    "id": 84,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an agent.\nYou need to process mixed -format documents that contain scanned text, tables, and multicolumn layouts.\nThe extracted content must preserve the document structure and be converted into the Markdown format for\ndownstream reasoning.\nWhat should you configure first?",
    "options": [
      {
        "id": "A",
        "text": "an Azure Language in Foundry Tools text analysis model deployment"
      },
      {
        "id": "B",
        "text": "a generative chat completion request"
      },
      {
        "id": "C",
        "text": "an Azure OpenAI Responses API call that uses a multimodal model"
      },
      {
        "id": "D",
        "text": "an Azure Content Understanding in Foundry Tools analyzer"
      }
    ],
    "correctAnswer": [
      "D"
    ],
    "sourceAnswer": "D. An Azure Content Understanding in Foundry Tools analyzer",
    "explanation": "Correct Answer:\nD. An Azure Content Understanding in Foundry Tools analyzer\nThe requirement is to process mixed -format documents  containing scanned text, tables, and multi -column\nlayouts while preserving the document structure  and converting the extracted content into Markdown  for\ndownstream reasoning.\nThe first step is to configure an Azure Content Understanding in Foundry Tools analyzer . Content\nUnderstanding provides document analysis capabilities that extract text and preserve structural elements\nsuch as headings, tables, paragraphs, and reading order. It also supports returning the extracted content in\nMarkdown  format, making it ideal for Retrieval -Augmented Generation (RAG) and LLM reasoning scenarios.\n\nIncorrect Answers:\nA. An Azure Language in Foundry Tools text analysis model deployment\nAzure Language performs natural language processing tasks such as sentiment analysis, entity recognition,\nand key phrase extraction. It does not extract document layouts or preserve document structure.\n\nB. A generative chat completion request\nA chat completion request generates responses from an LLM but does not perform structured document\nextraction or layout analysis.\nC. An Azure OpenAI Responses API call that uses a multimodal model\nA multimodal model can interpret document images, but it is not the recommended service for extracting\nstructured document content while preserving tables, headings, reading order, and generating Markdown.\nAzure Content Understanding is specifically design ed for this purpose.",
    "incorrectExplanations": {
      "A": "An Azure Language in Foundry Tools text analysis model deployment\nAzure Language performs natural language processing tasks such as sentiment analysis, entity recognition,\nand key phrase extraction. It does not extract document layouts or preserve document structure.",
      "B": "A generative chat completion request\nA chat completion request generates responses from an LLM but does not perform structured document\nextraction or layout analysis.",
      "C": "An Azure OpenAI Responses API call that uses a multimodal model\nA multimodal model can interpret document images, but it is not the recommended service for extracting\nstructured document content while preserving tables, headings, reading order, and generating Markdown.\nAzure Content Understanding is specifically design ed for this purpose."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests foundry agent service concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "An Azure Content Understanding in Foundry Tools analyzer",
    "topic": "Foundry Agent Service",
    "sourceQuestionNumber": 84,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 85,
    "type": "single",
    "question": "You have a Microsoft Foundry project.\nYou plan to build a customer support solution that contains an agent. The solution must meet the following\nrequirements:\nProvide accurate, context -aware responses grounded in internal product documentation stored in Azure AI\nSearch. Require deep, multi -step reasoning across long contexts.\nGenerate detailed natural language responses.\nWhich type of model should you use to power the agent?",
    "options": [
      {
        "id": "A",
        "text": "a multimodal model"
      },
      {
        "id": "B",
        "text": "a small language model (SLM)"
      },
      {
        "id": "C",
        "text": "a key phrase extraction model"
      },
      {
        "id": "D",
        "text": "a large language model (LLM)"
      }
    ],
    "correctAnswer": [
      "D"
    ],
    "sourceAnswer": "D. A large language model (LLM)",
    "explanation": "Correct Answer:\nD. A large language model (LLM)\nThe customer support agent must provide accurate, context -aware responses  grounded in internal product\ndocumentation stored in Azure AI Search , perform deep, multi -step reasoning across long contexts , and\ngenerate detailed natural language responses .\nA Large Language Model (LLM)  is specifically designed for these requirements. LLMs can process large\ncontext windows, perform sophisticated reasoning, integrate Retrieval -Augmented Generation (RAG) with\nAzure AI Search, and generate high -quality, detailed responses suitable for custo mer support scenarios.\n\nIncorrect Answers:\nA. A multimodal model\nMultimodal models are designed to process multiple input types such as text, images, and audio. The\nscenario only involves text -based product documentation and does not require multimodal capabilities.\nB. A small language model (SLM)\nSmall Language Models are optimized for lower cost and latency but have more limited reasoning capabilities\nand smaller context windows. They are not the best choice for deep, multi -step reasoning over long\ncontexts.\n\nC. A key phrase extraction model\nA key phrase extraction model identifies important phrases within text. It does not perform reasoning,\nretrieval, or generate natural language responses.",
    "incorrectExplanations": {
      "A": "A multimodal model\nMultimodal models are designed to process multiple input types such as text, images, and audio. The\nscenario only involves text -based product documentation and does not require multimodal capabilities.",
      "B": "A small language model (SLM)\nSmall Language Models are optimized for lower cost and latency but have more limited reasoning capabilities\nand smaller context windows. They are not the best choice for deep, multi -step reasoning over long\ncontexts.",
      "C": "A key phrase extraction model\nA key phrase extraction model identifies important phrases within text. It does not perform reasoning,\nretrieval, or generate natural language responses."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests foundry agent service concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "A large language model (LLM)",
    "topic": "Foundry Agent Service",
    "sourceQuestionNumber": 85,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 86,
    "type": "drag-drop",
    "question": "You have a Microsoft Foundry project that contains a legal research agent.\nThe solution must meet the following requirements:\n• Research recently published court decisions available on public websites.\n• Search contracts that attorneys upload during a conversation.\n• Log in to a third -party compliance portal and download supporting evidence for the current case.\nWhat should you use for each requirement?\nTo answer, drag the appropriate tools to the correct requirements. Each tool may be used once, more than\nonce, or not at all.",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "Research recent court decisions: Grounding with Bing Search\nThe Grounding with Bing Search  tool enables the agent to retrieve up -to-date information from public\nwebsites. Since recently published court decisions are available on public websites, this is the appropriate\ntool for accessing current legal information.\nSearch uploaded contracts: File Search\nThe File Search  tool indexes documents uploaded during the current conversation and allows the agent to\nretrieve relevant information from those contracts when answering questions.\nDownload evidence from the compliance portal: Computer Use\n\nThe Computer Use  tool allows an agent to interact with websites through their graphical user interfaces. It\ncan log in to third -party portals, navigate pages, click buttons, and download documents, making it the\ncorrect choice for interacting with a compliance portal that  requires user interface automation.",
    "explanation": "Correct Answers:\nResearch recent court decisions: Grounding with Bing Search\nThe Grounding with Bing Search  tool enables the agent to retrieve up -to-date information from public\nwebsites. Since recently published court decisions are available on public websites, this is the appropriate\ntool for accessing current legal information.\nSearch uploaded contracts: File Search\nThe File Search  tool indexes documents uploaded during the current conversation and allows the agent to\nretrieve relevant information from those contracts when answering questions.\nDownload evidence from the compliance portal: Computer Use\n\nThe Computer Use  tool allows an agent to interact with websites through their graphical user interfaces. It\ncan log in to third -party portals, navigate pages, click buttons, and download documents, making it the\ncorrect choice for interacting with a compliance portal that  requires user interface automation.\n\nIncorrect Answers:\nCode Interpreter\nCode Interpreter is designed for executing Python code to analyze data and files. It is not intended for\nsearching public websites, retrieving uploaded documents, or automating interactions with web portals.\nMicrosoft Fabric\nMicrosoft Fabric is an enterprise analytics platform and is not used for web search, document retrieval during\nconversations, or browser automation",
    "incorrectExplanations": {},
    "matchingPairs": [
      {
        "target": "Research recent court decisions",
        "value": "Grounding with Bing Search"
      },
      {
        "target": "Search uploaded contracts",
        "value": "File Search"
      },
      {
        "target": "Download evidence from the compliance portal",
        "value": "Computer Use"
      }
    ],
    "dragCandidates": [
      "Code Interpreter",
      "Computer Use",
      "File Search",
      "Grounding with Bing Search",
      "Microsoft Fabric"
    ],
    "sourceImages": [
      "assets/questions/q86-p89-74718dc3.png"
    ],
    "answerImages": [
      "assets/questions/q86-p89-3725c3db.png"
    ],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Research recent court decisions: Grounding with Bing Search",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 86,
    "needsReview": true,
    "sourceMaterial": "You have a Microsoft Foundry project that contains a legal research agent.\nThe solution must meet the following requirements:\n• Research recently published court decisions available on public websites.\n• Search contracts that attorneys upload during a conversation.\n• Log in to a third -party compliance portal and download supporting evidence for the current case.\nWhat should you use for each requirement?\nTo answer, drag the appropriate tools to the correct requirements. Each tool may be used once, more than\nonce, or not at all."
  },
  {
    "id": 87,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an agent.\nThe knowledge source for the agent is a set of scanned PDF troubleshooting guides stored in Azure Blob\nStorage. The guide pages contain two -column layouts and tables.\nYou use Azure Content Understanding in Foundry Tools to process the PDFs.\nYou plan to ingest the processed content into an index for Retrieval Augmented Generation (RAG) and store\nextracted fields for downstream automation.\nStakeholders must be able to verify where each extracted field value came from in the original PDF and route\nlow-reliability extractions for manual review.\nYou need to ensure that the Content Understanding document analyzer output includes a per -field confidence\nscore and source grounding to locations within the source document.\nWhat should you do?",
    "options": [
      {
        "id": "A",
        "text": "Set enableSegment to true."
      },
      {
        "id": "B",
        "text": "Provide labeled samples."
      },
      {
        "id": "C",
        "text": "Enable estimateFieldSourceAndConfidence."
      },
      {
        "id": "D",
        "text": "Configure the analyzer to use generative extraction for all fields."
      }
    ],
    "correctAnswer": [
      "C"
    ],
    "sourceAnswer": "C. Enable estimateFieldSourceAndConfidence.",
    "explanation": "Correct Answer:\nC. Enable estimateFieldSourceAndConfidence.\nThe requirements are  return a confidence score for each extracted field , provide source grounding  so\nstakeholders can identify where each extracted value originated in the original PDF  and route low-confidence\nextractions  for manual review.\nThe estimateFieldSourceAndConfidence  option is specifically designed for this purpose. When enabled,\nAzure Content Understanding estimates both  Per-field confidence scores , allowing low -confidence values to\nbe identified for human review  and Source locations  within the original document, enabling traceability back\nto the PDF content.\nThis directly satisfies both requirements.\n\nIncorrect Answers:\nA. Set enableSegment to true.\nThis enables document segmentation but does not provide per -field confidence scores or source grounding\ninformation.\nB. Provide labeled samples.\nLabeled samples help train or improve a custom analyzer, but they do not by themselves cause the analyzer\nto return confidence scores and source locations for extracted fields.\nD. Configure the analyzer to use generative extraction for all fields.\nGenerative extraction can improve extraction flexibility, but it does not guarantee that field confidence scores\nand source grounding information are included in the output.",
    "incorrectExplanations": {
      "A": "Set enableSegment to true.\nThis enables document segmentation but does not provide per -field confidence scores or source grounding\ninformation.",
      "B": "Provide labeled samples.\nLabeled samples help train or improve a custom analyzer, but they do not by themselves cause the analyzer\nto return confidence scores and source locations for extracted fields.",
      "D": "Configure the analyzer to use generative extraction for all fields.\nGenerative extraction can improve extraction flexibility, but it does not guarantee that field confidence scores\nand source grounding information are included in the output."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests azure content understanding concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Enable estimateFieldSourceAndConfidence.",
    "topic": "Azure Content Understanding",
    "sourceQuestionNumber": 87,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 88,
    "type": "single",
    "question": "A Microsoft Foundry agent answers questions from an Azure AI Search index.\nAdministrators observe the following:\n• Average prompt size has doubled.\n• Azure OpenAI costs have increased significantly.\n• Response quality remains unchanged.\nWhich action should you recommend first?",
    "options": [
      {
        "id": "A",
        "text": "Replace the model with GPT -4.1."
      },
      {
        "id": "B",
        "text": "Retrieve fewer document chunks before constructing the prompt."
      },
      {
        "id": "C",
        "text": "Increase the chunk overlap during indexing."
      },
      {
        "id": "D",
        "text": "Increase the model context window."
      }
    ],
    "correctAnswer": [
      "B"
    ],
    "sourceAnswer": "B. Retrieve fewer document chunks before constructing the prompt.",
    "explanation": "Correct Answer:\nB. Retrieve fewer document chunks before constructing the prompt.\nThe scenario states that  average prompt size has doubled , azure OpenAI costs have increased significantly\nand r esponse quality remains unchanged.\nThis indicates that the application is sending more retrieved content to the model than necessary. Since\nresponse quality has not improved, the additional document chunks are increasing token consumption and\ninference costs without providing any benefit.\nReducing the number of retrieved document chunks before constructing the prompt decreases the input\ntoken count, lowering Azure OpenAI costs while maintaining the same response quality.\n\nIncorrect Answers:\nA. Replace the model with GPT -4.1.\nChanging the model does not address the root cause, which is the increased prompt size. Costs may even\nincrease depending on the selected model.\nC. Increase the chunk overlap during indexing.\nIncreasing chunk overlap creates more redundant content in the search index. This can further increase\nprompt size and token usage, making the problem worse.\n\nD. Increase the model context window.\nA larger context window allows the model to accept longer prompts but does not reduce the number of input\ntokens or lower inference costs.",
    "incorrectExplanations": {
      "A": "Replace the model with GPT -4.1.\nChanging the model does not address the root cause, which is the increased prompt size. Costs may even\nincrease depending on the selected model.",
      "C": "Increase the chunk overlap during indexing.\nIncreasing chunk overlap creates more redundant content in the search index. This can further increase\nprompt size and token usage, making the problem worse.",
      "D": "Increase the model context window.\nA larger context window allows the model to accept longer prompts but does not reduce the number of input\ntokens or lower inference costs."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Retrieve fewer document chunks before constructing the prompt.",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 88,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 89,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an agent deployed to multiple environments.\nThe organization has adopted a passwordless authentication strategy.\nYou need to configure the GitHub Actions workflow to meet the following requirements:\n• Eliminate long -lived credentials.\n• Authenticate securely to Azure resources.\nHow should you configure the workflow?",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "Authentication method: Azure Login action that uses OpenID Connect (OIDC)\n\nThe organization has adopted a passwordless authentication strategy  and wants to eliminate long -lived\ncredentials . The Azure Login GitHub Action supports OpenID Connect (OIDC) , allowing GitHub Actions to\nobtain short -lived Microsoft Entra tokens without storing secrets such as client secrets or passwords.\nCredential management: Configure workload identity federation\nWorkload identity federation  establishes trust between GitHub Actions and Microsoft Entra ID. It enables\nGitHub workflows to exchange GitHub -issued OIDC tokens for Azure access tokens, eliminating the need for\nlong-lived credentials while providing secure authentication.",
    "explanation": "Correct Answers:\nAuthentication method: Azure Login action that uses OpenID Connect (OIDC)\n\nThe organization has adopted a passwordless authentication strategy  and wants to eliminate long -lived\ncredentials . The Azure Login GitHub Action supports OpenID Connect (OIDC) , allowing GitHub Actions to\nobtain short -lived Microsoft Entra tokens without storing secrets such as client secrets or passwords.\nCredential management: Configure workload identity federation\nWorkload identity federation  establishes trust between GitHub Actions and Microsoft Entra ID. It enables\nGitHub workflows to exchange GitHub -issued OIDC tokens for Azure access tokens, eliminating the need for\nlong-lived credentials while providing secure authentication.\n\nIncorrect Answers:\nPersonal access token (PAT)\nPATs are long -lived credentials and do not support a passwordless authentication strategy.\nStorage account access key\nStorage account keys are long -lived secrets and violate the requirement to eliminate long -lived credentials.\nPublish Profile\nA publish profile contains long -lived deployment credentials and is not recommended for secure GitHub\nActions authentication.\nStore credentials as GitHub repository secrets\nAlthough repository secrets protect stored credentials, they are still long -lived secrets and do not satisfy the\npasswordless requirement.\nRotate PAT every 30 days\nRegular rotation improves security but still relies on long -lived credentials instead of passwordless\nauthentication.\nUse a shared administrator account\nThis violates security best practices and the principle of least privilege.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q89-p92-48f06757.png"
    ],
    "answerImages": [
      "assets/questions/q89-p92-3309ad5f.png"
    ],
    "concept": "This question tests authentication & security concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "uthentication method: Azure Login action that uses OpenID Connect (OIDC)",
    "topic": "Authentication & Security",
    "sourceQuestionNumber": 89,
    "needsReview": true,
    "sourceMaterial": "You have a Microsoft Foundry project that contains an agent deployed to multiple environments.\nThe organization has adopted a passwordless authentication strategy.\nYou need to configure the GitHub Actions workflow to meet the following requirements:\n• Eliminate long -lived credentials.\n• Authenticate securely to Azure resources.\nHow should you configure the workflow?"
  },
  {
    "id": 90,
    "type": "single",
    "question": "You have an application that processes scanned PDF invoices. The invoices have varied layouts and\ninclude multipage tables.\nYou have a pipeline that uses optical character recognition (OCR) and extracts totals and invoice numbers.\nThe results are often incorrect because the document structure is ignored.\nYou need to implement a solution that provides OCR, layout analysis, and template -generalizing field\nextraction. The solution must NOT require training a custom model. The solution must minimize\nadministrative effort.\nWhat should you include in the solution?",
    "options": [
      {
        "id": "A",
        "text": "Azure Language in Foundry Tools"
      },
      {
        "id": "B",
        "text": "Azure Content Understanding in Foundry Tools"
      },
      {
        "id": "C",
        "text": "an Azure Machine Learning model"
      }
    ],
    "correctAnswer": [
      "B"
    ],
    "sourceAnswer": "B. Azure Content Understanding in Foundry Tools",
    "explanation": "Correct Answer:\nB. Azure Content Understanding in Foundry Tools\n\nThe solution must  process scanned PDF invoices  using OCR , understand document layout , including\nmultipage tables , extract fields such as invoice numbers  and totals  across varying invoice templates , not\nrequire training a custom model  and minimize administrative effort .\nAzure Content Understanding in Foundry Tools  is designed specifically for these scenarios. It combines  OCR\nto extract text from scanned documents , Layout analysis  to preserve tables, reading order, and document\nstructure  and Template -generalizing field extraction , allowing it to extract common business fields across\ndifferent document layouts without requiring a custom trained model.\nThis makes it the ideal solution with minimal administration.\n\nIncorrect Answers:\nA. Azure Language in Foundry Tools\nAzure Language provides text analytics capabilities such as entity recognition, sentiment analysis, and\nsummarization. It does not perform OCR or understand document layouts.\nC. An Azure Machine Learning model\nA custom Azure Machine Learning model would require development, training, deployment, and ongoing\nmaintenance, which contradicts the requirements to avoid custom model training and minimize administrative\neffort.",
    "incorrectExplanations": {
      "A": "Azure Language in Foundry Tools\nAzure Language provides text analytics capabilities such as entity recognition, sentiment analysis, and\nsummarization. It does not perform OCR or understand document layouts.",
      "C": "An Azure Machine Learning model\nA custom Azure Machine Learning model would require development, training, deployment, and ongoing\nmaintenance, which contradicts the requirements to avoid custom model training and minimize administrative\neffort."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests speech concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Azure Content Understanding in Foundry Tools",
    "topic": "Speech",
    "sourceQuestionNumber": 90,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 91,
    "type": "single",
    "question": "You are creating an agent workflow in a Microsoft Foundry project to support natural voice interactions.\nThe agent must receive continuous audio input, convert the input into text for reasoning, and then return\nspoken responses to a user.\nThe workflow must meet the following requirements:\n• Support turn -taking dynamics, where the agent begins to generate the speech output before the user\nfinishes speaking.\n• Operate with low latency to maintain conversational experience.\nYou need to enable both speech to text and text to speech in a real -time agent interaction.\nWhat should you do?",
    "options": [
      {
        "id": "A",
        "text": "Use batch transcription to convert the audio input and return text responses from the agent."
      },
      {
        "id": "B",
        "text": "Use real -time speech to text for incoming audio and text to speech for agent responses."
      },
      {
        "id": "C",
        "text": "Use an embeddings model to encode the audio, and then decode the audio into text and speech."
      },
      {
        "id": "D",
        "text": "Use speech translation to convert the audio into another language and return the translated text."
      }
    ],
    "correctAnswer": [
      "B"
    ],
    "sourceAnswer": "B. Use real -time speech to text for incoming audio and text to speech for agent responses.",
    "explanation": "Correct Answer:\nB. Use real -time speech to text for incoming audio and text to speech for agent responses.\nThe solution must  accept continuous audio input , convert speech to text for the agent's reasoning , return\nspoken responses , support low-latency, real -time conversations  and s upport turn-taking dynamics , where\nthe agent can begin responding before the user has completely finished speaking.\n\nThe Azure Speech service in Foundry Tools provides real-time Speech -to-Text (STT)  and Text-to-Speech\n(TTS)  capabilities that are specifically designed for conversational AI. These services enable streaming audio,\nlow latency, and natural turn -taking, making them the correct choice for voice agents.\n\nIncorrect Answers:\nA. Use batch transcription to convert the audio input and return text responses from the agent.\nBatch transcription is intended for processing prerecorded audio files. It introduces higher latency and cannot\nsupport real -time conversations or spoken responses.\nC. Use an embeddings model to encode the audio, and then decode the audio into text and speech.\nEmbedding models generate vector representations for similarity search and retrieval. They do not perform\nspeech recognition or speech synthesis.\nD. Use speech translation to convert the audio into another language and return the translated text.\nSpeech translation is designed for multilingual translation scenarios. The requirement is real -time speech\nrecognition and speech synthesis, not language translation.",
    "incorrectExplanations": {
      "A": "Use batch transcription to convert the audio input and return text responses from the agent.\nBatch transcription is intended for processing prerecorded audio files. It introduces higher latency and cannot\nsupport real -time conversations or spoken responses.",
      "C": "Use an embeddings model to encode the audio, and then decode the audio into text and speech.\nEmbedding models generate vector representations for similarity search and retrieval. They do not perform\nspeech recognition or speech synthesis.",
      "D": "Use speech translation to convert the audio into another language and return the translated text.\nSpeech translation is designed for multilingual translation scenarios. The requirement is real -time speech\nrecognition and speech synthesis, not language translation."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests speech concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Use real -time speech to text for incoming audio and text to speech for agent responses.",
    "topic": "Speech",
    "sourceQuestionNumber": 91,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 92,
    "type": "single",
    "question": "You have a Microsoft Foundry project that processes purchase orders stored in Azure Blob Storage.\nEach purchase order has a different layout depending on the supplier.\nThe extracted information will be stored as structured JSON and used by a procurement agent.\nYou need to create a single analyzer that meets the following requirements:\n• Extract the purchase order number, supplier name, requested delivery date, and total value from all\nsupported layouts.\n• Return confidence scores for each extracted field.\n• Minimize post -processing in the application.\nWhat should you use?",
    "options": [
      {
        "id": "A",
        "text": "A custom Azure Content Understanding analyzer in Foundry Tools that defines the required fields as\nextracted fields."
      },
      {
        "id": "B",
        "text": "The Azure Content Understanding prebuilt -read analyzer."
      },
      {
        "id": "C",
        "text": "The Azure Content Understanding prebuilt -layout analyzer."
      },
      {
        "id": "D",
        "text": "Azure AI Search with vector search enabled."
      }
    ],
    "correctAnswer": [
      "A"
    ],
    "sourceAnswer": "A. A custom Azure Content Understanding analyzer in Foundry Tools that defines the required fields as\nextracted fields.",
    "explanation": "Correct Answer:\nA. A custom Azure Content Understanding analyzer in Foundry Tools that defines the required fields as\nextracted fields.\nThe requirements are  extract purchase order number , supplier name , requested delivery date , and total\nvalue , support multiple supplier layouts  with a single analyzer , return confidence scores  for each extracted\nfield and p roduce structured JSON  while minimizing application post -processing.\n\nA custom Azure Content Understanding analyzer  allows you to define the required business fields as\nextracted fields . It can generalize across different document layouts, automatically returns structured JSON,\nand includes per-field confidence scores , making it the best fit for downstream procurement agents.\n\nIncorrect Answers:\nB. The Azure Content Understanding prebuilt -read analyzer.\nThe prebuilt -read analyzer performs OCR to extract raw text. It does not identify business fields such as\npurchase order number or supplier name, nor does it produce structured field extraction.\nC. The Azure Content Understanding prebuilt -layout analyzer.\nThe prebuilt -layout  analyzer identifies document structure, including tables, paragraphs, and reading order.\nHowever, it does not extract specific business fields into structured JSON.\nD. Azure AI Search with vector search enabled.\nAzure AI Search is designed for indexing and retrieving documents. It does not perform document field\nextraction or produce structured JSON from purchase orders.",
    "incorrectExplanations": {
      "B": "The Azure Content Understanding prebuilt -read analyzer.\nThe prebuilt -read analyzer performs OCR to extract raw text. It does not identify business fields such as\npurchase order number or supplier name, nor does it produce structured field extraction.",
      "C": "The Azure Content Understanding prebuilt -layout analyzer.\nThe prebuilt -layout  analyzer identifies document structure, including tables, paragraphs, and reading order.\nHowever, it does not extract specific business fields into structured JSON.",
      "D": "Azure AI Search with vector search enabled.\nAzure AI Search is designed for indexing and retrieving documents. It does not perform document field\nextraction or produce structured JSON from purchase orders."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests azure content understanding concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "A custom Azure Content Understanding analyzer in Foundry Tools that defines the required fields as",
    "topic": "Azure Content Understanding",
    "sourceQuestionNumber": 92,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 93,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains a deployed chat model.\nYou have a Python service that sends API requests to the model. The service is integrated with an automated\nvalidation system that compares generated outputs against approved response patterns.\nStakeholders report that small wording differences are causing validation mismatches.\nYou need to update the request parameters to improve output stability. The solution must maximize\nreasoning quality.\nHow should you complete the Python code?",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "Temperature: 0\nThe application uses an automated validation system that compares generated responses against approved\nresponse patterns. Setting the temperature to 0  makes the model's output as deterministic as possible,\nreducing wording variations between identical requests and improving output stability.\nOutput effort: \"high\"\nThe requirement also states to maximize reasoning quality . Setting output_config={\"effort\":\"high\"}  instructs\nthe reasoning model to spend more effort generating accurate, well -reasoned responses while still producing\ndeterministic output due to the low temperature.",
    "explanation": "Correct Answers:\nTemperature: 0\nThe application uses an automated validation system that compares generated responses against approved\nresponse patterns. Setting the temperature to 0  makes the model's output as deterministic as possible,\nreducing wording variations between identical requests and improving output stability.\nOutput effort: \"high\"\nThe requirement also states to maximize reasoning quality . Setting output_config={\"effort\":\"high\"}  instructs\nthe reasoning model to spend more effort generating accurate, well -reasoned responses while still producing\ndeterministic output due to the low temperature.\n\nIncorrect Answers:\nTemperature: 1\nA temperature of 1 increases randomness and creativity, making responses less consistent and more likely to\nfail automated validation.\nTemperature: 2\nA temperature of 2 produces even greater variability and is the least suitable option for deterministic outputs.\nOutput effort: \"low\"\nLow effort reduces reasoning depth and may produce lower -quality responses.\nOutput effort: \"medium\"\nMedium effort provides a balance between speed and reasoning quality but does not maximize reasoning as\nrequired.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q93-p96-8cfeb69e.png"
    ],
    "answerImages": [
      "assets/questions/q93-p97-62cb9575.png"
    ],
    "concept": "This question tests model deployment concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Temperature: 0",
    "topic": "Model Deployment",
    "sourceQuestionNumber": 93,
    "needsReview": true,
    "sourceMaterial": "You have a Microsoft Foundry project that contains a deployed chat model.\nYou have a Python service that sends API requests to the model. The service is integrated with an automated\nvalidation system that compares generated outputs against approved response patterns.\nStakeholders report that small wording differences are causing validation mismatches.\nYou need to update the request parameters to improve output stability. The solution must maximize\nreasoning quality.\nHow should you complete the Python code?"
  },
  {
    "id": 94,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an agent. The agent uses Azure AI Search as the\nretriever.\nYou plan to ingest PDF into an Azure AI Search index to ensure that the agent can ground responses in texts\nin both documents and embedded images.\nUsers require citations that link to the source files.\nYou need to ensure that during indexing, the images are extracted into a structure that can be used as input\nfor the built -in optical character recognition (OCR) skill.\nWhich indexing approach should you use?",
    "options": [
      {
        "id": "A",
        "text": "an indexer to extract image data into a normalized_images collection"
      },
      {
        "id": "B",
        "text": "a Shaper skill to restructure the OCR input"
      },
      {
        "id": "C",
        "text": "a skillset to run the OCR skill directly against the content field of the index"
      },
      {
        "id": "D",
        "text": "the outputFieldMappings parameter to write image data to a searchable field"
      }
    ],
    "correctAnswer": [
      "A"
    ],
    "sourceAnswer": "A. An indexer to extract image data into a normalized_images collection",
    "explanation": "Correct Answer:\nA. An indexer to extract image data into a normalized_images collection`\nThe requirements are  index PDF documents stored for RAG , extract text from both the document text and\nembedded images , use the built-in OCR skill  and p reserve source information for citations.\nIn Azure AI Search, the indexer  can crack PDF documents and extract embedded images into the\nnormalized_images  collection. This collection is the expected input for the built -in OCR skill , which then\nextracts text from the images. The extracted text can be indexed alongside the document text while\nmaintaining references to the source documents for citations.\nThis is the recommended indexing approach for processing images embedded within documents.\n\nIncorrect Answers:\nB. A Shaper skill to restructure the OCR input.\nA Shaper skill  reshapes or combines enriched data during skillset execution. It does not extract images from\ndocuments or create the normalized_images collection required by the OCR skill.\nC. A skillset to run the OCR skill directly against the content field of the index.\nThe OCR skill  operates on image inputs , not on the document's text (content) field. Images must first be\nextracted into normalized_images.\nD. The outputFieldMappings parameter to write image data to a searchable field.\noutputFieldMappings maps outputs from the enrichment pipeline into index fields. It does not extract\nembedded images or prepare them for OCR.",
    "incorrectExplanations": {
      "B": "A Shaper skill to restructure the OCR input.\nA Shaper skill  reshapes or combines enriched data during skillset execution. It does not extract images from\ndocuments or create the normalized_images collection required by the OCR skill.",
      "C": "A skillset to run the OCR skill directly against the content field of the index.\nThe OCR skill  operates on image inputs , not on the document's text (content) field. Images must first be\nextracted into normalized_images.",
      "D": "The outputFieldMappings parameter to write image data to a searchable field.\noutputFieldMappings maps outputs from the enrichment pipeline into index fields. It does not extract\nembedded images or prepare them for OCR."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "An indexer to extract image data into a normalized_images collection",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 94,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 95,
    "type": "single",
    "question": "You have a Microsoft Foundry project that generates real estate marketing images from text prompts.\nAfter publishing several images, you discover that one image contains a vehicle parked in the driveway. The\nproperty owner requests that only the vehicle be removed while preserving the house, landscaping, lighting,\nand shadows.\nYou need to update the image.\nWhat should you do?",
    "options": [
      {
        "id": "A",
        "text": "Apply a mask -based inpainting edit to the area containing the vehicle."
      },
      {
        "id": "B",
        "text": "Regenerate the image by using a lower temperature value."
      },
      {
        "id": "C",
        "text": "Modify the original prompt to specify an empty driveway and generate a new image."
      },
      {
        "id": "D",
        "text": "Create an image variation from the original image."
      }
    ],
    "correctAnswer": [
      "A"
    ],
    "sourceAnswer": "A. Apply a mask -based inpainting edit to the area containing the vehicle.",
    "explanation": "Correct Answer:\nA. Apply a mask -based inpainting edit to the area containing the vehicle.\nThe requirement is to remove only the vehicle  while preserving everything else in the image, including the\nhouse, landscaping, lighting, and shadows.\nMask -based inpainting  is specifically designed for targeted image editing. You create a mask over the\nvehicle, and the model regenerates only the masked region while leaving the rest of the image unchanged.\nThis preserves the overall composition and appearance of the property.\n\nIncorrect Answers:\nB. Regenerate the image by using a lower temperature value.\nLowering the temperature affects the randomness of image generation but does not selectively remove an\nobject from an existing image.\nC. Modify the original prompt to specify an empty driveway and generate a new image.\nGenerating a new image may change the house, landscaping, lighting, camera angle, and other details. It\ndoes not guarantee that only the vehicle will be removed.\nD. Create an image variation from the original image.\nImage variations generate similar images but do not provide precise control over removing a specific object\nwhile preserving the rest of the scene.",
    "incorrectExplanations": {
      "B": "Regenerate the image by using a lower temperature value.\nLowering the temperature affects the randomness of image generation but does not selectively remove an\nobject from an existing image.",
      "C": "Modify the original prompt to specify an empty driveway and generate a new image.\nGenerating a new image may change the house, landscaping, lighting, camera angle, and other details. It\ndoes not guarantee that only the vehicle will be removed.",
      "D": "Create an image variation from the original image.\nImage variations generate similar images but do not provide precise control over removing a specific object\nwhile preserving the rest of the scene."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests foundry agent service concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Apply a mask -based inpainting edit to the area containing the vehicle.",
    "topic": "Foundry Agent Service",
    "sourceQuestionNumber": 95,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 96,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains a customer support agent.\nThe agent invokes several tools to retrieve order information, customer profiles, and shipping status before\ngenerating a response.\nUsers report that response times have increased significantly after a recent deployment.\nYou need to identify which stage of the agent execution is contributing most to the increased response time.\nWhich observability signal should you review?",
    "options": [
      {
        "id": "A",
        "text": "Groundedness evaluation metrics"
      },
      {
        "id": "B",
        "text": "Latency breakdown traces"
      },
      {
        "id": "C",
        "text": "Content Safety metrics"
      },
      {
        "id": "D",
        "text": "Relevance evaluation metrics"
      }
    ],
    "correctAnswer": [
      "B"
    ],
    "sourceAnswer": "B. Latency breakdown traces",
    "explanation": "Correct Answer:\nB. Latency breakdown traces\nThe agent performs multiple stages before generating a response  retrieving order information , retrieving\ncustomer profiles , retrieving shipping status and m odel inference .\nUsers report that response times have increased  after a deployment. To determine which stage of the agent\nexecution is causing the delay , you should review Latency breakdown traces .\nLatency breakdown traces provide detailed timing information for each step in the agent execution pipeline,\nsuch as document retrieval, tool execution, model inference, and response generation. This enables you to\npinpoint the exact stage contributing most  to the increased response time.\n\nIncorrect Answers:\nA. Groundedness evaluation metrics\nGroundedness metrics measure whether the generated response is supported by the retrieved data. They\nevaluate response quality, not performance or latency.\nC. Content Safety metrics\nContent Safety metrics report detections of harmful or unsafe content. They do not identify performance\nbottlenecks or execution delays.\nD. Relevance evaluation metrics\nRelevance metrics evaluate how well the retrieved documents match the user's query. They help assess\nretrieval quality, not execution time.",
    "incorrectExplanations": {
      "A": "Groundedness evaluation metrics\nGroundedness metrics measure whether the generated response is supported by the retrieved data. They\nevaluate response quality, not performance or latency.",
      "C": "Content Safety metrics\nContent Safety metrics report detections of harmful or unsafe content. They do not identify performance\nbottlenecks or execution delays.",
      "D": "Relevance evaluation metrics\nRelevance metrics evaluate how well the retrieved documents match the user's query. They help assess\nretrieval quality, not execution time."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests model deployment concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Latency breakdown traces",
    "topic": "Model Deployment",
    "sourceQuestionNumber": 96,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 97,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an agent. The agent generates summaries from\nretrieved policy documents.\nUsers report that some responses omit required regulatory clauses, even when the clauses are present in\nthe retrieved content.\nYou need to improve response completeness.\nSolution: You increase the value of the max_tokens parameter.\nDoes this meet the goal?",
    "options": [
      {
        "id": "A",
        "text": "Yes"
      },
      {
        "id": "B",
        "text": "No"
      }
    ],
    "correctAnswer": [
      "A"
    ],
    "sourceAnswer": "A. Yes",
    "explanation": "A. Yes\nThe issue is that the required regulatory clauses are already present in the retrieved content , but the\ngenerated responses omit some of them.\nIncreasing the max_tokens  parameter allows the model to generate longer responses. If the omissions are\ncaused by the response being truncated due to an insufficient completion token limit, increasing max_tokens\nimproves response completeness and enables the model to include all t he required clauses.\nTherefore, this solution meets the goal .",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests foundry agent service concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Yes",
    "topic": "Foundry Agent Service",
    "sourceQuestionNumber": 97,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 98,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an agent. The agent generates summaries from\nretrieved policy documents.\nUsers report that some responses omit required regulatory clauses, even when the clauses are present in\nthe retrieved content.\nYou need to improve response completeness.\nSolution: You add a reflection pass that regenerates the response if the required clauses are missing.\nDoes this meet the goal?",
    "options": [
      {
        "id": "A",
        "text": "Yes"
      },
      {
        "id": "B",
        "text": "No"
      }
    ],
    "correctAnswer": [
      "A"
    ],
    "sourceAnswer": "A. Yes",
    "explanation": "A. Yes\nThe retrieved policy documents already contain the required regulatory clauses, but the generated\nsummaries sometimes omit them. This indicates that the retrieval step is working correctly, while the\ngeneration step is not producing a complete response.\nAdding a reflection pass  allows the application to evaluate the generated response before returning it. If the\nrequired clauses are missing, the application can regenerate the response with instructions to include the\nomitted information. This improves the completeness of the fin al answer without changing the retrieval\nprocess.\nTherefore, this solution meets the goal .",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests foundry agent service concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Yes",
    "topic": "Foundry Agent Service",
    "sourceQuestionNumber": 98,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 99,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an agent. The agent generates summaries from\nretrieved policy documents.\nUsers report that some responses omit required regulatory clauses, even when the clauses are present in\nthe retrieved content.\nYou need to improve response completeness.\nSolution: You increase the value of the temperature parameter.\nDoes this meet the goal?",
    "options": [
      {
        "id": "A",
        "text": "Yes"
      },
      {
        "id": "B",
        "text": "No"
      }
    ],
    "correctAnswer": [
      "B"
    ],
    "sourceAnswer": "B. No",
    "explanation": "B. No\nThe problem is that the agent omits required regulatory clauses , even though those clauses are already\npresent in the retrieved policy documents. This is a response completeness issue, not a creativity issue.\nIncreasing the temperature  parameter makes the model's output more random and creative . It does not\nimprove completeness or make the model more likely to include all required clauses. In fact, a higher\ntemperature can make responses less deterministic and may increase the likelihood of omitting important\ninformation or introducing inconsist encies.\nTherefore, increasing the temperature does not meet the goal .",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests foundry agent service concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "No",
    "topic": "Foundry Agent Service",
    "sourceQuestionNumber": 99,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 100,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an agent. The agent generates summaries from\nretrieved policy documents.\nUsers report that some responses omit required regulatory clauses, even when the clauses are present in\nthe retrieved content.\nYou need to improve response completeness.\nSolution: You run an evaluation flow that scores responses for completeness and blocks responses that fall\nbelow a defined threshold.\nDoes this meet the goal?",
    "options": [
      {
        "id": "A",
        "text": "Yes"
      },
      {
        "id": "B",
        "text": "No"
      }
    ],
    "correctAnswer": [
      "B"
    ],
    "sourceAnswer": "B. No",
    "explanation": "B. No\nThe proposed solution runs an evaluation flow  that scores responses for completeness and blocks\nresponses that do not meet a defined threshold.\nWhile this helps detect  incomplete responses and prevents low -quality answers from being returned to\nusers, it does not improve the completeness of the responses themselves . The agent will simply reject\nresponses that score poorly, rather than generating a more complete answer.\nTherefore, the solution does not meet the goal of improving response completeness.\nTo improve completeness, the application must take corrective action, such as  increasing the maximum\ncompletion tokens if responses are being truncated , adding a reflection or retry pass that regenerates\nincomplete responses  and a djusting the retrieval strategy if insufficient context is being provided.\n\nAn evaluation flow alone only measures quality. Unless it is combined with a retry or regeneration\nmechanism, it cannot make responses more complete.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests evaluation & observability concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "No",
    "topic": "Evaluation & Observability",
    "sourceQuestionNumber": 100,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 101,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains a Retrieval Augmented Generation (RAG) chat\nsolution used by customer support agents.\nYou are adding an automated pre -production evaluation step to a CI/CD pipeline named Pipeline1. The\nevaluation will run against a labeled test dataset that contains support questions and the expected grounding\ncontext.\nYou need to ensure that Pipeline1 fails if unsupported content or a retrieval mismatch exceeds a defined\nthreshold:\n• responses include claims not supported by the retrieved source content\n• retrieved source content does not align with the labeled expected context\nWhich two built -in evaluators should you use in Pipeline1?",
    "options": [
      {
        "id": "A",
        "text": "Retrieval"
      },
      {
        "id": "B",
        "text": "Fluency"
      },
      {
        "id": "C",
        "text": "Coherence"
      },
      {
        "id": "D",
        "text": "Groundedness"
      },
      {
        "id": "E",
        "text": "Response Completeness"
      }
    ],
    "correctAnswer": [
      "A"
    ],
    "sourceAnswer": "A. Retrieval",
    "explanation": "A. Retrieval\nD. Groundedness\n\nExplanation:\nCorrect Answer:\nA. Retrieval\nThe Retrieval evaluator measures how well the system retrieves relevant documents compared to the\nexpected grounding context in the labeled dataset. It ensures that the retrieved content aligns with the\nexpected context. This directly satisfies the require ment to detect when retrieved source content does not\nmatch the labeled expected context and allows the pipeline to fail when mismatches exceed the threshold.\nD. Groundedness\nThe Groundedness evaluator verifies that the generated response is fully supported by the retrieved source\ncontent. It detects hallucinations or unsupported claims in the response. This directly addresses the\nrequirement to fail the pipeline when responses  include claims not grounded in the retrieved data.\n\nIncorrect Answers:\nB. Fluency\nFluency evaluates grammar and readability, not correctness or grounding.\nC. Coherence\nCoherence measures logical flow, not retrieval accuracy or factual alignment.\nE. Response Completeness\nResponse Completeness checks coverage of the answer, not grounding or retrieval correctness.",
    "incorrectExplanations": {
      "B": "Fluency\nFluency evaluates grammar and readability, not correctness or grounding.",
      "C": "Coherence\nCoherence measures logical flow, not retrieval accuracy or factual alignment.",
      "E": "Response Completeness\nResponse Completeness checks coverage of the answer, not grounding or retrieval correctness."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Retrieval",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 101,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 102,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains a support -ticket triage agent built by using the\nFoundry Agent Service.\nThe agent uses tool to classify the ticket type and sot the ticket priority.\nSometimes, the same support case continues across multiple sessions over several days.\nYou need to persist state by using a durable ID to ensure that the agent can automatically reuse the full\ninteraction history. The solution must preserve previous user messages, tool calls and tool outputs across\nturns and sessions.\nWhich runtime component should you use?",
    "options": [
      {
        "id": "A",
        "text": "output item"
      },
      {
        "id": "B",
        "text": "agent"
      },
      {
        "id": "C",
        "text": "conversation"
      },
      {
        "id": "D",
        "text": "response"
      }
    ],
    "correctAnswer": [
      "C"
    ],
    "sourceAnswer": "C. conversation",
    "explanation": "C. conversation\n\nExplanation:\nCorrect Answer:\nC. conversation\nA conversation is the runtime component that maintains state across multiple turns and sessions using a\ndurable identifier. It preserves the full interaction history, including user messages, tool calls, and tool\noutputs. This allows the agent to resume co ntext seamlessly across sessions, which is required when\nsupport cases span multiple days.\n\nIncorrect Answers:\nA. output item\nAn output item represents a single response or piece of output, not a persistent state container.\nB. agent\nAn agent defines behavior and orchestration logic but does not persist interaction history across sessions.\nD. response\nA response is a single execution result and does not store or manage conversation history.",
    "incorrectExplanations": {
      "A": "output item\nAn output item represents a single response or piece of output, not a persistent state container.",
      "B": "agent\nAn agent defines behavior and orchestration logic but does not persist interaction history across sessions.",
      "D": "response\nA response is a single execution result and does not store or manage conversation history."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests agent tools & workflows concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "conversation",
    "topic": "Agent Tools & Workflows",
    "sourceQuestionNumber": 102,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 103,
    "type": "single",
    "question": "You have a Microsoft Founcy project that contains a Retrieval Augmented Generation (RAG) solution.\nYou need to run a pre -production evaluation by using labeled CSV dataset that contains the query, context,\nresponse and ground truth.\nThe evaluation must measure the following:\n• Whether responses address the user query\n• Whether responses are supported by the provided context\n\n• Whether responses contain sensitive or proprietary information\nWhich AI quality evaluation metrics should you use?",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "Groundedness and Relevance\nGroundedness evaluates whether the generated response is supported by the provided context, ensuring\nthere are no hallucinations. Relevance measures whether the response appropriately addresses the user\nquery. Together, these metrics satisfy the requiremen t to verify that responses both answer the user’s\nquestion and are grounded in the retrieved context.\nProtected material\nProtected material detection identifies whether the response contains sensitive or proprietary information.\nThis directly satisfies the requirement to detect if responses include confidential or restricted data.",
    "explanation": "Correct Answer:\nGroundedness and Relevance\nGroundedness evaluates whether the generated response is supported by the provided context, ensuring\nthere are no hallucinations. Relevance measures whether the response appropriately addresses the user\nquery. Together, these metrics satisfy the requiremen t to verify that responses both answer the user’s\nquestion and are grounded in the retrieved context.\nProtected material\nProtected material detection identifies whether the response contains sensitive or proprietary information.\nThis directly satisfies the requirement to detect if responses include confidential or restricted data.\n\nIncorrect Answers:\nCoherence and Fluency\nThese measure readability and language quality, not grounding or relevance to the query.\n\nGPT similarity and F1 score\nThese compare generated responses with ground truth but do not verify grounding against context or detect\nsensitive content.\nGroundedness and ROUGE score\nROUGE measures overlap with reference text, not whether the response addresses the query or is relevant.\nHateful and unfair content\nThis detects toxicity or bias, not sensitive or proprietary information.\nIndirect attack\nThis identifies prompt injection or adversarial inputs, not sensitive data leakage.\nViolent content\nThis detects harmful or violent outputs, not proprietary or sensitive information.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q103-p105-6bf91797.jpg"
    ],
    "answerImages": [
      "assets/questions/q103-p105-69e6bb5c.jpg"
    ],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "roundedness and Relevance",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 103,
    "needsReview": true,
    "sourceMaterial": "You have a Microsoft Founcy project that contains a Retrieval Augmented Generation (RAG) solution.\nYou need to run a pre -production evaluation by using labeled CSV dataset that contains the query, context,\nresponse and ground truth.\nThe evaluation must measure the following:\n• Whether responses address the user query\n• Whether responses are supported by the provided context\n\n• Whether responses contain sensitive or proprietary information\nWhich AI quality evaluation metrics should you use?"
  },
  {
    "id": 104,
    "type": "single",
    "question": "You plan to configure an evaluation in Microsoft Foundry for a Retrieval Augmented Generation (RAG)\nchat app. You need to provide scores for groundedness, relevance, and harmful content categories.\nWhich two evaluation categories can you use?",
    "options": [
      {
        "id": "A",
        "text": "risk and safety metrics"
      },
      {
        "id": "B",
        "text": "fluency evaluator"
      },
      {
        "id": "C",
        "text": "similarity evaluators"
      },
      {
        "id": "D",
        "text": "AI quality (NLP) metrics"
      },
      {
        "id": "E",
        "text": "AI quality (AI assisted) metrics"
      }
    ],
    "correctAnswer": [
      "A"
    ],
    "sourceAnswer": "A. risk and safety metrics",
    "explanation": "A. risk and safety metrics\nE. AI quality (AI -assisted) metrics\n\nExplanation:\nCorrect Answer:\nA. risk and safety metrics\nRisk and safety metrics are used to evaluate harmful content categories such as hate, violence, self -harm,\nand other unsafe outputs. This directly satisfies the requirement to assess harmful content categories in the\nRAG responses.\nE. AI quality (AI -assisted) metrics\nAI-assisted quality metrics use an LLM evaluator to assess qualitative aspects such as groundedness  and\nrelevance . These metrics do not rely on simple statistical comparison but instead use model -based judgment\nto determine whether the response is supported by the provided context and whether it addresses the user\nquery. This makes them the correct choice for evaluat ing groundedness and relevance in a RAG scenario.\n\nIncorrect Answers:\nB. fluency evaluator\nFluency evaluates grammar and readability only, not groundedness, relevance, or harmful content.\n\nC. similarity evaluators\nSimilarity evaluators compare responses with ground truth using overlap or semantic similarity, but do not\nevaluate grounding or safety risks.\nD. AI quality (NLP) metrics\nNLP metrics such as BLEU, ROUGE, and F1 rely on statistical comparison with reference text and do not\nassess groundedness, relevance, or harmful content using model reasoning.",
    "incorrectExplanations": {
      "B": "fluency evaluator\nFluency evaluates grammar and readability only, not groundedness, relevance, or harmful content.",
      "C": "similarity evaluators\nSimilarity evaluators compare responses with ground truth using overlap or semantic similarity, but do not\nevaluate grounding or safety risks.",
      "D": "AI quality (NLP) metrics\nNLP metrics such as BLEU, ROUGE, and F1 rely on statistical comparison with reference text and do not\nassess groundedness, relevance, or harmful content using model reasoning."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "risk and safety metrics",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 104,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 105,
    "type": "single",
    "question": "You have a Microsoft Foundry project that uses Azure Content Understanding in Foundry Tools to\nanalyze marketing videos.\nVideo segmentation is enabled.\nYou need to configure an analyzer to output a generated JSON field that describes the color scheme of each\nvideo segment.\nHow should you configure the analyzer?",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "Field value type → string\nA string field type is used when the output is descriptive text . In this scenario, the requirement is to describe\nthe color scheme of each video segment. This is not structured multi -field JSON with defined subfields, but\nrather a natural language or textual description , which maps to a string.\nField method → generate\nThe generate method is used when the analyzer must create new content using AI  rather than extract it\n\ndirectly from the source. Since the color scheme must be inferred from visual content and described, it\nrequires generative capability.",
    "explanation": "Correct Answer:\nField value type → string\nA string field type is used when the output is descriptive text . In this scenario, the requirement is to describe\nthe color scheme of each video segment. This is not structured multi -field JSON with defined subfields, but\nrather a natural language or textual description , which maps to a string.\nField method → generate\nThe generate method is used when the analyzer must create new content using AI  rather than extract it\n\ndirectly from the source. Since the color scheme must be inferred from visual content and described, it\nrequires generative capability.\n\nIncorrect Answers:\ngroup\nGroup is used for structured JSON with predefined subfields. The question asks for a generated description,\nnot a structured schema with multiple named fields.\nclassify\nClassify is used when assigning predefined labels, not generating descriptive output.\ntable\nTable is used for structured tabular extraction, not descriptive generation.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q105-p107-6609ceb3.jpg"
    ],
    "answerImages": [
      "assets/questions/q105-p107-1951f018.jpg"
    ],
    "concept": "This question tests azure content understanding concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "ield value type → string",
    "topic": "Azure Content Understanding",
    "sourceQuestionNumber": 105,
    "needsReview": true,
    "sourceMaterial": "You have a Microsoft Foundry project that uses Azure Content Understanding in Foundry Tools to\nanalyze marketing videos.\nVideo segmentation is enabled.\nYou need to configure an analyzer to output a generated JSON field that describes the color scheme of each\nvideo segment.\nHow should you configure the analyzer?"
  },
  {
    "id": 106,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an agent. The agent uses two tools to perform the\nfollowing actions:\n• Use Azure AI Search to retrieve answers from a private product documentation index.\n• Use the web search tool to retrieve public information on the internet.\nYou need to ensure that for a specific run, the agent deterministically retrieves information only from the\ninternet.\nTo what should you set tool_choice?",
    "options": [
      {
        "id": "A",
        "text": "“type”: “bing_grouding”"
      },
      {
        "id": "B",
        "text": "“type”: “azure_ai -search”"
      },
      {
        "id": "C",
        "text": "“auto”"
      },
      {
        "id": "D",
        "text": "“required”"
      }
    ],
    "correctAnswer": [
      "A"
    ],
    "sourceAnswer": "A. “type”: “bing_grounding”",
    "explanation": "A. “type”: “bing_grounding”\n\nExplanation:\nCorrect Answer:\nA. “type”: “bing_grounding”\nThis is correct because setting tool_choice explicitly to bing_grounding forces the agent to deterministically\nuse only the web search tool for that run. It ensures that responses are generated strictly from internet\nsources and prevents the agent from cal ling Azure AI Search or any other tool.\n\nIncorrect Answers:\nB. “type”: “azure_ai -search”\nThis forces the agent to use the private index, which is the opposite of the requirement.\nC. “auto”\nAuto allows the agent to choose tools dynamically, so it does not guarantee internet -only retrieval.\n\nD. “required”\nRequired forces tool usage but does not specify which tool, so it does not ensure deterministic selection of\nweb search.",
    "incorrectExplanations": {
      "B": "“type”: “azure_ai -search”\nThis forces the agent to use the private index, which is the opposite of the requirement.",
      "C": "“auto”\nAuto allows the agent to choose tools dynamically, so it does not guarantee internet -only retrieval.",
      "D": "“required”\nRequired forces tool usage but does not specify which tool, so it does not ensure deterministic selection of\nweb search."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "“type”: “bing_grounding”",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 106,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 107,
    "type": "yes-no-matrix",
    "question": "You have a Microsoft Foundry project that contains a customer support application.\nYou create an evaluation named Run1 that has the following configurations:\n• Includes risk and safety metrics\n• Includes the protected material evaluation\n• Includes harmful content metrics that use a medium severity threshold\n\nYou create an evaluation named Run2 that has the following configurations:\n• Includes risk and safety metrics\n• Includes the protected material evaluation\n• Includes harmful content metrics that use a high severity threshold\n\nYou run both evaluations against a dataset named DB1 and receive the following results:\n• Content harm defect rate of Run1: 12%\n• Content harm defect rate of Run2: 4%\n• Protected material evaluation of Run1: 6%\n• Protected material evaluation of Run1: 6%\n\nYou start a fine -tuning job by using DB1. The job fails during automatic RAI checks for multiple content harm\ntypes. You discover that the content filtering configuration is set to high severity.\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "Statement 1 --> No\nThis is incorrect because lowering the severity threshold only reduces how strictly harmful content is\nflagged, but it does not remove or fix the harmful content present in the dataset. The fine -tuning job fails due\nto actual content violations detected du ring RAI checks, so the dataset itself must be cleaned rather than just\nchanging the filtering level.\nStatement 2 --> Yes\nThis is correct because a medium severity threshold flags more content as harmful compared to a high\nseverity threshold, resulting in a higher defect rate (12% vs 4%). This difference directly reflects how varying\nseverity levels impact content harm detect ion sensitivity.\nStatement 3 --> Yes\nThis is correct because protected material evaluation is independent of harmful content severity thresholds.\nThe identical 6% values across both runs confirm that changing severity levels affects only harmful content\nmetrics and not protected material dete ction.",
    "explanation": "Statement 1 --> No\nThis is incorrect because lowering the severity threshold only reduces how strictly harmful content is\nflagged, but it does not remove or fix the harmful content present in the dataset. The fine -tuning job fails due\nto actual content violations detected du ring RAI checks, so the dataset itself must be cleaned rather than just\nchanging the filtering level.\nStatement 2 --> Yes\nThis is correct because a medium severity threshold flags more content as harmful compared to a high\nseverity threshold, resulting in a higher defect rate (12% vs 4%). This difference directly reflects how varying\nseverity levels impact content harm detect ion sensitivity.\nStatement 3 --> Yes\nThis is correct because protected material evaluation is independent of harmful content severity thresholds.\nThe identical 6% values across both runs confirm that changing severity levels affects only harmful content\nmetrics and not protected material dete ction.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q107-p109-60416294.jpg"
    ],
    "answerImages": [],
    "concept": "This question tests content safety & prompt shields concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Statement 1 --> No",
    "topic": "Content Safety & Prompt Shields",
    "sourceQuestionNumber": 107,
    "needsReview": true,
    "sourceMaterial": "You have a Microsoft Foundry project that contains a customer support application.\nYou create an evaluation named Run1 that has the following configurations:\n• Includes risk and safety metrics\n• Includes the protected material evaluation\n• Includes harmful content metrics that use a medium severity threshold\n\nYou create an evaluation named Run2 that has the following configurations:\n• Includes risk and safety metrics\n• Includes the protected material evaluation\n• Includes harmful content metrics that use a high severity threshold\n\nYou run both evaluations against a dataset named DB1 and receive the following results:\n• Content harm defect rate of Run1: 12%\n• Content harm defect rate of Run2: 4%\n• Protected material evaluation of Run1: 6%\n• Protected material evaluation of Run1: 6%\n\nYou start a fine -tuning job by using DB1. The job fails during automatic RAI checks for multiple content harm\ntypes. You discover that the content filtering configuration is set to high severity.\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No."
  },
  {
    "id": 108,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains a customer support agent built on a deployed chat\nmodel. The agent responses are validated by using an automated testing system that compares generated",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "s to stored expected outputs. Identical p rompts must return consistent response to prevent\nautomated test failures.\nYou need to reduce response variability, without modifying the prompt or reducing factual accuracy.\nWhat should you do for the model?\n\nA. Increase the max_tokens parameter.\nB. Remove stop sequences from the requests.\nC. Decrease the temperature parameter.\nD. Increase the temperature parameter.\n\nCorrect Answer:\nC. Decrease the temperature parameter",
    "explanation": "Correct Answer:\nC. Decrease the temperature parameter\nThis is correct because temperature controls randomness in model output. Lowering the temperature makes\nresponses more deterministic and consistent for identical prompts, which is essential for automated testing\nscenarios without impacting factual accuracy .\n\nIncorrect Answers:\nA. Increase the max_tokens parameter\nThis only affects response length, not variability or consistency.\nB. Remove stop sequences from the requests\nStop sequences control where responses end, not how deterministic they are.\nD. Increase the temperature parameter\nHigher temperature increases randomness, leading to more variability and inconsistent outputs.",
    "incorrectExplanations": {
      "A": "Increase the max_tokens parameter\nThis only affects response length, not variability or consistency.",
      "B": "Remove stop sequences from the requests\nStop sequences control where responses end, not how deterministic they are.",
      "D": "Increase the temperature parameter\nHigher temperature increases randomness, leading to more variability and inconsistent outputs."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q108-p110-78908066.jpg"
    ],
    "answerImages": [],
    "concept": "This question tests model deployment concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "s to stored expected outputs. Identical p rompts must return consistent response to prevent",
    "topic": "Model Deployment",
    "sourceQuestionNumber": 108,
    "needsReview": true,
    "sourceMaterial": "You have a Microsoft Foundry project that contains a customer support agent built on a deployed chat\nmodel. The agent responses are validated by using an automated testing system that compares generated"
  },
  {
    "id": 109,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains two agents named PolicyWriter and RskReviewer.\nPolicyWriter generates daft updates for customer polices, and RiskReviewer reviews the drafts.\nIn the visual builder, you need to create a workflow that meets the following requirements:\n• Finalizes low -risk updates without manual intervention\n• Ensures predictable execution across the agents\n• Requires user approval for highs updates\nWhat should you configure?",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "Orchestration pattern → The sequential template that passes outputs node by -node\nThis is correct because the requirement is for predictable execution across agents. A sequential pattern\nensures PolicyWriter runs first and then RiskReviewer processes the output in a fixed, deterministic flow,\nwhich avoids dynamic routing and ensures con sistency.\n\nApproval checkpoints → Add an Ask a question node\nThis is correct because high -risk updates require explicit user approval. An Ask a question node introduces a\nhuman -in-the-loop checkpoint, allowing the workflow to pause and request approval only when needed.",
    "explanation": "Correct Answer:\nOrchestration pattern → The sequential template that passes outputs node by -node\nThis is correct because the requirement is for predictable execution across agents. A sequential pattern\nensures PolicyWriter runs first and then RiskReviewer processes the output in a fixed, deterministic flow,\nwhich avoids dynamic routing and ensures con sistency.\n\nApproval checkpoints → Add an Ask a question node\nThis is correct because high -risk updates require explicit user approval. An Ask a question node introduces a\nhuman -in-the-loop checkpoint, allowing the workflow to pause and request approval only when needed.\n\nIncorrect Answers:\nThe group chat template to dynamically route control between the agents\nThis introduces non -deterministic behavior, which violates the requirement for predictable execution.\nThe human -in-the-loop template that pauses execution of the workflow for input\nThis would pause all executions, not just high -risk cases, making it inefficient for low -risk updates.\nAdd a Basic chat node\nThis does not provide approval capability.\nAdd a Condition statement\nThis can route logic but cannot capture explicit user approval.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q109-p112-fbe0a5b0.jpg"
    ],
    "answerImages": [
      "assets/questions/q109-p112-6563f586.jpg"
    ],
    "concept": "This question tests agent tools & workflows concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Orchestration pattern → The sequential template that passes outputs node by -node",
    "topic": "Agent Tools & Workflows",
    "sourceQuestionNumber": 109,
    "needsReview": true,
    "sourceMaterial": "You have a Microsoft Foundry project that contains two agents named PolicyWriter and RskReviewer.\nPolicyWriter generates daft updates for customer polices, and RiskReviewer reviews the drafts.\nIn the visual builder, you need to create a workflow that meets the following requirements:\n• Finalizes low -risk updates without manual intervention\n• Ensures predictable execution across the agents\n• Requires user approval for highs updates\nWhat should you configure?"
  },
  {
    "id": 110,
    "type": "single",
    "question": "You are developing prompts for a Micosoft Foundry project that classifies incoming support tickets by\ncategory. You need to improve accuracy by showing the model how correct classifications look, without\nretaining the model or storing knowledge perma nently.\nWhich prompt engineering approach should you use?",
    "options": [
      {
        "id": "A",
        "text": "Retrieval Augmented Generation (RAG)"
      },
      {
        "id": "B",
        "text": "zero-shot learning"
      },
      {
        "id": "C",
        "text": "chain of thought"
      },
      {
        "id": "D",
        "text": "few-shot learning"
      }
    ],
    "correctAnswer": [
      "D"
    ],
    "sourceAnswer": "D. few -shot learning",
    "explanation": "D. few -shot learning\n\nExplanation:\nCorrect Answer:\nD. few -shot learning\nThis is correct because few -shot learning improves classification accuracy by providing a few labeled\nexamples directly in the prompt. This shows the model what correct outputs look like without retraining or\npermanently storing knowledge, aligning perfect ly with the requirement.\n\nIncorrect Answers:\nA. Retrieval Augmented Generation (RAG)\nRAG retrieves external data but does not demonstrate example classifications within the prompt.\nB. zero -shot learning\nZero-shot provides no examples, so it does not help guide the model toward more accurate classifications.\nC. chain of thought\nChain -of-thought improves reasoning steps, not classification accuracy through examples.",
    "incorrectExplanations": {
      "A": "Retrieval Augmented Generation (RAG)\nRAG retrieves external data but does not demonstrate example classifications within the prompt.",
      "B": "zero -shot learning\nZero-shot provides no examples, so it does not help guide the model toward more accurate classifications.",
      "C": "chain of thought\nChain -of-thought improves reasoning steps, not classification accuracy through examples."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests foundry agent service concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "few -shot learning",
    "topic": "Foundry Agent Service",
    "sourceQuestionNumber": 110,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 111,
    "type": "single",
    "question": "You have a web app named App1 that processes user prompts by integrating with a Microsoft Foundry\nproject named Project1.\nApp1 performs the following actions:\n• Sends prompts directly to a model by using the Azure OpenAI Responses API\n• Invokes the Azure AI Content Safety tool by using a Foundry connection within the same request\nYou need to configure end -to-end visibility into each step of the request workflow.\nWhat should you do?",
    "options": [
      {
        "id": "A",
        "text": "Enable logging by using the client SDK for Content Safety."
      },
      {
        "id": "B",
        "text": "Enable logging by using Foundry Local."
      },
      {
        "id": "C",
        "text": "Enable application tracing in Project1."
      },
      {
        "id": "D",
        "text": "Route requests through the Azure OpenAI endpoint."
      }
    ],
    "correctAnswer": [
      "C"
    ],
    "sourceAnswer": "C. Enable application tracing in Project1.",
    "explanation": "C. Enable application tracing in Project1.\n\nExplanation:\nCorrect Answer:\nC. Enable application tracing in Project1\nThis is correct because application tracing provides end -to-end observability across the entire request flow,\nincluding model calls and tool invocations like Content Safety. It captures each step in the workflow, enabling\nfull visibility into how the reque st is processed within Foundry.\n\nIncorrect Answers:\nA. Enable logging by using the client SDK for Content Safety\nThis only provides visibility into Content Safety calls, not the complete workflow.\nB. Enable logging by using Foundry Local\nFoundry Local is used for local development and debugging, not full production tracing.\nD. Route requests through the Azure OpenAI endpoint\nThis does not provide tracing across integrated tools or end -to-end workflow visibility.",
    "incorrectExplanations": {
      "A": "Enable logging by using the client SDK for Content Safety\nThis only provides visibility into Content Safety calls, not the complete workflow.",
      "B": "Enable logging by using Foundry Local\nFoundry Local is used for local development and debugging, not full production tracing.",
      "D": "Route requests through the Azure OpenAI endpoint\nThis does not provide tracing across integrated tools or end -to-end workflow visibility."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests content safety & prompt shields concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Enable application tracing in Project1.",
    "topic": "Content Safety & Prompt Shields",
    "sourceQuestionNumber": 111,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 112,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an agent named Agent1.\nAgent runs successful, but Foundry Control Plane does NOT display values for error rates, runs, and token\nusage, and the Traces tab is empty.\nYou need to ensure that Found Control Plane displays the appropriate values for Agent1. What should you\ndo?",
    "options": [
      {
        "id": "A",
        "text": "Update Agent1 to a new version."
      },
      {
        "id": "B",
        "text": "Restart Agent from Foundry Control Plan"
      },
      {
        "id": "C",
        "text": "Assign to a Log Analytics workspace to Agent1."
      },
      {
        "id": "D",
        "text": "Enable Application Insights for Agent1."
      }
    ],
    "correctAnswer": [
      "D"
    ],
    "sourceAnswer": "D. Enable Application Insights for Agent1.",
    "explanation": "D. Enable Application Insights for Agent1.\n\nExplanation:\nCorrect Answer:\nD. Enable Application Insights for Agent1\nThis is correct because metrics such as error rates, runs, token usage, and traces are collected through\nApplication Insights. Enabling it integrates telemetry and observability, allowing the Foundry Control Plane to\ndisplay detailed runtime metrics and tr aces for the agent.\n\nIncorrect Answers:\nA. Update Agent1 to a new version\nUpdating the version does not enable telemetry or monitoring capabilities.\nB. Restart Agent from Foundry Control Plane\nRestarting does not address missing telemetry configuration.\nC. Assign to a Log Analytics workspace to Agent1\nLog Analytics alone does not provide the required application -level tracing and metrics integration for\nFoundry agents.",
    "incorrectExplanations": {
      "A": "Update Agent1 to a new version\nUpdating the version does not enable telemetry or monitoring capabilities.",
      "B": "Restart Agent from Foundry Control Plane\nRestarting does not address missing telemetry configuration.",
      "C": "Assign to a Log Analytics workspace to Agent1\nLog Analytics alone does not provide the required application -level tracing and metrics integration for\nFoundry agents."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests foundry agent service concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Enable Application Insights for Agent1.",
    "topic": "Foundry Agent Service",
    "sourceQuestionNumber": 112,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 113,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an agent.\nThe agent uses a stored access key to retrieve secrets from an Azure key vault, which violates a keyless -\ncredentials requirement.\nYou need to ensure that the agent can retrieve the secrets. The solution must follow the principle of least\nprivilege. What should you configure?",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "Managed identity scope → Enable a system -assigned managed identity at the project level\nThis is correct because the agent runs within the Foundry project, so enabling a system -assigned managed\nidentity at the project level ensures secure, keyless authentication scoped specifically to that project, aligning\nwith least privilege.\nKey Vault authorization method → Assign the Key Vault Secrets User role to the managed identity\nThis is correct because RBAC -based access using the Secrets User role allows the agent to retrieve secrets\nwithout exposing keys, while granting only the minimum required permissions.",
    "explanation": "Correct Answer:\nManaged identity scope → Enable a system -assigned managed identity at the project level\nThis is correct because the agent runs within the Foundry project, so enabling a system -assigned managed\nidentity at the project level ensures secure, keyless authentication scoped specifically to that project, aligning\nwith least privilege.\nKey Vault authorization method → Assign the Key Vault Secrets User role to the managed identity\nThis is correct because RBAC -based access using the Secrets User role allows the agent to retrieve secrets\nwithout exposing keys, while granting only the minimum required permissions.\n\nIncorrect Answers:\nEnable a system -assigned managed identity at the Foundry level\nThis grants broader access than required and violates least privilege.\nCreate a service principal and store the principal’s client secret\nThis reintroduces credential management, which violates the keyless requirement.\nAdd an API key to application settings\nThis uses secrets instead of eliminating them.\nAdd a Key Vault access policy for the secrets\nAccess policies are legacy and less aligned with RBAC -based least privilege compared to role assignments.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q113-p115-7b47bee5.jpg"
    ],
    "answerImages": [],
    "concept": "This question tests authentication & security concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Managed identity scope → Enable a system -assigned managed identity at the project level",
    "topic": "Authentication & Security",
    "sourceQuestionNumber": 113,
    "needsReview": true,
    "sourceMaterial": "You have a Microsoft Foundry project that contains an agent.\nThe agent uses a stored access key to retrieve secrets from an Azure key vault, which violates a keyless -\ncredentials requirement.\nYou need to ensure that the agent can retrieve the secrets. The solution must follow the principle of least\nprivilege. What should you configure?"
  },
  {
    "id": 114,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an agent.\nThe agent uses Azure Content Understanding in Foundry Too to process vendor onboarding packets. The\npacks include digital PDFs that contain tables and hyperlinks.\nThe extracted content is indexed for search and provided to a downstream agent in the Markdown format.\nYou need to generate a Markdown output that has a layout and a semantic structure optimized for Retrieval\nAugmented Generation (RAG) workflows.\nWhich built -in analyzer should you use?",
    "options": [
      {
        "id": "A",
        "text": "prebuilt -documentFieldSchema"
      },
      {
        "id": "B",
        "text": "prebuilt -documentSearch"
      },
      {
        "id": "C",
        "text": "prebuilt -read"
      },
      {
        "id": "D",
        "text": "prebuilt -layout"
      }
    ],
    "correctAnswer": [
      "B"
    ],
    "sourceAnswer": "B. prebuilt -documentSearch",
    "explanation": "B. prebuilt -documentSearch\n\nExplanation:\nCorrect Answer:\nB. prebuilt -documentSearch\nThis is correct because prebuilt -documentSearch is optimized for RAG scenarios, producing structured\nMarkdown output with semantic organization suitable for indexing and retrieval. It preserves layout elements\nlike tables and links while formatting content  for efficient downstream search and grounding.\n\nIncorrect Answers:\nA. prebuilt -documentFieldSchema\nUsed for structured field extraction, not for generating RAG -optimized Markdown output.\nC. prebuilt -read\nExtracts raw text without preserving layout or semantic structure needed for RAG.\nD. prebuilt -layout\nCaptures layout elements but does not produce semantically optimized Markdown for retrieval workflows.",
    "incorrectExplanations": {
      "A": "prebuilt -documentFieldSchema\nUsed for structured field extraction, not for generating RAG -optimized Markdown output.",
      "C": "prebuilt -read\nExtracts raw text without preserving layout or semantic structure needed for RAG.",
      "D": "prebuilt -layout\nCaptures layout elements but does not produce semantically optimized Markdown for retrieval workflows."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q114-p116-c7ae94b0.jpg"
    ],
    "answerImages": [],
    "concept": "This question tests azure content understanding concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "prebuilt -documentSearch",
    "topic": "Azure Content Understanding",
    "sourceQuestionNumber": 114,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 115,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains a multi -agent solution. The agents use tool calling\nto query internal systems.\nYou need to implement responsible AI auditing to meet the following requirements:\n• Capture all the nested operations across the entire agent run.\n• Record tool invocation arguments and retuned results as metadata.\nWhat should you use for each requirement?",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "Capture all the nested operations across the entire agent run → Hierarchical spans\nThis is correct because hierarchical spans represent the full execution tree of an agent run, capturing parent -\nchild relationships between steps, sub -steps, and tool calls. This ensures complete visibility into nested\noperations for auditing and tracing.\nRecord tool invocation arguments and results → Tool call attributes\nThis is correct because tool call attributes store metadata about each tool invocation, including input\narguments and returned results. This enables detailed auditing of how tools were used and what data was\nprocessed.",
    "explanation": "Correct Answer:\nCapture all the nested operations across the entire agent run → Hierarchical spans\nThis is correct because hierarchical spans represent the full execution tree of an agent run, capturing parent -\nchild relationships between steps, sub -steps, and tool calls. This ensures complete visibility into nested\noperations for auditing and tracing.\nRecord tool invocation arguments and results → Tool call attributes\nThis is correct because tool call attributes store metadata about each tool invocation, including input\narguments and returned results. This enables detailed auditing of how tools were used and what data was\nprocessed.\n\nIncorrect Answers:\nA KQL query filter\nUsed for querying logs, not for capturing execution traces.\nSampling / Trace sampling policy\nUsed to limit data collection, not to ensure full capture of operations.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q115-p117-48dcd1e0.jpg"
    ],
    "answerImages": [],
    "concept": "This question tests agent tools & workflows concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "apture all the nested operations across the entire agent run → Hierarchical spans",
    "topic": "Agent Tools & Workflows",
    "sourceQuestionNumber": 115,
    "needsReview": true,
    "sourceMaterial": "You have a Microsoft Foundry project that contains a multi -agent solution. The agents use tool calling\nto query internal systems.\nYou need to implement responsible AI auditing to meet the following requirements:\n• Capture all the nested operations across the entire agent run.\n• Record tool invocation arguments and retuned results as metadata.\nWhat should you use for each requirement?"
  },
  {
    "id": 116,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an agent.\nThe agent uses Azure AI Search for Retrieval Augmented Generation (RAG). You plan to ingest and index PDF\nproduct manuals.\nYou need to build a solution that supports semantic similarity matching. The solution must ensure that the\nagent retrieves relevant data when user questions use different wording than the product manuals.\nWhich indexing approach should you use?",
    "options": [
      {
        "id": "A",
        "text": "vector search"
      },
      {
        "id": "B",
        "text": "semantic ranking"
      },
      {
        "id": "C",
        "text": "suggesters"
      },
      {
        "id": "D",
        "text": "analyzers"
      }
    ],
    "correctAnswer": [
      "A"
    ],
    "sourceAnswer": "A. vector search",
    "explanation": "A. vector search\n\nExplanation:\nCorrect Answer:\nA. vector search\nThis is correct because vector search enables semantic similarity matching by converting text into\nembeddings and retrieving content based on meaning rather than exact keywords. This ensures that user\nqueries with different wording still match relevant con tent from product manuals.\n\nIncorrect Answers:\nB. semantic ranking\nThis improves ranking of already retrieved results but does not perform semantic retrieval itself.\nC. suggesters\nUsed for autocomplete and search suggestions, not for semantic matching.\nD. analyzers\nUsed for text processing like tokenization, not for semantic similarity search.",
    "incorrectExplanations": {
      "B": "semantic ranking\nThis improves ranking of already retrieved results but does not perform semantic retrieval itself.",
      "C": "suggesters\nUsed for autocomplete and search suggestions, not for semantic matching.",
      "D": "analyzers\nUsed for text processing like tokenization, not for semantic similarity search."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q116-p118-d6863f0d.jpg"
    ],
    "answerImages": [],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "vector search",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 116,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 117,
    "type": "yes-no-matrix",
    "question": "You develop a test method to verify the results retrieved from a call to the Azure Vision in Foundry\nTools API. The call is used to analyze the existence of company logos in images. The call returns a collection\nof brands named brands.\nYou have the following code segment:\n\nFor each of the following  statements,  select  Yes if the statement  is true. Otherwise,  select  No.",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "Statement 1 --> Yes\nThis is correct because the code checks if brand.confidence >= 0.75, which ensures that only brands with\nconfidence equal to or greater than 75% are processed. It then prints brand.name, so the name of each\nqualifying detected brand will be displayed.\nStatement 2 --> Yes\nThis is correct because the code prints {brand.rectangle.x} and {brand.rectangle.y}, which represent the\ncoordinates of the top -left corner of the bounding rectangle around the detected logo.\nStatement 3 --> No\nThis is correct because the code prints width {brand.rectangle.w} and height {brand.rectangle.h}, not the\nbottom -right coordinates. Bottom -right coordinates would require calculating x + w and y + h, which is not\ndone here.",
    "explanation": "Statement 1 --> Yes\nThis is correct because the code checks if brand.confidence >= 0.75, which ensures that only brands with\nconfidence equal to or greater than 75% are processed. It then prints brand.name, so the name of each\nqualifying detected brand will be displayed.\nStatement 2 --> Yes\nThis is correct because the code prints {brand.rectangle.x} and {brand.rectangle.y}, which represent the\ncoordinates of the top -left corner of the bounding rectangle around the detected logo.\nStatement 3 --> No\nThis is correct because the code prints width {brand.rectangle.w} and height {brand.rectangle.h}, not the\nbottom -right coordinates. Bottom -right coordinates would require calculating x + w and y + h, which is not\ndone here.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q117-p119-1303c770.jpg"
    ],
    "answerImages": [
      "assets/questions/q117-p119-8d488314.jpg"
    ],
    "concept": "This question tests agent tools & workflows concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Statement 1 --> Yes",
    "topic": "Agent Tools & Workflows",
    "sourceQuestionNumber": 117,
    "needsReview": true,
    "sourceMaterial": "You develop a test method to verify the results retrieved from a call to the Azure Vision in Foundry\nTools API. The call is used to analyze the existence of company logos in images. The call returns a collection\nof brands named brands.\nYou have the following code segment:\n\nFor each of the following  statements,  select  Yes if the statement  is true. Otherwise,  select  No."
  },
  {
    "id": 118,
    "type": "single",
    "question": "You have a Microsoft Foundry agent that grounds responses from an Azure Search index that contains\nthe following:\n• Searchable text fields for product names and product codes\n• A vector field that stores embeddings for product descriptions\nYou need to ensure that users can query the index by using the following:\n• Exact product names or codes\n• Natural language descriptions of the products\nWhat should you configure?",
    "options": [
      {
        "id": "A",
        "text": "vector search only"
      },
      {
        "id": "B",
        "text": "hybrid search"
      },
      {
        "id": "C",
        "text": "keyword search only"
      },
      {
        "id": "D",
        "text": "semantic search only"
      }
    ],
    "correctAnswer": [
      "B"
    ],
    "sourceAnswer": "B. hybrid search",
    "explanation": "B. hybrid search\n\nExplanation:\nCorrect Answer:\nB. hybrid search\nThis is correct because hybrid search combines keyword search for exact matches on product names and\ncodes with vector search for semantic similarity on product descriptions. This ensures both precise lookups\nand natural language queries are handled effect ively in a single query.\n\nIncorrect Answers:\nA. vector search only\nThis supports semantic queries but does not handle exact keyword matches efficiently.\nC. keyword search only\nThis works for exact matches but cannot handle natural language or semantic similarity.\nD. semantic search only\nSemantic ranking enhances results but does not combine keyword and vector retrieval like hybrid search.",
    "incorrectExplanations": {
      "A": "vector search only\nThis supports semantic queries but does not handle exact keyword matches efficiently.",
      "C": "keyword search only\nThis works for exact matches but cannot handle natural language or semantic similarity.",
      "D": "semantic search only\nSemantic ranking enhances results but does not combine keyword and vector retrieval like hybrid search."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q118-p120-74aba2e8.jpg"
    ],
    "answerImages": [],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "hybrid search",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 118,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 119,
    "type": "single",
    "question": "You plan to create a Microsoft Foundry project named Project1 that will contain an agent and use an\nAzure key vault named KV1.\nYou need to configure a connection from Project1 to KV1.\nHow should you complete the Bicep code?",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "category → AzureKeyVault\nThis is correct because the connection is being created to an Azure Key Vault resource (KV1). The category\nmust match the target service type so that Foundry correctly identifies and integrates with Key Vault.\nauthType → AccountManagedIdentity\nThis is correct because managed identity enables secure, keyless authentication between the Foundry project\nand Key Vault. It aligns with best practices and avoids storing secrets like API keys while supporting least\nprivilege access.",
    "explanation": "Correct Answer:\ncategory → AzureKeyVault\nThis is correct because the connection is being created to an Azure Key Vault resource (KV1). The category\nmust match the target service type so that Foundry correctly identifies and integrates with Key Vault.\nauthType → AccountManagedIdentity\nThis is correct because managed identity enables secure, keyless authentication between the Foundry project\nand Key Vault. It aligns with best practices and avoids storing secrets like API keys while supporting least\nprivilege access.\n\nIncorrect Answers:\nAzureAIService / AzureOpenAI\nThese categories are for AI services, not Key Vault connections.\nAccountKey / ApiKey\nThese require storing secrets, which violates secure keyless authentication practices.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q119-p122-59f4e971.jpg"
    ],
    "answerImages": [
      "assets/questions/q119-p123-a96859cf.jpg"
    ],
    "concept": "This question tests foundry agent service concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "category → AzureKeyVault",
    "topic": "Foundry Agent Service",
    "sourceQuestionNumber": 119,
    "needsReview": true,
    "sourceMaterial": "You plan to create a Microsoft Foundry project named Project1 that will contain an agent and use an\nAzure key vault named KV1.\nYou need to configure a connection from Project1 to KV1.\nHow should you complete the Bicep code?"
  },
  {
    "id": 120,
    "type": "single",
    "question": "You have an Azure AI Search indexer that ingests PDF policy manuals.\nClient applications must display page -level citations that have bounding polygons for both text and images.\nYou need to add a single built -in multimodal content extraction skill to the Azure AI Search skillset.\nThe solution must meet the following requirements:\n• Provide text and image location metadata.\n• Extract tables that span multiple pages.\nWhat should you add?",
    "options": [
      {
        "id": "A",
        "text": "Document Extraction"
      },
      {
        "id": "B",
        "text": "Azure Content Understanding in Foundry Tools"
      },
      {
        "id": "C",
        "text": "GenAI Prompt"
      },
      {
        "id": "D",
        "text": "Document Layout"
      }
    ],
    "correctAnswer": [
      "B"
    ],
    "sourceAnswer": "B. Azure Content Understanding in Foundry Tools",
    "explanation": "B. Azure Content Understanding in Foundry Tools\n\nExplanation:\nCorrect Answer:\nB. Azure Content Understanding in Foundry Tools\nThis is correct because it satisfies both requirements simultaneously. It extracts text and images with\nbounding polygon metadata, enabling precise page -level citations. More importantly, it can reconstruct tables\nthat span multiple pages as a single coher ent structure (Markdown/semantic format), which is explicitly\nrequired. Since the solution must handle both multimodal metadata and cross -page table continuity, this is\nthe only option that fully meets the requirements.\n\nIncorrect Answers:\nA. Document Extraction\nProvides basic text extraction but does not include layout metadata such as bounding polygons or support\nadvanced table structures.\nC. GenAI Prompt\nUsed for generating or transforming content, not for extracting layout, positional metadata, or structured\ntables from documents.\n\nSide Note (Important Exam Trap)\nD. Document Layout\nThis option is very tempting and commonly chosen. It does provide bounding polygons for text and images,\n\nso it partially meets the requirement. However, it fails the critical requirement of handling tables that span\nmultiple pages, as it tends to break them into separate segments or flatten them.\nSince the question requires ALL conditions to be met, Document Layout becomes incorrect despite being\nclose.",
    "incorrectExplanations": {
      "A": "Document Extraction\nProvides basic text extraction but does not include layout metadata such as bounding polygons or support\nadvanced table structures.",
      "C": "GenAI Prompt\nUsed for generating or transforming content, not for extracting layout, positional metadata, or structured\ntables from documents.\n\nSide Note (Important Exam Trap)",
      "D": "Document Layout\nThis option is very tempting and commonly chosen. It does provide bounding polygons for text and images,\n\nso it partially meets the requirement. However, it fails the critical requirement of handling tables that span\nmultiple pages, as it tends to break them into separate segments or flatten them.\nSince the question requires ALL conditions to be met, Document Layout becomes incorrect despite being\nclose."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Azure Content Understanding in Foundry Tools",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 120,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 121,
    "type": "single",
    "question": "You are building an Azure AI Search indexing pipeline named Pipeline1 that ingests invoices stored in\nAzure Blob Storage. The invoices are stored as scanned images.\nYou need to enable users to search invoice data across the invoice fields. Which built -in skill should you add\nto the skillset of Pipeline1?",
    "options": [
      {
        "id": "A",
        "text": "Text Split"
      },
      {
        "id": "B",
        "text": "Text Translation"
      },
      {
        "id": "C",
        "text": "optical character recognition (OCR)"
      },
      {
        "id": "D",
        "text": "Image Analysis"
      }
    ],
    "correctAnswer": [
      "C"
    ],
    "sourceAnswer": "C. optical character recognition (OCR)",
    "explanation": "C. optical character recognition (OCR)\n\nExplanation:\nCorrect Answer:\nC. optical character recognition (OCR)\nThis is correct because the invoices are stored as scanned images , which means they do not contain\nsearchable text. OCR converts the text within images into machine -readable text, enabling Azure AI Search to\nindex invoice fields and make them searchable.\n\nIncorrect Answers:\nA. Text Split\nUsed to break large text into chunks, but it requires text input and cannot extract text from images.\nB. Text Translation\nTranslates text between languages, but does not extract text from scanned images.\nD. Image Analysis\nDetects objects, captions, or tags in images, but does not extract structured text required for search\nindexing.",
    "incorrectExplanations": {
      "A": "Text Split\nUsed to break large text into chunks, but it requires text input and cannot extract text from images.",
      "B": "Text Translation\nTranslates text between languages, but does not extract text from scanned images.",
      "D": "Image Analysis\nDetects objects, captions, or tags in images, but does not extract structured text required for search\nindexing."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests speech concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "optical character recognition (OCR)",
    "topic": "Speech",
    "sourceQuestionNumber": 121,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 122,
    "type": "single",
    "question": "You have an invoice -processing application named App1 that uses Azure Constant Understanding in\nFoundry Tools.\nYou are building a new Content Understanding pipeline named Pipeline1 that must meet the following\nrequirements:\n• Compare an invoice to its related purchase order\n\n• Validate the voice against static vendor contact documents\n• Return a single structured output that includes discrepancy findings\nYou need to configure Pipeline1 and expose the pipeline as a single analyzer endpoint. What should you\nconfigure?",
    "options": [
      {
        "id": "A",
        "text": "a single -file task in standard mode that uses the vendor contract provided as an additional document\nduring analysis."
      },
      {
        "id": "B",
        "text": "a single -file task in standard mode that uses confidence scores enabled for the extracted fields."
      },
      {
        "id": "C",
        "text": "a multiple -file task in pro mode that uses the vendor contract files as reference data"
      },
      {
        "id": "D",
        "text": "a multi -file task in standard mode that uses the invoice and purchase order as input to the analyzer"
      }
    ],
    "correctAnswer": [
      "C"
    ],
    "sourceAnswer": "C. a multiple -file task in pro mode that uses the vendor contract files as reference data",
    "explanation": "C. a multiple -file task in pro mode that uses the vendor contract files as reference data\n\nExplanation:\nCorrect Answer:\nC. a multiple -file task in pro mode that uses the vendor contract files as reference data\nThis is correct because the requirements involve comparing multiple documents together (invoice vs\npurchase order and vendor documents) and producing a single structured output with discrepancy findings.\nMulti-file tasks enable cross -document reasoning, an d pro mode supports more advanced scenarios like\ncomparisons and validation against reference documents, making it the only option that satisfies all\nrequirements.\n\nIncorrect Answers:\nA. a single -file task in standard mode that uses the vendor contract provided as an additional document\nduring analysis\nSingle -file tasks cannot properly handle comparisons across multiple documents.\nB. a single -file task in standard mode that uses confidence scores enabled for the extracted fields\nConfidence scores do not address cross -document comparison or validation requirements.\nD. a multi -file task in standard mode that uses the invoice and purchase order as input to the analyzer\nStandard mode lacks the advanced reasoning and validation capabilities required for discrepancy detection\nacross multiple documents.",
    "incorrectExplanations": {
      "A": "a single -file task in standard mode that uses the vendor contract provided as an additional document\nduring analysis\nSingle -file tasks cannot properly handle comparisons across multiple documents.",
      "B": "a single -file task in standard mode that uses confidence scores enabled for the extracted fields\nConfidence scores do not address cross -document comparison or validation requirements.",
      "D": "a multi -file task in standard mode that uses the invoice and purchase order as input to the analyzer\nStandard mode lacks the advanced reasoning and validation capabilities required for discrepancy detection\nacross multiple documents."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests speech concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "a multiple -file task in pro mode that uses the vendor contract files as reference data",
    "topic": "Speech",
    "sourceQuestionNumber": 122,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 123,
    "type": "single",
    "question": "You have a Microsoft Foundry project.\nYou need to create a customer support agent that meets the following requirements:\n• Grounds responses only in company policy documents stored in curated repositories\n• Retains customer preferences across separate chat sessions\nHow should you configure the agent?",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "Knowledge grounding → Configure retrieval from approved data sources\nThis is correct because the requirement is to ground responses only in company policy documents stored in\ncurated repositories . Retrieval from approved data sources ensures controlled access to trusted content\nusing RAG, preventing the agent from using unverified or embedded information.\nMemory → Enable agent memory that uses persistent storage\nThis is correct because the agent must retain customer preferences across separate chat sessions .\nPersistent memory allows data to be stored beyond a single session, enabling long -term personalization and\ncontinuity.",
    "explanation": "Correct Answer:\nKnowledge grounding → Configure retrieval from approved data sources\nThis is correct because the requirement is to ground responses only in company policy documents stored in\ncurated repositories . Retrieval from approved data sources ensures controlled access to trusted content\nusing RAG, preventing the agent from using unverified or embedded information.\nMemory → Enable agent memory that uses persistent storage\nThis is correct because the agent must retain customer preferences across separate chat sessions .\nPersistent memory allows data to be stored beyond a single session, enabling long -term personalization and\ncontinuity.\n\nIncorrect Answers:\nUpload the policy documents direct to the agent / Embed the policy documents directly into the agent\ninstructions\nThese approaches are static, not scalable, and do not enforce controlled retrieval from curated repositories.\nUse orchestration -managed session context\nThis only retains information within a single session and does not persist across multiple interactions.\n\nRetain user preferences in the state of the client application\nThis is not centralized or reliable for enterprise scenarios and does not provide true persistent agent\nmemory.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q123-p127-76f0e33d.jpg"
    ],
    "answerImages": [
      "assets/questions/q123-p127-ce6bc10c.jpg"
    ],
    "concept": "This question tests foundry agent service concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Knowledge grounding → Configure retrieval from approved data sources",
    "topic": "Foundry Agent Service",
    "sourceQuestionNumber": 123,
    "needsReview": true,
    "sourceMaterial": "You have a Microsoft Foundry project.\nYou need to create a customer support agent that meets the following requirements:\n• Grounds responses only in company policy documents stored in curated repositories\n• Retains customer preferences across separate chat sessions\nHow should you configure the agent?"
  },
  {
    "id": 124,
    "type": "single",
    "question": "You have a Microsoft Foundry project that generates short promotional product videos.\nAfter several clips are approved, reviewers notice a small watermark in the top -right corner of some videos.\nYou need to remove the watermark without regenerating the videos.\nWhat should you do?",
    "options": [
      {
        "id": "A",
        "text": "Modify the original prompt to exclude watermarks."
      },
      {
        "id": "B",
        "text": "Crop the video by using the size parameter."
      },
      {
        "id": "C",
        "text": "Increase the guidance scale."
      },
      {
        "id": "D",
        "text": "Apply a mask -based inpainting edit to the affected part of the video."
      }
    ],
    "correctAnswer": [
      "D"
    ],
    "sourceAnswer": "D. Apply a mask -based inpainting edit to the affected part of the video",
    "explanation": "D. Apply a mask -based inpainting edit to the affected part of the video\n\nExplanation:\nCorrect Answer:\nD. Apply a mask -based inpainting edit to the affected part of the video\nThis is correct because the requirement is to remove a watermark from already generated videos without\nregenerating them . Mask -based inpainting allows you to selectively edit a specific region (top -right corner)\nand remove or replace the watermark while preserving the rest of the video content.\n\nIncorrect Answers:\nA. Modify the original prompt to exclude watermarks\nThis would only affect future video generation and does not fix already generated videos.\nB. Crop the video by using the size parameter\nCropping would remove part of the video frame and may affect important content. It is not a precise or\nsuitable solution for watermark removal.\nC. Increase the guidance scale\nGuidance scale influences how closely the model follows the prompt during generation. It has no effect on\nalready generated videos or post -processing edits.",
    "incorrectExplanations": {
      "A": "Modify the original prompt to exclude watermarks\nThis would only affect future video generation and does not fix already generated videos.",
      "B": "Crop the video by using the size parameter\nCropping would remove part of the video frame and may affect important content. It is not a precise or\nsuitable solution for watermark removal.",
      "C": "Increase the guidance scale\nGuidance scale influences how closely the model follows the prompt during generation. It has no effect on\nalready generated videos or post -processing edits."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests foundry agent service concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Apply a mask -based inpainting edit to the affected part of the video",
    "topic": "Foundry Agent Service",
    "sourceQuestionNumber": 124,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 125,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an agent. The agent uses threads and file uploads\nand calls an Azure OpenAI model deployment.\nDuring load testing, calls intermittently fall and return an HTTP 429 rate limit exceeded error. Some user\nuploads fail and generate an HTTP 400 file size exceeded error.\nYou need to mitigate the errors and reduce call failures. The solution must remain within the service and\nmodel limits.\nWhat should you do to resolve each error?",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "HTTP 429 → Implement exponential backoff and jitter in the retry logic\nThis is correct because HTTP 429 indicates rate limiting . The proper way to handle rate limits within service\nconstraints is to retry requests using exponential backoff with jitter. This reduces contention and prevents\noverwhelming the service while staying within allowed quotas.\nHTTP 400 → Split content into smaller files before uploading the files\nThis is correct because HTTP 400 with file size exceeded indicates that uploads are breaching the maximum\nfile size limit . Splitting files ensures each upload stays within the allowed limits and succeeds.",
    "explanation": "Correct Answer:\nHTTP 429 → Implement exponential backoff and jitter in the retry logic\nThis is correct because HTTP 429 indicates rate limiting . The proper way to handle rate limits within service\nconstraints is to retry requests using exponential backoff with jitter. This reduces contention and prevents\noverwhelming the service while staying within allowed quotas.\nHTTP 400 → Split content into smaller files before uploading the files\nThis is correct because HTTP 400 with file size exceeded indicates that uploads are breaching the maximum\nfile size limit . Splitting files ensures each upload stays within the allowed limits and succeeds.\n\nIncorrect Answers:\nIncrease tenant -wide quotas\nThis violates the requirement to remain within service and model limits.\nMove large content to files and use file search\nThis helps with large prompts but does not directly resolve file upload size limit errors.\nUse additional agent tools to reduce the message size\nThis may reduce prompt size but does not address file upload size constraints or rate limiting directly.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q125-p129-6b25f536.jpg"
    ],
    "answerImages": [
      "assets/questions/q125-p129-e1fcd872.jpg"
    ],
    "concept": "This question tests model deployment concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "TTP 429 → Implement exponential backoff and jitter in the retry logic",
    "topic": "Model Deployment",
    "sourceQuestionNumber": 125,
    "needsReview": true,
    "sourceMaterial": "You have a Microsoft Foundry project that contains an agent. The agent uses threads and file uploads\nand calls an Azure OpenAI model deployment.\nDuring load testing, calls intermittently fall and return an HTTP 429 rate limit exceeded error. Some user\nuploads fail and generate an HTTP 400 file size exceeded error.\nYou need to mitigate the errors and reduce call failures. The solution must remain within the service and\nmodel limits.\nWhat should you do to resolve each error?"
  },
  {
    "id": 126,
    "type": "single",
    "question": "You have a web app named App1 that sends requests to a multimodal chat model deployment in a\nMicrosoft Foundry project.\nUser messages can contain both text and images.\nCurrently, App1 includes image URL: as plain text inside the message content so the model cannot recognize\nthem as images.\nTraces show that the requests contain a single text message instead of a multimodal content array.\nYou need to send the message as a structured array that includes both the text portion and the image\nreference to ensure that the model can process the image correctly.\nWhat should you do?",
    "options": [
      {
        "id": "A",
        "text": "Set the user message content array to include items that have type: text and type: image_url."
      },
      {
        "id": "B",
        "text": "Encode the image to base64 and include the encoded data inside the content string of the user message."
      },
      {
        "id": "C",
        "text": "Add the image URL to the request metadata section, so the model can resolve the processing issue\nautomatically."
      },
      {
        "id": "D",
        "text": "Place the image URL inside the System Message and set type to image_url so the model loads the image\nat initialization."
      }
    ],
    "correctAnswer": [
      "A"
    ],
    "sourceAnswer": "A. Set the user message content array to include items that have type: text and type: image_url.",
    "explanation": "A. Set the user message content array to include items that have type: text and type: image_url.\n\nExplanation:\nCorrect Answer:\nA. Set the user message content array to include items that have type: text and type: image_url\nThis is correct because multimodal chat models expect input in a structured content array , where each\nelement explicitly defines its type (for example, text or image_url). This allows the model to correctly\ninterpret and process both text and image inputs within the same message.\n\nIncorrect Answers:\nB. Encode the image to base64 and include the encoded data inside the content string of the user\nmessage\nEmbedding base64 inside a plain text string does not create a multimodal input. The model will treat it as\ntext, not as an image.\nC. Add the image URL to the request metadata section\nMetadata is not used by the model for content understanding. The model only processes structured message\ncontent.\nD. Place the image URL inside the System Message and set type to image_url\nSystem messages are meant for instructions and configuration, not for passing user content like images.\nThis will not correctly enable multimodal processing.",
    "incorrectExplanations": {
      "B": "Encode the image to base64 and include the encoded data inside the content string of the user\nmessage\nEmbedding base64 inside a plain text string does not create a multimodal input. The model will treat it as\ntext, not as an image.",
      "C": "Add the image URL to the request metadata section\nMetadata is not used by the model for content understanding. The model only processes structured message\ncontent.",
      "D": "Place the image URL inside the System Message and set type to image_url\nSystem messages are meant for instructions and configuration, not for passing user content like images.\nThis will not correctly enable multimodal processing."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests model deployment concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Set the user message content array to include items that have type: text and type: image_url.",
    "topic": "Model Deployment",
    "sourceQuestionNumber": 126,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 127,
    "type": "yes-no-matrix",
    "question": "You have a Python application that redacts sensitive information before sending prompt text to a\nlanguage model. The application has the following code:\n\nFor each of the following  statements,  select  Yes if the statement  is true. Otherwise,  select  No.",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "Statement 1 --> No\nThis is correct because the configuration restricts detection to \"piiCategories\": [\"Person\", \"PhoneNumber\"].\nThe terms “Contact” and “SSN” are not included in these categories, so they will not be detected as entities\nand therefore will not appear in the a udit output.\nStatement 2 --> No\nThis is correct because text_for_model uses redactedText, which applies masking (entityMask) to detected\nentities. Even if email and SSN are present in the text, they will either be masked (if detected) or excluded (if\nnot part of configured categories). H ence, the original values like john.doe@contoso.com and 859 -98-0987\nwill not appear.\nStatement 3 --> Yes\nThis is correct because the configuration includes \"Person\" and \"PhoneNumber\" with entityMask redaction.\nTherefore, “ John Doe” and “312 -555-1234” will be detected and replaced with masked placeholders in\ntext_for_model.",
    "explanation": "Statement 1 --> No\nThis is correct because the configuration restricts detection to \"piiCategories\": [\"Person\", \"PhoneNumber\"].\nThe terms “Contact” and “SSN” are not included in these categories, so they will not be detected as entities\nand therefore will not appear in the a udit output.\nStatement 2 --> No\nThis is correct because text_for_model uses redactedText, which applies masking (entityMask) to detected\nentities. Even if email and SSN are present in the text, they will either be masked (if detected) or excluded (if\nnot part of configured categories). H ence, the original values like john.doe@contoso.com and 859 -98-0987\nwill not appear.\nStatement 3 --> Yes\nThis is correct because the configuration includes \"Person\" and \"PhoneNumber\" with entityMask redaction.\nTherefore, “ John Doe” and “312 -555-1234” will be detected and replaced with masked placeholders in\ntext_for_model.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q127-p131-07f38e27.jpg"
    ],
    "answerImages": [
      "assets/questions/q127-p132-20505082.jpg",
      "assets/questions/q127-p132-b749788c.jpg"
    ],
    "concept": "This question tests document processing concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Statement 1 --> No",
    "topic": "Document Processing",
    "sourceQuestionNumber": 127,
    "needsReview": true,
    "sourceMaterial": "You have a Python application that redacts sensitive information before sending prompt text to a\nlanguage model. The application has the following code:\n\nFor each of the following  statements,  select  Yes if the statement  is true. Otherwise,  select  No."
  },
  {
    "id": 128,
    "type": "single",
    "question": "You are building a customer support web app named App1 in Microsoft Foundry that uses a GPT\nrealtime model.\nApp1 must support:\n• Live, low -latency voice conversations that use Azure OpenAI\n• Streaming audio input from users and playback audio responses\nYou need to configure a connection method that supports real -time audio streaming in client application and\ntargets approximately 100 ms latency.\nWhich connection method should you use?",
    "options": [
      {
        "id": "A",
        "text": "RTMP"
      },
      {
        "id": "B",
        "text": "WebRTC"
      },
      {
        "id": "C",
        "text": "SIP"
      },
      {
        "id": "D",
        "text": "WebSocket"
      }
    ],
    "correctAnswer": [
      "B"
    ],
    "sourceAnswer": "B. WebRTC",
    "explanation": "B. WebRTC\n\nExplanation:\nCorrect Answer:\nB. WebRTC\nThis is correct because WebRTC is designed for real-time, low -latency audio and video streaming , typically\nachieving latency around ~100 ms. It supports bi-directional streaming , making it ideal for live voice\nconversations where users send audio input and receive audio responses instantly.\n\nIncorrect Answers:\nA. RTMP\nThis is primarily used for live video streaming (e.g., broadcasting) and has higher latency. It is not suitable for\ninteractive real -time conversations.\nC. SIP\nSIP is used for telephony signaling but does not handle real -time media streaming efficiently for modern\nweb-based applications like GPT realtime models.\nD. WebSocket\nWebSocket supports real -time communication but is not optimized for low-latency audio streaming  like\nWebRTC. It typically results in higher latency compared to WebRTC for media scenarios.",
    "incorrectExplanations": {
      "A": "RTMP\nThis is primarily used for live video streaming (e.g., broadcasting) and has higher latency. It is not suitable for\ninteractive real -time conversations.",
      "C": "SIP\nSIP is used for telephony signaling but does not handle real -time media streaming efficiently for modern\nweb-based applications like GPT realtime models.",
      "D": "WebSocket\nWebSocket supports real -time communication but is not optimized for low-latency audio streaming  like\nWebRTC. It typically results in higher latency compared to WebRTC for media scenarios."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests speech concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "WebRTC",
    "topic": "Speech",
    "sourceQuestionNumber": 128,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 129,
    "type": "code-completion",
    "question": "You have an Azure subscription.\nYou need to create a new resource that will generate fictional stores in response to user prompts. The\nsolution must ensure that the resource uses a customer -managed key to protect data.\nHow should you complete the script?",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "kind → OpenAI\nThis is correct because the requirement is to generate responses to user prompts (fictional stores), which\nrequires an Azure OpenAI resource. Therefore, the resource type must be set to OpenAI.\n\nparameter → --encryption\nThis is correct because customer -managed keys (CMK) are configured using the encryption property. The\nprovided JSON block specifies \"keySource\": \"Microsoft.KeyVault\" and Key Vault details, which are part of\nencryption settings for CMK.",
    "explanation": "Correct Answer:\nkind → OpenAI\nThis is correct because the requirement is to generate responses to user prompts (fictional stores), which\nrequires an Azure OpenAI resource. Therefore, the resource type must be set to OpenAI.\n\nparameter → --encryption\nThis is correct because customer -managed keys (CMK) are configured using the encryption property. The\nprovided JSON block specifies \"keySource\": \"Microsoft.KeyVault\" and Key Vault details, which are part of\nencryption settings for CMK.\n\nIncorrect Answers:\nAIServices / LanguageAuthoring\nThese resource kinds are used for other AI capabilities (vision, language authoring) and do not support\nOpenAI prompt -based generation.\n--api-properties / --assign -identity\nThese parameters do not configure customer -managed keys. CMK specifically requires the encryption\nconfiguration.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q129-p134-6663f211.jpg"
    ],
    "answerImages": [
      "assets/questions/q129-p134-510f2eac.jpg"
    ],
    "concept": "This question tests document processing concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "kind → OpenAI",
    "topic": "Document Processing",
    "sourceQuestionNumber": 129,
    "needsReview": true,
    "sourceMaterial": "You have an Azure subscription.\nYou need to create a new resource that will generate fictional stores in response to user prompts. The\nsolution must ensure that the resource uses a customer -managed key to protect data.\nHow should you complete the script?"
  },
  {
    "id": 130,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an agent and uses a GitHub repository. The\nrepository contains a YAM file named File1 that defines the evaluation settings of the agent.\nYou need to create a GitHub Actions workflow that runs the evaluation defined in File1 when a pull request\n(PR) is opened.\nHow should you configure the workflow?",
    "options": [
      {
        "id": "A",
        "text": "Set project -endpoint to the endpoint of the project."
      },
      {
        "id": "B",
        "text": "Set evaluation -config to the path of the YAML file."
      },
      {
        "id": "C",
        "text": "Set model -deployment -name to the deployed model."
      },
      {
        "id": "D",
        "text": "Set tenant -id to the Microsoft Entra tenant ID"
      }
    ],
    "correctAnswer": [
      "B"
    ],
    "sourceAnswer": "B. Set evaluation -config to the path of the YAML file.",
    "explanation": "B. Set evaluation -config to the path of the YAML file.\n\nExplanation:\nCorrect Answer:\nB. Set evaluation -config to the path of the YAML file.\nThe GitHub Actions workflow for running evaluations in a Microsoft Foundry project relies on referencing the\nevaluation configuration file that defines how the agent should be tested. Since File1 is a YAML file containing\nthe evaluation settings, the workf low must point to this file using the evaluation -config parameter. This\nensures that when a pull request is opened, the workflow executes the evaluation exactly as defined in the\nYAML configuration, enabling automated validation of the agent’s behavior.\n\nIncorrect answers:\nA. Set project -endpoint to the endpoint of the project.\nThis is not required for triggering evaluation from a YAML configuration in GitHub Actions and does not\ndefine which evaluation to run.\n\nC. Set model -deployment -name to the deployed model.\nThis is unrelated to running evaluations from a YAML file and is only used when directly referencing a\nspecific model deployment.\nD. Set tenant -id to the Microsoft Entra tenant ID\nTenant ID is used for authentication context but does not specify or trigger the evaluation configuration\ndefined in the YAML file.",
    "incorrectExplanations": {
      "A": "Set project -endpoint to the endpoint of the project.\nThis is not required for triggering evaluation from a YAML configuration in GitHub Actions and does not\ndefine which evaluation to run.",
      "C": "Set model -deployment -name to the deployed model.\nThis is unrelated to running evaluations from a YAML file and is only used when directly referencing a\nspecific model deployment.",
      "D": "Set tenant -id to the Microsoft Entra tenant ID\nTenant ID is used for authentication context but does not specify or trigger the evaluation configuration\ndefined in the YAML file."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests evaluation & observability concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Set evaluation -config to the path of the YAML file.",
    "topic": "Evaluation & Observability",
    "sourceQuestionNumber": 130,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 131,
    "type": "single",
    "question": "You have a Microsoft Foundry project.\nYou need to deploy a model from the model catalog to support a search solution for internal policy\ndocuments. The model must generate vector representations of the text in the documents and of user\nqueries.\nWhich type of model should you use?",
    "options": [
      {
        "id": "A",
        "text": "an embedding model"
      },
      {
        "id": "B",
        "text": "an image generation model"
      },
      {
        "id": "C",
        "text": "a large language model (LLM)"
      },
      {
        "id": "D",
        "text": "a small language model (SLM)"
      }
    ],
    "correctAnswer": [
      "A"
    ],
    "sourceAnswer": "A. an embedding model",
    "explanation": "A. an embedding model\n\nExplanation:\nCorrect Answer:\nA. an embedding model\nEmbedding models are specifically designed to convert text into numerical vector representations. These\nvectors capture the semantic meaning of the text, enabling similarity -based search. In a search solution for\ninternal policy documents, both the documen ts and user queries must be converted into vectors so that\nrelevant matches can be identified using vector similarity. This is exactly the purpose of embedding models\nin Azure AI Foundry and related services.\n\nIncorrect answers:\nB. an image generation model\nThis type of model is used to generate images from text prompts and is not suitable for text vectorization or\nsearch.\nC. a large language model (LLM)\nLLMs are primarily used for text generation, summarization, and reasoning, not for generating vector\nembeddings for search indexing.\nD. a small language model (SLM)\nSLMs are optimized for lightweight text processing tasks but are not designed specifically for generating\nhigh-quality vector embeddings for semantic search.",
    "incorrectExplanations": {
      "B": "an image generation model\nThis type of model is used to generate images from text prompts and is not suitable for text vectorization or\nsearch.",
      "C": "a large language model (LLM)\nLLMs are primarily used for text generation, summarization, and reasoning, not for generating vector\nembeddings for search indexing.",
      "D": "a small language model (SLM)\nSLMs are optimized for lightweight text processing tasks but are not designed specifically for generating\nhigh-quality vector embeddings for semantic search."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "an embedding model",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 131,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 132,
    "type": "single",
    "question": "You have a Microsoft Foundry project.\nYou need to deploy a model from the model catalog to support real -time inference.\nThe solution must meet the following requirements:\n• Use key -based authentication.\n• Support real -time REST API access.\n• NOT consume the vCPU quota of the virtual machines in the Azure subscription.\nWhich type of deployment should you use?",
    "options": [
      {
        "id": "A",
        "text": "serverless API"
      },
      {
        "id": "B",
        "text": "batch"
      },
      {
        "id": "C",
        "text": "self-hosted container"
      },
      {
        "id": "D",
        "text": "standard"
      }
    ],
    "correctAnswer": [
      "A"
    ],
    "sourceAnswer": "A. serverless API",
    "explanation": "A. serverless API\n\nExplanation:\nCorrect Answer:\nA. serverless API\nA serverless API deployment in Microsoft Foundry allows you to expose the model through a real -time REST\nendpoint without managing underlying infrastructure. It supports key -based authentication and provides\ninstant scalability for real -time inference. Mos t importantly, it does not consume the vCPU quota of your\nAzure subscription because the compute is fully managed by the service, making it ideal for this requirement.\n\nIncorrect answers:\nB. batch\nBatch deployments are designed for asynchronous, large -scale processing and do not support real -time\nREST API inference.\nC. self -hosted container\nThis option requires you to run the model on your own infrastructure, which would consume vCPU resources\nin your Azure subscription.\nD. standard\nStandard deployments run on dedicated compute resources within your subscription, which means they\nconsume vCPU quota and do not meet the requirement.",
    "incorrectExplanations": {
      "B": "batch\nBatch deployments are designed for asynchronous, large -scale processing and do not support real -time\nREST API inference.",
      "C": "self -hosted container\nThis option requires you to run the model on your own infrastructure, which would consume vCPU resources\nin your Azure subscription.",
      "D": "standard\nStandard deployments run on dedicated compute resources within your subscription, which means they\nconsume vCPU quota and do not meet the requirement."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests model deployment concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "serverless API",
    "topic": "Model Deployment",
    "sourceQuestionNumber": 132,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 133,
    "type": "code-completion",
    "question": "You have a Python application collects customer comments before posting them to a public forum.\nYou need to send a text comment to Azure AI Content Safety and return the self -harm severity from the\nresponse. How should you complete the code?",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "request = AnalyzeTextOptions(text=comment)\nTo analyze text using Azure AI Content Safety, you must create a request using AnalyzeTextOptions and pass\nthe actual text content. The parameter text=comment correctly sends the input string for analysis.\nresponse = client.analyze_text(request)\nThe correct method to send the text analysis request using the ContentSafetyClient is analyze_text(). This\nmethod processes the request and returns categorized analysis, including severity levels such as self -harm.",
    "explanation": "Correct Answer:\nrequest = AnalyzeTextOptions(text=comment)\nTo analyze text using Azure AI Content Safety, you must create a request using AnalyzeTextOptions and pass\nthe actual text content. The parameter text=comment correctly sends the input string for analysis.\nresponse = client.analyze_text(request)\nThe correct method to send the text analysis request using the ContentSafetyClient is analyze_text(). This\nmethod processes the request and returns categorized analysis, including severity levels such as self -harm.\n\nIncorrect answers:\nAnalyzeTextOptions(categories=comment)\nThis is incorrect because categories is not used to pass input text; it is used to specify which categories to\nevaluate.\nAnalyzeTextOptions(text=[comment])\nThis is incorrect because the method expects a string, not a list of strings.\nTextCategory.SELF_HARM(comment)\nThis is invalid syntax and TextCategory is used for filtering results, not for creating requests.\nclient.analyze_image(request)\nThis method is used for image analysis, not text.\nclient.moderate_text(request)\nThis is not the correct SDK method for Content Safety text analysis.\nclient.path(\"/text:analyze\").post(request)\nThis is a low -level REST call pattern and not the recommended SDK method for this scenario.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q133-p138-71c2da22.jpg"
    ],
    "answerImages": [
      "assets/questions/q133-p138-fc9eb6d9.jpg"
    ],
    "concept": "This question tests content safety & prompt shields concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "request = AnalyzeTextOptions(text=comment)",
    "topic": "Content Safety & Prompt Shields",
    "sourceQuestionNumber": 133,
    "needsReview": true,
    "sourceMaterial": "You have a Python application collects customer comments before posting them to a public forum.\nYou need to send a text comment to Azure AI Content Safety and return the self -harm severity from the\nresponse. How should you complete the code?"
  },
  {
    "id": 134,
    "type": "single",
    "question": "You have a Microsoft Foundry project that contains an agent. The agent generates summaries from\nretrieved policy documents.\nYou need to improve response completeness. The solution must be implemented in the logic of the\napplication code before responses are returned.\nWhat should you do?",
    "options": [
      {
        "id": "A",
        "text": "Add a retry evaluation before the responses are returned."
      },
      {
        "id": "B",
        "text": "Decrease the value of the temperature parameter."
      },
      {
        "id": "C",
        "text": "Increase the value of the presence_penalty parameter"
      },
      {
        "id": "D",
        "text": "Replace the model with a smaller deployment."
      }
    ],
    "correctAnswer": [
      "A"
    ],
    "sourceAnswer": "A. Add a retry evaluation before the responses are returned.",
    "explanation": "A. Add a retry evaluation before the responses are returned.\n\nExplanation:\nCorrect Answer:\nA. Add a retry evaluation before the responses are returned.\n\nTo improve response completeness, implementing a retry or evaluation mechanism in the application logic\nallows the system to validate the generated response and regenerate it if it is incomplete. This approach\nensures higher -quality outputs by programmatic ally checking whether the response meets completeness\ncriteria before returning it to the user. This aligns directly with the requirement to implement the solution in\napplication code logic.\n\nIncorrect answers:\nB. Decrease the value of the temperature parameter.\nLowering temperature makes responses more deterministic but does not specifically improve completeness.\nC. Increase the value of the presence_penalty parameter\nThis encourages introducing new topics, which may reduce focus rather than improve completeness.\nD. Replace the model with a smaller deployment.\nA smaller model typically has lower capability and may reduce response quality and completeness.",
    "incorrectExplanations": {
      "B": "Decrease the value of the temperature parameter.\nLowering temperature makes responses more deterministic but does not specifically improve completeness.",
      "C": "Increase the value of the presence_penalty parameter\nThis encourages introducing new topics, which may reduce focus rather than improve completeness.",
      "D": "Replace the model with a smaller deployment.\nA smaller model typically has lower capability and may reduce response quality and completeness."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests foundry agent service concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Add a retry evaluation before the responses are returned.",
    "topic": "Foundry Agent Service",
    "sourceQuestionNumber": 134,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 135,
    "type": "drag-drop",
    "question": "You are developing an application that will detect faulty components produced on a factory production\nline. The components are specific to your business.\nYou need to use the Azure Custom Vision API to help detect common faults.\nWhich three actions should you perform in sequence?",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "1. Create a project.\nThe first step in Azure Custom Vision is to create a project where you define the type of model (classification\nor object detection) and organize your dataset and training process.\n2. Upload and tag images.\nAfter creating the project, you must upload images of the components and tag them appropriately (for\nexample, faulty vs non -faulty). Tagging is critical because it provides labeled data for supervised learning.\n3. Train the classifier model.\nOnce the images are uploaded and tagged, you train the model so it can learn patterns and detect faults\nbased on the labeled dataset.",
    "explanation": "Correct Answer:\n1. Create a project.\nThe first step in Azure Custom Vision is to create a project where you define the type of model (classification\nor object detection) and organize your dataset and training process.\n2. Upload and tag images.\nAfter creating the project, you must upload images of the components and tag them appropriately (for\nexample, faulty vs non -faulty). Tagging is critical because it provides labeled data for supervised learning.\n3. Train the classifier model.\nOnce the images are uploaded and tagged, you train the model so it can learn patterns and detect faults\nbased on the labeled dataset.\n\nIncorrect answers:\nInitialize the training dataset.\nThis is not an explicit step in Azure Custom Vision; dataset preparation happens during image upload and\ntagging.\nTrain the object detection model.\nObject detection is used when identifying locations of objects in images, not just classifying faults. The\nscenario focuses on detecting faulty components, which aligns with classification.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q135-p140-3f36463a.jpg"
    ],
    "answerImages": [
      "assets/questions/q135-p140-d95d4da3.jpg"
    ],
    "concept": "This question tests document processing concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "1. Create a project.",
    "topic": "Document Processing",
    "sourceQuestionNumber": 135,
    "needsReview": true,
    "sourceMaterial": "You are developing an application that will detect faulty components produced on a factory production\nline. The components are specific to your business.\nYou need to use the Azure Custom Vision API to help detect common faults.\nWhich three actions should you perform in sequence?"
  },
  {
    "id": 136,
    "type": "single",
    "question": "You have an Azure subscription.\nYou plan to build an app that will use the Azure AI DALL -E model. You need to deploy the model.\nWhat should you use?",
    "options": [
      {
        "id": "A",
        "text": "the Azure SDK for Python and PowerShell cmdlets."
      },
      {
        "id": "B",
        "text": "the Azure SDK for JavaScript and Azure Machine Learning Studio."
      },
      {
        "id": "C",
        "text": "Microsoft Foundry and the Azure Command Line Interface (CLI)"
      },
      {
        "id": "D",
        "text": "the Azure portal and Microsoft Graph API"
      }
    ],
    "correctAnswer": [
      "C"
    ],
    "sourceAnswer": "C. Microsoft Foundry and the Azure Command Line Interface (CLI)",
    "explanation": "C. Microsoft Foundry and the Azure Command Line Interface (CLI)\n\nExplanation:\nCorrect Answer:\nC. Microsoft Foundry and the Azure Command Line Interface (CLI)\nAzure AI DALL -E models are part of Azure AI Foundry (formerly Azure AI Studio) and are deployed through\nmodel catalog capabilities. You can deploy these models using Microsoft Foundry UI or automate\ndeployments using the Azure CLI. This combination support s proper provisioning, deployment, and\nmanagement of generative AI models like DALL -E.\n\nIncorrect answers:\nA. the Azure SDK for Python and PowerShell cmdlets.\nThese can interact with deployed models but are not used to deploy DALL -E models from the model catalog.\nB. the Azure SDK for JavaScript and Azure Machine Learning Studio.\nAzure Machine Learning Studio is not used for deploying Azure AI DALL -E models from the Foundry model\ncatalog.\nD. the Azure portal and Microsoft Graph API\nMicrosoft Graph API is unrelated to deploying AI models and cannot be used for this purpose.",
    "incorrectExplanations": {
      "A": "the Azure SDK for Python and PowerShell cmdlets.\nThese can interact with deployed models but are not used to deploy DALL -E models from the model catalog.",
      "B": "the Azure SDK for JavaScript and Azure Machine Learning Studio.\nAzure Machine Learning Studio is not used for deploying Azure AI DALL -E models from the Foundry model\ncatalog.",
      "D": "the Azure portal and Microsoft Graph API\nMicrosoft Graph API is unrelated to deploying AI models and cannot be used for this purpose."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests model deployment concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Microsoft Foundry and the Azure Command Line Interface (CLI)",
    "topic": "Model Deployment",
    "sourceQuestionNumber": 136,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 137,
    "type": "single",
    "question": "You have a custom named entity recognition (NER) project in Azure Language in Foundry Tools for\nsupport tickets. The schema for the project contains an entity type named ContactInfo.\nIn tagged training files, ContactInfo is used for phone numbers, email addresses, and social media handles.\nModel evaluation shows low precision for ContactInfo, including false positives in which nearby text is\nextracted as ContactInfo.\nYou need to improve the precision of the project.\nWhat should you do before retraining the model?",
    "options": [
      {
        "id": "A",
        "text": "Lower the confidence threshold for ContactInfo."
      },
      {
        "id": "B",
        "text": "Trigger an auto -labeling job."
      },
      {
        "id": "C",
        "text": "Add more support tickets as training data and label more ContactInfo entities."
      },
      {
        "id": "D",
        "text": "Replace ContactInfo by using Phone, Email, and SocialMedia entities. Relabel every matching span."
      }
    ],
    "correctAnswer": [
      "D"
    ],
    "sourceAnswer": "D. Replace ContactInfo by using Phone, Email, and SocialMedia entities. Relabel every matching span.",
    "explanation": "D. Replace ContactInfo by using Phone, Email, and SocialMedia entities. Relabel every matching span.\n\nExplanation:\nCorrect Answer:\nD. Replace ContactInfo by using Phone, Email, and SocialMedia entities. Relabel every matching span.\nLow precision and false positives indicate that the model is overgeneralizing the ContactInfo entity. By\nsplitting this broad entity into more specific entities such as Phone, Email, and SocialMedia, you provide\nclearer distinctions and reduce ambiguity. T his improves the model’s ability to correctly identify only the\nintended spans and avoid extracting nearby irrelevant text. Fine -grained labeling is a key technique to\nimprove precision in NER models.\n\nIncorrect answers:\nA. Lower the confidence threshold for ContactInfo.\nLowering the threshold would increase false positives, worsening precision.\nB. Trigger an auto -labeling job.\nAuto-labeling may propagate existing labeling issues and does not address the root cause of low precision.\n\nC. Add more support tickets as training data and label more ContactInfo entities.\nAdding more data without refining the entity definition may continue the same ambiguity and not significantly\nimprove precision.",
    "incorrectExplanations": {
      "A": "Lower the confidence threshold for ContactInfo.\nLowering the threshold would increase false positives, worsening precision.",
      "B": "Trigger an auto -labeling job.\nAuto-labeling may propagate existing labeling issues and does not address the root cause of low precision.",
      "C": "Add more support tickets as training data and label more ContactInfo entities.\nAdding more data without refining the entity definition may continue the same ambiguity and not significantly\nimprove precision."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests evaluation & observability concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Replace ContactInfo by using Phone, Email, and SocialMedia entities. Relabel every matching span.",
    "topic": "Evaluation & Observability",
    "sourceQuestionNumber": 137,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 138,
    "type": "single",
    "question": "You are building a text -to-speech solution that uses Azure Speech in Foundry Tools to read\ninstructions from the  script in a text file.\nYou discover that the solution often pronounces technical terms incorrectly.\nYou need to prevent the incorrect pronunciations. The solution must minimize development effort.\nWhat should you do?",
    "options": [
      {
        "id": "A",
        "text": "From Speech Studio, train a custom neural voice"
      },
      {
        "id": "B",
        "text": "Use Speech Synthesis Markup Language (SSML) to specify phonemes."
      },
      {
        "id": "C",
        "text": "Use Speech Synthesis Markup Language (SSML) to apply say as rules."
      },
      {
        "id": "D",
        "text": "Use Speech Synthesis Markup Language (SSML) to adjust the prosody of the voice."
      },
      {
        "id": "E",
        "text": "From Azure OpenAI use the Whisper model."
      }
    ],
    "correctAnswer": [
      "B"
    ],
    "sourceAnswer": "B. Use Speech Synthesis Markup Language (SSML) to specify phonemes.",
    "explanation": "B. Use Speech Synthesis Markup Language (SSML) to specify phonemes.\n\nExplanation:\nCorrect Answer:\nB. Use Speech Synthesis Markup Language (SSML) to specify phonemes.\nSSML phoneme tags allow you to explicitly define how specific words should be pronounced by providing\ntheir phonetic representation. This is the most effective and low -effort way to correct pronunciation of\ntechnical terms without retraining models. It giv es precise control over pronunciation and is ideal for handling\ndomain -specific vocabulary.\n\nIncorrect answers:\nA. From Speech Studio, train a custom neural voice\nThis requires significant effort and is unnecessary for fixing pronunciation of specific terms.\nC. Use Speech Synthesis Markup Language (SSML) to apply say as rules.\nSay-as is used for formatting (dates, numbers, etc.), not for correcting pronunciation of technical terms.\nD. Use Speech Synthesis Markup Language (SSML) to adjust the prosody of the voice.\nProsody controls pitch, rate, and volume, not pronunciation.\nE. From Azure OpenAI use the Whisper model.\nWhisper is used for speech -to-text, not text -to-speech pronunciation control.",
    "incorrectExplanations": {
      "A": "From Speech Studio, train a custom neural voice\nThis requires significant effort and is unnecessary for fixing pronunciation of specific terms.",
      "C": "Use Speech Synthesis Markup Language (SSML) to apply say as rules.\nSay-as is used for formatting (dates, numbers, etc.), not for correcting pronunciation of technical terms.",
      "D": "Use Speech Synthesis Markup Language (SSML) to adjust the prosody of the voice.\nProsody controls pitch, rate, and volume, not pronunciation.",
      "E": "From Azure OpenAI use the Whisper model.\nWhisper is used for speech -to-text, not text -to-speech pronunciation control."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests speech concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Use Speech Synthesis Markup Language (SSML) to specify phonemes.",
    "topic": "Speech",
    "sourceQuestionNumber": 138,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 139,
    "type": "single",
    "question": "You need to create a new resource that will be used to perform sentiment analysis and optical\ncharacter recognition (OCR).\nThe solution must meet the following requirements:\n• Use a single key and endpoint to access multiple services.\n• Consolidate billing for future services that you might use.\n• Support the use of Azure Vision in Foundry Tools in the future.\nHow should you complete the HTTP request to create the new resource?",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "HTTP method: PUT\n\"kind\": CognitiveServices\n\nExplanation:\nCorrect Answer:\nHTTP method: PUT\nPUT is the standard Azure Resource Manager verb for creating or fully defining a resource at a known,\nspecific URI ( such as\n/subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.CognitiveServices/accounts/{accountName}  ).\nIt is idempotent, meaning sending the same request multiple times results in the same resource state - the\nstandard convention ARM uses when you already know the exact resource name/path you want to create.\n\"kind\": CognitiveServices\nSetting \"kind\" to CognitiveServices creates a multi -service resource, which provides a single key and\nendpoint to access multiple AI capabilities (sentiment analysis via Language, OCR via Vision) under one\nresource. This consolidates billing into a single line item and allows additional services, such as Azure Vision\nin Foundry Tools, to be accessed later without provisioning a new resource.",
    "explanation": "Correct Answer:\n\nHTTP method: PUT\n\"kind\": CognitiveServices\n\nExplanation:\nCorrect Answer:\nHTTP method: PUT\nPUT is the standard Azure Resource Manager verb for creating or fully defining a resource at a known,\nspecific URI ( such as\n/subscriptions/{subId}/resourceGroups/{rg}/providers/Microsoft.CognitiveServices/accounts/{accountName}  ).\nIt is idempotent, meaning sending the same request multiple times results in the same resource state - the\nstandard convention ARM uses when you already know the exact resource name/path you want to create.\n\"kind\": CognitiveServices\nSetting \"kind\" to CognitiveServices creates a multi -service resource, which provides a single key and\nendpoint to access multiple AI capabilities (sentiment analysis via Language, OCR via Vision) under one\nresource. This consolidates billing into a single line item and allows additional services, such as Azure Vision\nin Foundry Tools, to be accessed later without provisioning a new resource.\n\nIncorrect answers:\nPATCH\nPATCH performs a partial update to an existing resource, changing only the specified properties while leaving\nthe rest intact. Since this scenario creates a brand -new resource (CS1 doesn't exist yet), there is nothing to\npartially modify, making PATCH inco rrect here.\n\nPOST\nIn Azure Resource Manager, POST is typically used to trigger actions or operations on an existing resource\n(for example, restart, listKeys, or regenerateKey) rather than to declaratively create a resource at a specific\nURI with a full desired -state body. A RM's resource -creation pattern is consistently PUT -based, not POST -\nbased.\nComputerVision\nSetting \"kind\" to ComputerVision creates a single -service resource scoped only to the Computer Vision API\n(image analysis, OCR, etc.). It would satisfy the OCR requirement but provides no access to sentiment\nanalysis under the same key and endpoint, requir ing a second separate resource — which violates the\nrequirement for a single key/endpoint and consolidated billing.\nTextAnalytics\nSetting \"kind\" to TextAnalytics creates a single -service resource scoped only to Text Analytics (sentiment\nanalysis, language detection, etc.). It would satisfy the sentiment analysis requirement but provides no\nOCR/vision capability, again requiring a sec ond resource and failing the single key/endpoint and consolidated\nbilling requirements. It would also not support adding Azure Vision in Foundry Tools later without\nprovisioning another resource.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q139-p144-b3acd32c.jpg"
    ],
    "answerImages": [
      "assets/questions/q139-p145-eb675523.jpg"
    ],
    "concept": "This question tests agent tools & workflows concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "TTP method: PUT",
    "topic": "Agent Tools & Workflows",
    "sourceQuestionNumber": 139,
    "needsReview": true,
    "sourceMaterial": "You need to create a new resource that will be used to perform sentiment analysis and optical\ncharacter recognition (OCR).\nThe solution must meet the following requirements:\n• Use a single key and endpoint to access multiple services.\n• Consolidate billing for future services that you might use.\n• Support the use of Azure Vision in Foundry Tools in the future.\nHow should you complete the HTTP request to create the new resource?"
  },
  {
    "id": 140,
    "type": "single",
    "question": "You are developing a new sales system that will process user -generated video and text from a public -\nfacing website.\nYou plan to notify users that their data has been processed by the sales system. Which responsible AI\nprinciple does this help meet?",
    "options": [
      {
        "id": "A",
        "text": "fairness"
      },
      {
        "id": "B",
        "text": "transparency"
      },
      {
        "id": "C",
        "text": "inclusiveness"
      },
      {
        "id": "D",
        "text": "reliability and safety"
      }
    ],
    "correctAnswer": [
      "B"
    ],
    "sourceAnswer": "B. transparency",
    "explanation": "B. transparency\n\nExplanation:\nCorrect Answer:\nB. transparency\nTransparency in responsible AI refers to informing users how their data is being used and how systems\noperate. By notifying users that their video and text data are being processed by the sales system, you\nensure openness about data usage. This builds trus t and aligns with the principle of making AI systems\nunderstandable and clear to users.\n\nIncorrect answers:\nA. fairness\n\nFairness focuses on eliminating bias and ensuring equitable treatment, not informing users about data\nprocessing.\nC. inclusiveness\nInclusiveness ensures accessibility and usability for diverse groups, not transparency of data usage.\nD. reliability and safety\nThis principle relates to consistent and safe system behavior, not user awareness of data processing.",
    "incorrectExplanations": {
      "A": "fairness\n\nFairness focuses on eliminating bias and ensuring equitable treatment, not informing users about data\nprocessing.",
      "C": "inclusiveness\nInclusiveness ensures accessibility and usability for diverse groups, not transparency of data usage.",
      "D": "reliability and safety\nThis principle relates to consistent and safe system behavior, not user awareness of data processing."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests document processing concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "transparency",
    "topic": "Document Processing",
    "sourceQuestionNumber": 140,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 141,
    "type": "single",
    "question": "You are creating an enrichment pipeline that will use Azure AI Search. The knowledge store contains\nunstructured JSON data and the text from scanned PDF documents.\nWhich projection type should you use for each data type?",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "JSON data: Object projection\nObject projection is used for structured or semi -structured data like JSON. It preserves the hierarchical\nstructure of the JSON documents, making it suitable for storing and querying complex objects in the\nknowledge store.\nExtracted text data: Table projection\nTable projection is ideal for flattened, structured representations of data such as extracted text from\n\ndocuments. It organizes the data into rows and columns, making it efficient for querying and analysis,\nespecially for OCR -extracted text from scanned PDFs.",
    "explanation": "Correct Answer:\nJSON data: Object projection\nObject projection is used for structured or semi -structured data like JSON. It preserves the hierarchical\nstructure of the JSON documents, making it suitable for storing and querying complex objects in the\nknowledge store.\nExtracted text data: Table projection\nTable projection is ideal for flattened, structured representations of data such as extracted text from\n\ndocuments. It organizes the data into rows and columns, making it efficient for querying and analysis,\nespecially for OCR -extracted text from scanned PDFs.\n\nIncorrect answers:\nFile projection\nFile projection is used to store enriched documents as files (for example, images or PDFs), not for structured\nJSON or extracted text intended for querying.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q141-p147-0f4bbe06.jpg"
    ],
    "answerImages": [
      "assets/questions/q141-p147-9320e9cb.jpg"
    ],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "JSON data: Object projection",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 141,
    "needsReview": true,
    "sourceMaterial": "You are creating an enrichment pipeline that will use Azure AI Search. The knowledge store contains\nunstructured JSON data and the text from scanned PDF documents.\nWhich projection type should you use for each data type?"
  },
  {
    "id": 142,
    "type": "single",
    "question": "You have an Azure subscription that contains an Azure App Service app named App1. You provision a\nMicrosoft Foundry Service resource named CSAccount1.\nYou need to configure App1 to access CSAccount1. The solution must minimize administrative effort.\nWhat should you use to configure App1?",
    "options": [
      {
        "id": "A",
        "text": "the endpoint URI and subscription key"
      },
      {
        "id": "B",
        "text": "the endpoint URI and an OAuth token"
      },
      {
        "id": "C",
        "text": "the endpoint URI and a shared access signature (SAS) token"
      },
      {
        "id": "D",
        "text": "a system assigned managed identity and an X.509 certificate"
      }
    ],
    "correctAnswer": [
      "A"
    ],
    "sourceAnswer": "A. the endpoint URI and subscription key",
    "explanation": "A. the endpoint URI and subscription key\n\nExplanation:\nCorrect Answer:\nA. the endpoint URI and subscription key\nUsing the endpoint URI along with a subscription key is the simplest and most commonly used method to\nauthenticate an App Service app with an Azure AI (Foundry) resource. It requires minimal configuration and\nadministrative effort, making it ideal for quic k integration scenarios. The application simply includes the key\nin the request headers to securely access the service.\n\nIncorrect answers:\nB. the endpoint URI and an OAuth token\nThis requires additional setup with Microsoft Entra ID and token management, increasing administrative\neffort.\nC. the endpoint URI and a shared access signature (SAS) token\nSAS tokens are typically used for Azure Storage, not for accessing Azure AI services.\nD. a system assigned managed identity and an X.509 certificate\nThis involves more complex configuration and certificate management, which does not minimize\nadministrative effort.",
    "incorrectExplanations": {
      "B": "the endpoint URI and an OAuth token\nThis requires additional setup with Microsoft Entra ID and token management, increasing administrative\neffort.",
      "C": "the endpoint URI and a shared access signature (SAS) token\nSAS tokens are typically used for Azure Storage, not for accessing Azure AI services.",
      "D": "a system assigned managed identity and an X.509 certificate\nThis involves more complex configuration and certificate management, which does not minimize\nadministrative effort."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests foundry agent service concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "the endpoint URI and subscription key",
    "topic": "Foundry Agent Service",
    "sourceQuestionNumber": 142,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 143,
    "type": "single",
    "question": "You are building a model to detect objects in images.\n\nThe performance of the model based on training data is shown in the following exhibit.\n\nUse the drop -down menus to select the answer choice that completes each statement based on the\ninformation presented in the graphic.",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "0\nPrecision is given as 100% .\nPrecision = True Positives / (True Positives + False Positives).\nIf precision is 100%, it means False Positives = 0 .\nSo, the percentage of false positives is 0%.\n25\nRecall is given as 25%.\nRecall = True Positives / (True Positives + False Negatives).\nSo the required value is directly the recall value, which is 25%.",
    "explanation": "Correct Answer:\n0\nPrecision is given as 100% .\nPrecision = True Positives / (True Positives + False Positives).\nIf precision is 100%, it means False Positives = 0 .\nSo, the percentage of false positives is 0%.\n25\nRecall is given as 25%.\nRecall = True Positives / (True Positives + False Negatives).\nSo the required value is directly the recall value, which is 25%.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q143-p149-5c85139b.jpg"
    ],
    "answerImages": [
      "assets/questions/q143-p149-2117e44f.jpg"
    ],
    "concept": "This question tests document processing concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "0",
    "topic": "Document Processing",
    "sourceQuestionNumber": 143,
    "needsReview": true,
    "sourceMaterial": "You are building a model to detect objects in images.\n\nThe performance of the model based on training data is shown in the following exhibit.\n\nUse the drop -down menus to select the answer choice that completes each statement based on the\ninformation presented in the graphic."
  },
  {
    "id": 144,
    "type": "single",
    "question": "You are developing an application that will use Azure AI Search for internal documents. You need to\nimplement document -level filtering for Azure AI Search.\nWhich three actions should you include in the solution?",
    "options": [
      {
        "id": "A",
        "text": "Add allowed groups to each index entry"
      },
      {
        "id": "B",
        "text": "Create one index per group."
      },
      {
        "id": "C",
        "text": "Send access tokens from Microsoft Entra ID, with the search request."
      },
      {
        "id": "D",
        "text": "Retrieve all the groups."
      },
      {
        "id": "E",
        "text": "Retrieve the group memberships of the user"
      },
      {
        "id": "F",
        "text": "Supply the groups as a filter for the search requests"
      }
    ],
    "correctAnswer": [
      "A"
    ],
    "sourceAnswer": "A. Add allowed groups to each index entry",
    "explanation": "A. Add allowed groups to each index entry\nE. Retrieve the group memberships of the user\nF . Supply the groups as a filter for the search requests\n\nExplanation:\n\nCorrect Answer:\nA. Add allowed groups to each index entry\nTo enable document -level security, each document in the index must include metadata indicating which\ngroups are allowed to access it. This allows filtering results based on user permissions.\nE. Retrieve the group memberships of the user\nThe application must determine which groups the current user belongs to. This is typically done using\nMicrosoft Entra ID so that access decisions can be enforced dynamically.\nF . Supply the groups as a filter for the search requests\nWhen performing a search, the user’s group memberships are passed as a filter query. Azure AI Search uses\nthis filter to return only documents that the user is authorized to access.\n\nIncorrect answers:\nB. Create one index per group.\nThis is not scalable and is not how document -level security is implemented in Azure AI Search.\nC. Send access tokens from Microsoft Entra ID, with the search request.\nWhile authentication is required, tokens alone do not enforce document -level filtering within the index.\nD. Retrieve all the groups.\nRetrieving all groups is unnecessary; only the groups relevant to the current user are required.",
    "incorrectExplanations": {
      "B": "Create one index per group.\nThis is not scalable and is not how document -level security is implemented in Azure AI Search.",
      "C": "Send access tokens from Microsoft Entra ID, with the search request.\nWhile authentication is required, tokens alone do not enforce document -level filtering within the index.",
      "D": "Retrieve all the groups.\nRetrieving all groups is unnecessary; only the groups relevant to the current user are required."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q144-p150-79e93cb5.jpg"
    ],
    "answerImages": [],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Add allowed groups to each index entry",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 144,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 145,
    "type": "drag-drop",
    "question": "You have a web app that uses Azure AI Search.\nWhen reviewing activity you see greater than expected search query volumes. You suspect that the query\nkey is compromised.\nYou need to prevent unauthorized access to the search endpoint and ensure that users only have read only\naccess to the documents collection. The solution must minimize app downtime.\nWhich three actions should you perform in sequence?",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "Add a new query key\nTo maintain availability and minimize downtime, you should first create a new query key. Query keys provide\nread-only access, which meets the requirement that users should only have read access to the documents.\nChange the app to use the new key\nNext, update the application to use the newly created query key. This ensures uninterrupted service while\ntransitioning away from the compromised key.\nDelete the compromised key\nFinally, remove the compromised key to prevent any further unauthorized access to the search endpoint.",
    "explanation": "Correct Answer:\nAdd a new query key\nTo maintain availability and minimize downtime, you should first create a new query key. Query keys provide\nread-only access, which meets the requirement that users should only have read access to the documents.\nChange the app to use the new key\nNext, update the application to use the newly created query key. This ensures uninterrupted service while\ntransitioning away from the compromised key.\nDelete the compromised key\nFinally, remove the compromised key to prevent any further unauthorized access to the search endpoint.\n\nIncorrect answers:\nRegenerate the primary admin key\nAdmin keys provide full control and are not intended for query operations; regenerating them does not\naddress compromised query keys.\nRegenerate the secondary admin key\nSame as above, admin keys are not used for query -only access.\nChange the app to use the secondary admin key\nUsing admin keys violates the requirement of read -only access and increases security risk.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q145-p151-c0303a76.jpg"
    ],
    "answerImages": [],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "dd a new query key",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 145,
    "needsReview": true,
    "sourceMaterial": "You have a web app that uses Azure AI Search.\nWhen reviewing activity you see greater than expected search query volumes. You suspect that the query\nkey is compromised.\nYou need to prevent unauthorized access to the search endpoint and ensure that users only have read only\naccess to the documents collection. The solution must minimize app downtime.\nWhich three actions should you perform in sequence?"
  },
  {
    "id": 146,
    "type": "single",
    "question": "You have an Azure AI Search indexer that ingest PDF policy manuals.\nClient applications must display page -level citations that have bounding polygons for both text and images.\nYou need to add a single built -in multimodal content extraction skill to the Azure AI Search skillset.\nThe solution must meet the following requirements:\n• Provide text and image location metadata.\n• Extract tables that span multiple pages.\nWhat should you add?",
    "options": [
      {
        "id": "A",
        "text": "Document Layout"
      },
      {
        "id": "B",
        "text": "Document Extraction"
      },
      {
        "id": "C",
        "text": "Azure Content Understanding"
      },
      {
        "id": "D",
        "text": "GenAI Prompt"
      }
    ],
    "correctAnswer": [
      "C"
    ],
    "sourceAnswer": "C. Azure Content Understanding",
    "explanation": "C. Azure Content Understanding\n\nExplanation:\nCorrect Answer:\nC. Azure Content Understanding\nAzure Content Understanding is the only built -in multimodal skill that fully satisfies all the requirements in the\nscenario. It provides bounding polygon metadata for both text and images , enabling precise page -level\ncitations. Additionally, it supports cross -page table extraction , reconstructing tables that span multiple pages\ninto a single coherent structure. This makes it ideal for processing complex PDF documents such as policy\nmanuals while preserving layout and semantic structure.\n\nIncorrect answers:\nA. Document Layout\nProvides text layout and bounding polygons for text, but does not provide bounding polygons for images and\ndoes not correctly handle tables that span multiple pages.\nB. Document Extraction\nPerforms basic extraction of content but does not provide detailed layout metadata such as bounding\npolygons or advanced table reconstruction.\nD. GenAI Prompt\nUsed for generative AI tasks like summarization or transformation, not for extracting structured layout or\npositional metadata from documents.",
    "incorrectExplanations": {
      "A": "Document Layout\nProvides text layout and bounding polygons for text, but does not provide bounding polygons for images and\ndoes not correctly handle tables that span multiple pages.",
      "B": "Document Extraction\nPerforms basic extraction of content but does not provide detailed layout metadata such as bounding\npolygons or advanced table reconstruction.",
      "D": "GenAI Prompt\nUsed for generative AI tasks like summarization or transformation, not for extracting structured layout or\npositional metadata from documents."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q146-p152-2bef465b.jpg"
    ],
    "answerImages": [],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Azure Content Understanding",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 146,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 147,
    "type": "single",
    "question": "You are designing a content management system.\nYou need to ensure that the reading experience is optimized for users who have reduced comprehension and\nlearning differences, such as dyslexia. The solution must minimize development effort.\nWhich Azure service should you include in the solution?",
    "options": [
      {
        "id": "A",
        "text": "Azure Document Intelligence in Foundry Tools"
      },
      {
        "id": "B",
        "text": "Azure Language in Foundry Tools"
      },
      {
        "id": "C",
        "text": "Azure AI Immersive Reader"
      },
      {
        "id": "D",
        "text": "Azure Translator in Foundry Tools"
      }
    ],
    "correctAnswer": [
      "C"
    ],
    "sourceAnswer": "C. Azure AI Immersive Reader",
    "explanation": "C. Azure AI Immersive Reader\n\nExplanation:\n\nCorrect Answer:\nC. Azure AI Immersive Reader\nAzure AI Immersive Reader is specifically designed to improve reading comprehension and accessibility for\nusers, including those with dyslexia and other learning differences. It provides features such as text -to-\nspeech, syllable breakdown, line focus, and customizable text display. It is easy to integrate and requires\nminimal development effort, making it the best choice for optimizing the reading experience.\n\nIncorrect answers:\nA. Azure Document Intelligence in Foundry Tools\nUsed for extracting structured data from documents, not for improving reading accessibility.\nB. Azure Language in Foundry Tools\nProvides NLP capabilities like sentiment analysis and entity recognition, but does not enhance reading\nexperience.\nD. Azure Translator in Foundry Tools\nUsed for language translation, not for improving comprehension or accessibility for users with learning\ndifferences.\n\nCase St udy\nOverview\nCompany Information\nContoso, Ltd is a multinational retail company that builds, deploys, and manages generative AI and agent -\nbased solutions by using Microsoft Foundry.\nExisting Environment\nIdentity Environment\n• Contoso uses Microsoft Entra ID for identity management, authentication, and authorization capabilities\nthat enable agents to access organizational resources and services.\n• Contoso recently formed a new AI engineering team named Agent1Dev Team to optimize and maintain\nexisting AI solutions.\n\n• The team collaborates with solution architects, DevOps engineers, and security engineers to design,\nimplement. monitor, and secure AI applications.\n• Contoso also has a team named Agent1Test Team that is responsible for validating AI solutions before the\nsolution deployments.\nGenerative Environment\nContoso has a Microsoft Foundry deployment that contains two projects named Project1 and Project2.\nProject1\n• Project1 contains a customer support agent named Agent1 that assists customers with product inquiries\nand troubleshooting requests.\n• Agent1 has the following configurations:\no Agent1 uses a base model deployment.\no A safety evaluation pipeline is NOT enabled.\no Tool invocation approval workflows are NOT enabled. Conversation memory constraints are NOT\nconfigured.\no Agent1 interacts with customers by using digital support channels and answers general questions\nabout Contoso products.\n• Project1 is deployed to an Azure region located in the European Union (EU).\n• Agent1Dev Team will use Project1 to optimize and maintain Agent1.\nProject2\n• Project2 contains a deployed video generation model. The marketing department at Contoso has access\nto Project2 and plans to use the model to develop a video creation solution.\n• Development of the solution is incomplete.\n\nData Environment\n• Contoso stores product -related information in Azure resources that support AI applications.\n• The Azure environment contains an Azure Blob Storage account named storage1 that stores product\ndetail sheets for all the Contoso products.\n• The product sheets include specifications, feature descriptions, and product support information that\nAgent1 can use to answer customer questions. The product sheets are stored in the PDF format.\n\nProblem Statements\nContoso identifies the following issues:\n• Agent1 has only general knowledge of the Contoso products.\n• A recent chat interaction with Agent1 was analyzed for sentiment. The results of the analysis have NOT\nbeen processed yet.\n• Agent1 does NOT use the detailed product information in the product sheets stored in storage1 when\nresponding to customer questions.\n• The finance department at Contoso reports that vendor invoices must be reviewed manually to ensure\nthat the invoices match the terms defined in the vendor contracts. The invoices contain tables, logos, and\nvaried layouts that make the documents difficult t o process consistently.\n\nRequirements\nPlanned Changes\nContoso plans to implement the following changes:\n• Implement a solution for Project1 that analyzes the vendor invoices by evaluating both the visual layout\nand the textual content of the invoices, so that the invoice details can be verified against the vendor\ncontract terms.\n• Update the base model deployment used by Agent1 and standardize the model version to ensure\ncontinuity and consistent responses.\n• Enable Agent1 to retrieve and use the detailed product information from the product sheets stored in\nstorage1. Implement an indexing solution for the product sheets that Agent1 can use to answer customer\nquestions.\n• Complete the development of the video creation solution.\nTechnical Requirements\nContoso identifies the following technical requirements:\n• The model deployment used by Agent1 must support scalable, high -throughput generative AI workloads\nand dynamically scale to handle variable customer support traffic, without requiring reserved throughput\ncapacity. The product sheets must be processed by us ing an indexing pipeline that enables semantic and\nvector search, so that Agent1 can retrieve the relevant product information.\n• Responses generated by using the product sheet information must be relevant, complete, and accurate.\nAgent1 must be able to use the product sheets to answer natural language questions about product\ndetails. The model version used by Agent1 must remain cons istent to ensure stable responses.\n• The data processed by the model must remain within the EU.\n\nSecurity and Compliance Requirements\nContoso identifies the following security and compliance requirements:\n• API keys must NOT be used to access Foundry -deployed models.\n• Access to the Azure resources must follow the principle of least privilege.\n• The developers at Contoso must authenticate to Microsoft Foundry resources by using Microsoft Entra\nauthentication.\n• Access to Project1 must be assigned to the members of Agent1Dev Team by using a security group\nnamed SC_Agent1_Dev.\n• Access to Project1 must be assigned to the members of Agent1Test Team by using a security group\nnamed SC_Agent1_Test.\n• Agent1 must never reveal customer information, even if a document that contains customer data is\nadded erroneously to the product sheet repository in storage1.\n• The product sheets might contain images that include embedded text. Agent1 must be protected from\nmalicious instructions potentially hidden within the images.\nBusiness Requirements\nContoso identifies the following business requirements:\n• Users that interact with Agent1 must have a personalized experience in future interactions, including the\nability for Agent1 to retain conversation context and recall relevant information from previous\ninteractions.\n• Agent1 must answer questions only about the products sold by Contoso.",
    "incorrectExplanations": {
      "A": "Azure Document Intelligence in Foundry Tools\nUsed for extracting structured data from documents, not for improving reading accessibility.",
      "B": "Azure Language in Foundry Tools\nProvides NLP capabilities like sentiment analysis and entity recognition, but does not enhance reading\nexperience.",
      "D": "Azure Translator in Foundry Tools\nUsed for language translation, not for improving comprehension or accessibility for users with learning\ndifferences.\n\nCase St udy\nOverview\nCompany Information\nContoso, Ltd is a multinational retail company that builds, deploys, and manages generative AI and agent -\nbased solutions by using Microsoft Foundry.\nExisting Environment\nIdentity Environment\n• Contoso uses Microsoft Entra ID for identity management, authentication, and authorization capabilities\nthat enable agents to access organizational resources and services.\n• Contoso recently formed a new AI engineering team named Agent1Dev Team to optimize and maintain\nexisting AI solutions.\n\n• The team collaborates with solution architects, DevOps engineers, and security engineers to design,\nimplement. monitor, and secure AI applications.\n• Contoso also has a team named Agent1Test Team that is responsible for validating AI solutions before the\nsolution deployments.\nGenerative Environment\nContoso has a Microsoft Foundry deployment that contains two projects named Project1 and Project2.\nProject1\n• Project1 contains a customer support agent named Agent1 that assists customers with product inquiries\nand troubleshooting requests.\n• Agent1 has the following configurations:\no Agent1 uses a base model deployment.\no A safety evaluation pipeline is NOT enabled.\no Tool invocation approval workflows are NOT enabled. Conversation memory constraints are NOT\nconfigured.\no Agent1 interacts with customers by using digital support channels and answers general questions\nabout Contoso products.\n• Project1 is deployed to an Azure region located in the European Union (EU).\n• Agent1Dev Team will use Project1 to optimize and maintain Agent1.\nProject2\n• Project2 contains a deployed video generation model. The marketing department at Contoso has access\nto Project2 and plans to use the model to develop a video creation solution.\n• Development of the solution is incomplete.\n\nData Environment\n• Contoso stores product -related information in Azure resources that support AI applications.\n• The Azure environment contains an Azure Blob Storage account named storage1 that stores product\ndetail sheets for all the Contoso products.\n• The product sheets include specifications, feature descriptions, and product support information that\nAgent1 can use to answer customer questions. The product sheets are stored in the PDF format.\n\nProblem Statements\nContoso identifies the following issues:\n• Agent1 has only general knowledge of the Contoso products.\n• A recent chat interaction with Agent1 was analyzed for sentiment. The results of the analysis have NOT\nbeen processed yet.\n• Agent1 does NOT use the detailed product information in the product sheets stored in storage1 when\nresponding to customer questions.\n• The finance department at Contoso reports that vendor invoices must be reviewed manually to ensure\nthat the invoices match the terms defined in the vendor contracts. The invoices contain tables, logos, and\nvaried layouts that make the documents difficult t o process consistently.\n\nRequirements\nPlanned Changes\nContoso plans to implement the following changes:\n• Implement a solution for Project1 that analyzes the vendor invoices by evaluating both the visual layout\nand the textual content of the invoices, so that the invoice details can be verified against the vendor\ncontract terms.\n• Update the base model deployment used by Agent1 and standardize the model version to ensure\ncontinuity and consistent responses.\n• Enable Agent1 to retrieve and use the detailed product information from the product sheets stored in\nstorage1. Implement an indexing solution for the product sheets that Agent1 can use to answer customer\nquestions.\n• Complete the development of the video creation solution.\nTechnical Requirements\nContoso identifies the following technical requirements:\n• The model deployment used by Agent1 must support scalable, high -throughput generative AI workloads\nand dynamically scale to handle variable customer support traffic, without requiring reserved throughput\ncapacity. The product sheets must be processed by us ing an indexing pipeline that enables semantic and\nvector search, so that Agent1 can retrieve the relevant product information.\n• Responses generated by using the product sheet information must be relevant, complete, and accurate.\nAgent1 must be able to use the product sheets to answer natural language questions about product\ndetails. The model version used by Agent1 must remain cons istent to ensure stable responses.\n• The data processed by the model must remain within the EU.\n\nSecurity and Compliance Requirements\nContoso identifies the following security and compliance requirements:\n• API keys must NOT be used to access Foundry -deployed models.\n• Access to the Azure resources must follow the principle of least privilege.\n• The developers at Contoso must authenticate to Microsoft Foundry resources by using Microsoft Entra\nauthentication.\n• Access to Project1 must be assigned to the members of Agent1Dev Team by using a security group\nnamed SC_Agent1_Dev.\n• Access to Project1 must be assigned to the members of Agent1Test Team by using a security group\nnamed SC_Agent1_Test.\n• Agent1 must never reveal customer information, even if a document that contains customer data is\nadded erroneously to the product sheet repository in storage1.\n• The product sheets might contain images that include embedded text. Agent1 must be protected from\nmalicious instructions potentially hidden within the images.\nBusiness Requirements\nContoso identifies the following business requirements:\n• Users that interact with Agent1 must have a personalized experience in future interactions, including the\nability for Agent1 to retain conversation context and recall relevant information from previous\ninteractions.\n• Agent1 must answer questions only about the products sold by Contoso."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests document processing concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Azure AI Immersive Reader",
    "topic": "Document Processing",
    "sourceQuestionNumber": 147,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 148,
    "type": "single",
    "question": "You need to configure the model deployment for Agent1 to meet the technical requirements. What\nshould you configure?",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "Deployment type: Standard\nThe technical requirements specify  Scalable, high -throughput generative AI workloads , Dynamic scaling  for\nvariable customer support traffic . No reserved throughput capacity  and Data must remain within the EU .\nA Standard  deployment is the correct choice because it provides serverless, pay -as-you-go inference ,\nautomatically scales with demand, and is deployed within the selected Azure region (EU in this case). It does\nnot require provisioning throughput in advance.\nGlobal Standard  and Global Provisioned  can route requests outside the deployment region, which conflicts\nwith the requirement that data processed by the model must remain within the EU .\nVersion update policy: Opt out of automatic model version upgrades\nThe requirements state that  the model version must be standardized , the model version must remain\nconsistent  and responses must be stable and predictable .\nOpting out of automatic model version upgrades ensures that Microsoft does not automatically switch the\ndeployment to a newer model version, preserving consistent behavior until Contoso explicitly chooses to\nupgrade.",
    "explanation": "Correct Answers:\nDeployment type: Standard\nThe technical requirements specify  Scalable, high -throughput generative AI workloads , Dynamic scaling  for\nvariable customer support traffic . No reserved throughput capacity  and Data must remain within the EU .\nA Standard  deployment is the correct choice because it provides serverless, pay -as-you-go inference ,\nautomatically scales with demand, and is deployed within the selected Azure region (EU in this case). It does\nnot require provisioning throughput in advance.\nGlobal Standard  and Global Provisioned  can route requests outside the deployment region, which conflicts\nwith the requirement that data processed by the model must remain within the EU .\nVersion update policy: Opt out of automatic model version upgrades\nThe requirements state that  the model version must be standardized , the model version must remain\nconsistent  and responses must be stable and predictable .\nOpting out of automatic model version upgrades ensures that Microsoft does not automatically switch the\ndeployment to a newer model version, preserving consistent behavior until Contoso explicitly chooses to\nupgrade.\n\nIncorrect Answers:\nGlobal Standard\nAlthough it provides dynamic scaling, it may process requests outside the EU, violating the data residency\nrequirement.\nGlobal Provisioned\nRequires reserved throughput capacity and may process requests globally, violating both the scalability and\nEU data residency requirements.\nOnce the current version expires\nThis allows automatic version changes when the deployed version reaches end of life, which does not\nguarantee long -term consistency.\nUpgrade once a new default version becomes available\n\nThis automatically upgrades the deployment whenever Microsoft publishes a new default version, potentially\nchanging model behavior and violating the requirement for consistent responses.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q148-p157-08d859f2.png"
    ],
    "answerImages": [
      "assets/questions/q148-p158-ee6dcf66.png"
    ],
    "concept": "This question tests model deployment concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "eployment type: Standard",
    "topic": "Model Deployment",
    "sourceQuestionNumber": 148,
    "needsReview": true,
    "sourceMaterial": "You need to configure the model deployment for Agent1 to meet the technical requirements. What\nshould you configure?"
  },
  {
    "id": 149,
    "type": "single",
    "question": "You need to configure Agent1 to meet the security and compliance requirements.\nWhat should you use?",
    "options": [
      {
        "id": "A",
        "text": "self-harm content filtering"
      },
      {
        "id": "B",
        "text": "prompt shields"
      },
      {
        "id": "C",
        "text": "Personally identifiable information (PII) Detection"
      },
      {
        "id": "D",
        "text": "violence content filtering"
      }
    ],
    "correctAnswer": [
      "B"
    ],
    "sourceAnswer": "B. Prompt shields",
    "explanation": "Correct Answer:\nB. Prompt shields\nOne of the security and compliance requirements states that the product sheets might contain images with\nembedded text , and Agent1 must be protected from malicious instructions hidden within those images .\nThis is a classic indirect prompt injection  scenario. When images are processed through OCR, hidden\ninstructions can become part of the prompt sent to the language model. Prompt Shields for documents  are\nspecifically designed to detect and mitigate these embedded instructions before they influence the model.\nTherefore, Prompt Shields  are the correct solution.\n\nIncorrect Answers:\nA. Self -harm content filtering\nThis filters self -harm-related content and does not protect against hidden prompt injection attacks.\nC. Personally Identifiable Information (PII) Detection\nPII Detection identifies and redacts sensitive personal information, but it does not prevent malicious\ninstructions embedded in documents or images from influencing the model.\nD. Violence content filtering\nThis filters violent content and is unrelated to protecting the model from prompt injection attacks.",
    "incorrectExplanations": {
      "A": "Self -harm content filtering\nThis filters self -harm-related content and does not protect against hidden prompt injection attacks.",
      "C": "Personally Identifiable Information (PII) Detection\nPII Detection identifies and redacts sensitive personal information, but it does not prevent malicious\ninstructions embedded in documents or images from influencing the model.",
      "D": "Violence content filtering\nThis filters violent content and is unrelated to protecting the model from prompt injection attacks."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests foundry agent service concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Prompt shields",
    "topic": "Foundry Agent Service",
    "sourceQuestionNumber": 149,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 150,
    "type": "single",
    "question": "You need to recommend a solution to assess the responses generated by Agent1 when the agent uses\nthe product information stored in storage1. The solution must meet the technical requirements.\nWhat should you include in the recommendation?",
    "options": [
      {
        "id": "A",
        "text": "a Retrieval Augmented Generation (RAG) evaluator"
      },
      {
        "id": "B",
        "text": "a custom guardrail"
      },
      {
        "id": "C",
        "text": "model fine -tuning"
      },
      {
        "id": "D",
        "text": "a groundedness evaluator"
      }
    ],
    "correctAnswer": [
      "A"
    ],
    "sourceAnswer": "A. A Retrieval Augmented Generation (RAG) evaluator",
    "explanation": "Correct Answer:\nA. A Retrieval Augmented Generation (RAG) evaluator\nThe scenario requires assessing the quality of Agent1's responses after it retrieves information from the\nproduct sheets stored in storage1 .\nThe technical requirements specify that the responses must be  relevant , complete  and accurate\nA RAG evaluator  is designed specifically to evaluate the overall performance of a Retrieval -Augmented\nGeneration pipeline. It assesses both the retrieval  and generation  stages using metrics such as relevance,\ngroundedness, completeness, and other quality measures.\nSince Contoso is implementing a RAG solution over indexed product sheets and wants to assess the\nresponses against the technical requirements, a RAG evaluator  is the most appropriate recommendation.\n\nIncorrect Answers:\nB. A custom guardrail\nGuardrails enforce safety and policy constraints, such as blocking unsafe outputs or restricting topics. They\ndo not evaluate the quality of RAG -generated responses.\nC. Model fine -tuning\nFine-tuning changes the behavior of the model but does not provide a mechanism to evaluate response\nquality.\nD. A groundedness evaluator\nA groundedness evaluator measures whether a response is supported by the retrieved documents. While\ngroundedness is an important metric within a RAG system, it evaluates only one aspect of response quality.\nThe requirements also call for responses to be relevant  and complete , making a RAG evaluator  the better\nchoice because it evaluates the overall RAG pipelin",
    "incorrectExplanations": {
      "B": "A custom guardrail\nGuardrails enforce safety and policy constraints, such as blocking unsafe outputs or restricting topics. They\ndo not evaluate the quality of RAG -generated responses.",
      "C": "Model fine -tuning\nFine-tuning changes the behavior of the model but does not provide a mechanism to evaluate response\nquality.",
      "D": "A groundedness evaluator\nA groundedness evaluator measures whether a response is supported by the retrieved documents. While\ngroundedness is an important metric within a RAG system, it evaluates only one aspect of response quality.\nThe requirements also call for responses to be relevant  and complete , making a RAG evaluator  the better\nchoice because it evaluates the overall RAG pipelin"
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "A Retrieval Augmented Generation (RAG) evaluator",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 150,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 151,
    "type": "single",
    "question": "You need to configure Agent1 to answer customer questions about only the Contoso products. The\nsolution must meet the business requirements.\nWhat should you do?",
    "options": [
      {
        "id": "A",
        "text": "Modify the system message instructions."
      },
      {
        "id": "B",
        "text": "Add few -shot examples."
      },
      {
        "id": "C",
        "text": "Apply top -p sampling."
      },
      {
        "id": "D",
        "text": "Increase the value of the temperature parameter."
      }
    ],
    "correctAnswer": [
      "A"
    ],
    "sourceAnswer": "A. Modify the system message instructions.",
    "explanation": "Correct Answer:\nA. Modify the system message instructions.\n\nOne of the business requirements states that Agent1 must answer questions only about the products sold\nby Contoso .\nThe system message  defines the agent's behavior, scope, and constraints. By updating the system\ninstructions, you can explicitly instruct Agent1 to  answer only questions related to Contoso products , use the\nproduct information retrieved from the indexed product sheets  and p olitely decline questions that are outside\nthe scope of Contoso products.\nThis is the recommended approach for constraining an agent's behavior and ensuring it remains focused on\na specific domain.\n\nIncorrect Answers:\nB. Add few -shot examples.\nFew-shot examples help guide the model by providing sample interactions, but they do not enforce strict\nbehavioral boundaries. The model may still answer questions outside the intended scope.\nC. Apply top -p sampling.\nTop-p sampling controls the diversity of generated text. It has no effect on restricting the topics the agent is\nallowed to answer.\nD. Increase the value of the temperature parameter.\nIncreasing the temperature makes responses more creative and less deterministic. It does not limit the agent\nto answering only questions about Contoso products.",
    "incorrectExplanations": {
      "B": "Add few -shot examples.\nFew-shot examples help guide the model by providing sample interactions, but they do not enforce strict\nbehavioral boundaries. The model may still answer questions outside the intended scope.",
      "C": "Apply top -p sampling.\nTop-p sampling controls the diversity of generated text. It has no effect on restricting the topics the agent is\nallowed to answer.",
      "D": "Increase the value of the temperature parameter.\nIncreasing the temperature makes responses more creative and less deterministic. It does not limit the agent\nto answering only questions about Contoso products."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests foundry agent service concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Modify the system message instructions.",
    "topic": "Foundry Agent Service",
    "sourceQuestionNumber": 151,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 152,
    "type": "single",
    "question": "You need to recommend an invoice review solution that resolves the issue reported by the finance\ndepartment.\nWhat should you include in the recommendation?",
    "options": [
      {
        "id": "A",
        "text": "chat completions"
      },
      {
        "id": "B",
        "text": "Azure Document Intelligence in Foundry Tools"
      },
      {
        "id": "C",
        "text": "Azure Content Understanding in Foundry Tools"
      },
      {
        "id": "D",
        "text": "Image Analysis"
      }
    ],
    "correctAnswer": [
      "C"
    ],
    "sourceAnswer": "C. Azure Content Understanding in Foundry Tools",
    "explanation": "Correct Answer:\nC. Azure Content Understanding in Foundry Tools\nThe finance department needs a solution that can  analyze vendor invoices with varied layouts , evaluate both\nthe visual layout  and the textual content , process tables , logos , and other document elements  and v erify\ninvoice details against vendor contract terms.\nAzure Content Understanding in Foundry Tools  is specifically designed for this type of intelligent document\nprocessing. It combines OCR, layout analysis, and AI -powered field extraction to understand complex\nbusiness documents across varying templates. It can extract structured information from invo ices while\npreserving the document structure, making it ideal for downstream verification against vendor contracts.\n\nIncorrect Answers:\nA. Chat completions\nChat completions generate natural language responses but do not perform document analysis, OCR, or\nstructured extraction from invoices.\nB. Azure Document Intelligence in Foundry Tools\nAzure Document Intelligence performs OCR and document analysis. However, Azure Content Understanding\nis the newer Foundry capability that builds on these capabilities and is specifically intended for extracting\nstructured business information across varying document layouts with minimal custom development. It is the\nrecommended choice in Microsoft Foundr y.\nD. Image Analysis\nImage Analysis can detect objects, text, and visual features within images but is not designed to extract\nstructured business fields from complex invoices or analyze document layouts for invoice processing.",
    "incorrectExplanations": {
      "A": "Chat completions\nChat completions generate natural language responses but do not perform document analysis, OCR, or\nstructured extraction from invoices.",
      "B": "Azure Document Intelligence in Foundry Tools\nAzure Document Intelligence performs OCR and document analysis. However, Azure Content Understanding\nis the newer Foundry capability that builds on these capabilities and is specifically intended for extracting\nstructured business information across varying document layouts with minimal custom development. It is the\nrecommended choice in Microsoft Foundr y.",
      "D": "Image Analysis\nImage Analysis can detect objects, text, and visual features within images but is not designed to extract\nstructured business fields from complex invoices or analyze document layouts for invoice processing."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests speech concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Azure Content Understanding in Foundry Tools",
    "topic": "Speech",
    "sourceQuestionNumber": 152,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 153,
    "type": "multiple",
    "question": "You need to configure an indexing pipeline for Agent1 to retrieve the relevant product information in\nstorage1. The solution must meet the technical requirement.\nWhich two built -in skills should you use?",
    "options": [
      {
        "id": "A",
        "text": "Azure OpenAI Embedding"
      },
      {
        "id": "B",
        "text": "Entity Recognition"
      },
      {
        "id": "C",
        "text": "Text Split"
      },
      {
        "id": "D",
        "text": "Merge"
      },
      {
        "id": "E",
        "text": "Language Detection"
      },
      {
        "id": "F",
        "text": "key phrase extraction"
      }
    ],
    "correctAnswer": [
      "A",
      "C"
    ],
    "sourceAnswer": "A. Azure OpenAI Embedding\nC. Text Split",
    "explanation": "Correct Answers:\nA. Azure OpenAI Embedding\nThe technical requirements specify that the indexing pipeline must support semantic search and vector\nsearch . The Azure OpenAI Embedding  skill generates vector embeddings for the product sheet content.\nThese embeddings are stored in the Azure AI Search index and enable semantic similarity matching, allowing\nAgent1 to retrieve the most relevant product information for natural language queri es.\nC. Text Split\nThe product sheets are stored as PDF documents , which can be lengthy. The Text Split  skill divides the\nextracted text into smaller chunks before embeddings are generated. Chunking improves retrieval quality\nbecause embeddings are created for manageable sections of text rather than entire documents, resulting in\nmore accurate semantic and vector search.\n\nIncorrect Answers:\nB. Entity Recognition\nEntity Recognition extracts named entities such as people, organizations, and locations. It does not support\nsemantic or vector search.\nD. Merge\nThe Merge skill combines text from multiple sources, such as OCR results and extracted document text. It is\nnot required to build a semantic and vector search pipeline.\nE. Language Detection\nLanguage Detection identifies the language of the document but does not contribute to semantic indexing or\nvector search.\nF . Key Phrase Extraction\nKey Phrase Extraction identifies important phrases within documents. While useful for text analytics, it is not\nrequired for implementing semantic and vector search.",
    "incorrectExplanations": {
      "B": "Entity Recognition\nEntity Recognition extracts named entities such as people, organizations, and locations. It does not support\nsemantic or vector search.",
      "D": "Merge\nThe Merge skill combines text from multiple sources, such as OCR results and extracted document text. It is\nnot required to build a semantic and vector search pipeline.",
      "E": "Language Detection\nLanguage Detection identifies the language of the document but does not contribute to semantic indexing or\nvector search.\nF . Key Phrase Extraction\nKey Phrase Extraction identifies important phrases within documents. While useful for text analytics, it is not\nrequired for implementing semantic and vector search."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Azure OpenAI Embedding",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 153,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 154,
    "type": "single",
    "question": "You need to recommend a solution to support the planned changes and technical requirements for\nAgent1 to use the product information stored in storage1.\nWhat should you include in the recommendation?",
    "options": [
      {
        "id": "A",
        "text": "Azure Translator in Foundry Tools"
      },
      {
        "id": "B",
        "text": "Grounding with Bing Search"
      },
      {
        "id": "C",
        "text": "Azure AI Search"
      },
      {
        "id": "D",
        "text": "Azure Document intelligence in Foundry Tools"
      }
    ],
    "correctAnswer": [
      "C"
    ],
    "sourceAnswer": "C. Azure AI Search",
    "explanation": "Correct Answer:\nC. Azure AI Search\nThe planned changes require Agent1 to  retrieve product information stored in Azure Blob Storage\n(storage1) , answer natural language questions  about Contoso products , use an indexing pipeline  that\nsupports semantic search and vector search  and g enerate relevant, complete, and accurate  responses.\nAzure AI Search  is the core service used to implement a Retrieval -Augmented Generation (RAG) solution. It\nindexes the product sheets, supports both semantic search  and vector search , and retrieves the most\nrelevant content for Agent1 to ground its responses.\nThis directly satisfies both the planned changes and the technical requirements.\n\nIncorrect Answers:\nA. Azure Translator in Foundry Tools\nAzure Translator is used for language translation. The scenario does not require translating the product\nsheets or customer questions.\nB. Grounding with Bing Search\n\nGrounding with Bing Search retrieves public web content . The requirement is to retrieve information from\ninternal product sheets stored in Azure Blob Storage , not from the internet.\nD. Azure Document Intelligence in Foundry Tools\nAzure Document Intelligence extracts text and structure from documents, but it is not the retrieval engine\nused for RAG. While it can help process PDFs, the technical requirements specifically call for an indexing\nsolution that supports semantic and vector search , which is provided by Azure AI Search .",
    "incorrectExplanations": {
      "A": "Azure Translator in Foundry Tools\nAzure Translator is used for language translation. The scenario does not require translating the product\nsheets or customer questions.",
      "B": "Grounding with Bing Search\n\nGrounding with Bing Search retrieves public web content . The requirement is to retrieve information from\ninternal product sheets stored in Azure Blob Storage , not from the internet.",
      "D": "Azure Document Intelligence in Foundry Tools\nAzure Document Intelligence extracts text and structure from documents, but it is not the retrieval engine\nused for RAG. While it can help process PDFs, the technical requirements specifically call for an indexing\nsolution that supports semantic and vector search , which is provided by Azure AI Search ."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests azure ai search / rag concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "Azure AI Search",
    "topic": "Azure AI Search / RAG",
    "sourceQuestionNumber": 154,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 155,
    "type": "single",
    "question": "You  need to ensure  that the marketing  department  can generate  videos  by using  the model\ndeployed  to Project2.\nHow should  you complete  the Python  code?",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "create\nTo generate a new video using the deployed model, you must call the create method. This initializes the video\ngeneration job using the provided prompt and model deployment.\nRetrieve\nVideo generation is an asynchronous operation. The retrieve method is used to check the status of the video\ngeneration job until it is completed, failed, or canceled.",
    "explanation": "Correct Answer:\ncreate\nTo generate a new video using the deployed model, you must call the create method. This initializes the video\ngeneration job using the provided prompt and model deployment.\nRetrieve\nVideo generation is an asynchronous operation. The retrieve method is used to check the status of the video\ngeneration job until it is completed, failed, or canceled.\n\nIncorrect answers:\ndownload_content\nUsed to download generated video content after completion, not to create or monitor the job.\nlist\nUsed to list existing video jobs, not to create or track a specific one.\nretrieve (first dropdown )\nRetrieve cannot be used to initiate video generation.\ncreate (second dropdown )\nCreate is only used to start the job, not to poll or check status.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q155-p164-884e18ce.jpg"
    ],
    "answerImages": [
      "assets/questions/q155-p165-ba80d4a0.jpg"
    ],
    "concept": "This question tests model deployment concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "create",
    "topic": "Model Deployment",
    "sourceQuestionNumber": 155,
    "needsReview": true,
    "sourceMaterial": "You  need to ensure  that the marketing  department  can generate  videos  by using  the model\ndeployed  to Project2.\nHow should  you complete  the Python  code?"
  },
  {
    "id": 156,
    "type": "single",
    "question": "You need to configure personalized user interactions for Agent1. The solution must meet the business\nrequirements.\nWhat should you include in the solution?",
    "options": [
      {
        "id": "A",
        "text": "knowledge"
      },
      {
        "id": "B",
        "text": "memory"
      },
      {
        "id": "C",
        "text": "guardrails"
      },
      {
        "id": "D",
        "text": "tools"
      }
    ],
    "correctAnswer": [
      "B"
    ],
    "sourceAnswer": "B. memory",
    "explanation": "B. memory\n\nExplanation:\nCorrect Answer:\nB. memory\nMemory enables the agent to retain conversation context and recall relevant information from previous\ninteractions. This directly satisfies the business requirement of providing personalized user experiences\nacross sessions. By using memory, Agent1 can rem ember past preferences, previous queries, and context,\nallowing more relevant and tailored responses.\n\nIncorrect answers:\nA. knowledge\nKnowledge refers to external data sources (like product documents), not personalization or remembering\nuser interactions.\nC. guardrails\nGuardrails are used for safety and policy enforcement, not for personalization.\nD. tools\nTools enable the agent to perform actions or call external services, but do not provide conversational\nmemory or personalization.",
    "incorrectExplanations": {
      "A": "knowledge\nKnowledge refers to external data sources (like product documents), not personalization or remembering\nuser interactions.",
      "C": "guardrails\nGuardrails are used for safety and policy enforcement, not for personalization.",
      "D": "tools\nTools enable the agent to perform actions or call external services, but do not provide conversational\nmemory or personalization."
    },
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [],
    "answerImages": [],
    "concept": "This question tests foundry agent service concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "memory",
    "topic": "Foundry Agent Service",
    "sourceQuestionNumber": 156,
    "needsReview": false,
    "sourceMaterial": ""
  },
  {
    "id": 157,
    "type": "single",
    "question": "You need to ensure that Agent1Dev Team can access Agent1. The solution must meet the security and\ncompliance requirements.\nHow should you complete the Python code?",
    "options": [],
    "correctAnswer": [],
    "sourceAnswer": "credential = DefaultAzureCredential()\nThe security requirement explicitly states that API keys must NOT be used and authentication must be done\nusing Microsoft Entra ID. DefaultAzureCredential() enables secure, identity -based authentication using Entra\nID and follows best practices like manage d identities, thereby meeting compliance requirements.\nagent = project_client.agents.get(agent_name=myAgent)\nTo allow Agent1Dev Team to access Agent1, the code must retrieve the existing agent. The get method is\nused to fetch the agent by name, ensuring proper access without modifying or creating new versions.",
    "explanation": "Correct Answer:\ncredential = DefaultAzureCredential()\nThe security requirement explicitly states that API keys must NOT be used and authentication must be done\nusing Microsoft Entra ID. DefaultAzureCredential() enables secure, identity -based authentication using Entra\nID and follows best practices like manage d identities, thereby meeting compliance requirements.\nagent = project_client.agents.get(agent_name=myAgent)\nTo allow Agent1Dev Team to access Agent1, the code must retrieve the existing agent. The get method is\nused to fetch the agent by name, ensuring proper access without modifying or creating new versions.\n\nIncorrect answers:\nAzureKeyCredential()\nUses API keys, which violates the requirement that API keys must NOT be used.\nNone\nNo authentication mechanism is provided, which is insecure and does not meet requirements.\ncreate_version\nCreates a new version of the agent, which is not required for accessing an existing agent.\nget_version\nRetrieves a specific version, not the agent itself, and is unnecessary for basic access.",
    "incorrectExplanations": {},
    "matchingPairs": [],
    "dragCandidates": [],
    "sourceImages": [
      "assets/questions/q157-p167-32272b35.jpg"
    ],
    "answerImages": [
      "assets/questions/q157-p167-47ead3ff.jpg"
    ],
    "concept": "This question tests foundry agent service concepts and selecting the Azure capability that satisfies the stated constraints.",
    "memoryCue": "credential = DefaultAzureCredential()",
    "topic": "Foundry Agent Service",
    "sourceQuestionNumber": 157,
    "needsReview": true,
    "sourceMaterial": "You need to ensure that Agent1Dev Team can access Agent1. The solution must meet the security and\ncompliance requirements.\nHow should you complete the Python code?"
  }
];
