"""Extract original PDF figures and produce a question-to-image manifest."""
import hashlib, io, json, re
from collections import Counter
from pathlib import Path
from PIL import Image
from pypdf import PdfReader

root=Path(__file__).resolve().parents[1]; reader=PdfReader(root/'AI-103.pdf')
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
for page_no,text,images in pages:
    matches=re.findall(r'(?m)^Q(\d+)\.',text)
    if matches: current=int(matches[-1])
    if not current: continue
    for digest,item,size in images:
        # Repeated branding/background assets are not question figures.
        if frequency[digest]>3 or size[0]<180 or size[1]<55: continue
        ext=Path(item.name).suffix.lower().replace('.jp2','.png') or '.png'
        name=f'q{current}-p{page_no}-{digest[:8]}{ext}'; target=out/name
        image=Image.open(io.BytesIO(item.data)); image.save(target,'PNG')
        manifest.setdefault(str(current),[]).append(f'assets/questions/{name}')
(root/'data'/'images.json').write_text(json.dumps(manifest,indent=2),encoding='utf-8')
print(json.dumps({'questionsWithImages':len(manifest),'images':sum(map(len,manifest.values()))},indent=2))
