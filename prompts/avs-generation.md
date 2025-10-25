---
title: "After Visit Summary (AVS) Generation - v1.0"
layout: page
permalink: /prompts/avs-generation/
---

## Overview

**Purpose:** Generate personalized sign-offs + actionable family to-do lists

**Character Count:** 4,715 / 5,000  
**Status:** ✅ Production Ready  
**Last Updated:** October 2025

This prompt combines two tasks: creating warm, personalized messages and extracting clear action items. It's an example of how LLMs excel at tone-matching and summarization.

---

## Full Prompt

Copy everything below and paste it into your EMR's AI tool:
Sign-Off & Family To-Do Generator
Generate two components: 3 personalized sign-off options and a family to-do list.
PART 1: PERSONALIZED SIGN-OFFS
Create 3 brief, warm sign-off options matching visit context.
Structure: [Personal touch/acknowledgment], [well-wish or next step]. [Closing]
Guidelines:

Warm and genuine, never formulaic
Acknowledge something specific when possible
Match emotional tone to visit type
Keep <=25 words total
Balance professional with personable
Reference activities, interests, milestones if mentioned
For difficult visits: acknowledge courage, effort, or partnership

Visit-Specific Approaches:
Well visits/milestones: Celebrate growth, reference developmental milestones
Sick visits: Empathize, offer comfort suggestion, reassure about calling
Chronic conditions: Acknowledge effort, emphasize partnership
Behavioral/mental health: Acknowledge courage, normalize seeking help
Complex/concerning: Name plan clearly, offer availability
Referrals: Acknowledge next step, reassure continuity
Examples:
5yo female well visit, starting kindergarten, plays soccer:
Great seeing y'all today! Good luck with soccer and kindergarten! Excited for you!
She is going to do great in kindergarten. Can't wait to hear about it next visit!
What an exciting year ahead! We're here if you need anything.
Male, Viral laryngitis, strep pending, difficult hydrating:
Drink lots of fluids! Popsicles are my favorite when sick. Call if not improving.
Hope he feels better soon. Those popsicles should help. We'll call with results tomorrow.
It is hard when they feel so crummy. Keep offering fluids and call if he's not getting better. We're here!
Female, New ADHD diagnosis, parent emotional, starting medication:
It takes courage to have this conversation-thank you for advocating for her! We're here to support you.
You're doing the right thing getting her help. We'll partner with you every step. Call anytime.
A new diagnosis can feel overwhelming, but we'll take it step by step. We're here for you.
Male, Asthma exacerbation, previous PICU admission, pulmonology referral:
We'll get him to Pulmonology to help get on top of all of this. Call if anything changes-we're here.
It is scary navigating all of this after your experiences. The specialist will help us care for him. Please call with any concerns.
You're doing everything right seeking care early. Don't hesitate to reach out.
Key Elements to Extract: Patient name, activities/hobbies, school transitions, specific treatments, emotional tone, referrals, chronic conditions, parent effort, family context
Output:
{Personalized sign off specific to visit}
{Personalized sign off emphasizing relationship}
{Personalized sign off forward-looking/supportive}
PART 2: FAMILY TO-DO LIST
Extract actionable items into simple checklist. Include only concrete next steps with essential details.
Format:
Your To-Do List:
Prescriptions:

[If none: omit section]

Tests/Results:

[Test]: Results pending, we will call [timeframe] [If none: omit section]

Appointments:

Schedule [specialty] appointment
Return to clinic in [timeframe] [If none: "No appointments to schedule today."]

Rules:

Simple dashes for bullets
One item per line, <=12 words
Only items requiring family action
Be specific about timeframes
Bold section headers
No explanations, just actions
Extract from note only
Indent all bullets with 8 spaces followed by simple dash

Examples:
Viral laryngitis, strep pending, acetaminophen, follow up 7 days if no improvement:
Your To-Do List:
Tests/Results:
- Strep test: Results pending, we will call tomorrow
Appointments:
- Return to clinic if no improvement in 7 days
Asthma exacerbation, Flovent and albuterol started, pulmonology referral, 3-month follow-up:
Your To-Do List:
Prescriptions:
- Flovent with spacer
- Albuterol inhaler as needed for wheezing/coughing
Appointments:
- Schedule Pulmonology appointment
- Return to clinic in 3 months for asthma check

---

## How to Use

1. **Copy the entire prompt** above
2. **Paste into your EMR's AI tool** after your scribe output
3. **Review the sign-off options** - pick your favorite or use it as a starting point
4. **Review the to-do list** - make sure all action items are included
5. **Personalize further if desired** - add names, specific details

---

## Customization Tips

**To improve sign-offs:**
- Update the few-shot examples with your own writing style
- Add examples specific to your specialty
- Use your own voice/phrases
- Include emotions and warmth

**To improve to-do lists:**
- Update examples to match your common visit types
- Include timeframes specific to your practice
- Add sections relevant to your specialty

---

## Pro Tips

- The warm tone is part of your patient experience improvement
- Less time on documentation = more time to personalize messages
- Test on a few visits to calibrate the examples
- Don't skip personalizing the examples - that's what makes it work

---

## Why This Matters

Clear action items improve compliance. Warm sign-offs improve patient satisfaction. Both happen because you have **less cognitive load** fighting with your documentation.

[Back to Prompt Library]({{ site.baseurl }}/prompts/)