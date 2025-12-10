---
layout: page
title: Annual PTO Planner
permalink: /pto-planner/
description: Plan your work schedule, PTO, and CME for the entire year.
---

<!-- PWA Meta Tags -->
<link rel="manifest" href="{{ '/pto-manifest.json' | relative_url }}">
<meta name="theme-color" content="#0f766e">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="PTO Planner">
<link rel="apple-touch-icon" href="{{ '/apple-touch-icon.png' | relative_url }}">

<script>
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('{{ "/pto-sw.js" | relative_url }}')
            .then(reg => console.log('[PTO Planner PWA] Service Worker registered'))
            .catch(err => console.log('[PTO Planner PWA] SW registration failed:', err));
    });
}
</script>

<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#0f766e', // teal-700
          primaryLight: '#ccfbf1', // teal-100
          secondary: '#64748b', // slate-500
          pto: '#3b82f6', // blue-500
          ptoLight: '#dbeafe', // blue-100
          cme: '#8b5cf6', // violet-500
          cmeLight: '#ede9fe', // violet-100
          holiday: '#ef4444', // red-500
          holidayLight: '#fee2e2', // red-100
        }
      }
    }
  }
</script>

<!-- Heroicons (SVGs) -->
<script>
  const Icons = {
    calendar: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>',
    cog: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',
    download: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>',
    upload: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" /></svg>',
    chevronLeft: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>',
    chevronRight: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>',
    plus: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>',
    trash: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>',
    exclamation: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>'
  };
</script>

<style>
  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f5f9;
  }
  ::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }

  /* Calendar Grid Transitions */
  .day-cell {
    transition: all 0.1s ease-in-out;
  }
  .day-cell:hover {
    transform: scale(1.05);
    z-index: 10;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
  
  /* Modal Animation */
  .modal-backdrop {
    animation: fadeIn 0.2s ease-out;
  }
  .modal-content {
    animation: slideUp 0.2s ease-out;
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Hero Section */
  .hero {
      background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
      padding: 60px 30px;
      border-radius: 12px;
      margin-bottom: 40px;
      text-align: center;
  }

  .hero h1 {
      font-size: 2.5em;
      margin-bottom: 15px;
      color: #065f46;
      font-weight: 700;
  }

  .hero-subtitle {
      font-size: 1.2em;
      color: #047857;
      margin-bottom: 20px;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.8;
  }

  /* Premium Banner */
  .premium-banner {
    background: #fff7ed;
    border: 1px solid #fdba74;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .premium-banner strong {
    color: #9a3412;
  }
  .premium-banner p {
    margin: 0;
    color: #c2410c;
    font-size: 0.9em;
  }
  .premium-banner svg {
    width: 24px;
    height: 24px;
    color: #f59e0b;
  }

  /* PWA Install Banner */
  .pwa-install-banner {
    background: linear-gradient(135deg, #0f766e 0%, #0d9488 100%);
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 20px;
  }
  .pwa-install-banner .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
  }
  .pwa-install-banner .text-content {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .pwa-install-banner svg {
    width: 28px;
    height: 28px;
    stroke: white;
  }
  .pwa-install-banner strong {
    color: white;
  }
  .pwa-install-banner p {
    margin: 0;
    color: rgba(255,255,255,0.85);
    font-size: 0.85em;
  }
  .pwa-install-banner .buttons {
    display: flex;
    gap: 10px;
  }
  .pwa-install-banner button {
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
  }
  .pwa-install-banner #pwaInstallBtn {
    background: white;
    color: #0f766e;
  }
  .pwa-install-banner .dismiss-btn {
    background: transparent;
    color: white;
    border: 1px solid rgba(255,255,255,0.5);
    padding: 10px 15px;
  }

  /* Hero icon in H1 */
  .hero h1 svg {
    width: 40px;
    height: 40px;
    display: inline-block;
    vertical-align: text-bottom;
    margin-right: 12px;
  }
</style>

<div id="app" class="pto-planner-wrapper" v-cloak>
    <!-- Hero Section -->
    <div class="hero">
        <div class="container mx-auto">
            <h1>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                Annual PTO Planner
            </h1>
            <p class="hero-subtitle">
                Plan your work schedule, vacation days, and CME time for the entire year with this interactive calendar tool.
            </p>
        </div>
    </div>

    <div class="container mx-auto px-6 max-w-5xl">
        <!-- Premium Banner -->
        <div class="premium-banner">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
            </svg>
        </h1>
        <p class="hero-subtitle">
            Plan your work schedule, vacation days, and CME time for the entire year with this interactive calendar tool.
        </p>
    </div>
</div>

<div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 1.5rem;">
    <!-- Premium Banner -->
    <div style="background: #fff7ed; border: 1px solid #fdba74; padding: 15px; border-radius: 8px; margin-bottom: 20px; display: flex; align-items: center; gap: 15px;">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 24px; height: 24px; color: #f59e0b;">
            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
        </svg>
        <div>
            <strong style="color: #9a3412;">Premium Feature</strong>
            <p style="margin: 0; color: #c2410c; font-size: 0.9em;">This tool is free thanks to the support of our community. Please consider supporting the project if you find it useful.</p>
        </div>
    </div>

<!-- PWA Install Banner -->
<div id="pwaInstallBanner" style="display: none; background: linear-gradient(135deg, #0f766e 0%, #0d9488 100%); border-radius: 8px; padding: 15px; margin-bottom: 20px;">
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
        <div style="display: flex; align-items: center; gap: 12px;">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" style="width: 28px; height: 28px;"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
            <div>
                <strong style="color: white;">Install PTO Planner</strong>
                <p style="margin: 0; color: rgba(255,255,255,0.85); font-size: 0.85em;">Add to your home screen for quick access</p>
            </div>
        </div>
        <div style="display: flex; gap: 10px;">
            <button id="pwaInstallBtn" onclick="installPWA()" style="background: white; color: #0f766e; border: none; padding: 10px 20px; border-radius: 6px; font-weight: 600; cursor: pointer;">📲 Install</button>
            <button onclick="dismissInstallBanner()" style="background: transparent; color: white; border: 1px solid rgba(255,255,255,0.5); padding: 10px 15px; border-radius: 6px; cursor: pointer;">✕</button>
        </div>
    </div>
</div>

<div id="app" class="min-h-screen bg-slate-50 font-sans text-slate-800 pb-20">
  <!-- App will be rendered here -->
</div>
</div>

<script>
  // --- Constants & Config ---
  const STORAGE_KEY = 'pto_planner_data';
  const DEFAULT_CONFIG = {
    year: new Date().getFullYear(),
    ptoAllowance: 20,
    cmeAllowance: 5,
    weekendsCount: false,
    holidaysCountAsPto: false,
    holidays: {
      newYearsDay: true,
      mlkDay: true,
      presidentsDay: true,
      memorialDay: true,
      juneteenth: true,
      independenceDay: true,
      laborDay: true,
      columbusDay: true,
      veteransDay: true,
      thanksgiving: true,
      christmas: true,
    },
    customHolidays: [] // Array of { date: 'YYYY-MM-DD', name: 'Name' }
  };

  // --- State Management ---
  let state = {
    config: { ...DEFAULT_CONFIG },
    events: {}, // Map date string 'YYYY-MM-DD' -> { type: 'PTO'|'CME', note: '', icon: '' }
    view: 'year', // 'year' or 'month'
    currentMonth: new Date().getMonth(), // 0-11
    showConfig: false,
    showBulkAdd: false,
    interactionMode: 'PTO', // 'PTO' or 'CME'
  };

  // --- Date Utilities ---
  const DateUtils = {
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    
    formatDate(date) {
      return date.toISOString().split('T')[0];
    },

    parseDate(dateStr) {
      const [y, m, d] = dateStr.split('-').map(Number);
      return new Date(y, m - 1, d);
    },

    isWeekend(date) {
      const day = date.getDay();
      return day === 0 || day === 6;
    },

    getDaysInMonth(year, month) {
      return new Date(year, month + 1, 0).getDate();
    },

    // Calculate US Federal Holidays
    getHolidays(year) {
      const holidays = {};
      
      const addHoliday = (date, name) => {
        const dateStr = DateUtils.formatDate(date);
        holidays[dateStr] = name;
        
        // Handle observed (Sat -> Fri, Sun -> Mon)
        const day = date.getDay();
        if (day === 0) { // Sunday -> Monday
          const observed = new Date(date);
          observed.setDate(date.getDate() + 1);
          holidays[DateUtils.formatDate(observed)] = `${name} (Observed)`;
        } else if (day === 6) { // Saturday -> Friday
          const observed = new Date(date);
          observed.setDate(date.getDate() - 1);
          holidays[DateUtils.formatDate(observed)] = `${name} (Observed)`;
        }
      };

      const getNthWeekday = (year, month, weekday, n) => {
        const date = new Date(year, month, 1);
        let count = 0;
        while (date.getMonth() === month) {
          if (date.getDay() === weekday) {
            count++;
            if (count === n) return new Date(date);
          }
          date.setDate(date.getDate() + 1);
        }
        return null;
      };

      // Fixed Dates
      if (state.config.holidays.newYearsDay) addHoliday(new Date(year, 0, 1), "New Year's Day");
      if (state.config.holidays.juneteenth) addHoliday(new Date(year, 5, 19), "Juneteenth");
      if (state.config.holidays.independenceDay) addHoliday(new Date(year, 6, 4), "Independence Day");
      if (state.config.holidays.veteransDay) addHoliday(new Date(year, 10, 11), "Veterans Day");
      if (state.config.holidays.christmas) addHoliday(new Date(year, 11, 25), "Christmas Day");

      // Floating Dates
      if (state.config.holidays.mlkDay) addHoliday(getNthWeekday(year, 0, 1, 3), "MLK Jr. Day"); // 3rd Mon Jan
      if (state.config.holidays.presidentsDay) addHoliday(getNthWeekday(year, 1, 1, 3), "Presidents' Day"); // 3rd Mon Feb
      if (state.config.holidays.memorialDay) { // Last Mon May
        const date = new Date(year, 4 + 1, 0); // Last day of May
        while (date.getDay() !== 1) date.setDate(date.getDate() - 1);
        addHoliday(date, "Memorial Day");
      }
      if (state.config.holidays.laborDay) addHoliday(getNthWeekday(year, 8, 1, 1), "Labor Day"); // 1st Mon Sep
      if (state.config.holidays.columbusDay) addHoliday(getNthWeekday(year, 9, 1, 2), "Columbus Day"); // 2nd Mon Oct
      if (state.config.holidays.thanksgiving) addHoliday(getNthWeekday(year, 10, 4, 4), "Thanksgiving"); // 4th Thu Nov

      // Custom Holidays
      state.config.customHolidays.forEach(h => {
        holidays[h.date] = h.name;
      });

      return holidays;
    }
  };

  // --- App Logic ---
  const App = {
    init() {
      this.loadData();
      this.render();
    },

    loadData() {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const data = JSON.parse(stored);
        state = { ...state, ...data, view: 'year' }; // Reset view on load
      }
    },

    saveData(shouldRender = true) {
      const dataToSave = {
        config: state.config,
        events: state.events
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
      if (shouldRender) this.render();
    },

    exportData() {
      const dataStr = JSON.stringify({ config: state.config, events: state.events }, null, 2);
      const blob = new Blob([dataStr], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `pto-plan-${state.config.year}.json`;
      a.click();
      URL.revokeObjectURL(url);
    },

    importData(file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          if (data.config && data.events) {
            state.config = data.config;
            state.events = data.events;
            this.saveData();
            alert('Schedule imported successfully!');
          } else {
            alert('Invalid file format.');
          }
        } catch (err) {
          alert('Error parsing JSON file.');
        }
      };
      reader.readAsText(file);
    },

    toggleEvent(dateStr, type = null) {
      const targetType = type || state.interactionMode;
      const holidays = DateUtils.getHolidays(state.config.year);
      const isHoliday = holidays[dateStr];
      
      if (isHoliday && !state.config.holidaysCountAsPto) return;

      if (state.events[dateStr]) {
        if (state.events[dateStr].type === targetType) {
          delete state.events[dateStr];
        } else {
          state.events[dateStr].type = targetType;
        }
      } else {
        state.events[dateStr] = { type: targetType, note: '' };
      }
      this.saveData();
    },

    addRange(startStr, endStr, type, note) {
      const start = DateUtils.parseDate(startStr);
      const end = DateUtils.parseDate(endStr);
      
      if (start > end) {
        alert('Start date must be before end date');
        return;
      }

      const current = new Date(start);
      while (current <= end) {
        const dateStr = DateUtils.formatDate(current);
        const isWeekend = DateUtils.isWeekend(current);
        
        if (!state.config.weekendsCount && isWeekend) {
          current.setDate(current.getDate() + 1);
          continue;
        }

        const holidays = DateUtils.getHolidays(state.config.year);
        if (holidays[dateStr] && !state.config.holidaysCountAsPto) {
           current.setDate(current.getDate() + 1);
           continue;
        }

        state.events[dateStr] = { type, note };
        current.setDate(current.getDate() + 1);
      }
      this.saveData();
    },

    getStats() {
      let ptoUsed = 0;
      let cmeUsed = 0;
      
      Object.entries(state.events).forEach(([dateStr, event]) => {
        const date = DateUtils.parseDate(dateStr);
        if (date.getFullYear() !== state.config.year) return;
        
        // Check if weekend
        if (DateUtils.isWeekend(date) && !state.config.weekendsCount) return;

        if (event.type === 'PTO') ptoUsed++;
        if (event.type === 'CME') cmeUsed++;
      });

      return { ptoUsed, cmeUsed };
    },

    // --- Render Functions ---
    render() {
      const app = document.getElementById('app');
      app.innerHTML = '';
      
      app.appendChild(this.renderHeader());
      app.appendChild(this.renderStatsBar());
      
      const main = document.createElement('main');
      main.className = 'container mx-auto px-4 py-6';
      
      if (state.view === 'year') {
        main.appendChild(this.renderYearView());
      } else {
        main.appendChild(this.renderMonthView());
      }
      
      app.appendChild(main);

      if (state.showConfig) app.appendChild(this.renderConfigModal());
      if (state.showBulkAdd) app.appendChild(this.renderBulkAddModal());
    },

    renderHeader() {
      const header = document.createElement('header');
      header.className = 'bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm';
      header.innerHTML = `
        <div class="container mx-auto px-4 h-16 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <h1 class="text-xl font-bold text-slate-800 hidden md:flex items-center gap-2">
              PTO Planner 
              <button class="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-primary transition-colors" onclick="state.config.year--; App.saveData()">${Icons.chevronLeft}</button>
              <span class="text-slate-600 font-normal">${state.config.year}</span>
              <button class="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-primary transition-colors" onclick="state.config.year++; App.saveData()">${Icons.chevronRight}</button>
            </h1>
          </div>
          
          <div class="flex items-center gap-3">
            <!-- Mode Toggle -->
            <div class="flex bg-slate-100 p-1 rounded-lg mr-2">
              <button class="px-3 py-1.5 text-sm font-bold rounded-md transition-all flex items-center gap-2 ${state.interactionMode === 'PTO' ? 'bg-blue-500 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}" onclick="state.interactionMode = 'PTO'; App.render()">
                PTO
              </button>
              <button class="px-3 py-1.5 text-sm font-bold rounded-md transition-all flex items-center gap-2 ${state.interactionMode === 'CME' ? 'bg-violet-500 text-white shadow-sm' : 'text-slate-500 hover:text-slate-700'}" onclick="state.interactionMode = 'CME'; App.render()">
                CME
              </button>
            </div>

            <div class="flex bg-slate-100 p-1 rounded-lg">
              <button class="px-3 py-1.5 text-sm font-medium rounded-md transition-all ${state.view === 'year' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}" onclick="state.view = 'year'; App.render()">Year</button>
              <button class="px-3 py-1.5 text-sm font-medium rounded-md transition-all ${state.view === 'month' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500 hover:text-slate-700'}" onclick="state.view = 'month'; App.render()">Month</button>
            </div>
            
            <div class="h-6 w-px bg-slate-200 mx-1"></div>

            <button class="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors" onclick="state.showBulkAdd = true; App.render()" title="Add Date Range">
              ${Icons.plus}
            </button>
            <button class="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors" onclick="state.showConfig = true; App.render()" title="Settings">
              ${Icons.cog}
            </button>
            <button class="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors" onclick="App.exportData()" title="Export JSON">
              ${Icons.download}
            </button>
            <label class="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer" title="Import JSON">
              ${Icons.upload}
              <input type="file" class="hidden" accept=".json" onchange="App.importData(this.files[0])">
            </label>
          </div>
        </div>
      `;
      return header;
    },

    renderStatsBar() {
      const stats = this.getStats();
      const ptoRemaining = state.config.ptoAllowance - stats.ptoUsed;
      const cmeRemaining = state.config.cmeAllowance - stats.cmeUsed;
      
      const ptoColor = ptoRemaining < 0 ? 'text-red-600' : ptoRemaining < 3 ? 'text-orange-600' : 'text-slate-600';
      const ptoBg = ptoRemaining < 0 ? 'bg-red-50' : 'bg-white';

      const bar = document.createElement('div');
      bar.className = 'bg-white border-b border-slate-200 py-4';
      bar.innerHTML = `
        <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- PTO Stats -->
          <div class="flex items-center gap-4 p-3 rounded-xl border border-slate-100 shadow-sm ${ptoBg}">
            <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
              ${stats.ptoUsed}
            </div>
            <div>
              <div class="text-xs font-semibold text-slate-400 uppercase tracking-wider">PTO Days Used</div>
              <div class="text-sm font-medium ${ptoColor}">
                ${ptoRemaining} days remaining (of ${state.config.ptoAllowance})
              </div>
            </div>
          </div>

          <!-- CME Stats -->
          <div class="flex items-center gap-4 p-3 rounded-xl border border-slate-100 shadow-sm bg-white">
            <div class="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 font-bold text-lg">
              ${stats.cmeUsed}
            </div>
            <div>
              <div class="text-xs font-semibold text-slate-400 uppercase tracking-wider">CME Days Used</div>
              <div class="text-sm font-medium text-slate-600">
                ${cmeRemaining} days remaining (of ${state.config.cmeAllowance})
              </div>
            </div>
          </div>

          <!-- Next Off -->
          <div class="flex items-center gap-4 p-3 rounded-xl border border-slate-100 shadow-sm bg-white">
             <div class="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
              ${Icons.calendar}
            </div>
            <div>
              <div class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Next Time Off</div>
              <div class="text-sm font-medium text-slate-600">
                ${this.getNextTimeOff() || 'None scheduled'}
              </div>
            </div>
          </div>
        </div>
      `;
      return bar;
    },

    getNextTimeOff() {
      const today = new Date();
      const todayStr = DateUtils.formatDate(today);
      const dates = Object.keys(state.events).sort();
      const next = dates.find(d => d >= todayStr);
      if (!next) return null;
      
      const date = DateUtils.parseDate(next);
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) + ` (${state.events[next].type})`;
    },

    renderYearView() {
      const grid = document.createElement('div');
      grid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';
      
      for (let i = 0; i < 12; i++) {
        grid.appendChild(this.renderMonthCard(i));
      }
      return grid;
    },

    renderMonthCard(monthIndex) {
      const card = document.createElement('div');
      card.className = 'bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col';
      
      // Header
      const header = document.createElement('div');
      header.className = 'bg-slate-50 px-4 py-2 border-b border-slate-100 flex justify-between items-center cursor-pointer hover:bg-slate-100 transition-colors';
      header.onclick = () => { state.view = 'month'; state.currentMonth = monthIndex; App.render(); };
      header.innerHTML = `
        <h3 class="font-bold text-slate-700">${DateUtils.months[monthIndex]}</h3>
        <span class="text-xs text-slate-400 hover:text-primary">${Icons.chevronRight}</span>
      `;
      card.appendChild(header);

      // Grid
      const daysContainer = document.createElement('div');
      daysContainer.className = 'p-4 grid grid-cols-7 gap-1 text-center text-xs';
      
      // Weekday headers
      ['S','M','T','W','T','F','S'].forEach(d => {
        daysContainer.innerHTML += `<div class="text-slate-300 font-medium py-1">${d}</div>`;
      });

      const year = state.config.year;
      const firstDay = new Date(year, monthIndex, 1).getDay();
      const daysInMonth = DateUtils.getDaysInMonth(year, monthIndex);
      const holidays = DateUtils.getHolidays(year);

      // Empty slots
      for (let i = 0; i < firstDay; i++) {
        daysContainer.innerHTML += `<div></div>`;
      }

      // Days
      for (let d = 1; d <= daysInMonth; d++) {
        const date = new Date(year, monthIndex, d);
        const dateStr = DateUtils.formatDate(date);
        const isWeekend = DateUtils.isWeekend(date);
        const holidayName = holidays[dateStr];
        const event = state.events[dateStr];
        
        let bgClass = 'hover:bg-slate-100 text-slate-600';
        let textClass = '';
        
        if (holidayName) {
          bgClass = 'bg-red-50 text-red-600 font-medium';
        } else if (event) {
          if (event.type === 'PTO') bgClass = 'bg-blue-500 text-white shadow-sm';
          if (event.type === 'CME') bgClass = 'bg-violet-500 text-white shadow-sm';
        } else if (isWeekend) {
          bgClass = 'bg-slate-50 text-slate-400';
        }

        const dayEl = document.createElement('div');
        dayEl.className = `aspect-square flex items-center justify-center rounded-md cursor-pointer transition-all ${bgClass} day-cell relative group`;
        dayEl.textContent = d;
        dayEl.onclick = () => this.toggleEvent(dateStr);
        
        // Tooltip
        if (holidayName || event) {
          const tooltip = document.createElement('div');
          tooltip.className = 'absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 bg-slate-800 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-20';
          tooltip.textContent = holidayName || `${event.type}${event.note ? ': ' + event.note : ''}`;
          dayEl.appendChild(tooltip);
        }

        daysContainer.appendChild(dayEl);
      }

      card.appendChild(daysContainer);
      return card;
    },

    renderMonthView() {
      const container = document.createElement('div');
      
      // Navigation
      const nav = document.createElement('div');
      nav.className = 'flex items-center justify-between mb-6';
      nav.innerHTML = `
        <button class="p-2 hover:bg-white rounded-full transition-colors" onclick="state.currentMonth--; if(state.currentMonth<0) state.currentMonth=11; App.render()">
          ${Icons.chevronLeft}
        </button>
        <h2 class="text-2xl font-bold text-slate-800">${DateUtils.months[state.currentMonth]} ${state.config.year}</h2>
        <button class="p-2 hover:bg-white rounded-full transition-colors" onclick="state.currentMonth++; if(state.currentMonth>11) state.currentMonth=0; App.render()">
          ${Icons.chevronRight}
        </button>
      `;
      container.appendChild(nav);

      // Large Grid
      const grid = document.createElement('div');
      grid.className = 'bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden';
      
      // Headers
      const headerRow = document.createElement('div');
      headerRow.className = 'grid grid-cols-7 border-b border-slate-200 bg-slate-50';
      ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'].forEach(d => {
        headerRow.innerHTML += `<div class="py-3 text-center text-sm font-semibold text-slate-500">${d}</div>`;
      });
      grid.appendChild(headerRow);

      // Days
      const daysGrid = document.createElement('div');
      daysGrid.className = 'grid grid-cols-7 auto-rows-[minmax(100px,1fr)] bg-slate-200 gap-px border-b border-slate-200';
      
      const year = state.config.year;
      const month = state.currentMonth;
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = DateUtils.getDaysInMonth(year, month);
      const holidays = DateUtils.getHolidays(year);

      // Empty slots
      for (let i = 0; i < firstDay; i++) {
        daysGrid.innerHTML += `<div class="bg-slate-50/50"></div>`;
      }

      for (let d = 1; d <= daysInMonth; d++) {
        const date = new Date(year, month, d);
        const dateStr = DateUtils.formatDate(date);
        const isWeekend = DateUtils.isWeekend(date);
        const holidayName = holidays[dateStr];
        const event = state.events[dateStr];

        const cell = document.createElement('div');
        cell.className = `bg-white p-2 min-h-[120px] relative group hover:bg-slate-50 transition-colors cursor-pointer`;
        cell.onclick = (e) => {
          // Don't toggle if clicking input
          if (e.target.tagName === 'INPUT') return;
          this.toggleEvent(dateStr);
        };

        let content = `<div class="font-medium text-sm mb-1 ${isWeekend ? 'text-slate-400' : 'text-slate-700'}">${d}</div>`;
        
        if (holidayName) {
          content += `
            <div class="bg-red-50 text-red-700 text-xs p-1 rounded border border-red-100 mb-1 truncate" title="${holidayName}">
              ${holidayName}
            </div>
          `;
        }

        if (event) {
          const colorClass = event.type === 'PTO' ? 'bg-blue-100 text-blue-700 border-blue-200' : 'bg-violet-100 text-violet-700 border-violet-200';
          content += `
            <div class="text-xs p-1 rounded border ${colorClass} mb-1 group/event">
              <div class="flex justify-between items-center">
                <span class="font-bold">${event.type}</span>
                <button class="opacity-0 group-hover/event:opacity-100 hover:text-red-600" onclick="event.stopPropagation(); App.toggleEvent('${dateStr}', '${event.type}')">&times;</button>
              </div>
              <input type="text" 
                class="w-full bg-transparent border-none p-0 text-xs focus:ring-0 placeholder-slate-400/70" 
                placeholder="Add note..." 
                value="${event.note || ''}"
                onclick="event.stopPropagation()"
                onchange="state.events['${dateStr}'].note = this.value; App.saveData()"
              >
            </div>
          `;
        }

        cell.innerHTML = content;
        daysGrid.appendChild(cell);
      }

      grid.appendChild(daysGrid);
      container.appendChild(grid);
      return container;
    },

    renderBulkAddModal() {
      const backdrop = document.createElement('div');
      backdrop.className = 'fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 modal-backdrop';
      backdrop.onclick = (e) => { if(e.target === backdrop) { state.showBulkAdd = false; App.render(); }};

      const modal = document.createElement('div');
      modal.className = 'bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden modal-content';
      
      const today = DateUtils.formatDate(new Date());

      modal.innerHTML = `
        <div class="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <h3 class="font-bold text-lg text-slate-800">Add Date Range</h3>
          <button class="text-slate-400 hover:text-slate-600" onclick="state.showBulkAdd = false; App.render()">&times;</button>
        </div>
        <div class="p-6 space-y-4">
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Start Date</label>
            <input type="date" id="bulk-start" class="w-full rounded-lg border-slate-300 focus:ring-primary focus:border-primary" value="${today}">
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">End Date</label>
            <input type="date" id="bulk-end" class="w-full rounded-lg border-slate-300 focus:ring-primary focus:border-primary" value="${today}">
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Type</label>
            <select id="bulk-type" class="w-full rounded-lg border-slate-300 focus:ring-primary focus:border-primary">
              <option value="PTO">PTO (Vacation/Personal)</option>
              <option value="CME">CME (Education)</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-1">Note (Optional)</label>
            <input type="text" id="bulk-note" class="w-full rounded-lg border-slate-300 focus:ring-primary focus:border-primary" placeholder="e.g., Summer Vacation">
          </div>
        </div>
        <div class="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-2">
          <button class="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-medium transition-colors" onclick="state.showBulkAdd = false; App.render()">Cancel</button>
          <button class="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors" onclick="
            const start = document.getElementById('bulk-start').value;
            const end = document.getElementById('bulk-end').value;
            const type = document.getElementById('bulk-type').value;
            const note = document.getElementById('bulk-note').value;
            if(start && end) {
              App.addRange(start, end, type, note);
              state.showBulkAdd = false;
              App.render();
            }
          ">Add Range</button>
        </div>
      `;

      backdrop.appendChild(modal);
      return backdrop;
    },

    renderConfigModal() {
      const backdrop = document.createElement('div');
      backdrop.className = 'fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 modal-backdrop';
      backdrop.onclick = (e) => { if(e.target === backdrop) { state.showConfig = false; App.render(); }};

      const modal = document.createElement('div');
      modal.className = 'bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden modal-content';
      
      modal.innerHTML = `
        <div class="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <h3 class="font-bold text-lg text-slate-800">Configuration</h3>
          <button class="text-slate-400 hover:text-slate-600" onclick="state.showConfig = false; App.render()">&times;</button>
        </div>
        <div class="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          
          <!-- General Settings -->
          <div class="space-y-4">
            <h4 class="font-semibold text-sm text-slate-400 uppercase tracking-wider">General</h4>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">PTO Allowance</label>
                <input type="number" class="w-full rounded-lg border-slate-300 focus:ring-primary focus:border-primary" value="${state.config.ptoAllowance}" onchange="state.config.ptoAllowance = parseInt(this.value); App.saveData(false)">
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-1">CME Allowance</label>
                <input type="number" class="w-full rounded-lg border-slate-300 focus:ring-primary focus:border-primary" value="${state.config.cmeAllowance}" onchange="state.config.cmeAllowance = parseInt(this.value); App.saveData(false)">
              </div>
            </div>
            
            <div class="flex items-center gap-3">
               <input type="checkbox" id="weekends" class="rounded text-primary focus:ring-primary" ${state.config.weekendsCount ? 'checked' : ''} onchange="state.config.weekendsCount = this.checked; App.saveData(false)">
               <label for="weekends" class="text-sm text-slate-700">Weekends count as work days</label>
            </div>
          </div>

          <!-- Holidays -->
          <div class="space-y-4">
            <h4 class="font-semibold text-sm text-slate-400 uppercase tracking-wider">Observed Holidays</h4>
            <div class="grid grid-cols-2 gap-2">
              ${Object.entries(state.config.holidays).map(([key, val]) => `
                <label class="flex items-center gap-2 text-sm text-slate-600 cursor-pointer hover:bg-slate-50 p-1 rounded">
                  <input type="checkbox" class="rounded text-primary focus:ring-primary" ${val ? 'checked' : ''} onchange="state.config.holidays.${key} = this.checked; App.saveData(false)">
                  ${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </label>
              `).join('')}
            </div>
          </div>

        </div>
        <div class="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button class="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors" onclick="state.showConfig = false; App.render()">Done</button>
        </div>
      `;

      backdrop.appendChild(modal);
      return backdrop;
    }
  };

  // Initialize
  document.addEventListener('DOMContentLoaded', () => {
    App.init();
  });

// PWA Installation
let deferredPrompt = null;
function isRunningAsPWA() {
    return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
}
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (!localStorage.getItem('pwaInstallDismissed') && !isRunningAsPWA()) {
        document.getElementById('pwaInstallBanner').style.display = 'block';
    }
});
function installPWA() {
    if (!deferredPrompt) {
        alert('To install: tap the Share button in your browser, then "Add to Home Screen"');
        return;
    }
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            document.getElementById('pwaInstallBanner').style.display = 'none';
        }
        deferredPrompt = null;
    });
}
function dismissInstallBanner() {
    document.getElementById('pwaInstallBanner').style.display = 'none';
    localStorage.setItem('pwaInstallDismissed', 'true');
}
if (isRunningAsPWA()) {
    const banner = document.getElementById('pwaInstallBanner');
    if (banner) banner.style.display = 'none';
}
</script>

{%- include software-2-banner.html -%}
