// =============================================================================
// STATE MANAGEMENT
// =============================================================================
let boilerplateCount = 0;
let currentTemplate = 'scratch';
let detectedPatterns = null;

// Template data
const TEMPLATES = {
    pithy: {
        examples: `**Asthma**
        - Flovent 44mcg 2 puff BID started
        - Continue albuterol PRN
        - Use spacer
        - RTC 3mo/PRN

**Well Child Check**
        - Growing and developing well
        - Reviewed anticipatory guidance
        - RTC 1yr/PRN

**Vomiting, mild dehydration**
        - NDNT on exam with MMM
        - Zofran PRN, pedialyte, Tylenol, Motrin
        - RTC PRN

**ADHD**
        - Concerta 27mg not effective
        - Transition to Vyvanse 20mg PO daily
        - RTC 1mo

**Viral URI**
        - Supportive care, fluids
        - Declined COVID test
        - RTC PRN`,
        boilerplates: [
            {
                hook: 'well child check or health maintenance',
                text: 'All forms, labs, immunizations, and patient concerns reviewed and addressed appropriately. Screening questions, past medical history, past social history, medications, and growth chart reviewed. Age-appropriate anticipatory guidance reviewed and printed in AVS. Parent questions addressed.'
            },
            {
                hook: 'any illness',
                text: 'Recommended supportive care with OTC medications as needed. Return precautions given including increasing pain, worsening fever, dehydration, new symptoms, prolonged symptoms, worsening symptoms, and other concerns. Caregiver expressed understanding and agreement with treatment plan.'
            },
            {
                hook: 'any injury',
                text: 'Recommended supportive care with Tylenol, Motrin, rest, ice, compression, elevation, and gradual return to activity as appropriate. Return precautions given including increasing pain, swelling, or failure to improve.'
            }
        ]
    }
};

// =============================================================================
// ENHANCED PATTERN ANALYZER V3 (FIXED)
// =============================================================================
const PatternAnalyzer = {
    // List of subcategories to filter out from problem parsing
    subcategoryPattern: /^(Diagnostics|Therapeutics|Medications|Follow-up|Tests|Assessment|Plan|Prescriptions|Referrals|Consults|Next Steps|Patient Education|Discharge|Situational awareness):?$/i,

    analyze(text) {
        // 1. Parse text into problems
        const problems = this.parseProblems(text);
        
        if (problems.length === 0) {
            return { error: 'Could not detect any problems. Please format problem names using **Bold**, ALL CAPS, or Capitalized: format.' };
        }
        
        const emptyProblems = problems.filter(p => !p.content.trim());
        if (emptyProblems.length === problems.length) {
            return { error: 'Examples need content after problem names. Please add assessment and/or plan details.' };
        }
        
        // 2. Detect Assessment format first (as Plan detection depends on it)
        const assessmentPatterns = this.detectAssessmentFormat(problems);
        
        // 3. Detect Plan format (now "assessment-aware")
        const planPatterns = this.detectPlanFormat(problems, assessmentPatterns);
        
        // 4. Detect Problem Format from parsed problems
        const primaryProblemFormat = this.mostCommon(problems.map(p => p.format)) || 'plain';

        // 5. Detect all other pattern categories
        const patterns = {
            assessment: assessmentPatterns,
            plan: planPatterns,
            brevity: this.measureBrevity(problems),
            justification: this.detectJustification(problems),
            contingency: this.detectContingency(text),
            structure: {
                problemFormat: primaryProblemFormat,
                bulletStyle: this.detectBulletStyle(text),
                spacing: this.detectSpacing(text)
            },
            voice: this.detectVoice(text),
            abbreviations: this.measureAbbreviationDensity(text)
        };
        
        // 6. Check consistency
        const consistency = this.checkConsistency(patterns, problems);
        patterns.consistency = consistency;
        
        return patterns;
    },

    // Enhanced problem parser - supports multiple formats and filters subcategories
    parseProblems(text) {
        const problems = [];
        
        // Pattern 1: **Bold**
        let sections = text.split(/\*\*([^*]+)\*\*/);
        if (sections.length > 2) {
            for (let i = 1; i < sections.length; i += 2) {
                const problemName = sections[i].trim();
                
                // Skip if it's a subcategory header (FIX: BUG #2 - check before adding)
                if (this.subcategoryPattern.test(problemName)) {
                    continue;
                }
                
                const content = sections[i + 1] || '';
                
                // Skip if content is empty or only whitespace (FIX: BUG #2 - prevents validation failure)
                if (!content.trim()) {
                    continue;
                }
                
                problems.push({
                    name: problemName,
                    content: content,
                    lines: content.split('\n').filter(l => l.trim()),
                    format: 'bold'
                });
            }
            if (problems.length > 0) return problems;
        }
        
        // Pattern 2: ALL CAPS (at least 3 chars, mostly uppercase)
        const lines = text.split('\n');
        let currentProblem = null;
        
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const trimmed = line.trim();
            
            // Check for ALL CAPS problem marker (at least 3 chars, 80% uppercase)
            if (trimmed.length >= 3) {
                const upperCount = (trimmed.match(/[A-Z]/g) || []).length;
                const letterCount = (trimmed.match(/[A-Za-z]/g) || []).length;
                const isAllCaps = letterCount > 0 && (upperCount / letterCount) >= 0.8;
                
                if (isAllCaps && /^[A-Z]/.test(trimmed)) {
                    const problemName = trimmed.replace(/:$/, '');
                    
                    // Skip if it's a subcategory header
                    if (this.subcategoryPattern.test(problemName)) {
                        continue;
                    }
                    
                    if (currentProblem) {
                        problems.push(currentProblem);
                    }
                    currentProblem = {
                        name: problemName,
                        content: '',
                        lines: [],
                        format: 'caps'
                    };
                } else if (currentProblem && trimmed) {
                    currentProblem.content += line + '\n';
                    currentProblem.lines.push(trimmed);
                }
            } else if (currentProblem && trimmed) {
                currentProblem.content += line + '\n';
                currentProblem.lines.push(trimmed);
            }
        }
        if (currentProblem) problems.push(currentProblem);
        if (problems.length > 0) return problems;
        
        // Pattern 3: Capitalized Word(s): (with colon)
        currentProblem = null;
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const trimmed = line.trim();
            
            // Check for Capitalized Word: pattern (must have colon at end)
            if (/^[A-Z][a-zA-Z\s,'-]+:$/.test(trimmed) && trimmed.length >= 4) {
                const problemName = trimmed.replace(/:$/, '');
                
                // Skip if it's a subcategory header
                if (this.subcategoryPattern.test(problemName)) {
                    continue;
                }
                
                if (currentProblem) {
                    problems.push(currentProblem);
                }
                currentProblem = {
                    name: problemName,
                    content: '',
                    lines: [],
                    format: 'capitalized-colon'
                };
            } else if (currentProblem && trimmed) {
                currentProblem.content += line + '\n';
                currentProblem.lines.push(trimmed);
            }
        }
        if (currentProblem) problems.push(currentProblem);
        if (problems.length > 0) return problems;
        
        // Pattern 4: Capitalized line followed by indented bullets
        currentProblem = null;
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const trimmed = line.trim();
            const nextLine = i + 1 < lines.length ? lines[i + 1] : '';
            
            // Check for capitalized word followed by indented content
            if (/^[A-Z][a-zA-Z\s]+$/.test(trimmed) && /^\s+[-*]/.test(nextLine)) {
                
                // Skip if it's a subcategory header
                if (this.subcategoryPattern.test(trimmed)) {
                    continue;
                }
                
                if (currentProblem) {
                    problems.push(currentProblem);
                }
                currentProblem = {
                    name: trimmed,
                    content: '',
                    lines: [],
                    format: 'capitalized'
                };
            } else if (currentProblem && trimmed) {
                currentProblem.content += line + '\n';
                currentProblem.lines.push(trimmed);
            }
        }
        if (currentProblem) problems.push(currentProblem);
        
        return problems;
    },

    // CATEGORY 1: ASSESSMENT FORMAT DETECTION (FIXED)
    // Priority: Narrative -> One-Liner -> Minimal
    detectAssessmentFormat(problems) {
        const formats = problems.map(problem => {
            
            // 1. Check for narrative (2+ consecutive non-bullet lines OR 1 line with 2+ sentences)
            if (this.isNarrativeParagraph(problem)) {
                return 'narrative';
            }
            
            // 2. Check for one-liner (exactly 1 non-bullet line + bullets)
            if (this.hasOneLinerStructure(problem)) {
                return 'oneliner-phrase';
            }

            // 3. Check for minimal (0 non-bullet lines)
            if (this.hasZeroNonBulletLines(problem)) {
                return 'minimal';
            }
            
            // 4. Fallback (e.g., problem with no bullets)
            return 'minimal';
        });
        
        return {
            primary: this.mostCommon(formats),
            consistency: [...new Set(formats)].length === 1,
            variations: [...new Set(formats)],
            distribution: this.countOccurrences(formats)
        };
    },

    // Helper: Detects 2+ non-bullet lines OR 1 wrapped line with 2+ sentences
    isNarrativeParagraph(problem) {
        const lines = problem.lines;
        let nonBulletCount = 0;
        let nonBulletContent = '';
        
        for (const line of lines) {
            if (/^\s*[-*]\s+/.test(line)) break; // Stop at first bullet
            if (line.trim()) {
                nonBulletCount++;
                nonBulletContent += line.trim() + ' ';
            }
        }
        
        // Narrative: 2+ non-bullet lines before any bullets
        if (nonBulletCount >= 2) return true;
        
        // Narrative: 1 non-bullet line that contains 2+ sentences (handles wrapped paste)
        if (nonBulletCount === 1) {
            const sentences = nonBulletContent.split(/[.!?]\s/).filter(Boolean);
            if (sentences.length >= 2) return true;
        }
        
        return false;
    },

    // Helper: Detects exactly 1 non-bullet line
    hasOneLinerStructure(problem) {
        const lines = problem.lines;
        const bulletLines = lines.filter(l => /^\s*[-*]\s+/.test(l));
        const nonBulletLines = lines.filter(l => 
            !/^\s*[-*]\s+/.test(l) && l.trim()
        );
        
        // One-liner: exactly 1 non-bullet assessment + at least 1 bullet plan
        return nonBulletLines.length === 1 && bulletLines.length >= 1;
    },
    
    // Helper: Detects 0 non-bullet lines
    hasZeroNonBulletLines(problem) {
        const lines = problem.lines;
        const nonBulletLines = lines.filter(l => 
            !/^\s*[-*]\s+/.test(l) && l.trim()
        );
        
        // Minimal: 0 non-bullet assessment lines (all content is bullets)
        return nonBulletLines.length === 0;
    },

    // CATEGORY 2: PLAN FORMAT DETECTION (FIXED)
    // Now "assessment-aware"
    detectPlanFormat(problems, assessmentPatterns) {
        const formats = problems.map((problem, index) => {
            // Get the assessment type for *this specific problem*
            const assessmentType = assessmentPatterns.variations[index] || assessmentPatterns.primary;
            
            // Get *only* the plan content
            const planContent = this.getPlanContent(problem, assessmentType);
            
            // Run checks *only* on the plan content (ordered from most specific to least specific)
            if (this.hasCategorySubheadings(planContent)) {
                return 'categorized';  // Most specific: has section headers
            }
            if (this.isHybridPlan(planContent)) {
                return 'hybrid';  // Moderately specific: mix of sentences + bullets (FIX: BUG #4 - check before narrative)
            }
            if (this.isPlanNarrative(planContent)) {
                return 'narrative';  // Broader: just needs future tense sentences
            }
            
            // Default to simple bullets (least specific fallback)
            return 'simple_bullets';
        });
        
        return {
            primary: this.mostCommon(formats),
            consistency: [...new Set(formats)].length === 1,
            variations: [...new Set(formats)],
            distribution: this.countOccurrences(formats)
        };
    },

    // Helper: Isolates plan content based on assessment type
    getPlanContent(problem, assessmentType) {
        const lines = problem.content.split('\n');
        let planLines = [];

        if (assessmentType === 'minimal') {
            // The whole content is the plan
            planLines = lines;
        } else if (assessmentType === 'oneliner-phrase') {
            // Plan starts *after* the first non-bullet line
            let foundNonBullet = false;
            for (const line of lines) {
                if (!/^\s*[-*]\s+/.test(line) && line.trim() && !foundNonBullet) {
                    foundNonBullet = true;
                    continue; // Skip this assessment line
                }
                if (foundNonBullet) {
                    planLines.push(line);
                }
            }
        } else if (assessmentType === 'narrative') {
            // Plan starts at the *first bullet* OR all content after assessment sentences (FIX: BUG #1)
            let foundFirstBullet = false;
            let assessmentLineCount = 0;
            
            for (const line of lines) {
                if (/^\s*[-*]\s+/.test(line)) {
                    foundFirstBullet = true;
                }
                if (foundFirstBullet) {
                    planLines.push(line);
                } else if (line.trim() && !/^\s*[-*]\s+/.test(line)) {
                    // Count non-bullet lines (assessment lines)
                    assessmentLineCount++;
                    // After 2+ assessment lines, assume plan starts (skip these lines)
                    if (assessmentLineCount > 2) {
                        planLines.push(line);
                    }
                } else if (line.trim() === '' && assessmentLineCount > 0) {
                    // Once we've seen assessment lines, include everything after
                    planLines.push(line);
                }
            }
            
            // Fallback: if no bullets found and we have content, take everything after first 2 lines
            if (planLines.length === 0 && lines.length > 2) {
                planLines = lines.slice(2);
            }
        }
        
        return planLines.join('\n');
    },

    // Helper: Checks for subheadings (operates on planContent)
    hasCategorySubheadings(text) {
        // Check for bold subheadings with common medical categories
        const boldSubheadingPatterns = [
            /\*\*Diagnostics:\*\*/i,
            /\*\*Therapeutics:\*\*/i,
            /\*\*Medications:\*\*/i,
            /\*\*Follow-up:\*\*/i,
            /\*\*Referrals:\*\*/i,
            /\*\*Consults:\*\*/i,
            /\*\*Patient Education:\*\*/i,
            /\*\*Tests:\*\*/i,
            /\*\*Assessment:\*\*/i,
            /\*\*Plan:\*\*/i,
            /\*\*Next Steps:\*\*/i,
            /\*\*Prescriptions:\*\*/i,
            /\*\*Discharge:\*\*/i,
            /\*\*Situational awareness:\*\*/i
        ];
        
        // Check for bullet-formatted subheadings (e.g., "- Diagnostics:")
        const bulletSubheadingPattern = /^\s*[-*]\s+(Diagnostics|Therapeutics|Medications|Follow-up|Tests|Prescriptions|Referrals|Consults|Next Steps|Patient Education|Discharge|Assessment|Plan|Situational awareness):/im;
        
        // Check for plain capitalized words with colon (on their own line)
        const plainSubheadingPattern = /^(Diagnostics|Therapeutics|Medications|Follow-up|Tests|Prescriptions|Referrals|Consults|Next Steps|Patient Education|Discharge|Assessment|Plan|Situational awareness):/im;
        
        const hasBoldSubheading = boldSubheadingPatterns.some(pattern => pattern.test(text));
        const hasBulletSubheading = bulletSubheadingPattern.test(text);
        const hasPlainSubheading = plainSubheadingPattern.test(text);
        
        return hasBoldSubheading || hasBulletSubheading || hasPlainSubheading;
    },

    // Helper: Checks for narrative plan (operates on planContent)
    isPlanNarrative(text) {
        // Must have NO bullets (strict requirement)
        const bulletCount = (text.match(/^\s*[-*]\s+/gm) || []).length;
        if (bulletCount > 0) return false;
        
        // Must have multiple substantial sentences
        const sentences = (text.match(/[.!?]+/g) || []).length;
        if (sentences < 2) return false;
        
        // Must have future tense indicators
        const futureTenseVerbs = ['will', 'plan to', 'going to', 'intend to'];
        const hasFutureTense = futureTenseVerbs.some(verb => 
            text.toLowerCase().includes(verb)
        );
        if (!hasFutureTense) return false;
        
        // Must be substantial text
        const wordCount = text.split(/\s+/).length;
        const isSubstantial = wordCount >= 15;
        
        return isSubstantial;
    },

    // Helper: Checks for hybrid plan (operates on planContent)
    isHybridPlan(text) {
        const lines = text.split('\n').filter(l => l.trim());
        let substantialSentenceCount = 0;
        let bulletCount = 0;
        
        for (const line of lines) {
            const isBullet = /^\s*[-*]\s+/.test(line);
            
            if (isBullet) {
                bulletCount++;
            } else {
                // Check if it's a substantial sentence
                const hasPeriod = /[.!?]$/.test(line.trim());
                const wordCount = line.split(/\s+/).length;
                
                if (hasPeriod && wordCount >= 5) {
                    substantialSentenceCount++;
                }
            }
        }
        
        // Hybrid requires at least 1 substantial sentence AND at least 2 bullets
        return substantialSentenceCount >= 1 && bulletCount >= 2;
    },

    // CATEGORY 3: DETAIL MODIFIERS
    measureBrevity(problems) {
        const allItems = [];
        
        problems.forEach(problem => {
            const bullets = problem.content
                .split('\n')
                .filter(l => /^\s*[-*]\s+/.test(l))
                .map(l => l.replace(/^\s*[-*]\s+/, '').trim());
            
            allItems.push(...bullets);
        });
        
        if (allItems.length === 0) return null;
        
        const wordCounts = allItems.map(item => item.split(/\s+/).length);
        const avg = wordCounts.reduce((a, b) => a + b, 0) / wordCounts.length;
        const max = Math.max(...wordCounts);
        const min = Math.min(...wordCounts);
        
        let level;
        if (avg < 6) level = 'terse';
        else if (avg < 12) level = 'moderate';
        else level = 'verbose';
        
        return {
            average: Math.round(avg * 10) / 10,
            max: max,
            min: min,
            level: level
        };
    },

    detectJustification(problems) {
        let noneCount = 0;
        let briefCount = 0;
        let detailedCount = 0;
        
        problems.forEach(problem => {
            const bullets = problem.content.split('\n')
                .filter(l => /^\s*[-*]\s+/.test(l));
            
            bullets.forEach(bullet => {
                const rationaleWords = [' for ', ' to ', ' per ', ' given ', ' because '];
                const hasRationale = rationaleWords.some(word => 
                    bullet.toLowerCase().includes(word)
                );
                
                if (!hasRationale) {
                    noneCount++;
                } else {
                    const detailedWords = ['guideline', 'target', 'goal', 'standard', 'achieve'];
                    const isDetailed = detailedWords.some(word => 
                        bullet.toLowerCase().includes(word)
                    );
                    
                    if (isDetailed) detailedCount++;
                    else briefCount++;
                }
            });
        });
        
        const total = noneCount + briefCount + detailedCount;
        if (total === 0) return { level: 'unknown' };
        
        const percentNone = noneCount / total;
        const percentDetailed = detailedCount / total;
        
        let level;
        if (percentNone > 0.7) level = 'none';
        else if (percentDetailed > 0.4) level = 'detailed';
        else level = 'brief';
        
        return { level: level };
    },

    detectContingency(text) {
        const contingencyPatterns = [
            /if\s+(?:no|inadequate|poor)\s+response/i,
            /if\s+(?:worsening|worsens)/i,
            /return\s+if/i,
            /rtc\s+if/i,
            /escalate\s+to/i,
            /→/g,
            /consider\s+adding/i,
            /if\s+persistent/i
        ];
        
        const matches = contingencyPatterns
            .filter(pattern => pattern.test(text))
            .length;
        
        let level;
        if (matches === 0) level = 'none';
        else if (matches <= 2) level = 'simple';
        else level = 'detailed';
        
        return { level: level, present: matches > 0 };
    },

    // CATEGORY 4: STRUCTURAL ELEMENTS (FIXED)
    // problemFormat is now derived in analyze()
    
    detectBulletStyle(text) {
        const lines = text.split('\n');
        
        const hyphenCount = lines.filter(l => /^\s+-\s+/.test(l)).length;
        const asteriskCount = lines.filter(l => /^\s*\*\s+/.test(l) && !/\*\*/.test(l)).length;
        const numberCount = lines.filter(l => /^\s*\d+\.\s+/.test(l)).length;
        
        let style, count;
        if (hyphenCount > asteriskCount && hyphenCount > numberCount) {
            style = 'hyphen';
            count = hyphenCount;
        } else if (asteriskCount > numberCount) {
            style = 'asterisk';
            count = asteriskCount;
        } else if (numberCount > 0) {
            style = 'number';
            count = numberCount;
        } else {
            return { style: 'none', indent: 0 };
        }
        
        // Measure indentation
        const bulletLines = lines.filter(l => {
            if (style === 'hyphen') return /^\s+-\s+/.test(l);
            if (style === 'asterisk') return /^\s*\*\s+/.test(l) && !/\*\*/.test(l);
            if (style === 'number') return /^\s*\d+\.\s+/.test(l);
            return false;
        });
        
        const indent = bulletLines.length > 0 ? bulletLines[0].search(/\S/) : 0;
        
        return { style: style, indent: indent, count: count };
    },

    detectSpacing(text) {
        const hasBlankLines = /\n\s*\n/.test(text);
        return { blankLinesBetweenProblems: hasBlankLines };
    },

    // CATEGORY 5: VOICE & TONE
    detectVoice(text) {
        const firstPerson = (text.match(/\b(I will|I recommend|I plan|I started|I discussed)\b/gi) || []).length;
        const thirdPerson = (text.match(/\b(will|plan to|started|continue|recommend)\b/gi) || []).length - firstPerson;
        const passive = (text.match(/\b(was|were|will be|to be started|to be continued)\b/gi) || []).length;
        const patientCentric = (text.match(/\bpatient (will|prefers|wants|agrees|to)\b/gi) || []).length;
        
        const total = firstPerson + thirdPerson + passive + patientCentric;
        
        if (total === 0) return { voice: 'unknown' };
        
        const scores = {
            first_person: firstPerson,
            third_person: thirdPerson,
            passive: passive,
            patient_centric: patientCentric
        };
        
        const dominant = Object.keys(scores).reduce((a, b) => 
            scores[a] > scores[b] ? a : b
        );
        
        return { voice: dominant };
    },

    measureAbbreviationDensity(text) {
        const commonAbbreviations = [
            'RTC', 'PRN', 'BID', 'TID', 'QID', 'PO', 'IV', 'IM',
            'F/U', 'MMM', 'NDNT', 'OTC', 'AVS', 'PCMH', 'HTN',
            'DM', 'CHF', 'COPD', 'URI', 'UTI', 'SOB', 'CP', 'N/V'
        ];
        
        const found = commonAbbreviations.filter(abbr => 
            text.includes(abbr)
        );
        
        const words = text.split(/\s+/).length;
        const density = found.length / words * 100;
        
        let level;
        if (density > 5) level = 'high';
        else if (density > 2) level = 'moderate';
        else level = 'low';
        
        return {
            level: level,
            found: found,
            count: found.length
        };
    },

    // CONSISTENCY CHECKING WITH PATTERN INFERENCE
    checkConsistency(patterns, problems) {
        const issues = [];
        
        // Check assessment format consistency
        if (patterns.assessment.variations.length > 1) {
            const inference = this.inferAssessmentPattern(patterns.assessment, problems);
            issues.push({
                category: 'Assessment Format',
                message: `Mixed formats: ${patterns.assessment.variations.map(v => this.formatPatternName(v)).join(', ')}`,
                suggestion: inference.suggestion,
                rule: inference.rule
            });
        }
        
        // Check plan format consistency
        if (patterns.plan.variations.length > 1) {
            const inference = this.inferPlanPattern(patterns.plan, problems);
            issues.push({
                category: 'Plan Format',
                message: `Mixed formats: ${patterns.plan.variations.map(v => this.formatPatternName(v)).join(', ')}`,
                suggestion: inference.suggestion,
                rule: inference.rule
            });
        }
        
        // Check brevity variance
        if (patterns.brevity && patterns.brevity.max - patterns.brevity.min > 10) {
            issues.push({
                category: 'Brevity',
                message: `Wide range: ${patterns.brevity.min}-${patterns.brevity.max} words per bullet`,
                suggestion: 'AI will match source content complexity',
                rule: null
            });
        }
        
        return {
            isConsistent: issues.length === 0,
            issues: issues
        };
    },

    inferAssessmentPattern(assessmentData, problems) {
        const variations = assessmentData.variations;
        
        if (variations.includes('minimal') && variations.includes('oneliner-phrase')) {
            return {
                suggestion: 'Appears to use minimal assessment for simple problems, one-liner for problems needing context',
                rule: 'For straightforward problems, state the diagnosis only. For problems requiring clinical context, include a one-line summary.'
            };
        }
        
        // Generic mixed pattern
        return {
            suggestion: 'Multiple assessment styles detected - consider using consistent format or varying by problem complexity',
            rule: 'Adapt assessment detail to match the clinical complexity and decision-making required for each problem.'
        };
    },

    inferPlanPattern(planData, problems) {
        const variations = planData.variations;
        
        if (variations.includes('narrative') && variations.includes('simple_bullets')) {
            return {
                suggestion: 'May use narrative for complex plans, bullets for simple plans',
                rule: 'For complex problems, use narrative format. For straightforward action lists, use bullet points.'
            };
        }
        
        return {
            suggestion: 'Multiple plan formats detected',
            rule: 'Vary plan format based on complexity: narrative for multi-step reasoning, bullets for action lists.'
        };
    },

    formatPatternName(name) {
        const nameMap = {
            'narrative': 'Narrative',
            'oneliner-phrase': 'One-liner (phrase)',
            'minimal': 'Minimal (bullets only)',
            'simple_bullets': 'Simple bullets',
            'categorized': 'Categorized',
            'hybrid': 'Hybrid',
            'first_person': 'First person',
            'third_person': 'Third person',
            'passive': 'Passive',
            'patient_centric': 'Patient-centric',
            'caps': 'ALL CAPS',
            'capitalized-colon': 'Capitalized:',
            'capitalized': 'Capitalized'
        };
        return nameMap[name] || this.capitalize(name.replace(/-/g, ' ').replace(/_/g, ' '));
    },
    
    capitalize(str) {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    },

    // UTILITY FUNCTIONS
    mostCommon(arr) {
        if (arr.length === 0) return null;
        const counts = {};
        arr.forEach(item => counts[item] = (counts[item] || 0) + 1);
        return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    },

    countOccurrences(arr) {
        const counts = {};
        arr.forEach(item => counts[item] = (counts[item] || 0) + 1);
        return counts;
    }
};

// =============================================================================
// PROMPT GENERATOR (FIXED)
// =============================================================================
const PromptGenerator = {
    generate(data) {
        const sections = [];
        
        sections.push(this.generateTask());
        sections.push('\n---\n');
        
        sections.push(this.generateOutputStructure(data.patterns));
        sections.push('\n---\n');
        
        sections.push(this.generateRules(data.patterns, data.customRules));
        sections.push('\n---\n');
        
        if (data.boilerplates.length > 0) {
            sections.push(this.generateBoilerplate(data.boilerplates));
            sections.push('\n---\n');
        }
        
        sections.push('## Few-Shot Examples\n\n');
        sections.push(data.examples.trim());
        
        return sections.join('');
    },

    generateTask() {
        return 'Reformat the assessment and plan into a structured, problem-oriented format. The output should be extremely concise for rapid scanning.';
    },

    generateOutputStructure(patterns) {
        let output = '## Output Structure for Each Problem/Diagnosis\n\n';
        
        if (patterns.structure.problemFormat === 'bold') {
            output += '**[Problem/Diagnosis Name]**\n';
        } else if (patterns.structure.problemFormat === 'caps') {
            output += '[PROBLEM/DIAGNOSIS NAME]\n';
        } else {
            output += '[Problem/Diagnosis Name]\n';
        }
        
        // Assessment structure (removed 'assessment-first-bullet')
        output += this.generateAssessmentStructure(patterns.assessment);
        
        // Plan structure
        output += this.generatePlanStructure(patterns.plan, patterns.structure.bulletStyle);
        
        return output;
    },

    generateAssessmentStructure(assessment) {
        const indent = ' '.repeat(assessment.primary === 'oneliner-phrase' ? 1 : 8);
        const bullet = assessment.primary === 'oneliner-phrase' ? '-' : '*';

        const templates = {
            'narrative': '\n[Write assessment as a flowing paragraph with complete sentences explaining clinical reasoning]\n\n',
            'oneliner-phrase': `\n${indent}${bullet} [brief finding, key detail, or status]\n\n`,
            'minimal': '\n' // Minimal means straight to plan bullets
        };
        
        return templates[assessment.primary] || '\n';
    },

    generatePlanStructure(plan, bulletStyle) {
        const indent = ' '.repeat(bulletStyle.indent || 8);
        const bullet = bulletStyle.style === 'hyphen' ? '-' : 
                      bulletStyle.style === 'asterisk' ? '*' : 
                      bulletStyle.style === 'number' ? '1.' : '-';
        
        const templates = {
            narrative: '[Write plan as flowing paragraph with future tense verbs]\n',
            simple_bullets: `${indent}${bullet} [Action item]\n${indent}${bullet} [Action item]\n`,
            categorized: `**Diagnostics:**\n${indent}${bullet} [Test/study]\n\n**Therapeutics:**\n${indent}${bullet} [Medication/treatment]\n\n**Follow-up:**\n${indent}${bullet} [Follow-up plan]\n`,
            hybrid: `[Opening narrative sentence explaining plan strategy]\n${indent}${bullet} [Action item]\n${indent}${bullet} [Action item]\n`
        };
        
        return templates[plan.primary] || templates.simple_bullets;
    },

    generateRules(patterns, customRules) {
        const rules = [];
        let num = 1;
        
        // Assessment instructions
        const assessmentInst = this.getAssessmentInstruction(patterns.assessment);
        if (assessmentInst) {
            rules.push(`${num}. ${assessmentInst}`);
            num++;
        }
        
        if (!patterns.consistency.isConsistent) {
            const assessmentIssue = patterns.consistency.issues.find(i => i.category === 'Assessment Format');
            if (assessmentIssue && assessmentIssue.rule) {
                rules.push(`${num}. ${assessmentIssue.rule}`);
                num++;
            }
        }
        
        // Plan instructions
        const planInst = this.getPlanInstruction(patterns.plan);
        if (planInst) {
            rules.push(`${num}. ${planInst}`);
            num++;
        }
        
        if (!patterns.consistency.isConsistent) {
            const planIssue = patterns.consistency.issues.find(i => i.category === 'Plan Format');
            if (planIssue && planIssue.rule) {
                rules.push(`${num}. ${planIssue.rule}`);
                num++;
            }
        }
        
        // Problem formatting
        if (patterns.structure.problemFormat === 'bold') {
            rules.push(`${num}. Bold all problem/diagnosis names using **Problem** format`);
            num++;
        } else if (patterns.structure.problemFormat === 'caps') {
            rules.push(`${num}. Format all problem/diagnosis names in ALL CAPS`);
            num++;
        }
        
        // Bullet style
        if (patterns.structure.bulletStyle.style !== 'none') {
            const bulletChar = patterns.structure.bulletStyle.style === 'hyphen' ? 'hyphen (-)' :
                             patterns.structure.bulletStyle.style === 'asterisk' ? 'asterisk (*)' :
                             'numbers';
            rules.push(`${num}. Use ${bulletChar} for all bullets`);
            num++;
            
            if (patterns.structure.bulletStyle.indent > 0) {
                rules.push(`${num}. Indent all bullets with ${patterns.structure.bulletStyle.indent} spaces`);
                num++;
            }
        }
        
        // Brevity
        if (patterns.brevity) {
            if (patterns.brevity.level === 'terse') {
                rules.push(`${num}. Keep bullets extremely brief (under ${Math.ceil(patterns.brevity.average + 2)} words per bullet)`);
                num++;
            } else if (patterns.brevity.level === 'verbose') {
                rules.push(`${num}. Write detailed bullets with full context (approximately ${Math.ceil(patterns.brevity.average)} words each)`);
                num++;
            }
        }
        
        // Justification
        if (patterns.justification.level === 'none') {
            rules.push(`${num}. List actions only without explanation or rationale`);
            num++;
        } else if (patterns.justification.level === 'detailed') {
            rules.push(`${num}. Include detailed rationale for each action, referencing guidelines when relevant`);
            num++;
        }
        
        // Abbreviations
        if (patterns.abbreviations.level === 'high') {
            const abbrList = patterns.abbreviations.found.slice(0, 8).join(', ');
            rules.push(`${num}. Use extensive medical abbreviations (e.g., ${abbrList}, etc.)`);
            num++;
        } else if (patterns.abbreviations.level === 'low') {
            rules.push(`${num}. Minimize abbreviations. Write out most terms in full`);
            num++;
        }
        
        // Contingency
        if (patterns.contingency.level === 'detailed') {
            rules.push(`${num}. Include detailed if/then contingency plans for anticipated scenarios`);
            num++;
        } else if (patterns.contingency.level === 'simple') {
            rules.push(`${num}. Include simple return precautions (e.g., "return if symptoms worsen")`);
            num++;
        }
        
        // Voice
        if (patterns.voice.voice === 'first_person') {
            rules.push(`${num}. Use first-person active voice (e.g., "I will start," "I recommend")`);
            num++;
        } else if (patterns.voice.voice === 'passive') {
            rules.push(`${num}. Use passive voice constructions where appropriate`);
            num++;
        }
        
        // Core rules
        rules.push(`${num}. Never fabricate or infer information not present in the source text`);
        num++;
        
        if (patterns.structure.spacing.blankLinesBetweenProblems) {
            rules.push(`${num}. Insert a blank line between different problems`);
            num++;
        }
        
        rules.push(`${num}. No references`);
        num++;
        
        // Custom rules
        if (customRules.trim()) {
            const customList = customRules.split('\n').filter(r => r.trim());
            customList.forEach(rule => {
                const clean = rule.replace(/^[\s\-*\d.]+/, '').trim();
                if (clean) {
                    rules.push(`${num}. ${clean}`);
                    num++;
                }
            });
        }
        
        return '## Formatting Rules\n\n' + rules.join('\n');
    },

    getAssessmentInstruction(assessment) {
        const templates = {
            'narrative': "Write the assessment as a flowing narrative paragraph. Use complete sentences that explain clinical reasoning. Connect findings to conclusions using words like 'given,' 'therefore,' and 'likely'",
            'oneliner-phrase': "After each problem name, write a brief, single-line phrase summarizing key clinical facts. This line should not be a full sentence.",
            'minimal': "Do not write a separate assessment. Proceed directly from the problem name to the plan (which will be bullet points)."
        };
        
        return templates[assessment.primary];
    },

    getPlanInstruction(plan) {
        const templates = {
            'narrative': "Write the plan as a flowing paragraph using complete sentences. Use future tense ('will start,' 'plan to'). Explain actions in narrative form",
            'simple_bullets': "Format the plan as bullet points. Write brief action phrases. Do not use category subheadings",
            'categorized': "Organize the plan into categories with subheadings (e.g., Diagnostics:, Therapeutics:, Follow-up:, Tests:, Medications:, etc.). Under each subheading, list relevant action items as bullet points. Use capitalized words followed by colons for subheadings",
            'hybrid': "Begin with a brief narrative sentence explaining the overall plan strategy. Then list specific action items as bullet points below"
        };
        
        return templates[plan.primary];
    },

    generateBoilerplate(boilerplates) {
        let section = '## Conditional Boilerplate Text\n\n';
        section += '[Insert after the bulleted list when applicable. This text should be italicized.]\n\n';
        
        boilerplates.forEach(bp => {
            section += `If ${bp.hook} discussed:\n`;
            section += `"${bp.text}"\n\n`;
        });
        
        return section;
    }
};

// =============================================================================
// TEMPLATE MANAGEMENT
// =============================================================================
function selectTemplate(templateName) {
    currentTemplate = templateName;
    
    document.querySelectorAll('.template-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Find the button that was clicked and add 'active' class
    // Using event.currentTarget ensures we get the button, even if user clicks on text inside it
    if (event && event.currentTarget) {
         event.currentTarget.classList.add('active');
    } else {
        // Fallback for programmatic call
        document.querySelector(`.template-btn[onclick="selectTemplate('${templateName}')"]`).classList.add('active');
    }
    
    document.getElementById('examples').value = '';
    document.getElementById('customRules').value = '';
    document.getElementById('boilerplateContainer').innerHTML = '';
    document.getElementById('patternFeedback').classList.remove('show');
    boilerplateCount = 0;
    detectedPatterns = null;
    
    if (templateName === 'pithy') {
        loadTemplate(TEMPLATES.pithy);
    }
}

function loadTemplate(template) {
    document.getElementById('examples').value = template.examples;
    
    template.boilerplates.forEach(bp => {
        addBoilerplate();
        const entries = document.querySelectorAll('.boilerplate-entry');
        const lastEntry = entries[entries.length - 1];
        lastEntry.querySelector('.boilerplate-hook').value = bp.hook;
        lastEntry.querySelector('.boilerplate-text').value = bp.text;
    });
    
    // Auto-analyze the template
    setTimeout(analyzeExamples, 100); 
}

// =============================================================================
// UI INTERACTIONS
// =============================================================================
function toggleExamples() {
    const content = document.getElementById('exampleContent');
    const icon = document.getElementById('exampleToggle');
    
    if (content.classList.contains('show')) {
        content.classList.remove('show');
        icon.textContent = '+';
    } else {
        content.classList.add('show');
        icon.textContent = '−';
    }
}

function toggleCustomRules() {
    const content = document.getElementById('customRulesContent');
    content.classList.toggle('show');
}

function analyzeExamples() {
    const examples = document.getElementById('examples').value;
    const feedback = document.getElementById('patternFeedback');
    
    if (!examples.trim()) {
        alert('Please paste your examples first!');
        feedback.classList.remove('show');
        return;
    }
    
    try {
        detectedPatterns = PatternAnalyzer.analyze(examples);
        
        if (detectedPatterns && detectedPatterns.error) {
            alert(detectedPatterns.error);
            feedback.classList.remove('show');
            return;
        }
        
        if (!detectedPatterns || !detectedPatterns.assessment) {
            alert('Could not detect patterns. Please make sure your examples are properly formatted.');
            feedback.classList.remove('show');
            return;
        }
        
        displayPatternFeedback(detectedPatterns);

    } catch (e) {
        console.error("Pattern analysis failed:", e);
        alert('An error occurred during analysis. Please check the console (F12) for details.');
        feedback.classList.remove('show');
        detectedPatterns = null;
    }
}

function displayPatternFeedback(patterns) {
    const feedback = document.getElementById('patternFeedback');
    const grid = document.getElementById('patternGrid');
    const issuesDiv = document.getElementById('consistencyIssues');
    const noteDiv = document.getElementById('patternNote');
    
    let gridHTML = '';
    
    if (patterns.assessment) {
        gridHTML += `
            <div class="pattern-item">
                <strong>Assessment Format</strong>
                <div class="pattern-value">${PatternAnalyzer.formatPatternName(patterns.assessment.primary)}</div>
            </div>
        `;
    }
    
    if (patterns.plan) {
        gridHTML += `
            <div class="pattern-item">
                <strong>Plan Format</strong>
                <div class="pattern-value">${PatternAnalyzer.formatPatternName(patterns.plan.primary)}</div>
            </div>
        `;
    }
    
    if (patterns.brevity) {
        gridHTML += `
            <div class="pattern-item">
                <strong>Brevity Level</strong>
                <div class="pattern-value">${PatternAnalyzer.capitalize(patterns.brevity.level)} (avg ${patterns.brevity.average} words)</div>
            </div>
        `;
    }
    
    if (patterns.justification && patterns.justification.level !== 'unknown') {
        gridHTML += `
            <div class="pattern-item">
                <strong>Justification</strong>
                <div class="pattern-value">${PatternAnalyzer.capitalize(patterns.justification.level)}</div>
            </div>
        `;
    }
    
    if (patterns.structure.bulletStyle.style !== 'none') {
        const bulletName = patterns.structure.bulletStyle.style === 'hyphen' ? 'Hyphen (-)' :
                          patterns.structure.bulletStyle.style === 'asterisk' ? 'Asterisk (*)' :
                          'Numbered';
        gridHTML += `
            <div class="pattern-item">
                <strong>Bullet Style</strong>
                <div class="pattern-value">${bulletName}, ${patterns.structure.bulletStyle.indent}-space indent</div>
            </div>
        `;
    }
    
    if (patterns.structure.problemFormat) {
        gridHTML += `
            <div class="pattern-item">
                <strong>Problem Names</strong>
                <div class="pattern-value">${PatternAnalyzer.formatPatternName(patterns.structure.problemFormat)}</div>
            </div>
        `;
    }
    
    if (patterns.voice && patterns.voice.voice !== 'unknown') {
        gridHTML += `
            <div class="pattern-item">
                <strong>Voice</strong>
                <div class="pattern-value">${PatternAnalyzer.formatPatternName(patterns.voice.voice)}</div>
            </div>
        `;
    }
    
    if (patterns.abbreviations) {
        gridHTML += `
            <div class="pattern-item">
                <strong>Abbreviations</strong>
                <div class="pattern-value">${PatternAnalyzer.capitalize(patterns.abbreviations.level)} density (${patterns.abbreviations.count} found)</div>
            </div>
        `;
    }
    
    if (patterns.contingency && patterns.contingency.present) {
        gridHTML += `
            <div class="pattern-item">
                <strong>Contingency Planning</strong>
                <div class="pattern-value">${PatternAnalyzer.capitalize(patterns.contingency.level)}</div>
            </div>
        `;
    }
    
    grid.innerHTML = gridHTML;
    
    if (patterns.consistency && !patterns.consistency.isConsistent) {
        feedback.classList.add('warning');
        issuesDiv.innerHTML = `
            <div class="consistency-issues">
                <h5>⚠️ Inconsistencies Detected</h5>
                <ul>
                    ${patterns.consistency.issues.map(issue => `
                        <li><strong>${issue.category}:</strong> ${issue.message}. ${issue.suggestion}</li>
                    `).join('')}
                </ul>
            </div>
        `;
        
        noteDiv.textContent = 'The generator will create flexible instructions to handle these variations. The AI will adapt based on content complexity.';
    } else {
        feedback.classList.remove('warning');
        issuesDiv.innerHTML = '';
        noteDiv.textContent = 'Patterns are consistent! The generator will create precise instructions matching your style.';
    }
    
    feedback.classList.add('show');
}


// =============================================================================
// BOILERPLATE MANAGEMENT
// =============================================================================
function addBoilerplate() {
    boilerplateCount++;
    const container = document.getElementById('boilerplateContainer');
    
    const entry = document.createElement('div');
    entry.className = 'boilerplate-entry';
    entry.id = `boilerplate-${boilerplateCount}`;
    entry.innerHTML = `
        <div class="boilerplate-header">
            <h4>Boilerplate Phrase ${boilerplateCount}</h4>
            <button type="button" class="remove-btn" onclick="removeBoilerplate(${boilerplateCount})">Remove</button>
        </div>
        <div style="margin-bottom: 15px;">
            <label style="font-weight: 500; font-size: 0.95em; margin-bottom: 5px; display: block;">When to insert this?</label>
            <input type="text" class="boilerplate-hook" placeholder='e.g., "well child check", "illness", "injury", "ear infection"' style="width: 100%;">
            <div class="help-text">What triggers this text to appear?</div>
        </div>
        <div>
            <label style="font-weight: 500; font-size: 0.95em; margin-bottom: 5px; display: block;">Boilerplate Text</label>
            <textarea class="boilerplate-text" rows="3" placeholder="Enter the text to insert when this condition is met..." style="width: 100%;"></textarea>
        </div>
    `;
    
    container.appendChild(entry);
}

function removeBoilerplate(id) {
    const entry = document.getElementById(`boilerplate-${id}`);
    if (entry) {
        entry.remove();
    }
}

function collectBoilerplates() {
    const entries = document.querySelectorAll('.boilerplate-entry');
    const boilerplates = [];
    
    entries.forEach(entry => {
        const hook = entry.querySelector('.boilerplate-hook').value.trim();
        const text = entry.querySelector('.boilerplate-text').value.trim();
        
        if (hook && text) {
            boilerplates.push({ hook, text });
        }
    });
    
    return boilerplates;
}

// =============================================================================
// FORM SUBMISSION
// =============================================================================
document.getElementById('promptForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const examples = document.getElementById('examples').value;
    
    if (!examples.trim()) {
        alert('Please provide your few-shot examples!');
        return;
    }
    
    // Re-analyze or use existing analysis
    if (!detectedPatterns) {
        analyzeExamples(); // Run analysis if it hasn't been run
        if (!detectedPatterns) { // Check again if analysis failed
            alert('Could not analyze patterns. Please make sure your examples are properly formatted and click "Analyze Examples" first.');
            return;
        }
    }
    
    // Check for analysis errors
    if (detectedPatterns.error) {
        alert(`Cannot generate prompt. Analysis error: ${detectedPatterns.error}`);
        return;
    }
    
    const data = {
        examples: examples,
        boilerplates: collectBoilerplates(),
        customRules: document.getElementById('customRules').value,
        patterns: detectedPatterns
    };
    
    try {
        const prompt = PromptGenerator.generate(data);
        
        const output = document.getElementById('output');
        output.textContent = prompt;
        output.classList.remove('empty');
        
        updateCharCount(prompt.length);
        
        document.getElementById('copyBtn').disabled = false;
        document.getElementById('downloadBtn').disabled = false;
        
        // Scroll to the output section
        output.scrollIntoView({ behavior: 'smooth', block: 'start' });

    } catch (e) {
        console.error("Prompt generation failed:", e);
        alert('An error occurred during prompt generation. Please check the console (F12) for details.');
    }
});

// =============================================================================
// OUTPUT ACTIONS
// =============================================================================
function updateCharCount(count) {
    const charCount = document.getElementById('charCount');
    charCount.textContent = `${count.toLocaleString()} / 5,000`;
    
    charCount.classList.remove('good', 'warning', 'danger');
    if (count > 5000) {
        charCount.classList.add('danger');
    } else if (count > 4500) {
        charCount.classList.add('warning');
    } else {
        charCount.classList.add('good');
    }
}

document.getElementById('copyBtn').addEventListener('click', async function() {
    const text = document.getElementById('output').textContent;
    
    if (!navigator.clipboard) {
        alert('Clipboard API not available. Please copy manually.');
        return;
    }
    
    try {
        await navigator.clipboard.writeText(text);
        this.textContent = '✓ Copied!';
        this.classList.add('copied');
        
        setTimeout(() => {
            this.textContent = '📋 Copy to Clipboard';
            this.classList.remove('copied');
        }, 2000);
    } catch (err) {
        console.error('Failed to copy text: ', err);
        alert('Failed to copy. Please select and copy manually.');
    }
});

document.getElementById('downloadBtn').addEventListener('click', function() {
    const text = document.getElementById('output').textContent;
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    
    const timestamp = new Date().toISOString().split('T')[0];
    const filename = `ap_prompt_${timestamp}.txt`;
    
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});
