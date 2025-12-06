---
layout: default
title: Interactive Anatomy Tool
permalink: /interactive-anatomy/
---

<div class="anatomy-tool-container">
    <div class="anatomy-header">
        <h1>Interactive Anatomy Reference</h1>
        <p>A quick-reference tool for patient education. Select a system to view details.</p>
    </div>

    <div class="anatomy-workspace">
        <!-- Sidebar for Controls & Search -->
        <aside class="anatomy-sidebar">
            <div class="search-box">
                <input type="text" id="anatomySearch" placeholder="Search organs or systems..." aria-label="Search anatomy">
            </div>
            
            <div class="navigation-tabs">
                <button class="tab-btn active" data-tab="all">All Systems</button>
                <button class="tab-btn" data-tab="favorites">Favorites <span id="favCount">(0)</span></button>
            </div>

            <div class="region-list" id="regionList">
                <!-- Populated by JS -->
            </div>
        </aside>

        <!-- Main Viewing Area -->
        <main class="anatomy-viewer" id="anatomyViewer">
            <div class="viewer-controls">
                <button id="resetViewBtn" class="control-btn" title="Reset View">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                    Reset
                </button>
                <button id="fullScreenBtn" class="control-btn" title="Full Screen">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                    </svg>
                    Full Screen
                </button>
            </div>

            <div class="display-stage">
                <!-- Default State: Body Silhouette -->
                <img src="/assets/images/anatomy/human_body_silhouette.png" alt="Human Body" class="base-layer" id="mainImage">
                <div id="overlayContainer"></div>
            </div>

            <div class="info-panel" id="infoPanel">
                <h2 id="partTitle">Select a Region</h2>
                <div class="anatomy-meta">
                    <p id="partDescription">Choose an organ system from the list to view details.</p>
                    <p id="partAttribution" class="attribution-text" style="display:none;"></p>
                </div>
                <button id="favoriteBtn" class="fav-btn" disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                    Add to Favorites
                </button>
            </div>
        </main>
    </div>
</div>

<script src="/assets/js/interactive-anatomy.js"></script>
