document.addEventListener('DOMContentLoaded', function () {
    // --- Data ---
    const anatomyData = [
        {
            id: 'brain',
            name: 'Brain',
            image: '/assets/images/anatomy/brain.png',
            description: 'The brain is the command center of the nervous system. It controls thoughts, memory, movement, and emotions.',
            keywords: ['head', 'nervous system', 'mind', 'skull', 'neurology'],
            attribution: 'OpenStax, Anatomy and Physiology',
            sourceUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/13-2-the-central-nervous-system'
        },
        {
            id: 'heart',
            name: 'Position of the Heart in the Thorax',
            image: '/assets/images/anatomy/Position_of_the_Heart_in_the_Thorax.png',
            description: 'The heart is a muscular organ that pumps blood through the blood vessels of the circulatory system.',
            keywords: ['cardiovascular', 'chest', 'pump', 'blood', 'cardiology'],
            attribution: 'OpenStax, Anatomy and Physiology 2e, CC BY 4.0',
            sourceUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/19-1-heart-anatomy'
        },
        {
            id: 'lungs',
            name: 'Lungs',
            image: '/assets/images/anatomy/lungs.png',
            description: 'The lungs are the primary organs of the respiratory system, allowing us to breathe in oxygen and exhale carbon dioxide.',
            keywords: ['respiratory', 'breath', 'chest', 'air', 'pulmonology']
        },
        {
            id: 'digestive',
            name: 'Digestive System',
            image: '/assets/images/anatomy/digestive_system.png',
            description: 'The digestive system breaks down food into nutrients, which the body uses for energy, growth, and cell repair.',
            keywords: ['stomach', 'intestine', 'gut', 'gastroenterology', 'food']
        },
        {
            id: 'spine',
            name: 'Spine',
            image: '/assets/images/anatomy/spine.png',
            description: 'The spine (backbone) provides the main support for your body, allowing you to stand upright, bend, and twist.',
            keywords: ['back', 'vertebrae', 'bone', 'skeletal', 'orthopedics']
        },
        {
            id: 'ear',
            name: 'Ear',
            image: '/assets/images/anatomy/human_body_silhouette.png', // Placeholder due to quota
            description: 'The ear is responsible for hearing and balance. It consists of the outer, middle, and inner ear.',
            keywords: ['hearing', 'otitis', 'eardrum', 'sound', 'balance', 'ent']
        },
        {
            id: 'eye',
            name: 'Eye',
            image: '/assets/images/anatomy/human_body_silhouette.png', // Placeholder
            description: 'The eye is the organ of vision. It detects light and converts it into electro-chemical impulses in neurons.',
            keywords: ['vision', 'sight', 'conjunctivitis', 'retina', 'ophthalmology']
        },
        {
            id: 'throat',
            name: 'Throat & Tonsils',
            image: '/assets/images/anatomy/human_body_silhouette.png', // Placeholder
            description: 'The throat includes the pharynx and larynx. Tonsils are part of the immune system and help fight infection.',
            keywords: ['pharynx', 'tonsillitis', 'strep', 'mouth', 'ent', 'sore throat']
        },
        {
            id: 'sinuses',
            name: 'Upper Respiratory',
            image: '/assets/images/anatomy/human_body_silhouette.png', // Placeholder
            description: 'The upper respiratory tract includes the nose, sinuses, and throat, responsible for filtering and warming air.',
            keywords: ['sinusitis', 'cold', 'nose', 'congestion', 'ent']
        },
        {
            id: 'skin',
            name: 'Skin',
            image: '/assets/images/anatomy/human_body_silhouette.png', // Placeholder
            description: 'The skin is the body\'s largest organ, protecting against germs and regulating temperature.',
            keywords: ['dermatology', 'rash', 'eczema', 'epidermis', 'hives']
        },
        {
            id: 'kidneys',
            name: 'Kidneys & Bladder',
            image: '/assets/images/anatomy/human_body_silhouette.png', // Placeholder
            description: 'The kidneys filter blood to produce urine, which is stored in the bladder.',
            keywords: ['renal', 'uti', 'urine', 'nephrology', 'bladder']
        },
        {
            id: 'liver',
            name: 'Liver & Gallbladder',
            image: '/assets/images/anatomy/human_body_silhouette.png', // Placeholder
            description: 'The liver processes nutrients and filters blood. The gallbladder stores bile for digestion.',
            keywords: ['digestive', 'abdominal pain', 'bile', 'gastroenterology']
        },
        {
            id: 'appendix',
            name: 'Appendix',
            image: '/assets/images/anatomy/human_body_silhouette.png', // Placeholder
            description: 'The appendix is a small tube attached to the large intestine. Appendicitis is a common emergency.',
            keywords: ['appendicitis', 'stomach pain', 'abdomen', 'surgery']
        },
        {
            id: 'hand_arm',
            name: 'Arm & Hand',
            image: '/assets/images/anatomy/human_body_silhouette.png', // Placeholder
            description: 'The upper limb consists of the arm, forearm, and hand, enabling complex manipulation and movement.',
            keywords: ['fracture', 'bone', 'muscle', 'orthopedics', 'wrist']
        }
    ];

    // --- State ---
    let favorites = JSON.parse(localStorage.getItem('anatomyFavorites')) || [];
    let currentFilter = 'all'; // 'all' or 'favorites'

    // --- DOM Elements ---
    const regionList = document.getElementById('regionList');
    const mainImage = document.getElementById('mainImage');
    const partTitle = document.getElementById('partTitle');
    const partDescription = document.getElementById('partDescription');
    const favoriteBtn = document.getElementById('favoriteBtn');
    const searchInput = document.getElementById('anatomySearch');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const favCountSpan = document.getElementById('favCount');
    const resetViewBtn = document.getElementById('resetViewBtn');

    let currentItem = null;

    // --- Initialization ---
    renderList();
    updateFavCount();

    // --- Event Listeners ---

    // Search
    searchInput.addEventListener('input', (e) => {
        renderList(e.target.value);
    });

    // Tabs
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.tab;
            renderList(searchInput.value);
        });
    });

    // Reset View
    resetViewBtn.addEventListener('click', resetView);

    // Favorite Button
    favoriteBtn.addEventListener('click', () => {
        if (!currentItem) return;
        toggleFavorite(currentItem.id);
        updateFavoriteBtnState();
        renderList(searchInput.value); // Re-render to show star icon
    });

    // --- Functions ---

    function renderList(searchTerm = '') {
        regionList.innerHTML = '';
        const term = searchTerm.toLowerCase();

        const filtered = anatomyData.filter(item => {
            // Text Search
            const matchesSearch = item.name.toLowerCase().includes(term) ||
                item.keywords.some(k => k.toLowerCase().includes(term));

            // Tab Filter
            const matchesTab = currentFilter === 'all' ||
                (currentFilter === 'favorites' && favorites.includes(item.id));

            return matchesSearch && matchesTab;
        });

        if (filtered.length === 0) {
            regionList.innerHTML = '<div style="padding:1rem; color:#999; text-align:center;">No results found.</div>';
            return;
        }

        filtered.forEach(item => {
            const el = document.createElement('div');
            el.className = 'region-item';
            if (currentItem && currentItem.id === item.id) {
                el.classList.add('active');
            }

            const isFav = favorites.includes(item.id);

            el.innerHTML = `
                <span>${item.name}</span>
                <span class="fav-icon ${isFav ? 'visible' : ''}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6" style="width:16px;height:16px;">
                      <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006Z" clip-rule="evenodd" />
                    </svg>
                </span>
            `;

            el.addEventListener('click', () => selectItem(item));
            regionList.appendChild(el);
        });
    }

    function selectItem(item) {
        currentItem = item;

        // Update UI Text
        partTitle.textContent = item.name;
        partDescription.textContent = item.description;

        // Update Attribution
        const attributionEl = document.getElementById('partAttribution');
        if (item.attribution) {
            attributionEl.style.display = 'block';
            if (item.sourceUrl) {
                attributionEl.innerHTML = `Source: <a href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer">${item.attribution}</a>`;
            } else {
                attributionEl.textContent = `Source: ${item.attribution}`;
            }
        } else {
            attributionEl.style.display = 'none';
        }

        // Update Main View
        // Fade out, swap source, fade in
        mainImage.style.opacity = 0;
        setTimeout(() => {
            mainImage.src = item.image;
            mainImage.onload = () => {
                mainImage.style.opacity = 1;
            };
        }, 300);

        // Enable Favorite Button and update state
        favoriteBtn.disabled = false;
        updateFavoriteBtnState();

        // Highlight in list
        const items = regionList.querySelectorAll('.region-item');
        items.forEach(el => el.classList.remove('active'));
        // Re-rendering list is safer to ensure state consistency but might lose scroll position. 
        // For simple list, let's just re-render to highlight correctly or manually toggle class.
        renderList(searchInput.value);
    }

    function resetView() {
        currentItem = null;
        partTitle.textContent = 'Select a Region';
        partDescription.textContent = 'Choose an organ system from the list to view details.';
        document.getElementById('partAttribution').style.display = 'none';

        mainImage.style.opacity = 0;
        setTimeout(() => {
            mainImage.src = '/assets/images/anatomy/human_body_silhouette.png';
            mainImage.onload = () => {
                mainImage.style.opacity = 1;
            };
        }, 300);

        favoriteBtn.disabled = true;
        updateFavoriteBtnState();
        renderList(searchInput.value);
    }

    function toggleFavorite(id) {
        if (favorites.includes(id)) {
            favorites = favorites.filter(fid => fid !== id);
        } else {
            favorites.push(id);
        }
        localStorage.setItem('anatomyFavorites', JSON.stringify(favorites));
        updateFavCount();
    }

    function updateFavoriteBtnState() {
        if (!currentItem) {
            favoriteBtn.classList.remove('active');
            favoriteBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                Add to Favorites
            `;
            return;
        }

        const isFav = favorites.includes(currentItem.id);
        if (isFav) {
            favoriteBtn.classList.add('active');
            favoriteBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006Z" clip-rule="evenodd" />
                </svg>
                Favorited
            `;
        } else {
            favoriteBtn.classList.remove('active');
            favoriteBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                Add to Favorites
            `;
        }
    }

    function updateFavCount() {
        favCountSpan.textContent = `(${favorites.length})`;
    }
});
