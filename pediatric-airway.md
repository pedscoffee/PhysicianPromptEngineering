---
layout: default
title: Pediatric Airway Visualizer
permalink: /pediatric-airway/
---

<div class="anatomy-tool-container" style="max-width: 1200px; margin: 0 auto; padding: 20px;">
    <div class="anatomy-header" style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #2c3e50; font-size: 2.5rem; margin-bottom: 10px;">Pediatric Airway Visualizer</h1>
        <p style="color: #666; font-size: 1.1rem;">Interactive demonstration of Asthma and Bronchiolitis physiology.</p>
    </div>

    <div class="airway-workspace" style="display: grid; grid-template-columns: 300px 1fr 300px; gap: 20px; background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        
        <!-- Controls -->
        <aside class="controls-panel" style="padding: 20px; background: #f8f9fa; border-radius: 8px;">
            <h3 style="margin-bottom: 20px; color: #2c3e50;">Physiology Controls</h3>
            
            <div class="control-group" style="margin-bottom: 25px;">
                <label for="muscleConstriction" style="display: block; margin-bottom: 8px; font-weight: 600;">Muscle Tightening (Constriction)</label>
                <input type="range" id="muscleConstriction" min="0" max="100" value="0" style="width: 100%; cursor: pointer;">
                <p style="font-size: 0.85rem; color: #666; margin-top: 5px;">Represents smooth muscle spasm (Bronchospasm).</p>
            </div>

            <div class="control-group" style="margin-bottom: 25px;">
                <label for="wallInflammation" style="display: block; margin-bottom: 8px; font-weight: 600;">Wall Swelling (Inflammation)</label>
                <input type="range" id="wallInflammation" min="0" max="100" value="0" style="width: 100%; cursor: pointer;">
                <p style="font-size: 0.85rem; color: #666; margin-top: 5px;">Represents edema/swelling of the airway lining.</p>
            </div>

            <div class="control-group" style="margin-bottom: 25px;">
                <label for="mucusProduction" style="display: block; margin-bottom: 8px; font-weight: 600;">Mucus Production</label>
                <input type="range" id="mucusProduction" min="0" max="100" value="0" style="width: 100%; cursor: pointer;">
                <p style="font-size: 0.85rem; color: #666; margin-top: 5px;">Represents excess secretions blocking the airway.</p>
            </div>

            <hr style="margin: 20px 0; border: 0; border-top: 1px solid #e9ecef;">

            <div class="action-buttons">
                <button id="resetBtn" style="width: 100%; padding: 10px; background: #6c757d; color: white; border: none; border-radius: 6px; cursor: pointer; margin-bottom: 10px; font-weight: 600;">Reset Normal Airway</button>
            </div>
        </aside>

        <!-- Visualization -->
        <main class="visualization-stage" style="display: flex; justify-content: center; align-items: center; background: #fff; position: relative;">
            <svg id="airwayCanvas" viewBox="0 0 400 400" width="100%" height="100%" style="max-width: 400px; max-height: 400px;">
                <!-- Muscle Layer -->
                <circle id="muscleLayer" cx="200" cy="200" r="180" fill="none" stroke="#e74c3c" stroke-width="20" opacity="0.8" />
                
                <!-- Submucosa/Inflammation Layer -->
                <circle id="inflammationLayer" cx="200" cy="200" r="160" fill="none" stroke="#ffadad" stroke-width="0" />

                <!-- Mucus Layer (Dynamic Blobs) -->
                <g id="mucusGroup"></g>

                <!-- Labels -->
                <text x="200" y="380" text-anchor="middle" fill="#666" font-size="14">Cross-section of Bronchiole</text>
            </svg>
        </main>

        <!-- Explainer / Treatment -->
        <aside class="treatment-panel" style="padding: 20px; background: #f8f9fa; border-radius: 8px;">
            <h3 style="margin-bottom: 20px; color: #2c3e50;">Treatment Simulation</h3>
            
            <div class="treatment-card" style="margin-bottom: 20px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #3498db; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <h4 style="margin: 0 0 10px 0; color: #3498db;">Rescue Inhaler (Albuterol)</h4>
                <p style="font-size: 0.9rem; color: #555; margin-bottom: 10px;">Rapidly relaxes the smooth muscle.</p>
                <button id="administerAlbuterol" style="width: 100%; padding: 8px; background: #3498db; color: white; border: none; border-radius: 4px; cursor: pointer; transition: background 0.2s;">Administer Dose</button>
            </div>

            <div class="treatment-card" style="margin-bottom: 20px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #e67e22; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <h4 style="margin: 0 0 10px 0; color: #e67e22;">Controller (Steroids)</h4>
                <p style="font-size: 0.9rem; color: #555; margin-bottom: 10px;">Reduces swelling/inflammation over time.</p>
                <button id="administerSteroid" style="width: 100%; padding: 8px; background: #e67e22; color: white; border: none; border-radius: 4px; cursor: pointer; transition: background 0.2s;">Start Therapy</button>
            </div>

            <div id="statusMessage" style="margin-top: 20px; padding: 15px; background: #d4edda; color: #155724; border-radius: 6px; display: none;">
                <strong>Effect:</strong> <span id="effectText"></span>
            </div>
        </aside>

    </div>

    <!-- Educational Context Section -->
    <div style="margin-top: 40px; padding: 30px; background: #fff; border-radius: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <h2 style="color: #2c3e50; margin-bottom: 15px;">Parent Education Guide</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
            <div>
                <h3 style="color: #3498db;">Asthma Attack</h3>
                <p>During an asthma attack, two main things happen:</p>
                <ul style="margin-left: 20px; margin-bottom: 15px;">
                    <li><strong>Constriction:</strong> The muscles around the airway tighten (Bronchospasm).</li>
                    <li><strong>Inflammation:</strong> The linings of the airway swell up.</li>
                </ul>
                <p><strong>Correction:</strong> Albuterol helps the muscle relax immediately, but it does NOT fix the swelling. That is why the controller medication is important.</p>
            </div>
            <div>
                <h3 style="color: #e74c3c;">Bronchiolitis</h3>
                <p>In viral bronchiolitis (like RSV), the problem is mainly:</p>
                <ul style="margin-left: 20px; margin-bottom: 15px;">
                    <li><strong>Mucus:</strong> Lots of sticky secretions blocking the tube.</li>
                    <li><strong>Inflammation:</strong> Swelling of the walls.</li>
                </ul>
                <p><strong>Note:</strong> Albuterol often doesn't work well here because the problem is mucus and swelling, not just muscle tightness.</p>
            </div>
        </div>
    </div>
</div>

<script src="/assets/js/pediatric-airway.js"></script>

<style>
    /* Responsive Design */
    @media (max-width: 900px) {
        .airway-workspace {
            grid-template-columns: 1fr !important;
        }
        .visualization-stage {
            min-height: 300px;
        }
    }

    input[type=range] {
        -webkit-appearance: none;
        background: transparent;
    }
    input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: #3498db;
        cursor: pointer;
        margin-top: -6px;
    }
    input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        background: #dee2e6;
        border-radius: 2px;
    }
</style>
