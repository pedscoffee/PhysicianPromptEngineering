---
layout: page
title: Clinical Workflow Optimizer
description: Visualize and optimize your clinical workflows with interactive drag-and-drop flowcharts.
permalink: /workflow-optimizer/
---

<style>
    .workflow-container {
        display: grid;
        grid-template-columns: 280px 1fr;
        gap: 20px;
        margin-top: 20px;
        align-items: start;
    }

    @media (max-width: 1024px) {
        .workflow-container {
            grid-template-columns: 1fr;
        }
    }

    .sidebar-panel {
        background: white;
        border-radius: 8px;
        padding: 18px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        border: 1px solid #e8e8e8;
        position: sticky;
        top: 20px;
        max-height: calc(100vh - 40px);
        overflow-y: auto;
    }

    .workflow-panel {
        background: white;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        border: 1px solid #e8e8e8;
    }

    .toolbar {
        display: flex;
        gap: 10px;
        margin-bottom: 15px;
        flex-wrap: wrap;
    }

    .tool-button {
        padding: 8px 14px;
        border: 1px solid #e8e8e8;
        border-radius: 6px;
        background: white;
        cursor: pointer;
        font-size: 0.85em;
        font-weight: 600;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .tool-button:hover {
        background: #f9fafb;
        border-color: #3b82f6;
    }

    .tool-button.active {
        background: #3b82f6;
        color: white;
        border-color: #3b82f6;
    }

    .section-title {
        font-size: 0.95rem;
        font-weight: 700;
        color: #333;
        margin: 15px 0 10px 0;
        padding-bottom: 8px;
        border-bottom: 2px solid #e8e8e8;
    }

    .section-title:first-child {
        margin-top: 0;
    }

    .node-button {
        width: 100%;
        padding: 10px 12px;
        margin-bottom: 8px;
        border: 2px solid;
        border-radius: 6px;
        background: white;
        cursor: pointer;
        font-weight: 600;
        font-size: 0.85em;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .node-button:hover {
        transform: translateX(4px);
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .node-button.start { border-color: #10b981; color: #10b981; }
    .node-button.process { border-color: #3b82f6; color: #3b82f6; }
    .node-button.decision { border-color: #f59e0b; color: #f59e0b; }
    .node-button.end { border-color: #ef4444; color: #ef4444; }
    .node-button.parallel { border-color: #8b5cf6; color: #8b5cf6; }

    .template-button {
        width: 100%;
        padding: 10px 12px;
        margin-bottom: 8px;
        border: 1px solid #e8e8e8;
        border-radius: 6px;
        background: white;
        cursor: pointer;
        font-size: 0.85em;
        transition: all 0.2s;
        text-align: left;
    }

    .template-button:hover {
        background: #f0f9ff;
        border-color: #3b82f6;
    }

    .stats-panel {
        margin-top: 15px;
        padding: 12px;
        background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
        border-radius: 6px;
        font-size: 0.85em;
    }

    .stat-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        padding-bottom: 8px;
        border-bottom: 1px solid rgba(59, 130, 246, 0.2);
    }

    .stat-item:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }

    .btn-primary {
        background: #2a7ae2;
        color: white;
        border: none;
        padding: 9px 16px;
        border-radius: 6px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s;
        width: 100%;
        font-size: 0.9rem;
        margin-top: 8px;
    }

    .btn-primary:hover {
        background: #1e5bb8;
    }

    .btn-secondary {
        background: white;
        border: 1px solid #e8e8e8;
        color: #333;
        padding: 9px 16px;
        border-radius: 6px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
        width: 100%;
        font-size: 0.9rem;
        margin-top: 8px;
    }

    .btn-secondary:hover {
        background: #f5f5f5;
        border-color: #3b82f6;
    }

    #workflow-canvas {
        width: 100%;
        height: 650px;
        border: 2px solid #e8e8e8;
        border-radius: 8px;
        position: relative;
        background: 
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px);
        background-size: 20px 20px;
        cursor: crosshair;
    }

    #workflow-canvas.drag-mode {
        cursor: grab;
    }

    #workflow-canvas.drag-mode:active {
        cursor: grabbing;
    }

    .workflow-node {
        position: absolute;
        padding: 14px 18px;
        border-radius: 8px;
        background: white;
        border: 3px solid;
        min-width: 130px;
        cursor: move;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        font-size: 0.9em;
        transition: all 0.2s;
        user-select: none;
    }

    .workflow-node:hover {
        box-shadow: 0 6px 16px rgba(0,0,0,0.2);
        transform: translateY(-2px);
    }

    .workflow-node.selected {
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.4);
    }

    .workflow-node.start {
        border-color: #10b981;
        background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
        border-radius: 20px;
    }

    .workflow-node.process {
        border-color: #3b82f6;
        background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
    }

    .workflow-node.decision {
        border-color: #f59e0b;
        background: linear-gradient(135deg, #fefce8 0%, #fef3c7 100%);
    }

    .workflow-node.end {
        border-color: #ef4444;
        background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
        border-radius: 50%;
        width: 130px;
        height: 130px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .workflow-node.parallel {
        border-color: #8b5cf6;
        background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%);
        border-left-width: 6px;
        border-right-width: 6px;
    }

    .node-label {
        font-weight: 700;
        margin-bottom: 4px;
        color: #1f2937;
    }

    .node-meta {
        font-size: 0.8em;
        color: #6b7280;
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
    }

    .node-meta span {
        display: inline-flex;
        align-items: center;
        gap: 3px;
    }

    .delete-node, .duplicate-node {
        position: absolute;
        top: -10px;
        background: white;
        color: #ef4444;
        border: 2px solid #ef4444;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        cursor: pointer;
        font-size: 0.9em;
        font-weight: bold;
        display: none;
        align-items: center;
        justify-content: center;
    }

    .delete-node {
        right: -10px;
    }

    .duplicate-node {
        right: 20px;
        color: #3b82f6;
        border-color: #3b82f6;
    }

    .workflow-node:hover .delete-node,
    .workflow-node:hover .duplicate-node {
        display: flex;
    }

    .connection-handle {
        position: absolute;
        width: 12px;
        height: 12px;
        background: #3b82f6;
        border: 2px solid white;
        border-radius: 50%;
        cursor: crosshair;
        z-index: 10;
    }

    .connection-handle.top { top: -6px; left: 50%; transform: translateX(-50%); }
    .connection-handle.bottom { bottom: -6px; left: 50%; transform: translateX(-50%); }
    .connection-handle.left { left: -6px; top: 50%; transform: translateY(-50%); }
    .connection-handle.right { right: -6px; top: 50%; transform: translateY(-50%); }

    .connection-handle:hover {
        transform: scale(1.3) translate(-50%, -50%);
        background: #1e40af;
    }

    svg.connections {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    }

    .connection-line {
        stroke: #6b7280;
        stroke-width: 2.5;
        fill: none;
        marker-end: url(#arrowhead);
        transition: stroke 0.2s;
    }

    .connection-line.selected {
        stroke: #3b82f6;
        stroke-width: 3.5;
    }

    .connection-line:hover {
        stroke: #ef4444;
        stroke-width: 3;
        cursor: pointer;
    }

    .modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        z-index: 10000;
        align-items: center;
        justify-content: center;
    }

    .modal-content {
        background: white;
        padding: 25px;
        border-radius: 12px;
        max-width: 400px;
        width: 90%;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3);
    }

    .modal-content h3 {
        margin-top: 0;
        color: #1f2937;
    }

    .form-group {
        margin-bottom: 15px;
    }

    .form-group label {
        display: block;
        font-weight: 600;
        margin-bottom: 6px;
        color: #374151;
        font-size: 0.9em;
    }

    .form-group input, .form-group textarea {
        width: 100%;
        padding: 10px;
        border: 2px solid #e8e8e8;
        border-radius: 6px;
        font-size: 0.9em;
        font-family: inherit;
    }

    .form-group input:focus, .form-group textarea:focus {
        outline: none;
        border-color: #3b82f6;
    }

    .modal-buttons {
        display: flex;
        gap: 10px;
        margin-top: 20px;
    }

    .instructions {
        background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
        padding: 12px;
        border-radius: 6px;
        margin-bottom: 15px;
        font-size: 0.8em;
        border-left: 3px solid #3b82f6;
        line-height: 1.5;
    }
</style>

<div class="hero" style="background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); padding: 3rem 0; text-align: center; margin-bottom: 2rem; border-radius: 1rem;">
    <div class="container">
        <h1 class="hero-title" style="color: #1e3a8a; font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem;">
            Clinical Workflow Optimizer
        </h1>
        <p class="hero-subtitle" style="color: #1e40af; font-size: 1.1rem; max-width: 800px; margin: 0 auto;">
            Visualize, analyze, and optimize clinical workflows. Identify bottlenecks, reduce waste, and improve patient care efficiency.
        </p>
    </div>
</div>

<div class="container">
    <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 16px 20px; margin-bottom: 20px; border-radius: 6px;">
        <div style="display: flex; align-items: start; gap: 12px;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f59e0b" style="width: 24px; height: 24px; flex-shrink: 0; margin-top: 2px;">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
            <div>
                <strong style="color: #92400e; display: block; margin-bottom: 4px;">Educational Use Only</strong>
                <p style="color: #78350f; margin: 0; font-size: 0.9em;">
                    This tool is for educational and quality improvement purposes. <strong>Do not input any patient health information (PHI)</strong> or other sensitive data. Use de-identified scenarios for workflow analysis.
                </p>
            </div>
        </div>
    </div>

    <div class="toolbar">
        <button class="tool-button active" id="selectMode" onclick="setMode('select')">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
            </svg>
            Select
        </button>
        <button class="tool-button" id="connectMode" onclick="setMode('connect')">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            Connect
        </button>
        <button class="tool-button" onclick="undo()">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
            </svg>
            Undo
        </button>
        <button class="tool-button" onclick="alignNodes('horizontal')">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zm0 9a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"/>
            </svg>
            Align H
        </button>
        <button class="tool-button" onclick="alignNodes('vertical')">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5z"/>
            </svg>
            Align V
        </button>
    </div>

    <div class="workflow-container">
        <!-- Sidebar -->
        <div class="sidebar-panel">
            <div class="instructions">
                <strong>Quick Start:</strong><br>
                1. Add nodes from below<br>
                2. Click "Connect" then drag between nodes<br>
                3. Double-click to edit<br>
                4. Use templates for common workflows
            </div>

            <div class="section-title">Workflow Elements</div>

            <button class="node-button start" onclick="addNode('start')">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10"/>
                </svg>
                Start Point
            </button>

            <button class="node-button process" onclick="addNode('process')">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                </svg>
                Process Step
            </button>

            <button class="node-button decision" onclick="addNode('decision')">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2L22 12L12 22L2 12Z"/>
                </svg>
                Decision Point
            </button>

            <button class="node-button parallel" onclick="addNode('parallel')">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M8 3v18M16 3v18"/>
                </svg>
                Parallel Tasks
            </button>

            <button class="node-button end" onclick="addNode('end')">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="5" fill="white"/>
                </svg>
                End Point
            </button>

            <div class="section-title">Templates</div>

            <button class="template-button" onclick="loadTemplate('clinic')">
                📋 Standard Clinic Visit
            </button>
            <button class="template-button" onclick="loadTemplate('emergency')">
                🚨 ER Patient Flow
            </button>
            <button class="template-button" onclick="loadTemplate('or')">
                🏥 OR Procedure
            </button>
            <button class="template-button" onclick="loadTemplate('discharge')">
                📤 Discharge Process
            </button>

            <div class="stats-panel">
                <h4 style="margin: 0 0 10px 0; color: #1e40af; font-size: 0.95em;">Workflow Metrics</h4>
                <div class="stat-item">
                    <span>Total Steps:</span>
                    <strong id="totalSteps">0</strong>
                </div>
                <div class="stat-item">
                    <span>Total Time:</span>
                    <strong id="totalTime">0 min</strong>
                </div>
                <div class="stat-item">
                    <span>Est. Cost:</span>
                    <strong id="totalCost">$0</strong>
                </div>
                <div class="stat-item">
                    <span>Decision Points:</span>
                    <strong id="decisionCount">0</strong>
                </div>
                <div class="stat-item">
                    <span>Parallel Paths:</span>
                    <strong id="parallelCount">0</strong>
                </div>
            </div>

            <div class="section-title">Actions</div>

            <button class="btn-secondary" onclick="saveWorkflow()">💾 Save Workflow</button>
            <button class="btn-secondary" onclick="loadWorkflow()">📁 Load Workflow</button>
            <button class="btn-secondary" onclick="clearWorkflow()">🗑️ Clear All</button>
            <button class="btn-primary" onclick="exportWorkflow()">⬇️ Export SVG</button>
        </div>

        <!-- Canvas -->
        <div class="workflow-panel">
            <h3 style="margin-bottom: 15px; color: #333; display: flex; justify-content: space-between; align-items: center;">
                <span>Workflow Canvas</span>
                <span style="font-size: 0.75em; font-weight: normal; color: #6b7280;" id="modeIndicator">Select Mode</span>
            </h3>
            <div id="workflow-canvas" class="drag-mode">
                <svg class="connections" id="connections-svg">
                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                            <polygon points="0 0, 10 3, 0 6" fill="#6b7280" />
                        </marker>
                        <marker id="arrowhead-selected" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                            <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
                        </marker>
                    </defs>
                </svg>
            </div>
        </div>
    </div>
</div>

<!-- Edit Node Modal -->
<div id="editModal" class="modal">
    <div class="modal-content">
        <h3>Edit Node</h3>
        <div class="form-group">
            <label>Label</label>
            <input type="text" id="editLabel">
        </div>
        <div class="form-group">
            <label>Time (minutes)</label>
            <input type="number" id="editTime" min="0" value="0">
        </div>
        <div class="form-group">
            <label>Cost ($)</label>
            <input type="number" id="editCost" min="0" value="0">
        </div>
        <div class="modal-buttons">
            <button class="btn-secondary" onclick="closeEditModal()">Cancel</button>
            <button class="btn-primary" onclick="saveNodeEdit()">Save</button>
        </div>
    </div>
</div>

<script>
    let nodes = [];
    let connections = [];
    let nodeIdCounter = 0;
    let connectionIdCounter = 0;
    let selectedNode = null;
    let selectedConnection = null;
    let dragOffset = { x: 0, y: 0 };
    let currentMode = 'select';
    let connectingFrom = null;
    let history = [];
    let currentEditNodeId = null;

    const DEFAULT_COSTS = {
        start: 0,
        process: 50,
        decision: 25,
        parallel: 100,
        end: 0
    };

    function setMode(mode) {
        currentMode = mode;
        const canvas = document.getElementById('workflow-canvas');
        const selectBtn = document.getElementById('selectMode');
        const connectBtn = document.getElementById('connectMode');
        const modeIndicator = document.getElementById('modeIndicator');
        
        if (mode === 'select') {
            canvas.classList.add('drag-mode');
            canvas.style.cursor = 'grab';
            selectBtn.classList.add('active');
            connectBtn.classList.remove('active');
            modeIndicator.textContent = 'Select Mode';
        } else {
            canvas.classList.remove('drag-mode');
            canvas.style.cursor = 'crosshair';
            selectBtn.classList.remove('active');
            connectBtn.classList.add('active');
            modeIndicator.textContent = 'Connect Mode - Click nodes to connect';
        }
        
        connectingFrom = null;
        renderConnections();
    }

    function saveState() {
        history.push(JSON.stringify({ nodes, connections }));
        if (history.length > 20) history.shift();
    }

    function undo() {
        if (history.length === 0) return;
        const state = JSON.parse(history.pop());
        nodes = state.nodes;
        connections = state.connections;
        renderNodes();
        renderConnections();
        updateStats();
    }

    function addNode(type) {
        saveState();
        const canvas = document.getElementById('workflow-canvas');
        const canvasRect = canvas.getBoundingClientRect();
        
        const node = {
            id: ++nodeIdCounter,
            type: type,
            x: 50 + (nodeIdCounter * 30) % 300,
            y: 50 + (Math.floor(nodeIdCounter / 10) * 80),
            label: getDefaultLabel(type),
            time: type === 'process' ? 10 : (type === 'parallel' ? 15 : 0),
            cost: DEFAULT_COSTS[type] || 0
        };
        
        nodes.push(node);
        renderNodes();
        updateStats();
    }

    function getDefaultLabel(type) {
        const labels = {
            start: 'Start',
            process: 'Process',
            decision: 'Decision?',
            parallel: 'Parallel Tasks',
            end: 'Complete'
        };
        return labels[type] || 'Node';
    }

    function renderNodes() {
        const canvas = document.getElementById('workflow-canvas');
        
        const existingNodes = canvas.querySelectorAll('.workflow-node');
        existingNodes.forEach(node => node.remove());
        
        nodes.forEach(node => {
            const nodeEl = document.createElement('div');
            nodeEl.className = `workflow-node ${node.type}`;
            nodeEl.id = `node-${node.id}`;
            nodeEl.style.left = node.x + 'px';
            nodeEl.style.top = node.y + 'px';
            
            const metaHtml = [];
            if (node.time > 0) metaHtml.push(`<span>⏱ ${node.time}m</span>`);
            if (node.cost > 0) metaHtml.push(`<span>💰 $${node.cost}</span>`);
            
            nodeEl.innerHTML = `
                <div class="node-content">
                    <div class="node-label">${node.label}</div>
                    ${metaHtml.length > 0 ? `<div class="node-meta">${metaHtml.join('')}</div>` : ''}
                </div>
                ${createConnectionHandles()}
                <button class="duplicate-node" onclick="duplicateNode(${node.id})">⎘</button>
                <button class="delete-node" onclick="deleteNode(${node.id})">×</button>
            `;
            
            nodeEl.addEventListener('mousedown', (e) => {
                if (currentMode === 'select') startDrag(e);
                else if (currentMode === 'connect') handleConnect(node.id);
            });
            nodeEl.addEventListener('dblclick', () => editNode(node.id));
            
            canvas.appendChild(nodeEl);
        });
    }

    function createConnectionHandles() {
        return `
            <div class="connection-handle top" data-pos="top"></div>
            <div class="connection-handle bottom" data-pos="bottom"></div>
            <div class="connection-handle left" data-pos="left"></div>
            <div class="connection-handle right" data-pos="right"></div>
        `;
    }

    function handleConnect(nodeId) {
        if (!connectingFrom) {
            connectingFrom = nodeId;
            const nodeEl = document.getElementById(`node-${nodeId}`);
            nodeEl.classList.add('selected');
        } else if (connectingFrom !== nodeId) {
            saveState();
            connections.push({
                id: ++connectionIdCounter,
                from: connectingFrom,
                to: nodeId
            });
            
            const fromEl = document.getElementById(`node-${connectingFrom}`);
            fromEl.classList.remove('selected');
            connectingFrom = null;
            renderConnections();
        }
    }

    function renderConnections() {
        const svg = document.getElementById('connections-svg');
        svg.querySelectorAll('.connection-line').forEach(el => el.remove());
        
        connections.forEach(conn => {
            const fromNode = nodes.find(n => n.id === conn.from);
            const toNode = nodes.find(n => n.id === conn.to);
            
            if (!fromNode || !toNode) return;
            
            const fromCenter = {
                x: fromNode.x + 65,
                y: fromNode.y + 40
            };
            const toCenter = {
                x: toNode.x + 65,
                y: toNode.y + 40
            };
            
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            
            const dx = toCenter.x - fromCenter.x;
            const dy = toCenter.y - fromCenter.y;
            const curve = Math.abs(dx) * 0.5;
            
            const d = `M ${fromCenter.x} ${fromCenter.y} C ${fromCenter.x + curve} ${fromCenter.y}, ${toCenter.x - curve} ${toCenter.y}, ${toCenter.x} ${toCenter.y}`;
            
            path.setAttribute('d', d);
            path.setAttribute('class', 'connection-line');
            path.setAttribute('data-conn-id', conn.id);
            path.style.pointerEvents = 'stroke';
            
            if (selectedConnection === conn.id) {
                path.classList.add('selected');
                path.setAttribute('marker-end', 'url(#arrowhead-selected)');
            }
            
            path.addEventListener('click', (e) => {
                e.stopPropagation();
                if (currentMode === 'select') {
                    if (confirm('Delete this connection?')) {
                        saveState();
                        connections = connections.filter(c => c.id !== conn.id);
                        renderConnections();
                    }
                }
            });
            
            svg.appendChild(path);
        });
    }

    function startDrag(e) {
        if (e.target.closest('.delete-node') || e.target.closest('.duplicate-node')) return;
        if (e.target.closest('.connection-handle')) return;
        
        const nodeEl = e.currentTarget;
        const nodeId = parseInt(nodeEl.id.split('-')[1]);
        selectedNode = nodes.find(n => n.id === nodeId);
        
        if (!selectedNode) return;
        
        const rect = nodeEl.getBoundingClientRect();
        const canvasRect = document.getElementById('workflow-canvas').getBoundingClientRect();
        
        dragOffset.x = e.clientX - rect.left;
        dragOffset.y = e.clientY - rect.top;
        
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDrag);
    }

    function drag(e) {
        if (!selectedNode) return;
        
        const canvas = document.getElementById('workflow-canvas');
        const canvasRect = canvas.getBoundingClientRect();
        
        selectedNode.x = e.clientX - canvasRect.left - dragOffset.x;
        selectedNode.y = e.clientY - canvasRect.top - dragOffset.y;
        
        selectedNode.x = Math.max(0, Math.min(selectedNode.x, canvasRect.width - 150));
        selectedNode.y = Math.max(0, Math.min(selectedNode.y, canvasRect.height - 100));
        
        renderNodes();
        renderConnections();
    }

    function stopDrag() {
        selectedNode = null;
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', stopDrag);
    }

    function editNode(nodeId) {
        const node = nodes.find(n => n.id === nodeId);
        if (!node) return;
        
        currentEditNodeId = nodeId;
        document.getElementById('editLabel').value = node.label;
        document.getElementById('editTime').value = node.time || 0;
        document.getElementById('editCost').value = node.cost || 0;
        document.getElementById('editModal').style.display = 'flex';
    }

    function closeEditModal() {
        document.getElementById('editModal').style.display = 'none';
        currentEditNodeId = null;
    }

    function saveNodeEdit() {
        if (!currentEditNodeId) return;
        
        const node = nodes.find(n => n.id === currentEditNodeId);
        if (!node) return;
        
        saveState();
        node.label = document.getElementById('editLabel').value || node.label;
        node.time = parseInt(document.getElementById('editTime').value) || 0;
        node.cost = parseInt(document.getElementById('editCost').value) || 0;
        
        closeEditModal();
        renderNodes();
        updateStats();
    }

    function duplicateNode(nodeId) {
        const node = nodes.find(n => n.id === nodeId);
        if (!node) return;
        
        saveState();
        const newNode = {
            ...node,
            id: ++nodeIdCounter,
            x: node.x + 40,
            y: node.y + 40
        };
        
        nodes.push(newNode);
        renderNodes();
        updateStats();
    }

    function deleteNode(nodeId) {
        saveState();
        nodes = nodes.filter(n => n.id !== nodeId);
        connections = connections.filter(c => c.from !== nodeId && c.to !== nodeId);
        renderNodes();
        renderConnections();
        updateStats();
    }

    function clearWorkflow() {
        if (nodes.length === 0) return;
        if (confirm('Clear entire workflow? This cannot be undone.')) {
            saveState();
            nodes = [];
            connections = [];
            renderNodes();
            renderConnections();
            updateStats();
        }
    }

    function alignNodes(direction) {
        if (nodes.length < 2) return;
        
        saveState();
        
        if (direction === 'horizontal') {
            const avgY = nodes.reduce((sum, n) => sum + n.y, 0) / nodes.length;
            nodes.forEach(n => n.y = avgY);
        } else {
            const avgX = nodes.reduce((sum, n) => sum + n.x, 0) / nodes.length;
            nodes.forEach(n => n.x = avgX);
        }
        
        renderNodes();
        renderConnections();
    }

    function updateStats() {
        document.getElementById('totalSteps').textContent = nodes.length;
        
        const totalTime = nodes.reduce((sum, node) => sum + (node.time || 0), 0);
        document.getElementById('totalTime').textContent = totalTime + ' min';
        
        const totalCost = nodes.reduce((sum, node) => sum + (node.cost || 0), 0);
        document.getElementById('totalCost').textContent = '$' + totalCost;
        
        const decisionCount = nodes.filter(n => n.type === 'decision').length;
        document.getElementById('decisionCount').textContent = decisionCount;
        
        const parallelCount = nodes.filter(n => n.type === 'parallel').length;
        document.getElementById('parallelCount').textContent = parallelCount;
    }

    function loadTemplate(templateName) {
        if (nodes.length > 0 && !confirm('Replace current workflow with template?')) return;
        
        saveState();
        nodes = [];
        connections = [];
        nodeIdCounter = 0;
        connectionIdCounter = 0;
        
        const templates = {
            clinic: [
                { type: 'start', x: 50, y: 50, label: 'Patient Arrival', time: 0, cost: 0 },
                { type: 'process', x: 50, y: 130, label: 'Check-in', time: 5, cost: 20 },
                { type: 'process', x: 50, y: 210, label: 'Vitals', time: 10, cost: 30 },
                { type: 'process', x: 50, y: 290, label: 'Provider Visit', time: 20, cost: 200 },
                { type: 'decision', x: 50, y: 370, label: 'Tests Needed?', time: 0, cost: 0 },
                { type: 'process', x: 200, y: 370, label: 'Order Tests', time: 5, cost: 100 },
                { type: 'process', x: 50, y: 450, label: 'Check-out', time: 5, cost: 20 },
                { type: 'end', x: 50, y: 530, label: 'Complete', time: 0, cost: 0 }
            ],
            emergency: [
                { type: 'start', x: 50, y: 50, label: 'Patient Arrival', time: 0, cost: 0 },
                { type: 'process', x: 50, y: 130, label: 'Triage', time: 5, cost: 50 },
                { type: 'decision', x: 50, y: 210, label: 'Severity?', time: 0, cost: 0 },
                { type: 'process', x: 200, y: 150, label: 'Resuscitation', time: 30, cost: 1000 },
                { type: 'process', x: 50, y: 290, label: 'Initial Assessment', time: 15, cost: 200 },
                { type: 'parallel', x: 50, y: 370, label: 'Tests + Imaging', time: 45, cost: 500 },
                { type: 'process', x: 50, y: 450, label: 'Treatment', time: 30, cost: 300 },
                { type: 'decision', x: 50, y: 530, label: 'Admit?', time: 0, cost: 0 },
                { type: 'end', x: 50, y: 610, label: 'Discharge', time: 0, cost: 0 }
            ],
            or: [
                { type: 'start', x: 50, y: 50, label: 'Pre-op', time: 0, cost: 0 },
                { type: 'process', x: 50, y: 130, label: 'Anesthesia', time: 20, cost: 500 },
                { type: 'process', x: 50, y: 210, label: 'Positioning', time: 10, cost: 100 },
                { type: 'process', x: 50, y: 290, label: 'Procedure', time: 90, cost: 3000 },
                { type: 'process', x: 50, y: 370, label: 'Recovery', time: 60, cost: 400 },
                { type: 'end', x: 50, y: 450, label: 'PACU', time: 0, cost: 0 }
            ],
            discharge: [
                { type: 'start', x: 50, y: 50, label: 'Order Placed', time: 0, cost: 0 },
                { type: 'decision', x: 50, y: 130, label: 'Transport Needed?', time: 0, cost: 0 },
                { type: 'process', x: 200, y: 130, label: 'Arrange Transport', time: 30, cost: 200 },
                { type: 'process', x: 50, y: 210, label: 'Medication Rec', time: 10, cost: 30 },
                { type: 'process', x: 50, y: 290, label: 'Discharge Instructions', time: 15, cost: 50 },
                { type: 'process', x: 50, y: 370, label: 'Follow-up Scheduled', time: 5, cost: 20 },
                { type: 'end', x: 50, y: 450, label: 'Patient Leaves', time: 0, cost: 0 }
            ]
        };
        
        const template = templates[templateName];
        if (!template) return;
        
        template.forEach(nodeData => {
            const node = {
                ...nodeData,
                id: ++nodeIdCounter
            };
            nodes.push(node);
        });
        
        // Auto-connect sequential nodes
        for (let i = 0; i < nodes.length - 1; i++) {
            // Skip if it's a decision branch that goes sideways
            if (nodes[i].type !== 'decision' || nodes[i + 1].x === nodes[i].x) {
                connections.push({
                    id: ++connectionIdCounter,
                    from: nodes[i].id,
                    to: nodes[i + 1].id
                });
            }
        }
        
        renderNodes();
        renderConnections();
        updateStats();
    }

    function saveWorkflow() {
        const data = {
            nodes,
            connections,
            timestamp: new Date().toISOString()
        };
        
        localStorage.setItem('clinicalWorkflow', JSON.stringify(data));
        alert('Workflow saved to browser storage!');
    }

    function loadWorkflow() {
        const saved = localStorage.getItem('clinicalWorkflow');
        if (!saved) {
            alert('No saved workflow found');
            return;
        }
        
        if (nodes.length > 0 && !confirm('Replace current workflow with saved version?')) return;
        
        saveState();
        const data = JSON.parse(saved);
        nodes = data.nodes;
        connections = data.connections;
        nodeIdCounter = Math.max(...nodes.map(n => n.id), 0);
        connectionIdCounter = Math.max(...connections.map(c => c.id), 0);
        
        renderNodes();
        renderConnections();
        updateStats();
    }

    function exportWorkflow() {
        if (nodes.length === 0) {
            alert('Add workflow steps before exporting');
            return;
        }
        
        const canvas = document.getElementById('workflow-canvas');
        const canvasRect = canvas.getBoundingClientRect();
        
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', canvasRect.width);
        svg.setAttribute('height', canvasRect.height);
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        
        const bg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        bg.setAttribute('width', '100%');
        bg.setAttribute('height', '100%');
        bg.setAttribute('fill', 'white');
        svg.appendChild(bg);
        
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
        marker.setAttribute('id', 'arrow');
        marker.setAttribute('markerWidth', '10');
        marker.setAttribute('markerHeight', '10');
        marker.setAttribute('refX', '9');
        marker.setAttribute('refY', '3');
        marker.setAttribute('orient', 'auto');
        const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        polygon.setAttribute('points', '0 0, 10 3, 0 6');
        polygon.setAttribute('fill', '#6b7280');
        marker.appendChild(polygon);
        defs.appendChild(marker);
        svg.appendChild(defs);
        
        // Add connections
        connections.forEach(conn => {
            const fromNode = nodes.find(n => n.id === conn.from);
            const toNode = nodes.find(n => n.id === conn.to);
            if (!fromNode || !toNode) return;
            
            const fromCenter = { x: fromNode.x + 65, y: fromNode.y + 40 };
            const toCenter = { x: toNode.x + 65, y: toNode.y + 40 };
            const dx = toCenter.x - fromCenter.x;
            const curve = Math.abs(dx) * 0.5;
            const d = `M ${fromCenter.x} ${fromCenter.y} C ${fromCenter.x + curve} ${fromCenter.y}, ${toCenter.x - curve} ${toCenter.y}, ${toCenter.x} ${toCenter.y}`;
            
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', d);
            path.setAttribute('stroke', '#6b7280');
            path.setAttribute('stroke-width', '2.5');
            path.setAttribute('fill', 'none');
            path.setAttribute('marker-end', 'url(#arrow)');
            svg.appendChild(path);
        });
        
        // Add nodes
        nodes.forEach(node => {
            const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            
            const colors = {
                start: { bg: '#dcfce7', border: '#10b981' },
                process: { bg: '#dbeafe', border: '#3b82f6' },
                decision: { bg: '#fef3c7', border: '#f59e0b' },
                parallel: { bg: '#ede9fe', border: '#8b5cf6' },
                end: { bg: '#fee2e2', border: '#ef4444' }
            };
            
            const color = colors[node.type] || colors.process;
            
            if (node.type === 'end') {
                const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                circle.setAttribute('cx', node.x + 65);
                circle.setAttribute('cy', node.y + 65);
                circle.setAttribute('r', 50);
                circle.setAttribute('fill', color.bg);
                circle.setAttribute('stroke', color.border);
                circle.setAttribute('stroke-width', 3);
                g.appendChild(circle);
            } else {
                const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                rect.setAttribute('x', node.x);
                rect.setAttribute('y', node.y);
                rect.setAttribute('width', 130);
                rect.setAttribute('height', 80);
                rect.setAttribute('rx', 8);
                rect.setAttribute('fill', color.bg);
                rect.setAttribute('stroke', color.border);
                rect.setAttribute('stroke-width', 3);
                g.appendChild(rect);
            }
            
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', node.x + 65);
            text.setAttribute('y', node.y + (node.type === 'end' ? 70 : 45));
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('font-size', '14');
            text.setAttribute('font-weight', 'bold');
            text.textContent = node.label;
            g.appendChild(text);
            
            if (node.time > 0 || node.cost > 0) {
                const meta = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                meta.setAttribute('x', node.x + 65);
                meta.setAttribute('y', node.y + 65);
                meta.setAttribute('text-anchor', 'middle');
                meta.setAttribute('font-size', '11');
                meta.setAttribute('fill', '#6b7280');
                meta.textContent = `${node.time}m ${node.cost > 0 ? '$' + node.cost : ''}`;
                g.appendChild(meta);
            }
            
            svg.appendChild(g);
        });
        
        const svgData = new XMLSerializer().serializeToString(svg);
        const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(svgBlob);
        
        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = 'workflow-diagram.svg';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(url);
    }

    // Close modal on outside click
    document.getElementById('editModal').addEventListener('click', function(e) {
        if (e.target === this) closeEditModal();
    });

    // Initialize
    updateStats();
    renderNodes();
    renderConnections();
</script>
