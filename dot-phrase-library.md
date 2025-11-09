---
layout: default
title: Dot Phrase Library
description: Access a free library of clinical dot phrases with formatting preserved. Copy and paste directly into your EMR.
permalink: /dot-phrase-library/
---

<style>
  .search-filter-bar {
    background: white;
    padding: 20px 30px;
    border-radius: 8px;
    margin-bottom: 30px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    display: flex;
    gap: 15px;
    align-items: center;
    flex-wrap: wrap;
  }

  .search-input {
    flex: 1;
    min-width: 250px;
    padding: 10px 15px;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-md);
    font-size: var(--font-size-base);
    transition: border-color var(--transition-fast);
  }

  .search-input:focus {
    outline: none;
    border-color: var(--color-primary);
  }

  .filter-select {
    padding: 10px 15px;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-md);
    font-size: var(--font-size-base);
    background: white;
    cursor: pointer;
    transition: border-color var(--transition-fast);
  }

  .filter-select:focus {
    outline: none;
    border-color: var(--color-primary);
  }

  .tag-filter-container {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    align-items: center;
  }

  .tag-badge {
    display: inline-block;
    padding: 4px 12px;
    background: var(--color-primary-light);
    color: var(--color-primary-dark);
    border-radius: var(--radius-full);
    font-size: var(--font-size-xs);
    font-weight: var(--font-weight-semibold);
    cursor: pointer;
    transition: all var(--transition-fast);
    border: 2px solid transparent;
  }

  .tag-badge:hover {
    background: var(--color-primary);
    color: white;
  }

  .tag-badge.active {
    background: var(--color-primary);
    color: white;
    border-color: var(--color-primary-dark);
  }

  .tags-in-card {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
    margin-top: var(--space-2);
  }

  .tags-in-card .tag-badge {
    font-size: var(--font-size-xs);
    padding: 2px 8px;
    cursor: default;
  }

  .group-section {
    margin-bottom: var(--space-6);
  }

  .group-header {
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
    color: white;
    padding: var(--space-5);
    border-radius: var(--radius-lg);
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--space-3);
    transition: all var(--transition-base);
    box-shadow: var(--shadow-md);
  }

  .group-header:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }

  .group-header h2 {
    margin: 0;
    font-size: var(--font-size-2xl);
    color: white;
  }

  /* Nested group styling */
  .group-section.level-1 {
    margin-left: 0;
  }

  .group-section.level-2 {
    margin-left: var(--space-6);
  }

  .group-section.level-3 {
    margin-left: calc(var(--space-6) * 2);
  }

  .group-section.level-4 {
    margin-left: calc(var(--space-6) * 3);
  }

  .group-header.level-1 {
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  }

  .group-header.level-2 {
    background: linear-gradient(135deg, #4a90e2 0%, #357abd 100%);
    font-size: var(--font-size-xl);
  }

  .group-header.level-3 {
    background: linear-gradient(135deg, #5da3f0 0%, #4a90e2 100%);
    font-size: var(--font-size-lg);
  }

  .group-header.level-4 {
    background: linear-gradient(135deg, #7eb8f5 0%, #5da3f0 100%);
    font-size: var(--font-size-base);
  }

  .group-header.level-2 h2,
  .group-header.level-3 h2,
  .group-header.level-4 h2 {
    font-size: inherit;
  }

  .group-count {
    background: rgba(255, 255, 255, 0.2);
    padding: var(--space-2) var(--space-3);
    border-radius: var(--radius-full);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semibold);
  }

  .group-actions {
    display: flex;
    gap: var(--space-2);
    align-items: center;
  }

  .expand-icon {
    font-size: var(--font-size-xl);
    transition: transform var(--transition-base);
  }

  .group-header.collapsed .expand-icon {
    transform: rotate(-90deg);
  }

  .group-content {
    max-height: 10000px;
    overflow: hidden;
    transition: max-height var(--transition-slow), opacity var(--transition-slow);
    opacity: 1;
  }

  .group-content.collapsed {
    max-height: 0;
    opacity: 0;
  }

  .dotphrase-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: var(--space-6);
    margin-top: var(--space-4);
  }

  .dotphrase-card {
    background: white;
    border: 2px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: var(--space-5);
    transition: all var(--transition-base);
    display: flex;
    flex-direction: column;
    box-shadow: var(--shadow-sm);
  }

  .dotphrase-card:hover {
    border-color: var(--color-primary);
    box-shadow: var(--shadow-lg);
    transform: translateY(-2px);
  }

  .dotphrase-header {
    margin-bottom: var(--space-4);
    padding-bottom: var(--space-3);
    border-bottom: 2px solid var(--color-border-light);
  }

  .dotphrase-title {
    font-size: var(--font-size-lg);
    font-weight: var(--font-weight-bold);
    color: var(--color-text-primary);
    margin-bottom: var(--space-2);
  }

  .dotphrase-shortcut {
    display: inline-block;
    background: var(--color-primary-light);
    color: var(--color-primary-dark);
    padding: var(--space-1) var(--space-3);
    border-radius: var(--radius-md);
    font-family: var(--font-family-mono);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-semibold);
  }

  .dotphrase-content {
    flex: 1;
    margin-bottom: var(--space-4);
    padding: var(--space-4);
    background: var(--color-bg-secondary);
    border-radius: var(--radius-md);
    border-left: 3px solid var(--color-primary);
    font-size: var(--font-size-sm);
    line-height: var(--line-height-relaxed);
    overflow-wrap: break-word;
    word-wrap: break-word;
    max-height: 300px;
    overflow-y: auto;
  }

  .dotphrase-content p {
    margin-bottom: var(--space-3);
  }

  .dotphrase-content p:last-child {
    margin-bottom: 0;
  }

  .dotphrase-content ul,
  .dotphrase-content ol {
    margin-left: var(--space-5);
    margin-bottom: var(--space-3);
  }

  .dotphrase-content li {
    margin-bottom: var(--space-2);
  }

  .dotphrase-actions {
    display: flex;
    gap: var(--space-2);
  }

  .copy-notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--color-success);
    color: white;
    padding: var(--space-4) var(--space-6);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-xl);
    font-weight: var(--font-weight-semibold);
    opacity: 0;
    transform: translateY(-20px);
    transition: all var(--transition-base);
    z-index: 1000;
    pointer-events: none;
  }

  .copy-notification.show {
    opacity: 1;
    transform: translateY(0);
  }

  .no-results {
    text-align: center;
    padding: var(--space-10);
    color: var(--color-text-secondary);
  }

  .no-results h3 {
    color: var(--color-text-primary);
    margin-bottom: var(--space-4);
  }

  @media screen and (max-width: 768px) {
    .dotphrase-grid {
      grid-template-columns: 1fr;
    }

    .search-filter-bar {
      flex-direction: column;
      align-items: stretch;
    }

    .search-input,
    .filter-select {
      width: 100%;
    }

    .group-actions {
      flex-direction: column;
      align-items: flex-end;
    }

    .group-section.level-2,
    .group-section.level-3,
    .group-section.level-4 {
      margin-left: var(--space-4);
    }
  }

  .info-section {
    background: white;
    padding: 20px 30px;
    border-radius: 8px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    border-left: 4px solid var(--color-primary);
  }

  .info-section h3 {
    margin-top: 0;
    color: var(--color-primary);
  }

  .info-section p {
    margin-bottom: 10px;
    line-height: 1.6;
  }

  .info-section ul {
    margin-left: 20px;
  }

  .info-section li {
    margin-bottom: 8px;
  }
</style>

<div class="info-section">
  <h3>Welcome to the Dot Phrase Library</h3>
  <p>This library contains clinical dot phrases (smart phrases) that you can copy directly into your EMR. All formatting is preserved when you copy.</p>
  <ul>
    <li>Use the search bar to find phrases by keyword</li>
    <li>Filter by group or tag to browse specific categories</li>
    <li>Click "Copy" to copy a phrase with formatting preserved</li>
    <li>Click "Download" to save individual phrases as HTML files</li>
    <li>Click "Export Group" to download entire groups or subgroups</li>
  </ul>
</div>

<div class="search-filter-bar">
  <input 
    type="text" 
    id="searchInput" 
    class="search-input" 
    placeholder="Search dot phrases..."
    onkeyup="renderDotPhrases()"
  />
  
  <select id="groupFilter" class="filter-select" onchange="renderDotPhrases()">
    <option value="">All Groups</option>
  </select>

  <select id="tagFilter" class="filter-select" onchange="handleTagFilterChange()">
    <option value="">All Tags</option>
  </select>
</div>

<div id="activeTagsContainer" class="tag-filter-container" style="margin-bottom: 20px; display: none;">
  <span style="font-weight: 600; color: var(--color-text-secondary);">Active filters:</span>
  <div id="activeTags"></div>
</div>

<div id="dotphraseContainer"></div>

<div id="noResults" class="no-results" style="display: none;">
  <h3>No phrases found</h3>
  <p>Try adjusting your search or filters</p>
</div>

<div id="copyNotification" class="copy-notification">
  ✓ Copied to clipboard!
</div>

<script>
// =====================================================
// DATA STRUCTURE
// =====================================================
const dotPhraseData = [
  {
    name: "Inbox Management System",
    level: 1,
    subgroups: [
      {
        name: "Lab Results",
        level: 2,
        subgroups: [
          {
            name: "Normal Results",
            level: 3,
            phrases: [
              {
                title: "Normal Lab - Routine Follow-up",
                shortcut: ".labnormal",
                tags: ["labs", "normal", "follow-up", "routine"],
                contentHtml: `<p>Lab results are within normal limits. Please call patient to inform them of normal results and schedule routine follow-up per protocol.</p><p>Thank you.</p>`
              },
              {
                title: "Normal Lab - No Action Needed",
                shortcut: ".labnormalnoaction",
                tags: ["labs", "normal", "no-action"],
                contentHtml: `<p>Lab results are within normal limits. No further action needed at this time. Please document in chart and notify patient via portal message.</p><p>Thank you.</p>`
              },
              {
                title: "Normal Lab with Patient Education",
                shortcut: ".labnormaled",
                tags: ["labs", "normal", "education"],
                contentHtml: `<p>Lab results are within normal limits. Please call patient to review results and provide education regarding ***. Schedule follow-up in *** months.</p><p>Thank you.</p>`
              }
            ]
          },
          {
            name: "Abnormal Results",
            level: 3,
            phrases: [
              {
                title: "Abnormal Lab - Requires Callback",
                shortcut: ".lababnormal",
                tags: ["labs", "abnormal", "callback", "urgent"],
                contentHtml: `<p>Lab results show ***. Please call patient within 24 hours to discuss results and arrange for ***. Document all attempts to reach patient.</p><p>Thank you.</p>`
              },
              {
                title: "Abnormal Lab - Repeat Needed",
                shortcut: ".lababnormalrepeat",
                tags: ["labs", "abnormal", "repeat"],
                contentHtml: `<p>Lab results show ***. Please contact patient to schedule repeat labs in *** to confirm findings. Provide fasting instructions if applicable.</p><p>Thank you.</p>`
              },
              {
                title: "Abnormal Lab - Start Medication",
                shortcut: ".lababnormalmed",
                tags: ["labs", "abnormal", "medication"],
                contentHtml: `<p>Lab results indicate need to initiate ***. Please call patient to discuss starting medication, send prescription to pharmacy, and schedule follow-up in ***.</p><p>Thank you.</p>`
              },
              {
                title: "Abnormal Lab - Adjust Medication",
                shortcut: ".lababnormaladjust",
                tags: ["labs", "abnormal", "medication", "adjustment"],
                contentHtml: `<p>Lab results indicate need to adjust ***. Please call patient to discuss medication change, send updated prescription to pharmacy, and arrange follow-up labs in ***.</p><p>Thank you.</p>`
              }
            ]
          },
          {
            name: "Critical Results",
            level: 3,
            phrases: [
              {
                title: "Critical Lab - Immediate Action",
                shortcut: ".labcritical",
                tags: ["labs", "critical", "urgent", "immediate"],
                contentHtml: `<p><strong>CRITICAL VALUE: ***</strong></p><p>Please call patient immediately. If unable to reach patient after 3 attempts, notify provider. Patient may require immediate evaluation in ED. Document all communication attempts with timestamps.</p><p>Thank you.</p>`
              },
              {
                title: "Critical Lab - ED Referral",
                shortcut: ".labcriticaled",
                tags: ["labs", "critical", "emergency", "urgent"],
                contentHtml: `<p><strong>CRITICAL VALUE: ***</strong></p><p>Please call patient immediately and advise to proceed to emergency department. If patient declines or cannot be reached, notify provider immediately. Document communication and patient decision.</p><p>Thank you.</p>`
              }
            ]
          }
        ]
      },
      {
        name: "Imaging Results",
        level: 2,
        subgroups: [
          {
            name: "Normal Imaging",
            level: 3,
            phrases: [
              {
                title: "Normal Imaging - Routine",
                shortcut: ".imagingnormal",
                tags: ["imaging", "normal", "routine"],
                contentHtml: `<p>Imaging results are normal. Please notify patient via portal message or phone call per their preference. No further imaging needed at this time.</p><p>Thank you.</p>`
              },
              {
                title: "Normal Imaging - Continue Current Plan",
                shortcut: ".imagingnormalcontinue",
                tags: ["imaging", "normal", "follow-up"],
                contentHtml: `<p>Imaging results are reassuring and support continuing current management plan. Please call patient to review findings and confirm next follow-up appointment.</p><p>Thank you.</p>`
              }
            ]
          },
          {
            name: "Abnormal Imaging",
            level: 3,
            phrases: [
              {
                title: "Abnormal Imaging - Requires Discussion",
                shortcut: ".imagingabnormal",
                tags: ["imaging", "abnormal", "callback"],
                contentHtml: `<p>Imaging shows ***. Please call patient to schedule appointment for in-person discussion of findings and next steps.</p><p>Thank you.</p>`
              },
              {
                title: "Abnormal Imaging - Specialist Referral",
                shortcut: ".imagingabnormalreferral",
                tags: ["imaging", "abnormal", "referral", "specialist"],
                contentHtml: `<p>Imaging demonstrates *** requiring specialist evaluation. Please call patient to discuss findings, submit referral to ***, and provide patient with specialist contact information.</p><p>Thank you.</p>`
              },
              {
                title: "Abnormal Imaging - Additional Studies",
                shortcut: ".imagingabnormaladditional",
                tags: ["imaging", "abnormal", "follow-up"],
                contentHtml: `<p>Imaging findings of *** require additional workup. Please call patient to arrange for *** and schedule follow-up visit to review all results.</p><p>Thank you.</p>`
              }
            ]
          },
          {
            name: "Critical Imaging",
            level: 3,
            phrases: [
              {
                title: "Critical Imaging - Urgent Action",
                shortcut: ".imagingcritical",
                tags: ["imaging", "critical", "urgent", "immediate"],
                contentHtml: `<p><strong>URGENT IMAGING FINDING: ***</strong></p><p>Please call patient immediately to discuss findings and arrange urgent evaluation. If unable to reach patient, notify provider. Document all communication attempts.</p><p>Thank you.</p>`
              }
            ]
          }
        ]
      },
      {
        name: "Patient Communications",
        level: 2,
        subgroups: [
          {
            name: "Medication Questions",
            level: 3,
            phrases: [
              {
                title: "Medication Side Effects",
                shortcut: ".medsideeffect",
                tags: ["medication", "side-effects", "callback"],
                contentHtml: `<p>Patient reporting *** with ***. Please call to assess symptom severity and timing. Discuss continuing current medication vs. alternatives. Schedule follow-up as appropriate.</p><p>Thank you.</p>`
              },
              {
                title: "Medication Clarification",
                shortcut: ".medclarify",
                tags: ["medication", "education", "callback"],
                contentHtml: `<p>Patient has questions about ***. Please call to clarify dosing instructions, timing, and administration. Confirm patient understanding and address any concerns.</p><p>Thank you.</p>`
              },
              {
                title: "Out of Medication",
                shortcut: ".medout",
                tags: ["medication", "refill", "callback"],
                contentHtml: `<p>Patient reports being out of ***. Please call to verify current dosing, send refill to pharmacy, and review importance of medication adherence and timely refill requests.</p><p>Thank you.</p>`
              }
            ]
          },
          {
            name: "General Questions",
            level: 3,
            phrases: [
              {
                title: "General Medical Question",
                shortcut: ".questiongeneral",
                tags: ["question", "education", "callback"],
                contentHtml: `<p>Patient has questions regarding ***. Please call to address concerns and provide appropriate education. Offer to schedule visit if more detailed discussion needed.</p><p>Thank you.</p>`
              },
              {
                title: "Test Procedure Question",
                shortcut: ".questionprocedure",
                tags: ["question", "procedure", "education"],
                contentHtml: `<p>Patient has questions about upcoming ***. Please call to explain procedure, preparation requirements, and what to expect. Provide written instructions via portal if available.</p><p>Thank you.</p>`
              },
              {
                title: "Portal Message Response",
                shortcut: ".portalresponse",
                tags: ["portal", "message", "communication"],
                contentHtml: `<p>Please respond to patient portal message regarding ***. Provide clear, concise information and advise patient to call if further questions or if appointment needed.</p><p>Thank you.</p>`
              }
            ]
          },
          {
            name: "Symptom Reports",
            level: 3,
            phrases: [
              {
                title: "New Symptom - Routine Triage",
                shortcut: ".symptomnew",
                tags: ["symptoms", "triage", "callback"],
                contentHtml: `<p>Patient reporting ***. Please call to assess symptom onset, severity, and associated factors. Provide appropriate guidance and schedule visit if warranted.</p><p>Thank you.</p>`
              },
              {
                title: "Worsening Symptom",
                shortcut: ".symptomworse",
                tags: ["symptoms", "triage", "urgent", "callback"],
                contentHtml: `<p>Patient reporting worsening ***. Please call within 2 hours to assess current status. Arrange urgent visit or direct to appropriate level of care based on clinical assessment.</p><p>Thank you.</p>`
              },
              {
                title: "Chronic Symptom Check-in",
                shortcut: ".symptomchronic",
                tags: ["symptoms", "chronic", "follow-up"],
                contentHtml: `<p>Patient checking in regarding chronic ***. Please call to assess current symptom control and effectiveness of management plan. Adjust plan as needed and schedule follow-up.</p><p>Thank you.</p>`
              }
            ]
          }
        ]
      },
      {
        name: "Appointments & Scheduling",
        level: 2,
        phrases: [
          {
            title: "Schedule Follow-up Visit",
            shortcut: ".schedulefollow",
            tags: ["scheduling", "follow-up", "appointment"],
            contentHtml: `<p>Please call patient to schedule follow-up appointment in ***. Ensure patient has visit reason and any required preparation instructions.</p><p>Thank you.</p>`
          },
          {
            title: "Schedule Urgent Visit",
            shortcut: ".scheduleurgent",
            tags: ["scheduling", "urgent", "appointment"],
            contentHtml: `<p>Please call patient to arrange urgent appointment within *** to address ***. If no urgent slots available, coordinate with provider for appropriate alternative.</p><p>Thank you.</p>`
          },
          {
            title: "Pre-Visit Preparation",
            shortcut: ".previsitprep",
            tags: ["scheduling", "appointment", "preparation"],
            contentHtml: `<p>Patient has upcoming appointment on ***. Please call to confirm appointment and review required preparation including ***. Send written instructions via portal.</p><p>Thank you.</p>`
          },
          {
            title: "Missed Appointment Follow-up",
            shortcut: ".missedappt",
            tags: ["scheduling", "missed-appointment", "follow-up"],
            contentHtml: `<p>Patient missed appointment on ***. Please call to reschedule and assess if patient is experiencing barriers to care. Emphasize importance of follow-up for ***.</p><p>Thank you.</p>`
          }
        ]
      },
      {
        name: "Referrals & Coordination",
        level: 2,
        phrases: [
          {
            title: "Submit Specialist Referral",
            shortcut: ".referralsubmit",
            tags: ["referral", "specialist", "coordination"],
            contentHtml: `<p>Please submit referral to *** for evaluation of ***. Provide specialist with relevant clinical information and recent test results. Give patient specialist contact information and expected timeline.</p><p>Thank you.</p>`
          },
          {
            title: "Referral Status Update",
            shortcut: ".referralstatus",
            tags: ["referral", "specialist", "follow-up"],
            contentHtml: `<p>Please check status of referral to *** submitted on ***. Contact patient with update and assist with scheduling if referral approved. Follow up with insurance if delays.</p><p>Thank you.</p>`
          },
          {
            title: "Specialist Report Follow-up",
            shortcut: ".specialistreport",
            tags: ["referral", "specialist", "results", "callback"],
            contentHtml: `<p>Specialist report received from ***. Please call patient to review findings and recommendations. Coordinate implementation of specialist's treatment plan and schedule appropriate follow-up.</p><p>Thank you.</p>`
          },
          {
            title: "Care Coordination - Multiple Providers",
            shortcut: ".carecoordination",
            tags: ["coordination", "specialist", "communication"],
            contentHtml: `<p>Please coordinate care with *** regarding ***. Ensure all providers have current medication list and test results. Contact patient to review coordinated plan and next steps.</p><p>Thank you.</p>`
          }
        ]
      },
      {
        name: "Test Ordering & Tracking",
        level: 2,
        phrases: [
          {
            title: "Order Labs",
            shortcut: ".orderlabs",
            tags: ["labs", "order", "scheduling"],
            contentHtml: `<p>Please order *** for patient. Call to explain test purpose, any required preparation, and timeframe for completion. Provide lab requisition and instructions.</p><p>Thank you.</p>`
          },
          {
            title: "Order Imaging",
            shortcut: ".orderimaging",
            tags: ["imaging", "order", "scheduling"],
            contentHtml: `<p>Please order *** for evaluation of ***. Call patient to explain test purpose and provide scheduling information. Ensure any required pre-authorization is obtained.</p><p>Thank you.</p>`
          },
          {
            title: "Outstanding Test Reminder",
            shortcut: ".testreminder",
            tags: ["labs", "imaging", "follow-up", "reminder"],
            contentHtml: `<p>Patient has outstanding *** ordered on *** that has not been completed. Please call to remind patient and assist with scheduling if needed. Address any barriers to completion.</p><p>Thank you.</p>`
          },
          {
            title: "Tracking Pending Results",
            shortcut: ".trackresults",
            tags: ["results", "tracking", "follow-up"],
            contentHtml: `<p>Please follow up on pending results for *** completed on ***. Contact facility if results not received. Call patient once results available to review findings.</p><p>Thank you.</p>`
          }
        ]
      },
      {
        name: "Administrative Tasks",
        level: 2,
        phrases: [
          {
            title: "Form Completion Request",
            shortcut: ".formrequest",
            tags: ["administrative", "forms", "documentation"],
            contentHtml: `<p>Patient requesting completion of *** form. Please obtain form from patient, review with provider for completion, and return to patient via ***.</p><p>Thank you.</p>`
          },
          {
            title: "Medical Records Request",
            shortcut: ".recordsrequest",
            tags: ["administrative", "records", "documentation"],
            contentHtml: `<p>Please process medical records request for ***. Verify patient authorization, prepare requested records, and send via *** per patient preference. Notify patient once completed.</p><p>Thank you.</p>`
          },
          {
            title: "Insurance Authorization",
            shortcut: ".authrequest",
            tags: ["administrative", "authorization", "insurance"],
            contentHtml: `<p>Prior authorization required for ***. Please gather required documentation, submit authorization request, and follow up with insurance. Keep patient updated on authorization status.</p><p>Thank you.</p>`
          },
          {
            title: "Prescription Transfer",
            shortcut: ".rxtransfer",
            tags: ["medication", "transfer", "pharmacy"],
            contentHtml: `<p>Patient requesting transfer of *** to *** pharmacy. Please contact current pharmacy to arrange transfer and confirm with new pharmacy that prescription is available for pickup.</p><p>Thank you.</p>`
          }
        ]
      }
    ]
  }
];

// =====================================================
// STATE MANAGEMENT
// =====================================================
let expandedGroups = new Set();
let activeTagFilters = new Set();

// =====================================================
// INITIALIZATION
// =====================================================
document.addEventListener('DOMContentLoaded', function() {
  populateFilters();
  renderDotPhrases();
});

// =====================================================
// FILTER POPULATION
// =====================================================
function populateFilters() {
  const groupFilter = document.getElementById('groupFilter');
  const tagFilter = document.getElementById('tagFilter');
  
  // Collect all groups (including nested)
  const allGroups = [];
  function collectGroups(groups, level = 1) {
    groups.forEach(group => {
      allGroups.push({ name: group.name, level: level });
      if (group.subgroups) {
        collectGroups(group.subgroups, level + 1);
      }
    });
  }
  collectGroups(dotPhraseData);
  
  // Populate group filter
  allGroups.forEach(group => {
    const option = document.createElement('option');
    const indent = '　'.repeat(group.level - 1);
    option.value = group.name;
    option.textContent = indent + group.name;
    groupFilter.appendChild(option);
  });
  
  // Collect all unique tags
  const allTags = new Set();
  function collectTags(groups) {
    groups.forEach(group => {
      if (group.phrases) {
        group.phrases.forEach(phrase => {
          phrase.tags.forEach(tag => allTags.add(tag));
        });
      }
      if (group.subgroups) {
        collectTags(group.subgroups);
      }
    });
  }
  collectTags(dotPhraseData);
  
  // Populate tag filter
  Array.from(allTags).sort().forEach(tag => {
    const option = document.createElement('option');
    option.value = tag;
    option.textContent = tag;
    tagFilter.appendChild(option);
  });
}

// =====================================================
// TAG FILTER HANDLING
// =====================================================
function handleTagFilterChange() {
  const tagFilter = document.getElementById('tagFilter');
  const selectedTag = tagFilter.value;
  
  if (selectedTag && !activeTagFilters.has(selectedTag)) {
    activeTagFilters.add(selectedTag);
    updateActiveTagsDisplay();
    renderDotPhrases();
  }
  
  // Reset select to "All Tags"
  tagFilter.value = '';
}

function removeTagFilter(tag) {
  activeTagFilters.delete(tag);
  updateActiveTagsDisplay();
  renderDotPhrases();
}

function updateActiveTagsDisplay() {
  const container = document.getElementById('activeTagsContainer');
  const activeTags = document.getElementById('activeTags');
  
  if (activeTagFilters.size === 0) {
    container.style.display = 'none';
    return;
  }
  
  container.style.display = 'flex';
  activeTags.innerHTML = Array.from(activeTagFilters).map(tag => 
    `<span class="tag-badge active" onclick="removeTagFilter('${tag}')" style="cursor: pointer;" title="Click to remove">
      ${escapeHtml(tag)} ✕
    </span>`
  ).join('');
}

// =====================================================
// GROUP MANAGEMENT
// =====================================================
function toggleGroup(groupName) {
  if (expandedGroups.has(groupName)) {
    expandedGroups.delete(groupName);
  } else {
    expandedGroups.add(groupName);
  }
  renderDotPhrases();
}

function expandAll() {
  function collectAllGroups(groups) {
    groups.forEach(group => {
      expandedGroups.add(group.name);
      if (group.subgroups) {
        collectAllGroups(group.subgroups);
      }
    });
  }
  collectAllGroups(dotPhraseData);
  renderDotPhrases();
}

function collapseAll() {
  expandedGroups.clear();
  renderDotPhrases();
}

// =====================================================
// FILTERING LOGIC
// =====================================================
function filterData() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const groupFilter = document.getElementById('groupFilter').value;
  
  function filterGroups(groups) {
    return groups.map(group => {
      let filteredGroup = { ...group };
      
      // Filter phrases
      if (group.phrases) {
        filteredGroup.phrases = group.phrases.filter(phrase => {
          const matchesSearch = !searchTerm || 
            phrase.title.toLowerCase().includes(searchTerm) ||
            phrase.shortcut.toLowerCase().includes(searchTerm) ||
            phrase.contentHtml.toLowerCase().includes(searchTerm) ||
            phrase.tags.some(tag => tag.toLowerCase().includes(searchTerm));
          
          const matchesTags = activeTagFilters.size === 0 ||
            Array.from(activeTagFilters).every(tag => phrase.tags.includes(tag));
          
          return matchesSearch && matchesTags;
        });
      }
      
      // Filter subgroups recursively
      if (group.subgroups) {
        filteredGroup.subgroups = filterGroups(group.subgroups);
      }
      
      return filteredGroup;
    }).filter(group => {
      // Only include groups that match the group filter
      const matchesGroupFilter = !groupFilter || group.name === groupFilter;
      
      // Check if group has any content (phrases or subgroups with content)
      const hasContent = (group.phrases && group.phrases.length > 0) ||
        (group.subgroups && group.subgroups.length > 0);
      
      return matchesGroupFilter && hasContent;
    });
  }
  
  return filterGroups(dotPhraseData);
}

// =====================================================
// RENDERING
// =====================================================
function renderDotPhrases() {
  const container = document.getElementById('dotphraseContainer');
  const noResults = document.getElementById('noResults');
  const filtered = filterData();
  
  if (filtered.length === 0) {
    container.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }
  
  noResults.style.display = 'none';
  container.innerHTML = renderGroups(filtered);
}

function renderGroups(groups, level = 1) {
  return groups.map(group => {
    const isExpanded = expandedGroups.has(group.name);
    const groupId = group.name.replace(/\s+/g, '-');
    const totalPhrases = countPhrases(group);
    
    let content = '';
    
    // Render phrases if this group has any
    if (group.phrases && group.phrases.length > 0) {
      content += `<div class="dotphrase-grid">
        ${group.phrases.map((phrase, index) => renderPhraseCard(phrase, group.name, index)).join('')}
      </div>`;
    }
    
    // Render subgroups if this group has any
    if (group.subgroups && group.subgroups.length > 0) {
      content += renderGroups(group.subgroups, level + 1);
    }
    
    return `
      <div class="group-section level-${level}">
        <div class="group-header level-${level} ${isExpanded ? '' : 'collapsed'}" 
             onclick="toggleGroup('${group.name}')">
          <h2>${escapeHtml(group.name)}</h2>
          <div class="group-actions">
            <span class="group-count">${totalPhrases} phrase${totalPhrases !== 1 ? 's' : ''}</span>
            <button class="btn btn-sm btn-secondary" onclick="event.stopPropagation(); exportGroup('${group.name}')">
              📥 Export
            </button>
            <span class="expand-icon">▼</span>
          </div>
        </div>
        
        <div id="group-content-${groupId}" class="group-content ${isExpanded ? '' : 'collapsed'}">
          ${content}
        </div>
      </div>
    `;
  }).join('');
}

function countPhrases(group) {
  let count = 0;
  if (group.phrases) {
    count += group.phrases.length;
  }
  if (group.subgroups) {
    group.subgroups.forEach(subgroup => {
      count += countPhrases(subgroup);
    });
  }
  return count;
}

function renderPhraseCard(phrase, groupName, index) {
  const tagsHtml = phrase.tags.map(tag => 
    `<span class="tag-badge">${escapeHtml(tag)}</span>`
  ).join('');
  
  return `
    <div class="dotphrase-card">
      <div class="dotphrase-header">
        <div class="dotphrase-title">${escapeHtml(phrase.title)}</div>
        <span class="dotphrase-shortcut">${escapeHtml(phrase.shortcut)}</span>
        <div class="tags-in-card">${tagsHtml}</div>
      </div>
      
      <div class="dotphrase-content" id="phrase-content-${groupName}-${index}">
        ${phrase.contentHtml}
      </div>
      
      <div class="dotphrase-actions">
        <button class="btn btn-primary btn-sm" onclick="copyPhrase('${groupName}', ${index})">
          📋 Copy
        </button>
        <button class="btn btn-secondary btn-sm" onclick="downloadPhrase('${groupName}', ${index})">
          ⬇️ Download
        </button>
      </div>
    </div>
  `;
}

// =====================================================
// COPY & EXPORT FUNCTIONS
// =====================================================
async function copyPhrase(groupName, index) {
  const phrase = findPhrase(groupName, index);
  if (!phrase) return;
  
  const contentElement = document.getElementById(`phrase-content-${groupName}-${index}`);
  
  try {
    const blob = new Blob([contentElement.innerHTML], { type: 'text/html' });
    const plainText = contentElement.innerText;
    
    await navigator.clipboard.write([
      new ClipboardItem({
        'text/html': blob,
        'text/plain': new Blob([plainText], { type: 'text/plain' })
      })
    ]);
    
    showCopyNotification();
  } catch (err) {
    console.error('Copy failed:', err);
    try {
      await navigator.clipboard.writeText(contentElement.innerText);
      showCopyNotification();
    } catch (fallbackErr) {
      alert('Failed to copy. Please try selecting and copying manually.');
    }
  }
}

function showCopyNotification() {
  const notification = document.getElementById('copyNotification');
  notification.classList.add('show');
  setTimeout(() => {
    notification.classList.remove('show');
  }, 2000);
}

function downloadPhrase(groupName, index) {
  const phrase = findPhrase(groupName, index);
  if (!phrase) return;
  
  const contentElement = document.getElementById(`phrase-content-${groupName}-${index}`);
  
  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${phrase.title}</title>
  <link rel="icon" type="image/png" href="https://physicianpromptengineering.com/favicon.png">
  <style>
    body { font-family: Arial, sans-serif; max-width: 800px; margin: 40px auto; padding: 20px; }
    .header { text-align: center; border-bottom: 2px solid #2a7ae2; padding-bottom: 20px; margin-bottom: 30px; }
    .header h1 { color: #2a7ae2; margin-bottom: 5px; font-size: 1.8em; }
    .header .tagline { color: #666; font-size: 0.9em; margin-bottom: 10px; }
    .header .link { color: #2a7ae2; text-decoration: none; font-weight: 600; }
    h2 { color: #2a7ae2; margin-top: 30px; }
    .shortcut { background: #e3f2fd; padding: 5px 10px; border-radius: 4px; font-family: monospace; }
    .content { margin-top: 20px; line-height: 1.6; }
    .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e8e8e8; text-align: center; color: #666; font-size: 0.85em; }
    @media print {
      .no-print { display: none; }
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Physician Prompt Engineering</h1>
    <p class="tagline">Open-source clinical AI prompts for physicians</p>
    <a href="https://physicianpromptengineering.com" class="link no-print">physicianpromptengineering.com</a>
  </div>
  
  <h2>${escapeHtml(phrase.title)}</h2>
  <p><strong>Shortcut:</strong> <span class="shortcut">${escapeHtml(phrase.shortcut)}</span></p>
  <div class="content">
    ${contentElement.innerHTML}
  </div>
  
  <div class="footer">
    <p><strong>Physician Prompt Engineering</strong> | Open-source clinical AI prompts for physicians</p>
    <p class="no-print">Visit <a href="https://physicianpromptengineering.com">physicianpromptengineering.com</a> for more resources</p>
    <p><em>Always review content before using in patient care. See disclaimer at physicianpromptengineering.com</em></p>
  </div>
</body>
</html>
  `;
  
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${phrase.shortcut.replace(/\./g, '')}-${phrase.title.replace(/[^a-z0-9]/gi, '_')}.html`;
  a.click();
  URL.revokeObjectURL(url);
}

function exportGroup(groupName) {
  const group = findGroup(groupName);
  if (!group) return;
  
  const allPhrases = collectAllPhrases(group);
  
  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${groupName} - Dot Phrases</title>
  <link rel="icon" type="image/png" href="https://physicianpromptengineering.com/favicon.png">
  <style>
    body { font-family: Arial, sans-serif; max-width: 900px; margin: 40px auto; padding: 20px; }
    .site-header { text-align: center; border-bottom: 3px solid #2a7ae2; padding-bottom: 20px; margin-bottom: 40px; }
    .site-header h1 { color: #2a7ae2; margin-bottom: 5px; font-size: 2em; }
    .site-header .tagline { color: #666; font-size: 1em; margin-bottom: 10px; }
    .site-header .link { color: #2a7ae2; text-decoration: none; font-weight: 600; font-size: 1.1em; }
    .group-title { color: #2a7ae2; border-bottom: 2px solid #2a7ae2; padding-bottom: 10px; margin-top: 30px; }
    .phrase { margin: 30px 0; padding: 20px; border: 2px solid #e8e8e8; border-radius: 8px; }
    .phrase-title { font-size: 1.2em; font-weight: bold; color: #333; margin-bottom: 10px; }
    .shortcut { background: #e3f2fd; padding: 5px 10px; border-radius: 4px; font-family: monospace; display: inline-block; margin-bottom: 15px; color: #2a7ae2; font-weight: 600; }
    .content { line-height: 1.6; }
    .footer { margin-top: 50px; padding-top: 20px; border-top: 2px solid #e8e8e8; text-align: center; color: #666; }
    .footer p { margin: 10px 0; }
    .footer strong { color: #2a7ae2; }
    @media print {
      .phrase { page-break-inside: avoid; }
      .no-print { display: none; }
    }
  </style>
</head>
<body>
  <div class="site-header">
    <h1>Physician Prompt Engineering</h1>
    <p class="tagline">Open-source clinical AI prompts for physicians</p>
    <a href="https://physicianpromptengineering.com" class="link no-print">physicianpromptengineering.com</a>
  </div>
  
  <h1 class="group-title">${escapeHtml(groupName)}</h1>
  <p><strong>${allPhrases.length}</strong> dot phrase${allPhrases.length !== 1 ? 's' : ''}</p>
  
  ${allPhrases.map(phrase => `
    <div class="phrase">
      <div class="phrase-title">${escapeHtml(phrase.title)}</div>
      <div class="shortcut">${escapeHtml(phrase.shortcut)}</div>
      <div class="content">
        ${phrase.contentHtml}
      </div>
    </div>
  `).join('')}
  
  <div class="footer">
    <p><strong>Physician Prompt Engineering</strong></p>
    <p>Open-source clinical AI prompts for physicians</p>
    <p class="no-print">Visit <a href="https://physicianpromptengineering.com" style="color: #2a7ae2; text-decoration: none; font-weight: 600;">physicianpromptengineering.com</a> for more resources</p>
    <p style="margin-top: 20px;"><em>Always review content before using in patient care. See disclaimer at physicianpromptengineering.com</em></p>
  </div>
</body>
</html>
  `;
  
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${groupName.replace(/[^a-z0-9]/gi, '_')}-dot-phrases.html`;
  a.click();
  URL.revokeObjectURL(url);
}

// =====================================================
// HELPER FUNCTIONS
// =====================================================
function findGroup(groupName, groups = dotPhraseData) {
  for (const group of groups) {
    if (group.name === groupName) {
      return group;
    }
    if (group.subgroups) {
      const found = findGroup(groupName, group.subgroups);
      if (found) return found;
    }
  }
  return null;
}

function findPhrase(groupName, index, groups = dotPhraseData) {
  for (const group of groups) {
    if (group.name === groupName && group.phrases) {
      return group.phrases[index];
    }
    if (group.subgroups) {
      const found = findPhrase(groupName, index, group.subgroups);
      if (found) return found;
    }
  }
  return null;
}

function collectAllPhrases(group) {
  let phrases = [];
  if (group.phrases) {
    phrases = [...group.phrases];
  }
  if (group.subgroups) {
    group.subgroups.forEach(subgroup => {
      phrases = phrases.concat(collectAllPhrases(subgroup));
    });
  }
  return phrases;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
</script>
