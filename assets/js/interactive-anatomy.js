document.addEventListener('DOMContentLoaded', function () {
    // --- Data ---
    const anatomyData = [
        {
            id: 'structures_of_the_ear',
            name: 'Structures of the Ear',
            image: '/assets/images/anatomy/Structures_of_the_Ear.png',
            description: 'The external ear contains the auricle, ear canal, and tympanic membrane. The middle ear contains the ossicles and is connected to the pharynx by the Eustachian tube. The inner ear contains the cochlea and vestibule, which are responsible for audition and equilibrium, respectively.',
            keywords: ['ear', 'hearing', 'auricle', 'ossicles', 'cochlea', 'ent'],
            attribution: 'OpenStax, Anatomy and Physiology 2e',
            sourceUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/14-1-sensory-perception',
            category: 'Sensory & ENT'
        },
        {
            id: 'nails',
            name: 'Nails',
            image: '/assets/images/anatomy/Nails.png',
            description: 'The nail is an accessory structure of the integumentary system.',
            keywords: ['skin', 'finger', 'toe', 'cuticle', 'integumentary'],
            attribution: 'OpenStax, Anatomy and Physiology 2e',
            sourceUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/5-2-accessory-structures-of-the-skin?query=nails&target=%7B%22index%22%3A9%2C%22type%22%3A%22search%22%7D#fs-id1200286',
            category: 'Integumentary'
        },
        {
            id: 'glenohumeral_joint',
            name: 'Glenohumeral Joint',
            image: '/assets/images/anatomy/Glenohumeral_Joint.png',
            description: 'The glenohumeral (shoulder) joint is a ball-and-socket joint that provides the widest range of motions. It has a loose articular capsule and is supported by ligaments and the rotator cuff muscles.',
            keywords: ['shoulder', 'skeletal', 'joint', 'arm', 'orthopedics'],
            attribution: 'OpenStax, Anatomy and Physiology 2e',
            sourceUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/9-6-anatomy-of-selected-synovial-joints?query=glenohumeral&target=%7B%22index%22%3A0%2C%22type%22%3A%22search%22%7D#fs-id2305343',
            category: 'Skeletal & Muscular'
        },
        {
            id: 'overview_of_the_muscular_system',
            name: 'Overview of the Muscular System',
            image: '/assets/images/anatomy/Overview_of_the_Muscular_System.png',
            description: 'On these anterior and posterior view of the muscular system above, superficial muscles (those at the surface) are shown on the right side of the body while deep muscles (those underneath the superficial muscles) are shown on the left half of the body. For the legs, superficial muscles are shown in the anterior view while the posterior view shows both superficial and deep muscles.',
            keywords: ['muscles', 'system', 'anatomy', 'superficial', 'myology'],
            attribution: 'OpenStax, Anatomy and Physiology 2e',
            sourceUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/11-2-naming-skeletal-muscles',
            category: 'Skeletal & Muscular'
        },
        {
            id: 'dual_system_of_the_human_blood_circulation',
            name: 'Dual System of the Human Blood Circulation',
            image: '/assets/images/anatomy/Dual_System_of_the_Human_Blood_Circulation.png',
            description: 'Blood flows from the right atrium to the right ventricle, where it is pumped into the pulmonary circuit. The blood in the pulmonary artery branches is low in oxygen but relatively high in carbon dioxide. Gas exchange occurs in the pulmonary capillaries (oxygen into the blood, carbon dioxide out), and blood high in oxygen and low in carbon dioxide is returned to the left atrium. From here, blood enters the left ventricle, which pumps it into the systemic circuit. Following exchange in the systemic capillaries (oxygen and nutrients out of the capillaries and carbon dioxide and wastes in), blood returns to the right atrium and the cycle is repeated.',
            keywords: ['heart', 'blood', 'circulation', 'pulmonary', 'systemic', 'cardiovascular'],
            attribution: 'OpenStax, Anatomy and Physiology 2e',
            sourceUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/19-1-heart-anatomy',
            category: 'Cardiovascular'
        },
        {
            id: 'internal_structures_of_the_heart',
            name: 'Internal Structures of the Heart',
            image: '/assets/images/anatomy/Internal_Structures_of_the_Heart.png',
            description: 'This anterior view of the heart shows the four chambers, the major vessels and their early branches, as well as the valves. The presence of the pulmonary trunk and aorta covers the interatrial septum, and the atrioventricular septum is cut away to show the atrioventricular valves.',
            keywords: ['heart', 'valves', 'atrium', 'ventricle', 'aorta', 'cardiology'],
            attribution: 'OpenStax, Anatomy and Physiology 2e',
            sourceUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/19-1-heart-anatomy',
            category: 'Cardiovascular'
        },
        {
            id: 'congenital_heart_defects',
            name: 'Congenital Heart Defects',
            image: '/assets/images/anatomy/Congenital_Heart_Defects.png',
            description: '(a) A patent foramen ovale defect is an abnormal opening in the interatrial septum, or more commonly, a failure of the foramen ovale to close. (b) Coarctation of the aorta is an abnormal narrowing of the aorta. (c) A patent ductus arteriosus is the failure of the ductus arteriosus to close. (d) Tetralogy of Fallot includes an abnormal opening in the interventricular septum.',
            keywords: ['heart', 'defect', 'congenital', 'aorta', 'septum', 'pediatric'],
            attribution: 'OpenStax, Anatomy and Physiology 2e',
            sourceUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/19-1-heart-anatomy',
            category: 'Cardiovascular'
        },
        {
            id: 'thyroid_gland',
            name: 'Thyroid Gland',
            image: '/assets/images/anatomy/Thyroid_Gland.png',
            description: 'The thyroid gland is located in the neck where it wraps around the trachea. (a) Anterior view of the thyroid gland. (b) Posterior view of the thyroid gland. (c) The glandular tissue is composed primarily of thyroid follicles. The larger parafollicular cells often appear within the matrix of follicle cells.',
            keywords: ['thyroid', 'gland', 'neck', 'hormones', 'endocrine'],
            attribution: 'OpenStax, Anatomy and Physiology 2e',
            sourceUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/17-4-the-thyroid-gland',
            category: 'Endocrine'
        },
        {
            id: 'pancreas',
            name: 'Exocrine and Endocrine Pancreas',
            image: '/assets/images/anatomy/Pancreas.png',
            description: 'The pancreas has a head, a body, and a tail. It delivers pancreatic juice to the duodenum through the pancreatic duct.',
            keywords: ['pancreas', 'insulin', 'digestive', 'endocrine', 'exocrine'],
            attribution: 'OpenStax, Anatomy and Physiology 2e',
            sourceUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/23-6-accessory-organs-in-digestion-the-liver-pancreas-and-gallbladder',
            category: 'Digestive System'
        },
        {
            id: 'tonsils',
            name: 'Locations and Histology of the Tonsils',
            image: '/assets/images/anatomy/Tonsils.png',
            description: '(a) The pharyngeal tonsil is located on the roof of the posterior superior wall of the nasopharynx. The palatine tonsils lay on each side of the pharynx. (b) A micrograph shows the palatine tonsil tissue.',
            keywords: ['tonsil', 'throat', 'immune', 'pharyngeal', 'lymphatic'],
            attribution: 'OpenStax, Anatomy and Physiology 2e',
            sourceUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/21-1-anatomy-of-the-lymphatic-and-immune-systems',
            category: 'Lymphatic & Immune'
        },
        {
            id: 'major_respiratory_structures',
            name: 'Major Respiratory Structures',
            image: '/assets/images/anatomy/Major_Respiratory_Structures.png',
            description: 'The major respiratory structures span the nasal cavity to the diaphragm.',
            keywords: ['respiratory', 'lungs', 'trachea', 'bronchi', 'nose'],
            attribution: 'OpenStax, Anatomy and Physiology 2e',
            sourceUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/22-1-organs-and-structures-of-the-respiratory-system',
            category: 'Respiratory'
        },
        {
            id: 'gross_anatomy_of_the_lungs',
            name: 'Gross Anatomy of the Lungs',
            image: '/assets/images/anatomy/Gross_Anatomy_of_the_Lungs.png',
            description: 'Gross anatomy of the lungs showing lobes and fissures.',
            keywords: ['lungs', 'lobes', 'respiratory', 'anatomy', 'pulmonary'],
            attribution: 'OpenStax, Anatomy and Physiology 2e',
            sourceUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/22-2-the-lungs',
            category: 'Respiratory'
        },
        {
            id: 'components_of_the_digestive_system',
            name: 'Components of the Digestive System',
            image: '/assets/images/anatomy/Components_of_the_Digestive_System.png',
            description: 'All digestive organs play integral roles in the life-sustaining process of digestion.',
            keywords: ['digestive', 'stomach', 'intestine', 'liver', 'esophagus'],
            attribution: 'OpenStax, Anatomy and Physiology 2e',
            sourceUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/23-1-overview-of-the-digestive-system',
            category: 'Digestive System'
        },
        {
            id: 'tongue',
            name: 'Tongue',
            image: '/assets/images/anatomy/Tongue.png',
            description: 'This superior view of the tongue shows the locations and types of lingual papillae.',
            keywords: ['tongue', 'taste', 'mouth', 'papillae', 'digestive'],
            attribution: 'OpenStax, Anatomy and Physiology 2e',
            sourceUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/23-3-the-mouth-pharynx-and-esophagus',
            category: 'Digestive System'
        },
        {
            id: 'mouth',
            name: 'Mouth',
            image: '/assets/images/anatomy/Mouth.png',
            description: 'The mouth includes the lips, tongue, palate, gums, and teeth.',
            keywords: ['mouth', 'oral', 'teeth', 'lips', 'digestive'],
            attribution: 'OpenStax, Anatomy and Physiology 2e',
            sourceUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/23-3-the-mouth-pharynx-and-esophagus',
            category: 'Digestive System'
        },
        {
            id: 'pharynx',
            name: 'Pharynx',
            image: '/assets/images/anatomy/Pharynx.png',
            description: 'The pharynx runs from the nostrils to the esophagus and the larynx.',
            keywords: ['pharynx', 'throat', 'swallow', 'digestive', 'respiratory'],
            attribution: 'OpenStax, Anatomy and Physiology 2e',
            sourceUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/23-3-the-mouth-pharynx-and-esophagus',
            category: 'Digestive System'
        },
        {
            id: 'esophagus',
            name: 'Esophagus',
            image: '/assets/images/anatomy/Esophagus.png',
            description: 'The upper esophageal sphincter controls the movement of food from the pharynx to the esophagus. The lower esophageal sphincter controls the movement of food from the esophagus to the stomach.',
            keywords: ['esophagus', 'swallow', 'food', 'digestive', 'gastroenterology'],
            attribution: 'OpenStax, Anatomy and Physiology 2e',
            sourceUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/23-3-the-mouth-pharynx-and-esophagus',
            category: 'Digestive System'
        },
        {
            id: 'stomach',
            name: 'Stomach',
            image: '/assets/images/anatomy/Stomach.png',
            description: 'The stomach has four major regions: the cardia, fundus, body, and pylorus. The addition of an inner oblique smooth muscle layer gives the muscularis the ability to vigorously churn and mix food.',
            keywords: ['stomach', 'digestion', 'gastric', 'abdominal', 'gastroenterology'],
            attribution: 'OpenStax, Anatomy and Physiology 2e',
            sourceUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/23-4-the-stomach',
            category: 'Digestive System'
        },
        {
            id: 'small_intestine',
            name: 'Small Intestine',
            image: '/assets/images/anatomy/Small_Intestine.png',
            description: 'The three regions of the small intestine are the duodenum, jejunum, and ileum.',
            keywords: ['intestine', 'small intestine', 'digestion', 'absorption', 'bowel'],
            attribution: 'OpenStax, Anatomy and Physiology 2e',
            sourceUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/23-5-the-small-and-large-intestines',
            category: 'Digestive System'
        },
        {
            id: 'large_intestine',
            name: 'Large Intestine',
            image: '/assets/images/anatomy/Large_Intestine.png',
            description: 'The large intestine includes the cecum, colon, and rectum.',
            keywords: ['intestine', 'large intestine', 'colon', 'bowel', 'digestion'],
            attribution: 'OpenStax, Anatomy and Physiology 2e',
            sourceUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/23-5-the-small-and-large-intestines',
            category: 'Digestive System'
        },
        {
            id: 'accessory_organs',
            name: 'Accessory Organs',
            image: '/assets/images/anatomy/Accessory_Organs.png',
            description: 'The liver, pancreas, and gallbladder are considered accessory digestive organs, but their roles in the digestive system are vital.',
            keywords: ['liver', 'pancreas', 'gallbladder', 'digestive', 'accessory'],
            attribution: 'OpenStax, Anatomy and Physiology 2e',
            sourceUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/23-6-accessory-organs-in-digestion-the-liver-pancreas-and-gallbladder',
            category: 'Digestive System'
        },
        {
            id: 'gallbladder',
            name: 'Gallbladder',
            image: '/assets/images/anatomy/Gallbladder.png',
            description: 'The gallbladder stores and concentrates bile, and releases it into the two-way cystic duct when it is needed by the small intestine.',
            keywords: ['gallbladder', 'bile', 'digestive', 'stones', 'cholecyst'],
            attribution: 'OpenStax, Anatomy and Physiology 2e',
            sourceUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/23-6-accessory-organs-in-digestion-the-liver-pancreas-and-gallbladder',
            category: 'Digestive System'
        },
        {
            id: 'female_and_male_urethras',
            name: 'Female and Male Urethras',
            image: '/assets/images/anatomy/Female_and_Male_Urethras.png',
            description: 'The urethra transports urine from the bladder to the outside of the body. This image shows (a) a female urethra and (b) a male urethra.',
            keywords: ['urethra', 'urine', 'bladder', 'urology', 'excretory'],
            attribution: 'OpenStax, Anatomy and Physiology 2e',
            sourceUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/25-2-gross-anatomy-of-urine-transport',
            category: 'Urinary & Excretory'
        },
        {
            id: 'bladder',
            name: 'Bladder',
            image: '/assets/images/anatomy/Bladder.png',
            description: '(a) Anterior cross section of the bladder. (b) The detrusor muscle of the bladder.',
            keywords: ['bladder', 'urine', 'cyst', 'urology', 'detrusor'],
            attribution: 'OpenStax, Anatomy and Physiology 2e',
            sourceUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/25-2-gross-anatomy-of-urine-transport',
            category: 'Urinary & Excretory'
        },
        {
            id: 'kidneys',
            name: 'Kidneys',
            image: '/assets/images/anatomy/Kidneys.png',
            description: 'The kidneys are slightly protected by the ribs and are surrounded by fat for protection (not shown).',
            keywords: ['kidney', 'renal', 'urology', 'filter', 'nephrology'],
            attribution: 'OpenStax, Anatomy and Physiology 2e',
            sourceUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/25-3-gross-anatomy-of-the-kidney',
            category: 'Urinary & Excretory'
        },
        {
            id: 'kidney_internal',
            name: 'Left Kidney',
            image: '/assets/images/anatomy/Kidney_Internal.png',
            description: 'Internal structure of the kidney, showing the cortex, medulla, and renal pelvis.',
            keywords: ['kidney', 'internal', 'renal', 'nephrology', 'cortex'],
            attribution: 'OpenStax, Anatomy and Physiology 2e',
            sourceUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/25-3-gross-anatomy-of-the-kidney',
            category: 'Urinary & Excretory'
        },
        {
            id: 'anatomy_of_the_testis',
            name: 'Anatomy of the Testis',
            image: '/assets/images/anatomy/Anatomy_of_the_Testis.png',
            description: 'This sagittal view shows the seminiferous tubules, the site of sperm production. Formed sperm are transferred to the epididymis, where they mature. They leave the epididymis during an ejaculation via the ductus deferens.',
            keywords: ['testis', 'sperm', 'reproductive', 'male', 'gonad'],
            attribution: 'OpenStax, Anatomy and Physiology 2e',
            sourceUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/27-1-anatomy-and-physiology-of-the-testicular-reproductive-system',
            category: 'Reproductive'
        },
        {
            id: 'female_reproductive_system',
            name: 'Female Reproductive System',
            image: '/assets/images/anatomy/Female_Reproductive_System.png',
            description: 'The major organs of the female reproductive system are located inside the pelvic cavity.',
            keywords: ['reproductive', 'female', 'uterus', 'ovary', 'pelvis'],
            attribution: 'OpenStax, Anatomy and Physiology 2e',
            sourceUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/27-2-anatomy-and-physiology-of-the-ovarian-reproductive-system',
            category: 'Reproductive'
        },
        {
            id: 'hormone_levels_in_ovarian_and_menstrual_cycles',
            name: 'Hormone Levels in Ovarian and Menstrual Cycles',
            image: '/assets/images/anatomy/Hormone_Levels_in_Ovarian_and_Menstrual_Cycles.png',
            description: 'The correlation of the hormone levels and their effects on the female reproductive system is shown in this timeline of the ovarian and menstrual cycles. The menstrual cycle begins at day one with the start of menses. Ovulation occurs around day 14 of a 28-day cycle, triggered by the LH surge.',
            keywords: ['hormone', 'menstrual', 'cycle', 'reproductive', 'ovulation'],
            attribution: 'OpenStax, Anatomy and Physiology 2e',
            sourceUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/27-2-anatomy-and-physiology-of-the-ovarian-reproductive-system',
            category: 'Reproductive'
        },
        {
            id: 'anatomy_of_the_breast',
            name: 'Anatomy of the Breast',
            image: '/assets/images/anatomy/Anatomy_of_the_Breast.png',
            description: 'During lactation, milk moves from the alveoli through the lactiferous ducts to the nipple.',
            keywords: ['breast', 'lactation', 'milk', 'reproductive', 'mammary'],
            attribution: 'OpenStax, Anatomy and Physiology 2e',
            sourceUrl: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/27-2-anatomy-and-physiology-of-the-ovarian-reproductive-system',
            category: 'Reproductive'
        },
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

    // Full Screen
    const fullScreenBtn = document.getElementById('fullScreenBtn');
    const workspace = document.querySelector('.anatomy-workspace');

    fullScreenBtn.addEventListener('click', () => {
        workspace.classList.toggle('full-screen');
        // Update button text/icon could go here, but toggle is enough for MVP
    });

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

        // Group by Category
        const grouped = filtered.reduce((acc, item) => {
            const cat = item.category || 'Other';
            if (!acc[cat]) acc[cat] = [];
            acc[cat].push(item);
            return acc;
        }, {});

        // Sort Categories alphabetically (optional) or fixed order
        // For simplicity: Object.keys sort
        Object.keys(grouped).sort().forEach(category => {
            // Create Category Header
            const header = document.createElement('div');
            header.className = 'category-header';
            header.innerHTML = `
                <span>${category}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            `;

            // Create Content Container
            const content = document.createElement('div');
            content.className = 'folder-content';

            // Toggle Logic
            header.addEventListener('click', () => {
                header.classList.toggle('collapsed');
                content.classList.toggle('collapsed');
            });

            // If searching or favorites, maybe expand all? 
            // Default: Expanded

            // Render Items in Category
            grouped[category].forEach(item => {
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
                content.appendChild(el);
            });

            regionList.appendChild(header);
            regionList.appendChild(content);
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
