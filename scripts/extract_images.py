"""Extract original PDF figures and produce a question-to-image manifest."""
import hashlib, io, json, re
from collections import Counter
from pathlib import Path
from PIL import Image
from pypdf import PdfReader

root=Path(__file__).resolve().parents[1]; reader=PdfReader(root/'Updated AI-103.pdf')
pages=[]; frequency=Counter()
for index,page in enumerate(reader.pages,1):
    found=[]
    for item in page.images:
        digest=hashlib.sha1(item.data).hexdigest(); frequency[digest]+=1
        try: size=Image.open(io.BytesIO(item.data)).size
        except Exception: size=(0,0)
        found.append((digest,item,size))
    pages.append((index,page.extract_text() or '',found))

out=root/'assets'/'questions'; out.mkdir(parents=True,exist_ok=True); manifest={}; current=None
section='sourceImages'
for page_no,text,images in pages:
    page=reader.pages[page_no-1]; events=[]; text_lines={}
    def text_event(text,cm,tm,*_):
        y=tm[4]*cm[1]+tm[5]*cm[3]+cm[5]
        if text.strip(): text_lines.setdefault(round(y,1),[]).append((tm[4],text))
    def image_event(op,args,cm,tm):
        if op!=b'Do': return
        try: item=page.images[args[0]]
        except (KeyError,TypeError): return
        digest=hashlib.sha1(item.data).hexdigest()
        image=Image.open(io.BytesIO(item.data))
        if frequency[digest]>3 or image.width<180 or image.height<55: return
        events.append((cm[5]+abs(cm[3]),'image',(digest,image)))
    page.extract_text(visitor_text=text_event,visitor_operand_before=image_event)
    for y,chunks in text_lines.items():
        line=''.join(t for _,t in sorted(chunks,key=lambda chunk:chunk[0])).strip()
        match=re.match(r'^Q\s*(\d+)\s*\.',line)
        if match: events.append((y,'question',int(match[1])))
        elif re.match(r'^(?:Answer\s*:|Correct Answers?\s*:)',line,re.I):
            events.append((y,'answer',None))
    for _,kind,value in sorted(events,key=lambda event:-event[0]):
        if kind=='question': current,section=value,'sourceImages'
        elif kind=='answer': section='answerImages'
        elif current:
            digest,image=value
            name=f'q{current}-p{page_no}-{digest[:8]}.png'
            image.save(out/name,'PNG')
            manifest.setdefault(str(current),{'sourceImages':[],'answerImages':[]})[section].append(f'assets/questions/{name}')
(root/'data'/'images.json').write_text(json.dumps(manifest,indent=2),encoding='utf-8')
print(json.dumps({'questionsWithImages':len(manifest),'images':sum(len(v['sourceImages'])+len(v['answerImages']) for v in manifest.values())},indent=2))
