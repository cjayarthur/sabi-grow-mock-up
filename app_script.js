const appScript = `
<script>
  // State management
  let currentTheme = 'light';
  let currentViewMode = 'grid'; // 'grid' | 'proto'
  let currentScreenId = 2; // Default to Screen 2 (Today's Dashboard)
  let currentZoom = 100;
  let currentFilter = 'all';

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

    // Update Top Presentation Bar Toggle Button
    const topBtn = document.getElementById('top-theme-btn');
    const topText = document.getElementById('top-theme-text');
    if (topText) {
      topText.textContent = theme === 'dark' ? 'Dark: Evening Loam & Moss' : 'Light: Warm Harvest & Soil';
    }

    // Update Screen 11 Toggles (if present in DOM)
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

    // Sync all duplicated instances across grid and prototype views
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
      renderProtoScreen(currentScreenId);
    }
  }

  // Prototype Screen Navigation
  function navigateToScreen(screenId) {
    currentScreenId = screenId;
    if (currentViewMode !== 'proto') {
      setViewMode('proto');
    }
    renderProtoScreen(screenId);
  }

  function renderProtoScreen(screenId) {
    currentScreenId = screenId;
    const select = document.getElementById('proto-screen-select');
    if (select) select.value = screenId;

    const counter = document.getElementById('proto-screen-counter');
    const screenMeta = screensData.find(s => s.id === screenId);
    if (counter && screenMeta) {
      counter.textContent = "Screen " + screenId + " of 12 • " + screenMeta.title;
    }

    // Hide all prototype screens and show active
    document.querySelectorAll('.proto-screen-content').forEach(el => {
      if (parseInt(el.getAttribute('data-screen-id')) === screenId) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    });

    // Make sure theme toggle in screen 11 is synced
    if (screenId === 11) {
      setTheme(currentTheme);
    }
  }

  function stepProtoScreen(dir) {
    let next = currentScreenId + dir;
    if (next < 1) next = 12;
    if (next > 12) next = 1;
    renderProtoScreen(next);
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

  // Interactive Checklist Toggler
  function toggleChecklist(el) {
    el.classList.toggle('checked');
    const box = el.querySelector('.check-box');
    if (box) {
      if (el.classList.contains('checked')) {
        box.style.color = 'var(--text-on-brand)';
      } else {
        box.style.color = 'transparent';
      }
    }
  }

  // Initialize on Load
  window.addEventListener('DOMContentLoaded', () => {
    setTheme('light');
    setViewMode('grid');
  });
</script>
`;

module.exports = appScript;
