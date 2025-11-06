---
layout: post
title: "Using Large Language Models for Clinical Decision Making Support - Ask questions, Don't Pretend"
date: 2025-11-06 10:00:00 -0500
author: pedscoffee
categories: [AI, Healthcare, Medical Education, Clinical Practice]
tags: [LLM, clinical decision support, medical AI, metacognition, socratic questioning, physician workflow, quality improvement, medical education, expert support, clinical reasoning]
excerpt: "Instead of trying to make LLMs into omniscient AI attendings, physicians should leverage them for what they do best: pattern matching enables asking thoughtful questions that can improve metacognition and clinical reasoning. The real value isn't in prompting deeper reflection."
---

Large language models and artificial intelligence should be used to support experts by asking thoughtful questions targeting a physician's metacognition, not by pretending to teach topics they don't actually understand.

## The Promise and the Problem

LLMs through their pattern matching can sound like experts confidently discussing one of their favorite topics.  It is natural while exploring these tools to consider if they could somehow be used help support doctors in their medical decision making.  When LLMs first became popular I started asking them questions similar to what I am often asked in clinic, and I was impressed!  Quickly when reading their responses one can start to imagine a world where an AI agent collects most of the information from a patient and even presents a plan, and how such a leap forward could radically change healthcare.

Many of initial attempts to do create something helpful have been plagued by hallucinations.  Since fundamentally LLMs are pattern matching they often will present all of their answers with the same confidence.  Most of the time this output is still very useful, but in this context if a LLM presented a hallucination as a fact and the clinician believed it and acted accordingly serious patient harm could result.  Even if a tool like this was helpful 99% of the time the 1% harm is unacceptable.  The human in the loop is still necessary to make sure the output is correct and safe.

The future is bright.  Many people are working on this problem, and it is exciting to think about what may be possible in the future.  But how can we use the large language models we have now?

## Seeing through the hype so we don't miss out on the tool we already have

Instead of focusing on what may happen in the future, physicians should focus on benefits that large language models can offer right now.  Instead of trying to get them to be something they are not (an all knowing idealized theoretical AI attending), we should take advantage of their pattern recognition skills to help us see patterns in our own thought processes.  

LLMs offer opportunities for physicians to create in the moment opportunities for reflection improving metacognition in a realistic way during busy schedules.  To start with the AI scribe -- AI Editor -- Review Note workflow I've described elsewhere already gives physicians the opportunity to have more breathing room in their workday.  Having more time for margin naturally lends itself to more opportunities for focused, deep thought while solving clinical problems.

## When you have a hammer, everything is a nail

Since LLMs can offer virtually instant access to large libraries of information many of the initial attempts to support doctors have focused on attempting to provide helpful resources or information related to the topic being discussed.  This is what LLMs do for many different applications in many different fields.  It assumes that what doctor's need is more information, and unfortunately in doing so misses out on the best opportunity to add value.

## How do you teach an expert?

Giving more information would be a great way to help support a student.  The only key is to ensure the information is trustworthy which is the focus of efforts to improve the previously mentioned hallucination problems through citations of sources and the like.  Physicians however are already experts in their fields.  Even if a LLM could accurately provide guidelines and resources regarding the clinical topic, the physician has likely already read those resources and knows their details intimately.  We also have already been living in the information age for a while now where at any time a physician can identify a knowledge gap and seek out resources to fill it.  Physicians are meant to be self sufficient learning machines, and medical school curriculums seek to nurture and build this skill in their students.  In a world where doctors already have a plethora of good resources to draw from adding a new one that is occasionally untrustworthy simply isn't worth an expert's time.  It is quicker and better to draw from established resources that can be trusted.

So how do you support an expert?  There's a better way.

## Ask great questions

The best way to support an expert is to ask great questions.  As the saying goes "People need to be reminded more than instructed". Large language models are perfect for encouraging deeper clinical reasoning.  Consider the following prompt:

*From this case, extract one brief 'Clinical Pearl' for teaching (<=20 words). Focus on a practical pitfall, tip, or insight-not patient-specific. Using that clinical pearl, then take it one step farther and ask the clinician a socratic style follow up question to cause them to think more deeply about this particular patient. Write each on a separate line below bolded header "Clinical Pearl:"*

I originally crafted this thinking of it as a teaching experiment and made it a game that the resident and I had to answer the LLM's follow up questions for each patient before moving on.  It has proven remarkably insightful.  It provides the opportunity to take an extra moment and consider the case's possible nuances before moving on.  As with most experiences I've had teaching I feel that I have learned more from it than 

## A New Type of Quality Improvement

LLMs can provide in the moment feedback regarding anything we would like.  This opens the door to a new type of self-direct quality improvement project.  Most attendings have not had any in the moment feedback since they left residency.  For example, lets say a physician has decided they would like to work on improving antibiotic stewardship for example, it would would then be relatively simple to make a prompt that looks at the note and then prints the following out automatically as the note is formatted.  

If antibiotics are discussed:
"Antibiotic stewardship QI project reminder! :D "

We can go beyond this though.  If the goal was to make sure antibiotic duration are optimized, we could include this short prompt to help:

If antibiotics are prescribed, analyze the prescription and output the name, dose, route, and duration followed by a non-judgemental question respectfully asking the clinician if this is the best choice in light of a detail from the patient's history:

Few shot examples:
1. Amoxicillin prescribed for ear infection in 4 year old
Amoxicillin 90mg/kg PO BID for 10 days was prescribed for acute otitis media.  Is this duration optimal for a 4 year old without recent ear infections?
2. Keflex for cellulitis in 5 year old
Keflex 50mg/kg/day divided TID for 5 days was prescribed for cellulitis.  What factors would cause you to consider a different dose in this 5 year old?
3. Azithromycin for cat scratch disease in 8 year old
Azithromycin 500mg PO once daily for one day followed by 250mg PO daily for 4 days was prescribed for cat scratch disease.  Why is this agent superior than its alternatives?

This prompt has given me outputs like the following:
Nystatin cream was prescribed for a yeast diaper rash. The dose and route are topical application twice daily for about one week. Is this duration sufficient given the patient's age and the presence of eczema elsewhere on the skin?

As you can see this type of prompt could be adapted for almost any QI project to provide in the moment feedback for clinicians as they go about their busy work days.  If we change the goal from providing information to helping an expert improve their metacognition we can make great strides in improving patient care with the large language models we already have today.  Let's get started!

Community contributions would be so welcome throughout our entire project, but this type of prompt especially could benefit from diverse voices in the medical community.  The mark of an expert is the ability to ask insightful questions, and a discussion of what types of questions physicians should be asked in the moment before moving on could benefit from many different perspectives.  The questions someone else thinks to ask are more likely to target your own blind spots than anything you could write yourself.  If you come up with something that has been useful to you, please share it!

*Aside: I've tried quite a bit to make prompt that analyzes the plan and respectfully asks if the decision could be an example of one of a list of biases.  Unfortunately my efforts so far have produced prompts that just ask if the case is an example of anchoring bias over and over which is ironic.  If anyone else wants to try I think that type of tool could be really helpful.*


