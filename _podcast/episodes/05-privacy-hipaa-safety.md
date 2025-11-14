# Episode 5: Privacy, HIPAA, and Safety

**Episode Title:** Privacy, HIPAA, and Safety: Doing This Right

**Length:** 25-30 minutes

**Goal:** Address concerns, provide compliance framework, remove barriers to safe adoption

---

## Opening (2-3 min)

**Hook:**
- "The most common question I get: 'Is this HIPAA compliant?'"
- "Short answer: It can be. Here's how."
- "Today we remove the compliance mystery"

**Why this matters:**
- You can't use tools you don't trust
- Institutional approval requires compliance
- Patient privacy is non-negotiable
- But compliance shouldn't be a barrier to helpful tools

**What we're covering:**
- HIPAA basics for AI documentation
- Institutional approval process
- De-identification practices
- Risk mitigation strategies
- How to do this safely from day one

---

## HIPAA and AI: The Basics (6-7 min)

**What HIPAA actually requires:**
- Protected Health Information (PHI) must be secured
- Business Associate Agreements (BAAs) when data shared with third parties
- Audit trails and documentation
- Patient consent and notification
- Reasonable safeguards

**Where AI documentation fits:**
- Using AI within your institutional EMR: usually covered
- Epic/Cerner AI features: institution's existing BAA applies
- Third-party tools: need separate BAA
- Public chatbots (ChatGPT free version): absolutely not for PHI

**The key question:**
- Does PHI leave your institution's secure environment?
- If NO → covered under existing agreements
- If YES → need new BAA with that vendor
- If MAYBE → assume yes, get clarification

**Common scenarios:**

1. **Epic's built-in AI (safest)**
   - PHI stays within Epic environment
   - Covered by institution's Epic agreement
   - Use institutional AI policies
   - Usually pre-approved

2. **OpenAI/Anthropic with BAA (safe)**
   - Institution negotiates BAA
   - PHI transmitted but contractually protected
   - Vendor can't use data for training
   - Must use business/enterprise accounts (not free consumer)

3. **Public chatbots without BAA (never)**
   - ChatGPT free version
   - Claude without enterprise agreement
   - Gemini free version
   - These train on your data—do not use with PHI

---

## Getting Institutional Approval (6-7 min)

**Why you need it:**
- Legal protection for you
- Compliance assurance
- IT support when things break
- Legitimacy with colleagues
- Peace of mind

**Who to talk to:**
1. **Compliance/Legal:**
   - Ask about AI documentation policies
   - Provide specific tools you want to use
   - Request guidance, not permission initially
   - Frame as improving quality and efficiency

2. **IT/Informatics:**
   - What AI tools are already approved?
   - What's available in your EMR?
   - Technical implementation support
   - Security review of external tools

3. **Clinical leadership:**
   - Medical director or department chair
   - Quality improvement committee
   - Get clinical buy-in
   - Share evidence of effectiveness

**What to bring to the conversation:**
- Specific tools you propose using
- How they comply with HIPAA
- Evidence of effectiveness
- Safeguards you'll implement
- Pilot proposal (start small)

**Common objections and responses:**

- **"It's not proven safe"**
  - Counter: Studies showing efficacy
  - Pilot with close monitoring
  - Review protocols in place

- **"We don't have policy yet"**
  - Offer to help develop one
  - Reference other institutions' policies
  - Propose pilot while policy develops

- **"IT won't support it"**
  - Use EMR's built-in features
  - Provide vendor documentation
  - Offer to document process

**Timeline expectations:**
- Small institutions: 2-4 weeks
- Large academic centers: 2-6 months
- Start the conversation early
- Meanwhile, learn with de-identified data

---

## De-Identification Best Practices (5-6 min)

**While waiting for approval:**
- Practice with de-identified notes
- Learn the tools
- Refine your prompts
- Build competence safely

**HIPAA Safe Harbor method (18 identifiers to remove):**
1. Names
2. Dates (except year)
3. Phone numbers
4. Fax numbers
5. Email addresses
6. SSN
7. Medical record numbers
8. Health plan numbers
9. Account numbers
10. Certificate/license numbers
11. Vehicle identifiers
12. Device identifiers
13. URLs
14. IP addresses
15. Biometric identifiers
16. Photos
17. Other unique identifiers
18. Geographic subdivisions smaller than state

**Practical de-identification:**
- Replace names with "Patient" or initials
- Use "XX/XX/XXXX" for dates
- Remove MRNs
- Generic locations ("local hospital" vs specific name)
- Round ages to decade for ages > 89

**Tools to help:**
- Find-and-replace in your text editor
- De-identification scripts (some available open-source)
- Manual review always final step
- When in doubt, remove it

---

## Risk Mitigation Strategies (4-5 min)

**Layer 1: Choose appropriate tools**
- Prefer institutional EMR features
- Use tools with BAAs
- Avoid free consumer AI tools with PHI
- Check vendor security practices

**Layer 2: Review everything**
- Never auto-sign AI output
- Read every note before signing
- Check for hallucinations
- Verify clinical accuracy

**Layer 3: Documentation**
- Note when AI assistance used
- Maintain audit trail
- Document your review
- "Generated with AI assistance, reviewed and approved by physician"

**Layer 4: Oversight**
- Periodic quality checks
- Peer review of sample AI-assisted notes
- Monitor for systematic errors
- Continuous improvement

**Layer 5: Patient transparency**
- Inform patients of AI use
- Provide opt-out option
- Document consent if required
- Maintain trust through openness

**Red flags to watch for:**
- Pressure to skip review
- Institutional discouragement of documentation
- Vendor can't provide BAA
- Tool trains on your data without consent

---

## Actionable Takeaway (2-3 min)

**Immediate steps:**

1. **Check your institutional policies:**
   - Does one exist for AI documentation?
   - What tools are pre-approved?
   - Who do you contact for approval?

2. **If no approval yet:**
   - Practice with de-identified notes
   - Develop your skills safely
   - Build competence before clinical use
   - Document your learning process

3. **Start approval conversation:**
   - Draft email to compliance/IT
   - Specific tools you want to use
   - How you'll ensure safety
   - Request initial meeting

4. **Use institutional tools first:**
   - Epic's built-in AI if available
   - Already approved, already covered
   - Easiest path to compliant use
   - Build from there

---

## Closing (1-2 min)

**Recap:**
- HIPAA compliance is possible and important
- Institutional approval protects you
- De-identification enables safe practice
- Multiple layers of safety = responsible adoption

**Preview next episode:**
- Specialty customization
- Making prompts work for your specific practice
- Advanced techniques beyond basic formatting
- Pediatrics vs surgery vs psychiatry approaches

**Final thought:**
- "Compliance isn't a barrier—it's a framework for safe adoption"
- "Do this right, and you can do it confidently for years"
- "Patient safety and privacy first, always"

---

## Personal Stories to Include

- [ ] Your institutional approval process
- [ ] A compliance concern you had and how you addressed it
- [ ] De-identification mistake you caught
- [ ] Conversation that changed leader's mind

## Examples to Reference

- [ ] Specific tool + HIPAA compliance path
- [ ] Actual email to compliance team
- [ ] De-identification before/after
- [ ] Institutional policy example

## Key Phrases to Remember

- "Patient privacy is non-negotiable"
- "Compliance enables adoption, doesn't prevent it"
- "Review every note, always"
- "When in doubt, ask before using PHI"

## Common Objections to Address

- "My institution won't approve this" (Use their EMR's features)
- "This seems risky" (Layers of safety make it low-risk)
- "I don't have time for approval process" (Start with de-identified practice)
- "What if I make a mistake?" (Review catches mistakes, just like any tool)

---

**Recording Note:** This episode removes a major barrier for many physicians. Be clear about risk vs benefit, safety measures, and practical paths forward. Emphasize that doing this right is both possible and important.
