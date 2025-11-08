---
layout: page
title: Prompting Best Practices
description: Learn how to write effective medical prompts. Our definitive guide for physicians covers few-shot examples, brevity, and modular prompt design for EMRs.
---
![Clinical AI Best Practices](./images/Best_practices.jpg)
<style>
  .video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
    max-width: 100%;
    background: #000;
    margin-bottom: 1.5rem;
  }
  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>

# Clinical Prompt Engineering Best Practices

<div class="video-container">
  <iframe 
    width="560" 
    height="315" 
    src="https://www.youtube-nocookie.com/embed/haSZOP6fiFM?si=a7yZiRBuRdaB95Y9" 
    title="Prompt Engineering Tutorial" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen>
  </iframe>
</div>

## Quick Reference: Three Core Principles

### 1. Examples > Instructions
**Show the AI what you want through 3-5 concrete examples rather than explaining it.**

### 2. Brevity = Quality  
**Concise outputs scan faster, edit easier, and feel more natural.**

### 3. One Prompt, One Purpose
**Specialized prompts outperform multi-function alternatives.**

---

<div class="embed-container">
  <iframe src="https://pedscoffee.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>
</div>

---

## Detailed Implementation Guide

### Principle 1: Few-Shot Learning in Clinical Context

Few-shot examples are the foundation of effective clinical prompts. Rather than describing your preferred format, demonstrate it.

**Why it works:** LLMs excel at pattern recognition. Examples allow the model to infer your implicit rules—tone, structure, clinical reasoning—more effectively than explicit instructions.

**Clinical application:**
- For Assessment & Plan formatting: Provide 3-5 examples of your actual A&P sections
- For billing documentation: Show examples with correct MDM levels and corresponding documentation
- For patient instructions: Include samples demonstrating your communication style

### Optimizing Few-Shot Examples

| Variable | Clinical Implementation |
| :--- | :--- |
| **Quantity** | 3-5 examples typically optimal; more risks overfitting |
| **Ordering** | Place most common scenarios first |
| **Distribution** | Match your actual case mix (e.g., 60% routine, 40% complex) |
| **Quality** | Create examples similar to what you actually see |
| **Format** | Consistent structure: Input → Output |
| **Diversity** | Include edge cases you encounter regularly |

### Principle 2: Documentation Brevity

Concise documentation serves both efficiency and safety:

**Benefits:**
- Faster physician review (30-60 seconds vs 2-3 minutes)
- Easier identification of errors or hallucinations
- Reduced cognitive load during busy clinic days
- More natural, physician-like language

**Implementation:**
- Use bullet points over paragraphs
- Employ medical abbreviations appropriately
- Eliminate redundant phrases
- Focus on clinically relevant details only

### Principle 3: Modular Prompt Architecture

Complex multi-function prompts fail because they multiply complexity exponentially. Instead, chain specialized prompts:

**Workflow example:**
1. Prompt 1: Raw transcript → Structured HPI
2. Prompt 2: Examination findings → Formatted physical exam
3. Prompt 3: Combined data → Assessment & Plan
4. Prompt 4: A&P → Billing analysis

**Advantages:**
- Each prompt can be refined independently
- Failures isolate to specific functions
- Easier troubleshooting and iteration
- Mix and match based on encounter type

## Advanced Techniques

### Task Statement Optimization
Begin every prompt with a clear, action-oriented instruction:
- ✅ "Convert the following transcript into a problem-based assessment and plan"
- ❌ "You are a physician who needs to write notes"

### Conditional Logic Implementation
Use ICD-10 codes as triggers for boilerplate text:
```
If diagnosis includes J06.9, add: "Supportive care discussed including rest, fluids, and symptomatic relief."
```

### Format Rules Hierarchy
1. Few-shot examples (highest priority)
2. Task statement
3. Explicit formatting rules (lowest priority, use sparingly)

## Safety and Compliance

### Critical Reminders
- **Always review** AI output before finalizing
- **Maintain responsibility** for clinical accuracy
- **Document within** approved institutional tools only
- **Expect 90-95% accuracy**, not perfection

### Quality Assurance Checklist
- [ ] Factual accuracy verified
- [ ] Medications and dosages confirmed
- [ ] Follow-up instructions appropriate
- [ ] Billing documentation sufficient
- [ ] No hallucinated findings

## Getting Started

1. **Select one workflow** (e.g., Assessment & Plan only)
2. **Gather 5 examples** from your recent notes
3. **Create initial prompt** using our template
4. **Test on 10 encounters** before scaling
5. **Iterate based** on specific failures

### Additional Resources
*Questions about setup or best practices? Ask in our [GitHub Discussions](https://github.com/pedscoffee/PhysicianPromptEngineering/discussions) or share your workflow on the [Contributions page](https://physicianpromptengineering.com/contributions.html).*

---
*Reference: Adapted from Schulhoff, S. "The Prompt Report: A Systematic Survey of Prompting Techniques" (2024)*

<div style="background: #e3f2fd; padding: 15px; border-left: 4px solid #2a7ae2; border-radius: 4px; margin-top: 20px;">
    <h3 style="color: #2a7ae2; font-size: 1.1em; margin-bottom: 10px; text-align: center;">Share Your Prompt</h3>
    <p style="text-align: center;">Refined a prompt that consistently delivers quality output? Consider sharing it on the <a href="https://physicianpromptengineering.com/contributions" style="color: #2a7ae2; font-weight: 600;">contributions page</a>. Your tested solution could save colleagues hours of iteration and help build a stronger resource for the entire clinical community.</p>
</div>