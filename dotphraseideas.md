# Dot Phrase Library Expansion Ideas

This file contains a brainstormed list of new dot phrases to expand the current system. The goal is to provide specialty-agnostic, high-yield phrases that address common documentation gaps, particularly in Medical Decision Making (MDM), Care Coordination, and Risk Management.

## Naming Convention Strategy
To make these easy to learn, we use a consistent prefix system:
- `.mdm` = Medical Decision Making / Assessment
- `.risk` = Risk management / Legal / Difficult conversations
- `.team` = Care coordination / Staff instructions
- `.tele` = Telehealth specifics
- `.prev` = Preventative care / Health maintenance
- `.msg` = Expanded messaging (Inbox)

---

## 1. Medical Decision Making (MDM)
*Focus: Documenting the "why" and the complexity of care.*

### Complexity Statements
*   **`.mdmmod` (Moderate Complexity)**
    > "Patient presents with [Problem]. MDM is moderate due to prescription drug management and [Risk Factor]. Data reviewed includes [Labs/Notes]."
*   **`.mdmhigh` (High Complexity)**
    > "Patient presents with [Problem] representing a severe exacerbation/threat to life/bodily function. MDM is high due to need for [Escalation/Surgery/Monitoring]. Risk of morbidity is significant without intervention."

### Differential Diagnosis
*   **`.mdmddx` (Differential Diagnosis)**
    > "Differential diagnosis considered: [Diagnosis 1], [Diagnosis 2], and [Diagnosis 3]. [Diagnosis 1] is most likely given [Findings]. [Diagnosis 2] is less likely due to [Absence of findings]."
*   **`.mdmruleout` (Rule Out Statement)**
    > "Key objective today is to rule out emergent causes including [Condition A] and [Condition B]. History and exam [do/do not] suggest these etiologies."

---

## 2. Risk Management & Difficult Discussions
*Focus: Protecting the physician and documenting shared decision making in tricky situations.*

### Non-Compliance / Refusal
*   **`.riskrefusal` (Refusal of Advice)**
    > "I have extensively discussed the risks of refusing [Treatment/Test] with the patient, including but not limited to [Specific Risk 1] and [Specific Risk 2], up to and including permanent disability or death. Patient verbalizes understanding of these risks but chooses to decline at this time. We will continue to offer this standard of care at future visits."
*   **`.riskama` (Against Medical Advice)**
    > "Patient is choosing to leave/discharge Against Medical Advice (AMA). Capacity to make this decision was assessed and patient is alert, oriented, and understands the specific risks of leaving, including [Risks]. Return precautions were given and patient was advised they are welcome to return at any time."

### Controlled Substances
*   **`.riskcs` (Controlled Substance Agreement)**
    > "Reviewed Controlled Substance Agreement. PMP database checked and is consistent. Urine drug screen [ordered/reviewed]. Risks of sedation, dependence, and overdose discussed. Patient agrees to take medication exactly as prescribed."

---

## 3. Care Coordination & Team Communication
*Focus: Efficient communication with nursing staff and other providers.*

### Staff Instructions
*   **`.rnadmin` (Administer Meds)**
    > "Please administer [Medication] [Dose] [Route] now. Monitor for [Side Effect] for 15 minutes post-administration."
*   **`.rnvaccine` (Vaccine Order)**
    > "Please administer [Vaccine Name]. VIS sheet given to patient. Consent obtained. Screen for contraindications prior to administration."

### Handoffs & Referrals
*   **`.teamref` (Referral Note)**
    > "Referral placed to [Specialty] for [Condition]. Pertinent records including [Labs/Imaging] attached. Specific clinical question: [Question]."
*   **`.teampeer` (Peer-to-Peer Note)**
    > "Discussed case with Dr. [Name] (Specialty). They agree with current plan and recommend [Additional Step]. Will follow up with their office in [Timeframe]."

---

## 4. Telehealth & Technology
*Focus: Specific documentation requirements for virtual care.*

### Technical & Logistics
*   **`.teletech` (Tech Issues)**
    > "Visit started via video but transitioned to audio-only due to technical difficulties. Patient verbally consented to continue via phone. Clinical decision making was not compromised by this transition."
*   **`.teleloc` (Location Verification)**
    > "Patient location verified as [State/Location] at start of visit. Patient confirms they are in a private location appropriate for discussing medical information."

---

## 5. Preventative & Chronic Care Support
*Focus: Quick documentation of routine health maintenance discussions.*

### Screening & Counseling
*   **`.prevtob` (Tobacco Counseling)**
    > "Current smoker. Time spent counseling on cessation: [3-10] minutes. Discussed health risks and cessation aids (NRT, pharmacotherapy). Patient [ready/not ready] to quit at this time."
*   **`.prevwt` (Weight/Nutrition Counseling)**
    > "Counseling provided regarding nutrition and physical activity. Discussed importance of [Specific Change]. Patient goal: [Goal]. Follow up on progress in [Timeframe]."
*   **`.prevfall` (Fall Risk Screen)**
    > "Fall risk assessment performed. Patient [denies/reports] falls in past year. Timed Up and Go test: [Normal/Abnormal]. Home safety checklist discussed."

---

## 6. Expanded Inbox Management
*Focus: Closing the loop on common administrative tasks.*

### Communication
*   **`.msgvm` (Left Voicemail)**
    > "Tried to reach patient via phone. Left voicemail requesting call back regarding [Topic]. Please try again in [Timeframe] if no response."
*   **`.msgportal` (Portal Reply - Generic)**
    > "This message is to acknowledge receipt of your inquiry. I have reviewed your chart and [Action Taken]. Please schedule an appointment if you wish to discuss this in more detail."
*   **`.msgletter` (Letter Sent)**
    > "Letter regarding [Topic] mailed to patient's address on file today. Copy scanned to chart."

### Results (Nuanced)
*   **`.resstable` (Chronic Condition Stable)**
    > "Labs reviewed. Values are stable compared to previous. Current management plan remains appropriate. No changes needed. Notify patient."
*   **`.resimproving` (Results Improving)**
    > "Labs reviewed. Values show improvement. Please encourage patient to keep up the good work with current plan. Follow up as scheduled."

