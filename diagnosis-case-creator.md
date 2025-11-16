---
layout: default
title: Diagnosis Case Creator
permalink: /diagnosis-case-creator/
---

<style>
/* Case Creator Styling */
.creator-container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.creator-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.creator-header h1 {
  margin: 0 0 0.5rem 0;
  font-size: 2rem;
}

.creator-header p {
  margin: 0;
  opacity: 0.9;
}

.form-section {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.form-section h2 {
  color: #2d3748;
  margin-top: 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #667eea;
}

.form-section h3 {
  color: #4a5568;
  font-size: 1.1rem;
  margin-top: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  color: #2d3748;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.form-group input[type="text"],
.form-group input[type="number"],
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #cbd5e0;
  border-radius: 4px;
  font-size: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: border-color 0.2s;
  box-sizing: border-box;
}

.form-group input[type="text"]:focus,
.form-group input[type="number"]:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-group textarea {
  min-height: 100px;
  resize: vertical;
  font-family: 'Courier New', monospace;
}

.form-hint {
  color: #718096;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  font-style: italic;
}

.inline-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.list-input-group {
  margin-bottom: 1rem;
}

.list-item {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.list-item input {
  flex: 1;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
}

.btn:active {
  transform: translateY(0);
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-secondary {
  background: #4a5568;
  color: white;
}

.btn-success {
  background: #48bb78;
  color: white;
}

.btn-small {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.btn-icon {
  padding: 0.5rem 0.75rem;
}

.button-group {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.output-section {
  background: #2d3748;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.output-section h2 {
  color: #fff;
  margin-top: 0;
}

.yaml-output {
  background: #1a202c;
  color: #68d391;
  padding: 1.5rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  overflow-x: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  max-height: 600px;
  overflow-y: auto;
}

.copy-btn {
  margin-top: 1rem;
}

.alert {
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.alert-info {
  background: #bee3f8;
  color: #2c5282;
  border-left: 4px solid #3182ce;
}

.alert-success {
  background: #c6f6d5;
  color: #22543d;
  border-left: 4px solid #38a169;
}

@media (max-width: 768px) {
  .inline-group {
    grid-template-columns: 1fr;
  }
}
</style>

<div style="background: #fee2e2; border: 2px solid #dc2626; border-radius: 8px; padding: 20px; margin: 20px auto; max-width: 1200px;">
  <h3 style="color: #991b1b; margin-top: 0;">⚠️ IMPORTANT: Fictional Cases Only</h3>
  <p style="color: #991b1b; margin-bottom: 0;">
    <strong>DO NOT use real patient data.</strong> Create only fictional, synthesized clinical cases for educational purposes. This tool is NOT HIPAA-compliant. Never include actual patient information, names, dates, or any identifiable details. All cases should be completely de-identified educational examples.
  </p>
</div>

<div class="creator-container">
  <div class="creator-header">
    <h1>🏥 Diagnosis Case Creator</h1>
    <p>Create educational clinical cases for the Differential Diagnosis Game</p>
  </div>

  <div class="alert alert-info">
    <strong>📝 Instructions:</strong> Fill out the form below to create a new clinical case. When you're done,
    click "Generate YAML" to get the code that you can add to the <code>_data/diagnosis_cases.yml</code> file.
  </div>

  <!-- Basic Information -->
  <div class="form-section">
    <h2>📋 Basic Information</h2>

    <div class="inline-group">
      <div class="form-group">
        <label for="caseId">Case ID *</label>
        <input type="text" id="caseId" placeholder="e.g., case_007" required>
        <div class="form-hint">Unique identifier (use format: case_XXX)</div>
      </div>

      <div class="form-group">
        <label for="caseLevel">Level *</label>
        <input type="number" id="caseLevel" min="1" max="99" placeholder="e.g., 7" required>
        <div class="form-hint">Difficulty level (1-99)</div>
      </div>
    </div>

    <div class="inline-group">
      <div class="form-group">
        <label for="caseDifficulty">Difficulty Label *</label>
        <select id="caseDifficulty" required>
          <option value="">Select...</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
          <option value="Expert">Expert</option>
        </select>
      </div>

      <div class="form-group">
        <label for="caseTitle">Case Title *</label>
        <input type="text" id="caseTitle" placeholder="e.g., Case 7: Fever and Rash" required>
      </div>
    </div>
  </div>

  <!-- Patient Information -->
  <div class="form-section">
    <h2>👤 Patient Information</h2>

    <div class="inline-group">
      <div class="form-group">
        <label for="patientName">Patient Name *</label>
        <input type="text" id="patientName" placeholder="e.g., John" required>
      </div>

      <div class="form-group">
        <label for="patientAge">Age *</label>
        <input type="number" id="patientAge" min="0" max="120" placeholder="e.g., 42" required>
      </div>
    </div>

    <div class="inline-group">
      <div class="form-group">
        <label for="patientGender">Gender *</label>
        <select id="patientGender" required>
          <option value="">Select...</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Non-binary">Non-binary</option>
        </select>
      </div>

      <div class="form-group">
        <label for="patientAppearance">Appearance *</label>
        <select id="patientAppearance" required>
          <option value="">Select...</option>
          <option value="well-appearing">Well-appearing</option>
          <option value="concerned">Concerned</option>
          <option value="uncomfortable">Uncomfortable</option>
          <option value="distressed">Distressed</option>
          <option value="in-pain">In severe pain</option>
          <option value="confused">Confused</option>
          <option value="anxious">Anxious</option>
        </select>
      </div>
    </div>
  </div>

  <!-- Clinical Presentation -->
  <div class="form-section">
    <h2>🗣️ Clinical Presentation</h2>

    <div class="form-group">
      <label for="chiefComplaint">Chief Complaint *</label>
      <textarea id="chiefComplaint" placeholder="What the patient says is wrong (in first person)" required></textarea>
      <div class="form-hint">Example: "I've been having chest pain for the past 2 hours."</div>
    </div>

    <div class="form-group">
      <label>Symptoms (History of Present Illness) *</label>
      <div class="form-hint">Add key symptoms and their characteristics</div>
      <div id="symptomsList"></div>
      <button type="button" class="btn btn-secondary btn-small" onclick="addSymptom()">+ Add Symptom</button>
    </div>
  </div>

  <!-- Physical Examination -->
  <div class="form-section">
    <h2>🔍 Physical Examination</h2>

    <h3>Vital Signs</h3>
    <div id="vitalSignsList"></div>
    <button type="button" class="btn btn-secondary btn-small" onclick="addVitalSign()">+ Add Vital Sign</button>

    <h3>Physical Findings</h3>
    <div id="findingsList"></div>
    <button type="button" class="btn btn-secondary btn-small" onclick="addFinding()">+ Add Finding</button>
  </div>

  <!-- Expected Answers -->
  <div class="form-section">
    <h2>✅ Expected Differential Diagnosis</h2>
    <div class="form-hint">List all reasonable differential diagnoses (most likely first)</div>
    <div id="differentialList"></div>
    <button type="button" class="btn btn-secondary btn-small" onclick="addDifferential()">+ Add Diagnosis</button>
  </div>

  <!-- Next Steps -->
  <div class="form-section">
    <h2>🔬 Expected Next Steps</h2>

    <h3>Immediate Actions</h3>
    <div id="immediateActionsList"></div>
    <button type="button" class="btn btn-secondary btn-small" onclick="addImmediateAction()">+ Add Action</button>

    <h3>Laboratory Tests</h3>
    <div id="labsList"></div>
    <button type="button" class="btn btn-secondary btn-small" onclick="addLab()">+ Add Lab</button>

    <h3>Imaging Studies</h3>
    <div id="imagingList"></div>
    <button type="button" class="btn btn-secondary btn-small" onclick="addImaging()">+ Add Imaging</button>

    <h3>Treatment/Management</h3>
    <div id="treatmentList"></div>
    <button type="button" class="btn btn-secondary btn-small" onclick="addTreatment()">+ Add Treatment</button>
  </div>

  <!-- Scoring Guidelines -->
  <div class="form-section">
    <h2>📊 Scoring Guidelines</h2>

    <div class="form-group">
      <label>Critical Diagnoses (Must Include) *</label>
      <div class="form-hint">1-3 most important diagnoses that students must identify</div>
      <div id="criticalDiagnosesList"></div>
      <button type="button" class="btn btn-secondary btn-small" onclick="addCriticalDiagnosis()">+ Add Critical Diagnosis</button>
    </div>

    <div class="form-group">
      <label>Critical Actions (Must Include) *</label>
      <div class="form-hint">Key actions that are essential (e.g., ECG, immediate antibiotics)</div>
      <div id="criticalActionsList"></div>
      <button type="button" class="btn btn-secondary btn-small" onclick="addCriticalAction()">+ Add Critical Action</button>
    </div>

    <div class="form-group">
      <label>Common Pitfalls</label>
      <div class="form-hint">What students often miss or do incorrectly</div>
      <div id="pitfallsList"></div>
      <button type="button" class="btn btn-secondary btn-small" onclick="addPitfall()">+ Add Pitfall</button>
    </div>
  </div>

  <!-- Educational Content -->
  <div class="form-section">
    <h2>📚 Educational Notes</h2>

    <div class="form-group">
      <label for="educationalNotes">Teaching Points *</label>
      <textarea id="educationalNotes" rows="5" placeholder="Key learning points for this case. What should students remember?" required></textarea>
      <div class="form-hint">2-4 sentences explaining the key teaching points and clinical reasoning</div>
    </div>
  </div>

  <!-- Generate Button -->
  <div class="button-group">
    <button type="button" class="btn btn-primary" onclick="generateYAML()">
      🎯 Generate YAML Code
    </button>
    <button type="button" class="btn btn-secondary" onclick="resetForm()">
      🔄 Clear Form
    </button>
  </div>

  <!-- Output Section -->
  <div class="output-section" id="outputSection" style="display: none;">
    <h2>📄 Generated YAML Code</h2>
    <div class="alert alert-success">
      ✅ YAML generated successfully! Copy the code below and add it to <code>_data/diagnosis_cases.yml</code>
    </div>
    <div class="yaml-output" id="yamlOutput"></div>
    <button type="button" class="btn btn-success copy-btn" onclick="copyYAML()">
      📋 Copy to Clipboard
    </button>
  </div>
</div>

<script>
// Initialize form with one input for each list
document.addEventListener('DOMContentLoaded', () => {
  addSymptom();
  addVitalSign();
  addFinding();
  addDifferential();
  addImmediateAction();
  addLab();
  addImaging();
  addTreatment();
  addCriticalDiagnosis();
  addCriticalAction();
  addPitfall();
});

// List item creators
function createListItem(containerId, placeholder = '') {
  const container = document.getElementById(containerId);
  const div = document.createElement('div');
  div.className = 'list-item';
  div.innerHTML = `
    <input type="text" placeholder="${placeholder}">
    <button type="button" class="btn btn-secondary btn-icon" onclick="this.parentElement.remove()">✕</button>
  `;
  container.appendChild(div);
}

function addSymptom() { createListItem('symptomsList', 'e.g., Substernal chest pain, 7/10 severity'); }
function addVitalSign() { createListItem('vitalSignsList', 'e.g., BP: 145/92 mmHg'); }
function addFinding() { createListItem('findingsList', 'e.g., Cardiovascular: Regular rate and rhythm'); }
function addDifferential() { createListItem('differentialList', 'e.g., Acute coronary syndrome'); }
function addImmediateAction() { createListItem('immediateActionsList', 'e.g., ECG (12-lead)'); }
function addLab() { createListItem('labsList', 'e.g., Troponin'); }
function addImaging() { createListItem('imagingList', 'e.g., Chest X-ray'); }
function addTreatment() { createListItem('treatmentList', 'e.g., Aspirin 325mg'); }
function addCriticalDiagnosis() { createListItem('criticalDiagnosesList', 'e.g., STEMI'); }
function addCriticalAction() { createListItem('criticalActionsList', 'e.g., ECG'); }
function addPitfall() { createListItem('pitfallsList', 'e.g., Not ordering ECG immediately'); }

// Get values from list
function getListValues(containerId) {
  const container = document.getElementById(containerId);
  const inputs = container.querySelectorAll('input');
  return Array.from(inputs)
    .map(input => input.value.trim())
    .filter(value => value !== '');
}

// Generate YAML
function generateYAML() {
  // Validate required fields
  const required = [
    'caseId', 'caseLevel', 'caseDifficulty', 'caseTitle',
    'patientName', 'patientAge', 'patientGender', 'patientAppearance',
    'chiefComplaint', 'educationalNotes'
  ];

  for (const field of required) {
    const el = document.getElementById(field);
    if (!el.value.trim()) {
      alert(`Please fill in: ${field}`);
      el.focus();
      return;
    }
  }

  // Collect data
  const data = {
    id: document.getElementById('caseId').value.trim(),
    level: parseInt(document.getElementById('caseLevel').value),
    difficulty: document.getElementById('caseDifficulty').value,
    title: document.getElementById('caseTitle').value.trim(),
    patient: {
      name: document.getElementById('patientName').value.trim(),
      age: parseInt(document.getElementById('patientAge').value),
      gender: document.getElementById('patientGender').value,
      appearance: document.getElementById('patientAppearance').value
    },
    chief_complaint: document.getElementById('chiefComplaint').value.trim(),
    symptoms: getListValues('symptomsList'),
    physical_exam: {
      vital_signs: getListValues('vitalSignsList'),
      findings: getListValues('findingsList')
    },
    expected_differential: getListValues('differentialList'),
    expected_next_steps: {
      immediate: getListValues('immediateActionsList'),
      labs: getListValues('labsList'),
      imaging: getListValues('imagingList'),
      treatment: getListValues('treatmentList')
    },
    scoring_notes: {
      critical_diagnoses: getListValues('criticalDiagnosesList'),
      critical_actions: getListValues('criticalActionsList'),
      common_pitfalls: getListValues('pitfallsList')
    },
    educational_notes: document.getElementById('educationalNotes').value.trim()
  };

  // Generate YAML string
  const yaml = generateYAMLString(data);

  // Display
  document.getElementById('yamlOutput').textContent = yaml;
  document.getElementById('outputSection').style.display = 'block';
  document.getElementById('outputSection').scrollIntoView({ behavior: 'smooth' });
}

function generateYAMLString(data) {
  const indent = '  ';
  const indent2 = '    ';
  const indent3 = '      ';

  let yaml = `${data.id}:\n`;
  yaml += `${indent}id: "${data.id}"\n`;
  yaml += `${indent}level: ${data.level}\n`;
  yaml += `${indent}difficulty: "${data.difficulty}"\n`;
  yaml += `${indent}title: "${data.title}"\n`;
  yaml += `${indent}patient:\n`;
  yaml += `${indent2}name: "${data.patient.name}"\n`;
  yaml += `${indent2}age: ${data.patient.age}\n`;
  yaml += `${indent2}gender: "${data.patient.gender}"\n`;
  yaml += `${indent2}appearance: "${data.patient.appearance}"\n`;
  yaml += `${indent}chief_complaint: "${data.chief_complaint}"\n`;

  // Symptoms
  yaml += `${indent}symptoms:\n`;
  data.symptoms.forEach(s => {
    yaml += `${indent2}- "${s}"\n`;
  });

  // Physical exam
  yaml += `${indent}physical_exam:\n`;
  yaml += `${indent2}vital_signs:\n`;
  data.physical_exam.vital_signs.forEach(v => {
    yaml += `${indent3}- "${v}"\n`;
  });
  yaml += `${indent2}findings:\n`;
  data.physical_exam.findings.forEach(f => {
    yaml += `${indent3}- "${f}"\n`;
  });

  // Expected differential
  yaml += `${indent}expected_differential:\n`;
  data.expected_differential.forEach(d => {
    yaml += `${indent2}- "${d}"\n`;
  });

  // Expected next steps
  yaml += `${indent}expected_next_steps:\n`;
  yaml += `${indent2}immediate:\n`;
  data.expected_next_steps.immediate.forEach(a => {
    yaml += `${indent3}- "${a}"\n`;
  });
  yaml += `${indent2}labs:\n`;
  data.expected_next_steps.labs.forEach(l => {
    yaml += `${indent3}- "${l}"\n`;
  });
  yaml += `${indent2}imaging:\n`;
  data.expected_next_steps.imaging.forEach(i => {
    yaml += `${indent3}- "${i}"\n`;
  });
  yaml += `${indent2}treatment:\n`;
  data.expected_next_steps.treatment.forEach(t => {
    yaml += `${indent3}- "${t}"\n`;
  });

  // Scoring notes
  yaml += `${indent}scoring_notes:\n`;
  yaml += `${indent2}critical_diagnoses:\n`;
  data.scoring_notes.critical_diagnoses.forEach(cd => {
    yaml += `${indent3}- "${cd}"\n`;
  });
  yaml += `${indent2}critical_actions:\n`;
  data.scoring_notes.critical_actions.forEach(ca => {
    yaml += `${indent3}- "${ca}"\n`;
  });
  if (data.scoring_notes.common_pitfalls.length > 0) {
    yaml += `${indent2}common_pitfalls:\n`;
    data.scoring_notes.common_pitfalls.forEach(cp => {
      yaml += `${indent3}- "${cp}"\n`;
    });
  }

  // Educational notes
  yaml += `${indent}educational_notes: "${data.educational_notes}"\n`;

  return yaml;
}

function copyYAML() {
  const yamlText = document.getElementById('yamlOutput').textContent;
  navigator.clipboard.writeText(yamlText).then(() => {
    alert('✅ YAML code copied to clipboard!');
  }).catch(err => {
    console.error('Failed to copy:', err);
    alert('Failed to copy. Please select and copy manually.');
  });
}

function resetForm() {
  if (confirm('Are you sure you want to clear the form?')) {
    location.reload();
  }
}
</script>
