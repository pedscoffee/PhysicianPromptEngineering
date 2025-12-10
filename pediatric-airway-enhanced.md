---
layout: default
title: Pediatric Airway Visualizer
permalink: /pediatric-airway/
---

<div class="anatomy-tool-container" style="max-width: 1400px; margin: 0 auto; padding: 20px;">
    
    <!-- Beta Warning -->
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 25px; border-radius: 10px; margin-bottom: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); text-align: center;">
        <strong style="font-size: 1.1rem;">🚧 BETA VERSION - IN DEVELOPMENT 🚧</strong>
        <p style="margin: 8px 0 0 0; font-size: 0.95rem; opacity: 0.95;">This tool is currently under development. Features and accuracy are being refined. Please report any issues or suggestions.</p>
    </div>

    <!-- Medical Disclaimer -->
    <div style="background: #fff3cd; border-left: 5px solid #ffc107; color: #856404; padding: 20px 25px; border-radius: 8px; margin-bottom: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <h3 style="margin: 0 0 10px 0; color: #856404; font-size: 1.1rem;">⚕️ Educational Purposes Only - Not Medical Advice</h3>
        <p style="margin: 0; font-size: 0.95rem; line-height: 1.6;">
            This interactive visualizer is designed for <strong>educational purposes only</strong> and is not intended to replace professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have learned from this tool. If you think your child may have a medical emergency, call your doctor or 911 immediately.
        </p>
    </div>

    <div class="anatomy-header" style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #2c3e50; font-size: 2.5rem; margin-bottom: 10px;">Pediatric Airway Visualizer</h1>
        <p style="color: #666; font-size: 1.1rem;">Interactive demonstration of Asthma, Bronchiolitis, and Croup physiology.</p>
    </div>

    <!-- Disease Selection -->
    <div class="disease-selector" style="text-align: center; margin-bottom: 30px;">
        <div style="display: inline-flex; background: #f8f9fa; padding: 8px; border-radius: 12px; gap: 10px;">
            <button class="disease-btn active" data-disease="asthma" style="padding: 12px 24px; background: #3498db; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; transition: all 0.3s;">Asthma</button>
            <button class="disease-btn" data-disease="bronchiolitis" style="padding: 12px 24px; background: white; color: #666; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; transition: all 0.3s;">Bronchiolitis</button>
            <button class="disease-btn" data-disease="croup" style="padding: 12px 24px; background: white; color: #666; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; transition: all 0.3s;">Croup</button>
        </div>
    </div>

    <div class="airway-workspace" style="display: grid; grid-template-columns: 300px 1fr 320px; gap: 20px; background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        
        <!-- Controls -->
        <aside class="controls-panel" style="padding: 20px; background: #f8f9fa; border-radius: 8px;">
            <h3 style="margin-bottom: 20px; color: #2c3e50;">Physiology Controls</h3>
            
            <div class="control-group" id="constrictionControl" style="margin-bottom: 25px;">
                <label for="muscleConstriction" style="display: block; margin-bottom: 8px; font-weight: 600;">Muscle Tightening (Constriction)</label>
                <input type="range" id="muscleConstriction" min="0" max="100" value="0" style="width: 100%; cursor: pointer;">
                <p style="font-size: 0.85rem; color: #666; margin-top: 5px;">Represents smooth muscle spasm (Bronchospasm).</p>
            </div>

            <div class="control-group" id="inflammationControl" style="margin-bottom: 25px;">
                <label for="wallInflammation" style="display: block; margin-bottom: 8px; font-weight: 600;">Wall Swelling (Inflammation)</label>
                <input type="range" id="wallInflammation" min="0" max="100" value="0" style="width: 100%; cursor: pointer;">
                <p style="font-size: 0.85rem; color: #666; margin-top: 5px;">Represents edema/swelling of the airway lining.</p>
            </div>

            <div class="control-group" id="mucusControl" style="margin-bottom: 25px;">
                <label for="mucusProduction" style="display: block; margin-bottom: 8px; font-weight: 600;">Mucus Production</label>
                <input type="range" id="mucusProduction" min="0" max="100" value="0" style="width: 100%; cursor: pointer;">
                <p style="font-size: 0.85rem; color: #666; margin-top: 5px;">Represents excess secretions blocking the airway.</p>
            </div>

            <div class="control-group" id="subglotticControl" style="margin-bottom: 25px; display: none;">
                <label for="subglotticSwelling" style="display: block; margin-bottom: 8px; font-weight: 600;">Subglottic Swelling</label>
                <input type="range" id="subglotticSwelling" min="0" max="100" value="0" style="width: 100%; cursor: pointer;">
                <p style="font-size: 0.85rem; color: #666; margin-top: 5px;">Swelling below the vocal cords (subglottic area).</p>
            </div>

            <hr style="margin: 20px 0; border: 0; border-top: 1px solid #e9ecef;">

            <div class="preset-buttons" style="margin-bottom: 15px;">
                <button id="mildBtn" style="width: 100%; padding: 8px; background: #ffc107; color: #333; border: none; border-radius: 6px; cursor: pointer; margin-bottom: 8px; font-weight: 600;">Mild Case</button>
                <button id="moderateBtn" style="width: 100%; padding: 8px; background: #ff9800; color: white; border: none; border-radius: 6px; cursor: pointer; margin-bottom: 8px; font-weight: 600;">Moderate Case</button>
                <button id="severeBtn" style="width: 100%; padding: 8px; background: #f44336; color: white; border: none; border-radius: 6px; cursor: pointer; margin-bottom: 8px; font-weight: 600;">Severe Case</button>
            </div>

            <div class="action-buttons">
                <button id="resetBtn" style="width: 100%; padding: 10px; background: #6c757d; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">Reset Normal Airway</button>
            </div>
        </aside>

        <!-- Visualization -->
        <main class="visualization-stage" style="display: flex; flex-direction: column; justify-content: center; align-items: center; background: #fff; position: relative;">
            <div id="airwayDiagram" style="position: relative; width: 100%; max-width: 450px;">
                <!-- Dynamic content will be inserted here -->
            </div>
            <div id="airwayMetrics" style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px; width: 100%; max-width: 450px;">
                <h4 style="margin: 0 0 10px 0; color: #2c3e50; text-align: center;">Airway Status</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; text-align: center;">
                    <div>
                        <div style="font-size: 0.85rem; color: #666;">Airflow Capacity</div>
                        <div id="airflowValue" style="font-size: 1.5rem; font-weight: 700; color: #27ae60;">100%</div>
                    </div>
                    <div>
                        <div style="font-size: 0.85rem; color: #666;">Severity</div>
                        <div id="severityValue" style="font-size: 1.5rem; font-weight: 700; color: #27ae60;">Normal</div>
                    </div>
                </div>
            </div>
        </main>

        <!-- Treatment Panel -->
        <aside class="treatment-panel" style="padding: 20px; background: #f8f9fa; border-radius: 8px;">
            <h3 style="margin-bottom: 20px; color: #2c3e50;">Treatment Simulation</h3>
            
            <!-- Asthma Treatments -->
            <div id="asthmaTreatments" class="treatment-group">
                <div class="treatment-card" style="margin-bottom: 15px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #3498db; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                    <h4 style="margin: 0 0 10px 0; color: #3498db;">Rescue Inhaler (Albuterol)</h4>
                    <p style="font-size: 0.9rem; color: #555; margin-bottom: 10px;">Rapidly relaxes the smooth muscle.</p>
                    <button class="treatment-btn" data-treatment="albuterol" style="width: 100%; padding: 8px; background: #3498db; color: white; border: none; border-radius: 4px; cursor: pointer; transition: background 0.2s;">Administer Dose</button>
                </div>

                <div class="treatment-card" style="margin-bottom: 15px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #e67e22; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                    <h4 style="margin: 0 0 10px 0; color: #e67e22;">Controller (Steroids)</h4>
                    <p style="font-size: 0.9rem; color: #555; margin-bottom: 10px;">Reduces swelling/inflammation over time.</p>
                    <button class="treatment-btn" data-treatment="steroid" style="width: 100%; padding: 8px; background: #e67e22; color: white; border: none; border-radius: 4px; cursor: pointer; transition: background 0.2s;">Start Therapy</button>
                </div>
            </div>

            <!-- Bronchiolitis Treatments -->
            <div id="bronchiolitisTreatments" class="treatment-group" style="display: none;">
                <div class="treatment-card" style="margin-bottom: 15px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #9b59b6; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                    <h4 style="margin: 0 0 10px 0; color: #9b59b6;">Supportive Care</h4>
                    <p style="font-size: 0.9rem; color: #555; margin-bottom: 10px;">Hydration, suctioning, oxygen as needed.</p>
                    <button class="treatment-btn" data-treatment="supportive" style="width: 100%; padding: 8px; background: #9b59b6; color: white; border: none; border-radius: 4px; cursor: pointer; transition: background 0.2s;">Provide Support</button>
                </div>

                <div class="treatment-card" style="margin-bottom: 15px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #95a5a6; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                    <h4 style="margin: 0 0 10px 0; color: #95a5a6;">Trial Albuterol</h4>
                    <p style="font-size: 0.9rem; color: #555; margin-bottom: 10px;">May help in some cases, but often ineffective.</p>
                    <button class="treatment-btn" data-treatment="albuterol-trial" style="width: 100%; padding: 8px; background: #95a5a6; color: white; border: none; border-radius: 4px; cursor: pointer; transition: background 0.2s;">Try Albuterol</button>
                </div>
            </div>

            <!-- Croup Treatments -->
            <div id="croupTreatments" class="treatment-group" style="display: none;">
                <div class="treatment-card" style="margin-bottom: 15px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #16a085; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                    <h4 style="margin: 0 0 10px 0; color: #16a085;">Dexamethasone (Steroid)</h4>
                    <p style="font-size: 0.9rem; color: #555; margin-bottom: 10px;">Reduces subglottic swelling. Gold standard.</p>
                    <button class="treatment-btn" data-treatment="dexamethasone" style="width: 100%; padding: 8px; background: #16a085; color: white; border: none; border-radius: 4px; cursor: pointer; transition: background 0.2s;">Administer Dose</button>
                </div>

                <div class="treatment-card" style="margin-bottom: 15px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #3498db; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                    <h4 style="margin: 0 0 10px 0; color: #3498db;">Nebulized Epinephrine</h4>
                    <p style="font-size: 0.9rem; color: #555; margin-bottom: 10px;">Quick relief for severe cases (temporary).</p>
                    <button class="treatment-btn" data-treatment="epinephrine" style="width: 100%; padding: 8px; background: #3498db; color: white; border: none; border-radius: 4px; cursor: pointer; transition: background 0.2s;">Give Nebulizer</button>
                </div>

                <div class="treatment-card" style="margin-bottom: 15px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #95a5a6; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                    <h4 style="margin: 0 0 10px 0; color: #95a5a6;">Cool Mist / Humidification</h4>
                    <p style="font-size: 0.9rem; color: #555; margin-bottom: 10px;">Traditional home remedy (limited evidence).</p>
                    <button class="treatment-btn" data-treatment="mist" style="width: 100%; padding: 8px; background: #95a5a6; color: white; border: none; border-radius: 4px; cursor: pointer; transition: background 0.2s;">Apply Mist</button>
                </div>
            </div>

            <div id="statusMessage" style="margin-top: 20px; padding: 15px; background: #d4edda; color: #155724; border-radius: 6px; display: none;">
                <strong>Effect:</strong> <span id="effectText"></span>
            </div>
        </aside>

    </div>

    <!-- Educational Context Section -->
    <div style="margin-top: 40px; padding: 30px; background: #fff; border-radius: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
        <h2 style="color: #2c3e50; margin-bottom: 15px;">Parent Education Guide</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
            <div>
                <h3 style="color: #3498db; display: flex; align-items: center; gap: 10px;">
                    <span style="background: #3498db; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">1</span>
                    Asthma Attack
                </h3>
                <p><strong>Age:</strong> Any age, often diagnosed after age 5</p>
                <p><strong>Main Problem:</strong></p>
                <ul style="margin-left: 20px; margin-bottom: 15px;">
                    <li><strong>Constriction:</strong> The muscles around the airway tighten (Bronchospasm).</li>
                    <li><strong>Inflammation:</strong> The linings of the airway swell up.</li>
                    <li><strong>Location:</strong> Lower airways (bronchioles)</li>
                </ul>
                <p><strong>Symptoms:</strong> Wheezing, coughing, chest tightness, shortness of breath</p>
                <p><strong>Treatment:</strong> Albuterol helps the muscle relax immediately, but it does NOT fix the swelling. That is why the controller medication (inhaled steroids) is important for prevention.</p>
            </div>
            
            <div>
                <h3 style="color: #e74c3c; display: flex; align-items: center; gap: 10px;">
                    <span style="background: #e74c3c; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">2</span>
                    Bronchiolitis
                </h3>
                <p><strong>Age:</strong> Usually under 2 years old (peak: 3-6 months)</p>
                <p><strong>Main Problem:</strong></p>
                <ul style="margin-left: 20px; margin-bottom: 15px;">
                    <li><strong>Mucus:</strong> Lots of sticky secretions blocking the tube.</li>
                    <li><strong>Inflammation:</strong> Swelling of the walls from viral infection (RSV).</li>
                    <li><strong>Location:</strong> Small airways (bronchioles)</li>
                </ul>
                <p><strong>Symptoms:</strong> Rapid breathing, wheezing, nasal congestion, poor feeding</p>
                <p><strong>Treatment:</strong> Albuterol often doesn't work well here because the problem is mucus and swelling, not just muscle tightness. Supportive care (hydration, suctioning) is key.</p>
            </div>

            <div>
                <h3 style="color: #16a085; display: flex; align-items: center; gap: 10px;">
                    <span style="background: #16a085; color: white; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">3</span>
                    Croup (Laryngotracheobronchitis)
                </h3>
                <p><strong>Age:</strong> 6 months to 3 years (peak: 1-2 years)</p>
                <p><strong>Main Problem:</strong></p>
                <ul style="margin-left: 20px; margin-bottom: 15px;">
                    <li><strong>Subglottic Swelling:</strong> Inflammation below the vocal cords narrows the upper airway.</li>
                    <li><strong>Cause:</strong> Usually viral (parainfluenza virus)</li>
                    <li><strong>Location:</strong> Upper airway (larynx, trachea)</li>
                </ul>
                <p><strong>Symptoms:</strong> Barking "seal-like" cough, stridor (harsh sound when breathing in), worse at night</p>
                <p><strong>Treatment:</strong> Dexamethasone (steroid) is the gold standard to reduce swelling. Nebulized epinephrine provides quick but temporary relief in severe cases. Cool mist has limited evidence but may provide comfort.</p>
            </div>
        </div>

        <div style="margin-top: 30px; padding: 20px; background: #fff3cd; border-left: 4px solid #ffc107; border-radius: 8px;">
            <h4 style="margin: 0 0 10px 0; color: #856404;">⚠️ Key Differences to Remember</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px; margin-top: 15px;">
                <div>
                    <strong>Location Matters:</strong>
                    <p style="margin: 5px 0 0 0; font-size: 0.9rem;">Croup affects the UPPER airway (you hear stridor). Asthma and bronchiolitis affect the LOWER airways (you hear wheezing).</p>
                </div>
                <div>
                    <strong>Age is a Clue:</strong>
                    <p style="margin: 5px 0 0 0; font-size: 0.9rem;">Bronchiolitis in infants (<2 yrs), Croup in toddlers (6mo-3yrs), Asthma can start young but often diagnosed after age 5.</p>
                </div>
                <div>
                    <strong>Different Treatments:</strong>
                    <p style="margin: 5px 0 0 0; font-size: 0.9rem;">Asthma responds to albuterol. Bronchiolitis needs supportive care. Croup needs steroids (dexamethasone).</p>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
(function() {
    let currentDisease = 'asthma';
    let muscleConstriction = 0;
    let wallInflammation = 0;
    let mucusProduction = 0;
    let subglotticSwelling = 0;

    // Disease configurations
    const diseaseConfigs = {
        asthma: {
            controls: ['constriction', 'inflammation', 'mucus'],
            presets: {
                mild: { muscle: 30, inflammation: 20, mucus: 10, subglottic: 0 },
                moderate: { muscle: 60, inflammation: 50, mucus: 30, subglottic: 0 },
                severe: { muscle: 85, inflammation: 75, mucus: 50, subglottic: 0 }
            }
        },
        bronchiolitis: {
            controls: ['inflammation', 'mucus'],
            presets: {
                mild: { muscle: 0, inflammation: 30, mucus: 40, subglottic: 0 },
                moderate: { muscle: 0, inflammation: 55, mucus: 65, subglottic: 0 },
                severe: { muscle: 0, inflammation: 75, mucus: 85, subglottic: 0 }
            }
        },
        croup: {
            controls: ['inflammation', 'subglottic'],
            presets: {
                mild: { muscle: 0, inflammation: 25, mucus: 15, subglottic: 35 },
                moderate: { muscle: 0, inflammation: 45, mucus: 25, subglottic: 60 },
                severe: { muscle: 0, inflammation: 65, mucus: 35, subglottic: 85 }
            }
        }
    };

    // Initialize
    function init() {
        setupEventListeners();
        updateDisease('asthma');
    }

    function setupEventListeners() {
        // Disease buttons
        document.querySelectorAll('.disease-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                updateDisease(e.target.dataset.disease);
            });
        });

        // Sliders
        document.getElementById('muscleConstriction').addEventListener('input', (e) => {
            muscleConstriction = parseInt(e.target.value);
            updateVisualization();
        });

        document.getElementById('wallInflammation').addEventListener('input', (e) => {
            wallInflammation = parseInt(e.target.value);
            updateVisualization();
        });

        document.getElementById('mucusProduction').addEventListener('input', (e) => {
            mucusProduction = parseInt(e.target.value);
            updateVisualization();
        });

        document.getElementById('subglotticSwelling').addEventListener('input', (e) => {
            subglotticSwelling = parseInt(e.target.value);
            updateVisualization();
        });

        // Preset buttons
        document.getElementById('mildBtn').addEventListener('click', () => applyPreset('mild'));
        document.getElementById('moderateBtn').addEventListener('click', () => applyPreset('moderate'));
        document.getElementById('severeBtn').addEventListener('click', () => applyPreset('severe'));
        document.getElementById('resetBtn').addEventListener('click', reset);

        // Treatment buttons
        document.querySelectorAll('.treatment-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                applyTreatment(e.target.dataset.treatment);
            });
        });
    }

    function updateDisease(disease) {
        currentDisease = disease;
        
        // Update button states
        document.querySelectorAll('.disease-btn').forEach(btn => {
            if (btn.dataset.disease === disease) {
                btn.style.background = '#3498db';
                btn.style.color = 'white';
                btn.classList.add('active');
            } else {
                btn.style.background = 'white';
                btn.style.color = '#666';
                btn.classList.remove('active');
            }
        });

        // Show/hide controls
        const config = diseaseConfigs[disease];
        document.getElementById('constrictionControl').style.display = 
            config.controls.includes('constriction') ? 'block' : 'none';
        document.getElementById('inflammationControl').style.display = 
            config.controls.includes('inflammation') ? 'block' : 'none';
        document.getElementById('mucusControl').style.display = 
            config.controls.includes('mucus') ? 'block' : 'none';
        document.getElementById('subglotticControl').style.display = 
            config.controls.includes('subglottic') ? 'block' : 'none';

        // Show/hide treatment panels
        document.getElementById('asthmaTreatments').style.display = disease === 'asthma' ? 'block' : 'none';
        document.getElementById('bronchiolitisTreatments').style.display = disease === 'bronchiolitis' ? 'block' : 'none';
        document.getElementById('croupTreatments').style.display = disease === 'croup' ? 'block' : 'none';

        reset();
    }

    function applyPreset(severity) {
        const preset = diseaseConfigs[currentDisease].presets[severity];
        muscleConstriction = preset.muscle;
        wallInflammation = preset.inflammation;
        mucusProduction = preset.mucus;
        subglotticSwelling = preset.subglottic;

        document.getElementById('muscleConstriction').value = muscleConstriction;
        document.getElementById('wallInflammation').value = wallInflammation;
        document.getElementById('mucusProduction').value = mucusProduction;
        document.getElementById('subglotticSwelling').value = subglotticSwelling;

        updateVisualization();
    }

    function reset() {
        muscleConstriction = 0;
        wallInflammation = 0;
        mucusProduction = 0;
        subglotticSwelling = 0;

        document.getElementById('muscleConstriction').value = 0;
        document.getElementById('wallInflammation').value = 0;
        document.getElementById('mucusProduction').value = 0;
        document.getElementById('subglotticSwelling').value = 0;

        document.getElementById('statusMessage').style.display = 'none';
        updateVisualization();
    }

    function updateVisualization() {
        const diagram = document.getElementById('airwayDiagram');
        
        if (currentDisease === 'croup') {
            renderCroupDiagram(diagram);
        } else {
            renderCrossSectionDiagram(diagram);
        }
        
        updateMetrics();
    }

    function renderCrossSectionDiagram(container) {
        // Calculate radii
        const baseRadius = 180;
        const muscleThickness = 20 + (muscleConstriction * 0.3);
        const muscleRadius = baseRadius - (muscleConstriction * 0.5);
        
        // Inflammation layer - always show a thin base layer
        const baseInflammationThickness = 8;
        const additionalInflammation = wallInflammation * 0.5;
        const totalInflammationThickness = baseInflammationThickness + additionalInflammation;
        const inflammationRadius = muscleRadius - muscleThickness - (totalInflammationThickness / 2);
        
        // Calculate lumen radius
        const lumenRadius = Math.max(25, inflammationRadius - (totalInflammationThickness / 2));
        
        let svg = `
            <svg viewBox="0 0 500 400" width="100%" height="100%" style="max-width: 500px;">
                <!-- Outer muscle layer -->
                <circle cx="200" cy="200" r="${muscleRadius}" 
                    fill="none" 
                    stroke="#e74c3c" 
                    stroke-width="${muscleThickness}" 
                    opacity="${0.3 + muscleConstriction * 0.005}" />
                
                <!-- Submucosa/Inflammation layer (always visible) -->
                <circle cx="200" cy="200" r="${inflammationRadius}" 
                    fill="none" 
                    stroke="#ffcccb" 
                    stroke-width="${totalInflammationThickness}" 
                    opacity="${0.4 + wallInflammation * 0.004}" />
                
                <!-- Open lumen -->
                <circle cx="200" cy="200" r="${lumenRadius}" 
                    fill="#e8f4f8" 
                    stroke="#7fb3d5" 
                    stroke-width="2" />
        `;

        // Add mucus blobs - improved distribution
        if (mucusProduction > 0) {
            const numBlobs = Math.max(4, Math.floor(mucusProduction / 10));
            const maxBlobSize = Math.min(lumenRadius * 0.4, 20 + mucusProduction * 0.15);
            
            // Create a more natural distribution
            for (let i = 0; i < numBlobs; i++) {
                const angle = (i / numBlobs) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
                const distanceVariation = 0.3 + Math.random() * 0.4;
                const distance = lumenRadius * distanceVariation;
                const x = 200 + Math.cos(angle) * distance;
                const y = 200 + Math.sin(angle) * distance;
                const sizeVariation = 0.5 + Math.random() * 0.5;
                const size = maxBlobSize * sizeVariation;
                
                svg += `
                    <ellipse cx="${x}" cy="${y}" 
                        rx="${size}" 
                        ry="${size * (0.7 + Math.random() * 0.3)}" 
                        fill="#9bc995" 
                        opacity="${0.7 + Math.random() * 0.2}"
                        transform="rotate(${Math.random() * 360} ${x} ${y})" />
                `;
            }
            
            // Add some smaller mucus particles for realism
            if (mucusProduction > 40) {
                const smallBlobs = Math.floor(mucusProduction / 20);
                for (let i = 0; i < smallBlobs; i++) {
                    const angle = Math.random() * Math.PI * 2;
                    const distance = lumenRadius * (Math.random() * 0.6);
                    const x = 200 + Math.cos(angle) * distance;
                    const y = 200 + Math.sin(angle) * distance;
                    const size = 4 + Math.random() * 6;
                    
                    svg += `
                        <circle cx="${x}" cy="${y}" 
                            r="${size}" 
                            fill="#a8d5a8" 
                            opacity="0.6" />
                    `;
                }
            }
        }

        // Add labels with leader lines
        svg += `
                <!-- Label: Smooth Muscle -->
                <line x1="${200 + muscleRadius + 15}" y1="100" x2="${200 + muscleRadius + 50}" y2="70" 
                    stroke="#666" stroke-width="1.5" marker-end="url(#arrowhead)" />
                <text x="${200 + muscleRadius + 55}" y="75" fill="#666" font-size="13" font-weight="600">
                    Smooth Muscle
                </text>
                
                <!-- Label: Airway Wall (Mucosa) -->
                <line x1="${200 + inflammationRadius}" y1="150" x2="${200 + muscleRadius + 50}" y2="130" 
                    stroke="#666" stroke-width="1.5" />
                <text x="${200 + muscleRadius + 55}" y="135" fill="#666" font-size="13" font-weight="600">
                    Airway Wall
                </text>
                <text x="${200 + muscleRadius + 55}" y="150" fill="#999" font-size="11">
                    (Mucosa/Submucosa)
                </text>
                
                <!-- Label: Open Lumen -->
                <text x="200" y="205" text-anchor="middle" fill="#0066aa" font-size="14" font-weight="600">
                    ${lumenRadius > 40 ? 'Open Lumen' : ''}
                </text>
                <text x="200" y="220" text-anchor="middle" fill="#0066aa" font-size="11">
                    ${lumenRadius > 40 ? '(Airway passage)' : ''}
                </text>
                
                <!-- Label: Mucus (if present) -->
                ${mucusProduction > 30 ? `
                    <line x1="140" y1="240" x2="80" y2="280" 
                        stroke="#666" stroke-width="1.5" />
                    <text x="75" y="285" fill="#666" font-size="13" font-weight="600" text-anchor="end">
                        Mucus Plugs
                    </text>
                ` : ''}

                <!-- Arrow marker definition -->
                <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                        <polygon points="0 0, 10 3, 0 6" fill="#666" />
                    </marker>
                </defs>

                <!-- Title -->
                <text x="200" y="30" text-anchor="middle" fill="#666" font-size="16" font-weight="600">
                    ${currentDisease === 'asthma' ? 'Bronchiole (Lower Airway)' : 'Small Airway'}
                </text>
                <text x="200" y="385" text-anchor="middle" fill="#999" font-size="13">Cross-section view</text>
            </svg>
        `;

        container.innerHTML = svg;
    }

    function renderCroupDiagram(container) {
        // Croup - side view of trachea/larynx
        const narrowing = subglotticSwelling;
        const baseWidth = 80;
        const minWidth = 20;
        const narrowedWidth = baseWidth - (narrowing / 100) * (baseWidth - minWidth);
        
        let svg = `
            <svg viewBox="0 0 500 470" width="100%" height="100%" style="max-width: 500px;">
                <!-- Upper trachea (normal) -->
                <rect x="${(400 - baseWidth) / 2}" y="60" 
                    width="${baseWidth}" 
                    height="80" 
                    fill="#fde8e8" 
                    stroke="#e74c3c" 
                    stroke-width="3" />
                
                <!-- Vocal cords indicator -->
                <line x1="140" y1="140" x2="260" y2="140" 
                    stroke="#8b4513" 
                    stroke-width="4" 
                    stroke-linecap="round" />
                <text x="270" y="145" fill="#8b4513" font-size="13" font-weight="600">← Vocal cords</text>
                
                <!-- Subglottic area (narrowed) -->
                <path d="M ${(400 - baseWidth) / 2} 140 
                         L ${(400 - narrowedWidth) / 2} 190
                         L ${(400 - narrowedWidth) / 2} 290
                         L ${(400 - baseWidth) / 2} 340
                         L ${(400 + baseWidth) / 2} 340
                         L ${(400 + narrowedWidth) / 2} 290
                         L ${(400 + narrowedWidth) / 2} 190
                         L ${(400 + baseWidth) / 2} 140 Z"
                    fill="${wallInflammation > 30 ? '#ffcccc' : '#fde8e8'}"
                    stroke="#e74c3c" 
                    stroke-width="3" />
                
                <!-- Swelling visualization -->
                ${subglotticSwelling > 0 ? `
                    <ellipse cx="${(400 - narrowedWidth) / 2 - 10}" cy="240" 
                        rx="${15 + subglotticSwelling * 0.2}" 
                        ry="${40 + subglotticSwelling * 0.3}" 
                        fill="#ff9999" 
                        opacity="0.6" />
                    <ellipse cx="${(400 + narrowedWidth) / 2 + 10}" cy="240" 
                        rx="${15 + subglotticSwelling * 0.2}" 
                        ry="${40 + subglotticSwelling * 0.3}" 
                        fill="#ff9999" 
                        opacity="0.6" />
                ` : ''}
                
                <!-- Lower trachea (normal) -->
                <rect x="${(400 - baseWidth) / 2}" y="340" 
                    width="${baseWidth}" 
                    height="80" 
                    fill="#fde8e8" 
                    stroke="#e74c3c" 
                    stroke-width="3" />
                
                <!-- Mucus if present -->
                ${mucusProduction > 20 ? `
                    <ellipse cx="200" cy="260" 
                        rx="${10 + mucusProduction * 0.15}" 
                        ry="15" 
                        fill="#9bc995" 
                        opacity="0.7" />
                ` : ''}
                
                <!-- Labels -->
                <text x="200" y="35" text-anchor="middle" fill="#666" font-size="16" font-weight="600">
                    Upper Airway (Larynx/Trachea)
                </text>
                
                <!-- Larynx label -->
                <text x="100" y="110" fill="#666" font-size="13" font-weight="600" text-anchor="end">
                    Larynx →
                </text>
                
                <!-- Subglottic region label -->
                ${subglotticSwelling > 20 ? `
                    <line x1="${(400 + narrowedWidth) / 2 + 30 + subglotticSwelling * 0.2}" y1="240" 
                          x2="${300 + subglotticSwelling * 0.3}" y2="240" 
                          stroke="#c0392b" stroke-width="1.5" />
                    <text x="${305 + subglotticSwelling * 0.3}" y="235" fill="#c0392b" font-size="13" font-weight="600">
                        Subglottic
                    </text>
                    <text x="${305 + subglotticSwelling * 0.3}" y="250" fill="#c0392b" font-size="13" font-weight="600">
                        swelling →
                    </text>
                ` : `
                    <text x="70" y="245" fill="#999" font-size="12" text-anchor="end">
                        Subglottic
                    </text>
                    <text x="70" y="260" fill="#999" font-size="12" text-anchor="end">
                        region →
                    </text>
                `}
                
                <!-- Trachea label -->
                <text x="100" y="390" fill="#666" font-size="13" font-weight="600" text-anchor="end">
                    Trachea →
                </text>
                
                <!-- Airway lumen label -->
                ${narrowedWidth > 35 ? `
                    <text x="200" y="245" text-anchor="middle" fill="#0066aa" font-size="12" font-weight="600">
                        Airway
                    </text>
                    <text x="200" y="260" text-anchor="middle" fill="#0066aa" font-size="12" font-weight="600">
                        Lumen
                    </text>
                ` : ''}
                
                <!-- Mucus label if present -->
                ${mucusProduction > 40 ? `
                    <text x="140" y="280" fill="#666" font-size="11" text-anchor="end">
                        Mucus →
                    </text>
                ` : ''}
                
                <text x="200" y="460" text-anchor="middle" fill="#999" font-size="13">Side view</text>
            </svg>
        `;

        container.innerHTML = svg;
    }

    function updateMetrics() {
        // Calculate airflow capacity
        let reduction = 0;
        
        if (currentDisease === 'croup') {
            // Airflow is proportional to radius^4 (Poiseuille's law approximation)
            reduction = Math.pow(subglotticSwelling / 100, 2) * 70 + wallInflammation * 0.2;
        } else {
            reduction = muscleConstriction * 0.6 + wallInflammation * 0.3 + mucusProduction * 0.4;
        }
        
        const airflow = Math.max(5, 100 - reduction);
        document.getElementById('airflowValue').textContent = Math.round(airflow) + '%';
        
        // Update color and severity
        let severity = 'Normal';
        let color = '#27ae60';
        
        if (airflow < 30) {
            severity = 'Severe';
            color = '#e74c3c';
        } else if (airflow < 60) {
            severity = 'Moderate';
            color = '#f39c12';
        } else if (airflow < 85) {
            severity = 'Mild';
            color = '#f1c40f';
        }
        
        document.getElementById('airflowValue').style.color = color;
        document.getElementById('severityValue').textContent = severity;
        document.getElementById('severityValue').style.color = color;
    }

    function applyTreatment(treatment) {
        const statusMsg = document.getElementById('statusMessage');
        const effectText = document.getElementById('effectText');
        let message = '';
        let bgColor = '#d4edda';
        let textColor = '#155724';

        switch(treatment) {
            case 'albuterol':
                muscleConstriction = Math.max(0, muscleConstriction - 50);
                document.getElementById('muscleConstriction').value = muscleConstriction;
                message = 'Bronchodilator administered. Smooth muscle relaxation occurring. Airway opening!';
                break;
                
            case 'steroid':
                wallInflammation = Math.max(0, wallInflammation - 30);
                document.getElementById('wallInflammation').value = wallInflammation;
                message = 'Anti-inflammatory steroid started. Reducing airway wall swelling over next few hours.';
                break;
                
            case 'supportive':
                mucusProduction = Math.max(0, mucusProduction - 25);
                wallInflammation = Math.max(0, wallInflammation - 15);
                document.getElementById('mucusProduction').value = mucusProduction;
                document.getElementById('wallInflammation').value = wallInflammation;
                message = 'Supportive care provided: suctioning clearing mucus, hydration helping thin secretions.';
                break;
                
            case 'albuterol-trial':
                const improvement = Math.random() > 0.7;
                if (improvement) {
                    mucusProduction = Math.max(0, mucusProduction - 15);
                    document.getElementById('mucusProduction').value = mucusProduction;
                    message = 'Minimal response to albuterol. Some patients show slight improvement, but not reliable.';
                } else {
                    message = 'No significant response to albuterol. Primary issue is viral inflammation and mucus, not bronchospasm.';
                    bgColor = '#fff3cd';
                    textColor = '#856404';
                }
                break;
                
            case 'dexamethasone':
                subglotticSwelling = Math.max(0, subglotticSwelling - 40);
                wallInflammation = Math.max(0, wallInflammation - 35);
                document.getElementById('subglotticSwelling').value = subglotticSwelling;
                document.getElementById('wallInflammation').value = wallInflammation;
                message = 'Dexamethasone administered! Gold standard for croup. Reducing subglottic inflammation. Effects in 1-2 hours.';
                break;
                
            case 'epinephrine':
                subglotticSwelling = Math.max(0, subglotticSwelling - 60);
                document.getElementById('subglotticSwelling').value = subglotticSwelling;
                message = 'Nebulized epinephrine given. Rapid vasoconstriction reducing swelling. Effect is temporary (2-3 hours). Monitor closely!';
                bgColor = '#d1ecf1';
                textColor = '#0c5460';
                setTimeout(() => {
                    if (confirm('Epinephrine effect wearing off. Rebound swelling may occur. Continue monitoring?')) {
                        subglotticSwelling = Math.min(100, subglotticSwelling + 20);
                        document.getElementById('subglotticSwelling').value = subglotticSwelling;
                        updateVisualization();
                    }
                }, 5000);
                break;
                
            case 'mist':
                subglotticSwelling = Math.max(0, subglotticSwelling - 5);
                document.getElementById('subglotticSwelling').value = subglotticSwelling;
                message = 'Cool mist applied. May provide comfort, but limited evidence for clinical benefit. Not a substitute for steroids.';
                bgColor = '#d1ecf1';
                textColor = '#0c5460';
                break;
        }

        statusMsg.style.background = bgColor;
        statusMsg.style.color = textColor;
        effectText.textContent = message;
        statusMsg.style.display = 'block';
        
        updateVisualization();

        setTimeout(() => {
            statusMsg.style.display = 'none';
        }, 8000);
    }

    // Start
    init();
})();
</script>

<style>
    /* Responsive Design */
    @media (max-width: 1100px) {
        .airway-workspace {
            grid-template-columns: 1fr !important;
        }
        .visualization-stage {
            min-height: 400px;
        }
    }

    input[type=range] {
        -webkit-appearance: none;
        background: transparent;
    }
    input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 18px;
        width: 18px;
        border-radius: 50%;
        background: #3498db;
        cursor: pointer;
        margin-top: -7px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        background: #dee2e6;
        border-radius: 2px;
    }
    input[type=range]::-moz-range-thumb {
        height: 18px;
        width: 18px;
        border-radius: 50%;
        background: #3498db;
        cursor: pointer;
        border: none;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    input[type=range]::-moz-range-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        background: #dee2e6;
        border-radius: 2px;
    }

    .disease-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    .treatment-btn:hover {
        opacity: 0.9;
        transform: translateY(-1px);
    }

    .treatment-btn:active {
        transform: translateY(0);
    }
</style>

{%- include software-2-banner.html -%}
