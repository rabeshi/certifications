"""Extract the authoritative AI-103 PDF into a static JavaScript question bank."""
import json, re
from pathlib import Path
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
HEADER = "AI-103: Azure AI Apps and Agents Developer Associate - Practice Questions and Answers"

def clean(text):
    text = re.sub(r"AI-103:\s*Azure AI Apps and Agents Developer Associate\s*-\s*Practice Questions and Answers", "", text)
    text = text.replace("Cloud and AI Hub", "").replace("\u00a0", " ").replace("\uf0b7", "•")
    return re.sub(r"\n{3,}", "\n\n", re.sub(r"[ \t]+\n", "\n", text)).strip()

# Ordered: the first module whose keywords appear in the question stem wins.
MODULES = [
    ("speech", "Speech", ["speech", "transcri", "audio", "voice", "ssml", "pronunciation", "spoken"]),
    ("documents", "Document Intelligence & Content Understanding", ["content understanding", "document intelligence", "invoice", "receipt", "prebuilt-", "analyzer", "form recognizer", "scanned"]),
    ("vision", "Vision & Custom Vision", ["custom vision", "azure vision", "computer vision", "image analysis", "object detection", "logo", "brands", "faulty components", "classify images", "detect objects", "images"]),
    ("language", "Language & Translator", ["language in foundry", "sentiment", "entity", "entities", "pii", "key phrase", "translator", "translat", "conversational language", "question answering", "text analytics", "redact"]),
    ("safety", "Content Safety & Responsible AI", ["content safety", "prompt shield", "jailbreak", "harmful", "blocklist", "guardrail", "spotlighting", "protected material", "self-harm", "moderat"]),
    ("evaluation", "Evaluation & Observability", ["evaluat", "tracing", "trace", "telemetry", "application insights", "observab", "monitor", "opentelemetry", "span", "metric"]),
    ("search", "Azure AI Search & RAG", ["azure ai search", "search index", "indexer", "skillset", "knowledge store", "projection", "vector", "semantic rank", "hybrid search", "retrieval", "rag", "embedding", "query key", "knowledge source"]),
    ("security", "Security, Identity & CI/CD", ["entra", "rbac", "managed identity", "api key", "access key", "private endpoint", "credential", "key vault", "keyless", "least privilege", "github actions", "oidc", "passwordless", "customer-managed key", "network"]),
    ("genai", "Generative AI Models & Prompting", ["temperature", "top_p", "max_tokens", "fine-tun", "sora", "gpt-image", "dall-e", "image generation", "video generation", "generate images", "generate a video", "system message", "few-shot", "reasoning", "responses api", "prompt"]),
    ("agents", "Foundry Agent Service", ["agent", "tool", "workflow", "thread", "function calling", "mcp", "memory", "bing"]),
    ("foundry", "Plan & Deploy in Foundry", ["deploy", "quota", "provisioned", "throughput", "model catalog", "serverless", "container", "resource", "sku", "region", "model"]),
]

def module_for(text):
    low = text.lower()
    for key, name, words in MODULES:
        if any(w in low for w in words):
            return key, name
    return "foundry", "Plan & Deploy in Foundry"

def parse_options(stem):
    matches = list(re.finditer(r"(?m)^([A-H])\.\s+", stem))
    if len(matches) < 2: return stem.strip(), []
    opts=[]
    for i,m in enumerate(matches):
        end=matches[i+1].start() if i+1<len(matches) else len(stem)
        opts.append({"id":m.group(1),"text":clean(stem[m.end():end])})
    return stem[:matches[0].start()].strip(),opts

def answer_ids(answer, options):
    if not options: return []
    ids=[]
    for key in re.findall(r"(?m)(?:^|\n)\s*([A-H])(?:\.|,|\s|$)",answer):
        if key not in ids: ids.append(key)
    if not ids:
        ids=[o["id"] for o in options if o["text"].strip().lower() in answer.lower()]
    return ids

# Exhibits the position-based extractor files under the question although they show the completed answer.
ANSWER_IMAGE_FIXES = {127: ["assets/questions/q127-p132-b749788c.png"]}

def main():
    reader=PdfReader(ROOT/"Updated AI-103.pdf")
    image_manifest=json.loads((ROOT/"data"/"images.json").read_text(encoding="utf-8")) if (ROOT/"data"/"images.json").exists() else {}
    drag_candidates={
        6:["Code interpreter","Computer use","File search","Grounding with Bing Search","Microsoft Fabric"],
        16:["auto","required","response_format","tool_choice","tools","type"],
        26:["Groundedness evaluation metrics","Latency breakdown traces","Risk and safety metrics","Token usage analytics"],
        36:["Multi-file task in pro mode","Multi-file task in standard mode","Single-file task in pro mode","Single-file task in standard mode"],
        46:["Multi-file task in pro mode","Multi-file task in standard mode","Single-file task in pro mode","Single-file task in standard mode"],
        56:["Groundedness evaluation metrics","Latency breakdown traces","Risk and safety metrics","Token usage analytics"],
        66:["Relevance Evaluation","Completion token analytics","Groundedness evaluation","Prompt traces","Latency timeline"],
        76:["Code Interpreter","Computer Use","File Search","Grounding with Bing Search","Microsoft Fabric"],
        86:["Code Interpreter","Computer Use","File Search","Grounding with Bing Search","Microsoft Fabric"],
    }
    full="\n\n".join(clean(p.extract_text() or "") for p in reader.pages)
    starts=list(re.finditer(r"(?m)^Q\s*(\d+)\s*\.\s*",full)); questions=[]
    case_start=full.find('Case Study')
    case_question=next((m for m in starts if m.start()>case_start), None) if case_start>=0 else None
    case_context=clean(full[case_start:case_question.start()]) if case_question else ''
    overrides=json.loads((ROOT/'data'/'image-options.json').read_text(encoding='utf-8'))
    module_map={str(n):key for key,ids in json.loads((ROOT/'data'/'question-modules.json').read_text(encoding='utf-8')).items() if key!='_note' for n in ids}
    module_names={key:name for key,name,_ in MODULES}
    for idx,m in enumerate(starts):
        number=int(m.group(1)); end=starts[idx+1].start() if idx+1<len(starts) else len(full)
        if m.start()<case_start<end: end=case_start
        block=clean(full[m.end():end])
        parts=re.split(r"(?mi)^Answer(?:\s*:|\s*$)\s*",block,maxsplit=1); stem_raw=parts[0].strip(); ae=parts[1].strip() if len(parts)==2 else ""
        ap=re.split(r"(?mi)^Explanation\s*:?\s*",ae,maxsplit=1); answer=clean(ap[0]); explanation=clean(ap[1]) if len(ap)==2 else ""
        if len(parts)==1:
            direct=re.split(r"(?mi)^Correct Answers?\s*:?\s*",block,maxsplit=1)
            if len(direct)==2:
                stem_raw=direct[0].strip()
                direct_parts=re.split(r'(?mi)^Explanation\s*:?\s*',direct[1],maxsplit=1)
                answer=clean(re.split(r'(?mi)^Incorrect Answers?\s*:',direct_parts[0],maxsplit=1)[0])
                explanation=clean(direct_parts[1]) if len(direct_parts)>1 else answer
        if not answer and explanation:
            supplied=re.split(r"(?i)Incorrect Answers?:", explanation, maxsplit=1)[0]
            supplied=re.sub(r"(?i)^Correct Answers?\s*:?\s*", "", supplied).strip()
            answer=clean(supplied)
        if answer and not explanation:
            explanation=answer
        question,options=parse_options(stem_raw); correct=answer_ids(answer,options); low=stem_raw.lower()
        qtype="drag-drop" if any(x in low for x in ["drag","arrange","sequence"]) else "yes-no-matrix" if ("select yes" in low or "yes if" in low) else "code-completion" if ("complete the code" in low or "complete the script" in low) else "dropdown-hotspot" if ("answer area" in low or "hotspot" in low) else "multiple" if ("each correct" in low or len(correct)>1) else "single"
        incorrect={}; ip=re.split(r"(?i)Incorrect Answers?:",explanation,maxsplit=1)
        if len(ip)==2:
            hits=list(re.finditer(r"(?m)^([A-H])\.\s+",ip[1]))
            for i,h in enumerate(hits): incorrect[h.group(1)]=clean(ip[1][h.end():(hits[i+1].start() if i+1<len(hits) else len(ip[1]))])
        first=next((x.strip() for x in answer.splitlines() if x.strip()),"Review the source answer"); cue=re.sub(r"^(?:Correct Answers?:\s*)?[A-H][\.,:]?\s*","",first); words=cue.split(); cue=" ".join(words[:22])+("…" if len(words)>22 else "")
        needs=not answer or (bool(options) and not correct) or not options
        module,topic=(module_map[str(number)],module_names[module_map[str(number)]]) if str(number) in module_map else module_for(question)
        pairs=[]
        if qtype=="drag-drop":
            for line in answer.splitlines():
                hit=re.match(r'^([^:\n]{2,120}):\s*["“]?([^\n]{1,100}?)["”]?$',line.strip())
                if hit and not hit.group(1).lower().startswith(('correct answer','incorrect answer')):
                    pairs.append({"target":hit.group(1).strip(),"value":hit.group(2).strip()})
        images=image_manifest.get(str(number),{'sourceImages':[],'answerImages':[]})
        images={k:list(v) for k,v in images.items()}
        for leaked in ANSWER_IMAGE_FIXES.get(number,[]):
            if leaked in images['sourceImages']:
                images['sourceImages'].remove(leaked); images['answerImages'].append(leaked)
        if pairs: needs=False
        fields=overrides.get(str(number),[])
        if fields:
            qtype='yes-no-matrix' if all(f['choices']==['Yes','No'] for f in fields) else 'dropdown-hotspot'
            needs=False
        questions.append({"id":number,"type":qtype,"question":question,"options":options,"answerFields":fields,"correctAnswer":correct,"sourceAnswer":answer,"explanation":explanation,"incorrectExplanations":incorrect,"matchingPairs":pairs,"dragCandidates":drag_candidates.get(number,[]),"sourceImages":images.get('sourceImages',[]),"answerImages":images.get('answerImages',[]),"caseStudy":case_context if case_question and m.start()>=case_question.start() else '',"module":module,"memoryCue":cue,"topic":topic,"sourceQuestionNumber":number,"needsReview":needs,"sourceMaterial":stem_raw if needs else ""})
    out=ROOT/"data"/"questions.js"; out.write_text("window.AI103_QUESTIONS = "+json.dumps(questions,ensure_ascii=False,indent=2)+";\n",encoding="utf-8")
    print(json.dumps({"pages":len(reader.pages),"questions":len(questions),"first":questions[0]["id"],"last":questions[-1]["id"],"needsReview":sum(q["needsReview"] for q in questions)},indent=2))

if __name__=="__main__": main()
