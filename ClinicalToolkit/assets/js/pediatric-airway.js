document.addEventListener('DOMContentLoaded', function () {
    // --- Elements ---
    const muscleSlider = document.getElementById('muscleConstriction');
    const inflammationSlider = document.getElementById('wallInflammation');
    const mucusSlider = document.getElementById('mucusProduction');

    const resetBtn = document.getElementById('resetBtn');
    const albuterolBtn = document.getElementById('administerAlbuterol');
    const steroidBtn = document.getElementById('administerSteroid');

    const muscleLayer = document.getElementById('muscleLayer');
    const inflammationLayer = document.getElementById('inflammationLayer');
    const mucusGroup = document.getElementById('mucusGroup');
    const statusMsg = document.getElementById('statusMessage');
    const effectText = document.getElementById('effectText');

    // --- State ---
    let state = {
        muscle: 0, // 0-100
        inflammation: 0, // 0-100
        mucus: 0 // 0-100
    };

    // --- Constants ---
    const MAX_MUSCLE_RADIUS = 180;
    const MIN_MUSCLE_RADIUS = 100; // Constricted
    const BASE_INFLAMMATION_WIDTH = 5; // Normal lining
    const MAX_INFLAMMATION_WIDTH = 60; // Swollen lining

    // --- Render Function ---
    function render() {
        // 1. Calculate Constriction (affects both rings)
        // Map 0-100 to Radia range
        const constrictionFactor = state.muscle / 100;
        const currentRadius = MAX_MUSCLE_RADIUS - (constrictionFactor * (MAX_MUSCLE_RADIUS - MIN_MUSCLE_RADIUS));

        muscleLayer.setAttribute('r', currentRadius);

        // 2. Calculate Inflammation (Thickness of inner ring)
        // The lining sits just inside the muscle.
        // If muscle moves in, ligning moves in.
        // Lining thickness grows inward.
        const inflammationFactor = state.inflammation / 100;
        const currentThickness = BASE_INFLAMMATION_WIDTH + (inflammationFactor * (MAX_INFLAMMATION_WIDTH - BASE_INFLAMMATION_WIDTH));

        // Adjust lining radius to sit inside the muscle correctly
        // Muscle stroke is 20 (centered on r). Inner edge is r - 10.
        // Lining needs to abut that.
        // Let's simplified visually: Lining is concentric.
        // If lining stroke width is W, and we want it to fill INWARD from the muscle:
        // Center of lining should be at: MuscleInnerEdge - W/2
        // MuscleInnerEdge = currentRadius - 10.
        const liningRadius = (currentRadius - 10) - (currentThickness / 2);

        inflammationLayer.setAttribute('r', Math.max(0, liningRadius));
        inflammationLayer.setAttribute('stroke-width', currentThickness);

        // 3. Render Mucus
        // Generate random blobs based on mucus level
        // Ideally we don't regenerate them every frame if just moving sliders, but for simplicity we can.
        // Or better: show/hide pre-generated blobs, or just update opacity/count.
        renderMucus(liningRadius - (currentThickness / 2));
    }

    function renderMucus(innerLumenRadius) {
        // innerLumenRadius is the free space in the middle.
        // Mucus fills this space.

        // Clear existing
        mucusGroup.innerHTML = '';

        if (state.mucus < 5) return;

        const blobCount = Math.floor(state.mucus / 5); // up to 20 blobs

        // Helper to get random pos inside circle
        for (let i = 0; i < blobCount; i++) {
            // Random angle
            const theta = Math.random() * 2 * Math.PI;
            // Random dist (keeping away from very center and very edge for aesthetics)
            // Sqrt for uniform distribution, but linear is fine for "clumping" look
            const r = Math.random() * (innerLumenRadius * 0.8);

            const x = 200 + r * Math.cos(theta);
            const y = 200 + r * Math.sin(theta);

            const blob = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            blob.setAttribute('cx', x);
            blob.setAttribute('cy', y);
            blob.setAttribute('r', 5 + Math.random() * 10);
            blob.setAttribute('fill', '#2ecc71');
            blob.setAttribute('opacity', 0.6);

            mucusGroup.appendChild(blob);
        }
    }

    // --- Event Listeners ---
    muscleSlider.addEventListener('input', (e) => {
        state.muscle = parseInt(e.target.value);
        render();
    });

    inflammationSlider.addEventListener('input', (e) => {
        state.inflammation = parseInt(e.target.value);
        render();
    });

    mucusSlider.addEventListener('input', (e) => {
        state.mucus = parseInt(e.target.value);
        render();
    });

    resetBtn.addEventListener('click', () => {
        state = { muscle: 0, inflammation: 0, mucus: 0 };
        updateSliders();
        render();
        hideStatus();
    });

    // --- Treatments ---

    albuterolBtn.addEventListener('click', () => {
        // Animate Muscle -> 0
        if (state.muscle === 0) {
            showStatus("Muscle is already relaxed! Albuterol won't help further.", "neutral");
            return;
        }

        showStatus("Albuterol administered. Relaxing muscles...", "success");

        const start = state.muscle;
        const duration = 1000; // 1 sec
        const startTime = performance.now();

        function animate(time) {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out
            const ease = 1 - Math.pow(1 - progress, 3);

            state.muscle = start - (start * ease);

            // Update UI
            muscleSlider.value = state.muscle;
            render();

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                state.muscle = 0;
                muscleSlider.value = 0;
                render();
            }
        }
        requestAnimationFrame(animate);
    });

    steroidBtn.addEventListener('click', () => {
        // Animate Inflammation -> 0 (Slower)
        if (state.inflammation === 0) {
            showStatus("No inflammation detected.", "neutral");
            return;
        }

        showStatus("Steroid administered. Reducing swelling over time...", "success");

        const start = state.inflammation;
        const duration = 2000; // 2 sec (slower)
        const startTime = performance.now();

        function animate(time) {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);

            state.inflammation = start - (start * progress); // Linear is fine for "slow" feel

            // Update UI
            inflammationSlider.value = state.inflammation;
            render();

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                state.inflammation = 0;
                inflammationSlider.value = 0;
                render();
            }
        }
        requestAnimationFrame(animate);
    });

    // --- Helpers ---
    function updateSliders() {
        muscleSlider.value = state.muscle;
        inflammationSlider.value = state.inflammation;
        mucusSlider.value = state.mucus;
    }

    function showStatus(msg, type) {
        statusMsg.style.display = 'block';
        effectText.textContent = msg;
        statusMsg.style.backgroundColor = type === 'neutral' ? '#e2e3e5' : '#d4edda';
        statusMsg.style.color = type === 'neutral' ? '#383d41' : '#155724';

        // Auto hide after 3s
        setTimeout(hideStatus, 4000);
    }

    function hideStatus() {
        statusMsg.style.display = 'none';
    }

    // --- Init ---
    render();
});
