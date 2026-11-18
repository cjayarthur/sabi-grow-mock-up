const appScript = `
<script>
  // State management
  let currentTheme = 'light';
  let currentViewMode = 'grid'; // 'grid' | 'proto'
  let currentScreenId = 2; // Default to Screen 2
  let previousScreenId = 2;
  let currentZoom = 100;
  let currentFilter = 'all';
  let currentUnits = 'imperial'; // 'imperial' | 'metric'

  const screensData = [
    { id: 1, title: "Onboarding & Microclimate Setup", persona: "home market", role: "Primary: Home & Market Growers" },
    { id: 2, title: "Today's Sabi Grow Dashboard", persona: "home market farmer", role: "Primary: Daily Operations" },
    { id: 3, title: "7-Day & Hourly Micro-Forecast", persona: "market farmer", role: "Secondary: Experienced Farmers" },
    { id: 4, title: "Smart Irrigation & Rain Advisor", persona: "home market farmer", role: "Primary: Resource Conservation" },
    { id: 5, title: "Biological Pressure Radar", persona: "home market farmer", role: "Primary: Pest & Fungal Health" },
    { id: 6, title: "Planting & Sowing Calendar", persona: "home market", role: "Primary: Home & Market Growers" },
    { id: 7, title: "Frost & Extreme Weather Alert Hub", persona: "home market farmer", role: "Critical: All Growers" },
    { id: 8, title: "My Plots & Microzones Tracker", persona: "home market farmer", role: "Primary: Spatial Bed Management" },
    { id: 9, title: "Harvest & Market Day Planner", persona: "home market", role: "Primary: Market Growers & Harvesters" },
    { id: 10, title: "Community Field Notes & Phenology", persona: "home market", role: "Primary: Regional Knowledge Sharing" },
    { id: 11, title: "Profile & Settings", persona: "home market farmer admin", role: "All Personas: Personalization" },
    { id: 12, title: "Admin Agronomic Console", persona: "admin", role: "Support Role: Authorised Admin" }
  ];

  // Theme Switching
  function setTheme(theme) {
    currentTheme = theme;
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }

    const topBtn = document.getElementById('top-theme-btn');
    const topText = document.getElementById('top-theme-text');
    if (topText) {
      topText.textContent = theme === 'dark' ? 'Dark: Evening Loam & Moss' : 'Light: Warm Harvest & Soil';
    }

    const s11Light = document.getElementById('s11-btn-light');
    const s11Dark = document.getElementById('s11-btn-dark');
    const s11Status = document.getElementById('screen11-theme-status');
    if (s11Light && s11Dark) {
      if (theme === 'dark') {
        s11Light.classList.remove('active');
        s11Dark.classList.add('active');
        if (s11Status) s11Status.textContent = 'Dark Mode';
      } else {
        s11Dark.classList.remove('active');
        s11Light.classList.add('active');
        if (s11Status) s11Status.textContent = 'Light Mode';
      }
    }

    document.querySelectorAll('[data-sync-theme]').forEach(el => {
      const mode = el.getAttribute('data-sync-theme');
      if (mode === theme) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  }

  function toggleGlobalTheme() {
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
    showToast(currentTheme === 'dark' ? '🌙 Dark Mode Activated' : '☀️ Light Mode Activated');
  }

  // View Mode Switching
  function setViewMode(mode) {
    currentViewMode = mode;
    const gridBtn = document.getElementById('btn-mode-grid');
    const protoBtn = document.getElementById('btn-mode-proto');
    const gridView = document.getElementById('grid-view-container');
    const protoView = document.getElementById('proto-view-container');
    const subBar = document.getElementById('sub-filter-bar');

    if (mode === 'grid') {
      gridBtn.classList.add('active');
      protoBtn.classList.remove('active');
      gridView.classList.remove('hidden');
      protoView.classList.add('hidden');
      if (subBar) subBar.classList.remove('hidden');
    } else {
      protoBtn.classList.add('active');
      gridBtn.classList.remove('active');
      gridView.classList.add('hidden');
      protoView.classList.remove('hidden');
      if (subBar) subBar.classList.add('hidden');
      renderProtoScreen(currentScreenId, 'tab');
    }
  }

  // Prototype Screen Navigation with Directional Transition
  function navigateToScreen(screenId, transType = null) {
    previousScreenId = currentScreenId;
    currentScreenId = screenId;

    if (currentViewMode !== 'proto') {
      setViewMode('proto');
    }

    // Determine animation type if not explicitly set
    if (!transType) {
      if (screenId > previousScreenId) {
        transType = 'forward';
      } else if (screenId < previousScreenId) {
        transType = 'back';
      } else {
        transType = 'tab';
      }
    }

    renderProtoScreen(screenId, transType);
  }

  function renderProtoScreen(screenId, transType = 'tab') {
    const select = document.getElementById('proto-screen-select');
    if (select) select.value = screenId;

    const counter = document.getElementById('proto-screen-counter');
    const screenMeta = screensData.find(s => s.id === screenId);
    if (counter && screenMeta) {
      counter.textContent = "Screen " + String(screenId).padStart(2, '0') + " of 12 • " + screenMeta.title;
    }

    // Hide all prototype screens and apply transition to target
    document.querySelectorAll('.proto-screen-content').forEach(el => {
      const elId = parseInt(el.getAttribute('data-screen-id'));
      if (elId === screenId) {
        el.classList.remove('hidden');

        // Apply directional animation class
        el.classList.remove('anim-slide-right', 'anim-slide-left', 'anim-tab-fade');
        void el.offsetWidth; // Force CSS reflow

        if (transType === 'forward') {
          el.classList.add('anim-slide-right');
        } else if (transType === 'back') {
          el.classList.add('anim-slide-left');
        } else {
          el.classList.add('anim-tab-fade');
        }
      } else {
        el.classList.add('hidden');
      }
    });

    // Update active state in bottom tabs of the active screen
    const activeScreenEl = document.querySelector('.proto-screen-content[data-screen-id="' + screenId + '"]');
    if (activeScreenEl) {
      const tabMap = { 2: 'today', 3: 'weather', 8: 'plots', 7: 'alerts', 11: 'profile' };
      const currentTab = tabMap[screenId];
      if (currentTab) {
        activeScreenEl.querySelectorAll('.tab-item').forEach(tab => {
          tab.classList.remove('active');
          if (tab.getAttribute('data-tab') === currentTab) {
            tab.classList.add('active', 'tab-popped');
            setTimeout(() => tab.classList.remove('tab-popped'), 400);
          }
        });
      }
    }

    // Scroll viewport to top smoothly
    const viewport = activeScreenEl ? activeScreenEl.querySelector('.mobile-viewport') : null;
    if (viewport) viewport.scrollTop = 0;

    // Theme sync for Screen 11
    if (screenId === 11) {
      setTheme(currentTheme);
    }
  }

  function stepProtoScreen(dir) {
    let next = currentScreenId + dir;
    if (next < 1) next = 12;
    if (next > 12) next = 1;
    navigateToScreen(next, dir > 0 ? 'forward' : 'back');
  }

  // Zoom Controls
  function setZoom(delta) {
    if (delta === 0) {
      currentZoom = 100;
    } else {
      currentZoom = Math.min(130, Math.max(70, currentZoom + delta));
    }
    const canvas = document.getElementById('grid-canvas');
    const label = document.getElementById('zoom-label');
    if (canvas) canvas.style.transform = "scale(" + (currentZoom / 100) + ")";
    if (label) label.textContent = currentZoom + "%";
  }

  // Persona Filtering in Grid Mode
  function setFilter(persona, btn) {
    currentFilter = persona;
    document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');

    document.querySelectorAll('.screen-column').forEach(col => {
      const p = col.getAttribute('data-persona') || '';
      if (persona === 'all' || p.includes(persona)) {
        col.style.display = 'flex';
        col.style.opacity = '1';
      } else {
        col.style.display = 'none';
      }
    });
  }

  // Native Fullscreen Mode
  function toggleNativeMode() {
    document.body.classList.toggle('native-app-mode');
    if (document.body.classList.contains('native-app-mode')) {
      showToast('📱 Native App Mode (Edge-to-Edge)');
    }
  }

  // Checklist Item Tap Physics
  function toggleChecklist(el) {
    el.classList.toggle('checked');
    el.classList.add('just-checked');
    setTimeout(() => el.classList.remove('just-checked'), 400);

    const isChecked = el.classList.contains('checked');
    const label = el.querySelector('.check-text') ? el.querySelector('.check-text').textContent : 'Task';
    showToast(isChecked ? '✓ Completed: ' + label.slice(0, 26) + '...' : '○ Restored: ' + label.slice(0, 26));
  }

  // Interactive Hourly Weather Strip
  function selectHour(el, tempF, label) {
    const parent = el.closest('.agro-strip');
    if (parent) {
      parent.querySelectorAll('.strip-item').forEach(i => i.classList.remove('active'));
      el.classList.add('active');
    }
    const tempHero = document.getElementById('hero-temp-display');
    if (tempHero) {
      const displayTemp = currentUnits === 'metric' ? Math.round((tempF - 32) * 5/9) + '°C' : tempF + '°F';
      tempHero.innerHTML = displayTemp;
    }
    showToast(label + ' Forecast: ' + (currentUnits === 'metric' ? Math.round((tempF - 32) * 5/9) + '°C' : tempF + '°F'));
  }

  // Screen 3: Interactive Forecast Tab Switcher
  function switchForecastSubTab(tabName, btn) {
    const parent = btn.closest('.segmented-ctl');
    if (parent) {
      parent.querySelectorAll('.seg-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }

    const container7Day = document.getElementById('forecast-7day-list');
    const containerHourly = document.getElementById('forecast-hourly-chart');
    const containerSoil = document.getElementById('forecast-soil-depth');

    if (container7Day) container7Day.classList.add('hidden');
    if (containerHourly) containerHourly.classList.add('hidden');
    if (containerSoil) containerSoil.classList.add('hidden');

    if (tabName === '7day' && container7Day) {
      container7Day.classList.remove('hidden');
      container7Day.classList.add('anim-tab-fade');
    } else if (tabName === 'hourly' && containerHourly) {
      containerHourly.classList.remove('hidden');
      containerHourly.classList.add('anim-tab-fade');
    } else if (tabName === 'soil' && containerSoil) {
      containerSoil.classList.remove('hidden');
      containerSoil.classList.add('anim-tab-fade');
    }
  }

  // Screen 6: Interactive Crop Filter Pills
  function filterCrops(category, btn) {
    const parent = btn.parentElement;
    if (parent) {
      parent.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }

    document.querySelectorAll('.crop-card-item').forEach(card => {
      const cat = card.getAttribute('data-crop-type') || '';
      if (category === 'all' || cat.includes(category)) {
        card.style.display = 'flex';
        card.classList.add('anim-tab-fade');
      } else {
        card.style.display = 'none';
      }
    });
  }

  // Unit Converter (°F ↔ °C, in ↔ mm)
  function setUnits(unitType) {
    currentUnits = unitType;
    document.querySelectorAll('[data-unit-f]').forEach(el => {
      const f = parseFloat(el.getAttribute('data-unit-f'));
      if (unitType === 'metric') {
        const c = Math.round((f - 32) * 5 / 9);
        el.textContent = c + '°C';
      } else {
        el.textContent = f + '°F';
      }
    });

    document.querySelectorAll('[data-unit-toggle]').forEach(b => {
      b.classList.remove('active');
      if (b.getAttribute('data-unit-toggle') === unitType) b.classList.add('active');
    });

    showToast('Measurement units set to ' + (unitType === 'metric' ? 'Metric (°C / mm)' : 'Imperial (°F / in)'));
  }

  // Modal Sheet & Toasts
  function openSheet(title, htmlContent) {
    const sheet = document.getElementById('app-modal-sheet');
    const titleEl = document.getElementById('modal-sheet-title');
    const bodyEl = document.getElementById('modal-sheet-body');
    if (sheet && titleEl && bodyEl) {
      titleEl.textContent = title;
      bodyEl.innerHTML = htmlContent;
      sheet.classList.add('active');
    }
  }

  function closeSheet() {
    const sheet = document.getElementById('app-modal-sheet');
    if (sheet) sheet.classList.remove('active');
  }

  function showToast(msg) {
    const toast = document.getElementById('app-toast');
    const toastMsg = document.getElementById('toast-msg');
    if (toast && toastMsg) {
      toastMsg.textContent = msg;
      toast.classList.add('active');
      clearTimeout(window._toastTimeout);
      window._toastTimeout = setTimeout(() => {
        toast.classList.remove('active');
      }, 2400);
    }
  }

  // Auto-detect mobile devices on load
  window.addEventListener('DOMContentLoaded', () => {
    setTheme('light');
    if (window.innerWidth <= 768) {
      setViewMode('proto');
    } else {
      setViewMode('grid');
    }
  });
</script>
`;
module.exports = appScript;