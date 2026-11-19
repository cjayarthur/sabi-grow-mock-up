const appScript = `
<script>
  let currentTheme = 'light';
  let currentViewMode = 'grid';
  let currentScreenId = 2;
  let previousScreenId = 2;
  let currentZoom = 100;
  let currentFilter = 'all';
  let currentUnits = 'imperial';

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

  const sheetData = {
    alerts: {
      title: "Active Weather Alerts",
      html: '<div class="alert-box-urgent"><strong>Light Freeze Watch</strong><p style="font-size:12px; margin-top:4px;">Friday 03:30 AM (29°F). Pre-hydrate beds and secure row covers.</p><button class="btn-primary" style="margin-top:10px; padding:8px;" onclick="closeModalSheet(); navigateToScreen(7);">View Mitigation Protocol →</button></div>'
    },
    radar: {
      title: "Precipitation Radar",
      html: '<div style="background:var(--bg-elevated); padding:20px; border-radius:12px; text-align:center;"><div style="font-size:15px; font-weight:700; color:var(--accent-rain);">🌧️ Regional Storm Reflectivity (85km)</div><p style="font-size:12px; margin-top:6px; color:var(--text-secondary);">Approaching rain band: ~14mm (0.55 in) arriving Saturday afternoon.</p></div>'
    },
    pest: {
      title: "Log Field Pest Sighting",
      html: '<div style="display:flex; flex-direction:column; gap:10px;"><label class="input-label">Identified Pest / Disease</label><select class="input-field"><option>Crucifer Flea Beetle</option><option>Powdery Mildew Spores</option><option>Early Blight Lesions</option><option>Cabbage White Butterfly</option></select><button class="btn-primary" onclick="submitPestReport()">Submit Report</button></div>'
    },
    add_bed: {
      title: "Add Cultivation Plot / Bed",
      html: '<div style="display:flex; flex-direction:column; gap:10px;"><label class="input-label">Plot / Bed Name</label><input type="text" class="input-field" value="Bed 5 • Heirloom Cucurbits" /><label class="input-label">Microclimate Type</label><select class="input-field"><option>Raised Bed (Full Sun)</option><option>Inground Row (Terrace)</option><option>Polyhouse High Tunnel</option></select><button class="btn-primary" onclick="submitAddBed()">Save Bed</button></div>'
    },
    share_note: {
      title: "Share Regional Field Note",
      html: '<div style="display:flex; flex-direction:column; gap:10px;"><label class="input-label">Observation Details</label><textarea class="input-field" rows="3" placeholder="Report blooms, insect sightings, frost pockets..."></textarea><button class="btn-primary" onclick="submitShareNote()">Post Observation</button></div>'
    },
    pair_probe: {
      title: "Bluetooth Sensor Pairing",
      html: '<div style="text-align:center; padding:16px;"><div style="font-size:32px; margin-bottom:8px;">📡</div><div style="font-weight:700; font-size:14px;">Scanning for BLE 5.0 Soil Probes...</div><p style="font-size:12px; color:var(--text-secondary); margin:6px 0 14px;">Hold sensor pairing button for 3 seconds.</p><button class="btn-primary" onclick="submitPairProbe()">Simulate Pair</button></div>'
    },
    broadcast: {
      title: "Emergency Agronomic Broadcast",
      html: '<div style="display:flex; flex-direction:column; gap:10px;"><div style="font-size:12px; font-weight:700; color:var(--accent-urgent);">Target: Zone 9a-10b (1,420 Connected Stations)</div><textarea class="input-field" rows="3">Freeze Watch: Friday 03:30 AM drop to 29°F. Apply floating fleece covers immediately.</textarea><button class="btn-primary" style="background:var(--accent-urgent);" onclick="submitBroadcast()">Broadcast Alert</button></div>'
    }
  };

  function submitPestReport() {
    closeModalSheet();
    showToast("✓ Sighting logged and broadcasted");
  }

  function submitAddBed() {
    closeModalSheet();
    showToast("✓ Bed 5 created successfully");
  }

  function submitShareNote() {
    closeModalSheet();
    showToast("✓ Field note shared with network");
  }

  function submitPairProbe() {
    closeModalSheet();
    showToast("✓ Soil Probe #02 paired successfully");
  }

  function submitBroadcast() {
    closeModalSheet();
    showToast("📢 Freeze advisory broadcasted to 1,420 stations");
  }

  function openModalSheet(type) {
    const data = sheetData[type] || sheetData.alerts;
    const sheet = document.getElementById("app-modal-sheet");
    const titleEl = document.getElementById("modal-sheet-title");
    const bodyEl = document.getElementById("modal-sheet-body");
    if (sheet && titleEl && bodyEl) {
      titleEl.textContent = data.title;
      bodyEl.innerHTML = data.html;
      sheet.classList.add("active");
    }
  }

  function closeModalSheet() {
    const sheet = document.getElementById("app-modal-sheet");
    if (sheet) sheet.classList.remove("active");
  }

  function setTheme(theme) {
    currentTheme = theme;
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }

    const topBtn = document.getElementById("top-theme-btn");
    const topText = document.getElementById("top-theme-text");
    if (topText) {
      topText.textContent = theme === "dark" ? "Dark: Evening Loam & Moss" : "Light: Warm Harvest & Soil";
    }

    document.querySelectorAll("#s11-btn-light, #s11-btn-dark").forEach(btn => {
      const isDark = btn.id === "s11-btn-dark";
      if ((isDark && theme === "dark") || (!isDark && theme === "light")) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    document.querySelectorAll("#screen11-theme-status").forEach(el => {
      el.textContent = theme === "dark" ? "Dark Mode" : "Light Mode";
    });
  }

  function toggleGlobalTheme() {
    setTheme(currentTheme === "light" ? "dark" : "light");
    showToast(currentTheme === "dark" ? "🌙 Dark Mode Activated" : "☀️ Light Mode Activated");
  }

  function setViewMode(mode) {
    currentViewMode = mode;
    const gridBtn = document.getElementById("btn-mode-grid");
    const protoBtn = document.getElementById("btn-mode-proto");
    const gridView = document.getElementById("grid-view-container");
    const protoView = document.getElementById("proto-view-container");
    const subBar = document.getElementById("sub-filter-bar");

    if (mode === "grid") {
      gridBtn.classList.add("active");
      protoBtn.classList.remove("active");
      gridView.classList.remove("hidden");
      protoView.classList.add("hidden");
      if (subBar) subBar.classList.remove("hidden");
    } else {
      protoBtn.classList.add("active");
      gridBtn.classList.remove("active");
      gridView.classList.add("hidden");
      protoView.classList.remove("hidden");
      if (subBar) subBar.classList.add("hidden");
      renderProtoScreen(currentScreenId, "tab");
    }
  }

  function navigateToScreen(screenId, transType) {
    previousScreenId = currentScreenId;
    currentScreenId = screenId;

    if (currentViewMode !== "proto") {
      setViewMode("proto");
    }

    if (!transType) {
      transType = screenId > previousScreenId ? "forward" : "back";
    }

    renderProtoScreen(screenId, transType);
  }

  function renderProtoScreen(screenId, transType) {
    if (!transType) transType = "tab";
    const select = document.getElementById("proto-screen-select");
    if (select) select.value = screenId;

    const counter = document.getElementById("proto-screen-counter");
    const screenMeta = screensData.find(s => s.id === screenId);
    if (counter && screenMeta) {
      counter.textContent = "Screen " + String(screenId).padStart(2, "0") + " of 12 • " + screenMeta.title;
    }

    // Toggle active screen with animation
    document.querySelectorAll(".proto-screen-content").forEach(el => {
      const elId = parseInt(el.getAttribute("data-screen-id"));
      if (elId === screenId) {
        el.classList.remove("hidden");
        el.style.display = "flex";

        el.classList.remove("anim-slide-right", "anim-slide-left", "anim-tab-fade");
        void el.offsetWidth;

        if (transType === "forward") {
          el.classList.add("anim-slide-right");
        } else if (transType === "back") {
          el.classList.add("anim-slide-left");
        } else {
          el.classList.add("anim-tab-fade");
        }
      } else {
        el.classList.add("hidden");
        el.style.display = "none";
      }
    });

    // Update active tab inside the active screen
    const activeScreenEl = document.querySelector('.proto-screen-content[data-screen-id="' + screenId + '"]');
    if (activeScreenEl) {
      const tabMap = { 2: "today", 3: "weather", 8: "plots", 7: "alerts", 11: "profile" };
      const currentTab = tabMap[screenId];
      if (currentTab) {
        activeScreenEl.querySelectorAll(".tab-item").forEach(tab => {
          tab.classList.remove("active");
          if (tab.getAttribute("data-tab") === currentTab) {
            tab.classList.add("active", "tab-popped");
            setTimeout(() => tab.classList.remove("tab-popped"), 400);
          }
        });
      }
      const viewport = activeScreenEl.querySelector(".mobile-viewport");
      if (viewport) viewport.scrollTop = 0;
    }

    if (screenId === 11) {
      setTheme(currentTheme);
    }
  }

  function stepProtoScreen(dir) {
    let next = currentScreenId + dir;
    if (next < 1) next = 12;
    if (next > 12) next = 1;
    navigateToScreen(next, dir > 0 ? "forward" : "back");
  }

  function setZoom(delta) {
    currentZoom = delta === 0 ? 100 : Math.min(130, Math.max(70, currentZoom + delta));
    const canvas = document.getElementById("grid-canvas");
    const label = document.getElementById("zoom-label");
    if (canvas) canvas.style.transform = "scale(" + (currentZoom / 100) + ")";
    if (label) label.textContent = currentZoom + "%";
  }

  function setFilter(persona, btn) {
    currentFilter = persona;
    document.querySelectorAll(".filter-pill").forEach(b => b.classList.remove("active"));
    if (btn) btn.classList.add("active");

    document.querySelectorAll(".screen-column").forEach(col => {
      const p = col.getAttribute("data-persona") || "";
      col.style.display = (persona === "all" || p.includes(persona)) ? "flex" : "none";
    });
  }

  function toggleNativeMode() {
    document.body.classList.toggle("native-app-mode");
    if (document.body.classList.contains("native-app-mode")) {
      showToast("📱 Native App Mode (Edge-to-Edge)");
    }
  }

  function toggleChecklist(el) {
    el.classList.toggle("checked");
    el.classList.add("just-checked");
    setTimeout(() => el.classList.remove("just-checked"), 400);

    const isChecked = el.classList.contains("checked");
    const label = el.querySelector(".check-text") ? el.querySelector(".check-text").textContent : "Task";
    showToast(isChecked ? "✓ Completed: " + label.slice(0, 26) + "..." : "○ Restored: " + label.slice(0, 26));
  }

  function selectHour(el, tempF, label) {
    const parent = el.closest(".agro-strip");
    if (parent) {
      parent.querySelectorAll(".strip-item").forEach(i => i.classList.remove("active"));
      el.classList.add("active");
    }
    const tempHero = document.getElementById("hero-temp-display");
    if (tempHero) {
      const displayTemp = currentUnits === "metric" ? Math.round((tempF - 32) * 5/9) + "°C" : tempF + "°F";
      tempHero.innerHTML = displayTemp;
    }
    showToast(label + " Forecast: " + (currentUnits === "metric" ? Math.round((tempF - 32) * 5/9) + "°C" : tempF + "°F"));
  }

  function switchForecastSubTab(tabName, btn) {
    const parent = btn.closest(".segmented-ctl");
    if (parent) {
      parent.querySelectorAll(".seg-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    }

    const container7Day = document.getElementById("forecast-7day-list");
    const containerHourly = document.getElementById("forecast-hourly-chart");
    const containerSoil = document.getElementById("forecast-soil-depth");

    if (container7Day) container7Day.classList.add("hidden");
    if (containerHourly) containerHourly.classList.add("hidden");
    if (containerSoil) containerSoil.classList.add("hidden");

    if (tabName === "7day" && container7Day) {
      container7Day.classList.remove("hidden");
      container7Day.classList.add("anim-tab-fade");
    } else if (tabName === "hourly" && containerHourly) {
      containerHourly.classList.remove("hidden");
      containerHourly.classList.add("anim-tab-fade");
    } else if (tabName === "soil" && containerSoil) {
      containerSoil.classList.remove("hidden");
      containerSoil.classList.add("anim-tab-fade");
    }
  }

  function filterCrops(category, btn) {
    const parent = btn.parentElement;
    if (parent) {
      parent.querySelectorAll(".filter-pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    }

    document.querySelectorAll(".crop-card-item").forEach(card => {
      const cat = card.getAttribute("data-crop-type") || "";
      if (category === "all" || cat.includes(category)) {
        card.style.display = "flex";
        card.classList.add("anim-tab-fade");
      } else {
        card.style.display = "none";
      }
    });
  }

  function setUnits(unitType) {
    currentUnits = unitType;
    document.querySelectorAll("[data-unit-f]").forEach(el => {
      const f = parseFloat(el.getAttribute("data-unit-f"));
      el.textContent = unitType === "metric" ? (Math.round((f - 32) * 5 / 9) + "°C") : (f + "°F");
    });

    document.querySelectorAll("[data-unit-toggle]").forEach(b => {
      b.classList.toggle("active", b.getAttribute("data-unit-toggle") === unitType);
    });

    showToast("Measurement units: " + (unitType === "metric" ? "Metric (°C / mm)" : "Imperial (°F / in)"));
  }

  function showToast(msg) {
    const toast = document.getElementById("app-toast");
    const toastMsg = document.getElementById("toast-msg");
    if (toast && toastMsg) {
      toastMsg.textContent = msg;
      toast.classList.add("active");
      clearTimeout(window._toastTimeout);
      window._toastTimeout = setTimeout(() => toast.classList.remove("active"), 2400);
    }
  }

  window.addEventListener("DOMContentLoaded", () => {
    setTheme("light");
    if (window.innerWidth <= 768) {
      setViewMode("proto");
    } else {
      setViewMode("grid");
    }
  });
</script>
`;
module.exports = appScript;