---
layout: page
title: Clinical Workflow Optimizer
description: Visualize and optimize your clinical workflows with interactive drag-and-drop flowcharts.
permalink: /workflow-optimizer/
---


<div class="workflow-optimizer-wrapper">

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
        
        <div style="border-left: 1px solid #e8e8e8; height: 32px; margin: 0 4px;"></div>
        
        <button class="tool-button" onclick="zoomCanvas(0.9)" title="Zoom Out">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" stroke-width="2"/>
                <path d="m21 21-4.35-4.35M8 11h6" stroke-linecap="round" stroke-width="2"/>
            </svg>
            Zoom Out
        </button>
        <span id="zoomLevel" style="font-size: 0.85em; color: #6b7280; min-width: 45px; text-align: center;">100%</span>
        <button class="tool-button" onclick="zoomCanvas(1.1)" title="Zoom In">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" stroke-width="2"/>
                <path d="m21 21-4.35-4.35M11 8v6M8 11h6" stroke-linecap="round" stroke-width="2"/>
            </svg>
            Zoom In
        </button>
        <button class="tool-button" onclick="resetZoom()" title="Reset Zoom">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"/>
            </svg>
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

            <button class="template-button" onclick="loadTemplate('simple')">
                Simple Sequential Process
            </button>
            <button class="template-button" onclick="loadTemplate('branching')">
                Decision-Based Branching
            </button>
            <button class="template-button" onclick="loadTemplate('parallel')">
                Parallel Task Execution
            </button>
            <button class="template-button" onclick="loadTemplate('complex')">
                Complex Multi-Path Flow
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
                <div class="stat-item" id="costStat" style="display: none;">
                    <span>Est. Cost:</span>
                    <strong id="totalCost">$0</strong>
                </div>
                <div class="stat-item" id="customVarStat" style="display: none;">
                    <span id="customVarLabel">Custom:</span>
                    <strong id="customVarValue">0</strong>
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

            <button class="btn-secondary" onclick="saveWorkflow()">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline;">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>
                Save Workflow
            </button>
            <button class="btn-secondary" onclick="loadWorkflow()">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline;">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
                </svg>
                Load Workflow
            </button>
            <button class="btn-secondary" onclick="clearWorkflow()">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline;">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
                Clear All
            </button>
            <button class="btn-primary" onclick="exportWorkflow()">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 16px; height: 16px; display: inline;">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Export SVG
            </button>
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
            <label style="display: flex; align-items: center; gap: 8px;">
                <input type="checkbox" id="enableCost" onchange="toggleCostInput()">
                Track Cost
            </label>
            <input type="number" id="editCost" min="0" value="0" style="display: none; margin-top: 8px;" placeholder="Enter cost in $">
        </div>
        <div class="form-group">
            <label style="display: flex; align-items: center; gap: 8px;">
                <input type="checkbox" id="enableCustomVar" onchange="toggleCustomVarInput()">
                Custom Variable
            </label>
            <div id="customVarInputs" style="display: none; margin-top: 8px;">
                <input type="text" id="customVarName" placeholder="Variable name (e.g. Risk Score)" style="margin-bottom: 8px;">
                <input type="number" id="customVarVal" placeholder="Value" step="0.1">
            </div>
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
    let currentZoom = 1;
    let workflows = [];

    const DEFAULT_COSTS = {
        start: 0,
        process: 50,
        decision: 25,
        parallel: 100,
        end: 0
    };

    // Load saved workflows from localStorage
    function loadWorkflowLibrary() {
        try {
            const stored = localStorage.getItem('clinicalWorkflows');
            workflows = stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('Error loading workflows:', error);
            workflows = [];
        }
    }

    function saveWorkflowLibrary() {
        try {
            localStorage.setItem('clinicalWorkflows', JSON.stringify(workflows));
        } catch (error) {
            alert('Failed to save workflow library. Storage might be full.');
            console.error('Save error:', error);
        }
    }

    // Zoom functions
    function zoomCanvas(factor) {
        currentZoom *= factor;
        currentZoom = Math.max(0.25, Math.min(currentZoom, 2)); // Limit between 25% and 200%
        
        const canvas = document.getElementById('workflow-canvas');
        const inner = canvas.querySelector('.canvas-inner') || canvas;
        
        // Apply transform to all nodes and SVG
        const nodes = canvas.querySelectorAll('.workflow-node');
        const svg = document.getElementById('connections-svg');
        
        nodes.forEach(node => {
            const x = parseFloat(node.style.left) || 0;
            const y = parseFloat(node.style.top) || 0;
            node.style.transform = `scale(${currentZoom})`;
            node.style.transformOrigin = '0 0';
        });
        
        if (svg) {
            svg.style.transform = `scale(${currentZoom})`;
            svg.style.transformOrigin = '0 0';
        }
        
        document.getElementById('zoomLevel').textContent = Math.round(currentZoom * 100) + '%';
    }

    function resetZoom() {
        currentZoom = 1;
        const canvas = document.getElementById('workflow-canvas');
        const nodes = canvas.querySelectorAll('.workflow-node');
        const svg = document.getElementById('connections-svg');
        
        nodes.forEach(node => {
            node.style.transform = '';
        });
        
        if (svg) {
            svg.style.transform = '';
        }
        
        document.getElementById('zoomLevel').textContent = '100%';
    }

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
            if (node.time > 0) metaHtml.push(`<span>${node.time}m</span>`);
            if (node.cost > 0) metaHtml.push(`<span>$${node.cost}</span>`);
            if (node.customVar) metaHtml.push(`<span>${node.customVar.name}: ${node.customVar.value}</span>`);
            
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

    function toggleCostInput() {
        const checkbox = document.getElementById('enableCost');
        const input = document.getElementById('editCost');
        input.style.display = checkbox.checked ? 'block' : 'none';
    }

    function toggleCustomVarInput() {
        const checkbox = document.getElementById('enableCustomVar');
        const inputs = document.getElementById('customVarInputs');
        inputs.style.display = checkbox.checked ? 'block' : 'none';
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
            
            // Calculate edge connection points instead of centers
            const fromBox = { x: fromNode.x, y: fromNode.y, w: 130, h: 80 };
            const toBox = { x: toNode.x, y: toNode.y, w: 130, h: 80 };
            
            const fromCenter = { x: fromBox.x + fromBox.w / 2, y: fromBox.y + fromBox.h / 2 };
            const toCenter = { x: toBox.x + toBox.w / 2, y: toBox.y + toBox.h / 2 };
            
            // Determine which edges to connect
            let fromPoint, toPoint;
            
            if (toCenter.y > fromCenter.y + 40) {
                // Connect bottom of from to top of to
                fromPoint = { x: fromCenter.x, y: fromBox.y + fromBox.h };
                toPoint = { x: toCenter.x, y: toBox.y };
            } else if (toCenter.y < fromCenter.y - 40) {
                // Connect top of from to bottom of to
                fromPoint = { x: fromCenter.x, y: fromBox.y };
                toPoint = { x: toCenter.x, y: toBox.y + toBox.h };
            } else if (toCenter.x > fromCenter.x) {
                // Connect right of from to left of to
                fromPoint = { x: fromBox.x + fromBox.w, y: fromCenter.y };
                toPoint = { x: toBox.x, y: toCenter.y };
            } else {
                // Connect left of from to right of to
                fromPoint = { x: fromBox.x, y: fromCenter.y };
                toPoint = { x: toBox.x + toBox.w, y: toCenter.y };
            }
            
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            
            const dx = toPoint.x - fromPoint.x;
            const dy = toPoint.y - fromPoint.y;
            const curve = Math.abs(dx) * 0.5;
            
            const d = `M ${fromPoint.x} ${fromPoint.y} C ${fromPoint.x + curve} ${fromPoint.y}, ${toPoint.x - curve} ${toPoint.y}, ${toPoint.x} ${toPoint.y}`;
            
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
        
        // Handle cost
        const hasCost = node.cost && node.cost > 0;
        document.getElementById('enableCost').checked = hasCost;
        document.getElementById('editCost').value = node.cost || 0;
        document.getElementById('editCost').style.display = hasCost ? 'block' : 'none';
        
        // Handle custom variable
        const hasCustomVar = node.customVar &&node.customVar.name;
        document.getElementById('enableCustomVar').checked = hasCustomVar;
        document.getElementById('customVarName').value = hasCustomVar ? node.customVar.name : '';
        document.getElementById('customVarVal').value = hasCustomVar ? node.customVar.value : '';
        document.getElementById('customVarInputs').style.display = hasCustomVar ? 'block' : 'none';
        
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
        
        // Save cost if enabled
        if (document.getElementById('enableCost').checked) {
            node.cost = parseInt(document.getElementById('editCost').value) || 0;
        } else {
            node.cost = 0;
        }
        
        // Save custom variable if enabled
        if (document.getElementById('enableCustomVar').checked) {
            const varName = document.getElementById('customVarName').value.trim();
            const varValue = parseFloat(document.getElementById('customVarVal').value) || 0;
            if (varName) {
                node.customVar = { name: varName, value: varValue };
            } else {
                delete node.customVar;
            }
        } else {
            delete node.customVar;
        }
        
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
        const costStat = document.getElementById('costStat');
        if (totalCost > 0) {
            document.getElementById('totalCost').textContent = '$' + totalCost;
            costStat.style.display = 'flex';
        } else {
            costStat.style.display = 'none';
        }
        
        // Handle custom variable
        const customVarStat = document.getElementById('customVarStat');
        const nodesWithCustomVar = nodes.filter(n => n.customVar && n.customVar.name);
        if (nodesWithCustomVar.length > 0) {
            const firstVar = nodesWithCustomVar[0].customVar;
            const customTotal = nodes.reduce((sum, n) => sum + ((n.customVar && n.customVar.name === firstVar.name) ? n.customVar.value : 0), 0);
            document.getElementById('customVarLabel').textContent = firstVar.name + ':';
            document.getElementById('customVarValue').textContent = customTotal.toFixed(1);
            customVarStat.style.display = 'flex';
        } else {
            customVarStat.style.display = 'none';
        }
        
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
            simple: [
                { type: 'start', x: 80, y: 50, label: 'Begin', time: 0, cost: 0 },
                { type: 'process', x: 80, y: 140, label: 'Step 1', time: 10, cost: 0 },
                { type: 'process', x: 80, y: 240, label: 'Step 2', time: 15, cost: 0 },
                { type: 'process', x: 80, y: 340, label: 'Step 3', time: 12, cost: 0 },
                { type: 'end', x: 80, y: 440, label: 'Complete', time: 0, cost: 0 }
            ],
            branching: [
                { type: 'start', x: 200, y: 50, label: 'Start', time: 0, cost: 0 },
                { type: 'process', x: 200, y: 140, label: 'Initial Step', time: 10, cost: 0 },
                { type: 'decision', x: 200, y: 240, label: 'Check Condition?', time: 0, cost: 0 },
                { type: 'process', x: 80, y: 350, label: 'Path A', time: 15, cost: 0 },
                { type: 'process', x: 320, y: 350, label: 'Path B', time: 20, cost: 0 },
                { type: 'end', x: 200, y: 460, label: 'End', time: 0, cost: 0 }
            ],
            parallel: [
                { type: 'start', x: 250, y: 50, label: 'Start', time: 0, cost: 0 },
                { type: 'process', x: 250, y: 140, label: 'Preparation', time: 10, cost: 0 },
                { type: 'parallel', x: 250, y: 240, label: 'Split Tasks', time: 0, cost: 0 },
                { type: 'process', x: 100, y: 340, label: 'Task A', time: 20, cost: 0 },
                { type: 'process', x: 250, y: 340, label: 'Task B', time: 18, cost: 0 },
                { type: 'process', x: 400, y: 340, label: 'Task C', time: 22, cost: 0 },
                { type: 'process', x: 250, y: 450, label: 'Merge Results', time: 8, cost: 0 },
                { type: 'end', x: 250, y: 550, label: 'Complete', time: 0, cost: 0 }
            ],
            complex: [
                { type: 'start', x: 220, y: 30, label: 'Initialize', time: 0, cost: 0 },
                { type: 'process', x: 220, y: 120, label: 'Intake', time: 8, cost: 0 },
                { type: 'decision', x: 220, y: 210, label: 'Type A?', time: 0, cost: 0 },
                { type: 'process', x: 80, y: 300, label: 'Process A1', time: 15, cost: 0 },
                { type: 'parallel', x: 360, y: 300, label: 'Process B', time: 12, cost: 0 },
                { type: 'process', x: 280, y: 400, label: 'B-Sub1', time: 10, cost: 0 },
                { type: 'process', x: 440, y: 400, label: 'B-Sub2', time: 12, cost: 0 },
                { type: 'decision', x: 220, y: 500, label: 'Review OK?', time: 0, cost: 0 },
                { type: 'process', x: 360, y: 500, label: 'Corrections', time: 8, cost: 0 },
                { type: 'end', x: 220, y: 590, label: 'Finalize', time: 0, cost: 0 }
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
        
        // Auto-connect based on template type
        if (templateName === 'simple') {
            // Linear connections
            for (let i = 0; i < nodes.length - 1; i++) {
                connections.push({ id: ++connectionIdCounter, from: nodes[i].id, to: nodes[i + 1].id });
            }
        } else if (templateName === 'branching') {
            connections.push({ id: ++connectionIdCounter, from: nodes[0].id, to: nodes[1].id });
            connections.push({ id: ++connectionIdCounter, from: nodes[1].id, to: nodes[2].id });
            connections.push({ id: ++connectionIdCounter, from: nodes[2].id, to: nodes[3].id });
            connections.push({ id: ++connectionIdCounter, from: nodes[2].id, to: nodes[4].id });
            connections.push({ id: ++connectionIdCounter, from: nodes[3].id, to: nodes[5].id });
            connections.push({ id: ++connectionIdCounter, from: nodes[4].id, to: nodes[5].id });
        } else if (templateName === 'parallel') {
            connections.push({ id: ++connectionIdCounter, from: nodes[0].id, to: nodes[1].id });
            connections.push({ id: ++connectionIdCounter, from: nodes[1].id, to: nodes[2].id });
            connections.push({ id: ++connectionIdCounter, from: nodes[2].id, to: nodes[3].id });
            connections.push({ id: ++connectionIdCounter, from: nodes[2].id, to: nodes[4].id });
            connections.push({ id: ++connectionIdCounter, from: nodes[2].id, to: nodes[5].id });
            connections.push({ id: ++connectionIdCounter, from: nodes[3].id, to: nodes[6].id });
            connections.push({ id: ++connectionIdCounter, from: nodes[4].id, to: nodes[6].id });
            connections.push({ id: ++connectionIdCounter, from: nodes[5].id, to: nodes[6].id });
            connections.push({ id: ++connectionIdCounter, from: nodes[6].id, to: nodes[7].id });
        } else if (templateName === 'complex') {
            connections.push({ id: ++connectionIdCounter, from: nodes[0].id, to: nodes[1].id });
            connections.push({ id: ++connectionIdCounter, from: nodes[1].id, to: nodes[2].id });
            connections.push({ id: ++connectionIdCounter, from: nodes[2].id, to: nodes[3].id });
            connections.push({ id: ++connectionIdCounter, from: nodes[2].id, to: nodes[4].id });
            connections.push({ id: ++connectionIdCounter, from: nodes[4].id, to: nodes[5].id });
            connections.push({ id: ++connectionIdCounter, from: nodes[4].id, to: nodes[6].id });
            connections.push({ id: ++connectionIdCounter, from: nodes[3].id, to: nodes[7].id });
            connections.push({ id: ++connectionIdCounter, from: nodes[5].id, to: nodes[7].id });
            connections.push({ id: ++connectionIdCounter, from: nodes[6].id, to: nodes[7].id });
            connections.push({ id: ++connectionIdCounter, from: nodes[7].id, to: nodes[9].id });
            connections.push({ id: ++connectionIdCounter, from: nodes[7].id, to: nodes[8].id });
            connections.push({ id: ++connectionIdCounter, from: nodes[8].id, to: nodes[1].id }); // Loop back
        }
        
        renderNodes();
        renderConnections();
        updateStats();
    }

    function saveWorkflow() {
        if (nodes.length === 0) {
            alert('Add some nodes before saving the workflow');
            return;
        }
        
        const name = prompt('Enter a name for this workflow:');
        if (!name || !name.trim()) return;
        
        const workflow = {
            id: Date.now(),
            name: name.trim(),
            nodes: JSON.parse(JSON.stringify(nodes)),
            connections: JSON.parse(JSON.stringify(connections)),
            created: new Date().toISOString(),
            nodeCount: nodes.length,
            connectionCount: connections.length
        };
        
        workflows.push(workflow);
        saveWorkflowLibrary();
        alert(`Workflow "${workflow.name}" saved successfully!`);
    }

    function loadWorkflow() {
        if (workflows.length === 0) {
            alert('No saved workflows found. Save a workflow first!');
            return;
        }
        
        // Create a selection dialog
        let html = '<div style="max-height: 400px; overflow-y: auto;">';
        html += '<h3 style="margin-bottom: 15px;">Select a workflow to load:</h3>';
        
        workflows.forEach((wf, index) => {
            const date = new Date(wf.created).toLocaleDateString();
            html += `
                <div style="border: 1px solid #e8e8e8; padding: 12px; margin-bottom: 10px; border-radius: 6px; cursor: pointer; hover: background: #f9fafb;" 
                     onclick="loadWorkflowById(${wf.id})">
                    <strong>${wf.name}</strong><br>
                    <small style="color: #6b7280;">${wf.nodeCount} steps, ${wf.connectionCount} connections • ${date}</small>
                    <button onclick="event.stopPropagation(); deleteWorkflow(${wf.id})" 
                            style="float: right; background: #ef4444; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer;">
                        Delete
                    </button>
                </div>
            `;
        });
        
        html += '</div>';
        
        // Use a simple modal approach
        const existingModal = document.getElementById('workflowSelectModal');
        if (existingModal) existingModal.remove();
        
        const modal = document.createElement('div');
        modal.id = 'workflowSelectModal';
        modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); z-index: 10000; display: flex; align-items: center; justify-content: center; padding: 20px;';
        modal.innerHTML = `
            <div style="background: white; padding: 25px; border-radius: 12px; max-width: 600px; width: 100%;">
                ${html}
                <button onclick="document.getElementById('workflowSelectModal').remove()" 
                        style="margin-top: 15px; padding: 10px 20px; background: #6b7280; color: white; border: none; border-radius: 6px; cursor: pointer; width: 100%;">
                    Cancel
                </button>
            </div>
        `;
        
        document.body.appendChild(modal);
    }

    window.loadWorkflowById = function(id) {
        const workflow = workflows.find(wf => wf.id === id);
        if (!workflow) return;
        
        if (nodes.length > 0 && !confirm(`Replace current workflow with "${workflow.name}"?`)) return;
        
        saveState();
        nodes = JSON.parse(JSON.stringify(workflow.nodes));
        connections = JSON.parse(JSON.stringify(workflow.connections));
        nodeIdCounter = Math.max(...nodes.map(n => n.id), 0);
        connectionIdCounter = Math.max(...connections.map(c => c.id), 0);
        
        renderNodes();
        renderConnections();
        updateStats();
        
        const modal = document.getElementById('workflowSelectModal');
        if (modal) modal.remove();
        
        alert(`Loaded workflow: ${workflow.name}`);
    }

    window.deleteWorkflow = function(id) {
        if (!confirm('Delete this saved workflow?')) return;
        
        workflows = workflows.filter(wf => wf.id !== id);
        saveWorkflowLibrary();
        
        // Refresh the modal
        const modal = document.getElementById('workflowSelectModal');
        if (modal) {
            modal.remove();
            loadWorkflow();
        }
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
    loadWorkflowLibrary();
    updateStats();
    renderNodes();
    renderConnections();
</script>

{%- include software-2-banner.html -%}
