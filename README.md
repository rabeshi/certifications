# AI-103 Quiz Lab

Static, dependency-free study app built from the bundled `Final Updated.pdf` (226 questions). Open `index.html` directly or deploy the folder to Vercel; no backend is required. Progress is stored in the browser (`localStorage`).

## What's in it

- **Study guide** (`#/guide`): an overview plus 11 topic modules (Foundry deployment, security, generative AI, agents, AI Search/RAG, document processing, vision, language, speech, content safety, evaluation). Each module has a flow diagram, a "service → use it for" table, key points, exam clue words, screenshots/exhibits from the bank and a button that practises exactly that module's questions.
- **Learning mode**: check each answer for instant right/wrong marking, the explanation, why the other options are wrong, and a link to the related study module.
- **Exam mode**: 20 / 50 / all questions, optional 60 / 100 / 120-minute limit, question map, flagging, and a results page with a per-topic breakdown and review of missed answers.
- **Score bar**: sticky under the header in both modes. Learning shows correct / incorrect / accuracy / streak; Exam shows answered / flagged / timer and a live score that is hidden by default (one click to show).

## Files

| Path | Purpose |
| --- | --- |
| `data/questions.js` | Generated question bank (do not edit by hand) |
| `data/image-options.json` | Hand-transcribed answer areas (drop-downs, Yes/No) for image-based questions |
| `data/drag-overrides.json` | Hand-transcribed drag-and-drop targets and values (including ordering questions) |
| `data/hints.js` | One study hint per question for Learning mode |
| `data/question-modules.json` | Hand-reviewed study-guide module for every question |
| `data/tutorial.js` | Study guide content |
| `js/grading.js` | Answer grading, shared by the app and the validator |
| `js/app.js` | The app |

## Regenerating and validating

```sh
python scripts/extract_images.py   # optional: re-extract exhibits from the PDF
python scripts/import_pdf.py       # rebuild data/questions.js
node scripts/validate.js           # checks every question is answerable and the guide is consistent
```

Requires Python with `pypdf` and `Pillow`. `Final Updated.pdf` adds 51 questions (166–185, 195 and 197–226) and moves the Contoso case study to 186–196 (it previously held 166–175). Saved progress from earlier numberings is migrated automatically when the app loads.
