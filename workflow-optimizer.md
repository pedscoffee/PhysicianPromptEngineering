---
layout: page
title: Clinical Workflow Optimizer
description: Visualize and optimize your clinical workflows with interactive drag-and-drop flowcharts.
permalink: /workflow-optimizer/
---

<style>
    .workflow-container {
        display: grid;
        grid-template-columns: 300px 1fr;
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
        padding: 20px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        border: 1px solid #e8e8e8;
        position: sticky;
        top: 20px;
    }

    .workflow-panel {
        background: white;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        border: 1px solid #e8e8e8;
        min-height: 600px;
    }

    .node-button {
        width: 100%;
        padding: 12px;
        margin-bottom: 10px;
        border: 2px solid;
        border-radius: 6px;
        background: white;
        cursor: grab;
        font-weight: 600;
        font-size: 0.9em;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .node-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    .node-button.start { border-color: #10b981; color: #10b981; }
    .node-button.process { border-color: #3b82f6; color: #3b82f6; }
    .node-button.decision { border-color: #f59e0b; color: #f59e0b; }
    .node-button.end { border-color: #ef4444; color: #ef4444; }

    .stats-panel {
        margin-top: 20px;
        padding: 15px;
        background: #f9fafb;
        border-radius: 6px;
        font-size: 0.9em;
    }

    .stat-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        padding-bottom: 8px;
        border-bottom: 1px solid #e8e8e8;
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
        padding: 10px 20px;
        border-radius: 6px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s;
        width: 100%;
        font-size: 0.95rem;
        margin-top: 10px;
    }

    .btn-primary:hover {
        background: #1e5bb8;
    }

    .btn-secondary {
        background: white;
        border: 1px solid #e8e8e8;
        color: #333;
        padding: 10px 20px;
        border-radius: 6px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s;
        width: 100%;
        font-size: 0.95rem;
        margin-top: 10px;
    }

    .btn-secondary:hover {
        background: #f5f5f5;
    }

    #workflow-canvas {
        width: 100%;
        height: 600px;
        border: 2px dashed #e8e8e8;
        border-radius: 8px;
        position: relative;
        background: 
            linear-gradient(90deg, #f9fafb 1px, transparent 1px),
            linear-gradient(#f9fafb 1px, transparent 1px);
        background-size: 20px 20px;
    }

    .workflow-node {
        position: absolute;
        padding: 12px 16px;
        border-radius: 8px;
        background: white;
        border: 2px solid;
        min-width: 120px;
        cursor: move;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        font-size: 0.9em;
    }

    .workflow-node.start {
        border-color: #10b981;
        background: #f0fdf4;
    }

    .workflow-node.process {
        border-color: #3b82f6;
        background: #eff6ff;
    }

    .workflow-node.decision {
        border-color: #f59e0b;
        background: #fefce8;
        transform: rotate(45deg);
    }

    .workflow-node.decision .node-content {
        transform: rotate(-45deg);
    }

    .workflow-node.end {
        border-color: #ef4444;
        background: #fef2f2;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .node-label {
        font-weight: 600;
        margin-bottom: 4px;
    }

    .node-time {
        font-size: 0.85em;
        color: #666;
    }

    .delete-node {
        position: absolute;
        top: -8px;
        right: -8px;
        background: #ef4444;
        color: white;
        border: none;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        cursor: pointer;
        font-size: 0.8em;
        display: none;
    }

    .workflow-node:hover .delete-node {
        display: block;
    }

    .connection-line {
        stroke: #9ca3af;
        stroke-width: 2;
        fill: none;
        marker-end: url(#arrowhead);
    }

    .instructions {
        background: #eff6ff;
        padding: 12px;
        border-radius: 6px;
        margin-bottom: 15px;
        font-size: 0.85em;
        border-left: 3px solid #3b82f6;
    }
</style>

<div class="hero" style="background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); padding: 3rem 0; text-align: center; margin-bottom: 2rem; border-radius: 1rem;">
    <div class="container">
        <h1 class="hero-title" style="color: #1e3a8a; font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem;">
            Clinical Workflow Optimizer
        </h1>
        <p class="hero-subtitle" style="color: #1e40af; font-size: 1.1rem; max-width: 800px; margin: 0 auto;">
            Visualize and optimize your clinical workflows. Map processes, identify bottlenecks, and improve efficiency with interactive flowcharts.
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
                    This tool is for educational and training purposes only. <strong>Do not input any patient health information (PHI)</strong> or other sensitive data. Use de-identified scenarios for workflow analysis.
                </p>
            </div>
        </div>
    </div>

    <div class="workflow-container">
        <!-- Sidebar -->
        <div class="sidebar-panel">
            <h3 style="margin-bottom: 15px; color: #333; font-size: 1.1rem;">Workflow Elements</h3>
            
            <div class="instructions">
                <strong>How to use:</strong><br>
                1. Drag elements onto canvas<br>
                2. Click to edit labels/times<br>
                3. Drag nodes to connect
            </div>

            <button class="node-button start" onclick="addNode('start')">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10"/>
                </svg>
                Start/Entry Point
            </button>

            <button class="node-button process" onclick="addNode('process')">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                </svg>
                Process Step
            </button>

            <button class="node-button decision" onclick="addNode('decision')">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2L22 12L12 22L2 12Z"/>
                </svg>
                Decision Point
            </button>

            <button class="node-button end" onclick="addNode('end')">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="6" fill="white"/>
                </svg>
                End/Outcome
            </button>

            <div class="stats-panel">
                <h4 style="margin-bottom: 10px; color: #333;">Workflow Stats</h4>
                <div class="stat-item">
                    <span>Total Steps:</span>
                    <strong id="totalSteps">0</strong>
                </div>
                <div class="stat-item">
                    <span>Total Time:</span>
                    <strong id="totalTime">0 min</strong>
                </div>
                <div class="stat-item">
                    <span>Decision Points:</span>
                    <strong id="decisionCount">0</strong>
                </div>
            </div>

            <button class="btn-secondary" onclick="clearWorkflow()">Clear Workflow</button>
            <button class="btn-primary" onclick="exportWorkflow()">Export SVG</button>
        </div>

        <!-- Canvas -->
        <div class="workflow-panel">
            <h3 style="margin-bottom: 15px; color: #333;">Workflow Canvas</h3>
            <div id="workflow-canvas">
                <svg id="connections-svg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;">
                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                            <polygon points="0 0, 10 3, 0 6" fill="#9ca3af" />
                        </marker>
                    </defs>
                </svg>
            </div>
        </div>
    </div>
</div>

<script>
    let nodes = [];
    let nodeIdCounter = 0;
    let selectedNode = null;
    let dragOffset = { x: 0, y: 0 };

    function addNode(type) {
        const canvas = document.getElementById('workflow-canvas');
        const canvasRect = canvas.getBoundingClientRect();
        
        const node = {
            id: ++nodeIdCounter,
            type: type,
            x: 50 + (nodeIdCounter * 20) % 200,
            y: 50 + (nodeIdCounter * 20) % 200,
            label: getDefaultLabel(type),
            time: type === 'process' ? 5 : 0
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
            end: 'End'
        };
        return labels[type] || 'Node';
    }

    function renderNodes() {
        const canvas = document.getElementById('workflow-canvas');
        
        // Remove existing nodes (keep SVG)
        const existingNodes = canvas.querySelectorAll('.workflow-node');
        existingNodes.forEach(node => node.remove());
        
        // Add nodes
        nodes.forEach(node => {
            const nodeEl = document.createElement('div');
            nodeEl.className = `workflow-node ${node.type}`;
            nodeEl.id = `node-${node.id}`;
            nodeEl.style.left = node.x + 'px';
            nodeEl.style.top = node.y + 'px';
            
            nodeEl.innerHTML = `
                <div class="node-content">
                    <div class="node-label">${node.label}</div>
                    ${node.time > 0 ? `<div class="node-time">${node.time} min</div>` : ''}
                </div>
                <button class="delete-node" onclick="deleteNode(${node.id})">×</button>
            `;
            
            // Make draggable
            nodeEl.addEventListener('mousedown', startDrag);
            nodeEl.addEventListener('dblclick', () => editNode(node.id));
            
            canvas.appendChild(nodeEl);
        });
    }

    function startDrag(e) {
        if (e.target.classList.contains('delete-node')) return;
        
        const nodeEl = e.currentTarget;
        const nodeId = parseInt(nodeEl.id.split('-')[1]);
        selectedNode = nodes.find(n => n.id === nodeId);
        
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
        
        // Keep within bounds
        selectedNode.x = Math.max(0, Math.min(selectedNode.x, canvasRect.width - 150));
        selectedNode.y = Math.max(0, Math.min(selectedNode.y, canvasRect.height - 100));
        
        renderNodes();
    }

    function stopDrag() {
        selectedNode = null;
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', stopDrag);
    }

    function editNode(nodeId) {
        const node = nodes.find(n => n.id === nodeId);
        if (!node) return;
        
        const newLabel = prompt('Enter label:', node.label);
        if (newLabel !== null && newLabel.trim()) {
            node.label = newLabel.trim();
        }
        
        if (node.type === 'process') {
            const newTime = prompt('Enter time (minutes):', node.time);
            if (newTime !== null && !isNaN(newTime) && newTime >= 0) {
                node.time = parseInt(newTime);
            }
        }
        
        renderNodes();
        updateStats();
    }

    function deleteNode(nodeId) {
        nodes = nodes.filter(n => n.id !== nodeId);
        renderNodes();
        updateStats();
    }

    function clearWorkflow() {
        if (nodes.length === 0) return;
        if (confirm('Clear all workflow steps?')) {
            nodes = [];
            renderNodes();
            updateStats();
        }
    }

    function updateStats() {
        document.getElementById('totalSteps').textContent = nodes.length;
        
        const totalTime = nodes.reduce((sum, node) => sum + (node.time || 0), 0);
        document.getElementById('totalTime').textContent = totalTime + ' min';
        
        const decisionCount = nodes.filter(n => n.type === 'decision').length;
        document.getElementById('decisionCount').textContent = decisionCount;
    }

    function exportWorkflow() {
        if (nodes.length === 0) {
            alert('Please add workflow steps before exporting');
            return;
        }
        
        const canvas = document.getElementById('workflow-canvas');
        const canvasRect = canvas.getBoundingClientRect();
        
        // Create SVG
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', canvasRect.width);
        svg.setAttribute('height', canvasRect.height);
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        
        // Add white background
        const bg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        bg.setAttribute('width', '100%');
        bg.setAttribute('height', '100%');
        bg.setAttribute('fill', 'white');
        svg.appendChild(bg);
        
        // Add nodes as SVG elements
        nodes.forEach(node => {
            const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            
            // Draw shape based on type
            if (node.type === 'start' || node.type === 'end') {
                const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                circle.setAttribute('cx', node.x + 60);
                circle.setAttribute('cy', node.y + 30);
                circle.setAttribute('r', 30);
                circle.setAttribute('fill', node.type === 'start' ? '#f0fdf4' : '#fef2f2');
                circle.setAttribute('stroke', node.type === 'start' ? '#10b981' : '#ef4444');
                circle.setAttribute('stroke-width', 2);
                g.appendChild(circle);
            } else if (node.type === 'process') {
                const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                rect.setAttribute('x', node.x);
                rect.setAttribute('y', node.y);
                rect.setAttribute('width', 120);
                rect.setAttribute('height', 60);
                rect.setAttribute('rx', 8);
                rect.setAttribute('fill', '#eff6ff');
                rect.setAttribute('stroke', '#3b82f6');
                rect.setAttribute('stroke-width', 2);
                g.appendChild(rect);
            } else if (node.type === 'decision') {
                const diamond = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                const cx = node.x + 60;
                const cy = node.y + 30;
                diamond.setAttribute('d', `M ${cx},${cy-30} L ${cx+30},${cy} L ${cx},${cy+30} L ${cx-30},${cy} Z`);
                diamond.setAttribute('fill', '#fefce8');
                diamond.setAttribute('stroke', '#f59e0b');
                diamond.setAttribute('stroke-width', 2);
                g.appendChild(diamond);
            }
            
            // Add text
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', node.x + 60);
            text.setAttribute('y', node.y + 35);
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('font-size', '14');
            text.setAttribute('font-weight', 'bold');
            text.textContent = node.label;
            g.appendChild(text);
            
            svg.appendChild(g);
        });
        
        // Download
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

    // Initialize
    updateStats();
</script>
