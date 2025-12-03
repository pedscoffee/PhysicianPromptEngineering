# Prompt Library Expansion Ideas

This file contains 35 new prompt suggestions to expand the library to 50 total prompts. These prompts are specialty-agnostic and cover administrative, clinical, educational, and academic tasks.

## Administrative & Documentation

### 16. Letter of Medical Necessity Writer
**Description:** Generates a formal letter of medical necessity for insurance coverage of a medication, procedure, or device.
**Prompt:**
```text
Draft a Letter of Medical Necessity for [Insurance Company] regarding [Patient Name] (DOB: [Date]).
Item/Service Requested: [Medication/Procedure/Device]
Diagnosis: [Diagnosis]

Clinical Context:
[Paste relevant clinical history, failed prior therapies, and reason for current request]

Requirements:
- Professional, persuasive tone
- Explicitly state why standard alternatives are insufficient (if applicable)
- Cite relevant guidelines if known or general standard of care
- Include specific clinical metrics (e.g., A1c, BMI, severity scores) provided in the context

Output Format:
[Date]
[Insurance Company Name]
Re: Letter of Medical Necessity for [Patient Name]

To Whom It May Concern,
...
```

### 17. Prior Authorization Request Assistant
**Description:** Drafts the clinical narrative required for a prior authorization form.
**Prompt:**
```text
Generate the clinical narrative for a Prior Authorization request for [Medication/Service].

Patient Data:
[Paste brief history, diagnosis, and previous failed trials]

Rules:
1. Focus on meeting standard approval criteria (diagnosis confirmation, step therapy failure, contraindications to preferred agents).
2. Be concise and factual.
3. List dates of trial/failure for previous medications if available.

Example Output:
Patient has a confirmed diagnosis of [Diagnosis]. They have previously tried and failed:
1. [Drug A] (Trial dates): Failed due to [Reason]
2. [Drug B] (Trial dates): Failed due to [Reason]
The requested medication is medically necessary because...
```

### 18. Referral Letter Generator
**Description:** Creates a clear, concise referral letter to a specialist.
**Prompt:**
```text
Write a referral letter to [Specialty/Specialist Name] for [Patient Name].
Reason for Referral: [Chief Complaint/Question]

Clinical Details:
[Paste HPI, relevant labs, and current meds]

Rules:
1. State the specific clinical question or reason for referral in the first sentence.
2. Summarize relevant history and workup done so far.
3. Include current medications and allergies.
4. Keep it under 300 words.

Output Structure:
Dear Dr. [Name],
I am referring [Patient] for evaluation of [Problem].
Specific Question: [Question]
Background: ...
```

### 19. Discharge Summary Synthesizer
**Description:** Condenses a hospital course into a concise discharge summary.
**Prompt:**
```text
Synthesize the following hospital course notes into a Discharge Summary.

Input Notes:
[Paste daily progress notes or hospital course narrative]

Output Sections:
1. **Admission Diagnosis**
2. **Discharge Diagnosis**
3. **Hospital Course Summary** (Brief narrative of key events/interventions)
4. **Procedures Performed**
5. **Discharge Medications** (List changes specifically)
6. **Follow-up Plan**

Rules:
- Focus on key clinical events and decisions.
- Highlight medication changes (start/stop/adjust).
- Keep the narrative summary under 200 words.
```

### 20. Meeting Minutes Summarizer
**Description:** Summarizes transcript or notes from a departmental or committee meeting.
**Prompt:**
```text
Summarize these meeting notes into formal minutes.

Input:
[Paste rough notes or transcript]

Output Format:
**Meeting Title/Date**
**Attendees**
**Agenda Items Discussed**
1. [Item 1]: Key discussion points and decisions.
2. [Item 2]: ...
**Action Items** (Who, What, By When)
**Next Meeting**
```

### 21. Policy & Procedure Drafter
**Description:** Drafts a clinical policy or procedure document based on a rough description.
**Prompt:**
```text
Draft a formal Policy and Procedure document for: [Topic, e.g., "Management of Hypoglycemia in Clinic"].

Key Details to Include:
[List specific steps, roles, and thresholds]

Output Structure:
**Policy Title**
**Purpose**
**Scope** (Who this applies to)
**Definitions**
**Procedure** (Step-by-step instructions)
**References** (Placeholders)
```

### 22. Patient Complaint Response
**Description:** Drafts a professional, empathetic response to a patient complaint (for internal review or editing).
**Prompt:**
```text
Draft a response to this patient complaint.
Complaint: "[Paste complaint text]"
Facts of the case: "[Paste clinical context/facts]"

Rules:
1. Use an empathetic, professional, and non-defensive tone.
2. Acknowledge the patient's feelings.
3. Explain the medical reasoning or context clearly without jargon.
4. Offer a path forward or next steps.
5. Do NOT admit liability; focus on explanation and empathy.
```

### 23. Recommendation Letter Writer
**Description:** Drafts a letter of recommendation for a student or colleague.
**Prompt:**
```text
Draft a Letter of Recommendation for [Name] applying for [Position/Residency].
Relationship: [e.g., Preceptor for 4 weeks]
Key Strengths/Anecdotes:
- [Strength 1]
- [Strength 2]
- [Specific example/story]

Rules:
1. Professional, enthusiastic tone.
2. Highlight specific competencies (clinical skills, professionalism, teamwork).
3. Structure: Introduction, Body Paragraphs (Strengths), Conclusion/Endorsement.
```

### 24. Return to Work/School Note
**Description:** Generates a simple, clear return to work/school note.
**Prompt:**
```text
Create a Return to Work/School note for [Patient Name].
Date of Visit: [Date]
Restrictions: [List restrictions if any, e.g., "No heavy lifting > 10lbs"]
Return Date: [Date]

Output Text:
To Whom It May Concern,
[Patient Name] was seen in our office on [Date].
They may return to [Work/School] on [Date].
Restrictions: [Restrictions or "None"].
Please contact our office with questions.
```

### 25. Clinical Email Drafter
**Description:** Drafts a professional email to a colleague or administrator.
**Prompt:**
```text
Draft a professional email to [Recipient Role/Name].
Topic: [Subject]
Key Points to Convey:
- [Point 1]
- [Point 2]
- [Call to action/Request]

Rules:
1. Be concise and respectful.
2. Use clear subject line.
3. Professional closing.
```

## Clinical Communication & Education

### 26. Patient Portal Message Drafter
**Description:** Drafts an empathetic and clear response to a patient portal message.
**Prompt:**
```text
Draft a reply to this patient message.
Patient Message: "[Paste message]"
Clinical Answer: "[Brief medical facts/plan]"

Rules:
1. Reading level: 6th-8th grade.
2. Tone: Empathetic, reassuring, clear.
3. Address all patient questions.
4. Provide clear next steps (e.g., "If symptoms worsen, call us").
```

### 27. Patient Education: 5th Grade Level
**Description:** Rewrites complex medical text into a 5th-grade reading level handout.
**Prompt:**
```text
Rewrite the following medical explanation into a patient education handout at a 5th-grade reading level.
Topic: [Diagnosis/Treatment]
Input Text: "[Paste complex text or list of points]"

Rules:
1. Use simple words and short sentences.
2. Use analogies where helpful.
3. Structure with clear headings (What is it? How do we treat it? When to call the doctor?).
4. Avoid medical jargon or define it simply.
```

### 28. Medication Explainer
**Description:** Creates a simple guide for taking a new medication.
**Prompt:**
```text
Create a "How to Take Your Medication" guide for [Medication Name].
Instructions: [Frequency, with/without food, duration]
Common Side Effects: [List]
Warning Signs: [List]

Output Format:
**Medication Name**
**Why am I taking this?** (1 sentence)
**How do I take it?** (Bullet points)
**What if I miss a dose?**
**Common Side Effects** (What to expect)
**Call the office if:** (Red flags)
```

### 29. Dietary Plan Generator
**Description:** Generates a list of dietary suggestions based on a specific condition.
**Prompt:**
```text
Create a dietary cheat sheet for a patient with [Condition, e.g., Gout, IBS, Heart Failure].
Focus: [Specific restriction, e.g., Low Purine, Low FODMAP, Low Sodium]

Output Sections:
1. **Foods to Enjoy** (Green light)
2. **Foods to Limit** (Yellow light)
3. **Foods to Avoid** (Red light)
4. **General Tips**
```

### 30. Bad News Talking Points
**Description:** Generates a script or talking points for delivering difficult news.
**Prompt:**
```text
Create a script/talking points for delivering the diagnosis of [Diagnosis] to a [Patient/Family].
Context: [Brief context, e.g., unexpected finding on scan]

Structure:
1. **Preparation** (Setting the stage)
2. **The News** (Direct, compassionate statement)
3. **Validation** (Acknowledging emotion)
4. **Next Steps** (Immediate plan, not too overwhelming)
```

### 31. Goals of Care Discussion Guide
**Description:** Outlines a framework for a goals of care discussion.
**Prompt:**
```text
Create a discussion guide for a Goals of Care meeting with the family of a patient with [Condition/Prognosis].
Key Decisions Needed: [e.g., Code status, intubation, hospice]

Output:
1. **Opening the conversation** (Questions to ask family understanding)
2. **Explaining the medical reality** (Simple, honest language)
3. **Exploring values** (Questions to ask about patient's wishes)
4. **Making a recommendation** (Based on medical reality + values)
```

## Clinical Decision Support (Educational/Adjunct)

### 32. Differential Diagnosis Broadener
**Description:** Suggests a broad differential diagnosis to prevent anchoring bias. *Disclaimer: For educational/brainstorming use only.*
**Prompt:**
```text
Generate a broad differential diagnosis for:
Patient: [Age/Sex]
Chief Complaint: [Complaint]
Key Symptoms: [List]
Key History: [List]

Categories to Include:
1. **Common/Likely**
2. **"Can't Miss" / Life-Threatening**
3. **Rare / Zebras** (Consider autoimmune, genetic, infectious)
4. **Mimics** (Non-medical causes, medication side effects)
```

### 33. Lab Interpretation Assistant
**Description:** Explains potential causes for a specific lab abnormality pattern.
**Prompt:**
```text
Analyze the potential causes for this lab pattern:
[Lab Result 1]: [Value]
[Lab Result 2]: [Value]
Patient Context: [Brief context]

Output:
1. **Most common causes**
2. **Physiologic causes** (e.g., dehydration, stress)
3. **Artifact/Error possibilities**
4. **Suggested follow-up tests** to narrow the differential
```

### 34. Clinical Guideline Summarizer
**Description:** Summarizes the key action points from a specific clinical guideline.
**Prompt:**
```text
Summarize the key management recommendations from the [Name of Guideline, e.g., 2021 KDIGO CKD Guideline] regarding [Specific Topic, e.g., BP management].

Output:
1. **Target/Goal**
2. **First-line Therapy**
3. **Second-line/Add-on Therapy**
4. **Monitoring Interval**
```

### 35. Pre-operative Checklist
**Description:** Generates a pre-op evaluation checklist based on patient comorbidities.
**Prompt:**
```text
Create a Pre-operative Evaluation Checklist for:
Procedure: [Procedure]
Patient Comorbidities: [List, e.g., Diabetes, CAD, on anticoagulation]

Output:
1. **Cardiac Risk** (RCRI factors to check)
2. **Medication Management** (What to hold/continue - e.g., anticoagulants, hypoglycemics)
3. **Labs/Testing Required**
4. **Day of Surgery Instructions**
```

### 36. Opioid Tapering Schedule
**Description:** Drafts a proposed opioid tapering schedule.
**Prompt:**
```text
Draft a [Duration, e.g., 4-week] opioid tapering schedule for a patient currently taking:
[Medication Name] [Dose] [Frequency] (Total MME: [Value])
Goal: [Discontinue or Reduce to X]

Output:
- **Week 1**: [Dose/Freq]
- **Week 2**: [Dose/Freq]
- ...
- **Withdrawal Management**: Suggested adjuncts for symptoms.
```

### 37. Polypharmacy Review
**Description:** Identifies medications that could potentially be deprescribed or consolidated.
**Prompt:**
```text
Review this medication list for potential deprescribing opportunities (Polypharmacy Review).
Patient: [Age] with [Conditions]
Med List:
[Paste list]

Output:
1. **Duplicate Therapies**
2. **High Risk Medications** (Beers Criteria etc.)
3. **No Clear Indication** (Query)
4. **Deprescribing Strategy** (Which to consider stopping first)
```

### 38. Preventive Care Checklist
**Description:** Generates a checklist of age/sex-appropriate preventive screenings.
**Prompt:**
```text
Generate a Preventive Care Checklist for a [Age] year old [Sex].
History: [Smoker/Non-smoker, Family History if relevant]

Output:
1. **Cancer Screening** (Colon, Breast, Cervical, Lung, Prostate)
2. **Vaccinations** (Pneumo, Shingles, Tdap, etc.)
3. **Cardiovascular** (Lipids, BP, AAA)
4. **Other** (Bone density, Depression screen, etc.)
```

### 39. Social Determinants Screener
**Description:** Suggests questions to screen for SDOH based on subtle cues.
**Prompt:**
```text
Suggest 3-5 sensitive screening questions to assess for [SDOH need, e.g., Food Insecurity / Housing Instability] in a patient who mentioned [Cue, e.g., "Money is tight"].

Output:
- Question 1 (Direct)
- Question 2 (Indirect)
- Question 3 (Resource-focused)
```

### 40. Telehealth Triage Script
**Description:** Script for triaging a symptom over the phone/video.
**Prompt:**
```text
Create a Telehealth Triage Script for [Complaint, e.g., "Headache"].

Output:
1. **Red Flags** (If YES -> Go to ER immediately)
2. **Urgent Signs** (If YES -> Seen within 24h)
3. **Routine Questions** (History of present illness)
4. **Home Care Advice** (If safe to stay home)
```

## Academic & Research

### 41. Journal Club Presenter
**Description:** Summarizes a research paper for a journal club presentation.
**Prompt:**
```text
Summarize the attached/pasted research paper for a Journal Club presentation.
Paper Title: [Title]
Text: [Paste Abstract/Methods/Results]

Output Structure:
1. **Clinical Question (PICO)**
2. **Methods Summary** (Design, Population, Intervention)
3. **Key Results** (Primary endpoint, significant secondary endpoints)
4. **Limitations/Bias**
5. **Clinical Applicability** (Will this change practice?)
```

### 42. Lecture Outline Creator
**Description:** Creates a structured outline for a medical student or resident lecture.
**Prompt:**
```text
Create a lecture outline for [Audience, e.g., Med Students] on [Topic].
Duration: [Time, e.g., 45 mins]

Output:
1. **Learning Objectives** (3-4)
2. **Introduction/Hook** (5 mins)
3. **Core Content Modules** (Break down into sections)
4. **Interactive Component** (Case or Question)
5. **Conclusion/Takeaways**
```

### 43. Board Review Question Generator
**Description:** Generates multiple-choice questions with explanations.
**Prompt:**
```text
Create 3 Board Review style multiple-choice questions on [Topic].
Difficulty: [Level]

Format per question:
**Vignette**: [Clinical scenario]
**Options**: A, B, C, D, E
**Correct Answer**: [Letter]
**Explanation**: Why the correct answer is right and why distractors are wrong.
```

### 44. Learner Feedback Generator
**Description:** Drafts constructive feedback for a trainee using the "Pendleton" or "Sandwich" model.
**Prompt:**
```text
Draft feedback for a [Student/Resident] based on this observation:
Observation: [Describe specific behavior/event]
Strengths: [List]
Areas for Improvement: [List]

Output:
1. **Reinforcing Feedback** (What went well)
2. **Corrective Feedback** (Specific, actionable steps to improve)
3. **Action Plan** (Goal for next time)
```

### 45. Research Abstract Writer
**Description:** Drafts a structured abstract from a rough paper draft.
**Prompt:**
```text
Draft a structured abstract (Background, Methods, Results, Conclusion) from these notes.
Word Limit: [e.g., 250 words]
Notes:
[Paste study details]
```

### 46. Case Report Drafter
**Description:** Drafts the introduction and case presentation sections of a case report.
**Prompt:**
```text
Draft the 'Introduction' and 'Case Presentation' sections for a Case Report on [Diagnosis].
Case Details:
[Paste timeline, symptoms, findings]

Rules:
1. Academic tone.
2. Anonymize patient details.
3. Highlight the unique aspect of this case in the intro.
```

### 47. Grant Specific Aims Refiner
**Description:** Refines the "Specific Aims" page of a grant proposal for clarity and impact.
**Prompt:**
```text
Refine this Specific Aims page for a grant proposal.
Goal: Improve clarity, impact, and logical flow.
Input Text:
[Paste text]

Output:
1. **Revised Specific Aims**
2. **Critique/Suggestions** (What was improved and why)
```

## Quality & Systems

### 48. Root Cause Analysis Helper
**Description:** Brainstorms potential root causes for an adverse event using the "5 Whys" or Fishbone framework.
**Prompt:**
```text
Conduct a "5 Whys" analysis for this adverse event:
Event: [Describe event]

Output:
1. **Why?** [First level cause]
2. **Why?** [Second level]
...
5. **Root Cause**: [Fundamental issue]
**Suggested System Fix**: [Actionable change]
```

### 49. Patient Satisfaction Survey Analyzer
**Description:** Analyzes themes from a batch of patient comments.
**Prompt:**
```text
Analyze these patient comments and identify key themes.
Comments:
[Paste list of comments]

Output:
1. **Positive Themes** (What we are doing well)
2. **Negative Themes** (Pain points)
3. **Specific Actionable Suggestions** derived from comments.
```

### 50. Equipment Justification Request
**Description:** Writes a justification for purchasing new medical equipment.
**Prompt:**
```text
Write a budget justification request for [Equipment Name].
Cost: [Price]
Benefits:
- [Benefit 1: Patient care]
- [Benefit 2: Efficiency/ROI]
- [Benefit 3: Safety]

Output:
Formal request memo outlining the need, the impact on patient care/safety, and the expected return on investment (financial or clinical).
```
