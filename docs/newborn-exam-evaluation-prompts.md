# Newborn Exam Course - LLM Evaluation System

This document describes the AI evaluation system used to assess student responses in the Newborn Pediatric Physical Exam course.

## Overview

The course uses a browser-based LLM (Llama-3.1-8B-Instruct) to evaluate student clinical assessments. Unlike the prompt engineering course (where students write prompts), this course evaluates **clinical reasoning** and **diagnostic skills**.

## Evaluation Criteria

### Core Assessment Dimensions

All exercises are evaluated across these dimensions:

1. **Finding Identification** (30-40% of score)
   - Accurate naming of clinical findings
   - Recognition of key features
   - Attention to detail

2. **Clinical Reasoning** (30-40% of score)
   - Understanding of clinical significance
   - Appropriate differential diagnosis
   - Evidence-based thinking

3. **Management Decisions** (20-25% of score)
   - Appropriate next steps
   - Correct risk stratification
   - Timely intervention vs watchful waiting

4. **Communication** (10-15% of score)
   - Parent counseling appropriateness
   - Clear explanation
   - Empathetic approach

## General Evaluation Prompt Template

```
You are an expert pediatrician evaluating a medical student's clinical assessment of a newborn physical exam finding.

EXERCISE GOAL: [specific learning objective]

CLINICAL SCENARIO:
[detailed patient case with images/findings described]

EXPECTED FINDINGS:
[correct answer and clinical pearls]

STUDENT'S ASSESSMENT:
[student's submitted response]

EVALUATION RUBRIC:
[specific criteria for this exercise]
Total possible points: 10
Passing score: 7

Please evaluate this clinical assessment and provide feedback in the following JSON format:
{
  "strengths": ["specific strength 1", "specific strength 2"],
  "improvements": ["specific improvement 1", "specific improvement 2", "specific improvement 3"],
  "score": 8,
  "criteria_scores": {
    "Finding Identification": {"points": 3, "feedback": "Correctly identified caput succedaneum"},
    "Clinical Reasoning": {"points": 3, "feedback": "Good explanation of why it crosses suture lines"},
    "Management": {"points": 2, "feedback": "Appropriate reassurance, could mention timeline"},
    "Communication": {"points": 0, "feedback": "Did not address parent education"}
  },
  "example_improvement": "Specific teaching point...",
  "passed": true
}

Evaluation Guidelines:
- Assess accuracy of finding identification
- Evaluate quality of clinical reasoning
- Check appropriateness of management recommendations
- Consider if they recognized concerning vs benign features
- Evaluate parent communication if mentioned
- Be constructive and educational in feedback
- Award points fairly based on demonstrated understanding
- If student demonstrates safety concerns (dangerous management), note this explicitly
```

## Module-Specific Evaluation Guidelines

### Module 1: General Assessment & Vital Signs

#### Exercise 1.1: APGAR Scoring

**Specific Criteria:**
- **Accurate Scoring (4 pts)**: Each APGAR component scored correctly
- **Clinical Interpretation (3 pts)**: Understanding of what scores mean
- **Management Decisions (3 pts)**: Appropriate intervention based on scores

**Common Student Errors to Watch For:**
- Confusing which component is which
- Not recognizing that interventions can affect the 5-minute score
- Failing to understand that APGAR shouldn't delay resuscitation

**Teaching Points to Emphasize:**
- APGAR is assessment tool, not treatment guide
- 1-minute score = immediate condition
- 5-minute score = better predictor of outcomes
- Acrocyanosis is normal (don't penalize for A=1)

#### Exercise 1.2: Vital Signs

**Specific Criteria:**
- **Normal Range Knowledge (3 pts)**: Knows what's normal for newborns
- **Abnormality Recognition (3 pts)**: Correctly identifies concerning findings
- **Risk Stratification (2 pts)**: Appropriate urgency level
- **Management Planning (2 pts)**: Correct next steps

**Red Flags to Emphasize:**
- Bradycardia <100 bpm needs immediate evaluation
- Fever in newborn = sepsis workup
- Persistent tachycardia/tachypnea = respiratory or cardiac concern

#### Exercise 1.3: General Appearance

**Specific Criteria:**
- **Systematic Assessment (3 pts)**: Covers all appearance elements
- **Finding Identification (3 pts)**: Correctly describes what they see
- **Clinical Reasoning (2 pts)**: Explains significance
- **Next Steps (2 pts)**: Appropriate recommendations

**Look For:**
- Use of systematic approach (color, tone, respiratory effort, symmetry)
- Distinction between "looks well" vs "looks sick"
- Recognition of red flags

### Module 2: Head, Eyes, Ears, Nose, Throat

#### Key Evaluation Points

**Cranial Findings:**
- Can they distinguish caput from cephalohematoma?
- Do they know natural history and when to worry?
- Appropriate parent counseling?

**Eye Exam:**
- Understanding importance of red reflex
- Recognition of urgent vs benign findings
- Knows when to refer to ophthalmology

**Oral Findings:**
- Benign (Epstein pearls) vs requiring intervention (cleft palate)
- Functional assessment (does it affect feeding?)
- Appropriate specialist referral

### Module 3: Cardiovascular & Respiratory

#### Critical Safety Points

The LLM should flag if students:
- Dismiss pathological murmurs as innocent
- Fail to recognize respiratory distress
- Confuse central vs peripheral cyanosis
- Recommend inappropriate management

**Murmur Evaluation:**
- Characteristics documented (timing, location, grade)
- Concerning features identified (thrill, abnormal S2, cyanosis)
- Appropriate workup (echo, cardiology) vs observation

**Respiratory Distress:**
- Severity assessment
- Differential diagnosis appropriate for age
- Urgent intervention when needed

**Cyanosis:**
- Central vs peripheral distinction
- Cardiac vs pulmonary differential
- Hyperoxia test understanding

### Module 4: Abdomen, GU, & Musculoskeletal

#### Hip Dysplasia Screening

**Critical Teaching Points:**
- Risk factors (breech, family history, female)
- Positive Ortolani = hip IS dislocated, reduces with maneuver
- Positive Barlow = hip CAN BE dislocated with maneuver
- All high-risk infants need ultrasound even if exam normal

**Safety Emphasis:**
- Missed DDH can lead to long-term hip problems
- Better to over-refer than miss

### Module 5: Skin & Neurological

#### Skin Findings Safety

**Red Flags to Emphasize:**
- Vesicular rash in newborn = think HSV (herpes)
- Petechiae/purpura = bleeding disorder or infection
- Most newborn rashes are benign (erythema toxicum, milia, Mongolian spots)

**Neurological Assessment:**
- Abnormal tone is concerning (hypo or hyper)
- Asymmetric findings need investigation
- Absent reflexes or persistent primitive reflexes beyond expected age = concern

## Scoring Philosophy

### Point Distribution

- **7-10 points**: Passing
  - Student demonstrates safe, competent clinical reasoning
  - May have minor gaps but overall sound

- **4-6 points**: Needs improvement
  - Some correct elements but significant gaps
  - May have safety concerns
  - Needs more study and practice

- **0-3 points**: Substantial deficits
  - Major misunderstandings
  - Potentially unsafe reasoning
  - Requires significant review

### Constructive Feedback Principles

The LLM should:
1. **Acknowledge what's correct first**
2. **Explain what was missed and why it matters**
3. **Provide specific teaching points**
4. **Suggest resources or what to review**
5. **Encourage continued learning**

**Avoid:**
- Harsh criticism
- Vague feedback ("study more")
- Focusing only on negatives
- Medical jargon without explanation

## Example Evaluation Responses

### Example 1: Strong Response

**Student Assessment:**
"This is caput succedaneum. The key feature is that the swelling crosses suture lines, unlike cephalohematoma which is subperiosteal and limited by suture lines. This is benign and results from pressure during delivery. It typically resolves within 24-48 hours. I would reassure the parents that this is normal and expected to improve quickly. No treatment needed, just observation."

**LLM Evaluation:**
```json
{
  "strengths": [
    "Correctly identified caput succedaneum",
    "Accurately explained the key distinguishing feature (crosses suture lines)",
    "Knew appropriate natural history (resolves 24-48 hours)",
    "Provided appropriate parent counseling and reassurance"
  ],
  "improvements": [
    "Could mention that cephalohematoma may take weeks to resolve (for comparison)",
    "Could note to monitor for jaundice if hematoma present"
  ],
  "score": 9,
  "criteria_scores": {
    "Finding Identification": {"points": 4, "feedback": "Perfect identification with key features"},
    "Clinical Reasoning": {"points": 3, "feedback": "Excellent explanation of pathophysiology"},
    "Management": {"points": 2, "feedback": "Appropriate reassurance and observation plan"}
  },
  "example_improvement": "Excellent work! For completeness, when discussing caput vs cephalohematoma, mentioning the different timelines for resolution helps parents understand what to expect.",
  "passed": true
}
```

### Example 2: Needs Improvement

**Student Assessment:**
"The baby has some swelling on the head. Probably from delivery. Should go away soon. Tell parents not to worry."

**LLM Evaluation:**
```json
{
  "strengths": [
    "Recognized that swelling is related to delivery",
    "Appropriate reassurance tone"
  ],
  "improvements": [
    "Need to specifically identify the type of swelling (caput vs cephalohematoma)",
    "Should explain the KEY distinguishing features (crosses suture lines or not)",
    "Must provide specific timeline for resolution",
    "Parent education should include what to monitor for"
  ],
  "score": 4,
  "criteria_scores": {
    "Finding Identification": {"points": 1, "feedback": "Recognized swelling but did not specifically identify type"},
    "Clinical Reasoning": {"points": 1, "feedback": "Understood benign nature but lacked specificity"},
    "Management": {"points": 2, "feedback": "Appropriate observation but need more detailed counseling"}
  },
  "example_improvement": "Focus on specific identification: Is this caput succedaneum (crosses suture lines, resolves in days) or cephalohematoma (doesn't cross sutures, takes weeks)? This distinction is important for parent education about timeline and potential complications like jaundice with cephalohematoma.",
  "passed": false
}
```

### Example 3: Safety Concern

**Student Assessment:**
"The baby's oxygen is 85% but seems comfortable, so I'd just monitor. Probably normal for a newborn."

**LLM Evaluation:**
```json
{
  "strengths": [
    "Noted the oxygen saturation value"
  ],
  "improvements": [
    "CRITICAL: 85% oxygen saturation is NOT normal for a newborn and requires immediate intervention",
    "Normal newborn oxygen saturation is ≥95% after initial transition",
    "This requires urgent evaluation for cardiac or pulmonary pathology",
    "Cannot rely on appearance alone - hypoxemia can be poorly compensated"
  ],
  "score": 2,
  "criteria_scores": {
    "Finding Recognition": {"points": 1, "feedback": "Noted low oxygen but did not recognize as abnormal"},
    "Clinical Reasoning": {"points": 0, "feedback": "SAFETY CONCERN: Misunderstood normal oxygen saturation ranges"},
    "Management": {"points": 1, "feedback": "SAFETY CONCERN: Monitoring alone is insufficient for this level of hypoxemia"}
  },
  "example_improvement": "This is a critical safety issue. Normal oxygen saturation in newborns (after the first few hours) is ≥95%. A saturation of 85% requires urgent evaluation including physical exam for cyanosis, assessment for respiratory distress, and workup for cardiac or pulmonary causes. Please review normal newborn vital signs and when to escalate care urgently.",
  "passed": false
}
```

## Technical Implementation Notes

### JSON Response Format

The LLM must return responses in valid JSON format:

```javascript
{
  "strengths": [array of strings],
  "improvements": [array of strings],
  "score": number (0-10),
  "criteria_scores": {
    "criterion_name": {
      "points": number,
      "feedback": string
    }
  },
  "example_improvement": string,
  "passed": boolean
}
```

### Temperature Setting

- Use **temperature: 0.3** for evaluation
- Lower temperature ensures more consistent, objective grading
- Reduces randomness in scoring

### Token Limits

- Evaluation prompt: ~800-1000 tokens
- Expected response: ~400-600 tokens
- Max tokens set to 1000 to allow detailed feedback

## Continuous Improvement

### Monitoring Evaluation Quality

Track:
- Are evaluations fair and consistent?
- Do students find feedback helpful?
- Are safety concerns being flagged appropriately?

### Updating Prompts

As we learn what works:
- Refine rubric criteria
- Add more specific examples
- Clarify edge cases
- Update teaching points

---

**Last Updated**: 2025-11-18
**Version**: 1.0
