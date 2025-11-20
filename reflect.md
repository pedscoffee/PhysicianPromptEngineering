---
layout: page
title: "Reflect"
description: "A mobile-first interactive tool for diagnostic reflection, featuring frameworks, cognitive biases, and metacognitive strategies."
permalink: /reflect/
---

<style>
    :root {
        --primary: #059669;
        --primary-hover: #047857;
        --secondary: #2563eb;
        --bg-light: #f3f4f6;
        --card-bg: #ffffff;
        --text-main: #1f2937;
        --text-muted: #6b7280;
        --border: #e5e7eb;
        
        /* Category colors */
        --framework-blue: #3b82f6;
        --bias-orange: #f59e0b;
        --strategy-purple: #8b5cf6;
        --anatomic-teal: #14b8a6;
    }

    * {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }

    body {
        background-color: var(--bg-light);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        margin: 0;
        overflow-x: hidden; /* Prevent horizontal scroll */
    }

    /* Hero Section */
    .hero {
        background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
        padding: 60px 30px;
        border-radius: 12px;
        margin-bottom: 20px;
        text-align: center;
    }

    .hero h1 {
        font-size: 2.5em;
        margin-bottom: 15px;
        color: #065f46;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
    }

    .hero-subtitle {
        font-size: 1.2em;
        color: #047857;
        margin-bottom: 20px;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
        line-height: 1.8;
    }

    /* Premium Banner */
    .premium-banner {
        background: #fff7ed;
        border: 1px solid #fdba74;
        padding: 15px;
        border-radius: 8px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        gap: 15px;
    }

    /* Layout Containers */
    .tool-container {
        max-width: 100%;
        margin: 0 auto;
        padding: 10px;
        display: flex;
        flex-direction: column;
        height: 110vh; /* Significantly taller for mobile */
        min-height: 1000px; /* Ensure plenty of vertical space */
        position: relative;
    }

    /* Legend */
    .category-legend {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
        margin-bottom: 10px;
        font-size: 0.75rem;
        flex-shrink: 0;
    }

    .legend-item {
        display: flex;
        align-items: center;
        gap: 5px;
        color: var(--text-muted);
        background: white;
        padding: 6px 12px;
        border-radius: 12px;
        box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        cursor: pointer;
        transition: transform 0.1s, background 0.1s;
        user-select: none;
    }

    .legend-item:active {
        transform: scale(0.95);
        background: #f9fafb;
    }

    .legend-color {
        width: 10px;
        height: 10px;
        border-radius: 50%;
    }

    /* Canvas Area */
    .tile-canvas {
        flex-grow: 1;
        position: relative;
        background: #ffffff; /* Optional: slight contrast from page bg */
        border-radius: 16px;
        box-shadow: inset 0 0 20px rgba(0,0,0,0.02);
        overflow: hidden;
        touch-action: none; /* Important for custom drag handling */
        border: 1px solid rgba(0,0,0,0.05);
    }

    /* Tile Styles */
    .tile {
        position: absolute;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        cursor: grab;
        color: white;
        font-weight: 600;
        font-size: 0.8rem;
        line-height: 1.2;
        padding: 8px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08);
        user-select: none;
        transform-origin: center center;
        will-change: transform, left, top;
        transition: box-shadow 0.2s;
        z-index: 10;
    }

    .tile:active {
        cursor: grabbing;
        box-shadow: 0 8px 12px rgba(0,0,0,0.15);
        z-index: 20;
    }

    /* Considered State Indicator */
    .tile.considered::after {
        content: '✓';
        position: absolute;
        top: 0px;
        right: 0px;
        background: white;
        color: var(--primary);
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        font-weight: 800;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        border: 2px solid var(--bg-light);
    }

    /* Expanded State (Overlay) */
    .expanded-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.85);
        backdrop-filter: blur(4px);
        z-index: 50;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
    }

    .expanded-overlay.active {
        opacity: 1;
        pointer-events: auto;
    }

    .expanded-card {
        width: 90%;
        max-width: 400px;
        background: white;
        border-radius: 20px;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        overflow: hidden;
        transform: scale(0.9);
        transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        display: flex;
        flex-direction: column;
        max-height: 80vh;
    }

    .expanded-overlay.active .expanded-card {
        transform: scale(1);
    }

    .card-header {
        padding: 20px;
        color: white;
        position: relative;
    }

    .card-badge {
        display: inline-block;
        padding: 4px 8px;
        background: rgba(255,255,255,0.2);
        border-radius: 12px;
        font-size: 0.75rem;
        margin-bottom: 8px;
        backdrop-filter: blur(4px);
    }

    .card-title {
        font-size: 1.5rem;
        margin: 0;
        font-weight: 700;
    }

    .card-body {
        padding: 24px;
        overflow-y: auto;
    }

    .card-definition {
        font-size: 1rem;
        color: var(--text-main);
        line-height: 1.6;
        margin-bottom: 20px;
    }

    .card-question {
        background: #f8fafc;
        border-left: 4px solid var(--primary);
        padding: 16px;
        border-radius: 0 8px 8px 0;
        font-weight: 600;
        color: var(--text-main);
        font-size: 1.05rem;
        line-height: 1.5;
        margin-bottom: 24px;
    }

    .card-actions {
        display: flex;
        gap: 12px;
        padding-top: 10px;
        border-top: 1px solid var(--border);
    }

    .btn-action {
        flex: 1;
        padding: 12px;
        border-radius: 8px;
        border: none;
        font-weight: 600;
        font-size: 1rem;
        cursor: pointer;
        transition: background 0.2s;
    }

    .btn-primary {
        background: var(--primary);
        color: white;
    }
    .btn-primary:hover { background: var(--primary-hover); }

    .btn-secondary {
        background: #f3f4f6;
        color: var(--text-main);
    }
    .btn-secondary:hover { background: #e5e7eb; }

    /* Mobile optimizations */
    @media (min-width: 768px) {
        .tile {
            width: 130px !important; /* Override JS inline style for desktop */
            height: 130px !important;
            font-size: 0.9rem;
        }
        .tool-container {
            height: 800px;
        }
    }
</style>

<!-- Hero Section -->
<div class="hero">
    <div class="container">
        <h1>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 40px; height: 40px;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
            Reflect
        </h1>
        <p class="hero-subtitle">
            A metacognitive tool for diagnostic reasoning. Explore frameworks, biases, and strategies to refine your clinical thinking.
        </p>
    </div>
</div>

<div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 1.5rem;">
    <!-- Premium Banner -->
    <div class="premium-banner">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 24px; height: 24px; color: #f59e0b;">
            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
        </svg>
        <div>
            <strong style="color: #9a3412;">Premium Feature</strong>
            <p style="margin: 0; color: #c2410c; font-size: 0.9em;">This tool is part of our Premium suite. Please consider supporting the project if you find it useful.</p>
        </div>
    </div>

    <div class="tool-container">
        <div class="category-legend">
            <div class="legend-item" onclick="app.focusCategory('Diagnostic Framework')">
                <span class="legend-color" style="background: var(--framework-blue);"></span>
                Frameworks
            </div>
            <div class="legend-item" onclick="app.focusCategory('Cognitive Bias')">
                <span class="legend-color" style="background: var(--bias-orange);"></span>
                Biases
            </div>
            <div class="legend-item" onclick="app.focusCategory('Metacognitive Strategy')">
                <span class="legend-color" style="background: var(--strategy-purple);"></span>
                Strategies
            </div>
            <div class="legend-item" onclick="app.focusCategory('Anatomic Approach')">
                <span class="legend-color" style="background: var(--anatomic-teal);"></span>
                Anatomic
            </div>
        </div>

        <div id="tile-canvas" class="tile-canvas">
            <!-- Tiles injected by JS -->
        </div>

        <!-- Expanded Card Overlay -->
        <div id="expanded-overlay" class="expanded-overlay">
            <div class="expanded-card" id="expanded-card">
                <div class="card-header" id="card-header">
                    <span class="card-badge" id="card-category">Category</span>
                    <h2 class="card-title" id="card-title">Title</h2>
                </div>
                <div class="card-body">
                    <p class="card-definition" id="card-definition">Definition goes here.</p>
                    <div class="card-question" id="card-question">Reflection question goes here?</div>
                    
                    <div class="card-actions">
                        <button class="btn-action btn-secondary" onclick="app.closeCard()">Close</button>
                        <button class="btn-action btn-primary" onclick="app.markConsidered()">Mark Considered</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
/**
 * Clinical Metacognition Tool
 * A physics-based interactive reflection tool.
 */

const DATA = {
    frameworks: [
        { id: "vascular", label: "Vascular", def: "Conditions caused by problems with blood vessels, blood flow, or perfusion.", q: "Could this be explained by a problem with blood flow - either too much, too little, or flow to the wrong place?" },
        { id: "infectious", label: "Infectious", def: "Diseases caused by pathogenic organisms including bacteria, viruses, fungi, parasites, or prions.", q: "What infectious exposures or risk factors might be relevant? Could an occult infection explain this?" },
        { id: "neoplastic", label: "Neoplastic", def: "Abnormal cell growth including benign tumors, malignancies, and paraneoplastic syndromes.", q: "Even if unlikely, could malignancy be presenting atypically here?" },
        { id: "degenerative", label: "Degenerative", def: "Progressive deterioration of tissue or organ function, often age-related or due to chronic wear.", q: "Is there an underlying progressive, degenerative process that could tie these findings together?" },
        { id: "iatrogenic", label: "Iatrogenic / Intoxication", def: "Harm caused by medical interventions, medications, drugs of abuse, or environmental toxins.", q: "Could current treatments, medications, or exposures be causing or contributing to this presentation?" },
        { id: "congenital", label: "Congenital", def: "Conditions present from birth, whether structural, genetic, or due to developmental abnormalities.", q: "Might there be a congenital or genetic condition that's been previously undiagnosed or is now decompensating?" },
        { id: "autoimmune", label: "Autoimmune", def: "Conditions where the immune system inappropriately attacks the body's own tissues.", q: "Could autoimmunity explain these findings? What other features would you expect to see?" },
        { id: "traumatic", label: "Traumatic", def: "Injury from physical force, mechanical impact, or repetitive stress - recent or remote.", q: "Has there been any trauma, even seemingly minor or distant in time, that could be relevant?" },
        { id: "endocrine", label: "Endocrine / Metabolic", def: "Disorders of hormones, metabolism, or biochemical balance affecting multiple organ systems.", q: "Could a hormonal or metabolic derangement be the unifying explanation for these symptoms?" },
        { id: "inflammatory", label: "Inflammatory", def: "Non-autoimmune inflammatory processes and dysregulation of inflammatory pathways.", q: "Is there a primary inflammatory process that's not autoimmune in nature?" },
        { id: "idiopathic", label: "Idiopathic", def: "Conditions without a clearly identified cause, or where the mechanism remains uncertain.", q: "Have you fully investigated, or might this genuinely be idiopathic? What's the threshold for accepting this label?" },
        { id: "structural", label: "Structural / Mechanical", def: "Anatomical abnormalities, obstructions, or mechanical problems affecting normal function.", q: "Could there be a structural issue - a blockage, displacement, or anatomical variant - causing dysfunction?" },
        { id: "psychiatric", label: "Psychiatric", def: "Mental health conditions that manifest with a variety of ways.", q: "How might psychological, social, or behavioral factors be contributing? Is this somatization or functional?" }
        { id: "Social", label: "Social", def: "There's always a bigger context.", q: "How might the social determinants of health be contributing to this presentation?" }
    ],
    biases: [
        { id: "anchoring", label: "Anchoring Bias", def: "Locking onto initial impressions or the first diagnosis considered, then failing to adjust despite new information.", q: "What was your first impression? How might that be influencing what you're seeing now?" },
        { id: "availability", label: "Availability Bias", def: "Judging probability based on how easily examples come to mind, often influenced by recent cases.", q: "What have you been seeing a lot lately? Could that be skewing your sense of what's likely here?" },
        { id: "confirmation", label: "Confirmation Bias", def: "Seeking information that supports your hypothesis while ignoring or downplaying contradictory evidence.", q: "What findings would contradict your leading diagnosis? Are you actively looking for them?" },
        { id: "premature", label: "Premature Closure", def: "Accepting a diagnosis before fully verifying it, stopping the search for alternatives too early.", q: "Have you stopped considering other possibilities? What would happen if you kept the differential open a bit longer?" },
        { id: "satisficing", label: "Search Satisficing", def: "Ending the diagnostic search after finding one abnormality, missing additional concurrent problems.", q: "You found one thing - but could there be a second problem you're not looking for anymore?" },
        { id: "momentum", label: "Diagnostic Momentum", def: "Accepting a previous diagnosis or label without independent verification, allowing it to 'stick' inappropriately.", q: "How much of your thinking comes from prior documentation? What would you conclude if you were seeing this fresh?" },
        { id: "overconfidence", label: "Overconfidence Bias", def: "Overestimating the accuracy of your judgment or being more certain than the evidence supports.", q: "On a scale of 0-100%, how confident are you? What would it take to change your mind?" },
        { id: "baserate", label: "Base Rate Neglect", def: "Ignoring the actual prevalence or probability of a condition when making diagnostic judgments.", q: "How common is this diagnosis in your patient population? Are you being appropriately guided by epidemiology?" },
        { id: "attribution", label: "Attribution Error", def: "Making diagnostic assumptions based on patient demographics, appearance, or stereotypes rather than clinical evidence.", q: "Are any assumptions about who this patient is affecting your clinical reasoning?" },
        { id: "framing", label: "Framing Effect", def: "Being influenced by how information is presented rather than by the information itself.", q: "If this case were framed differently - different setting, different presenter - would you see it the same way?" }
    ],
    strategies: [
        { id: "whatelse", label: "What Else?", def: "A forcing function to deliberately generate alternative diagnoses even when one seems clear.", q: "Stop. What else could this be? Name three alternatives before moving forward." },
        { id: "opposite", label: "Consider the Opposite", def: "Deliberately searching for evidence that contradicts your favored hypothesis.", q: "If your primary diagnosis is wrong, what findings would you expect? Do any exist?" },
        { id: "worstfirst", label: "Worst First", def: "Explicitly considering life-threatening or time-sensitive diagnoses that cannot be missed.", q: "What's the most dangerous thing this could be? Have you adequately ruled it out?" },
        { id: "timeout", label: "Diagnostic Time-Out", def: "Deliberately pausing to step back from the case and reassess with fresh perspective.", q: "If you had to present this case to a colleague right now, what would feel unsettled or incomplete?" },
        { id: "null", label: "Null Hypothesis", def: "Actively seeking evidence that would disprove your working diagnosis before accepting it.", q: "What would disprove your hypothesis? Have you specifically looked for that evidence?" },
        { id: "twed", label: "TWED Check", def: "A structured metacognitive framework: Threat (worst case), What else (alternatives), Evidence (support), Disposition (patient factors).", q: "Walk through TWED: What's the threat? What else? What's your evidence? What patient-specific factors matter?" }
    ],
    anatomic: [
        { id: "mentalct", label: "Mental CT Scan", def: "Systematically visualizing anatomy from front to back, identifying each tissue plane and structure.", q: "Starting at the skin and moving deeper, what anatomic structures in this region could produce these symptoms?" },
        { id: "systems", label: "Organ Systems Review", def: "Systematically considering each major organ system as a potential source of symptoms.", q: "Go through each system: cardiac, pulmonary, GI, renal, neuro, etc. - could any of these be the primary problem?" }
        { id: "Respiratory", label: "Respiratory", def: "Just breathe.", q: "Could there be a respiratory component to this presentation??" }
        { id: "Cardiovascular", label: "Cardiovascular", def: "Pump it up!", q: "Could there be a cardiovascular component to this presentation??" }
        { id: "FEN", label: "FEN", def: "Thirsty?", q: "Is there a component of Fluids Enteral Nutrition that needs to be addressed?" }
        { id: "GI", label: "GI", def: "Go with your gut.", q: "Is there a component of the gastrointestinal system that needs to be addressed?" }
        { id: "Renal", label: "Renal", def: "Pass the salt please.", q: "Is there a component of the renal system that needs to be addressed?" }
        { id: "Heme", label: "Heme", def: "Peripheral smear to the rescue!", q: "Is there a component of the hematologic system that needs to be addressed?" }
        { id: "Neuro", label: "Neuro", def: "Mind over Matter", q: "Is there a component of the neurologic system that needs to be addressed?" }
        { id: "Genetics", label: "Genetics", def: "It runs in the family", q: "Could there be a genetics component to this?" }
        { id: "Metabolic", label: "Metabolic", def: "Enzymes galore", q: "Could there be a metabolic component to this?" }

    ]
};

const CONFIG = {
    colors: {
        framework: '#3b82f6',
        bias: '#f59e0b',
        strategy: '#8b5cf6',
        anatomic: '#14b8a6'
    },
    tileSize: 110, // Mobile default
    physics: {
        drag: 0.9,      // Friction
        stiffness: 0.05, // Spring stiffness for return to center
        repulsion: 500, // Repulsion strength
        damping: 0.95
    }
};

class MetacognitionApp {
    constructor() {
        this.canvas = document.getElementById('tile-canvas');
        this.tiles = [];
        this.activeTile = null;
        this.width = this.canvas.clientWidth;
        this.height = this.canvas.clientHeight;
        this.animationFrame = null;
        this.isDragging = false;
        
        // Bind methods
        this.update = this.update.bind(this);
        this.handleResize = this.handleResize.bind(this);
        
        this.init();
    }

    init() {
        this.createTiles();
        this.setupEvents();
        this.startPhysics();
        
        // Initial layout scatter - Grouped by category
        // We define 4 distinct zones based on the canvas size
        const zones = {
            'Diagnostic Framework': { x: 0.25, y: 0.25 },
            'Cognitive Bias': { x: 0.75, y: 0.25 },
            'Metacognitive Strategy': { x: 0.25, y: 0.75 },
            'Anatomic Approach': { x: 0.75, y: 0.75 }
        };

        this.tiles.forEach(tile => {
            const zone = zones[tile.category];
            // Add some randomness around the zone center
            const offsetX = (Math.random() - 0.5) * (this.width * 0.3);
            const offsetY = (Math.random() - 0.5) * (this.height * 0.3);
            
            tile.x = (this.width * zone.x) + offsetX;
            tile.y = (this.height * zone.y) + offsetY;
        });
    }

    createTiles() {
        const addTile = (data, category, color) => {
            const el = document.createElement('div');
            el.className = 'tile';
            el.textContent = data.label;
            el.style.backgroundColor = color;
            el.style.width = `${CONFIG.tileSize}px`;
            el.style.height = `${CONFIG.tileSize}px`;
            
            // Touch/Click handler
            el.addEventListener('mousedown', (e) => this.startDrag(e, tile));
            el.addEventListener('touchstart', (e) => this.startDrag(e, tile), { passive: false });
            
            // Click to expand (if not dragged)
            el.addEventListener('click', (e) => {
                if (!this.isDragging) this.expandTile(tile);
            });

            this.canvas.appendChild(el);

            const tile = {
                id: data.id,
                el: el,
                data: data,
                category: category,
                color: color,
                x: this.width / 2,
                y: this.height / 2,
                vx: 0,
                vy: 0,
                radius: CONFIG.tileSize / 2 + 10, // +10 buffer
                isDragging: false,
                considered: false
            };
            
            this.tiles.push(tile);
        };

        DATA.frameworks.forEach(t => addTile(t, 'Diagnostic Framework', CONFIG.colors.framework));
        DATA.biases.forEach(t => addTile(t, 'Cognitive Bias', CONFIG.colors.bias));
        DATA.strategies.forEach(t => addTile(t, 'Metacognitive Strategy', CONFIG.colors.strategy));
        DATA.anatomic.forEach(t => addTile(t, 'Anatomic Approach', CONFIG.colors.anatomic));
    }

    setupEvents() {
        window.addEventListener('resize', this.handleResize);
        
        // Global mouse up
        window.addEventListener('mouseup', () => this.stopDrag());
        window.addEventListener('touchend', () => this.stopDrag());
        
        // Global mouse move
        window.addEventListener('mousemove', (e) => this.onDrag(e));
        window.addEventListener('touchmove', (e) => this.onDrag(e), { passive: false });
        
        // Overlay close
        document.getElementById('expanded-overlay').addEventListener('click', (e) => {
            if (e.target.id === 'expanded-overlay') this.closeCard();
        });
    }

    handleResize() {
        this.width = this.canvas.clientWidth;
        this.height = this.canvas.clientHeight;
    }

    startDrag(e, tile) {
        this.isDragging = false; // Will be set to true if moved
        this.dragTile = tile;
        tile.isDragging = true;
        
        const pos = this.getPointerPos(e);
        this.dragOffset = {
            x: pos.x - tile.x,
            y: pos.y - tile.y
        };
        
        // Bring to front
        tile.el.style.zIndex = 100;
    }

    stopDrag() {
        if (this.dragTile) {
            this.dragTile.isDragging = false;
            this.dragTile.el.style.zIndex = '';
            this.dragTile = null;
            
            // Reset flag after a short delay to prevent click triggering
            setTimeout(() => {
                this.isDragging = false;
            }, 50);
        }
    }

    onDrag(e) {
        if (!this.dragTile) return;
        
        e.preventDefault(); // Prevent scroll
        this.isDragging = true;
        
        const pos = this.getPointerPos(e);
        this.dragTile.x = pos.x - this.dragOffset.x;
        this.dragTile.y = pos.y - this.dragOffset.y;
        
        // Reset velocity
        this.dragTile.vx = 0;
        this.dragTile.vy = 0;
    }

    getPointerPos(e) {
        const rect = this.canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    }

    startPhysics() {
        const step = () => {
            this.update();
            this.animationFrame = requestAnimationFrame(step);
        };
        step();
    }

    update() {
        // Physics constants
        const centerForce = 0.0005;
        const repulsionStrength = 2000;
        
        // 1. Apply forces
        for (let i = 0; i < this.tiles.length; i++) {
            const t1 = this.tiles[i];
            if (t1.isDragging) continue;

            // Center attraction (keep them on screen)
            const dx = (this.width / 2) - t1.x;
            const dy = (this.height / 2) - t1.y;
            t1.vx += dx * centerForce;
            t1.vy += dy * centerForce;

            // Repulsion from other tiles
            for (let j = 0; j < this.tiles.length; j++) {
                if (i === j) continue;
                const t2 = this.tiles[j];
                
                const dx = t1.x - t2.x;
                const dy = t1.y - t2.y;
                const distSq = dx * dx + dy * dy;
                const minDist = t1.radius + t2.radius;
                
                if (distSq < minDist * minDist * 2) { // Interaction range
                    const dist = Math.sqrt(distSq) || 1;
                    const force = repulsionStrength / (distSq + 1);
                    
                    const fx = (dx / dist) * force;
                    const fy = (dy / dist) * force;
                    
                    t1.vx += fx;
                    t1.vy += fy;
                }
            }
        }

        // 2. Update positions
        this.tiles.forEach(t => {
            if (!t.isDragging) {
                t.x += t.vx;
                t.y += t.vy;
                
                // Damping
                t.vx *= CONFIG.physics.damping;
                t.vy *= CONFIG.physics.damping;
            }

            // Boundary constraints
            const pad = t.radius;
            if (t.x < pad) { t.x = pad; t.vx *= -0.5; }
            if (t.x > this.width - pad) { t.x = this.width - pad; t.vx *= -0.5; }
            if (t.y < pad) { t.y = pad; t.vy *= -0.5; }
            if (t.y > this.height - pad) { t.y = this.height - pad; t.vy *= -0.5; }

            // Apply to DOM
            t.el.style.transform = `translate(${t.x - t.radius}px, ${t.y - t.radius}px)`;
        });
    }

    expandTile(tile) {
        this.activeTile = tile;
        
        // Populate Overlay
        const overlay = document.getElementById('expanded-overlay');
        const card = document.getElementById('expanded-card');
        const header = document.getElementById('card-header');
        
        header.style.backgroundColor = tile.color;
        document.getElementById('card-category').textContent = tile.category;
        document.getElementById('card-title').textContent = tile.data.label;
        document.getElementById('card-definition').textContent = tile.data.def;
        document.getElementById('card-question').textContent = tile.data.q;
        
        overlay.classList.add('active');
    }

    closeCard() {
        document.getElementById('expanded-overlay').classList.remove('active');
        this.activeTile = null;
    }

    markConsidered() {
        if (this.activeTile) {
            this.activeTile.considered = true;
            this.activeTile.el.classList.add('considered');
            this.closeCard();
        }
    }

    focusCategory(category) {
        // Move tiles of this category to the top of the screen
        // and others to the bottom
        this.tiles.forEach(tile => {
            if (tile.category === category) {
                tile.vy = -20; // Strong push up
                tile.vx = (Math.random() - 0.5) * 10; // Slight scatter
            } else {
                tile.vy = 10; // Push others down
            }
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new MetacognitionApp();
});
</script>
