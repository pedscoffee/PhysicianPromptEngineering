---
layout: page
title: Patient Timeline Visualizer
description: Create interactive patient timelines for educational case presentations and teaching.
permalink: /patient-timeline/
---

<style>
    .timeline-container {
        display: grid;
        grid-template-columns: 350px 1fr;
        gap: 30px;
        margin-top: 20px;
        align-items: start;
    }

    @media (max-width: 1024px) {
        .timeline-container {
            grid-template-columns: 1fr;
        }
    }

    .input-panel, .output-panel {
        background: white;
        border-radius: 8px;
        padding: 25px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        border: 1px solid #e8e8e8;
    }

    .output-panel {
        min-height: 600px;
        display: flex;
        flex-direction: column;
    }

    .form-group {
        margin-bottom: 15px;
    }

    .form-group label {
        display: block;
        font-weight: 600;
        margin-bottom: 6px;
        color: #333;
        font-size: 0.9em;
    }

    .form-group input, .form-group select, .form-group textarea {
        width: 100%;
        padding: 10px;
        border: 2px solid #e8e8e8;
        border-radius: 6px;
        font-size: 0.9em;
        transition: border-color 0.2s;
    }

    .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
        outline: none;
        border-color: #2a7ae2;
    }

    .form-group textarea {
        min-height: 60px;
        resize: vertical;
        font-family: inherit;
    }

    .btn-primary {
        background: #2a7ae2;
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 6px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s;
        width: 100%;
        font-size: 1rem;
    }

    .btn-primary:hover:not(:disabled) {
        background: #1e5bb8;
    }

    .btn-primary:disabled {
        background: #ccc;
        cursor: not-allowed;
    }

    .btn-secondary {
        background: white;
        border: 1px solid #e8e8e8;
        color: #333;
        padding: 8px 16px;
        border-radius: 6px;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.2s;
        width: 100%;
        font-size: 0.9em;
        margin-top: 10px;
    }

    .btn-secondary:hover {
        background: #f5f5f5;
    }

    .event-list {
        max-height: 300px;
        overflow-y: auto;
        margin-top: 15px;
        border: 1px solid #e8e8e8;
        border-radius: 6px;
        padding: 10px;
    }

    .event-item {
        padding: 10px;
        margin-bottom: 8px;
        border-radius: 4px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.85em;
        border-left: 4px solid;
    }

    .event-item.symptom { border-left-color: #ef4444; background: #fef2f2; }
    .event-item.lab { border-left-color: #8b5cf6; background: #f5f3ff; }
    .event-item.intervention { border-left-color: #10b981; background: #f0fdf4; }
    .event-item.imaging { border-left-color: #f59e0b; background: #fefce8; }
    .event-item.diagnosis { border-left-color: #3b82f6; background: #eff6ff; }
    .event-item.other { border-left-color: #6b7280; background: #f9fafb; }

    .event-item button {
        background: none;
        border: none;
        color: #ef4444;
        cursor: pointer;
        padding: 4px 8px;
        font-size: 1.2em;
    }

    #timeline-svg {
        width: 100%;
        height: 500px;
        border: 1px solid #e8e8e8;
        border-radius: 6px;
        background: white;
    }

    .category-legend {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        margin-bottom: 15px;
        padding: 10px;
        background: #f9fafb;
        border-radius: 6px;
        font-size: 0.85em;
    }

    .legend-item {
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .legend-color {
        width: 16px;
        height: 16px;
        border-radius: 3px;
    }

    .tooltip {
        position: absolute;
        background: rgba(0, 0, 0, 0.9);
        color: white;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 0.85em;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.2s;
        z-index: 1000;
    }
</style>

<div class="hero" style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 3rem 0; text-align: center; margin-bottom: 2rem; border-radius: 1rem;">
    <div class="container">
        <h1 class="hero-title" style="color: #92400e; font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem;">
            Patient Timeline Visualizer
        </h1>
        <p class="hero-subtitle" style="color: #b45309; font-size: 1.1rem; max-width: 800px; margin: 0 auto;">
            Create interactive patient timelines for case presentations and teaching. Visualize the temporal progression of symptoms, labs, and interventions over the course of clinical days.
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
                    This tool is for educational and training purposes only. <strong>Do not input any patient health information (PHI)</strong> or other sensitive data. All processing occurs locally in your browser, but you are responsible for ensuring compliance with HIPAA and other privacy regulations.
                </p>
            </div>
        </div>
    </div>

    <div class="timeline-container">
        <!-- Input Panel -->
        <div class="input-panel">
            <h3 style="margin-bottom: 15px; color: #333;">Add Events</h3>
            
            <form id="eventForm">
                <div class="form-group">
                    <label for="eventDay">Relative Day</label>
                    <input type="number" id="eventDay" min="1" placeholder="e.g., 1 (Admission Day)" required>
                </div>

                <div class="form-group">
                    <label for="eventCategory">Category</label>
                    <select id="eventCategory" required>
                        <option value="symptom">Symptom</option>
                        <option value="lab">Lab Result</option>
                        <option value="intervention">Intervention</option>
                        <option value="imaging">Imaging</option>
                        <option value="diagnosis">Diagnosis</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="eventDescription">Description</label>
                    <textarea id="eventDescription" placeholder="e.g., Fever 103°F" required></textarea>
                </div>

                <button type="submit" class="btn-primary">Add Event</button>
            </form>

            <button type="button" class="btn-secondary" onclick="clearAllEvents()">Clear All Events</button>
            <button type="button" class="btn-secondary" onclick="exportTimeline()">Export SVG</button>

            <div class="event-list" id="eventList">
                <p style="color: #999; font-size: 0.9em; text-align: center;">No events added yet</p>
            </div>
        </div>

        <!-- Output Panel -->
        <div class="output-panel">
            <h3 style="margin-bottom: 15px; color: #333;">Timeline Visualization</h3>
            
            <div class="category-legend">
                <div class="legend-item">
                    <div class="legend-color" style="background: #ef4444;"></div>
                    <span>Symptom</span>
                </div>
                <div class="legend-item">
                    <div class="legend-color" style="background: #8b5cf6;"></div>
                    <span>Lab</span>
                </div>
                <div class="legend-item">
                    <div class="legend-color" style="background: #10b981;"></div>
                    <span>Intervention</span>
                </div>
                <div class="legend-item">
                    <div class="legend-color" style="background: #f59e0b;"></div>
                    <span>Imaging</span>
                </div>
                <div class="legend-item">
                    <div class="legend-color" style="background: #3b82f6;"></div>
                    <span>Diagnosis</span>
                </div>
                <div class="legend-item">
                    <div class="legend-color" style="background: #6b7280;"></div>
                    <span>Other</span>
                </div>
            </div>

            <svg id="timeline-svg"></svg>
        </div>
    </div>
</div>

<div class="tooltip" id="tooltip"></div>

<script src="https://d3js.org/d3.v7.min.js"></script>
<script>
    let events = [];
    const categoryColors = {
        symptom: '#ef4444',
        lab: '#8b5cf6',
        intervention: '#10b981',
        imaging: '#f59e0b',
        diagnosis: '#3b82f6',
        other: '#6b7280'
    };

    // Handle form submission
    document.getElementById('eventForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const event = {
            id: Date.now(),
            day: parseInt(document.getElementById('eventDay').value),
            category: document.getElementById('eventCategory').value,
            description: document.getElementById('eventDescription').value
        };

        events.push(event);
        updateEventList();
        renderTimeline();
        
        // Reset form
        this.reset();
    });

    function updateEventList() {
        const listEl = document.getElementById('eventList');
        
        if (events.length === 0) {
            listEl.innerHTML = '<p style="color: #999; font-size: 0.9em; text-align: center;">No events added yet</p>';
            return;
        }

        // Sort events by day
        const sortedEvents = [...events].sort((a, b) => a.day - b.day);
        
        listEl.innerHTML = sortedEvents.map(event => `
            <div class="event-item ${event.category}">
                <div>
                    <strong>Day ${event.day}</strong><br>
                    ${event.description}
                </div>
                <button onclick="deleteEvent(${event.id})" title="Delete">×</button>
            </div>
        `).join('');
    }

    function deleteEvent(id) {
        events = events.filter(e => e.id !== id);
        updateEventList();
        renderTimeline();
    }

    function clearAllEvents() {
        if (events.length === 0) return;
        if (confirm('Are you sure you want to clear all events?')) {
            events = [];
            updateEventList();
            renderTimeline();
        }
    }

    function renderTimeline() {
        const svg = d3.select('#timeline-svg');
        svg.selectAll('*').remove();

        if (events.length === 0) {
            svg.append('text')
                .attr('x', '50%')
                .attr('y', '50%')
                .attr('text-anchor', 'middle')
                .attr('fill', '#999')
                .text('Add events to see timeline visualization');
            return;
        }

        const width = parseInt(svg.style('width'));
        const height = parseInt(svg.style('height'));
        const margin = { top: 40, right: 40, bottom: 60, left: 40 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // Sort events
        const sortedEvents = [...events].sort((a, b) => a.day - b.day);

        // Create scales
        // Use linear scale for days. If only 1 event or all same day, add padding.
        const dayExtent = d3.extent(sortedEvents, d => d.day);
        let minDay = dayExtent[0];
        let maxDay = dayExtent[1];
        
        if (minDay === maxDay) {
            minDay = minDay - 1;
            maxDay = maxDay + 1;
        }
        
        // Ensure we start at least at day 0 or 1 if user wants
        if (minDay > 1) minDay = 1;

        const xScale = d3.scaleLinear()
            .domain([minDay, maxDay])
            .range([0, innerWidth]);

        // Group events by category for y positioning
        const categories = ['symptom', 'lab', 'intervention', 'imaging', 'diagnosis', 'other'];
        const yScale = d3.scaleBand()
            .domain(categories)
            .range([0, innerHeight])
            .padding(0.2);

        // Draw timeline axis
        const xAxis = d3.axisBottom(xScale)
            .ticks(Math.min(maxDay - minDay, 10)) // Don't show too many ticks
            .tickFormat(d => `Day ${d}`);

        g.append('g')
            .attr('transform', `translate(0,${innerHeight})`)
            .call(xAxis);

        // Draw horizontal lines for each category
        categories.forEach(cat => {
            g.append('line')
                .attr('x1', 0)
                .attr('x2', innerWidth)
                .attr('y1', yScale(cat) + yScale.bandwidth() / 2)
                .attr('y2', yScale(cat) + yScale.bandwidth() / 2)
                .attr('stroke', '#e8e8e8')
                .attr('stroke-width', 1);
        });

        // Draw events
        const tooltip = d3.select('#tooltip');

        g.selectAll('.event-circle')
            .data(sortedEvents)
            .enter()
            .append('circle')
            .attr('class', 'event-circle')
            .attr('cx', d => xScale(d.day))
            .attr('cy', d => yScale(d.category) + yScale.bandwidth() / 2)
            .attr('r', 8)
            .attr('fill', d => categoryColors[d.category])
            .attr('stroke', 'white')
            .attr('stroke-width', 2)
            .style('cursor', 'pointer')
            .on('mouseover', function(event, d) {
                d3.select(this)
                    .transition()
                    .duration(200)
                    .attr('r', 12);

                tooltip
                    .style('opacity', 1)
                    .html(`
                        <strong>${d.category.charAt(0).toUpperCase() + d.category.slice(1)}</strong><br>
                        Day ${d.day}<br>
                        ${d.description}
                    `)
                    .style('left', (event.pageX + 10) + 'px')
                    .style('top', (event.pageY - 28) + 'px');
            })
            .on('mouseout', function() {
                d3.select(this)
                    .transition()
                    .duration(200)
                    .attr('r', 8);

                tooltip.style('opacity', 0);
            });

        // Add category labels
        categories.forEach(cat => {
            g.append('text')
                .attr('x', -10)
                .attr('y', yScale(cat) + yScale.bandwidth() / 2)
                .attr('text-anchor', 'end')
                .attr('dominant-baseline', 'middle')
                .attr('font-size', '12px')
                .attr('fill', '#666')
                .text(cat.charAt(0).toUpperCase() + cat.slice(1));
        });
    }

    function exportTimeline() {
        if (events.length === 0) {
            alert('Please add events before exporting');
            return;
        }

        const svgEl = document.getElementById('timeline-svg');
        const svgData = new XMLSerializer().serializeToString(svgEl);
        const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(svgBlob);
        
        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = 'patient-timeline.svg';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(url);
    }

    // Initialize empty timeline
    renderTimeline();
</script>
