const fs = require('fs');
const path = require('path');
const icons = require('./icons');
const styles = require('./styles');
const screens = require('./screens');
const appScript = require('./app_script');

function buildHtml() {
  const artifactDir = '/Users/jayarthur/.gemini/antigravity/brain/a5e38e56-db86-41f9-9988-9a875f805977';
  const scratchDir = '/Users/jayarthur/.gemini/antigravity/scratch/farmcast-mockup';

  // Ensure directories exist
  if (!fs.existsSync(artifactDir)) {
    fs.mkdirSync(artifactDir, { recursive: true });
  }

  // Render Grid Columns
  const gridColumnsHtml = screens.map((screen, idx) => {
    const num = String(screen.id).padStart(2, '0');
    // Map persona for filter
    let personaFilter = "home market";
    if (screen.id === 3 || screen.id === 7 || screen.id === 8) personaFilter = "market farmer";
    if (screen.id === 12) personaFilter = "admin";

    return `
      <div class="screen-column" data-persona="${personaFilter}">
        <div class="screen-meta-header">
          <div class="screen-meta-info">
            <span class="screen-number">Screen ${num}</span>
            <span class="screen-title">${screen.title}</span>
            <span style="font-size:11px; color:var(--text-secondary);">${screen.persona}</span>
          </div>
          <button class="screen-meta-btn" onclick="navigateToScreen(${screen.id})" title="Open screen in interactive phone frame">
            ${icons.phone('w-3.5 h-3.5')} View in Frame
          </button>
        </div>
        <div class="mobile-frame" id="grid-frame-${screen.id}">
          ${screen.html}
        </div>
      </div>
    `;
  }).join('\n');

  // Render Prototype Screens
  const protoScreensHtml = screens.map((screen) => {
    const isDefault = screen.id === 2;
    return `
      <div class="proto-screen-content ${isDefault ? '' : 'hidden'}" data-screen-id="${screen.id}" style="height:100%; display:flex; flex-direction:column;">
        ${screen.html}
      </div>
    `;
  }).join('\n');

  // Screen Options for Dropdown
  const screenOptions = screens.map(s => {
    return `<option value="${s.id}">${String(s.id).padStart(2, '0')} • ${s.title}</option>`;
  }).join('\n');

  const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FarmCast UI System — Figma Mobile Showcase</title>
  <style>
    ${styles}
  </style>
</head>
<body>

  <!-- Sleek Presentation Top Bar -->
  <header class="pres-bar">
    <div class="pres-brand">
      <div class="pres-logo-icon">
        ${icons.sprout('w-5 h-5')}
      </div>
      <div class="pres-title-wrap">
        <h1>
          <span>FarmCast</span>
          <span class="badge-tag">Design System</span>
        </h1>
        <p>Weather-Based Small-Scale Grower & Garden Decision-Support • 390×844px Mobile Viewport</p>
      </div>
    </div>

    <!-- Center Mode Switcher -->
    <div class="pres-controls">
      <div class="segmented-ctl" aria-label="View Mode Switcher">
        <button class="seg-btn active" id="btn-mode-grid" onclick="setViewMode('grid')">
          ${icons.layoutGrid('w-4 h-4')}
          <span>All Screens Grid (12)</span>
        </button>
        <button class="seg-btn" id="btn-mode-proto" onclick="setViewMode('proto')">
          ${icons.phone('w-4 h-4')}
          <span>Interactive Prototype</span>
        </button>
      </div>

      <!-- Global Theme Switcher (Synced across root & Screen 11) -->
      <button class="theme-toggle-btn" id="top-theme-btn" onclick="toggleGlobalTheme()" title="Toggle Theme (Light / Dark)">
        <span class="theme-badge-dot"></span>
        <span id="top-theme-text">Light: Warm Harvest & Soil</span>
      </button>
    </div>
  </header>

  <!-- Sub Filter & Canvas Controls (Visible in Grid Mode) -->
  <div class="sub-bar" id="sub-filter-bar">
    <div class="filter-group">
      <span style="font-size:12px; font-weight:700; color:var(--text-secondary); margin-right:4px;">Filter User Roles:</span>
      <button class="filter-pill active" onclick="setFilter('all', this)">All 12 Screens</button>
      <button class="filter-pill" onclick="setFilter('home', this)">🌱 Home Gardeners (8)</button>
      <button class="filter-pill" onclick="setFilter('market', this)">🧺 Market Growers (9)</button>
      <button class="filter-pill" onclick="setFilter('farmer', this)">🚜 Experienced Farmers (5)</button>
      <button class="filter-pill" onclick="setFilter('admin', this)">🛡️ Support Admin (1)</button>
    </div>

    <div class="zoom-group">
      <span>Zoom:</span>
      <button class="zoom-btn" onclick="setZoom(-10)" title="Zoom Out">-</button>
      <span id="zoom-label" style="font-weight:600; min-width:38px; text-align:center;">100%</span>
      <button class="zoom-btn" onclick="setZoom(10)" title="Zoom In">+</button>
      <button class="zoom-btn" onclick="setZoom(0)" style="width:auto; padding:0 8px; font-size:11px;" title="Reset Zoom">Fit</button>
    </div>
  </div>

  <!-- VIEW 1: All Screens Grid View -->
  <main id="grid-view-container" class="canvas-container">
    <div style="background:var(--bg-card); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:16px 20px; margin-bottom:32px; display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:16px;">
      <div style="display:flex; flex-direction:column; gap:4px;">
        <div style="font-size:15px; font-weight:800; color:var(--text-primary); display:flex; align-items:center; gap:8px;">
          <span>FarmCast 12-Screen Functional Architecture</span>
          <span class="badge-tag" style="background:var(--tint-brand-10); color:var(--brand-primary);">Figma 390×844px Standard</span>
        </div>
        <p style="font-size:13px; color:var(--text-secondary); max-width:900px;">
          Complete agronomic workflow covering hyperlocal microclimate setup, daily grower decisions, smart irrigation postponement, biological pathogen forecasting, freeze mitigation checklists, plot mapping, market stall weather resilience, and staff agronomic administration.
        </p>
      </div>

      <div style="display:flex; gap:12px; align-items:center;">
        <div style="text-align:right;">
          <div style="font-size:11px; font-weight:700; color:var(--text-secondary); text-transform:uppercase;">Theme System</div>
          <div style="font-size:12px; font-weight:600; color:var(--brand-primary);">100% Tokenized CSS Custom Properties</div>
        </div>
        <button class="btn-primary" style="width:auto; padding:8px 16px; font-size:12px;" onclick="setViewMode('proto')">
          ${icons.phone('w-4 h-4')} Launch Interactive Phone Frame
        </button>
      </div>
    </div>

    <div class="screens-grid" id="grid-canvas">
      ${gridColumnsHtml}
    </div>
  </main>

  <!-- VIEW 2: Interactive Mobile Prototype View -->
  <main id="proto-view-container" class="proto-view-container hidden">
    <!-- Top Interactive Phone Navigator -->
    <div class="proto-nav-bar">
      <button class="proto-nav-btn" onclick="stepProtoScreen(-1)">
        ${icons.chevronLeft('w-4 h-4')}
        <span>Prev</span>
      </button>

      <div style="display:flex; align-items:center; gap:10px;">
        <label for="proto-screen-select" style="font-size:12px; font-weight:700; color:var(--text-secondary);">Screen:</label>
        <select id="proto-screen-select" class="proto-nav-select" onchange="renderProtoScreen(parseInt(this.value))">
          ${screenOptions}
        </select>
      </div>

      <button class="proto-nav-btn" onclick="stepProtoScreen(1)">
        <span>Next</span>
        ${icons.chevronRight('w-4 h-4')}
      </button>
    </div>

    <!-- Active Screen Metadata Card -->
    <div id="proto-screen-counter" style="font-size:13px; font-weight:700; color:var(--brand-primary); background:var(--tint-brand-10); border:1px solid var(--tint-brand-20); padding:6px 16px; border-radius:var(--radius-full);">
      Screen 02 of 12 • Today's FarmCast Dashboard
    </div>

    <!-- Realistic iPhone 15 Pro Frame Container (390x844px) -->
    <div class="mobile-frame" id="interactive-phone-frame">
      ${protoScreensHtml}
    </div>

    <div style="display:flex; align-items:center; gap:12px; font-size:12px; color:var(--text-secondary);">
      <span>💡 <strong>Tip:</strong> Tap bottom navigation tabs, task checkboxes, or Screen 11 theme toggles inside the phone.</span>
    </div>
  </main>

  ${appScript}
</body>
</html>`;

  // Write to scratch directory
  const scratchFile = path.join(scratchDir, 'index.html');
  fs.writeFileSync(scratchFile, fullHtml, 'utf8');
  console.log('Saved to scratch:', scratchFile);

  // Write to artifact directory
  const artifactFile = path.join(artifactDir, 'farmcast_mockup.html');
  fs.writeFileSync(artifactFile, fullHtml, 'utf8');
  console.log('Saved to artifact:', artifactFile);
}

buildHtml();
